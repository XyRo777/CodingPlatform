( () => {
    var e, t = {
        2766: () => {}
        ,
        6312: () => {
            const e = document.querySelector("#topnavSearchInput");
            document.addEventListener("keydown", (t => {
                t.metaKey && "k" === t.key && (t.preventDefault(),
                e.focus())
            }
            ))
        }
        ,
        3903: (e, t, i) => {
            "use strict";
            var a = i(2603);
            window.bootstrap = a;
            var s = i(1173);
            document.querySelectorAll("[data-autosize]").forEach((e => {
                (0,
                s.A)(e)
            }
            )),
            window.autosize = s.A;
            var o = i(2262);
            function r(e) {
                return getComputedStyle(document.documentElement).getPropertyValue(e)
            }
            o.t1.register(o.Bs, o.A6, o.E8, o.Jb, o.PP, o.gO, o.ju, o.dN, o.s$, o.kc, o.ZT, o.No, o.OJ, o.P$, o.FN, o.G5, o.h9, o.pr, o.Pz, o.UA, o.iw, o.hE, o.m_);
            const n = {
                bodySecondary: r("--bs-secondary-color"),
                bodyBg: r("--bs-body-bg"),
                border: r("--bs-border-color"),
                primary: r("--bs-primary"),
                primaryTranslucent: `rgba(${r("--bs-primary-rgb")}, .05)`,
                transparent: "rgba(255, 255, 255, 0)"
            }
              , l = "Inter";
            function c(e) {
                const {chart: t, tooltip: i} = e
                  , a = function(e) {
                    let t = e.canvas.parentNode.querySelector("div");
                    if (!t) {
                        t = document.createElement("div"),
                        t.setAttribute("id", "chart-tooltip"),
                        t.setAttribute("role", "tooltip"),
                        t.classList.add("popover", "bs-popover-top");
                        const i = document.createElement("div");
                        i.classList.add("popover-arrow", "translate-middle-x");
                        const a = document.createElement("div");
                        a.classList.add("popover-content"),
                        t.appendChild(i),
                        t.appendChild(a),
                        e.canvas.parentNode.appendChild(t)
                    }
                    return t
                }(t);
                if (0 === i.opacity)
                    return void (a.style.visibility = "hidden");
                if (i.body) {
                    const e = i.title || []
                      , s = i.body.map((e => e.lines))
                      , o = document.createElement("h3");
                    o.classList.add("popover-header"),
                    e.forEach((e => {
                        const t = document.createElement("span");
                        t.classList.add("d-block", "text-center", "text-nowrap"),
                        t.innerText = e,
                        o.appendChild(t)
                    }
                    ));
                    const r = document.createElement("div");
                    r.classList.add("popover-body", "d-flex", "flex-column", "gap-1"),
                    s.forEach(( (e, a) => {
                        const o = i.labelColors[a]
                          , n = "line" === t.config.type && "rgba(0,0,0,0.1)" !== o.borderColor ? o.borderColor : o.backgroundColor
                          , l = document.createElement("span");
                        l.classList.add("material-symbols-outlined", "me-1"),
                        l.style.color = n,
                        l.innerText = "circle";
                        const c = document.createElement("span");
                        c.innerText = e;
                        const h = document.createElement("div");
                        h.classList.add("d-flex", "text-nowrap"),
                        h.classList.add(s.length > 1 ? "justify-content-left" : "justify-content-center"),
                        h.appendChild(l),
                        h.appendChild(c),
                        r.appendChild(h)
                    }
                    ));
                    const n = a.querySelector(".popover-content");
                    for (; n.firstChild; )
                        n.firstChild.remove();
                    n.appendChild(o),
                    n.appendChild(r)
                }
                const {offsetLeft: s, offsetTop: o} = t.canvas;
                a.style.visibility = "visible",
                a.style.left = s + i.caretX + "px",
                a.style.top = o + i.caretY + "px",
                a.style.transform = "translateX(-50%) translateY(-100%) translateY(-1rem)"
            }
            o.t1.defaults.responsive = !0,
            o.t1.defaults.maintainAspectRatio = !1,
            o.t1.defaults.color = n.bodySecondary,
            o.t1.defaults.font.family = l,
            o.t1.defaults.font.size = 13,
            o.t1.defaults.layout.padding = 0,
            o.t1.defaults.plugins.legend.display = !1,
            o.t1.defaults.elements.point.radius = 0,
            o.t1.defaults.elements.point.backgroundColor = n.primary,
            o.t1.defaults.elements.line.tension = .4,
            o.t1.defaults.elements.line.borderWidth = 2,
            o.t1.defaults.elements.line.borderColor = n.primary,
            o.t1.defaults.elements.line.backgroundColor = e => {
                const t = e.chart
                  , {ctx: i, chartArea: a} = t;
                if (a)
                    return function(e, t, i) {
                        let a, s, o;
                        const r = t.right - t.left
                          , n = t.bottom - t.top;
                        return o && a === r && s === n || (a = r,
                        s = n,
                        o = e.createLinearGradient(0, t.bottom, 0, t.top),
                        i.forEach(( (e, t) => {
                            o.addColorStop(t / (i.length - 1), e)
                        }
                        ))),
                        o
                    }(i, a, [n.transparent, n.primaryTranslucent, n.primaryTranslucent])
            }
            ,
            o.t1.defaults.elements.line.borderCapStyle = "rounded",
            o.t1.defaults.elements.line.fill = !0,
            o.t1.defaults.elements.bar.backgroundColor = n.primary,
            o.t1.defaults.elements.bar.borderWidth = 0,
            o.t1.defaults.elements.bar.borderRadius = 6,
            o.t1.defaults.elements.bar.borderSkipped = !1,
            o.t1.defaults.datasets.bar.maxBarThickness = 12,
            o.t1.defaults.elements.arc.backgroundColor = n.primary,
            o.t1.defaults.elements.arc.borderWidth = 4,
            o.t1.defaults.elements.arc.borderColor = n.bodyBg,
            o.t1.defaults.elements.arc.hoverBorderColor = n.bodyBg,
            o.t1.defaults.plugins.tooltip.enabled = !1,
            o.t1.defaults.plugins.tooltip.mode = "index",
            o.t1.defaults.plugins.tooltip.intersect = !1,
            o.t1.defaults.plugins.tooltip.external = c,
            o.t1.defaults.datasets.doughnut.cutout = "83%",
            o.t1.defaults.scales.linear.border = {
                ...o.t1.defaults.scales.linear.border,
                display: !1,
                dash: [3],
                dashOffset: [2]
            },
            o.t1.defaults.scales.linear.grid = {
                ...o.t1.defaults.scales.linear.grid,
                color: n.border,
                drawTicks: !1
            },
            o.t1.defaults.scales.linear.beginAtZero = !0,
            o.t1.defaults.scales.linear.ticks.padding = 10,
            o.t1.defaults.scales.linear.ticks.stepSize = 10,
            o.t1.defaults.scales.category.border = {
                ...o.t1.defaults.scales.category.border,
                display: !1
            },
            o.t1.defaults.scales.category.grid = {
                ...o.t1.defaults.scales.category.grid,
                display: !1,
                drawTicks: !1,
                drawOnChartArea: !1
            },
            o.t1.defaults.scales.category.ticks.padding = 20,
            o.t1.defaults.scales.category.ticks.autoSkip = !0,
            o.t1.defaults.scales.category.ticks.maxRotation = 0,
            o.t1.defaults.scales.category.ticks.minRotation = 0,
            o.t1.defaults.scales.time.border = {
                ...o.t1.defaults.scales.category.border,
                display: !1
            },
            o.t1.defaults.scales.time.grid = {
                ...o.t1.defaults.scales.category.grid,
                display: !1,
                drawTicks: !1,
                drawOnChartArea: !1
            },
            o.t1.defaults.scales.time.ticks.padding = 20,
            o.t1.defaults.scales.time.ticks.autoSkip = !0,
            o.t1.defaults.scales.time.ticks.maxRotation = 0,
            o.t1.defaults.scales.time.ticks.minRotation = 0,
            window.Chart = o.t1;
            var h = function(e, t) {
                return h = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                ,
                h(e, t)
            };
            function d(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function i() {
                    this.constructor = e
                }
                h(e, t),
                e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
            var u = function() {
                return u = Object.assign || function(e) {
                    for (var t, i = 1, a = arguments.length; i < a; i++)
                        for (var s in t = arguments[i])
                            Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }
                ,
                u.apply(this, arguments)
            };
            function p(e, t, i) {
                if (i || 2 === arguments.length)
                    for (var a, s = 0, o = t.length; s < o; s++)
                        !a && s in t || (a || (a = Array.prototype.slice.call(t, 0, s)),
                        a[s] = t[s]);
                return e.concat(a || Array.prototype.slice.call(t))
            }
            "function" == typeof SuppressedError && SuppressedError;
            var m, f = "ADD_CHOICE", y = "REMOVE_CHOICE", v = "FILTER_CHOICES", g = "ACTIVATE_CHOICES", b = "CLEAR_CHOICES", _ = "ADD_GROUP", C = "ADD_ITEM", E = "REMOVE_ITEM", w = "HIGHLIGHT_ITEM", A = "showDropdown", M = "hideDropdown", L = "change", S = "choice", k = "search", x = "addItem", F = "removeItem", I = "highlightItem", Z = "highlightChoice", T = "unhighlightItem", O = ["fuseOptions", "classNames"], H = "text", N = "select-one", D = "select-multiple", P = function(e) {
                return {
                    type: y,
                    choice: e
                }
            }, z = function(e) {
                return {
                    type: E,
                    item: e
                }
            }, V = function(e, t) {
                return {
                    type: w,
                    item: e,
                    highlighted: t
                }
            }, R = function(e) {
                return Array.from({
                    length: e
                }, (function() {
                    return (e = 0,
                    t = 36,
                    Math.floor(Math.random() * (t - e) + e)).toString(36);
                    var e, t
                }
                )).join("")
            }, $ = function(e) {
                if ("string" != typeof e) {
                    if (null == e)
                        return "";
                    if ("object" == typeof e) {
                        if ("raw"in e)
                            return $(e.raw);
                        if ("trusted"in e)
                            return e.trusted
                    }
                    return e
                }
                return e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;")
            }, U = (m = document.createElement("div"),
            function(e) {
                m.innerHTML = e.trim();
                for (var t = m.children[0]; m.firstChild; )
                    m.removeChild(m.firstChild);
                return t
            }
            ), B = function(e, t) {
                return "function" == typeof e ? e($(t), t) : e
            }, j = function(e) {
                return "function" == typeof e ? e() : e
            }, q = function(e) {
                if ("string" == typeof e)
                    return e;
                if ("object" == typeof e) {
                    if ("trusted"in e)
                        return e.trusted;
                    if ("raw"in e)
                        return e.raw
                }
                return ""
            }, K = function(e, t) {
                return e ? function(e) {
                    if ("string" == typeof e)
                        return e;
                    if ("object" == typeof e) {
                        if ("escaped"in e)
                            return e.escaped;
                        if ("trusted"in e)
                            return e.trusted
                    }
                    return ""
                }(t) : $(t)
            }, W = function(e, t, i) {
                e.innerHTML = K(t, i)
            }, G = function(e, t) {
                return e.rank - t.rank
            }, Q = function(e) {
                return Array.isArray(e) ? e : [e]
            }, Y = function(e) {
                return e && Array.isArray(e) ? e.map((function(e) {
                    return ".".concat(e)
                }
                )).join("") : ".".concat(e)
            }, X = function(e, t) {
                var i;
                (i = e.classList).add.apply(i, Q(t))
            }, J = function(e, t) {
                var i;
                (i = e.classList).remove.apply(i, Q(t))
            }, ee = function(e) {
                if (void 0 !== e)
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                return {}
            }, te = function() {
                function e(e) {
                    var t = e.element
                      , i = e.type
                      , a = e.classNames;
                    this.element = t,
                    this.classNames = a,
                    this.type = i,
                    this.isActive = !1
                }
                return e.prototype.show = function() {
                    return X(this.element, this.classNames.activeState),
                    this.element.setAttribute("aria-expanded", "true"),
                    this.isActive = !0,
                    this
                }
                ,
                e.prototype.hide = function() {
                    return J(this.element, this.classNames.activeState),
                    this.element.setAttribute("aria-expanded", "false"),
                    this.isActive = !1,
                    this
                }
                ,
                e
            }(), ie = function() {
                function e(e) {
                    var t = e.element
                      , i = e.type
                      , a = e.classNames
                      , s = e.position;
                    this.element = t,
                    this.classNames = a,
                    this.type = i,
                    this.position = s,
                    this.isOpen = !1,
                    this.isFlipped = !1,
                    this.isDisabled = !1,
                    this.isLoading = !1
                }
                return e.prototype.shouldFlip = function(e, t) {
                    var i = !1;
                    return "auto" === this.position ? i = this.element.getBoundingClientRect().top - t >= 0 && !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (i = !0),
                    i
                }
                ,
                e.prototype.setActiveDescendant = function(e) {
                    this.element.setAttribute("aria-activedescendant", e)
                }
                ,
                e.prototype.removeActiveDescendant = function() {
                    this.element.removeAttribute("aria-activedescendant")
                }
                ,
                e.prototype.open = function(e, t) {
                    X(this.element, this.classNames.openState),
                    this.element.setAttribute("aria-expanded", "true"),
                    this.isOpen = !0,
                    this.shouldFlip(e, t) && (X(this.element, this.classNames.flippedState),
                    this.isFlipped = !0)
                }
                ,
                e.prototype.close = function() {
                    J(this.element, this.classNames.openState),
                    this.element.setAttribute("aria-expanded", "false"),
                    this.removeActiveDescendant(),
                    this.isOpen = !1,
                    this.isFlipped && (J(this.element, this.classNames.flippedState),
                    this.isFlipped = !1)
                }
                ,
                e.prototype.addFocusState = function() {
                    X(this.element, this.classNames.focusState)
                }
                ,
                e.prototype.removeFocusState = function() {
                    J(this.element, this.classNames.focusState)
                }
                ,
                e.prototype.enable = function() {
                    J(this.element, this.classNames.disabledState),
                    this.element.removeAttribute("aria-disabled"),
                    this.type === N && this.element.setAttribute("tabindex", "0"),
                    this.isDisabled = !1
                }
                ,
                e.prototype.disable = function() {
                    X(this.element, this.classNames.disabledState),
                    this.element.setAttribute("aria-disabled", "true"),
                    this.type === N && this.element.setAttribute("tabindex", "-1"),
                    this.isDisabled = !0
                }
                ,
                e.prototype.wrap = function(e) {
                    var t = this.element
                      , i = e.parentNode;
                    i && (e.nextSibling ? i.insertBefore(t, e.nextSibling) : i.appendChild(t)),
                    t.appendChild(e)
                }
                ,
                e.prototype.unwrap = function(e) {
                    var t = this.element
                      , i = t.parentNode;
                    i && (i.insertBefore(e, t),
                    i.removeChild(t))
                }
                ,
                e.prototype.addLoadingState = function() {
                    X(this.element, this.classNames.loadingState),
                    this.element.setAttribute("aria-busy", "true"),
                    this.isLoading = !0
                }
                ,
                e.prototype.removeLoadingState = function() {
                    J(this.element, this.classNames.loadingState),
                    this.element.removeAttribute("aria-busy"),
                    this.isLoading = !1
                }
                ,
                e
            }(), ae = function() {
                function e(e) {
                    var t = e.element
                      , i = e.type
                      , a = e.classNames
                      , s = e.preventPaste;
                    this.element = t,
                    this.type = i,
                    this.classNames = a,
                    this.preventPaste = s,
                    this.isFocussed = this.element.isEqualNode(document.activeElement),
                    this.isDisabled = t.disabled,
                    this._onPaste = this._onPaste.bind(this),
                    this._onInput = this._onInput.bind(this),
                    this._onFocus = this._onFocus.bind(this),
                    this._onBlur = this._onBlur.bind(this)
                }
                return Object.defineProperty(e.prototype, "placeholder", {
                    set: function(e) {
                        this.element.placeholder = e
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.element.value
                    },
                    set: function(e) {
                        this.element.value = e
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.addEventListeners = function() {
                    var e = this.element;
                    e.addEventListener("paste", this._onPaste),
                    e.addEventListener("input", this._onInput, {
                        passive: !0
                    }),
                    e.addEventListener("focus", this._onFocus, {
                        passive: !0
                    }),
                    e.addEventListener("blur", this._onBlur, {
                        passive: !0
                    })
                }
                ,
                e.prototype.removeEventListeners = function() {
                    var e = this.element;
                    e.removeEventListener("input", this._onInput),
                    e.removeEventListener("paste", this._onPaste),
                    e.removeEventListener("focus", this._onFocus),
                    e.removeEventListener("blur", this._onBlur)
                }
                ,
                e.prototype.enable = function() {
                    this.element.removeAttribute("disabled"),
                    this.isDisabled = !1
                }
                ,
                e.prototype.disable = function() {
                    this.element.setAttribute("disabled", ""),
                    this.isDisabled = !0
                }
                ,
                e.prototype.focus = function() {
                    this.isFocussed || this.element.focus()
                }
                ,
                e.prototype.blur = function() {
                    this.isFocussed && this.element.blur()
                }
                ,
                e.prototype.clear = function(e) {
                    return void 0 === e && (e = !0),
                    this.element.value = "",
                    e && this.setWidth(),
                    this
                }
                ,
                e.prototype.setWidth = function() {
                    var e = this.element;
                    e.style.minWidth = "".concat(e.placeholder.length + 1, "ch"),
                    e.style.width = "".concat(e.value.length + 1, "ch")
                }
                ,
                e.prototype.setActiveDescendant = function(e) {
                    this.element.setAttribute("aria-activedescendant", e)
                }
                ,
                e.prototype.removeActiveDescendant = function() {
                    this.element.removeAttribute("aria-activedescendant")
                }
                ,
                e.prototype._onInput = function() {
                    this.type !== N && this.setWidth()
                }
                ,
                e.prototype._onPaste = function(e) {
                    this.preventPaste && e.preventDefault()
                }
                ,
                e.prototype._onFocus = function() {
                    this.isFocussed = !0
                }
                ,
                e.prototype._onBlur = function() {
                    this.isFocussed = !1
                }
                ,
                e
            }(), se = function() {
                function e(e) {
                    var t = e.element;
                    this.element = t,
                    this.scrollPos = this.element.scrollTop,
                    this.height = this.element.offsetHeight
                }
                return e.prototype.prepend = function(e) {
                    var t = this.element.firstElementChild;
                    t ? this.element.insertBefore(e, t) : this.element.append(e)
                }
                ,
                e.prototype.scrollToTop = function() {
                    this.element.scrollTop = 0
                }
                ,
                e.prototype.scrollToChildElement = function(e, t) {
                    var i = this;
                    if (e) {
                        var a = this.element.offsetHeight
                          , s = this.element.scrollTop + a
                          , o = e.offsetHeight
                          , r = e.offsetTop + o
                          , n = t > 0 ? this.element.scrollTop + r - s : e.offsetTop;
                        requestAnimationFrame((function() {
                            i._animateScroll(n, t)
                        }
                        ))
                    }
                }
                ,
                e.prototype._scrollDown = function(e, t, i) {
                    var a = (i - e) / t
                      , s = a > 1 ? a : 1;
                    this.element.scrollTop = e + s
                }
                ,
                e.prototype._scrollUp = function(e, t, i) {
                    var a = (e - i) / t
                      , s = a > 1 ? a : 1;
                    this.element.scrollTop = e - s
                }
                ,
                e.prototype._animateScroll = function(e, t) {
                    var i = this
                      , a = this.element.scrollTop
                      , s = !1;
                    t > 0 ? (this._scrollDown(a, 4, e),
                    a < e && (s = !0)) : (this._scrollUp(a, 4, e),
                    a > e && (s = !0)),
                    s && requestAnimationFrame((function() {
                        i._animateScroll(e, t)
                    }
                    ))
                }
                ,
                e
            }(), oe = function() {
                function e(e) {
                    var t = e.element
                      , i = e.classNames;
                    this.element = t,
                    this.classNames = i,
                    this.isDisabled = !1
                }
                return Object.defineProperty(e.prototype, "isActive", {
                    get: function() {
                        return "active" === this.element.dataset.choice
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "dir", {
                    get: function() {
                        return this.element.dir
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.element.value
                    },
                    set: function(e) {
                        this.element.setAttribute("value", e),
                        this.element.value = e
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.conceal = function() {
                    var e = this.element;
                    X(e, this.classNames.input),
                    e.hidden = !0,
                    e.tabIndex = -1;
                    var t = e.getAttribute("style");
                    t && e.setAttribute("data-choice-orig-style", t),
                    e.setAttribute("data-choice", "active")
                }
                ,
                e.prototype.reveal = function() {
                    var e = this.element;
                    J(e, this.classNames.input),
                    e.hidden = !1,
                    e.removeAttribute("tabindex");
                    var t = e.getAttribute("data-choice-orig-style");
                    t ? (e.removeAttribute("data-choice-orig-style"),
                    e.setAttribute("style", t)) : e.removeAttribute("style"),
                    e.removeAttribute("data-choice")
                }
                ,
                e.prototype.enable = function() {
                    this.element.removeAttribute("disabled"),
                    this.element.disabled = !1,
                    this.isDisabled = !1
                }
                ,
                e.prototype.disable = function() {
                    this.element.setAttribute("disabled", ""),
                    this.element.disabled = !0,
                    this.isDisabled = !0
                }
                ,
                e.prototype.triggerEvent = function(e, t) {
                    !function(e, t, i) {
                        void 0 === i && (i = null);
                        var a = new CustomEvent(t,{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        });
                        e.dispatchEvent(a)
                    }(this.element, e, t || {})
                }
                ,
                e
            }(), re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d(t, e),
                t
            }(oe), ne = function(e, t) {
                return void 0 === t && (t = !0),
                void 0 === e ? t : !!e
            }, le = function(e) {
                if ("string" == typeof e && (e = e.split(" ").filter((function(e) {
                    return e.length
                }
                ))),
                Array.isArray(e) && e.length)
                    return e
            }, ce = function(e, t) {
                if ("string" == typeof e)
                    return ce({
                        value: e,
                        label: e
                    }, !1);
                var i = e;
                if ("choices"in i) {
                    if (!t)
                        throw new TypeError("optGroup is not allowed");
                    var a = i
                      , s = a.choices.map((function(e) {
                        return ce(e, !1)
                    }
                    ));
                    return {
                        id: 0,
                        label: q(a.label) || a.value,
                        active: !!s.length,
                        disabled: !!a.disabled,
                        choices: s
                    }
                }
                var o = i;
                return {
                    id: 0,
                    group: null,
                    score: 0,
                    rank: 0,
                    value: o.value,
                    label: o.label || o.value,
                    active: ne(o.active),
                    selected: ne(o.selected, !1),
                    disabled: ne(o.disabled, !1),
                    placeholder: ne(o.placeholder, !1),
                    highlighted: !1,
                    labelClass: le(o.labelClass),
                    labelDescription: o.labelDescription,
                    customProperties: o.customProperties
                }
            }, he = function(e) {
                return "SELECT" === e.tagName
            }, de = function(e) {
                function t(t) {
                    var i = t.element
                      , a = t.classNames
                      , s = t.template
                      , o = t.extractPlaceholder
                      , r = e.call(this, {
                        element: i,
                        classNames: a
                    }) || this;
                    return r.template = s,
                    r.extractPlaceholder = o,
                    r
                }
                return d(t, e),
                Object.defineProperty(t.prototype, "placeholderOption", {
                    get: function() {
                        return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]")
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.addOptions = function(e) {
                    var t = this
                      , i = document.createDocumentFragment();
                    e.forEach((function(e) {
                        var a = e;
                        if (!a.element) {
                            var s = t.template(a);
                            i.appendChild(s),
                            a.element = s
                        }
                    }
                    )),
                    this.element.appendChild(i)
                }
                ,
                t.prototype.optionsAsChoices = function() {
                    var e = this
                      , t = [];
                    return this.element.querySelectorAll(":scope > option, :scope > optgroup").forEach((function(i) {
                        !function(e) {
                            return "OPTION" === e.tagName
                        }(i) ? function(e) {
                            return "OPTGROUP" === e.tagName
                        }(i) && t.push(e._optgroupToChoice(i)) : t.push(e._optionToChoice(i))
                    }
                    )),
                    t
                }
                ,
                t.prototype._optionToChoice = function(e) {
                    return !e.hasAttribute("value") && e.hasAttribute("placeholder") && (e.setAttribute("value", ""),
                    e.value = ""),
                    {
                        id: 0,
                        group: null,
                        score: 0,
                        rank: 0,
                        value: e.value,
                        label: e.innerHTML,
                        element: e,
                        active: !0,
                        selected: this.extractPlaceholder ? e.selected : e.hasAttribute("selected"),
                        disabled: e.disabled,
                        highlighted: !1,
                        placeholder: this.extractPlaceholder && (!e.value || e.hasAttribute("placeholder")),
                        labelClass: void 0 !== e.dataset.labelClass ? le(e.dataset.labelClass) : void 0,
                        labelDescription: void 0 !== e.dataset.labelDescription ? e.dataset.labelDescription : void 0,
                        customProperties: ee(e.dataset.customProperties)
                    }
                }
                ,
                t.prototype._optgroupToChoice = function(e) {
                    var t = this
                      , i = e.querySelectorAll("option")
                      , a = Array.from(i).map((function(e) {
                        return t._optionToChoice(e)
                    }
                    ));
                    return {
                        id: 0,
                        label: e.label || "",
                        element: e,
                        active: !!a.length,
                        disabled: e.disabled,
                        choices: a
                    }
                }
                ,
                t
            }(oe), ue = {
                items: [],
                choices: [],
                silent: !1,
                renderChoiceLimit: -1,
                maxItemCount: -1,
                closeDropdownOnSelect: "auto",
                singleModeForMultiSelect: !1,
                addChoices: !1,
                addItems: !0,
                addItemFilter: function(e) {
                    return !!e && "" !== e
                },
                removeItems: !0,
                removeItemButton: !1,
                removeItemButtonAlignLeft: !1,
                editItems: !1,
                allowHTML: !1,
                allowHtmlUserInput: !1,
                duplicateItemsAllowed: !0,
                delimiter: ",",
                paste: !0,
                searchEnabled: !0,
                searchChoices: !0,
                searchFloor: 1,
                searchResultLimit: 4,
                searchFields: ["label", "value"],
                position: "auto",
                resetScrollPosition: !0,
                shouldSort: !0,
                shouldSortItems: !1,
                sorter: function(e, t) {
                    var i = e.value
                      , a = e.label
                      , s = void 0 === a ? i : a
                      , o = t.value
                      , r = t.label
                      , n = void 0 === r ? o : r;
                    return q(s).localeCompare(q(n), [], {
                        sensitivity: "base",
                        ignorePunctuation: !0,
                        numeric: !0
                    })
                },
                shadowRoot: null,
                placeholder: !0,
                placeholderValue: null,
                searchPlaceholderValue: null,
                prependValue: null,
                appendValue: null,
                renderSelectedChoices: "auto",
                loadingText: "Loading...",
                noResultsText: "No results found",
                noChoicesText: "No choices to choose from",
                itemSelectText: "Press to select",
                uniqueItemText: "Only unique values can be added",
                customAddItemText: "Only values matching specific conditions can be added",
                addItemText: function(e) {
                    return 'Press Enter to add <b>"'.concat(e, '"</b>')
                },
                removeItemIconText: function() {
                    return "Remove item"
                },
                removeItemLabelText: function(e) {
                    return "Remove item: ".concat(e)
                },
                maxItemText: function(e) {
                    return "Only ".concat(e, " values can be added")
                },
                valueComparer: function(e, t) {
                    return e === t
                },
                fuseOptions: {
                    includeScore: !0
                },
                labelId: "",
                callbackOnInit: null,
                callbackOnCreateTemplates: null,
                classNames: {
                    containerOuter: ["choices"],
                    containerInner: ["choices__inner"],
                    input: ["choices__input"],
                    inputCloned: ["choices__input--cloned"],
                    list: ["choices__list"],
                    listItems: ["choices__list--multiple"],
                    listSingle: ["choices__list--single"],
                    listDropdown: ["choices__list--dropdown"],
                    item: ["choices__item"],
                    itemSelectable: ["choices__item--selectable"],
                    itemDisabled: ["choices__item--disabled"],
                    itemChoice: ["choices__item--choice"],
                    description: ["choices__description"],
                    placeholder: ["choices__placeholder"],
                    group: ["choices__group"],
                    groupHeading: ["choices__heading"],
                    button: ["choices__button"],
                    activeState: ["is-active"],
                    focusState: ["is-focused"],
                    openState: ["is-open"],
                    disabledState: ["is-disabled"],
                    highlightedState: ["is-highlighted"],
                    selectedState: ["is-selected"],
                    flippedState: ["is-flipped"],
                    loadingState: ["is-loading"],
                    notice: ["choices__notice"],
                    addChoice: ["choices__item--selectable", "add-choice"],
                    noResults: ["has-no-results"],
                    noChoices: ["has-no-choices"]
                },
                appendGroupInSearch: !1
            }, pe = function(e) {
                var t = e.itemEl;
                t && (t.remove(),
                e.itemEl = void 0)
            };
            var me = {
                groups: function(e, t) {
                    var i = e
                      , a = !0;
                    switch (t.type) {
                    case _:
                        i.push(t.group);
                        break;
                    case b:
                        i = [];
                        break;
                    default:
                        a = !1
                    }
                    return {
                        state: i,
                        update: a
                    }
                },
                items: function(e, t, i) {
                    var a = e
                      , s = !0;
                    switch (t.type) {
                    case C:
                        t.item.selected = !0,
                        (o = t.item.element) && (o.selected = !0,
                        o.setAttribute("selected", "")),
                        a.push(t.item);
                        break;
                    case E:
                        var o;
                        if (t.item.selected = !1,
                        o = t.item.element) {
                            o.selected = !1,
                            o.removeAttribute("selected");
                            var r = o.parentElement;
                            r && he(r) && r.type === N && (r.value = "")
                        }
                        pe(t.item),
                        a = a.filter((function(e) {
                            return e.id !== t.item.id
                        }
                        ));
                        break;
                    case y:
                        pe(t.choice),
                        a = a.filter((function(e) {
                            return e.id !== t.choice.id
                        }
                        ));
                        break;
                    case w:
                        var n = t.highlighted
                          , l = a.find((function(e) {
                            return e.id === t.item.id
                        }
                        ));
                        l && l.highlighted !== n && (l.highlighted = n,
                        i && function(e, t, i) {
                            var a = e.itemEl;
                            a && (J(a, i),
                            X(a, t))
                        }(l, n ? i.classNames.highlightedState : i.classNames.selectedState, n ? i.classNames.selectedState : i.classNames.highlightedState));
                        break;
                    default:
                        s = !1
                    }
                    return {
                        state: a,
                        update: s
                    }
                },
                choices: function(e, t, i) {
                    var a = e
                      , s = !0;
                    switch (t.type) {
                    case f:
                        a.push(t.choice);
                        break;
                    case y:
                        t.choice.choiceEl = void 0,
                        t.choice.group && (t.choice.group.choices = t.choice.group.choices.filter((function(e) {
                            return e.id !== t.choice.id
                        }
                        ))),
                        a = a.filter((function(e) {
                            return e.id !== t.choice.id
                        }
                        ));
                        break;
                    case C:
                    case E:
                        t.item.choiceEl = void 0;
                        break;
                    case v:
                        var o = [];
                        t.results.forEach((function(e) {
                            o[e.item.id] = e
                        }
                        )),
                        a.forEach((function(e) {
                            var t = o[e.id];
                            void 0 !== t ? (e.score = t.score,
                            e.rank = t.rank,
                            e.active = !0) : (e.score = 0,
                            e.rank = 0,
                            e.active = !1),
                            i && i.appendGroupInSearch && (e.choiceEl = void 0)
                        }
                        ));
                        break;
                    case g:
                        a.forEach((function(e) {
                            e.active = t.active,
                            i && i.appendGroupInSearch && (e.choiceEl = void 0)
                        }
                        ));
                        break;
                    case b:
                        a = [];
                        break;
                    default:
                        s = !1
                    }
                    return {
                        state: a,
                        update: s
                    }
                }
            }
              , fe = function() {
                function e(e) {
                    this._state = this.defaultState,
                    this._listeners = [],
                    this._txn = 0,
                    this._context = e
                }
                return Object.defineProperty(e.prototype, "defaultState", {
                    get: function() {
                        return {
                            groups: [],
                            items: [],
                            choices: []
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.changeSet = function(e) {
                    return {
                        groups: e,
                        items: e,
                        choices: e
                    }
                }
                ,
                e.prototype.reset = function() {
                    this._state = this.defaultState;
                    var e = this.changeSet(!0);
                    this._txn ? this._changeSet = e : this._listeners.forEach((function(t) {
                        return t(e)
                    }
                    ))
                }
                ,
                e.prototype.subscribe = function(e) {
                    return this._listeners.push(e),
                    this
                }
                ,
                e.prototype.dispatch = function(e) {
                    var t = this
                      , i = this._state
                      , a = !1
                      , s = this._changeSet || this.changeSet(!1);
                    Object.keys(me).forEach((function(o) {
                        var r = me[o](i[o], e, t._context);
                        r.update && (a = !0,
                        s[o] = !0,
                        i[o] = r.state)
                    }
                    )),
                    a && (this._txn ? this._changeSet = s : this._listeners.forEach((function(e) {
                        return e(s)
                    }
                    )))
                }
                ,
                e.prototype.withTxn = function(e) {
                    this._txn++;
                    try {
                        e()
                    } finally {
                        if (this._txn = Math.max(0, this._txn - 1),
                        !this._txn) {
                            var t = this._changeSet;
                            t && (this._changeSet = void 0,
                            this._listeners.forEach((function(e) {
                                return e(t)
                            }
                            )))
                        }
                    }
                }
                ,
                Object.defineProperty(e.prototype, "state", {
                    get: function() {
                        return this._state
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "items", {
                    get: function() {
                        return this.state.items
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "highlightedActiveItems", {
                    get: function() {
                        return this.items.filter((function(e) {
                            return !e.disabled && e.active && e.highlighted
                        }
                        ))
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "choices", {
                    get: function() {
                        return this.state.choices
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "activeChoices", {
                    get: function() {
                        return this.choices.filter((function(e) {
                            return e.active
                        }
                        ))
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "searchableChoices", {
                    get: function() {
                        return this.choices.filter((function(e) {
                            return !e.disabled && !e.placeholder
                        }
                        ))
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "groups", {
                    get: function() {
                        return this.state.groups
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "activeGroups", {
                    get: function() {
                        var e = this;
                        return this.state.groups.filter((function(t) {
                            var i = t.active && !t.disabled
                              , a = e.state.choices.some((function(e) {
                                return e.active && !e.disabled
                            }
                            ));
                            return i && a
                        }
                        ), [])
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.inTxn = function() {
                    return this._txn > 0
                }
                ,
                e.prototype.getChoiceById = function(e) {
                    return this.activeChoices.find((function(t) {
                        return t.id === e
                    }
                    ))
                }
                ,
                e.prototype.getGroupById = function(e) {
                    return this.groups.find((function(t) {
                        return t.id === e
                    }
                    ))
                }
                ,
                e
            }()
              , ye = "no-choices"
              , ve = "no-results"
              , ge = "add-choice"
              , be = "";
            function _e(e, t, i) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var a = i.call(e, t || "default");
                            if ("object" != typeof a)
                                return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            function Ce(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    i.push.apply(i, a)
                }
                return i
            }
            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(i), !0).forEach((function(t) {
                        _e(e, t, i[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Ce(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }
                    ))
                }
                return e
            }
            function we(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === Fe(e)
            }
            function Ae(e) {
                return "string" == typeof e
            }
            function Me(e) {
                return "number" == typeof e
            }
            function Le(e) {
                return !0 === e || !1 === e || function(e) {
                    return Se(e) && null !== e
                }(e) && "[object Boolean]" == Fe(e)
            }
            function Se(e) {
                return "object" == typeof e
            }
            function ke(e) {
                return null != e
            }
            function xe(e) {
                return !e.trim().length
            }
            function Fe(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
            }
            const Ie = Object.prototype.hasOwnProperty;
            class Ze {
                constructor(e) {
                    this._keys = [],
                    this._keyMap = {};
                    let t = 0;
                    e.forEach((e => {
                        let i = Te(e);
                        this._keys.push(i),
                        this._keyMap[i.id] = i,
                        t += i.weight
                    }
                    )),
                    this._keys.forEach((e => {
                        e.weight /= t
                    }
                    ))
                }
                get(e) {
                    return this._keyMap[e]
                }
                keys() {
                    return this._keys
                }
                toJSON() {
                    return JSON.stringify(this._keys)
                }
            }
            function Te(e) {
                let t = null
                  , i = null
                  , a = null
                  , s = 1
                  , o = null;
                if (Ae(e) || we(e))
                    a = e,
                    t = Oe(e),
                    i = He(e);
                else {
                    if (!Ie.call(e, "name"))
                        throw new Error((e => `Missing ${e} property in key`)("name"));
                    const r = e.name;
                    if (a = r,
                    Ie.call(e, "weight") && (s = e.weight,
                    s <= 0))
                        throw new Error((e => `Property 'weight' in key '${e}' must be a positive integer`)(r));
                    t = Oe(r),
                    i = He(r),
                    o = e.getFn
                }
                return {
                    path: t,
                    id: i,
                    weight: s,
                    src: a,
                    getFn: o
                }
            }
            function Oe(e) {
                return we(e) ? e : e.split(".")
            }
            function He(e) {
                return we(e) ? e.join(".") : e
            }
            const Ne = {
                useExtendedSearch: !1,
                getFn: function(e, t) {
                    let i = []
                      , a = !1;
                    const s = (e, t, o) => {
                        if (ke(e))
                            if (t[o]) {
                                const r = e[t[o]];
                                if (!ke(r))
                                    return;
                                if (o === t.length - 1 && (Ae(r) || Me(r) || Le(r)))
                                    i.push(function(e) {
                                        return null == e ? "" : function(e) {
                                            if ("string" == typeof e)
                                                return e;
                                            let t = e + "";
                                            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                                        }(e)
                                    }(r));
                                else if (we(r)) {
                                    a = !0;
                                    for (let e = 0, i = r.length; e < i; e += 1)
                                        s(r[e], t, o + 1)
                                } else
                                    t.length && s(r, t, o + 1)
                            } else
                                i.push(e)
                    }
                    ;
                    return s(e, Ae(t) ? t.split(".") : t, 0),
                    a ? i : i[0]
                },
                ignoreLocation: !1,
                ignoreFieldNorm: !1,
                fieldNormWeight: 1
            };
            var De = Ee(Ee(Ee(Ee({}, {
                isCaseSensitive: !1,
                includeScore: !1,
                keys: [],
                shouldSort: !0,
                sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
            }), {
                includeMatches: !1,
                findAllMatches: !1,
                minMatchCharLength: 1
            }), {
                location: 0,
                threshold: .6,
                distance: 100
            }), Ne);
            const Pe = /[^ ]+/g;
            class ze {
                constructor({getFn: e=De.getFn, fieldNormWeight: t=De.fieldNormWeight}={}) {
                    this.norm = function(e=1, t=3) {
                        const i = new Map
                          , a = Math.pow(10, t);
                        return {
                            get(t) {
                                const s = t.match(Pe).length;
                                if (i.has(s))
                                    return i.get(s);
                                const o = 1 / Math.pow(s, .5 * e)
                                  , r = parseFloat(Math.round(o * a) / a);
                                return i.set(s, r),
                                r
                            },
                            clear() {
                                i.clear()
                            }
                        }
                    }(t, 3),
                    this.getFn = e,
                    this.isCreated = !1,
                    this.setIndexRecords()
                }
                setSources(e=[]) {
                    this.docs = e
                }
                setIndexRecords(e=[]) {
                    this.records = e
                }
                setKeys(e=[]) {
                    this.keys = e,
                    this._keysMap = {},
                    e.forEach(( (e, t) => {
                        this._keysMap[e.id] = t
                    }
                    ))
                }
                create() {
                    !this.isCreated && this.docs.length && (this.isCreated = !0,
                    Ae(this.docs[0]) ? this.docs.forEach(( (e, t) => {
                        this._addString(e, t)
                    }
                    )) : this.docs.forEach(( (e, t) => {
                        this._addObject(e, t)
                    }
                    )),
                    this.norm.clear())
                }
                add(e) {
                    const t = this.size();
                    Ae(e) ? this._addString(e, t) : this._addObject(e, t)
                }
                removeAt(e) {
                    this.records.splice(e, 1);
                    for (let t = e, i = this.size(); t < i; t += 1)
                        this.records[t].i -= 1
                }
                getValueForItemAtKeyId(e, t) {
                    return e[this._keysMap[t]]
                }
                size() {
                    return this.records.length
                }
                _addString(e, t) {
                    if (!ke(e) || xe(e))
                        return;
                    let i = {
                        v: e,
                        i: t,
                        n: this.norm.get(e)
                    };
                    this.records.push(i)
                }
                _addObject(e, t) {
                    let i = {
                        i: t,
                        $: {}
                    };
                    this.keys.forEach(( (t, a) => {
                        let s = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
                        if (ke(s))
                            if (we(s)) {
                                let e = [];
                                const t = [{
                                    nestedArrIndex: -1,
                                    value: s
                                }];
                                for (; t.length; ) {
                                    const {nestedArrIndex: i, value: a} = t.pop();
                                    if (ke(a))
                                        if (Ae(a) && !xe(a)) {
                                            let t = {
                                                v: a,
                                                i,
                                                n: this.norm.get(a)
                                            };
                                            e.push(t)
                                        } else
                                            we(a) && a.forEach(( (e, i) => {
                                                t.push({
                                                    nestedArrIndex: i,
                                                    value: e
                                                })
                                            }
                                            ))
                                }
                                i.$[a] = e
                            } else if (Ae(s) && !xe(s)) {
                                let e = {
                                    v: s,
                                    n: this.norm.get(s)
                                };
                                i.$[a] = e
                            }
                    }
                    )),
                    this.records.push(i)
                }
                toJSON() {
                    return {
                        keys: this.keys,
                        records: this.records
                    }
                }
            }
            function Ve(e, t, {getFn: i=De.getFn, fieldNormWeight: a=De.fieldNormWeight}={}) {
                const s = new ze({
                    getFn: i,
                    fieldNormWeight: a
                });
                return s.setKeys(e.map(Te)),
                s.setSources(t),
                s.create(),
                s
            }
            function Re(e, {errors: t=0, currentLocation: i=0, expectedLocation: a=0, distance: s=De.distance, ignoreLocation: o=De.ignoreLocation}={}) {
                const r = t / e.length;
                if (o)
                    return r;
                const n = Math.abs(a - i);
                return s ? r + n / s : n ? 1 : r
            }
            const $e = 32;
            function Ue(e, t, i, {location: a=De.location, distance: s=De.distance, threshold: o=De.threshold, findAllMatches: r=De.findAllMatches, minMatchCharLength: n=De.minMatchCharLength, includeMatches: l=De.includeMatches, ignoreLocation: c=De.ignoreLocation}={}) {
                if (t.length > $e)
                    throw new Error(`Pattern length exceeds max of ${$e}.`);
                const h = t.length
                  , d = e.length
                  , u = Math.max(0, Math.min(a, d));
                let p = o
                  , m = u;
                const f = n > 1 || l
                  , y = f ? Array(d) : [];
                let v;
                for (; (v = e.indexOf(t, m)) > -1; ) {
                    let e = Re(t, {
                        currentLocation: v,
                        expectedLocation: u,
                        distance: s,
                        ignoreLocation: c
                    });
                    if (p = Math.min(e, p),
                    m = v + h,
                    f) {
                        let e = 0;
                        for (; e < h; )
                            y[v + e] = 1,
                            e += 1
                    }
                }
                m = -1;
                let g = []
                  , b = 1
                  , _ = h + d;
                const C = 1 << h - 1;
                for (let a = 0; a < h; a += 1) {
                    let o = 0
                      , n = _;
                    for (; o < n; ) {
                        Re(t, {
                            errors: a,
                            currentLocation: u + n,
                            expectedLocation: u,
                            distance: s,
                            ignoreLocation: c
                        }) <= p ? o = n : _ = n,
                        n = Math.floor((_ - o) / 2 + o)
                    }
                    _ = n;
                    let l = Math.max(1, u - n + 1)
                      , v = r ? d : Math.min(u + n, d) + h
                      , E = Array(v + 2);
                    E[v + 1] = (1 << a) - 1;
                    for (let o = v; o >= l; o -= 1) {
                        let r = o - 1
                          , n = i[e.charAt(r)];
                        if (f && (y[r] = +!!n),
                        E[o] = (E[o + 1] << 1 | 1) & n,
                        a && (E[o] |= (g[o + 1] | g[o]) << 1 | 1 | g[o + 1]),
                        E[o] & C && (b = Re(t, {
                            errors: a,
                            currentLocation: r,
                            expectedLocation: u,
                            distance: s,
                            ignoreLocation: c
                        }),
                        b <= p)) {
                            if (p = b,
                            m = r,
                            m <= u)
                                break;
                            l = Math.max(1, 2 * u - m)
                        }
                    }
                    if (Re(t, {
                        errors: a + 1,
                        currentLocation: u,
                        expectedLocation: u,
                        distance: s,
                        ignoreLocation: c
                    }) > p)
                        break;
                    g = E
                }
                const E = {
                    isMatch: m >= 0,
                    score: Math.max(.001, b)
                };
                if (f) {
                    const e = function(e=[], t=De.minMatchCharLength) {
                        let i = []
                          , a = -1
                          , s = -1
                          , o = 0;
                        for (let r = e.length; o < r; o += 1) {
                            let r = e[o];
                            r && -1 === a ? a = o : r || -1 === a || (s = o - 1,
                            s - a + 1 >= t && i.push([a, s]),
                            a = -1)
                        }
                        return e[o - 1] && o - a >= t && i.push([a, o - 1]),
                        i
                    }(y, n);
                    e.length ? l && (E.indices = e) : E.isMatch = !1
                }
                return E
            }
            function Be(e) {
                let t = {};
                for (let i = 0, a = e.length; i < a; i += 1) {
                    const s = e.charAt(i);
                    t[s] = (t[s] || 0) | 1 << a - i - 1
                }
                return t
            }
            class je {
                constructor(e, {location: t=De.location, threshold: i=De.threshold, distance: a=De.distance, includeMatches: s=De.includeMatches, findAllMatches: o=De.findAllMatches, minMatchCharLength: r=De.minMatchCharLength, isCaseSensitive: n=De.isCaseSensitive, ignoreLocation: l=De.ignoreLocation}={}) {
                    if (this.options = {
                        location: t,
                        threshold: i,
                        distance: a,
                        includeMatches: s,
                        findAllMatches: o,
                        minMatchCharLength: r,
                        isCaseSensitive: n,
                        ignoreLocation: l
                    },
                    this.pattern = n ? e : e.toLowerCase(),
                    this.chunks = [],
                    !this.pattern.length)
                        return;
                    const c = (e, t) => {
                        this.chunks.push({
                            pattern: e,
                            alphabet: Be(e),
                            startIndex: t
                        })
                    }
                      , h = this.pattern.length;
                    if (h > $e) {
                        let e = 0;
                        const t = h % $e
                          , i = h - t;
                        for (; e < i; )
                            c(this.pattern.substr(e, $e), e),
                            e += $e;
                        if (t) {
                            const e = h - $e;
                            c(this.pattern.substr(e), e)
                        }
                    } else
                        c(this.pattern, 0)
                }
                searchIn(e) {
                    const {isCaseSensitive: t, includeMatches: i} = this.options;
                    if (t || (e = e.toLowerCase()),
                    this.pattern === e) {
                        let t = {
                            isMatch: !0,
                            score: 0
                        };
                        return i && (t.indices = [[0, e.length - 1]]),
                        t
                    }
                    const {location: a, distance: s, threshold: o, findAllMatches: r, minMatchCharLength: n, ignoreLocation: l} = this.options;
                    let c = []
                      , h = 0
                      , d = !1;
                    this.chunks.forEach(( ({pattern: t, alphabet: u, startIndex: p}) => {
                        const {isMatch: m, score: f, indices: y} = Ue(e, t, u, {
                            location: a + p,
                            distance: s,
                            threshold: o,
                            findAllMatches: r,
                            minMatchCharLength: n,
                            includeMatches: i,
                            ignoreLocation: l
                        });
                        m && (d = !0),
                        h += f,
                        m && y && (c = [...c, ...y])
                    }
                    ));
                    let u = {
                        isMatch: d,
                        score: d ? h / this.chunks.length : 1
                    };
                    return d && i && (u.indices = c),
                    u
                }
            }
            class qe {
                constructor(e) {
                    this.pattern = e
                }
                static isMultiMatch(e) {
                    return Ke(e, this.multiRegex)
                }
                static isSingleMatch(e) {
                    return Ke(e, this.singleRegex)
                }
                search() {}
            }
            function Ke(e, t) {
                const i = e.match(t);
                return i ? i[1] : null
            }
            class We extends qe {
                constructor(e, {location: t=De.location, threshold: i=De.threshold, distance: a=De.distance, includeMatches: s=De.includeMatches, findAllMatches: o=De.findAllMatches, minMatchCharLength: r=De.minMatchCharLength, isCaseSensitive: n=De.isCaseSensitive, ignoreLocation: l=De.ignoreLocation}={}) {
                    super(e),
                    this._bitapSearch = new je(e,{
                        location: t,
                        threshold: i,
                        distance: a,
                        includeMatches: s,
                        findAllMatches: o,
                        minMatchCharLength: r,
                        isCaseSensitive: n,
                        ignoreLocation: l
                    })
                }
                static get type() {
                    return "fuzzy"
                }
                static get multiRegex() {
                    return /^"(.*)"$/
                }
                static get singleRegex() {
                    return /^(.*)$/
                }
                search(e) {
                    return this._bitapSearch.searchIn(e)
                }
            }
            class Ge extends qe {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "include"
                }
                static get multiRegex() {
                    return /^'"(.*)"$/
                }
                static get singleRegex() {
                    return /^'(.*)$/
                }
                search(e) {
                    let t, i = 0;
                    const a = []
                      , s = this.pattern.length;
                    for (; (t = e.indexOf(this.pattern, i)) > -1; )
                        i = t + s,
                        a.push([t, i - 1]);
                    const o = !!a.length;
                    return {
                        isMatch: o,
                        score: o ? 0 : 1,
                        indices: a
                    }
                }
            }
            const Qe = [class extends qe {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "exact"
                }
                static get multiRegex() {
                    return /^="(.*)"$/
                }
                static get singleRegex() {
                    return /^=(.*)$/
                }
                search(e) {
                    const t = e === this.pattern;
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [0, this.pattern.length - 1]
                    }
                }
            }
            , Ge, class extends qe {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "prefix-exact"
                }
                static get multiRegex() {
                    return /^\^"(.*)"$/
                }
                static get singleRegex() {
                    return /^\^(.*)$/
                }
                search(e) {
                    const t = e.startsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [0, this.pattern.length - 1]
                    }
                }
            }
            , class extends qe {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "inverse-prefix-exact"
                }
                static get multiRegex() {
                    return /^!\^"(.*)"$/
                }
                static get singleRegex() {
                    return /^!\^(.*)$/
                }
                search(e) {
                    const t = !e.startsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [0, e.length - 1]
                    }
                }
            }
            , class extends qe {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "inverse-suffix-exact"
                }
                static get multiRegex() {
                    return /^!"(.*)"\$$/
                }
                static get singleRegex() {
                    return /^!(.*)\$$/
                }
                search(e) {
                    const t = !e.endsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [0, e.length - 1]
                    }
                }
            }
            , class extends qe {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "suffix-exact"
                }
                static get multiRegex() {
                    return /^"(.*)"\$$/
                }
                static get singleRegex() {
                    return /^(.*)\$$/
                }
                search(e) {
                    const t = e.endsWith(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [e.length - this.pattern.length, e.length - 1]
                    }
                }
            }
            , class extends qe {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "inverse-exact"
                }
                static get multiRegex() {
                    return /^!"(.*)"$/
                }
                static get singleRegex() {
                    return /^!(.*)$/
                }
                search(e) {
                    const t = -1 === e.indexOf(this.pattern);
                    return {
                        isMatch: t,
                        score: t ? 0 : 1,
                        indices: [0, e.length - 1]
                    }
                }
            }
            , We]
              , Ye = Qe.length
              , Xe = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
            const Je = new Set([We.type, Ge.type]);
            class et {
                constructor(e, {isCaseSensitive: t=De.isCaseSensitive, includeMatches: i=De.includeMatches, minMatchCharLength: a=De.minMatchCharLength, ignoreLocation: s=De.ignoreLocation, findAllMatches: o=De.findAllMatches, location: r=De.location, threshold: n=De.threshold, distance: l=De.distance}={}) {
                    this.query = null,
                    this.options = {
                        isCaseSensitive: t,
                        includeMatches: i,
                        minMatchCharLength: a,
                        findAllMatches: o,
                        ignoreLocation: s,
                        location: r,
                        threshold: n,
                        distance: l
                    },
                    this.pattern = t ? e : e.toLowerCase(),
                    this.query = function(e, t={}) {
                        return e.split("|").map((e => {
                            let i = e.trim().split(Xe).filter((e => e && !!e.trim()))
                              , a = [];
                            for (let e = 0, s = i.length; e < s; e += 1) {
                                const s = i[e];
                                let o = !1
                                  , r = -1;
                                for (; !o && ++r < Ye; ) {
                                    const e = Qe[r];
                                    let i = e.isMultiMatch(s);
                                    i && (a.push(new e(i,t)),
                                    o = !0)
                                }
                                if (!o)
                                    for (r = -1; ++r < Ye; ) {
                                        const e = Qe[r];
                                        let i = e.isSingleMatch(s);
                                        if (i) {
                                            a.push(new e(i,t));
                                            break
                                        }
                                    }
                            }
                            return a
                        }
                        ))
                    }(this.pattern, this.options)
                }
                static condition(e, t) {
                    return t.useExtendedSearch
                }
                searchIn(e) {
                    const t = this.query;
                    if (!t)
                        return {
                            isMatch: !1,
                            score: 1
                        };
                    const {includeMatches: i, isCaseSensitive: a} = this.options;
                    e = a ? e : e.toLowerCase();
                    let s = 0
                      , o = []
                      , r = 0;
                    for (let a = 0, n = t.length; a < n; a += 1) {
                        const n = t[a];
                        o.length = 0,
                        s = 0;
                        for (let t = 0, a = n.length; t < a; t += 1) {
                            const a = n[t]
                              , {isMatch: l, indices: c, score: h} = a.search(e);
                            if (!l) {
                                r = 0,
                                s = 0,
                                o.length = 0;
                                break
                            }
                            if (s += 1,
                            r += h,
                            i) {
                                const e = a.constructor.type;
                                Je.has(e) ? o = [...o, ...c] : o.push(c)
                            }
                        }
                        if (s) {
                            let e = {
                                isMatch: !0,
                                score: r / s
                            };
                            return i && (e.indices = o),
                            e
                        }
                    }
                    return {
                        isMatch: !1,
                        score: 1
                    }
                }
            }
            const tt = [];
            function it(e, t) {
                for (let i = 0, a = tt.length; i < a; i += 1) {
                    let a = tt[i];
                    if (a.condition(e, t))
                        return new a(e,t)
                }
                return new je(e,t)
            }
            const at = "$and"
              , st = "$or"
              , ot = "$path"
              , rt = "$val"
              , nt = e => !(!e[at] && !e[st])
              , lt = e => ({
                [at]: Object.keys(e).map((t => ({
                    [t]: e[t]
                })))
            });
            function ct(e, t, {auto: i=!0}={}) {
                const a = e => {
                    let s = Object.keys(e);
                    const o = (e => !!e[ot])(e);
                    if (!o && s.length > 1 && !nt(e))
                        return a(lt(e));
                    if ((e => !we(e) && Se(e) && !nt(e))(e)) {
                        const a = o ? e[ot] : s[0]
                          , r = o ? e[rt] : e[a];
                        if (!Ae(r))
                            throw new Error((e => `Invalid value for key ${e}`)(a));
                        const n = {
                            keyId: He(a),
                            pattern: r
                        };
                        return i && (n.searcher = it(r, t)),
                        n
                    }
                    let r = {
                        children: [],
                        operator: s[0]
                    };
                    return s.forEach((t => {
                        const i = e[t];
                        we(i) && i.forEach((e => {
                            r.children.push(a(e))
                        }
                        ))
                    }
                    )),
                    r
                }
                ;
                return nt(e) || (e = lt(e)),
                a(e)
            }
            function ht(e, t) {
                const i = e.matches;
                t.matches = [],
                ke(i) && i.forEach((e => {
                    if (!ke(e.indices) || !e.indices.length)
                        return;
                    const {indices: i, value: a} = e;
                    let s = {
                        indices: i,
                        value: a
                    };
                    e.key && (s.key = e.key.src),
                    e.idx > -1 && (s.refIndex = e.idx),
                    t.matches.push(s)
                }
                ))
            }
            function dt(e, t) {
                t.score = e.score
            }
            class ut {
                constructor(e, t={}, i) {
                    this.options = Ee(Ee({}, De), t),
                    this.options.useExtendedSearch,
                    this._keyStore = new Ze(this.options.keys),
                    this.setCollection(e, i)
                }
                setCollection(e, t) {
                    if (this._docs = e,
                    t && !(t instanceof ze))
                        throw new Error("Incorrect 'index' type");
                    this._myIndex = t || Ve(this.options.keys, this._docs, {
                        getFn: this.options.getFn,
                        fieldNormWeight: this.options.fieldNormWeight
                    })
                }
                add(e) {
                    ke(e) && (this._docs.push(e),
                    this._myIndex.add(e))
                }
                remove(e= () => !1) {
                    const t = [];
                    for (let i = 0, a = this._docs.length; i < a; i += 1) {
                        const s = this._docs[i];
                        e(s, i) && (this.removeAt(i),
                        i -= 1,
                        a -= 1,
                        t.push(s))
                    }
                    return t
                }
                removeAt(e) {
                    this._docs.splice(e, 1),
                    this._myIndex.removeAt(e)
                }
                getIndex() {
                    return this._myIndex
                }
                search(e, {limit: t=-1}={}) {
                    const {includeMatches: i, includeScore: a, shouldSort: s, sortFn: o, ignoreFieldNorm: r} = this.options;
                    let n = Ae(e) ? Ae(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
                    return function(e, {ignoreFieldNorm: t=De.ignoreFieldNorm}) {
                        e.forEach((e => {
                            let i = 1;
                            e.matches.forEach(( ({key: e, norm: a, score: s}) => {
                                const o = e ? e.weight : null;
                                i *= Math.pow(0 === s && o ? Number.EPSILON : s, (o || 1) * (t ? 1 : a))
                            }
                            )),
                            e.score = i
                        }
                        ))
                    }(n, {
                        ignoreFieldNorm: r
                    }),
                    s && n.sort(o),
                    Me(t) && t > -1 && (n = n.slice(0, t)),
                    function(e, t, {includeMatches: i=De.includeMatches, includeScore: a=De.includeScore}={}) {
                        const s = [];
                        return i && s.push(ht),
                        a && s.push(dt),
                        e.map((e => {
                            const {idx: i} = e
                              , a = {
                                item: t[i],
                                refIndex: i
                            };
                            return s.length && s.forEach((t => {
                                t(e, a)
                            }
                            )),
                            a
                        }
                        ))
                    }(n, this._docs, {
                        includeMatches: i,
                        includeScore: a
                    })
                }
                _searchStringList(e) {
                    const t = it(e, this.options)
                      , {records: i} = this._myIndex
                      , a = [];
                    return i.forEach(( ({v: e, i, n: s}) => {
                        if (!ke(e))
                            return;
                        const {isMatch: o, score: r, indices: n} = t.searchIn(e);
                        o && a.push({
                            item: e,
                            idx: i,
                            matches: [{
                                score: r,
                                value: e,
                                norm: s,
                                indices: n
                            }]
                        })
                    }
                    )),
                    a
                }
                _searchLogical(e) {
                    const t = ct(e, this.options)
                      , i = (e, t, a) => {
                        if (!e.children) {
                            const {keyId: i, searcher: s} = e
                              , o = this._findMatches({
                                key: this._keyStore.get(i),
                                value: this._myIndex.getValueForItemAtKeyId(t, i),
                                searcher: s
                            });
                            return o && o.length ? [{
                                idx: a,
                                item: t,
                                matches: o
                            }] : []
                        }
                        const s = [];
                        for (let o = 0, r = e.children.length; o < r; o += 1) {
                            const r = e.children[o]
                              , n = i(r, t, a);
                            if (n.length)
                                s.push(...n);
                            else if (e.operator === at)
                                return []
                        }
                        return s
                    }
                      , a = this._myIndex.records
                      , s = {}
                      , o = [];
                    return a.forEach(( ({$: e, i: a}) => {
                        if (ke(e)) {
                            let r = i(t, e, a);
                            r.length && (s[a] || (s[a] = {
                                idx: a,
                                item: e,
                                matches: []
                            },
                            o.push(s[a])),
                            r.forEach(( ({matches: e}) => {
                                s[a].matches.push(...e)
                            }
                            )))
                        }
                    }
                    )),
                    o
                }
                _searchObjectList(e) {
                    const t = it(e, this.options)
                      , {keys: i, records: a} = this._myIndex
                      , s = [];
                    return a.forEach(( ({$: e, i: a}) => {
                        if (!ke(e))
                            return;
                        let o = [];
                        i.forEach(( (i, a) => {
                            o.push(...this._findMatches({
                                key: i,
                                value: e[a],
                                searcher: t
                            }))
                        }
                        )),
                        o.length && s.push({
                            idx: a,
                            item: e,
                            matches: o
                        })
                    }
                    )),
                    s
                }
                _findMatches({key: e, value: t, searcher: i}) {
                    if (!ke(t))
                        return [];
                    let a = [];
                    if (we(t))
                        t.forEach(( ({v: t, i: s, n: o}) => {
                            if (!ke(t))
                                return;
                            const {isMatch: r, score: n, indices: l} = i.searchIn(t);
                            r && a.push({
                                score: n,
                                key: e,
                                value: t,
                                idx: s,
                                norm: o,
                                indices: l
                            })
                        }
                        ));
                    else {
                        const {v: s, n: o} = t
                          , {isMatch: r, score: n, indices: l} = i.searchIn(s);
                        r && a.push({
                            score: n,
                            key: e,
                            value: s,
                            norm: o,
                            indices: l
                        })
                    }
                    return a
                }
            }
            ut.version = "7.0.0",
            ut.createIndex = Ve,
            ut.parseIndex = function(e, {getFn: t=De.getFn, fieldNormWeight: i=De.fieldNormWeight}={}) {
                const {keys: a, records: s} = e
                  , o = new ze({
                    getFn: t,
                    fieldNormWeight: i
                });
                return o.setKeys(a),
                o.setIndexRecords(s),
                o
            }
            ,
            ut.config = De,
            ut.parseQuery = ct,
            function(...e) {
                tt.push(...e)
            }(et);
            var pt = function() {
                function e(e) {
                    this._haystack = [],
                    this._fuseOptions = u(u({}, e.fuseOptions), {
                        keys: p([], e.searchFields, !0),
                        includeMatches: !0
                    })
                }
                return e.prototype.index = function(e) {
                    this._haystack = e,
                    this._fuse && this._fuse.setCollection(e)
                }
                ,
                e.prototype.reset = function() {
                    this._haystack = [],
                    this._fuse = void 0
                }
                ,
                e.prototype.isEmptyIndex = function() {
                    return !this._haystack.length
                }
                ,
                e.prototype.search = function(e) {
                    return this._fuse || (this._fuse = new ut(this._haystack,this._fuseOptions)),
                    this._fuse.search(e).map((function(e, t) {
                        return {
                            item: e.item,
                            score: e.score || 0,
                            rank: t + 1
                        }
                    }
                    ))
                }
                ,
                e
            }();
            var mt = function(e, t, i) {
                var a = e.dataset
                  , s = t.customProperties
                  , o = t.labelClass
                  , r = t.labelDescription;
                o && (a.labelClass = Q(o).join(" ")),
                r && (a.labelDescription = r),
                i && s && ("string" == typeof s ? a.customProperties = s : "object" != typeof s || function(e) {
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t))
                            return !1;
                    return !0
                }(s) || (a.customProperties = JSON.stringify(s)))
            }
              , ft = function(e, t, i) {
                var a = t && e.querySelector("label[for='".concat(t, "']"))
                  , s = a && a.innerText;
                s && i.setAttribute("aria-label", s)
            }
              , yt = {
                containerOuter: function(e, t, i, a, s, o, r) {
                    var n = e.classNames.containerOuter
                      , l = document.createElement("div");
                    return X(l, n),
                    l.dataset.type = o,
                    t && (l.dir = t),
                    a && (l.tabIndex = 0),
                    i && (l.setAttribute("role", s ? "combobox" : "listbox"),
                    s ? l.setAttribute("aria-autocomplete", "list") : r || ft(this._docRoot, this.passedElement.element.id, l),
                    l.setAttribute("aria-haspopup", "true"),
                    l.setAttribute("aria-expanded", "false")),
                    r && l.setAttribute("aria-labelledby", r),
                    l
                },
                containerInner: function(e) {
                    var t = e.classNames.containerInner
                      , i = document.createElement("div");
                    return X(i, t),
                    i
                },
                itemList: function(e, t) {
                    var i = e.searchEnabled
                      , a = e.classNames
                      , s = a.list
                      , o = a.listSingle
                      , r = a.listItems
                      , n = document.createElement("div");
                    return X(n, s),
                    X(n, t ? o : r),
                    this._isSelectElement && i && n.setAttribute("role", "listbox"),
                    n
                },
                placeholder: function(e, t) {
                    var i = e.allowHTML
                      , a = e.classNames.placeholder
                      , s = document.createElement("div");
                    return X(s, a),
                    W(s, i, t),
                    s
                },
                item: function(e, t, i) {
                    var a = e.allowHTML
                      , s = e.removeItemButtonAlignLeft
                      , o = e.removeItemIconText
                      , r = e.removeItemLabelText
                      , n = e.classNames
                      , l = n.item
                      , c = n.button
                      , h = n.highlightedState
                      , d = n.itemSelectable
                      , u = n.placeholder
                      , p = q(t.value)
                      , m = document.createElement("div");
                    if (X(m, l),
                    t.labelClass) {
                        var f = document.createElement("span");
                        W(f, a, t.label),
                        X(f, t.labelClass),
                        m.appendChild(f)
                    } else
                        W(m, a, t.label);
                    if (m.dataset.item = "",
                    m.dataset.id = t.id,
                    m.dataset.value = p,
                    mt(m, t, !0),
                    (t.disabled || this.containerOuter.isDisabled) && m.setAttribute("aria-disabled", "true"),
                    this._isSelectElement && (m.setAttribute("aria-selected", "true"),
                    m.setAttribute("role", "option")),
                    t.placeholder && (X(m, u),
                    m.dataset.placeholder = ""),
                    X(m, t.highlighted ? h : d),
                    i) {
                        t.disabled && J(m, d),
                        m.dataset.deletable = "";
                        var y = document.createElement("button");
                        y.type = "button",
                        X(y, c),
                        W(y, !0, B(o, t.value));
                        var v = B(r, t.value);
                        v && y.setAttribute("aria-label", v),
                        y.dataset.button = "",
                        s ? m.insertAdjacentElement("afterbegin", y) : m.appendChild(y)
                    }
                    return m
                },
                choiceList: function(e, t) {
                    var i = e.classNames.list
                      , a = document.createElement("div");
                    return X(a, i),
                    t || a.setAttribute("aria-multiselectable", "true"),
                    a.setAttribute("role", "listbox"),
                    a
                },
                choiceGroup: function(e, t) {
                    var i = e.allowHTML
                      , a = e.classNames
                      , s = a.group
                      , o = a.groupHeading
                      , r = a.itemDisabled
                      , n = t.id
                      , l = t.label
                      , c = t.disabled
                      , h = q(l)
                      , d = document.createElement("div");
                    X(d, s),
                    c && X(d, r),
                    d.setAttribute("role", "group"),
                    d.dataset.group = "",
                    d.dataset.id = n,
                    d.dataset.value = h,
                    c && d.setAttribute("aria-disabled", "true");
                    var u = document.createElement("div");
                    return X(u, o),
                    W(u, i, l || ""),
                    d.appendChild(u),
                    d
                },
                choice: function(e, t, i, a) {
                    var s = e.allowHTML
                      , o = e.classNames
                      , r = o.item
                      , n = o.itemChoice
                      , l = o.itemSelectable
                      , c = o.selectedState
                      , h = o.itemDisabled
                      , d = o.description
                      , u = o.placeholder
                      , p = t.label
                      , m = q(t.value)
                      , f = document.createElement("div");
                    f.id = t.elementId,
                    X(f, r),
                    X(f, n),
                    a && "string" == typeof p && (p = K(s, p),
                    p = {
                        trusted: p += " (".concat(a, ")")
                    });
                    var y = f;
                    if (t.labelClass) {
                        var v = document.createElement("span");
                        W(v, s, p),
                        X(v, t.labelClass),
                        y = v,
                        f.appendChild(v)
                    } else
                        W(f, s, p);
                    if (t.labelDescription) {
                        var g = "".concat(t.elementId, "-description");
                        y.setAttribute("aria-describedby", g);
                        var b = document.createElement("span");
                        W(b, s, t.labelDescription),
                        b.id = g,
                        X(b, d),
                        f.appendChild(b)
                    }
                    return t.selected && X(f, c),
                    t.placeholder && X(f, u),
                    f.setAttribute("role", t.group ? "treeitem" : "option"),
                    f.dataset.choice = "",
                    f.dataset.id = t.id,
                    f.dataset.value = m,
                    i && (f.dataset.selectText = i),
                    t.group && (f.dataset.groupId = "".concat(t.group.id)),
                    mt(f, t, !1),
                    t.disabled ? (X(f, h),
                    f.dataset.choiceDisabled = "",
                    f.setAttribute("aria-disabled", "true")) : (X(f, l),
                    f.dataset.choiceSelectable = ""),
                    f
                },
                input: function(e, t) {
                    var i = e.classNames
                      , a = i.input
                      , s = i.inputCloned
                      , o = e.labelId
                      , r = document.createElement("input");
                    return r.type = "search",
                    X(r, a),
                    X(r, s),
                    r.autocomplete = "off",
                    r.autocapitalize = "off",
                    r.spellcheck = !1,
                    r.setAttribute("role", "textbox"),
                    r.setAttribute("aria-autocomplete", "list"),
                    t ? r.setAttribute("aria-label", t) : o || ft(this._docRoot, this.passedElement.element.id, r),
                    r
                },
                dropdown: function(e) {
                    var t = e.classNames
                      , i = t.list
                      , a = t.listDropdown
                      , s = document.createElement("div");
                    return X(s, i),
                    X(s, a),
                    s.setAttribute("aria-expanded", "false"),
                    s
                },
                notice: function(e, t, i) {
                    var a = e.classNames
                      , s = a.item
                      , o = a.itemChoice
                      , r = a.addChoice
                      , n = a.noResults
                      , l = a.noChoices
                      , c = a.notice;
                    void 0 === i && (i = be);
                    var h = document.createElement("div");
                    switch (W(h, !0, t),
                    X(h, s),
                    X(h, o),
                    X(h, c),
                    i) {
                    case ge:
                        X(h, r);
                        break;
                    case ve:
                        X(h, n);
                        break;
                    case ye:
                        X(h, l)
                    }
                    return i === ge && (h.dataset.choiceSelectable = "",
                    h.dataset.choice = ""),
                    h
                },
                option: function(e) {
                    var t = q(e.label)
                      , i = new Option(t,e.value,!1,e.selected);
                    return mt(i, e, !0),
                    i.disabled = e.disabled,
                    e.selected && i.setAttribute("selected", ""),
                    i
                }
            }
              , vt = "-ms-scroll-limit"in document.documentElement.style && "-ms-ime-align"in document.documentElement.style
              , gt = {}
              , bt = function(e) {
                if (e)
                    return e.dataset.id ? parseInt(e.dataset.id, 10) : void 0
            }
              , _t = "[data-choice-selectable]"
              , Ct = function() {
                function e(t, i) {
                    void 0 === t && (t = "[data-choice]"),
                    void 0 === i && (i = {});
                    var a = this;
                    this.initialisedOK = void 0,
                    this._hasNonChoicePlaceholder = !1,
                    this._lastAddedChoiceId = 0,
                    this._lastAddedGroupId = 0;
                    var s = e.defaults;
                    this.config = u(u(u({}, s.allOptions), s.options), i),
                    O.forEach((function(e) {
                        a.config[e] = u(u(u({}, s.allOptions[e]), s.options[e]), i[e])
                    }
                    ));
                    var o = this.config;
                    o.silent || this._validateConfig();
                    var r = o.shadowRoot || document.documentElement;
                    this._docRoot = r;
                    var n = "string" == typeof t ? r.querySelector(t) : t;
                    if (!n || "object" != typeof n || "INPUT" !== n.tagName && !he(n)) {
                        if (!n && "string" == typeof t)
                            throw TypeError("Selector ".concat(t, " failed to find an element"));
                        throw TypeError("Expected one of the following types text|select-one|select-multiple")
                    }
                    var l = n.type
                      , c = l === H;
                    (c || 1 !== o.maxItemCount) && (o.singleModeForMultiSelect = !1),
                    o.singleModeForMultiSelect && (l = D);
                    var h = l === N
                      , d = l === D
                      , p = h || d;
                    if (this._elementType = l,
                    this._isTextElement = c,
                    this._isSelectOneElement = h,
                    this._isSelectMultipleElement = d,
                    this._isSelectElement = h || d,
                    this._canAddUserChoices = c && o.addItems || p && o.addChoices,
                    "boolean" != typeof o.renderSelectedChoices && (o.renderSelectedChoices = "always" === o.renderSelectedChoices || h),
                    "auto" === o.closeDropdownOnSelect ? o.closeDropdownOnSelect = c || h || o.singleModeForMultiSelect : o.closeDropdownOnSelect = ne(o.closeDropdownOnSelect),
                    o.placeholder && (o.placeholderValue ? this._hasNonChoicePlaceholder = !0 : n.dataset.placeholder && (this._hasNonChoicePlaceholder = !0,
                    o.placeholderValue = n.dataset.placeholder)),
                    i.addItemFilter && "function" != typeof i.addItemFilter) {
                        var m = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
                        o.addItemFilter = m.test.bind(m)
                    }
                    if (this._isTextElement)
                        this.passedElement = new re({
                            element: n,
                            classNames: o.classNames
                        });
                    else {
                        var f = n;
                        this.passedElement = new de({
                            element: f,
                            classNames: o.classNames,
                            template: function(e) {
                                return a._templates.option(e)
                            },
                            extractPlaceholder: o.placeholder && !this._hasNonChoicePlaceholder
                        })
                    }
                    if (this.initialised = !1,
                    this._store = new fe(o),
                    this._currentValue = "",
                    o.searchEnabled = !c && o.searchEnabled || d,
                    this._canSearch = o.searchEnabled,
                    this._isScrollingOnIe = !1,
                    this._highlightPosition = 0,
                    this._wasTap = !0,
                    this._placeholderValue = this._generatePlaceholderValue(),
                    this._baseId = function(e, t) {
                        var i = e.id || e.name && "".concat(e.name, "-").concat(R(2)) || R(4);
                        return i = i.replace(/(:|\.|\[|\]|,)/g, ""),
                        "".concat(t, "-").concat(i)
                    }(n, "choices-"),
                    this._direction = n.dir,
                    !this._direction) {
                        var y = window.getComputedStyle(n).direction;
                        y !== window.getComputedStyle(document.documentElement).direction && (this._direction = y)
                    }
                    if (this._idNames = {
                        itemChoice: "item-choice"
                    },
                    this._templates = s.templates,
                    this._render = this._render.bind(this),
                    this._onFocus = this._onFocus.bind(this),
                    this._onBlur = this._onBlur.bind(this),
                    this._onKeyUp = this._onKeyUp.bind(this),
                    this._onKeyDown = this._onKeyDown.bind(this),
                    this._onInput = this._onInput.bind(this),
                    this._onClick = this._onClick.bind(this),
                    this._onTouchMove = this._onTouchMove.bind(this),
                    this._onTouchEnd = this._onTouchEnd.bind(this),
                    this._onMouseDown = this._onMouseDown.bind(this),
                    this._onMouseOver = this._onMouseOver.bind(this),
                    this._onFormReset = this._onFormReset.bind(this),
                    this._onSelectKey = this._onSelectKey.bind(this),
                    this._onEnterKey = this._onEnterKey.bind(this),
                    this._onEscapeKey = this._onEscapeKey.bind(this),
                    this._onDirectionKey = this._onDirectionKey.bind(this),
                    this._onDeleteKey = this._onDeleteKey.bind(this),
                    this.passedElement.isActive)
                        return o.silent || console.warn("Trying to initialise Choices on element already initialised", {
                            element: t
                        }),
                        this.initialised = !0,
                        void (this.initialisedOK = !1);
                    this.init(),
                    this._initialItems = this._store.items.map((function(e) {
                        return e.value
                    }
                    ))
                }
                return Object.defineProperty(e, "defaults", {
                    get: function() {
                        return Object.preventExtensions({
                            get options() {
                                return gt
                            },
                            get allOptions() {
                                return ue
                            },
                            get templates() {
                                return yt
                            }
                        })
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.init = function() {
                    if (!this.initialised && void 0 === this.initialisedOK) {
                        var e;
                        this._searcher = (e = this.config,
                        new pt(e)),
                        this._loadChoices(),
                        this._createTemplates(),
                        this._createElements(),
                        this._createStructure(),
                        this._isTextElement && !this.config.addItems || this.passedElement.element.hasAttribute("disabled") || this.passedElement.element.closest("fieldset:disabled") ? this.disable() : (this.enable(),
                        this._addEventListeners()),
                        this._initStore(),
                        this.initialised = !0,
                        this.initialisedOK = !0;
                        var t = this.config.callbackOnInit;
                        "function" == typeof t && t.call(this)
                    }
                }
                ,
                e.prototype.destroy = function() {
                    this.initialised && (this._removeEventListeners(),
                    this.passedElement.reveal(),
                    this.containerOuter.unwrap(this.passedElement.element),
                    this._store._listeners = [],
                    this.clearStore(!1),
                    this._stopSearch(),
                    this._templates = e.defaults.templates,
                    this.initialised = !1,
                    this.initialisedOK = void 0)
                }
                ,
                e.prototype.enable = function() {
                    return this.passedElement.isDisabled && this.passedElement.enable(),
                    this.containerOuter.isDisabled && (this._addEventListeners(),
                    this.input.enable(),
                    this.containerOuter.enable()),
                    this
                }
                ,
                e.prototype.disable = function() {
                    return this.passedElement.isDisabled || this.passedElement.disable(),
                    this.containerOuter.isDisabled || (this._removeEventListeners(),
                    this.input.disable(),
                    this.containerOuter.disable()),
                    this
                }
                ,
                e.prototype.highlightItem = function(e, t) {
                    if (void 0 === t && (t = !0),
                    !e || !e.id)
                        return this;
                    var i = this._store.items.find((function(t) {
                        return t.id === e.id
                    }
                    ));
                    return !i || i.highlighted || (this._store.dispatch(V(i, !0)),
                    t && this.passedElement.triggerEvent(I, this._getChoiceForOutput(i))),
                    this
                }
                ,
                e.prototype.unhighlightItem = function(e, t) {
                    if (void 0 === t && (t = !0),
                    !e || !e.id)
                        return this;
                    var i = this._store.items.find((function(t) {
                        return t.id === e.id
                    }
                    ));
                    return i && i.highlighted ? (this._store.dispatch(V(i, !1)),
                    t && this.passedElement.triggerEvent(T, this._getChoiceForOutput(i)),
                    this) : this
                }
                ,
                e.prototype.highlightAll = function() {
                    var e = this;
                    return this._store.withTxn((function() {
                        e._store.items.forEach((function(t) {
                            t.highlighted || (e._store.dispatch(V(t, !0)),
                            e.passedElement.triggerEvent(I, e._getChoiceForOutput(t)))
                        }
                        ))
                    }
                    )),
                    this
                }
                ,
                e.prototype.unhighlightAll = function() {
                    var e = this;
                    return this._store.withTxn((function() {
                        e._store.items.forEach((function(t) {
                            t.highlighted && (e._store.dispatch(V(t, !1)),
                            e.passedElement.triggerEvent(I, e._getChoiceForOutput(t)))
                        }
                        ))
                    }
                    )),
                    this
                }
                ,
                e.prototype.removeActiveItemsByValue = function(e) {
                    var t = this;
                    return this._store.withTxn((function() {
                        t._store.items.filter((function(t) {
                            return t.value === e
                        }
                        )).forEach((function(e) {
                            return t._removeItem(e)
                        }
                        ))
                    }
                    )),
                    this
                }
                ,
                e.prototype.removeActiveItems = function(e) {
                    var t = this;
                    return this._store.withTxn((function() {
                        t._store.items.filter((function(t) {
                            return t.id !== e
                        }
                        )).forEach((function(e) {
                            return t._removeItem(e)
                        }
                        ))
                    }
                    )),
                    this
                }
                ,
                e.prototype.removeHighlightedItems = function(e) {
                    var t = this;
                    return void 0 === e && (e = !1),
                    this._store.withTxn((function() {
                        t._store.highlightedActiveItems.forEach((function(i) {
                            t._removeItem(i),
                            e && t._triggerChange(i.value)
                        }
                        ))
                    }
                    )),
                    this
                }
                ,
                e.prototype.showDropdown = function(e) {
                    var t = this;
                    return this.dropdown.isActive || requestAnimationFrame((function() {
                        t.dropdown.show();
                        var i = t.dropdown.element.getBoundingClientRect();
                        t.containerOuter.open(i.bottom, i.height),
                        !e && t._canSearch && t.input.focus(),
                        t.passedElement.triggerEvent(A)
                    }
                    )),
                    this
                }
                ,
                e.prototype.hideDropdown = function(e) {
                    var t = this;
                    return this.dropdown.isActive ? (requestAnimationFrame((function() {
                        t.dropdown.hide(),
                        t.containerOuter.close(),
                        !e && t._canSearch && (t.input.removeActiveDescendant(),
                        t.input.blur()),
                        t.passedElement.triggerEvent(M)
                    }
                    )),
                    this) : this
                }
                ,
                e.prototype.getValue = function(e) {
                    var t = this
                      , i = this._store.items.map((function(i) {
                        return e ? i.value : t._getChoiceForOutput(i)
                    }
                    ));
                    return this._isSelectOneElement || this.config.singleModeForMultiSelect ? i[0] : i
                }
                ,
                e.prototype.setValue = function(e) {
                    var t = this;
                    return this.initialisedOK ? (this._store.withTxn((function() {
                        e.forEach((function(e) {
                            e && t._addChoice(ce(e, !1))
                        }
                        ))
                    }
                    )),
                    this._searcher.reset(),
                    this) : (this._warnChoicesInitFailed("setValue"),
                    this)
                }
                ,
                e.prototype.setChoiceByValue = function(e) {
                    var t = this;
                    return this.initialisedOK ? (this._isTextElement || (this._store.withTxn((function() {
                        (Array.isArray(e) ? e : [e]).forEach((function(e) {
                            return t._findAndSelectChoiceByValue(e)
                        }
                        )),
                        t.unhighlightAll()
                    }
                    )),
                    this._searcher.reset()),
                    this) : (this._warnChoicesInitFailed("setChoiceByValue"),
                    this)
                }
                ,
                e.prototype.setChoices = function(e, t, i, a, s) {
                    var o = this;
                    if (void 0 === e && (e = []),
                    void 0 === t && (t = "value"),
                    void 0 === i && (i = "label"),
                    void 0 === a && (a = !1),
                    void 0 === s && (s = !0),
                    !this.initialisedOK)
                        return this._warnChoicesInitFailed("setChoices"),
                        this;
                    if (!this._isSelectElement)
                        throw new TypeError("setChoices can't be used with INPUT based Choices");
                    if ("string" != typeof t || !t)
                        throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                    if (a && this.clearChoices(),
                    "function" == typeof e) {
                        var r = e(this);
                        if ("function" == typeof Promise && r instanceof Promise)
                            return new Promise((function(e) {
                                return requestAnimationFrame(e)
                            }
                            )).then((function() {
                                return o._handleLoadingState(!0)
                            }
                            )).then((function() {
                                return r
                            }
                            )).then((function(e) {
                                return o.setChoices(e, t, i, a)
                            }
                            )).catch((function(e) {
                                o.config.silent || console.error(e)
                            }
                            )).then((function() {
                                return o._handleLoadingState(!1)
                            }
                            )).then((function() {
                                return o
                            }
                            ));
                        if (!Array.isArray(r))
                            throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof r));
                        return this.setChoices(r, t, i, !1)
                    }
                    if (!Array.isArray(e))
                        throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                    return this.containerOuter.removeLoadingState(),
                    this._store.withTxn((function() {
                        s && (o._isSearching = !1);
                        var a = "value" === t
                          , r = "label" === i;
                        e.forEach((function(e) {
                            if ("choices"in e) {
                                var s = e;
                                r || (s = u(u({}, s), {
                                    label: s[i]
                                })),
                                o._addGroup(ce(s, !0))
                            } else {
                                var n = e;
                                r && a || (n = u(u({}, n), {
                                    value: n[t],
                                    label: n[i]
                                })),
                                o._addChoice(ce(n, !1))
                            }
                        }
                        )),
                        o.unhighlightAll()
                    }
                    )),
                    this._searcher.reset(),
                    this
                }
                ,
                e.prototype.refresh = function(e, t, i) {
                    var a = this;
                    return void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    void 0 === i && (i = !1),
                    this._isSelectElement ? (this._store.withTxn((function() {
                        var s = a.passedElement.optionsAsChoices()
                          , o = {};
                        i || a._store.items.forEach((function(e) {
                            e.id && e.active && e.selected && !e.disabled && (o[e.value] = !0)
                        }
                        )),
                        a.clearStore(!1);
                        var r = function(e) {
                            i ? a._store.dispatch(z(e)) : o[e.value] && (e.selected = !0)
                        };
                        s.forEach((function(e) {
                            "choices"in e ? e.choices.forEach(r) : r(e)
                        }
                        )),
                        a._addPredefinedChoices(s, t, e),
                        a._isSearching && a._searchChoices(a.input.value)
                    }
                    )),
                    this) : (this.config.silent || console.warn("refresh method can only be used on choices backed by a <select> element"),
                    this)
                }
                ,
                e.prototype.removeChoice = function(e) {
                    var t = this._store.choices.find((function(t) {
                        return t.value === e
                    }
                    ));
                    return t ? (this._clearNotice(),
                    this._store.dispatch(P(t)),
                    this._searcher.reset(),
                    t.selected && this.passedElement.triggerEvent(F, this._getChoiceForOutput(t)),
                    this) : this
                }
                ,
                e.prototype.clearChoices = function() {
                    var e = this;
                    return this._store.withTxn((function() {
                        e._store.choices.forEach((function(t) {
                            t.selected || e._store.dispatch(P(t))
                        }
                        ))
                    }
                    )),
                    this._searcher.reset(),
                    this
                }
                ,
                e.prototype.clearStore = function(e) {
                    return void 0 === e && (e = !0),
                    this._stopSearch(),
                    e && this.passedElement.element.replaceChildren(""),
                    this.itemList.element.replaceChildren(""),
                    this.choiceList.element.replaceChildren(""),
                    this._store.reset(),
                    this._lastAddedChoiceId = 0,
                    this._lastAddedGroupId = 0,
                    this._searcher.reset(),
                    this
                }
                ,
                e.prototype.clearInput = function() {
                    var e = !this._isSelectOneElement;
                    return this.input.clear(e),
                    this._stopSearch(),
                    this
                }
                ,
                e.prototype._validateConfig = function() {
                    var e = this.config
                      , t = function(e, t) {
                        var i = Object.keys(e).sort()
                          , a = Object.keys(t).sort();
                        return i.filter((function(e) {
                            return a.indexOf(e) < 0
                        }
                        ))
                    }(e, ue);
                    t.length && console.warn("Unknown config option(s) passed", t.join(", ")),
                    e.allowHTML && e.allowHtmlUserInput && (e.addItems && console.warn("Warning: allowHTML/allowHtmlUserInput/addItems all being true is strongly not recommended and may lead to XSS attacks"),
                    e.addChoices && console.warn("Warning: allowHTML/allowHtmlUserInput/addChoices all being true is strongly not recommended and may lead to XSS attacks"))
                }
                ,
                e.prototype._render = function(e) {
                    void 0 === e && (e = {
                        choices: !0,
                        groups: !0,
                        items: !0
                    }),
                    this._store.inTxn() || (this._isSelectElement && (e.choices || e.groups) && this._renderChoices(),
                    e.items && this._renderItems())
                }
                ,
                e.prototype._renderChoices = function() {
                    var e = this;
                    if (this._canAddItems()) {
                        var t = this.config
                          , i = this._isSearching
                          , a = this._store
                          , s = a.activeGroups
                          , o = a.activeChoices
                          , r = 0;
                        if (i && t.searchResultLimit > 0 ? r = t.searchResultLimit : t.renderChoiceLimit > 0 && (r = t.renderChoiceLimit),
                        this._isSelectElement) {
                            var n = o.filter((function(e) {
                                return !e.element
                            }
                            ));
                            n.length && this.passedElement.addOptions(n)
                        }
                        var l = document.createDocumentFragment()
                          , c = function(e) {
                            return e.filter((function(e) {
                                return !e.placeholder && (i ? !!e.rank : t.renderSelectedChoices || !e.selected)
                            }
                            ))
                        }
                          , h = !1
                          , d = function(a, s, o) {
                            i ? a.sort(G) : t.shouldSort && a.sort(t.sorter);
                            var n = a.length;
                            n = !s && r && n > r ? r : n,
                            n--,
                            a.every((function(a, s) {
                                var r = a.choiceEl || e._templates.choice(t, a, t.itemSelectText, o);
                                return a.choiceEl = r,
                                l.appendChild(r),
                                a.disabled || !i && a.selected || (h = !0),
                                s < n
                            }
                            ))
                        };
                        o.length && (t.resetScrollPosition && requestAnimationFrame((function() {
                            return e.choiceList.scrollToTop()
                        }
                        )),
                        this._hasNonChoicePlaceholder || i || !this._isSelectOneElement || d(o.filter((function(e) {
                            return e.placeholder && !e.group
                        }
                        )), !1, void 0),
                        s.length && !i ? (t.shouldSort && s.sort(t.sorter),
                        d(o.filter((function(e) {
                            return !e.placeholder && !e.group
                        }
                        )), !1, void 0),
                        s.forEach((function(a) {
                            var s = c(a.choices);
                            if (s.length) {
                                if (a.label) {
                                    var o = a.groupEl || e._templates.choiceGroup(e.config, a);
                                    a.groupEl = o,
                                    o.remove(),
                                    l.appendChild(o)
                                }
                                d(s, !0, t.appendGroupInSearch && i ? a.label : void 0)
                            }
                        }
                        ))) : d(c(o), !1, void 0)),
                        h || (this._notice || (this._notice = {
                            text: j(i ? t.noResultsText : t.noChoicesText),
                            type: i ? ve : ye
                        }),
                        l.replaceChildren("")),
                        this._renderNotice(l),
                        this.choiceList.element.replaceChildren(l),
                        h && this._highlightChoice()
                    }
                }
                ,
                e.prototype._renderItems = function() {
                    var e = this
                      , t = this._store.items || []
                      , i = this.itemList.element
                      , a = this.config
                      , s = document.createDocumentFragment()
                      , o = function(e) {
                        return i.querySelector('[data-item][data-id="'.concat(e.id, '"]'))
                    }
                      , r = function(t) {
                        var i = t.itemEl;
                        i && i.parentElement || (i = o(t) || e._templates.item(a, t, a.removeItemButton),
                        t.itemEl = i,
                        s.appendChild(i))
                    };
                    t.forEach(r);
                    var n = !!s.childNodes.length;
                    if (this._isSelectOneElement && this._hasNonChoicePlaceholder) {
                        var l = i.children.length;
                        if (n || l > 1) {
                            var c = i.querySelector(Y(a.classNames.placeholder));
                            c && c.remove()
                        } else
                            l || (n = !0,
                            r(ce({
                                selected: !0,
                                value: "",
                                label: a.placeholderValue || "",
                                placeholder: !0
                            }, !1)))
                    }
                    n && (i.append(s),
                    a.shouldSortItems && !this._isSelectOneElement && (t.sort(a.sorter),
                    t.forEach((function(e) {
                        var t = o(e);
                        t && (t.remove(),
                        s.append(t))
                    }
                    )),
                    i.append(s))),
                    this._isTextElement && (this.passedElement.value = t.map((function(e) {
                        return e.value
                    }
                    )).join(a.delimiter))
                }
                ,
                e.prototype._displayNotice = function(e, t, i) {
                    void 0 === i && (i = !0);
                    var a = this._notice;
                    a && (a.type === t && a.text === e || a.type === ge && (t === ve || t === ye)) ? i && this.showDropdown(!0) : (this._clearNotice(),
                    this._notice = e ? {
                        text: e,
                        type: t
                    } : void 0,
                    this._renderNotice(),
                    i && e && this.showDropdown(!0))
                }
                ,
                e.prototype._clearNotice = function() {
                    if (this._notice) {
                        var e = this.choiceList.element.querySelector(Y(this.config.classNames.notice));
                        e && e.remove(),
                        this._notice = void 0
                    }
                }
                ,
                e.prototype._renderNotice = function(e) {
                    var t = this._notice;
                    if (t) {
                        var i = this._templates.notice(this.config, t.text, t.type);
                        e ? e.append(i) : this.choiceList.prepend(i)
                    }
                }
                ,
                e.prototype._getChoiceForOutput = function(e, t) {
                    return {
                        id: e.id,
                        highlighted: e.highlighted,
                        labelClass: e.labelClass,
                        labelDescription: e.labelDescription,
                        customProperties: e.customProperties,
                        disabled: e.disabled,
                        active: e.active,
                        label: e.label,
                        placeholder: e.placeholder,
                        value: e.value,
                        groupValue: e.group ? e.group.label : void 0,
                        element: e.element,
                        keyCode: t
                    }
                }
                ,
                e.prototype._triggerChange = function(e) {
                    null != e && this.passedElement.triggerEvent(L, {
                        value: e
                    })
                }
                ,
                e.prototype._handleButtonAction = function(e) {
                    var t = this
                      , i = this._store.items;
                    if (i.length && this.config.removeItems && this.config.removeItemButton) {
                        var a = e && bt(e.parentElement)
                          , s = a && i.find((function(e) {
                            return e.id === a
                        }
                        ));
                        s && this._store.withTxn((function() {
                            if (t._removeItem(s),
                            t._triggerChange(s.value),
                            t._isSelectOneElement && !t._hasNonChoicePlaceholder) {
                                var e = t._store.choices.reverse().find((function(e) {
                                    return !e.disabled && e.placeholder
                                }
                                ));
                                e && (t._addItem(e),
                                t.unhighlightAll(),
                                e.value && t._triggerChange(e.value))
                            }
                        }
                        ))
                    }
                }
                ,
                e.prototype._handleItemAction = function(e, t) {
                    var i = this;
                    void 0 === t && (t = !1);
                    var a = this._store.items;
                    if (a.length && this.config.removeItems && !this._isSelectOneElement) {
                        var s = bt(e);
                        s && (a.forEach((function(e) {
                            e.id !== s || e.highlighted ? !t && e.highlighted && i.unhighlightItem(e) : i.highlightItem(e)
                        }
                        )),
                        this.input.focus())
                    }
                }
                ,
                e.prototype._handleChoiceAction = function(e) {
                    var t = this
                      , i = bt(e)
                      , a = i && this._store.getChoiceById(i);
                    if (!a || a.disabled)
                        return !1;
                    var s = this.dropdown.isActive;
                    if (!a.selected) {
                        if (!this._canAddItems())
                            return !0;
                        this._store.withTxn((function() {
                            t._addItem(a, !0, !0),
                            t.clearInput(),
                            t.unhighlightAll()
                        }
                        )),
                        this._triggerChange(a.value)
                    }
                    return s && this.config.closeDropdownOnSelect && (this.hideDropdown(!0),
                    this.containerOuter.element.focus()),
                    !0
                }
                ,
                e.prototype._handleBackspace = function(e) {
                    var t = this.config;
                    if (t.removeItems && e.length) {
                        var i = e[e.length - 1]
                          , a = e.some((function(e) {
                            return e.highlighted
                        }
                        ));
                        t.editItems && !a && i ? (this.input.value = i.value,
                        this.input.setWidth(),
                        this._removeItem(i),
                        this._triggerChange(i.value)) : (a || this.highlightItem(i, !1),
                        this.removeHighlightedItems(!0))
                    }
                }
                ,
                e.prototype._loadChoices = function() {
                    var e, t = this.config;
                    if (this._isTextElement) {
                        if (this._presetChoices = t.items.map((function(e) {
                            return ce(e, !1)
                        }
                        )),
                        this.passedElement.value) {
                            var i = this.passedElement.value.split(t.delimiter).map((function(e) {
                                return ce(e, !1)
                            }
                            ));
                            this._presetChoices = this._presetChoices.concat(i)
                        }
                        this._presetChoices.forEach((function(e) {
                            e.selected = !0
                        }
                        ))
                    } else if (this._isSelectElement) {
                        this._presetChoices = t.choices.map((function(e) {
                            return ce(e, !0)
                        }
                        ));
                        var a = this.passedElement.optionsAsChoices();
                        a && (e = this._presetChoices).push.apply(e, a)
                    }
                }
                ,
                e.prototype._handleLoadingState = function(e) {
                    void 0 === e && (e = !0);
                    var t = this.itemList.element;
                    e ? (this.disable(),
                    this.containerOuter.addLoadingState(),
                    this._isSelectOneElement ? t.replaceChildren(this._templates.placeholder(this.config, this.config.loadingText)) : this.input.placeholder = this.config.loadingText) : (this.enable(),
                    this.containerOuter.removeLoadingState(),
                    this._isSelectOneElement ? (t.replaceChildren(""),
                    this._render()) : this.input.placeholder = this._placeholderValue || "")
                }
                ,
                e.prototype._handleSearch = function(e) {
                    if (this.input.isFocussed)
                        if (null != e && e.length >= this.config.searchFloor) {
                            var t = this.config.searchChoices ? this._searchChoices(e) : 0;
                            null !== t && this.passedElement.triggerEvent(k, {
                                value: e,
                                resultCount: t
                            })
                        } else
                            this._store.choices.some((function(e) {
                                return !e.active
                            }
                            )) && this._stopSearch()
                }
                ,
                e.prototype._canAddItems = function() {
                    var e = this.config
                      , t = e.maxItemCount
                      , i = e.maxItemText;
                    return !(!e.singleModeForMultiSelect && t > 0 && t <= this._store.items.length) || (this.choiceList.element.replaceChildren(""),
                    this._displayNotice("function" == typeof i ? i(t) : i, ge),
                    !1)
                }
                ,
                e.prototype._canCreateItem = function(e) {
                    var t = this.config
                      , i = !0
                      , a = "";
                    if (i && "function" == typeof t.addItemFilter && !t.addItemFilter(e) && (i = !1,
                    a = B(t.customAddItemText, e)),
                    i) {
                        var s = this._store.choices.find((function(i) {
                            return t.valueComparer(i.value, e)
                        }
                        ));
                        if (this._isSelectElement) {
                            if (s)
                                return this._displayNotice("", ge),
                                !1
                        } else
                            this._isTextElement && !t.duplicateItemsAllowed && s && (i = !1,
                            a = B(t.uniqueItemText, e))
                    }
                    return i && (a = B(t.addItemText, e)),
                    a && this._displayNotice(a, ge),
                    i
                }
                ,
                e.prototype._searchChoices = function(e) {
                    var t = e.trim().replace(/\s{2,}/, " ");
                    if (!t.length || t === this._currentValue)
                        return null;
                    var i = this._searcher;
                    i.isEmptyIndex() && i.index(this._store.searchableChoices);
                    var a = i.search(t);
                    this._currentValue = t,
                    this._highlightPosition = 0,
                    this._isSearching = !0;
                    var s = this._notice;
                    return (s && s.type) !== ge && (a.length ? this._clearNotice() : this._displayNotice(j(this.config.noResultsText), ve)),
                    this._store.dispatch(function(e) {
                        return {
                            type: v,
                            results: e
                        }
                    }(a)),
                    a.length
                }
                ,
                e.prototype._stopSearch = function() {
                    this._isSearching && (this._currentValue = "",
                    this._isSearching = !1,
                    this._clearNotice(),
                    this._store.dispatch({
                        type: g,
                        active: !0
                    }),
                    this.passedElement.triggerEvent(k, {
                        value: "",
                        resultCount: 0
                    }))
                }
                ,
                e.prototype._addEventListeners = function() {
                    var e = this._docRoot
                      , t = this.containerOuter.element
                      , i = this.input.element;
                    e.addEventListener("touchend", this._onTouchEnd, !0),
                    t.addEventListener("keydown", this._onKeyDown, !0),
                    t.addEventListener("mousedown", this._onMouseDown, !0),
                    e.addEventListener("click", this._onClick, {
                        passive: !0
                    }),
                    e.addEventListener("touchmove", this._onTouchMove, {
                        passive: !0
                    }),
                    this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                        passive: !0
                    }),
                    this._isSelectOneElement && (t.addEventListener("focus", this._onFocus, {
                        passive: !0
                    }),
                    t.addEventListener("blur", this._onBlur, {
                        passive: !0
                    })),
                    i.addEventListener("keyup", this._onKeyUp, {
                        passive: !0
                    }),
                    i.addEventListener("input", this._onInput, {
                        passive: !0
                    }),
                    i.addEventListener("focus", this._onFocus, {
                        passive: !0
                    }),
                    i.addEventListener("blur", this._onBlur, {
                        passive: !0
                    }),
                    i.form && i.form.addEventListener("reset", this._onFormReset, {
                        passive: !0
                    }),
                    this.input.addEventListeners()
                }
                ,
                e.prototype._removeEventListeners = function() {
                    var e = this._docRoot
                      , t = this.containerOuter.element
                      , i = this.input.element;
                    e.removeEventListener("touchend", this._onTouchEnd, !0),
                    t.removeEventListener("keydown", this._onKeyDown, !0),
                    t.removeEventListener("mousedown", this._onMouseDown, !0),
                    e.removeEventListener("click", this._onClick),
                    e.removeEventListener("touchmove", this._onTouchMove),
                    this.dropdown.element.removeEventListener("mouseover", this._onMouseOver),
                    this._isSelectOneElement && (t.removeEventListener("focus", this._onFocus),
                    t.removeEventListener("blur", this._onBlur)),
                    i.removeEventListener("keyup", this._onKeyUp),
                    i.removeEventListener("input", this._onInput),
                    i.removeEventListener("focus", this._onFocus),
                    i.removeEventListener("blur", this._onBlur),
                    i.form && i.form.removeEventListener("reset", this._onFormReset),
                    this.input.removeEventListeners()
                }
                ,
                e.prototype._onKeyDown = function(e) {
                    var t = e.keyCode
                      , i = this.dropdown.isActive
                      , a = 1 === e.key.length || 2 === e.key.length && e.key.charCodeAt(0) >= 55296 || "Unidentified" === e.key;
                    switch (this._isTextElement || i || (this.showDropdown(),
                    !this.input.isFocussed && a && (this.input.value += e.key,
                    " " === e.key && e.preventDefault())),
                    t) {
                    case 65:
                        return this._onSelectKey(e, this.itemList.element.hasChildNodes());
                    case 13:
                        return this._onEnterKey(e, i);
                    case 27:
                        return this._onEscapeKey(e, i);
                    case 38:
                    case 33:
                    case 40:
                    case 34:
                        return this._onDirectionKey(e, i);
                    case 8:
                    case 46:
                        return this._onDeleteKey(e, this._store.items, this.input.isFocussed)
                    }
                }
                ,
                e.prototype._onKeyUp = function() {
                    this._canSearch = this.config.searchEnabled
                }
                ,
                e.prototype._onInput = function() {
                    var e = this.input.value;
                    e ? this._canAddItems() && (this._canSearch && this._handleSearch(e),
                    this._canAddUserChoices && (this._canCreateItem(e),
                    this._isSelectElement && (this._highlightPosition = 0,
                    this._highlightChoice()))) : this._isTextElement ? this.hideDropdown(!0) : this._stopSearch()
                }
                ,
                e.prototype._onSelectKey = function(e, t) {
                    (e.ctrlKey || e.metaKey) && t && (this._canSearch = !1,
                    this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll())
                }
                ,
                e.prototype._onEnterKey = function(e, t) {
                    var i = this
                      , a = this.input.value
                      , s = e.target;
                    if (e.preventDefault(),
                    s && s.hasAttribute("data-button"))
                        this._handleButtonAction(s);
                    else if (t) {
                        var o = this.dropdown.element.querySelector(Y(this.config.classNames.highlightedState));
                        if (!o || !this._handleChoiceAction(o))
                            if (s && a) {
                                if (this._canAddItems()) {
                                    var r = !1;
                                    this._store.withTxn((function() {
                                        if (!(r = i._findAndSelectChoiceByValue(a, !0))) {
                                            if (!i._canAddUserChoices)
                                                return;
                                            if (!i._canCreateItem(a))
                                                return;
                                            var e = $(a)
                                              , t = i.config.allowHtmlUserInput || e === a ? a : {
                                                escaped: e,
                                                raw: a
                                            };
                                            i._addChoice(ce({
                                                value: t,
                                                label: t,
                                                selected: !0
                                            }, !1), !0, !0),
                                            r = !0
                                        }
                                        i.clearInput(),
                                        i.unhighlightAll()
                                    }
                                    )),
                                    r && (this._triggerChange(a),
                                    this.config.closeDropdownOnSelect && this.hideDropdown(!0))
                                }
                            } else
                                this.hideDropdown(!0)
                    } else
                        (this._isSelectElement || this._notice) && this.showDropdown()
                }
                ,
                e.prototype._onEscapeKey = function(e, t) {
                    t && (e.stopPropagation(),
                    this.hideDropdown(!0),
                    this.containerOuter.element.focus())
                }
                ,
                e.prototype._onDirectionKey = function(e, t) {
                    var i, a, s, o = e.keyCode;
                    if (t || this._isSelectOneElement) {
                        this.showDropdown(),
                        this._canSearch = !1;
                        var r = 40 === o || 34 === o ? 1 : -1
                          , n = void 0;
                        if (e.metaKey || 34 === o || 33 === o)
                            n = r > 0 ? this.dropdown.element.querySelector("".concat(_t, ":last-of-type")) : this.dropdown.element.querySelector(_t);
                        else {
                            var l = this.dropdown.element.querySelector(Y(this.config.classNames.highlightedState));
                            n = l ? function(e, t, i) {
                                void 0 === i && (i = 1);
                                for (var a = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), s = e[a]; s; ) {
                                    if (s.matches(t))
                                        return s;
                                    s = s[a]
                                }
                                return null
                            }(l, _t, r) : this.dropdown.element.querySelector(_t)
                        }
                        n && (i = n,
                        a = this.choiceList.element,
                        void 0 === (s = r) && (s = 1),
                        (s > 0 ? a.scrollTop + a.offsetHeight >= i.offsetTop + i.offsetHeight : i.offsetTop >= a.scrollTop) || this.choiceList.scrollToChildElement(n, r),
                        this._highlightChoice(n)),
                        e.preventDefault()
                    }
                }
                ,
                e.prototype._onDeleteKey = function(e, t, i) {
                    this._isSelectOneElement || e.target.value || !i || (this._handleBackspace(t),
                    e.preventDefault())
                }
                ,
                e.prototype._onTouchMove = function() {
                    this._wasTap && (this._wasTap = !1)
                }
                ,
                e.prototype._onTouchEnd = function(e) {
                    var t = (e || e.touches[0]).target;
                    this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()),
                    e.stopPropagation());
                    this._wasTap = !0
                }
                ,
                e.prototype._onMouseDown = function(e) {
                    var t = e.target;
                    if (t instanceof HTMLElement) {
                        if (vt && this.choiceList.element.contains(t)) {
                            var i = this.choiceList.element.firstElementChild;
                            this._isScrollingOnIe = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft
                        }
                        if (t !== this.input.element) {
                            var a = t.closest("[data-button],[data-item],[data-choice]");
                            a instanceof HTMLElement && ("button"in a.dataset ? this._handleButtonAction(a) : "item"in a.dataset ? this._handleItemAction(a, e.shiftKey) : "choice"in a.dataset && this._handleChoiceAction(a)),
                            e.preventDefault()
                        }
                    }
                }
                ,
                e.prototype._onMouseOver = function(e) {
                    var t = e.target;
                    t instanceof HTMLElement && "choice"in t.dataset && this._highlightChoice(t)
                }
                ,
                e.prototype._onClick = function(e) {
                    var t = e.target
                      , i = this.containerOuter;
                    i.element.contains(t) ? this.dropdown.isActive || i.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(),
                    i.element.focus()) : (i.removeFocusState(),
                    this.hideDropdown(!0),
                    this.unhighlightAll())
                }
                ,
                e.prototype._onFocus = function(e) {
                    var t = e.target
                      , i = this.containerOuter;
                    if (t && i.element.contains(t)) {
                        var a = t === this.input.element;
                        this._isTextElement ? a && i.addFocusState() : this._isSelectMultipleElement ? a && (this.showDropdown(!0),
                        i.addFocusState()) : (i.addFocusState(),
                        a && this.showDropdown(!0))
                    }
                }
                ,
                e.prototype._onBlur = function(e) {
                    var t = e.target
                      , i = this.containerOuter;
                    if (t && i.element.contains(t) && !this._isScrollingOnIe) {
                        var a = t === this.input.element;
                        this._isTextElement || this._isSelectMultipleElement ? a && (i.removeFocusState(),
                        this.hideDropdown(!0),
                        this.unhighlightAll()) : (i.removeFocusState(),
                        (a || t === i.element && !this._canSearch) && this.hideDropdown(!0))
                    } else
                        this._isScrollingOnIe = !1,
                        this.input.element.focus()
                }
                ,
                e.prototype._onFormReset = function() {
                    var e = this;
                    this._store.withTxn((function() {
                        e.clearInput(),
                        e.hideDropdown(),
                        e.refresh(!1, !1, !0),
                        e._initialItems.length && e.setChoiceByValue(e._initialItems)
                    }
                    ))
                }
                ,
                e.prototype._highlightChoice = function(e) {
                    void 0 === e && (e = null);
                    var t = Array.from(this.dropdown.element.querySelectorAll(_t));
                    if (t.length) {
                        var i = e
                          , a = this.config.classNames.highlightedState;
                        Array.from(this.dropdown.element.querySelectorAll(Y(a))).forEach((function(e) {
                            J(e, a),
                            e.setAttribute("aria-selected", "false")
                        }
                        )),
                        i ? this._highlightPosition = t.indexOf(i) : (i = t.length > this._highlightPosition ? t[this._highlightPosition] : t[t.length - 1]) || (i = t[0]),
                        X(i, a),
                        i.setAttribute("aria-selected", "true"),
                        this.passedElement.triggerEvent(Z, {
                            el: i
                        }),
                        this.dropdown.isActive && (this.input.setActiveDescendant(i.id),
                        this.containerOuter.setActiveDescendant(i.id))
                    }
                }
                ,
                e.prototype._addItem = function(e, t, i) {
                    if (void 0 === t && (t = !0),
                    void 0 === i && (i = !1),
                    !e.id)
                        throw new TypeError("item.id must be set before _addItem is called for a choice/item");
                    (this.config.singleModeForMultiSelect || this._isSelectOneElement) && this.removeActiveItems(e.id),
                    this._store.dispatch(function(e) {
                        return {
                            type: C,
                            item: e
                        }
                    }(e)),
                    t && (this.passedElement.triggerEvent(x, this._getChoiceForOutput(e)),
                    i && this.passedElement.triggerEvent(S, this._getChoiceForOutput(e)))
                }
                ,
                e.prototype._removeItem = function(e) {
                    e.id && (this._store.dispatch(z(e)),
                    this.passedElement.triggerEvent(F, this._getChoiceForOutput(e)))
                }
                ,
                e.prototype._addChoice = function(e, t, i) {
                    if (void 0 === t && (t = !0),
                    void 0 === i && (i = !1),
                    e.id)
                        throw new TypeError("Can not re-add a choice which has already been added");
                    var a = this.config;
                    if (!this._isSelectElement && a.duplicateItemsAllowed || !this._store.choices.find((function(t) {
                        return a.valueComparer(t.value, e.value)
                    }
                    ))) {
                        this._lastAddedChoiceId++,
                        e.id = this._lastAddedChoiceId,
                        e.elementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(e.id);
                        var s = a.prependValue
                          , o = a.appendValue;
                        s && (e.value = s + e.value),
                        o && (e.value += o.toString()),
                        (s || o) && e.element && (e.element.value = e.value),
                        this._clearNotice(),
                        this._store.dispatch(function(e) {
                            return {
                                type: f,
                                choice: e
                            }
                        }(e)),
                        e.selected && this._addItem(e, t, i)
                    }
                }
                ,
                e.prototype._addGroup = function(e, t) {
                    var i = this;
                    if (void 0 === t && (t = !0),
                    e.id)
                        throw new TypeError("Can not re-add a group which has already been added");
                    this._store.dispatch(function(e) {
                        return {
                            type: _,
                            group: e
                        }
                    }(e)),
                    e.choices && (this._lastAddedGroupId++,
                    e.id = this._lastAddedGroupId,
                    e.choices.forEach((function(a) {
                        a.group = e,
                        e.disabled && (a.disabled = !0),
                        i._addChoice(a, t)
                    }
                    )))
                }
                ,
                e.prototype._createTemplates = function() {
                    var e = this
                      , t = this.config.callbackOnCreateTemplates
                      , i = {};
                    "function" == typeof t && (i = t.call(this, U, K, Q));
                    var a = {};
                    Object.keys(this._templates).forEach((function(t) {
                        a[t] = t in i ? i[t].bind(e) : e._templates[t].bind(e)
                    }
                    )),
                    this._templates = a
                }
                ,
                e.prototype._createElements = function() {
                    var e = this._templates
                      , t = this.config
                      , i = this._isSelectOneElement
                      , a = t.position
                      , s = t.classNames
                      , o = this._elementType;
                    this.containerOuter = new ie({
                        element: e.containerOuter(t, this._direction, this._isSelectElement, i, t.searchEnabled, o, t.labelId),
                        classNames: s,
                        type: o,
                        position: a
                    }),
                    this.containerInner = new ie({
                        element: e.containerInner(t),
                        classNames: s,
                        type: o,
                        position: a
                    }),
                    this.input = new ae({
                        element: e.input(t, this._placeholderValue),
                        classNames: s,
                        type: o,
                        preventPaste: !t.paste
                    }),
                    this.choiceList = new se({
                        element: e.choiceList(t, i)
                    }),
                    this.itemList = new se({
                        element: e.itemList(t, i)
                    }),
                    this.dropdown = new te({
                        element: e.dropdown(t),
                        classNames: s,
                        type: o
                    })
                }
                ,
                e.prototype._createStructure = function() {
                    var e = this
                      , t = e.containerInner
                      , i = e.containerOuter
                      , a = e.passedElement
                      , s = this.dropdown.element;
                    a.conceal(),
                    t.wrap(a.element),
                    i.wrap(t.element),
                    this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : (this._placeholderValue && (this.input.placeholder = this._placeholderValue),
                    this.input.setWidth()),
                    i.element.appendChild(t.element),
                    i.element.appendChild(s),
                    t.element.appendChild(this.itemList.element),
                    s.appendChild(this.choiceList.element),
                    this._isSelectOneElement ? this.config.searchEnabled && s.insertBefore(this.input.element, s.firstChild) : t.element.appendChild(this.input.element),
                    this._highlightPosition = 0,
                    this._isSearching = !1
                }
                ,
                e.prototype._initStore = function() {
                    var e = this;
                    this._store.subscribe(this._render).withTxn((function() {
                        e._addPredefinedChoices(e._presetChoices, e._isSelectOneElement && !e._hasNonChoicePlaceholder, !1)
                    }
                    )),
                    (!this._store.choices.length || this._isSelectOneElement && this._hasNonChoicePlaceholder) && this._render()
                }
                ,
                e.prototype._addPredefinedChoices = function(e, t, i) {
                    var a = this;
                    (void 0 === t && (t = !1),
                    void 0 === i && (i = !0),
                    t) && (-1 === e.findIndex((function(e) {
                        return e.selected
                    }
                    )) && e.some((function(e) {
                        return !e.disabled && !("choices"in e) && (e.selected = !0,
                        !0)
                    }
                    )));
                    e.forEach((function(e) {
                        "choices"in e ? a._isSelectElement && a._addGroup(e, i) : a._addChoice(e, i)
                    }
                    ))
                }
                ,
                e.prototype._findAndSelectChoiceByValue = function(e, t) {
                    var i = this;
                    void 0 === t && (t = !1);
                    var a = this._store.choices.find((function(t) {
                        return i.config.valueComparer(t.value, e)
                    }
                    ));
                    return !(!a || a.disabled || a.selected) && (this._addItem(a, !0, t),
                    !0)
                }
                ,
                e.prototype._generatePlaceholderValue = function() {
                    var e = this.config;
                    if (!e.placeholder)
                        return null;
                    if (this._hasNonChoicePlaceholder)
                        return e.placeholderValue;
                    if (this._isSelectElement) {
                        var t = this.passedElement.placeholderOption;
                        return t ? t.text : null
                    }
                    return null
                }
                ,
                e.prototype._warnChoicesInitFailed = function(e) {
                    if (!this.config.silent) {
                        if (!this.initialised)
                            throw new TypeError("".concat(e, " called on a non-initialised instance of Choices"));
                        if (!this.initialisedOK)
                            throw new TypeError("".concat(e, " called for an element which has multiple instances of Choices initialised on it"))
                    }
                }
                ,
                e.version = "11.0.2",
                e
            }();
            document.querySelectorAll("[data-choices]").forEach((e => {
                const t = {
                    ...e.dataset.choices ? JSON.parse(e.dataset.choices) : {},
                    ...{
                        classNames: {
                            containerInner: e.className.split(" "),
                            input: "form-control",
                            inputCloned: "form-control-sm",
                            listDropdown: "dropdown-menu",
                            itemChoice: "dropdown-item",
                            activeState: "show",
                            selectedState: "active"
                        },
                        shouldSort: !1,
                        callbackOnCreateTemplates: function(e) {
                            return {
                                choice: ({classNames: t}, i) => {
                                    const a = `${t.item} ${t.itemChoice} ${i.disabled ? t.itemDisabled : t.itemSelectable}`
                                      , s = i.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"
                                      , o = i.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                                      , r = this.config.itemSelectText
                                      , n = i.customProperties && i.customProperties.avatarSrc ? `\n            <div class="avatar avatar-xs me-3">\n              <img class="avatar-img" src="${i.customProperties.avatarSrc}" alt="${i.label}" >\n            </div> ${i.label}\n          ` : i.label;
                                    return e(`\n            <div class="${a}" data-select-text="${r}" data-choice ${s} data-id="${i.id}" data-value="${i.value}" ${o}>\n              ${n}\n            </div>\n          `)
                                }
                            }
                        }
                    }
                };
                new Ct(e,t)
            }
            )),
            window.Choices = Ct;
            var Et = i(8023);
            function wt(e) {
                return e && e.__esModule ? e.default : e
            }
            class At {
                on(e, t) {
                    return this._callbacks = this._callbacks || {},
                    this._callbacks[e] || (this._callbacks[e] = []),
                    this._callbacks[e].push(t),
                    this
                }
                emit(e, ...t) {
                    this._callbacks = this._callbacks || {};
                    let i = this._callbacks[e];
                    if (i)
                        for (let e of i)
                            e.apply(this, t);
                    return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + e, {
                        args: t
                    })),
                    this
                }
                makeEvent(e, t) {
                    let i = {
                        bubbles: !0,
                        cancelable: !0,
                        detail: t
                    };
                    if ("function" == typeof window.CustomEvent)
                        return new CustomEvent(e,i);
                    var a = document.createEvent("CustomEvent");
                    return a.initCustomEvent(e, i.bubbles, i.cancelable, i.detail),
                    a
                }
                off(e, t) {
                    if (!this._callbacks || 0 === arguments.length)
                        return this._callbacks = {},
                        this;
                    let i = this._callbacks[e];
                    if (!i)
                        return this;
                    if (1 === arguments.length)
                        return delete this._callbacks[e],
                        this;
                    for (let e = 0; e < i.length; e++) {
                        if (i[e] === t) {
                            i.splice(e, 1);
                            break
                        }
                    }
                    return this
                }
            }
            var Mt = {
                url: null,
                method: "post",
                withCredentials: !1,
                timeout: null,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2097152,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: "crop",
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: .8,
                resizeMethod: "contain",
                filesizeBase: 1e3,
                maxFiles: null,
                headers: null,
                defaultHeaders: !0,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                disablePreviews: !1,
                hiddenInputContainer: "body",
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictUploadCanceled: "Upload canceled.",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                dictFileSizeUnits: {
                    tb: "TB",
                    gb: "GB",
                    mb: "MB",
                    kb: "KB",
                    b: "b"
                },
                init() {},
                params(e, t, i) {
                    if (i)
                        return {
                            dzuuid: i.file.upload.uuid,
                            dzchunkindex: i.index,
                            dztotalfilesize: i.file.size,
                            dzchunksize: this.options.chunkSize,
                            dztotalchunkcount: i.file.upload.totalChunkCount,
                            dzchunkbyteoffset: i.index * this.options.chunkSize
                        }
                },
                accept: (e, t) => t(),
                chunksUploaded: function(e, t) {
                    t()
                },
                binaryBody: !1,
                fallback() {
                    let e;
                    this.element.className = `${this.element.className} dz-browser-not-supported`;
                    for (let t of this.element.getElementsByTagName("div"))
                        if (/(^| )dz-message($| )/.test(t.className)) {
                            e = t,
                            t.className = "dz-message";
                            break
                        }
                    e || (e = Lt.createElement('<div class="dz-message"><span></span></div>'),
                    this.element.appendChild(e));
                    let t = e.getElementsByTagName("span")[0];
                    return t && (null != t.textContent ? t.textContent = this.options.dictFallbackMessage : null != t.innerText && (t.innerText = this.options.dictFallbackMessage)),
                    this.element.appendChild(this.getFallbackForm())
                },
                resize(e, t, i, a) {
                    let s = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: e.width,
                        srcHeight: e.height
                    }
                      , o = e.width / e.height;
                    null == t && null == i ? (t = s.srcWidth,
                    i = s.srcHeight) : null == t ? t = i * o : null == i && (i = t / o);
                    let r = (t = Math.min(t, s.srcWidth)) / (i = Math.min(i, s.srcHeight));
                    if (s.srcWidth > t || s.srcHeight > i)
                        if ("crop" === a)
                            o > r ? (s.srcHeight = e.height,
                            s.srcWidth = s.srcHeight * r) : (s.srcWidth = e.width,
                            s.srcHeight = s.srcWidth / r);
                        else {
                            if ("contain" !== a)
                                throw new Error(`Unknown resizeMethod '${a}'`);
                            o > r ? i = t / o : t = i * o
                        }
                    return s.srcX = (e.width - s.srcWidth) / 2,
                    s.srcY = (e.height - s.srcHeight) / 2,
                    s.trgWidth = t,
                    s.trgHeight = i,
                    s
                },
                transformFile(e, t) {
                    return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
                },
                previewTemplate: wt('<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail=""></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size=""></span></div>\n    <div class="dz-filename"><span data-dz-name=""></span></div>\n  </div>\n  <div class="dz-progress">\n    <span class="dz-upload" data-dz-uploadprogress=""></span>\n  </div>\n  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>\n  <div class="dz-success-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>\n    </svg>\n  </div>\n</div>\n'),
                drop(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragstart(e) {},
                dragend(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragenter(e) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragover(e) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragleave(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                paste(e) {},
                reset() {
                    return this.element.classList.remove("dz-started")
                },
                addedfile(e) {
                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"),
                    this.previewsContainer && !this.options.disablePreviews) {
                        for (var t of (e.previewElement = Lt.createElement(this.options.previewTemplate.trim()),
                        e.previewTemplate = e.previewElement,
                        this.previewsContainer.appendChild(e.previewElement),
                        e.previewElement.querySelectorAll("[data-dz-name]")))
                            t.textContent = e.name;
                        for (t of e.previewElement.querySelectorAll("[data-dz-size]"))
                            t.innerHTML = this.filesize(e.size);
                        this.options.addRemoveLinks && (e._removeLink = Lt.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`),
                        e.previewElement.appendChild(e._removeLink));
                        let i = t => (t.preventDefault(),
                        t.stopPropagation(),
                        e.status === Lt.UPLOADING ? Lt.confirm(this.options.dictCancelUploadConfirmation, ( () => this.removeFile(e))) : this.options.dictRemoveFileConfirmation ? Lt.confirm(this.options.dictRemoveFileConfirmation, ( () => this.removeFile(e))) : this.removeFile(e));
                        for (let t of e.previewElement.querySelectorAll("[data-dz-remove]"))
                            t.addEventListener("click", i)
                    }
                },
                removedfile(e) {
                    return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement),
                    this._updateMaxFilesReachedClass()
                },
                thumbnail(e, t) {
                    if (e.previewElement) {
                        e.previewElement.classList.remove("dz-file-preview");
                        for (let i of e.previewElement.querySelectorAll("[data-dz-thumbnail]"))
                            i.alt = e.name,
                            i.src = t;
                        return setTimeout(( () => e.previewElement.classList.add("dz-image-preview")), 1)
                    }
                },
                error(e, t) {
                    if (e.previewElement) {
                        e.previewElement.classList.add("dz-error"),
                        "string" != typeof t && t.error && (t = t.error);
                        for (let i of e.previewElement.querySelectorAll("[data-dz-errormessage]"))
                            i.textContent = t
                    }
                },
                errormultiple() {},
                processing(e) {
                    if (e.previewElement && (e.previewElement.classList.add("dz-processing"),
                    e._removeLink))
                        return e._removeLink.innerHTML = this.options.dictCancelUpload
                },
                processingmultiple() {},
                uploadprogress(e, t, i) {
                    if (e.previewElement)
                        for (let i of e.previewElement.querySelectorAll("[data-dz-uploadprogress]"))
                            "PROGRESS" === i.nodeName ? i.value = t : i.style.width = `${t}%`
                },
                totaluploadprogress() {},
                sending() {},
                sendingmultiple() {},
                success(e) {
                    if (e.previewElement)
                        return e.previewElement.classList.add("dz-success")
                },
                successmultiple() {},
                canceled(e) {
                    return this.emit("error", e, this.options.dictUploadCanceled)
                },
                canceledmultiple() {},
                complete(e) {
                    if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile),
                    e.previewElement)
                        return e.previewElement.classList.add("dz-complete")
                },
                completemultiple() {},
                maxfilesexceeded() {},
                maxfilesreached() {},
                queuecomplete() {},
                addedfiles() {}
            };
            class Lt extends At {
                static initClass() {
                    this.prototype.Emitter = At,
                    this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"],
                    this.prototype._thumbnailQueue = [],
                    this.prototype._processingThumbnail = !1
                }
                getAcceptedFiles() {
                    return this.files.filter((e => e.accepted)).map((e => e))
                }
                getRejectedFiles() {
                    return this.files.filter((e => !e.accepted)).map((e => e))
                }
                getFilesWithStatus(e) {
                    return this.files.filter((t => t.status === e)).map((e => e))
                }
                getQueuedFiles() {
                    return this.getFilesWithStatus(Lt.QUEUED)
                }
                getUploadingFiles() {
                    return this.getFilesWithStatus(Lt.UPLOADING)
                }
                getAddedFiles() {
                    return this.getFilesWithStatus(Lt.ADDED)
                }
                getActiveFiles() {
                    return this.files.filter((e => e.status === Lt.UPLOADING || e.status === Lt.QUEUED)).map((e => e))
                }
                init() {
                    if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"),
                    this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(Lt.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)),
                    this.clickableElements.length) {
                        let e = () => {
                            this.hiddenFileInput && this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),
                            this.hiddenFileInput = document.createElement("input"),
                            this.hiddenFileInput.setAttribute("type", "file"),
                            (null === this.options.maxFiles || this.options.maxFiles > 1) && this.hiddenFileInput.setAttribute("multiple", "multiple"),
                            this.hiddenFileInput.className = "dz-hidden-input",
                            null !== this.options.acceptedFiles && this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles),
                            null !== this.options.capture && this.hiddenFileInput.setAttribute("capture", this.options.capture),
                            this.hiddenFileInput.setAttribute("tabindex", "-1"),
                            this.hiddenFileInput.style.visibility = "hidden",
                            this.hiddenFileInput.style.position = "absolute",
                            this.hiddenFileInput.style.top = "0",
                            this.hiddenFileInput.style.left = "0",
                            this.hiddenFileInput.style.height = "0",
                            this.hiddenFileInput.style.width = "0",
                            Lt.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput),
                            this.hiddenFileInput.addEventListener("change", ( () => {
                                let {files: t} = this.hiddenFileInput;
                                if (t.length)
                                    for (let e of t)
                                        this.addFile(e);
                                this.emit("addedfiles", t),
                                e()
                            }
                            ))
                        }
                        ;
                        e()
                    }
                    this.URL = null !== window.URL ? window.URL : window.webkitURL;
                    for (let e of this.events)
                        this.on(e, this.options[e]);
                    this.on("uploadprogress", ( () => this.updateTotalUploadProgress())),
                    this.on("removedfile", ( () => this.updateTotalUploadProgress())),
                    this.on("canceled", (e => this.emit("complete", e))),
                    this.on("complete", (e => {
                        if (0 === this.getAddedFiles().length && 0 === this.getUploadingFiles().length && 0 === this.getQueuedFiles().length)
                            return setTimeout(( () => this.emit("queuecomplete")), 0)
                    }
                    ));
                    let e = function(e) {
                        if (function(e) {
                            if (e.dataTransfer.types)
                                for (var t = 0; t < e.dataTransfer.types.length; t++)
                                    if ("Files" === e.dataTransfer.types[t])
                                        return !0;
                            return !1
                        }(e))
                            return e.stopPropagation(),
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    };
                    return this.listeners = [{
                        element: this.element,
                        events: {
                            dragstart: e => this.emit("dragstart", e),
                            dragenter: t => (e(t),
                            this.emit("dragenter", t)),
                            dragover: t => {
                                let i;
                                try {
                                    i = t.dataTransfer.effectAllowed
                                } catch (e) {}
                                return t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy",
                                e(t),
                                this.emit("dragover", t)
                            }
                            ,
                            dragleave: e => this.emit("dragleave", e),
                            drop: t => (e(t),
                            this.drop(t)),
                            dragend: e => this.emit("dragend", e)
                        }
                    }],
                    this.clickableElements.forEach((e => this.listeners.push({
                        element: e,
                        events: {
                            click: t => ((e !== this.element || t.target === this.element || Lt.elementInside(t.target, this.element.querySelector(".dz-message"))) && this.hiddenFileInput.click(),
                            !0)
                        }
                    }))),
                    this.enable(),
                    this.options.init.call(this)
                }
                destroy() {
                    return this.disable(),
                    this.removeAllFiles(!0),
                    (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),
                    this.hiddenFileInput = null),
                    delete this.element.dropzone,
                    Lt.instances.splice(Lt.instances.indexOf(this), 1)
                }
                updateTotalUploadProgress() {
                    let e, t = 0, i = 0;
                    if (this.getActiveFiles().length) {
                        for (let e of this.getActiveFiles())
                            t += e.upload.bytesSent,
                            i += e.upload.total;
                        e = 100 * t / i
                    } else
                        e = 100;
                    return this.emit("totaluploadprogress", e, i, t)
                }
                _getParamName(e) {
                    return "function" == typeof this.options.paramName ? this.options.paramName(e) : `${this.options.paramName}${this.options.uploadMultiple ? `[${e}]` : ""}`
                }
                _renameFile(e) {
                    return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
                }
                getFallbackForm() {
                    let e, t;
                    if (e = this.getExistingFallback())
                        return e;
                    let i = '<div class="dz-fallback">';
                    this.options.dictFallbackText && (i += `<p>${this.options.dictFallbackText}</p>`),
                    i += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? 'multiple="multiple"' : void 0} /><input type="submit" value="Upload!"></div>`;
                    let a = Lt.createElement(i);
                    return "FORM" !== this.element.tagName ? (t = Lt.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`),
                    t.appendChild(a)) : (this.element.setAttribute("enctype", "multipart/form-data"),
                    this.element.setAttribute("method", this.options.method)),
                    null != t ? t : a
                }
                getExistingFallback() {
                    let e = function(e) {
                        for (let t of e)
                            if (/(^| )fallback($| )/.test(t.className))
                                return t
                    };
                    for (let i of ["div", "form"]) {
                        var t;
                        if (t = e(this.element.getElementsByTagName(i)))
                            return t
                    }
                }
                setupEventListeners() {
                    return this.listeners.map((e => ( () => {
                        let t = [];
                        for (let i in e.events) {
                            let a = e.events[i];
                            t.push(e.element.addEventListener(i, a, !1))
                        }
                        return t
                    }
                    )()))
                }
                removeEventListeners() {
                    return this.listeners.map((e => ( () => {
                        let t = [];
                        for (let i in e.events) {
                            let a = e.events[i];
                            t.push(e.element.removeEventListener(i, a, !1))
                        }
                        return t
                    }
                    )()))
                }
                disable() {
                    return this.clickableElements.forEach((e => e.classList.remove("dz-clickable"))),
                    this.removeEventListeners(),
                    this.disabled = !0,
                    this.files.map((e => this.cancelUpload(e)))
                }
                enable() {
                    return delete this.disabled,
                    this.clickableElements.forEach((e => e.classList.add("dz-clickable"))),
                    this.setupEventListeners()
                }
                filesize(e) {
                    let t = 0
                      , i = "b";
                    if (e > 0) {
                        let a = ["tb", "gb", "mb", "kb", "b"];
                        for (let s = 0; s < a.length; s++) {
                            let o = a[s];
                            if (e >= Math.pow(this.options.filesizeBase, 4 - s) / 10) {
                                t = e / Math.pow(this.options.filesizeBase, 4 - s),
                                i = o;
                                break
                            }
                        }
                        t = Math.round(10 * t) / 10
                    }
                    return `<strong>${t}</strong> ${this.options.dictFileSizeUnits[i]}`
                }
                _updateMaxFilesReachedClass() {
                    return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files),
                    this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                }
                drop(e) {
                    if (!e.dataTransfer)
                        return;
                    this.emit("drop", e);
                    let t = [];
                    for (let i = 0; i < e.dataTransfer.files.length; i++)
                        t[i] = e.dataTransfer.files[i];
                    if (t.length) {
                        let {items: i} = e.dataTransfer;
                        i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t)
                    }
                    this.emit("addedfiles", t)
                }
                paste(e) {
                    if (null == (t = null != e ? e.clipboardData : void 0,
                    i = e => e.items,
                    null != t ? i(t) : void 0))
                        return;
                    var t, i;
                    this.emit("paste", e);
                    let {items: a} = e.clipboardData;
                    return a.length ? this._addFilesFromItems(a) : void 0
                }
                handleFiles(e) {
                    for (let t of e)
                        this.addFile(t)
                }
                _addFilesFromItems(e) {
                    return ( () => {
                        let t = [];
                        for (let a of e) {
                            var i;
                            null != a.webkitGetAsEntry && (i = a.webkitGetAsEntry()) ? i.isFile ? t.push(this.addFile(a.getAsFile())) : i.isDirectory ? t.push(this._addFilesFromDirectory(i, i.name)) : t.push(void 0) : null != a.getAsFile && (null == a.kind || "file" === a.kind) ? t.push(this.addFile(a.getAsFile())) : t.push(void 0)
                        }
                        return t
                    }
                    )()
                }
                _addFilesFromDirectory(e, t) {
                    let i = e.createReader()
                      , a = e => {
                        return t = console,
                        i = "log",
                        a = t => t.log(e),
                        null != t && "function" == typeof t[i] ? a(t, i) : void 0;
                        var t, i, a
                    }
                    ;
                    var s = () => i.readEntries((e => {
                        if (e.length > 0) {
                            for (let i of e)
                                i.isFile ? i.file((e => {
                                    if (!this.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1))
                                        return e.fullPath = `${t}/${e.name}`,
                                        this.addFile(e)
                                }
                                )) : i.isDirectory && this._addFilesFromDirectory(i, `${t}/${i.name}`);
                            s()
                        }
                        return null
                    }
                    ), a);
                    return s()
                }
                accept(e, t) {
                    this.options.maxFilesize && e.size > 1048576 * this.options.maxFilesize ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : Lt.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)),
                    this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
                }
                addFile(e) {
                    e.upload = {
                        uuid: Lt.uuidv4(),
                        progress: 0,
                        total: e.size,
                        bytesSent: 0,
                        filename: this._renameFile(e)
                    },
                    this.files.push(e),
                    e.status = Lt.ADDED,
                    this.emit("addedfile", e),
                    this._enqueueThumbnail(e),
                    this.accept(e, (t => {
                        t ? (e.accepted = !1,
                        this._errorProcessing([e], t)) : (e.accepted = !0,
                        this.options.autoQueue && this.enqueueFile(e)),
                        this._updateMaxFilesReachedClass()
                    }
                    ))
                }
                enqueueFiles(e) {
                    for (let t of e)
                        this.enqueueFile(t);
                    return null
                }
                enqueueFile(e) {
                    if (e.status !== Lt.ADDED || !0 !== e.accepted)
                        throw new Error("This file can't be queued because it has already been processed or was rejected.");
                    if (e.status = Lt.QUEUED,
                    this.options.autoProcessQueue)
                        return setTimeout(( () => this.processQueue()), 0)
                }
                _enqueueThumbnail(e) {
                    if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1048576 * this.options.maxThumbnailFilesize)
                        return this._thumbnailQueue.push(e),
                        setTimeout(( () => this._processThumbnailQueue()), 0)
                }
                _processThumbnailQueue() {
                    if (this._processingThumbnail || 0 === this._thumbnailQueue.length)
                        return;
                    this._processingThumbnail = !0;
                    let e = this._thumbnailQueue.shift();
                    return this.createThumbnail(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, (t => (this.emit("thumbnail", e, t),
                    this._processingThumbnail = !1,
                    this._processThumbnailQueue())))
                }
                removeFile(e) {
                    if (e.status === Lt.UPLOADING && this.cancelUpload(e),
                    this.files = St(this.files, e),
                    this.emit("removedfile", e),
                    0 === this.files.length)
                        return this.emit("reset")
                }
                removeAllFiles(e) {
                    null == e && (e = !1);
                    for (let t of this.files.slice())
                        (t.status !== Lt.UPLOADING || e) && this.removeFile(t);
                    return null
                }
                resizeImage(e, t, i, a, s) {
                    return this.createThumbnail(e, t, i, a, !0, ( (t, i) => {
                        if (null == i)
                            return s(e);
                        {
                            let {resizeMimeType: t} = this.options;
                            null == t && (t = e.type);
                            let a = i.toDataURL(t, this.options.resizeQuality);
                            return "image/jpeg" !== t && "image/jpg" !== t || (a = Ft.restore(e.dataURL, a)),
                            s(Lt.dataURItoBlob(a))
                        }
                    }
                    ))
                }
                createThumbnail(e, t, i, a, s, o) {
                    let r = new FileReader;
                    r.onload = () => {
                        e.dataURL = r.result,
                        "image/svg+xml" !== e.type ? this.createThumbnailFromUrl(e, t, i, a, s, o) : null != o && o(r.result)
                    }
                    ,
                    r.readAsDataURL(e)
                }
                displayExistingFile(e, t, i, a, s=!0) {
                    if (this.emit("addedfile", e),
                    this.emit("complete", e),
                    s) {
                        let s = t => {
                            this.emit("thumbnail", e, t),
                            i && i()
                        }
                        ;
                        e.dataURL = t,
                        this.createThumbnailFromUrl(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, s, a)
                    } else
                        this.emit("thumbnail", e, t),
                        i && i()
                }
                createThumbnailFromUrl(e, t, i, a, s, o, r) {
                    let n = document.createElement("img");
                    return r && (n.crossOrigin = r),
                    s = "from-image" != getComputedStyle(document.body).imageOrientation && s,
                    n.onload = () => {
                        let r = e => e(1);
                        return "undefined" != typeof EXIF && null !== EXIF && s && (r = e => EXIF.getData(n, (function() {
                            return e(EXIF.getTag(this, "Orientation"))
                        }
                        ))),
                        r((s => {
                            e.width = n.width,
                            e.height = n.height;
                            let r = this.options.resize.call(this, e, t, i, a)
                              , l = document.createElement("canvas")
                              , c = l.getContext("2d");
                            switch (l.width = r.trgWidth,
                            l.height = r.trgHeight,
                            s > 4 && (l.width = r.trgHeight,
                            l.height = r.trgWidth),
                            s) {
                            case 2:
                                c.translate(l.width, 0),
                                c.scale(-1, 1);
                                break;
                            case 3:
                                c.translate(l.width, l.height),
                                c.rotate(Math.PI);
                                break;
                            case 4:
                                c.translate(0, l.height),
                                c.scale(1, -1);
                                break;
                            case 5:
                                c.rotate(.5 * Math.PI),
                                c.scale(1, -1);
                                break;
                            case 6:
                                c.rotate(.5 * Math.PI),
                                c.translate(0, -l.width);
                                break;
                            case 7:
                                c.rotate(.5 * Math.PI),
                                c.translate(l.height, -l.width),
                                c.scale(-1, 1);
                                break;
                            case 8:
                                c.rotate(-.5 * Math.PI),
                                c.translate(-l.height, 0)
                            }
                            xt(c, n, null != r.srcX ? r.srcX : 0, null != r.srcY ? r.srcY : 0, r.srcWidth, r.srcHeight, null != r.trgX ? r.trgX : 0, null != r.trgY ? r.trgY : 0, r.trgWidth, r.trgHeight);
                            let h = l.toDataURL("image/png");
                            if (null != o)
                                return o(h, l)
                        }
                        ))
                    }
                    ,
                    null != o && (n.onerror = o),
                    n.src = e.dataURL
                }
                processQueue() {
                    let {parallelUploads: e} = this.options
                      , t = this.getUploadingFiles().length
                      , i = t;
                    if (t >= e)
                        return;
                    let a = this.getQueuedFiles();
                    if (a.length > 0) {
                        if (this.options.uploadMultiple)
                            return this.processFiles(a.slice(0, e - t));
                        for (; i < e; ) {
                            if (!a.length)
                                return;
                            this.processFile(a.shift()),
                            i++
                        }
                    }
                }
                processFile(e) {
                    return this.processFiles([e])
                }
                processFiles(e) {
                    for (let t of e)
                        t.processing = !0,
                        t.status = Lt.UPLOADING,
                        this.emit("processing", t);
                    return this.options.uploadMultiple && this.emit("processingmultiple", e),
                    this.uploadFiles(e)
                }
                _getFilesWithXhr(e) {
                    return this.files.filter((t => t.xhr === e)).map((e => e))
                }
                cancelUpload(e) {
                    if (e.status === Lt.UPLOADING) {
                        let t = this._getFilesWithXhr(e.xhr);
                        for (let e of t)
                            e.status = Lt.CANCELED;
                        void 0 !== e.xhr && e.xhr.abort();
                        for (let e of t)
                            this.emit("canceled", e);
                        this.options.uploadMultiple && this.emit("canceledmultiple", t)
                    } else
                        e.status !== Lt.ADDED && e.status !== Lt.QUEUED || (e.status = Lt.CANCELED,
                        this.emit("canceled", e),
                        this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                    if (this.options.autoProcessQueue)
                        return this.processQueue()
                }
                resolveOption(e, ...t) {
                    return "function" == typeof e ? e.apply(this, t) : e
                }
                uploadFile(e) {
                    return this.uploadFiles([e])
                }
                uploadFiles(e) {
                    this._transformFiles(e, (t => {
                        if (this.options.chunking) {
                            let i = t[0];
                            e[0].upload.chunked = this.options.chunking && (this.options.forceChunking || i.size > this.options.chunkSize),
                            e[0].upload.totalChunkCount = Math.ceil(i.size / this.options.chunkSize)
                        }
                        if (e[0].upload.chunked) {
                            let i = e[0]
                              , a = t[0]
                              , s = 0;
                            i.upload.chunks = [];
                            let o = () => {
                                let t = 0;
                                for (; void 0 !== i.upload.chunks[t]; )
                                    t++;
                                if (t >= i.upload.totalChunkCount)
                                    return;
                                s++;
                                let o = t * this.options.chunkSize
                                  , r = Math.min(o + this.options.chunkSize, a.size)
                                  , n = {
                                    name: this._getParamName(0),
                                    data: a.webkitSlice ? a.webkitSlice(o, r) : a.slice(o, r),
                                    filename: i.upload.filename,
                                    chunkIndex: t
                                };
                                i.upload.chunks[t] = {
                                    file: i,
                                    index: t,
                                    dataBlock: n,
                                    status: Lt.UPLOADING,
                                    progress: 0,
                                    retries: 0
                                },
                                this._uploadData(e, [n])
                            }
                            ;
                            if (i.upload.finishedChunkUpload = (t, a) => {
                                let s = !0;
                                t.status = Lt.SUCCESS,
                                t.dataBlock = null,
                                t.response = t.xhr.responseText,
                                t.responseHeaders = t.xhr.getAllResponseHeaders(),
                                t.xhr = null;
                                for (let e = 0; e < i.upload.totalChunkCount; e++) {
                                    if (void 0 === i.upload.chunks[e])
                                        return o();
                                    i.upload.chunks[e].status !== Lt.SUCCESS && (s = !1)
                                }
                                s && this.options.chunksUploaded(i, ( () => {
                                    this._finished(e, a, null)
                                }
                                ))
                            }
                            ,
                            this.options.parallelChunkUploads)
                                for (let e = 0; e < i.upload.totalChunkCount; e++)
                                    o();
                            else
                                o()
                        } else {
                            let i = [];
                            for (let a = 0; a < e.length; a++)
                                i[a] = {
                                    name: this._getParamName(a),
                                    data: t[a],
                                    filename: e[a].upload.filename
                                };
                            this._uploadData(e, i)
                        }
                    }
                    ))
                }
                _getChunk(e, t) {
                    for (let i = 0; i < e.upload.totalChunkCount; i++)
                        if (void 0 !== e.upload.chunks[i] && e.upload.chunks[i].xhr === t)
                            return e.upload.chunks[i]
                }
                _uploadData(e, t) {
                    let i = new XMLHttpRequest;
                    for (let t of e)
                        t.xhr = i;
                    e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = i);
                    let a = this.resolveOption(this.options.method, e, t)
                      , s = this.resolveOption(this.options.url, e, t);
                    i.open(a, s, !0),
                    this.resolveOption(this.options.timeout, e) && (i.timeout = this.resolveOption(this.options.timeout, e)),
                    i.withCredentials = !!this.options.withCredentials,
                    i.onload = t => {
                        this._finishedUploading(e, i, t)
                    }
                    ,
                    i.ontimeout = () => {
                        this._handleUploadError(e, i, `Request timedout after ${this.options.timeout / 1e3} seconds`)
                    }
                    ,
                    i.onerror = () => {
                        this._handleUploadError(e, i)
                    }
                    ,
                    (null != i.upload ? i.upload : i).onprogress = t => this._updateFilesUploadProgress(e, i, t);
                    let o = this.options.defaultHeaders ? {
                        Accept: "application/json",
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest"
                    } : {};
                    this.options.binaryBody && (o["Content-Type"] = e[0].type),
                    this.options.headers && (0,
                    Et.A)(o, this.options.headers);
                    for (let e in o) {
                        let t = o[e];
                        t && i.setRequestHeader(e, t)
                    }
                    if (this.options.binaryBody) {
                        for (let t of e)
                            this.emit("sending", t, i);
                        this.options.uploadMultiple && this.emit("sendingmultiple", e, i),
                        this.submitRequest(i, null, e)
                    } else {
                        let a = new FormData;
                        if (this.options.params) {
                            let t = this.options.params;
                            "function" == typeof t && (t = t.call(this, e, i, e[0].upload.chunked ? this._getChunk(e[0], i) : null));
                            for (let e in t) {
                                let i = t[e];
                                if (Array.isArray(i))
                                    for (let t = 0; t < i.length; t++)
                                        a.append(e, i[t]);
                                else
                                    a.append(e, i)
                            }
                        }
                        for (let t of e)
                            this.emit("sending", t, i, a);
                        this.options.uploadMultiple && this.emit("sendingmultiple", e, i, a),
                        this._addFormElementData(a);
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            a.append(i.name, i.data, i.filename)
                        }
                        this.submitRequest(i, a, e)
                    }
                }
                _transformFiles(e, t) {
                    let i = []
                      , a = 0;
                    for (let s = 0; s < e.length; s++)
                        this.options.transformFile.call(this, e[s], (o => {
                            i[s] = o,
                            ++a === e.length && t(i)
                        }
                        ))
                }
                _addFormElementData(e) {
                    if ("FORM" === this.element.tagName)
                        for (let t of this.element.querySelectorAll("input, textarea, select, button")) {
                            let i = t.getAttribute("name")
                              , a = t.getAttribute("type");
                            if (a && (a = a.toLowerCase()),
                            null != i)
                                if ("SELECT" === t.tagName && t.hasAttribute("multiple"))
                                    for (let a of t.options)
                                        a.selected && e.append(i, a.value);
                                else
                                    (!a || "checkbox" !== a && "radio" !== a || t.checked) && e.append(i, t.value)
                        }
                }
                _updateFilesUploadProgress(e, t, i) {
                    if (e[0].upload.chunked) {
                        let a = e[0]
                          , s = this._getChunk(a, t);
                        i ? (s.progress = 100 * i.loaded / i.total,
                        s.total = i.total,
                        s.bytesSent = i.loaded) : (s.progress = 100,
                        s.bytesSent = s.total),
                        a.upload.progress = 0,
                        a.upload.total = 0,
                        a.upload.bytesSent = 0;
                        for (let e = 0; e < a.upload.totalChunkCount; e++)
                            a.upload.chunks[e] && void 0 !== a.upload.chunks[e].progress && (a.upload.progress += a.upload.chunks[e].progress,
                            a.upload.total += a.upload.chunks[e].total,
                            a.upload.bytesSent += a.upload.chunks[e].bytesSent);
                        a.upload.progress = a.upload.progress / a.upload.totalChunkCount,
                        this.emit("uploadprogress", a, a.upload.progress, a.upload.bytesSent)
                    } else
                        for (let t of e)
                            t.upload.total && t.upload.bytesSent && t.upload.bytesSent == t.upload.total || (i ? (t.upload.progress = 100 * i.loaded / i.total,
                            t.upload.total = i.total,
                            t.upload.bytesSent = i.loaded) : (t.upload.progress = 100,
                            t.upload.bytesSent = t.upload.total),
                            this.emit("uploadprogress", t, t.upload.progress, t.upload.bytesSent))
                }
                _finishedUploading(e, t, i) {
                    let a;
                    if (e[0].status !== Lt.CANCELED && 4 === t.readyState) {
                        if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (a = t.responseText,
                        t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json")))
                            try {
                                a = JSON.parse(a)
                            } catch (e) {
                                i = e,
                                a = "Invalid JSON response from server."
                            }
                        this._updateFilesUploadProgress(e, t),
                        200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t), a) : this._finished(e, a, i) : this._handleUploadError(e, t, a)
                    }
                }
                _handleUploadError(e, t, i) {
                    if (e[0].status !== Lt.CANCELED) {
                        if (e[0].upload.chunked && this.options.retryChunks) {
                            let i = this._getChunk(e[0], t);
                            if (i.retries++ < this.options.retryChunksLimit)
                                return void this._uploadData(e, [i.dataBlock]);
                            console.warn("Retried this chunk too often. Giving up.")
                        }
                        this._errorProcessing(e, i || this.options.dictResponseError.replace("{{statusCode}}", t.status), t)
                    }
                }
                submitRequest(e, t, i) {
                    if (1 == e.readyState)
                        if (this.options.binaryBody)
                            if (i[0].upload.chunked) {
                                const t = this._getChunk(i[0], e);
                                e.send(t.dataBlock.data)
                            } else
                                e.send(i[0]);
                        else
                            e.send(t);
                    else
                        console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.")
                }
                _finished(e, t, i) {
                    for (let a of e)
                        a.status = Lt.SUCCESS,
                        this.emit("success", a, t, i),
                        this.emit("complete", a);
                    if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, i),
                    this.emit("completemultiple", e)),
                    this.options.autoProcessQueue)
                        return this.processQueue()
                }
                _errorProcessing(e, t, i) {
                    for (let a of e)
                        a.status = Lt.ERROR,
                        this.emit("error", a, t, i),
                        this.emit("complete", a);
                    if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, i),
                    this.emit("completemultiple", e)),
                    this.options.autoProcessQueue)
                        return this.processQueue()
                }
                static uuidv4() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        let t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    }
                    ))
                }
                constructor(e, t) {
                    let i, a;
                    if (super(),
                    this.element = e,
                    this.clickableElements = [],
                    this.listeners = [],
                    this.files = [],
                    "string" == typeof this.element && (this.element = document.querySelector(this.element)),
                    !this.element || null == this.element.nodeType)
                        throw new Error("Invalid dropzone element.");
                    if (this.element.dropzone)
                        throw new Error("Dropzone already attached.");
                    Lt.instances.push(this),
                    this.element.dropzone = this;
                    let s = null != (a = Lt.optionsForElement(this.element)) ? a : {};
                    if (this.options = (0,
                    Et.A)(!0, {}, Mt, s, null != t ? t : {}),
                    this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, ""),
                    this.options.forceFallback || !Lt.isBrowserSupported())
                        return this.options.fallback.call(this);
                    if (null == this.options.url && (this.options.url = this.element.getAttribute("action")),
                    !this.options.url)
                        throw new Error("No URL provided.");
                    if (this.options.acceptedFiles && this.options.acceptedMimeTypes)
                        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    if (this.options.uploadMultiple && this.options.chunking)
                        throw new Error("You cannot set both: uploadMultiple and chunking.");
                    if (this.options.binaryBody && this.options.uploadMultiple)
                        throw new Error("You cannot set both: binaryBody and uploadMultiple.");
                    this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes,
                    delete this.options.acceptedMimeTypes),
                    null != this.options.renameFilename && (this.options.renameFile = e => this.options.renameFilename.call(this, e.name, e)),
                    "string" == typeof this.options.method && (this.options.method = this.options.method.toUpperCase()),
                    (i = this.getExistingFallback()) && i.parentNode && i.parentNode.removeChild(i),
                    !1 !== this.options.previewsContainer && (this.options.previewsContainer ? this.previewsContainer = Lt.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element),
                    this.options.clickable && (!0 === this.options.clickable ? this.clickableElements = [this.element] : this.clickableElements = Lt.getElements(this.options.clickable, "clickable")),
                    this.init()
                }
            }
            Lt.initClass(),
            Lt.options = {},
            Lt.optionsForElement = function(e) {
                return e.getAttribute("id") ? Lt.options[kt(e.getAttribute("id"))] : void 0
            }
            ,
            Lt.instances = [],
            Lt.forElement = function(e) {
                if ("string" == typeof e && (e = document.querySelector(e)),
                null == (null != e ? e.dropzone : void 0))
                    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return e.dropzone
            }
            ,
            Lt.discover = function() {
                let e;
                if (document.querySelectorAll)
                    e = document.querySelectorAll(".dropzone");
                else {
                    e = [];
                    let t = t => ( () => {
                        let i = [];
                        for (let a of t)
                            /(^| )dropzone($| )/.test(a.className) ? i.push(e.push(a)) : i.push(void 0);
                        return i
                    }
                    )();
                    t(document.getElementsByTagName("div")),
                    t(document.getElementsByTagName("form"))
                }
                return ( () => {
                    let t = [];
                    for (let i of e)
                        !1 !== Lt.optionsForElement(i) ? t.push(new Lt(i)) : t.push(void 0);
                    return t
                }
                )()
            }
            ,
            Lt.blockedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i],
            Lt.isBrowserSupported = function() {
                let e = !0;
                if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList"in document.createElement("a")) {
                        void 0 !== Lt.blacklistedBrowsers && (Lt.blockedBrowsers = Lt.blacklistedBrowsers);
                        for (let t of Lt.blockedBrowsers)
                            if (t.test(navigator.userAgent)) {
                                e = !1;
                                continue
                            }
                    } else
                        e = !1;
                else
                    e = !1;
                return e
            }
            ,
            Lt.dataURItoBlob = function(e) {
                let t = atob(e.split(",")[1])
                  , i = e.split(",")[0].split(":")[1].split(";")[0]
                  , a = new ArrayBuffer(t.length)
                  , s = new Uint8Array(a);
                for (let e = 0, i = t.length, a = 0 <= i; a ? e <= i : e >= i; a ? e++ : e--)
                    s[e] = t.charCodeAt(e);
                return new Blob([a],{
                    type: i
                })
            }
            ;
            const St = (e, t) => e.filter((e => e !== t)).map((e => e))
              , kt = e => e.replace(/[\-_](\w)/g, (e => e.charAt(1).toUpperCase()));
            Lt.createElement = function(e) {
                let t = document.createElement("div");
                return t.innerHTML = e,
                t.childNodes[0]
            }
            ,
            Lt.elementInside = function(e, t) {
                if (e === t)
                    return !0;
                for (; e = e.parentNode; )
                    if (e === t)
                        return !0;
                return !1
            }
            ,
            Lt.getElement = function(e, t) {
                let i;
                if ("string" == typeof e ? i = document.querySelector(e) : null != e.nodeType && (i = e),
                null == i)
                    throw new Error(`Invalid \`${t}\` option provided. Please provide a CSS selector or a plain HTML element.`);
                return i
            }
            ,
            Lt.getElements = function(e, t) {
                let i, a;
                if (e instanceof Array) {
                    a = [];
                    try {
                        for (i of e)
                            a.push(this.getElement(i, t))
                    } catch (e) {
                        a = null
                    }
                } else if ("string" == typeof e)
                    for (i of (a = [],
                    document.querySelectorAll(e)))
                        a.push(i);
                else
                    null != e.nodeType && (a = [e]);
                if (null == a || !a.length)
                    throw new Error(`Invalid \`${t}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
                return a
            }
            ,
            Lt.confirm = function(e, t, i) {
                return window.confirm(e) ? t() : null != i ? i() : void 0
            }
            ,
            Lt.isValidFile = function(e, t) {
                if (!t)
                    return !0;
                t = t.split(",");
                let i = e.type
                  , a = i.replace(/\/.*$/, "");
                for (let s of t)
                    if (s = s.trim(),
                    "." === s.charAt(0)) {
                        if (-1 !== e.name.toLowerCase().indexOf(s.toLowerCase(), e.name.length - s.length))
                            return !0
                    } else if (/\/\*$/.test(s)) {
                        if (a === s.replace(/\/.*$/, ""))
                            return !0
                    } else if (i === s)
                        return !0;
                return !1
            }
            ,
            "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) {
                return this.each((function() {
                    return new Lt(this,e)
                }
                ))
            }
            ),
            Lt.ADDED = "added",
            Lt.QUEUED = "queued",
            Lt.ACCEPTED = Lt.QUEUED,
            Lt.UPLOADING = "uploading",
            Lt.PROCESSING = Lt.UPLOADING,
            Lt.CANCELED = "canceled",
            Lt.ERROR = "error",
            Lt.SUCCESS = "success";
            var xt = function(e, t, i, a, s, o, r, n, l, c) {
                let h = function(e) {
                    e.naturalWidth;
                    let t = e.naturalHeight
                      , i = document.createElement("canvas");
                    i.width = 1,
                    i.height = t;
                    let a = i.getContext("2d");
                    a.drawImage(e, 0, 0);
                    let {data: s} = a.getImageData(1, 0, 1, t)
                      , o = 0
                      , r = t
                      , n = t;
                    for (; n > o; )
                        0 === s[4 * (n - 1) + 3] ? r = n : o = n,
                        n = r + o >> 1;
                    let l = n / t;
                    return 0 === l ? 1 : l
                }(t);
                return e.drawImage(t, i, a, s, o, r, n, l, c / h)
            };
            class Ft {
                static initClass() {
                    this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
                static encode64(e) {
                    let t, i, a, s, o, r = "", n = "", l = "", c = 0;
                    for (; t = e[c++],
                    i = e[c++],
                    n = e[c++],
                    a = t >> 2,
                    s = (3 & t) << 4 | i >> 4,
                    o = (15 & i) << 2 | n >> 6,
                    l = 63 & n,
                    isNaN(i) ? o = l = 64 : isNaN(n) && (l = 64),
                    r = r + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(l),
                    t = i = n = "",
                    a = s = o = l = "",
                    c < e.length; )
                        ;
                    return r
                }
                static restore(e, t) {
                    if (!e.match("data:image/jpeg;base64,"))
                        return t;
                    let i = this.decode64(e.replace("data:image/jpeg;base64,", ""))
                      , a = this.slice2Segments(i)
                      , s = this.exifManipulation(t, a);
                    return `data:image/jpeg;base64,${this.encode64(s)}`
                }
                static exifManipulation(e, t) {
                    let i = this.getExifArray(t)
                      , a = this.insertExif(e, i);
                    return new Uint8Array(a)
                }
                static getExifArray(e) {
                    let t, i = 0;
                    for (; i < e.length; ) {
                        if (t = e[i],
                        255 === t[0] & 225 === t[1])
                            return t;
                        i++
                    }
                    return []
                }
                static insertExif(e, t) {
                    let i = e.replace("data:image/jpeg;base64,", "")
                      , a = this.decode64(i)
                      , s = a.indexOf(255, 3)
                      , o = a.slice(0, s)
                      , r = a.slice(s)
                      , n = o;
                    return n = n.concat(t),
                    n = n.concat(r),
                    n
                }
                static slice2Segments(e) {
                    let t = 0
                      , i = [];
                    for (; ; ) {
                        if (255 === e[t] & 218 === e[t + 1])
                            break;
                        if (255 === e[t] & 216 === e[t + 1])
                            t += 2;
                        else {
                            let a = t + (256 * e[t + 2] + e[t + 3]) + 2
                              , s = e.slice(t, a);
                            i.push(s),
                            t = a
                        }
                        if (t > e.length)
                            break
                    }
                    return i
                }
                static decode64(e) {
                    let t, i, a, s, o, r = "", n = "", l = 0, c = [];
                    for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),
                    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); a = this.KEY_STR.indexOf(e.charAt(l++)),
                    s = this.KEY_STR.indexOf(e.charAt(l++)),
                    o = this.KEY_STR.indexOf(e.charAt(l++)),
                    n = this.KEY_STR.indexOf(e.charAt(l++)),
                    t = a << 2 | s >> 4,
                    i = (15 & s) << 4 | o >> 2,
                    r = (3 & o) << 6 | n,
                    c.push(t),
                    64 !== o && c.push(i),
                    64 !== n && c.push(r),
                    t = i = r = "",
                    a = s = o = n = "",
                    l < e.length; )
                        ;
                    return c
                }
            }
            Ft.initClass();
            window.Dropzone = Lt;
            var It = i(6430);
            document.querySelectorAll("[data-flatpickr]").forEach((e => {
                const t = e.dataset.flatpickr ? JSON.parse(e.dataset.flatpickr) : {};
                (0,
                It.A)(e, t)
            }
            )),
            window.flatpickr = It.A;
            const Zt = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            }
              , Tt = (e, t={}, i={}) => {
                var a;
                const s = e.getAttribute("data-duoicon");
                if (!s)
                    return;
                const o = s.replace("-", "_");
                if (!t || !t.hasOwnProperty(o) || !t[o])
                    return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);
                const r = t[o]
                  , n = (e => {
                    let t = {};
                    return Array.from(e.attributes).forEach(( ({name: e, value: i}) => {
                        t[e] = i
                    }
                    )),
                    t
                }
                )(e);
                let l = [];
                i.class && (Array.isArray(i.class) && l.push(...i.class),
                "string" == typeof i.class && l.push(...i.class.split(" "))),
                n.class && "string" == typeof n.class && l.push(...n.class.split(" ")),
                n.class = ( (e, t=[]) => {
                    let i = [];
                    return "string" == typeof e && (i = e.split(" ")),
                    Array.isArray(e) && i.push(...e),
                    i.push(...t),
                    i.flat((e => e)).filter(( (e, t, i) => i.indexOf(e) == t)).join(" ")
                }
                )(l, ["duo-icon", `duo-icon-${s}`]);
                const c = ( (e, t="") => {
                    const i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    i.innerHTML = t;
                    let a = Object.assign(Zt, e);
                    return Object.keys(a).forEach((e => {
                        i.setAttribute(e, a[e])
                    }
                    )),
                    i
                }
                )(n, r);
                return null == (a = e.parentNode) ? void 0 : a.replaceChild(c, e)
            }
              , Ot = {
                add_circle: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 7a1 1 0 0 0-.993.883L11 8v3H8a1 1 0 0 0-.117 1.993L8 13h3v3a1 1 0 0 0 1.993.117L13 16v-3h3a1 1 0 0 0 .117-1.993L16 11h-3V8a1 1 0 0 0-1-1Z" class="duoicon-primary-layer"></path>',
                airplay: '<path fill="currentColor" d="M11.514 16.903a.6.6 0 0 1 .976 0l2.766 3.868a.6.6 0 0 1-.488.949H9.237a.6.6 0 0 1-.488-.949l2.765-3.868Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M20 4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3.71l-3.151-4.407a1.4 1.4 0 0 0-2.278 0L7.711 19H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                alert_octagon: '<path fill="currentColor" fill-rule="evenodd" d="M15.314 2a2 2 0 0 1 1.414.586l4.686 4.686A2 2 0 0 1 22 8.686v6.628a2 2 0 0 1-.586 1.414l-4.686 4.686a2 2 0 0 1-1.414.586H8.686a2 2 0 0 1-1.414-.586l-4.686-4.686A2 2 0 0 1 2 15.314V8.686a2 2 0 0 1 .586-1.414l4.686-4.686A2 2 0 0 1 8.686 2h6.628Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M12 6a1 1 0 0 0-.993.883L11 7v6a1 1 0 0 0 1.993.117L13 13V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" class="duoicon-primary-layer"></path>',
                alert_triangle: '<path fill="currentColor" d="m13.299 3.148 8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 8a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1Zm0 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" class="duoicon-primary-layer"></path>',
                align_bottom: '<path fill="currentColor" fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M15 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4Z" class="duoicon-primary-layer"></path>',
                align_center: '<path fill="currentColor" d="M17 17.5a1.5 1.5 0 0 1 .144 2.993L17 20.5H7a1.5 1.5 0 0 1-.144-2.993L7 17.5h10Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M20 2.5a1.5 1.5 0 0 1 .144 2.993L20 5.5H4a1.5 1.5 0 0 1-.144-2.993L4 2.5h16Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M17 7.5a1.5 1.5 0 0 1 .144 2.993L17 10.5H7a1.5 1.5 0 0 1-.144-2.993L7 7.5h10Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M20 12.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Z" class="duoicon-primary-layer"></path>',
                android: '<path fill="currentColor" fill-rule="evenodd" d="M20 14v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5h16Zm-5-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M12 3c1.33 0 2.584.324 3.687.899l.606-.606a1 1 0 1 1 1.414 1.414l-.35.35A7.98 7.98 0 0 1 20 11v1H4v-1a7.982 7.982 0 0 1 2.644-5.942l-.351-.35a1 1 0 1 1 1.414-1.415l.606.606A7.97 7.97 0 0 1 12 3Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                app_dots: '<path fill="currentColor" d="M7 11.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 11.5Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M17 21.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 21.5Zm0-10c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 11.5Zm-10 10c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 21.5Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                app: '<path fill="currentColor" d="M8.75 13A2.25 2.25 0 0 1 11 15.25v3.5A2.25 2.25 0 0 1 8.75 21h-3.5A2.25 2.25 0 0 1 3 18.75v-3.5A2.25 2.25 0 0 1 5.25 13h3.5Zm10-10A2.25 2.25 0 0 1 21 5.25v3.5A2.25 2.25 0 0 1 18.75 11h-3.5A2.25 2.25 0 0 1 13 8.75v-3.5A2.25 2.25 0 0 1 15.25 3h3.5Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M8.75 3A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5A2.25 2.25 0 0 1 5.25 3h3.5Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M18.75 13A2.25 2.25 0 0 1 21 15.25v3.5A2.25 2.25 0 0 1 18.75 21h-3.5A2.25 2.25 0 0 1 13 18.75v-3.5A2.25 2.25 0 0 1 15.25 13h3.5Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                apple: '<path fill="currentColor" d="m13.064 6.685.745-.306c.605-.24 1.387-.485 2.31-.33 1.891.318 3.195 1.339 3.972 2.693.3.522.058 1.21-.502 1.429-1.793.701-2.154 3.081-.65 4.283.233.187.499.33.783.423.518.17.81.745.64 1.263-.442 1.342-1.078 2.581-1.831 3.581-.744.988-1.652 1.808-2.663 2.209-.66.26-1.368.163-2.045-.005l-.402-.107-.597-.173c-.271-.079-.55-.147-.824-.147-.275 0-.553.068-.824.147l-.597.173-.402.107c-.677.168-1.386.266-2.045.005-1.273-.504-2.396-1.68-3.245-3.067a13.443 13.443 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775.74-1.521 2.096-2.705 4.163-3.053.84-.141 1.562.048 2.14.265l.331.13.584.241c.4.157.715.249 1.064.249.348 0 .664-.092 1.064-.249Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M11.768 2.768c.976-.977 2.475-1.061 2.828-.707.354.353.27 1.852-.707 2.828-.976.976-2.475 1.06-2.828.707-.354-.353-.27-1.852.707-2.828Z" class="duoicon-primary-layer"></path>',
                approved: '<path fill="currentColor" fill-rule="evenodd" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127 1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686l1.9-1.9Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="m15.079 8.983-4.244 4.244-1.768-1.768a1 1 0 1 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414Z" class="duoicon-primary-layer"></path>',
                appstore: '<path fill="currentColor" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M11.873 5.511a1 1 0 0 0-1.797.873l.051.105.727 1.297-1.807 3.226a1 1 0 0 0 1.683 1.075l.063-.098 3.08-5.5a1 1 0 0 0-1.683-1.076l-.063.098L12 5.74l-.127-.227v-.002Zm2.52 4.5a1 1 0 0 0-1.797.873l.052.105 3.08 5.5a1 1 0 0 0 1.796-.872l-.052-.106-.286-.51h.514a1 1 0 0 0 .117-1.994L17.7 13h-1.634l-1.673-2.989ZM12.5 13H6.3a1 1 0 1 0 0 2h.514l-.287.511a1.001 1.001 0 0 0 1.746.978L9.106 15H12.5a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path>',
                award: '<path fill="currentColor" d="M12 2c6.158 0 10.007 6.667 6.928 12A7.985 7.985 0 0 1 17 16.245v4.61a1.1 1.1 0 0 1-1.486 1.03L12 20.569l-3.514 1.318A1.1 1.1 0 0 1 7 20.856v-4.61C2.192 12.398 3.352 4.788 9.089 2.548A8.01 8.01 0 0 1 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 6c3.079 0 5.004 3.333 3.464 6A3.998 3.998 0 0 1 12 14c-3.079 0-5.004-3.333-3.464-6A3.998 3.998 0 0 1 12 6Z" class="duoicon-primary-layer"></path>',
                baby_carriage: '<path fill="currentColor" fill-rule="evenodd" d="M7.746 2.609c.764-.296 1.566.093 1.877.773L12.643 10H18V8.5A2.5 2.5 0 0 1 20.5 6h.5a1 1 0 1 1 0 2h-.5a.5.5 0 0 0-.5.5V11a8.997 8.997 0 0 1-2.489 6.213c1.76.778 2.018 3.17.464 4.305-1.554 1.135-3.755.163-3.961-1.751A2.653 2.653 0 0 1 14 19.5v-.015a9.004 9.004 0 0 1-6 0v.015c0 1.925-2.084 3.127-3.75 2.164-1.667-.962-1.666-3.368 0-4.33.078-.044.157-.085.239-.121C.063 12.574 1.769 4.927 7.746 2.609Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M8.012 4.669A6.998 6.998 0 0 0 4.072 10h6.372L8.012 4.67v-.001Z" class="duoicon-primary-layer"></path>',
                bank: '<path fill="currentColor" fill-rule="evenodd" d="m12.67 2.217 8.5 4.75A1.5 1.5 0 0 1 22 8.31v1.44c0 .69-.56 1.25-1.25 1.25H20v8h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-8h-.75C2.56 11 2 10.44 2 9.75V8.31c0-.522.27-1.002.706-1.274l8.623-4.819c.422-.211.92-.211 1.342 0h-.001Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 5H7v8h2v-6h2v6h2v-6h2v6h2v-8Z" class="duoicon-primary-layer"></path>',
                battery: '<path fill="currentColor" d="M18 6a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2h-5.101l2.664-4.441c.986-1.642.197-3.65-1.405-4.325l.415-.69c.478-.799.543-1.73.255-2.544H18Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M11.142 6.486a1 1 0 0 1 1.77.925l-.055.104L10.768 11h2.215c.746 0 1.221.773.92 1.427l-.054.103-2.99 4.985a1 1 0 0 1-1.77-.926l.055-.104L11.233 13H9.019a1.01 1.01 0 0 1-.92-1.427l.054-.103 2.99-4.984h-.001Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="m9.101 6-2.664 4.441c-.953 1.587-.247 3.516 1.247 4.253l.158.072-.414.69a2.99 2.99 0 0 0-.317 2.354l.06.19H4a2 2 0 0 1-1.995-1.85L2 16V8a2 2 0 0 1 1.85-1.994L4 6h5.101Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                bell_badge: '<path fill="currentColor" d="M18.5 9c.338 0 .664-.048.973-.137.018.211.027.425.027.64v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25c.201-5.749 6.533-9.14 11.43-6.123-1.834 1.973-.845 5.193 1.781 5.795A3.5 3.5 0 0 0 18.5 9Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M18.5 8c1.925 0 3.127-2.083 2.165-3.75A2.5 2.5 0 0 0 18.5 3c-1.925 0-3.127 2.083-2.165 3.75A2.5 2.5 0 0 0 18.5 8Zm-3.542 11.003c-.385 2.277-3.09 3.283-4.87 1.811a3 3 0 0 1-1.046-1.811h5.916Z" class="duoicon-primary-layer"></path>',
                bell: '<path fill="currentColor" d="M9.042 19.003h5.916c-.385 2.277-3.09 3.283-4.87 1.811a3 3 0 0 1-1.046-1.811Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2.003a7.5 7.5 0 0 1 7.5 7.5v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004v-.001Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                book_2: '<path fill="currentColor" fill-rule="evenodd" d="M3.255 3.667A1.01 1.01 0 0 1 4.022 2H16.5c3.464 0 5.629 3.75 3.897 6.75A4.5 4.5 0 0 1 16.5 11H4.022a1.01 1.01 0 0 1-.767-1.667l.754-.88a3 3 0 0 0 0-3.905l-.754-.88v-.001Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M3 16.5A4.5 4.5 0 0 1 7.5 12h12.478a1.01 1.01 0 0 1 .767 1.667l-.755.88a3 3 0 0 0 0 3.905l.755.88A1.01 1.01 0 0 1 19.978 21H7.5A4.5 4.5 0 0 1 3 16.5Z" class="duoicon-primary-layer"></path>',
                book_3: '<path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h11a2 2 0 0 1 2 2v12.99c0 .168-.038.322-.113.472l-.545 1.09a1 1 0 0 0 0 .895l.543 1.088A1 1 0 0 1 19 22H7a3 3 0 0 1-3-3V5Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M10 7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM7 18h10.408a2.997 2.997 0 0 0 0 2H7a1 1 0 1 1 0-2Z" class="duoicon-primary-layer"></path>',
                book: '<path fill="currentColor" fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v1a1 1 0 1 0 0 2v2a1 1 0 1 0 0 2v2a1 1 0 1 0 0 2v2a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M8.5 6A1.5 1.5 0 0 0 7 7.5v1A1.5 1.5 0 0 0 8.5 10h7A1.5 1.5 0 0 0 17 8.5v-1A1.5 1.5 0 0 0 15.5 6h-7Z" class="duoicon-primary-layer"></path>',
                bookmark: '<path fill="currentColor" fill-rule="evenodd" d="M17 2a3 3 0 0 1 3 3v16a1 1 0 0 1-1.625.78l-1.875-1.5-1.875 1.5a1 1 0 0 1-1.332-.073L12 20.414l-1.293 1.293a1 1 0 0 1-1.332.074L7.5 20.28l-1.875 1.5A1 1 0 0 1 4 21V5a3 3 0 0 1 3-3h10Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M15 8H9a1 1 0 0 0-.117 1.993L9 10h6a1 1 0 0 0 .117-1.993L15 8Zm-3 4H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path>',
                box_2: '<path fill="currentColor" d="m20.765 7.982.022.19.007.194v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095-6.295 3.634-.124.067-.126.06v-8.99l7.765-4.588Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="m13.25 2.567 6.294 3.634c.05.03.1.06.148.092L12 10.838 4.308 6.293a2.81 2.81 0 0 1 .148-.092l6.294-3.634a2.498 2.498 0 0 1 2.5 0Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M3.235 7.982 11 12.571v8.988a2.339 2.339 0 0 1-.25-.126l-6.294-3.634a2.502 2.502 0 0 1-1.25-2.165V8.366c0-.13.01-.258.03-.384h-.001Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                box: '<path fill="currentColor" d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h18Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v3H2V5a2 2 0 0 1 2-2h16Zm-6 10h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path>',
                bread: '<path fill="currentColor" fill-rule="evenodd" d="M14.194 2.885c2.3-.299 4.458.21 5.645 1.397.79.791 1.18 1.711 1.16 2.72-.017.961-.405 1.894-.938 2.764-.762 1.245-1.952 2.563-3.27 3.915l-.729.74-1.616 1.617-.691.682c-1.378 1.346-2.722 2.566-3.989 3.341-.87.533-1.803.92-2.764.939-1.009.02-1.929-.37-2.72-1.161-1.187-1.187-1.696-3.345-1.397-5.645.307-2.36 1.471-5.035 3.872-7.437 2.402-2.4 5.078-3.565 7.437-3.872Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M13.111 5.149c-.618.178-1.259.43-1.907.768.52.847 1.299 1.452 2.308 1.789a1 1 0 1 0 .633-1.897c-.434-.145-.774-.36-1.034-.66Zm-4.42 2.53a13.83 13.83 0 0 0-1.406 1.468c.194.251.406.489.621.704.585.584 1.333 1.145 2.07 1.39a1 1 0 0 0 .742-1.854l-.109-.043c-.323-.107-.812-.43-1.288-.907a5.131 5.131 0 0 1-.63-.758Zm-3 3.986a9.818 9.818 0 0 0-.742 2.283c.42.36.919.638 1.492.83a1 1 0 1 0 .633-1.898c-.667-.222-1.112-.612-1.383-1.216v.001Z" class="duoicon-primary-layer"></path>',
                bridge: '<path fill="currentColor" d="M15 18a1 1 0 0 1 .117 1.993L15 20h-3a1 1 0 0 1-.117-1.993L12 18h3Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M15 3a1 1 0 0 1 .993.883L16 4v.454c1.59.378 2.85.937 3.775 1.459l.225.13V6a1 1 0 0 1 1.993-.117L22 6v6.9a1.1 1.1 0 0 1-.98 1.094L20.9 14h-4.855c-.539 0-.982-.407-1.039-.93L15 12.954V12.5c.002-2.309-2.496-3.755-4.497-2.602a2.997 2.997 0 0 0-1.498 2.426L9 12.5v.455c0 .539-.407.982-.93 1.039L7.954 14H3.1a1.1 1.1 0 0 1-1.094-.98L2 12.9V6a1 1 0 0 1 1.993-.117L4 6v.042a14.26 14.26 0 0 1 3.61-1.49L8 4.455V4a1 1 0 0 1 1.993-.117L10 4v.109a18.34 18.34 0 0 1 3.522-.046l.478.046V4a1 1 0 0 1 1-1Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M13 15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h4Z" class="duoicon-primary-layer"></path>',
                briefcase: '<path fill="currentColor" d="M14 3a3 3 0 0 1 3 3h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3h4Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M14 5h-4a1 1 0 0 0-.993.883L9 6h6a1 1 0 0 0-.883-.993L14 5Zm5 5H5a1 1 0 0 0-.117 1.993L5 12h6v1a1 1 0 0 0 1.993.117L13 13v-1h6a1 1 0 0 0 .117-1.993L19 10Z" class="duoicon-primary-layer"></path>',
                brush_2: '<path fill="currentColor" d="m20.485 10.586 1.06 1.06a2.5 2.5 0 0 1 .123 3.405l-.122.13-6.364 6.365a2.5 2.5 0 0 1-3.405.122l-.13-.122-1.061-1.06 9.9-9.9h-.001Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M2.808 2.808c.885-.886 2.01-1.33 3.184-1.203 1.161.125 2.225.792 3.056 1.846.888 1.127 1.7 2.732 2.336 4.174.311.704 1.16.874 1.676.475l.093-.081.615-.615a2.5 2.5 0 0 1 3.405-.122l.13.122 1.768 1.768-9.9 9.899-1.767-1.768a2.5 2.5 0 0 1-.122-3.405l.122-.13.615-.615c.5-.5.354-1.439-.394-1.769-1.442-.636-3.047-1.448-4.174-2.336-1.053-.831-1.72-1.895-1.846-3.056-.127-1.174.317-2.3 1.203-3.184Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                brush: '<path fill="currentColor" d="M22 15v5a2 2 0 0 1-2 2h-1v-3a1 1 0 1 0-2 0v3h-4v-3a1 1 0 1 0-2 0v3H7v-3a1 1 0 1 0-2 0v3H4a2 2 0 0 1-2-2v-5h20Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M13 2a2 2 0 0 1 2 2v4a1 1 0 0 0 1 1h4a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2h4a1 1 0 0 0 1-1V4a2 2 0 0 1 2-2h2Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                bug: '<path fill="currentColor" fill-rule="evenodd" d="M7.67 5.5a5 5 0 0 1 8.66 0L17.2 7H6.8l.869-1.5h.001Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M3.553 6.106a1 1 0 0 1 1.341.447c.147.293.5.674.973.99C6.353 7.867 6.781 8 7 8h10c.219 0 .647-.133 1.133-.457.474-.316.826-.697.973-.99a1 1 0 1 1 1.788.894c-.353.707-1 1.326-1.652 1.76a5.464 5.464 0 0 1-.966.516c.297.731.503 1.496.616 2.277H21a1 1 0 1 1 0 2h-2.012a9.993 9.993 0 0 1-.74 3.327c.572.33.963.86 1.209 1.35.349.725.534 1.518.543 2.323a1 1 0 1 1-2 0c0-.374-.101-.966-.332-1.428-.13-.26-.26-.409-.385-.49-1.056 1.486-2.539 2.54-4.283 2.835V13a1 1 0 1 0-2 0v8.917c-1.744-.295-3.227-1.35-4.283-2.834-.126.08-.255.23-.385.49-.21.447-.323.933-.332 1.427a1 1 0 1 1-2 0 5.496 5.496 0 0 1 .543-2.322c.246-.492.637-1.02 1.209-1.35A9.998 9.998 0 0 1 5.012 14H3a1 1 0 1 1 0-2h2.108c.113-.781.32-1.546.616-2.277a5.464 5.464 0 0 1-.966-.516c-.651-.434-1.3-1.053-1.652-1.76a1 1 0 0 1 .447-1.341Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                building: '<path fill="currentColor" fill-rule="evenodd" d="M13 3a2 2 0 0 1 1.995 1.85L15 5v14h1V9.5a.5.5 0 0 1 .41-.492L16.5 9H18a2 2 0 0 1 1.995 1.85L20 11v8h1a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19h1V5a2 2 0 0 1 1.85-1.995L6 3h7Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M11 7H8v2h3V7Zm0 4H8v2h3v-2Zm0 4H8v2h3v-2Z" class="duoicon-primary-layer"></path>',
                bus: '<path fill="currentColor" fill-rule="evenodd" d="M11.022 3H18a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7c0 .715-.381 1.375-1 1.732v.768a1.5 1.5 0 0 1-3 0V19H7v.5a1.5 1.5 0 0 1-3 0v-.768A1.999 1.999 0 0 1 3 17v-7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1 3 3 0 0 1 3-3h5.022Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M15 15a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Zm-9 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm5.618-10h2.764l-1.276 2.553a1 1 0 1 0 1.788.894L16.618 5H18a1 1 0 0 1 1 1v5H5V6a1 1 0 0 1 1-1h3.382L8.106 7.553a1 1 0 0 0 1.788.894L11.618 5Z" class="duoicon-primary-layer"></path>',
                cake: '<path fill="currentColor" d="M17.707 15.707a.414.414 0 0 1 .586 0 2.414 2.414 0 0 0 2.707.491V20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2v-3.802c.89.405 1.975.241 2.707-.49a.414.414 0 0 1 .586 0 2.414 2.414 0 0 0 3.414 0 .414.414 0 0 1 .586 0 2.414 2.414 0 0 0 3.414 0 .414.414 0 0 1 .586 0 2.414 2.414 0 0 0 3.414 0v-.001ZM16.5 2c-.319.638-.028 1.05.225 1.41.144.203.275.39.275.59a1 1 0 1 1-2 0c0-.552.5-1.5 1.5-2Zm-8 0c-.319.638-.028 1.05.225 1.41.144.203.275.39.275.59a1 1 0 1 1-2 0c0-.552.5-1.5 1.5-2Zm4 0c-.319.638-.028 1.05.225 1.41.144.203.275.39.275.59a1 1 0 1 1-2 0c0-.552.5-1.5 1.5-2Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M16 6a1 1 0 0 1 1 1v2h1a3 3 0 0 1 3 3v1.586l-.707.707a.414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0L3 13.586V12a3 3 0 0 1 3-3h1V7a1 1 0 1 1 2 0v2h2V7a1 1 0 1 1 2 0v2h2V7a1 1 0 0 1 1-1Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                calendar: '<path fill="currentColor" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h18Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h6V4a1 1 0 0 1 1-1Z" class="duoicon-primary-layer"></path>',
                camera_square: '<path fill="currentColor" d="M19 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M19 6h-1a1 1 0 0 0-.117 1.993L18 8h1a1 1 0 0 0 .117-1.993L19 6Zm-7 1c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7Z" class="duoicon-primary-layer"></path>',
                camera: '<path fill="currentColor" d="M14.793 3c.346 0 .682.12.95.34l.11.1L17.415 5H20a2 2 0 0 1 1.995 1.85L22 7v12a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V7a2 2 0 0 1 1.85-1.995L4 5h2.586l1.56-1.56c.245-.246.568-.399.913-.433L9.207 3h5.586Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 7.5c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17.5c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7.5Z" class="duoicon-primary-layer"></path>',
                campground: '<path fill="currentColor" d="M13.176 3.434a1 1 0 1 1 1.648 1.133l-1.61 2.342L21.526 19H22a1 1 0 1 1 0 2h-4.634l-.044-.07-4.492-6.487a1.01 1.01 0 0 0-1.66 0L6.678 20.93l-.044.07H2a1 1 0 1 1 0-2h.474l8.313-12.092-1.611-2.342a1 1 0 0 1 1.648-1.133L12 5.144l1.176-1.71Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 16.757 14.938 21H9.062L12 16.757Z" class="duoicon-primary-layer"></path>',
                candle: '<path fill="currentColor" fill-rule="evenodd" d="M12.058 2.08a1 1 0 0 0-1.382.766c-.027.228-.1.449-.216.647-.1.165-.25.334-.514.58-.52.482-.837 1.059-.922 1.681-.074.572.04 1.153.326 1.655C9.842 8.296 10.84 9 11.903 9 13.285 9 15 8.034 15 6.194c0-.943-.422-1.829-.946-2.512-.528-.687-1.243-1.279-1.996-1.601V2.08Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M9 10a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H9Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                car: '<path fill="currentColor" fill-rule="evenodd" d="M5.553 5.658A3 3 0 0 1 8.236 4h7.528a3 3 0 0 1 2.683 1.658l1.386 2.771c.244-.1.484-.208.72-.324a1 1 0 0 1 .894 1.79c-.24.107-.482.211-.725.312l.961 1.923c.209.417.317.877.317 1.343V16a2.991 2.991 0 0 1-1 2.236V19.5a1.5 1.5 0 0 1-3 0V19H6v.5a1.5 1.5 0 0 1-3 0v-1.264c-.614-.55-1-1.348-1-2.236v-2.528c0-.466.109-.925.317-1.341l.953-1.908c-.241-.102-.48-.21-.715-.327a1.01 1.01 0 0 1-.45-1.343 1 1 0 0 1 1.342-.448c.236.117.477.224.72.324l1.386-2.77v-.001Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M7.342 6.553A.998.998 0 0 1 8.236 6h7.528c.379 0 .725.214.894.553l1.27 2.538C16.38 9.555 14.294 10 12 10s-4.38-.445-5.927-.91l1.269-2.537ZM16.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" class="duoicon-primary-layer"></path>',
                certificate: '<path fill="currentColor" fill-rule="evenodd" d="M19 11c2.309 0 3.753 2.5 2.598 4.5a3.009 3.009 0 0 1-.598.736v4.955a.5.5 0 0 1-.724.447L19 21l-1.276.638a.5.5 0 0 1-.724-.447v-4.955c-1.721-1.54-1.13-4.365 1.064-5.086.302-.099.618-.15.936-.15Zm-7-2H6a1 1 0 0 0-.117 1.993L6 11h6a1 1 0 0 0 .117-1.993L12 9Zm-4 4H6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M20 4a2 2 0 0 1 2 2v4c-3.079-2.309-7.504-.419-7.964 3.402A4.998 4.998 0 0 0 15 17v3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                chart_pie: '<path fill="currentColor" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M12 4v8h8a8 8 0 0 0-8-8Z" class="duoicon-primary-layer"></path>',
                check_circle: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="m15.535 8.381-4.95 4.95-2.12-2.121a1 1 0 1 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0l5.586-5.586a1 1 0 1 0-1.415-1.415Z" class="duoicon-primary-layer"></path>',
                chip: '<path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 1 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 1 1 2 0v1h4V3a1 1 0 0 1 1-1Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M14 8h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" class="duoicon-primary-layer"></path>',
                clapperboard: '<path fill="currentColor" fill-rule="evenodd" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M13 8h3l1-3h-3l-1 3ZM8 8h3l1-3H9L8 8ZM4 8h2l1-3H4v3Zm16-3h-1l-1 3h2V5Z" class="duoicon-primary-layer"></path>',
                clipboard: '<path fill="currentColor" d="M7 3v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1a2 2 0 0 1 2 2v11a6 6 0 0 1-6 6H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M14 2a1 1 0 0 1 .117 1.993L14 4h-4a1 1 0 0 1-.117-1.993L10 2h4Zm1 8H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2Zm-3 4H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path>',
                clock: '<path fill="currentColor" d="M12 4c6.928 0 11.258 7.5 7.794 13.5A8.998 8.998 0 0 1 12 22C5.072 22 .742 14.5 4.206 8.5A8.998 8.998 0 0 1 12 4Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M7.366 2.971A1 1 0 0 1 7 4.337a10.063 10.063 0 0 0-2.729 2.316 1 1 0 1 1-1.544-1.27 12.046 12.046 0 0 1 3.271-2.777 1 1 0 0 1 1.367.365h.001ZM18 2.606a12.044 12.044 0 0 1 3.272 2.776 1 1 0 0 1-1.544 1.27 10.042 10.042 0 0 0-2.729-2.315 1 1 0 0 1 1.002-1.731H18ZM12 8a1 1 0 0 0-.993.883L11 9v3.986c-.003.222.068.44.202.617l.09.104 2.106 2.105a1 1 0 0 0 1.498-1.32l-.084-.094L13 12.586V9a1 1 0 0 0-1-1Z" class="duoicon-primary-layer"></path>',
                cloud_lightning: '<path fill="currentColor" d="M11.132 13.004a1 1 0 0 1 1.788.888l-.052.104L11.723 16h2.105a1.1 1.1 0 0 1 1.006 1.545l-.051.1-1.915 3.351a1 1 0 0 1-1.788-.888l.052-.104L12.277 18h-2.105a1.1 1.1 0 0 1-1.006-1.545l.051-.1 1.915-3.351Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M11.5 2a6.503 6.503 0 0 1 6.086 4.212c4.455 1.225 5.913 6.814 2.624 10.059a6.004 6.004 0 0 1-3.397 1.674c.449-1.555-.41-3.198-1.894-3.751.53-2.249-1.573-4.228-3.785-3.563a3 3 0 0 0-1.739 1.381l-1.914 3.35A3.06 3.06 0 0 0 7.273 18H7c-3.849.003-6.257-4.163-4.335-7.497A5 5 0 0 1 5 8.416 6.5 6.5 0 0 1 11.5 2Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                cloud_snow: '<path fill="currentColor" d="M14.5 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-4-6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M11.5 2a6.503 6.503 0 0 1 6.086 4.212c4.455 1.223 5.916 6.811 2.629 10.058a6 6 0 0 1-2.439 1.462C18.637 15.443 16.945 13 14.5 13a1.518 1.518 0 0 1-1.199-.599c-1.615-2.157-4.959-1.757-6.019.72a3.5 3.5 0 0 0 .007 2.772c.167.388.167.828 0 1.216-.122.28-.208.58-.253.892H7c-3.849.003-6.257-4.163-4.335-7.497A5 5 0 0 1 5 8.417 6.5 6.5 0 0 1 11.5 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M10.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" class="duoicon-primary-layer"></path>',
                coin_stack: '<path fill="currentColor" d="M21 16.143V17.5c0 .814-.381 1.51-.91 2.057-.523.542-1.233.984-2.032 1.334C16.456 21.591 14.314 22 12 22c-2.314 0-4.456-.408-6.058-1.109-.799-.35-1.509-.792-2.032-1.334-.485-.5-.845-1.128-.902-1.856L3 17.5v-1.357c.465.264.962.498 1.494.695 2.03.751 4.685 1.17 7.506 1.17 2.821 0 5.476-.419 7.506-1.17.399-.148.778-.316 1.139-.503l.355-.192ZM12 3c2.314 0 4.456.408 6.058 1.109.799.35 1.509.792 2.032 1.334.485.5.845 1.128.902 1.856L21 7.5v.748a8.315 8.315 0 0 1-2.188 1.214c-1.755.65-4.164 1.047-6.812 1.047-2.647 0-5.056-.397-6.812-1.047a8.27 8.27 0 0 1-1.905-1.006L3 8.248V7.5c0-.814.381-1.51.91-2.057.523-.542 1.233-.984 2.032-1.334C7.544 3.409 9.686 3 12 3Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M3 10.643c.465.264.962.498 1.494.695 2.03.751 4.685 1.17 7.506 1.17 2.821 0 5.476-.419 7.506-1.17A10.132 10.132 0 0 0 21 10.643v3.105a8.315 8.315 0 0 1-2.188 1.214c-1.755.65-4.164 1.047-6.812 1.047-2.647 0-5.056-.397-6.812-1.047A8.315 8.315 0 0 1 3 13.748v-3.105Z" class="duoicon-primary-layer"></path>',
                compass: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M16.243 7.757c-.354-.353-4.95.707-6.364 2.122-1.414 1.414-2.475 6.01-2.122 6.364.354.353 4.95-.707 6.364-2.122 1.415-1.414 2.475-6.01 2.122-6.364Z" class="duoicon-primary-layer"></path>',
                "computer_camera-off": '<path fill="currentColor" d="M4.74 16.877A9.976 9.976 0 0 0 12 20a9.962 9.962 0 0 0 4.797-1.224l.302-.172.77.77a1.701 1.701 0 0 0 1.622.446c-.12.147-.254.28-.392.398-.479.408-1.113.731-1.81.983-1.401.505-3.271.799-5.289.799s-3.888-.294-5.29-.8c-.696-.25-1.33-.574-1.809-.982-.475-.406-.901-.992-.901-1.745 0-.663.327-1.194.74-1.596ZM12 6c-.768 0-1.486.217-2.095.592l1.499 1.498c1.469-.46 2.885.843 2.549 2.346a1.8 1.8 0 0 1-.043.16l1.498 1.499c1.613-2.623-.219-6.008-3.297-6.093L12 6Zm-7.132.373 3.159 3.16a4 4 0 0 0 4.44 4.44l3.16 3.16C10.14 19.929 3.684 15.736 4.006 9.586a8.007 8.007 0 0 1 .861-3.213h.001Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2c6.158 0 10.008 6.666 6.929 12a8.029 8.029 0 0 1-.468.718l-.186.244 1.503 1.503a1 1 0 0 1-1.32 1.497l-.094-.083L4.222 3.737a1 1 0 0 1 1.32-1.497l.094.083 1.402 1.402A7.961 7.961 0 0 1 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                computer_camera: '<path fill="currentColor" d="M19.26 16.877c.413.402.74.932.74 1.596 0 .753-.426 1.339-.9 1.745-.48.408-1.114.731-1.81.983-1.402.505-3.272.799-5.29.799-2.018 0-3.888-.294-5.29-.8-.696-.25-1.33-.574-1.809-.982-.475-.406-.901-.992-.901-1.745 0-.663.327-1.194.74-1.596A9.976 9.976 0 0 0 12 20c2.859 0 5.438-1.2 7.26-3.123ZM12 6c-3.079 0-5.004 3.333-3.464 6A3.998 3.998 0 0 0 12 14c3.079 0 5.004-3.333 3.464-6A3.998 3.998 0 0 0 12 6Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2c6.158 0 10.007 6.667 6.928 12A8 8 0 0 1 12 18C5.842 18 1.993 11.333 5.072 6A8 8 0 0 1 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                confetti: '<path fill="currentColor" d="M23 7a8.44 8.44 0 0 0-5 1.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27.14-.12a3.15 3.15 0 0 0 .9-3.49A3.9 3.9 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31l-.23.21a16.71 16.71 0 0 0-3.41-2.2c-2.53-1.14-3.83-.61-4.47 0a2.18 2.18 0 0 0-.46.68l-.18.53L5.1 8.87C6.24 11.71 9 16.76 15 18.94l5-1.66a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9V7Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="m4.4 11-2.23 6.7c-.693 2.118.882 4.295 3.11 4.3a3.21 3.21 0 0 0 1-.17l6.52-2.17A18.7 18.7 0 0 1 4.4 11Zm14.81 4.37h-.06c-.69.37-3.55-.57-6.79-3.81-.34-.34-.66-.67-.95-1-.1-.11-.19-.23-.29-.35l-.53-.64-.28-.39c-.14-.19-.28-.38-.4-.56-.12-.18-.16-.26-.24-.39-.08-.13-.22-.34-.31-.51-.09-.17-.13-.24-.19-.37s-.17-.28-.23-.42c-.06-.14-.09-.23-.14-.34-.05-.11-.11-.27-.15-.4-.04-.13-.05-.19-.07-.29-.02-.1-.06-.24-.08-.34a2 2 0 0 1 0-.24 1.15 1.15 0 0 1 0-.26l.11-.31c.17-.18.91-.23 2.23.37.882.424 1.717.94 2.49 1.54-.422.186-.87.3-1.33.34v2a6.43 6.43 0 0 0 3-.94l.49.46c.44.43.83.86 1.19 1.27A5.31 5.31 0 0 0 16 13.2l2-.39a3.23 3.23 0 0 1 0-1.14c1.29 1.97 1.53 3.39 1.21 3.7Z" class="duoicon-primary-layer"></path>',
                credit_card: '<path fill="currentColor" d="M22 10v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7h20Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M19 4a3 3 0 0 1 3 3v1H2V7a3 3 0 0 1 3-3h14Zm-1 10h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path>',
                currency_euro: '<path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M8.7 13c.104.856.357 1.716.786 2.458.597 1.031 1.572 1.88 2.96 2.043 1.407.166 2.837-.51 3.7-1.615a1 1 0 0 0-.175-1.404c-.492-.384-1.093-.199-1.46.243-.948 1.145-2.55 1.016-3.294-.27A4.368 4.368 0 0 1 10.72 13H15a1 1 0 1 0 0-2h-4.254c.1-.517.273-.998.51-1.393.71-1.185 2.334-1.491 3.243-.34.352.445.95.646 1.448.282a1 1 0 0 0 .213-1.398c-.845-1.156-2.098-1.721-3.531-1.599-1.433.123-2.457.973-3.088 2.026-.436.727-.703 1.572-.823 2.422H8a1 1 0 1 0 0 2h.7Z" class="duoicon-primary-layer"></path>',
                dashboard: '<path fill="currentColor" fill-rule="evenodd" d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11h4Zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                discount: '<path fill="currentColor" fill-rule="evenodd" d="M9.405 2.897a4 4 0 0 1 5.02-.136l.17.136.376.32c.274.234.605.389.96.45l.178.022.493.04a4 4 0 0 1 3.648 3.468l.021.2.04.494c.028.358.153.702.36.996l.11.142.322.376a4 4 0 0 1 .136 5.02l-.136.17-.321.376a1.997 1.997 0 0 0-.45.96l-.022.178-.039.493a4 4 0 0 1-3.468 3.648l-.201.021-.493.04a2.002 2.002 0 0 0-.996.36l-.142.111-.377.32a4 4 0 0 1-5.02.137l-.169-.136-.376-.321a1.997 1.997 0 0 0-.96-.45l-.178-.021-.493-.04a4 4 0 0 1-3.648-3.468l-.021-.2-.04-.494a2.002 2.002 0 0 0-.36-.996l-.111-.142-.321-.377a4 4 0 0 1-.136-5.02l.136-.169.32-.376c.234-.274.389-.605.45-.96l.022-.178.04-.493A4 4 0 0 1 7.197 3.75l.2-.021.494-.04c.358-.028.702-.153.996-.36l.142-.111.376-.32v-.001Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M9.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.793.293-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0-1.414-1.414ZM14.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" class="duoicon-primary-layer"></path>',
                disk: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M11.44 6.507a1 1 0 0 0-1.276-.61 7.015 7.015 0 0 0-3.73 3.1A1 1 0 1 0 8.166 10a5.02 5.02 0 0 1 2.665-2.216 1 1 0 0 0 .61-1.276l-.001-.001ZM12 10c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A1.999 1.999 0 0 0 12 10Z" class="duoicon-primary-layer"></path>',
                file: '<path fill="currentColor" fill-rule="evenodd" d="M12 2v6.5a1.5 1.5 0 0 0 1.5 1.5H20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M14 2.043c.379.08.726.269 1 .543L19.414 7c.274.274.463.621.543 1H14V2.043Zm-2.346 9.656-.894 1.535-1.737.376a.4.4 0 0 0-.213.658l1.184 1.325-.18 1.768a.4.4 0 0 0 .56.406L12 17.051l1.626.716a.4.4 0 0 0 .56-.406l-.18-1.768 1.184-1.325a.4.4 0 0 0-.213-.658l-1.737-.376-.894-1.535a.4.4 0 0 0-.692 0Z" class="duoicon-primary-layer"></path>',
                fire: '<path fill="currentColor" d="m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z" class="duoicon-primary-layer"></path><path fill="currentColor" d="m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z" class="duoicon-secondary-layer" opacity=".3"></path>',
                folder_open: '<path fill="currentColor" d="M19.82 6a2 2 0 0 1 1.972 2.329l-1.666 10A2 2 0 0 1 18.153 20H5.847a2 2 0 0 1-1.973-1.671l-1.666-10A2 2 0 0 1 4.18 6h15.64Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M18 3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h12Z" class="duoicon-primary-layer"></path>',
                folder_upload: '<path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M13 13v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.21c-.45 0-.67-.54-.35-.85l2.8-2.79c.2-.2.51-.19.71 0l2.79 2.79c.3.31.08.85-.36.85H13Z" class="duoicon-primary-layer"></path>',
                g_translate: '<path fill="currentColor" d="m12 22-1-3H4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 17V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h6l.875 3H20c.583 0 1.063.187 1.438.562.375.375.562.855.562 1.438v13a1.97 1.97 0 0 1-.562 1.413c-.375.391-.855.587-1.438.587h-8Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M13 21h7c.3 0 .542-.096.725-.288A.99.99 0 0 0 21 20V7c0-.3-.092-.542-.275-.725C20.542 6.092 20.3 6 20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275a7.985 7.985 0 0 1-.75 1.85A9.76 9.76 0 0 1 15.8 14.6l2.725 2.675L17.8 18l-2.7-2.7-.9.925L15 19l-2 2Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M15.1 13.825c.467-.55.821-1.075 1.063-1.575.241-.5.404-.892.487-1.175h-3.975l.3 1.05h1c.133.25.292.521.475.813.183.291.4.587.65.887ZM13.85 15.1l.55-.525a15.697 15.697 0 0 1-.637-.825 13.47 13.47 0 0 1-.563-.85l.65 2.2Zm-6.7-.5c1.15 0 2.096-.37 2.838-1.112.741-.742 1.112-1.705 1.112-2.888a4.98 4.98 0 0 0-.012-.363 1.732 1.732 0 0 0-.063-.337h-3.95v1.55H9.3a1.908 1.908 0 0 1-.763 1.087c-.375.259-.829.388-1.362.388-.65 0-1.208-.233-1.675-.7-.467-.467-.7-1.042-.7-1.725s.233-1.258.7-1.725a2.285 2.285 0 0 1 1.675-.7c.3 0 .583.054.85.162.267.109.508.271.725.488L9.975 7.55c-.35-.367-.77-.65-1.262-.85a4.11 4.11 0 0 0-1.563-.3c-1.117 0-2.07.396-2.862 1.187C3.496 8.379 3.1 9.35 3.1 10.5s.396 2.12 1.188 2.912c.791.792 1.745 1.188 2.862 1.188Z" class="duoicon-primary-layer"></path>',
                id_card: '<path fill="currentColor" d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M10 9v2H8V9h2Zm7 2h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993L17 11Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M10 7H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995L10 7Zm7 8H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path>',
                info: '<path fill="currentColor" d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10-4.478-10-10.001C1.999 6.477 6.476 1.999 12 1.999Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12.001 6.5a1.252 1.252 0 1 0 .002 2.503A1.252 1.252 0 0 0 12 6.5h.001Zm-.005 3.749a1 1 0 0 0-.992.885l-.007.116.004 5.502.006.117a1 1 0 0 0 1.987-.002L13 16.75l-.004-5.501-.007-.117a1 1 0 0 0-.994-.882l.001-.001Z" class="duoicon-primary-layer"></path>',
                lamp_2: '<path fill="currentColor" fill-rule="evenodd" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm2.83-5H9.17c.77 2.178 3.609 2.706 5.11.95.2-.233.362-.496.482-.778L14.83 14Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M12 2a1 1 0 0 1 .993.883L13 3v1.1l8.175 8.176c.609.608.223 1.63-.6 1.718l-.114.006H16.9c-.773 3.772-5.34 5.293-8.22 2.737a5.001 5.001 0 0 1-1.532-2.525L7.1 14H3.54c-.861 0-1.31-.995-.791-1.639l.077-.085L11 4.1V3a1 1 0 0 1 1-1Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M7.05 16.95a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Zm9.9 0a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414Z" class="duoicon-primary-layer"></path>',
                lamp: '<path fill="currentColor" d="M13 20a1 1 0 0 1 .117 1.993L13 22h-2a1 1 0 0 1-.117-1.993L11 20h2Zm.707-13.707a1 1 0 0 0-1.32-.083l-.094.083L10.3 8.286a1.01 1.01 0 0 0-.084 1.333l.084.095L11.586 11l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083 1.993-1.993c.36-.36.396-.931.084-1.333l-.084-.095L12.414 9l1.293-1.293a1 1 0 0 0 0-1.414Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2c4.41 0 8 3.543 8 7.933 0 3.006-1.522 5.196-2.78 6.494l-.284.283-.27.252-.252.22-.33.27-.328.244c-.241.17-.403.419-.55.678l-.205.364c-.238.41-.517.762-1.108.762h-3.786c-.59 0-.87-.351-1.108-.762l-.118-.208c-.172-.312-.348-.63-.637-.834l-.232-.171-.199-.155-.227-.188-.252-.22-.27-.252-.285-.283C5.522 15.129 4 12.939 4 9.933 4 5.543 7.59 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                location: '<path fill="currentColor" d="M6.72 16.64a1 1 0 1 1 .56 1.92c-.5.146-.86.3-1.091.44.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766.435.299.97.82.97 1.594 0 .783-.548 1.308-.99 1.607-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768-.442-.3-.99-.824-.99-1.607 0-.774.535-1.295.97-1.594.47-.321 1.082-.571 1.75-.766ZM12 7.5c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A1.999 1.999 0 0 0 12 7.5Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.353 16.353 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0 20.627 20.627 0 0 1-1.952-1.282A16.353 16.353 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                marker: '<path fill="currentColor" fill-rule="evenodd" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.37 20.37 0 0 1-2.876 2.416l-.426.29-.2.133-.377.24-.336.205-.416.242a1.875 1.875 0 0 1-1.854 0l-.416-.242-.52-.32-.192-.125-.41-.273a20.65 20.65 0 0 1-3.093-2.566C4.676 16.588 3 14.074 3 11a9 9 0 0 1 9-9Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="m15.08 7.983-4.245 4.244-1.768-1.768a1 1 0 1 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414h.001Z" class="duoicon-primary-layer"></path>',
                menu: '<path fill="currentColor" d="M4 18a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 17c0-.283.096-.52.288-.712A.965.965 0 0 1 4 16h11c.283 0 .521.096.713.288A.967.967 0 0 1 16 17a.97.97 0 0 1-.287.712A.968.968 0 0 1 15 18H4Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="m17.4 12 2.9 2.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275l-3.6-3.6a.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7l3.6-3.6a.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L17.4 12Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M4 8a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 7c0-.283.096-.521.288-.713A.967.967 0 0 1 4 6h11a.97.97 0 0 1 .713.287A.97.97 0 0 1 16 7a.97.97 0 0 1-.287.713A.97.97 0 0 1 15 8H4Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M4 13a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12c0-.283.096-.521.288-.713A.967.967 0 0 1 4 11h8a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 12a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 13H4Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                message_2: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H4a2 2 0 0 1-2-2v-8C2 6.477 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M15 10H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 0 0 .117-1.993L15 10Zm-3 4H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z" class="duoicon-primary-layer"></path>',
                message_3: '<path fill="currentColor" d="M19 10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3v.966c0 1.06-1.236 1.639-2.05.96L14.638 19H12a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h7Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M16 4a3 3 0 0 1 3 3v1h-8a4 4 0 0 0-4 4v4c0 1.044.4 1.996 1.056 2.708L7 19.5c-.824.618-2 .03-2-1V17a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h11Z" class="duoicon-primary-layer"></path>',
                message: '<path fill="currentColor" fill-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.333L4 21.5c-.824.618-2 .03-2-1V6Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M8 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H8ZM7 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" class="duoicon-primary-layer"></path>',
                moon_2: '<path fill="currentColor" d="M20.15 18.125 5.875 3.85a9.874 9.874 0 0 1 2.437-1.825A10.334 10.334 0 0 1 11.25 1c-.3 1.65-.208 3.262.275 4.837a9.866 9.866 0 0 0 2.5 4.138 9.866 9.866 0 0 0 4.138 2.5c1.575.483 3.187.575 4.837.275a9.607 9.607 0 0 1-1.012 2.938 10.145 10.145 0 0 1-1.838 2.437Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="m19.375 23.05-2.7-2.7a9.768 9.768 0 0 1-1.737.487c-.592.109-1.205.163-1.838.163a9.76 9.76 0 0 1-3.938-.8 10.279 10.279 0 0 1-3.199-2.162 10.282 10.282 0 0 1-2.163-3.2A9.76 9.76 0 0 1 3 10.9c0-.633.054-1.246.163-1.838.108-.591.27-1.17.487-1.737L.975 4.65 2.4 3.225l18.4 18.4-1.425 1.425Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                moon_stars: '<path fill="currentColor" d="M12.477 4.546A1.01 1.01 0 0 1 13.5 3.127c.025.002.049.006.074.01 6.821 1.213 9.771 9.356 5.31 14.656-4.462 5.301-12.988 3.784-15.348-2.73a9.012 9.012 0 0 1-.399-1.489 1.01 1.01 0 0 1 1.339-1.125c.024.008.047.018.07.028 4.214 1.892 8.895-1.488 8.426-6.083a5.998 5.998 0 0 0-.495-1.848Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M8.397 2.857c.04-.09.166-.09.206 0l.102.222a5.191 5.191 0 0 0 1.97 2.172l.157.092c.073.04.075.144.003.187l-.003.002-.158.092a5.193 5.193 0 0 0-2.07 2.394.113.113 0 0 1-.195.022c-.004-.007-.009-.014-.012-.022l-.102-.222a5.191 5.191 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1-.003-.187l.003-.002.158-.092a5.191 5.191 0 0 0 1.97-2.172l.102-.222ZM5.565 7.716l.064.14a3.257 3.257 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.07.07 0 0 1-.122.013.057.057 0 0 1-.008-.013l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059c.534-.326.964-.8 1.236-1.364l.064-.14a.07.07 0 0 1 .122-.013.057.057 0 0 1 .008.013l.001.001Z" class="duoicon-primary-layer"></path>',
                palette: '<path fill="currentColor" fill-rule="evenodd" d="M10 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M13.636 4a2 2 0 0 1 2.701-.117l.127.117L20 7.536a2 2 0 0 1 .204 2.589L13 17.357V4.636L13.636 4ZM7.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M19.66 12.111c.731.256 1.27.924 1.334 1.727L21 19a2 2 0 0 1-1.85 1.995L19 21h-6v-2.23l6.66-6.659Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                rocket: '<path fill="currentColor" fill-rule="evenodd" d="m18.165 2.765.255.032c.674.093 1.566.218 2.071.724.414.413.573 1.085.668 1.685l.056.386c.126.91.159 2.102-.056 3.426-.424 2.613-1.815 5.731-5.308 8.145-.019.188-.02.378-.016.568l.01.284c.016.437.032.873-.09 1.298-.19.66-.867 1.095-1.5 1.407l-.31.147-.4.176c-.748.318-1.758.644-2.391.01-.38-.379-.536-.935-.663-1.488l-.047-.207a7.643 7.643 0 0 0-.2-.774c-.05-.146-.104-.295-.162-.445a3.323 3.323 0 0 1-.203.225c-.345.345-.86.586-1.284.755-.463.183-.987.343-1.472.475l-.249.066-.477.119-.432.1-.517.11-.323.063a1.01 1.01 0 0 1-1.177-1.177l.086-.431.154-.698.124-.51.094-.36c.132-.484.292-1.008.476-1.47.168-.425.409-.94.754-1.285l.08-.077-.064-.026a7.926 7.926 0 0 0-.519-.177l-.277-.085c-.694-.21-1.436-.436-1.897-.898-.56-.559-.371-1.41-.101-2.118l.11-.274.177-.4.147-.31c.312-.632.747-1.309 1.407-1.499.35-.1.714-.106 1.08-.096l.22.007c.286.01.571.021.85-.006 2.414-3.494 5.532-4.885 8.145-5.309a11.777 11.777 0 0 1 3.171-.088Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M15.536 8.466c-1.088-1.089-2.948-.591-3.346.896a2 2 0 0 0 .517 1.932c1.088 1.089 2.948.591 3.346-.896a2 2 0 0 0-.517-1.932ZM8.353 15.44a1 1 0 0 0-1.1-.06l-.11.074-.093.083-.125.158c-.26.376-.408.896-.523 1.382l-.108.468-.051.213.191-.046.418-.096c.578-.135 1.219-.31 1.613-.665a1 1 0 0 0 .088-1.314l-.082-.094-.024-.023-.094-.08Z" class="duoicon-primary-layer"></path>',
                settings: '<path fill="currentColor" fill-rule="evenodd" d="M9.965 2.809a1.51 1.51 0 0 0-1.401-.203 10.007 10.007 0 0 0-2.982 1.725 1.51 1.51 0 0 0-.524 1.313c.075.753-.058 1.48-.42 2.106-.361.627-.925 1.106-1.615 1.417-.458.203-.786.62-.875 1.113a10.035 10.035 0 0 0 0 3.44c.093.537.46.926.875 1.114.69.31 1.254.79 1.616 1.416.361.627.494 1.353.419 2.106-.045.452.107.964.524 1.313a10.007 10.007 0 0 0 2.982 1.725c.471.169.996.093 1.4-.203.615-.442 1.312-.691 2.036-.691s1.42.249 2.035.691c.37.266.89.39 1.401.203a10.007 10.007 0 0 0 2.982-1.725c.417-.349.57-.86.524-1.313-.075-.753.057-1.48.42-2.106.361-.627.925-1.105 1.615-1.416.414-.188.782-.577.875-1.114a10.085 10.085 0 0 0 0-3.44 1.512 1.512 0 0 0-.875-1.113c-.69-.311-1.254-.79-1.616-1.417-.362-.626-.494-1.353-.419-2.106a1.513 1.513 0 0 0-.524-1.313 10.007 10.007 0 0 0-2.982-1.725 1.514 1.514 0 0 0-1.4.203C13.42 3.25 12.723 3.5 12 3.5c-.723 0-1.42-.249-2.035-.691Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M9 12c0-2.309 2.5-3.753 4.5-2.598A3 3 0 0 1 15 12c0 2.309-2.5 3.753-4.5 2.598A3 3 0 0 1 9 12Z" class="duoicon-primary-layer"></path>',
                shopping_bag: '<path fill="currentColor" fill-rule="evenodd" d="M10.464 3.282a2 2 0 0 1 2.964-.12l.108.12L17.468 8h2.985a1.49 1.49 0 0 1 1.484 1.655l-.092.766-.1.74-.082.554-.095.595-.108.625-.122.648-.136.661c-.072.333-.149.667-.232.998a20.957 20.957 0 0 1-.832 2.584l-.221.54-.214.488-.202.434-.094.194-.249.49c-.32.61-.924.97-1.563 1.022l-.16.006H6.555a1.928 1.928 0 0 1-1.71-1.008l-.232-.45-.18-.37-.095-.205-.2-.449a21.511 21.511 0 0 1-1.108-3.276 34.602 34.602 0 0 1-.156-.654l-.142-.648-.127-.634-.112-.613-.1-.587-.087-.554-.074-.513-.09-.683-.066-.556-.017-.153a1.489 1.489 0 0 1 1.348-1.64L3.543 8h2.989l3.932-4.718Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M12 4.562 9.135 8h5.73L12 4.562Zm3.164 7.452a1 1 0 0 0-1.125.708l-.025.114-.5 3a1 1 0 0 0 1.947.442l.025-.114.5-3a1 1 0 0 0-.822-1.15Zm-5.203.708a1 1 0 0 0-1.96.326l.013.116.5 3 .025.114a1 1 0 0 0 1.96-.326l-.013-.116-.5-3-.025-.114Z" class="duoicon-primary-layer"></path>',
                slideshow: '<path fill="currentColor" d="M21 3a1 1 0 1 1 0 2v11a2 2 0 0 1-2 2h-5.055l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.829-2.828-2.828 2.828a1 1 0 0 1-1.414-1.414L10.046 18H5a2 2 0 0 1-2-2V5a1 1 0 1 1 0-2h18Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M8 11a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm4-2a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm4-2a1 1 0 0 0-.993.883L15 8v5a1 1 0 0 0 1.993.117L17 13V8a1 1 0 0 0-1-1Z" class="duoicon-primary-layer"></path>',
                smartphone_vibration: '<path fill="currentColor" fill-rule="evenodd" d="m15.535 2.808 5.657 5.656a2 2 0 0 1 0 2.829l-9.9 9.9a2 2 0 0 1-2.828 0l-5.657-5.658a2 2 0 0 1 0-2.828l9.9-9.9a2 2 0 0 1 2.828 0v.001Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M8.464 2.808a1 1 0 0 1 0 1.414L4.222 8.464A1 1 0 1 1 2.807 7.05L7.05 2.808a1 1 0 0 1 1.414 0Zm.354 10.96-.707.707a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0Zm12.374 1.768a1 1 0 0 1 0 1.414l-4.242 4.242a1 1 0 1 1-1.415-1.414l4.243-4.242a1 1 0 0 1 1.414 0Z" class="duoicon-primary-layer"></path>',
                smartphone: '<path fill="currentColor" d="M17 2a2 2 0 0 1 1.995 1.85L19 4v16a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20V4a2 2 0 0 1 1.85-1.995L7 2h10Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12.5 16h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z" class="duoicon-primary-layer"></path>',
                smartwatch: '<path fill="currentColor" d="M9.5 2a2 2 0 0 0-2 2v1.29C7.963 5.104 8.47 5 9 5h6a4 4 0 0 1 1.5.29V4a2 2 0 0 0-2-2h-5ZM9 19a4 4 0 0 1-1.5-.29V20a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1.29A4 4 0 0 1 15 19H9Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1V9a3 3 0 0 0-3-3H9Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                sun: '<path fill="currentColor" d="M12 18.5a1.5 1.5 0 0 1 1.493 1.356L13.5 20v1a1.5 1.5 0 0 1-2.993.144L10.5 21v-1a1.5 1.5 0 0 1 1.5-1.5Zm0-17a1.5 1.5 0 0 1 1.493 1.356L13.5 3v1a1.5 1.5 0 0 1-2.993.144L10.5 4V3A1.5 1.5 0 0 1 12 1.5Zm5.303 3.075a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm-12.728 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122ZM21 10.5a1.5 1.5 0 0 1 .144 2.993L21 13.5h-1a1.5 1.5 0 0 1-.144-2.993L20 10.5h1Zm-17 0a1.5 1.5 0 0 1 .144 2.993L4 13.5H3a1.5 1.5 0 0 1-.144-2.993L3 10.5h1Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M12 6c4.619 0 7.506 5 5.196 9A6 6 0 0 1 12 18c-4.619 0-7.506-5-5.196-9A6 6 0 0 1 12 6Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M5.282 16.596a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm11.314 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122Z" class="duoicon-primary-layer"></path>',
                target: '<path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v.055a9.005 9.005 0 0 1 7.911 7.674l.034.271H21a1 1 0 0 1 .117 1.993L21 13h-.055a9.005 9.005 0 0 1-7.674 7.911l-.271.034V21a1 1 0 0 1-1.993.117L11 21v-.055a9.005 9.005 0 0 1-7.911-7.674L3.055 13H3a1 1 0 0 1-.117-1.993L3 11h.055a9.005 9.005 0 0 1 7.674-7.911L11 3.055V3a1 1 0 0 1 1-1Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 7c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7Z" class="duoicon-primary-layer"></path>',
                toggle: '<path fill="currentColor" d="M6 12c0-1.54 1.667-2.502 3-1.732.619.357 1 1.017 1 1.732 0 1.54-1.667 2.502-3 1.732A1.999 1.999 0 0 1 6 12Z" class="duoicon-primary-layer"></path><path fill="currentColor" fill-rule="evenodd" d="M8 5C2.611 5-.756 10.833 1.938 15.5A6.999 6.999 0 0 0 8 19h8c5.389 0 8.756-5.833 6.062-10.5A6.999 6.999 0 0 0 16 5H8Zm0 3c-3.079 0-5.004 3.333-3.464 6A3.998 3.998 0 0 0 8 16c3.079 0 5.004-3.333 3.464-6A3.998 3.998 0 0 0 8 8Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                translation: '<path fill="currentColor" d="M17 10.5a1.5 1.5 0 0 1 1.493 1.356L18.5 12v.5h1a2 2 0 0 1 1.995 1.85l.005.15v3a2 2 0 0 1-1.85 1.995l-.15.005h-1v.5a1.5 1.5 0 0 1-2.993.144L15.5 20v-.5h-1a2 2 0 0 1-1.995-1.85l-.005-.15v-3a2 2 0 0 1 1.85-1.995l.15-.005h1V12a1.5 1.5 0 0 1 1.5-1.5Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M17 3.5A3.5 3.5 0 0 1 20.5 7v2a1.5 1.5 0 0 1-3 0V7a.5.5 0 0 0-.5-.5h-3a1.5 1.5 0 0 1 0-3h3Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M9.5 2.5a1.5 1.5 0 0 1 0 3h-4v1H9a1.5 1.5 0 0 1 0 3H5.5v1H10a1.5 1.5 0 0 1 0 3H4.1a1.6 1.6 0 0 1-1.6-1.6V4.1a1.6 1.6 0 0 1 1.6-1.6h5.4Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M19.5 15h-1v2h1v-2Zm-4 0h-1v2h1v-2ZM5 14.5A1.5 1.5 0 0 1 6.5 16v1a.5.5 0 0 0 .5.5h3a1.5 1.5 0 0 1 0 3H7A3.5 3.5 0 0 1 3.5 17v-1A1.5 1.5 0 0 1 5 14.5Z" class="duoicon-primary-layer"></path>',
                upload_file: '<path fill="currentColor" fill-rule="evenodd" d="M12 2v6.5a1.5 1.5 0 0 0 1.356 1.493L13.5 10H20v10a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h6Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M14 2.043a2 2 0 0 1 .877.43l.123.113L19.414 7c.234.234.407.523.502.84l.04.16H14V2.043Zm-2.707 9.13-2.121 2.121a1 1 0 1 0 1.414 1.414l.414-.414V17a1 1 0 1 0 2 0v-2.706l.414.414a1 1 0 1 0 1.414-1.414l-2.12-2.121a1 1 0 0 0-1.415 0Z" class="duoicon-primary-layer"></path>',
                user_card: '<path fill="currentColor" fill-rule="evenodd" d="M14.447 1.106a1 1 0 0 1 .447 1.341L14.118 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.882l-.776-1.553a1 1 0 0 1 1.788-.894L12 3.763l1.106-2.21a1 1 0 0 1 1.341-.447Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M12 9c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A1.999 1.999 0 0 0 12 9Zm1.5 5h-3a2.5 2.5 0 0 0-2.495 2.336L8 16.5v.5a1 1 0 0 0 1.993.117L10 17v-.5a.5.5 0 0 1 .41-.492L10.5 16h3a.5.5 0 0 1 .492.41l.008.09v.5a1 1 0 0 0 1.993.117L16 17v-.5a2.5 2.5 0 0 0-2.336-2.495L13.5 14Z" class="duoicon-primary-layer"></path>',
                user: '<path fill="currentColor" d="M12 13c2.396 0 4.575.694 6.178 1.671.8.49 1.484 1.065 1.978 1.69.486.616.844 1.352.844 2.139 0 .845-.411 1.511-1.003 1.986-.56.45-1.299.748-2.084.956-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13Z" class="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2c3.849 0 6.255 4.167 4.33 7.5A5 5 0 0 1 12 12c-3.849 0-6.255-4.167-4.33-7.5A5 5 0 0 1 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path>',
                world: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 4a7.988 7.988 0 0 0-6.335 3.114l-.165.221V9.02c0 1.25.775 2.369 1.945 2.809l.178.06 1.29.395c1.373.42 2.71-.697 2.577-2.096l-.019-.145-.175-1.049a1 1 0 0 1 .656-1.108l.108-.03.612-.14a2.667 2.667 0 0 0 1.989-3.263A7.987 7.987 0 0 0 12 4Zm2 9.4-1.564 1.251a.5.5 0 0 0-.041.744l1.239 1.239c.24.24.415.538.508.864l.175.613c.147.521.52.948 1.017 1.163a8.026 8.026 0 0 0 2.533-1.835l-.234-1.877a2 2 0 0 0-1.09-1.54l-1.47-.736A1 1 0 0 0 14 13.4Z" class="duoicon-primary-layer"></path>'
            };
            ( (e={}) => {
                if (e = Object.assign({
                    icons: {},
                    attributes: {}
                }, e),
                "undefined" == typeof document)
                    throw new Error("`createIcons()` only works in a browser environment.");
                const t = document.querySelectorAll("[data-duoicon]");
                Array.from(t).forEach((t => Tt(t, Ot, e.attributes)))
            }
            )();
            var Ht = i(1660)
              , Nt = i.n(Ht);
            const Dt = document.querySelectorAll("[data-inputmask]");
            Nt()({
                rightAlign: !1
            }).mask(Dt),
            window.Inputmask = Nt();
            document.querySelectorAll('[data-bs-toggle="popover"]').forEach((e => {
                new a.Popover(e)
            }
            ));
            i(6312);
            var Pt = i(2781)
              , zt = i(1623)
              , Vt = i(8005)
              , Rt = i(4783);
            class $t {
                #e;
                #t;
                #i;
                #a;
                #s;
                editor;
                constructor(e) {
                    this.options = e,
                    this.#e = this.options.element,
                    this.#t = this.#e.dataset.placeholder ? this.#e.dataset.placeholder : void 0,
                    this.#i = [{
                        name: "heading",
                        method: "toggleHeading",
                        icon: "title"
                    }, {
                        name: "bold",
                        method: "toggleBold",
                        icon: "format_bold"
                    }, {
                        name: "italic",
                        method: "toggleItalic",
                        icon: "format_italic"
                    }, {
                        name: "strike",
                        method: "toggleStrike",
                        icon: "format_strikethrough"
                    }, {
                        name: "bulletList",
                        method: "toggleBulletList",
                        icon: "format_list_bulleted"
                    }, {
                        name: "orderedList",
                        method: "toggleOrderedList",
                        icon: "format_list_numbered"
                    }, {
                        name: "blockquote",
                        method: "toggleBlockquote",
                        icon: "format_quote"
                    }],
                    this.initEditor()
                }
                initEditor() {
                    this.#a = document.createElement("div"),
                    this.#a.classList.add("popover", "tiptap-popover"),
                    this.#a.innerHTML = `\n      <div class="popover-body">\n        ${this.#i.map((e => `<button class="btn btn-sm btn-link" data-name="${e.name}" data-method="${e.method}" type="button"><span class="material-symbols-outlined">${e.icon}</span></button>`)).join("")}\n      </div>\n    `,
                    this.#s = this.#a.querySelectorAll("[data-method]"),
                    this.#s.forEach((e => {
                        e.addEventListener("click", (t => {
                            t.preventDefault();
                            const i = e.dataset.method
                              , a = "toggleHeading" === i ? {
                                level: 2
                            } : {};
                            this.editor.chain().focus()[i](a).run(),
                            e.classList.toggle("active")
                        }
                        ))
                    }
                    ));
                    const e = {
                        element: this.#e,
                        extensions: [Rt.A.configure({
                            blockquote: {
                                HTMLAttributes: {
                                    class: "blockquote"
                                }
                            },
                            heading: {
                                levels: [2],
                                HTMLAttributes: {
                                    class: "fs-5"
                                }
                            }
                        }), Vt.A.configure({
                            placeholder: this.#t
                        }), zt.Ay.configure({
                            element: this.#a,
                            updateDelay: 0
                        })],
                        editorProps: {
                            attributes: {
                                class: this.#e.classList
                            }
                        },
                        onCreate: ({editor: e}) => {
                            e.setOptions({
                                editorProps: {
                                    attributes: {
                                        class: `${this.#e.classList} is-editor-created`
                                    }
                                }
                            }),
                            this.editor = e
                        }
                        ,
                        onSelectionUpdate: ({editor: e}) => {
                            this.#s.forEach((t => {
                                const i = t.dataset.name;
                                e.isActive(i) ? t.classList.add("active") : t.classList.remove("active")
                            }
                            ))
                        }
                    }
                      , t = {
                        ...this.options,
                        ...e
                    };
                    this.editor = new Pt.KE(t)
                }
            }
            window.Tiptap = $t;
            document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e => {
                new a.Tooltip(e)
            }
            ));
            i(1036);
            var Ut = i(6285);
            function Bt(e, t, i, a, s) {
                const o = t / s
                  , r = (a - i) / 2
                  , n = (a + i) / 2
                  , l = e % o / o
                  , c = Math.sin(l * Math.PI * 2) * r + n;
                return Math.round(10 * c) / 10
            }
            function jt(e, t, i, a, s, o=4) {
                const r = Ut.c9.fromISO(e)
                  , n = Ut.c9.fromISO(t).diff(r, "days").days
                  , l = s || n
                  , c = [];
                for (let e = 0; e <= l; e++) {
                    const t = r.plus({
                        days: e / l * n
                    }).toISODate()
                      , s = Bt(e, l, i, a, o);
                    c.push({
                        x: t,
                        y: s
                    })
                }
                return c
            }
            o.t1.register(o.Bs, o.A6, o.E8, o.Jb, o.PP, o.gO, o.ju, o.dN, o.s$, o.kc, o.ZT, o.No, o.OJ, o.P$, o.FN, o.G5, o.h9, o.pr, o.Pz, o.UA, o.iw, o.hE, o.m_);
            const qt = document.getElementById("userPerformanceChart");
            qt && new o.t1(qt,{
                type: "bar",
                options: {
                    scales: {
                        x: {
                            type: "time",
                            time: {
                                unit: "day",
                                displayFormats: {
                                    day: "EEE"
                                },
                                tooltipFormat: "EEE"
                            }
                        },
                        y: {
                            ticks: {
                                callback: e => `${e}hrs`,
                                stepSize: 1
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: e => `${e.dataset.label}: ${e.parsed.y}hrs`
                            }
                        }
                    }
                },
                data: {
                    datasets: [{
                        label: "Total",
                        data: jt("2024-01-01", "2024-01-07", 5, 8)
                    }, {
                        label: "Tracked",
                        data: jt("2024-01-01", "2024-01-07", 5, 6),
                        backgroundColor: r("--bs-dark")
                    }]
                }
            });
            const Kt = document.getElementById("projectPerformanceChart");
            Kt && new o.t1(Kt,{
                type: "line",
                options: {
                    scales: {
                        x: {
                            type: "time",
                            time: {
                                unit: "day",
                                displayFormats: {
                                    day: "MMM dd"
                                },
                                tooltipFormat: "MMM dd"
                            }
                        },
                        y: {
                            ticks: {
                                callback: e => `${e}hrs`,
                                stepSize: 20
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: e => `${e.parsed.y}hrs`
                            }
                        }
                    }
                },
                data: {
                    datasets: [{
                        label: "Hours worked",
                        data: jt("2024-01-01", "2024-01-07", 50, 80)
                    }]
                }
            });
            const Wt = document.getElementById("cryptoPerformanceChart");
            if (Wt) {
                const e = new o.t1(Wt,{
                    type: "line",
                    options: {
                        scales: {
                            x: {
                                type: "time",
                                time: {
                                    unit: "day",
                                    displayFormats: {
                                        day: "MMM dd"
                                    },
                                    tooltipFormat: "MMM dd"
                                }
                            },
                            y: {
                                ticks: {
                                    callback: e => `$${Math.round(e / 1e3)}K`,
                                    stepSize: 1e4
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => `$${new Intl.NumberFormat("en-EN").format(Math.round(e.parsed.y))}`
                                }
                            }
                        }
                    },
                    data: {
                        datasets: [{
                            label: "Trading profits",
                            data: jt("2024-01-01", "2024-01-31", 25e3, 35e3)
                        }]
                    }
                });
                document.getElementById("cryptoPerformanceChartType").addEventListener("change", (t => {
                    switch (t.target.value) {
                    case "trading":
                        e.data.datasets.label = "Trading profits",
                        e.data.datasets[0].data = jt("2024-01-01", "2024-01-31", 25e3, 35e3);
                        break;
                    case "staking":
                        e.data.datasets.label = "Staking rewards",
                        e.data.datasets[0].data = jt("2024-01-01", "2024-01-31", 25e3, 35e3, null, 3);
                        break;
                    case "mining":
                        e.data.datasets.label = "Mining income",
                        e.data.datasets[0].data = jt("2024-01-01", "2024-01-31", 25e3, 35e3, null, 2)
                    }
                    e.update()
                }
                ))
            }
            const Gt = document.getElementById("cryptoPortfolioChart");
            Gt && new o.t1(Gt,{
                type: "doughnut",
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: e => `${e.raw}%`
                            }
                        }
                    }
                },
                data: {
                    labels: ["Bitcoin", "Ethereum", "Tether", "Dogecoin"],
                    datasets: [{
                        data: [65, 15, 10, 10],
                        backgroundColor: [`rgba(${r("--bs-primary-rgb")}, 1)`, `rgba(${r("--bs-primary-rgb")}, .5)`, `rgba(${r("--bs-primary-rgb")}, .25)`, `rgba(${r("--bs-primary-rgb")}, .125)`]
                    }]
                }
            });
            document.querySelectorAll("[data-crypto-currency-success-chart]").forEach((e => {
                new o.t1(e,{
                    type: "line",
                    options: {
                        scales: {
                            y: {
                                display: !1,
                                beginAtZero: !1
                            },
                            x: {
                                display: !1
                            }
                        },
                        elements: {
                            point: {
                                hoverRadius: 0
                            },
                            line: {
                                borderWidth: 1,
                                borderColor: r("--bs-success"),
                                backgroundColor: "transparent"
                            }
                        },
                        plugins: {
                            tooltip: {
                                external: () => !1
                            }
                        }
                    },
                    data: {
                        datasets: [{
                            label: "Currency price",
                            data: jt("2024-01-01", "2024-01-07", 5e3, 5500)
                        }]
                    }
                })
            }
            ));
            document.querySelectorAll("[data-crypto-currency-danger-chart]").forEach((e => {
                new o.t1(e,{
                    type: "line",
                    options: {
                        scales: {
                            y: {
                                display: !1,
                                beginAtZero: !1
                            },
                            x: {
                                display: !1
                            }
                        },
                        elements: {
                            point: {
                                hoverRadius: 0
                            },
                            line: {
                                borderWidth: 1,
                                borderColor: r("--bs-danger"),
                                backgroundColor: "transparent"
                            }
                        },
                        plugins: {
                            tooltip: {
                                external: () => !1
                            }
                        }
                    },
                    data: {
                        datasets: [{
                            label: "Currency price",
                            data: jt("2024-01-01", "2024-01-07", 5e3, 5500)
                        }]
                    }
                })
            }
            ));
            const Qt = document.getElementById("saasPerformanceChart");
            if (Qt) {
                const e = new o.t1(Qt,{
                    type: "bar",
                    options: {
                        scales: {
                            x: {
                                type: "time",
                                time: {
                                    unit: "day",
                                    displayFormats: {
                                        day: "MMM dd"
                                    },
                                    tooltipFormat: "MMM dd"
                                }
                            },
                            y: {
                                ticks: {
                                    callback: e => `$${Math.round(e / 1e3)}K`,
                                    stepSize: 1e4
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => `$${new Intl.NumberFormat("en-EN").format(Math.round(e.parsed.y))}`
                                }
                            }
                        }
                    },
                    data: {
                        datasets: [{
                            label: "Revenue",
                            data: jt("2024-01-01", "2024-01-31", 25e3, 35e3, 15)
                        }]
                    }
                });
                document.querySelectorAll("[data-saas-performance-chart-type]").forEach((t => {
                    t.addEventListener("click", (t => {
                        switch (t.target.dataset.saasPerformanceChartType) {
                        case "revenue":
                            e.options.scales.y.ticks.callback = e => `$${Math.round(e / 1e3)}K`,
                            e.options.scales.y.ticks.stepSize = 1e4,
                            e.options.plugins.tooltip.callbacks.label = e => `$${new Intl.NumberFormat("en-EN").format(Math.round(e.parsed.y))}`,
                            e.data.datasets.label = "Revenue",
                            e.data.datasets[0].data = jt("2024-01-01", "2024-01-31", 25e3, 35e3, 15);
                            break;
                        case "users":
                            e.options.scales.y.ticks.callback = e => `${e} usrs`,
                            e.options.scales.y.ticks.stepSize = 100,
                            e.options.plugins.tooltip.callbacks.label = e => `${e.parsed.y} usrs`,
                            e.data.datasets.label = "Active users",
                            e.data.datasets[0].data = jt("2024-01-01", "2024-01-31", 250, 350, 15, 3);
                            break;
                        case "churn":
                            e.options.scales.y.ticks.callback = e => `${e}%`,
                            e.options.scales.y.ticks.stepSize = 2,
                            e.options.plugins.tooltip.callbacks.label = e => `${e.parsed.y}%`,
                            e.data.datasets.label = "Churn rate",
                            e.data.datasets[0].data = jt("2024-01-01", "2024-01-31", 2, 10, 15, 2)
                        }
                        e.update()
                    }
                    ))
                }
                ))
            }
            const Yt = document.getElementById("post");
            Yt && new $t({
                element: Yt,
                content: "\n      <p>In today's fast-evolving digital landscape, keeping up with modern web development practices is no longer optional—it's a <em>necessity</em>. Whether you're a seasoned developer or just starting, embracing these practices can greatly enhance your workflow, improve your application's performance, and offer a more seamless user experience.</p>\n      <p>The introduction of tools like <code>webpack</code>, advanced CSS frameworks, and JavaScript libraries has revolutionized how we approach development. Streamlining repetitive tasks, automating deployments, and enhancing the design through responsive techniques have all become critical components of a modern workflow.</p>\n      <blockquote>\n        <p>\"The best way to predict the future is to create it.\" — Peter Drucker</p>\n      </blockquote>\n      <p>This idea rings especially true in the world of web development. By adopting newer technologies and methodologies, developers have the power to shape the digital experience.</p>\n      <h2>The Role of Automation in Development</h2>\n      <p>Automation has become a cornerstone of modern web development, with tools such as GitHub Actions, continuous integration, and task runners like <code>Gulp</code>. These tools allow developers to spend more time coding and less time dealing with tedious setup or deployment tasks.</p>\n      <p>For example, automating the process of minifying CSS and JavaScript files can lead to faster load times, ultimately improving the overall user experience. This also reduces the potential for human error, ensuring a more consistent and reliable final product.</p>\n      <h2>Writing Maintainable Code for the Future</h2>\n      <p>Writing maintainable code is crucial for long-term success in web development. As projects grow in size and complexity, clear, well-organized code can save countless hours of debugging and future modifications. Following best practices, such as adhering to naming conventions, breaking down large components into smaller, reusable parts, and properly documenting code, can ensure that your codebase remains easy to manage and scale over time.</p>\n      <p>Key principles for writing maintainable code include:</p>\n      <ul>\n        <li>Following consistent naming conventions</li><li>Breaking down complex logic into smaller functions or components</li>\n        <li>Writing clear, concise documentation for future reference</li>\n        <li>Using version control effectively to track changes and collaborate with others</li>\n      </ul>\n      <p>By adhering to these principles, you set the foundation for a cleaner and more scalable project.</p>\n",
                autofocus: "end"
            });
            const Xt = document.getElementById("tiptapExample");
            Xt && new $t({
                element: Xt
            });
            const Jt = document.getElementById("dropzone");
            Jt && new Lt(Jt,{
                url: "/"
            })
        }
    }, i = {};
    function a(e) {
        var s = i[e];
        if (void 0 !== s)
            return s.exports;
        var o = i[e] = {
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, a),
        o.exports
    }
    a.m = t,
    e = [],
    a.O = (t, i, s, o) => {
        if (!i) {
            var r = 1 / 0;
            for (h = 0; h < e.length; h++) {
                for (var [i,s,o] = e[h], n = !0, l = 0; l < i.length; l++)
                    (!1 & o || r >= o) && Object.keys(a.O).every((e => a.O[e](i[l]))) ? i.splice(l--, 1) : (n = !1,
                    o < r && (r = o));
                if (n) {
                    e.splice(h--, 1);
                    var c = s();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        o = o || 0;
        for (var h = e.length; h > 0 && e[h - 1][2] > o; h--)
            e[h] = e[h - 1];
        e[h] = [i, s, o]
    }
    ,
    a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    a.d = (e, t) => {
        for (var i in t)
            a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e = {
            694: 0
        };
        a.O.j = t => 0 === e[t];
        var t = (t, i) => {
            var s, o, [r,n,l] = i, c = 0;
            if (r.some((t => 0 !== e[t]))) {
                for (s in n)
                    a.o(n, s) && (a.m[s] = n[s]);
                if (l)
                    var h = l(a)
            }
            for (t && t(i); c < r.length; c++)
                o = r[c],
                a.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return a.O(h)
        }
          , i = self.webpackChunkdashbrd = self.webpackChunkdashbrd || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )(),
    a.O(void 0, [121], ( () => a(3903)));
    var s = a.O(void 0, [121], ( () => a(2766)));
    s = a.O(s)
}
)();
//# sourceMappingURL=theme.bundle.js.map
