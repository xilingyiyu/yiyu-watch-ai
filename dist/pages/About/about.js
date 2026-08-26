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
                                    "card-outer"
                                ]
                            ],
                            {
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: "4px",
                                marginBottom: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "card-inner"
                                ]
                            ],
                            {
                                width: "324px",
                                height: "194px",
                                position: "relative",
                                flexDirection: "row"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "card-bg"
                                ]
                            ],
                            {
                                width: "324px",
                                height: "194px",
                                position: "absolute",
                                top: 0,
                                left: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "card-texts"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "15px",
                                left: "15px",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "card-app-name"
                                ]
                            ],
                            {
                                fontSize: "48px",
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "card-version"
                                ]
                            ],
                            {
                                fontSize: "28px",
                                color: "#999999",
                                marginTop: "12px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "card-icon"
                                ]
                            ],
                            {
                                position: "absolute",
                                right: "15px",
                                bottom: "15px",
                                width: "112px",
                                height: "112px",
                                borderRadius: "24px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "section-title-new"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#888888",
                                paddingLeft: "15px",
                                marginTop: "12px",
                                marginBottom: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dev-name-new"
                                ]
                            ],
                            {
                                fontSize: "17px",
                                color: "#eeeeee",
                                paddingLeft: "15px",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "donate-desc-new"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#aaaaaa",
                                paddingLeft: "15px",
                                marginBottom: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "donate-img-new"
                                ]
                            ],
                            {
                                width: "160px",
                                height: "160px",
                                borderRadius: "12px",
                                marginLeft: "15px"
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
                                flexDirection: "column",
                                paddingTop: "16px",
                                paddingRight: "16px",
                                paddingBottom: "16px",
                                paddingLeft: "16px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "logo"
                                ]
                            ],
                            {
                                width: "72px",
                                height: "72px",
                                borderRadius: "16px",
                                marginTop: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "app-name"
                                ]
                            ],
                            {
                                fontSize: "20px",
                                color: "#eeeeee",
                                marginTop: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "version"
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
                                    "section"
                                ]
                            ],
                            {
                                fontSize: "15px",
                                color: "#4e8ef7",
                                marginTop: "16px",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "desc"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#bbbbbb"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "li"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#bbbbbb",
                                marginTop: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dev-row"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dev-avatar"
                                ]
                            ],
                            {
                                width: "40px",
                                height: "40px",
                                borderRadius: "20px",
                                marginRight: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dev-info"
                                ]
                            ],
                            {
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dev-name"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#eeeeee"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dev-desc"
                                ]
                            ],
                            {
                                fontSize: "13px",
                                color: "#888888",
                                marginTop: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "donate-img"
                                ]
                            ],
                            {
                                width: "160px",
                                height: "160px",
                                borderRadius: "12px",
                                marginTop: "10px"
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
                        var _util = _interopRequireDefault(__webpack_require__("./src/common/scripts/util.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            private: {
                                accent: '#4E8EF7',
                                newUI: true,
                                appName: '呓语环间AI',
                                versionName: '1.0.3'
                            },
                            onInit: function() {
                                this.newUI = true;
                                this.appName = _util.default.APP_NAME;
                                this.versionName = _util.default.VERSION;
                            },
                            onShow: function() {
                                this.newUI = true;
                                this.accent = this.$app.$def.settings.accentColor || '#4E8EF7';
                                this.appName = _util.default.APP_NAME;
                                this.versionName = _util.default.VERSION;
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
                                                        "card-outer"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-inner"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "card-bg"
                                                            ],
                                                            src: "/common/images/卡片背景_大_背景.png"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "card-texts"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "card-app-name"
                                                                ],
                                                                value: function() {
                                                                    return _vm_.appName;
                                                                }
                                                            }
                                                        }, []),
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "card-version"
                                                                ],
                                                                value: function() {
                                                                    return _vm_.versionName;
                                                                }
                                                            }
                                                        }, [])
                                                    ]),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "card-icon"
                                                            ],
                                                            src: "/common/images/icon.jpg"
                                                        }
                                                    }, [])
                                                ])
                                            ]),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "section-title-new"
                                                    ],
                                                    value: "参与开发的人员"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dev-name-new"
                                                    ],
                                                    value: "@呓语Agent"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dev-name-new"
                                                    ],
                                                    value: "@呓语云创"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dev-name-new"
                                                    ],
                                                    value: "@无源流沙"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "section-title-new"
                                                    ],
                                                    value: "赞赏"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "donate-desc-new"
                                                    ],
                                                    value: "感谢您的支持"
                                                }
                                            }, []),
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "donate-img-new"
                                                    ],
                                                    src: "/common/images/赞赏码.png"
                                                }
                                            }, []),
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
                                                    value: "关于"
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
