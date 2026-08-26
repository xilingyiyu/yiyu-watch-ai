export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/common/components/tabbar.ux" (module, __unused_rspack_exports, __webpack_require__) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "tabbar"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    height: "64px",
                                    flexDirection: "row",
                                    backgroundColor: "#111111",
                                    borderTopWidth: "1px",
                                    borderTopColor: "#222222"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "tab"
                                    ]
                                ],
                                {
                                    flex: 1,
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "tab-icon"
                                    ]
                                ],
                                {
                                    width: "26px",
                                    height: "26px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "tab-text"
                                    ]
                                ],
                                {
                                    fontSize: "16px",
                                    marginTop: "2px"
                                }
                            ]
                        ];
                        var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                            "use strict";
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.default = void 0;
                            var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                            function _interopRequireDefault(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var _default = exports.default = {
                                props: {
                                    active: {
                                        default: 'home'
                                    },
                                    activeColor: {
                                        default: '#4E8EF7'
                                    }
                                },
                                data: {
                                    tabs: [
                                        {
                                            key: 'home',
                                            label: '对话',
                                            icon: '/common/images/icon_chat.jpg'
                                        },
                                        {
                                            key: 'history',
                                            label: '历史',
                                            icon: '/common/images/icon_history.jpg'
                                        },
                                        {
                                            key: 'settings',
                                            label: '设置',
                                            icon: '/common/images/icon_settings.jpg'
                                        },
                                        {
                                            key: 'about',
                                            label: '关于',
                                            icon: '/common/images/icon_about.jpg'
                                        }
                                    ]
                                },
                                onTab: function(key) {
                                    if (key === this.active) return;
                                    var map = {
                                        home: '/pages/Home',
                                        history: '/pages/History',
                                        settings: '/pages/Settings',
                                        about: '/pages/About'
                                    };
                                    _system.default.replace({
                                        uri: map[key]
                                    });
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "tabbar"
                                    ]
                                }
                            }, [
                                aiot.__cf__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        exp: function() {
                                            return {
                                                __list__: _vm_.tabs,
                                                __tid__: "key"
                                            };
                                        },
                                        key: "$idx",
                                        value: "$item"
                                    }
                                }, function($idx, $item) {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "tab"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onTab($item.key, evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "tab-icon"
                                                    ],
                                                    src: function() {
                                                        return $item.icon;
                                                    },
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$("opacity: " + ($item.key === _vm_.active ? 1 : 0.4));
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "tab-text"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$("color: " + ($item.key === _vm_.active ? _vm_.activeColor : "#888888"));
                                                    },
                                                    value: function() {
                                                        return $item.label;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                })
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
                        };
                    },
                    "./src/common/scripts/ai.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.fetch"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function extractThinkTags(text) {
                            if (!text) return {
                                thinking: '',
                                content: ''
                            };
                            var t = String(text);
                            var thinkStart = t.indexOf(' thinking');
                            var thinkEnd = t.indexOf(' response');
                            if (-1 !== thinkStart && -1 !== thinkEnd && thinkEnd > thinkStart) {
                                var thinking = t.substring(thinkStart + 7, thinkEnd);
                                var before = t.substring(0, thinkStart);
                                var after = t.substring(thinkEnd + 8);
                                return {
                                    thinking: thinking.trim(),
                                    content: (before + after).trim()
                                };
                            }
                            return {
                                thinking: '',
                                content: t
                            };
                        }
                        var _default = exports["default"] = {
                            chat: function(opts) {
                                var settings = opts.settings || {};
                                var messages = opts.messages || [];
                                if (!settings.apiUrl) {
                                    var e1 = '未配置 API 地址';
                                    if (opts.success) opts.success({
                                        content: e1,
                                        thinking: ''
                                    });
                                    if (opts.fail) opts.fail(e1, 202);
                                    return;
                                }
                                if (!settings.apiKey) {
                                    var e2 = '未配置 API Key';
                                    if (opts.success) opts.success({
                                        content: e2,
                                        thinking: ''
                                    });
                                    if (opts.fail) opts.fail(e2, 202);
                                    return;
                                }
                                var apiUrl = settings.apiUrl;
                                if (apiUrl && apiUrl.indexOf('api.deepseek.com') >= 0 && apiUrl.indexOf('/responses') < 0) {
                                    apiUrl = 'https://api.deepseek.com/responses';
                                }
                                var isRespUrl = apiUrl && apiUrl.indexOf('/responses') >= 0;
var sendMsgs = messages;
if (isRespUrl) {
    sendMsgs = [];
    for (var si = 0; si < messages.length; si++) sendMsgs.push(messages[si]);
    var seTip = '（必须联网搜索后再回答；最多搜索2次，找到答案就立刻回答，禁止反复搜索）';
    var sysHit = false;
    for (var sj = 0; sj < sendMsgs.length; sj++) if (sendMsgs[sj].role === 'system') {
        sendMsgs[sj] = { role: 'system', content: sendMsgs[sj].content + seTip };
        sysHit = true; break;
    }
    if (!sysHit) sendMsgs.unshift({ role: 'system', content: seTip });
}
                                    var body = isRespUrl ? {
                                        input: sendMsgs,
                                        tools: [{ type: 'web_search' }],
                                    tool_choice: { type: 'web_search' }
                                    } : {
                                        messages: messages
                                    };
                                if (settings.model) body.model = settings.model;
                                var bodyStr = JSON.stringify(body);
                                _system.default.fetch({
                                    url: apiUrl,
                                    method: 'POST',
                                    header: {
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer ' + settings.apiKey
                                    },
                                    data: bodyStr,
                                    responseType: 'text',
                                    success: function(res) {
                                        var raw = '';
                                        if (res && res.data) raw = String(res.data);
                                        var content = '';
                                        var thinking = '';
                                        try {
                                            var obj = JSON.parse(raw);
                                            if (obj && obj.error) {
                                                var errStr = '';
                                                try {
                                                    errStr = JSON.stringify(obj, null, 2);
                                                } catch (e) {
                                                    errStr = String(raw);
                                                }
                                                content = 'API 返回错误:\n' + errStr;
                                                if (opts.success) opts.success({
                                                    content: content,
                                                    thinking: ''
                                                });
                                                if (opts.fail) opts.fail(content, 0);
                                                return;
                                            }
                                            if (obj && obj.output && obj.output.length) {
                                                var parts = [];
                                                var thinkParts = [];
                                                for (var oi = 0; oi < obj.output.length; oi++) {
                                                    var item = obj.output[oi];
                                                    if (!item || !item.content) continue;
                                                    if (item.type === 'message') {
                                                        for (var ci = 0; ci < item.content.length; ci++) {
                                                            var cp = item.content[ci];
                                                            if (cp && cp.text) parts.push(cp.text);
                                                        }
                                                    } else if (item.type === 'reasoning') {
                                                        for (var ri = 0; ri < item.content.length; ri++) {
                                                            var rp = item.content[ri];
                                                            if (rp && rp.text) thinkParts.push(rp.text);
                                                        }
                                                    }
                                                }
                                                if (parts.length) {
                                                    thinking = thinkParts.join('\n');
                                                    content = parts.join('\n');
                                                    var tagResult = extractThinkTags(content);
                                                    if (tagResult.thinking) {
                                                        thinking = thinking ? thinking + '\n' + tagResult.thinking : tagResult.thinking;
                                                        content = tagResult.content;
                                                    }
                                                } else content = raw;
                                            } else if (obj && obj.choices && obj.choices[0] && obj.choices[0].message) {
                                                var msg = obj.choices[0].message;
                                                if (msg.reasoning_content) thinking = String(msg.reasoning_content);
                                                content = null != msg.content ? String(msg.content) : '';
                                                var tagResult = extractThinkTags(content);
                                                if (tagResult.thinking) {
                                                    thinking = thinking ? thinking + '\n' + tagResult.thinking : tagResult.thinking;
                                                    content = tagResult.content;
                                                }
                                            } else content = raw;
                                        } catch (e) {
                                            content = raw;
                                        }
                                        if (opts.success) opts.success({
                                            content: content,
                                            thinking: thinking
                                        });
                                    },
                                    fail: function(data, code) {
                                        var errData = '';
                                        try {
                                            errData = JSON.stringify(data);
                                        } catch (e) {
                                            errData = String(data || '');
                                        }
                                        var errMsg = '网络请求失败 [code=' + String(code) + ']\n' + errData; if (204 === code) errMsg = '搜索超时了，再问一次试试\n' + errData;
                                        if (opts.success) opts.success({
                                            content: errMsg,
                                            thinking: ''
                                        });
                                        if (opts.fail) opts.fail(errMsg, code);
                                    }
                                });
                            }
                        };
                    },
                    "./src/common/scripts/store.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var KEY_SETTINGS = 'ai_settings';
                        var KEY_CONVERSATIONS = 'ai_conversations';
                        var KEY_CURRENT = 'ai_current_conv';
                        function parse(str, fallback) {
                            if (!str) return fallback;
                            try {
                                return JSON.parse(str);
                            } catch (e) {
                                return fallback;
                            }
                        }
                        var _default = exports["default"] = {
                            getSettings: function(cb) {
                                _system.default.get({
                                    key: KEY_SETTINGS,
                                    success: function(data) {
                                        cb(parse(data, null));
                                    },
                                    fail: function() {
                                        cb(null);
                                    }
                                });
                            },
                            saveSettings: function(settings, cb) {
                                _system.default.set({
                                    key: KEY_SETTINGS,
                                    value: JSON.stringify(settings),
                                    success: function() {
                                        cb && cb();
                                    },
                                    fail: function() {
                                        cb && cb();
                                    }
                                });
                            },
                            getConversations: function(cb) {
                                _system.default.get({
                                    key: KEY_CONVERSATIONS,
                                    success: function(data) {
                                        cb(parse(data, []));
                                    },
                                    fail: function() {
                                        cb([]);
                                    }
                                });
                            },
                            saveConversations: function(list, cb) {
                                _system.default.set({
                                    key: KEY_CONVERSATIONS,
                                    value: JSON.stringify(list),
                                    success: function() {
                                        cb && cb();
                                    },
                                    fail: function() {
                                        cb && cb();
                                    }
                                });
                            },
                            upsertConversation: function(conv, cb) {
                                var self = this;
                                this.getConversations(function(list) {
                                    var exist = false;
                                    for(var i = 0; i < list.length; i++)if (list[i].id === conv.id) {
                                        list[i] = conv;
                                        exist = true;
                                        break;
                                    }
                                    if (!exist) list.push(conv);
                                    self.saveConversations(list, cb);
                                });
                            },
                            deleteConversation: function(id, cb) {
                                var self = this;
                                this.getConversations(function(list) {
                                    var next = [];
                                    for(var i = 0; i < list.length; i++)if (list[i].id !== id) next.push(list[i]);
                                    self.saveConversations(next, cb);
                                });
                            },
                            clearConversations: function(cb) {
                                this.saveConversations([], cb);
                            },
                            getConversation: function(id, cb) {
                                this.getConversations(function(list) {
                                    var found = null;
                                    for(var i = 0; i < list.length; i++)if (list[i].id === id) {
                                        found = list[i];
                                        break;
                                    }
                                    cb(found);
                                });
                            },
                            getCurrentConvId: function(cb) {
                                _system.default.get({
                                    key: KEY_CURRENT,
                                    success: function(data) {
                                        cb(data || '');
                                    },
                                    fail: function() {
                                        cb('');
                                    }
                                });
                            },
                            setCurrentConvId: function(id, cb) {
                                _system.default.set({
                                    key: KEY_CURRENT,
                                    value: id || '',
                                    success: function() {
                                        cb && cb();
                                    },
                                    fail: function() {
                                        cb && cb();
                                    }
                                });
                            }
                        };
                    },
                    "./src/common/scripts/util.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var DEFAULTS = {
                            apiUrl: 'https://api.deepseek.com/responses',
                            apiKey: '',
                            model: 'deepseek-v4-flash'
                        };
                        var VERSION = '1.0.3';
                        var APP_NAME = '呓语环间AI';
                        var _default = exports["default"] = {
                            VERSION: VERSION,
                            APP_NAME: APP_NAME,
                            DEFAULTS: DEFAULTS,
                            genId: function() {
                                return '' + Date.now() + Math.floor(1000 * Math.random());
                            },
                            pad: function(n) {
                                return n < 10 ? '0' + n : '' + n;
                            },
                            formatTime: function(ts) {
                                var d = new Date(ts);
                                return d.getFullYear() + '-' + this.pad(d.getMonth() + 1) + '-' + this.pad(d.getDate()) + ' ' + this.pad(d.getHours()) + ':' + this.pad(d.getMinutes());
                            },
                            formatShort: function(ts) {
                                var d = new Date(ts);
                                return this.pad(d.getMonth() + 1) + '-' + this.pad(d.getDate()) + ' ' + this.pad(d.getHours()) + ':' + this.pad(d.getMinutes());
                            },
                            maskKey: function(key) {
                                if (!key) return '未设置';
                                if (key === DEFAULTS.apiKey) return '已设置（默认）';
                                if (key.length <= 8) return '****';
                                return key.slice(0, 4) + '****' + key.slice(-4);
                            },
                            DEFAULTS: DEFAULTS,
                            isDefaultKey: function(key) {
                                return DEFAULTS.apiKey && key === DEFAULTS.apiKey;
                            },
                            fontSizePx: function(size) {
                                if ('small' === size) return 22;
                                if ('large' === size) return 30;
                                return 26;
                            },
                            preview: function(text, n) {
                                var s = (text || '').replace(/\s+/g, ' ').trim();
                                return s.length > n ? s.slice(0, n) + '…' : s;
                            }
                        };
                    },
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.yiyun.aiwatch","name":"呓语环间AI","icon":"/common/images/图标.png","versionName":"1.0.3","versionCode":31,"minPlatformVersion":1200,"simulationVersion":"default","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"system.prompt"},{"name":"system.vibrator"},{"name":"system.device"},{"name":"system.interconnect"}],"config":{"logLevel":"log","designWidth":336},"router":{"entry":"pages/Home","pages":{"pages/Home":{"component":"home"},"pages/History":{"component":"history"},"pages/Settings":{"component":"settings"},"pages/About":{"component":"about"},"pages/Input":{"component":"editor"},"pages/Think":{"component":"think"}}}}');
                    }
                };
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    $app_exports$['tabbar'] = __webpack_require__("./src/common/components/tabbar.ux");
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _store = _interopRequireDefault(__webpack_require__("./src/common/scripts/store.js"));
                        var _util = _interopRequireDefault(__webpack_require__("./src/common/scripts/util.js"));
                        var _ai = _interopRequireDefault(__webpack_require__("./src/common/scripts/ai.js"));
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.interconnect"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function merge(a, b) {
                            var out = {};
                            for(var k in a)if (a.hasOwnProperty(k)) out[k] = a[k];
                            for(var k in b)if (b.hasOwnProperty(k)) out[k] = b[k];
                            return out;
                        }
                        var connect = _system.default.instance();
                        var appInstance = null;
                        connect.onconnectionstatechanged = function(state) {
                            console.log('interconnect state changed: ' + JSON.stringify(state));
                        };
                        connect.onmessage = function(raw) {
                            console.log('interconnect message received: ' + JSON.stringify(raw));
                            if (!appInstance) return void console.error('appInstance not ready, cannot process message');
                            try {
                                var msgStr = 'string' == typeof raw ? raw : raw.data || raw;
                                var msg = 'string' == typeof msgStr ? JSON.parse(msgStr) : msgStr;
                                console.log('parsed interconnect message: ' + JSON.stringify(msg));
                                if ('setConfig' === msg.method && msg.params) {
                                    if (msg.params.apiUrl) appInstance.settings.apiUrl = msg.params.apiUrl;
                                    if (msg.params.apiKey) appInstance.settings.apiKey = msg.params.apiKey;
                                    if (msg.params.model) appInstance.settings.model = msg.params.model;
                                    _store.default.saveSettings(appInstance.settings, function() {
                                        console.log('Settings saved, sending configSaved reply');
                                        connect.send({
                                            data: JSON.stringify({
                                                method: 'configSaved',
                                                params: {
                                                    success: true
                                                }
                                            }),
                                            success: function() {
                                                console.log('configSaved reply sent successfully');
                                                _system2.default.replace({
                                                    uri: '/pages/Settings',
                                                    params: {
                                                        _t: Date.now()
                                                    }
                                                });
                                            },
                                            fail: function(err, code) {
                                                console.error('configSaved reply failed: ' + err + ', code=' + code);
                                                _system2.default.replace({
                                                    uri: '/pages/Settings',
                                                    params: {
                                                        _t: Date.now()
                                                    }
                                                });
                                            }
                                        });
                                    });
                                }
                            } catch (e) {
                                console.error('interconnect parse error: ' + e);
                            }
                        };
                        var _default = exports.default = {
                            manifest: {
                                name: _util.default.APP_NAME,
                                versionName: _util.default.VERSION
                            },
                            settings: {
                                apiUrl: _util.default.DEFAULTS.apiUrl,
                                apiKey: _util.default.DEFAULTS.apiKey,
                                model: _util.default.DEFAULTS.model,
                                systemPrompt: '请说中文，并预防用户可能出现的错别字',
                                accentColor: '#4E8EF7',
                                fontSize: 'medium',
                                showTimestamps: false,
                                autoRedirectSettings: false,
                                showThinking: false,
                                newUI: true
                            },
                            pendingAction: null,
                            thinkContent: null,
                            onCreate: function() {
                                appInstance = this;
                                var that = this;
                                _store.default.getSettings(function(s) {
                                    if (s) {
                                        that.settings = merge(that.settings, s);
                                        if ('You are a helpful assistant.' === s.systemPrompt) {
                                            that.settings.systemPrompt = '请说中文，并预防用户可能出现的错别字';
                                            _store.default.saveSettings(that.settings, null);
                                        }
                                    }
                                });
                                _store.default.setCurrentConvId('', null);
                                connect.getReadyState({
                                    success: function(res) {
                                        console.log('interconnect ready state: status=' + res.status);
                                    },
                                    fail: function(err, code) {
                                        console.error('getReadyState failed: ' + err + ', code=' + code);
                                    }
                                });
                            },
                            onShow: function() {
                                appInstance = this;
                                console.log('app onShow, connect ready');
                            },
                            store: _store.default,
                            util: _util.default,
                            ai: _ai.default
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
