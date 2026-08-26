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
                    "./src/common/components/InputMethod/InputMethod.ux" (module, __unused_rspack_exports, __webpack_require__) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "page"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item"
                                    ]
                                ],
                                {
                                    height: "52px",
                                    flex: 1
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn0"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "28px",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: 0,
                                    height: "52px",
                                    width: "52px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn02"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: "0px",
                                    fontSize: "32px",
                                    textAlign: "center",
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn-down"
                                    ]
                                ],
                                {
                                    width: "auto",
                                    minWidth: "52px",
                                    paddingLeft: "14px",
                                    paddingRight: "14px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn-down-text"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "28px",
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                    lines: 1,
                                    textOverflow: "ellipsis"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnfull"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px",
                                    marginRight: "4px",
                                    height: "52px",
                                    width: "40px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "999px",
                                    marginRight: "4px",
                                    width: "94px",
                                    height: "60px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "caltext"
                                    ]
                                ],
                                {
                                    textAlign: "left",
                                    lineHeight: "38px",
                                    lines: 1,
                                    textOverflow: "ellipsis",
                                    color: "#0d84ff",
                                    height: "45px",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    paddingLeft: "8px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "cvalrow-wrap"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    height: "28px",
                                    backgroundColor: "transparent"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "cvalrow"
                                    ]
                                ],
                                {
                                    color: "#0d84ff",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    lines: 1,
                                    textOverflow: "ellipsis",
                                    textAlign: "left",
                                    paddingLeft: "14px",
                                    width: "100%"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list3"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    top: "38px",
                                    left: "78px",
                                    width: "324px",
                                    height: "160px",
                                    flexDirection: "column",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item3"
                                    ]
                                ],
                                {
                                    width: "324px",
                                    height: "52px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn67"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "4px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard67"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list67"
                                    ]
                                ],
                                {
                                    top: "0px",
                                    width: "96.4%",
                                    height: "170px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "0px",
                                    paddingRight: "10px",
                                    paddingBottom: "0px",
                                    paddingLeft: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item67"
                                    ]
                                ],
                                {
                                    height: "50px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn66"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "3px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "3px",
                                    top: "0px",
                                    width: "186px",
                                    height: "186px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "10px",
                                    paddingRight: "10px",
                                    paddingBottom: "10px",
                                    paddingLeft: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item66"
                                    ]
                                ],
                                {
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "waiting-keys"
                                    ]
                                ],
                                {
                                    width: "36px",
                                    height: "40px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "keyboard-rows-rect-t9"
                                    ]
                                ],
                                {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    flexShrink: 0,
                                    height: "55px",
                                    width: "100%"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9-rect"
                                    ]
                                ],
                                {
                                    flex: 1,
                                    height: "55px",
                                    marginTop: "0",
                                    marginRight: "3px",
                                    marginBottom: "0",
                                    marginLeft: "3px",
                                    width: "unset"
                                }
                            ],
                            [
                                {
                                    condition: "screen and (min-width:230) and (max-width:235) and (shape:circle)"
                                },
                                [
                                    [
                                        1,
                                        "full-keyboard"
                                    ]
                                ],
                                {
                                    transform: "{\"scaleX\":0.96,\"scaleY\":0.96}",
                                    transformOrigin: "0 321px",
                                    overflow: "visible"
                                }
                            ],
                            [
                                { condition: "screen and (min-width:236) and (max-width:245) and (shape:circle)" },
                                [ [ 1, "full-keyboard" ] ],
                                { transform: "{\"scaleX\":0.96,\"scaleY\":0.96}", transformOrigin: "0 321px", overflow: "visible" }
                            ]
                        ];
                        var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                            "use strict";
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.default = void 0;
                            var _system = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                            var _system2 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                            var _dicUtil = __webpack_require__("./src/common/components/InputMethod/assets/dicUtil.js");
                            function _interopRequireDefault(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function doSearchDic(word, lang, cb) {
                                if (!word) return void cb({
                                    chars: [],
                                    multi: null
                                });
                                const res = _dicUtil.SimpleInputMethod.getHanzi(word, lang);
                                cb({
                                    chars: res.chars,
                                    matched: res.matched,
                                    multi: res.multi
                                });
                            }
                            function deleteLast(t) {
                                if (t) return t.substr(0, t.length - 1);
                                return "";
                            }
                            var _default = exports.default = {
                                props: {
                                    hide: {
                                        default: true
                                    },
                                    keyboardtype: {
                                        default: "QWERTY"
                                    },
                                    maxlength: {
                                        default: 5
                                    },
                                    vibratemode: {
                                        default: ""
                                    },
                                    screentype: {
                                        default: "circle"
                                    }
                                },
                                data: {
                                    cval: "",
                                    cvalDisplay: "",
                                    resultList: [],
                                    resultList2: [],
                                    resultWordList: [],
                                    resultRow0: [],
                                    resultRow0IsWord: [],
                                    matchedLen: 0,
                                    sylTopChars: [],
                                    waitingList: [],
                                    waitingIndex: -1,
                                    lastWaitingStr: "",
                                    downFlag: "",
                                    lang: "cn",
                                    numFlag: false,
                                    numFlag_jp: false,
                                    upperFlag: false,
                                    keyboardCreated: false,
                                    cvalList: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ],
                                    percent67: 52,
                                    percent66: 0,
                                    screenWidth: 336,
                                    keys: {
                                        full: [
                                            [
                                                "Q",
                                                "W",
                                                "E",
                                                "R",
                                                "T",
                                                "Y",
                                                "U",
                                                "I",
                                                "O",
                                                "P"
                                            ],
                                            [
                                                "A",
                                                "S",
                                                "D",
                                                "F",
                                                "G",
                                                "H",
                                                "J",
                                                "K",
                                                "L"
                                            ],
                                            [
                                                "Z",
                                                "X",
                                                "C",
                                                "V",
                                                "B",
                                                "N",
                                                "M"
                                            ]
                                        ],
                                        sign: [
                                            [
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9",
                                                "0"
                                            ],
                                            [
                                                "~",
                                                "!",
                                                "@",
                                                "#",
                                                "%",
                                                "“",
                                                "”",
                                                "*",
                                                "?",
                                                "/"
                                            ],
                                            [
                                                "(",
                                                ")",
                                                "-",
                                                "_",
                                                ":",
                                                ";",
                                                "，",
                                                "。",
                                                "."
                                            ]
                                        ],
                                        sign_jp: [
                                            [
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9",
                                                "0"
                                            ],
                                            [
                                                "~",
                                                "•",
                                                "@",
                                                "#",
                                                "%",
                                                "「",
                                                "」",
                                                "*",
                                                "?",
                                                "/"
                                            ],
                                            [
                                                "(",
                                                ")",
                                                "-",
                                                "…",
                                                ":",
                                                ";",
                                                "、",
                                                "。",
                                                "!"
                                            ]
                                        ],
                                        sign62: [
                                            [
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9"
                                            ],
                                            [
                                                "!",
                                                "@",
                                                "#",
                                                "%",
                                                "“",
                                                "”",
                                                "*"
                                            ],
                                            [
                                                ")",
                                                "-",
                                                "_",
                                                ":",
                                                ";"
                                            ]
                                        ],
                                        sign62_jp: [
                                            [
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9"
                                            ],
                                            [
                                                "•",
                                                "@",
                                                "#",
                                                "%",
                                                "「",
                                                "」",
                                                "*"
                                            ],
                                            [
                                                ")",
                                                "-",
                                                "…",
                                                ":",
                                                ";"
                                            ]
                                        ],
                                        full62: [
                                            [
                                                "W",
                                                "E",
                                                "R",
                                                "T",
                                                "Y",
                                                "U",
                                                "I",
                                                "O"
                                            ],
                                            [
                                                "S",
                                                "D",
                                                "F",
                                                "G",
                                                "H",
                                                "J",
                                                "K"
                                            ],
                                            [
                                                "X",
                                                "C",
                                                "V",
                                                "B",
                                                "N"
                                            ]
                                        ],
                                        t9: [
                                            [
                                                "abc",
                                                "def"
                                            ],
                                            [
                                                "ghi",
                                                "jkl",
                                                "mno"
                                            ],
                                            [
                                                "pqrs",
                                                "tuv",
                                                "wxyz"
                                            ]
                                        ]
                                    }
                                },
                                onInit () {
                                    if (this.maxlength) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < this.maxlength; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                    if ("rect" === this.screentype || "pill-shaped" === this.screentype) this.adjustScreenWidth();
                                    if (!this.hide) {
                                        this.keyboardCreated = true;
                                        this._ensureDictInit();
                                    }
                                    this.$watch("hide", "watchHidePropsChange");
                                    this.$watch("maxlength", "watchMaxLengthPropsChange");
                                    this.$watch("keyboardtype", "watchKeyboardTypePropsChange");
                                },
                                addAllTxt (txt) {
                                    this.$emit("complete", {
                                        content: txt
                                    });
                                },
                                onRsSelect (txt) {
                                    this.onVibrate();
                                    var consumed = false;
                                    if (1 === txt.length && this.sylTopChars.length > 0 && this.cval.length > 0) {
                                        for(var si = 0; si < this.sylTopChars.length; si++)if (this.sylTopChars[si].char === txt && this.sylTopChars[si].offset > 0 && this.sylTopChars[si].offset <= this.cval.length) {
                                            this.cval = this.cval.slice(this.sylTopChars[si].offset);
                                            this.addAllTxt(txt);
                                            this.clearWaiting();
                                            this.resetResultList();
                                            this.downFlag = "";
                                            consumed = true;
                                            break;
                                        }
                                    }
                                    if (consumed) return;
                                    if (1 === txt.length && this.matchedLen > 0 && this.cval.length > this.matchedLen) {
                                        this.cval = this.cval.slice(this.matchedLen);
                                        this.addAllTxt(txt);
                                        this.clearWaiting();
                                        this.resetResultList();
                                        this.downFlag = "";
                                        return;
                                    }
                                    this.cval = "";
                                    this.addAllTxt(txt);
                                    this.clearWaiting();
                                    this.resetResultList();
                                    this.downFlag = "";
                                },
                                onBtnClick (sign) {
                                    this.onVibrate();
                                    switch(sign){
                                        case "AC":
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetResultList();
                                            break;
                                        case "lang":
                                            if ("T9" === this.keyboardtype) this.lang = "cn" === this.lang ? "en" : "cn";
                                            else if ("cn" === this.lang) this.lang = "en";
                                            else if ("en" === this.lang) this.lang = "jp";
                                            else this.lang = "cn";
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetResultList();
                                            break;
                                        case "D":
                                            if (this.waitingIndex >= 0) {
                                                this.clearWaiting();
                                                this.resetResultList();
                                            } else if (this.cval.length > 0) {
                                                this.cval = deleteLast(this.cval);
                                                this.resetResultList();
                                            } else this.$emit("delete", {});
                                            break;
                                        case "space":
                                            this.addAllTxt(" ");
                                            break;
                                        case "down":
                                            this.downFlag = "down" === this.downFlag ? "" : "down";
                                            break;
                                        case "select":
                                            if (this.lastWaitingStr != sign && this.lastWaitingStr) {
                                                if ("cn" === this.lang || 'jp' === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
                                                else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                this.clearWaiting();
                                                this.resetResultList();
                                            }
                                            break;
                                        case "switchNum":
                                            this.numFlag = true;
                                            this.numFlag_jp = false;
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetResultList();
                                            break;
                                        case "switchNum_jp":
                                            this.numFlag = true;
                                            this.numFlag_jp = true;
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetResultList();
                                            break;
                                        case "switchCn":
                                            this.numFlag = false;
                                            this.numFlag_jp = false;
                                            break;
                                        case "switchUpper":
                                            this.upperFlag = true;
                                            break;
                                        case "switchLow":
                                            this.upperFlag = false;
                                            break;
                                        default:
                                            if (1 === sign.length) this.addAllTxt(sign);
                                            else {
                                                if (this.waitingIndex >= 0) if (this.lastWaitingStr === sign) {
                                                    this.waitingIndex++;
                                                    if (this.waitingIndex >= this.lastWaitingStr.length) this.waitingIndex = 0;
                                                } else {
                                                    if ("cn" === this.lang || 'jp' === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
                                                    else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                else {
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                this.resetResultList();
                                            }
                                            break;
                                    }
                                },
                                clearWaiting () {
                                    this.waitingList = [];
                                    this.waitingIndex = -1;
                                    this.lastWaitingStr = "";
                                },
                                resetResultList () {
                                    let watingStr = "";
                                    if (this.lastWaitingStr && this.lastWaitingStr[this.waitingIndex]) watingStr = this.lastWaitingStr[this.waitingIndex];
                                    this.cvalDisplay = "cn" === this.lang ? _dicUtil.SimpleInputMethod.getSegmentedDisplay(this.cval + watingStr) : this.cval + watingStr;
                                    if (!(this.cval + watingStr) || "cn" !== this.lang && "jp" !== this.lang) {
                                        this.resultList = [];
                                        this.resultWordList = [];
                                        this.setResultListAll();
                                        return;
                                    }
                                    this.getResultByWord(this.cval + watingStr);
                                },
                                setResultListAll () {
                                    const cap = parseInt(this.maxlength);
                                    let row0 = [];
                                    let row0IsWord = [];
                                    for(let i = 0; i < this.resultWordList.length && row0.length < cap; i++){
                                        row0.push(this.resultWordList[i]);
                                        row0IsWord.push(true);
                                    }
                                    for(let i = 0; i < this.resultList.length && row0.length < cap; i++)if (-1 === this.resultWordList.indexOf(this.resultList[i])) {
                                        row0.push(this.resultList[i]);
                                        row0IsWord.push(false);
                                    }
                                    this.resultRow0 = row0;
                                    this.resultRow0IsWord = row0IsWord;
                                    this.resultList2 = [];
                                    let array = [];
                                    for(let i = 0; i < this.resultWordList.length; i++){
                                        array.push(this.resultWordList[i]);
                                        if (array.length === cap) {
                                            this.resultList2.push(array);
                                            array = [];
                                        }
                                    }
                                    for(let i = 0; i < this.resultList.length; i++)if (-1 === this.resultWordList.indexOf(this.resultList[i])) {
                                        array.push(this.resultList[i]);
                                        if (array.length === cap) {
                                            this.resultList2.push(array);
                                            array = [];
                                        }
                                    }
                                    if (array.length > 0) this.resultList2.push(array);
                                },
                                getResultByWord (val) {
                                    const that = this;
                                    doSearchDic(val, that.lang, function(data) {
                                        that.resultList = data.chars;
                                        that.matchedLen = data.matched ? data.matched.length : 0;
                                        const multi = data.multi || {
                                            words: [],
                                            composed: "",
                                            sylTopChars: []
                                        };
                                        that.sylTopChars = (multi.sylTopChars || []).filter(function(sc) {
                                            return sc.char && sc.offset > 0;
                                        });
                                        let words = (multi.words || []).slice();
                                        if (0 === words.length && multi.composed && multi.composed.length >= 2) words = [
                                            multi.composed
                                        ];
                                        else if (multi.composed && multi.composed.length >= 2 && -1 === words.indexOf(multi.composed)) words.push(multi.composed);
                                        const sylOnlyChars = that.sylTopChars.map(function(sc) {
                                            return sc.char;
                                        });
                                        const seen = {};
                                        const uniqueSylChars = [];
                                        for(var si = 0; si < sylOnlyChars.length; si++)if (!seen[sylOnlyChars[si]]) {
                                            seen[sylOnlyChars[si]] = 1;
                                            uniqueSylChars.push(sylOnlyChars[si]);
                                        }
                                        for(var si = 0; si < uniqueSylChars.length; si++)if (-1 === words.indexOf(uniqueSylChars[si])) words.push(uniqueSylChars[si]);
                                        that.resultWordList = words;
                                        that.setResultListAll();
                                    });
                                },
                                onSelect (num) {
                                    this.$emit("keyDown", {
                                        content: num
                                    });
                                    if ("T9" === this.keyboardtype && "pill-shaped" !== this.screentype) return void this.onBtnClick(num);
                                    this.onVibrate();
                                    if ('cn' !== this.lang && 'jp' !== this.lang || this.numFlag) if ("en" !== this.lang || this.numFlag) this.addAllTxt(num);
                                    else if (this.upperFlag) this.addAllTxt(num.toUpperCase());
                                    else this.addAllTxt(num.toLowerCase());
                                    else this.cval += num.toLowerCase();
                                    this.resetResultList();
                                },
                                onSelectWaiting (num) {
                                    this.onVibrate();
                                    if ("cn" === this.lang) this.cval += this.waitingList[num].toString();
                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[num].toUpperCase());
                                    else this.addAllTxt(this.waitingList[num].toLowerCase());
                                    this.clearWaiting();
                                    this.resetResultList();
                                },
                                watchHidePropsChange (newV, oldV) {
                                    this.$emit("visibilityChange", {
                                        visible: newV
                                    });
                                    if (false === newV) {
                                        this.keyboardCreated = true;
                                        this._ensureDictInit();
                                    }
                                },
                                _ensureDictInit () {
                                    if (this.__dictInitStarted) return;
                                    this.__dictInitStarted = true;
                                    _dicUtil.SimpleInputMethod.initDict();
                                },
                                watchMaxLengthPropsChange (newV, oldV) {
                                    if (newV) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < newV; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                },
                                watchKeyboardTypePropsChange (newV, oldV) {
                                    if ("T9" === newV && "jp" === this.lang) {
                                        this.lang = "cn";
                                        this.cval = "";
                                        this.clearWaiting();
                                        this.resetResultList();
                                    }
                                },
                                onVibrate () {
                                    if ("" != this.vibratemode) _system.default.vibrate({
                                        mode: this.vibratemode
                                    });
                                },
                                handelScroll (event) {
                                    let percentTemp67 = event.scrollX / 636 * 100 + 52.8;
                                    this.percent67 = parseInt(percentTemp67 <= 100 ? percentTemp67 : 100);
                                    let percentTemp66 = event.scrollX / 633 * 100;
                                    this.percent66 = parseInt(percentTemp66 <= 100 ? percentTemp66 : 100);
                                },
                                pushCval () {
                                    this.onVibrate();
                                    let temp = this.cval;
                                    this.cval = "";
                                    this.clearWaiting();
                                    this.resetResultList();
                                    this.addAllTxt(temp);
                                },
                                adjustScreenWidth () {
                                    _system2.default.getInfo({
                                        success: (data)=>{
                                            this.screenWidth = data.screenWidth;
                                        }
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
                                        "page"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("flex-direction: column; height: " + (_vm_.hide ? "0px" : "auto") + "; overflow: " + (_vm_.hide ? "hidden" : "visible") + ";");
                                    }
                                }
                            }, [
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return !_vm_.hide || _vm_.keyboardCreated;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {}
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    show: function() {
                                                        return !_vm_.hide;
                                                    },
                                                    style: {
                                                        backgroundColor: "black",
                                                        flexDirection: "column"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "circle" !== _vm_.screentype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "cvalrow-wrap"
                                                                ],
                                                                show: function() {
                                                                    return ("cn" === _vm_.lang || "jp" === _vm_.lang) && "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "cvalrow"
                                                                    ],
                                                                    value: function() {
                                                                        return _vm_.cvalDisplay;
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
                                                            return "circle" === _vm_.screentype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    width: "480px",
                                                                    height: "321px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "T9" != _vm_.keyboardtype;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            id: "full-keyboard",
                                                                            style: {
                                                                                width: "480px",
                                                                                height: "321px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/back2.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "38px",
                                                                                    left: "7px",
                                                                                    width: "466px",
                                                                                    height: "52px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchCn", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/123.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/123.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum_jp", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/bigA.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchLow", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/A.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchUpper", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "38px",
                                                                                    left: "78px",
                                                                                    width: "324px",
                                                                                    height: "52px",
                                                                                    backgroundColor: "rgb(38, 38, 38)",
                                                                                    borderRadius: "12px",
                                                                                    borderTopColor: "#333333",
                                                                                    borderRightColor: "#333333",
                                                                                    borderBottomColor: "#333333",
                                                                                    borderLeftColor: "#333333",
                                                                                    borderStyle: "solid",
                                                                                    borderTopWidth: "3px",
                                                                                    borderRightWidth: "3px",
                                                                                    borderBottomWidth: "3px",
                                                                                    borderLeftWidth: "3px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                show: function() {
                                                                                    return _vm_.resultRow0.length > 0;
                                                                                },
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "43px",
                                                                                    left: "355px"
                                                                                },
                                                                                src: "/common/components/InputMethod/assets/full/down.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "jp" != _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: function() {
                                                                                            return "/common/components/InputMethod/assets/full/" + _vm_.lang + ".png";
                                                                                        },
                                                                                        style: {
                                                                                            position: "absolute",
                                                                                            top: "38px",
                                                                                            left: "7px",
                                                                                            width: "67px",
                                                                                            height: "52px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onBtnClick("lang", evt);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        }),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: "/common/components/InputMethod/assets/full/jp.png",
                                                                                        style: {
                                                                                            position: "absolute",
                                                                                            top: "38px",
                                                                                            left: "7px",
                                                                                            width: "67px",
                                                                                            height: "52px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onBtnClick("lang", evt);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        }),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "-4px",
                                                                                    left: "78px",
                                                                                    width: "324px"
                                                                                },
                                                                                show: function() {
                                                                                    return ("cn" === _vm_.lang || "jp" === _vm_.lang) && "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "caltext"
                                                                                    ],
                                                                                    style: {
                                                                                        width: "296px"
                                                                                    },
                                                                                    value: function() {
                                                                                        return _vm_.cvalDisplay + "_";
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "38px",
                                                                                    left: "78px",
                                                                                    width: "275px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return ("cn" === _vm_.lang || "jp" === _vm_.lang) && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("scroll", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    scrollX: function() {
                                                                                        return true;
                                                                                    },
                                                                                    style: {
                                                                                        position: "absolute",
                                                                                        left: "0px",
                                                                                        width: "100%",
                                                                                        height: "42px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            position: "absolute",
                                                                                            left: "0px",
                                                                                            height: "42px",
                                                                                            paddingLeft: "20px",
                                                                                            paddingRight: "20px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultRow0;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "$item"
                                                                                        }
                                                                                    }, function($idx, $item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    show: function() {
                                                                                                        return _vm_.resultRow0.length > $idx;
                                                                                                    },
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        paddingRight: "10px"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return _vm_.resultRow0[$idx];
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "38px",
                                                                                    left: "80px",
                                                                                    width: "320px",
                                                                                    height: "52px",
                                                                                    alignContent: "center",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/123_boardless.png"
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return "down" === _vm_.downFlag;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("list", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "list3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultList2;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "itemArray"
                                                                                        }
                                                                                    }, function($idx, itemArray) {
                                                                                        return [
                                                                                            aiot.__ce__("list-item", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    type: "waitingRows62t9",
                                                                                                    classList: [
                                                                                                        "item3"
                                                                                                    ]
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__cf__({
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        exp: function() {
                                                                                                            return itemArray;
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function($idx, item) {
                                                                                                    return [
                                                                                                        aiot.__ce__("div", {
                                                                                                            __vm__: _vm_,
                                                                                                            __opts__: {
                                                                                                                classList: [
                                                                                                                    "item",
                                                                                                                    "column",
                                                                                                                    "center"
                                                                                                                ],
                                                                                                                style: {
                                                                                                                    height: "52px"
                                                                                                                }
                                                                                                            }
                                                                                                        }, [
                                                                                                            aiot.__ce__("text", {
                                                                                                                __vm__: _vm_,
                                                                                                                __opts__: {
                                                                                                                    classList: [
                                                                                                                        "calbtn-down-text"
                                                                                                                    ],
                                                                                                                    events: {
                                                                                                                        click: function(evt) {
                                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                                        }
                                                                                                                    },
                                                                                                                    value: function() {
                                                                                                                        return item;
                                                                                                                    }
                                                                                                                }
                                                                                                            }, [])
                                                                                                        ])
                                                                                                    ];
                                                                                                })
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        }),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "95px",
                                                                                    left: "8px",
                                                                                    width: "464px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/Q.png",
                                                                                    style: {
                                                                                        width: "54px",
                                                                                        height: "52px",
                                                                                        marginRight: "4px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("Q", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, []),
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return _vm_.keys["full62"][0];
                                                                                    },
                                                                                    key: "$idx",
                                                                                    value: "item"
                                                                                }
                                                                            }, function($idx, item) {
                                                                                return [
                                                                                    aiot.__ce__("text", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            classList: [
                                                                                                "calbtnfull"
                                                                                            ],
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                }
                                                                                            },
                                                                                            value: function() {
                                                                                                return item;
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            }),
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/P.png",
                                                                                    style: {
                                                                                        width: "54px",
                                                                                        height: "52px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("P", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "152px",
                                                                                    left: "23px",
                                                                                    width: "438px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/btA.png",
                                                                                    style: {
                                                                                        width: "60px",
                                                                                        height: "52px",
                                                                                        marginRight: "4px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("A", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, []),
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return _vm_.keys["full62"][1];
                                                                                    },
                                                                                    key: "$idx",
                                                                                    value: "item"
                                                                                }
                                                                            }, function($idx, item) {
                                                                                return [
                                                                                    aiot.__ce__("text", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            classList: [
                                                                                                "calbtnfull"
                                                                                            ],
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                }
                                                                                            },
                                                                                            value: function() {
                                                                                                return item;
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            }),
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/L.png",
                                                                                    style: {
                                                                                        width: "60px",
                                                                                        height: "52px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("L", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "209px",
                                                                                    left: "56px",
                                                                                    width: "368px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/Z.png",
                                                                                    style: {
                                                                                        width: "72px",
                                                                                        height: "52px",
                                                                                        marginRight: "4px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("Z", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, []),
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return _vm_.keys["full62"][2];
                                                                                    },
                                                                                    key: "$idx",
                                                                                    value: "item"
                                                                                }
                                                                            }, function($idx, item) {
                                                                                return [
                                                                                    aiot.__ce__("text", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            classList: [
                                                                                                "calbtnfull"
                                                                                            ],
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                }
                                                                                            },
                                                                                            value: function() {
                                                                                                return item;
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            }),
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/M.png",
                                                                                    style: {
                                                                                        width: "72px",
                                                                                        height: "52px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("M", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "95px",
                                                                                    left: "8px",
                                                                                    width: "464px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/1.png",
                                                                                    style: {
                                                                                        width: "54px",
                                                                                        height: "52px",
                                                                                        marginRight: "4px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("1", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, []),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return !_vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign62"][0];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtnfull"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ];
                                                                            }),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return !!_vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign62_jp"][0];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtnfull"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ];
                                                                            }),
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/0.png",
                                                                                    style: {
                                                                                        width: "54px",
                                                                                        height: "52px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("0", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "152px",
                                                                                    left: "23px",
                                                                                    width: "438px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/2-1.png",
                                                                                    style: {
                                                                                        width: "60px",
                                                                                        height: "52px",
                                                                                        marginRight: "4px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("~", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, []),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return !_vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign62"][1];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtnfull"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ];
                                                                            }),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return !!_vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign62_jp"][1];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtnfull"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ];
                                                                            }),
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/2-2.png",
                                                                                    style: {
                                                                                        width: "60px",
                                                                                        height: "52px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("?", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "209px",
                                                                                    left: "56px",
                                                                                    width: "368px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/3-1.png",
                                                                                    style: {
                                                                                        width: "72px",
                                                                                        height: "52px",
                                                                                        marginRight: "4px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("(", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, []),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return !_vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign62"][2];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtnfull"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ];
                                                                            }),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return !!_vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign62_jp"][2];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtnfull"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ];
                                                                            }),
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/3-2.png",
                                                                                    style: {
                                                                                        width: "72px",
                                                                                        height: "52px"
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("\u3001", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/del.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "38px",
                                                                                    left: "406px",
                                                                                    width: "67px",
                                                                                    height: "52px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("D", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/space.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "242px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("space", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/4-2.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "242px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect("\u3002", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/4-1.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect("\uFF0C", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/full/4-1.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "266px",
                                                                                    left: "119px",
                                                                                    width: "120px",
                                                                                    height: "48px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect("\u3001", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag_jp;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "204px",
                                                                                    left: "78px"
                                                                                },
                                                                                src: "/common/components/InputMethod/assets/full/up.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "down" === _vm_.downFlag;
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
                                                                        return !("T9" != _vm_.keyboardtype);
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                width: "480px",
                                                                                height: "321px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/t9/back2.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "35px",
                                                                                    left: "31px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchCn", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/t9/123.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "31px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/t9/bigA.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "31px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchLow", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/t9/a.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "31px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchUpper", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "35px",
                                                                                    left: "95px",
                                                                                    width: "290px",
                                                                                    height: "60px",
                                                                                    backgroundColor: "rgb(38, 38, 38)",
                                                                                    borderRadius: "999px",
                                                                                    borderTopColor: "#333333",
                                                                                    borderRightColor: "#333333",
                                                                                    borderBottomColor: "#333333",
                                                                                    borderLeftColor: "#333333",
                                                                                    borderStyle: "solid",
                                                                                    borderTopWidth: "3px",
                                                                                    borderRightWidth: "3px",
                                                                                    borderBottomWidth: "3px",
                                                                                    borderLeftWidth: "3px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                show: function() {
                                                                                    return _vm_.resultRow0.length > 0;
                                                                                },
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "44px",
                                                                                    left: "338px"
                                                                                },
                                                                                src: "/common/components/InputMethod/assets/full/down.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: function() {
                                                                                            return "/common/components/InputMethod/assets/t9/" + _vm_.lang + ".png";
                                                                                        },
                                                                                        style: {
                                                                                            position: "absolute",
                                                                                            top: "35px",
                                                                                            left: "31px",
                                                                                            width: "60px",
                                                                                            height: "60px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onBtnClick("lang", evt);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        }),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                },
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "-4px",
                                                                                    left: "240px",
                                                                                    width: "145px",
                                                                                    height: "40px",
                                                                                    justifyContent: "flex-end"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return _vm_.waitingList;
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
                                                                                                "waiting-keys"
                                                                                            ],
                                                                                            style: function() {
                                                                                                return __webpack_require__.g.$translateStyle$("color:" + ($idx === _vm_.waitingIndex ? "rgb(13,132,255)" : "white") + ";");
                                                                                            },
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onSelectWaiting($idx, evt);
                                                                                                }
                                                                                            },
                                                                                            value: function() {
                                                                                                return _vm_.waitingList[$idx];
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            })
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "-4px",
                                                                                    left: "95px",
                                                                                    width: "145px",
                                                                                    height: "40px"
                                                                                },
                                                                                show: function() {
                                                                                    return ("cn" === _vm_.lang || "jp" === _vm_.lang) && "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "caltext"
                                                                                    ],
                                                                                    style: {
                                                                                        width: "145px"
                                                                                    },
                                                                                    value: function() {
                                                                                        return _vm_.cvalDisplay + "_";
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "39px",
                                                                                    left: "105px",
                                                                                    width: "233px",
                                                                                    height: "52px"
                                                                                },
                                                                                show: function() {
                                                                                    return ("cn" === _vm_.lang || "jp" === _vm_.lang) && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("scroll", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    scrollX: function() {
                                                                                        return true;
                                                                                    },
                                                                                    style: {
                                                                                        position: "absolute",
                                                                                        left: "0px",
                                                                                        width: "100%",
                                                                                        height: "42px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            position: "absolute",
                                                                                            left: "0px",
                                                                                            height: "42px",
                                                                                            paddingLeft: "20px",
                                                                                            paddingRight: "20px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultRow0;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "$item"
                                                                                        }
                                                                                    }, function($idx, $item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    show: function() {
                                                                                                        return _vm_.resultRow0.length > $idx;
                                                                                                    },
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        paddingRight: "10px"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return _vm_.resultRow0[$idx];
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "35px",
                                                                                    left: "95px",
                                                                                    width: "290px",
                                                                                    height: "60px",
                                                                                    alignContent: "center",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: "/common/components/InputMethod/assets/full/123_boardless.png"
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return "down" === _vm_.downFlag;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("list", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "list3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultList2;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "itemArray"
                                                                                        }
                                                                                    }, function($idx, itemArray) {
                                                                                        return [
                                                                                            aiot.__ce__("list-item", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    type: "waitingRows62full",
                                                                                                    classList: [
                                                                                                        "item3"
                                                                                                    ]
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__cf__({
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        exp: function() {
                                                                                                            return itemArray;
                                                                                                        },
                                                                                                        key: "$idx",
                                                                                                        value: "item"
                                                                                                    }
                                                                                                }, function($idx, item) {
                                                                                                    return [
                                                                                                        aiot.__ce__("div", {
                                                                                                            __vm__: _vm_,
                                                                                                            __opts__: {
                                                                                                                classList: [
                                                                                                                    "item",
                                                                                                                    "column",
                                                                                                                    "center"
                                                                                                                ],
                                                                                                                style: {
                                                                                                                    height: "52px"
                                                                                                                }
                                                                                                            }
                                                                                                        }, [
                                                                                                            aiot.__ce__("text", {
                                                                                                                __vm__: _vm_,
                                                                                                                __opts__: {
                                                                                                                    classList: [
                                                                                                                        "calbtn-down-text"
                                                                                                                    ],
                                                                                                                    events: {
                                                                                                                        click: function(evt) {
                                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                                        }
                                                                                                                    },
                                                                                                                    value: function() {
                                                                                                                        return item;
                                                                                                                    }
                                                                                                                }
                                                                                                            }, [])
                                                                                                        ])
                                                                                                    ];
                                                                                                })
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        }),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "95px",
                                                                                    width: "294px",
                                                                                    height: "60px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("select", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "选择"
                                                                                }
                                                                            }, []),
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return _vm_.keys["t9"][0];
                                                                                    },
                                                                                    key: "$idx",
                                                                                    value: "item"
                                                                                }
                                                                            }, function($idx, item) {
                                                                                return [
                                                                                    aiot.__ce__("text", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            classList: [
                                                                                                "calbtnt9"
                                                                                            ],
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                }
                                                                                            },
                                                                                            value: function() {
                                                                                                return item.toUpperCase();
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            })
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "163px",
                                                                                    left: "95px",
                                                                                    width: "294px",
                                                                                    height: "60px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return _vm_.keys["t9"][1];
                                                                                    },
                                                                                    key: "$idx",
                                                                                    value: "item"
                                                                                }
                                                                            }, function($idx, item) {
                                                                                return [
                                                                                    aiot.__ce__("text", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            classList: [
                                                                                                "calbtnt9"
                                                                                            ],
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                }
                                                                                            },
                                                                                            value: function() {
                                                                                                return item.toUpperCase();
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            })
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "227px",
                                                                                    left: "95px",
                                                                                    width: "294px",
                                                                                    height: "60px"
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__cf__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    exp: function() {
                                                                                        return _vm_.keys["t9"][2];
                                                                                    },
                                                                                    key: "$idx",
                                                                                    value: "item"
                                                                                }
                                                                            }, function($idx, item) {
                                                                                return [
                                                                                    aiot.__ce__("text", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            classList: [
                                                                                                "calbtnt9"
                                                                                            ],
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                }
                                                                                            },
                                                                                            value: function() {
                                                                                                return item.toUpperCase();
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            })
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "35px",
                                                                                    left: "95px",
                                                                                    width: "294px",
                                                                                    height: "60px"
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("7", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "7"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("8", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "8"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("9", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "9"
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "95px",
                                                                                    width: "294px",
                                                                                    height: "60px"
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("4", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "4"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("5", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "5"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("6", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "6"
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "163px",
                                                                                    left: "95px",
                                                                                    width: "294px",
                                                                                    height: "60px"
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("1", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "1"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("2", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "2"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("3", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "3"
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "227px",
                                                                                    left: "95px",
                                                                                    width: "294px",
                                                                                    height: "60px"
                                                                                },
                                                                                show: function() {
                                                                                    return _vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("\uFF0C", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "，"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("0", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "0"
                                                                                }
                                                                            }, []),
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect("\u3002", evt);
                                                                                        }
                                                                                    },
                                                                                    value: "。"
                                                                                }
                                                                            }, [])
                                                                        ]),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/t9/del.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "35px",
                                                                                    left: "389px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("D", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/t9/space.png",
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "99px",
                                                                                    left: "389px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("space", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    top: "204px",
                                                                                    left: "78px"
                                                                                },
                                                                                src: "/common/components/InputMethod/assets/full/up.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                },
                                                                                show: function() {
                                                                                    return "down" === _vm_.downFlag;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ])
                                                                ];
                                                            })
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "rect" === _vm_.screentype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    width: "100%",
                                                                    height: "255px",
                                                                    flexDirection: "column"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "T9" == _vm_.keyboardtype && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "-11px",
                                                                                width: "100%",
                                                                                height: "276px",
                                                                                justifyContent: "center"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    top: "77px",
                                                                                    height: "189px",
                                                                                    width: "100%",
                                                                                    alignItems: "stretch",
                                                                                    justifyContent: "space-between",
                                                                                    flexDirection: "column",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "3px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "3px"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "keyboard-rows-rect-t9"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnt9",
                                                                                            "calbtnt9-rect"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect("select", evt);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__ce__("span", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            value: "选择"
                                                                                        }
                                                                                    }),
                                                                                    aiot.__ci__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            shown: function() {
                                                                                                return 0 != _vm_.waitingList.length;
                                                                                            }
                                                                                        }
                                                                                    }, function() {
                                                                                        return [
                                                                                            aiot.__ce__("span", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "waiting-keys"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        color: "rgb(13, 132, 255)"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelectWaiting(_vm_.waitingIndex, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return _vm_.waitingList[_vm_.waitingIndex].toUpperCase();
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ]),
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["t9"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtnt9",
                                                                                                    "calbtnt9-rect"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item.toUpperCase();
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
                                                                                        "keyboard-rows-rect-t9"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["t9"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtnt9",
                                                                                                    "calbtnt9-rect"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item.toUpperCase();
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
                                                                                        "keyboard-rows-rect-t9"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["t9"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtnt9",
                                                                                                    "calbtnt9-rect"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item.toUpperCase();
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ])
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return !("T9" == _vm_.keyboardtype && !_vm_.numFlag);
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "-11px",
                                                                                width: "100%",
                                                                                height: "276px",
                                                                                justifyContent: "center"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("progress", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                percent: function() {
                                                                                    return _vm_.percent67;
                                                                                },
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    bottom: "12px",
                                                                                    width: "80px",
                                                                                    color: "#ffffff",
                                                                                    strokeWidth: "6px",
                                                                                    layerColor: "#262626"
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__ce__("scroll", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                id: "keyboard67",
                                                                                scrollX: function() {
                                                                                    return true;
                                                                                },
                                                                                events: {
                                                                                    scroll: function(evt) {
                                                                                        return _vm_.handelScroll(evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return !_vm_.numFlag;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__ce__("div", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            style: {
                                                                                                left: "6px",
                                                                                                flexDirection: "column"
                                                                                            }
                                                                                        }
                                                                                    }, [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "0px",
                                                                                                    marginTop: "0px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["full"][0];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ]),
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "32px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["full"][1];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ]),
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "64px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["full"][2];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            }),
                                                                                            aiot.__ce__("image", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    src: "/common/components/InputMethod/assets/horizontal/space.png",
                                                                                                    style: {
                                                                                                        width: "60px",
                                                                                                        height: "60px"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onBtnClick("space", evt);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ])
                                                                                    ])
                                                                                ];
                                                                            }),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__ce__("div", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            style: {
                                                                                                left: "6px",
                                                                                                flexDirection: "column"
                                                                                            }
                                                                                        }
                                                                                    }, [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "0px",
                                                                                                    marginTop: "0px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["sign"][0];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ]),
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "32px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["sign"][1];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ]),
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "64px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["sign"][2];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ])
                                                                                    ])
                                                                                ];
                                                                            }),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return _vm_.numFlag_jp;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__ce__("div", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            style: {
                                                                                                left: "6px",
                                                                                                flexDirection: "column"
                                                                                            }
                                                                                        }
                                                                                    }, [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "0px",
                                                                                                    marginTop: "0px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["sign_jp"][0];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ]),
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "32px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["sign_jp"][1];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ]),
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                style: {
                                                                                                    marginLeft: "64px",
                                                                                                    marginTop: "-5px",
                                                                                                    height: "60px"
                                                                                                }
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return _vm_.keys["sign_jp"][2];
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("text", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "calbtn67"
                                                                                                            ],
                                                                                                            events: {
                                                                                                                click: function(evt) {
                                                                                                                    return _vm_.onSelect(item, evt);
                                                                                                                }
                                                                                                            },
                                                                                                            value: function() {
                                                                                                                return item;
                                                                                                            }
                                                                                                        }
                                                                                                    }, [])
                                                                                                ];
                                                                                            })
                                                                                        ])
                                                                                    ])
                                                                                ];
                                                                            })
                                                                        ])
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        width: "100%",
                                                                        flexDirection: "row",
                                                                        justifyContent: "center",
                                                                        top: "6px",
                                                                        paddingTop: "0",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "0",
                                                                        paddingLeft: "6px"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/cn.png",
                                                                                style: {
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("lang", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/jp.png",
                                                                                style: {
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("lang", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return ("cn" === _vm_.lang || "jp" === _vm_.lang) && !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    flex: 1,
                                                                                    height: "60px",
                                                                                    backgroundColor: "#262626",
                                                                                    borderTopColor: "#333333",
                                                                                    borderRightColor: "#333333",
                                                                                    borderBottomColor: "#333333",
                                                                                    borderLeftColor: "#333333",
                                                                                    borderTopWidth: "3px",
                                                                                    borderRightWidth: "3px",
                                                                                    borderBottomWidth: "3px",
                                                                                    borderLeftWidth: "3px",
                                                                                    borderRadius: "100px",
                                                                                    flexDirection: "row",
                                                                                    alignItems: "center"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("scroll", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    id: "cvalWaiting",
                                                                                    scrollX: function() {
                                                                                        return true;
                                                                                    },
                                                                                    style: {
                                                                                        position: "absolute",
                                                                                        width: "85%",
                                                                                        height: "42px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            position: "absolute",
                                                                                            left: "0px",
                                                                                            height: "42px",
                                                                                            paddingLeft: "20px",
                                                                                            paddingRight: "20px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.resultRow0;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "$item"
                                                                                        }
                                                                                    }, function($idx, $item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    show: function() {
                                                                                                        return _vm_.resultRow0.length > $idx;
                                                                                                    },
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        paddingRight: "10px"
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return _vm_.resultRow0[$idx];
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ]),
                                                                            aiot.__ci__({
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    shown: function() {
                                                                                        return _vm_.resultRow0.length > 0;
                                                                                    }
                                                                                }
                                                                            }, function() {
                                                                                return [
                                                                                    aiot.__ce__("image", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            style: {
                                                                                                position: "absolute",
                                                                                                right: "8px",
                                                                                                width: "60px",
                                                                                                height: "40px"
                                                                                            },
                                                                                            src: "/common/components/InputMethod/assets/horizontal/down2.png",
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onBtnClick("down", evt);
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ];
                                                                            })
                                                                        ])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/123.png",
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum_jp", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/en.png",
                                                                                style: {
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("lang", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/bigA.png",
                                                                                style: {
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    marginLeft: "6px",
                                                                                    width: "94px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchLow", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/a.png",
                                                                                style: {
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    marginLeft: "6px",
                                                                                    width: "94px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchUpper", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/123.png",
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "94px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchNum", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return _vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/back2.png",
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "159px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("switchCn", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/del.png",
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px",
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("D", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/common/components/InputMethod/assets/horizontal/del2.png",
                                                                                style: {
                                                                                    marginLeft: "6px",
                                                                                    paddingTop: "6px",
                                                                                    paddingRight: "6px",
                                                                                    paddingBottom: "6px",
                                                                                    paddingLeft: "6px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("D", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                left: "0px",
                                                                                top: "0px",
                                                                                width: "100%",
                                                                                height: "252px",
                                                                                backgroundColor: "black",
                                                                                justifyContent: "center",
                                                                                flexDirection: "column",
                                                                                alignItems: "center"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "list67"
                                                                                ]
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("list", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        width: "100%",
                                                                                        height: "100%"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.resultList2;
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "itemArray"
                                                                                    }
                                                                                }, function($idx, itemArray) {
                                                                                    return [
                                                                                        aiot.__ce__("list-item", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                type: "waitingRows67",
                                                                                                classList: [
                                                                                                    "item67"
                                                                                                ]
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return itemArray;
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("div", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "item",
                                                                                                                "column",
                                                                                                                "center"
                                                                                                            ]
                                                                                                        }
                                                                                                    }, [
                                                                                                        aiot.__ce__("text", {
                                                                                                            __vm__: _vm_,
                                                                                                            __opts__: {
                                                                                                                classList: [
                                                                                                                    "calbtn-down-text"
                                                                                                                ],
                                                                                                                events: {
                                                                                                                    click: function(evt) {
                                                                                                                        return _vm_.onRsSelect(item, evt);
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function() {
                                                                                                                    return item;
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])
                                                                                                    ])
                                                                                                ];
                                                                                            })
                                                                                        ])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ]),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    marginTop: "5px"
                                                                                },
                                                                                src: "/common/components/InputMethod/assets/horizontal/up2.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ])
                                                                ];
                                                            })
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "pill-shaped" === _vm_.screentype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    width: "100%",
                                                                    height: "305px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        left: "0px",
                                                                        top: "34px",
                                                                        width: "100%",
                                                                        height: "276px"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("progress", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        percent: function() {
                                                                            return 30 + _vm_.percent66;
                                                                        },
                                                                        type: "arc",
                                                                        style: function() {
                                                                            return __webpack_require__.g.$translateStyle$("start-angle:204deg;total-angle:-48deg;width:188px;height:188px;top:82px;left:2px;position:absolute;color:#ffffff;stroke-width:6px;layer-color:#262626;margin-left: " + (_vm_.screenWidth - 192) / 2 + "px;");
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("scroll", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        id: "keyboard66",
                                                                        scrollX: function() {
                                                                            return true;
                                                                        },
                                                                        events: {
                                                                            scroll: function(evt) {
                                                                                return _vm_.handelScroll(evt);
                                                                            }
                                                                        },
                                                                        style: function() {
                                                                            return __webpack_require__.g.$translateStyle$("padding-left: " + (_vm_.screenWidth - 192) / 2 + "px;padding-right: " + (_vm_.screenWidth - 192) / 2 + "px;");
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return !_vm_.numFlag;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        left: "3px",
                                                                                        flexDirection: "column"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "0px",
                                                                                            marginTop: "0px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["full"][0];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ]),
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "32px",
                                                                                            marginTop: "-5px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["full"][1];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ]),
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "64px",
                                                                                            marginTop: "-5px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["full"][2];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    }),
                                                                                    aiot.__ce__("image", {
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            src: "/common/components/InputMethod/assets/arc/space.png",
                                                                                            style: {
                                                                                                width: "60px",
                                                                                                height: "60px"
                                                                                            },
                                                                                            events: {
                                                                                                click: function(evt) {
                                                                                                    return _vm_.onBtnClick("space", evt);
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }, [])
                                                                                ])
                                                                            ])
                                                                        ];
                                                                    }),
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        left: "3px",
                                                                                        flexDirection: "column"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "0px",
                                                                                            marginTop: "0px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign"][0];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ]),
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "32px",
                                                                                            marginTop: "-5px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign"][1];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ]),
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "64px",
                                                                                            marginTop: "-5px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign"][2];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ])
                                                                        ];
                                                                    }),
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return _vm_.numFlag_jp;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        left: "3px",
                                                                                        flexDirection: "column"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "0px",
                                                                                            marginTop: "0px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign_jp"][0];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ]),
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "32px",
                                                                                            marginTop: "-5px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign_jp"][1];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ]),
                                                                                aiot.__ce__("div", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        style: {
                                                                                            marginLeft: "64px",
                                                                                            marginTop: "-5px",
                                                                                            height: "60px"
                                                                                        }
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return _vm_.keys["sign_jp"][2];
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("text", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn66"
                                                                                                    ],
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onSelect(item, evt);
                                                                                                        }
                                                                                                    },
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ])
                                                                        ];
                                                                    })
                                                                ])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;top: 0px;width: 192px;height: 110px;");
                                                                    },
                                                                    static: true
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "3px",
                                                                            top: "47px",
                                                                            width: "186px",
                                                                            height: "60px"
                                                                        },
                                                                        src: "/common/components/InputMethod/assets/arc/search.png"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("scroll", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        id: "cvalWaiting",
                                                                        scrollX: function() {
                                                                            return true;
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "15px",
                                                                            top: "56px",
                                                                            width: "144px",
                                                                            height: "42px"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                left: "0px",
                                                                                top: "0px",
                                                                                height: "42px",
                                                                                paddingRight: "20px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultRow0;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "$item"
                                                                            }
                                                                        }, function($idx, $item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        show: function() {
                                                                                            return _vm_.resultRow0.length > $idx;
                                                                                        },
                                                                                        classList: [
                                                                                            "calbtn02"
                                                                                        ],
                                                                                        style: {
                                                                                            paddingRight: "10px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onRsSelect(_vm_.resultRow0[$idx], evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.resultRow0[$idx];
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ]),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        show: function() {
                                                                            return _vm_.resultRow0.length > 0;
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "120px",
                                                                            top: "57px",
                                                                            width: "60px",
                                                                            height: "40px"
                                                                        },
                                                                        src: "/common/components/InputMethod/assets/arc/down2.png",
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("down", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: function() {
                                                                            return "/common/components/InputMethod/assets/arc/" + _vm_.lang + ".png";
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "9px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("lang", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/common/components/InputMethod/assets/arc/back2.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "9px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchCn", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return _vm_.numFlag && "cn" === _vm_.lang || _vm_.numFlag_jp && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/common/components/InputMethod/assets/arc/123.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "70px",
                                                                            top: "0px",
                                                                            width: "52px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchNum", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/common/components/InputMethod/assets/arc/123.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "70px",
                                                                            top: "0px",
                                                                            width: "52px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchNum_jp", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.numFlag_jp && "jp" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/common/components/InputMethod/assets/arc/bigA.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "72px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchLow", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/common/components/InputMethod/assets/arc/a.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "0px",
                                                                            left: "72px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("switchUpper", evt);
                                                                            }
                                                                        },
                                                                        show: function() {
                                                                            return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/common/components/InputMethod/assets/arc/del.png",
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "135px",
                                                                            top: "0px",
                                                                            width: "48px",
                                                                            height: "42px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("D", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "47px",
                                                                                width: "100%",
                                                                                height: "263px",
                                                                                backgroundColor: "black"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: function() {
                                                                                    return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;width: 192px;height: 263px;");
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("list", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "list66"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.resultList2;
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "itemArray"
                                                                                    }
                                                                                }, function($idx, itemArray) {
                                                                                    return [
                                                                                        aiot.__ce__("list-item", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                type: "waitingRows66",
                                                                                                classList: [
                                                                                                    "item66"
                                                                                                ]
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__cf__({
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    exp: function() {
                                                                                                        return itemArray;
                                                                                                    },
                                                                                                    key: "$idx",
                                                                                                    value: "item"
                                                                                                }
                                                                                            }, function($idx, item) {
                                                                                                return [
                                                                                                    aiot.__ce__("div", {
                                                                                                        __vm__: _vm_,
                                                                                                        __opts__: {
                                                                                                            classList: [
                                                                                                                "item",
                                                                                                                "column",
                                                                                                                "center"
                                                                                                            ]
                                                                                                        }
                                                                                                    }, [
                                                                                                        aiot.__ce__("text", {
                                                                                                            __vm__: _vm_,
                                                                                                            __opts__: {
                                                                                                                classList: [
                                                                                                                    "calbtn-down-text"
                                                                                                                ],
                                                                                                                events: {
                                                                                                                    click: function(evt) {
                                                                                                                        return _vm_.onRsSelect(item, evt);
                                                                                                                    }
                                                                                                                },
                                                                                                                value: function() {
                                                                                                                    return item;
                                                                                                                }
                                                                                                            }
                                                                                                        }, [])
                                                                                                    ])
                                                                                                ];
                                                                                            })
                                                                                        ])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        position: "absolute",
                                                                                        top: "196px",
                                                                                        left: "56px",
                                                                                        width: "80px",
                                                                                        height: "60px"
                                                                                    },
                                                                                    src: "/common/components/InputMethod/assets/arc/up2.png",
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onBtnClick("down", evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ])
                                                                    ])
                                                                ];
                                                            })
                                                        ])
                                                    ];
                                                })
                                            ])
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
                    "./src/common/components/InputMethod/assets/dic.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.getDict = getDict;
                        let _dict = null;
                        function getDict() {
                            if (_dict) return _dict;
                            _dict = {
                                a: "阿啊呵腌嗄吖锕",
                                e: "额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",
                                ai: "爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",
                                ei: "诶",
                                xi: "系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",
                                yi: "一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",
                                an: "安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",
                                han: "厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",
                                ang: "昂仰盎肮",
                                ao: "奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",
                                wa: "瓦挖娃洼袜蛙凹哇佤娲呙腽",
                                yu: "于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",
                                niu: "牛纽扭钮拗妞忸狃",
                                o: "哦噢喔",
                                ba: "把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",
                                pa: "怕帕爬扒趴琶啪葩耙杷钯筢",
                                pi: "被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",
                                bi: "比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",
                                bai: "百白败摆伯拜柏佰掰呗擘捭稗",
                                bo: "波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",
                                bei: "北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",
                                ban: "办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",
                                pan: "判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",
                                bin: "份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",
                                bang: "帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",
                                pang: "旁庞乓磅螃彷滂逄耪",
                                beng: "泵崩蚌蹦迸绷甭嘣甏堋",
                                bao: "报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",
                                bu: "不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",
                                pu: "普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",
                                mian: "面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",
                                po: "破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",
                                fan: "反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",
                                fu: "府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",
                                ben: "本体奔苯笨夯贲锛畚坌",
                                feng: "风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",
                                bian: "变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",
                                pian: "便片篇偏骗翩扁骈胼蹁谝犏缏",
                                zhen: "镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",
                                biao: "表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",
                                piao: "票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",
                                huo: "和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",
                                bie: "别鳖憋瘪蹩",
                                min: "民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",
                                fen: "分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",
                                bing: "并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",
                                geng: "更耕颈庚耿梗埂羹哽赓绠鲠",
                                fang: "方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",
                                xian: "现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",
                                fou: "不否缶",
                                ca: "拆擦嚓礤",
                                cha: "查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",
                                cai: "才采财材菜彩裁蔡猜踩睬",
                                can: "参残餐灿惨蚕掺璨惭粲孱骖黪",
                                shen: "信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",
                                cen: "参岑涔",
                                san: "三参散伞叁糁馓毵",
                                cang: "藏仓苍沧舱臧伧",
                                zang: "藏脏葬赃臧奘驵",
                                chen: "称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",
                                cao: "草操曹槽糙嘈漕螬艚屮",
                                ce: "策测册侧厕栅恻",
                                ze: "责则泽择侧咋啧仄箦赜笮舴昃迮帻",
                                zhai: "债择齐宅寨侧摘窄斋祭翟砦瘵哜",
                                dao: "到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",
                                ceng: "层曾蹭噌",
                                zha: "查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",
                                chai: "差拆柴钗豺侪虿瘥",
                                ci: "次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",
                                zi: "资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",
                                cuo: "措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",
                                chan: "产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",
                                shan: "山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",
                                zhan: "展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",
                                xin: "新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",
                                lian: "联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",
                                chang: "场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",
                                zhang: "长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",
                                chao: "超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",
                                zhao: "着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",
                                zhou: "调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",
                                che: "车彻撤尺扯澈掣坼砗屮",
                                ju: "车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",
                                cheng: "成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",
                                rong: "容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",
                                sheng: "生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",
                                deng: "等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",
                                zhi: "制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",
                                zheng: "政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",
                                tang: "堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",
                                chi: "持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",
                                shi: "是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",
                                qi: "企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",
                                chuai: "揣踹啜搋膪",
                                tuo: "托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",
                                duo: "多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",
                                xue: "学血雪削薛穴靴谑噱鳕踅泶彐",
                                chong: "重种充冲涌崇虫宠忡憧舂茺铳艟",
                                chou: "筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",
                                qiu: "求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",
                                xiu: "修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",
                                chu: "出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",
                                tuan: "团揣湍疃抟彖",
                                zhui: "追坠缀揣椎锥赘惴隹骓缒",
                                chuan: "传川船穿串喘椽舛钏遄氚巛舡",
                                zhuan: "专转传赚砖撰篆馔啭颛",
                                yuan: "元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",
                                cuan: "窜攒篡蹿撺爨汆镩",
                                chuang: "创床窗闯幢疮怆",
                                zhuang: "装状庄壮撞妆幢桩奘僮戆",
                                chui: "吹垂锤炊椎陲槌捶棰",
                                chun: "春纯醇淳唇椿蠢鹑朐莼肫蝽",
                                zhun: "准屯淳谆肫窀",
                                cu: "促趋趣粗簇醋卒蹴猝蹙蔟殂徂",
                                dun: "吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",
                                qu: "区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",
                                xu: "需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",
                                chuo: "辍绰戳淖啜龊踔辶",
                                zu: "组族足祖租阻卒俎诅镞菹",
                                ji: "济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",
                                cong: "从丛匆聪葱囱琮淙枞骢苁璁",
                                zong: "总从综宗纵踪棕粽鬃偬枞腙",
                                cou: "凑辏腠楱",
                                cui: "衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",
                                wei: "为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",
                                cun: "村存寸忖皴",
                                zuo: "作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",
                                zuan: "钻纂攥缵躜",
                                da: "大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",
                                dai: "大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",
                                tai: "大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",
                                ta: "他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",
                                dan: "但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",
                                lu: "路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",
                                tan: "谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",
                                ren: "人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",
                                jie: "家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",
                                yan: "研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",
                                dang: "当党档荡挡宕砀铛裆凼菪谠",
                                tao: "套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",
                                tiao: "条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",
                                te: "特忑忒铽慝",
                                de: "的地得德底锝",
                                dei: "得",
                                di: "的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",
                                ti: "体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",
                                tui: "推退弟腿褪颓蜕忒煺",
                                you: "有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",
                                dian: "电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",
                                tian: "天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",
                                zhu: "主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",
                                nian: "年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",
                                diao: "调掉雕吊钓刁貂凋碉鲷叼铫铞",
                                yao: "要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",
                                die: "跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",
                                she: "设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",
                                ye: "业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",
                                xie: "些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",
                                zhe: "这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",
                                ding: "定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",
                                diu: "丢铥",
                                ting: "听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",
                                dong: "动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",
                                tong: "同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",
                                zhong: "中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",
                                dou: "都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",
                                du: "度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",
                                duan: "断段短端锻缎煅椴簖",
                                dui: "对队追敦兑堆碓镦怼憝",
                                rui: "瑞兑锐睿芮蕊蕤蚋枘",
                                yue: "月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",
                                tun: "吞屯囤褪豚臀饨暾氽",
                                hui: "会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",
                                wu: "务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",
                                ya: "亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",
                                he: "和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",
                                wo: "我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",
                                en: "恩摁蒽",
                                n: "嗯唔",
                                er: "而二尔儿耳迩饵洱贰铒珥佴鸸鲕",
                                fa: "发法罚乏伐阀筏砝垡珐",
                                quan: "全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",
                                fei: "费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",
                                pei: "配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",
                                ping: "平评凭瓶冯屏萍苹乒坪枰娉俜鲆",
                                fo: "佛",
                                hu: "和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",
                                ga: "夹咖嘎尬噶旮伽尕钆尜",
                                ge: "个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",
                                ha: "哈蛤铪",
                                xia: "下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",
                                gai: "改该盖概溉钙丐芥赅垓陔戤",
                                hai: "海还害孩亥咳骸骇氦嗨胲醢",
                                gan: "干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",
                                gang: "港钢刚岗纲冈杠缸扛肛罡戆筻",
                                jiang: "将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",
                                hang: "行航杭巷夯吭桁沆绗颃",
                                gong: "工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",
                                hong: "红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",
                                guang: "广光逛潢犷胱咣桄",
                                qiong: "穷琼穹邛茕筇跫蛩銎",
                                gao: "高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",
                                hao: "好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",
                                li: "理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",
                                jia: "家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",
                                luo: "落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",
                                ke: "可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",
                                qia: "卡恰洽掐髂袷咭葜",
                                gei: "给",
                                gen: "根跟亘艮哏茛",
                                hen: "很狠恨痕哏",
                                gou: "构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",
                                kou: "口扣寇叩抠佝蔻芤眍筘",
                                gu: "股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",
                                pai: "牌排派拍迫徘湃俳哌蒎",
                                gua: "括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",
                                tou: "投头透偷愉骰亠",
                                guai: "怪拐乖",
                                kuai: "会快块筷脍蒯侩浍郐蒉狯哙",
                                guan: "关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",
                                wan: "万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",
                                ne: "呢哪呐讷疒",
                                gui: "规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",
                                jun: "军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",
                                jiong: "窘炯迥炅冂扃",
                                jue: "决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",
                                gun: "滚棍辊衮磙鲧绲丨",
                                hun: "婚混魂浑昏棍珲荤馄诨溷阍",
                                guo: "国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",
                                hei: "黑嘿嗨",
                                kan: "看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",
                                heng: "衡横恒亨哼珩桁蘅",
                                mo: "万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",
                                peng: "鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",
                                hou: "后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",
                                hua: "化华划话花画滑哗豁骅桦猾铧砉",
                                huai: "怀坏淮徊槐踝",
                                huan: "还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",
                                xun: "讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",
                                huang: "黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",
                                nai: "能乃奶耐奈鼐萘氖柰佴艿",
                                luan: "乱卵滦峦鸾栾銮挛孪脔娈",
                                qie: "切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",
                                jian: "建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",
                                nan: "南难男楠喃囡赧腩囝蝻",
                                qian: "前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",
                                qiang: "强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",
                                xiang: "向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",
                                jiao: "教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",
                                zhuo: "着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",
                                qiao: "桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",
                                xiao: "小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",
                                si: "司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",
                                kai: "开凯慨岂楷恺揩锴铠忾垲剀锎蒈",
                                jin: "进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",
                                qin: "亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",
                                jing: "经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",
                                ying: "应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",
                                jiu: "就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",
                                zui: "最罪嘴醉咀蕞觜",
                                juan: "卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",
                                suan: "算酸蒜狻",
                                yun: "员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",
                                qun: "群裙逡麇",
                                ka: "卡喀咖咔咯佧胩",
                                kang: "康抗扛慷炕亢糠伉钪闶",
                                keng: "坑铿吭",
                                kao: "考靠烤拷铐栲尻犒",
                                ken: "肯垦恳啃龈裉",
                                yin: "因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",
                                kong: "空控孔恐倥崆箜",
                                ku: "苦库哭酷裤枯窟挎骷堀绔刳喾",
                                kua: "跨夸垮挎胯侉",
                                kui: "亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",
                                kuan: "款宽髋",
                                kuang: "况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",
                                que: "确却缺雀鹊阙瘸榷炔阕悫",
                                kun: "困昆坤捆琨锟鲲醌髡悃阃",
                                kuo: "扩括阔廓蛞",
                                la: "拉落垃腊啦辣蜡喇剌旯砬邋瘌",
                                lai: "来莱赖睐徕籁涞赉濑癞崃疠铼",
                                lan: "兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",
                                lin: "林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",
                                lang: "浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",
                                liang: "量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",
                                lao: "老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",
                                mu: "目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",
                                le: "了乐勒肋叻鳓嘞仂泐",
                                lei: "类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",
                                sui: "随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",
                                lie: "列烈劣裂猎冽咧趔洌鬣埒捩躐",
                                leng: "冷愣棱楞塄",
                                ling: "领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",
                                lia: "俩",
                                liao: "了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",
                                liu: "流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",
                                lun: "论轮伦仑纶沦抡囵",
                                lv: "率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",
                                lou: "楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",
                                mao: "贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",
                                long: "龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",
                                nong: "农浓弄脓侬哝",
                                shuang: "双爽霜孀泷",
                                shu: "术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",
                                shuai: "率衰帅摔甩蟀",
                                lve: "略掠锊",
                                ma: "么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",
                                me: "么麽",
                                mai: "买卖麦迈脉埋霾荬劢",
                                man: "满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",
                                mi: "米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",
                                men: "们门闷瞒汶扪焖懑鞔钔",
                                mang: "忙盲茫芒氓莽蟒邙硭漭",
                                meng: "蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",
                                miao: "苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",
                                mou: "某谋牟缪眸哞鍪蛑侔厶",
                                miu: "缪谬",
                                mei: "美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",
                                wen: "文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",
                                mie: "灭蔑篾乜咩蠛",
                                ming: "明名命鸣铭冥茗溟酩瞑螟暝",
                                na: "内南那纳拿哪娜钠呐捺衲镎肭",
                                nei: "内那哪馁",
                                nuo: "难诺挪娜糯懦傩喏搦锘",
                                ruo: "若弱偌箬",
                                nang: "囊馕囔曩攮",
                                nao: "脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",
                                ni: "你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",
                                nen: "嫩恁",
                                neng: "能",
                                nin: "您恁",
                                niao: "鸟尿溺袅脲茑嬲",
                                nie: "摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",
                                niang: "娘酿",
                                ning: "宁凝拧泞柠咛狞佞聍甯",
                                nu: "努怒奴弩驽帑孥胬",
                                nv: "女钕衄恧",
                                ru: "入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",
                                nuan: "暖",
                                nve: "虐疟",
                                re: "热若惹喏",
                                ou: "区欧偶殴呕禺藕讴鸥瓯沤耦怄",
                                pao: "跑炮泡抛刨袍咆疱庖狍匏脬",
                                pou: "剖掊裒",
                                pen: "喷盆湓",
                                pie: "瞥撇苤氕丿",
                                pin: "品贫聘频拼拚颦姘嫔榀牝",
                                se: "色塞瑟涩啬穑铯槭",
                                qing: "情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",
                                zan: "赞暂攒堑昝簪糌瓒錾趱拶",
                                shao: "少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",
                                sao: "扫骚嫂梢缫搔瘙臊埽缲鳋",
                                sha: "沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",
                                xuan: "县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",
                                ran: "然染燃冉苒髯蚺",
                                rang: "让壤攘嚷瓤穰禳",
                                rao: "绕扰饶娆桡荛",
                                reng: "仍扔",
                                ri: "日",
                                rou: "肉柔揉糅鞣蹂",
                                ruan: "软阮朊",
                                run: "润闰",
                                sa: "萨洒撒飒卅仨脎",
                                suo: "所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",
                                sai: "思赛塞腮噻鳃",
                                shui: "说水税谁睡氵",
                                sang: "桑丧嗓搡颡磉",
                                sen: "森",
                                seng: "僧",
                                shai: "筛晒",
                                shang: "上商尚伤赏汤裳墒晌垧觞殇熵绱",
                                xing: "行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",
                                shou: "收手受首售授守寿瘦兽狩绶艏扌",
                                shuo: "说数硕烁朔铄妁槊蒴搠",
                                su: "速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",
                                shua: "刷耍唰",
                                shuan: "栓拴涮闩",
                                shun: "顺瞬舜吮",
                                song: "送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",
                                sou: "艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",
                                sun: "损孙笋荪榫隼狲飧",
                                teng: "腾疼藤滕誊",
                                tie: "铁贴帖餮萜",
                                tu: "土突图途徒涂吐屠兔秃凸荼钍菟堍酴",
                                wai: "外歪崴",
                                wang: "王望往网忘亡旺汪枉妄惘罔辋魍",
                                weng: "翁嗡瓮蓊蕹",
                                zhua: "抓挝爪",
                                yang: "样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",
                                xiong: "雄兄熊胸凶匈汹芎",
                                yo: "哟唷",
                                yong: "用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",
                                za: "杂扎咱砸咋匝咂拶",
                                zai: "在再灾载栽仔宰哉崽甾",
                                zao: "造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",
                                zei: "贼",
                                zen: "怎谮",
                                zeng: "增曾综赠憎锃甑罾缯",
                                zhei: "这",
                                zou: "走邹奏揍诹驺陬楱鄹鲰",
                                zhuai: "转拽",
                                zun: "尊遵鳟樽撙",
                                dia: "嗲",
                                nou: "耨"
                            };
                            return _dict;
                        }
                    },
                    "./src/common/components/InputMethod/assets/dicUtil.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.SimpleInputMethod = void 0;
                        var _dic = __webpack_require__("./src/common/components/InputMethod/assets/dic.js");
                        var _dic_jp = __webpack_require__("./src/common/components/InputMethod/assets/dic_jp.js");
                        var _dic_words = __webpack_require__("./src/common/components/InputMethod/assets/dic_words.js");
                        var _dic_words_initials = __webpack_require__("./src/common/components/InputMethod/assets/dic_words_initials.js");
                        var _pinyin_syllables = __webpack_require__("./src/common/components/InputMethod/assets/pinyin_syllables.js");
                        function pushWordHits(val, arr) {
                            if (!val) return;
                            if (Array.isArray(val)) {
                                for(var i = 0; i < val.length; i++)if (val[i] && -1 === arr.indexOf(val[i])) arr.push(val[i]);
                            } else if (-1 === arr.indexOf(val)) arr.push(val);
                        }
                        let SimpleInputMethod = exports.SimpleInputMethod = {
                            dict: {}
                        };
                        SimpleInputMethod.initDict = function() {
                            if (this.dict.syllableSet) return;
                            this.dict.py2hz = (0, _dic.getDict)();
                            this.dict.py2hz2 = {};
                            this.dict.py2hz2['i'] = 'i';
                            this.dict.romaji2kanji = (0, _dic_jp.getDictJp)();
                            this.dict.syllableSet = new Set(_pinyin_syllables.syllables);
                            for(let key in this.dict.py2hz){
                                const ch = key[0];
                                if (!this.dict.py2hz2[ch]) this.dict.py2hz2[ch] = this.dict.py2hz[key];
                                this.dict.syllableSet.add(key);
                            }
                            this.dict.words = (0, _dic_words.getWords)();
                            this.dict.initialsIndex = (0, _dic_words_initials.getInitialsIndex)();
                            this._buildForwardIndex();
                        };
                        SimpleInputMethod._buildForwardIndex = function() {
                            const wmap = this.dict.words || {};
                            const fwd = this.dict.forwardIndex || (this.dict.forwardIndex = {});
                            const keys = Object.keys(wmap);
                            const CHUNK = 200;
                            let i = 0;
                            const step = ()=>{
                                const end = Math.min(i + CHUNK, keys.length);
                                for(; i < end; i++){
                                    const key = keys[i];
                                    if (key.length >= 2) {
                                        const pref = key.charAt(0) + key.charAt(1);
                                        const fi = fwd[pref];
                                        if (fi) fi.push(key);
                                        else fwd[pref] = [
                                            key
                                        ];
                                    }
                                }
                                if (i < keys.length) setTimeout(step, 0);
                            };
                            step();
                        };
                        SimpleInputMethod.getSingleHanzi = function(pinyin, lang = 'cn') {
                            if ('cn' === lang) return this.dict.py2hz2[pinyin] || this.dict.py2hz[pinyin] || '';
                            if ('jp' === lang) return this.dict.romaji2kanji[pinyin] || '';
                            return '';
                        };
                        function getSylTopChar(dict, syl) {
                            const c = dict.py2hz[syl] || '';
                            if (c) return c[0];
                            const w = dict.words && dict.words[syl];
                            if (w) {
                                const f = Array.isArray(w) ? w[0] : w;
                                return f ? f[0] : '';
                            }
                            return '';
                        }
                        SimpleInputMethod.segmentPinyin = function(pinyin) {
                            if (!pinyin) return null;
                            const set = this.dict.syllableSet;
                            const result = [];
                            const pos = [];
                            let i = 0;
                            const maxLen = 24;
                            while(i < pinyin.length && i < maxLen){
                                let matched = '';
                                for(let len = Math.min(6, pinyin.length - i); len >= 1; len--){
                                    const s = pinyin.substr(i, len);
                                    if (set.has(s)) {
                                        matched = s;
                                        break;
                                    }
                                }
                                if (!matched) break;
                                result.push(matched);
                                i += matched.length;
                                pos.push(i);
                            }
                            let rest = pinyin.substr(i);
                            const DUMMY_ENDING = {
                                m: 1,
                                n: 1,
                                ng: 1,
                                hm: 1,
                                hng: 1
                            };
                            if (!rest && result.length >= 2) {
                                const lastSeg = result[result.length - 1];
                                if (DUMMY_ENDING[lastSeg]) {
                                    rest = result.pop();
                                    pos.pop();
                                }
                            }
                            if (!rest && 1 === result.length) return null;
                            if (0 === result.length) return null;
                            return {
                                segs: result,
                                rest: rest,
                                pos: pos
                            };
                        };
                        SimpleInputMethod.completeSyllable = function(prefix, prevSyl) {
                            if (!prefix) return '';
                            const COMMON = {
                                z: 'zai',
                                m: 'ma',
                                b: 'bu',
                                d: 'de',
                                g: 'ge',
                                h: 'he',
                                j: 'ji',
                                k: 'ke',
                                l: 'le',
                                n: 'ne',
                                q: 'qi',
                                r: 'ren',
                                s: 'shi',
                                t: 'ta',
                                w: 'wo',
                                x: 'xi',
                                y: 'yi',
                                zh: 'zhe',
                                ch: 'chi',
                                sh: 'shi',
                                p: 'ping',
                                f: 'fa',
                                c: 'ci',
                                a: 'ai',
                                o: 'ou'
                            };
                            const set = this.dict.syllableSet;
                            const wmap = this.dict.words || {};
                            const candidates = [];
                            for (const syl of set)if (0 === syl.indexOf(prefix) && syl.length > prefix.length) candidates.push(syl);
                            if (0 === candidates.length) return '';
                            if (prevSyl) {
                                for (const c of candidates)if (wmap[prevSyl + c]) return c;
                            }
                            if (COMMON[prefix]) return COMMON[prefix];
                            return candidates[0];
                        };
                        SimpleInputMethod.tryStitchTrailing = function(segResult) {
                            if (!segResult || !segResult.rest) return segResult;
                            const { segs, rest, pos } = segResult;
                            if (!rest) return segResult;
                            const last = segs[segs.length - 1];
                            if (last.length > 2) return segResult;
                            const combined = last + rest;
                            if (this.dict.syllableSet.has(combined)) {
                                const newSegs = segs.slice(0, -1).concat([
                                    combined
                                ]);
                                const newPos = pos.slice();
                                newPos[newPos.length - 1] = (newPos[newPos.length - 1] || 0) + rest.length;
                                return {
                                    segs: newSegs,
                                    rest: '',
                                    pos: newPos
                                };
                            }
                            if (last.length <= 2) {
                                const cleanSegs = segs.slice(0, -1);
                                const cleanPos = pos.slice(0, -1);
                                if (cleanSegs.length >= 2) return {
                                    segs: cleanSegs,
                                    rest: '',
                                    pos: cleanPos
                                };
                            }
                            return segResult;
                        };
                        SimpleInputMethod.matchMixedWords = function(pinyin) {
                            if (!pinyin) return null;
                            const set = this.dict.syllableSet;
                            const tokens = [];
                            const offsets = [];
                            let i = 0;
                            while(i < pinyin.length){
                                let matched = '';
                                for(let len = Math.min(6, pinyin.length - i); len >= 1; len--){
                                    const s = pinyin.substr(i, len);
                                    if (set.has(s)) {
                                        matched = s;
                                        break;
                                    }
                                }
                                if (matched) {
                                    tokens.push(matched);
                                    i += matched.length;
                                } else {
                                    tokens.push(pinyin[i]);
                                    i += 1;
                                }
                                offsets.push(i);
                            }
                            if (tokens.length < 2) return null;
                            let mixedAbbr = '';
                            for(var ti = 0; ti < tokens.length; ti++)mixedAbbr += tokens[ti][0];
                            const idx = this.dict.initialsIndex || {};
                            const matchedKeys = idx[mixedAbbr] || [];
                            if (0 === matchedKeys.length) return null;
                            const hits = [];
                            for(var ki = 0; ki < matchedKeys.length && hits.length < 8; ki++){
                                const key = matchedKeys[ki];
                                const keySegs = this.segmentPinyin(key);
                                if (keySegs && keySegs.segs && keySegs.segs.length === tokens.length) {
                                    var syls = keySegs.segs;
                                    var ok = true;
                                    for(var j = 0; j < tokens.length; j++){
                                        var t = tokens[j];
                                        var s = syls[j];
                                        if (t.length > 1) {
                                            if (t !== s) {
                                                ok = false;
                                                break;
                                            }
                                        } else if (t !== s[0]) {
                                            ok = false;
                                            break;
                                        }
                                    }
                                    if (ok) hits.push({
                                        key: key,
                                        syls: syls,
                                        offsets: offsets
                                    });
                                }
                            }
                            return hits.length > 0 ? hits : null;
                        };
                        SimpleInputMethod.getSegmentedDisplay = function(pinyin) {
                            if (!pinyin) return '';
                            if (!this.dict.syllableSet) return pinyin;
                            var len = pinyin.length;
                            if (1 === len || this.dict.syllableSet.has(pinyin)) return pinyin;
                            const set = this.dict.syllableSet;
                            const tokens = [];
                            let ii = 0;
                            while(ii < len){
                                let mtch = '';
                                for(let l = Math.min(6, len - ii); l >= 1; l--)if (set.has(pinyin.substr(ii, l))) {
                                    mtch = pinyin.substr(ii, l);
                                    break;
                                }
                                if (mtch) {
                                    tokens.push(mtch);
                                    ii += mtch.length;
                                } else {
                                    tokens.push(pinyin[ii]);
                                    ii += 1;
                                }
                            }
                            if (tokens.length >= 2) return tokens.join("'");
                            return pinyin;
                        };
                        SimpleInputMethod.getMultiHanzi = function(pinyin, lang = 'cn') {
                            const empty = {
                                words: [],
                                composed: '',
                                segs: null
                            };
                            if ('cn' !== lang) return empty;
                            if (!this.dict.syllableSet || !this.dict.words) return empty;
                            const wmap = this.dict.words || {};
                            const wordHits = [];
                            var matchSource = '';
                            if (wmap[pinyin]) {
                                pushWordHits(wmap[pinyin], wordHits);
                                matchSource = 'exact';
                            }
                            if (0 === wordHits.length) {
                                const max = Math.min(pinyin.length, 12);
                                for(let len = max; len >= 2; len--){
                                    const head = pinyin.substr(0, len);
                                    if (wmap[head]) {
                                        pushWordHits(wmap[head], wordHits);
                                        matchSource = 'prefix';
                                        break;
                                    }
                                }
                            }
                            if (0 === wordHits.length && pinyin.length >= 2 && !this.dict.syllableSet.has(pinyin)) {
                                const pref = pinyin.substr(0, 2);
                                const fwdIdx = this.dict.forwardIndex || {};
                                const candidates = fwdIdx[pref] || [];
                                let fwdCount = 0;
                                for(let ki = 0; ki < candidates.length && fwdCount < 6; ki++)if (0 === candidates[ki].indexOf(pinyin)) {
                                    pushWordHits(wmap[candidates[ki]], wordHits);
                                    matchSource = 'forward';
                                    fwdCount++;
                                }
                            }
                            if (0 === wordHits.length && pinyin.length >= 2 && pinyin.length <= 8 && !this.dict.syllableSet.has(pinyin)) {
                                const idx = this.dict.initialsIndex || {};
                                const keys = idx[pinyin] || [];
                                for(let k = 0; k < keys.length && k < 6; k++){
                                    pushWordHits(wmap[keys[k]], wordHits);
                                    matchSource = 'initials';
                                }
                            }
                            var mixedInfo = null;
                            if (0 === wordHits.length && pinyin.length >= 2 && pinyin.length <= 8 && !this.dict.syllableSet.has(pinyin)) {
                                const mixed = this.matchMixedWords(pinyin);
                                if (mixed && mixed.length > 0) {
                                    for(let mi = 0; mi < mixed.length; mi++)pushWordHits(wmap[mixed[mi].key], wordHits);
                                    matchSource = 'mixed';
                                    mixedInfo = mixed[0];
                                }
                            }
                            const rawSeg = this.segmentPinyin(pinyin);
                            const segResult = rawSeg ? this.tryStitchTrailing(rawSeg) : null;
                            let segs = segResult ? segResult.segs : null;
                            let pos = segResult ? segResult.pos : null;
                            const rest = segResult ? segResult.rest : '';
                            if (segs) {
                                const DUMMY = {
                                    m: 1,
                                    n: 1,
                                    ng: 1,
                                    hm: 1,
                                    hng: 1
                                };
                                const keep = [];
                                const keepPos = [];
                                for(let j = 0; j < segs.length; j++)if (DUMMY[segs[j]]) {
                                    if ((this.dict.py2hz[segs[j]] || '')[0]) {
                                        keep.push(segs[j]);
                                        keepPos.push(pos[j]);
                                    }
                                } else {
                                    keep.push(segs[j]);
                                    keepPos.push(pos[j]);
                                }
                                segs = keep.length > 0 ? keep : segs;
                                pos = keep.length > 0 ? keepPos : pos;
                            }
                            let sylTopChars = [];
                            if (segs) {
                                for(let j = 0; j < segs.length; j++){
                                    const ch = getSylTopChar(this.dict, segs[j]);
                                    if (ch) sylTopChars.push({
                                        char: ch,
                                        offset: pos[j]
                                    });
                                }
                            }
                            if (segs && rest) {
                                const prevSyl = segs.length >= 1 ? segs[segs.length - 1] : '';
                                const completed = this.completeSyllable(rest, prevSyl);
                                if (completed) {
                                    segs = segs.concat([
                                        completed
                                    ]);
                                    const rawOffset = (pos.length > 0 ? pos[pos.length - 1] : 0) + completed.length;
                                    const lastOffset = Math.min(rawOffset, pinyin.length);
                                    const ch = getSylTopChar(this.dict, completed);
                                    if (ch) sylTopChars.push({
                                        char: ch,
                                        offset: lastOffset
                                    });
                                }
                            }
                            let composed = '';
                            if (segs) {
                                const wmap2 = this.dict.words || {};
                                const result = [];
                                let i = 0;
                                while(i < segs.length){
                                    let matched = false;
                                    for(let len = Math.min(4, segs.length - i); len >= 2; len--){
                                        const key = segs.slice(i, i + len).join('');
                                        const hit = wmap2[key];
                                        if (hit) {
                                            result.push(Array.isArray(hit) ? hit[0] : hit);
                                            i += len;
                                            matched = true;
                                            break;
                                        }
                                    }
                                    if (!matched) {
                                        const ch = getSylTopChar(this.dict, segs[i]);
                                        result.push(ch);
                                        i++;
                                    }
                                }
                                composed = result.join('');
                                if (composed.length !== segs.length) composed = '';
                            }
                            const wout = [];
                            for (const w of wordHits)if (w && -1 === wout.indexOf(w)) wout.push(w);
                            if ('initials' === matchSource && pinyin.length >= 2) {
                                const abbrChars = [];
                                for(var wi = 0; wi < wout.length && abbrChars.length < 12; wi++){
                                    var word = wout[wi];
                                    for(var ci = 0; ci < word.length && abbrChars.length < 12; ci++){
                                        var ch = word[ci];
                                        var offset = ci + 1;
                                        var found = false;
                                        for(var ai = 0; ai < abbrChars.length; ai++)if (abbrChars[ai].char === ch && abbrChars[ai].offset === offset) {
                                            found = true;
                                            break;
                                        }
                                        if (!found) abbrChars.push({
                                            char: ch,
                                            offset: offset
                                        });
                                    }
                                }
                                if (abbrChars.length > 0) sylTopChars = abbrChars;
                            } else if (!segs && wout.length > 0) {
                                const fullChars = [];
                                for(var fi = 0; fi < wout.length && fullChars.length < 8; fi++){
                                    const fch = wout[fi].charAt(0) || '';
                                    let fdup = false;
                                    for(let di = 0; di < fullChars.length; di++)if (fullChars[di].char === fch) {
                                        fdup = true;
                                        break;
                                    }
                                    if (fch && !fdup) fullChars.push({
                                        char: fch,
                                        offset: pinyin.length
                                    });
                                }
                                if (fullChars.length > 0) sylTopChars = fullChars;
                            }
                            if ('mixed' === matchSource && mixedInfo && mixedInfo.syls) {
                                var miSyls = mixedInfo.syls;
                                var mchars = [];
                                for(var mj = 0; mj < miSyls.length; mj++){
                                    var mch = getSylTopChar(this.dict, miSyls[mj]);
                                    if (mch) mchars.push({
                                        char: mch,
                                        offset: mixedInfo.offsets[mj]
                                    });
                                }
                                if (mchars.length > 0) sylTopChars = mchars;
                            }
                            return {
                                words: wout,
                                composed: composed,
                                segs: segs,
                                sylTopChars: sylTopChars
                            };
                        };
                        SimpleInputMethod.getHanzi = function(pinyin, lang = 'cn') {
                            if (!this.dict.syllableSet) return {
                                chars: [],
                                matched: '',
                                multi: null
                            };
                            let chars = [];
                            let matched = '';
                            let result = this.getSingleHanzi(pinyin, lang);
                            if (result) {
                                chars = result.split('');
                                matched = pinyin;
                            } else {
                                let max = Math.min(pinyin.length, 6);
                                for(let len = max; len >= 1; len--){
                                    let head = pinyin.substr(0, len);
                                    let rs = this.getSingleHanzi(head, lang);
                                    if (rs) {
                                        chars = rs.split('');
                                        matched = head;
                                        break;
                                    }
                                }
                            }
                            let multi = null;
                            if ('cn' === lang) multi = this.getMultiHanzi(pinyin, lang);
                            return {
                                chars,
                                matched,
                                multi
                            };
                        };
                    },
                    "./src/common/components/InputMethod/assets/dic_jp.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.getDictJp = getDictJp;
                        let _dict = null;
                        function getDictJp() {
                            if (_dict) return _dict;
                            _dict = {
                                ai: "哀挨愛曖相藍",
                                awa: "哀淡併泡",
                                aku: "悪握空",
                                o: "おオ悪汚押下起降緒小織生惜惜折帯置追尾負雄落老和",
                                waru: "悪",
                                nigi: "握",
                                atsu: "圧厚集暑熱",
                                atsuka: "扱",
                                a: "あア宛会開挙合合在充当編飽明明明有余揚浴",
                                arashi: "嵐",
                                an: "安案暗行",
                                yasu: "安休",
                                kura: "暗倉蔵比",
                                i: "いイ以衣位囲医依委威畏胃為尉異移萎偉椅意違彙維慰遺緯易忌居井生逝癒唯要",
                                koromo: "衣",
                                kurai: "位",
                                kako: "囲",
                                e: "えエ依回会絵獲恵江餌重笑得柄",
                                yuda: "委",
                                oso: "畏恐恐教襲遅",
                                koto: "異琴言事殊",
                                utsu: "移鬱映撃写討",
                                na: "なナ萎慣菜成投那奈南納無名鳴",
                                era: "偉選",
                                chiga: "違",
                                nagusa: "慰",
                                yui: "遺由唯",
                                iki: "域粋息",
                                iku: "育幾行",
                                soda: "育",
                                haguku: "育",
                                ichi: "一壱市",
                                itsu: "一逸五",
                                hito: "一人等",
                                ibara: "茨",
                                imo: "芋",
                                in: "引印因咽姻員院淫陰飲隠韻音",
                                hi: "ひヒ引火干灯日比皮妃否批彼披肥非卑飛疲秘秘被悲扉費碑罷避泌氷冷",
                                shirushi: "印",
                                yo: "よヨ因詠寄寄呼四世善代読夜与予余誉預良",
                                mida: "淫乱",
                                kage: "陰陰影",
                                no: "のノ飲延載述乗乗伸野",
                                kaku: "隠画各角拡革格核殻郭覚較隔閣確獲嚇穫客欠",
                                u: "うウ右宇羽雨飢熱植生請打得売浮埋有憂",
                                yuu: "右夕由友有勇幽悠郵湧猶裕遊雄誘憂融優",
                                migi: "右",
                                ha: "はハ羽映栄果果歯刃生晴掃端張貼跳吐把波派破覇剥葉履",
                                hane: "羽",
                                ame: "雨天",
                                ama: "雨甘天尼",
                                uta: "唄歌謡",
                                une: "畝",
                                ura: "浦恨裏",
                                un: "運雲",
                                hako: "運箱",
                                kumo: "雲曇",
                                ei: "永泳英映栄営詠影鋭衛",
                                naga: "永長眺流",
                                oyo: "泳及及",
                                saka: "栄逆逆酒盛坂",
                                itona: "営",
                                surudo: "鋭",
                                eki: "易疫益液駅役",
                                yasa: "易優",
                                yaku: "疫益厄役約訳薬躍",
                                etsu: "悦越謁閲",
                                ko: "こコ越去拠虚凝己戸古呼固孤弧股虎故枯個庫湖雇誇鼓錮顧黄込込混子小超懲濃肥粉木籠",
                                en: "円延沿炎宴怨媛援園煙猿遠鉛塩演縁艶",
                                maru: "円丸丸",
                                so: "そソ沿初染狙阻祖租素措粗組疎訴塑遡礎想添",
                                honoo: "炎",
                                on: "怨遠音恩温穏御",
                                sono: "園",
                                kemu: "煙",
                                kemuri: "煙",
                                saru: "猿",
                                too: "遠十通通",
                                namari: "鉛",
                                shio: "塩潮",
                                fuchi: "縁",
                                tsuya: "艶",
                                kega: "汚",
                                yogo: "汚",
                                kitana: "汚",
                                ou: "王凹央応往押旺欧殴桜翁奥横皇黄",
                                kota: "応",
                                nagu: "殴",
                                sakura: "桜",
                                oku: "奥屋億憶臆後送贈遅",
                                yoko: "横",
                                oka: "岡丘侵犯冒",
                                ya: "やヤ屋家矢辞焼痩八冶夜野弥",
                                osore: "虞",
                                otsu: "乙",
                                ore: "俺",
                                oro: "卸愚",
                                oroshi: "卸",
                                oto: "音落劣",
                                ne: "ねネ音根寝値練",
                                atata: "温暖",
                                oda: "穏",
                                ka: "かカ下化火加可仮何花佳価果河苛科架架夏家荷華菓貨渦過嫁暇禍靴寡歌箇稼課蚊掛且刈換欠兼懸枯交香鹿借書飾替貸代賭日描変",
                                ge: "げゲ下夏牙解外",
                                shita: "下親舌慕",
                                shimo: "下霜",
                                moto: "下基求元本",
                                sa: "さサ下覚割去左佐沙査砂唆差差詐鎖再作指触挿茶提避冷裂",
                                kuda: "下管砕",
                                ke: "けケ化仮家華気懸蹴毛",
                                ba: "ばバ化場馬婆罵",
                                ho: "ほホ火干穂彫帆歩保哺捕補舗欲",
                                kuwa: "加詳桑",
                                kari: "仮狩",
                                nani: "何",
                                nan: "何男南軟難納",
                                hana: "花華鼻放離話",
                                atai: "価値",
                                kawa: "河革渇乾川皮",
                                natsu: "夏懐納",
                                ie: "家",
                                ni: "に二荷児仁逃二尼弐",
                                uzu: "渦",
                                su: "すス過吸好済済酢擦子捨主守州住須数素巣澄透透統",
                                ayama: "過謝",
                                yome: "嫁",
                                totsu: "嫁凸突",
                                hima: "暇",
                                kutsu: "靴屈掘窟",
                                kase: "稼",
                                ga: "がガ牙瓦我画芽賀雅餓",
                                kiba: "牙",
                                kawara: "瓦",
                                ware: "我",
                                wa: "わはワ我割沸湧輪和話",
                                me: "めメ芽雌女目",
                                kai: "介回灰会快戒改怪拐悔海界皆械絵開階楷解塊潰壊懐諧貝街",
                                mawa: "回",
                                hai: "灰入拝杯背肺俳配排敗廃輩",
                                kokoroyo: "快",
                                imashi: "戒",
                                arata: "改新",
                                aya: "怪危誤妖",
                                ku: "くク悔九久朽宮供区句苦駆庫口工功紅貢酌食組暮来",
                                kuya: "悔",
                                umi: "海",
                                mina: "皆",
                                hira: "開平",
                                to: "とト解戸採撮止止執十図遂跳斗吐妬徒途都渡塗賭土度登頭泊富閉捕問問溶留",
                                katamari: "塊",
                                tsubu: "潰粒",
                                kowa: "壊声怖",
                                futokoro: "懐",
                                gai: "外劾害崖涯街慨蓋該概骸",
                                soto: "外",
                                hoka: "外他",
                                hazu: "外弾",
                                gake: "崖",
                                machi: "街町",
                                futa: "蓋双二",
                                kaki: "垣柿",
                                onoono: "各",
                                kado: "角門",
                                tsuno: "角募",
                                kou: "格仰後口工公勾孔功巧広甲交光向后好江考行坑孝抗攻更効幸拘肯侯厚恒洪皇紅荒郊香候校耕航貢降高康控梗黄喉慌港硬絞項溝鉱構綱酵稿興衡鋼講購乞神請耗恋",
                                kara: "殻空唐絡",
                                obo: "覚溺",
                                heda: "隔",
                                tashi: "確",
                                gaku: "学岳楽額顎",
                                mana: "学",
                                take: "岳丈竹",
                                raku: "楽絡落酪",
                                tano: "楽頼",
                                hitai: "額",
                                ago: "顎",
                                kakari: "掛係",
                                kata: "潟形型肩堅固固語硬難片方",
                                katsu: "括活喝渇割葛滑褐轄合勝担",
                                wari: "割",
                                kuzu: "葛崩",
                                kotsu: "滑骨",
                                sube: "滑全",
                                name: "滑",
                                kabu: "株",
                                kama: "釜鎌構窯",
                                kan: "干刊甘汗缶完肝官冠巻看陥乾勘患貫寒喚堪換敢棺款間閑勧寛幹感漢慣管関歓監緩憾還館環簡観韓艦鑑甲神",
                                ase: "汗焦",
                                kimo: "肝",
                                kanmuri: "冠",
                                ma: "まマ巻間曲交真増馬負舞麻摩磨魔目",
                                maki: "巻牧",
                                ochii: "陥",
                                otoshii: "陥",
                                wazura: "患煩",
                                tsuranu: "貫",
                                samu: "寒",
                                ta: "たタ堪矯建手食垂炊絶絶足他多汰太耐断田立立",
                                ken: "間犬件見券肩建研県倹兼剣拳軒健険圏堅検嫌献絹遣権憲賢謙鍵繭顕験懸",
                                aida: "間",
                                susu: "勧進薦",
                                miki: "幹",
                                seki: "関寂夕斥石赤昔析隻席脊惜戚責跡積績籍",
                                kaka: "関掲抱",
                                yuru: "緩許",
                                yakata: "館",
                                kanga: "鑑考",
                                gan: "丸含岸岩玩眼頑顔願元",
                                fuku: "含吹伏服副幅復福腹複覆噴膨",
                                kishi: "岸",
                                iwa: "岩",
                                gen: "眼嫌験元幻玄言弦限原現舷減源厳",
                                manako: "眼",
                                kao: "顔香",
                                nega: "願",
                                ki: "きキ企伎危机気岐希忌汽奇祈季紀軌既記起飢鬼帰基寄規亀喜幾揮期棋貴棄毀旗器畿輝機騎決己効黄斬消生切着聴聞木利",
                                kuwada: "企",
                                abu: "危",
                                tsukue: "机",
                                ino: "祈",
                                sude: "既",
                                shiru: "記汁",
                                oni: "鬼",
                                kae: "帰返",
                                motoi: "基",
                                kame: "亀",
                                yoroko: "喜",
                                go: "ごゴ期御五互午呉後娯悟碁語誤護",
                                tatto: "貴",
                                touto: "貴",
                                hata: "旗機端畑",
                                utsuwa: "器",
                                kagaya: "輝",
                                gi: "ぎギ技宜偽欺義疑儀戯擬犠議",
                                waza: "技業",
                                itsuwa: "偽",
                                nise: "偽",
                                azamu: "欺",
                                utaga: "疑",
                                tawamu: "戯",
                                kiku: "菊聞",
                                kichi: "吉",
                                kitsu: "吉喫詰",
                                tsu: "つツ詰詰告就津尽積積着釣通漬摘都付連",
                                kyaku: "却客脚",
                                kya: "脚",
                                ashi: "脚足",
                                giyaku: "逆虐",
                                shiita: "虐",
                                kyuu: "九久及弓丘旧休吸朽臼求究泣急級糾宮救球給嗅窮",
                                kokono: "九九",
                                hisa: "久",
                                yumi: "弓",
                                usu: "臼薄薄",
                                kiwa: "究窮極極際",
                                naku: "泣",
                                isogu: "急",
                                guu: "宮偶遇隅",
                                miya: "宮",
                                sukuu: "救",
                                tama: "球玉弾霊",
                                kagu: "嗅",
                                giyuu: "牛",
                                ushi: "牛後",
                                kyo: "去巨居拒拠挙虚許距",
                                koba: "拒",
                                gyo: "魚御漁",
                                uo: "魚",
                                sakana: "魚",
                                ryou: "漁了両良料涼猟陵量僚領寮療瞭糧霊",
                                kyou: "凶共叫狂京享供協況峡挟狭恐恭胸脅強教郷境橋矯鏡競響驚兄経香興",
                                tomo: "共供友",
                                sake: "叫酒",
                                kuru: "狂苦苦繰",
                                kei: "京境競兄刑形系径茎係型契計恵啓掲渓経蛍敬景軽傾携継詣慶憬稽憩警鶏",
                                sona: "供備",
                                hasa: "挟",
                                semai: "狭",
                                seba: "狭",
                                uyauya: "恭",
                                mune: "胸旨棟",
                                muna: "胸棟",
                                obiya: "脅",
                                odo: "脅躍踊",
                                gou: "強郷業号合拷剛傲豪",
                                tsuyo: "強",
                                shi: "しシ強絞士子支止氏仕史司四市矢旨死死糸至伺志私使刺始姉枝祉肢姿思指施師恣紙脂視紫詞歯嗣試詩資飼誌雌摯賜諮示次自占染知締敷閉",
                                oshi: "教",
                                sakai: "境",
                                hashi: "橋走端箸",
                                kagami: "鏡",
                                kiso: "競",
                                se: "せセ競攻施瀬世責背迫",
                                hibi: "響",
                                odoro: "驚",
                                gyou: "仰暁業凝形行",
                                ao: "仰青青",
                                oo: "仰多大大覆",
                                akatsuki: "暁",
                                kyoku: "曲局極",
                                goku: "極獄",
                                gyoku: "玉",
                                kin: "巾斤均近金菌勤琴筋僅禁緊錦謹襟今",
                                chika: "近",
                                kon: "金建献今困昆恨根婚混痕紺魂墾懇",
                                kane: "金鐘",
                                kana: "金奏",
                                gon: "勤権言厳",
                                tsuto: "勤努務",
                                suji: "筋",
                                wazu: "僅",
                                nishiki: "錦",
                                tsutsushi: "謹慎",
                                eri: "襟",
                                gin: "吟銀",
                                niga: "苦",
                                kakeru: "駆",
                                karu: "駆軽狩",
                                gu: "ぐグ具惧愚",
                                kuu: "空",
                                sora: "空",
                                akeru: "空",
                                sumi: "隅速炭墨",
                                kushi: "串",
                                horu: "掘",
                                kuma: "熊",
                                kun: "君訓勲薫",
                                kimi: "君",
                                kaoru: "薫",
                                gun: "軍郡群",
                                mu: "むム群向向蒸武謀矛務無夢霧六",
                                mura: "群村",
                                ani: "兄",
                                katachi: "形",
                                kuki: "茎",
                                kakaru: "係",
                                chigiru: "契",
                                haka: "計図測墓謀量",
                                megu: "恵巡",
                                he: "へ経減",
                                hotaru: "蛍",
                                uyama: "敬",
                                katamuku: "傾",
                                katamukeru: "傾",
                                tazusa: "携",
                                tsugu: "継次接",
                                mou: "詣設亡望毛妄盲耗猛網",
                                iko: "憩",
                                niwatori: "鶏",
                                gei: "芸迎鯨",
                                muka: "迎",
                                kujira: "鯨",
                                geki: "隙劇撃激",
                                suki: "隙",
                                hage: "激励",
                                keta: "桁",
                                ketsu: "欠穴血決結傑潔",
                                ana: "穴",
                                chi: "ちチ血散散治質千地池知値恥致遅痴稚置緻乳",
                                musu: "結",
                                yu: "ゆユ結逝湯由油喩愉諭輸癒遊揺揺揺揺",
                                isagiyo: "潔",
                                getsu: "月",
                                gatsu: "月合",
                                tsuki: "月",
                                inu: "犬",
                                mi: "みミ見三実身診眉未味魅",
                                togu: "研",
                                tsurugi: "剣",
                                kobushi: "拳",
                                noki: "軒",
                                suko: "健少",
                                kewa: "険",
                                kira: "嫌",
                                iya: "嫌卑",
                                kinu: "絹",
                                tsuka: "遣仕使塚疲捕",
                                kashiko: "賢",
                                kagi: "鍵限",
                                mayu: "繭眉",
                                maboroshi: "幻",
                                iu: "言",
                                tsuru: "弦鶴",
                                hara: "原腹払",
                                arawa: "現著表",
                                minamoto: "源",
                                ogoso: "厳",
                                kibi: "厳",
                                onore: "己",
                                furu: "古振奮",
                                mata: "股又",
                                tora: "虎捉",
                                yue: "故",
                                mizuumi: "湖",
                                yatou: "雇",
                                hoko: "誇矛",
                                tsuzumi: "鼓",
                                kaeri: "顧省",
                                itsutsu: "五",
                                taga: "互",
                                nochi: "後",
                                ato: "後痕跡",
                                sato: "悟諭里",
                                kuchi: "口",
                                ooyake: "公",
                                takumi: "巧",
                                hiroi: "広",
                                hiromaru: "広",
                                hirogaru: "広",
                                maji: "交",
                                hikaru: "光",
                                hikari: "光",
                                kono: "好",
                                yuku: "行",
                                okona: "行",
                                sara: "更皿",
                                fu: "ふフ更降拭殖触振増踏不夫父付布扶府怖附訃負赴浮婦符富普腐敷膚賦譜阜風伏歩老",
                                saiwa: "幸",
                                sachi: "幸",
                                shiawa: "幸",
                                beni: "紅",
                                kurenai: "紅",
                                arai: "荒",
                                areru: "荒",
                                arasu: "荒",
                                sourou: "候",
                                tagaya: "耕",
                                mitsu: "貢三密蜜",
                                taka: "高高",
                                hika: "控",
                                nodo: "喉",
                                awateru: "慌",
                                minato: "港",
                                shibo: "絞搾",
                                mizo: "溝",
                                tsuna: "綱",
                                oko: "興怒",
                                hagane: "鋼",
                                koku: "克告谷刻国黒穀酷石",
                                tani: "谷",
                                kiza: "刻兆",
                                kuni: "国",
                                kuro: "黒黒",
                                hone: "骨",
                                koma: "駒困細",
                                koro: "頃殺転",
                                ima: "今",
                                majiru: "混",
                                tamashii: "魂",
                                nengo: "懇",
                                hidari: "左",
                                sha: "砂写社車舎者射捨赦斜煮遮謝",
                                suna: "砂",
                                sosonoka: "唆",
                                kusari: "鎖",
                                za: "ざザ座挫",
                                suwa: "座",
                                sai: "才再災妻采砕宰栽彩採済祭斎細菜最裁債催塞歳載際埼財殺西切",
                                futata: "再",
                                wazawa: "災",
                                tsuma: "妻爪",
                                irodo: "彩",
                                matsu: "祭祭松待末抹",
                                hoso: "細",
                                motto: "最",
                                tatsu: "裁達竜",
                                saba: "裁",
                                moyoo: "催",
                                soku: "塞即束足促則息捉速側測",
                                fusa: "塞房",
                                sei: "歳情井世正生成西声制姓征性青斉政星牲省凄逝清盛婿晴勢聖誠精製誓静請整醒背",
                                zai: "在材剤財罪",
                                tsumi: "罪",
                                saki: "崎先",
                                saku: "作削昨柵索策酢搾錯咲冊裂",
                                tsuku: "作創造突",
                                kezu: "削",
                                satsu: "冊札刷刹拶殺察撮擦早",
                                fuda: "札",
                                suru: "刷",
                                setsu: "刹殺切折拙窃接設雪摂節説",
                                zatsu: "雑",
                                zou: "雑象造像増憎蔵贈臓",
                                san: "三山参桟蚕惨産傘散算酸賛",
                                mittsu: "三",
                                yama: "山",
                                mai: "参舞米毎妹枚昧埋",
                                kaiko: "蚕",
                                zan: "惨残斬暫",
                                miji: "惨",
                                umu: "産",
                                ubu: "産",
                                kasa: "傘重",
                                sui: "酸出水吹垂炊帥粋衰推酔遂睡穂",
                                noko: "残",
                                sasa: "支",
                                uji: "氏",
                                ji: "じジ仕示字寺次耳自似児事侍治持時滋慈辞磁餌璽除地路",
                                yotsu: "四",
                                yottsu: "四",
                                yon: "四",
                                ito: "糸",
                                ita: "至傷致痛悼板",
                                ukaga: "伺",
                                kokoroza: "志",
                                kokorozashi: "志",
                                watakushi: "私",
                                watashi: "私",
                                sasu: "刺",
                                haji: "始初恥",
                                ane: "姉",
                                eda: "枝",
                                sugata: "姿",
                                omo: "思主重面",
                                yubi: "指",
                                hodoko: "施",
                                kami: "紙上神髪",
                                abura: "脂油",
                                murasaki: "紫",
                                kokoro: "試心",
                                tamesu: "試",
                                kau: "飼買",
                                mesu: "雌召",
                                tamawaru: "賜",
                                hakaru: "諮",
                                shimesu: "示",
                                aza: "字鮮",
                                tera: "寺",
                                tsugi: "次",
                                mimi: "耳",
                                mizukara: "自",
                                niru: "似煮",
                                zu: "ずズ事図豆頭",
                                samurai: "侍",
                                osa: "治収修納抑",
                                nao: "治直",
                                motsu: "持物",
                                toki: "時",
                                itsukushi: "慈",
                                esa: "餌",
                                shika: "鹿",
                                shiki: "式識色織",
                                jiku: "軸",
                                shichi: "七質",
                                nana: "七斜",
                                nanatsu: "七",
                                nano: "七",
                                shitsu: "叱失室疾執湿嫉漆質",
                                shikaru: "叱",
                                ushina: "失",
                                muro: "室",
                                shuu: "執収囚州舟秀周宗拾秋臭修袖終羞習週就衆集愁酬醜蹴襲祝",
                                shime: "湿",
                                urushi: "漆",
                                jitsu: "実十日",
                                mino: "実",
                                shiba: "芝縛",
                                yashiro: "社",
                                kuruma: "車",
                                mono: "者物",
                                iru: "射煎鋳入",
                                saegi: "遮",
                                ja: "邪蛇",
                                da: "だダ蛇出打妥唾堕惰駄抱",
                                hebi: "蛇",
                                shaku: "尺借酌釈爵石赤昔",
                                jaku: "若弱寂着",
                                nyaku: "若",
                                waka: "若別",
                                mo: "もモ若盛喪藻燃茂模漏",
                                yowa: "弱弱",
                                sabi: "寂寂",
                                shu: "手主守朱取狩首殊珠酒腫種趣修衆",
                                te: "てテ手照照",
                                nushi: "主",
                                mamoru: "守",
                                mori: "守森",
                                toru: "取",
                                kubi: "首",
                                hareru: "腫",
                                harasu: "腫",
                                tane: "種",
                                omomuki: "趣",
                                ju: "寿受呪授需儒樹就従",
                                kotobuki: "寿",
                                ukeru: "受",
                                ukaru: "受",
                                norou: "呪",
                                sazu: "授",
                                fune: "舟船",
                                funa: "舟船",
                                hii: "秀",
                                mawari: "周",
                                sou: "宗双壮早争走奏相荘草送倉捜挿桑掃曹曽巣爽窓創喪痩葬装僧想層総遭槽踪操燥霜騒藻贈",
                                juu: "拾十汁充住柔重従渋銃獣縦中",
                                hiro: "拾",
                                aki: "秋",
                                kusa: "臭草",
                                nio: "臭匂",
                                sode: "袖",
                                owa: "終",
                                nara: "習並倣",
                                tsuke: "就",
                                tsudo: "集",
                                ure: "愁憂",
                                miniku: "醜",
                                nyuu: "柔入乳",
                                yawara: "柔",
                                chou: "重丁弔庁兆町長挑帳張彫眺釣頂鳥朝貼超腸跳徴嘲潮澄調聴懲",
                                shou: "従小升少召匠床抄肖尚招承昇松沼昭宵将消症祥称笑唱商渉章紹訟勝掌晶焼焦硝粧詔証象傷奨照詳彰障憧衝賞償礁鐘上井正生声姓性青政星省清精相装",
                                shitaga: "従従",
                                shibu: "渋",
                                kemono: "獣",
                                tate: "縦盾",
                                shuku: "叔祝宿淑粛縮",
                                iwau: "祝",
                                yado: "宿",
                                chiji: "縮",
                                juku: "塾熱",
                                shutsu: "出",
                                de: "でデ出弟",
                                jutsu: "述術",
                                shun: "俊春瞬旬",
                                haru: "春",
                                matata: "瞬",
                                jun: "旬巡盾准殉純循順準潤遵",
                                uruo: "潤",
                                uru: "潤",
                                sho: "処初所書庶暑署緒諸",
                                hatsu: "初鉢発髪法",
                                ui: "初",
                                tokoro: "所",
                                cho: "緒著貯",
                                jo: "女如助序叙徐除",
                                nyo: "女如",
                                nyou: "女尿",
                                onna: "女",
                                tasu: "助",
                                suke: "助",
                                nozoku: "除",
                                chiisa: "小",
                                masu: "升",
                                sukuna: "少",
                                toko: "床常",
                                yuka: "床",
                                maneku: "招",
                                uketamawa: "承",
                                nobo: "昇上登",
                                numa: "沼",
                                yoi: "宵",
                                kesu: "消",
                                wara: "笑",
                                tona: "唱隣",
                                akina: "商",
                                masa: "勝正",
                                kogeru: "焦",
                                kogasu: "焦",
                                mikotonori: "詔",
                                kizu: "傷築",
                                teru: "照",
                                sawaru: "障",
                                akoga: "憧",
                                tsuguna: "償",
                                jou: "上丈冗条状乗城浄剰常情場畳蒸縄壌嬢錠譲醸成盛静定",
                                ue: "上",
                                uwa: "上",
                                ageru: "上",
                                shiro: "城代白",
                                tsune: "常",
                                nasa: "情",
                                tata: "畳",
                                tatami: "畳",
                                nawa: "縄苗",
                                yuzu: "譲",
                                kamo: "醸",
                                shoku: "色拭食植殖飾触嘱織職",
                                iro: "色",
                                nugu: "拭",
                                jiki: "食直",
                                joku: "辱",
                                hazukashi: "辱",
                                shiri: "尻",
                                shin: "心申伸芯臣身辛侵信津神唇娠振浸真針深紳進森診寝慎新審震薪親請",
                                mousu: "申",
                                jin: "臣神人刃仁尽迅甚陣尋腎",
                                karai: "辛",
                                kuchibiru: "唇",
                                furuu: "振震",
                                hita: "浸",
                                hari: "針",
                                fuka: "深",
                                atarashii: "新",
                                nii: "新",
                                takigi: "薪",
                                oya: "親",
                                nin: "人任妊忍認",
                                hanaha: "甚",
                                tazu: "尋訪",
                                mizu: "水",
                                otoro: "衰",
                                osu: "推雄",
                                you: "酔八幼用羊妖洋要容庸揚揺葉陽溶腰様瘍踊窯養擁謡曜",
                                zui: "随髄",
                                suu: "枢崇数",
                                kazu: "数",
                                kazo: "数",
                                sueru: "据",
                                sugi: "杉",
                                suso: "裾",
                                sun: "寸",
                                ze: "ぜゼ是",
                                tada: "正但",
                                nama: "生怠",
                                nishi: "西",
                                koe: "声肥",
                                matsurigoto: "政",
                                hoshi: "星",
                                habu: "省",
                                kiyoi: "清",
                                muko: "婿",
                                ikio: "勢",
                                makoto: "誠",
                                chikau: "誓",
                                shizu: "静沈鎮",
                                totono: "整調",
                                zei: "税説",
                                ishi: "石",
                                aka: "赤明",
                                akaramu: "赤",
                                mukashi: "昔",
                                ori: "折",
                                tsutana: "拙",
                                yuki: "雪",
                                sechi: "節",
                                fushi: "節",
                                toku: "説匿特得督徳篤読",
                                zetsu: "舌絶",
                                sen: "千川仙占先宣専泉浅洗染扇栓旋船戦煎羨腺詮践箋銭潜線遷選薦繊鮮",
                                urana: "占",
                                moppa: "専",
                                izumi: "泉",
                                asai: "浅",
                                ara: "洗粗",
                                ougi: "扇",
                                ikusa: "戦",
                                tataka: "戦闘",
                                uraya: "羨",
                                urayama: "羨",
                                zeni: "銭",
                                hiso: "潜",
                                mogu: "潜",
                                zen: "全前善然禅漸膳繕",
                                matta: "全",
                                mae: "前",
                                nen: "然年念捻粘燃",
                                tsukuro: "繕",
                                nera: "狙",
                                haba: "阻幅",
                                kumi: "組",
                                uto: "疎疎",
                                utta: "訴",
                                sakanobo: "遡",
                                ishizue: "礎",
                                haya: "早",
                                araso: "争",
                                saga: "捜探",
                                zo: "ぞゾ曽",
                                sawa: "爽騒沢",
                                mado: "窓惑",
                                houmu: "葬",
                                yosoo: "装",
                                au: "遭",
                                misao: "操",
                                ayatsu: "操",
                                niku: "憎肉",
                                taba: "束",
                                unaga: "促",
                                hayai: "速",
                                gawa: "側",
                                zoku: "俗族属賊続",
                                tsuzu: "続続",
                                sotsu: "卒率",
                                ritsu: "率律慄",
                                hiki: "率匹",
                                son: "存村孫尊損遜",
                                zon: "存",
                                mago: "孫",
                                tattoi: "尊",
                                toutoi: "尊",
                                soko: "損底",
                                tsuba: "唾",
                                tai: "太対体耐待怠胎退帯泰堆袋逮替貸隊滞態戴大代台",
                                futo: "太",
                                tsui: "対追椎墜費",
                                tei: "体丁低呈廷弟定底抵邸亭貞帝訂庭逓停偵堤提程艇締諦",
                                karada: "体",
                                okota: "怠",
                                shirizo: "退",
                                obi: "帯",
                                fukuro: "袋",
                                todokoo: "滞",
                                dai: "大代台第題弟内",
                                taki: "滝",
                                taku: "宅択沢卓拓託濯度",
                                daku: "諾濁",
                                nigo: "濁",
                                datsu: "脱奪",
                                nu: "ぬヌ脱塗抜",
                                uba: "奪",
                                tana: "棚",
                                dare: "誰",
                                tan: "丹旦担単炭胆探淡短嘆端綻誕鍛壇反",
                                dan: "旦団男段断弾暖談壇",
                                nina: "担",
                                sagu: "探",
                                mijika: "短",
                                nage: "嘆嘆",
                                hokoro: "綻",
                                kita: "鍛北来",
                                ton: "団屯豚頓問",
                                otoko: "男",
                                kotowa: "断",
                                hiku: "弾低",
                                ike: "池",
                                hajiru: "恥",
                                chiku: "竹畜逐蓄築",
                                takuwa: "蓄",
                                chitsu: "秩窒",
                                cha: "茶",
                                chaku: "着嫡",
                                chuu: "中仲虫沖宙忠抽注昼柱衷酎鋳駐",
                                naka: "中仲半",
                                mushi: "虫",
                                oki: "沖",
                                soso: "注",
                                hiru: "昼",
                                hashira: "柱",
                                ichijiru: "著",
                                tomura: "弔",
                                ido: "挑",
                                itada: "頂",
                                itadaki: "頂",
                                tori: "鳥",
                                asa: "朝麻",
                                azake: "嘲",
                                shira: "調白",
                                choku: "直勅捗",
                                tadachi: "直",
                                chin: "沈珍朕陳賃鎮",
                                mezura: "珍",
                                tsuu: "通痛",
                                kayo: "通",
                                tsubo: "坪",
                                tsume: "爪冷",
                                otouto: "弟",
                                sada: "定",
                                niwa: "庭",
                                tsutsumi: "堤",
                                hodo: "程",
                                akira: "諦明",
                                dei: "泥",
                                doro: "泥",
                                teki: "的笛摘滴適敵",
                                mato: "的",
                                fue: "笛",
                                shizuku: "滴",
                                shitata: "滴",
                                kataki: "敵",
                                deki: "溺",
                                tetsu: "迭哲鉄徹撤",
                                ten: "天典店点展添転填殿",
                                mise: "店",
                                den: "田伝殿電",
                                tsuta: "伝",
                                tono: "殿",
                                dono: "殿",
                                neta: "妬",
                                miyako: "都",
                                wata: "渡綿",
                                do: "ど土奴努度怒",
                                tsuchi: "土",
                                tabi: "度旅",
                                ika: "怒",
                                tou: "刀冬灯当投豆東到逃倒凍唐島桃討透党悼盗陶塔搭棟湯痘登答等筒統稲踏糖頭謄藤闘騰道読納",
                                katana: "刀",
                                fuyu: "冬",
                                mame: "豆",
                                higashi: "東",
                                noga: "逃",
                                tao: "倒",
                                koo: "凍",
                                kogo: "凍",
                                shima: "島",
                                momo: "桃",
                                nusu: "盗",
                                kotaeru: "答",
                                tsutsu: "筒包",
                                ine: "稲",
                                ina: "稲否",
                                atama: "頭",
                                kashira: "頭",
                                fuji: "藤",
                                dou: "同洞胴動堂童道働銅導瞳",
                                ona: "同",
                                hora: "洞",
                                ugo: "動動",
                                warabe: "童",
                                michi: "道",
                                hatara: "働",
                                michibi: "導",
                                hitomi: "瞳",
                                touge: "峠",
                                doku: "毒独読",
                                hitori: "独",
                                tochi: "栃",
                                todo: "届",
                                buta: "豚",
                                don: "貪鈍曇丼",
                                musabo: "貪",
                                nibu: "鈍",
                                donburi: "丼",
                                nai: "内亡",
                                uchi: "内",
                                nashi: "梨",
                                nazo: "謎",
                                nabe: "鍋",
                                minami: "南",
                                yawa: "軟和",
                                muzuka: "難",
                                futatsu: "二",
                                niji: "虹",
                                nichi: "日",
                                chichi: "乳父",
                                maka: "任",
                                shino: "忍",
                                mito: "認",
                                nei: "寧",
                                netsu: "熱",
                                toshi: "年",
                                neba: "粘",
                                nou: "悩納能脳農濃",
                                naya: "悩",
                                nami: "波並",
                                yabu: "破敗",
                                uma: "馬",
                                nonoshi: "罵",
                                oga: "拝",
                                sakazuki: "杯",
                                somu: "背",
                                kuba: "配",
                                suta: "廃",
                                bai: "売倍梅培陪媒買賠",
                                ume: "梅",
                                tsuchika: "培",
                                haku: "白伯拍泊迫剥舶博薄",
                                byaku: "白",
                                shiroi: "白",
                                hyou: "拍氷表俵票評漂標兵",
                                baku: "博麦漠縛爆暴幕",
                                usui: "薄",
                                mugi: "麦",
                                hatake: "畑",
                                hada: "肌",
                                hachi: "八鉢蜂",
                                yatsu: "八",
                                yattsu: "八",
                                hotsu: "発法欲",
                                batsu: "伐抜罰閥末",
                                bachi: "罰",
                                han: "反半氾犯帆汎伴判坂阪板版班畔般販斑飯搬煩頒範繁藩凡",
                                hon: "反本奔翻",
                                soru: "反",
                                ban: "伴判板晩番蛮盤万",
                                tomona: "伴",
                                meshi: "飯",
                                bon: "煩凡盆",
                                kare: "彼",
                                kano: "彼",
                                tobu: "飛",
                                koumu: "被",
                                kanashii: "悲",
                                tobira: "扉",
                                bi: "びビ尾眉美備微鼻",
                                utsuku: "美",
                                hiza: "膝",
                                hiji: "肘",
                                hitsu: "匹必泌筆",
                                kanara: "必",
                                fude: "筆",
                                hime: "姫",
                                hyaku: "百",
                                koori: "氷",
                                omote: "表面",
                                tawara: "俵",
                                tadayo: "漂",
                                byou: "苗秒病描猫平",
                                nae: "苗",
                                hei: "病丙平兵併並柄陛閉塀幣弊蔽餅",
                                yamu: "病",
                                yamai: "病",
                                ega: "描",
                                neko: "猫",
                                hin: "品浜貧賓頻",
                                shina: "品",
                                hama: "浜",
                                bin: "貧敏瓶便",
                                mazu: "貧",
                                bu: "ぶブ不侮武部舞分歩奉無",
                                fuu: "夫富封風",
                                otto: "夫",
                                nuno: "布",
                                omomu: "赴",
                                tomi: "富",
                                kusaru: "腐",
                                anado: "侮",
                                hou: "封方包芳邦奉宝抱放放法泡胞俸倣峰砲崩訪報蜂豊飽褒縫",
                                kaze: "風",
                                kaza: "風",
                                kutsugae: "覆",
                                futsu: "払沸",
                                butsu: "仏物",
                                hotoke: "仏",
                                fun: "粉紛雰噴墳憤奮分",
                                kona: "粉",
                                magi: "紛",
                                ikidoo: "憤",
                                bun: "分文聞",
                                wakeru: "分",
                                mon: "文聞門紋問",
                                fumi: "文",
                                taira: "平",
                                gara: "柄",
                                mochi: "餅用",
                                bei: "米",
                                kome: "米",
                                heki: "壁璧癖",
                                kabe: "壁",
                                kuse: "癖",
                                betsu: "別蔑",
                                sage: "蔑",
                                hen: "片辺返変偏遍編",
                                ata: "辺与",
                                be: "べ辺",
                                katayo: "偏",
                                ben: "弁便勉",
                                tayo: "便頼",
                                aru: "歩",
                                ayu: "歩",
                                tamo: "保",
                                ogina: "補",
                                bo: "ぼボ母募墓慕暮簿模",
                                haha: "母",
                                kanba: "芳",
                                tatematsu: "奉",
                                takara: "宝",
                                ida: "抱",
                                mine: "峰",
                                otozu: "訪",
                                muku: "報",
                                yuta: "豊",
                                akasu: "飽",
                                homeru: "褒",
                                nuu: "縫",
                                bou: "亡乏忙坊妨忘防房肪某冒剖紡望傍帽棒貿貌暴膨謀妄",
                                tobo: "乏",
                                isoga: "忙",
                                botsu: "坊没勃",
                                samata: "妨",
                                wasu: "忘",
                                fuse: "防",
                                tsumu: "紡",
                                nozo: "望臨",
                                katawa: "傍",
                                aba: "暴",
                                hoo: "頬",
                                hoku: "北",
                                boku: "木朴牧睦僕墨撲目",
                                moku: "木目黙",
                                hori: "堀",
                                hiruga: "翻",
                                miga: "磨",
                                imouto: "妹",
                                maku: "幕膜",
                                makura: "枕",
                                sue: "末",
                                man: "万満慢漫",
                                michiru: "満",
                                aji: "味味",
                                misaki: "岬",
                                myaku: "脈",
                                myou: "妙名命明冥",
                                min: "民眠",
                                tami: "民",
                                nemuru: "眠",
                                yume: "夢",
                                kiri: "霧",
                                musume: "娘",
                                mei: "名命明迷冥盟銘鳴",
                                inochi: "命",
                                mayo: "迷",
                                metsu: "滅",
                                horo: "滅",
                                men: "免面綿麺",
                                manuka: "免",
                                tsura: "面連",
                                shige: "茂",
                                ami: "網",
                                dama: "黙",
                                yoru: "夜",
                                wake: "訳",
                                kusuri: "薬",
                                yami: "闇",
                                yoshi: "由",
                                isa: "勇",
                                aso: "遊",
                                saso: "誘",
                                sugu: "優",
                                homare: "誉",
                                azu: "預",
                                osana: "幼",
                                hitsuji: "羊",
                                kaname: "要",
                                koshi: "腰",
                                sama: "様",
                                yashina: "養",
                                utai: "謡",
                                yoku: "抑沃浴欲翌翼",
                                tsubasa: "翼",
                                ra: "らラ拉裸羅",
                                hadaka: "裸",
                                rai: "来雷頼礼",
                                kaminari: "雷",
                                ratsu: "辣",
                                ran: "乱卵覧濫藍欄",
                                tamago: "卵",
                                ri: "りリ吏利里理痢裏履璃離",
                                riku: "陸立",
                                ryuu: "立柳流留竜粒隆硫",
                                richi: "律",
                                ryaku: "略",
                                yanagi: "柳",
                                ru: "るル流留瑠",
                                ryo: "侶旅虜慮",
                                suzu: "涼涼鈴",
                                misasagi: "陵",
                                rou: "糧露老労弄郎朗浪廊楼漏籠",
                                kate: "糧",
                                ryoku: "力緑",
                                riki: "力",
                                chikara: "力",
                                roku: "緑六録麓",
                                midori: "緑",
                                rin: "林厘倫輪隣臨鈴",
                                hayashi: "林",
                                tonari: "隣",
                                re: "れレ",
                                rui: "涙累塁類",
                                namida: "涙",
                                tagu: "類",
                                rei: "令礼冷励戻例鈴零霊隷齢麗",
                                modo: "戻",
                                tato: "例",
                                uruwa: "麗",
                                reki: "暦歴",
                                koyomi: "暦",
                                retsu: "列劣烈裂",
                                ren: "恋連廉練錬",
                                koi: "恋恋",
                                ro: "ろロ呂炉賂路露",
                                tsuyu: "露",
                                moteaso: "弄",
                                hoga: "朗",
                                kago: "籠",
                                muttsu: "六",
                                mui: "六",
                                fumoto: "麓",
                                ron: "論",
                                nago: "和",
                                hanashi: "話",
                                wai: "賄",
                                makana: "賄",
                                waki: "脇",
                                waku: "惑枠",
                                wan: "湾腕",
                                ude: "腕",
                                nn: "んン",
                                lya: "ゃャ",
                                lyu: "ゅュ",
                                lyo: "ょョ",
                                wo: "をヲ",
                                li: "ぃィ",
                                lu: "ぅゥ",
                                le: "ぇェ",
                                la: "ぁァ",
                                lo: "ぉォ",
                                tt: "っッ",
                                di: "ぢヂ",
                                du: "づヅ",
                                pa: "ぱパ",
                                pi: "ぴピ",
                                pu: "ぷプ",
                                pe: "ぺ",
                                po: "ぽポ"
                            };
                            return _dict;
                        }
                    },
                    "./src/common/components/InputMethod/assets/dic_words.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.getWords = getWords;
                        let _words = null;
                        function getWords() {
                            if (_words) return _words;
                            _words = {
                                nihao: "你好",
                                nihaoa: "你好啊",
                                nihaoma: "你好吗",
                                xiexie: "谢谢",
                                zaoshanghao: "早上好",
                                wanshanghao: "晚上好",
                                wanan: "晚安",
                                zaijian: "再见",
                                mingtianjian: "明天见",
                                duibuqi: "对不起",
                                meiguanxi: "没关系",
                                bukeqi: "不客气",
                                xinghui: "幸会",
                                qingwen: "请问",
                                mafanle: "麻烦你了",
                                xinkule: "辛苦了",
                                gongxi: "恭喜",
                                zhuni: "祝你",
                                shengrikuaile: "生日快乐",
                                xinniankuaile: "新年快乐",
                                zhuhe: "祝贺",
                                ganxie: "感谢",
                                daoqian: "道歉",
                                shide: "是的",
                                bushide: "不是的",
                                duide: "对的",
                                buhao: "不好",
                                buhui: "不会",
                                buyong: "不用",
                                meiyou: "没有",
                                buxing: "不行",
                                keyi: "可以",
                                bushi: "不是",
                                buneng: "不能",
                                buyao: "不要",
                                buhuide: "不会的",
                                haode: "好的",
                                en: "嗯",
                                bie: "别",
                                meishi: "没事",
                                meiwenti: "没问题",
                                xing: "行",
                                xingba: "行吧",
                                haoba: "好吧",
                                duiba: "对吧",
                                shiba: "是吧",
                                suanle: "算了",
                                woshishui: "我是谁",
                                woaini: "我爱你",
                                wojiao: "我叫",
                                women: "我们",
                                nimen: "你们",
                                tamen: "他们",
                                ziji: "自己",
                                dajia: "大家",
                                bieren: "别人",
                                nandao: "难道",
                                suoyouren: "所有人",
                                baba: "爸爸",
                                mama: "妈妈",
                                erzi: "儿子",
                                nver: "女儿",
                                gege: "哥哥",
                                didi: "弟弟",
                                jiejie: "姐姐",
                                meimei: "妹妹",
                                yeye: "爷爷",
                                nainai: "奶奶",
                                waigong: "外公",
                                waipo: "外婆",
                                shushu: "叔叔",
                                ayi: "阿姨",
                                jiujiu: "舅舅",
                                laoshi: "老师",
                                tongxue: "同学",
                                tongshi: "同事",
                                laoban: "老板",
                                linju: "邻居",
                                qinqi: "亲戚",
                                fumu: "父母",
                                haizi: "孩子",
                                zhangfu: "丈夫",
                                qizi: "妻子",
                                nansheng: "男生",
                                nvsheng: "女生",
                                nanren: "男人",
                                nvren: "女人",
                                kuaile: "快乐",
                                xingfu: "幸福",
                                xiwang: "希望",
                                gaoxing: "高兴",
                                nanguo: "难过",
                                shengqi: "生气",
                                jinzhang: "紧张",
                                haipa: "害怕",
                                ganji: "感激",
                                juede: "觉得",
                                ganjue: "感觉",
                                xiangxin: "相信",
                                kaixin: "开心",
                                shangxin: "伤心",
                                fannao: "烦恼",
                                haoqi: "好奇",
                                jingya: "惊讶",
                                xingfen: "兴奋",
                                manyi: "满意",
                                shiwang: "失望",
                                jimo: "寂寞",
                                gudu: "孤独",
                                sinian: "思念",
                                xinqing: "心情",
                                mengxiang: "梦想",
                                zhongguo: "中国",
                                beijing: "北京",
                                shanghai: "上海",
                                shenzhen: "深圳",
                                guangzhou: "广州",
                                hangzhou: "杭州",
                                chengdu: "成都",
                                wuhan: "武汉",
                                nanjing: "南京",
                                waiguo: "外国",
                                guowai: "国外",
                                gongyuan: "公园",
                                chaoshi: "超市",
                                dianyingyuan: "电影院",
                                tushuguan: "图书馆",
                                jiudian: "酒店",
                                fandian: "饭店",
                                chezhan: "车站",
                                jichang: "机场",
                                matou: "码头",
                                xianzai: "现在",
                                jintian: "今天",
                                mingtian: "明天",
                                zuotian: "昨天",
                                houtian: "后天",
                                qiantian: "前天",
                                yihou: "以后",
                                yiqian: "以前",
                                jinnian: "今年",
                                qunian: "去年",
                                mingnian: "明年",
                                meitian: "每天",
                                meizhou: "每周",
                                meinian: "每年",
                                yijing: "已经",
                                zhengzai: "正在",
                                mashang: "马上",
                                gangcai: "刚才",
                                yongyuan: "永远",
                                zaoshang: "早上",
                                shangwu: "上午",
                                zhongwu: "中午",
                                xiawu: "下午",
                                wanshang: "晚上",
                                banye: "半夜",
                                shangzhou: "上周",
                                benzhou: "本周",
                                xiazhou: "下周",
                                shanggeyue: "上个月",
                                xiageyue: "下个月",
                                pingchang: "平常",
                                youshihou: "有时候",
                                conglai: "从来",
                                shenme: "什么",
                                shei: "谁",
                                naer: "哪儿",
                                jige: "几个",
                                duoshao: "多少",
                                ganma: "干嘛",
                                zenmele: "怎么了",
                                zenmeyang: "怎么样",
                                zenme: "怎么",
                                shenmeshihou: "什么时候",
                                weishenmene: "为什么呢",
                                zhege: "这个",
                                nage: [
                                    "哪个",
                                    "那个"
                                ],
                                zhexie: "这些",
                                naxie: [
                                    "哪些",
                                    "那些"
                                ],
                                zheyang: "这样",
                                nayang: "那样",
                                zenyang: "怎样",
                                name: "那么",
                                zheme: "这么",
                                zhidao: [
                                    "知道",
                                    "指导",
                                    "直到"
                                ],
                                mingbai: "明白",
                                kanjian: "看见",
                                xiangdao: "想到",
                                shijian: [
                                    "时间",
                                    "事件",
                                    "实践"
                                ],
                                biancheng: [
                                    "变成",
                                    "编程"
                                ],
                                yisheng: [
                                    "一生",
                                    "医生"
                                ],
                                yiyuan: [
                                    "医院",
                                    "意愿",
                                    "议员"
                                ],
                                zhuyao: [
                                    "主要",
                                    "注药"
                                ],
                                tingjian: "听见",
                                jide: "记得",
                                wangji: "忘记",
                                renwei: "认为",
                                faxian: "发现",
                                lijie: "理解",
                                kanyikan: "看一看",
                                xiangyixiang: "想一想",
                                xihuan: "喜欢",
                                xiangyao: "想要",
                                yiqi: "一起",
                                yiyang: "一样",
                                sikao: "思考",
                                yanjiu: "研究",
                                panduan: "判断",
                                jueding: "决定",
                                jihua: "计划",
                                anpai: "安排",
                                zhunbei: "准备",
                                qidai: "期待",
                                danxin: "担心",
                                guanxin: "关心",
                                zhongshi: "重视",
                                jianyi: "建议",
                                yijian: "意见",
                                xiangfa: "想法",
                                diannao: "电脑",
                                dongxi: "东西",
                                chezi: "车子",
                                yifu: "衣服",
                                fangzi: "房子",
                                qianbao: "钱包",
                                yaoshi: "钥匙",
                                shoubiao: "手表",
                                erji: "耳机",
                                chongdianqi: "充电器",
                                dianshi: "电视",
                                bingxiang: "冰箱",
                                kongtiao: "空调",
                                xiyiji: "洗衣机",
                                weibolu: "微波炉",
                                shuben: "书本",
                                bijiben: "笔记本",
                                qianbi: "铅笔",
                                shangmian: "上面",
                                xiamian: "下面",
                                zuobian: "左边",
                                youbian: "右边",
                                qianmian: "前面",
                                houmian: "后面",
                                limian: "里面",
                                waimian: "外面",
                                pangbian: "旁边",
                                difang: "地方",
                                zheli: "这里",
                                nali: [
                                    "哪里",
                                    "那里"
                                ],
                                jiali: "家里",
                                xuexiao: "学校",
                                gongsi: "公司",
                                yinhang: "银行",
                                shangdian: "商店",
                                cesuo: "厕所",
                                chufang: "厨房",
                                keting: "客厅",
                                woshi: "卧室",
                                yangtai: "阳台",
                                zoulang: "走廊",
                                bangongshi: "办公室",
                                huiyishi: "会议室",
                                shiyanshi: "实验室",
                                shitang: "食堂",
                                jiaoshi: "教室",
                                sushe: "宿舍",
                                fangzai: "放在",
                                fangzhao: "仿照",
                                fangxia: "放下",
                                guolai: "过来",
                                guoqu: "过去",
                                chulai: "出来",
                                chuqu: "出去",
                                jinlai: "进来",
                                jinqu: "进去",
                                huilai: "回来",
                                huiqu: "回去",
                                qilai: "起来",
                                zuoxia: "坐下",
                                zhanqilai: "站起来",
                                shangqu: "上去",
                                xiaqu: "下去",
                                zoujin: "走近",
                                dakai: "打开",
                                guanbi: "关闭",
                                kaishi: "开始",
                                jieshu: "结束",
                                shuohua: "说话",
                                huida: "回答",
                                bangzhu: "帮助",
                                baohu: "保护",
                                xuanze: "选择",
                                jixu: "继续",
                                tingzhi: "停止",
                                likai: "离开",
                                fasong: "发送",
                                jieshou: "接受",
                                shanchu: "删除",
                                chifan: "吃饭",
                                shuijiao: "睡觉",
                                xiuxi: "休息",
                                gongzuo: "工作",
                                xuexi: "学习",
                                dushu: "读书",
                                paobu: "跑步",
                                youyong: "游泳",
                                changge: "唱歌",
                                tiaowu: "跳舞",
                                huahua: "画画",
                                xiezi: "写字",
                                kanqiu: "看球",
                                tingge: "听歌",
                                kandianying: "看电影",
                                zuozuo: "坐坐",
                                zouzou: "走走",
                                kankan: "看看",
                                nadao: "拿到",
                                zhaodao: "找到",
                                kandao: "看到",
                                xiechu: "写出",
                                xiangchu: "想出",
                                zuochu: "做出",
                                zhuazhu: "抓住",
                                fangshou: "放手",
                                songkai: "松开",
                                dengdai: "等待",
                                xunzhao: "寻找",
                                zhuigan: "追赶",
                                biaoshi: "表示",
                                shuoming: "说明",
                                jieshi: "解释",
                                tongyi: "同意",
                                jujue: "拒绝",
                                yaoqiu: "要求",
                                zhichi: "支持",
                                fandui: "反对",
                                zanzhu: "赞助",
                                pengyou: "朋友",
                                duishou: "对手",
                                bangmang: "帮忙",
                                hezuo: "合作",
                                peihe: "配合",
                                lianxi: "联系",
                                taolun: "讨论",
                                goutong: "沟通",
                                jianmian: "见面",
                                yuehui: "约会",
                                juhui: "聚会",
                                qingke: "请客",
                                fuqian: "付钱",
                                songli: "送礼",
                                yuanliang: "原谅",
                                zunzhong: "尊重",
                                xinren: "信任",
                                chengnuo: "承诺",
                                baozheng: "保证",
                                daying: "答应",
                                shiqing: "事情",
                                wenti: "问题",
                                fangfa: "方法",
                                banfa: "办法",
                                guanxi: "关系",
                                keneng: "可能",
                                yinggai: "应该",
                                bixu: "必须",
                                suiran: "虽然",
                                ruguo: "如果",
                                suoyi: "所以",
                                danshi: "但是",
                                ranhou: "然后",
                                yinwei: "因为",
                                buguo: "不过",
                                bijiao: "比较",
                                feichang: "非常",
                                zhende: "真的",
                                dagai: "大概",
                                yiding: "一定",
                                dangran: "当然",
                                wusuowei: "无所谓",
                                zenmeban: "怎么办",
                                weishenme: "为什么",
                                yuanyin: "原因",
                                jieguo: "结果",
                                xiaoguo: "效果",
                                mubiao: "目标",
                                tiaojian: "条件",
                                huanjing: "环境",
                                fangshi: "方式",
                                guocheng: "过程",
                                jieduan: "阶段",
                                yisi: "意思",
                                daoli: "道理",
                                zhenli: "真理",
                                chuli: "处理",
                                guanli: "管理",
                                kongzhi: "控制",
                                zhixing: "执行",
                                wancheng: "完成",
                                jiancha: "检查",
                                shenghuo: "生活",
                                aiqing: "爱情",
                                wenhua: "文化",
                                lishi: "历史",
                                gushi: "故事",
                                yishu: "艺术",
                                dianying: "电影",
                                jingji: "经济",
                                zhengzhi: "政治",
                                shehui: "社会",
                                guojia: "国家",
                                zhengfu: "政府",
                                renmin: "人民",
                                falv: "法律",
                                quanli: "权利",
                                yiwu: "义务",
                                jiaoyu: "教育",
                                kexue: "科学",
                                jishu: "技术",
                                huanbao: "环保",
                                nengyuan: "能源",
                                ziyuan: "资源",
                                piaoliang: "漂亮",
                                haochi: "好吃",
                                haokan: "好看",
                                shufu: "舒服",
                                renzhen: "认真",
                                nuli: "努力",
                                pianyi: "便宜",
                                fangbian: "方便",
                                jiandan: "简单",
                                kunnan: "困难",
                                weixian: "危险",
                                anquan: "安全",
                                teshu: "特殊",
                                putong: "普通",
                                congming: "聪明",
                                keai: "可爱",
                                yonggan: "勇敢",
                                shanliang: "善良",
                                chengshi: "诚实",
                                wenrou: "温柔",
                                qiangda: "强大",
                                ruodian: "弱点",
                                youshi: "优势",
                                mafan: "麻烦",
                                qiguai: "奇怪",
                                zhengchang: "正常",
                                heshi: "合适",
                                bushufu: "不舒服",
                                buxiguan: "不习惯",
                                xinxian: "新鲜",
                                ganjing: "干净",
                                luanzaozao: "乱糟糟",
                                henduo: "很多",
                                yixie: "一些",
                                quanbu: "全部",
                                suoyou: "所有",
                                yigong: "一共",
                                zuihou: "最后",
                                zuichu: "最初",
                                zhishao: "至少",
                                zhiduo: "至多",
                                chaoguo: "超过",
                                buduo: "不多",
                                bushao: "不少",
                                chabuduo: "差不多",
                                tebie: "特别",
                                xiangdang: "相当",
                                jihu: "几乎",
                                wanquan: "完全",
                                genben: "根本",
                                juedui: "绝对",
                                fazhan: "发展",
                                bianhua: "变化",
                                zengjia: "增加",
                                jianshao: "减少",
                                gaibian: "改变",
                                tigao: "提高",
                                jiangdi: "降低",
                                kuoda: "扩大",
                                suoxiao: "缩小",
                                zhangda: "长大",
                                chengshu: "成熟",
                                chenggong: "成功",
                                shibai: "失败",
                                jinbu: "进步",
                                tuibu: "退步",
                                huifu: "恢复",
                                chuxian: "出现",
                                xiaoshi: "消失",
                                fasheng: "发生",
                                wangluo: "网络",
                                lianjie: "连接",
                                xiazai: "下载",
                                shangchuan: "上传",
                                ruanjian: "软件",
                                xitong: "系统",
                                chengxu: "程序",
                                wenjian: "文件",
                                zhanghao: "账号",
                                mima: "密码",
                                denglu: "登录",
                                zhuxiao: "注销",
                                zhuce: "注册",
                                shezhi: "设置",
                                xiaoxi: "消息",
                                xinxi: "信息",
                                tongzhi: [
                                    "同志",
                                    "通知"
                                ],
                                shipin: "视频",
                                tupian: "图片",
                                sousuo: "搜索",
                                liulan: "浏览",
                                zaofan: "早饭",
                                wufan: "午饭",
                                wanfan: "晚饭",
                                shucai: "蔬菜",
                                shuiguo: "水果",
                                mianbao: "面包",
                                niunai: "牛奶",
                                dangao: "蛋糕",
                                bingqilin: "冰淇淋",
                                kafei: "咖啡",
                                yinliao: "饮料",
                                kuangquanshui: "矿泉水",
                                jirou: "鸡肉",
                                zhurou: "猪肉",
                                niurou: "牛肉",
                                yangrou: "羊肉",
                                yurou: "鱼肉",
                                haixian: "海鲜",
                                huoguo: "火锅",
                                kaorou: "烤肉",
                                malatang: "麻辣烫",
                                gouwu: "购物",
                                fukuan: "付款",
                                shoukuan: "收款",
                                jiage: "价格",
                                youhui: "优惠",
                                dazhe: "打折",
                                mianfei: "免费",
                                tuikuan: "退款",
                                dingdan: "订单",
                                kuaidi: "快递",
                                wuliu: "物流",
                                baoyou: "包邮",
                                lvxing: "旅行",
                                chuxing: "出行",
                                lvyou: "旅游",
                                gongjiao: "公交",
                                ditie: "地铁",
                                huoche: "火车",
                                feiji: "飞机",
                                chuzuche: "出租车",
                                zixingche: "自行车",
                                lukou: "路口",
                                honglvdeng: "红绿灯",
                                gaosu: [
                                    "告诉",
                                    "高速"
                                ],
                                tianqi: "天气",
                                xiayu: "下雨",
                                xiaxue: "下雪",
                                guafeng: "刮风",
                                taiyang: "太阳",
                                yueliang: "月亮",
                                kongqi: "空气",
                                wendu: "温度",
                                shidu: "湿度",
                                ziran: "自然",
                                senlin: "森林",
                                haiyang: "海洋",
                                heliu: "河流",
                                shanmai: "山脉",
                                huayuan: "花园",
                                shenti: "身体",
                                jiankang: "健康",
                                shengbing: "生病",
                                yaopin: "药品",
                                touteng: "头疼",
                                fashao: "发烧",
                                kesou: "咳嗽",
                                ganmao: "感冒",
                                pifu: "皮肤",
                                guzhe: "骨折",
                                yanjing: [
                                    "眼镜",
                                    "眼睛"
                                ],
                                erduo: "耳朵",
                                zuiba: "嘴巴",
                                bizi: "鼻子",
                                sangzi: "嗓子",
                                duzi: "肚子",
                                jianfei: "减肥",
                                duanlian: "锻炼",
                                yundong: "运动",
                                huiyi: "会议",
                                baogao: "报告",
                                shenqing: "申请",
                                hetong: "合同",
                                kehu: "客户",
                                xiangmu: "项目",
                                renwu: "任务",
                                jindu: "进度",
                                yusuan: "预算",
                                gongzi: "工资",
                                jiangjin: "奖金",
                                shengzhi: "升职",
                                mianshi: "面试",
                                jianli: "简历",
                                shixi: "实习",
                                qianding: "签订",
                                pizhun: "批准",
                                shishi: "实施",
                                haohao: "好好",
                                manman: "慢慢",
                                kuaikuai: "快快",
                                jianjian: "渐渐",
                                changchang: "常常",
                                wangwang: "往往",
                                qingqing: "轻轻",
                                chongchong: "重重",
                                yuanyuan: "远远",
                                niubi: "牛逼",
                                nvbing: "女兵",
                                nabian: "那边",
                                neibu: "内部",
                                nanbu: "南部",
                                ningbo: "宁波",
                                nongmin: "农民",
                                nanmian: "难免",
                                nvhai: "女孩",
                                nuanhuo: "暖和",
                                nianhou: "年后",
                                butong: "不同",
                                biaoti: "标题",
                                butie: "补贴",
                                bantian: "半天",
                                juti: "具体",
                                jiaotong: "交通",
                                jiating: "家庭",
                                shijie: "世界",
                                shuju: "数据",
                                shouji: "手机",
                                yingxiang: "影响",
                                youxiu: "优秀",
                                youxi: "游戏",
                                yinyue: "音乐",
                                zhuanye: "专业",
                                zhuyi: [
                                    "注意",
                                    "逐一"
                                ],
                                zhongyao: "重要",
                                xinhao: "信号",
                                xuehui: "学会",
                                xiaohao: "消耗",
                                wangye: "网页",
                                weiyi: "唯一",
                                weizhi: "位置",
                                weiyu: "位于",
                                zuijin: "最近",
                                zaoan: "早安",
                                wuan: "午安",
                                baibai: "拜拜",
                                huitoujian: "回头见",
                                haojiubujian: "好久不见",
                                biekeqi: "别客气",
                                duoxie: "多谢",
                                daraole: "打扰了",
                                baoqian: "抱歉",
                                shipei: "失陪",
                                manzou: "慢走",
                                baozhong: "保重",
                                gongxifacai: "恭喜发财",
                                jierikuaile: "节日快乐",
                                huanying: "欢迎",
                                huanyingguanglin: "欢迎光临",
                                gaoci: "告辞",
                                guixing: "贵姓",
                                baohan: "包涵",
                                jianliang: "见谅",
                                keqi: "客气",
                                lirang: "礼让",
                                dazhaohu: "打招呼",
                                baifang: [
                                    "拜访",
                                    "摆放"
                                ],
                                meicuo: "没错",
                                budui: "不对",
                                bukeyi: "不可以",
                                xingbuxing: "行不行",
                                haobuhao: "好不好",
                                yaobuyao: "要不要",
                                yongbuyong: "用不用",
                                laibulai: "来不来",
                                qubuqu: "去不去",
                                zhibuzhidao: "知不知道",
                                yibanban: "一般般",
                                haixing: "还行",
                                couhe: "凑合",
                                haihao: "还好",
                                gouyong: "够用",
                                buyongle: "不用了",
                                meishide: "没事的",
                                biepa: "别怕",
                                bieji: "别急",
                                biehuang: "别慌",
                                fangxinba: "放心吧",
                                buyiding: "不一定",
                                suibianni: "随便你",
                                suini: "随你",
                                tingnide: "听你的",
                                nishuodedui: "你说得对",
                                youdaoli: "有道理",
                                shuodedui: "说得对",
                                jiuzhemeban: "就这么办",
                                tuole: "妥了",
                                suanleba: "算了吧",
                                wusuoweila: "无所谓啦",
                                youni: [
                                    "由你",
                                    "油腻"
                                ],
                                gewei: "各位",
                                zijiren: "自己人",
                                wairen: "外人",
                                moshengren: "陌生人",
                                jiaren: "家人",
                                qinren: "亲人",
                                jiashu: "家属",
                                gemen: "哥们",
                                jiemen: "姐们",
                                xiongdi: "兄弟",
                                nanpengyou: "男朋友",
                                nvpengyou: "女朋友",
                                laogong: "老公",
                                laopo: "老婆",
                                duixiang: "对象",
                                wangyou: "网友",
                                laoxiang: "老乡",
                                guke: "顾客",
                                keren: "客人",
                                guanzhong: "观众",
                                duzhe: "读者",
                                tingzhong: "听众",
                                hushi: "护士",
                                jingcha: "警察",
                                yanyuan: "演员",
                                geshou: "歌手",
                                mingxing: "明星",
                                fensi: "粉丝",
                                siji: [
                                    "司机",
                                    "死机"
                                ],
                                chushi: [
                                    "厨师",
                                    "初试"
                                ],
                                biaojie: "表姐",
                                biaodi: "表弟",
                                biaomei: "表妹",
                                tangge: "堂哥",
                                tangjie: "堂姐",
                                tangdi: "堂弟",
                                tangmei: "堂妹",
                                dage: "大哥",
                                dajie: "大姐",
                                xiaodi: "小弟",
                                xiaomei: "小妹",
                                xiaohai: "小孩",
                                baobei: "宝贝",
                                guinv: "闺女",
                                erxi: "儿媳",
                                nvxu: "女婿",
                                sunzi: "孙子",
                                sunnv: "孙女",
                                gonggong: "公公",
                                popo: "婆婆",
                                yuefu: "岳父",
                                yuemu: "岳母",
                                gandie: "干爹",
                                biaoge: [
                                    "表哥",
                                    "表格"
                                ],
                                baobao: [
                                    "宝宝",
                                    "抱抱"
                                ],
                                yukuai: "愉快",
                                jidong: "激动",
                                tianmi: "甜蜜",
                                wenxin: "温馨",
                                fangsong: "放松",
                                shutan: "舒坦",
                                qingsong: "轻松",
                                youxian: "悠闲",
                                zizai: "自在",
                                tongkuai: "痛快",
                                jinxing: "尽兴",
                                xinfan: "心烦",
                                jiaolv: "焦虑",
                                fanzao: "烦躁",
                                yumen: "郁闷",
                                jusang: "沮丧",
                                juewang: "绝望",
                                bengkui: "崩溃",
                                weiqu: "委屈",
                                fennu: "愤怒",
                                naohuo: "恼火",
                                kongju: "恐惧",
                                buan: "不安",
                                danyou: "担忧",
                                fachou: "发愁",
                                kunao: "苦恼",
                                wuliao: "无聊",
                                kongxu: "空虚",
                                shiluo: "失落",
                                mimang: "迷茫",
                                kunhuo: "困惑",
                                xianmu: "羡慕",
                                peifu: "佩服",
                                chongbai: "崇拜",
                                xinshang: "欣赏",
                                gandong: "感动",
                                ganen: "感恩",
                                yihan: "遗憾",
                                houhui: "后悔",
                                zize: "自责",
                                xiukui: "羞愧",
                                ganga: "尴尬",
                                jiaoao: "骄傲",
                                zihao: "自豪",
                                haixiu: "害羞",
                                miantian: "腼腆",
                                dafang: "大方",
                                kailang: "开朗",
                                leguan: "乐观",
                                beiguan: "悲观",
                                lengmo: "冷漠",
                                baozao: "暴躁",
                                wenhe: "温和",
                                yanli: "严厉",
                                qinqie: "亲切",
                                heai: "和蔼",
                                yansu: "严肃",
                                youmo: "幽默",
                                fengqu: "风趣",
                                youyu: [
                                    "犹豫",
                                    "忧郁",
                                    "鱿鱼"
                                ],
                                tianjin: "天津",
                                chongqing: "重庆",
                                suzhou: "苏州",
                                qingdao: "青岛",
                                dalian: "大连",
                                xiamen: "厦门",
                                zhengzhou: "郑州",
                                changsha: "长沙",
                                kunming: "昆明",
                                guiyang: "贵阳",
                                haerbin: "哈尔滨",
                                changchun: "长春",
                                shenyang: "沈阳",
                                jinan: "济南",
                                fuzhou: "福州",
                                hefei: "合肥",
                                nanchang: "南昌",
                                taiyuan: "太原",
                                lanzhou: "兰州",
                                nanning: "南宁",
                                haikou: "海口",
                                xianggang: "香港",
                                aomen: "澳门",
                                taiwan: "台湾",
                                shouer: "首尔",
                                dongjing: "东京",
                                niuyue: "纽约",
                                lundun: "伦敦",
                                xini: "悉尼",
                                xiaoqu: "小区",
                                jiedao: "街道",
                                malu: "马路",
                                guangchang: "广场",
                                shangchang: "商场",
                                caishichang: "菜市场",
                                shudian: "书店",
                                yaodian: "药店",
                                zhensuo: "诊所",
                                menzhen: "门诊",
                                youeryuan: "幼儿园",
                                huochezhan: "火车站",
                                qichezhan: "汽车站",
                                ditiezhan: "地铁站",
                                jiayouzhan: "加油站",
                                fuwuqu: "服务区",
                                bowuguan: "博物馆",
                                meishuguan: "美术馆",
                                juyuan: "剧院",
                                tiyuguan: "体育馆",
                                youyongguan: "游泳馆",
                                jianshenfang: "健身房",
                                kafeiting: "咖啡厅",
                                canting: "餐厅",
                                lvguan: "旅馆",
                                minsu: "民宿",
                                shichang: [
                                    "市场",
                                    "时常"
                                ],
                                jishi: [
                                    "集市",
                                    "及时",
                                    "几时",
                                    "即使"
                                ],
                                ganggang: "刚刚",
                                like: "立刻",
                                liji: "立即",
                                jijiang: "即将",
                                jiangyao: "将要",
                                muqian: "目前",
                                rujin: "如今",
                                yanxia: "眼下",
                                dangxia: "当下",
                                zanshi: "暂时",
                                jinwan: "今晚",
                                mingwan: "明晚",
                                zuowan: "昨晩",
                                bangwan: "傍晚",
                                yeli: "夜里",
                                shenye: "深夜",
                                xingqiyi: "星期一",
                                xingqier: "星期二",
                                xingqisan: "星期三",
                                xingqisi: "星期四",
                                xingqiwu: "星期五",
                                xingqiliu: "星期六",
                                xingqitian: "星期天",
                                zhoumo: "周末",
                                shuangxiu: "双休",
                                hanjia: "寒假",
                                shujia: "暑假",
                                chunjie: "春节",
                                yuanxiaojie: "元宵节",
                                qingmingjie: "清明节",
                                duanwujie: "端午节",
                                zhongqiujie: "中秋节",
                                guoqingjie: "国庆节",
                                yuandan: "元旦",
                                chuxi: "除夕",
                                nongli: "农历",
                                fenzhong: "分钟",
                                pianke: "片刻",
                                yihuier: "一会儿",
                                zhunshi: "准时",
                                tiqian: "提前",
                                anshi: "按时",
                                gudai: "古代",
                                ouer: "偶尔",
                                henshao: "很少",
                                jingchang: "经常",
                                yixiang: "一向",
                                yiguan: "一贯",
                                congbu: "从不",
                                weihe: "为何",
                                ruhe: "如何",
                                zenmehuishi: "怎么回事",
                                zheer: "这儿",
                                duojiu: "多久",
                                duoda: "多大",
                                duogao: "多高",
                                duoyuan: "多远",
                                duoshaoqian: "多少钱",
                                zhebian: "这边",
                                zhouwei: "周围",
                                yuanchu: "远处",
                                jinchu: "近处",
                                dingbu: "顶部",
                                dibu: "底部",
                                waibu: "外部",
                                xieduimian: "斜对面",
                                gebi: [
                                    "隔壁",
                                    "戈壁"
                                ],
                                qingchu: "清楚",
                                liaojie: "了解",
                                dongde: "懂得",
                                shuxi: "熟悉",
                                mosheng: "陌生",
                                jizhu: "记住",
                                xiangqi: "想起",
                                yiwang: "遗忘",
                                zhuomo: "琢磨",
                                fenxi: "分析",
                                huaiyi: "怀疑",
                                zhiyi: "质疑",
                                kending: "肯定",
                                fouding: "否定",
                                fouren: "否认",
                                queren: "确认",
                                queding: "确定",
                                yexu: "也许",
                                biran: "必然",
                                weibi: "未必",
                                xingxu: "兴许",
                                ganshou: "感受",
                                guannian: "观念",
                                guandian: "观点",
                                fangan: "方案",
                                celve: "策略",
                                cuoshi: "措施",
                                tujing: "途径",
                                luoji: "逻辑",
                                guilv: "规律",
                                yuanze: "原则",
                                genju: "根据",
                                zhengju: "证据",
                                mudi: "目的",
                                benzhi: "本质",
                                xianxiang: "现象",
                                tixi: "体系",
                                jiegou: "结构",
                                yinxiang: [
                                    "印象",
                                    "音响"
                                ],
                                yiyi: [
                                    "意义",
                                    "异议"
                                ],
                                pingban: "平板",
                                maikefeng: "麦克风",
                                shexiangtou: "摄像头",
                                luyouqi: "路由器",
                                chongdianbao: "充电宝",
                                shujuxian: "数据线",
                                neicun: "内存",
                                yingpan: "硬盘",
                                jianpan: "键盘",
                                shubiao: "鼠标",
                                xianshiqi: "显示器",
                                dayinji: "打印机",
                                kaoxiang: "烤箱",
                                dianfanbao: "电饭煲",
                                shaoshuihu: "烧水壶",
                                reshuiqi: "热水器",
                                xichenqi: "吸尘器",
                                saodijiqiren: "扫地机器人",
                                taideng: "台灯",
                                fengshan: "风扇",
                                chuifengji: "吹风机",
                                tixudao: "剃须刀",
                                jiashiqi: "加湿器",
                                kongqijinghuaqi: "空气净化器",
                                naozhong: "闹钟",
                                shouhuan: "手环",
                                jiezhi: "戒指",
                                xianglian: "项链",
                                erhuan: "耳环",
                                beibao: "背包",
                                xinglixiang: "行李箱",
                                yusan: "雨伞",
                                kouzhao: "口罩",
                                taiyangjing: "太阳镜",
                                beizi: "杯子",
                                panzi: "盘子",
                                kuaizi: "筷子",
                                shaozi: "勺子",
                                chazi: "叉子",
                                zhenban: "砧板",
                                pingdiguo: "平底锅",
                                gaoyaguo: "高压锅",
                                shuihu: "水壶",
                                zhijin: "纸巾",
                                maojin: "毛巾",
                                yashua: "牙刷",
                                yagao: "牙膏",
                                xifashui: "洗发水",
                                muyulu: "沐浴露",
                                xiangzao: "香皂",
                                xiyifen: "洗衣粉",
                                xijiejing: "洗洁精",
                                tuoba: "拖把",
                                saozhou: "扫帚",
                                lajitong: "垃圾桶",
                                yijia: "衣架",
                                wanju: "玩具",
                                jimu: "积木",
                                pintu: "拼图",
                                maorong: "毛绒",
                                tiaosheng: "跳绳",
                                lanqiu: "篮球",
                                paiqiu: "排球",
                                pingpangqiu: "乒乓球",
                                yumaoqiu: "羽毛球",
                                wangqiu: "网球",
                                taiqiu: "台球",
                                huaban: "滑板",
                                diandongche: "电动车",
                                motuoche: "摩托车",
                                jiaoche: "轿车",
                                kache: "卡车",
                                gaotie: "高铁",
                                dongche: "动车",
                                lunchuan: "轮船",
                                youting: "游艇",
                                fanchuan: "帆船",
                                shuiping: [
                                    "水瓶",
                                    "水平"
                                ],
                                tingting: "听听",
                                wenwen: "问问",
                                shuoshuo: "说说",
                                jiangjiang: "讲讲",
                                paopao: "跑跑",
                                liaoliao: "聊聊",
                                dengdeng: "等等",
                                fanfan: "翻翻",
                                zhaozhao: "找找",
                                suansuan: "算算",
                                huimian: "会面",
                                daobie: "道别",
                                fenbie: "分别",
                                songbie: "送别",
                                gaobie: "告别",
                                yuejian: "约见",
                                tanwang: "探望",
                                wenhou: "问候",
                                zhaodai: "招待",
                                zuoke: "做客",
                                fuyue: "赴约",
                                shiyue: "失约",
                                xiezhu: "协助",
                                yuanzhu: "援助",
                                jiuyuan: "救援",
                                zhiyuan: "支援",
                                zizhu: "资助",
                                juankuan: "捐款",
                                jiaoliu: "交流",
                                jiaotan: "交谈",
                                duihua: "对话",
                                tanpan: "谈判",
                                shuofu: "说服",
                                quanjie: "劝解",
                                tiaojie: "调解",
                                yingyun: "应允",
                                zancheng: "赞成",
                                tuici: "推辞",
                                zixun: "咨询",
                                dating: "打听",
                                zhidian: "指点",
                                yindao: "引导",
                                jiaodao: "教导",
                                peixun: "培训",
                                xunlian: "训练",
                                yuxi: "预习",
                                buxi: "补习",
                                shangke: "上课",
                                xiake: "下课",
                                fangxue: "放学",
                                kaixue: "开学",
                                biye: "毕业",
                                shangban: "上班",
                                xiaban: "下班",
                                jiaban: "加班",
                                chuchai: "出差",
                                zongjie: "总结",
                                shuzhi: "述职",
                                cizhi: "辞职",
                                tuixiu: "退休",
                                qiuzhi: "求职",
                                luyong: "录用",
                                ruzhi: "入职",
                                kaigong: "开工",
                                jucan: "聚餐",
                                maidan: "买单",
                                jiezhang: "结账",
                                fuzhang: "付账",
                                diancai: "点菜",
                                shangcai: "上菜",
                                kaifan: "开饭",
                                zuofan: "做饭",
                                chaocai: "炒菜",
                                zhufan: "煮饭",
                                baotang: "煲汤",
                                xiamiantiao: "下面条",
                                baojiaozi: "包饺子",
                                shaokao: "烧烤",
                                guangjie: "逛街",
                                tiaoxuan: "挑选",
                                shichuan: "试穿",
                                kanjia: "砍价",
                                jiangjia: "讲价",
                                zhifu: "支付",
                                tuihuo: "退货",
                                huanhuo: "换货",
                                qianshou: "签收",
                                youji: "邮寄",
                                dabao: "打包",
                                chaifeng: "拆封",
                                anzhuang: "安装",
                                zuzhuang: "组装",
                                kaiche: "开车",
                                tingche: "停车",
                                daoche: "倒车",
                                boche: "泊车",
                                chaoche: "超车",
                                biandao: "变道",
                                zhuanwan: "转弯",
                                shache: "刹车",
                                jiayou: "加油",
                                xiche: "洗车",
                                baoyang: "保养",
                                jiance: "检测",
                                tiaoshi: "调试",
                                dazhen: "打针",
                                chiyao: "吃药",
                                qichuang: "起床",
                                xishu: "洗漱",
                                shuaya: "刷牙",
                                xilian: "洗脸",
                                xizao: "洗澡",
                                paozao: "泡澡",
                                anmo: "按摩",
                                wuxiu: "午休",
                                dadun: "打盹",
                                aoye: "熬夜",
                                shimian: "失眠",
                                xinglai: "醒来",
                                tangxia: "躺下",
                                zuoqi: "坐起",
                                zhanqi: "站起",
                                dunxia: "蹲下",
                                wanyao: "弯腰",
                                dujia: "度假",
                                zijia: "自驾",
                                qixing: "骑行",
                                tubu: "徒步",
                                luying: "露营",
                                pashan: "爬山",
                                dengshan: "登山",
                                qianshui: "潜水",
                                chonglang: "冲浪",
                                huabing: "滑冰",
                                liubing: "溜冰",
                                jianshen: "健身",
                                qingzhu: "庆祝",
                                jinian: "纪念",
                                shouli: "收礼",
                                xuyuan: "许愿",
                                jubei: "举杯",
                                ganbei: "干杯",
                                heying: "合影",
                                paizhao: "拍照",
                                luxiang: "录像",
                                luyin: "录音",
                                zhibo: "直播",
                                faquan: "发圈",
                                yuedu: "阅读",
                                kanbao: "看报",
                                wanyouxi: "玩游戏",
                                zhuiju: "追剧",
                                kandianshi: "看电视",
                                guangzhan: "逛展",
                                liuwan: "遛弯",
                                sanbu: "散步",
                                liugou: "遛狗",
                                yangmao: "养猫",
                                jiaohua: "浇花",
                                dasao: "打扫",
                                qingli: "清理",
                                shoushi: "收拾",
                                zhengli: "整理",
                                shouna: "收纳",
                                zhedie: "折叠",
                                xuangua: "悬挂",
                                cashi: "擦拭",
                                qingxi: "清洗",
                                xiaodu: "消毒",
                                tongfeng: "通风",
                                liangshai: "晾晒",
                                yuntang: "熨烫",
                                chazhao: "查找",
                                fenxiang: "分享",
                                zhuanfa: "转发",
                                shoucang: "收藏",
                                dianzan: "点赞",
                                pinglun: "评论",
                                faxiaoxi: "发消息",
                                dadianhua: "打电话",
                                bianji: "编辑",
                                xiugai: "修改",
                                baocun: "保存",
                                fuzhi: "复制",
                                niantie: "粘贴",
                                jianqie: "剪切",
                                yidong: "移动",
                                zhongmingming: "重命名",
                                xinjian: "新建",
                                tuichu: "退出",
                                jiesuo: "解锁",
                                suoding: "锁定",
                                duankai: "断开",
                                qidong: "启动",
                                guanji: "关机",
                                lingwu: "领悟",
                                xingwu: "醒悟",
                                xiangtong: "想通",
                                kantou: "看透",
                                kanchuan: "看穿",
                                shipo: "识破",
                                jiechuan: "揭穿",
                                tanbai: "坦白",
                                jiaodai: "交代",
                                zhaogong: "招供",
                                renzui: "认罪",
                                rencuo: "认错",
                                zhiqian: "致歉",
                                liangjie: "谅解",
                                kuanshu: "宽恕",
                                aihu: "爱护",
                                zhenxi: "珍惜",
                                zhenshi: "珍视",
                                shouhu: "守护",
                                weihu: "维护",
                                zhaogu: "照顾",
                                zhaoliao: "照料",
                                cihou: "伺候",
                                peiban: "陪伴",
                                peitong: "陪同",
                                gensui: "跟随",
                                dailing: "带领",
                                fendou: "奋斗",
                                shangjin: "上进",
                                zhengqu: "争取",
                                zhuiqiu: "追求",
                                kewang: "渴望",
                                qipan: "期盼",
                                panwang: "盼望",
                                xinyuan: "心愿",
                                lixiang: "理想",
                                baofu: "抱负",
                                zhixiang: "志向",
                                guihua: "规划",
                                shiying: "适应",
                                tiaozheng: "调整",
                                biangeng: "变更",
                                zhuanbian: "转变",
                                zhuanxing: "转型",
                                shengji: "升级",
                                huandai: "换代",
                                gaige: "改革",
                                youhua: "优化",
                                wanshan: "完善",
                                gaijin: "改进",
                                zengqiang: "增强",
                                xiangshou: "享受",
                                pinwei: "品味",
                                tiyan: "体验",
                                tihui: "体会",
                                huiwei: "回味",
                                fanxing: "反省",
                                fansi: "反思",
                                jiantao: "检讨",
                                zilv: "自律",
                                kezhi: "克制",
                                rennai: "忍耐",
                                renshou: "忍受",
                                chengshou: "承受",
                                dandang: "担当",
                                fuze: "负责",
                                shaixuan: "筛选",
                                xuanba: "选拔",
                                luqu: "录取",
                                taotai: "淘汰",
                                chuju: "出局",
                                jinji: "晋级",
                                duoguan: "夺冠",
                                huojiang: "获奖",
                                dejiang: "得奖",
                                banjiang: "颁奖",
                                lingjiang: "领奖",
                                dengtai: "登台",
                                biaoyan: "表演",
                                chuyan: "出演",
                                shiyan: "饰演",
                                peiyin: "配音",
                                qiaoqiao: [
                                    "瞧瞧",
                                    "悄悄"
                                ],
                                kuandai: [
                                    "款待",
                                    "宽带"
                                ],
                                qingjiao: [
                                    "请教",
                                    "青椒"
                                ],
                                huibao: [
                                    "汇报",
                                    "回报"
                                ],
                                lizhi: [
                                    "离职",
                                    "荔枝"
                                ],
                                huaxue: [
                                    "滑雪",
                                    "化学"
                                ],
                                huli: [
                                    "护理",
                                    "互利"
                                ],
                                hanxuan: "寒暄",
                                ketao: "客套",
                                yingchou: "应酬",
                                jiaoji: "交际",
                                jiaowang: "交往",
                                laiwang: "来往",
                                gongchu: "共处",
                                tuanjie: "团结",
                                xiezuo: "协作",
                                huzhu: "互助",
                                peili: "赔礼",
                                hejie: "和解",
                                hehao: "和好",
                                yanhe: "言和",
                                tiliang: "体谅",
                                baorong: "包容",
                                xinlai: "信赖",
                                tancheng: "坦诚",
                                zhencheng: "真诚",
                                shizai: "实在",
                                yaoqing: "邀请",
                                xiangyue: "相约",
                                chidao: "迟到",
                                shuangyue: "爽约",
                                fanggezi: "放鸽子",
                                gaiqi: "改期",
                                yanqi: "延期",
                                quxiao: "取消",
                                daiding: "待定",
                                daoxie: "道谢",
                                zhixie: "致谢",
                                daxie: "答谢",
                                huili: "回礼",
                                songhua: "送花",
                                songhongbao: "送红包",
                                suili: "随礼",
                                renqing: "人情",
                                quanzi: "圈子",
                                renyuan: "人缘",
                                zhengchao: "争吵",
                                chaojia: "吵架",
                                banzui: "拌嘴",
                                chongtu: "冲突",
                                maodun: "矛盾",
                                wuhui: "误会",
                                wujie: "误解",
                                gehe: "隔阂",
                                fenqi: "分歧",
                                kangyi: "抗议",
                                shensu: "申诉",
                                tousu: "投诉",
                                jubao: "举报",
                                baoguang: "曝光",
                                yaoyan: "谣言",
                                quanjia: "劝架",
                                lajia: "拉架",
                                quanhe: "劝和",
                                fuhe: "复合",
                                fenshou: "分手",
                                shilian: "失恋",
                                biaobai: "表白",
                                xiangqin: "相亲",
                                dinghun: "订婚",
                                jiehun: "结婚",
                                lihun: "离婚",
                                zaihun: "再婚",
                                hunli: "婚礼",
                                miyue: "蜜月",
                                qingkuang: "情况",
                                zhuangkuang: "状况",
                                chujing: "处境",
                                jingdi: "境地",
                                jumian: "局面",
                                xingshi: "形势",
                                qushi: "趋势",
                                chaoliu: "潮流",
                                zhengti: "整体",
                                quanju: "全局",
                                xijie: "细节",
                                fangmian: "方面",
                                lingyu: "领域",
                                fanchou: "范畴",
                                yuangu: "缘故",
                                yuanyou: "缘由",
                                yinsu: "因素",
                                goucheng: "构成",
                                chengfen: "成分",
                                neirong: "内容",
                                leixing: "类型",
                                zhonglei: "种类",
                                leibie: "类别",
                                yangshi: "样式",
                                guige: "规格",
                                xinghao: "型号",
                                banben: "版本",
                                canshu: "参数",
                                zhibiao: "指标",
                                jieju: "结局",
                                houguo: "后果",
                                chengguo: "成果",
                                chengxiao: "成效",
                                gongxian: "贡献",
                                gonglao: "功劳",
                                rongyu: "荣誉",
                                jiangxiang: "奖项",
                                paiming: "排名",
                                diwei: "地位",
                                shenfen: "身份",
                                mingsheng: "名声",
                                mingqi: "名气",
                                koubei: "口碑",
                                xinyu: "信誉",
                                nanti: "难题",
                                kunrao: "困扰",
                                zhangai: "障碍",
                                zuli: "阻力",
                                fengxian: "风险",
                                yinhuan: "隐患",
                                loudong: "漏洞",
                                quexian: "缺陷",
                                buzu: "不足",
                                quedian: "缺点",
                                maobing: "毛病",
                                cuowu: "错误",
                                shiwu: "失误",
                                dianzi: "点子",
                                linggan: "灵感",
                                chuangyi: "创意",
                                lantu: "蓝图",
                                gouxiang: "构想",
                                silu: "思路",
                                niantou: "念头",
                                xinsi: "心思",
                                tiyi: "提议",
                                changyi: "倡议",
                                haozhao: "号召",
                                zhunze: "准则",
                                guifan: "规范",
                                guize: "规则",
                                zhidu: "制度",
                                zhangcheng: "章程",
                                guiding: "规定",
                                tiaokuan: "条款",
                                tiaoli: "条例",
                                fagui: "法规",
                                zhengce: "政策",
                                fangzhen: "方针",
                                luxian: "路线",
                                dixian: "底线",
                                jilv: "纪律",
                                xianzhi: "限制",
                                jiezou: "节奏",
                                sudu: "速度",
                                xiaolv: "效率",
                                zhiliang: "质量",
                                shendu: "深度",
                                gaodu: "高度",
                                kuandu: "宽度",
                                haochu: "好处",
                                shouyi: "收益",
                                lirun: "利润",
                                shouru: "收入",
                                chengben: "成本",
                                feiyong: "费用",
                                kaizhi: "开支",
                                zhichu: "支出",
                                zichan: "资产",
                                fuzhai: "负债",
                                caifu: "财富",
                                jinqian: "金钱",
                                zijin: "资金",
                                zeren: "责任",
                                quanyi: "权益",
                                zige: "资格",
                                shiming: "使命",
                                zhize: "职责",
                                zhineng: "职能",
                                gongneng: "功能",
                                yongtu: "用途",
                                xingneng: "性能",
                                texing: "特性",
                                tedian: "特点",
                                fangwei: "方位",
                                zuobiao: "坐标",
                                juli: "距离",
                                changdu: "长度",
                                houdu: "厚度",
                                mianji: "面积",
                                tiji: "体积",
                                rongliang: "容量",
                                shuliang: "数量",
                                shue: "数额",
                                zonge: "总额",
                                fenwei: "氛围",
                                qianjing: "前景",
                                zhanwang: "展望",
                                yuqi: "预期",
                                yuce: "预测",
                                yupan: "预判",
                                gusuan: "估算",
                                aihao: "爱好",
                                techang: "特长",
                                zhuanchang: "专长",
                                caineng: "才能",
                                caihua: "才华",
                                tianfu: "天赋",
                                qianli: "潜力",
                                nengli: "能力",
                                benshi: "本事",
                                benneng: "本能",
                                jiqiao: "技巧",
                                gongfu: "功夫",
                                mingyun: "命运",
                                yunqi: "运气",
                                yuanfen: "缘分",
                                jiyu: "机遇",
                                shiji: [
                                    "世纪",
                                    "时机"
                                ],
                                liangji: "良机",
                                zhuanji: "转机",
                                jueze: "抉择",
                                qushe: "取舍",
                                quanheng: "权衡",
                                deshi: "得失",
                                libi: "利弊",
                                youlie: "优劣",
                                changduan: "长短",
                                weiji: [
                                    "危机",
                                    "危急"
                                ],
                                qifen: [
                                    "气氛",
                                    "气愤"
                                ],
                                guji: [
                                    "估计",
                                    "古迹"
                                ],
                                zhengdang: "政党",
                                qunzhong: "群众",
                                baixing: "百姓",
                                gongmin: "公民",
                                shimin: "市民",
                                jumin: "居民",
                                cunmin: "村民",
                                junren: "军人",
                                guanyuan: "官员",
                                fating: "法庭",
                                fayuan: "法院",
                                jingchaju: "警察局",
                                jianchayuan: "检察院",
                                jianyu: "监狱",
                                anqing: "案情",
                                panjue: "判决",
                                shenpan: "审判",
                                shangsu: "上诉",
                                bianhu: "辩护",
                                lvshi: "律师",
                                zhengren: "证人",
                                jinrong: "金融",
                                zhengquan: "证券",
                                gupiao: "股票",
                                jijin: "基金",
                                zhaiquan: "债券",
                                shuishou: "税收",
                                caizheng: "财政",
                                touzi: "投资",
                                rongzi: "融资",
                                daikuan: "贷款",
                                chuxu: "储蓄",
                                cunkuan: "存款",
                                lixi: "利息",
                                huilv: "汇率",
                                wujia: "物价",
                                shufa: "书法",
                                diaosu: "雕塑",
                                wudao: "舞蹈",
                                xiju: "戏剧",
                                xiqu: "戏曲",
                                guangbo: "广播",
                                xinwen: "新闻",
                                meiti: "媒体",
                                baozhi: "报纸",
                                zazhi: "杂志",
                                qikan: "期刊",
                                shuji: "书籍",
                                tushu: "图书",
                                keben: "课本",
                                jiaocai: "教材",
                                kecheng: "课程",
                                kemu: "科目",
                                kaoshi: "考试",
                                fenshu: "分数",
                                zhaosheng: "招生",
                                xuewei: "学位",
                                xueli: "学历",
                                wenping: "文凭",
                                zhengshu: "证书",
                                jiangxuejin: "奖学金",
                                gongcheng: "工程",
                                shuxue: "数学",
                                wuli: "物理",
                                shengwu: "生物",
                                dili: "地理",
                                zhexue: "哲学",
                                xinli: "心理",
                                jisuanji: "计算机",
                                rengongzhineng: "人工智能",
                                jiqiren: "机器人",
                                xinpian: "芯片",
                                chuantong: "传统",
                                xisu: "习俗",
                                xiguan: "习惯",
                                liyi: "礼仪",
                                yichan: "遗产",
                                wenwu: "文物",
                                chaodai: "朝代",
                                huangdi: "皇帝",
                                jiangjun: "将军",
                                yingxiong: "英雄",
                                weiren: "伟人",
                                mingren: "名人",
                                yuyan: "语言",
                                wenzi: "文字",
                                hanzi: "汉字",
                                yingyu: "英语",
                                riyu: "日语",
                                hanyu: "韩语",
                                fayu: "法语",
                                deyu: "德语",
                                eyu: "俄语",
                                fangyan: "方言",
                                putonghua: "普通话",
                                kouyu: "口语",
                                shumianyu: "书面语",
                                yufa: "语法",
                                cihui: "词汇",
                                jieri: "节日",
                                yuanxiao: "元宵",
                                zhongqiu: "中秋",
                                qixi: "七夕",
                                chongyang: "重阳",
                                shengdan: "圣诞",
                                qingrenjie: "情人节",
                                muqinjie: "母亲节",
                                fuqinjie: "父亲节",
                                jiaoshijie: "教师节",
                                laodongjie: "劳动节",
                                ertongjie: "儿童节",
                                tiyu: "体育",
                                ticao: "体操",
                                quanji: "拳击",
                                taiquandao: "跆拳道",
                                roudao: "柔道",
                                juzhong: "举重",
                                shejian: "射箭",
                                mashu: "马术",
                                zongjiao: "宗教",
                                fojiao: "佛教",
                                daojiao: "道教",
                                jiaotang: "教堂",
                                simiao: "寺庙",
                                daoguan: "道观",
                                qingzhensi: "清真寺",
                                heshang: "和尚",
                                daoshi: "道士",
                                xintu: "信徒",
                                qidao: "祈祷",
                                baifo: "拜佛",
                                anjian: [
                                    "案件",
                                    "安检"
                                ],
                                fengsu: [
                                    "风俗",
                                    "风速"
                                ],
                                yueyu: [
                                    "粤语",
                                    "越狱"
                                ],
                                sheji: [
                                    "射击",
                                    "设计"
                                ],
                                meili: "美丽",
                                shuaiqi: "帅气",
                                yingjun: "英俊",
                                xiaosa: "潇洒",
                                miren: "迷人",
                                dongren: "动人",
                                qingxiu: "清秀",
                                xiuqi: "秀气",
                                duanzhuang: "端庄",
                                youya: "优雅",
                                gaogui: "高贵",
                                huali: "华丽",
                                huanle: "欢乐",
                                xiyue: "喜悦",
                                zhenfen: "振奋",
                                guwu: "鼓舞",
                                xinwei: "欣慰",
                                shuxin: "舒心",
                                qieyi: "惬意",
                                shuchang: "舒畅",
                                changkuai: "畅快",
                                beiai: "悲哀",
                                aishang: "哀伤",
                                youshang: "忧伤",
                                fanmen: "烦闷",
                                naonu: "恼怒",
                                fenkai: "愤慨",
                                yuanhen: "怨恨",
                                chouhen: "仇恨",
                                zenghen: "憎恨",
                                taoyan: "讨厌",
                                jinghuang: "惊慌",
                                jingkong: "惊恐",
                                konghuang: "恐慌",
                                huangzhang: "慌张",
                                shicuo: "失措",
                                tante: "忐忑",
                                jiaozao: "焦躁",
                                fuzao: "浮躁",
                                jizao: "急躁",
                                jiqie: "急切",
                                poqie: "迫切",
                                songchi: "松弛",
                                shuhuan: "舒缓",
                                huanhe: "缓和",
                                qingrou: "轻柔",
                                qingkuai: "轻快",
                                qingying: "轻盈",
                                qingqiao: "轻巧",
                                qingbian: "轻便",
                                qingshuai: "轻率",
                                qingmie: "轻蔑",
                                qingshi: "轻视",
                                jianqiang: "坚强",
                                gangqiang: "刚强",
                                jianding: "坚定",
                                jianjue: "坚决",
                                guoduan: "果断",
                                zhizhuo: "执著",
                                wanqiang: "顽强",
                                jianren: "坚韧",
                                qiangying: "强硬",
                                qiangshi: "强势",
                                qiangsheng: "强盛",
                                fuqiang: "富强",
                                conghui: "聪慧",
                                ruizhi: "睿智",
                                jizhi: "机智",
                                jiling: "机灵",
                                lingmin: "灵敏",
                                minjie: "敏捷",
                                minrui: "敏锐",
                                jingming: "精明",
                                nenggan: "能干",
                                qinfen: "勤奋",
                                keku: "刻苦",
                                yonggong: "用功",
                                wuwei: "无畏",
                                dadan: "大胆",
                                danda: "胆大",
                                guogan: "果敢",
                                haoshuang: "豪爽",
                                shuangkuai: "爽快",
                                zhishuang: "直爽",
                                tanshuai: "坦率",
                                zhishuai: "直率",
                                renci: "仁慈",
                                renhou: "仁厚",
                                cixiang: "慈祥",
                                heqi: "和气",
                                hemu: "和睦",
                                wenshun: "温顺",
                                xianhui: "贤惠",
                                xianliang: "贤良",
                                titie: "体贴",
                                xixin: "细心",
                                xizhi: "细致",
                                yanjin: "严谨",
                                landuo: "懒惰",
                                daiman: "怠慢",
                                fuyan: "敷衍",
                                mahu: "马虎",
                                caoshuai: "草率",
                                cuxin: "粗心",
                                dayi: "大意",
                                lumang: "鲁莽",
                                cusu: "粗俗",
                                aoman: "傲慢",
                                zida: "自大",
                                zifu: "自负",
                                xurong: "虚荣",
                                xuwei: "虚伪",
                                kangkai: "慷慨",
                                kuochuo: "阔绰",
                                linse: "吝啬",
                                xiaoqi: "小气",
                                jiejian: "节俭",
                                shechi: "奢侈",
                                pusu: "朴素",
                                jianpu: "简朴",
                                jianlou: "简陋",
                                pojiu: "破旧",
                                zhanxin: "崭新",
                                chenjiu: "陈旧",
                                fugu: "复古",
                                meiman: "美满",
                                meimiao: "美妙",
                                yuanman: "圆满",
                                wanmei: "完美",
                                qiquan: "齐全",
                                qizheng: "齐整",
                                zhengjie: "整洁",
                                qingche: "清澈",
                                qingshuang: "清爽",
                                qingxin: "清新",
                                angzang: "肮脏",
                                lingluan: "凌乱",
                                hunluan: "混乱",
                                yongji: "拥挤",
                                yongdu: "拥堵",
                                tongchang: "通畅",
                                shunhua: "顺滑",
                                shunli: "顺利",
                                shunchang: "顺畅",
                                bubugaosheng: "步步高升",
                                zhengzhengrishang: "蒸蒸日上",
                                shanjierenyi: "善解人意",
                                tongqingdali: "通情达理",
                                guaiqiao: "乖巧",
                                tianzhen: "天真",
                                lanman: "烂漫",
                                youzhi: "幼稚",
                                laolian: "老练",
                                yuanhua: "圆滑",
                                chengfu: "城府",
                                deti: "得体",
                                shitai: "失态",
                                maoshi: "冒失",
                                mangzhuang: "莽撞",
                                chongdong: "冲动",
                                chenwen: "沉稳",
                                wenzhong: "稳重",
                                kekao: "可靠",
                                kaopu: "靠谱",
                                tashi: "踏实",
                                zhashi: "扎实",
                                jianzhuang: "健壮",
                                qiangzhuang: "强壮",
                                yinglang: "硬朗",
                                miaotiao: "苗条",
                                fengman: "丰满",
                                jiaojian: "矫健",
                                linghuo: "灵活",
                                chidun: "迟钝",
                                benzhuo: "笨拙",
                                shushi: "舒适",
                                anyi: "安逸",
                                anning: "安宁",
                                anding: "安定",
                                anwen: "安稳",
                                pingan: "平安",
                                xianghe: "祥和",
                                ningjing: "宁静",
                                pingjing: "平静",
                                jijing: "寂静",
                                youjing: "幽静",
                                jinyao: "紧要",
                                guanjian: "关键",
                                shouyao: "首要",
                                hexin: "核心",
                                jichu: "基础",
                                xunchang: "寻常",
                                pingfan: "平凡",
                                pingyong: "平庸",
                                chuzhong: "出众",
                                chuse: "出色",
                                jiechu: "杰出",
                                zhuoyue: "卓越",
                                yiliu: "一流",
                                dingji: "顶级",
                                bajian: "拔尖",
                                lingxian: "领先",
                                luohou: "落后",
                                yuanshi: "原始",
                                chuji: "初级",
                                gaoji: "高级",
                                jingmei: "精美",
                                jingxi: "精细",
                                jingzhi: "精致",
                                kaojiu: "考究",
                                jiangjiu: "讲究",
                                gaodang: "高档",
                                shangdang: "上档",
                                qipai: "气派",
                                daqi: "大气",
                                rexin: "热心",
                                rechen: "热忱",
                                jiji: "积极",
                                zhudong: "主动",
                                yongyue: "踊跃",
                                lengdan: "冷淡",
                                lengqing: "冷清",
                                renao: "热闹",
                                xuannao: "喧闹",
                                caoza: "嘈杂",
                                zhoudao: "周到",
                                zhouquan: "周全",
                                zhenmi: "缜密",
                                yange: "严格",
                                shenzhong: "慎重",
                                jinshen: "谨慎",
                                xiaoxin: "小心",
                                dangxin: "当心",
                                liuyi: "留意",
                                liushen: "留神",
                                jingti: "警惕",
                                rongyi: "容易",
                                jianbian: "简便",
                                jiannan: "艰难",
                                jianxian: "艰险",
                                xianzu: "险阻",
                                quzhe: "曲折",
                                kanke: "坎坷",
                                pingtan: "平坦",
                                tongda: "通达",
                                queqie: "确切",
                                jingque: "精确",
                                zhunque: "准确",
                                zhengque: "正确",
                                zhenjia: "真假",
                                xushi: "虚实",
                                shihua: "实话",
                                huangyan: "谎言",
                                jiahua: "假话",
                                yingyong: [
                                    "英勇",
                                    "应用"
                                ],
                                jieyue: [
                                    "节约",
                                    "解约"
                                ],
                                shigu: [
                                    "世故",
                                    "事故"
                                ],
                                yiban: [
                                    "一般",
                                    "一半"
                                ],
                                xianjin: [
                                    "先进",
                                    "现金"
                                ],
                                zhenxiang: [
                                    "真相",
                                    "真香"
                                ],
                                quanti: "全体",
                                zhengge: "整个",
                                daban: "大半",
                                duoshu: "多数",
                                daduoshu: "大多数",
                                shaoshu: "少数",
                                gebie: "个别",
                                bufen: "部分",
                                xuduo: "许多",
                                daliang: "大量",
                                dapi: "大批",
                                zhongduo: "众多",
                                wushu: "无数",
                                haoxie: "好些",
                                ruogan: "若干",
                                yidian: "一点",
                                shaoxu: "少许",
                                haoduo: "好多",
                                jici: "几次",
                                jijian: "几件",
                                jitiao: "几条",
                                jikuai: "几块",
                                jimao: "几毛",
                                jiyuan: "几元",
                                jiwan: "几万",
                                chengqian: "成千",
                                shangwan: "上万",
                                baiwan: "百万",
                                qianwan: "千万",
                                shouxian: "首先",
                                qici: "其次",
                                moliao: "末了",
                                zongsuan: "总算",
                                daodi: "到底",
                                bijing: "毕竟",
                                zhongjiu: "终究",
                                zuizhong: "最终",
                                huozhe: "或者",
                                chadian: "差点",
                                xianxie: "险些",
                                ganghao: "刚好",
                                zhenghao: "正好",
                                qiahao: "恰好",
                                couqiao: "凑巧",
                                shifen: "十分",
                                gewai: "格外",
                                jiqi: [
                                    "极其",
                                    "机器"
                                ],
                                jiwei: "极为",
                                gengjia: "更加",
                                yuefa: "越发",
                                shaowei: "稍微",
                                lvewei: "略微",
                                shaoshao: "稍稍",
                                dayue: "大约",
                                shangxia: "上下",
                                zuoyou: "左右",
                                yinei: "以内",
                                yiwai: "以外",
                                chaochu: "超出",
                                tupo: "突破",
                                shuaxin: "刷新",
                                chedi: "彻底",
                                yagen: "压根",
                                shizu: "十足",
                                quanmian: "全面",
                                wubi: "务必",
                                wanwan: "万万",
                                qieji: "切忌",
                                lingxing: [
                                    "零星",
                                    "菱形"
                                ],
                                zhongyu: [
                                    "终于",
                                    "中雨"
                                ],
                                tianna: "天哪",
                                tiana: "天啊",
                                wasai: "哇塞",
                                wodetian: "我的天",
                                wanle: "完了",
                                zaogao: "糟糕",
                                huaile: "坏了",
                                canle: "惨了",
                                lihaia: "厉害啊",
                                taibangle: "太棒了",
                                juele: "绝了",
                                chengba: "成吧",
                                naxing: "那行",
                                keyia: "可以啊",
                                meiwentia: "没问题啊",
                                tuotuode: "妥妥的",
                                wenle: "稳了",
                                zhendejiade: "真的假的",
                                buhuiba: "不会吧",
                                bushiba: "不是吧",
                                zhendema: "真的吗",
                                quedingma: "确定吗",
                                niqueding: "你确定",
                                pianrendeba: "骗人的吧",
                                buzhiyuba: "不至于吧",
                                ngng: "嗯嗯",
                                aiya: "哎呀",
                                aiyo: "哎哟",
                                haha: "哈哈",
                                hehe: "呵呵",
                                heihei: "嘿嘿",
                                ngna: "嗯呐",
                                duiya: "对呀",
                                shia: "是啊",
                                duio: "对哦",
                                yuanlairuci: "原来如此",
                                dengyixia: "等一下",
                                shaodeng: "稍等",
                                mashanghao: "马上好",
                                henkuai: "很快",
                                daihuier: "待会儿",
                                denghuier: "等会儿",
                                huitouliao: "回头聊",
                                youkongliao: "有空聊",
                                xiacizaishuo: "下次再说",
                                zhidaole: "知道了",
                                mingbaile: "明白了",
                                dongle: "懂了",
                                shoudao: "收到",
                                shoudaoshoudao: "收到收到",
                                fangxin: "放心",
                                biedanxin: "别担心",
                                jianchi: "坚持",
                                biefangqi: "别放弃",
                                xiangxinziji: "相信自己",
                                nikeyide: "你可以的",
                                meiwentide: "没问题的",
                                manmanlai: "慢慢来",
                                wenzhu: "稳住",
                                chengzhu: "撑住",
                                buhaoyisi: "不好意思",
                                mafanni: "麻烦你",
                                feixinle: "费心了",
                                laojia: "劳驾",
                                woxiangxiang: "我想想",
                                rangwoxiangxiang: "让我想想",
                                dengwoyixia: "等我一下",
                                rangwokankan: "让我看看",
                                wokanxia: "我看下",
                                wokankan: "我看看",
                                wokaolvyixia: "我考虑一下",
                                taiguile: "太贵了",
                                guisile: "贵死了",
                                pianyidian: "便宜点",
                                dagezhe: "打个折",
                                youhuidian: "优惠点",
                                taiguileba: "太贵了吧",
                                huasuan: "划算",
                                shihui: "实惠",
                                kuile: "亏了",
                                zhuanle: "赚了",
                                wobuzhidao: "我不知道",
                                buqingchu: "不清楚",
                                buliaojie: "不了解",
                                meitingshuoguo: "没听说过",
                                diyicitingshuo: "第一次听说",
                                shuizhidaone: "谁知道呢",
                                xihuanni: "喜欢你",
                                xiangni: "想你",
                                haoxiangni: "好想你",
                                memeda: "么么哒",
                                qinyige: "亲一个",
                                momotou: "摸摸头",
                                kuakua: "夸夸",
                                zhichini: "支持你",
                                chifanmei: "吃饭没",
                                chilema: "吃了吗",
                                chilemei: "吃了没",
                                chisha: "吃啥",
                                mangsha: "忙啥",
                                ganmane: "干嘛呢",
                                zaima: "在吗",
                                zaibuzai: "在不在",
                                youkongma: "有空吗",
                                yuema: "约吗",
                                zoubuqu: "走不去",
                                wodaole: "我到了",
                                daole: "到了",
                                mashangdao: "马上到",
                                lushangdu: "路上堵",
                                duchele: "堵车了",
                                kuaidaole: "快到了",
                                jiuhao: "就好",
                                mashangjiudao: "马上就到",
                                wandian: "晚点",
                                gaitian: "改天",
                                gongxigongxi: "恭喜恭喜",
                                shentijiankang: "身体健康",
                                wanshiruyi: "万事如意",
                                xinxiangshicheng: "心想事成",
                                dajidali: "大吉大利",
                                yilushunfeng: "一路顺风",
                                haokeai: "好可爱",
                                haopiaoliang: "好漂亮",
                                haoshuai: "好帅",
                                haomei: "好美",
                                zhenhaokan: "真好看",
                                zhenpiaoliang: "真漂亮",
                                haohaokan: "好好看",
                                meifanle: "美翻了",
                                shuaibaole: "帅爆了",
                                shangtou: "上头",
                                wuxian: "无线",
                                lanya: "蓝牙",
                                liuliang: "流量",
                                guangxian: "光纤",
                                kadun: "卡顿",
                                duanwang: "断网",
                                chongqi: "重启",
                                huifuchuchang: "恢复出厂",
                                shuaji: "刷机",
                                caozuoxitong: "操作系统",
                                anzhuo: "安卓",
                                pingguo: "苹果",
                                xiaomi: "小米",
                                huawei: "华为",
                                sanxing: "三星",
                                guge: "谷歌",
                                weiruan: "微软",
                                baidu: "百度",
                                tengxun: "腾讯",
                                ali: "阿里",
                                wangzhan: "网站",
                                liulanqi: "浏览器",
                                zhihu: "知乎",
                                weibo: "微博",
                                douyin: "抖音",
                                kuaishou: "快手",
                                weixin: "微信",
                                zhifubao: "支付宝",
                                taobao: "淘宝",
                                jingdong: "京东",
                                pinduoduo: "拼多多",
                                meituan: "美团",
                                liaotian: "聊天",
                                yuyin: "语音",
                                tonghua: "通话",
                                pengyouquan: "朋友圈",
                                biaoqing: "表情",
                                zhaopian: "照片",
                                xiangce: "相册",
                                wendang: "文档",
                                youxiang: "邮箱",
                                youjian: "邮件",
                                fujian: "附件",
                                chaosong: "抄送",
                                yanzhengma: "验证码",
                                xiugaimima: "修改密码",
                                wangjimima: "忘记密码",
                                yinsi: "隐私",
                                quanxian: "权限",
                                shouquan: "授权",
                                beifen: "备份",
                                tongbu: "同步",
                                xiezai: "卸载",
                                gengxin: "更新",
                                ceshi: "测试",
                                baocuo: "报错",
                                shantui: "闪退",
                                kasi: "卡死",
                                xiufu: "修复",
                                wanjia: "玩家",
                                zhuangbei: "装备",
                                jinbi: "金币",
                                zuanshi: "钻石",
                                chongzhi: "充值",
                                kaixiang: "开箱",
                                hecheng: "合成",
                                qianghua: "强化",
                                fuben: "副本",
                                chengjiu: "成就",
                                zhubo: "主播",
                                tanmu: "弹幕",
                                dashang: "打赏",
                                liwu: "礼物",
                                guanzhu: "关注",
                                dingyue: "订阅",
                                resou: "热搜",
                                rebang: "热榜",
                                toutiao: "头条",
                                redian: "热点",
                                shuaping: "刷屏",
                                zouhong: "走红",
                                daima: "代码",
                                kaifa: "开发",
                                qianduan: "前端",
                                houduan: "后端",
                                shujuku: "数据库",
                                fuwuqi: "服务器",
                                yunduan: "云端",
                                bendi: "本地",
                                suanfa: "算法",
                                dashuju: "大数据",
                                yunjisuan: "云计算",
                                zhiwen: "指纹",
                                renlianshibie: "人脸识别",
                                saoma: "扫码",
                                fukuanma: "付款码",
                                shoukuanma: "收款码",
                                hongbao: "红包",
                                zhuanzhang: "转账",
                                yue: "余额",
                                zhangdan: "账单",
                                mingxi: "明细",
                                liushui: "流水",
                                buding: [
                                    "补丁",
                                    "布丁"
                                ],
                                zaocan: "早餐",
                                wucan: "午餐",
                                wancan: "晚餐",
                                xiaoye: "宵夜",
                                waimai: "外卖",
                                tangshi: "堂食",
                                diancan: "点餐",
                                jiacai: "加菜",
                                mifan: "米饭",
                                miantiao: "面条",
                                jiaozi: "饺子",
                                huntun: "馄饨",
                                baozi: "包子",
                                mantou: "馒头",
                                youtiao: "油条",
                                doujiang: "豆浆",
                                danchaofan: "蛋炒饭",
                                gaijiaofan: "盖浇饭",
                                chaofan: "炒饭",
                                hongshaorou: "红烧肉",
                                tangcupaigu: "糖醋排骨",
                                gongbaojiding: "宫保鸡丁",
                                yuxiangrousi: "鱼香肉丝",
                                huiguorou: "回锅肉",
                                mapodoufu: "麻婆豆腐",
                                shuizhuyu: "水煮鱼",
                                suancaiyu: "酸菜鱼",
                                kaoya: "烤鸭",
                                baiqieji: "白切鸡",
                                lawei: "腊味",
                                xiangchang: "香肠",
                                paigutang: "排骨汤",
                                xihongshijidantang: "西红柿鸡蛋汤",
                                zicaitang: "紫菜汤",
                                babaozhou: "八宝粥",
                                pidanshourouzhou: "皮蛋瘦肉粥",
                                baicai: "白菜",
                                qingcai: "青菜",
                                bocai: "菠菜",
                                shengcai: "生菜",
                                jiucai: "韭菜",
                                qincai: "芹菜",
                                xilanhua: "西兰花",
                                huacai: "花菜",
                                qiezi: "茄子",
                                lajiao: "辣椒",
                                fanqie: "番茄",
                                huanggua: "黄瓜",
                                sigua: "丝瓜",
                                kugua: "苦瓜",
                                tudou: "土豆",
                                hongshu: "红薯",
                                luobo: "萝卜",
                                huluobo: "胡萝卜",
                                zhusun: "竹笋",
                                xianggu: "香菇",
                                mogu: "蘑菇",
                                yiner: "银耳",
                                douya: "豆芽",
                                doufu: "豆腐",
                                fuzhu: "腐竹",
                                xiangjiao: "香蕉",
                                chengzi: "橙子",
                                juzi: "橘子",
                                youzi: "柚子",
                                ningmeng: "柠檬",
                                xigua: "西瓜",
                                putao: "葡萄",
                                tizi: "提子",
                                caomei: "草莓",
                                lanmei: "蓝莓",
                                yingtao: "樱桃",
                                taozi: "桃子",
                                boluo: "菠萝",
                                mangguo: "芒果",
                                mihoutao: "猕猴桃",
                                longyan: "龙眼",
                                hetao: "核桃",
                                guazi: "瓜子",
                                huasheng: "花生",
                                banli: "板栗",
                                jianguo: "坚果",
                                yarou: "鸭肉",
                                erou: "鹅肉",
                                longxia: "龙虾",
                                pangxie: "螃蟹",
                                shenghao: "生蚝",
                                shanbei: "扇贝",
                                binggan: "饼干",
                                qiaokeli: "巧克力",
                                tangguo: "糖果",
                                tanghulu: "糖葫芦",
                                shupian: "薯片",
                                baomihua: "爆米花",
                                binggun: "冰棍",
                                xuegao: "雪糕",
                                suannai: "酸奶",
                                nailao: "奶酪",
                                kele: "可乐",
                                xuebi: "雪碧",
                                guozhi: "果汁",
                                naicha: "奶茶",
                                chunjingshui: "纯净水",
                                sudashui: "苏打水",
                                lvcha: "绿茶",
                                hongcha: "红茶",
                                wulongcha: "乌龙茶",
                                jiangyou: "酱油",
                                liaojiu: "料酒",
                                haoyou: "蚝油",
                                lajiang: "辣酱",
                                doubanjiang: "豆瓣酱",
                                kali: "咖喱",
                                huajiao: "花椒",
                                bajiao: "八角",
                                guipi: "桂皮",
                                xiangye: "香叶",
                                hujiaofen: "胡椒粉",
                                shanyao: [
                                    "山药",
                                    "山腰"
                                ],
                                shizi: [
                                    "柿子",
                                    "狮子"
                                ],
                                weijing: [
                                    "味精",
                                    "胃镜"
                                ],
                                guangshangchang: "逛商场",
                                xiadan: "下单",
                                jiagou: "加购",
                                gouwuche: "购物车",
                                jiesuan: "结算",
                                shouyin: "收银",
                                xiaopiao: "小票",
                                fapiao: "发票",
                                baoxiu: "保修",
                                jiaqian: "价钱",
                                biaojia: "标价",
                                yuanjia: "原价",
                                xianjia: "现价",
                                zhekou: "折扣",
                                manjian: "满减",
                                manzeng: "满赠",
                                youhuiquan: "优惠券",
                                daijinquan: "代金券",
                                tuangou: "团购",
                                miaosha: "秒杀",
                                yushou: "预售",
                                cuxiao: "促销",
                                dacu: "大促",
                                qingcang: "清仓",
                                shuaimai: "甩卖",
                                tejia: "特价",
                                pifa: "批发",
                                lingshou: "零售",
                                jinhuo: "进货",
                                chuhuo: "出货",
                                kucun: "库存",
                                quehuo: "缺货",
                                duanhuo: "断货",
                                buhuo: "补货",
                                tuihuan: "退换",
                                weixiu: "维修",
                                yunfei: "运费",
                                yunfeixian: "运费险",
                                fahuo: "发货",
                                lanshou: "揽收",
                                paisong: "派送",
                                yizhan: "驿站",
                                genzong: "跟踪",
                                shangpin: "商品",
                                huowu: "货物",
                                yangpin: "样品",
                                zengpin: "赠品",
                                lihe: "礼盒",
                                waibaozhuang: "外包装",
                                yanhuo: "验货",
                                zhijian: "质检",
                                hege: "合格",
                                cipin: "次品",
                                posun: "破损",
                                maijia: "买家",
                                dianzhu: "店主",
                                zhanggui: "掌柜",
                                kefu: "客服",
                                daogou: "导购",
                                dianyuan: "店员",
                                shouyinyuan: "收银员",
                                huiyuan: "会员",
                                chongzhika: "充值卡",
                                jifen: "积分",
                                jifenduihuan: "积分兑换",
                                lingqian: "零钱",
                                zhengqian: "整钱",
                                zhaoling: "找零",
                                xinyongka: "信用卡",
                                yinhangka: "银行卡",
                                wangyin: "网银",
                                daozhang: "到账",
                                jiaoyi: "交易",
                                chengjiao: "成交",
                                kuiben: "亏本",
                                zhuanqian: "赚钱",
                                yingli: "盈利",
                                kuisun: "亏损",
                                chajia: "差价",
                                jiajia: "加价",
                                shangjia: [
                                    "上架",
                                    "商家"
                                ],
                                chufa: "出发",
                                qicheng: "启程",
                                shanglu: "上路",
                                ganlu: "赶路",
                                fancheng: "返程",
                                tuzhong: "途中",
                                lukuang: "路况",
                                duche: "堵车",
                                saiche: "塞车",
                                changtong: "畅通",
                                raoxing: "绕行",
                                fenglu: "封路",
                                guanzhi: "管制",
                                xianxing: "限行",
                                wangyueche: "网约车",
                                pinche: "拼车",
                                shunfengche: "顺风车",
                                zhuanche: "专车",
                                zuche: "租车",
                                huancheng: "换乘",
                                zhongzhuan: "中转",
                                gongjiaozhan: "公交站",
                                hangzhanlou: "航站楼",
                                houjiting: "候机厅",
                                dengjikou: "登机口",
                                xingli: "行李",
                                tuoyun: "托运",
                                dengjipai: "登机牌",
                                yanwu: "延误",
                                gaiqian: "改签",
                                tuipiao: "退票",
                                chepiao: "车票",
                                jipiao: "机票",
                                gaotiepiao: "高铁票",
                                wopu: "卧铺",
                                yingzuo: "硬座",
                                ruanzuo: "软座",
                                yidengzuo: "一等座",
                                erdengzuo: "二等座",
                                wuzuo: "无座",
                                bupiao: "补票",
                                jianpiao: "检票",
                                chapiao: "查票",
                                jiazhao: "驾照",
                                jiashizheng: "驾驶证",
                                chepai: "车牌",
                                weizhang: "违章",
                                fakuan: "罚款",
                                koufen: "扣分",
                                nianjian: "年检",
                                lipei: "理赔",
                                zhuiwei: "追尾",
                                guaceng: "刮蹭",
                                chongdian: "充电",
                                licheng: "里程",
                                dianliang: "电量",
                                xuhang: "续航",
                                youhao: "油耗",
                                paomao: "抛锚",
                                guzhang: "故障",
                                weiting: "违停",
                                fangxiang: "方向",
                                qianjin: "前进",
                                houtui: "后退",
                                zuozhuan: "左转",
                                youzhuan: "右转",
                                diaotou: "掉头",
                                huandao: "环岛",
                                lijiao: "立交",
                                gaojia: "高架",
                                suidao: "隧道",
                                qiaoliang: "桥梁",
                                banmaxian: "斑马线",
                                renxingdao: "人行道",
                                tianqiao: "天桥",
                                mudidi: "目的地",
                                zhongdian: "终点",
                                daohang: "导航",
                                dingwei: "定位",
                                daoda: "到达",
                                dida: "抵达",
                                zhunshidao: "准时到",
                                qiwen: "气温",
                                qiya: "气压",
                                fengli: "风力",
                                fengxiang: "风向",
                                duoyun: "多云",
                                yintian: "阴天",
                                xiaoyu: "小雨",
                                dayu: "大雨",
                                baoyu: "暴雨",
                                leizhenyu: "雷阵雨",
                                zhenyu: "阵雨",
                                maomaoyu: "毛毛雨",
                                xiaoxue: "小雪",
                                zhongxue: "中雪",
                                daxue: "大雪",
                                baoxue: "暴雪",
                                bingbao: "冰雹",
                                dawu: "大雾",
                                nongwu: "浓雾",
                                shachen: "沙尘",
                                lushui: "露水",
                                jiebing: "结冰",
                                shuangdong: "霜冻",
                                taifeng: "台风",
                                jufeng: "飓风",
                                longjuanfeng: "龙卷风",
                                shachenbao: "沙尘暴",
                                hanchao: "寒潮",
                                lengkongqi: "冷空气",
                                meiyu: "梅雨",
                                futian: "伏天",
                                sanfu: "三伏",
                                shujiu: "数九",
                                jieqi: "节气",
                                lichun: "立春",
                                yushui: "雨水",
                                jingzhe: "惊蛰",
                                chunfen: "春分",
                                qingtian: "晴天",
                                yutian: "雨天",
                                xuetian: "雪天",
                                baiyun: "白云",
                                wuyun: "乌云",
                                caixia: "彩霞",
                                caihong: "彩虹",
                                shandian: "闪电",
                                dalei: "打雷",
                                xianglei: "响雷",
                                lantian: "蓝天",
                                xingxing: "星星",
                                yinhe: "银河",
                                liuxing: "流星",
                                rishi: "日食",
                                yueshi: "月食",
                                riluo: "日落",
                                richu: "日出",
                                huanghun: "黄昏",
                                liming: "黎明",
                                shuguang: "曙光",
                                muse: "暮色",
                                yese: "夜色",
                                yueguang: "月光",
                                xiyang: "夕阳",
                                gaoshan: "高山",
                                shanding: "山顶",
                                shanjiao: "山脚",
                                xiagu: "峡谷",
                                qiuling: "丘陵",
                                gaoyuan: "高原",
                                pingyuan: "平原",
                                pendi: "盆地",
                                shamo: "沙漠",
                                caoyuan: "草原",
                                shulin: "树林",
                                dahai: "大海",
                                haiyu: "海域",
                                haiwan: "海湾",
                                haixia: "海峡",
                                haidao: "海岛",
                                daoyu: "岛屿",
                                shatan: "沙滩",
                                haian: "海岸",
                                haibian: "海边",
                                hailang: "海浪",
                                chaoxi: "潮汐",
                                zhangchao: "涨潮",
                                tuichao: "退潮",
                                jianghe: "江河",
                                hubo: "湖泊",
                                hushui: "湖水",
                                shuiku: "水库",
                                chitang: "池塘",
                                xiliu: "溪流",
                                pubu: "瀑布",
                                wenquan: "温泉",
                                penquan: "喷泉",
                                shidi: "湿地",
                                zhaoze: "沼泽",
                                bingchuan: "冰川",
                                xueshan: "雪山",
                                tizhi: "体质",
                                tipo: "体魄",
                                tige: "体格",
                                tineng: "体能",
                                qise: "气色",
                                lianse: "脸色",
                                jingshen: "精神",
                                yuanqi: "元气",
                                huoli: "活力",
                                pibei: "疲惫",
                                kunjuan: "困倦",
                                fankun: "犯困",
                                toutong: "头痛",
                                touyun: "头晕",
                                faleng: "发冷",
                                liubiti: "流鼻涕",
                                bise: "鼻塞",
                                sangziteng: "嗓子疼",
                                houlongtong: "喉咙痛",
                                yateng: "牙疼",
                                yatong: "牙痛",
                                weiteng: "胃疼",
                                duziteng: "肚子疼",
                                futong: "腹痛",
                                fuxie: "腹泻",
                                laduzi: "拉肚子",
                                bianmi: "便秘",
                                exin: "恶心",
                                outu: "呕吐",
                                fanwei: "反胃",
                                zhangqi: "胀气",
                                xiaohuabuliang: "消化不良",
                                meiweikou: "没胃口",
                                shiyu: "食欲",
                                yanshi: "厌食",
                                xueya: "血压",
                                xuetang: "血糖",
                                xuezhi: "血脂",
                                xintiao: "心跳",
                                maibo: "脉搏",
                                huxi: "呼吸",
                                chuanxi: "喘息",
                                qiduan: "气短",
                                xiongmen: "胸闷",
                                xinji: "心悸",
                                duomeng: "多梦",
                                shishui: "嗜睡",
                                dahan: "打鼾",
                                liugan: "流感",
                                yanzheng: "炎症",
                                ganran: "感染",
                                bingdu: "病毒",
                                shangkou: "伤口",
                                chuangshang: "创伤",
                                niushang: "扭伤",
                                cuoshang: "挫伤",
                                cashang: "擦伤",
                                tangshang: "烫伤",
                                shaoshang: "烧伤",
                                yuqing: "淤青",
                                guomin: "过敏",
                                xiaochuan: "哮喘",
                                biyan: "鼻炎",
                                shizhen: "湿疹",
                                doudou: "痘痘",
                                bahen: "疤痕",
                                zhuya: "蛀牙",
                                pinxue: "贫血",
                                quegai: "缺钙",
                                quexin: "缺锌",
                                weishengsu: "维生素",
                                yingyang: "营养",
                                shanshi: "膳食",
                                junheng: "均衡",
                                qingdan: "清淡",
                                xinla: "辛辣",
                                shengleng: "生冷",
                                jikou: "忌口",
                                kuaizou: "快走",
                                manpao: "慢跑",
                                yujia: "瑜伽",
                                taiji: "太极",
                                lashen: "拉伸",
                                reshen: "热身",
                                huanjie: "缓解",
                                jianqing: "减轻",
                                tijian: "体检",
                                huayan: "化验",
                                xuechanggui: "血常规",
                                xindiantu: "心电图",
                                daifu: "大夫",
                                bingren: "病人",
                                huanzhe: "患者",
                                jizhen: "急诊",
                                zhuyuan: "住院",
                                bingfang: "病房",
                                shoushu: "手术",
                                mazui: "麻醉",
                                fucha: "复查",
                                kangfu: "康复",
                                quanyu: "痊愈",
                                chuyuan: "出院",
                                yaopian: "药片",
                                jiaonang: "胶囊",
                                keli: "颗粒",
                                chongji: "冲剂",
                                tangjiang: "糖浆",
                                gaoyao: "膏药",
                                penwu: "喷雾",
                                diyanye: "滴眼液",
                                yaofang: "药方",
                                fuzuoyong: "副作用",
                                fuyao: "服药",
                                yongyao: "用药",
                                zuoxi: "作息",
                                shuimian: "睡眠",
                                zaoshui: "早睡",
                                zaoqi: "早起",
                                wushui: "午睡",
                                bujue: "补觉",
                                sancan: "三餐",
                                heshui: "喝水",
                                baonuan: "保暖",
                                fanghan: "防寒",
                                fangshu: "防暑",
                                fangshai: "防晒",
                                jingli: [
                                    "精力",
                                    "经理"
                                ],
                                zhiye: "职业",
                                hangye: "行业",
                                bumen: "部门",
                                tuandui: "团队",
                                xiaozu: "小组",
                                kaohe: "考核",
                                pinggu: "评估",
                                lihui: "例会",
                                zhouhui: "周会",
                                fupan: "复盘",
                                paiqi: "排期",
                                richeng: "日程",
                                daiban: "待办",
                                lingdao: "领导",
                                zongjian: "总监",
                                zhuguan: "主管",
                                zuzhang: "组长",
                                xiashu: "下属",
                                hehuoren: "合伙人",
                                jiafang: "甲方",
                                yifang: "乙方",
                                gongyingshang: "供应商",
                                hezuohuoban: "合作伙伴",
                                jingzhengduishou: "竞争对手",
                                bishi: "笔试",
                                shiyongqi: "试用期",
                                zhuanzheng: "转正",
                                citui: "辞退",
                                caiyuan: "裁员",
                                tiaocao: "跳槽",
                                jinsheng: "晋升",
                                jiaxin: "加薪",
                                xinshui: "薪水",
                                xinchou: "薪酬",
                                daiyu: "待遇",
                                fuli: "福利",
                                shebao: "社保",
                                gongjijin: "公积金",
                                baoxiao: "报销",
                                nianzhongjiang: "年终奖",
                                fenhong: "分红",
                                xieyi: "协议",
                                qianshu: "签署",
                                shengxiao: "生效",
                                weiyue: "违约",
                                xuyue: "续约",
                                baomi: "保密",
                                zhuanli: "专利",
                                shangbiao: "商标",
                                tian: "提案",
                                jianbao: "简报",
                                jiyao: "纪要",
                                beiwanglu: "备忘录",
                                gonggao: "公告",
                                shenpi: "审批",
                                bohui: "驳回",
                                tuihui: "退回",
                                tongguo: "通过",
                                duizhang: "对账",
                                baobiao: "报表",
                                xianjinliu: "现金流",
                                yanfa: "研发",
                                shangxian: "上线",
                                fabu: "发布",
                                diedai: "迭代",
                                shouhou: "售后",
                                fuwu: "服务",
                                dianhuahuiyi: "电话会议",
                                shipinhuiyi: "视频会议",
                                canhui: "参会",
                                zhuchi: "主持",
                                yicheng: "议程",
                                yiti: "议题",
                                jueyi: "决议",
                                jilu: "记录",
                                genjin: "跟进",
                                luoshi: "落实",
                                huihua: "绘画",
                                kanxi: "看戏",
                                kanzhan: "看展",
                                kanshu: "看书",
                                dubao: "读报",
                                zuqiu: "足球",
                                qiche: "骑车",
                                diaoyu: "钓鱼",
                                xiaqi: "下棋",
                                xiaogou: "小狗",
                                xiaomao: "小猫",
                                jinyu: "金鱼",
                                xiaoniao: "小鸟",
                                tuzi: "兔子",
                                cangshu: "仓鼠",
                                wugui: "乌龟",
                                yingwu: "鹦鹉",
                                xiongmao: "熊猫",
                                laohu: "老虎",
                                daxiang: "大象",
                                houzi: "猴子",
                                banma: "斑马",
                                huaduo: "花朵",
                                meigui: "玫瑰",
                                baihe: "百合",
                                juhua: "菊花",
                                taohua: "桃花",
                                meihua: "梅花",
                                lanhua: "兰花",
                                zhuzi: "竹子",
                                songshu: "松树",
                                liushu: "柳树",
                                baise: "白色",
                                heise: "黑色",
                                hongse: "红色",
                                lanse: "蓝色",
                                lvse: "绿色",
                                huangse: "黄色",
                                zise: "紫色",
                                fense: "粉色",
                                huise: "灰色",
                                chengse: "橙色",
                                zongse: "棕色",
                                qingse: "青色",
                                yuanxing: "圆形",
                                fangxing: "方形",
                                sanjiaoxing: "三角形",
                                tuoyuan: "椭圆",
                                changtiao: "长条",
                                bianping: "扁平",
                                buran: "不然",
                                shenzhi: "甚至",
                                yiji: "以及",
                                kuangqie: "况且",
                                ciwai: "此外",
                                hekuang: "何况",
                                chufei: "除非",
                                bulun: "不论",
                                wulun: "无论",
                                jinguan: "尽管",
                                buguan: "不管",
                                zhiyao: "只要",
                                zhiyou: "只有",
                                napa: "哪怕",
                                yushi: "于是",
                                jiezhe: "接着",
                                suihou: "随后",
                                yinci: "因此",
                                lingwai: "另外",
                                zongzhi: "总之",
                                xianran: "显然",
                                sihu: "似乎",
                                fangfu: "仿佛",
                                turan: "突然",
                                huran: "忽然",
                                henhen: "狠狠",
                                shenshen: "深深",
                                toutou: "偷偷",
                                yici: "一次",
                                yitang: "一趟",
                                yibian: "一遍",
                                yidun: "一顿",
                                yiyan: "一眼",
                                yibazhang: "一巴掌",
                                yibeizi: "一辈子",
                                yikouqi: "一口气",
                                chongxin: "重新",
                                zaici: "再次",
                                lvci: "屡次",
                                zaisan: "再三",
                                fanfu: "反复",
                                chongfu: "重复",
                                tongyang: "同样",
                                leisi: "类似",
                                xiangsi: "相似",
                                xiangfan: "相反",
                                xiangdui: "相对",
                                jieran: "截然",
                                jieranbutong: "截然不同",
                                dabuxiangtong: "大不相同",
                                huijia: "回家",
                                ganjin: "赶紧",
                                tixing: "提醒",
                                zailushang: "在路上",
                                richang: "日常",
                                woqu: "我去",
                                shuobuding: "说不定",
                                laibuji: "来不及",
                                bangong: "办公",
                                qiandao: "签到",
                                wenjianjia: "文件夹",
                                touxiang: "头像",
                                dianhua: "电话",
                                duanxin: "短信",
                                xinku: "辛苦",
                                haole: "好嘞",
                                gouqiang: "够呛",
                                queshi: "确实",
                                fage: "发个",
                                zuoche: "坐车",
                                wananla: "晚安啦",
                                xiuxiba: "休息吧",
                                daojiale: "到家了",
                                dengyixiao: "等一下哦",
                                wusuoweia: "无所谓啊",
                                shuilema: "睡了吗",
                                chiwanfan: "吃晚饭",
                                kaigehui: "开个会",
                                shunfeng: "顺风",
                                aoyele: "熬夜了",
                                duanlianshenti: "锻炼身体",
                                bixin: "比心",
                                haodeya: "好的呀",
                                huitouzaishuo: "回头再说",
                                zoule: "走了",
                                daolema: "到了吗",
                                xinglema: "醒了吗",
                                zaiganma: "在干嘛",
                                yun: "晕",
                                guanjile: "关机了",
                                meidianle: "没电了",
                                wanyidian: "晚一点",
                                xiexieni: "谢谢你",
                                shui: "谁",
                                ng: "嗯"
                            };
                            return _words;
                        }
                    },
                    "./src/common/components/InputMethod/assets/dic_words_initials.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.getInitialsIndex = getInitialsIndex;
                        let _initialsIndex = null;
                        function getInitialsIndex() {
                            if (_initialsIndex) return _initialsIndex;
                            _initialsIndex = {
                                nh: [
                                    "nihao",
                                    "nvhai",
                                    "nuanhuo",
                                    "nianhou",
                                    "naohuo"
                                ],
                                nha: [
                                    "nihaoa"
                                ],
                                nhm: [
                                    "nihaoma"
                                ],
                                xx: [
                                    "xiexie",
                                    "xiangxin",
                                    "xuexiao",
                                    "xiuxi",
                                    "xuexi",
                                    "xinxian",
                                    "xiaoxi",
                                    "xinxi",
                                    "xiaxue",
                                    "xingxu",
                                    "xianxiang",
                                    "xixin",
                                    "xiaoxin",
                                    "xianxie",
                                    "xianxing",
                                    "xiaoxue",
                                    "xingxing"
                                ],
                                zsh: [
                                    "zaoshanghao"
                                ],
                                wsh: [
                                    "wanshanghao"
                                ],
                                wa: [
                                    "wanan",
                                    "wuan"
                                ],
                                zj: [
                                    "zaijian",
                                    "ziji",
                                    "zoujin",
                                    "zengjia",
                                    "zuijin",
                                    "zhengju",
                                    "zhijin",
                                    "zongjie",
                                    "zijia",
                                    "zhuiju",
                                    "zijin",
                                    "zhuanji",
                                    "zongjiao",
                                    "zhengjie",
                                    "zhenjia",
                                    "zhongjiu",
                                    "zhijian",
                                    "zongjian"
                                ],
                                mtj: [
                                    "mingtianjian"
                                ],
                                dbq: [
                                    "duibuqi"
                                ],
                                mgx: [
                                    "meiguanxi"
                                ],
                                bkq: [
                                    "bukeqi",
                                    "biekeqi"
                                ],
                                xh: [
                                    "xinghui",
                                    "xihuan",
                                    "xinhao",
                                    "xuehui",
                                    "xiaohao",
                                    "xiaohai",
                                    "xinghao",
                                    "xianhui",
                                    "xianghe",
                                    "xuhang"
                                ],
                                qw: [
                                    "qingwen",
                                    "qianwan",
                                    "qiwen"
                                ],
                                mfl: [
                                    "mafanle",
                                    "meifanle"
                                ],
                                xkl: [
                                    "xinkule"
                                ],
                                gx: [
                                    "gongxi",
                                    "ganxie",
                                    "gaoxing",
                                    "guanxin",
                                    "guanxi",
                                    "guixing",
                                    "gongxian",
                                    "gouxiang",
                                    "guangxian",
                                    "gengxin"
                                ],
                                srkl: [
                                    "shengrikuaile"
                                ],
                                xnkl: [
                                    "xinniankuaile"
                                ],
                                zh: [
                                    "zhuhe",
                                    "zuihou",
                                    "zhanghao",
                                    "zihao",
                                    "zaihun",
                                    "zenghen",
                                    "zhenghao",
                                    "zhihu",
                                    "zouhong",
                                    "zhouhui"
                                ],
                                dq: [
                                    "daoqian",
                                    "daqi"
                                ],
                                sd: [
                                    "shide",
                                    "shangdian",
                                    "shidu",
                                    "shudian",
                                    "suoding",
                                    "sudu",
                                    "shendu",
                                    "shengdan",
                                    "shangdang",
                                    "shaodeng",
                                    "shoudao",
                                    "suidao",
                                    "shuangdong",
                                    "shandian",
                                    "shanding",
                                    "shidi"
                                ],
                                bsd: [
                                    "bushide"
                                ],
                                dd: [
                                    "duide",
                                    "didi",
                                    "dengdai",
                                    "dingdan",
                                    "duoda",
                                    "dongde",
                                    "dengdeng",
                                    "dadun",
                                    "dandang",
                                    "daiding",
                                    "dadan",
                                    "danda",
                                    "daodi",
                                    "daoda",
                                    "dida",
                                    "doudou",
                                    "diedai"
                                ],
                                bh: [
                                    "buhao",
                                    "buhui",
                                    "baohu",
                                    "bianhua",
                                    "baohan",
                                    "biehuang",
                                    "bianhu",
                                    "buhuo",
                                    "bahen",
                                    "bohui",
                                    "baihe"
                                ],
                                by: [
                                    "buyong",
                                    "buyao",
                                    "banye",
                                    "baoyou",
                                    "biye",
                                    "baoyang",
                                    "biaoyan",
                                    "baoyu",
                                    "baiyun",
                                    "biyan"
                                ],
                                my: [
                                    "meiyou",
                                    "manyi",
                                    "miyue",
                                    "mingyun",
                                    "meiyu"
                                ],
                                bx: [
                                    "buxing",
                                    "bingxiang",
                                    "bixu",
                                    "buxi",
                                    "baixing",
                                    "baoxiu",
                                    "baoxue",
                                    "baoxiao",
                                    "bixin"
                                ],
                                ky: [
                                    "keyi",
                                    "kangyi",
                                    "kouyu",
                                    "kaoya"
                                ],
                                bs: [
                                    "bushi",
                                    "biaoshi",
                                    "bushao",
                                    "benshi",
                                    "bise",
                                    "bishi",
                                    "baise"
                                ],
                                bn: [
                                    "buneng",
                                    "benneng",
                                    "baonuan"
                                ],
                                bhd: [
                                    "buhuide"
                                ],
                                hd: [
                                    "haode",
                                    "huida",
                                    "henduo",
                                    "huandai",
                                    "houdu",
                                    "huangdi",
                                    "haoduo",
                                    "houduan",
                                    "huandao",
                                    "haidao",
                                    "huaduo"
                                ],
                                ms: [
                                    "meishi",
                                    "mashang",
                                    "mianshi",
                                    "minsu",
                                    "mosheng",
                                    "mingsheng",
                                    "mashu",
                                    "maoshi",
                                    "mangsha",
                                    "miaosha",
                                    "muse"
                                ],
                                mwt: [
                                    "meiwenti"
                                ],
                                xb: [
                                    "xingba",
                                    "xiaban",
                                    "xuanba",
                                    "xuebi"
                                ],
                                hb: [
                                    "haoba",
                                    "huanbao",
                                    "huaban",
                                    "huabing",
                                    "huibao",
                                    "hongbao",
                                    "haibian",
                                    "hubo"
                                ],
                                db: [
                                    "duiba",
                                    "dingbu",
                                    "dibu",
                                    "daobie",
                                    "dabao",
                                    "daban",
                                    "daiban",
                                    "dubao"
                                ],
                                sb: [
                                    "shiba",
                                    "shoubiao",
                                    "shuben",
                                    "shibai",
                                    "shengbing",
                                    "shubiao",
                                    "songbie",
                                    "shangban",
                                    "sanbu",
                                    "shanbei",
                                    "shebao",
                                    "shangbiao"
                                ],
                                sl: [
                                    "suanle",
                                    "songli",
                                    "shanliang",
                                    "senlin",
                                    "shouli",
                                    "suili",
                                    "shilian",
                                    "silu",
                                    "shuliang",
                                    "shunli",
                                    "shanglu",
                                    "shulin",
                                    "shengleng"
                                ],
                                wss: [
                                    "woshishui",
                                    "weishengsu"
                                ],
                                wan: [
                                    "woaini"
                                ],
                                wj: [
                                    "wojiao",
                                    "wangji",
                                    "wenjian",
                                    "wanju",
                                    "wujie",
                                    "weiji",
                                    "wujia",
                                    "wanjia",
                                    "weijing"
                                ],
                                wm: [
                                    "women",
                                    "waimian",
                                    "wanmei",
                                    "waimai"
                                ],
                                nm: [
                                    "nimen",
                                    "name",
                                    "nongmin",
                                    "nanmian",
                                    "ningmeng"
                                ],
                                tm: [
                                    "tamen",
                                    "tangmei",
                                    "tianmi",
                                    "tanmu"
                                ],
                                dj: [
                                    "dajia",
                                    "dajie",
                                    "dongjing",
                                    "duojiu",
                                    "dujia",
                                    "dejiang",
                                    "daojiao",
                                    "dingji",
                                    "doujiang"
                                ],
                                br: [
                                    "bieren",
                                    "biran",
                                    "baorong",
                                    "bingren",
                                    "buran"
                                ],
                                nd: [
                                    "nandao",
                                    "nadao"
                                ],
                                syr: [
                                    "suoyouren"
                                ],
                                bb: [
                                    "baba",
                                    "baibai",
                                    "baobei",
                                    "baobao",
                                    "beibao",
                                    "biaobai",
                                    "banben",
                                    "bingbao",
                                    "baobiao"
                                ],
                                mm: [
                                    "mama",
                                    "meimei",
                                    "mima",
                                    "manman",
                                    "mimang",
                                    "meiman",
                                    "meimiao"
                                ],
                                ez: [
                                    "erzi"
                                ],
                                gg: [
                                    "gege",
                                    "gonggong",
                                    "ganggang",
                                    "gaige",
                                    "guige",
                                    "gaogui",
                                    "guogan",
                                    "guge",
                                    "gonggao"
                                ],
                                jj: [
                                    "jiejie",
                                    "jiujiu",
                                    "jujue",
                                    "jingji",
                                    "jiangjin",
                                    "jianjian",
                                    "jijiang",
                                    "jiangjiang",
                                    "jiangjia",
                                    "jinji",
                                    "jiaoji",
                                    "jieju",
                                    "jijin",
                                    "jiangjun",
                                    "jianjue",
                                    "jiejian",
                                    "jiaojian",
                                    "jijing",
                                    "jiangjiu",
                                    "jiji",
                                    "jijian",
                                    "jiajia"
                                ],
                                yy: [
                                    "yeye",
                                    "yongyuan",
                                    "yiyuan",
                                    "yiyang",
                                    "youyong",
                                    "yuanyin",
                                    "yuanyuan",
                                    "yinyue",
                                    "yanyuan",
                                    "youyu",
                                    "yiyi",
                                    "yingyun",
                                    "yaoyan",
                                    "yuanyou",
                                    "yuyan",
                                    "yingyu",
                                    "yueyu",
                                    "youya",
                                    "yongyue",
                                    "yingyong",
                                    "yuyin",
                                    "yingyang",
                                    "yongyao",
                                    "yiyan"
                                ],
                                nn: [
                                    "nainai",
                                    "niunai",
                                    "nanning",
                                    "naonu",
                                    "ngng",
                                    "ngna"
                                ],
                                wg: [
                                    "waigong",
                                    "waiguo",
                                    "wugui"
                                ],
                                wp: [
                                    "waipo",
                                    "wenping",
                                    "wopu"
                                ],
                                ss: [
                                    "shushu",
                                    "sushe",
                                    "sousuo",
                                    "shishi",
                                    "shuoshuo",
                                    "suansuan",
                                    "shoushi",
                                    "shensu",
                                    "shangsu",
                                    "shuishou",
                                    "shushi",
                                    "shaoshu",
                                    "shaoshao",
                                    "shishui",
                                    "shaoshang",
                                    "shanshi",
                                    "shoushu",
                                    "songshu",
                                    "shenshen"
                                ],
                                ay: [
                                    "ayi",
                                    "aoye",
                                    "anyi",
                                    "aiya",
                                    "aiyo"
                                ],
                                ls: [
                                    "laoshi",
                                    "lishi",
                                    "liangshai",
                                    "lvshi",
                                    "linse",
                                    "liushen",
                                    "liushui",
                                    "lingshou",
                                    "lanshou",
                                    "lushui",
                                    "lianse",
                                    "lashen",
                                    "liushu",
                                    "lanse",
                                    "lvse",
                                    "leisi"
                                ],
                                tx: [
                                    "tongxue",
                                    "tixi",
                                    "tuixiu",
                                    "tiaoxuan",
                                    "tangxia",
                                    "texing",
                                    "tengxun",
                                    "tixing",
                                    "touxiang"
                                ],
                                ts: [
                                    "tongshi",
                                    "teshu",
                                    "tiaosheng",
                                    "tiaoshi",
                                    "tousu",
                                    "tushu",
                                    "tanshuai",
                                    "tashi",
                                    "tangshi",
                                    "tangshang"
                                ],
                                lb: [
                                    "laoban",
                                    "liubing",
                                    "leibie",
                                    "libi"
                                ],
                                lj: [
                                    "linju",
                                    "lijie",
                                    "lianjie",
                                    "liji",
                                    "liaojie",
                                    "liangjie",
                                    "lingjiang",
                                    "lajia",
                                    "liangji",
                                    "laojia",
                                    "lajiao",
                                    "liaojiu",
                                    "lajiang",
                                    "lijiao"
                                ],
                                qq: [
                                    "qinqi",
                                    "qingqing",
                                    "qinqie",
                                    "qiaoqiao",
                                    "qingqiao",
                                    "qiquan",
                                    "queqie"
                                ],
                                fm: [
                                    "fumu",
                                    "fangmian",
                                    "fanmen",
                                    "fengman"
                                ],
                                hz: [
                                    "haizi",
                                    "hangzhou",
                                    "hezuo",
                                    "huzhu",
                                    "haozhao",
                                    "hanzi",
                                    "huangzhang",
                                    "huozhe",
                                    "huanzhe",
                                    "houzi"
                                ],
                                zf: [
                                    "zhangfu",
                                    "zhengfu",
                                    "zaofan",
                                    "zuofan",
                                    "zhufan",
                                    "zhifu",
                                    "zhuanfa",
                                    "zhenfen",
                                    "zifu"
                                ],
                                qz: [
                                    "qizi",
                                    "qiuzhi",
                                    "qingzhu",
                                    "quanzi",
                                    "qunzhong",
                                    "qizheng",
                                    "qiangzhuang",
                                    "quzhe",
                                    "qiezi"
                                ],
                                ns: [
                                    "nansheng",
                                    "nvsheng",
                                    "niushang"
                                ],
                                nr: [
                                    "nanren",
                                    "nvren",
                                    "niurou",
                                    "neirong"
                                ],
                                kl: [
                                    "kuaile",
                                    "kailang",
                                    "kuile",
                                    "kele",
                                    "kali",
                                    "keli"
                                ],
                                xf: [
                                    "xingfu",
                                    "xingfen",
                                    "xiangfa",
                                    "xinfan",
                                    "xiufu",
                                    "xiangfan"
                                ],
                                xw: [
                                    "xiwang",
                                    "xiawu",
                                    "xingwu",
                                    "xinwen",
                                    "xuewei",
                                    "xinwei",
                                    "xuwei"
                                ],
                                sq: [
                                    "shengqi",
                                    "shangqu",
                                    "shiqing",
                                    "shenqing",
                                    "shuaiqi",
                                    "shouquan"
                                ],
                                jz: [
                                    "jinzhang",
                                    "jizhu",
                                    "jiezhi",
                                    "jiezhang",
                                    "jiezou",
                                    "jueze",
                                    "juzhong",
                                    "jiaozao",
                                    "jizao",
                                    "jizhi",
                                    "jianzhuang",
                                    "jingzhi",
                                    "jiaozi",
                                    "juzi",
                                    "jiazhao",
                                    "jingzhe",
                                    "jizhen",
                                    "jiezhe"
                                ],
                                hp: [
                                    "haipa"
                                ],
                                gj: [
                                    "ganji",
                                    "ganjue",
                                    "guojia",
                                    "ganjing",
                                    "gongjiao",
                                    "genju",
                                    "guangjie",
                                    "guanji",
                                    "gaijin",
                                    "guji",
                                    "guanjian",
                                    "gaoji",
                                    "gengjia",
                                    "gaojia",
                                    "genjin",
                                    "ganjin"
                                ],
                                jd: [
                                    "juede",
                                    "jiudian",
                                    "jide",
                                    "jueding",
                                    "jieduan",
                                    "jiandan",
                                    "juedui",
                                    "jiangdi",
                                    "jindu",
                                    "jidong",
                                    "jiedao",
                                    "jiaodao",
                                    "jiaodai",
                                    "jingdi",
                                    "jianding",
                                    "jingdong"
                                ],
                                kx: [
                                    "kaixin",
                                    "kexue",
                                    "kongxu",
                                    "kaoxiang",
                                    "kaixue",
                                    "kaixiang",
                                    "kanxi"
                                ],
                                sx: [
                                    "shangxin",
                                    "suoxiao",
                                    "shixi",
                                    "shuangxiu",
                                    "shuxi",
                                    "shaixuan",
                                    "shuxue",
                                    "shuxin",
                                    "shaoxu",
                                    "shouxian",
                                    "shangxia",
                                    "shuaxin",
                                    "sanxing",
                                    "shengxiao",
                                    "shangxian"
                                ],
                                fn: [
                                    "fannao",
                                    "fennu"
                                ],
                                hq: [
                                    "haoqi",
                                    "huiqu",
                                    "heqi"
                                ],
                                jy: [
                                    "jingya",
                                    "jianyi",
                                    "jiaoyu",
                                    "juyuan",
                                    "jiangyao",
                                    "jiuyuan",
                                    "jiayou",
                                    "jiyu",
                                    "jianyu",
                                    "jinyao",
                                    "jieyue",
                                    "jiyuan",
                                    "jiangyou",
                                    "jiaoyi",
                                    "jiyao",
                                    "jueyi",
                                    "jinyu"
                                ],
                                sw: [
                                    "shiwang",
                                    "shangwu",
                                    "shiwu",
                                    "shengwu",
                                    "shangwan",
                                    "shaowei"
                                ],
                                jm: [
                                    "jimo",
                                    "jianmian",
                                    "jiemen",
                                    "jimu",
                                    "jumian",
                                    "jumin",
                                    "jingming",
                                    "jingmei",
                                    "jimao"
                                ],
                                gd: [
                                    "gudu",
                                    "gandie",
                                    "gandong",
                                    "gudai",
                                    "guandian",
                                    "guiding",
                                    "gaodu",
                                    "guoduan",
                                    "gaodang"
                                ],
                                sn: [
                                    "sinian",
                                    "suini",
                                    "sunnv",
                                    "shouna",
                                    "suannai"
                                ],
                                xq: [
                                    "xinqing",
                                    "xiaqu",
                                    "xiaoqu",
                                    "xiangqi",
                                    "xiangqin",
                                    "xiqu",
                                    "xiuqi",
                                    "xiaoqi",
                                    "xiaqi"
                                ],
                                mx: [
                                    "mengxiang",
                                    "mingxing",
                                    "mingxi"
                                ],
                                zg: [
                                    "zhongguo",
                                    "zhege",
                                    "zhuigan",
                                    "zhaogong",
                                    "zhaogu",
                                    "zige",
                                    "zhengge",
                                    "zaogao",
                                    "zhanggui",
                                    "zhuguan"
                                ],
                                bj: [
                                    "beijing",
                                    "bijiao",
                                    "bieji",
                                    "biaojie",
                                    "bianji",
                                    "banjiang",
                                    "bajian",
                                    "bijing",
                                    "bajiao",
                                    "biaojia",
                                    "bujue"
                                ],
                                sh: [
                                    "shanghai",
                                    "shuohua",
                                    "shenghuo",
                                    "shehui",
                                    "shouhuan",
                                    "shuihu",
                                    "shouhu",
                                    "songhua",
                                    "shuhuan",
                                    "shunhua",
                                    "shihua",
                                    "shihui",
                                    "shenghao",
                                    "shouhou",
                                    "suihou",
                                    "sihu"
                                ],
                                sz: [
                                    "shenzhen",
                                    "shangzhou",
                                    "shezhi",
                                    "sangzi",
                                    "shengzhi",
                                    "sunzi",
                                    "suzhou",
                                    "shaozi",
                                    "saozhou",
                                    "shuzhi",
                                    "shizai",
                                    "shenzhong",
                                    "shizu",
                                    "shizi",
                                    "shizhen",
                                    "shenzhi"
                                ],
                                gz: [
                                    "guangzhou",
                                    "gongzuo",
                                    "guzhe",
                                    "gongzi",
                                    "guanzhong",
                                    "guangzhan",
                                    "guize",
                                    "guanzhu",
                                    "guazi",
                                    "guozhi",
                                    "genzong",
                                    "guanzhi",
                                    "guzhang"
                                ],
                                cd: [
                                    "chengdu",
                                    "chidao",
                                    "changdu",
                                    "changduan",
                                    "chaodai",
                                    "chongdong",
                                    "chidun",
                                    "chadian",
                                    "chedi",
                                    "chongdian"
                                ],
                                wh: [
                                    "wuhan",
                                    "wenhua",
                                    "wenhe",
                                    "weihe",
                                    "wenhou",
                                    "weihu",
                                    "wuhui"
                                ],
                                nj: [
                                    "nanjing",
                                    "ningjing",
                                    "nianjian"
                                ],
                                gw: [
                                    "guowai",
                                    "gouwu",
                                    "gewei",
                                    "guwu",
                                    "gewai"
                                ],
                                gy: [
                                    "gongyuan",
                                    "gouyong",
                                    "guiyang",
                                    "guanyuan",
                                    "gaoyuan",
                                    "gaoyao"
                                ],
                                cs: [
                                    "chaoshi",
                                    "cesuo",
                                    "chengshi",
                                    "chengshu",
                                    "chushi",
                                    "changsha",
                                    "cuoshi",
                                    "cashi",
                                    "chengshou",
                                    "canshu",
                                    "caoshuai",
                                    "cusu",
                                    "chuse",
                                    "chisha",
                                    "chaosong",
                                    "ceshi",
                                    "chuangshang",
                                    "cuoshang",
                                    "cashang",
                                    "cangshu",
                                    "chengse"
                                ],
                                dyy: [
                                    "dianyingyuan",
                                    "diyanye"
                                ],
                                tsg: [
                                    "tushuguan"
                                ],
                                fd: [
                                    "fandian",
                                    "fandui",
                                    "fouding",
                                    "fendou"
                                ],
                                cz: [
                                    "chezhan",
                                    "chezi",
                                    "chazi",
                                    "cizhi",
                                    "chazhao",
                                    "caizheng",
                                    "chuzhong",
                                    "caoza",
                                    "chengzhu",
                                    "chongzhi",
                                    "chengzi"
                                ],
                                jc: [
                                    "jichang",
                                    "jiancha",
                                    "jingcha",
                                    "jingchang",
                                    "jinchu",
                                    "jiaoche",
                                    "jucan",
                                    "jiance",
                                    "jiechuan",
                                    "jiaocai",
                                    "jichu",
                                    "jiechu",
                                    "jici",
                                    "jianchi",
                                    "jiacai",
                                    "jiucai"
                                ],
                                mt: [
                                    "matou",
                                    "mingtian",
                                    "meitian",
                                    "miantian",
                                    "meiti",
                                    "miaotiao",
                                    "meituan",
                                    "miantiao",
                                    "mantou"
                                ],
                                xz: [
                                    "xianzai",
                                    "xiazhou",
                                    "xuanze",
                                    "xiezi",
                                    "xunzhao",
                                    "xiazai",
                                    "xiangzao",
                                    "xiezhu",
                                    "xizao",
                                    "xiezuo",
                                    "xianzhi",
                                    "xizhi",
                                    "xianzu",
                                    "xiezai",
                                    "xuezhi",
                                    "xiaozu"
                                ],
                                jt: [
                                    "jintian",
                                    "juti",
                                    "jiaotong",
                                    "jiating",
                                    "jiaotan",
                                    "jiantao",
                                    "jiaotang",
                                    "jingti",
                                    "jitiao"
                                ],
                                zt: [
                                    "zuotian",
                                    "zhengti"
                                ],
                                ht: [
                                    "houtian",
                                    "hetong",
                                    "huntun",
                                    "hetao",
                                    "houtui"
                                ],
                                qt: [
                                    "qiantian",
                                    "quanti",
                                    "qingtian"
                                ],
                                yh: [
                                    "yihou",
                                    "yinhang",
                                    "yuehui",
                                    "youhui",
                                    "yihan",
                                    "youhua",
                                    "yanhe",
                                    "yinhuan",
                                    "yuanhen",
                                    "yuanhua",
                                    "yanhuo",
                                    "youhao",
                                    "yinhe"
                                ],
                                yq: [
                                    "yiqian",
                                    "yiqi",
                                    "yaoqiu",
                                    "yaoqing",
                                    "yanqi",
                                    "yuqi",
                                    "yunqi",
                                    "yuanqi",
                                    "yuqing"
                                ],
                                jn: [
                                    "jinnian",
                                    "jiannan",
                                    "jiaonang"
                                ],
                                mn: [
                                    "mingnian",
                                    "meinian"
                                ],
                                mz: [
                                    "meizhou",
                                    "manzou",
                                    "menzhen",
                                    "mangzhuang",
                                    "manzeng",
                                    "mazui"
                                ],
                                yj: [
                                    "yijing",
                                    "yanjiu",
                                    "yijian",
                                    "yanjing",
                                    "yijia",
                                    "yuejian",
                                    "youji",
                                    "yingjun",
                                    "yanjin",
                                    "yongji",
                                    "youjing",
                                    "youjian",
                                    "yuanjia",
                                    "yujia",
                                    "yiji"
                                ],
                                zz: [
                                    "zhengzai",
                                    "zuozuo",
                                    "zouzou",
                                    "zhuazhu",
                                    "zanzhu",
                                    "zunzhong",
                                    "zhengzhi",
                                    "zizai",
                                    "zize",
                                    "zhengzhou",
                                    "zhaozhao",
                                    "zizhu",
                                    "zuzhuang",
                                    "zhunze",
                                    "zhize",
                                    "zazhi",
                                    "zhizhuo",
                                    "zuizhong",
                                    "zhuanzhang",
                                    "zhongzhuan",
                                    "zuozhuan",
                                    "zhaoze",
                                    "zuzhang",
                                    "zhuanzheng",
                                    "zhuzi",
                                    "zongzhi"
                                ],
                                gc: [
                                    "gangcai",
                                    "guocheng",
                                    "gaoci",
                                    "guangchang",
                                    "gongchu",
                                    "goucheng",
                                    "gongcheng",
                                    "guaceng"
                                ],
                                zs: [
                                    "zaoshang",
                                    "zhongshi",
                                    "zhishao",
                                    "zhensuo",
                                    "zanshi",
                                    "zhunshi",
                                    "zhenshi",
                                    "zhaosheng",
                                    "zhengshu",
                                    "zhishuang",
                                    "zhishuai",
                                    "zhashi",
                                    "zongsuan",
                                    "zuanshi",
                                    "zhusun",
                                    "zaoshui",
                                    "zise",
                                    "zongse",
                                    "zaisan"
                                ],
                                zw: [
                                    "zhongwu",
                                    "zuowan",
                                    "zhouwei",
                                    "zhuanwan",
                                    "zhanwang",
                                    "zhiwen",
                                    "zhuiwei"
                                ],
                                ws: [
                                    "wanshang",
                                    "woshi",
                                    "wanshan",
                                    "wenshun",
                                    "wushu",
                                    "wasai",
                                    "wushui"
                                ],
                                bz: [
                                    "benzhou",
                                    "bangzhu",
                                    "baozheng",
                                    "bizi",
                                    "baozhong",
                                    "baozao",
                                    "benzhi",
                                    "beizi",
                                    "banzui",
                                    "buzu",
                                    "baozhi",
                                    "benzhuo",
                                    "baozi"
                                ],
                                sgy: [
                                    "shanggeyue"
                                ],
                                xgy: [
                                    "xiageyue"
                                ],
                                pc: [
                                    "pingchang",
                                    "pinche"
                                ],
                                ysh: [
                                    "youshihou"
                                ],
                                cl: [
                                    "conglai",
                                    "chulai",
                                    "chuli",
                                    "celve",
                                    "chonglang",
                                    "chaoliu",
                                    "canle"
                                ],
                                sm: [
                                    "shenme",
                                    "shangmian",
                                    "shuoming",
                                    "shanmai",
                                    "shimian",
                                    "shiming",
                                    "shimin",
                                    "simiao",
                                    "saoma",
                                    "shuaimai",
                                    "shamo",
                                    "shuimian"
                                ],
                                ne: [
                                    "naer"
                                ],
                                jg: [
                                    "jige",
                                    "jieguo",
                                    "jiage",
                                    "jiegou",
                                    "jiagou"
                                ],
                                ds: [
                                    "duoshao",
                                    "dianshi",
                                    "dushu",
                                    "duishou",
                                    "danshi",
                                    "dengshan",
                                    "dasao",
                                    "deshi",
                                    "diaosu",
                                    "daoshi",
                                    "duoshu",
                                    "dashang"
                                ],
                                gm: [
                                    "ganma",
                                    "ganmao",
                                    "gemen",
                                    "gongmin",
                                    "guomin"
                                ],
                                zml: [
                                    "zenmele"
                                ],
                                zmy: [
                                    "zenmeyang"
                                ],
                                zm: [
                                    "zenme",
                                    "zheme",
                                    "zhoumo",
                                    "zhuomo",
                                    "zhenmi",
                                    "zaima"
                                ],
                                smsh: [
                                    "shenmeshihou"
                                ],
                                wsme: [
                                    "weishenmene"
                                ],
                                ng: [
                                    "nage",
                                    "nenggan"
                                ],
                                zx: [
                                    "zhexie",
                                    "zuoxia",
                                    "zhixing",
                                    "zhuxiao",
                                    "zixun",
                                    "zhenxi",
                                    "zhixiang",
                                    "zhuanxing",
                                    "zhixie",
                                    "zhexue",
                                    "zhanxin",
                                    "zhenxiang",
                                    "zhongxue",
                                    "zuoxi"
                                ],
                                nx: [
                                    "naxie",
                                    "nvxu",
                                    "naxing"
                                ],
                                zy: [
                                    "zheyang",
                                    "zenyang",
                                    "zhuyao",
                                    "ziyuan",
                                    "zhuanye",
                                    "zhuyi",
                                    "zhongyao",
                                    "zhiyi",
                                    "zhiyuan",
                                    "zhuoyue",
                                    "zuoyou",
                                    "zhongyu",
                                    "zhenyu",
                                    "zhuya",
                                    "zhuyuan",
                                    "zhiye",
                                    "zhiyao",
                                    "zhiyou"
                                ],
                                ny: [
                                    "nayang",
                                    "nengyuan",
                                    "niuyue"
                                ],
                                zd: [
                                    "zhidao",
                                    "zhaodao",
                                    "zhende",
                                    "zhiduo",
                                    "zhangda",
                                    "zhaodai",
                                    "zhidian",
                                    "zhedie",
                                    "zhidu",
                                    "zhengdang",
                                    "zida",
                                    "zhudong",
                                    "zhoudao",
                                    "zhongduo",
                                    "zhangdan",
                                    "zhongdian"
                                ],
                                mb: [
                                    "mingbai",
                                    "mubiao",
                                    "mianbao",
                                    "maobing",
                                    "maibo"
                                ],
                                kj: [
                                    "kanjian",
                                    "kongju",
                                    "kanjia",
                                    "kaojiu",
                                    "kunjuan"
                                ],
                                xd: [
                                    "xiangdao",
                                    "xiangdang",
                                    "xiongdi",
                                    "xiaodi",
                                    "xiaodu",
                                    "xuduo",
                                    "xiadan",
                                    "xiangdui"
                                ],
                                sj: [
                                    "shijian",
                                    "shuijiao",
                                    "shijie",
                                    "shuju",
                                    "shouji",
                                    "siji",
                                    "shujia",
                                    "shangjin",
                                    "shengji",
                                    "shiji",
                                    "shuji",
                                    "shejian",
                                    "sheji",
                                    "shuaji",
                                    "shangjia",
                                    "shujiu",
                                    "shanjiao"
                                ],
                                bc: [
                                    "biancheng",
                                    "boche",
                                    "baocun",
                                    "baocuo",
                                    "baicai",
                                    "bocai",
                                    "bingchuan"
                                ],
                                ys: [
                                    "yisheng",
                                    "yaoshi",
                                    "yisi",
                                    "yishu",
                                    "youshi",
                                    "yusuan",
                                    "yansu",
                                    "yusan",
                                    "yashua",
                                    "yinsu",
                                    "yangshi",
                                    "youshang",
                                    "yuanshi",
                                    "yinsi",
                                    "yushou",
                                    "yushui",
                                    "yueshi",
                                    "yese",
                                    "yanshi",
                                    "yushi"
                                ],
                                tj: [
                                    "tingjian",
                                    "tiaojian",
                                    "tangjie",
                                    "tianjin",
                                    "tujing",
                                    "tiaojie",
                                    "tuanjie",
                                    "tiji",
                                    "tejia",
                                    "taiji",
                                    "tijian",
                                    "tangjiang"
                                ],
                                rw: [
                                    "renwei",
                                    "renwu"
                                ],
                                fx: [
                                    "faxian",
                                    "fangxia",
                                    "fenxi",
                                    "fangxue",
                                    "fenxiang",
                                    "fanxing",
                                    "fengxian",
                                    "fangxin",
                                    "fangxiang",
                                    "fengxiang",
                                    "fuxie",
                                    "fangxing"
                                ],
                                kyk: [
                                    "kanyikan"
                                ],
                                xyx: [
                                    "xiangyixiang"
                                ],
                                xy: [
                                    "xiangyao",
                                    "xiayu",
                                    "xuyuan",
                                    "xinyuan",
                                    "xiangyue",
                                    "xinyu",
                                    "xiyue",
                                    "xiaoye",
                                    "xiangye",
                                    "xiaoyu",
                                    "xiyang",
                                    "xueya",
                                    "xieyi",
                                    "xuyue"
                                ],
                                sk: [
                                    "sikao",
                                    "songkai",
                                    "shoukuan",
                                    "shangke",
                                    "shaokao",
                                    "shuangkuai",
                                    "shuiku",
                                    "shangkou"
                                ],
                                pd: [
                                    "panduan",
                                    "pendi"
                                ],
                                jh: [
                                    "jihua",
                                    "juhui",
                                    "jihu",
                                    "jiaohua",
                                    "jiehun",
                                    "jinghuang",
                                    "jiahua",
                                    "jiuhao",
                                    "jinhuo",
                                    "jianghe",
                                    "junheng",
                                    "juhua"
                                ],
                                ap: [
                                    "anpai"
                                ],
                                zb: [
                                    "zhunbei",
                                    "zuobian",
                                    "zuiba",
                                    "zhebian",
                                    "zhenban",
                                    "zhibo",
                                    "zhuanbian",
                                    "zhibiao",
                                    "zuobiao",
                                    "zhuangbei",
                                    "zhubo"
                                ],
                                qd: [
                                    "qidai",
                                    "qiangda",
                                    "qianding",
                                    "qingdao",
                                    "queding",
                                    "qidong",
                                    "quedian",
                                    "qidao",
                                    "qianduan",
                                    "qiduan",
                                    "qingdan",
                                    "qiandao"
                                ],
                                dx: [
                                    "danxin",
                                    "dongxi",
                                    "duoxie",
                                    "duixiang",
                                    "dangxia",
                                    "dunxia",
                                    "daoxie",
                                    "daxie",
                                    "dixian",
                                    "dangxin",
                                    "daxue",
                                    "daxiang",
                                    "duanxin"
                                ],
                                dn: [
                                    "diannao"
                                ],
                                yf: [
                                    "yifu",
                                    "yuefu",
                                    "yuanfen",
                                    "yufa",
                                    "yuefa",
                                    "yunfei",
                                    "yaofang",
                                    "yifang",
                                    "yanfa"
                                ],
                                fz: [
                                    "fangzi",
                                    "fangzai",
                                    "fangzhao",
                                    "fazhan",
                                    "fanzao",
                                    "fuzhou",
                                    "fenzhong",
                                    "fuzhang",
                                    "fuzhi",
                                    "fuze",
                                    "fangzhen",
                                    "fuzhai",
                                    "fuzao",
                                    "fuzhu"
                                ],
                                qb: [
                                    "qianbao",
                                    "qianbi",
                                    "quanbu",
                                    "qingbian"
                                ],
                                ej: [
                                    "erji"
                                ],
                                cdq: [
                                    "chongdianqi"
                                ],
                                kt: [
                                    "kongtiao",
                                    "keting",
                                    "kantou",
                                    "ketao"
                                ],
                                xyj: [
                                    "xiyiji"
                                ],
                                wbl: [
                                    "weibolu"
                                ],
                                bjb: [
                                    "bijiben"
                                ],
                                xm: [
                                    "xiamian",
                                    "xiangmu",
                                    "xiaomei",
                                    "xianmu",
                                    "xiamen",
                                    "xiaomi",
                                    "xiongmen",
                                    "xiaomao",
                                    "xiongmao"
                                ],
                                yb: [
                                    "youbian",
                                    "yiban",
                                    "yibian"
                                ],
                                qm: [
                                    "qianmian",
                                    "qingmie",
                                    "quanmian"
                                ],
                                hm: [
                                    "houmian",
                                    "huimian",
                                    "hemu",
                                    "haomei"
                                ],
                                lm: [
                                    "limian",
                                    "lengmo",
                                    "lingmin",
                                    "lumang",
                                    "lanman",
                                    "lanmei",
                                    "liming"
                                ],
                                pb: [
                                    "pangbian",
                                    "paobu",
                                    "pingban",
                                    "peiban",
                                    "pubu",
                                    "pibei"
                                ],
                                df: [
                                    "difang",
                                    "dafang",
                                    "doufu",
                                    "daifu"
                                ],
                                zl: [
                                    "zheli",
                                    "zoulang",
                                    "zhenli",
                                    "zhengli",
                                    "zhaoliao",
                                    "zilv",
                                    "zhonglei",
                                    "zuli",
                                    "zhiliang",
                                    "zhuanle",
                                    "zhaoling",
                                    "zhuanli",
                                    "zoule"
                                ],
                                nl: [
                                    "nali",
                                    "nuli",
                                    "nongli",
                                    "nengli",
                                    "nailao"
                                ],
                                jl: [
                                    "jiali",
                                    "jinlai",
                                    "jianli",
                                    "jianliang",
                                    "jiaolv",
                                    "jiaoliu",
                                    "jilv",
                                    "juli",
                                    "jiling",
                                    "jianlou",
                                    "juele",
                                    "jingli",
                                    "jilu"
                                ],
                                gs: [
                                    "gongsi",
                                    "gushi",
                                    "gaosu",
                                    "geshou",
                                    "ganshou",
                                    "gensui",
                                    "gusuan",
                                    "gaoshan"
                                ],
                                cf: [
                                    "chufang",
                                    "chifan",
                                    "chaifeng",
                                    "chengfen",
                                    "caifu",
                                    "chengfu",
                                    "chaofan",
                                    "chufa",
                                    "chunfen",
                                    "chufei",
                                    "chongfu"
                                ],
                                yt: [
                                    "yangtai",
                                    "youting",
                                    "yuntang",
                                    "yongtu",
                                    "youtiao",
                                    "yingtao",
                                    "yintian",
                                    "yutian",
                                    "yateng",
                                    "yatong",
                                    "yiti",
                                    "yitang"
                                ],
                                bons: [
                                    "bangongshi"
                                ],
                                hys: [
                                    "huiyishi"
                                ],
                                sys: [
                                    "shiyanshi"
                                ],
                                st: [
                                    "shitang",
                                    "shenti",
                                    "shutan",
                                    "shitai",
                                    "shangtou",
                                    "shantui",
                                    "shatan"
                                ],
                                js: [
                                    "jiaoshi",
                                    "jieshu",
                                    "jieshou",
                                    "jieshi",
                                    "jishu",
                                    "jianshao",
                                    "jiashu",
                                    "jusang",
                                    "jishi",
                                    "jianshen",
                                    "jiesuo",
                                    "jinshen",
                                    "jiesuan",
                                    "jingshen",
                                    "jinsheng"
                                ],
                                gl: [
                                    "guolai",
                                    "guanli",
                                    "guilv",
                                    "gonglao",
                                    "ganlu"
                                ],
                                gq: [
                                    "guoqu",
                                    "gaiqi",
                                    "gangqiang",
                                    "guaiqiao",
                                    "gaiqian",
                                    "gouqiang"
                                ],
                                cq: [
                                    "chuqu",
                                    "chongqing",
                                    "chengqian",
                                    "couqiao",
                                    "chongqi"
                                ],
                                jq: [
                                    "jinqu",
                                    "jianqie",
                                    "jinqian",
                                    "jiqiao",
                                    "jiqie",
                                    "jianqiang",
                                    "jingque",
                                    "jiqi",
                                    "jiaqian",
                                    "jieqi",
                                    "jianqing"
                                ],
                                hl: [
                                    "huilai",
                                    "heliu",
                                    "huli",
                                    "huili",
                                    "hunli",
                                    "huilv",
                                    "huali",
                                    "huanle",
                                    "hunluan",
                                    "huaile",
                                    "hailang",
                                    "huoli",
                                    "haole"
                                ],
                                ql: [
                                    "qilai",
                                    "quanli",
                                    "qingli",
                                    "qianli",
                                    "qiaoliang",
                                    "qiuling"
                                ],
                                zql: [
                                    "zhanqilai"
                                ],
                                dk: [
                                    "dakai",
                                    "duankai",
                                    "daikuan"
                                ],
                                gb: [
                                    "guanbi",
                                    "genben",
                                    "gaibian",
                                    "gebi",
                                    "gaobie",
                                    "ganbei",
                                    "guangbo",
                                    "gebie"
                                ],
                                ks: [
                                    "kaishi",
                                    "kesou",
                                    "kuanshu",
                                    "kaoshi",
                                    "kuaishou",
                                    "kasi",
                                    "kuisun",
                                    "kanshu"
                                ],
                                jx: [
                                    "jixu",
                                    "jinxing",
                                    "jiangxiang",
                                    "jingxi",
                                    "jianxian",
                                    "jiaxin"
                                ],
                                tz: [
                                    "tingzhi",
                                    "tongzhi",
                                    "tingzhong",
                                    "tiaozheng",
                                    "touzi",
                                    "tianzhen",
                                    "tizi",
                                    "taozi",
                                    "tuzhong",
                                    "tizhi",
                                    "tuzi"
                                ],
                                lk: [
                                    "likai",
                                    "lukou",
                                    "like",
                                    "lukuang"
                                ],
                                fs: [
                                    "fasong",
                                    "fangshou",
                                    "fangshi",
                                    "fasheng",
                                    "fashao",
                                    "fensi",
                                    "fangsong",
                                    "fengshan",
                                    "fansi",
                                    "fenshou",
                                    "fenshu",
                                    "fengsu",
                                    "fangshu",
                                    "fangshai",
                                    "fense"
                                ],
                                sc: [
                                    "shanchu",
                                    "shangchuan",
                                    "shucai",
                                    "shangchang",
                                    "shichang",
                                    "shangcai",
                                    "shichuan",
                                    "shache",
                                    "shoucang",
                                    "shuchang",
                                    "shicuo",
                                    "songchi",
                                    "shechi",
                                    "shunchang",
                                    "shengcai",
                                    "saiche",
                                    "shachen",
                                    "sancan"
                                ],
                                cg: [
                                    "changge",
                                    "chaoguo",
                                    "chenggong",
                                    "chengguo"
                                ],
                                tw: [
                                    "tiaowu",
                                    "taiwan",
                                    "tanwang"
                                ],
                                hh: [
                                    "huahua",
                                    "haohao",
                                    "haihao",
                                    "houhui",
                                    "huanhuo",
                                    "hehao",
                                    "huanhe",
                                    "haha",
                                    "hehe",
                                    "heihei",
                                    "huanghun",
                                    "huihua",
                                    "henhen"
                                ],
                                kq: [
                                    "kanqiu",
                                    "kongqi",
                                    "keqi",
                                    "kuangqie"
                                ],
                                tg: [
                                    "tingge",
                                    "tigao",
                                    "tangge",
                                    "tangguo",
                                    "tuangou",
                                    "tige",
                                    "tongguo"
                                ],
                                kdy: [
                                    "kandianying"
                                ],
                                kk: [
                                    "kankan",
                                    "kuaikuai",
                                    "keku",
                                    "kangkai",
                                    "kekao",
                                    "kanke",
                                    "kuakua"
                                ],
                                kd: [
                                    "kandao",
                                    "kuoda",
                                    "kuaidi",
                                    "kending",
                                    "kuandai",
                                    "kuandu",
                                    "kadun"
                                ],
                                xc: [
                                    "xiechu",
                                    "xiangchu",
                                    "xiche",
                                    "xunchang",
                                    "xiangce",
                                    "xiangchang",
                                    "xiaochuan",
                                    "xinchou"
                                ],
                                zc: [
                                    "zuochu",
                                    "zhichi",
                                    "zhengchang",
                                    "zuichu",
                                    "zhuce",
                                    "zancheng",
                                    "zhencheng",
                                    "zhengchao",
                                    "zhangcheng",
                                    "zhengce",
                                    "zhichu",
                                    "zichan",
                                    "zhuanchang",
                                    "zaocan",
                                    "zhuanche",
                                    "zuche",
                                    "zhangchao",
                                    "zhuchi",
                                    "zaici",
                                    "zuoche"
                                ],
                                ty: [
                                    "tongyi",
                                    "taiyang",
                                    "taiyuan",
                                    "tiyan",
                                    "tiyi",
                                    "tiyu",
                                    "taoyan",
                                    "tuoyun",
                                    "touyun",
                                    "tuoyuan",
                                    "tongyang"
                                ],
                                py: [
                                    "pengyou",
                                    "pianyi",
                                    "peiyin",
                                    "pingyong",
                                    "pingyuan"
                                ],
                                bm: [
                                    "bangmang",
                                    "biaomei",
                                    "bianmi",
                                    "bumen",
                                    "baomi",
                                    "banma"
                                ],
                                ph: [
                                    "peihe"
                                ],
                                lx: [
                                    "lianxi",
                                    "lvxing",
                                    "laoxiang",
                                    "luxiang",
                                    "lixiang",
                                    "leixing",
                                    "luxian",
                                    "lixi",
                                    "lingxian",
                                    "lingxing",
                                    "longxia",
                                    "liuxing"
                                ],
                                tl: [
                                    "taolun",
                                    "tuole",
                                    "tiliang",
                                    "tiaoli"
                                ],
                                gt: [
                                    "goutong",
                                    "gaotie",
                                    "gaitian"
                                ],
                                qk: [
                                    "qingke",
                                    "qingkuang",
                                    "qikan",
                                    "qingkuai"
                                ],
                                fq: [
                                    "fuqian",
                                    "fengqu",
                                    "faquan",
                                    "fenqi",
                                    "fuqiang",
                                    "fanqie"
                                ],
                                yl: [
                                    "yuanliang",
                                    "yinliao",
                                    "yueliang",
                                    "yanli",
                                    "yeli",
                                    "youlie",
                                    "yinglang",
                                    "yiliu",
                                    "yingli"
                                ],
                                xr: [
                                    "xinren",
                                    "xurong",
                                    "xianran"
                                ],
                                cno: [
                                    "chengnuo"
                                ],
                                dy: [
                                    "daying",
                                    "dianying",
                                    "danyou",
                                    "duoyuan",
                                    "deyu",
                                    "dayi",
                                    "dayue",
                                    "duiya",
                                    "douyin",
                                    "dingyue",
                                    "douya",
                                    "dianyuan",
                                    "duoyun",
                                    "dayu",
                                    "daoyu",
                                    "daiyu",
                                    "diaoyu"
                                ],
                                wt: [
                                    "wenti",
                                    "weiting",
                                    "weiteng"
                                ],
                                ff: [
                                    "fangfa",
                                    "fanfan",
                                    "fangfu",
                                    "fanfu"
                                ],
                                bf: [
                                    "banfa",
                                    "baifang",
                                    "baofu",
                                    "baifo",
                                    "bufen",
                                    "beifen",
                                    "bingfang"
                                ],
                                ke: [
                                    "keneng"
                                ],
                                yg: [
                                    "yinggai",
                                    "yonggan",
                                    "yigong",
                                    "yiguan",
                                    "yagao",
                                    "yuangu",
                                    "yonggong",
                                    "yagen",
                                    "yueguang"
                                ],
                                sr: [
                                    "suiran",
                                    "shouru"
                                ],
                                rg: [
                                    "ruguo",
                                    "ruogan"
                                ],
                                sy: [
                                    "suoyi",
                                    "suoyou",
                                    "shenyang",
                                    "shenye",
                                    "shiyue",
                                    "shuaya",
                                    "shiying",
                                    "shiyan",
                                    "shuangyue",
                                    "shouyi",
                                    "shouyao",
                                    "shanyao",
                                    "shouyin",
                                    "shiyu"
                                ],
                                rh: [
                                    "ranhou",
                                    "ruhe",
                                    "renhou"
                                ],
                                yw: [
                                    "yinwei",
                                    "yiwu",
                                    "yiwang",
                                    "yiwai",
                                    "yanwu",
                                    "yingwu"
                                ],
                                bg: [
                                    "buguo",
                                    "baogao",
                                    "biaoge",
                                    "beiguan",
                                    "biangeng",
                                    "baoguang",
                                    "binggan",
                                    "binggun",
                                    "buguan"
                                ],
                                fc: [
                                    "feichang",
                                    "fachou",
                                    "fanchuan",
                                    "fanchou",
                                    "fancheng",
                                    "fucha"
                                ],
                                dg: [
                                    "dagai",
                                    "dage",
                                    "duogao",
                                    "duoguan",
                                    "daoguan",
                                    "daogou"
                                ],
                                yd: [
                                    "yiding",
                                    "yundong",
                                    "yaodian",
                                    "yuandan",
                                    "yindao",
                                    "yuedu",
                                    "yidong",
                                    "yongdu",
                                    "yidian",
                                    "yunduan",
                                    "yidun"
                                ],
                                dr: [
                                    "dangran",
                                    "dongren"
                                ],
                                wsw: [
                                    "wusuowei"
                                ],
                                zmb: [
                                    "zenmeban"
                                ],
                                wsm: [
                                    "weishenme"
                                ],
                                xg: [
                                    "xiaoguo",
                                    "xianggang",
                                    "xuangua",
                                    "xiugai",
                                    "xiguan",
                                    "xianggu",
                                    "xigua",
                                    "xuegao",
                                    "xiagu",
                                    "xiaogou"
                                ],
                                hj: [
                                    "huanjing",
                                    "hanjia",
                                    "huojiang",
                                    "hejie",
                                    "huajiao",
                                    "huanjie",
                                    "huijia"
                                ],
                                dl: [
                                    "daoli",
                                    "denglu",
                                    "duanlian",
                                    "dalian",
                                    "dailing",
                                    "dili",
                                    "daliang",
                                    "dongle",
                                    "daole",
                                    "dianliang",
                                    "dalei"
                                ],
                                kz: [
                                    "kongzhi",
                                    "kouzhao",
                                    "kuaizi",
                                    "kezhi",
                                    "kaizhi",
                                    "kuaizou",
                                    "kanzhan"
                                ],
                                wc: [
                                    "wancheng",
                                    "wucan",
                                    "wancan"
                                ],
                                aq: [
                                    "aiqing",
                                    "anquan",
                                    "anqing"
                                ],
                                rm: [
                                    "renmin"
                                ],
                                fl: [
                                    "falv",
                                    "fenglu",
                                    "fengli",
                                    "faleng",
                                    "fuli"
                                ],
                                pl: [
                                    "piaoliang",
                                    "pinglun",
                                    "peili"
                                ],
                                hc: [
                                    "haochi",
                                    "huoche",
                                    "haochu",
                                    "hecheng",
                                    "huacai",
                                    "hongcha",
                                    "huancheng",
                                    "hanchao"
                                ],
                                hk: [
                                    "haokan",
                                    "haikou",
                                    "henkuai",
                                    "hekuang"
                                ],
                                sf: [
                                    "shufu",
                                    "shuofu",
                                    "shenfen",
                                    "shufa",
                                    "shifen",
                                    "suanfa",
                                    "sanfu",
                                    "shunfeng"
                                ],
                                rz: [
                                    "renzhen",
                                    "ruzhi",
                                    "renzui",
                                    "rongzi",
                                    "ruizhi",
                                    "ruanzuo"
                                ],
                                fb: [
                                    "fangbian",
                                    "fenbie",
                                    "fuben",
                                    "fabu"
                                ],
                                kn: [
                                    "kunnan"
                                ],
                                wx: [
                                    "weixian",
                                    "wenxin",
                                    "wuxiu",
                                    "wuxian",
                                    "weixin",
                                    "weixiu"
                                ],
                                pt: [
                                    "putong",
                                    "pintu",
                                    "peitong",
                                    "pingtan",
                                    "putao"
                                ],
                                cm: [
                                    "congming",
                                    "cunmin",
                                    "caomei"
                                ],
                                ka: [
                                    "keai",
                                    "kunao"
                                ],
                                wr: [
                                    "wenrou",
                                    "wairen",
                                    "weiren",
                                    "weiruan"
                                ],
                                rd: [
                                    "ruodian",
                                    "roudao",
                                    "redian"
                                ],
                                mf: [
                                    "mafan",
                                    "mianfei",
                                    "mifan"
                                ],
                                qg: [
                                    "qiguai",
                                    "quegai"
                                ],
                                hs: [
                                    "heshi",
                                    "hushi",
                                    "henshao",
                                    "heshang",
                                    "haoshuang",
                                    "huasuan",
                                    "haoshuai",
                                    "hongshu",
                                    "huasheng",
                                    "hushui",
                                    "heshui",
                                    "heise",
                                    "hongse",
                                    "huangse",
                                    "huise"
                                ],
                                bsf: [
                                    "bushufu"
                                ],
                                bxg: [
                                    "buxiguan"
                                ],
                                lzz: [
                                    "luanzaozao"
                                ],
                                yx: [
                                    "yixie",
                                    "yingxiang",
                                    "youxiu",
                                    "youxi",
                                    "youxian",
                                    "yanxia",
                                    "yixiang",
                                    "yexu",
                                    "yinxiang",
                                    "yuxi",
                                    "yingxiong",
                                    "yuanxiao",
                                    "youxiang",
                                    "yuanxing"
                                ],
                                bd: [
                                    "buduo",
                                    "budui",
                                    "biaodi",
                                    "biandao",
                                    "baidu",
                                    "bendi",
                                    "buding",
                                    "bingdu"
                                ],
                                cbd: [
                                    "chabuduo"
                                ],
                                tb: [
                                    "tebie",
                                    "tuibu",
                                    "tuoba",
                                    "tubu",
                                    "tanbai",
                                    "taobao",
                                    "tongbu"
                                ],
                                wq: [
                                    "wanquan",
                                    "weiqu",
                                    "wangqiu",
                                    "wanqiang",
                                    "wenquan",
                                    "woqu"
                                ],
                                jb: [
                                    "jinbu",
                                    "jiaban",
                                    "jubei",
                                    "jubao",
                                    "jianbian",
                                    "jinbi",
                                    "jiebing",
                                    "jianbao"
                                ],
                                hf: [
                                    "huifu",
                                    "hefei"
                                ],
                                cx: [
                                    "chuxian",
                                    "chengxu",
                                    "chuxing",
                                    "chuxi",
                                    "chengxiao",
                                    "chuxu",
                                    "cixiang",
                                    "cuxin",
                                    "cuxiao",
                                    "caixia",
                                    "chaoxi",
                                    "chuanxi",
                                    "chongxin"
                                ],
                                xs: [
                                    "xiaoshi",
                                    "xinshang",
                                    "xishu",
                                    "xiangshou",
                                    "xingshi",
                                    "xinsi",
                                    "xisu",
                                    "xiaosa",
                                    "xushi",
                                    "xueshan",
                                    "xiashu",
                                    "xinshui",
                                    "xiangsi"
                                ],
                                wlo: [
                                    "wangluo"
                                ],
                                rj: [
                                    "ruanjian",
                                    "rujin"
                                ],
                                xt: [
                                    "xitong",
                                    "xiangtong",
                                    "xintu",
                                    "xuetian",
                                    "xuetang",
                                    "xintiao"
                                ],
                                sp: [
                                    "shipin",
                                    "shipei",
                                    "shuiping",
                                    "shipo",
                                    "shenpan",
                                    "shuaping",
                                    "shupian",
                                    "shangpin",
                                    "shenpi"
                                ],
                                tp: [
                                    "tupian",
                                    "tanpan",
                                    "tupo",
                                    "tuipiao",
                                    "tipo"
                                ],
                                ll: [
                                    "liulan",
                                    "liaoliao",
                                    "lingluan",
                                    "laolian",
                                    "liuliang"
                                ],
                                wf: [
                                    "wufan",
                                    "wanfan"
                                ],
                                sg: [
                                    "shuiguo",
                                    "shigu",
                                    "sigua",
                                    "shuguang"
                                ],
                                da: [
                                    "dangao"
                                ],
                                bql: [
                                    "bingqilin"
                                ],
                                kf: [
                                    "kafei",
                                    "kaifan",
                                    "kaifa",
                                    "kefu",
                                    "koufen",
                                    "kangfu"
                                ],
                                kqs: [
                                    "kuangquanshui"
                                ],
                                jr: [
                                    "jirou",
                                    "jiaren",
                                    "junren",
                                    "jinrong",
                                    "jieri",
                                    "jianren",
                                    "jieran"
                                ],
                                zr: [
                                    "zhurou",
                                    "ziran",
                                    "zeren",
                                    "zhengren"
                                ],
                                yr: [
                                    "yangrou",
                                    "yurou",
                                    "yarou"
                                ],
                                hx: [
                                    "haixian",
                                    "haixing",
                                    "haixiu",
                                    "huaxue",
                                    "hanxuan",
                                    "hexin",
                                    "haoxie",
                                    "haixia",
                                    "huxi"
                                ],
                                hg: [
                                    "huoguo",
                                    "houguo",
                                    "huanggua",
                                    "hege"
                                ],
                                kr: [
                                    "kaorou",
                                    "keren",
                                    "kunrao"
                                ],
                                mlt: [
                                    "malatang"
                                ],
                                fk: [
                                    "fukuan",
                                    "fenkai",
                                    "fakuan",
                                    "fankun"
                                ],
                                dz: [
                                    "dazhe",
                                    "duzi",
                                    "duzhe",
                                    "dazhen",
                                    "dianzan",
                                    "dianzi",
                                    "duanzhuang",
                                    "dianzhu",
                                    "daozhang",
                                    "duizhang"
                                ],
                                tk: [
                                    "tuikuan",
                                    "tongkuai",
                                    "tiaokuan"
                                ],
                                wl: [
                                    "wuliu",
                                    "wuliao",
                                    "wuli",
                                    "wanle",
                                    "wenle",
                                    "wulun"
                                ],
                                ly: [
                                    "lvyou",
                                    "luyong",
                                    "luying",
                                    "luyin",
                                    "lingyu",
                                    "liyi",
                                    "liuyi",
                                    "lanya",
                                    "longyan"
                                ],
                                dt: [
                                    "ditie",
                                    "dating",
                                    "dengtai",
                                    "deti",
                                    "diaotou"
                                ],
                                fj: [
                                    "feiji",
                                    "fojiao",
                                    "fujian"
                                ],
                                czc: [
                                    "chuzuche"
                                ],
                                zxc: [
                                    "zixingche"
                                ],
                                hld: [
                                    "honglvdeng"
                                ],
                                tq: [
                                    "tianqi",
                                    "tiqian",
                                    "taiqiu",
                                    "tianqiao"
                                ],
                                gf: [
                                    "guafeng",
                                    "guifan",
                                    "gongfu"
                                ],
                                wd: [
                                    "wendu",
                                    "wudao",
                                    "wandian",
                                    "wendang"
                                ],
                                hy: [
                                    "haiyang",
                                    "huayuan",
                                    "huiyi",
                                    "huanying",
                                    "huaiyi",
                                    "heying",
                                    "hanyu",
                                    "huangyan",
                                    "haoyou",
                                    "huiyuan",
                                    "haiyu",
                                    "huayan",
                                    "hangye"
                                ],
                                jk: [
                                    "jiankang",
                                    "juankuan",
                                    "jingkong",
                                    "jikuai",
                                    "jikou"
                                ],
                                yp: [
                                    "yaopin",
                                    "yingpan",
                                    "yupan",
                                    "yangpin",
                                    "yaopian"
                                ],
                                tt: [
                                    "touteng",
                                    "tingting",
                                    "taotai",
                                    "tante",
                                    "titie",
                                    "toutiao",
                                    "toutong",
                                    "toutou"
                                ],
                                pf: [
                                    "pifu",
                                    "peifu",
                                    "pingfan",
                                    "pifa"
                                ],
                                ed: [
                                    "erduo"
                                ],
                                jf: [
                                    "jianfei",
                                    "jifen",
                                    "jufeng",
                                    "jiafang"
                                ],
                                kh: [
                                    "kehu",
                                    "kunhuo",
                                    "konghuang",
                                    "kaohe"
                                ],
                                pz: [
                                    "pizhun",
                                    "panzi",
                                    "paozao",
                                    "paizhao"
                                ],
                                cc: [
                                    "changchang",
                                    "chongchong",
                                    "changchun",
                                    "chuchai",
                                    "chaocai",
                                    "chaoche",
                                    "chaochu"
                                ],
                                ww: [
                                    "wangwang",
                                    "wenwen",
                                    "wenwu",
                                    "wuwei",
                                    "wanwan"
                                ],
                                nb: [
                                    "niubi",
                                    "nvbing",
                                    "nabian",
                                    "neibu",
                                    "nanbu",
                                    "ningbo"
                                ],
                                bt: [
                                    "butong",
                                    "biaoti",
                                    "butie",
                                    "bantian",
                                    "baotang"
                                ],
                                wy: [
                                    "wangye",
                                    "weiyi",
                                    "weiyu",
                                    "wangyou",
                                    "wanyao",
                                    "wangyin",
                                    "wuyun",
                                    "weiyue"
                                ],
                                wz: [
                                    "weizhi",
                                    "wenzi",
                                    "wenzhong",
                                    "wenzhu",
                                    "wangzhan",
                                    "wuzuo",
                                    "weizhang"
                                ],
                                za: [
                                    "zaoan",
                                    "zhangai"
                                ],
                                htj: [
                                    "huitoujian"
                                ],
                                hjbj: [
                                    "haojiubujian"
                                ],
                                drl: [
                                    "daraole"
                                ],
                                bq: [
                                    "baoqian",
                                    "biaoqing"
                                ],
                                gxfc: [
                                    "gongxifacai"
                                ],
                                jrkl: [
                                    "jierikuaile"
                                ],
                                hygl: [
                                    "huanyingguanglin"
                                ],
                                lr: [
                                    "lirang",
                                    "lirun"
                                ],
                                dzh: [
                                    "dazhaohu"
                                ],
                                mc: [
                                    "meicuo"
                                ],
                                bky: [
                                    "bukeyi"
                                ],
                                xbx: [
                                    "xingbuxing"
                                ],
                                hbh: [
                                    "haobuhao"
                                ],
                                yby: [
                                    "yaobuyao",
                                    "yongbuyong"
                                ],
                                lbl: [
                                    "laibulai"
                                ],
                                qbq: [
                                    "qubuqu"
                                ],
                                zbzd: [
                                    "zhibuzhidao"
                                ],
                                ybb: [
                                    "yibanban"
                                ],
                                ch: [
                                    "couhe",
                                    "cihou",
                                    "caihua",
                                    "cihui",
                                    "chouhen",
                                    "conghui",
                                    "chuhuo",
                                    "caihong",
                                    "canhui"
                                ],
                                byl: [
                                    "buyongle"
                                ],
                                msd: [
                                    "meishide",
                                    "mashangdao"
                                ],
                                bp: [
                                    "biepa",
                                    "bupiao",
                                    "bianping"
                                ],
                                fxb: [
                                    "fangxinba"
                                ],
                                byd: [
                                    "buyiding"
                                ],
                                sbn: [
                                    "suibianni"
                                ],
                                tnd: [
                                    "tingnide"
                                ],
                                nsdd: [
                                    "nishuodedui"
                                ],
                                ydl: [
                                    "youdaoli"
                                ],
                                sdd: [
                                    "shuodedui"
                                ],
                                jzmb: [
                                    "jiuzhemeban"
                                ],
                                slb: [
                                    "suanleba"
                                ],
                                wswl: [
                                    "wusuoweila"
                                ],
                                yn: [
                                    "youni"
                                ],
                                zjr: [
                                    "zijiren"
                                ],
                                msr: [
                                    "moshengren"
                                ],
                                qr: [
                                    "qinren",
                                    "queren",
                                    "qingrou"
                                ],
                                npy: [
                                    "nanpengyou",
                                    "nvpengyou"
                                ],
                                lg: [
                                    "laogong",
                                    "leguan",
                                    "lvguan",
                                    "liugou",
                                    "linggan",
                                    "liugan"
                                ],
                                lp: [
                                    "laopo",
                                    "lipei"
                                ],
                                gk: [
                                    "guke"
                                ],
                                td: [
                                    "tangdi",
                                    "taideng",
                                    "tedian",
                                    "tongda",
                                    "tudou",
                                    "tuandui"
                                ],
                                gn: [
                                    "guinv",
                                    "guannian",
                                    "gongneng"
                                ],
                                ex: [
                                    "erxi",
                                    "exin"
                                ],
                                pp: [
                                    "popo",
                                    "paopao"
                                ],
                                ym: [
                                    "yuemu",
                                    "yumen",
                                    "youmo",
                                    "yangmao",
                                    "yuanman",
                                    "yuema"
                                ],
                                yk: [
                                    "yukuai"
                                ],
                                qs: [
                                    "qingsong",
                                    "qianshou",
                                    "qianshui",
                                    "qushi",
                                    "qushe",
                                    "qingshuai",
                                    "qingshi",
                                    "qiangshi",
                                    "qiangsheng",
                                    "qingshuang",
                                    "qise",
                                    "qianshu",
                                    "qingse",
                                    "queshi"
                                ],
                                jw: [
                                    "juewang",
                                    "jinwan",
                                    "jiaowang",
                                    "jiwan",
                                    "jiwei"
                                ],
                                bk: [
                                    "bengkui"
                                ],
                                ba: [
                                    "buan",
                                    "beiai"
                                ],
                                slo: [
                                    "shiluo"
                                ],
                                cb: [
                                    "chongbai",
                                    "congbu",
                                    "chengben",
                                    "chengba"
                                ],
                                ge: [
                                    "ganen"
                                ],
                                xk: [
                                    "xiukui",
                                    "xiake",
                                    "xinku"
                                ],
                                ga: [
                                    "ganga"
                                ],
                                ja: [
                                    "jiaoao",
                                    "jinan"
                                ],
                                ha: [
                                    "heai",
                                    "haian"
                                ],
                                km: [
                                    "kunming",
                                    "kemu"
                                ],
                                heb: [
                                    "haerbin"
                                ],
                                nc: [
                                    "nanchang",
                                    "neicun",
                                    "naicha"
                                ],
                                lz: [
                                    "lanzhou",
                                    "lizhi"
                                ],
                                am: [
                                    "aomen",
                                    "anmo",
                                    "aoman"
                                ],
                                se: [
                                    "shouer",
                                    "shue"
                                ],
                                ld: [
                                    "lundun",
                                    "loudong",
                                    "landuo",
                                    "lengdan",
                                    "lingdao"
                                ],
                                ml: [
                                    "malu",
                                    "meili",
                                    "moliao"
                                ],
                                csc: [
                                    "caishichang"
                                ],
                                yey: [
                                    "youeryuan"
                                ],
                                hcz: [
                                    "huochezhan"
                                ],
                                qcz: [
                                    "qichezhan"
                                ],
                                dtz: [
                                    "ditiezhan"
                                ],
                                jyz: [
                                    "jiayouzhan"
                                ],
                                fwq: [
                                    "fuwuqu",
                                    "fuwuqi"
                                ],
                                bwg: [
                                    "bowuguan"
                                ],
                                msg: [
                                    "meishuguan"
                                ],
                                tyg: [
                                    "tiyuguan"
                                ],
                                yyg: [
                                    "youyongguan"
                                ],
                                jsf: [
                                    "jianshenfang"
                                ],
                                kft: [
                                    "kafeiting"
                                ],
                                ct: [
                                    "canting",
                                    "chongtu",
                                    "chuantong",
                                    "changtong",
                                    "chitang",
                                    "citui",
                                    "changtiao"
                                ],
                                mq: [
                                    "muqian",
                                    "mingqi"
                                ],
                                mw: [
                                    "mingwan"
                                ],
                                bw: [
                                    "bangwan",
                                    "baiwan"
                                ],
                                xqy: [
                                    "xingqiyi"
                                ],
                                xqs: [
                                    "xingqisan",
                                    "xingqisi"
                                ],
                                xqw: [
                                    "xingqiwu"
                                ],
                                xql: [
                                    "xingqiliu"
                                ],
                                xqt: [
                                    "xingqitian"
                                ],
                                cj: [
                                    "chunjie",
                                    "chuju",
                                    "chaojia",
                                    "chujing",
                                    "chenjiu",
                                    "chuji",
                                    "chengjiu",
                                    "chengjiao",
                                    "chajia",
                                    "chongji"
                                ],
                                yxj: [
                                    "yuanxiaojie"
                                ],
                                qmj: [
                                    "qingmingjie"
                                ],
                                dwj: [
                                    "duanwujie"
                                ],
                                zqj: [
                                    "zhongqiujie"
                                ],
                                gqj: [
                                    "guoqingjie"
                                ],
                                pk: [
                                    "pianke"
                                ],
                                yhe: [
                                    "yihuier"
                                ],
                                as: [
                                    "anshi",
                                    "aishang"
                                ],
                                oe: [
                                    "ouer"
                                ],
                                zmhs: [
                                    "zenmehuishi"
                                ],
                                ze: [
                                    "zheer",
                                    "zonge"
                                ],
                                dsq: [
                                    "duoshaoqian"
                                ],
                                yc: [
                                    "yuanchu",
                                    "yingchou",
                                    "yuce",
                                    "yichan",
                                    "yicheng",
                                    "yinci",
                                    "yici"
                                ],
                                wb: [
                                    "waibu",
                                    "weibi",
                                    "wubi",
                                    "weibo"
                                ],
                                xdm: [
                                    "xieduimian"
                                ],
                                qc: [
                                    "qingchu",
                                    "qichuang",
                                    "qingche",
                                    "qici",
                                    "qingcai",
                                    "qincai",
                                    "qingcang",
                                    "qicheng",
                                    "qiche"
                                ],
                                fr: [
                                    "fouren"
                                ],
                                fa: [
                                    "fangan"
                                ],
                                loj: [
                                    "luoji"
                                ],
                                yz: [
                                    "yuanze",
                                    "yuanzhu",
                                    "youzhi",
                                    "youzi",
                                    "yizhan",
                                    "yingzuo",
                                    "youzhuan",
                                    "yanzheng"
                                ],
                                md: [
                                    "mudi",
                                    "maidan",
                                    "maodun"
                                ],
                                mkf: [
                                    "maikefeng"
                                ],
                                sxt: [
                                    "shexiangtou"
                                ],
                                lyq: [
                                    "luyouqi"
                                ],
                                cdb: [
                                    "chongdianbao"
                                ],
                                sjx: [
                                    "shujuxian",
                                    "sanjiaoxing"
                                ],
                                jp: [
                                    "jianpan",
                                    "jianpu",
                                    "jipiao",
                                    "jianpiao"
                                ],
                                xsq: [
                                    "xianshiqi"
                                ],
                                dyj: [
                                    "dayinji"
                                ],
                                dfb: [
                                    "dianfanbao"
                                ],
                                ssh: [
                                    "shaoshuihu"
                                ],
                                rsq: [
                                    "reshuiqi"
                                ],
                                xcq: [
                                    "xichenqi"
                                ],
                                sdjqr: [
                                    "saodijiqiren"
                                ],
                                cfj: [
                                    "chuifengji"
                                ],
                                txd: [
                                    "tixudao"
                                ],
                                jsq: [
                                    "jiashiqi"
                                ],
                                kqjhq: [
                                    "kongqijinghuaqi"
                                ],
                                nz: [
                                    "naozhong"
                                ],
                                xl: [
                                    "xianglian",
                                    "xunlian",
                                    "xilian",
                                    "xinglai",
                                    "xinlai",
                                    "xiaolv",
                                    "xueli",
                                    "xinli",
                                    "xianliang",
                                    "xingli",
                                    "xianglei",
                                    "xiliu",
                                    "xinla"
                                ],
                                eh: [
                                    "erhuan"
                                ],
                                xlx: [
                                    "xinglixiang"
                                ],
                                tyj: [
                                    "taiyangjing"
                                ],
                                pdg: [
                                    "pingdiguo"
                                ],
                                gyg: [
                                    "gaoyaguo"
                                ],
                                mj: [
                                    "maojin",
                                    "mianji",
                                    "minjie",
                                    "manjian",
                                    "maijia"
                                ],
                                xfs: [
                                    "xifashui"
                                ],
                                myl: [
                                    "muyulu"
                                ],
                                xyf: [
                                    "xiyifen"
                                ],
                                xjj: [
                                    "xijiejing"
                                ],
                                ljt: [
                                    "lajitong"
                                ],
                                mr: [
                                    "maorong",
                                    "mingren",
                                    "miren",
                                    "minrui"
                                ],
                                lq: [
                                    "lanqiu",
                                    "luqu",
                                    "lengqing",
                                    "lingqian"
                                ],
                                pq: [
                                    "paiqiu",
                                    "poqie",
                                    "penquan",
                                    "paiqi"
                                ],
                                ppq: [
                                    "pingpangqiu"
                                ],
                                ymq: [
                                    "yumaoqiu"
                                ],
                                ddc: [
                                    "diandongche"
                                ],
                                mtc: [
                                    "motuoche"
                                ],
                                kc: [
                                    "kache",
                                    "kaiche",
                                    "kanchuan",
                                    "kecheng",
                                    "kuochuo",
                                    "kucun"
                                ],
                                dc: [
                                    "dongche",
                                    "diancai",
                                    "daoche",
                                    "diancan",
                                    "dacu",
                                    "duche"
                                ],
                                lc: [
                                    "lunchuan",
                                    "lvcha",
                                    "licheng",
                                    "lichun",
                                    "lvci"
                                ],
                                zk: [
                                    "zuoke",
                                    "zhuangkuang",
                                    "zhekou"
                                ],
                                fy: [
                                    "fuyue",
                                    "feiyong",
                                    "fayuan",
                                    "fayu",
                                    "fangyan",
                                    "fuyan",
                                    "fuyao"
                                ],
                                dh: [
                                    "duihua",
                                    "dinghun",
                                    "duanhuo",
                                    "daohang",
                                    "dahai",
                                    "dahan",
                                    "dianhua"
                                ],
                                qj: [
                                    "quanjie",
                                    "qingjiao",
                                    "quanjia",
                                    "quanju",
                                    "qianjing",
                                    "quanji",
                                    "qieji",
                                    "qianjin"
                                ],
                                tc: [
                                    "tuici",
                                    "tingche",
                                    "tuichu",
                                    "tancheng",
                                    "techang",
                                    "ticao",
                                    "tongchang",
                                    "tuichao",
                                    "tiaocao"
                                ],
                                px: [
                                    "peixun",
                                    "pangxie",
                                    "pinxue"
                                ],
                                kg: [
                                    "kaigong",
                                    "kugua"
                                ],
                                xmt: [
                                    "xiamiantiao"
                                ],
                                bjz: [
                                    "baojiaozi"
                                ],
                                th: [
                                    "tuihuo",
                                    "tihui",
                                    "tonghua",
                                    "tuihuan",
                                    "tuihui",
                                    "taohua"
                                ],
                                az: [
                                    "anzhuang",
                                    "angzang",
                                    "anzhuo"
                                ],
                                cy: [
                                    "chiyao",
                                    "chuyan",
                                    "chuangyi",
                                    "changyi",
                                    "chongyang",
                                    "caoyuan",
                                    "chuyuan",
                                    "caiyuan"
                                ],
                                zq: [
                                    "zuoqi",
                                    "zhanqi",
                                    "zhiqian",
                                    "zhengqu",
                                    "zhuiqiu",
                                    "zengqiang",
                                    "zhengquan",
                                    "zhaiquan",
                                    "zhongqiu",
                                    "zhouquan",
                                    "zhunque",
                                    "zhengque",
                                    "zhengqian",
                                    "zhuanqian",
                                    "zhangqi",
                                    "zaoqi",
                                    "zuqiu"
                                ],
                                qx: [
                                    "qixing",
                                    "qingxi",
                                    "quxiao",
                                    "quexian",
                                    "qixi",
                                    "qingxiu",
                                    "qingxin",
                                    "quanxian",
                                    "quexin"
                                ],
                                ps: [
                                    "pashan",
                                    "pusu",
                                    "paisong",
                                    "posun"
                                ],
                                kb: [
                                    "kanbao",
                                    "koubei",
                                    "keben",
                                    "kuiben"
                                ],
                                wyx: [
                                    "wanyouxi"
                                ],
                                kds: [
                                    "kandianshi"
                                ],
                                lw: [
                                    "liuwan",
                                    "lingwu",
                                    "laiwang",
                                    "lvewei",
                                    "liwu",
                                    "lawei",
                                    "lingwai"
                                ],
                                tf: [
                                    "tongfeng",
                                    "tianfu",
                                    "taifeng"
                                ],
                                fxx: [
                                    "faxiaoxi"
                                ],
                                ddh: [
                                    "dadianhua"
                                ],
                                nt: [
                                    "niantie",
                                    "nanti",
                                    "niantou"
                                ],
                                zmm: [
                                    "zhongmingming"
                                ],
                                xj: [
                                    "xinjian",
                                    "xijie",
                                    "xiju",
                                    "xianjin",
                                    "xiangjiao",
                                    "xianjia",
                                    "xinji"
                                ],
                                rc: [
                                    "rencuo",
                                    "renci",
                                    "rechen",
                                    "richu",
                                    "richeng",
                                    "richang"
                                ],
                                ah: [
                                    "aihu",
                                    "aihao"
                                ],
                                kw: [
                                    "kewang"
                                ],
                                qp: [
                                    "qipan",
                                    "qipai"
                                ],
                                pw: [
                                    "panwang",
                                    "pinwei",
                                    "penwu"
                                ],
                                gh: [
                                    "guihua",
                                    "gehe",
                                    "ganghao"
                                ],
                                hw: [
                                    "huiwei",
                                    "huawei",
                                    "huowu",
                                    "haiwan"
                                ],
                                rn: [
                                    "rennai"
                                ],
                                rs: [
                                    "renshou",
                                    "resou",
                                    "rishi",
                                    "reshen"
                                ],
                                fgz: [
                                    "fanggezi"
                                ],
                                shb: [
                                    "songhongbao"
                                ],
                                rq: [
                                    "renqing"
                                ],
                                ry: [
                                    "renyuan",
                                    "rongyu",
                                    "riyu",
                                    "rongyi"
                                ],
                                qh: [
                                    "quanhe",
                                    "quanheng",
                                    "qiahao",
                                    "qianghua",
                                    "quehuo"
                                ],
                                fh: [
                                    "fuhe",
                                    "fahuo",
                                    "fanghan",
                                    "fenhong"
                                ],
                                lh: [
                                    "lihun",
                                    "linghuo",
                                    "lihe",
                                    "lihui",
                                    "laohu",
                                    "lanhua"
                                ],
                                pm: [
                                    "paiming",
                                    "paomao"
                                ],
                                dw: [
                                    "diwei",
                                    "duanwang",
                                    "dingwei",
                                    "dawu"
                                ],
                                cw: [
                                    "cuowu",
                                    "chenwen",
                                    "ciwai"
                                ],
                                lt: [
                                    "lantu",
                                    "liaotian",
                                    "lantian"
                                ],
                                fg: [
                                    "fagui",
                                    "fugu",
                                    "fage"
                                ],
                                qy: [
                                    "quanyi",
                                    "qieyi",
                                    "qingying",
                                    "qiangying",
                                    "qiya",
                                    "quanyu"
                                ],
                                zn: [
                                    "zhineng"
                                ],
                                xn: [
                                    "xingneng",
                                    "xuannao",
                                    "xiangni",
                                    "xiaoniao"
                                ],
                                fw: [
                                    "fangwei",
                                    "fenwei",
                                    "fanwei",
                                    "fuwu"
                                ],
                                rl: [
                                    "rongliang"
                                ],
                                cn: [
                                    "caineng"
                                ],
                                qf: [
                                    "qifen",
                                    "qinfen"
                                ],
                                ft: [
                                    "fating",
                                    "futian",
                                    "futong"
                                ],
                                jcj: [
                                    "jingchaju"
                                ],
                                jcy: [
                                    "jianchayuan"
                                ],
                                pj: [
                                    "panjue",
                                    "pojiu",
                                    "pingjing"
                                ],
                                gp: [
                                    "gupiao",
                                    "guipi"
                                ],
                                ck: [
                                    "cunkuan",
                                    "changkuai"
                                ],
                                jxj: [
                                    "jiangxuejin"
                                ],
                                jsj: [
                                    "jisuanji",
                                    "jiaoshijie"
                                ],
                                ronzn: [
                                    "rengongzhineng"
                                ],
                                jqr: [
                                    "jiqiren"
                                ],
                                xp: [
                                    "xinpian",
                                    "xiaopiao"
                                ],
                                ey: [
                                    "eyu"
                                ],
                                pth: [
                                    "putonghua"
                                ],
                                smy: [
                                    "shumianyu"
                                ],
                                qrj: [
                                    "qingrenjie"
                                ],
                                mqj: [
                                    "muqinjie"
                                ],
                                fqj: [
                                    "fuqinjie"
                                ],
                                ldj: [
                                    "laodongjie"
                                ],
                                etj: [
                                    "ertongjie"
                                ],
                                tqd: [
                                    "taiquandao"
                                ],
                                qzs: [
                                    "qingzhensi"
                                ],
                                aj: [
                                    "anjian"
                                ],
                                dm: [
                                    "daiman",
                                    "daima",
                                    "duomeng"
                                ],
                                mh: [
                                    "mahu",
                                    "meihua"
                                ],
                                bbgs: [
                                    "bubugaosheng"
                                ],
                                zzrs: [
                                    "zhengzhengrishang"
                                ],
                                sjry: [
                                    "shanjierenyi"
                                ],
                                tqdl: [
                                    "tongqingdali"
                                ],
                                kp: [
                                    "kaopu"
                                ],
                                an: [
                                    "anning"
                                ],
                                ad: [
                                    "anding"
                                ],
                                aw: [
                                    "anwen"
                                ],
                                pa: [
                                    "pingan"
                                ],
                                loh: [
                                    "luohou"
                                ],
                                rx: [
                                    "rexin",
                                    "raoxing"
                                ],
                                ra: [
                                    "renao"
                                ],
                                ye: [
                                    "yange",
                                    "yinei",
                                    "yiner"
                                ],
                                dds: [
                                    "daduoshu"
                                ],
                                dp: [
                                    "dapi"
                                ],
                                tn: [
                                    "tianna",
                                    "tineng"
                                ],
                                ta: [
                                    "tiana"
                                ],
                                wdt: [
                                    "wodetian"
                                ],
                                lha: [
                                    "lihaia"
                                ],
                                tbl: [
                                    "taibangle"
                                ],
                                kya: [
                                    "keyia"
                                ],
                                mwta: [
                                    "meiwentia"
                                ],
                                ttd: [
                                    "tuotuode"
                                ],
                                zdjd: [
                                    "zhendejiade"
                                ],
                                bhb: [
                                    "buhuiba"
                                ],
                                bsb: [
                                    "bushiba"
                                ],
                                zdm: [
                                    "zhendema"
                                ],
                                qdm: [
                                    "quedingma"
                                ],
                                nqd: [
                                    "niqueding"
                                ],
                                prdb: [
                                    "pianrendeba"
                                ],
                                bzyb: [
                                    "buzhiyuba"
                                ],
                                sa: [
                                    "shia"
                                ],
                                do: [
                                    "duio"
                                ],
                                ylrc: [
                                    "yuanlairuci"
                                ],
                                dyx: [
                                    "dengyixia",
                                    "dengyixiao"
                                ],
                                msh: [
                                    "mashanghao"
                                ],
                                dhe: [
                                    "daihuier",
                                    "denghuier"
                                ],
                                htl: [
                                    "huitouliao"
                                ],
                                ykl: [
                                    "youkongliao"
                                ],
                                xczs: [
                                    "xiacizaishuo"
                                ],
                                zdl: [
                                    "zhidaole"
                                ],
                                mbl: [
                                    "mingbaile"
                                ],
                                sdsd: [
                                    "shoudaoshoudao"
                                ],
                                bdx: [
                                    "biedanxin"
                                ],
                                bfq: [
                                    "biefangqi"
                                ],
                                xxzj: [
                                    "xiangxinziji"
                                ],
                                nkyd: [
                                    "nikeyide"
                                ],
                                mwtd: [
                                    "meiwentide"
                                ],
                                mml: [
                                    "manmanlai"
                                ],
                                bhys: [
                                    "buhaoyisi"
                                ],
                                mfn: [
                                    "mafanni"
                                ],
                                fxl: [
                                    "feixinle"
                                ],
                                wxx: [
                                    "woxiangxiang"
                                ],
                                rwxx: [
                                    "rangwoxiangxiang"
                                ],
                                dwyx: [
                                    "dengwoyixia"
                                ],
                                rwkk: [
                                    "rangwokankan"
                                ],
                                wkx: [
                                    "wokanxia"
                                ],
                                wkk: [
                                    "wokankan"
                                ],
                                wklyx: [
                                    "wokaolvyixia"
                                ],
                                tgl: [
                                    "taiguile"
                                ],
                                gsl: [
                                    "guisile"
                                ],
                                pyd: [
                                    "pianyidian"
                                ],
                                dgz: [
                                    "dagezhe"
                                ],
                                yhd: [
                                    "youhuidian"
                                ],
                                tglb: [
                                    "taiguileba"
                                ],
                                wbzd: [
                                    "wobuzhidao"
                                ],
                                bqc: [
                                    "buqingchu"
                                ],
                                blj: [
                                    "buliaojie"
                                ],
                                mtsg: [
                                    "meitingshuoguo"
                                ],
                                dycts: [
                                    "diyicitingshuo"
                                ],
                                szdn: [
                                    "shuizhidaone"
                                ],
                                xhn: [
                                    "xihuanni"
                                ],
                                hxn: [
                                    "haoxiangni"
                                ],
                                mmd: [
                                    "memeda"
                                ],
                                qyg: [
                                    "qinyige"
                                ],
                                mmt: [
                                    "momotou"
                                ],
                                zcn: [
                                    "zhichini"
                                ],
                                cfm: [
                                    "chifanmei"
                                ],
                                clm: [
                                    "chilema",
                                    "chilemei"
                                ],
                                gme: [
                                    "ganmane"
                                ],
                                zbz: [
                                    "zaibuzai"
                                ],
                                ykm: [
                                    "youkongma"
                                ],
                                zbq: [
                                    "zoubuqu"
                                ],
                                wdl: [
                                    "wodaole"
                                ],
                                lsd: [
                                    "lushangdu"
                                ],
                                dcl: [
                                    "duchele"
                                ],
                                kdl: [
                                    "kuaidaole"
                                ],
                                msjd: [
                                    "mashangjiudao"
                                ],
                                gxgx: [
                                    "gongxigongxi"
                                ],
                                stjk: [
                                    "shentijiankang"
                                ],
                                wsry: [
                                    "wanshiruyi"
                                ],
                                xxsc: [
                                    "xinxiangshicheng"
                                ],
                                djdl: [
                                    "dajidali"
                                ],
                                ylsf: [
                                    "yilushunfeng"
                                ],
                                hka: [
                                    "haokeai"
                                ],
                                hpl: [
                                    "haopiaoliang"
                                ],
                                zhk: [
                                    "zhenhaokan"
                                ],
                                zpl: [
                                    "zhenpiaoliang"
                                ],
                                hhk: [
                                    "haohaokan"
                                ],
                                sbl: [
                                    "shuaibaole"
                                ],
                                hfcc: [
                                    "huifuchuchang"
                                ],
                                czxt: [
                                    "caozuoxitong"
                                ],
                                pg: [
                                    "pingguo",
                                    "pinggu"
                                ],
                                al: [
                                    "ali"
                                ],
                                llq: [
                                    "liulanqi"
                                ],
                                zfb: [
                                    "zhifubao"
                                ],
                                pdd: [
                                    "pinduoduo"
                                ],
                                pyq: [
                                    "pengyouquan"
                                ],
                                zp: [
                                    "zhaopian",
                                    "zengpin"
                                ],
                                yzm: [
                                    "yanzhengma"
                                ],
                                xgmm: [
                                    "xiugaimima"
                                ],
                                wjmm: [
                                    "wangjimima"
                                ],
                                rb: [
                                    "rebang"
                                ],
                                sjk: [
                                    "shujuku"
                                ],
                                dsj: [
                                    "dashuju"
                                ],
                                yjs: [
                                    "yunjisuan"
                                ],
                                rlsb: [
                                    "renlianshibie"
                                ],
                                fkm: [
                                    "fukuanma"
                                ],
                                skm: [
                                    "shoukuanma"
                                ],
                                dcf: [
                                    "danchaofan"
                                ],
                                gjf: [
                                    "gaijiaofan"
                                ],
                                hsr: [
                                    "hongshaorou"
                                ],
                                tcpg: [
                                    "tangcupaigu"
                                ],
                                gbjd: [
                                    "gongbaojiding"
                                ],
                                yxrs: [
                                    "yuxiangrousi"
                                ],
                                hgr: [
                                    "huiguorou"
                                ],
                                mpdf: [
                                    "mapodoufu"
                                ],
                                szy: [
                                    "shuizhuyu"
                                ],
                                scy: [
                                    "suancaiyu"
                                ],
                                bqj: [
                                    "baiqieji"
                                ],
                                pgt: [
                                    "paigutang"
                                ],
                                xhsjdt: [
                                    "xihongshijidantang"
                                ],
                                zct: [
                                    "zicaitang"
                                ],
                                bbz: [
                                    "babaozhou"
                                ],
                                pdsrz: [
                                    "pidanshourouzhou"
                                ],
                                xlh: [
                                    "xilanhua"
                                ],
                                lob: [
                                    "luobo"
                                ],
                                hlob: [
                                    "huluobo"
                                ],
                                mg: [
                                    "mogu",
                                    "mangguo",
                                    "meigui"
                                ],
                                blo: [
                                    "boluo"
                                ],
                                mht: [
                                    "mihoutao"
                                ],
                                bl: [
                                    "banli",
                                    "bulun"
                                ],
                                eo: [
                                    "erou"
                                ],
                                qkl: [
                                    "qiaokeli"
                                ],
                                thl: [
                                    "tanghulu"
                                ],
                                bmh: [
                                    "baomihua"
                                ],
                                cjs: [
                                    "chunjingshui"
                                ],
                                sds: [
                                    "sudashui"
                                ],
                                wlc: [
                                    "wulongcha"
                                ],
                                dbj: [
                                    "doubanjiang"
                                ],
                                hjf: [
                                    "hujiaofen"
                                ],
                                gsc: [
                                    "guangshangchang"
                                ],
                                gwc: [
                                    "gouwuche"
                                ],
                                fp: [
                                    "fapiao",
                                    "fupan"
                                ],
                                yhq: [
                                    "youhuiquan"
                                ],
                                djq: [
                                    "daijinquan"
                                ],
                                yfx: [
                                    "yunfeixian"
                                ],
                                wbz: [
                                    "waibaozhuang"
                                ],
                                cp: [
                                    "cipin",
                                    "chepiao",
                                    "chapiao",
                                    "chepai"
                                ],
                                syy: [
                                    "shouyinyuan"
                                ],
                                czk: [
                                    "chongzhika"
                                ],
                                jfdh: [
                                    "jifenduihuan"
                                ],
                                xyk: [
                                    "xinyongka"
                                ],
                                yhk: [
                                    "yinhangka"
                                ],
                                wyc: [
                                    "wangyueche"
                                ],
                                sfc: [
                                    "shunfengche"
                                ],
                                gjz: [
                                    "gongjiaozhan"
                                ],
                                hzl: [
                                    "hangzhanlou"
                                ],
                                hjt: [
                                    "houjiting"
                                ],
                                djk: [
                                    "dengjikou"
                                ],
                                djp: [
                                    "dengjipai"
                                ],
                                gtp: [
                                    "gaotiepiao"
                                ],
                                ydz: [
                                    "yidengzuo"
                                ],
                                edz: [
                                    "erdengzuo"
                                ],
                                jsz: [
                                    "jiashizheng"
                                ],
                                bmx: [
                                    "banmaxian"
                                ],
                                rxd: [
                                    "renxingdao"
                                ],
                                mdd: [
                                    "mudidi"
                                ],
                                zsd: [
                                    "zhunshidao"
                                ],
                                lzy: [
                                    "leizhenyu"
                                ],
                                mmy: [
                                    "maomaoyu"
                                ],
                                nw: [
                                    "nongwu"
                                ],
                                ljf: [
                                    "longjuanfeng"
                                ],
                                scb: [
                                    "shachenbao"
                                ],
                                lkq: [
                                    "lengkongqi"
                                ],
                                rlo: [
                                    "riluo"
                                ],
                                lbt: [
                                    "liubiti"
                                ],
                                szt: [
                                    "sangziteng"
                                ],
                                hlt: [
                                    "houlongtong"
                                ],
                                dzt: [
                                    "duziteng"
                                ],
                                ldz: [
                                    "laduzi"
                                ],
                                ot: [
                                    "outu"
                                ],
                                xhbl: [
                                    "xiaohuabuliang"
                                ],
                                mwk: [
                                    "meiweikou"
                                ],
                                gr: [
                                    "ganran"
                                ],
                                mp: [
                                    "manpao"
                                ],
                                xcg: [
                                    "xuechanggui"
                                ],
                                xdt: [
                                    "xindiantu"
                                ],
                                fzy: [
                                    "fuzuoyong"
                                ],
                                hhr: [
                                    "hehuoren"
                                ],
                                gys: [
                                    "gongyingshang"
                                ],
                                hzhb: [
                                    "hezuohuoban"
                                ],
                                jzds: [
                                    "jingzhengduishou"
                                ],
                                syq: [
                                    "shiyongqi"
                                ],
                                gjj: [
                                    "gongjijin"
                                ],
                                nzj: [
                                    "nianzhongjiang"
                                ],
                                bwl: [
                                    "beiwanglu"
                                ],
                                xjl: [
                                    "xianjinliu"
                                ],
                                dhhy: [
                                    "dianhuahuiyi"
                                ],
                                sphy: [
                                    "shipinhuiyi"
                                ],
                                los: [
                                    "luoshi"
                                ],
                                np: [
                                    "napa"
                                ],
                                tr: [
                                    "turan"
                                ],
                                hr: [
                                    "huran"
                                ],
                                ybz: [
                                    "yibazhang",
                                    "yibeizi"
                                ],
                                ykq: [
                                    "yikouqi"
                                ],
                                jrbt: [
                                    "jieranbutong"
                                ],
                                dbxt: [
                                    "dabuxiangtong"
                                ],
                                zls: [
                                    "zailushang"
                                ],
                                sbd: [
                                    "shuobuding"
                                ],
                                lbj: [
                                    "laibuji"
                                ],
                                bon: [
                                    "bangong"
                                ],
                                wjj: [
                                    "wenjianjia"
                                ],
                                wal: [
                                    "wananla"
                                ],
                                xxb: [
                                    "xiuxiba"
                                ],
                                djl: [
                                    "daojiale"
                                ],
                                wswa: [
                                    "wusuoweia"
                                ],
                                slm: [
                                    "shuilema"
                                ],
                                cwf: [
                                    "chiwanfan"
                                ],
                                kgh: [
                                    "kaigehui"
                                ],
                                ayl: [
                                    "aoyele"
                                ],
                                dlst: [
                                    "duanlianshenti"
                                ],
                                hdy: [
                                    "haodeya"
                                ],
                                htzs: [
                                    "huitouzaishuo"
                                ],
                                dlm: [
                                    "daolema"
                                ],
                                xlm: [
                                    "xinglema"
                                ],
                                zgm: [
                                    "zaiganma"
                                ],
                                gjl: [
                                    "guanjile"
                                ],
                                mdl: [
                                    "meidianle"
                                ],
                                wyd: [
                                    "wanyidian"
                                ],
                                xxn: [
                                    "xiexieni"
                                ]
                            };
                            return _initialsIndex;
                        }
                    },
                    "./src/common/components/InputMethod/assets/pinyin_syllables.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.syllables = void 0;
                        const syllables = exports.syllables = [
                            "a",
                            "ai",
                            "an",
                            "ang",
                            "ao",
                            "ba",
                            "bai",
                            "ban",
                            "bang",
                            "bao",
                            "bei",
                            "ben",
                            "beng",
                            "bi",
                            "bian",
                            "biao",
                            "bie",
                            "bin",
                            "bing",
                            "bo",
                            "bu",
                            "ca",
                            "cai",
                            "can",
                            "cang",
                            "cao",
                            "ce",
                            "cen",
                            "ceng",
                            "cha",
                            "chai",
                            "chan",
                            "chang",
                            "chao",
                            "che",
                            "chen",
                            "cheng",
                            "chi",
                            "chong",
                            "chou",
                            "chu",
                            "chuai",
                            "chuan",
                            "chuang",
                            "chui",
                            "chun",
                            "chuo",
                            "ci",
                            "cong",
                            "cou",
                            "cu",
                            "cuan",
                            "cui",
                            "cun",
                            "cuo",
                            "da",
                            "dai",
                            "dan",
                            "dang",
                            "dao",
                            "de",
                            "dei",
                            "den",
                            "deng",
                            "di",
                            "dia",
                            "dian",
                            "diao",
                            "die",
                            "ding",
                            "diu",
                            "dong",
                            "dou",
                            "du",
                            "duan",
                            "dui",
                            "dun",
                            "duo",
                            "e",
                            "ei",
                            "en",
                            "eng",
                            "er",
                            "fa",
                            "fan",
                            "fang",
                            "fei",
                            "fen",
                            "feng",
                            "fo",
                            "fou",
                            "fu",
                            "ga",
                            "gai",
                            "gan",
                            "gang",
                            "gao",
                            "ge",
                            "gei",
                            "gen",
                            "geng",
                            "gong",
                            "gou",
                            "gu",
                            "gua",
                            "guai",
                            "guan",
                            "guang",
                            "gui",
                            "gun",
                            "guo",
                            "ha",
                            "hai",
                            "han",
                            "hang",
                            "hao",
                            "he",
                            "hei",
                            "hen",
                            "heng",
                            "hong",
                            "hou",
                            "hu",
                            "hua",
                            "huai",
                            "huan",
                            "huang",
                            "hui",
                            "hun",
                            "huo",
                            "ji",
                            "jia",
                            "jian",
                            "jiang",
                            "jiao",
                            "jie",
                            "jin",
                            "jing",
                            "jiong",
                            "jiu",
                            "ju",
                            "juan",
                            "jue",
                            "jun",
                            "ka",
                            "kai",
                            "kan",
                            "kang",
                            "kao",
                            "ke",
                            "kei",
                            "ken",
                            "keng",
                            "kong",
                            "kou",
                            "ku",
                            "kua",
                            "kuai",
                            "kuan",
                            "kuang",
                            "kui",
                            "kun",
                            "kuo",
                            "la",
                            "lai",
                            "lan",
                            "lang",
                            "lao",
                            "le",
                            "lei",
                            "leng",
                            "li",
                            "lia",
                            "lian",
                            "liang",
                            "liao",
                            "lie",
                            "lin",
                            "ling",
                            "liu",
                            "long",
                            "lou",
                            "lu",
                            "luan",
                            "lve",
                            "lun",
                            "lv",
                            "ma",
                            "mai",
                            "man",
                            "mang",
                            "mao",
                            "me",
                            "mei",
                            "men",
                            "meng",
                            "mi",
                            "mian",
                            "miao",
                            "mie",
                            "min",
                            "ming",
                            "miu",
                            "mo",
                            "mou",
                            "mu",
                            "na",
                            "nai",
                            "nan",
                            "nang",
                            "nao",
                            "ne",
                            "nei",
                            "nen",
                            "neng",
                            "ni",
                            "nian",
                            "niang",
                            "niao",
                            "nie",
                            "nin",
                            "ning",
                            "niu",
                            "nong",
                            "nou",
                            "nu",
                            "nuan",
                            "nve",
                            "nun",
                            "nv",
                            "o",
                            "ou",
                            "pa",
                            "pai",
                            "pan",
                            "pang",
                            "pao",
                            "pei",
                            "pen",
                            "peng",
                            "pi",
                            "pian",
                            "piao",
                            "pie",
                            "pin",
                            "ping",
                            "po",
                            "pou",
                            "pu",
                            "qi",
                            "qia",
                            "qian",
                            "qiang",
                            "qiao",
                            "qie",
                            "qin",
                            "qing",
                            "qiong",
                            "qiu",
                            "qu",
                            "quan",
                            "que",
                            "qun",
                            "ran",
                            "rang",
                            "rao",
                            "re",
                            "ren",
                            "reng",
                            "ri",
                            "rong",
                            "rou",
                            "ru",
                            "ruan",
                            "rui",
                            "run",
                            "ruo",
                            "sa",
                            "sai",
                            "san",
                            "sang",
                            "sao",
                            "se",
                            "sen",
                            "seng",
                            "sha",
                            "shai",
                            "shan",
                            "shang",
                            "shao",
                            "she",
                            "shei",
                            "shen",
                            "sheng",
                            "shi",
                            "shou",
                            "shu",
                            "shua",
                            "shuai",
                            "shuan",
                            "shuang",
                            "shui",
                            "shun",
                            "shuo",
                            "si",
                            "song",
                            "sou",
                            "su",
                            "suan",
                            "sui",
                            "sun",
                            "suo",
                            "ta",
                            "tai",
                            "tan",
                            "tang",
                            "tao",
                            "te",
                            "teng",
                            "ti",
                            "tian",
                            "tiao",
                            "tie",
                            "ting",
                            "tong",
                            "tou",
                            "tu",
                            "tuan",
                            "tui",
                            "tun",
                            "tuo",
                            "wa",
                            "wai",
                            "wan",
                            "wang",
                            "wei",
                            "wen",
                            "weng",
                            "wo",
                            "wu",
                            "xi",
                            "xia",
                            "xian",
                            "xiang",
                            "xiao",
                            "xie",
                            "xin",
                            "xing",
                            "xiong",
                            "xiu",
                            "xu",
                            "xuan",
                            "xue",
                            "xun",
                            "ya",
                            "yan",
                            "yang",
                            "yao",
                            "ye",
                            "yi",
                            "yin",
                            "ying",
                            "yo",
                            "yong",
                            "you",
                            "yu",
                            "yuan",
                            "yue",
                            "yun",
                            "za",
                            "zai",
                            "zan",
                            "zang",
                            "zao",
                            "ze",
                            "zei",
                            "zen",
                            "zeng",
                            "zha",
                            "zhai",
                            "zhan",
                            "zhang",
                            "zhao",
                            "zhe",
                            "zhei",
                            "zhen",
                            "zheng",
                            "zhi",
                            "zhong",
                            "zhou",
                            "zhu",
                            "zhua",
                            "zhuai",
                            "zhuan",
                            "zhuang",
                            "zhui",
                            "zhun",
                            "zhuo",
                            "zi",
                            "zong",
                            "zou",
                            "zu",
                            "zuan",
                            "zui",
                            "zun",
                            "zuo",
                            "n",
                            "m",
                            "ng",
                            "hm",
                            "hng"
                        ];
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
                    $app_exports$['input-method'] = __webpack_require__("./src/common/components/InputMethod/InputMethod.ux");
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
                                flexDirection: "column"
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
                                height: "77px",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingLeft: "5px",
                                paddingRight: "5px",
                                paddingTop: "5px",
                                flexShrink: 0
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
                                    "preview-new"
                                ]
                            ],
                            {
                                flex: 1,
                                width: "100%",
                                backgroundColor: "#0a0a0a",
                                paddingTop: "15px",
                                paddingRight: "15px",
                                paddingBottom: "15px",
                                paddingLeft: "15px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "preview-text-new"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#eeeeee",
                                whiteSpace: "nowrap",
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "action-bar-new"
                                ]
                            ],
                            {
                                height: "64px",
                                flexDirection: "row",
                                alignItems: "center",
                                paddingLeft: "15px",
                                paddingRight: "15px",
                                paddingBottom: "5px",
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "action-btn-new"
                                ]
                            ],
                            {
                                width: "64px",
                                height: "64px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "action-spacer"
                                ]
                            ],
                            {
                                flex: 1
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "kb-spacer-new"
                                ]
                            ],
                            {
                                height: "283px",
                                flexShrink: 0
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
                                    "preview"
                                ]
                            ],
                            {
                                flex: 1,
                                width: "100%",
                                backgroundColor: "#111111",
                                borderRadius: "12px",
                                paddingTop: "10px",
                                paddingRight: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                marginTop: "8px",
                                marginRight: "8px",
                                marginBottom: "8px",
                                marginLeft: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "preview-text"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#eeeeee"
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
                                justifyContent: "flex-end",
                                paddingTop: "0",
                                paddingRight: "12px",
                                paddingBottom: "0",
                                paddingLeft: "12px",
                                borderTopWidth: "1px",
                                borderTopColor: "#1c1c1c"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btn"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                paddingTop: "8px",
                                paddingRight: "16px",
                                paddingBottom: "8px",
                                paddingLeft: "16px",
                                borderRadius: "16px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btn-cancel"
                                ]
                            ],
                            {
                                color: "#aaaaaa",
                                backgroundColor: "#1e1e1e",
                                marginRight: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btn-send"
                                ]
                            ],
                            {
                                color: "#ffffff",
                                backgroundColor: "#4e8ef7"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "kb-spacer"
                                ]
                            ],
                            {
                                height: "283px",
                                flexShrink: 0
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
                            protected: {
                                mode: 'message',
                                field: '',
                                title: '输入',
                                initial: ''
                            },
                            private: {
                                draft: '',
                                newUI: true,
                                scrollLeft: 0
                            },
                            onInit: function() {
                                this.draft = this.initial || '';
                                this.newUI = true;
                                if (this.draft) setTimeout((function() {
                                    this.scrollLeft = 20 * this.draft.length + 500;
                                }).bind(this), 100);
                            },
                            onComplete: function(evt) {
                                this.draft = this.draft + (evt.detail.content || '');
                                this.scrollLeft = 20 * this.draft.length + 500;
                            },
                            onDelete: function() {
                                this.draft = this.draft.slice(0, -1);
                            },
                            onClear: function() {
                                this.draft = '';
                            },
                            onConfirm: function() {
                                var app = this.$app.$def;
                                if ('edit' === this.mode) app.pendingAction = {
                                    type: 'editField',
                                    field: this.field,
                                    text: this.draft
                                };
                                else app.pendingAction = {
                                    type: 'message',
                                    text: this.draft
                                };
                                _system.default.back();
                            },
                            onCancel: function() {
                                _system.default.back();
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
                                            ]
                                        }
                                    }, [
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
                                                            return _vm_.onCancel(evt);
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
                                                        return _vm_.title;
                                                    }
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
                                        ]),
                                        aiot.__ce__("scroll", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "preview-new"
                                                ],
                                                scrollX: function() {
                                                    return true;
                                                },
                                                scrollLeft: function() {
                                                    return _vm_.scrollLeft;
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "preview-text-new"
                                                    ],
                                                    value: function() {
                                                        return _vm_.draft ? _vm_.draft : "\u70B9\u6309\u4E0B\u65B9\u952E\u76D8\u8F93\u5165";
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "action-bar-new"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "action-btn-new"
                                                    ],
                                                    src: "/common/images/清除_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.onClear(evt);
                                                        }
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "action-spacer"
                                                    ]
                                                }
                                            }, []),
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "action-btn-new"
                                                    ],
                                                    src: "/common/images/确认_按钮.png",
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.onConfirm(evt);
                                                        }
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "kb-spacer-new"
                                                ]
                                            }
                                        }, []),
                                        aiot.__cc__("input-method", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                hide: function() {
                                                    return false;
                                                },
                                                keyboardtype: "QWERTY",
                                                maxlength: function() {
                                                    return 5;
                                                },
                                                vibratemode: "short",
                                                screentype: "rect",
                                                events: {
                                                    complete: function(evt) {
                                                        return _vm_.onComplete(evt);
                                                    },
                                                    delete: function(evt) {
                                                        return _vm_.onDelete(evt);
                                                    }
                                                }
                                            }
                                        }, [])
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
