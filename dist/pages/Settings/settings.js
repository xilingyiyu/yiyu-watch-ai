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
                                    "content-new"
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
                                    "scroll-bottom-spacer"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "30px"
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
                                    "header-btn-placeholder"
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
                                    "group-new"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                paddingTop: "8px",
                                paddingRight: "10px",
                                paddingBottom: "4px",
                                paddingLeft: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "group-title-new"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#ffffff",
                                paddingLeft: "5px",
                                marginBottom: "8px",
                                marginTop: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "row-new"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                minHeight: "44px",
                                paddingLeft: "5px",
                                paddingRight: "5px",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "row-label-new"
                                ]
                            ],
                            {
                                fontSize: "17px",
                                color: "#eeeeee",
                                flex: 1
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "danger-new"
                                ]
                            ],
                            {
                                color: "#ff4d4f"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "capsule-new"
                                ]
                            ],
                            {
                                height: "32px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                borderRadius: "16px",
                                backgroundColor: "#1e1e1e",
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: "170px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "capsule-text-new"
                                ]
                            ],
                            {
                                fontSize: "13px",
                                color: "#cccccc"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "setting-switch-new"
                                ]
                            ],
                            {
                                width: "42px",
                                height: "24px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sub-new"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#aaaaaa",
                                paddingLeft: "5px",
                                marginTop: "8px",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "swatches-new"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                paddingLeft: "5px",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "swatch-new"
                                ]
                            ],
                            {
                                width: "34px",
                                height: "34px",
                                borderRadius: "17px",
                                marginRight: "10px",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "swatch-on-new"
                                ]
                            ],
                            {
                                borderTopWidth: "2px",
                                borderRightWidth: "2px",
                                borderBottomWidth: "2px",
                                borderLeftWidth: "2px",
                                borderTopColor: "#ffffff",
                                borderRightColor: "#ffffff",
                                borderBottomColor: "#ffffff",
                                borderLeftColor: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "tick-new"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sizes-new"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                paddingLeft: "5px",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "size-new"
                                ]
                            ],
                            {
                                width: "60px",
                                height: "32px",
                                borderRadius: "16px",
                                marginRight: "10px",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderTopColor: "#333333",
                                borderRightColor: "#333333",
                                borderBottomColor: "#333333",
                                borderLeftColor: "#333333",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "size-on-new"
                                ]
                            ],
                            {
                                borderTopColor: "#4E8EF7",
                                borderRightColor: "#4E8EF7",
                                borderBottomColor: "#4E8EF7",
                                borderLeftColor: "#4E8EF7",
                                backgroundColor: "#1c2b40"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "size-text-new"
                                ]
                            ],
                            {
                                fontSize: "15px",
                                color: "#eeeeee"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "presets-new"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                flexWrap: "wrap",
                                paddingLeft: "5px",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "preset-new"
                                ]
                            ],
                            {
                                fontSize: "13px",
                                color: "#4e8ef7",
                                backgroundColor: "#1c2b40",
                                borderRadius: "12px",
                                paddingTop: "4px",
                                paddingRight: "10px",
                                paddingBottom: "4px",
                                paddingLeft: "10px",
                                marginRight: "6px",
                                marginBottom: "4px"
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
                                alignItems: "center",
                                justifyContent: "center",
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
                                fontSize: "20px",
                                color: "#eeeeee"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "content"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "372px",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "group"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                paddingTop: "12px",
                                paddingRight: "12px",
                                paddingBottom: "12px",
                                paddingLeft: "12px",
                                borderBottomWidth: "6px",
                                borderBottomColor: "#0a0a0a"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "group-title"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#888888",
                                marginBottom: "8px"
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
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                height: "44px",
                                paddingTop: "0",
                                paddingRight: "4px",
                                paddingBottom: "0",
                                paddingLeft: "4px",
                                borderBottomWidth: "1px",
                                borderBottomColor: "#181818"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "row-label"
                                ]
                            ],
                            {
                                fontSize: "17px",
                                color: "#eeeeee",
                                flex: 1
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "row-value"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#888888",
                                maxWidth: "180px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "danger"
                                ]
                            ],
                            {
                                color: "#ff4d4f"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sub"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#aaaaaa",
                                marginTop: "10px",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "swatches"
                                ]
                            ],
                            {
                                flexDirection: "row"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "swatch"
                                ]
                            ],
                            {
                                width: "34px",
                                height: "34px",
                                borderRadius: "17px",
                                marginRight: "10px",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "tick"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sizes"
                                ]
                            ],
                            {
                                flexDirection: "row"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "size"
                                ]
                            ],
                            {
                                width: "60px",
                                height: "32px",
                                borderRadius: "16px",
                                marginRight: "10px",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderTopColor: "#333333",
                                borderRightColor: "#333333",
                                borderBottomColor: "#333333",
                                borderLeftColor: "#333333",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "size-on"
                                ]
                            ],
                            {
                                borderTopColor: "#4E8EF7",
                                borderRightColor: "#4E8EF7",
                                borderBottomColor: "#4E8EF7",
                                borderLeftColor: "#4E8EF7",
                                backgroundColor: "#1c2b40"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "size-text"
                                ]
                            ],
                            {
                                fontSize: "15px",
                                color: "#eeeeee"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "toggle"
                                ]
                            ],
                            {
                                width: "48px",
                                height: "32px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "setting-switch"
                                ]
                            ],
                            {
                                width: "42px",
                                height: "24px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "presets"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "preset"
                                ]
                            ],
                            {
                                fontSize: "13px",
                                color: "#4e8ef7",
                                backgroundColor: "#1c2b40",
                                borderRadius: "12px",
                                paddingTop: "4px",
                                paddingRight: "10px",
                                paddingBottom: "4px",
                                paddingLeft: "10px",
                                marginRight: "6px",
                                marginBottom: "4px"
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
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function clone(obj) {
                            var out = {};
                            for(var k in obj)if (obj.hasOwnProperty(k)) out[k] = obj[k];
                            return out;
                        }
                        function merge(a, b) {
                            var out = clone(a);
                            for(var k in b)if (b.hasOwnProperty(k)) out[k] = b[k];
                            return out;
                        }
                        var _default = exports.default = {
                            private: {
                                settings: {},
                                keyMask: '未设置',
                                accent: '#4E8EF7',
                                newUI: true,
                                colors: [
                                    {
                                        key: 'blue',
                                        value: '#4E8EF7'
                                    },
                                    {
                                        key: 'green',
                                        value: '#34C759'
                                    },
                                    {
                                        key: 'purple',
                                        value: '#AF52DE'
                                    },
                                    {
                                        key: 'orange',
                                        value: '#FF9500'
                                    },
                                    {
                                        key: 'pink',
                                        value: '#FF2D55'
                                    }
                                ],
                                sizes: [
                                    {
                                        value: 'small',
                                        label: '小'
                                    },
                                    {
                                        value: 'medium',
                                        label: '中'
                                    },
                                    {
                                        value: 'large',
                                        label: '大'
                                    }
                                ],
                                presets: [
                                    {
                                        key: 'openai',
                                        label: 'OpenAI'
                                    },
                                    {
                                        key: 'deepseek',
                                        label: 'DeepSeek'
                                    },
                                    {
                                        key: 'qwen',
                                        label: '通义千问'
                                    }
                                ]
                            },
                            onInit: function() {
                                this.newUI = true;
                            },
                            onShow: function() {
                                this.newUI = true;
                                var app = this.$app.$def;
                                if (app.pendingAction && 'editField' === app.pendingAction.type) {
                                    var act = app.pendingAction;
                                    app.pendingAction = null;
                                    if ('apiKey' !== act.field || act.text) app.settings[act.field] = act.text;
                                    else app.settings.apiKey = _util.default.DEFAULTS.apiKey;
                                    _store.default.saveSettings(app.settings, null);
                                }
                                this.settings = clone(app.settings);
                                this.accent = this.settings.accentColor || '#4E8EF7';
                                this.keyMask = _util.default.maskKey(this.settings.apiKey);
                            },
                            editField: function(field, title) {
                                var initial = this.settings[field] || '';
                                if ('apiKey' === field && _util.default.isDefaultKey(this.settings.apiKey)) initial = '';
                                _system.default.push({
                                    uri: '/pages/Input',
                                    params: {
                                        mode: 'edit',
                                        field: field,
                                        title: title,
                                        initial: initial
                                    }
                                });
                            },
                            save: function() {
                                var app = this.$app.$def;
                                app.settings = merge(app.settings, this.settings);
                                _store.default.saveSettings(app.settings, null);
                                this.accent = this.settings.accentColor || '#4E8EF7';
                            },
                            pickColor: function(v) {
                                this.settings.accentColor = v;
                                this.save();
                            },
                            pickSize: function(v) {
                                this.settings.fontSize = v;
                                this.save();
                            },
                            onToggleTs: function(e) {
                                this.settings.showTimestamps = e.checked;
                                this.save();
                            },
                            onToggleThinking: function(e) {
                                this.settings.showThinking = e.checked;
                                this.save();
                            },
                            
                            onToggleRedirect: function(e) {
                                this.settings.autoRedirectSettings = e.checked;
                                this.save();
                            },
                            pickPreset: function(key) {
                                var map = {
                                    openai: 'https://api.openai.com/v1/chat/completions',
                                    deepseek: 'https://api.deepseek.com/responses',
                                    qwen: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions'
                                };
                                this.settings.apiUrl = map[key] || '';
                                this.save();
                                _system2.default.showToast({
                                    message: '已设为预设地址'
                                });
                            },
                            useDefaultConfig: function() {
                                this.settings.apiUrl = _util.default.DEFAULTS.apiUrl;
                                this.settings.apiKey = _util.default.DEFAULTS.apiKey;
                                this.settings.model = _util.default.DEFAULTS.model;
                                this.save();
                                this.keyMask = _util.default.maskKey(this.settings.apiKey);
                                _system2.default.showToast({
                                    message: '已应用默认配置'
                                });
                            },
                            clearHistory: function() {
                                _store.default.clearConversations(function() {
                                    _system2.default.showToast({
                                        message: '已清空所有对话'
                                    });
                                });
                            },
                            goAbout: function() {
                                _system.default.push({
                                    uri: '/pages/About'
                                });
                            },
                            goBack: function() {
                                _system.default.back();
                            },
                            onSwipe: function(e) {
                                if (e && 'right' === e.direction) _system.default.back();
                            },
                            onBackPress: function() {
                                _system.default.back();
                                return true;
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
                                            ],
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("scroll", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "content-new"
                                                ],
                                                scrollY: "true"
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
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "group-new"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "group-title-new"
                                                        ],
                                                        value: "接口配置"
                                                    }
                                                }, []),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.editField("apiUrl", "API \u5730\u5740", evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "API 地址"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "capsule-new"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "capsule-text-new"
                                                                ],
                                                                value: function() {
                                                                    return _vm_.settings.apiUrl ? _vm_.settings.apiUrl : "\u672A\u8BBE\u7F6E";
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ]),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "sub-new"
                                                        ],
                                                        value: "预设地址"
                                                    }
                                                }, []),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "presets-new"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__cf__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            exp: function() {
                                                                return {
                                                                    __list__: _vm_.presets,
                                                                    __tid__: "key"
                                                                };
                                                            },
                                                            key: "$idx",
                                                            value: "$item"
                                                        }
                                                    }, function($idx, $item) {
                                                        return [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "preset-new"
                                                                    ],
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.pickPreset($item.key, evt);
                                                                        }
                                                                    },
                                                                    value: function() {
                                                                        return $item.label;
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    })
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.editField("apiKey", "API Key", evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "API Key"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "capsule-new"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "capsule-text-new"
                                                                ],
                                                                value: function() {
                                                                    return _vm_.keyMask;
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.editField("model", "\u6A21\u578B", evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "模型"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "capsule-new"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "capsule-text-new"
                                                                ],
                                                                value: function() {
                                                                    return _vm_.settings.model ? _vm_.settings.model : "\u672A\u8BBE\u7F6E";
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.editField("systemPrompt", "\u7CFB\u7EDF\u63D0\u793A\u8BCD", evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "系统提示词"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "capsule-new"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "capsule-text-new"
                                                                ],
                                                                value: function() {
                                                                    return _vm_.settings.systemPrompt ? "\u5DF2\u8BBE\u7F6E" : "\u672A\u8BBE\u7F6E";
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "未配置时跳转设置"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("switch", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "setting-switch-new"
                                                            ],
                                                            checked: function() {
                                                                return _vm_.settings.autoRedirectSettings;
                                                            },
                                                            events: {
                                                                change: function(evt) {
                                                                    return _vm_.onToggleRedirect(evt);
                                                                }
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.useDefaultConfig(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            style: {
                                                                color: "#4e8ef7"
                                                            },
                                                            value: "使用默认配置"
                                                        }
                                                    }, [])
                                                ])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "group-new"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "group-title-new"
                                                        ],
                                                        value: "个性化"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "sub-new"
                                                        ],
                                                        value: "字号"
                                                    }
                                                }, []),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "sizes-new"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__cf__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            exp: function() {
                                                                return {
                                                                    __list__: _vm_.sizes,
                                                                    __tid__: "value"
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
                                                                    classList: function() {
                                                                        const $classValue$ = "size-new " + ($item.value === _vm_.settings.fontSize ? "size-on-new" : "");
                                                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                                        return $classValue$;
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.pickSize($item.value, evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "size-text-new"
                                                                        ],
                                                                        value: function() {
                                                                            return $item.label;
                                                                        }
                                                                    }
                                                                }, [])
                                                            ])
                                                        ];
                                                    })
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "显示消息时间戳"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("switch", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "setting-switch-new"
                                                            ],
                                                            checked: function() {
                                                                return _vm_.settings.showTimestamps;
                                                            },
                                                            events: {
                                                                change: function(evt) {
                                                                    return _vm_.onToggleTs(evt);
                                                                }
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "显示 AI 思考过程"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("switch", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "setting-switch-new"
                                                            ],
                                                            checked: function() {
                                                                return _vm_.settings.showThinking;
                                                            },
                                                            events: {
                                                                change: function(evt) {
                                                                    return _vm_.onToggleThinking(evt);
                                                                }
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "group-new"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "group-title-new"
                                                        ],
                                                        value: "数据"
                                                    }
                                                }, []),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.clearHistory(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new",
                                                                "danger-new"
                                                            ],
                                                            value: "清空所有对话"
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "row-new"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.goAbout(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "row-label-new"
                                                            ],
                                                            value: "关于"
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "sub-new"
                                                        ],
                                                        value: "提示：每次启动快应用时会自动创建新对话"
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
                                                    src: "/common/images/返回_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goBack(evt);
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
                                                    value: "设置"
                                                }
                                            }, []),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "header-btn-placeholder"
                                                    ]
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
