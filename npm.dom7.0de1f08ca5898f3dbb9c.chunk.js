"use strict";
(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
    [2497], {
        14602: (t, e, n) => {
            n.d(e, {
                $: () => l,
                Ce: () => j,
                IV: () => f,
                Kz: () => T,
                Lj: () => p,
                Od: () => R,
                Pb: () => E,
                R3: () => w,
                S1: () => y,
                S6: () => N,
                Vj: () => u,
                W2: () => S,
                X$: () => v,
                cn: () => h,
                cv: () => x,
                dy: () => M,
                eG: () => H,
                eR: () => g,
                eq: () => k,
                fL: () => _,
                hX: () => O,
                iO: () => b,
                is: () => A,
                iv: () => C,
                ld: () => L,
                lp: () => V,
                mp: () => J,
                on: () => m,
                oq: () => B,
                pI: () => z,
                pJ: () => P,
                pv: () => c,
                qm: () => q,
                sE: () => F,
                uV: () => d,
                vs: () => a,
                wV: () => D
            });
            var i = n(77628);
            class s extends Array {
                constructor(t) {
                    "number" === typeof t ? super(t) : (super(...t || []), function(t) {
                        const e = t.__proto__;
                        Object.defineProperty(t, "__proto__", {
                            get: () => e,
                            set(t) {
                                e.__proto__ = t
                            }
                        })
                    }(this))
                }
            }

            function r(t = []) {
                const e = [];
                return t.forEach((t => {
                    Array.isArray(t) ? e.push(...r(t)) : e.push(t)
                })), e
            }

            function o(t, e) {
                return Array.prototype.filter.call(t, e)
            }

            function l(t, e) {
                const n = (0, i.Jj)(),
                    r = (0, i.Me)();
                let o = [];
                if (!e && t instanceof s) return t;
                if (!t) return new s(o);
                if ("string" === typeof t) {
                    const n = t.trim();
                    if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                        let t = "div";
                        0 === n.indexOf("<li") && (t = "ul"), 0 === n.indexOf("<tr") && (t = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (t = "tr"), 0 === n.indexOf("<tbody") && (t = "table"), 0 === n.indexOf("<option") && (t = "select");
                        const e = r.createElement(t);
                        e.innerHTML = n;
                        for (let t = 0; t < e.childNodes.length; t += 1) o.push(e.childNodes[t])
                    } else o = function(t, e) {
                        if ("string" !== typeof t) return [t];
                        const n = [],
                            i = e.querySelectorAll(t);
                        for (let t = 0; t < i.length; t += 1) n.push(i[t]);
                        return n
                    }(t.trim(), e || r)
                } else if (t.nodeType || t === n || t === r) o.push(t);
                else if (Array.isArray(t)) {
                    if (t instanceof s) return t;
                    o = t
                }
                return new s(function(t) {
                    const e = [];
                    for (let n = 0; n < t.length; n += 1) - 1 === e.indexOf(t[n]) && e.push(t[n]);
                    return e
                }(o))
            }

            function h(...t) {
                const e = r(t.map((t => t.split(" "))));
                return this.forEach((t => {
                    t.classList.add(...e)
                })), this
            }

            function f(...t) {
                const e = r(t.map((t => t.split(" "))));
                return this.forEach((t => {
                    t.classList.remove(...e)
                })), this
            }

            function u(...t) {
                const e = r(t.map((t => t.split(" "))));
                this.forEach((t => {
                    e.forEach((e => {
                        t.classList.toggle(e)
                    }))
                }))
            }

            function c(...t) {
                const e = r(t.map((t => t.split(" "))));
                return o(this, (t => e.filter((e => t.classList.contains(e))).length > 0)).length > 0
            }

            function p(t, e) {
                if (1 === arguments.length && "string" === typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                for (let n = 0; n < this.length; n += 1)
                    if (2 === arguments.length) this[n].setAttribute(t, e);
                    else
                        for (const e in t) this[n][e] = t[e], this[n].setAttribute(e, t[e]);
                return this
            }

            function d(t) {
                for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                return this
            }

            function a(t) {
                for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
                return this
            }

            function g(t) {
                for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" !== typeof t ? `${t}ms` : t;
                return this
            }

            function m(...t) {
                let [e, n, i, s] = t;

                function r(t) {
                    const e = t.target;
                    if (!e) return;
                    const s = t.target.dom7EventData || [];
                    if (s.indexOf(t) < 0 && s.unshift(t), l(e).is(n)) i.apply(e, s);
                    else {
                        const t = l(e).parents();
                        for (let e = 0; e < t.length; e += 1) l(t[e]).is(n) && i.apply(t[e], s)
                    }
                }

                function o(t) {
                    const e = t && t.target && t.target.dom7EventData || [];
                    e.indexOf(t) < 0 && e.unshift(t), i.apply(this, e)
                }
                "function" === typeof t[1] && ([e, i, s] = t, n = void 0), s || (s = !1);
                const h = e.split(" ");
                let f;
                for (let t = 0; t < this.length; t += 1) {
                    const e = this[t];
                    if (n)
                        for (f = 0; f < h.length; f += 1) {
                            const t = h[f];
                            e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                listener: i,
                                proxyListener: r
                            }), e.addEventListener(t, r, s)
                        } else
                            for (f = 0; f < h.length; f += 1) {
                                const t = h[f];
                                e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                    listener: i,
                                    proxyListener: o
                                }), e.addEventListener(t, o, s)
                            }
                }
                return this
            }

            function y(...t) {
                let [e, n, i, s] = t;
                "function" === typeof t[1] && ([e, i, s] = t, n = void 0), s || (s = !1);
                const r = e.split(" ");
                for (let t = 0; t < r.length; t += 1) {
                    const e = r[t];
                    for (let t = 0; t < this.length; t += 1) {
                        const r = this[t];
                        let o;
                        if (!n && r.dom7Listeners ? o = r.dom7Listeners[e] : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[e]), o && o.length)
                            for (let t = o.length - 1; t >= 0; t -= 1) {
                                const n = o[t];
                                i && n.listener === i || i && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === i ? (r.removeEventListener(e, n.proxyListener, s), o.splice(t, 1)) : i || (r.removeEventListener(e, n.proxyListener, s), o.splice(t, 1))
                            }
                    }
                }
                return this
            }

            function v(...t) {
                const e = (0, i.Jj)(),
                    n = t[0].split(" "),
                    s = t[1];
                for (let i = 0; i < n.length; i += 1) {
                    const r = n[i];
                    for (let n = 0; n < this.length; n += 1) {
                        const i = this[n];
                        if (e.CustomEvent) {
                            const n = new e.CustomEvent(r, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            });
                            i.dom7EventData = t.filter(((t, e) => e > 0)), i.dispatchEvent(n), i.dom7EventData = [], delete i.dom7EventData
                        }
                    }
                }
                return this
            }

            function L(t) {
                const e = this;
                return t && e.on("transitionend", (function n(i) {
                    i.target === this && (t.call(this, i), e.off("transitionend", n))
                })), this
            }

            function b(t) {
                if (this.length > 0) {
                    if (t) {
                        const t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            }

            function E(t) {
                if (this.length > 0) {
                    if (t) {
                        const t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            }

            function x() {
                if (this.length > 0) {
                    const t = (0, i.Jj)(),
                        e = (0, i.Me)(),
                        n = this[0],
                        s = n.getBoundingClientRect(),
                        r = e.body,
                        o = n.clientTop || r.clientTop || 0,
                        l = n.clientLeft || r.clientLeft || 0,
                        h = n === t ? t.scrollY : n.scrollTop,
                        f = n === t ? t.scrollX : n.scrollLeft;
                    return {
                        top: s.top + h - o,
                        left: s.left + f - l
                    }
                }
                return null
            }

            function S() {
                const t = (0, i.Jj)();
                return this[0] ? t.getComputedStyle(this[0], null) : {}
            }

            function C(t, e) {
                const n = (0, i.Jj)();
                let s;
                if (1 === arguments.length) {
                    if ("string" !== typeof t) {
                        for (s = 0; s < this.length; s += 1)
                            for (const e in t) this[s].style[e] = t[e];
                        return this
                    }
                    if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(t)
                }
                if (2 === arguments.length && "string" === typeof t) {
                    for (s = 0; s < this.length; s += 1) this[s].style[t] = e;
                    return this
                }
                return this
            }

            function N(t) {
                return t ? (this.forEach(((e, n) => {
                    t.apply(e, [e, n])
                })), this) : this
            }

            function O(t) {
                return l(o(this, t))
            }

            function M(t) {
                if ("undefined" === typeof t) return this[0] ? this[0].innerHTML : null;
                for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                return this
            }

            function _(t) {
                if ("undefined" === typeof t) return this[0] ? this[0].textContent.trim() : null;
                for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
                return this
            }

            function A(t) {
                const e = (0, i.Jj)(),
                    n = (0, i.Me)(),
                    r = this[0];
                let o, h;
                if (!r || "undefined" === typeof t) return !1;
                if ("string" === typeof t) {
                    if (r.matches) return r.matches(t);
                    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
                    if (r.msMatchesSelector) return r.msMatchesSelector(t);
                    for (o = l(t), h = 0; h < o.length; h += 1)
                        if (o[h] === r) return !0;
                    return !1
                }
                if (t === n) return r === n;
                if (t === e) return r === e;
                if (t.nodeType || t instanceof s) {
                    for (o = t.nodeType ? [t] : t, h = 0; h < o.length; h += 1)
                        if (o[h] === r) return !0;
                    return !1
                }
                return !1
            }

            function T() {
                let t, e = this[0];
                if (e) {
                    for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                    return t
                }
            }

            function k(t) {
                if ("undefined" === typeof t) return this;
                const e = this.length;
                if (t > e - 1) return l([]);
                if (t < 0) {
                    const n = e + t;
                    return l(n < 0 ? [] : [this[n]])
                }
                return l([this[t]])
            }

            function w(...t) {
                let e;
                const n = (0, i.Me)();
                for (let i = 0; i < t.length; i += 1) {
                    e = t[i];
                    for (let t = 0; t < this.length; t += 1)
                        if ("string" === typeof e) {
                            const i = n.createElement("div");
                            for (i.innerHTML = e; i.firstChild;) this[t].appendChild(i.firstChild)
                        } else if (e instanceof s)
                        for (let n = 0; n < e.length; n += 1) this[t].appendChild(e[n]);
                    else this[t].appendChild(e)
                }
                return this
            }

            function j(t) {
                const e = (0, i.Me)();
                let n, r;
                for (n = 0; n < this.length; n += 1)
                    if ("string" === typeof t) {
                        const i = e.createElement("div");
                        for (i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                    } else if (t instanceof s)
                    for (r = 0; r < t.length; r += 1) this[n].insertBefore(t[r], this[n].childNodes[0]);
                else this[n].insertBefore(t, this[n].childNodes[0]);
                return this
            }

            function V(t) {
                return this.length > 0 ? t ? this[0].nextElementSibling && l(this[0].nextElementSibling).is(t) ? l([this[0].nextElementSibling]) : l([]) : this[0].nextElementSibling ? l([this[0].nextElementSibling]) : l([]) : l([])
            }

            function H(t) {
                const e = [];
                let n = this[0];
                if (!n) return l([]);
                for (; n.nextElementSibling;) {
                    const i = n.nextElementSibling;
                    t ? l(i).is(t) && e.push(i) : e.push(i), n = i
                }
                return l(e)
            }

            function J(t) {
                if (this.length > 0) {
                    const e = this[0];
                    return t ? e.previousElementSibling && l(e.previousElementSibling).is(t) ? l([e.previousElementSibling]) : l([]) : e.previousElementSibling ? l([e.previousElementSibling]) : l([])
                }
                return l([])
            }

            function P(t) {
                const e = [];
                let n = this[0];
                if (!n) return l([]);
                for (; n.previousElementSibling;) {
                    const i = n.previousElementSibling;
                    t ? l(i).is(t) && e.push(i) : e.push(i), n = i
                }
                return l(e)
            }

            function q(t) {
                const e = [];
                for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (t ? l(this[n].parentNode).is(t) && e.push(this[n].parentNode) : e.push(this[n].parentNode));
                return l(e)
            }

            function D(t) {
                const e = [];
                for (let n = 0; n < this.length; n += 1) {
                    let i = this[n].parentNode;
                    for (; i;) t ? l(i).is(t) && e.push(i) : e.push(i), i = i.parentNode
                }
                return l(e)
            }

            function B(t) {
                let e = this;
                return "undefined" === typeof t ? l([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
            }

            function F(t) {
                const e = [];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n].querySelectorAll(t);
                    for (let t = 0; t < i.length; t += 1) e.push(i[t])
                }
                return l(e)
            }

            function z(t) {
                const e = [];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n].children;
                    for (let n = 0; n < i.length; n += 1) t && !l(i[n]).is(t) || e.push(i[n])
                }
                return l(e)
            }

            function R() {
                for (let t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                return this
            }
            l.fn = s.prototype;
            const W = "resize scroll".split(" ");

            function X(t) {
                return function(...e) {
                    if ("undefined" === typeof e[0]) {
                        for (let e = 0; e < this.length; e += 1) W.indexOf(t) < 0 && (t in this[e] ? this[e][t]() : l(this[e]).trigger(t));
                        return this
                    }
                    return this.on(t, ...e)
                }
            }
            X("click"), X("blur"), X("focus"), X("focusin"), X("focusout"), X("keyup"), X("keydown"), X("keypress"), X("submit"), X("change"), X("mousedown"), X("mousemove"), X("mouseup"), X("mouseenter"), X("mouseleave"), X("mouseout"), X("mouseover"), X("touchstart"), X("touchend"), X("touchmove"), X("resize"), X("scroll")
        }
    }
]);