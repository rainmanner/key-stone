"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [9811], {
        8891: e => {
            var t, r = {
                DEBUG: !1,
                LIB_VERSION: "2.45.0"
            };
            if ("undefined" === typeof window) {
                var i = {
                    hostname: ""
                };
                t = {
                    navigator: {
                        userAgent: ""
                    },
                    document: {
                        location: i,
                        referrer: ""
                    },
                    screen: {
                        width: 0,
                        height: 0
                    },
                    location: i
                }
            } else t = window;
            var o, n, s, a, c, p, u, _, h, f, l, d = Array.prototype,
                g = Function.prototype,
                y = Object.prototype,
                m = d.slice,
                v = y.toString,
                b = y.hasOwnProperty,
                k = t.console,
                x = t.navigator,
                w = t.document,
                q = t.opera,
                S = t.screen,
                E = x.userAgent,
                O = g.bind,
                I = d.forEach,
                D = d.indexOf,
                A = d.map,
                T = Array.isArray,
                B = {},
                U = {
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                $ = {
                    log: function() {
                        if (r.DEBUG && !U.isUndefined(k) && k) try {
                            k.log.apply(k, arguments)
                        } catch (e) {
                            U.each(arguments, (function(e) {
                                k.log(e)
                            }))
                        }
                    },
                    warn: function() {
                        if (r.DEBUG && !U.isUndefined(k) && k) {
                            var e = ["Mixpanel warning:"].concat(U.toArray(arguments));
                            try {
                                k.warn.apply(k, e)
                            } catch (t) {
                                U.each(e, (function(e) {
                                    k.warn(e)
                                }))
                            }
                        }
                    },
                    error: function() {
                        if (r.DEBUG && !U.isUndefined(k) && k) {
                            var e = ["Mixpanel error:"].concat(U.toArray(arguments));
                            try {
                                k.error.apply(k, e)
                            } catch (t) {
                                U.each(e, (function(e) {
                                    k.error(e)
                                }))
                            }
                        }
                    },
                    critical: function() {
                        if (!U.isUndefined(k) && k) {
                            var e = ["Mixpanel error:"].concat(U.toArray(arguments));
                            try {
                                k.error.apply(k, e)
                            } catch (t) {
                                U.each(e, (function(e) {
                                    k.error(e)
                                }))
                            }
                        }
                    }
                },
                C = function(e, t) {
                    return function() {
                        return arguments[0] = "[" + t + "] " + arguments[0], e.apply($, arguments)
                    }
                },
                j = function(e) {
                    return {
                        log: C($.log, e),
                        error: C($.error, e),
                        critical: C($.critical, e)
                    }
                };
            U.bind = function(e, t) {
                var r, i;
                if (O && e.bind === O) return O.apply(e, m.call(arguments, 1));
                if (!U.isFunction(e)) throw new TypeError;
                return r = m.call(arguments, 2), i = function() {
                    if (!(this instanceof i)) return e.apply(t, r.concat(m.call(arguments)));
                    var o = {};
                    o.prototype = e.prototype;
                    var n = new o;
                    o.prototype = null;
                    var s = e.apply(n, r.concat(m.call(arguments)));
                    return Object(s) === s ? s : n
                }, i
            }, U.each = function(e, t, r) {
                if (null !== e && void 0 !== e)
                    if (I && e.forEach === I) e.forEach(t, r);
                    else if (e.length === +e.length) {
                    for (var i = 0, o = e.length; i < o; i++)
                        if (i in e && t.call(r, e[i], i, e) === B) return
                } else
                    for (var n in e)
                        if (b.call(e, n) && t.call(r, e[n], n, e) === B) return
            }, U.extend = function(e) {
                return U.each(m.call(arguments, 1), (function(t) {
                    for (var r in t) void 0 !== t[r] && (e[r] = t[r])
                })), e
            }, U.isArray = T || function(e) {
                return "[object Array]" === v.call(e)
            }, U.isFunction = function(e) {
                try {
                    return /^\s*\bfunction\b/.test(e)
                } catch (e) {
                    return !1
                }
            }, U.isArguments = function(e) {
                return !(!e || !b.call(e, "callee"))
            }, U.toArray = function(e) {
                return e ? e.toArray ? e.toArray() : U.isArray(e) || U.isArguments(e) ? m.call(e) : U.values(e) : []
            }, U.map = function(e, t, r) {
                if (A && e.map === A) return e.map(t, r);
                var i = [];
                return U.each(e, (function(e) {
                    i.push(t.call(r, e))
                })), i
            }, U.keys = function(e) {
                var t = [];
                return null === e || U.each(e, (function(e, r) {
                    t[t.length] = r
                })), t
            }, U.values = function(e) {
                var t = [];
                return null === e || U.each(e, (function(e) {
                    t[t.length] = e
                })), t
            }, U.include = function(e, t) {
                var r = !1;
                return null === e ? r : D && e.indexOf === D ? -1 != e.indexOf(t) : (U.each(e, (function(e) {
                    if (r || (r = e === t)) return B
                })), r)
            }, U.includes = function(e, t) {
                return -1 !== e.indexOf(t)
            }, U.inherit = function(e, t) {
                return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
            }, U.isObject = function(e) {
                return e === Object(e) && !U.isArray(e)
            }, U.isEmptyObject = function(e) {
                if (U.isObject(e)) {
                    for (var t in e)
                        if (b.call(e, t)) return !1;
                    return !0
                }
                return !1
            }, U.isUndefined = function(e) {
                return void 0 === e
            }, U.isString = function(e) {
                return "[object String]" == v.call(e)
            }, U.isDate = function(e) {
                return "[object Date]" == v.call(e)
            }, U.isNumber = function(e) {
                return "[object Number]" == v.call(e)
            }, U.isElement = function(e) {
                return !(!e || 1 !== e.nodeType)
            }, U.encodeDates = function(e) {
                return U.each(e, (function(t, r) {
                    U.isDate(t) ? e[r] = U.formatDate(t) : U.isObject(t) && (e[r] = U.encodeDates(t))
                })), e
            }, U.timestamp = function() {
                return Date.now = Date.now || function() {
                    return +new Date
                }, Date.now()
            }, U.formatDate = function(e) {
                function t(e) {
                    return e < 10 ? "0" + e : e
                }
                return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
            }, U.strip_empty_properties = function(e) {
                var t = {};
                return U.each(e, (function(e, r) {
                    U.isString(e) && e.length > 0 && (t[r] = e)
                })), t
            }, U.truncate = function(e, t) {
                var r;
                return "string" === typeof e ? r = e.slice(0, t) : U.isArray(e) ? (r = [], U.each(e, (function(e) {
                    r.push(U.truncate(e, t))
                }))) : U.isObject(e) ? (r = {}, U.each(e, (function(e, i) {
                    r[i] = U.truncate(e, t)
                }))) : r = e, r
            }, U.JSONEncode = function(e) {
                var t = function(e) {
                        var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            r = {
                                "\b": "\\b",
                                "\t": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            };
                        return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, (function(e) {
                            var t = r[e];
                            return "string" === typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })) + '"' : '"' + e + '"'
                    },
                    r = function(e, i) {
                        var o = "",
                            n = 0,
                            s = "",
                            a = "",
                            c = 0,
                            p = o,
                            u = [],
                            _ = i[e];
                        switch (_ && "object" === typeof _ && "function" === typeof _.toJSON && (_ = _.toJSON(e)), typeof _) {
                            case "string":
                                return t(_);
                            case "number":
                                return isFinite(_) ? String(_) : "null";
                            case "boolean":
                            case "null":
                                return String(_);
                            case "object":
                                if (!_) return "null";
                                if (o += "    ", u = [], "[object Array]" === v.apply(_)) {
                                    for (c = _.length, n = 0; n < c; n += 1) u[n] = r(n, _) || "null";
                                    return a = 0 === u.length ? "[]" : o ? "[\n" + o + u.join(",\n" + o) + "\n" + p + "]" : "[" + u.join(",") + "]", o = p, a
                                }
                                for (s in _) b.call(_, s) && (a = r(s, _)) && u.push(t(s) + (o ? ": " : ":") + a);
                                return a = 0 === u.length ? "{}" : o ? "{" + u.join(",") + p + "}" : "{" + u.join(",") + "}", o = p, a
                        }
                    };
                return r("", {
                    "": e
                })
            }, U.JSONDecode = (c = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            }, p = function(e) {
                var t = new SyntaxError(e);
                throw t.at = o, t.text = s, t
            }, u = function(e) {
                return e && e !== n && p("Expected '" + e + "' instead of '" + n + "'"), n = s.charAt(o), o += 1, n
            }, _ = function() {
                var e, t = "";
                for ("-" === n && (t = "-", u("-")); n >= "0" && n <= "9";) t += n, u();
                if ("." === n)
                    for (t += "."; u() && n >= "0" && n <= "9";) t += n;
                if ("e" === n || "E" === n)
                    for (t += n, u(), "-" !== n && "+" !== n || (t += n, u()); n >= "0" && n <= "9";) t += n, u();
                if (e = +t, isFinite(e)) return e;
                p("Bad number")
            }, h = function() {
                var e, t, r, i = "";
                if ('"' === n)
                    for (; u();) {
                        if ('"' === n) return u(), i;
                        if ("\\" === n)
                            if (u(), "u" === n) {
                                for (r = 0, t = 0; t < 4 && (e = parseInt(u(), 16), isFinite(e)); t += 1) r = 16 * r + e;
                                i += String.fromCharCode(r)
                            } else {
                                if ("string" !== typeof c[n]) break;
                                i += c[n]
                            }
                        else i += n
                    }
                p("Bad string")
            }, f = function() {
                for (; n && n <= " ";) u()
            }, a = function() {
                switch (f(), n) {
                    case "{":
                        return function() {
                            var e, t = {};
                            if ("{" === n) {
                                if (u("{"), f(), "}" === n) return u("}"), t;
                                for (; n;) {
                                    if (e = h(), f(), u(":"), Object.hasOwnProperty.call(t, e) && p('Duplicate key "' + e + '"'), t[e] = a(), f(), "}" === n) return u("}"), t;
                                    u(","), f()
                                }
                            }
                            p("Bad object")
                        }();
                    case "[":
                        return function() {
                            var e = [];
                            if ("[" === n) {
                                if (u("["), f(), "]" === n) return u("]"), e;
                                for (; n;) {
                                    if (e.push(a()), f(), "]" === n) return u("]"), e;
                                    u(","), f()
                                }
                            }
                            p("Bad array")
                        }();
                    case '"':
                        return h();
                    case "-":
                        return _();
                    default:
                        return n >= "0" && n <= "9" ? _() : function() {
                            switch (n) {
                                case "t":
                                    return u("t"), u("r"), u("u"), u("e"), !0;
                                case "f":
                                    return u("f"), u("a"), u("l"), u("s"), u("e"), !1;
                                case "n":
                                    return u("n"), u("u"), u("l"), u("l"), null
                            }
                            p('Unexpected "' + n + '"')
                        }()
                }
            }, function(e) {
                var t;
                return s = e, o = 0, n = " ", t = a(), f(), n && p("Syntax error"), t
            }), U.base64Encode = function(e) {
                var t, r, i, o, n, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    a = 0,
                    c = 0,
                    p = "",
                    u = [];
                if (!e) return e;
                e = U.utf8Encode(e);
                do {
                    t = (n = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, r = n >> 12 & 63, i = n >> 6 & 63, o = 63 & n, u[c++] = s.charAt(t) + s.charAt(r) + s.charAt(i) + s.charAt(o)
                } while (a < e.length);
                switch (p = u.join(""), e.length % 3) {
                    case 1:
                        p = p.slice(0, -2) + "==";
                        break;
                    case 2:
                        p = p.slice(0, -1) + "="
                }
                return p
            }, U.utf8Encode = function(e) {
                var t, r, i, o, n = "";
                for (t = r = 0, i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, o = 0; o < i; o++) {
                    var s = e.charCodeAt(o),
                        a = null;
                    s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (r > t && (n += e.substring(t, r)), n += a, t = r = o + 1)
                }
                return r > t && (n += e.substring(t, e.length)), n
            }, U.UUID = (l = function() {
                for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
                return e.toString(16) + t.toString(16)
            }, function() {
                var e = (S.height * S.width).toString(16);
                return l() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
                    var e, t, r = E,
                        i = [],
                        o = 0;

                    function n(e, t) {
                        var r, o = 0;
                        for (r = 0; r < t.length; r++) o |= i[r] << 8 * r;
                        return e ^ o
                    }
                    for (e = 0; e < r.length; e++) t = r.charCodeAt(e), i.unshift(255 & t), i.length >= 4 && (o = n(o, i), i = []);
                    return i.length > 0 && (o = n(o, i)), o.toString(16)
                }() + "-" + e + "-" + l()
            });
            var N = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
            U.isBlockedUA = function(e) {
                var t;
                for (e = e.toLowerCase(), t = 0; t < N.length; t++)
                    if (-1 !== e.indexOf(N[t])) return !0;
                return !1
            }, U.HTTPBuildQuery = function(e, t) {
                var r, i, o = [];
                return U.isUndefined(t) && (t = "&"), U.each(e, (function(e, t) {
                    r = encodeURIComponent(e.toString()), i = encodeURIComponent(t), o[o.length] = i + "=" + r
                })), o.join(t)
            }, U.getQueryParam = function(e, t) {
                t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                if (null === r || r && "string" !== typeof r[1] && r[1].length) return "";
                var i = r[1];
                try {
                    i = decodeURIComponent(i)
                } catch (e) {
                    $.error("Skipping decoding for malformed query param: " + i)
                }
                return i.replace(/\+/g, " ")
            }, U.cookie = {
                get: function(e) {
                    for (var t = e + "=", r = w.cookie.split(";"), i = 0; i < r.length; i++) {
                        for (var o = r[i];
                            " " == o.charAt(0);) o = o.substring(1, o.length);
                        if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length))
                    }
                    return null
                },
                parse: function(e) {
                    var t;
                    try {
                        t = U.JSONDecode(U.cookie.get(e)) || {}
                    } catch (e) {}
                    return t
                },
                set_seconds: function(e, t, r, i, o, n, s) {
                    var a = "",
                        c = "",
                        p = "";
                    if (s) a = "; domain=" + s;
                    else if (i) {
                        var u = J(w.location.hostname);
                        a = u ? "; domain=." + u : ""
                    }
                    if (r) {
                        var _ = new Date;
                        _.setTime(_.getTime() + 1e3 * r), c = "; expires=" + _.toGMTString()
                    }
                    n && (o = !0, p = "; SameSite=None"), o && (p += "; secure"), w.cookie = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p
                },
                set: function(e, t, r, i, o, n, s) {
                    var a = "",
                        c = "",
                        p = "";
                    if (s) a = "; domain=" + s;
                    else if (i) {
                        var u = J(w.location.hostname);
                        a = u ? "; domain=." + u : ""
                    }
                    if (r) {
                        var _ = new Date;
                        _.setTime(_.getTime() + 24 * r * 60 * 60 * 1e3), c = "; expires=" + _.toGMTString()
                    }
                    n && (o = !0, p = "; SameSite=None"), o && (p += "; secure");
                    var h = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p;
                    return w.cookie = h, h
                },
                remove: function(e, t, r) {
                    U.cookie.set(e, "", -1, t, !1, !1, r)
                }
            };
            var M = null,
                P = function(e, t) {
                    if (null !== M && !t) return M;
                    var r = !0;
                    try {
                        e = e || window.localStorage;
                        var i = "__mplss_" + R(8);
                        e.setItem(i, "xyz"), "xyz" !== e.getItem(i) && (r = !1), e.removeItem(i)
                    } catch (e) {
                        r = !1
                    }
                    return M = r, r
                };
            U.localStorage = {
                is_supported: function(e) {
                    var t = P(null, e);
                    return t || $.error("localStorage unsupported; falling back to cookie store"), t
                },
                error: function(e) {
                    $.error("localStorage error: " + e)
                },
                get: function(e) {
                    try {
                        return window.localStorage.getItem(e)
                    } catch (e) {
                        U.localStorage.error(e)
                    }
                    return null
                },
                parse: function(e) {
                    try {
                        return U.JSONDecode(U.localStorage.get(e)) || {}
                    } catch (e) {}
                    return null
                },
                set: function(e, t) {
                    try {
                        window.localStorage.setItem(e, t)
                    } catch (e) {
                        U.localStorage.error(e)
                    }
                },
                remove: function(e) {
                    try {
                        window.localStorage.removeItem(e)
                    } catch (e) {
                        U.localStorage.error(e)
                    }
                }
            }, U.register_event = function() {
                function e(t) {
                    return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
                }
                return e.preventDefault = function() {
                        this.returnValue = !1
                    }, e.stopPropagation = function() {
                        this.cancelBubble = !0
                    },
                    function(t, r, i, o, n) {
                        if (t)
                            if (t.addEventListener && !o) t.addEventListener(r, i, !!n);
                            else {
                                var s = "on" + r,
                                    a = t[s];
                                t[s] = function(t, r, i) {
                                    return function(o) {
                                        if (o = o || e(window.event)) {
                                            var n, s, a = !0;
                                            return U.isFunction(i) && (n = i(o)), s = r.call(t, o), !1 !== n && !1 !== s || (a = !1), a
                                        }
                                    }
                                }(t, i, a)
                            }
                        else $.error("No valid element provided to register_event")
                    }
            }();
            var F = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
            U.dom_query = function() {
                function e(e) {
                    return e.all ? e.all : e.getElementsByTagName("*")
                }
                var t = /[\t\r\n]/g;

                function r(e, r) {
                    var i = " " + r + " ";
                    return (" " + e.className + " ").replace(t, " ").indexOf(i) >= 0
                }

                function i(t) {
                    if (!w.getElementsByTagName) return [];
                    var i, o, n, s, a, c, p, u, _, h, f = t.split(" "),
                        l = [w];
                    for (c = 0; c < f.length; c++)
                        if ((i = f[c].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
                            n = (o = i.split("#"))[0];
                            var d = o[1],
                                g = w.getElementById(d);
                            if (!g || n && g.nodeName.toLowerCase() != n) return [];
                            l = [g]
                        } else if (i.indexOf(".") > -1) {
                        n = (o = i.split("."))[0];
                        var y = o[1];
                        for (n || (n = "*"), s = [], a = 0, p = 0; p < l.length; p++)
                            for (_ = "*" == n ? e(l[p]) : l[p].getElementsByTagName(n), u = 0; u < _.length; u++) s[a++] = _[u];
                        for (l = [], h = 0, p = 0; p < s.length; p++) s[p].className && U.isString(s[p].className) && r(s[p], y) && (l[h++] = s[p])
                    } else {
                        var m = i.match(F);
                        if (m) {
                            n = m[1];
                            var v, b = m[2],
                                k = m[3],
                                x = m[4];
                            for (n || (n = "*"), s = [], a = 0, p = 0; p < l.length; p++)
                                for (_ = "*" == n ? e(l[p]) : l[p].getElementsByTagName(n), u = 0; u < _.length; u++) s[a++] = _[u];
                            switch (l = [], h = 0, k) {
                                case "=":
                                    v = function(e) {
                                        return e.getAttribute(b) == x
                                    };
                                    break;
                                case "~":
                                    v = function(e) {
                                        return e.getAttribute(b).match(new RegExp("\\b" + x + "\\b"))
                                    };
                                    break;
                                case "|":
                                    v = function(e) {
                                        return e.getAttribute(b).match(new RegExp("^" + x + "-?"))
                                    };
                                    break;
                                case "^":
                                    v = function(e) {
                                        return 0 === e.getAttribute(b).indexOf(x)
                                    };
                                    break;
                                case "$":
                                    v = function(e) {
                                        return e.getAttribute(b).lastIndexOf(x) == e.getAttribute(b).length - x.length
                                    };
                                    break;
                                case "*":
                                    v = function(e) {
                                        return e.getAttribute(b).indexOf(x) > -1
                                    };
                                    break;
                                default:
                                    v = function(e) {
                                        return e.getAttribute(b)
                                    }
                            }
                            for (l = [], h = 0, p = 0; p < s.length; p++) v(s[p]) && (l[h++] = s[p])
                        } else {
                            for (n = i, s = [], a = 0, p = 0; p < l.length; p++)
                                for (_ = l[p].getElementsByTagName(n), u = 0; u < _.length; u++) s[a++] = _[u];
                            l = s
                        }
                    }
                    return l
                }
                return function(e) {
                    return U.isElement(e) ? [e] : U.isObject(e) && !U.isUndefined(e.length) ? e : i.call(this, e)
                }
            }(), U.info = {
                campaignParams: function() {
                    var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                        t = "",
                        r = {};
                    return U.each(e, (function(e) {
                        (t = U.getQueryParam(w.URL, e)).length && (r[e] = t)
                    })), r
                },
                searchEngine: function(e) {
                    return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
                },
                searchInfo: function(e) {
                    var t = U.info.searchEngine(e),
                        r = "yahoo" != t ? "q" : "p",
                        i = {};
                    if (null !== t) {
                        i.$search_engine = t;
                        var o = U.getQueryParam(e, r);
                        o.length && (i.mp_keyword = o)
                    }
                    return i
                },
                browser: function(e, t, r) {
                    return t = t || "", r || U.includes(e, " OPR/") ? U.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : U.includes(e, "IEMobile") || U.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : U.includes(e, "SamsungBrowser/") ? "Samsung Internet" : U.includes(e, "Edge") || U.includes(e, "Edg/") ? "Microsoft Edge" : U.includes(e, "FBIOS") ? "Facebook Mobile" : U.includes(e, "Chrome") ? "Chrome" : U.includes(e, "CriOS") ? "Chrome iOS" : U.includes(e, "UCWEB") || U.includes(e, "UCBrowser") ? "UC Browser" : U.includes(e, "FxiOS") ? "Firefox iOS" : U.includes(t, "Apple") ? U.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : U.includes(e, "Android") ? "Android Mobile" : U.includes(e, "Konqueror") ? "Konqueror" : U.includes(e, "Firefox") ? "Firefox" : U.includes(e, "MSIE") || U.includes(e, "Trident/") ? "Internet Explorer" : U.includes(e, "Gecko") ? "Mozilla" : ""
                },
                browserVersion: function(e, t, r) {
                    var i = {
                        "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                        "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                        Chrome: /Chrome\/(\d+(\.\d+)?)/,
                        "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                        "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                        Safari: /Version\/(\d+(\.\d+)?)/,
                        "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                        Firefox: /Firefox\/(\d+(\.\d+)?)/,
                        "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                        "Android Mobile": /android\s(\d+(\.\d+)?)/,
                        "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                        "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                        Mozilla: /rv:(\d+(\.\d+)?)/
                    }[U.info.browser(e, t, r)];
                    if (void 0 === i) return null;
                    var o = e.match(i);
                    return o ? parseFloat(o[o.length - 2]) : null
                },
                os: function() {
                    var e = E;
                    return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
                },
                device: function(e) {
                    return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : ""
                },
                referringDomain: function(e) {
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : ""
                },
                properties: function() {
                    return U.extend(U.strip_empty_properties({
                        $os: U.info.os(),
                        $browser: U.info.browser(E, x.vendor, q),
                        $referrer: w.referrer,
                        $referring_domain: U.info.referringDomain(w.referrer),
                        $device: U.info.device(E)
                    }), {
                        $current_url: t.location.href,
                        $browser_version: U.info.browserVersion(E, x.vendor, q),
                        $screen_height: S.height,
                        $screen_width: S.width,
                        mp_lib: "web",
                        $lib_version: r.LIB_VERSION,
                        $insert_id: R(),
                        time: U.timestamp() / 1e3
                    })
                },
                people_properties: function() {
                    return U.extend(U.strip_empty_properties({
                        $os: U.info.os(),
                        $browser: U.info.browser(E, x.vendor, q)
                    }), {
                        $browser_version: U.info.browserVersion(E, x.vendor, q)
                    })
                },
                pageviewInfo: function(e) {
                    return U.strip_empty_properties({
                        mp_page: e,
                        mp_referrer: w.referrer,
                        mp_browser: U.info.browser(E, x.vendor, q),
                        mp_platform: U.info.os()
                    })
                }
            };
            var R = function(e) {
                    var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
                    return e ? t.substring(0, e) : t
                },
                z = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
                L = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
                J = function(e) {
                    var t = L,
                        r = e.split("."),
                        i = r[r.length - 1];
                    (i.length > 4 || "com" === i || "org" === i) && (t = z);
                    var o = e.match(t);
                    return o ? o[0] : ""
                },
                Q = null,
                H = null;
            "undefined" !== typeof JSON && (Q = JSON.stringify, H = JSON.parse), Q = Q || U.JSONEncode, H = H || U.JSONDecode, U.toArray = U.toArray, U.isObject = U.isObject, U.JSONEncode = U.JSONEncode, U.JSONDecode = U.JSONDecode, U.isBlockedUA = U.isBlockedUA, U.isEmptyObject = U.isEmptyObject, U.info = U.info, U.info.device = U.info.device, U.info.browser = U.info.browser, U.info.browserVersion = U.info.browserVersion, U.info.properties = U.info.properties;
            var K = function() {};
            K.prototype.create_properties = function() {}, K.prototype.event_handler = function() {}, K.prototype.after_track_handler = function() {}, K.prototype.init = function(e) {
                return this.mp = e, this
            }, K.prototype.track = function(e, t, r, i) {
                var o = this,
                    n = U.dom_query(e);
                if (0 !== n.length) return U.each(n, (function(e) {
                    U.register_event(e, this.override_event, (function(e) {
                        var n = {},
                            s = o.create_properties(r, this),
                            a = o.mp.get_config("track_links_timeout");
                        o.event_handler(e, this, n), window.setTimeout(o.track_callback(i, s, n, !0), a), o.mp.track(t, s, o.track_callback(i, s, n))
                    }))
                }), this), !0;
                $.error("The DOM query (" + e + ") returned 0 elements")
            }, K.prototype.track_callback = function(e, t, r, i) {
                i = i || !1;
                var o = this;
                return function() {
                    r.callback_fired || (r.callback_fired = !0, e && !1 === e(i, t) || o.after_track_handler(t, r, i))
                }
            }, K.prototype.create_properties = function(e, t) {
                return "function" === typeof e ? e(t) : U.extend({}, e)
            };
            var G = function() {
                this.override_event = "click"
            };
            U.inherit(G, K), G.prototype.create_properties = function(e, t) {
                var r = G.superclass.create_properties.apply(this, arguments);
                return t.href && (r.url = t.href), r
            }, G.prototype.event_handler = function(e, t, r) {
                r.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target, r.href = t.href, r.new_tab || e.preventDefault()
            }, G.prototype.after_track_handler = function(e, t) {
                t.new_tab || setTimeout((function() {
                    window.location = t.href
                }), 0)
            };
            var V = function() {
                this.override_event = "submit"
            };
            U.inherit(V, K), V.prototype.event_handler = function(e, t, r) {
                r.element = t, e.preventDefault()
            }, V.prototype.after_track_handler = function(e, t) {
                setTimeout((function() {
                    t.element.submit()
                }), 0)
            };
            var W = j("lock"),
                X = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.pollIntervalMS = t.pollIntervalMS || 100, this.timeoutMS = t.timeoutMS || 2e3
                };
            X.prototype.withLock = function(e, t, r) {
                r || "function" === typeof t || (r = t, t = null);
                var i = r || (new Date).getTime() + "|" + Math.random(),
                    o = (new Date).getTime(),
                    n = this.storageKey,
                    s = this.pollIntervalMS,
                    a = this.timeoutMS,
                    c = this.storage,
                    p = n + ":X",
                    u = n + ":Y",
                    _ = n + ":Z",
                    h = function(e) {
                        t && t(e)
                    },
                    f = function(e) {
                        if ((new Date).getTime() - o > a) return W.error("Timeout waiting for mutex on " + n + "; clearing lock. [" + i + "]"), c.removeItem(_), c.removeItem(u), void g();
                        setTimeout((function() {
                            try {
                                e()
                            } catch (e) {
                                h(e)
                            }
                        }), s * (Math.random() + .1))
                    },
                    l = function(e, t) {
                        e() ? t() : f((function() {
                            l(e, t)
                        }))
                    },
                    d = function() {
                        var e = c.getItem(u);
                        if (e && e !== i) return !1;
                        if (c.setItem(u, i), c.getItem(u) === i) return !0;
                        if (!P(c, !0)) throw new Error("localStorage support dropped while acquiring lock");
                        return !1
                    },
                    g = function() {
                        c.setItem(p, i), l(d, (function() {
                            c.getItem(p) !== i ? f((function() {
                                c.getItem(u) === i ? l((function() {
                                    return !c.getItem(_)
                                }), y) : g()
                            })) : y()
                        }))
                    },
                    y = function() {
                        c.setItem(_, "1");
                        try {
                            e()
                        } finally {
                            c.removeItem(_), c.getItem(u) === i && c.removeItem(u), c.getItem(p) === i && c.removeItem(p)
                        }
                    };
                try {
                    if (!P(c, !0)) throw new Error("localStorage support check failed");
                    g()
                } catch (e) {
                    h(e)
                }
            };
            var Y = j("batch"),
                Z = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.reportError = t.errorReporter || U.bind(Y.error, Y), this.lock = new X(e, {
                        storage: this.storage
                    }), this.pid = t.pid || null, this.memQueue = []
                };
            Z.prototype.enqueue = function(e, t, r) {
                var i = {
                    id: R(),
                    flushAfter: (new Date).getTime() + 2 * t,
                    payload: e
                };
                this.lock.withLock(U.bind((function() {
                    var t;
                    try {
                        var o = this.readFromStorage();
                        o.push(i), (t = this.saveToStorage(o)) && this.memQueue.push(i)
                    } catch (r) {
                        this.reportError("Error enqueueing item", e), t = !1
                    }
                    r && r(t)
                }), this), U.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e), r && r(!1)
                }), this), this.pid)
            }, Z.prototype.fillBatch = function(e) {
                var t = this.memQueue.slice(0, e);
                if (t.length < e) {
                    var r = this.readFromStorage();
                    if (r.length) {
                        var i = {};
                        U.each(t, (function(e) {
                            i[e.id] = !0
                        }));
                        for (var o = 0; o < r.length; o++) {
                            var n = r[o];
                            if ((new Date).getTime() > n.flushAfter && !i[n.id] && (n.orphaned = !0, t.push(n), t.length >= e)) break
                        }
                    }
                }
                return t
            };
            var ee = function(e, t) {
                var r = [];
                return U.each(e, (function(e) {
                    e.id && !t[e.id] && r.push(e)
                })), r
            };
            Z.prototype.removeItemsByID = function(e, t) {
                var r = {};
                U.each(e, (function(e) {
                    r[e] = !0
                })), this.memQueue = ee(this.memQueue, r);
                var i = U.bind((function() {
                    var t;
                    try {
                        var i = this.readFromStorage();
                        if (i = ee(i, r), t = this.saveToStorage(i)) {
                            i = this.readFromStorage();
                            for (var o = 0; o < i.length; o++) {
                                var n = i[o];
                                if (n.id && r[n.id]) return this.reportError("Item not removed from storage"), !1
                            }
                        }
                    } catch (r) {
                        this.reportError("Error removing items", e), t = !1
                    }
                    return t
                }), this);
                this.lock.withLock((function() {
                    var e = i();
                    t && t(e)
                }), U.bind((function(e) {
                    var r = !1;
                    if (this.reportError("Error acquiring storage lock", e), !P(this.storage, !0) && !(r = i())) try {
                        this.storage.removeItem(this.storageKey)
                    } catch (e) {
                        this.reportError("Error clearing queue", e)
                    }
                    t && t(r)
                }), this), this.pid)
            };
            var te = function(e, t) {
                var r = [];
                return U.each(e, (function(e) {
                    var i = e.id;
                    if (i in t) {
                        var o = t[i];
                        null !== o && (e.payload = o, r.push(e))
                    } else r.push(e)
                })), r
            };
            Z.prototype.updatePayloads = function(e, t) {
                this.memQueue = te(this.memQueue, e), this.lock.withLock(U.bind((function() {
                    var r;
                    try {
                        var i = this.readFromStorage();
                        i = te(i, e), r = this.saveToStorage(i)
                    } catch (t) {
                        this.reportError("Error updating items", e), r = !1
                    }
                    t && t(r)
                }), this), U.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e), t && t(!1)
                }), this), this.pid)
            }, Z.prototype.readFromStorage = function() {
                var e;
                try {
                    (e = this.storage.getItem(this.storageKey)) && (e = H(e), U.isArray(e) || (this.reportError("Invalid storage entry:", e), e = null))
                } catch (t) {
                    this.reportError("Error retrieving queue", t), e = null
                }
                return e || []
            }, Z.prototype.saveToStorage = function(e) {
                try {
                    return this.storage.setItem(this.storageKey, Q(e)), !0
                } catch (e) {
                    return this.reportError("Error saving queue", e), !1
                }
            }, Z.prototype.clear = function() {
                this.memQueue = [], this.storage.removeItem(this.storageKey)
            };
            var re = j("batch"),
                ie = function(e, t) {
                    this.errorReporter = t.errorReporter, this.queue = new Z(e, {
                        errorReporter: U.bind(this.reportError, this),
                        storage: t.storage
                    }), this.libConfig = t.libConfig, this.sendRequest = t.sendRequestFunc, this.beforeSendHook = t.beforeSendHook, this.stopAllBatching = t.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
                };
            ie.prototype.enqueue = function(e, t) {
                this.queue.enqueue(e, this.flushInterval, t)
            }, ie.prototype.start = function() {
                this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
            }, ie.prototype.stop = function() {
                this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
            }, ie.prototype.clear = function() {
                this.queue.clear()
            }, ie.prototype.resetBatchSize = function() {
                this.batchSize = this.libConfig.batch_size
            }, ie.prototype.resetFlush = function() {
                this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
            }, ie.prototype.scheduleFlush = function(e) {
                this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(U.bind(this.flush, this), this.flushInterval))
            }, ie.prototype.flush = function(e) {
                try {
                    if (this.requestInProgress) return void re.log("Flush: Request already in progress");
                    e = e || {};
                    var t = this.libConfig.batch_request_timeout_ms,
                        r = (new Date).getTime(),
                        i = this.batchSize,
                        o = this.queue.fillBatch(i),
                        n = [],
                        s = {};
                    if (U.each(o, (function(e) {
                            var t = e.payload;
                            this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)), t && n.push(t), s[e.id] = t
                        }), this), n.length < 1) return void this.resetFlush();
                    this.requestInProgress = !0;
                    var a = U.bind((function(n) {
                            this.requestInProgress = !1;
                            try {
                                var a = !1;
                                if (e.unloading) this.queue.updatePayloads(s);
                                else if (U.isObject(n) && "timeout" === n.error && (new Date).getTime() - r >= t) this.reportError("Network timeout; retrying"), this.flush();
                                else if (U.isObject(n) && n.xhr_req && (n.xhr_req.status >= 500 || 429 === n.xhr_req.status || "timeout" === n.error)) {
                                    var c = 2 * this.flushInterval,
                                        p = n.xhr_req.responseHeaders;
                                    if (p) {
                                        var u = p["Retry-After"];
                                        u && (c = 1e3 * parseInt(u, 10) || c)
                                    }
                                    c = Math.min(6e5, c), this.reportError("Error; retry in " + c + " ms"), this.scheduleFlush(c)
                                } else if (U.isObject(n) && n.xhr_req && 413 === n.xhr_req.status)
                                    if (o.length > 1) {
                                        var _ = Math.max(1, Math.floor(i / 2));
                                        this.batchSize = Math.min(this.batchSize, _, o.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                                    } else this.reportError("Single-event request too large; dropping", o), this.resetBatchSize(), a = !0;
                                else a = !0;
                                a && this.queue.removeItemsByID(U.map(o, (function(e) {
                                    return e.id
                                })), U.bind((function(e) {
                                    e ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                                }), this))
                            } catch (e) {
                                this.reportError("Error handling API response", e), this.resetFlush()
                            }
                        }), this),
                        c = {
                            method: "POST",
                            verbose: !0,
                            ignore_json_errors: !0,
                            timeout_ms: t
                        };
                    e.unloading && (c.transport = "sendBeacon"), re.log("MIXPANEL REQUEST:", n), this.sendRequest(n, c, a)
                } catch (e) {
                    this.reportError("Error flushing request queue", e), this.resetFlush()
                }
            }, ie.prototype.reportError = function(e, t) {
                if (re.error.apply(re.error, arguments), this.errorReporter) try {
                    t instanceof Error || (t = new Error(e)), this.errorReporter(e, t)
                } catch (t) {
                    re.error(t)
                }
            };
            var oe = "__mp_opt_in_out_";

            function ne(e, t) {
                ge(!0, e, t)
            }

            function se(e, t) {
                ge(!1, e, t)
            }

            function ae(e, t) {
                return "1" === de(e, t)
            }

            function ce(e, r) {
                if (function(e) {
                        if (e && e.ignoreDnt) return !1;
                        var r = e && e.window || t,
                            i = r.navigator || {},
                            o = !1;
                        return U.each([i.doNotTrack, i.msDoNotTrack, r.doNotTrack], (function(e) {
                            U.includes([!0, 1, "1", "yes"], e) && (o = !0)
                        })), o
                    }(r)) return $.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
                var i = "0" === de(e, r);
                return i && $.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), i
            }

            function pe(e) {
                return ye(e, (function(e) {
                    return this.get_config(e)
                }))
            }

            function ue(e) {
                return ye(e, (function(e) {
                    return this._get_config(e)
                }))
            }

            function _e(e) {
                return ye(e, (function(e) {
                    return this._get_config(e)
                }))
            }

            function he(e, t) {
                fe(t = t || {}).remove(le(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
            }

            function fe(e) {
                return "localStorage" === (e = e || {}).persistenceType ? U.localStorage : U.cookie
            }

            function le(e, t) {
                return ((t = t || {}).persistencePrefix || oe) + e
            }

            function de(e, t) {
                return fe(t).get(le(e, t))
            }

            function ge(e, t, r) {
                U.isString(t) && t.length ? (fe(r = r || {}).set(le(t, r), e ? 1 : 0, U.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && e && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
                    send_immediately: !0
                })) : $.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
            }

            function ye(e, t) {
                return function() {
                    var r = !1;
                    try {
                        var i = t.call(this, "token"),
                            o = t.call(this, "ignore_dnt"),
                            n = t.call(this, "opt_out_tracking_persistence_type"),
                            s = t.call(this, "opt_out_tracking_cookie_prefix"),
                            a = t.call(this, "window");
                        i && (r = ce(i, {
                            ignoreDnt: o,
                            persistenceType: n,
                            persistencePrefix: s,
                            window: a
                        }))
                    } catch (e) {
                        $.error("Unexpected error when checking tracking opt-out status: " + e)
                    }
                    if (!r) return e.apply(this, arguments);
                    var c = arguments[arguments.length - 1];
                    "function" === typeof c && c(0)
                }
            }
            var me = "$set",
                ve = "$set_once",
                be = "$unset",
                ke = "$add",
                xe = "$append",
                we = "$union",
                qe = "$remove",
                Se = {
                    set_action: function(e, t) {
                        var r = {},
                            i = {};
                        return U.isObject(e) ? U.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r[me] = i, r
                    },
                    unset_action: function(e) {
                        var t = {},
                            r = [];
                        return U.isArray(e) || (e = [e]), U.each(e, (function(e) {
                            this._is_reserved_property(e) || r.push(e)
                        }), this), t[be] = r, t
                    },
                    set_once_action: function(e, t) {
                        var r = {},
                            i = {};
                        return U.isObject(e) ? U.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r[ve] = i, r
                    },
                    union_action: function(e, t) {
                        var r = {},
                            i = {};
                        return U.isObject(e) ? U.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = U.isArray(e) ? e : [e])
                        }), this) : i[e] = U.isArray(t) ? t : [t], r[we] = i, r
                    },
                    append_action: function(e, t) {
                        var r = {},
                            i = {};
                        return U.isObject(e) ? U.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r[xe] = i, r
                    },
                    remove_action: function(e, t) {
                        var r = {},
                            i = {};
                        return U.isObject(e) ? U.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r[qe] = i, r
                    },
                    delete_action: function() {
                        return {
                            $delete: ""
                        }
                    }
                },
                Ee = function() {};
            U.extend(Ee.prototype, Se), Ee.prototype._init = function(e, t, r) {
                this._mixpanel = e, this._group_key = t, this._group_id = r
            }, Ee.prototype.set = _e((function(e, t, r) {
                var i = this.set_action(e, t);
                return U.isObject(e) && (r = t), this._send_request(i, r)
            })), Ee.prototype.set_once = _e((function(e, t, r) {
                var i = this.set_once_action(e, t);
                return U.isObject(e) && (r = t), this._send_request(i, r)
            })), Ee.prototype.unset = _e((function(e, t) {
                var r = this.unset_action(e);
                return this._send_request(r, t)
            })), Ee.prototype.union = _e((function(e, t, r) {
                U.isObject(e) && (r = t);
                var i = this.union_action(e, t);
                return this._send_request(i, r)
            })), Ee.prototype.delete = _e((function(e) {
                var t = this.delete_action();
                return this._send_request(t, e)
            })), Ee.prototype.remove = _e((function(e, t, r) {
                var i = this.remove_action(e, t);
                return this._send_request(i, r)
            })), Ee.prototype._send_request = function(e, t) {
                e.$group_key = this._group_key, e.$group_id = this._group_id, e.$token = this._get_config("token");
                var r = U.encodeDates(e);
                return this._mixpanel._track_or_batch({
                    type: "groups",
                    data: r,
                    endpoint: this._get_config("api_host") + "/groups/",
                    batcher: this._mixpanel.request_batchers.groups
                }, t)
            }, Ee.prototype._is_reserved_property = function(e) {
                return "$group_key" === e || "$group_id" === e
            }, Ee.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, Ee.prototype.toString = function() {
                return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
            }, Ee.prototype.remove = Ee.prototype.remove, Ee.prototype.set = Ee.prototype.set, Ee.prototype.set_once = Ee.prototype.set_once, Ee.prototype.union = Ee.prototype.union, Ee.prototype.unset = Ee.prototype.unset, Ee.prototype.toString = Ee.prototype.toString;
            var Oe = function() {};
            U.extend(Oe.prototype, Se), Oe.prototype._init = function(e) {
                this._mixpanel = e
            }, Oe.prototype.set = ue((function(e, t, r) {
                var i = this.set_action(e, t);
                return U.isObject(e) && (r = t), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), i[me] = U.extend({}, U.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), i[me]), this._send_request(i, r)
            })), Oe.prototype.set_once = ue((function(e, t, r) {
                var i = this.set_once_action(e, t);
                return U.isObject(e) && (r = t), this._send_request(i, r)
            })), Oe.prototype.unset = ue((function(e, t) {
                var r = this.unset_action(e);
                return this._send_request(r, t)
            })), Oe.prototype.increment = ue((function(e, t, r) {
                var i = {},
                    o = {};
                return U.isObject(e) ? (U.each(e, (function(e, t) {
                    if (!this._is_reserved_property(t)) {
                        if (isNaN(parseFloat(e))) return void $.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                        o[t] = e
                    }
                }), this), r = t) : (U.isUndefined(t) && (t = 1), o[e] = t), i[ke] = o, this._send_request(i, r)
            })), Oe.prototype.append = ue((function(e, t, r) {
                U.isObject(e) && (r = t);
                var i = this.append_action(e, t);
                return this._send_request(i, r)
            })), Oe.prototype.remove = ue((function(e, t, r) {
                U.isObject(e) && (r = t);
                var i = this.remove_action(e, t);
                return this._send_request(i, r)
            })), Oe.prototype.union = ue((function(e, t, r) {
                U.isObject(e) && (r = t);
                var i = this.union_action(e, t);
                return this._send_request(i, r)
            })), Oe.prototype.track_charge = ue((function(e, t, r) {
                if (U.isNumber(e) || (e = parseFloat(e), !isNaN(e))) return this.append("$transactions", U.extend({
                    $amount: e
                }, t), r);
                $.error("Invalid value passed to mixpanel.people.track_charge - must be a number")
            })), Oe.prototype.clear_charges = function(e) {
                return this.set("$transactions", [], e)
            }, Oe.prototype.delete_user = function() {
                if (this._identify_called()) {
                    var e = {
                        $delete: this._mixpanel.get_distinct_id()
                    };
                    return this._send_request(e)
                }
                $.error("mixpanel.people.delete_user() requires you to call identify() first")
            }, Oe.prototype.toString = function() {
                return this._mixpanel.toString() + ".people"
            }, Oe.prototype._send_request = function(e, t) {
                e.$token = this._get_config("token"), e.$distinct_id = this._mixpanel.get_distinct_id();
                var r = this._mixpanel.get_property("$device_id"),
                    i = this._mixpanel.get_property("$user_id"),
                    o = this._mixpanel.get_property("$had_persisted_distinct_id");
                r && (e.$device_id = r), i && (e.$user_id = i), o && (e.$had_persisted_distinct_id = o);
                var n = U.encodeDates(e);
                return this._identify_called() ? this._mixpanel._track_or_batch({
                    type: "people",
                    data: n,
                    endpoint: this._get_config("api_host") + "/engage/",
                    batcher: this._mixpanel.request_batchers.people
                }, t) : (this._enqueue(e), U.isUndefined(t) || (this._get_config("verbose") ? t({
                    status: -1,
                    error: null
                }) : t(-1)), U.truncate(n, 255))
            }, Oe.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, Oe.prototype._identify_called = function() {
                return !0 === this._mixpanel._flags.identify_called
            }, Oe.prototype._enqueue = function(e) {
                me in e ? this._mixpanel.persistence._add_to_people_queue(me, e) : ve in e ? this._mixpanel.persistence._add_to_people_queue(ve, e) : be in e ? this._mixpanel.persistence._add_to_people_queue(be, e) : ke in e ? this._mixpanel.persistence._add_to_people_queue(ke, e) : xe in e ? this._mixpanel.persistence._add_to_people_queue(xe, e) : qe in e ? this._mixpanel.persistence._add_to_people_queue(qe, e) : we in e ? this._mixpanel.persistence._add_to_people_queue(we, e) : $.error("Invalid call to _enqueue():", e)
            }, Oe.prototype._flush_one_queue = function(e, t, r, i) {
                var o = this,
                    n = U.extend({}, this._mixpanel.persistence._get_queue(e)),
                    s = n;
                U.isUndefined(n) || !U.isObject(n) || U.isEmptyObject(n) || (o._mixpanel.persistence._pop_from_people_queue(e, n), i && (s = i(n)), t.call(o, s, (function(t, i) {
                    0 === t && o._mixpanel.persistence._add_to_people_queue(e, n), U.isUndefined(r) || r(t, i)
                })))
            }, Oe.prototype._flush = function(e, t, r, i, o, n, s) {
                var a = this,
                    c = this._mixpanel.persistence._get_queue(xe),
                    p = this._mixpanel.persistence._get_queue(qe);
                if (this._flush_one_queue(me, this.set, e), this._flush_one_queue(ve, this.set_once, i), this._flush_one_queue(be, this.unset, n, (function(e) {
                        return U.keys(e)
                    })), this._flush_one_queue(ke, this.increment, t), this._flush_one_queue(we, this.union, o), !U.isUndefined(c) && U.isArray(c) && c.length) {
                    for (var u, _ = function(e, t) {
                            0 === e && a._mixpanel.persistence._add_to_people_queue(xe, u), U.isUndefined(r) || r(e, t)
                        }, h = c.length - 1; h >= 0; h--) u = c.pop(), U.isEmptyObject(u) || a.append(u, _);
                    a._mixpanel.persistence.save()
                }
                if (!U.isUndefined(p) && U.isArray(p) && p.length) {
                    for (var f, l = function(e, t) {
                            0 === e && a._mixpanel.persistence._add_to_people_queue(qe, f), U.isUndefined(s) || s(e, t)
                        }, d = p.length - 1; d >= 0; d--) f = p.pop(), U.isEmptyObject(f) || a.remove(f, l);
                    a._mixpanel.persistence.save()
                }
            }, Oe.prototype._is_reserved_property = function(e) {
                return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
            }, Oe.prototype.set = Oe.prototype.set, Oe.prototype.set_once = Oe.prototype.set_once, Oe.prototype.unset = Oe.prototype.unset, Oe.prototype.increment = Oe.prototype.increment, Oe.prototype.append = Oe.prototype.append, Oe.prototype.remove = Oe.prototype.remove, Oe.prototype.union = Oe.prototype.union, Oe.prototype.track_charge = Oe.prototype.track_charge, Oe.prototype.clear_charges = Oe.prototype.clear_charges, Oe.prototype.delete_user = Oe.prototype.delete_user, Oe.prototype.toString = Oe.prototype.toString;
            var Ie, De, Ae = "__mps",
                Te = "__mpso",
                Be = "__mpus",
                Ue = "__mpa",
                $e = "__mpap",
                Ce = "__mpr",
                je = "__mpu",
                Ne = "$people_distinct_id",
                Me = "__alias",
                Pe = "__timers",
                Fe = [Ae, Te, Be, Ue, $e, Ce, je, Ne, Me, Pe],
                Re = function(e) {
                    this.props = {}, this.campaign_params_saved = !1, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
                    var t = e.persistence;
                    "cookie" !== t && "localStorage" !== t && ($.critical("Unknown persistence type " + t + "; falling back to cookie"), t = e.persistence = "cookie"), "localStorage" === t && U.localStorage.is_supported() ? this.storage = U.localStorage : this.storage = U.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save()
                };
            Re.prototype.properties = function() {
                var e = {};
                return U.each(this.props, (function(t, r) {
                    U.include(Fe, r) || (e[r] = t)
                })), e
            }, Re.prototype.load = function() {
                if (!this.disabled) {
                    var e = this.storage.parse(this.name);
                    e && (this.props = U.extend({}, e))
                }
            }, Re.prototype.upgrade = function(e) {
                var t, r, i = e.upgrade;
                i && (t = "mp_super_properties", "string" === typeof i && (t = i), r = this.storage.parse(t), this.storage.remove(t), this.storage.remove(t, !0), r && (this.props = U.extend(this.props, r.all, r.events))), e.cookie_name || "mixpanel" === e.name || (t = "mp_" + e.token + "_" + e.name, (r = this.storage.parse(t)) && (this.storage.remove(t), this.storage.remove(t, !0), this.register_once(r))), this.storage === U.localStorage && (r = U.cookie.parse(this.name), U.cookie.remove(this.name), U.cookie.remove(this.name, !0), r && this.register_once(r))
            }, Re.prototype.save = function() {
                this.disabled || this.storage.set(this.name, U.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
            }, Re.prototype.remove = function() {
                this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
            }, Re.prototype.clear = function() {
                this.remove(), this.props = {}
            }, Re.prototype.register_once = function(e, t, r) {
                return !!U.isObject(e) && ("undefined" === typeof t && (t = "None"), this.expire_days = "undefined" === typeof r ? this.default_expiry : r, U.each(e, (function(e, r) {
                    this.props.hasOwnProperty(r) && this.props[r] !== t || (this.props[r] = e)
                }), this), this.save(), !0)
            }, Re.prototype.register = function(e, t) {
                return !!U.isObject(e) && (this.expire_days = "undefined" === typeof t ? this.default_expiry : t, U.extend(this.props, e), this.save(), !0)
            }, Re.prototype.unregister = function(e) {
                e in this.props && (delete this.props[e], this.save())
            }, Re.prototype.update_campaign_params = function() {
                this.campaign_params_saved || (this.register_once(U.info.campaignParams()), this.campaign_params_saved = !0)
            }, Re.prototype.update_search_keyword = function(e) {
                this.register(U.info.searchInfo(e))
            }, Re.prototype.update_referrer_info = function(e) {
                this.register_once({
                    $initial_referrer: e || "$direct",
                    $initial_referring_domain: U.info.referringDomain(e) || "$direct"
                }, "")
            }, Re.prototype.get_referrer_info = function() {
                return U.strip_empty_properties({
                    $initial_referrer: this.props.$initial_referrer,
                    $initial_referring_domain: this.props.$initial_referring_domain
                })
            }, Re.prototype.safe_merge = function(e) {
                return U.each(this.props, (function(t, r) {
                    r in e || (e[r] = t)
                })), e
            }, Re.prototype.update_config = function(e) {
                this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie)
            }, Re.prototype.set_disabled = function(e) {
                this.disabled = e, this.disabled ? this.remove() : this.save()
            }, Re.prototype.set_cookie_domain = function(e) {
                e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save())
            }, Re.prototype.set_cross_site = function(e) {
                e !== this.cross_site && (this.cross_site = e, this.remove(), this.save())
            }, Re.prototype.set_cross_subdomain = function(e) {
                e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
            }, Re.prototype.get_cross_subdomain = function() {
                return this.cross_subdomain
            }, Re.prototype.set_secure = function(e) {
                e !== this.secure && (this.secure = !!e, this.remove(), this.save())
            }, Re.prototype._add_to_people_queue = function(e, t) {
                var r = this._get_queue_key(e),
                    i = t[e],
                    o = this._get_or_create_queue(me),
                    n = this._get_or_create_queue(ve),
                    s = this._get_or_create_queue(be),
                    a = this._get_or_create_queue(ke),
                    c = this._get_or_create_queue(we),
                    p = this._get_or_create_queue(qe, []),
                    u = this._get_or_create_queue(xe, []);
                r === Ae ? (U.extend(o, i), this._pop_from_people_queue(ke, i), this._pop_from_people_queue(we, i), this._pop_from_people_queue(be, i)) : r === Te ? (U.each(i, (function(e, t) {
                    t in n || (n[t] = e)
                })), this._pop_from_people_queue(be, i)) : r === Be ? U.each(i, (function(e) {
                    U.each([o, n, a, c], (function(t) {
                        e in t && delete t[e]
                    })), U.each(u, (function(t) {
                        e in t && delete t[e]
                    })), s[e] = !0
                })) : r === Ue ? (U.each(i, (function(e, t) {
                    t in o ? o[t] += e : (t in a || (a[t] = 0), a[t] += e)
                }), this), this._pop_from_people_queue(be, i)) : r === je ? (U.each(i, (function(e, t) {
                    U.isArray(e) && (t in c || (c[t] = []), c[t] = c[t].concat(e))
                })), this._pop_from_people_queue(be, i)) : r === Ce ? (p.push(i), this._pop_from_people_queue(xe, i)) : r === $e && (u.push(i), this._pop_from_people_queue(be, i)), $.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), $.log(t), this.save()
            }, Re.prototype._pop_from_people_queue = function(e, t) {
                var r = this._get_queue(e);
                U.isUndefined(r) || (U.each(t, (function(t, i) {
                    e === xe || e === qe ? U.each(r, (function(e) {
                        e[i] === t && delete e[i]
                    })) : delete r[i]
                }), this), this.save())
            }, Re.prototype._get_queue_key = function(e) {
                return e === me ? Ae : e === ve ? Te : e === be ? Be : e === ke ? Ue : e === xe ? $e : e === qe ? Ce : e === we ? je : void $.error("Invalid queue:", e)
            }, Re.prototype._get_queue = function(e) {
                return this.props[this._get_queue_key(e)]
            }, Re.prototype._get_or_create_queue = function(e, t) {
                var r = this._get_queue_key(e);
                return t = U.isUndefined(t) ? {} : t, this.props[r] || (this.props[r] = t)
            }, Re.prototype.set_event_timer = function(e, t) {
                var r = this.props[Pe] || {};
                r[e] = t, this.props[Pe] = r, this.save()
            }, Re.prototype.remove_event_timer = function(e) {
                var t = (this.props[Pe] || {})[e];
                return U.isUndefined(t) || (delete this.props[Pe][e], this.save()), t
            };
            var ze = function(e) {
                    return e
                },
                Le = function() {},
                Je = "mixpanel",
                Qe = "base64",
                He = t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                Ke = !He && -1 === E.indexOf("MSIE") && -1 === E.indexOf("Mozilla"),
                Ge = null;
            x.sendBeacon && (Ge = function() {
                return x.sendBeacon.apply(x, arguments)
            });
            var Ve = {
                    api_host: "https://api-js.mixpanel.com",
                    api_method: "POST",
                    api_transport: "XHR",
                    api_payload_format: Qe,
                    app_host: "https://mixpanel.com",
                    cdn: "https://cdn.mxpnl.com",
                    cross_site_cookie: !1,
                    cross_subdomain_cookie: !0,
                    error_reporter: Le,
                    persistence: "cookie",
                    persistence_name: "",
                    cookie_domain: "",
                    cookie_name: "",
                    loaded: Le,
                    store_google: !0,
                    save_referrer: !0,
                    test: !1,
                    verbose: !1,
                    img: !1,
                    debug: !1,
                    track_links_timeout: 300,
                    cookie_expiration: 365,
                    upgrade: !1,
                    disable_persistence: !1,
                    disable_cookie: !1,
                    secure_cookie: !1,
                    ip: !0,
                    opt_out_tracking_by_default: !1,
                    opt_out_persistence_by_default: !1,
                    opt_out_tracking_persistence_type: "localStorage",
                    opt_out_tracking_cookie_prefix: null,
                    property_blacklist: [],
                    xhr_headers: {},
                    ignore_dnt: !1,
                    batch_requests: !0,
                    batch_size: 50,
                    batch_flush_interval_ms: 5e3,
                    batch_request_timeout_ms: 9e4,
                    batch_autostart: !0,
                    hooks: {}
                },
                We = !1,
                Xe = function() {},
                Ye = function(e, t, i) {
                    var o, n = i === Je ? De : De[i];
                    if (n && 0 === Ie) o = n;
                    else {
                        if (n && !U.isArray(n)) return void $.error("You have already initialized " + i);
                        o = new Xe
                    }
                    return o._cached_groups = {}, o._init(e, t, i), o.people = new Oe, o.people._init(o), r.DEBUG = r.DEBUG || o.get_config("debug"), !U.isUndefined(n) && U.isArray(n) && (o._execute_array.call(o.people, n.people), o._execute_array(n)), o
                };
            Xe.prototype.init = function(e, t, r) {
                if (U.isUndefined(r)) this.report_error("You must name your new library: init(token, config, name)");
                else {
                    if (r !== Je) {
                        var i = Ye(e, t, r);
                        return De[r] = i, i._loaded(), i
                    }
                    this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet")
                }
            }, Xe.prototype._init = function(e, r, i) {
                r = r || {}, this.__loaded = !0, this.config = {};
                var o = {};
                if ("api_payload_format" in r || (r.api_host || Ve.api_host).match(/\.mixpanel\.com$/) && (o.api_payload_format = "json"), this.set_config(U.extend({}, Ve, o, r, {
                        name: i,
                        token: e,
                        callback_fn: (i === Je ? i : Je + "." + i) + "._jsc"
                    })), this._jsc = Le, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                        disable_all_events: !1,
                        identify_called: !1
                    }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests)
                    if (U.localStorage.is_supported(!0) && He) {
                        if (this.init_batchers(), Ge && t.addEventListener) {
                            var n = U.bind((function() {
                                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                                    unloading: !0
                                })
                            }), this);
                            t.addEventListener("pagehide", (function(e) {
                                e.persisted && n()
                            })), t.addEventListener("visibilitychange", (function() {
                                "hidden" === w.visibilityState && n()
                            }))
                        }
                    } else this._batch_requests = !1, $.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
                this.persistence = this.cookie = new Re(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
                var s = U.UUID();
                this.get_distinct_id() || this.register_once({
                    distinct_id: s,
                    $device_id: s
                }, "")
            }, Xe.prototype._loaded = function() {
                this.get_config("loaded")(this), this._set_default_superprops()
            }, Xe.prototype._set_default_superprops = function() {
                this.persistence.update_search_keyword(w.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(w.referrer)
            }, Xe.prototype._dom_loaded = function() {
                U.each(this.__dom_loaded_queue, (function(e) {
                    this._track_dom.apply(this, e)
                }), this), this.has_opted_out_tracking() || U.each(this.__request_queue, (function(e) {
                    this._send_request.apply(this, e)
                }), this), delete this.__dom_loaded_queue, delete this.__request_queue
            }, Xe.prototype._track_dom = function(e, t) {
                if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
                if (!We) return this.__dom_loaded_queue.push([e, t]), !1;
                var r = (new e).init(this);
                return r.track.apply(r, t)
            }, Xe.prototype._prepare_callback = function(e, t) {
                if (U.isUndefined(e)) return null;
                if (He) return function(r) {
                    e(r, t)
                };
                var r = this._jsc,
                    i = "" + Math.floor(1e8 * Math.random()),
                    o = this.get_config("callback_fn") + "[" + i + "]";
                return r[i] = function(o) {
                    delete r[i], e(o, t)
                }, o
            }, Xe.prototype._send_request = function(e, t, r, i) {
                var o = !0;
                if (Ke) return this.__request_queue.push(arguments), o;
                var n = {
                        method: this.get_config("api_method"),
                        transport: this.get_config("api_transport"),
                        verbose: this.get_config("verbose")
                    },
                    s = null;
                i || !U.isFunction(r) && "string" !== typeof r || (i = r, r = null), r = U.extend(n, r || {}), He || (r.method = "GET");
                var a = "POST" === r.method,
                    c = Ge && a && "sendbeacon" === r.transport.toLowerCase(),
                    p = r.verbose;
                t.verbose && (p = !0), this.get_config("test") && (t.test = 1), p && (t.verbose = 1), this.get_config("img") && (t.img = 1), He || (i ? t.callback = i : (p || this.get_config("test")) && (t.callback = "(function(){})")), t.ip = this.get_config("ip") ? 1 : 0, t._ = (new Date).getTime().toString(), a && (s = "data=" + encodeURIComponent(t.data), delete t.data), e += "?" + U.HTTPBuildQuery(t);
                var u = this;
                if ("img" in t) {
                    var _ = w.createElement("img");
                    _.src = e, w.body.appendChild(_)
                } else if (c) {
                    try {
                        o = Ge(e, s)
                    } catch (e) {
                        u.report_error(e), o = !1
                    }
                    try {
                        i && i(o ? 1 : 0)
                    } catch (e) {
                        u.report_error(e)
                    }
                } else if (He) try {
                    var h = new XMLHttpRequest;
                    h.open(r.method, e, !0);
                    var f = this.get_config("xhr_headers");
                    if (a && (f["Content-Type"] = "application/x-www-form-urlencoded"), U.each(f, (function(e, t) {
                            h.setRequestHeader(t, e)
                        })), r.timeout_ms && "undefined" !== typeof h.timeout) {
                        h.timeout = r.timeout_ms;
                        var l = (new Date).getTime()
                    }
                    h.withCredentials = !0, h.onreadystatechange = function() {
                        var e;
                        if (4 === h.readyState)
                            if (200 === h.status) {
                                if (i)
                                    if (p) {
                                        var t;
                                        try {
                                            t = U.JSONDecode(h.responseText)
                                        } catch (e) {
                                            if (u.report_error(e), !r.ignore_json_errors) return;
                                            t = h.responseText
                                        }
                                        i(t)
                                    } else i(Number(h.responseText))
                            } else e = h.timeout && !h.status && (new Date).getTime() - l >= h.timeout ? "timeout" : "Bad HTTP status: " + h.status + " " + h.statusText, u.report_error(e), i && i(p ? {
                                status: 0,
                                error: e,
                                xhr_req: h
                            } : 0)
                    }, h.send(s)
                } catch (e) {
                    u.report_error(e), o = !1
                } else {
                    var d = w.createElement("script");
                    d.type = "text/javascript", d.async = !0, d.defer = !0, d.src = e;
                    var g = w.getElementsByTagName("script")[0];
                    g.parentNode.insertBefore(d, g)
                }
                return o
            }, Xe.prototype._execute_array = function(e) {
                var t, r = [],
                    i = [],
                    o = [];
                U.each(e, (function(e) {
                    e && (t = e[0], U.isArray(t) ? o.push(e) : "function" === typeof e ? e.call(this) : U.isArray(e) && "alias" === t ? r.push(e) : U.isArray(e) && -1 !== t.indexOf("track") && "function" === typeof this[t] ? o.push(e) : i.push(e))
                }), this);
                var n = function(e, t) {
                    U.each(e, (function(e) {
                        if (U.isArray(e[0])) {
                            var r = t;
                            U.each(e, (function(e) {
                                r = r[e[0]].apply(r, e.slice(1))
                            }))
                        } else this[e[0]].apply(this, e.slice(1))
                    }), t)
                };
                n(r, this), n(i, this), n(o, this)
            }, Xe.prototype.are_batchers_initialized = function() {
                return !!this.request_batchers.events
            }, Xe.prototype.init_batchers = function() {
                var e = this.get_config("token");
                if (!this.are_batchers_initialized()) {
                    var t = U.bind((function(t) {
                        return new ie("__mpq_" + e + t.queue_suffix, {
                            libConfig: this.config,
                            sendRequestFunc: U.bind((function(e, r, i) {
                                this._send_request(this.get_config("api_host") + t.endpoint, this._encode_data_for_request(e), r, this._prepare_callback(i, e))
                            }), this),
                            beforeSendHook: U.bind((function(e) {
                                return this._run_hook("before_send_" + t.type, e)
                            }), this),
                            errorReporter: this.get_config("error_reporter"),
                            stopAllBatchingFunc: U.bind(this.stop_batch_senders, this)
                        })
                    }), this);
                    this.request_batchers = {
                        events: t({
                            type: "events",
                            endpoint: "/track/",
                            queue_suffix: "_ev"
                        }),
                        people: t({
                            type: "people",
                            endpoint: "/engage/",
                            queue_suffix: "_pp"
                        }),
                        groups: t({
                            type: "groups",
                            endpoint: "/groups/",
                            queue_suffix: "_gr"
                        })
                    }
                }
                this.get_config("batch_autostart") && this.start_batch_senders()
            }, Xe.prototype.start_batch_senders = function() {
                this.are_batchers_initialized() && (this._batch_requests = !0, U.each(this.request_batchers, (function(e) {
                    e.start()
                })))
            }, Xe.prototype.stop_batch_senders = function() {
                this._batch_requests = !1, U.each(this.request_batchers, (function(e) {
                    e.stop(), e.clear()
                }))
            }, Xe.prototype.push = function(e) {
                this._execute_array([e])
            }, Xe.prototype.disable = function(e) {
                "undefined" === typeof e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
            }, Xe.prototype._encode_data_for_request = function(e) {
                var t = U.JSONEncode(e);
                return this.get_config("api_payload_format") === Qe && (t = U.base64Encode(t)), {
                    data: t
                }
            }, Xe.prototype._track_or_batch = function(e, t) {
                var r = U.truncate(e.data, 255),
                    i = e.endpoint,
                    o = e.batcher,
                    n = e.should_send_immediately,
                    s = e.send_request_options || {};
                t = t || Le;
                var a = !0,
                    c = U.bind((function() {
                        return s.skip_hooks || (r = this._run_hook("before_send_" + e.type, r)), r ? ($.log("MIXPANEL REQUEST:"), $.log(r), this._send_request(i, this._encode_data_for_request(r), s, this._prepare_callback(t, r))) : null
                    }), this);
                return this._batch_requests && !n ? o.enqueue(r, (function(e) {
                    e ? t(1, r) : c()
                })) : a = c(), a && r
            }, Xe.prototype.track = pe((function(e, t, r, i) {
                i || "function" !== typeof r || (i = r, r = null);
                var o = (r = r || {}).transport;
                o && (r.transport = o);
                var n = r.send_immediately;
                if ("function" !== typeof i && (i = Le), U.isUndefined(e)) this.report_error("No event name provided to mixpanel.track");
                else {
                    if (!this._event_is_disabled(e)) {
                        (t = t || {}).token = this.get_config("token");
                        var s = this.persistence.remove_event_timer(e);
                        if (!U.isUndefined(s)) {
                            var a = (new Date).getTime() - s;
                            t.$duration = parseFloat((a / 1e3).toFixed(3))
                        }
                        this._set_default_superprops(), t = U.extend({}, U.info.properties(), this.persistence.properties(), this.unpersisted_superprops, t);
                        var c = this.get_config("property_blacklist");
                        U.isArray(c) ? U.each(c, (function(e) {
                            delete t[e]
                        })) : this.report_error("Invalid value for property_blacklist config: " + c);
                        var p = {
                            event: e,
                            properties: t
                        };
                        return this._track_or_batch({
                            type: "events",
                            data: p,
                            endpoint: this.get_config("api_host") + "/track/",
                            batcher: this.request_batchers.events,
                            should_send_immediately: n,
                            send_request_options: r
                        }, i)
                    }
                    i(0)
                }
            })), Xe.prototype.set_group = pe((function(e, t, r) {
                U.isArray(t) || (t = [t]);
                var i = {};
                return i[e] = t, this.register(i), this.people.set(e, t, r)
            })), Xe.prototype.add_group = pe((function(e, t, r) {
                var i = this.get_property(e);
                if (void 0 === i) {
                    var o = {};
                    o[e] = [t], this.register(o)
                } else -1 === i.indexOf(t) && (i.push(t), this.register(o));
                return this.people.union(e, t, r)
            })), Xe.prototype.remove_group = pe((function(e, t, r) {
                var i = this.get_property(e);
                if (void 0 !== i) {
                    var o = i.indexOf(t);
                    o > -1 && (i.splice(o, 1), this.register({
                        group_key: i
                    })), 0 === i.length && this.unregister(e)
                }
                return this.people.remove(e, t, r)
            })), Xe.prototype.track_with_groups = pe((function(e, t, r, i) {
                var o = U.extend({}, t || {});
                return U.each(r, (function(e, t) {
                    null !== e && void 0 !== e && (o[t] = e)
                })), this.track(e, o, i)
            })), Xe.prototype._create_map_key = function(e, t) {
                return e + "_" + JSON.stringify(t)
            }, Xe.prototype._remove_group_from_cache = function(e, t) {
                delete this._cached_groups[this._create_map_key(e, t)]
            }, Xe.prototype.get_group = function(e, t) {
                var r = this._create_map_key(e, t),
                    i = this._cached_groups[r];
                return void 0 !== i && i._group_key === e && i._group_id === t || ((i = new Ee)._init(this, e, t), this._cached_groups[r] = i), i
            }, Xe.prototype.track_pageview = function(e) {
                U.isUndefined(e) && (e = w.location.href), this.track("mp_page_view", U.info.pageviewInfo(e))
            }, Xe.prototype.track_links = function() {
                return this._track_dom.call(this, G, arguments)
            }, Xe.prototype.track_forms = function() {
                return this._track_dom.call(this, V, arguments)
            }, Xe.prototype.time_event = function(e) {
                U.isUndefined(e) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e) || this.persistence.set_event_timer(e, (new Date).getTime())
            };
            var Ze = {
                    persistent: !0
                },
                et = function(e) {
                    var t;
                    return t = U.isObject(e) ? e : U.isUndefined(e) ? {} : {
                        days: e
                    }, U.extend({}, Ze, t)
                };
            Xe.prototype.register = function(e, t) {
                var r = et(t);
                r.persistent ? this.persistence.register(e, r.days) : U.extend(this.unpersisted_superprops, e)
            }, Xe.prototype.register_once = function(e, t, r) {
                var i = et(r);
                i.persistent ? this.persistence.register_once(e, t, i.days) : ("undefined" === typeof t && (t = "None"), U.each(e, (function(e, r) {
                    this.unpersisted_superprops.hasOwnProperty(r) && this.unpersisted_superprops[r] !== t || (this.unpersisted_superprops[r] = e)
                }), this))
            }, Xe.prototype.unregister = function(e, t) {
                (t = et(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
            }, Xe.prototype._register_single = function(e, t) {
                var r = {};
                r[e] = t, this.register(r)
            }, Xe.prototype.identify = function(e, t, r, i, o, n, s, a) {
                var c = this.get_distinct_id();
                if (this.register({
                        $user_id: e
                    }), !this.get_property("$device_id")) {
                    var p = c;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: p
                    }, "")
                }
                e !== c && e !== this.get_property(Me) && (this.unregister(Me), this.register({
                    distinct_id: e
                })), this._flags.identify_called = !0, this.people._flush(t, r, i, o, n, s, a), e !== c && this.track("$identify", {
                    distinct_id: e,
                    $anon_distinct_id: c
                }, {
                    skip_hooks: !0
                })
            }, Xe.prototype.reset = function() {
                this.persistence.clear(), this._flags.identify_called = !1;
                var e = U.UUID();
                this.register_once({
                    distinct_id: e,
                    $device_id: e
                }, "")
            }, Xe.prototype.get_distinct_id = function() {
                return this.get_property("distinct_id")
            }, Xe.prototype.alias = function(e, t) {
                if (e === this.get_property(Ne)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
                var r = this;
                return U.isUndefined(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(Me, e), this.track("$create_alias", {
                    alias: e,
                    distinct_id: t
                }, {
                    skip_hooks: !0
                }, (function() {
                    r.identify(e)
                }))) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e), -1)
            }, Xe.prototype.name_tag = function(e) {
                this._register_single("mp_name_tag", e)
            }, Xe.prototype.set_config = function(e) {
                U.isObject(e) && (U.extend(this.config, e), e.batch_size && U.each(this.request_batchers, (function(e) {
                    e.resetBatchSize()
                })), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), r.DEBUG = r.DEBUG || this.get_config("debug"))
            }, Xe.prototype.get_config = function(e) {
                return this.config[e]
            }, Xe.prototype._run_hook = function(e) {
                var t = (this.config.hooks[e] || ze).apply(this, m.call(arguments, 1));
                return "undefined" === typeof t && (this.report_error(e + " hook did not return a value"), t = null), t
            }, Xe.prototype.get_property = function(e) {
                return this.persistence.props[e]
            }, Xe.prototype.toString = function() {
                var e = this.get_config("name");
                return e !== Je && (e = Je + "." + e), e
            }, Xe.prototype._event_is_disabled = function(e) {
                return U.isBlockedUA(E) || this._flags.disable_all_events || U.include(this.__disabled_events, e)
            }, Xe.prototype._gdpr_init = function() {
                "localStorage" === this.get_config("opt_out_tracking_persistence_type") && U.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
                    persistence_type: "cookie"
                }) && this.opt_in_tracking({
                    enable_persistence: !1
                }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
                    persistence_type: "cookie"
                }) && this.opt_out_tracking({
                    clear_persistence: !1
                }), this.clear_opt_in_out_tracking({
                    persistence_type: "cookie",
                    enable_persistence: !1
                })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
                    clear_persistence: !0
                }) : this.has_opted_in_tracking() || !this.get_config("opt_out_tracking_by_default") && !U.cookie.get("mp_optout") || (U.cookie.remove("mp_optout"), this.opt_out_tracking({
                    clear_persistence: this.get_config("opt_out_persistence_by_default")
                }))
            }, Xe.prototype._gdpr_update_persistence = function(e) {
                var t;
                if (e && e.clear_persistence) t = !0;
                else {
                    if (!e || !e.enable_persistence) return;
                    t = !1
                }
                this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t), t && U.each(this.request_batchers, (function(e) {
                    e.clear()
                }))
            }, Xe.prototype._gdpr_call_func = function(e, t) {
                return t = U.extend({
                    track: U.bind(this.track, this),
                    persistence_type: this.get_config("opt_out_tracking_persistence_type"),
                    cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
                    cookie_expiration: this.get_config("cookie_expiration"),
                    cross_site_cookie: this.get_config("cross_site_cookie"),
                    cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                    cookie_domain: this.get_config("cookie_domain"),
                    secure_cookie: this.get_config("secure_cookie"),
                    ignore_dnt: this.get_config("ignore_dnt")
                }, t), U.localStorage.is_supported() || (t.persistence_type = "cookie"), e(this.get_config("token"), {
                    track: t.track,
                    trackEventName: t.track_event_name,
                    trackProperties: t.track_properties,
                    persistenceType: t.persistence_type,
                    persistencePrefix: t.cookie_prefix,
                    cookieDomain: t.cookie_domain,
                    cookieExpiration: t.cookie_expiration,
                    crossSiteCookie: t.cross_site_cookie,
                    crossSubdomainCookie: t.cross_subdomain_cookie,
                    secureCookie: t.secure_cookie,
                    ignoreDnt: t.ignore_dnt
                })
            }, Xe.prototype.opt_in_tracking = function(e) {
                e = U.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(ne, e), this._gdpr_update_persistence(e)
            }, Xe.prototype.opt_out_tracking = function(e) {
                (e = U.extend({
                    clear_persistence: !0,
                    delete_user: !0
                }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(se, e), this._gdpr_update_persistence(e)
            }, Xe.prototype.has_opted_in_tracking = function(e) {
                return this._gdpr_call_func(ae, e)
            }, Xe.prototype.has_opted_out_tracking = function(e) {
                return this._gdpr_call_func(ce, e)
            }, Xe.prototype.clear_opt_in_out_tracking = function(e) {
                e = U.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(he, e), this._gdpr_update_persistence(e)
            }, Xe.prototype.report_error = function(e, t) {
                $.error.apply($.error, arguments);
                try {
                    t || e instanceof Error || (e = new Error(e)), this.get_config("error_reporter")(e, t)
                } catch (t) {
                    $.error(t)
                }
            }, Xe.prototype.init = Xe.prototype.init, Xe.prototype.reset = Xe.prototype.reset, Xe.prototype.disable = Xe.prototype.disable, Xe.prototype.time_event = Xe.prototype.time_event, Xe.prototype.track = Xe.prototype.track, Xe.prototype.track_links = Xe.prototype.track_links, Xe.prototype.track_forms = Xe.prototype.track_forms, Xe.prototype.track_pageview = Xe.prototype.track_pageview, Xe.prototype.register = Xe.prototype.register, Xe.prototype.register_once = Xe.prototype.register_once, Xe.prototype.unregister = Xe.prototype.unregister, Xe.prototype.identify = Xe.prototype.identify, Xe.prototype.alias = Xe.prototype.alias, Xe.prototype.name_tag = Xe.prototype.name_tag, Xe.prototype.set_config = Xe.prototype.set_config, Xe.prototype.get_config = Xe.prototype.get_config, Xe.prototype.get_property = Xe.prototype.get_property, Xe.prototype.get_distinct_id = Xe.prototype.get_distinct_id, Xe.prototype.toString = Xe.prototype.toString, Xe.prototype.opt_out_tracking = Xe.prototype.opt_out_tracking, Xe.prototype.opt_in_tracking = Xe.prototype.opt_in_tracking, Xe.prototype.has_opted_out_tracking = Xe.prototype.has_opted_out_tracking, Xe.prototype.has_opted_in_tracking = Xe.prototype.has_opted_in_tracking, Xe.prototype.clear_opt_in_out_tracking = Xe.prototype.clear_opt_in_out_tracking, Xe.prototype.get_group = Xe.prototype.get_group, Xe.prototype.set_group = Xe.prototype.set_group, Xe.prototype.add_group = Xe.prototype.add_group, Xe.prototype.remove_group = Xe.prototype.remove_group, Xe.prototype.track_with_groups = Xe.prototype.track_with_groups, Xe.prototype.start_batch_senders = Xe.prototype.start_batch_senders, Xe.prototype.stop_batch_senders = Xe.prototype.stop_batch_senders, Re.prototype.properties = Re.prototype.properties, Re.prototype.update_search_keyword = Re.prototype.update_search_keyword, Re.prototype.update_referrer_info = Re.prototype.update_referrer_info, Re.prototype.get_cross_subdomain = Re.prototype.get_cross_subdomain, Re.prototype.clear = Re.prototype.clear;
            var tt = {},
                rt = (Ie = 0, (De = new Xe).init = function(e, r, i) {
                    if (i) return De[i] || (De[i] = tt[i] = Ye(e, r, i), De[i]._loaded()), De[i];
                    var o = De;
                    tt[Je] ? o = tt[Je] : e && ((o = Ye(e, r, Je))._loaded(), tt[Je] = o), De = o, 1 === Ie && (t[Je] = De), U.each(tt, (function(e, t) {
                        t !== Je && (De[t] = e)
                    })), De._ = U
                }, De.init(), function() {
                    function e() {
                        e.done || (e.done = !0, We = !0, Ke = !1, U.each(tt, (function(e) {
                            e._dom_loaded()
                        })))
                    }
                    if (w.addEventListener) "complete" === w.readyState ? e() : w.addEventListener("DOMContentLoaded", e, !1);
                    else if (w.attachEvent) {
                        w.attachEvent("onreadystatechange", e);
                        var r = !1;
                        try {
                            r = null === t.frameElement
                        } catch (e) {}
                        w.documentElement.doScroll && r && function t() {
                            try {
                                w.documentElement.doScroll("left")
                            } catch (e) {
                                return void setTimeout(t, 1)
                            }
                            e()
                        }()
                    }
                    U.register_event(t, "load", e, !0)
                }(), De);
            e.exports = rt
        }
    }
]);