// 一键打包脚本：修改源码后运行  node pack.js
// 输出到 rpks/com.yiyun.aiwatch.debug.<版本>.rpk
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const JSZip = require('jszip');
process.env.NODE_PATH = 'E:/Hermes/vela-quote/node_modules';
require('module').Module._initPaths();
const ZipUtil = require('E:/Hermes/vela-quote/node_modules/@aiot-toolkit/aiotpack/lib/compiler/javascript/vela/utils/ZipUtil.js').default;

const BASE = __dirname;
const DIST = path.join(BASE, 'dist');

function buildCert(dist) {
  const files = [];
  (function walk(d) {
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else files.push(path.relative(dist, p).replace(/\\\\/g, '/'));
    }
  })(dist);
  const prio = n => {
    if (n === 'META-INF/CERT') return 0;
    if (/^i18n\\/.+\\.json$/i.test(n)) return 1;
    if (/^manifest-\\w+\\.json$/i.test(n)) return 2;
    if (n === 'manifest.json') return 3;
    if (n === 'app.js') return 4;
    if (/^pages\\/Home\\//.test(n)) return 5;
    if (n.startsWith('common/')) return 6;
    return 9;
  };
  files.sort((a, b) => prio(a) - prio(b) || (a < b ? -1 : 1));
  const digests = {};
  for (const n of files) {
    if (n === 'META-INF/CERT') continue;
    digests[n] = crypto.createHash('sha256').update(fs.readFileSync(path.join(dist, ...n.split('/')))).digest('hex');
  }
  return JSZip.loadAsync(Buffer.from(JSON.stringify({ algorithm: 'SHA-256', digests }), 'utf8'))
    .then(zip => zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 9 }, comment: null }));
}

(async () => {
  const certBuf = await buildCert(DIST);
  fs.mkdirSync(path.join(DIST, 'META-INF'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'META-INF', 'CERT'), certBuf);
  const param = { mode: 'development', projectPath: BASE, sourceRoot: 'src', outputPath: 'dist', releasePath: 'rpks' };
  const fileName = await ZipUtil.createRpk(DIST, param);
  console.log('打包完成:', fileName);
})().catch(e => { console.error('失败:', e.message); process.exit(1); });
