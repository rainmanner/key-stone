"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [3858], {
        95260: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(15145),
                o = r(72642);
            n.__exportStar(r(48297), t), n.__exportStar(r(72642), t), n.__exportStar(r(53288), t), t.default = o.IntlMessageFormat
        },
        15145: (e, t, r) => {
            r.r(t), r.d(t, {
                __assign: () => a,
                __asyncDelegator: () => w,
                __asyncGenerator: () => b,
                __asyncValues: () => I,
                __await: () => g,
                __awaiter: () => c,
                __classPrivateFieldGet: () => S,
                __classPrivateFieldIn: () => A,
                __classPrivateFieldSet: () => j,
                __createBinding: () => p,
                __decorate: () => l,
                __exportStar: () => y,
                __extends: () => o,
                __generator: () => f,
                __importDefault: () => T,
                __importStar: () => O,
                __makeTemplateObject: () => E,
                __metadata: () => s,
                __param: () => u,
                __read: () => d,
                __rest: () => i,
                __spread: () => v,
                __spreadArray: () => _,
                __spreadArrays: () => h,
                __values: () => m
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

            function o(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var a = function() {
                return a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, a.apply(this, arguments)
            };

            function i(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                }
                return r
            }

            function l(e, t, r, n) {
                var o, a = arguments.length,
                    i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                else
                    for (var l = e.length - 1; l >= 0; l--)(o = e[l]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
                return a > 3 && i && Object.defineProperty(t, r, i), i
            }

            function u(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function s(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function c(e, t, r, n) {
                return new(r || (r = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(i, l)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            }

            function f(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" === typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1], o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            }
            var p = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }), Object.defineProperty(e, n, o)
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            };

            function y(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || p(t, e, r)
            }

            function m(e) {
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

            function d(e, t) {
                var r = "function" === typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return i
            }

            function v() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(d(arguments[t]));
                return e
            }

            function h() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e),
                    o = 0;
                for (t = 0; t < r; t++)
                    for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++) n[o] = a[i];
                return n
            }

            function _(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []),
                    a = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function i(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            a.push([e, t, r, n]) > 1 || l(e, t)
                        }))
                    })
                }

                function l(e, t) {
                    try {
                        (r = o[e](t)).value instanceof g ? Promise.resolve(r.value.v).then(u, s) : c(a[0][2], r)
                    } catch (e) {
                        c(a[0][3], e)
                    }
                    var r
                }

                function u(e) {
                    l("next", e)
                }

                function s(e) {
                    l("throw", e)
                }

                function c(e, t) {
                    e(t), a.shift(), a.length && l(a[0][0], a[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: g(e[n](t)),
                            done: "return" === n
                        } : o ? o(t) : t
                    } : o
                }
            }

            function I(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = m(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }), t)
                            }(n, o, (t = e[r](t)).done, t.value)
                        }))
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var P = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function O(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && p(t, e, r);
                return P(t, e), t
            }

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" === typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }

            function j(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" === typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
            }

            function A(e, t) {
                if (null === t || "object" !== typeof t && "function" !== typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" === typeof e ? t === e : e.has(t)
            }
        },
        72642: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IntlMessageFormat = void 0;
            var n = r(15145),
                o = r(8831),
                a = n.__importStar(r(34568)),
                i = r(48297);

            function l(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }
            var u = function() {
                function e(t, r, o, u) {
                    void 0 === r && (r = e.defaultLocale);
                    var s, c, f, p = this;
                    if (this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(e) {
                            var t = p.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce((function(e, t) {
                                return e.length && t.type === i.PART_TYPE.literal && "string" === typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                            }), []);
                            return r.length <= 1 ? r[0] || "" : r
                        }, this.formatToParts = function(e) {
                            return (0, i.formatToParts)(p.ast, p.locales, p.formatters, p.formats, e, void 0, p.message)
                        }, this.resolvedOptions = function() {
                            var e;
                            return {
                                locale: (null === (e = p.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(p.locales)[0]
                            }
                        }, this.getAst = function() {
                            return p.ast
                        }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" === typeof t) {
                        if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        this.ast = e.__parse(t, {
                            ignoreTag: null === u || void 0 === u ? void 0 : u.ignoreTag,
                            locale: this.resolvedLocale
                        })
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                    this.formats = (c = e.formats, (f = o) ? Object.keys(c).reduce((function(e, t) {
                        var r, o;
                        return e[t] = (r = c[t], (o = f[t]) ? n.__assign(n.__assign(n.__assign({}, r || {}), o || {}), Object.keys(r).reduce((function(e, t) {
                            return e[t] = n.__assign(n.__assign({}, r[t]), o[t] || {}), e
                        }), {})) : r), e
                    }), n.__assign({}, c)) : c), this.formatters = u && u.formatters || (void 0 === (s = this.formatterCache) && (s = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: (0, a.default)((function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.NumberFormat).bind.apply(e, n.__spreadArray([void 0], t, !1)))
                        }), {
                            cache: l(s.number),
                            strategy: a.strategies.variadic
                        }),
                        getDateTimeFormat: (0, a.default)((function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.DateTimeFormat).bind.apply(e, n.__spreadArray([void 0], t, !1)))
                        }), {
                            cache: l(s.dateTime),
                            strategy: a.strategies.variadic
                        }),
                        getPluralRules: (0, a.default)((function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.PluralRules).bind.apply(e, n.__spreadArray([void 0], t, !1)))
                        }), {
                            cache: l(s.pluralRules),
                            strategy: a.strategies.variadic
                        })
                    })
                }
                return Object.defineProperty(e, "defaultLocale", {
                    get: function() {
                        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                    if ("undefined" !== typeof Intl.Locale) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" === typeof e ? e : e[0])
                    }
                }, e.__parse = o.parse, e.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, e
            }();
            t.IntlMessageFormat = u
        },
        53288: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MissingValueError = t.InvalidValueTypeError = t.InvalidValueError = t.FormatError = t.ErrorCode = void 0;
            var n, o = r(15145);
            ! function(e) {
                e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
            }(n = t.ErrorCode || (t.ErrorCode = {}));
            var a = function(e) {
                function t(t, r, n) {
                    var o = e.call(this, t) || this;
                    return o.code = r, o.originalMessage = n, o
                }
                return o.__extends(t, e), t.prototype.toString = function() {
                    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                }, t
            }(Error);
            t.FormatError = a;
            var i = function(e) {
                function t(t, r, o, a) {
                    return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(o).join('", "'), '"'), n.INVALID_VALUE, a) || this
                }
                return o.__extends(t, e), t
            }(a);
            t.InvalidValueError = i;
            var l = function(e) {
                function t(t, r, o) {
                    return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, o) || this
                }
                return o.__extends(t, e), t
            }(a);
            t.InvalidValueTypeError = l;
            var u = function(e) {
                function t(t, r) {
                    return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
                }
                return o.__extends(t, e), t
            }(a);
            t.MissingValueError = u
        },
        48297: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatToParts = t.isFormatXMLElementFn = t.PART_TYPE = void 0;
            var n, o = r(8831),
                a = r(53288);

            function i(e) {
                return "function" === typeof e
            }! function(e) {
                e[e.literal = 0] = "literal", e[e.object = 1] = "object"
            }(n = t.PART_TYPE || (t.PART_TYPE = {})), t.isFormatXMLElementFn = i, t.formatToParts = function e(t, r, l, u, s, c, f) {
                if (1 === t.length && (0, o.isLiteralElement)(t[0])) return [{
                    type: n.literal,
                    value: t[0].value
                }];
                for (var p = [], y = 0, m = t; y < m.length; y++) {
                    var d = m[y];
                    if ((0, o.isLiteralElement)(d)) p.push({
                        type: n.literal,
                        value: d.value
                    });
                    else if ((0, o.isPoundElement)(d)) "number" === typeof c && p.push({
                        type: n.literal,
                        value: l.getNumberFormat(r).format(c)
                    });
                    else {
                        var v = d.value;
                        if (!s || !(v in s)) throw new a.MissingValueError(v, f);
                        var h = s[v];
                        if ((0, o.isArgumentElement)(d)) h && "string" !== typeof h && "number" !== typeof h || (h = "string" === typeof h || "number" === typeof h ? String(h) : ""), p.push({
                            type: "string" === typeof h ? n.literal : n.object,
                            value: h
                        });
                        else if ((0, o.isDateElement)(d)) {
                            var _ = "string" === typeof d.style ? u.date[d.style] : (0, o.isDateTimeSkeleton)(d.style) ? d.style.parsedOptions : void 0;
                            p.push({
                                type: n.literal,
                                value: l.getDateTimeFormat(r, _).format(h)
                            })
                        } else if ((0, o.isTimeElement)(d)) _ = "string" === typeof d.style ? u.time[d.style] : (0, o.isDateTimeSkeleton)(d.style) ? d.style.parsedOptions : u.time.medium, p.push({
                            type: n.literal,
                            value: l.getDateTimeFormat(r, _).format(h)
                        });
                        else if ((0, o.isNumberElement)(d))(_ = "string" === typeof d.style ? u.number[d.style] : (0, o.isNumberSkeleton)(d.style) ? d.style.parsedOptions : void 0) && _.scale && (h *= _.scale || 1), p.push({
                            type: n.literal,
                            value: l.getNumberFormat(r, _).format(h)
                        });
                        else {
                            if ((0, o.isTagElement)(d)) {
                                var g = d.children,
                                    b = d.value,
                                    w = s[b];
                                if (!i(w)) throw new a.InvalidValueTypeError(b, "function", f);
                                var I = w(e(g, r, l, u, s, c).map((function(e) {
                                    return e.value
                                })));
                                Array.isArray(I) || (I = [I]), p.push.apply(p, I.map((function(e) {
                                    return {
                                        type: "string" === typeof e ? n.literal : n.object,
                                        value: e
                                    }
                                })))
                            }
                            if ((0, o.isSelectElement)(d)) {
                                if (!(E = d.options[h] || d.options.other)) throw new a.InvalidValueError(d.value, h, Object.keys(d.options), f);
                                p.push.apply(p, e(E.value, r, l, u, s))
                            } else if ((0, o.isPluralElement)(d)) {
                                var E;
                                if (!(E = d.options["=".concat(h)])) {
                                    if (!Intl.PluralRules) throw new a.FormatError('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', a.ErrorCode.MISSING_INTL_API, f);
                                    var P = l.getPluralRules(r, {
                                        type: d.pluralType
                                    }).select(h - (d.offset || 0));
                                    E = d.options[P] || d.options.other
                                }
                                if (!E) throw new a.InvalidValueError(d.value, h, Object.keys(d.options), f);
                                p.push.apply(p, e(E.value, r, l, u, s, h - (d.offset || 0)))
                            }
                        }
                    }
                }
                return (O = p).length < 2 ? O : O.reduce((function(e, t) {
                    var r = e[e.length - 1];
                    return r && r.type === n.literal && t.type === n.literal ? r.value += t.value : e.push(t), e
                }), []);
                var O
            }
        }
    }
]);