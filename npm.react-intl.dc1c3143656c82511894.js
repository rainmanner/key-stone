"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [8950], {
        97132: (e, t, r) => {
            t.vU = t.YB = t.XN = t.Pj = t._H = void 0;
            var n = r(25719),
                a = r(67030),
                o = n.__importStar(r(97807));
            t.XN = o.default;
            var i = n.__importDefault(r(93677));
            t.YB = i.default;
            var u = n.__importStar(r(51518));
            t.Pj = u.default, n.__importDefault(r(35531)).default, n.__importDefault(r(12139)).default;
            var l = n.__importDefault(r(26679));
            t._H = l.default, n.__importDefault(r(84781)).default;
            r(48856);
            t.vU = function(e) {
                return e
            }, (0, a.createFormattedComponent)("formatDate"), (0, a.createFormattedComponent)("formatTime"), (0, a.createFormattedComponent)("formatNumber"), (0, a.createFormattedComponent)("formatList"), (0, a.createFormattedComponent)("formatDisplayName"), (0, a.createFormattedDateTimePartsComponent)("formatDate"), (0, a.createFormattedDateTimePartsComponent)("formatTime");
            r(67030)
        },
        93590: (e, t, r) => {
            var n = r(59864),
                a = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                u = {};

            function l(e) {
                return n.isMemo(e) ? i : u[e.$$typeof] || a
            }
            u[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, u[n.Memo] = i;
            var c = Object.defineProperty,
                f = Object.getOwnPropertyNames,
                s = Object.getOwnPropertySymbols,
                m = Object.getOwnPropertyDescriptor,
                d = Object.getPrototypeOf,
                p = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" !== typeof r) {
                    if (p) {
                        var a = d(r);
                        a && a !== p && e(t, a, n)
                    }
                    var i = f(r);
                    s && (i = i.concat(s(r)));
                    for (var u = l(t), v = l(r), y = 0; y < i.length; ++y) {
                        var _ = i[y];
                        if (!o[_] && (!n || !n[_]) && (!v || !v[_]) && (!u || !u[_])) {
                            var h = m(r, _);
                            try {
                                c(t, _, h)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        25719: (e, t, r) => {
            r.r(t), r.d(t, {
                __assign: () => o,
                __asyncDelegator: () => P,
                __asyncGenerator: () => g,
                __asyncValues: () => w,
                __await: () => b,
                __awaiter: () => f,
                __classPrivateFieldGet: () => j,
                __classPrivateFieldIn: () => E,
                __classPrivateFieldSet: () => x,
                __createBinding: () => m,
                __decorate: () => u,
                __exportStar: () => d,
                __extends: () => a,
                __generator: () => s,
                __importDefault: () => C,
                __importStar: () => T,
                __makeTemplateObject: () => O,
                __metadata: () => c,
                __param: () => l,
                __read: () => v,
                __rest: () => i,
                __spread: () => y,
                __spreadArray: () => h,
                __spreadArrays: () => _,
                __values: () => p
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }, n(e, t)
            };

            function a(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var o = function() {
                return o = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, o.apply(this, arguments)
            };

            function i(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
                }
                return r
            }

            function u(e, t, r, n) {
                var a, o = arguments.length,
                    i = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                else
                    for (var u = e.length - 1; u >= 0; u--)(a = e[u]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
                return o > 3 && i && Object.defineProperty(t, r, i), i
            }

            function l(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function c(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function f(e, t, r, n) {
                return new(r || (r = Promise))((function(a, o) {
                    function i(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(i, u)
                    }
                    l((n = n.apply(e, t || [])).next())
                }))
            }

            function s(e, t) {
                var r, n, a, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                                switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                            i.label = a[1], a = o;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2], i.ops.push(o);
                                            break
                                        }
                                        a[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e], n = 0
                            } finally {
                                r = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            }
            var m = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var a = Object.getOwnPropertyDescriptor(t, r);
                a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }), Object.defineProperty(e, n, a)
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            };

            function d(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || m(t, e, r)
            }

            function p(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function v(e, t) {
                var r = "function" === typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, a, o = r.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) i.push(n.value)
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return i
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
                return e
            }

            function _() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e),
                    a = 0;
                for (t = 0; t < r; t++)
                    for (var o = arguments[t], i = 0, u = o.length; i < u; i++, a++) n[a] = o[i];
                return n
            }

            function h(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, a = 0, o = t.length; a < o; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function b(e) {
                return this instanceof b ? (this.v = e, this) : new b(e)
            }

            function g(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, a = r.apply(e, t || []),
                    o = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function i(e) {
                    a[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            o.push([e, t, r, n]) > 1 || u(e, t)
                        }))
                    })
                }

                function u(e, t) {
                    try {
                        (r = a[e](t)).value instanceof b ? Promise.resolve(r.value.v).then(l, c) : f(o[0][2], r)
                    } catch (e) {
                        f(o[0][3], e)
                    }
                    var r
                }

                function l(e) {
                    u("next", e)
                }

                function c(e) {
                    u("throw", e)
                }

                function f(e, t) {
                    e(t), o.shift(), o.length && u(o[0][0], o[0][1])
                }
            }

            function P(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, a) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[n](t)),
                            done: "return" === n
                        } : a ? a(t) : t
                    } : a
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = p(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, a) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }), t)
                            }(n, a, (t = e[r](t)).done, t.value)
                        }))
                    }
                }
            }

            function O(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var F = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function T(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && m(t, e, r);
                return F(t, e), t
            }

            function C(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function j(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" === typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }

            function x(e, t, r, n, a) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !a) throw new TypeError("Private accessor was defined without a setter");
                if ("function" === typeof t ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? a.call(e, r) : a ? a.value = r : t.set(e, r), r
            }

            function E(e, t) {
                if (null === t || "object" !== typeof t && "function" !== typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" === typeof e ? t === e : e.has(t)
            }
        },
        67030: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createFormattedComponent = t.createFormattedDateTimePartsComponent = t.FormattedListParts = t.FormattedNumberParts = void 0;
            var n, a, o = r(25719),
                i = o.__importStar(r(67294)),
                u = o.__importDefault(r(93677));
            ! function(e) {
                e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
            }(n || (n = {})),
            function(e) {
                e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
            }(a || (a = {})), t.FormattedNumberParts = function(e) {
                var t = (0, u.default)(),
                    r = e.value,
                    n = e.children,
                    a = o.__rest(e, ["value", "children"]);
                return n(t.formatNumberToParts(r, a))
            }, t.FormattedNumberParts.displayName = "FormattedNumberParts", t.FormattedListParts = function(e) {
                var t = (0, u.default)(),
                    r = e.value,
                    n = e.children,
                    a = o.__rest(e, ["value", "children"]);
                return n(t.formatListToParts(r, a))
            }, t.FormattedNumberParts.displayName = "FormattedNumberParts", t.createFormattedDateTimePartsComponent = function(e) {
                var t = function(t) {
                    var r = (0, u.default)(),
                        n = t.value,
                        a = t.children,
                        i = o.__rest(t, ["value", "children"]),
                        l = "string" === typeof n ? new Date(n || 0) : n;
                    return a("formatDate" === e ? r.formatDateToParts(l, i) : r.formatTimeToParts(l, i))
                };
                return t.displayName = a[e], t
            }, t.createFormattedComponent = function(e) {
                var t = function(t) {
                    var r = (0, u.default)(),
                        n = t.value,
                        a = t.children,
                        l = o.__rest(t, ["value", "children"]),
                        c = r[e](n, l);
                    if ("function" === typeof a) return a(c);
                    var f = r.textComponent || i.Fragment;
                    return i.createElement(f, null, c)
                };
                return t.displayName = n[e], t
            }
        },
        84781: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(25719),
                a = n.__importStar(r(67294)),
                o = n.__importDefault(r(93677)),
                i = function(e) {
                    var t = (0, o.default)(),
                        r = e.from,
                        i = e.to,
                        u = e.children,
                        l = n.__rest(e, ["from", "to", "children"]),
                        c = t.formatDateTimeRange(r, i, l);
                    if ("function" === typeof u) return u(c);
                    var f = t.textComponent || a.Fragment;
                    return a.createElement(f, null, c)
                };
            i.displayName = "FormattedDateTimeRange", t.default = i
        },
        97807: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Context = t.Provider = void 0;
            var n = r(25719),
                a = n.__importStar(r(67294)),
                o = n.__importDefault(r(93590)),
                i = r(42358),
                u = a.createContext(null),
                l = u.Consumer,
                c = u.Provider;
            t.Provider = c, t.Context = u, t.default = function(e, t) {
                var r, u = t || {},
                    c = u.intlPropName,
                    f = void 0 === c ? "intl" : c,
                    s = u.forwardRef,
                    m = void 0 !== s && s,
                    d = u.enforceContext,
                    p = void 0 === d || d,
                    v = function(t) {
                        return a.createElement(l, null, (function(r) {
                            var o;
                            p && (0, i.invariantIntlContext)(r);
                            var u = ((o = {})[f] = r, o);
                            return a.createElement(e, n.__assign({}, t, u, {
                                ref: m ? t.forwardedRef : null
                            }))
                        }))
                    };
                return v.displayName = "injectIntl(".concat((r = e).displayName || r.name || "Component", ")"), v.WrappedComponent = e, m ? (0, o.default)(a.forwardRef((function(e, t) {
                    return a.createElement(v, n.__assign({}, e, {
                        forwardedRef: t
                    }))
                })), e) : (0, o.default)(v, e)
            }
        },
        26679: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(25719),
                a = n.__importStar(r(67294)),
                o = n.__importDefault(r(93677)),
                i = r(42358);

            function u(e) {
                var t = (0, o.default)(),
                    r = t.formatMessage,
                    n = t.textComponent,
                    i = void 0 === n ? a.Fragment : n,
                    u = e.id,
                    l = e.description,
                    c = e.defaultMessage,
                    f = e.values,
                    s = e.children,
                    m = e.tagName,
                    d = void 0 === m ? i : m,
                    p = r({
                        id: u,
                        description: l,
                        defaultMessage: c
                    }, f, {
                        ignoreTag: e.ignoreTag
                    });
                return "function" === typeof s ? s(Array.isArray(p) ? p : [p]) : d ? a.createElement(d, null, a.Children.toArray(p)) : a.createElement(a.Fragment, null, p)
            }
            u.displayName = "FormattedMessage";
            var l = a.memo(u, (function(e, t) {
                var r = e.values,
                    a = n.__rest(e, ["values"]),
                    o = t.values,
                    u = n.__rest(t, ["values"]);
                return (0, i.shallowEqual)(o, r) && (0, i.shallowEqual)(a, u)
            }));
            l.displayName = "MemoizedFormattedMessage", t.default = l
        },
        12139: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(25719),
                a = n.__importStar(r(67294)),
                o = n.__importDefault(r(93677)),
                i = function(e) {
                    var t = (0, o.default)(),
                        r = t.formatPlural,
                        n = t.textComponent,
                        i = e.value,
                        u = e.other,
                        l = e.children,
                        c = e[r(i, e)] || u;
                    return "function" === typeof l ? l(c) : n ? a.createElement(n, null, c) : c
                };
            i.defaultProps = {
                type: "cardinal"
            }, i.displayName = "FormattedPlural", t.default = i
        },
        51518: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createIntl = void 0;
            var n = r(25719),
                a = n.__importStar(r(67294)),
                o = r(97807),
                i = r(42358),
                u = r(48856),
                l = r(95260);

            function c(e) {
                return {
                    locale: e.locale,
                    timeZone: e.timeZone,
                    fallbackOnEmptyString: e.fallbackOnEmptyString,
                    formats: e.formats,
                    textComponent: e.textComponent,
                    messages: e.messages,
                    defaultLocale: e.defaultLocale,
                    defaultFormats: e.defaultFormats,
                    onError: e.onError,
                    onWarn: e.onWarn,
                    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
                    defaultRichTextElements: e.defaultRichTextElements
                }
            }

            function f(e) {
                return e ? Object.keys(e).reduce((function(t, r) {
                    var n = e[r];
                    return t[r] = (0, l.isFormatXMLElementFn)(n) ? (0, i.assignUniqueKeysToParts)(n) : n, t
                }), {}) : e
            }
            var s = function(e, t, r, o) {
                for (var i = [], l = 4; l < arguments.length; l++) i[l - 4] = arguments[l];
                var c = f(o),
                    s = u.formatMessage.apply(void 0, n.__spreadArray([e, t, r, c], i, !1));
                return Array.isArray(s) ? a.Children.toArray(s) : s
            };
            t.createIntl = function(e, t) {
                var r = e.defaultRichTextElements,
                    a = n.__rest(e, ["defaultRichTextElements"]),
                    o = f(r),
                    l = (0, u.createIntl)(n.__assign(n.__assign(n.__assign({}, i.DEFAULT_INTL_CONFIG), a), {
                        defaultRichTextElements: o
                    }), t),
                    c = {
                        locale: l.locale,
                        timeZone: l.timeZone,
                        fallbackOnEmptyString: l.fallbackOnEmptyString,
                        formats: l.formats,
                        defaultLocale: l.defaultLocale,
                        defaultFormats: l.defaultFormats,
                        messages: l.messages,
                        onError: l.onError,
                        defaultRichTextElements: o
                    };
                return n.__assign(n.__assign({}, l), {
                    formatMessage: s.bind(null, c, l.formatters),
                    $t: s.bind(null, c, l.formatters)
                })
            };
            var m = function(e) {
                function r() {
                    var r = null !== e && e.apply(this, arguments) || this;
                    return r.cache = (0, u.createIntlCache)(), r.state = {
                        cache: r.cache,
                        intl: (0, t.createIntl)(c(r.props), r.cache),
                        prevConfig: c(r.props)
                    }, r
                }
                return n.__extends(r, e), r.getDerivedStateFromProps = function(e, r) {
                    var n = r.prevConfig,
                        a = r.cache,
                        o = c(e);
                    return (0, i.shallowEqual)(n, o) ? null : {
                        intl: (0, t.createIntl)(o, a),
                        prevConfig: o
                    }
                }, r.prototype.render = function() {
                    return (0, i.invariantIntlContext)(this.state.intl), a.createElement(o.Provider, {
                        value: this.state.intl
                    }, this.props.children)
                }, r.displayName = "IntlProvider", r.defaultProps = i.DEFAULT_INTL_CONFIG, r
            }(a.PureComponent);
            t.default = m
        },
        35531: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(25719),
                a = n.__importStar(r(67294)),
                o = r(78264),
                i = n.__importDefault(r(93677)),
                u = 3600;

            function l(e) {
                var t = Math.abs(e);
                return t < 60 ? "second" : t < u ? "minute" : t < 86400 ? "hour" : "day"
            }

            function c(e) {
                switch (e) {
                    case "second":
                        return 1;
                    case "minute":
                        return 60;
                    case "hour":
                        return u;
                    default:
                        return 86400
                }
            }
            var f = ["second", "minute", "hour"];

            function s(e) {
                return void 0 === e && (e = "second"), f.indexOf(e) > -1
            }
            var m = function(e) {
                    var t = (0, i.default)(),
                        r = t.formatRelativeTime,
                        o = t.textComponent,
                        u = e.children,
                        l = r(e.value || 0, e.unit, n.__rest(e, ["children", "value", "unit"]));
                    return "function" === typeof u ? u(l) : o ? a.createElement(o, null, l) : a.createElement(a.Fragment, null, l)
                },
                d = function(e) {
                    var t = e.value,
                        r = e.unit,
                        i = e.updateIntervalInSeconds,
                        f = n.__rest(e, ["value", "unit", "updateIntervalInSeconds"]);
                    (0, o.invariant)(!i || !(!i || !s(r)), "Cannot schedule update with unit longer than hour");
                    var d, p = a.useState(),
                        v = p[0],
                        y = p[1],
                        _ = a.useState(0),
                        h = _[0],
                        b = _[1],
                        g = a.useState(0),
                        P = g[0],
                        w = g[1];
                    r === v && t === h || (b(t || 0), y(r), w(s(r) ? function(e, t) {
                        if (!e) return 0;
                        switch (t) {
                            case "second":
                                return e;
                            case "minute":
                                return 60 * e;
                            default:
                                return e * u
                        }
                    }(t, r) : 0)), a.useEffect((function() {
                        function e() {
                            clearTimeout(d)
                        }
                        if (e(), !i || !s(r)) return e;
                        var t = P - i,
                            n = l(t);
                        if ("day" === n) return e;
                        var a = c(n),
                            o = t - t % a,
                            u = o >= P ? o - a : o,
                            f = Math.abs(u - P);
                        return P !== u && (d = setTimeout((function() {
                            return w(u)
                        }), 1e3 * f)), e
                    }), [P, i, r]);
                    var O = t || 0,
                        F = r;
                    if (s(r) && "number" === typeof P && i) {
                        var T = c(F = l(P));
                        O = Math.round(P / T)
                    }
                    return a.createElement(m, n.__assign({
                        value: O,
                        unit: F
                    }, f))
                };
            d.displayName = "FormattedRelativeTime", d.defaultProps = {
                value: 0,
                unit: "second"
            }, t.default = d
        },
        93677: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(25719).__importStar(r(67294)),
                a = r(97807),
                o = r(42358);
            t.default = function() {
                var e = n.useContext(a.Context);
                return (0, o.invariantIntlContext)(e), e
            }
        },
        42358: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.shallowEqual = t.assignUniqueKeysToParts = t.DEFAULT_INTL_CONFIG = t.invariantIntlContext = void 0;
            var n = r(25719),
                a = n.__importStar(r(67294)),
                o = r(78264),
                i = r(48856);
            t.invariantIntlContext = function(e) {
                (0, o.invariant)(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
            }, t.DEFAULT_INTL_CONFIG = n.__assign(n.__assign({}, i.DEFAULT_INTL_CONFIG), {
                textComponent: a.Fragment
            }), t.assignUniqueKeysToParts = function(e) {
                return function(t) {
                    return e(a.Children.toArray(t))
                }
            }, t.shallowEqual = function(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var r = Object.keys(e),
                    n = Object.keys(t),
                    a = r.length;
                if (n.length !== a) return !1;
                for (var o = 0; o < a; o++) {
                    var i = r[o];
                    if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
                }
                return !0
            }
        }
    }
]);