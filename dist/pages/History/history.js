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
                                    "list-new"
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
                                    "hitem-outer"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "4px",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-inner"
                                ]
                            ],
                            {
                                width: "324px",
                                height: "112px",
                                flexDirection: "row",
                                alignItems: "center",
                                position: "relative"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-bg"
                                ]
                            ],
                            {
                                width: "324px",
                                height: "112px",
                                position: "absolute",
                                top: 0,
                                left: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-texts"
                                ]
                            ],
                            {
                                flex: 1,
                                height: "112px",
                                flexDirection: "column",
                                justifyContent: "center",
                                paddingLeft: "15px",
                                paddingRight: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-title-new"
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
                                    "hitem-preview-new"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#888888",
                                marginTop: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-del"
                                ]
                            ],
                            {
                                width: "48px",
                                height: "48px",
                                marginRight: "5px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "empty-new"
                                ]
                            ],
                            {
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop: "40px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "empty-text-new"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#666666"
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
                                    "footer-btn-new"
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
                                    "list"
                                ]
                            ],
                            {
                                flex: 1,
                                width: "100%",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "center",
                                paddingTop: "10px",
                                paddingRight: "12px",
                                paddingBottom: "10px",
                                paddingLeft: "12px",
                                borderBottomWidth: "1px",
                                borderBottomColor: "#181818"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-main"
                                ]
                            ],
                            {
                                flex: 1,
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-title"
                                ]
                            ],
                            {
                                fontSize: "17px",
                                color: "#eeeeee"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hitem-preview"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#888888",
                                marginTop: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "del"
                                ]
                            ],
                            {
                                width: "30px",
                                height: "30px",
                                fontSize: "22px",
                                color: "#ff4d4f",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "empty"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "44px",
                                left: 0,
                                right: 0,
                                bottom: "64px",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "empty-text"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#666666"
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
                        var _default = exports.default = {
                            private: {
                                list: [],
                                isEmpty: true,
                                accent: '#4E8EF7',
                                newUI: true,
                                scrollTopVal: 0
                            },
                            onInit: function() {
                                this.newUI = true;
                            },
                            onShow: function() {
                                this.accent = this.$app.$def.settings.accentColor || '#4E8EF7';
                                this.newUI = true;
                                this.loadList();
                            },
                            loadList: function() {
                                var self = this;
                                _store.default.getConversations(function(arr) {
                                    arr.sort(function(a, b) {
                                        return (b.ts || 0) - (a.ts || 0);
                                    });
                                    var result = [];
                                    for(var i = 0; i < arr.length; i++){
                                        var c = arr[i];
                                        var msgs = c.messages || [];
                                        var last = msgs.length ? msgs[msgs.length - 1] : null;
                                        var preview = '无消息';
                                        if (last) preview = ('user' === last.role ? '我: ' : 'AI: ') + _util.default.preview(last.content, 30);
                                        result.push({
                                            id: c.id,
                                            title: c.title || _util.default.formatShort(c.ts || Date.now()),
                                            preview: preview
                                        });
                                    }
                                    self.list = result;
                                    self.isEmpty = 0 === result.length;
                                });
                            },
                            openConv: function(id) {
                                var self = this;
                                _store.default.setCurrentConvId(id, function() {
                                    _system.default.replace({
                                        uri: '/pages/Home'
                                    });
                                });
                            },
                            onDelete: function(id) {
                                var self = this;
                                _store.default.deleteConversation(id, function() {
                                    _system2.default.showToast({
                                        message: '已删除'
                                    });
                                    self.loadList();
                                });
                            },
                            goBack: function() {
                                _system.default.back();
                            },
                            goSettings: function() {
                                _system.default.push({
                                    uri: '/pages/Settings'
                                });
                            },
                            goAbout: function() {
                                _system.default.push({
                                    uri: '/pages/About'
                                });
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
                                                    "list-new"
                                                ],
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
                                                            __list__: _vm_.list,
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
                                                                "hitem-outer"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "hitem-inner"
                                                                ]
                                                            }
                                                        }, [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "hitem-bg"
                                                                    ],
                                                                    src: "/common/images/卡片背景_背景.png"
                                                                }
                                                            }, []),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "hitem-texts"
                                                                    ],
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.openConv($item.id, evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "hitem-title-new"
                                                                        ],
                                                                        value: function() {
                                                                            return $item.title;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "hitem-preview-new"
                                                                        ],
                                                                        value: function() {
                                                                            return $item.preview;
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "hitem-del"
                                                                    ],
                                                                    src: "/common/images/删除_按钮.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onDelete($item.id, evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ])
                                                ];
                                            }),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "empty-new"
                                                    ],
                                                    show: function() {
                                                        return _vm_.isEmpty;
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "empty-text-new"
                                                        ],
                                                        value: "暂无历史记录"
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
                                                    value: "历史"
                                                }
                                            }, []),
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "header-btn-new"
                                                    ],
                                                    src: "/common/images/设置_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goSettings(evt);
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
                                                        "footer-btn-new"
                                                    ],
                                                    src: "/common/images/关于_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goAbout(evt);
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
