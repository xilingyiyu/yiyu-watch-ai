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
                var __webpack_modules__ = {};
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
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
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
                            flexDirection: "column",
                            paddingTop: "0",
                            paddingRight: "15px",
                            paddingBottom: "0",
                            paddingLeft: "15px"
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
                                "think-text-new"
                            ]
                        ],
                        {
                            color: "#b9c8e0",
                            fontSize: "16px"
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
                            paddingLeft: "8px",
                            paddingRight: "12px",
                            borderBottomWidth: "1px",
                            borderBottomColor: "#1c1c1c"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back"
                            ]
                        ],
                        {
                            width: "32px",
                            height: "32px",
                            fontSize: "28px",
                            color: "#eeeeee",
                            textAlign: "center"
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
                                "content"
                            ]
                        ],
                        {
                            flex: 1,
                            width: "100%",
                            paddingTop: "12px",
                            paddingRight: "12px",
                            paddingBottom: "12px",
                            paddingLeft: "12px",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "text-wrap"
                            ]
                        ],
                        {
                            width: "100%",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "think-text"
                            ]
                        ],
                        {
                            color: "#b9c8e0",
                            fontSize: "16px",
                            backgroundColor: "#0d1830",
                            borderRadius: "10px",
                            paddingTop: "10px",
                            paddingRight: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "10px"
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
                        private: {
                            content: '',
                            newUI: true
                        },
                        onInit: function() {
                            var app = this.$app.$def;
                            if (app.thinkContent) {
                                this.content = app.thinkContent;
                                app.thinkContent = null;
                            }
                            this.newUI = true;
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
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "think-text-new"
                                                ],
                                                value: function() {
                                                    return _vm_.content;
                                                }
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
                                                value: "思考过程"
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
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
