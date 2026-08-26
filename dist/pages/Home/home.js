export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
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
                    var $app_style$ = [
                        [
                            [
                                [
                                    0,
                                    "root"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "100%",
                                flexDirection: "column"
                            }
                        ],
                            [
                                { condition: "screen and (shape:circle)" },
                                [ [ 0, "root" ] ],
                                { paddingTop: "52px", paddingBottom: "56px", paddingLeft: "52px", paddingRight: "52px" }
                            ],

                        [
                            [
                                [
                                    0,
                                    "page-new"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#000000",
                                position: "relative",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chat-list-new"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "scroll-top-spacer"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "82px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "gradient-mask"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "336px",
                                height: "102px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "header-new"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "77px",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingLeft: "5px",
                                paddingRight: "5px",
                                paddingTop: "5px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "header-btn-new"
                                ]
                            ],
                            {
                                width: "72px",
                                height: "72px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "header-title-new"
                                ]
                            ],
                            {
                                flex: 1,
                                fontSize: "20px",
                                color: "#eeeeee",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "msg-item-new"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "column",
                                paddingTop: "8px",
                                paddingRight: "14px",
                                paddingBottom: "8px",
                                paddingLeft: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ai-msg-new"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "flex-start",
                                width: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ai-avatar-new"
                                ]
                            ],
                            {
                                width: "42px",
                                height: "42px",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "thinking-link-new"
                                ]
                            ],
                            {
                                fontSize: "13px",
                                color: "#7ba7ec",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ai-text-new"
                                ]
                            ],
                            {
                                color: "#eeeeee",
                                width: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "user-msg-new"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "flex-end",
                                width: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "user-text-new"
                                ]
                            ],
                            {
                                color: "#eeeeee",
                                width: "100%",
                                textAlign: "right"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "system-msg-new"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "system-text-new"
                                ]
                            ],
                            {
                                color: "#ff9500",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "loading-text-new"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#888888"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "scroll-bottom-spacer"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "90px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "footer-new"
                                ]
                            ],
                            {
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                                height: "77px",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                paddingRight: "5px",
                                paddingBottom: "5px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "expand-btn-new"
                                ]
                            ],
                            {
                                width: "72px",
                                height: "72px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "page"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#000000"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "header"
                                ]
                            ],
                            {
                                height: "44px",
                                flexDirection: "row",
                                alignItems: "center",
                                paddingLeft: "12px",
                                paddingRight: "8px",
                                borderBottomWidth: "1px",
                                borderBottomColor: "#1c1c1c"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "title"
                                ]
                            ],
                            {
                                flex: 1,
                                fontSize: "20px",
                                color: "#eeeeee"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hbtn"
                                ]
                            ],
                            {
                                width: "24px",
                                height: "24px",
                                marginRight: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "chat-list"
                                ]
                            ],
                            {
                                flex: 1,
                                width: "100%",
                                backgroundColor: "#000000",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "row"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "column",
                                paddingTop: "6px",
                                paddingRight: "10px",
                                paddingBottom: "6px",
                                paddingLeft: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "wrap"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "row"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "wrap-user"
                                ]
                            ],
                            {
                                justifyContent: "flex-end"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "wrap-ai"
                                ]
                            ],
                            {
                                justifyContent: "flex-start"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bubble"
                                ]
                            ],
                            {
                                maxWidth: "82%",
                                paddingTop: "8px",
                                paddingRight: "10px",
                                paddingBottom: "8px",
                                paddingLeft: "10px",
                                borderRadius: "12px",
                                marginTop: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "user"
                                ]
                            ],
                            {}
                        ],
                        [
                            [
                                [
                                    0,
                                    "ai"
                                ]
                            ],
                            {
                                backgroundColor: "#1e1e1e"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bubble-text"
                                ]
                            ],
                            {
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "user-text"
                                ]
                            ],
                            {
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "wrap-system"
                                ]
                            ],
                            {
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "system-bubble"
                                ]
                            ],
                            {
                                backgroundColor: "#2a1f1a",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderTopColor: "#ff9500",
                                borderRightColor: "#ff9500",
                                borderBottomColor: "#ff9500",
                                borderLeftColor: "#ff9500"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "system-text"
                                ]
                            ],
                            {
                                color: "#ff9500"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ts"
                                ]
                            ],
                            {
                                fontSize: "12px",
                                color: "#666666",
                                marginTop: "2px",
                                marginLeft: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "footer"
                                ]
                            ],
                            {
                                height: "52px",
                                flexDirection: "row",
                                alignItems: "center",
                                paddingTop: "0",
                                paddingRight: "8px",
                                paddingBottom: "0",
                                paddingLeft: "8px",
                                borderTopWidth: "1px",
                                borderTopColor: "#1c1c1c",
                                backgroundColor: "#0a0a0a"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-bar"
                                ]
                            ],
                            {
                                flex: 1,
                                height: "38px",
                                borderRadius: "19px",
                                backgroundColor: "#1a1a1a",
                                justifyContent: "center",
                                paddingLeft: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-hint"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#888888"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "send-btn"
                                ]
                            ],
                            {
                                width: "34px",
                                height: "34px",
                                marginLeft: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ai-block"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                maxWidth: "82%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "thinking-bubble"
                                ]
                            ],
                            {
                                backgroundColor: "#16233a",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderTopColor: "#2b4a7a",
                                borderRightColor: "#2b4a7a",
                                borderBottomColor: "#2b4a7a",
                                borderLeftColor: "#2b4a7a",
                                borderRadius: "12px",
                                paddingTop: "8px",
                                paddingRight: "10px",
                                paddingBottom: "8px",
                                paddingLeft: "10px",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "thinking-head"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "thinking-label"
                                ]
                            ],
                            {
                                fontSize: "13px",
                                color: "#7ba7ec",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "loading-label"
                                ]
                            ],
                            {
                                fontSize: "13px",
                                color: "#7ba7ec"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "thinking-text"
                                ]
                            ],
                            {
                                color: "#b9c8e0"
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
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _store = _interopRequireDefault(__webpack_require__("./src/common/scripts/store.js"));
                        var _util = _interopRequireDefault(__webpack_require__("./src/common/scripts/util.js"));
                        var _ai = _interopRequireDefault(__webpack_require__("./src/common/scripts/ai.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            private: {
                                messages: [],
                                convId: '',
                                convTitle: '',
                                loading: false,
                                accent: '#4E8EF7',
                                fontSizePx: 26,
                                showTs: false,
                                showThinking: false,
                                newUI: true,
                                scrollTopVal: 0
                            },
                            onInit: function() {
                                this.applySettings();
                            },
                            onShow: function() {
                                var app = this.$app.$def;
                                var self = this;
                                this.applySettings();
                                if (app.pendingAction && 'message' === app.pendingAction.type) {
                                    var text = app.pendingAction.text;
                                    app.pendingAction = null;
                                    this.loadCurrentConv(function() {
                                        self.sendMessage(text);
                                    });
                                    return;
                                }
                                if (!this._loaded) {
                                    this._loaded = true;
                                    this.loadCurrentConv(null);
                                }
                            },
                            applySettings: function(cb) {
                                var self = this;
                                var s = this.$app.$def.settings;
                                var a = s.accentColor || '#4E8EF7';
                                var f = _util.default.fontSizePx(s.fontSize);
                                var ts = !!s.showTimestamps;
                                var st = !!s.showThinking;
                                var nu = true;
                                if (a !== this.accent) this.accent = a;
                                if (f !== this.fontSizePx) this.fontSizePx = f;
                                if (ts !== this.showTs) this.showTs = ts;
                                if (st !== this.showThinking) this.showThinking = st;
                                if (nu !== this.newUI && nu) this.newUI = nu;
                                _store.default.getSettings(function(stored) {
                                    if (stored) {
                                        var a2 = stored.accentColor || self.accent;
                                        var f2 = _util.default.fontSizePx(stored.fontSize || s.fontSize);
                                        var ts2 = void 0 !== stored.showTimestamps ? !!stored.showTimestamps : self.showTs;
                                        var st2 = void 0 !== stored.showThinking ? !!stored.showThinking : self.showThinking;
                                        var nu2 = self.newUI;
                                        if (a2 !== self.accent) self.accent = a2;
                                        if (f2 !== self.fontSizePx) self.fontSizePx = f2;
                                        if (ts2 !== self.showTs) self.showTs = ts2;
                                        if (st2 !== self.showThinking) self.showThinking = st2;
                                        if (nu2 !== self.newUI && nu2) self.newUI = nu2;
                                    }
                                    cb && cb();
                                });
                            },
                            loadCurrentConv: function(cb) {
                                var self = this;
                                _store.default.getCurrentConvId(function(id) {
                                    self.convId = id || '';
                                    if (!id) {
                                        self.messages = [];
                                        self.convTitle = '';
                                        cb && cb();
                                        return;
                                    }
                                    _store.default.getConversation(id, function(conv) {
                                        if (conv) {
                                            self.messages = conv.messages || [];
                                            self.convTitle = conv.title || '';
                                            setTimeout(function() {
                                                self.scrollEnd();
                                            }, 150);
                                        } else {
                                            self.messages = [];
                                            self.convTitle = '';
                                        }
                                        cb && cb();
                                    });
                                });
                            },
                            sendMessage: function(text) {
                                var content = (text || '').trim();
                                if (!content || this.loading) return;
                                var s = this.$app.$def.settings;
                                if (!s.apiUrl || !s.apiKey) {
                                    _system2.default.showToast({
                                        message: '请先在设置中配置 API 地址和 Key'
                                    });
                                    var now = Date.now();
                                    var userMsg2 = {
                                        id: _util.default.genId(),
                                        role: 'user',
                                        content: content,
                                        ts: now,
                                        tsText: _util.default.formatTime(now)
                                    };
                                    var sysMsg = {
                                        id: _util.default.genId(),
                                        role: 'system',
                                        content: '请先在「设置」中配置 API 地址和 Key 后再发送消息',
                                        ts: now + 1,
                                        tsText: _util.default.formatTime(now + 1)
                                    };
                                    if (!this.convId) {
                                        this.convId = _util.default.genId();
                                        this.convTitle = _util.default.formatTime(now);
                                        _store.default.setCurrentConvId(this.convId);
                                    }
                                    this.messages = this.messages.concat([
                                        userMsg2,
                                        sysMsg
                                    ]);
                                    var self2 = this;
                                    setTimeout(function() {
                                        self2.scrollEnd();
                                    }, 150);
                                    this.saveCurrent();
                                    if (s.autoRedirectSettings) setTimeout(function() {
                                        _system.default.replace({
                                            uri: '/pages/Settings'
                                        });
                                    }, 800);
                                    return;
                                }
                                if (!this.convId) {
                                    this.convId = _util.default.genId();
                                    this.convTitle = _util.default.formatTime(Date.now());
                                    _store.default.setCurrentConvId(this.convId);
                                }
                                var now = Date.now();
                                var userMsg = {
                                    id: _util.default.genId(),
                                    role: 'user',
                                    content: content,
                                    ts: now,
                                    tsText: _util.default.formatTime(now)
                                };
                                var self = this;
                                this.messages = this.messages.concat([
                                    userMsg
                                ]);
                                this.loading = true;
                                setTimeout(function() {
                                    self.scrollEnd();
                                }, 150);
                                this.saveCurrent();
                                var reqMessages = [];
                                if (s.systemPrompt) reqMessages.push({
                                    role: 'system',
                                    content: s.systemPrompt
                                });
                                for(var i = 0; i < this.messages.length; i++){
                                    var m = this.messages[i];
                                    if ('user' === m.role || 'assistant' === m.role) reqMessages.push({
                                        role: m.role,
                                        content: m.content
                                    });
                                }
                                _ai.default.chat({
                                    settings: s,
                                    messages: reqMessages,
                                    success: function(result) {
                                        if (!self.$valid) return;
                                        self.loading = false;
                                        var t = Date.now();
                                        var reply = result && void 0 !== result.content ? result.content : result;
                                        var thinking = result && result.thinking ? result.thinking : '';
                                        if (reply && (0 === reply.indexOf('API 返回错误') || 0 === reply.indexOf('网络请求失败'))) _system2.default.showToast({
                                            message: '请求出错，详见对话'
                                        });
                                        var aMsg = {
                                            id: _util.default.genId(),
                                            role: 'assistant',
                                            content: reply || '(空回复)',
                                            thinking: thinking.slice(0, 1200),
                                            ts: t,
                                            tsText: _util.default.formatTime(t)
                                        };
                                        self.messages = self.messages.concat([
                                            aMsg
                                        ]);
                                        setTimeout(function() {
                                            self.scrollEnd();
                                        }, 150);
                                        self.saveCurrent();
                                    },
                                    fail: function(msg, code) {
                                        if (!self.$valid) return;
                                        self.loading = false;
                                        _system2.default.showToast({
                                            message: '请求失败: ' + (msg || code)
                                        });
                                        var t = Date.now();
                                        var errContent = '请求失败 [code=' + code + ']\n' + (msg || '');
                                        var aMsg = {
                                            id: _util.default.genId(),
                                            role: 'assistant',
                                            content: errContent,
                                            thinking: '',
                                            ts: t,
                                            tsText: _util.default.formatTime(t)
                                        };
                                        self.messages = self.messages.concat([
                                            aMsg
                                        ]);
                                        setTimeout(function() {
                                            self.scrollEnd();
                                        }, 150);
                                        self.saveCurrent();
                                    }
                                });
                            },
                            saveCurrent: function() {
                                if (!this.convId) return;
                                var conv = {
                                    id: this.convId,
                                    title: this.convTitle,
                                    ts: Date.now(),
                                    messages: this.messages
                                };
                                if (conv.messages && conv.messages.length > 20) {
                                    conv.messages = conv.messages.slice(conv.messages.length - 20);
                                }
                                _store.default.upsertConversation(conv, null);
                            },
                            scrollEnd: function() {
                                this.scrollTopVal = 99999 + ((this._stCount || 0) + 1);
                                this._stCount = (this._stCount || 0) + 1;
                            },
                            newChat: function() {
                                this.messages = [];
                                this.convId = '';
                                this.convTitle = '';
                                this._loaded = false;
                                _store.default.setCurrentConvId('', null);
                                _system2.default.showToast({
                                    message: '新对话'
                                });
                            },
                            viewThink: function(idx) {
                                var msg = this.messages[idx];
                                if (msg && msg.thinking) {
                                    this.$app.$def.thinkContent = msg.thinking;
                                    _system.default.push({
                                        uri: '/pages/Think'
                                    });
                                }
                            },
                            goInput: function() {
                                if (this.loading) return;
                                _system.default.push({
                                    uri: '/pages/Input',
                                    params: {
                                        mode: 'message',
                                        title: '输入消息'
                                    }
                                });
                            },
                            goHistory: function() {
                                _system.default.push({
                                    uri: '/pages/History'
                                });
                            },
                            onBackPress: function() {
                                return false;
                            }
                        };
                        const moduleOwn = exports.default || module.exports;
                        const accessors = [
                            'public',
                            'protected',
                            'private'
                        ];
                        if (moduleOwn.data && accessors.some(function(acc) {
                            return moduleOwn[acc];
                        })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                        if (!moduleOwn.data) {
                            moduleOwn.data = {};
                            moduleOwn._descriptor = {};
                            accessors.forEach(function(acc) {
                                const accType = typeof moduleOwn[acc];
                                if ('object' === accType) {
                                    moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                    for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                        access: acc
                                    };
                                } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                            });
                        }
                    };
                    var $app_template$ = function(vm) {
                        const _vm_ = vm || this;
                        return aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "root"
                                ]
                            }
                        }, [
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.newUI;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "page-new"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("scroll", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "chat-list-new"
                                                ],
                                                id: "chatListNew",
                                                scrollY: "true",
                                                scrollTop: function() {
                                                    return _vm_.scrollTopVal;
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "scroll-top-spacer"
                                                    ]
                                                }
                                            }, []),
                                            aiot.__cf__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    exp: function() {
                                                        return {
                                                            __list__: _vm_.messages,
                                                            __tid__: "id"
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
                                                                "msg-item-new"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return "assistant" === $item.role;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "ai-msg-new"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "ai-avatar-new"
                                                                            ],
                                                                            src: "/common/images/AI头像_图片.png"
                                                                        }
                                                                    }, []),
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            show: function() {
                                                                                return _vm_.showThinking && $item.thinking;
                                                                            },
                                                                            classList: [
                                                                                "thinking-link-new"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.viewThink($idx, evt);
                                                                                }
                                                                            },
                                                                            value: "思考过程"
                                                                        }
                                                                    }, []),
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "ai-text-new"
                                                                            ],
                                                                            style: function() {
                                                                                return __webpack_require__.g.$translateStyle$("font-size: " + _vm_.fontSizePx + "px");
                                                                            },
                                                                            value: function() {
                                                                                return $item.content;
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ])
                                                            ];
                                                        }),
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return "assistant" !== $item.role && "user" === $item.role;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "user-msg-new"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "user-text-new"
                                                                            ],
                                                                            style: function() {
                                                                                return __webpack_require__.g.$translateStyle$("font-size: " + _vm_.fontSizePx + "px");
                                                                            },
                                                                            value: function() {
                                                                                return $item.content;
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ])
                                                            ];
                                                        }),
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return "user" !== $item.role && "assistant" !== $item.role;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "system-msg-new"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "system-text-new"
                                                                            ],
                                                                            style: function() {
                                                                                return __webpack_require__.g.$translateStyle$("font-size: " + _vm_.fontSizePx + "px");
                                                                            },
                                                                            value: function() {
                                                                                return $item.content;
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ])
                                                            ];
                                                        })
                                                    ])
                                                ];
                                            }),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    show: function() {
                                                        return _vm_.loading;
                                                    },
                                                    classList: [
                                                        "ai-msg-new"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("image", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "ai-avatar-new"
                                                        ],
                                                        src: "/common/images/AI头像_图片.png"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "loading-text-new"
                                                        ],
                                                        value: "正在思考..."
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "scroll-bottom-spacer"
                                                    ]
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "gradient-mask"
                                                ],
                                                src: "/common/images/顶部渐变遮罩_遮罩.png"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "header-new"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "header-btn-new"
                                                    ],
                                                    src: "/common/images/更多_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goHistory(evt);
                                                        }
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "header-title-new"
                                                    ],
                                                    value: function() {
                                                        return _vm_.convTitle ? _vm_.convTitle : "AI \u5BF9\u8BDD";
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "header-btn-new"
                                                    ],
                                                    src: "/common/images/添加_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.newChat(evt);
                                                        }
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "footer-new"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "expand-btn-new"
                                                    ],
                                                    src: "/common/images/展开_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goInput(evt);
                                                        }
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ])
                                ];
                            }),
                            
                        ]);
                    };
                    $app_exports$['entry'] = function($app_exports$) {
                        $app_script$({}, $app_exports$, $app_require$1);
                        $app_exports$.default.template = $app_template$;
                        $app_exports$.default.style = $app_style$;
                    };
                })();
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
