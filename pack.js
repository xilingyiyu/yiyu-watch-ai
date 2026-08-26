// 一键打包脚本：修改源码后运行  node pack.js
// 前置：npm install @aiot-toolkit/aiotpack@2.0.5 jszip
// 产物：rpks/com.yiyun.aiwatch.debug.<版本>.rpk
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const JSZip = require('jszip');
const ZipUtil = require('@aiot-toolkit/aiotpack/lib/compiler/javascript/vela/utils/ZipUtil.js').default;

const BASE = __dirname;
const DIST = path.join(BASE, 'dist');

/**
 * 生成 META-INF/CERT：一个内含 hash.json 的 zip 压缩包
 * hash.json 覆盖除 CERT 外的全部文件（SHA-256），键序 = 打包器要求的条目顺序
 */
async function buildCert(dist) {
  const files = [];
  (function walk(d) {
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else files.push(path.relative(dist, p).replace(/\\/g, '/'));
    }
  })(dist);

  const prio = n => {
    if (n === 'META-INF/CERT') return 0;
    if (/^i18n\/.+\.json$/i.test(n)) return 1;
    if (/^manifest-\w+\.json$/i.test(n)) return 2;
    if (n === 'manifest.json') return 3;
    if (n === 'app.js') return 4;
    if (/^pages\/Home\//.test(n)) return 5;
    if (n.startsWith('common/')) return 6;
    return 9;
  };
  files.sort((a, b) => prio(a) - prio(b) || (a < b ? -1 : 1));

  const digests = {};
  for (const n of files) {
    if (n === 'META-INF/CERT') continue;
    digests[n] = crypto.createHash('sha256').update(fs.readFileSync(path.join(dist, ...n.split('/')))).digest('hex');
  }

  // 新建 zip 写入 hash.json（不能对 JSON 用 loadAsync）
  const zip = new JSZip();
  zip.file('hash.json', JSON.stringify({ algorithm: 'SHA-256', digests }));
  return zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 9 }, comment: null });
}

(async () => {
  const certBuf = await buildCert(DIST);
  fs.mkdirSync(path.join(DIST, 'META-INF'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'META-INF', 'CERT'), certBuf);

  // sourceRoot 指向 dist（manifest.json 所在目录），outputPath 同 dist
  const param = { mode: 'development', projectPath: BASE, sourceRoot: 'dist', outputPath: 'dist', releasePath: 'rpks' };
  const fileName = await ZipUtil.createRpk(DIST, param);
  console.log('打包完成:', fileName);
})().catch(e => { console.error('失败:', e.message); process.exit(1); });
