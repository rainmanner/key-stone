"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [593], {
        35281: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, o = (r = n(67121)) && "object" === typeof r && "default" in r ? r.default : r,
                i = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                u = {
                    INIT: "@@redux/INIT" + i(),
                    REPLACE: "@@redux/REPLACE" + i(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + i()
                    }
                };

            function a(e, t) {
                var n = t && t.type;
                return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            }

            function c(e, t) {
                return function() {
                    return t(e.apply(this, arguments))
                }
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 0 === t.length ? function(e) {
                    return e
                } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }
            t.createStore = function e(t, n, r) {
                var i;
                if ("function" === typeof n && "function" === typeof r || "function" === typeof r && "function" === typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");
                if ("function" === typeof n && "undefined" === typeof r && (r = n, n = void 0), "undefined" !== typeof r) {
                    if ("function" !== typeof r) throw new Error("Expected the enhancer to be a function.");
                    return r(e)(t, n)
                }
                if ("function" !== typeof t) throw new Error("Expected the reducer to be a function.");
                var a = t,
                    c = n,
                    f = [],
                    s = f,
                    d = !1;

                function l() {
                    s === f && (s = f.slice())
                }

                function p() {
                    if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                    return c
                }

                function h(e) {
                    if ("function" !== typeof e) throw new Error("Expected the listener to be a function.");
                    if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    var t = !0;
                    return l(), s.push(e),
                        function() {
                            if (t) {
                                if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                                t = !1, l();
                                var n = s.indexOf(e);
                                s.splice(n, 1)
                            }
                        }
                }

                function y(e) {
                    if (! function(e) {
                            if ("object" !== typeof e || null === e) return !1;
                            for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                            return Object.getPrototypeOf(e) === t
                        }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if ("undefined" === typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (d) throw new Error("Reducers may not dispatch actions.");
                    try {
                        d = !0, c = a(c, e)
                    } finally {
                        d = !1
                    }
                    for (var t = f = s, n = 0; n < t.length; n++)(0, t[n])();
                    return e
                }
                return y({
                    type: u.INIT
                }), (i = {
                    dispatch: y,
                    subscribe: h,
                    getState: p,
                    replaceReducer: function(e) {
                        if ("function" !== typeof e) throw new Error("Expected the nextReducer to be a function.");
                        a = e, y({
                            type: u.REPLACE
                        })
                    }
                })[o] = function() {
                    var e, t = h;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                            function n() {
                                e.next && e.next(p())
                            }
                            return n(), {
                                unsubscribe: t(n)
                            }
                        }
                    })[o] = function() {
                        return this
                    }, e
                }, i
            }, t.combineReducers = function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var o = t[r];
                    "function" === typeof e[o] && (n[o] = e[o])
                }
                var i, c = Object.keys(n);
                try {
                    ! function(e) {
                        Object.keys(e).forEach((function(t) {
                            var n = e[t];
                            if ("undefined" === typeof n(void 0, {
                                    type: u.INIT
                                })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                            if ("undefined" === typeof n(void 0, {
                                    type: u.PROBE_UNKNOWN_ACTION()
                                })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + u.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                        }))
                    }(n)
                } catch (e) {
                    i = e
                }
                return function(e, t) {
                    if (void 0 === e && (e = {}), i) throw i;
                    for (var r = !1, o = {}, u = 0; u < c.length; u++) {
                        var f = c[u],
                            s = n[f],
                            d = e[f],
                            l = s(d, t);
                        if ("undefined" === typeof l) {
                            var p = a(f, t);
                            throw new Error(p)
                        }
                        o[f] = l, r = r || l !== d
                    }
                    return r ? o : e
                }
            }, t.bindActionCreators = function(e, t) {
                if ("function" === typeof e) return c(e, t);
                if ("object" !== typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
                    var i = n[o],
                        u = e[i];
                    "function" === typeof u && (r[i] = c(u, t))
                }
                return r
            }, t.applyMiddleware = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function() {
                        var n = e.apply(void 0, arguments),
                            r = function() {
                                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                            },
                            o = {
                                getState: n.getState,
                                dispatch: function() {
                                    return r.apply(void 0, arguments)
                                }
                            },
                            i = t.map((function(e) {
                                return e(o)
                            }));
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), r.forEach((function(t) {
                                    f(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, n, {
                            dispatch: r = s.apply(void 0, i)(n.dispatch)
                        })
                    }
                }
            }, t.compose = s, t.__DO_NOT_USE__ActionTypes = u
        }
    }
]);