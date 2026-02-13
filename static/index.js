function B0(n, r) {
    for (var i = 0; i < r.length; i++) {
        const l = r[i];
        if (typeof l != "string" && !Array.isArray(l)) {
            for (const c in l)
                if (c !== "default" && !(c in n)) {
                    const m = Object.getOwnPropertyDescriptor(l, c);
                    m && Object.defineProperty(n, c, m.get ? m : {
                        enumerable: !0,
                        get: () => l[c]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        l(c);
    new MutationObserver(c => {
        for (const m of c)
            if (m.type === "childList")
                for (const h of m.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && l(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(c) {
        const m = {};
        return c.integrity && (m.integrity = c.integrity),
        c.referrerPolicy && (m.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? m.credentials = "include" : c.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin",
        m
    }
    function l(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const m = i(c);
        fetch(c.href, m)
    }
}
)();
function U0(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var dl = {
    exports: {}
}
  , ps = {}
  , ml = {
    exports: {}
}
  , ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bm;
function W0() {
    if (bm)
        return ce;
    bm = 1;
    var n = Symbol.for("react.element")
      , r = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , l = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , m = Symbol.for("react.provider")
      , h = Symbol.for("react.context")
      , f = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function j(N) {
        return N === null || typeof N != "object" ? null : (N = x && N[x] || N["@@iterator"],
        typeof N == "function" ? N : null)
    }
    var k = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , M = Object.assign
      , P = {};
    function A(N, O, ie) {
        this.props = N,
        this.context = O,
        this.refs = P,
        this.updater = ie || k
    }
    A.prototype.isReactComponent = {},
    A.prototype.setState = function(N, O) {
        if (typeof N != "object" && typeof N != "function" && N != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, O, "setState")
    }
    ,
    A.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    }
    ;
    function I() {}
    I.prototype = A.prototype;
    function z(N, O, ie) {
        this.props = N,
        this.context = O,
        this.refs = P,
        this.updater = ie || k
    }
    var R = z.prototype = new I;
    R.constructor = z,
    M(R, A.prototype),
    R.isPureReactComponent = !0;
    var L = Array.isArray
      , W = Object.prototype.hasOwnProperty
      , se = {
        current: null
    }
      , ae = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function re(N, O, ie) {
        var oe, ue = {}, le = null, ye = null;
        if (O != null)
            for (oe in O.ref !== void 0 && (ye = O.ref),
            O.key !== void 0 && (le = "" + O.key),
            O)
                W.call(O, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = O[oe]);
        var ge = arguments.length - 2;
        if (ge === 1)
            ue.children = ie;
        else if (1 < ge) {
            for (var ve = Array(ge), Be = 0; Be < ge; Be++)
                ve[Be] = arguments[Be + 2];
            ue.children = ve
        }
        if (N && N.defaultProps)
            for (oe in ge = N.defaultProps,
            ge)
                ue[oe] === void 0 && (ue[oe] = ge[oe]);
        return {
            $$typeof: n,
            type: N,
            key: le,
            ref: ye,
            props: ue,
            _owner: se.current
        }
    }
    function fe(N, O) {
        return {
            $$typeof: n,
            type: N.type,
            key: O,
            ref: N.ref,
            props: N.props,
            _owner: N._owner
        }
    }
    function _e(N) {
        return typeof N == "object" && N !== null && N.$$typeof === n
    }
    function st(N) {
        var O = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(ie) {
            return O[ie]
        })
    }
    var Me = /\/+/g;
    function Ce(N, O) {
        return typeof N == "object" && N !== null && N.key != null ? st("" + N.key) : O.toString(36)
    }
    function we(N, O, ie, oe, ue) {
        var le = typeof N;
        (le === "undefined" || le === "boolean") && (N = null);
        var ye = !1;
        if (N === null)
            ye = !0;
        else
            switch (le) {
            case "string":
            case "number":
                ye = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                case n:
                case r:
                    ye = !0
                }
            }
        if (ye)
            return ye = N,
            ue = ue(ye),
            N = oe === "" ? "." + Ce(ye, 0) : oe,
            L(ue) ? (ie = "",
            N != null && (ie = N.replace(Me, "$&/") + "/"),
            we(ue, O, ie, "", function(Be) {
                return Be
            })) : ue != null && (_e(ue) && (ue = fe(ue, ie + (!ue.key || ye && ye.key === ue.key ? "" : ("" + ue.key).replace(Me, "$&/") + "/") + N)),
            O.push(ue)),
            1;
        if (ye = 0,
        oe = oe === "" ? "." : oe + ":",
        L(N))
            for (var ge = 0; ge < N.length; ge++) {
                le = N[ge];
                var ve = oe + Ce(le, ge);
                ye += we(le, O, ie, ve, ue)
            }
        else if (ve = j(N),
        typeof ve == "function")
            for (N = ve.call(N),
            ge = 0; !(le = N.next()).done; )
                le = le.value,
                ve = oe + Ce(le, ge++),
                ye += we(le, O, ie, ve, ue);
        else if (le === "object")
            throw O = String(N),
            Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
        return ye
    }
    function $e(N, O, ie) {
        if (N == null)
            return N;
        var oe = []
          , ue = 0;
        return we(N, oe, "", "", function(le) {
            return O.call(ie, le, ue++)
        }),
        oe
    }
    function me(N) {
        if (N._status === -1) {
            var O = N._result;
            O = O(),
            O.then(function(ie) {
                (N._status === 0 || N._status === -1) && (N._status = 1,
                N._result = ie)
            }, function(ie) {
                (N._status === 0 || N._status === -1) && (N._status = 2,
                N._result = ie)
            }),
            N._status === -1 && (N._status = 0,
            N._result = O)
        }
        if (N._status === 1)
            return N._result.default;
        throw N._result
    }
    var pe = {
        current: null
    }
      , U = {
        transition: null
    }
      , Y = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: se
    };
    function $() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ce.Children = {
        map: $e,
        forEach: function(N, O, ie) {
            $e(N, function() {
                O.apply(this, arguments)
            }, ie)
        },
        count: function(N) {
            var O = 0;
            return $e(N, function() {
                O++
            }),
            O
        },
        toArray: function(N) {
            return $e(N, function(O) {
                return O
            }) || []
        },
        only: function(N) {
            if (!_e(N))
                throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    },
    ce.Component = A,
    ce.Fragment = i,
    ce.Profiler = c,
    ce.PureComponent = z,
    ce.StrictMode = l,
    ce.Suspense = p,
    ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y,
    ce.act = $,
    ce.cloneElement = function(N, O, ie) {
        if (N == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
        var oe = M({}, N.props)
          , ue = N.key
          , le = N.ref
          , ye = N._owner;
        if (O != null) {
            if (O.ref !== void 0 && (le = O.ref,
            ye = se.current),
            O.key !== void 0 && (ue = "" + O.key),
            N.type && N.type.defaultProps)
                var ge = N.type.defaultProps;
            for (ve in O)
                W.call(O, ve) && !ae.hasOwnProperty(ve) && (oe[ve] = O[ve] === void 0 && ge !== void 0 ? ge[ve] : O[ve])
        }
        var ve = arguments.length - 2;
        if (ve === 1)
            oe.children = ie;
        else if (1 < ve) {
            ge = Array(ve);
            for (var Be = 0; Be < ve; Be++)
                ge[Be] = arguments[Be + 2];
            oe.children = ge
        }
        return {
            $$typeof: n,
            type: N.type,
            key: ue,
            ref: le,
            props: oe,
            _owner: ye
        }
    }
    ,
    ce.createContext = function(N) {
        return N = {
            $$typeof: h,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        N.Provider = {
            $$typeof: m,
            _context: N
        },
        N.Consumer = N
    }
    ,
    ce.createElement = re,
    ce.createFactory = function(N) {
        var O = re.bind(null, N);
        return O.type = N,
        O
    }
    ,
    ce.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ce.forwardRef = function(N) {
        return {
            $$typeof: f,
            render: N
        }
    }
    ,
    ce.isValidElement = _e,
    ce.lazy = function(N) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: me
        }
    }
    ,
    ce.memo = function(N, O) {
        return {
            $$typeof: g,
            type: N,
            compare: O === void 0 ? null : O
        }
    }
    ,
    ce.startTransition = function(N) {
        var O = U.transition;
        U.transition = {};
        try {
            N()
        } finally {
            U.transition = O
        }
    }
    ,
    ce.unstable_act = $,
    ce.useCallback = function(N, O) {
        return pe.current.useCallback(N, O)
    }
    ,
    ce.useContext = function(N) {
        return pe.current.useContext(N)
    }
    ,
    ce.useDebugValue = function() {}
    ,
    ce.useDeferredValue = function(N) {
        return pe.current.useDeferredValue(N)
    }
    ,
    ce.useEffect = function(N, O) {
        return pe.current.useEffect(N, O)
    }
    ,
    ce.useId = function() {
        return pe.current.useId()
    }
    ,
    ce.useImperativeHandle = function(N, O, ie) {
        return pe.current.useImperativeHandle(N, O, ie)
    }
    ,
    ce.useInsertionEffect = function(N, O) {
        return pe.current.useInsertionEffect(N, O)
    }
    ,
    ce.useLayoutEffect = function(N, O) {
        return pe.current.useLayoutEffect(N, O)
    }
    ,
    ce.useMemo = function(N, O) {
        return pe.current.useMemo(N, O)
    }
    ,
    ce.useReducer = function(N, O, ie) {
        return pe.current.useReducer(N, O, ie)
    }
    ,
    ce.useRef = function(N) {
        return pe.current.useRef(N)
    }
    ,
    ce.useState = function(N) {
        return pe.current.useState(N)
    }
    ,
    ce.useSyncExternalStore = function(N, O, ie) {
        return pe.current.useSyncExternalStore(N, O, ie)
    }
    ,
    ce.useTransition = function() {
        return pe.current.useTransition()
    }
    ,
    ce.version = "18.3.1",
    ce
}
var km;
function Ql() {
    return km || (km = 1,
    ml.exports = W0()),
    ml.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm;
function H0() {
    if (Nm)
        return ps;
    Nm = 1;
    var n = Ql()
      , r = Symbol.for("react.element")
      , i = Symbol.for("react.fragment")
      , l = Object.prototype.hasOwnProperty
      , c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , m = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function h(f, p, g) {
        var v, x = {}, j = null, k = null;
        g !== void 0 && (j = "" + g),
        p.key !== void 0 && (j = "" + p.key),
        p.ref !== void 0 && (k = p.ref);
        for (v in p)
            l.call(p, v) && !m.hasOwnProperty(v) && (x[v] = p[v]);
        if (f && f.defaultProps)
            for (v in p = f.defaultProps,
            p)
                x[v] === void 0 && (x[v] = p[v]);
        return {
            $$typeof: r,
            type: f,
            key: j,
            ref: k,
            props: x,
            _owner: c.current
        }
    }
    return ps.Fragment = i,
    ps.jsx = h,
    ps.jsxs = h,
    ps
}
var Sm;
function $0() {
    return Sm || (Sm = 1,
    dl.exports = H0()),
    dl.exports
}
var a = $0()
  , C = Ql();
const Yl = U0(C)
  , G0 = B0({
    __proto__: null,
    default: Yl
}, [C]);
var Bi = {}
  , hl = {
    exports: {}
}
  , ut = {}
  , fl = {
    exports: {}
}
  , pl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cm;
function K0() {
    return Cm || (Cm = 1,
    function(n) {
        function r(U, Y) {
            var $ = U.length;
            U.push(Y);
            e: for (; 0 < $; ) {
                var N = $ - 1 >>> 1
                  , O = U[N];
                if (0 < c(O, Y))
                    U[N] = Y,
                    U[$] = O,
                    $ = N;
                else
                    break e
            }
        }
        function i(U) {
            return U.length === 0 ? null : U[0]
        }
        function l(U) {
            if (U.length === 0)
                return null;
            var Y = U[0]
              , $ = U.pop();
            if ($ !== Y) {
                U[0] = $;
                e: for (var N = 0, O = U.length, ie = O >>> 1; N < ie; ) {
                    var oe = 2 * (N + 1) - 1
                      , ue = U[oe]
                      , le = oe + 1
                      , ye = U[le];
                    if (0 > c(ue, $))
                        le < O && 0 > c(ye, ue) ? (U[N] = ye,
                        U[le] = $,
                        N = le) : (U[N] = ue,
                        U[oe] = $,
                        N = oe);
                    else if (le < O && 0 > c(ye, $))
                        U[N] = ye,
                        U[le] = $,
                        N = le;
                    else
                        break e
                }
            }
            return Y
        }
        function c(U, Y) {
            var $ = U.sortIndex - Y.sortIndex;
            return $ !== 0 ? $ : U.id - Y.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var m = performance;
            n.unstable_now = function() {
                return m.now()
            }
        } else {
            var h = Date
              , f = h.now();
            n.unstable_now = function() {
                return h.now() - f
            }
        }
        var p = []
          , g = []
          , v = 1
          , x = null
          , j = 3
          , k = !1
          , M = !1
          , P = !1
          , A = typeof setTimeout == "function" ? setTimeout : null
          , I = typeof clearTimeout == "function" ? clearTimeout : null
          , z = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function R(U) {
            for (var Y = i(g); Y !== null; ) {
                if (Y.callback === null)
                    l(g);
                else if (Y.startTime <= U)
                    l(g),
                    Y.sortIndex = Y.expirationTime,
                    r(p, Y);
                else
                    break;
                Y = i(g)
            }
        }
        function L(U) {
            if (P = !1,
            R(U),
            !M)
                if (i(p) !== null)
                    M = !0,
                    me(W);
                else {
                    var Y = i(g);
                    Y !== null && pe(L, Y.startTime - U)
                }
        }
        function W(U, Y) {
            M = !1,
            P && (P = !1,
            I(re),
            re = -1),
            k = !0;
            var $ = j;
            try {
                for (R(Y),
                x = i(p); x !== null && (!(x.expirationTime > Y) || U && !st()); ) {
                    var N = x.callback;
                    if (typeof N == "function") {
                        x.callback = null,
                        j = x.priorityLevel;
                        var O = N(x.expirationTime <= Y);
                        Y = n.unstable_now(),
                        typeof O == "function" ? x.callback = O : x === i(p) && l(p),
                        R(Y)
                    } else
                        l(p);
                    x = i(p)
                }
                if (x !== null)
                    var ie = !0;
                else {
                    var oe = i(g);
                    oe !== null && pe(L, oe.startTime - Y),
                    ie = !1
                }
                return ie
            } finally {
                x = null,
                j = $,
                k = !1
            }
        }
        var se = !1
          , ae = null
          , re = -1
          , fe = 5
          , _e = -1;
        function st() {
            return !(n.unstable_now() - _e < fe)
        }
        function Me() {
            if (ae !== null) {
                var U = n.unstable_now();
                _e = U;
                var Y = !0;
                try {
                    Y = ae(!0, U)
                } finally {
                    Y ? Ce() : (se = !1,
                    ae = null)
                }
            } else
                se = !1
        }
        var Ce;
        if (typeof z == "function")
            Ce = function() {
                z(Me)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var we = new MessageChannel
              , $e = we.port2;
            we.port1.onmessage = Me,
            Ce = function() {
                $e.postMessage(null)
            }
        } else
            Ce = function() {
                A(Me, 0)
            }
            ;
        function me(U) {
            ae = U,
            se || (se = !0,
            Ce())
        }
        function pe(U, Y) {
            re = A(function() {
                U(n.unstable_now())
            }, Y)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(U) {
            U.callback = null
        }
        ,
        n.unstable_continueExecution = function() {
            M || k || (M = !0,
            me(W))
        }
        ,
        n.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : fe = 0 < U ? Math.floor(1e3 / U) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return j
        }
        ,
        n.unstable_getFirstCallbackNode = function() {
            return i(p)
        }
        ,
        n.unstable_next = function(U) {
            switch (j) {
            case 1:
            case 2:
            case 3:
                var Y = 3;
                break;
            default:
                Y = j
            }
            var $ = j;
            j = Y;
            try {
                return U()
            } finally {
                j = $
            }
        }
        ,
        n.unstable_pauseExecution = function() {}
        ,
        n.unstable_requestPaint = function() {}
        ,
        n.unstable_runWithPriority = function(U, Y) {
            switch (U) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                U = 3
            }
            var $ = j;
            j = U;
            try {
                return Y()
            } finally {
                j = $
            }
        }
        ,
        n.unstable_scheduleCallback = function(U, Y, $) {
            var N = n.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
            $ = typeof $ == "number" && 0 < $ ? N + $ : N) : $ = N,
            U) {
            case 1:
                var O = -1;
                break;
            case 2:
                O = 250;
                break;
            case 5:
                O = 1073741823;
                break;
            case 4:
                O = 1e4;
                break;
            default:
                O = 5e3
            }
            return O = $ + O,
            U = {
                id: v++,
                callback: Y,
                priorityLevel: U,
                startTime: $,
                expirationTime: O,
                sortIndex: -1
            },
            $ > N ? (U.sortIndex = $,
            r(g, U),
            i(p) === null && U === i(g) && (P ? (I(re),
            re = -1) : P = !0,
            pe(L, $ - N))) : (U.sortIndex = O,
            r(p, U),
            M || k || (M = !0,
            me(W))),
            U
        }
        ,
        n.unstable_shouldYield = st,
        n.unstable_wrapCallback = function(U) {
            var Y = j;
            return function() {
                var $ = j;
                j = Y;
                try {
                    return U.apply(this, arguments)
                } finally {
                    j = $
                }
            }
        }
    }(pl)),
    pl
}
var Pm;
function q0() {
    return Pm || (Pm = 1,
    fl.exports = K0()),
    fl.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;
function Q0() {
    if (Tm)
        return ut;
    Tm = 1;
    var n = Ql()
      , r = q0();
    function i(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++)
            t += "&args[]=" + encodeURIComponent(arguments[s]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var l = new Set
      , c = {};
    function m(e, t) {
        h(e, t),
        h(e + "Capture", t)
    }
    function h(e, t) {
        for (c[e] = t,
        e = 0; e < t.length; e++)
            l.add(t[e])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , p = Object.prototype.hasOwnProperty
      , g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , v = {}
      , x = {};
    function j(e) {
        return p.call(x, e) ? !0 : p.call(v, e) ? !1 : g.test(e) ? x[e] = !0 : (v[e] = !0,
        !1)
    }
    function k(e, t, s, o) {
        if (s !== null && s.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return o ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function M(e, t, s, o) {
        if (t === null || typeof t > "u" || k(e, t, s, o))
            return !0;
        if (o)
            return !1;
        if (s !== null)
            switch (s.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function P(e, t, s, o, u, d, y) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = o,
        this.attributeNamespace = u,
        this.mustUseProperty = s,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = d,
        this.removeEmptyString = y
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        A[e] = new P(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        A[t] = new P(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        A[e] = new P(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        A[e] = new P(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        A[e] = new P(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        A[e] = new P(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        A[e] = new P(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        A[e] = new P(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        A[e] = new P(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var I = /[\-:]([a-z])/g;
    function z(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(I, z);
        A[t] = new P(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(I, z);
        A[t] = new P(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(I, z);
        A[t] = new P(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        A[e] = new P(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    A.xlinkHref = new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        A[e] = new P(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function R(e, t, s, o) {
        var u = A.hasOwnProperty(t) ? A[t] : null;
        (u !== null ? u.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (M(t, s, u, o) && (s = null),
        o || u === null ? j(t) && (s === null ? e.removeAttribute(t) : e.setAttribute(t, "" + s)) : u.mustUseProperty ? e[u.propertyName] = s === null ? u.type === 3 ? !1 : "" : s : (t = u.attributeName,
        o = u.attributeNamespace,
        s === null ? e.removeAttribute(t) : (u = u.type,
        s = u === 3 || u === 4 && s === !0 ? "" : "" + s,
        o ? e.setAttributeNS(o, t, s) : e.setAttribute(t, s))))
    }
    var L = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , W = Symbol.for("react.element")
      , se = Symbol.for("react.portal")
      , ae = Symbol.for("react.fragment")
      , re = Symbol.for("react.strict_mode")
      , fe = Symbol.for("react.profiler")
      , _e = Symbol.for("react.provider")
      , st = Symbol.for("react.context")
      , Me = Symbol.for("react.forward_ref")
      , Ce = Symbol.for("react.suspense")
      , we = Symbol.for("react.suspense_list")
      , $e = Symbol.for("react.memo")
      , me = Symbol.for("react.lazy")
      , pe = Symbol.for("react.offscreen")
      , U = Symbol.iterator;
    function Y(e) {
        return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var $ = Object.assign, N;
    function O(e) {
        if (N === void 0)
            try {
                throw Error()
            } catch (s) {
                var t = s.stack.trim().match(/\n( *(at )?)/);
                N = t && t[1] || ""
            }
        return `
` + N + e
    }
    var ie = !1;
    function oe(e, t) {
        if (!e || ie)
            return "";
        ie = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (D) {
                        var o = D
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (D) {
                        o = D
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (D) {
                    o = D
                }
                e()
            }
        } catch (D) {
            if (D && o && typeof D.stack == "string") {
                for (var u = D.stack.split(`
`), d = o.stack.split(`
`), y = u.length - 1, w = d.length - 1; 1 <= y && 0 <= w && u[y] !== d[w]; )
                    w--;
                for (; 1 <= y && 0 <= w; y--,
                w--)
                    if (u[y] !== d[w]) {
                        if (y !== 1 || w !== 1)
                            do
                                if (y--,
                                w--,
                                0 > w || u[y] !== d[w]) {
                                    var b = `
` + u[y].replace(" at new ", " at ");
                                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)),
                                    b
                                }
                            while (1 <= y && 0 <= w);
                        break
                    }
            }
        } finally {
            ie = !1,
            Error.prepareStackTrace = s
        }
        return (e = e ? e.displayName || e.name : "") ? O(e) : ""
    }
    function ue(e) {
        switch (e.tag) {
        case 5:
            return O(e.type);
        case 16:
            return O("Lazy");
        case 13:
            return O("Suspense");
        case 19:
            return O("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = oe(e.type, !1),
            e;
        case 11:
            return e = oe(e.type.render, !1),
            e;
        case 1:
            return e = oe(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function le(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case ae:
            return "Fragment";
        case se:
            return "Portal";
        case fe:
            return "Profiler";
        case re:
            return "StrictMode";
        case Ce:
            return "Suspense";
        case we:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case st:
                return (e.displayName || "Context") + ".Consumer";
            case _e:
                return (e._context.displayName || "Context") + ".Provider";
            case Me:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case $e:
                return t = e.displayName || null,
                t !== null ? t : le(e.type) || "Memo";
            case me:
                t = e._payload,
                e = e._init;
                try {
                    return le(e(t))
                } catch {}
            }
        return null
    }
    function ye(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return le(t);
        case 8:
            return t === re ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function ge(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function ve(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Be(e) {
        var t = ve(e) ? "checked" : "value"
          , s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , o = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var u = s.get
              , d = s.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(y) {
                    o = "" + y,
                    d.call(this, y)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: s.enumerable
            }),
            {
                getValue: function() {
                    return o
                },
                setValue: function(y) {
                    o = "" + y
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function yt(e) {
        e._valueTracker || (e._valueTracker = Be(e))
    }
    function ga(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var s = t.getValue()
          , o = "";
        return e && (o = ve(e) ? e.checked ? "true" : "false" : e.value),
        e = o,
        e !== s ? (t.setValue(e),
        !0) : !1
    }
    function As(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function ya(e, t) {
        var s = t.checked;
        return $({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: s ?? e._wrapperState.initialChecked
        })
    }
    function Ec(e, t) {
        var s = t.defaultValue == null ? "" : t.defaultValue
          , o = t.checked != null ? t.checked : t.defaultChecked;
        s = ge(t.value != null ? t.value : s),
        e._wrapperState = {
            initialChecked: o,
            initialValue: s,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function Mc(e, t) {
        t = t.checked,
        t != null && R(e, "checked", t, !1)
    }
    function xa(e, t) {
        Mc(e, t);
        var s = ge(t.value)
          , o = t.type;
        if (s != null)
            o === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
        else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? va(e, t.type, s) : t.hasOwnProperty("defaultValue") && va(e, t.type, ge(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function Dc(e, t, s) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            s || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        s = e.name,
        s !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        s !== "" && (e.name = s)
    }
    function va(e, t, s) {
        (t !== "number" || As(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s))
    }
    var Mr = Array.isArray;
    function Yn(e, t, s, o) {
        if (e = e.options,
        t) {
            t = {};
            for (var u = 0; u < s.length; u++)
                t["$" + s[u]] = !0;
            for (s = 0; s < e.length; s++)
                u = t.hasOwnProperty("$" + e[s].value),
                e[s].selected !== u && (e[s].selected = u),
                u && o && (e[s].defaultSelected = !0)
        } else {
            for (s = "" + ge(s),
            t = null,
            u = 0; u < e.length; u++) {
                if (e[u].value === s) {
                    e[u].selected = !0,
                    o && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function wa(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(i(91));
        return $({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Ac(e, t) {
        var s = t.value;
        if (s == null) {
            if (s = t.children,
            t = t.defaultValue,
            s != null) {
                if (t != null)
                    throw Error(i(92));
                if (Mr(s)) {
                    if (1 < s.length)
                        throw Error(i(93));
                    s = s[0]
                }
                t = s
            }
            t == null && (t = ""),
            s = t
        }
        e._wrapperState = {
            initialValue: ge(s)
        }
    }
    function Rc(e, t) {
        var s = ge(t.value)
          , o = ge(t.defaultValue);
        s != null && (s = "" + s,
        s !== e.value && (e.value = s),
        t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
        o != null && (e.defaultValue = "" + o)
    }
    function Ic(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function Lc(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function ja(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Lc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Rs, Oc = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, s, o, u) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, s, o, u)
            })
        }
        : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (Rs = Rs || document.createElement("div"),
            Rs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Rs.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function Dr(e, t) {
        if (t) {
            var s = e.firstChild;
            if (s && s === e.lastChild && s.nodeType === 3) {
                s.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Ar = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , $p = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ar).forEach(function(e) {
        $p.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Ar[t] = Ar[e]
        })
    });
    function Vc(e, t, s) {
        return t == null || typeof t == "boolean" || t === "" ? "" : s || typeof t != "number" || t === 0 || Ar.hasOwnProperty(e) && Ar[e] ? ("" + t).trim() : t + "px"
    }
    function _c(e, t) {
        e = e.style;
        for (var s in t)
            if (t.hasOwnProperty(s)) {
                var o = s.indexOf("--") === 0
                  , u = Vc(s, t[s], o);
                s === "float" && (s = "cssFloat"),
                o ? e.setProperty(s, u) : e[s] = u
            }
    }
    var Gp = $({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function ba(e, t) {
        if (t) {
            if (Gp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(i(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(i(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(i(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(i(62))
        }
    }
    function ka(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Na = null;
    function Sa(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Ca = null
      , Xn = null
      , Jn = null;
    function Fc(e) {
        if (e = es(e)) {
            if (typeof Ca != "function")
                throw Error(i(280));
            var t = e.stateNode;
            t && (t = ni(t),
            Ca(e.stateNode, e.type, t))
        }
    }
    function zc(e) {
        Xn ? Jn ? Jn.push(e) : Jn = [e] : Xn = e
    }
    function Bc() {
        if (Xn) {
            var e = Xn
              , t = Jn;
            if (Jn = Xn = null,
            Fc(e),
            t)
                for (e = 0; e < t.length; e++)
                    Fc(t[e])
        }
    }
    function Uc(e, t) {
        return e(t)
    }
    function Wc() {}
    var Pa = !1;
    function Hc(e, t, s) {
        if (Pa)
            return e(t, s);
        Pa = !0;
        try {
            return Uc(e, t, s)
        } finally {
            Pa = !1,
            (Xn !== null || Jn !== null) && (Wc(),
            Bc())
        }
    }
    function Rr(e, t) {
        var s = e.stateNode;
        if (s === null)
            return null;
        var o = ni(s);
        if (o === null)
            return null;
        s = o[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (o = !o.disabled) || (e = e.type,
            o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !o;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (s && typeof s != "function")
            throw Error(i(231, t, typeof s));
        return s
    }
    var Ta = !1;
    if (f)
        try {
            var Ir = {};
            Object.defineProperty(Ir, "passive", {
                get: function() {
                    Ta = !0
                }
            }),
            window.addEventListener("test", Ir, Ir),
            window.removeEventListener("test", Ir, Ir)
        } catch {
            Ta = !1
        }
    function Kp(e, t, s, o, u, d, y, w, b) {
        var D = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(s, D)
        } catch (_) {
            this.onError(_)
        }
    }
    var Lr = !1
      , Is = null
      , Ls = !1
      , Ea = null
      , qp = {
        onError: function(e) {
            Lr = !0,
            Is = e
        }
    };
    function Qp(e, t, s, o, u, d, y, w, b) {
        Lr = !1,
        Is = null,
        Kp.apply(qp, arguments)
    }
    function Yp(e, t, s, o, u, d, y, w, b) {
        if (Qp.apply(this, arguments),
        Lr) {
            if (Lr) {
                var D = Is;
                Lr = !1,
                Is = null
            } else
                throw Error(i(198));
            Ls || (Ls = !0,
            Ea = D)
        }
    }
    function En(e) {
        var t = e
          , s = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (s = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? s : null
    }
    function $c(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function Gc(e) {
        if (En(e) !== e)
            throw Error(i(188))
    }
    function Xp(e) {
        var t = e.alternate;
        if (!t) {
            if (t = En(e),
            t === null)
                throw Error(i(188));
            return t !== e ? null : e
        }
        for (var s = e, o = t; ; ) {
            var u = s.return;
            if (u === null)
                break;
            var d = u.alternate;
            if (d === null) {
                if (o = u.return,
                o !== null) {
                    s = o;
                    continue
                }
                break
            }
            if (u.child === d.child) {
                for (d = u.child; d; ) {
                    if (d === s)
                        return Gc(u),
                        e;
                    if (d === o)
                        return Gc(u),
                        t;
                    d = d.sibling
                }
                throw Error(i(188))
            }
            if (s.return !== o.return)
                s = u,
                o = d;
            else {
                for (var y = !1, w = u.child; w; ) {
                    if (w === s) {
                        y = !0,
                        s = u,
                        o = d;
                        break
                    }
                    if (w === o) {
                        y = !0,
                        o = u,
                        s = d;
                        break
                    }
                    w = w.sibling
                }
                if (!y) {
                    for (w = d.child; w; ) {
                        if (w === s) {
                            y = !0,
                            s = d,
                            o = u;
                            break
                        }
                        if (w === o) {
                            y = !0,
                            o = d,
                            s = u;
                            break
                        }
                        w = w.sibling
                    }
                    if (!y)
                        throw Error(i(189))
                }
            }
            if (s.alternate !== o)
                throw Error(i(190))
        }
        if (s.tag !== 3)
            throw Error(i(188));
        return s.stateNode.current === s ? e : t
    }
    function Kc(e) {
        return e = Xp(e),
        e !== null ? qc(e) : null
    }
    function qc(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = qc(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Qc = r.unstable_scheduleCallback
      , Yc = r.unstable_cancelCallback
      , Jp = r.unstable_shouldYield
      , Zp = r.unstable_requestPaint
      , Ae = r.unstable_now
      , eg = r.unstable_getCurrentPriorityLevel
      , Ma = r.unstable_ImmediatePriority
      , Xc = r.unstable_UserBlockingPriority
      , Os = r.unstable_NormalPriority
      , tg = r.unstable_LowPriority
      , Jc = r.unstable_IdlePriority
      , Vs = null
      , Rt = null;
    function ng(e) {
        if (Rt && typeof Rt.onCommitFiberRoot == "function")
            try {
                Rt.onCommitFiberRoot(Vs, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var Ct = Math.clz32 ? Math.clz32 : ig
      , rg = Math.log
      , sg = Math.LN2;
    function ig(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (rg(e) / sg | 0) | 0
    }
    var _s = 64
      , Fs = 4194304;
    function Or(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function zs(e, t) {
        var s = e.pendingLanes;
        if (s === 0)
            return 0;
        var o = 0
          , u = e.suspendedLanes
          , d = e.pingedLanes
          , y = s & 268435455;
        if (y !== 0) {
            var w = y & ~u;
            w !== 0 ? o = Or(w) : (d &= y,
            d !== 0 && (o = Or(d)))
        } else
            y = s & ~u,
            y !== 0 ? o = Or(y) : d !== 0 && (o = Or(d));
        if (o === 0)
            return 0;
        if (t !== 0 && t !== o && (t & u) === 0 && (u = o & -o,
        d = t & -t,
        u >= d || u === 16 && (d & 4194240) !== 0))
            return t;
        if ((o & 4) !== 0 && (o |= s & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= o; 0 < t; )
                s = 31 - Ct(t),
                u = 1 << s,
                o |= e[s],
                t &= ~u;
        return o
    }
    function ag(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function og(e, t) {
        for (var s = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
            var y = 31 - Ct(d)
              , w = 1 << y
              , b = u[y];
            b === -1 ? ((w & s) === 0 || (w & o) !== 0) && (u[y] = ag(w, t)) : b <= t && (e.expiredLanes |= w),
            d &= ~w
        }
    }
    function Da(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Zc() {
        var e = _s;
        return _s <<= 1,
        (_s & 4194240) === 0 && (_s = 64),
        e
    }
    function Aa(e) {
        for (var t = [], s = 0; 31 > s; s++)
            t.push(e);
        return t
    }
    function Vr(e, t, s) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Ct(t),
        e[t] = s
    }
    function lg(e, t) {
        var s = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < s; ) {
            var u = 31 - Ct(s)
              , d = 1 << u;
            t[u] = 0,
            o[u] = -1,
            e[u] = -1,
            s &= ~d
        }
    }
    function Ra(e, t) {
        var s = e.entangledLanes |= t;
        for (e = e.entanglements; s; ) {
            var o = 31 - Ct(s)
              , u = 1 << o;
            u & t | e[o] & t && (e[o] |= t),
            s &= ~u
        }
    }
    var xe = 0;
    function eu(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var tu, Ia, nu, ru, su, La = !1, Bs = [], Xt = null, Jt = null, Zt = null, _r = new Map, Fr = new Map, en = [], cg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function iu(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Xt = null;
            break;
        case "dragenter":
        case "dragleave":
            Jt = null;
            break;
        case "mouseover":
        case "mouseout":
            Zt = null;
            break;
        case "pointerover":
        case "pointerout":
            _r.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Fr.delete(t.pointerId)
        }
    }
    function zr(e, t, s, o, u, d) {
        return e === null || e.nativeEvent !== d ? (e = {
            blockedOn: t,
            domEventName: s,
            eventSystemFlags: o,
            nativeEvent: d,
            targetContainers: [u]
        },
        t !== null && (t = es(t),
        t !== null && Ia(t)),
        e) : (e.eventSystemFlags |= o,
        t = e.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e)
    }
    function ug(e, t, s, o, u) {
        switch (t) {
        case "focusin":
            return Xt = zr(Xt, e, t, s, o, u),
            !0;
        case "dragenter":
            return Jt = zr(Jt, e, t, s, o, u),
            !0;
        case "mouseover":
            return Zt = zr(Zt, e, t, s, o, u),
            !0;
        case "pointerover":
            var d = u.pointerId;
            return _r.set(d, zr(_r.get(d) || null, e, t, s, o, u)),
            !0;
        case "gotpointercapture":
            return d = u.pointerId,
            Fr.set(d, zr(Fr.get(d) || null, e, t, s, o, u)),
            !0
        }
        return !1
    }
    function au(e) {
        var t = Mn(e.target);
        if (t !== null) {
            var s = En(t);
            if (s !== null) {
                if (t = s.tag,
                t === 13) {
                    if (t = $c(s),
                    t !== null) {
                        e.blockedOn = t,
                        su(e.priority, function() {
                            nu(s)
                        });
                        return
                    }
                } else if (t === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Us(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var s = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (s === null) {
                s = e.nativeEvent;
                var o = new s.constructor(s.type,s);
                Na = o,
                s.target.dispatchEvent(o),
                Na = null
            } else
                return t = es(s),
                t !== null && Ia(t),
                e.blockedOn = s,
                !1;
            t.shift()
        }
        return !0
    }
    function ou(e, t, s) {
        Us(e) && s.delete(t)
    }
    function dg() {
        La = !1,
        Xt !== null && Us(Xt) && (Xt = null),
        Jt !== null && Us(Jt) && (Jt = null),
        Zt !== null && Us(Zt) && (Zt = null),
        _r.forEach(ou),
        Fr.forEach(ou)
    }
    function Br(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        La || (La = !0,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, dg)))
    }
    function Ur(e) {
        function t(u) {
            return Br(u, e)
        }
        if (0 < Bs.length) {
            Br(Bs[0], e);
            for (var s = 1; s < Bs.length; s++) {
                var o = Bs[s];
                o.blockedOn === e && (o.blockedOn = null)
            }
        }
        for (Xt !== null && Br(Xt, e),
        Jt !== null && Br(Jt, e),
        Zt !== null && Br(Zt, e),
        _r.forEach(t),
        Fr.forEach(t),
        s = 0; s < en.length; s++)
            o = en[s],
            o.blockedOn === e && (o.blockedOn = null);
        for (; 0 < en.length && (s = en[0],
        s.blockedOn === null); )
            au(s),
            s.blockedOn === null && en.shift()
    }
    var Zn = L.ReactCurrentBatchConfig
      , Ws = !0;
    function mg(e, t, s, o) {
        var u = xe
          , d = Zn.transition;
        Zn.transition = null;
        try {
            xe = 1,
            Oa(e, t, s, o)
        } finally {
            xe = u,
            Zn.transition = d
        }
    }
    function hg(e, t, s, o) {
        var u = xe
          , d = Zn.transition;
        Zn.transition = null;
        try {
            xe = 4,
            Oa(e, t, s, o)
        } finally {
            xe = u,
            Zn.transition = d
        }
    }
    function Oa(e, t, s, o) {
        if (Ws) {
            var u = Va(e, t, s, o);
            if (u === null)
                eo(e, t, o, Hs, s),
                iu(e, o);
            else if (ug(u, e, t, s, o))
                o.stopPropagation();
            else if (iu(e, o),
            t & 4 && -1 < cg.indexOf(e)) {
                for (; u !== null; ) {
                    var d = es(u);
                    if (d !== null && tu(d),
                    d = Va(e, t, s, o),
                    d === null && eo(e, t, o, Hs, s),
                    d === u)
                        break;
                    u = d
                }
                u !== null && o.stopPropagation()
            } else
                eo(e, t, o, null, s)
        }
    }
    var Hs = null;
    function Va(e, t, s, o) {
        if (Hs = null,
        e = Sa(o),
        e = Mn(e),
        e !== null)
            if (t = En(e),
            t === null)
                e = null;
            else if (s = t.tag,
            s === 13) {
                if (e = $c(t),
                e !== null)
                    return e;
                e = null
            } else if (s === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return Hs = e,
        null
    }
    function lu(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (eg()) {
            case Ma:
                return 1;
            case Xc:
                return 4;
            case Os:
            case tg:
                return 16;
            case Jc:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var tn = null
      , _a = null
      , $s = null;
    function cu() {
        if ($s)
            return $s;
        var e, t = _a, s = t.length, o, u = "value"in tn ? tn.value : tn.textContent, d = u.length;
        for (e = 0; e < s && t[e] === u[e]; e++)
            ;
        var y = s - e;
        for (o = 1; o <= y && t[s - o] === u[d - o]; o++)
            ;
        return $s = u.slice(e, 1 < o ? 1 - o : void 0)
    }
    function Gs(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Ks() {
        return !0
    }
    function uu() {
        return !1
    }
    function mt(e) {
        function t(s, o, u, d, y) {
            this._reactName = s,
            this._targetInst = u,
            this.type = o,
            this.nativeEvent = d,
            this.target = y,
            this.currentTarget = null;
            for (var w in e)
                e.hasOwnProperty(w) && (s = e[w],
                this[w] = s ? s(d) : d[w]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ks : uu,
            this.isPropagationStopped = uu,
            this
        }
        return $(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1),
                this.isDefaultPrevented = Ks)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
                this.isPropagationStopped = Ks)
            },
            persist: function() {},
            isPersistent: Ks
        }),
        t
    }
    var er = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Fa = mt(er), Wr = $({}, er, {
        view: 0,
        detail: 0
    }), fg = mt(Wr), za, Ba, Hr, qs = $({}, Wr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wa,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Hr && (Hr && e.type === "mousemove" ? (za = e.screenX - Hr.screenX,
            Ba = e.screenY - Hr.screenY) : Ba = za = 0,
            Hr = e),
            za)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Ba
        }
    }), du = mt(qs), pg = $({}, qs, {
        dataTransfer: 0
    }), gg = mt(pg), yg = $({}, Wr, {
        relatedTarget: 0
    }), Ua = mt(yg), xg = $({}, er, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), vg = mt(xg), wg = $({}, er, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), jg = mt(wg), bg = $({}, er, {
        data: 0
    }), mu = mt(bg), kg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Ng = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Sg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Cg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Sg[e]) ? !!t[e] : !1
    }
    function Wa() {
        return Cg
    }
    var Pg = $({}, Wr, {
        key: function(e) {
            if (e.key) {
                var t = kg[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Gs(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ng[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wa,
        charCode: function(e) {
            return e.type === "keypress" ? Gs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Tg = mt(Pg)
      , Eg = $({}, qs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , hu = mt(Eg)
      , Mg = $({}, Wr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wa
    })
      , Dg = mt(Mg)
      , Ag = $({}, er, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Rg = mt(Ag)
      , Ig = $({}, qs, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Lg = mt(Ig)
      , Og = [9, 13, 27, 32]
      , Ha = f && "CompositionEvent"in window
      , $r = null;
    f && "documentMode"in document && ($r = document.documentMode);
    var Vg = f && "TextEvent"in window && !$r
      , fu = f && (!Ha || $r && 8 < $r && 11 >= $r)
      , pu = " "
      , gu = !1;
    function yu(e, t) {
        switch (e) {
        case "keyup":
            return Og.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function xu(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var tr = !1;
    function _g(e, t) {
        switch (e) {
        case "compositionend":
            return xu(t);
        case "keypress":
            return t.which !== 32 ? null : (gu = !0,
            pu);
        case "textInput":
            return e = t.data,
            e === pu && gu ? null : e;
        default:
            return null
        }
    }
    function Fg(e, t) {
        if (tr)
            return e === "compositionend" || !Ha && yu(e, t) ? (e = cu(),
            $s = _a = tn = null,
            tr = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return fu && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var zg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function vu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!zg[e.type] : t === "textarea"
    }
    function wu(e, t, s, o) {
        zc(o),
        t = Zs(t, "onChange"),
        0 < t.length && (s = new Fa("onChange","change",null,s,o),
        e.push({
            event: s,
            listeners: t
        }))
    }
    var Gr = null
      , Kr = null;
    function Bg(e) {
        _u(e, 0)
    }
    function Qs(e) {
        var t = ar(e);
        if (ga(t))
            return e
    }
    function Ug(e, t) {
        if (e === "change")
            return t
    }
    var ju = !1;
    if (f) {
        var $a;
        if (f) {
            var Ga = "oninput"in document;
            if (!Ga) {
                var bu = document.createElement("div");
                bu.setAttribute("oninput", "return;"),
                Ga = typeof bu.oninput == "function"
            }
            $a = Ga
        } else
            $a = !1;
        ju = $a && (!document.documentMode || 9 < document.documentMode)
    }
    function ku() {
        Gr && (Gr.detachEvent("onpropertychange", Nu),
        Kr = Gr = null)
    }
    function Nu(e) {
        if (e.propertyName === "value" && Qs(Kr)) {
            var t = [];
            wu(t, Kr, e, Sa(e)),
            Hc(Bg, t)
        }
    }
    function Wg(e, t, s) {
        e === "focusin" ? (ku(),
        Gr = t,
        Kr = s,
        Gr.attachEvent("onpropertychange", Nu)) : e === "focusout" && ku()
    }
    function Hg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Qs(Kr)
    }
    function $g(e, t) {
        if (e === "click")
            return Qs(t)
    }
    function Gg(e, t) {
        if (e === "input" || e === "change")
            return Qs(t)
    }
    function Kg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Pt = typeof Object.is == "function" ? Object.is : Kg;
    function qr(e, t) {
        if (Pt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var s = Object.keys(e)
          , o = Object.keys(t);
        if (s.length !== o.length)
            return !1;
        for (o = 0; o < s.length; o++) {
            var u = s[o];
            if (!p.call(t, u) || !Pt(e[u], t[u]))
                return !1
        }
        return !0
    }
    function Su(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Cu(e, t) {
        var s = Su(e);
        e = 0;
        for (var o; s; ) {
            if (s.nodeType === 3) {
                if (o = e + s.textContent.length,
                e <= t && o >= t)
                    return {
                        node: s,
                        offset: t - e
                    };
                e = o
            }
            e: {
                for (; s; ) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break e
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = Su(s)
        }
    }
    function Pu(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Tu() {
        for (var e = window, t = As(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var s = typeof t.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s)
                e = t.contentWindow;
            else
                break;
            t = As(e.document)
        }
        return t
    }
    function Ka(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function qg(e) {
        var t = Tu()
          , s = e.focusedElem
          , o = e.selectionRange;
        if (t !== s && s && s.ownerDocument && Pu(s.ownerDocument.documentElement, s)) {
            if (o !== null && Ka(s)) {
                if (t = o.start,
                e = o.end,
                e === void 0 && (e = t),
                "selectionStart"in s)
                    s.selectionStart = t,
                    s.selectionEnd = Math.min(e, s.value.length);
                else if (e = (t = s.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var u = s.textContent.length
                      , d = Math.min(o.start, u);
                    o = o.end === void 0 ? d : Math.min(o.end, u),
                    !e.extend && d > o && (u = o,
                    o = d,
                    d = u),
                    u = Cu(s, d);
                    var y = Cu(s, o);
                    u && y && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(),
                    t.setStart(u.node, u.offset),
                    e.removeAllRanges(),
                    d > o ? (e.addRange(t),
                    e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = s; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof s.focus == "function" && s.focus(),
            s = 0; s < t.length; s++)
                e = t[s],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Qg = f && "documentMode"in document && 11 >= document.documentMode
      , nr = null
      , qa = null
      , Qr = null
      , Qa = !1;
    function Eu(e, t, s) {
        var o = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        Qa || nr == null || nr !== As(o) || (o = nr,
        "selectionStart"in o && Ka(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
        o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }),
        Qr && qr(Qr, o) || (Qr = o,
        o = Zs(qa, "onSelect"),
        0 < o.length && (t = new Fa("onSelect","select",null,t,s),
        e.push({
            event: t,
            listeners: o
        }),
        t.target = nr)))
    }
    function Ys(e, t) {
        var s = {};
        return s[e.toLowerCase()] = t.toLowerCase(),
        s["Webkit" + e] = "webkit" + t,
        s["Moz" + e] = "moz" + t,
        s
    }
    var rr = {
        animationend: Ys("Animation", "AnimationEnd"),
        animationiteration: Ys("Animation", "AnimationIteration"),
        animationstart: Ys("Animation", "AnimationStart"),
        transitionend: Ys("Transition", "TransitionEnd")
    }
      , Ya = {}
      , Mu = {};
    f && (Mu = document.createElement("div").style,
    "AnimationEvent"in window || (delete rr.animationend.animation,
    delete rr.animationiteration.animation,
    delete rr.animationstart.animation),
    "TransitionEvent"in window || delete rr.transitionend.transition);
    function Xs(e) {
        if (Ya[e])
            return Ya[e];
        if (!rr[e])
            return e;
        var t = rr[e], s;
        for (s in t)
            if (t.hasOwnProperty(s) && s in Mu)
                return Ya[e] = t[s];
        return e
    }
    var Du = Xs("animationend")
      , Au = Xs("animationiteration")
      , Ru = Xs("animationstart")
      , Iu = Xs("transitionend")
      , Lu = new Map
      , Ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function nn(e, t) {
        Lu.set(e, t),
        m(t, [e])
    }
    for (var Xa = 0; Xa < Ou.length; Xa++) {
        var Ja = Ou[Xa]
          , Yg = Ja.toLowerCase()
          , Xg = Ja[0].toUpperCase() + Ja.slice(1);
        nn(Yg, "on" + Xg)
    }
    nn(Du, "onAnimationEnd"),
    nn(Au, "onAnimationIteration"),
    nn(Ru, "onAnimationStart"),
    nn("dblclick", "onDoubleClick"),
    nn("focusin", "onFocus"),
    nn("focusout", "onBlur"),
    nn(Iu, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Jg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
    function Vu(e, t, s) {
        var o = e.type || "unknown-event";
        e.currentTarget = s,
        Yp(o, t, void 0, e),
        e.currentTarget = null
    }
    function _u(e, t) {
        t = (t & 4) !== 0;
        for (var s = 0; s < e.length; s++) {
            var o = e[s]
              , u = o.event;
            o = o.listeners;
            e: {
                var d = void 0;
                if (t)
                    for (var y = o.length - 1; 0 <= y; y--) {
                        var w = o[y]
                          , b = w.instance
                          , D = w.currentTarget;
                        if (w = w.listener,
                        b !== d && u.isPropagationStopped())
                            break e;
                        Vu(u, w, D),
                        d = b
                    }
                else
                    for (y = 0; y < o.length; y++) {
                        if (w = o[y],
                        b = w.instance,
                        D = w.currentTarget,
                        w = w.listener,
                        b !== d && u.isPropagationStopped())
                            break e;
                        Vu(u, w, D),
                        d = b
                    }
            }
        }
        if (Ls)
            throw e = Ea,
            Ls = !1,
            Ea = null,
            e
    }
    function be(e, t) {
        var s = t[ao];
        s === void 0 && (s = t[ao] = new Set);
        var o = e + "__bubble";
        s.has(o) || (Fu(t, e, 2, !1),
        s.add(o))
    }
    function Za(e, t, s) {
        var o = 0;
        t && (o |= 4),
        Fu(s, e, o, t)
    }
    var Js = "_reactListening" + Math.random().toString(36).slice(2);
    function Xr(e) {
        if (!e[Js]) {
            e[Js] = !0,
            l.forEach(function(s) {
                s !== "selectionchange" && (Jg.has(s) || Za(s, !1, e),
                Za(s, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Js] || (t[Js] = !0,
            Za("selectionchange", !1, t))
        }
    }
    function Fu(e, t, s, o) {
        switch (lu(t)) {
        case 1:
            var u = mg;
            break;
        case 4:
            u = hg;
            break;
        default:
            u = Oa
        }
        s = u.bind(null, t, s, e),
        u = void 0,
        !Ta || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        o ? u !== void 0 ? e.addEventListener(t, s, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, s, !0) : u !== void 0 ? e.addEventListener(t, s, {
            passive: u
        }) : e.addEventListener(t, s, !1)
    }
    function eo(e, t, s, o, u) {
        var d = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
            e: for (; ; ) {
                if (o === null)
                    return;
                var y = o.tag;
                if (y === 3 || y === 4) {
                    var w = o.stateNode.containerInfo;
                    if (w === u || w.nodeType === 8 && w.parentNode === u)
                        break;
                    if (y === 4)
                        for (y = o.return; y !== null; ) {
                            var b = y.tag;
                            if ((b === 3 || b === 4) && (b = y.stateNode.containerInfo,
                            b === u || b.nodeType === 8 && b.parentNode === u))
                                return;
                            y = y.return
                        }
                    for (; w !== null; ) {
                        if (y = Mn(w),
                        y === null)
                            return;
                        if (b = y.tag,
                        b === 5 || b === 6) {
                            o = d = y;
                            continue e
                        }
                        w = w.parentNode
                    }
                }
                o = o.return
            }
        Hc(function() {
            var D = d
              , _ = Sa(s)
              , F = [];
            e: {
                var V = Lu.get(e);
                if (V !== void 0) {
                    var H = Fa
                      , K = e;
                    switch (e) {
                    case "keypress":
                        if (Gs(s) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        H = Tg;
                        break;
                    case "focusin":
                        K = "focus",
                        H = Ua;
                        break;
                    case "focusout":
                        K = "blur",
                        H = Ua;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        H = Ua;
                        break;
                    case "click":
                        if (s.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        H = du;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        H = gg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        H = Dg;
                        break;
                    case Du:
                    case Au:
                    case Ru:
                        H = vg;
                        break;
                    case Iu:
                        H = Rg;
                        break;
                    case "scroll":
                        H = fg;
                        break;
                    case "wheel":
                        H = Lg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        H = jg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        H = hu
                    }
                    var q = (t & 4) !== 0
                      , Re = !q && e === "scroll"
                      , T = q ? V !== null ? V + "Capture" : null : V;
                    q = [];
                    for (var S = D, E; S !== null; ) {
                        E = S;
                        var B = E.stateNode;
                        if (E.tag === 5 && B !== null && (E = B,
                        T !== null && (B = Rr(S, T),
                        B != null && q.push(Jr(S, B, E)))),
                        Re)
                            break;
                        S = S.return
                    }
                    0 < q.length && (V = new H(V,K,null,s,_),
                    F.push({
                        event: V,
                        listeners: q
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (V = e === "mouseover" || e === "pointerover",
                    H = e === "mouseout" || e === "pointerout",
                    V && s !== Na && (K = s.relatedTarget || s.fromElement) && (Mn(K) || K[Ft]))
                        break e;
                    if ((H || V) && (V = _.window === _ ? _ : (V = _.ownerDocument) ? V.defaultView || V.parentWindow : window,
                    H ? (K = s.relatedTarget || s.toElement,
                    H = D,
                    K = K ? Mn(K) : null,
                    K !== null && (Re = En(K),
                    K !== Re || K.tag !== 5 && K.tag !== 6) && (K = null)) : (H = null,
                    K = D),
                    H !== K)) {
                        if (q = du,
                        B = "onMouseLeave",
                        T = "onMouseEnter",
                        S = "mouse",
                        (e === "pointerout" || e === "pointerover") && (q = hu,
                        B = "onPointerLeave",
                        T = "onPointerEnter",
                        S = "pointer"),
                        Re = H == null ? V : ar(H),
                        E = K == null ? V : ar(K),
                        V = new q(B,S + "leave",H,s,_),
                        V.target = Re,
                        V.relatedTarget = E,
                        B = null,
                        Mn(_) === D && (q = new q(T,S + "enter",K,s,_),
                        q.target = E,
                        q.relatedTarget = Re,
                        B = q),
                        Re = B,
                        H && K)
                            t: {
                                for (q = H,
                                T = K,
                                S = 0,
                                E = q; E; E = sr(E))
                                    S++;
                                for (E = 0,
                                B = T; B; B = sr(B))
                                    E++;
                                for (; 0 < S - E; )
                                    q = sr(q),
                                    S--;
                                for (; 0 < E - S; )
                                    T = sr(T),
                                    E--;
                                for (; S--; ) {
                                    if (q === T || T !== null && q === T.alternate)
                                        break t;
                                    q = sr(q),
                                    T = sr(T)
                                }
                                q = null
                            }
                        else
                            q = null;
                        H !== null && zu(F, V, H, q, !1),
                        K !== null && Re !== null && zu(F, Re, K, q, !0)
                    }
                }
                e: {
                    if (V = D ? ar(D) : window,
                    H = V.nodeName && V.nodeName.toLowerCase(),
                    H === "select" || H === "input" && V.type === "file")
                        var Q = Ug;
                    else if (vu(V))
                        if (ju)
                            Q = Gg;
                        else {
                            Q = Hg;
                            var X = Wg
                        }
                    else
                        (H = V.nodeName) && H.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (Q = $g);
                    if (Q && (Q = Q(e, D))) {
                        wu(F, Q, s, _);
                        break e
                    }
                    X && X(e, V, D),
                    e === "focusout" && (X = V._wrapperState) && X.controlled && V.type === "number" && va(V, "number", V.value)
                }
                switch (X = D ? ar(D) : window,
                e) {
                case "focusin":
                    (vu(X) || X.contentEditable === "true") && (nr = X,
                    qa = D,
                    Qr = null);
                    break;
                case "focusout":
                    Qr = qa = nr = null;
                    break;
                case "mousedown":
                    Qa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Qa = !1,
                    Eu(F, s, _);
                    break;
                case "selectionchange":
                    if (Qg)
                        break;
                case "keydown":
                case "keyup":
                    Eu(F, s, _)
                }
                var J;
                if (Ha)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var te = "onCompositionStart";
                            break e;
                        case "compositionend":
                            te = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            te = "onCompositionUpdate";
                            break e
                        }
                        te = void 0
                    }
                else
                    tr ? yu(e, s) && (te = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (te = "onCompositionStart");
                te && (fu && s.locale !== "ko" && (tr || te !== "onCompositionStart" ? te === "onCompositionEnd" && tr && (J = cu()) : (tn = _,
                _a = "value"in tn ? tn.value : tn.textContent,
                tr = !0)),
                X = Zs(D, te),
                0 < X.length && (te = new mu(te,e,null,s,_),
                F.push({
                    event: te,
                    listeners: X
                }),
                J ? te.data = J : (J = xu(s),
                J !== null && (te.data = J)))),
                (J = Vg ? _g(e, s) : Fg(e, s)) && (D = Zs(D, "onBeforeInput"),
                0 < D.length && (_ = new mu("onBeforeInput","beforeinput",null,s,_),
                F.push({
                    event: _,
                    listeners: D
                }),
                _.data = J))
            }
            _u(F, t)
        })
    }
    function Jr(e, t, s) {
        return {
            instance: e,
            listener: t,
            currentTarget: s
        }
    }
    function Zs(e, t) {
        for (var s = t + "Capture", o = []; e !== null; ) {
            var u = e
              , d = u.stateNode;
            u.tag === 5 && d !== null && (u = d,
            d = Rr(e, s),
            d != null && o.unshift(Jr(e, d, u)),
            d = Rr(e, t),
            d != null && o.push(Jr(e, d, u))),
            e = e.return
        }
        return o
    }
    function sr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function zu(e, t, s, o, u) {
        for (var d = t._reactName, y = []; s !== null && s !== o; ) {
            var w = s
              , b = w.alternate
              , D = w.stateNode;
            if (b !== null && b === o)
                break;
            w.tag === 5 && D !== null && (w = D,
            u ? (b = Rr(s, d),
            b != null && y.unshift(Jr(s, b, w))) : u || (b = Rr(s, d),
            b != null && y.push(Jr(s, b, w)))),
            s = s.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var Zg = /\r\n?/g
      , e0 = /\u0000|\uFFFD/g;
    function Bu(e) {
        return (typeof e == "string" ? e : "" + e).replace(Zg, `
`).replace(e0, "")
    }
    function ei(e, t, s) {
        if (t = Bu(t),
        Bu(e) !== t && s)
            throw Error(i(425))
    }
    function ti() {}
    var to = null
      , no = null;
    function ro(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var so = typeof setTimeout == "function" ? setTimeout : void 0
      , t0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Uu = typeof Promise == "function" ? Promise : void 0
      , n0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uu < "u" ? function(e) {
        return Uu.resolve(null).then(e).catch(r0)
    }
    : so;
    function r0(e) {
        setTimeout(function() {
            throw e
        })
    }
    function io(e, t) {
        var s = t
          , o = 0;
        do {
            var u = s.nextSibling;
            if (e.removeChild(s),
            u && u.nodeType === 8)
                if (s = u.data,
                s === "/$") {
                    if (o === 0) {
                        e.removeChild(u),
                        Ur(t);
                        return
                    }
                    o--
                } else
                    s !== "$" && s !== "$?" && s !== "$!" || o++;
            s = u
        } while (s);
        Ur(t)
    }
    function rn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function Wu(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var s = e.data;
                if (s === "$" || s === "$!" || s === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    s === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var ir = Math.random().toString(36).slice(2)
      , It = "__reactFiber$" + ir
      , Zr = "__reactProps$" + ir
      , Ft = "__reactContainer$" + ir
      , ao = "__reactEvents$" + ir
      , s0 = "__reactListeners$" + ir
      , i0 = "__reactHandles$" + ir;
    function Mn(e) {
        var t = e[It];
        if (t)
            return t;
        for (var s = e.parentNode; s; ) {
            if (t = s[Ft] || s[It]) {
                if (s = t.alternate,
                t.child !== null || s !== null && s.child !== null)
                    for (e = Wu(e); e !== null; ) {
                        if (s = e[It])
                            return s;
                        e = Wu(e)
                    }
                return t
            }
            e = s,
            s = e.parentNode
        }
        return null
    }
    function es(e) {
        return e = e[It] || e[Ft],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function ar(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(i(33))
    }
    function ni(e) {
        return e[Zr] || null
    }
    var oo = []
      , or = -1;
    function sn(e) {
        return {
            current: e
        }
    }
    function ke(e) {
        0 > or || (e.current = oo[or],
        oo[or] = null,
        or--)
    }
    function je(e, t) {
        or++,
        oo[or] = e.current,
        e.current = t
    }
    var an = {}
      , qe = sn(an)
      , it = sn(!1)
      , Dn = an;
    function lr(e, t) {
        var s = e.type.contextTypes;
        if (!s)
            return an;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
            return o.__reactInternalMemoizedMaskedChildContext;
        var u = {}, d;
        for (d in s)
            u[d] = t[d];
        return o && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = u),
        u
    }
    function at(e) {
        return e = e.childContextTypes,
        e != null
    }
    function ri() {
        ke(it),
        ke(qe)
    }
    function Hu(e, t, s) {
        if (qe.current !== an)
            throw Error(i(168));
        je(qe, t),
        je(it, s)
    }
    function $u(e, t, s) {
        var o = e.stateNode;
        if (t = t.childContextTypes,
        typeof o.getChildContext != "function")
            return s;
        o = o.getChildContext();
        for (var u in o)
            if (!(u in t))
                throw Error(i(108, ye(e) || "Unknown", u));
        return $({}, s, o)
    }
    function si(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an,
        Dn = qe.current,
        je(qe, e),
        je(it, it.current),
        !0
    }
    function Gu(e, t, s) {
        var o = e.stateNode;
        if (!o)
            throw Error(i(169));
        s ? (e = $u(e, t, Dn),
        o.__reactInternalMemoizedMergedChildContext = e,
        ke(it),
        ke(qe),
        je(qe, e)) : ke(it),
        je(it, s)
    }
    var zt = null
      , ii = !1
      , lo = !1;
    function Ku(e) {
        zt === null ? zt = [e] : zt.push(e)
    }
    function a0(e) {
        ii = !0,
        Ku(e)
    }
    function on() {
        if (!lo && zt !== null) {
            lo = !0;
            var e = 0
              , t = xe;
            try {
                var s = zt;
                for (xe = 1; e < s.length; e++) {
                    var o = s[e];
                    do
                        o = o(!0);
                    while (o !== null)
                }
                zt = null,
                ii = !1
            } catch (u) {
                throw zt !== null && (zt = zt.slice(e + 1)),
                Qc(Ma, on),
                u
            } finally {
                xe = t,
                lo = !1
            }
        }
        return null
    }
    var cr = []
      , ur = 0
      , ai = null
      , oi = 0
      , xt = []
      , vt = 0
      , An = null
      , Bt = 1
      , Ut = "";
    function Rn(e, t) {
        cr[ur++] = oi,
        cr[ur++] = ai,
        ai = e,
        oi = t
    }
    function qu(e, t, s) {
        xt[vt++] = Bt,
        xt[vt++] = Ut,
        xt[vt++] = An,
        An = e;
        var o = Bt;
        e = Ut;
        var u = 32 - Ct(o) - 1;
        o &= ~(1 << u),
        s += 1;
        var d = 32 - Ct(t) + u;
        if (30 < d) {
            var y = u - u % 5;
            d = (o & (1 << y) - 1).toString(32),
            o >>= y,
            u -= y,
            Bt = 1 << 32 - Ct(t) + u | s << u | o,
            Ut = d + e
        } else
            Bt = 1 << d | s << u | o,
            Ut = e
    }
    function co(e) {
        e.return !== null && (Rn(e, 1),
        qu(e, 1, 0))
    }
    function uo(e) {
        for (; e === ai; )
            ai = cr[--ur],
            cr[ur] = null,
            oi = cr[--ur],
            cr[ur] = null;
        for (; e === An; )
            An = xt[--vt],
            xt[vt] = null,
            Ut = xt[--vt],
            xt[vt] = null,
            Bt = xt[--vt],
            xt[vt] = null
    }
    var ht = null
      , ft = null
      , Se = !1
      , Tt = null;
    function Qu(e, t) {
        var s = kt(5, null, null, 0);
        s.elementType = "DELETED",
        s.stateNode = t,
        s.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [s],
        e.flags |= 16) : t.push(s)
    }
    function Yu(e, t) {
        switch (e.tag) {
        case 5:
            var s = e.type;
            return t = t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            ht = e,
            ft = rn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            ht = e,
            ft = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (s = An !== null ? {
                id: Bt,
                overflow: Ut
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: s,
                retryLane: 1073741824
            },
            s = kt(18, null, null, 0),
            s.stateNode = t,
            s.return = e,
            e.child = s,
            ht = e,
            ft = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function mo(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function ho(e) {
        if (Se) {
            var t = ft;
            if (t) {
                var s = t;
                if (!Yu(e, t)) {
                    if (mo(e))
                        throw Error(i(418));
                    t = rn(s.nextSibling);
                    var o = ht;
                    t && Yu(e, t) ? Qu(o, s) : (e.flags = e.flags & -4097 | 2,
                    Se = !1,
                    ht = e)
                }
            } else {
                if (mo(e))
                    throw Error(i(418));
                e.flags = e.flags & -4097 | 2,
                Se = !1,
                ht = e
            }
        }
    }
    function Xu(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        ht = e
    }
    function li(e) {
        if (e !== ht)
            return !1;
        if (!Se)
            return Xu(e),
            Se = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ro(e.type, e.memoizedProps)),
        t && (t = ft)) {
            if (mo(e))
                throw Ju(),
                Error(i(418));
            for (; t; )
                Qu(e, t),
                t = rn(t.nextSibling)
        }
        if (Xu(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(i(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var s = e.data;
                        if (s === "/$") {
                            if (t === 0) {
                                ft = rn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            s !== "$" && s !== "$!" && s !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                ft = null
            }
        } else
            ft = ht ? rn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ju() {
        for (var e = ft; e; )
            e = rn(e.nextSibling)
    }
    function dr() {
        ft = ht = null,
        Se = !1
    }
    function fo(e) {
        Tt === null ? Tt = [e] : Tt.push(e)
    }
    var o0 = L.ReactCurrentBatchConfig;
    function ts(e, t, s) {
        if (e = s.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (s._owner) {
                if (s = s._owner,
                s) {
                    if (s.tag !== 1)
                        throw Error(i(309));
                    var o = s.stateNode
                }
                if (!o)
                    throw Error(i(147, e));
                var u = o
                  , d = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(y) {
                    var w = u.refs;
                    y === null ? delete w[d] : w[d] = y
                }
                ,
                t._stringRef = d,
                t)
            }
            if (typeof e != "string")
                throw Error(i(284));
            if (!s._owner)
                throw Error(i(290, e))
        }
        return e
    }
    function ci(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function Zu(e) {
        var t = e._init;
        return t(e._payload)
    }
    function ed(e) {
        function t(T, S) {
            if (e) {
                var E = T.deletions;
                E === null ? (T.deletions = [S],
                T.flags |= 16) : E.push(S)
            }
        }
        function s(T, S) {
            if (!e)
                return null;
            for (; S !== null; )
                t(T, S),
                S = S.sibling;
            return null
        }
        function o(T, S) {
            for (T = new Map; S !== null; )
                S.key !== null ? T.set(S.key, S) : T.set(S.index, S),
                S = S.sibling;
            return T
        }
        function u(T, S) {
            return T = pn(T, S),
            T.index = 0,
            T.sibling = null,
            T
        }
        function d(T, S, E) {
            return T.index = E,
            e ? (E = T.alternate,
            E !== null ? (E = E.index,
            E < S ? (T.flags |= 2,
            S) : E) : (T.flags |= 2,
            S)) : (T.flags |= 1048576,
            S)
        }
        function y(T) {
            return e && T.alternate === null && (T.flags |= 2),
            T
        }
        function w(T, S, E, B) {
            return S === null || S.tag !== 6 ? (S = il(E, T.mode, B),
            S.return = T,
            S) : (S = u(S, E),
            S.return = T,
            S)
        }
        function b(T, S, E, B) {
            var Q = E.type;
            return Q === ae ? _(T, S, E.props.children, B, E.key) : S !== null && (S.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === me && Zu(Q) === S.type) ? (B = u(S, E.props),
            B.ref = ts(T, S, E),
            B.return = T,
            B) : (B = Ri(E.type, E.key, E.props, null, T.mode, B),
            B.ref = ts(T, S, E),
            B.return = T,
            B)
        }
        function D(T, S, E, B) {
            return S === null || S.tag !== 4 || S.stateNode.containerInfo !== E.containerInfo || S.stateNode.implementation !== E.implementation ? (S = al(E, T.mode, B),
            S.return = T,
            S) : (S = u(S, E.children || []),
            S.return = T,
            S)
        }
        function _(T, S, E, B, Q) {
            return S === null || S.tag !== 7 ? (S = Bn(E, T.mode, B, Q),
            S.return = T,
            S) : (S = u(S, E),
            S.return = T,
            S)
        }
        function F(T, S, E) {
            if (typeof S == "string" && S !== "" || typeof S == "number")
                return S = il("" + S, T.mode, E),
                S.return = T,
                S;
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case W:
                    return E = Ri(S.type, S.key, S.props, null, T.mode, E),
                    E.ref = ts(T, null, S),
                    E.return = T,
                    E;
                case se:
                    return S = al(S, T.mode, E),
                    S.return = T,
                    S;
                case me:
                    var B = S._init;
                    return F(T, B(S._payload), E)
                }
                if (Mr(S) || Y(S))
                    return S = Bn(S, T.mode, E, null),
                    S.return = T,
                    S;
                ci(T, S)
            }
            return null
        }
        function V(T, S, E, B) {
            var Q = S !== null ? S.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number")
                return Q !== null ? null : w(T, S, "" + E, B);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case W:
                    return E.key === Q ? b(T, S, E, B) : null;
                case se:
                    return E.key === Q ? D(T, S, E, B) : null;
                case me:
                    return Q = E._init,
                    V(T, S, Q(E._payload), B)
                }
                if (Mr(E) || Y(E))
                    return Q !== null ? null : _(T, S, E, B, null);
                ci(T, E)
            }
            return null
        }
        function H(T, S, E, B, Q) {
            if (typeof B == "string" && B !== "" || typeof B == "number")
                return T = T.get(E) || null,
                w(S, T, "" + B, Q);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                case W:
                    return T = T.get(B.key === null ? E : B.key) || null,
                    b(S, T, B, Q);
                case se:
                    return T = T.get(B.key === null ? E : B.key) || null,
                    D(S, T, B, Q);
                case me:
                    var X = B._init;
                    return H(T, S, E, X(B._payload), Q)
                }
                if (Mr(B) || Y(B))
                    return T = T.get(E) || null,
                    _(S, T, B, Q, null);
                ci(S, B)
            }
            return null
        }
        function K(T, S, E, B) {
            for (var Q = null, X = null, J = S, te = S = 0, He = null; J !== null && te < E.length; te++) {
                J.index > te ? (He = J,
                J = null) : He = J.sibling;
                var he = V(T, J, E[te], B);
                if (he === null) {
                    J === null && (J = He);
                    break
                }
                e && J && he.alternate === null && t(T, J),
                S = d(he, S, te),
                X === null ? Q = he : X.sibling = he,
                X = he,
                J = He
            }
            if (te === E.length)
                return s(T, J),
                Se && Rn(T, te),
                Q;
            if (J === null) {
                for (; te < E.length; te++)
                    J = F(T, E[te], B),
                    J !== null && (S = d(J, S, te),
                    X === null ? Q = J : X.sibling = J,
                    X = J);
                return Se && Rn(T, te),
                Q
            }
            for (J = o(T, J); te < E.length; te++)
                He = H(J, T, te, E[te], B),
                He !== null && (e && He.alternate !== null && J.delete(He.key === null ? te : He.key),
                S = d(He, S, te),
                X === null ? Q = He : X.sibling = He,
                X = He);
            return e && J.forEach(function(gn) {
                return t(T, gn)
            }),
            Se && Rn(T, te),
            Q
        }
        function q(T, S, E, B) {
            var Q = Y(E);
            if (typeof Q != "function")
                throw Error(i(150));
            if (E = Q.call(E),
            E == null)
                throw Error(i(151));
            for (var X = Q = null, J = S, te = S = 0, He = null, he = E.next(); J !== null && !he.done; te++,
            he = E.next()) {
                J.index > te ? (He = J,
                J = null) : He = J.sibling;
                var gn = V(T, J, he.value, B);
                if (gn === null) {
                    J === null && (J = He);
                    break
                }
                e && J && gn.alternate === null && t(T, J),
                S = d(gn, S, te),
                X === null ? Q = gn : X.sibling = gn,
                X = gn,
                J = He
            }
            if (he.done)
                return s(T, J),
                Se && Rn(T, te),
                Q;
            if (J === null) {
                for (; !he.done; te++,
                he = E.next())
                    he = F(T, he.value, B),
                    he !== null && (S = d(he, S, te),
                    X === null ? Q = he : X.sibling = he,
                    X = he);
                return Se && Rn(T, te),
                Q
            }
            for (J = o(T, J); !he.done; te++,
            he = E.next())
                he = H(J, T, te, he.value, B),
                he !== null && (e && he.alternate !== null && J.delete(he.key === null ? te : he.key),
                S = d(he, S, te),
                X === null ? Q = he : X.sibling = he,
                X = he);
            return e && J.forEach(function(z0) {
                return t(T, z0)
            }),
            Se && Rn(T, te),
            Q
        }
        function Re(T, S, E, B) {
            if (typeof E == "object" && E !== null && E.type === ae && E.key === null && (E = E.props.children),
            typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case W:
                    e: {
                        for (var Q = E.key, X = S; X !== null; ) {
                            if (X.key === Q) {
                                if (Q = E.type,
                                Q === ae) {
                                    if (X.tag === 7) {
                                        s(T, X.sibling),
                                        S = u(X, E.props.children),
                                        S.return = T,
                                        T = S;
                                        break e
                                    }
                                } else if (X.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === me && Zu(Q) === X.type) {
                                    s(T, X.sibling),
                                    S = u(X, E.props),
                                    S.ref = ts(T, X, E),
                                    S.return = T,
                                    T = S;
                                    break e
                                }
                                s(T, X);
                                break
                            } else
                                t(T, X);
                            X = X.sibling
                        }
                        E.type === ae ? (S = Bn(E.props.children, T.mode, B, E.key),
                        S.return = T,
                        T = S) : (B = Ri(E.type, E.key, E.props, null, T.mode, B),
                        B.ref = ts(T, S, E),
                        B.return = T,
                        T = B)
                    }
                    return y(T);
                case se:
                    e: {
                        for (X = E.key; S !== null; ) {
                            if (S.key === X)
                                if (S.tag === 4 && S.stateNode.containerInfo === E.containerInfo && S.stateNode.implementation === E.implementation) {
                                    s(T, S.sibling),
                                    S = u(S, E.children || []),
                                    S.return = T,
                                    T = S;
                                    break e
                                } else {
                                    s(T, S);
                                    break
                                }
                            else
                                t(T, S);
                            S = S.sibling
                        }
                        S = al(E, T.mode, B),
                        S.return = T,
                        T = S
                    }
                    return y(T);
                case me:
                    return X = E._init,
                    Re(T, S, X(E._payload), B)
                }
                if (Mr(E))
                    return K(T, S, E, B);
                if (Y(E))
                    return q(T, S, E, B);
                ci(T, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E,
            S !== null && S.tag === 6 ? (s(T, S.sibling),
            S = u(S, E),
            S.return = T,
            T = S) : (s(T, S),
            S = il(E, T.mode, B),
            S.return = T,
            T = S),
            y(T)) : s(T, S)
        }
        return Re
    }
    var mr = ed(!0)
      , td = ed(!1)
      , ui = sn(null)
      , di = null
      , hr = null
      , po = null;
    function go() {
        po = hr = di = null
    }
    function yo(e) {
        var t = ui.current;
        ke(ui),
        e._currentValue = t
    }
    function xo(e, t, s) {
        for (; e !== null; ) {
            var o = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
            e === s)
                break;
            e = e.return
        }
    }
    function fr(e, t) {
        di = e,
        po = hr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ot = !0),
        e.firstContext = null)
    }
    function wt(e) {
        var t = e._currentValue;
        if (po !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            hr === null) {
                if (di === null)
                    throw Error(i(308));
                hr = e,
                di.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                hr = hr.next = e;
        return t
    }
    var In = null;
    function vo(e) {
        In === null ? In = [e] : In.push(e)
    }
    function nd(e, t, s, o) {
        var u = t.interleaved;
        return u === null ? (s.next = s,
        vo(t)) : (s.next = u.next,
        u.next = s),
        t.interleaved = s,
        Wt(e, o)
    }
    function Wt(e, t) {
        e.lanes |= t;
        var s = e.alternate;
        for (s !== null && (s.lanes |= t),
        s = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            s = e.alternate,
            s !== null && (s.childLanes |= t),
            s = e,
            e = e.return;
        return s.tag === 3 ? s.stateNode : null
    }
    var ln = !1;
    function wo(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function rd(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Ht(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function cn(e, t, s) {
        var o = e.updateQueue;
        if (o === null)
            return null;
        if (o = o.shared,
        (de & 2) !== 0) {
            var u = o.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            o.pending = t,
            Wt(e, s)
        }
        return u = o.interleaved,
        u === null ? (t.next = t,
        vo(o)) : (t.next = u.next,
        u.next = t),
        o.interleaved = t,
        Wt(e, s)
    }
    function mi(e, t, s) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (s & 4194240) !== 0)) {
            var o = t.lanes;
            o &= e.pendingLanes,
            s |= o,
            t.lanes = s,
            Ra(e, s)
        }
    }
    function sd(e, t) {
        var s = e.updateQueue
          , o = e.alternate;
        if (o !== null && (o = o.updateQueue,
        s === o)) {
            var u = null
              , d = null;
            if (s = s.firstBaseUpdate,
            s !== null) {
                do {
                    var y = {
                        eventTime: s.eventTime,
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    };
                    d === null ? u = d = y : d = d.next = y,
                    s = s.next
                } while (s !== null);
                d === null ? u = d = t : d = d.next = t
            } else
                u = d = t;
            s = {
                baseState: o.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: d,
                shared: o.shared,
                effects: o.effects
            },
            e.updateQueue = s;
            return
        }
        e = s.lastBaseUpdate,
        e === null ? s.firstBaseUpdate = t : e.next = t,
        s.lastBaseUpdate = t
    }
    function hi(e, t, s, o) {
        var u = e.updateQueue;
        ln = !1;
        var d = u.firstBaseUpdate
          , y = u.lastBaseUpdate
          , w = u.shared.pending;
        if (w !== null) {
            u.shared.pending = null;
            var b = w
              , D = b.next;
            b.next = null,
            y === null ? d = D : y.next = D,
            y = b;
            var _ = e.alternate;
            _ !== null && (_ = _.updateQueue,
            w = _.lastBaseUpdate,
            w !== y && (w === null ? _.firstBaseUpdate = D : w.next = D,
            _.lastBaseUpdate = b))
        }
        if (d !== null) {
            var F = u.baseState;
            y = 0,
            _ = D = b = null,
            w = d;
            do {
                var V = w.lane
                  , H = w.eventTime;
                if ((o & V) === V) {
                    _ !== null && (_ = _.next = {
                        eventTime: H,
                        lane: 0,
                        tag: w.tag,
                        payload: w.payload,
                        callback: w.callback,
                        next: null
                    });
                    e: {
                        var K = e
                          , q = w;
                        switch (V = t,
                        H = s,
                        q.tag) {
                        case 1:
                            if (K = q.payload,
                            typeof K == "function") {
                                F = K.call(H, F, V);
                                break e
                            }
                            F = K;
                            break e;
                        case 3:
                            K.flags = K.flags & -65537 | 128;
                        case 0:
                            if (K = q.payload,
                            V = typeof K == "function" ? K.call(H, F, V) : K,
                            V == null)
                                break e;
                            F = $({}, F, V);
                            break e;
                        case 2:
                            ln = !0
                        }
                    }
                    w.callback !== null && w.lane !== 0 && (e.flags |= 64,
                    V = u.effects,
                    V === null ? u.effects = [w] : V.push(w))
                } else
                    H = {
                        eventTime: H,
                        lane: V,
                        tag: w.tag,
                        payload: w.payload,
                        callback: w.callback,
                        next: null
                    },
                    _ === null ? (D = _ = H,
                    b = F) : _ = _.next = H,
                    y |= V;
                if (w = w.next,
                w === null) {
                    if (w = u.shared.pending,
                    w === null)
                        break;
                    V = w,
                    w = V.next,
                    V.next = null,
                    u.lastBaseUpdate = V,
                    u.shared.pending = null
                }
            } while (!0);
            if (_ === null && (b = F),
            u.baseState = b,
            u.firstBaseUpdate = D,
            u.lastBaseUpdate = _,
            t = u.shared.interleaved,
            t !== null) {
                u = t;
                do
                    y |= u.lane,
                    u = u.next;
                while (u !== t)
            } else
                d === null && (u.shared.lanes = 0);
            Vn |= y,
            e.lanes = y,
            e.memoizedState = F
        }
    }
    function id(e, t, s) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var o = e[t]
                  , u = o.callback;
                if (u !== null) {
                    if (o.callback = null,
                    o = s,
                    typeof u != "function")
                        throw Error(i(191, u));
                    u.call(o)
                }
            }
    }
    var ns = {}
      , Lt = sn(ns)
      , rs = sn(ns)
      , ss = sn(ns);
    function Ln(e) {
        if (e === ns)
            throw Error(i(174));
        return e
    }
    function jo(e, t) {
        switch (je(ss, t),
        je(rs, e),
        je(Lt, ns),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ja(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = ja(t, e)
        }
        ke(Lt),
        je(Lt, t)
    }
    function pr() {
        ke(Lt),
        ke(rs),
        ke(ss)
    }
    function ad(e) {
        Ln(ss.current);
        var t = Ln(Lt.current)
          , s = ja(t, e.type);
        t !== s && (je(rs, e),
        je(Lt, s))
    }
    function bo(e) {
        rs.current === e && (ke(Lt),
        ke(rs))
    }
    var Pe = sn(0);
    function fi(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var s = t.memoizedState;
                if (s !== null && (s = s.dehydrated,
                s === null || s.data === "$?" || s.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var ko = [];
    function No() {
        for (var e = 0; e < ko.length; e++)
            ko[e]._workInProgressVersionPrimary = null;
        ko.length = 0
    }
    var pi = L.ReactCurrentDispatcher
      , So = L.ReactCurrentBatchConfig
      , On = 0
      , Te = null
      , Fe = null
      , Ue = null
      , gi = !1
      , is = !1
      , as = 0
      , l0 = 0;
    function Qe() {
        throw Error(i(321))
    }
    function Co(e, t) {
        if (t === null)
            return !1;
        for (var s = 0; s < t.length && s < e.length; s++)
            if (!Pt(e[s], t[s]))
                return !1;
        return !0
    }
    function Po(e, t, s, o, u, d) {
        if (On = d,
        Te = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        pi.current = e === null || e.memoizedState === null ? m0 : h0,
        e = s(o, u),
        is) {
            d = 0;
            do {
                if (is = !1,
                as = 0,
                25 <= d)
                    throw Error(i(301));
                d += 1,
                Ue = Fe = null,
                t.updateQueue = null,
                pi.current = f0,
                e = s(o, u)
            } while (is)
        }
        if (pi.current = vi,
        t = Fe !== null && Fe.next !== null,
        On = 0,
        Ue = Fe = Te = null,
        gi = !1,
        t)
            throw Error(i(300));
        return e
    }
    function To() {
        var e = as !== 0;
        return as = 0,
        e
    }
    function Ot() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ue === null ? Te.memoizedState = Ue = e : Ue = Ue.next = e,
        Ue
    }
    function jt() {
        if (Fe === null) {
            var e = Te.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Fe.next;
        var t = Ue === null ? Te.memoizedState : Ue.next;
        if (t !== null)
            Ue = t,
            Fe = e;
        else {
            if (e === null)
                throw Error(i(310));
            Fe = e,
            e = {
                memoizedState: Fe.memoizedState,
                baseState: Fe.baseState,
                baseQueue: Fe.baseQueue,
                queue: Fe.queue,
                next: null
            },
            Ue === null ? Te.memoizedState = Ue = e : Ue = Ue.next = e
        }
        return Ue
    }
    function os(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Eo(e) {
        var t = jt()
          , s = t.queue;
        if (s === null)
            throw Error(i(311));
        s.lastRenderedReducer = e;
        var o = Fe
          , u = o.baseQueue
          , d = s.pending;
        if (d !== null) {
            if (u !== null) {
                var y = u.next;
                u.next = d.next,
                d.next = y
            }
            o.baseQueue = u = d,
            s.pending = null
        }
        if (u !== null) {
            d = u.next,
            o = o.baseState;
            var w = y = null
              , b = null
              , D = d;
            do {
                var _ = D.lane;
                if ((On & _) === _)
                    b !== null && (b = b.next = {
                        lane: 0,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    }),
                    o = D.hasEagerState ? D.eagerState : e(o, D.action);
                else {
                    var F = {
                        lane: _,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    };
                    b === null ? (w = b = F,
                    y = o) : b = b.next = F,
                    Te.lanes |= _,
                    Vn |= _
                }
                D = D.next
            } while (D !== null && D !== d);
            b === null ? y = o : b.next = w,
            Pt(o, t.memoizedState) || (ot = !0),
            t.memoizedState = o,
            t.baseState = y,
            t.baseQueue = b,
            s.lastRenderedState = o
        }
        if (e = s.interleaved,
        e !== null) {
            u = e;
            do
                d = u.lane,
                Te.lanes |= d,
                Vn |= d,
                u = u.next;
            while (u !== e)
        } else
            u === null && (s.lanes = 0);
        return [t.memoizedState, s.dispatch]
    }
    function Mo(e) {
        var t = jt()
          , s = t.queue;
        if (s === null)
            throw Error(i(311));
        s.lastRenderedReducer = e;
        var o = s.dispatch
          , u = s.pending
          , d = t.memoizedState;
        if (u !== null) {
            s.pending = null;
            var y = u = u.next;
            do
                d = e(d, y.action),
                y = y.next;
            while (y !== u);
            Pt(d, t.memoizedState) || (ot = !0),
            t.memoizedState = d,
            t.baseQueue === null && (t.baseState = d),
            s.lastRenderedState = d
        }
        return [d, o]
    }
    function od() {}
    function ld(e, t) {
        var s = Te
          , o = jt()
          , u = t()
          , d = !Pt(o.memoizedState, u);
        if (d && (o.memoizedState = u,
        ot = !0),
        o = o.queue,
        Do(dd.bind(null, s, o, e), [e]),
        o.getSnapshot !== t || d || Ue !== null && Ue.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            ls(9, ud.bind(null, s, o, u, t), void 0, null),
            We === null)
                throw Error(i(349));
            (On & 30) !== 0 || cd(s, t, u)
        }
        return u
    }
    function cd(e, t, s) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: s
        },
        t = Te.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Te.updateQueue = t,
        t.stores = [e]) : (s = t.stores,
        s === null ? t.stores = [e] : s.push(e))
    }
    function ud(e, t, s, o) {
        t.value = s,
        t.getSnapshot = o,
        md(t) && hd(e)
    }
    function dd(e, t, s) {
        return s(function() {
            md(t) && hd(e)
        })
    }
    function md(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var s = t();
            return !Pt(e, s)
        } catch {
            return !0
        }
    }
    function hd(e) {
        var t = Wt(e, 1);
        t !== null && At(t, e, 1, -1)
    }
    function fd(e) {
        var t = Ot();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: os,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = d0.bind(null, Te, e),
        [t.memoizedState, e]
    }
    function ls(e, t, s, o) {
        return e = {
            tag: e,
            create: t,
            destroy: s,
            deps: o,
            next: null
        },
        t = Te.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Te.updateQueue = t,
        t.lastEffect = e.next = e) : (s = t.lastEffect,
        s === null ? t.lastEffect = e.next = e : (o = s.next,
        s.next = e,
        e.next = o,
        t.lastEffect = e)),
        e
    }
    function pd() {
        return jt().memoizedState
    }
    function yi(e, t, s, o) {
        var u = Ot();
        Te.flags |= e,
        u.memoizedState = ls(1 | t, s, void 0, o === void 0 ? null : o)
    }
    function xi(e, t, s, o) {
        var u = jt();
        o = o === void 0 ? null : o;
        var d = void 0;
        if (Fe !== null) {
            var y = Fe.memoizedState;
            if (d = y.destroy,
            o !== null && Co(o, y.deps)) {
                u.memoizedState = ls(t, s, d, o);
                return
            }
        }
        Te.flags |= e,
        u.memoizedState = ls(1 | t, s, d, o)
    }
    function gd(e, t) {
        return yi(8390656, 8, e, t)
    }
    function Do(e, t) {
        return xi(2048, 8, e, t)
    }
    function yd(e, t) {
        return xi(4, 2, e, t)
    }
    function xd(e, t) {
        return xi(4, 4, e, t)
    }
    function vd(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function wd(e, t, s) {
        return s = s != null ? s.concat([e]) : null,
        xi(4, 4, vd.bind(null, t, e), s)
    }
    function Ao() {}
    function jd(e, t) {
        var s = jt();
        t = t === void 0 ? null : t;
        var o = s.memoizedState;
        return o !== null && t !== null && Co(t, o[1]) ? o[0] : (s.memoizedState = [e, t],
        e)
    }
    function bd(e, t) {
        var s = jt();
        t = t === void 0 ? null : t;
        var o = s.memoizedState;
        return o !== null && t !== null && Co(t, o[1]) ? o[0] : (e = e(),
        s.memoizedState = [e, t],
        e)
    }
    function kd(e, t, s) {
        return (On & 21) === 0 ? (e.baseState && (e.baseState = !1,
        ot = !0),
        e.memoizedState = s) : (Pt(s, t) || (s = Zc(),
        Te.lanes |= s,
        Vn |= s,
        e.baseState = !0),
        t)
    }
    function c0(e, t) {
        var s = xe;
        xe = s !== 0 && 4 > s ? s : 4,
        e(!0);
        var o = So.transition;
        So.transition = {};
        try {
            e(!1),
            t()
        } finally {
            xe = s,
            So.transition = o
        }
    }
    function Nd() {
        return jt().memoizedState
    }
    function u0(e, t, s) {
        var o = hn(e);
        if (s = {
            lane: o,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Sd(e))
            Cd(t, s);
        else if (s = nd(e, t, s, o),
        s !== null) {
            var u = tt();
            At(s, e, o, u),
            Pd(s, t, o)
        }
    }
    function d0(e, t, s) {
        var o = hn(e)
          , u = {
            lane: o,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Sd(e))
            Cd(t, u);
        else {
            var d = e.alternate;
            if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer,
            d !== null))
                try {
                    var y = t.lastRenderedState
                      , w = d(y, s);
                    if (u.hasEagerState = !0,
                    u.eagerState = w,
                    Pt(w, y)) {
                        var b = t.interleaved;
                        b === null ? (u.next = u,
                        vo(t)) : (u.next = b.next,
                        b.next = u),
                        t.interleaved = u;
                        return
                    }
                } catch {} finally {}
            s = nd(e, t, u, o),
            s !== null && (u = tt(),
            At(s, e, o, u),
            Pd(s, t, o))
        }
    }
    function Sd(e) {
        var t = e.alternate;
        return e === Te || t !== null && t === Te
    }
    function Cd(e, t) {
        is = gi = !0;
        var s = e.pending;
        s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        e.pending = t
    }
    function Pd(e, t, s) {
        if ((s & 4194240) !== 0) {
            var o = t.lanes;
            o &= e.pendingLanes,
            s |= o,
            t.lanes = s,
            Ra(e, s)
        }
    }
    var vi = {
        readContext: wt,
        useCallback: Qe,
        useContext: Qe,
        useEffect: Qe,
        useImperativeHandle: Qe,
        useInsertionEffect: Qe,
        useLayoutEffect: Qe,
        useMemo: Qe,
        useReducer: Qe,
        useRef: Qe,
        useState: Qe,
        useDebugValue: Qe,
        useDeferredValue: Qe,
        useTransition: Qe,
        useMutableSource: Qe,
        useSyncExternalStore: Qe,
        useId: Qe,
        unstable_isNewReconciler: !1
    }
      , m0 = {
        readContext: wt,
        useCallback: function(e, t) {
            return Ot().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: wt,
        useEffect: gd,
        useImperativeHandle: function(e, t, s) {
            return s = s != null ? s.concat([e]) : null,
            yi(4194308, 4, vd.bind(null, t, e), s)
        },
        useLayoutEffect: function(e, t) {
            return yi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return yi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var s = Ot();
            return t = t === void 0 ? null : t,
            e = e(),
            s.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, s) {
            var o = Ot();
            return t = s !== void 0 ? s(t) : t,
            o.memoizedState = o.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            o.queue = e,
            e = e.dispatch = u0.bind(null, Te, e),
            [o.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ot();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: fd,
        useDebugValue: Ao,
        useDeferredValue: function(e) {
            return Ot().memoizedState = e
        },
        useTransition: function() {
            var e = fd(!1)
              , t = e[0];
            return e = c0.bind(null, e[1]),
            Ot().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, s) {
            var o = Te
              , u = Ot();
            if (Se) {
                if (s === void 0)
                    throw Error(i(407));
                s = s()
            } else {
                if (s = t(),
                We === null)
                    throw Error(i(349));
                (On & 30) !== 0 || cd(o, t, s)
            }
            u.memoizedState = s;
            var d = {
                value: s,
                getSnapshot: t
            };
            return u.queue = d,
            gd(dd.bind(null, o, d, e), [e]),
            o.flags |= 2048,
            ls(9, ud.bind(null, o, d, s, t), void 0, null),
            s
        },
        useId: function() {
            var e = Ot()
              , t = We.identifierPrefix;
            if (Se) {
                var s = Ut
                  , o = Bt;
                s = (o & ~(1 << 32 - Ct(o) - 1)).toString(32) + s,
                t = ":" + t + "R" + s,
                s = as++,
                0 < s && (t += "H" + s.toString(32)),
                t += ":"
            } else
                s = l0++,
                t = ":" + t + "r" + s.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , h0 = {
        readContext: wt,
        useCallback: jd,
        useContext: wt,
        useEffect: Do,
        useImperativeHandle: wd,
        useInsertionEffect: yd,
        useLayoutEffect: xd,
        useMemo: bd,
        useReducer: Eo,
        useRef: pd,
        useState: function() {
            return Eo(os)
        },
        useDebugValue: Ao,
        useDeferredValue: function(e) {
            var t = jt();
            return kd(t, Fe.memoizedState, e)
        },
        useTransition: function() {
            var e = Eo(os)[0]
              , t = jt().memoizedState;
            return [e, t]
        },
        useMutableSource: od,
        useSyncExternalStore: ld,
        useId: Nd,
        unstable_isNewReconciler: !1
    }
      , f0 = {
        readContext: wt,
        useCallback: jd,
        useContext: wt,
        useEffect: Do,
        useImperativeHandle: wd,
        useInsertionEffect: yd,
        useLayoutEffect: xd,
        useMemo: bd,
        useReducer: Mo,
        useRef: pd,
        useState: function() {
            return Mo(os)
        },
        useDebugValue: Ao,
        useDeferredValue: function(e) {
            var t = jt();
            return Fe === null ? t.memoizedState = e : kd(t, Fe.memoizedState, e)
        },
        useTransition: function() {
            var e = Mo(os)[0]
              , t = jt().memoizedState;
            return [e, t]
        },
        useMutableSource: od,
        useSyncExternalStore: ld,
        useId: Nd,
        unstable_isNewReconciler: !1
    };
    function Et(e, t) {
        if (e && e.defaultProps) {
            t = $({}, t),
            e = e.defaultProps;
            for (var s in e)
                t[s] === void 0 && (t[s] = e[s]);
            return t
        }
        return t
    }
    function Ro(e, t, s, o) {
        t = e.memoizedState,
        s = s(o, t),
        s = s == null ? t : $({}, t, s),
        e.memoizedState = s,
        e.lanes === 0 && (e.updateQueue.baseState = s)
    }
    var wi = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? En(e) === e : !1
        },
        enqueueSetState: function(e, t, s) {
            e = e._reactInternals;
            var o = tt()
              , u = hn(e)
              , d = Ht(o, u);
            d.payload = t,
            s != null && (d.callback = s),
            t = cn(e, d, u),
            t !== null && (At(t, e, u, o),
            mi(t, e, u))
        },
        enqueueReplaceState: function(e, t, s) {
            e = e._reactInternals;
            var o = tt()
              , u = hn(e)
              , d = Ht(o, u);
            d.tag = 1,
            d.payload = t,
            s != null && (d.callback = s),
            t = cn(e, d, u),
            t !== null && (At(t, e, u, o),
            mi(t, e, u))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var s = tt()
              , o = hn(e)
              , u = Ht(s, o);
            u.tag = 2,
            t != null && (u.callback = t),
            t = cn(e, u, o),
            t !== null && (At(t, e, o, s),
            mi(t, e, o))
        }
    };
    function Td(e, t, s, o, u, d, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, d, y) : t.prototype && t.prototype.isPureReactComponent ? !qr(s, o) || !qr(u, d) : !0
    }
    function Ed(e, t, s) {
        var o = !1
          , u = an
          , d = t.contextType;
        return typeof d == "object" && d !== null ? d = wt(d) : (u = at(t) ? Dn : qe.current,
        o = t.contextTypes,
        d = (o = o != null) ? lr(e, u) : an),
        t = new t(s,d),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = wi,
        e.stateNode = t,
        t._reactInternals = e,
        o && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = u,
        e.__reactInternalMemoizedMaskedChildContext = d),
        t
    }
    function Md(e, t, s, o) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(s, o),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(s, o),
        t.state !== e && wi.enqueueReplaceState(t, t.state, null)
    }
    function Io(e, t, s, o) {
        var u = e.stateNode;
        u.props = s,
        u.state = e.memoizedState,
        u.refs = {},
        wo(e);
        var d = t.contextType;
        typeof d == "object" && d !== null ? u.context = wt(d) : (d = at(t) ? Dn : qe.current,
        u.context = lr(e, d)),
        u.state = e.memoizedState,
        d = t.getDerivedStateFromProps,
        typeof d == "function" && (Ro(e, t, d, s),
        u.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state,
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && wi.enqueueReplaceState(u, u.state, null),
        hi(e, s, u, o),
        u.state = e.memoizedState),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function gr(e, t) {
        try {
            var s = ""
              , o = t;
            do
                s += ue(o),
                o = o.return;
            while (o);
            var u = s
        } catch (d) {
            u = `
Error generating stack: ` + d.message + `
` + d.stack
        }
        return {
            value: e,
            source: t,
            stack: u,
            digest: null
        }
    }
    function Lo(e, t, s) {
        return {
            value: e,
            source: null,
            stack: s ?? null,
            digest: t ?? null
        }
    }
    function Oo(e, t) {
        try {
            console.error(t.value)
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    var p0 = typeof WeakMap == "function" ? WeakMap : Map;
    function Dd(e, t, s) {
        s = Ht(-1, s),
        s.tag = 3,
        s.payload = {
            element: null
        };
        var o = t.value;
        return s.callback = function() {
            Pi || (Pi = !0,
            Xo = o),
            Oo(e, t)
        }
        ,
        s
    }
    function Ad(e, t, s) {
        s = Ht(-1, s),
        s.tag = 3;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var u = t.value;
            s.payload = function() {
                return o(u)
            }
            ,
            s.callback = function() {
                Oo(e, t)
            }
        }
        var d = e.stateNode;
        return d !== null && typeof d.componentDidCatch == "function" && (s.callback = function() {
            Oo(e, t),
            typeof o != "function" && (dn === null ? dn = new Set([this]) : dn.add(this));
            var y = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: y !== null ? y : ""
            })
        }
        ),
        s
    }
    function Rd(e, t, s) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new p0;
            var u = new Set;
            o.set(t, u)
        } else
            u = o.get(t),
            u === void 0 && (u = new Set,
            o.set(t, u));
        u.has(s) || (u.add(s),
        e = E0.bind(null, e, t, s),
        t.then(e, e))
    }
    function Id(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function Ld(e, t, s, o, u) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        s.flags |= 131072,
        s.flags &= -52805,
        s.tag === 1 && (s.alternate === null ? s.tag = 17 : (t = Ht(-1, 1),
        t.tag = 2,
        cn(s, t, 1))),
        s.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = u,
        e)
    }
    var g0 = L.ReactCurrentOwner
      , ot = !1;
    function et(e, t, s, o) {
        t.child = e === null ? td(t, null, s, o) : mr(t, e.child, s, o)
    }
    function Od(e, t, s, o, u) {
        s = s.render;
        var d = t.ref;
        return fr(t, u),
        o = Po(e, t, s, o, d, u),
        s = To(),
        e !== null && !ot ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        $t(e, t, u)) : (Se && s && co(t),
        t.flags |= 1,
        et(e, t, o, u),
        t.child)
    }
    function Vd(e, t, s, o, u) {
        if (e === null) {
            var d = s.type;
            return typeof d == "function" && !sl(d) && d.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (t.tag = 15,
            t.type = d,
            _d(e, t, d, o, u)) : (e = Ri(s.type, null, o, t, t.mode, u),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (d = e.child,
        (e.lanes & u) === 0) {
            var y = d.memoizedProps;
            if (s = s.compare,
            s = s !== null ? s : qr,
            s(y, o) && e.ref === t.ref)
                return $t(e, t, u)
        }
        return t.flags |= 1,
        e = pn(d, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function _d(e, t, s, o, u) {
        if (e !== null) {
            var d = e.memoizedProps;
            if (qr(d, o) && e.ref === t.ref)
                if (ot = !1,
                t.pendingProps = o = d,
                (e.lanes & u) !== 0)
                    (e.flags & 131072) !== 0 && (ot = !0);
                else
                    return t.lanes = e.lanes,
                    $t(e, t, u)
        }
        return Vo(e, t, s, o, u)
    }
    function Fd(e, t, s) {
        var o = t.pendingProps
          , u = o.children
          , d = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                je(xr, pt),
                pt |= s;
            else {
                if ((s & 1073741824) === 0)
                    return e = d !== null ? d.baseLanes | s : s,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    je(xr, pt),
                    pt |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                o = d !== null ? d.baseLanes : s,
                je(xr, pt),
                pt |= o
            }
        else
            d !== null ? (o = d.baseLanes | s,
            t.memoizedState = null) : o = s,
            je(xr, pt),
            pt |= o;
        return et(e, t, u, s),
        t.child
    }
    function zd(e, t) {
        var s = t.ref;
        (e === null && s !== null || e !== null && e.ref !== s) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function Vo(e, t, s, o, u) {
        var d = at(s) ? Dn : qe.current;
        return d = lr(t, d),
        fr(t, u),
        s = Po(e, t, s, o, d, u),
        o = To(),
        e !== null && !ot ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        $t(e, t, u)) : (Se && o && co(t),
        t.flags |= 1,
        et(e, t, s, u),
        t.child)
    }
    function Bd(e, t, s, o, u) {
        if (at(s)) {
            var d = !0;
            si(t)
        } else
            d = !1;
        if (fr(t, u),
        t.stateNode === null)
            bi(e, t),
            Ed(t, s, o),
            Io(t, s, o, u),
            o = !0;
        else if (e === null) {
            var y = t.stateNode
              , w = t.memoizedProps;
            y.props = w;
            var b = y.context
              , D = s.contextType;
            typeof D == "object" && D !== null ? D = wt(D) : (D = at(s) ? Dn : qe.current,
            D = lr(t, D));
            var _ = s.getDerivedStateFromProps
              , F = typeof _ == "function" || typeof y.getSnapshotBeforeUpdate == "function";
            F || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (w !== o || b !== D) && Md(t, y, o, D),
            ln = !1;
            var V = t.memoizedState;
            y.state = V,
            hi(t, o, y, u),
            b = t.memoizedState,
            w !== o || V !== b || it.current || ln ? (typeof _ == "function" && (Ro(t, s, _, o),
            b = t.memoizedState),
            (w = ln || Td(t, s, w, o, V, b, D)) ? (F || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(),
            typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()),
            typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = o,
            t.memoizedState = b),
            y.props = o,
            y.state = b,
            y.context = D,
            o = w) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
            o = !1)
        } else {
            y = t.stateNode,
            rd(e, t),
            w = t.memoizedProps,
            D = t.type === t.elementType ? w : Et(t.type, w),
            y.props = D,
            F = t.pendingProps,
            V = y.context,
            b = s.contextType,
            typeof b == "object" && b !== null ? b = wt(b) : (b = at(s) ? Dn : qe.current,
            b = lr(t, b));
            var H = s.getDerivedStateFromProps;
            (_ = typeof H == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (w !== F || V !== b) && Md(t, y, o, b),
            ln = !1,
            V = t.memoizedState,
            y.state = V,
            hi(t, o, y, u);
            var K = t.memoizedState;
            w !== F || V !== K || it.current || ln ? (typeof H == "function" && (Ro(t, s, H, o),
            K = t.memoizedState),
            (D = ln || Td(t, s, D, o, V, K, b) || !1) ? (_ || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, K, b),
            typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(o, K, b)),
            typeof y.componentDidUpdate == "function" && (t.flags |= 4),
            typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 4),
            typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = o,
            t.memoizedState = K),
            y.props = o,
            y.state = K,
            y.context = b,
            o = D) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 4),
            typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024),
            o = !1)
        }
        return _o(e, t, s, o, d, u)
    }
    function _o(e, t, s, o, u, d) {
        zd(e, t);
        var y = (t.flags & 128) !== 0;
        if (!o && !y)
            return u && Gu(t, s, !1),
            $t(e, t, d);
        o = t.stateNode,
        g0.current = t;
        var w = y && typeof s.getDerivedStateFromError != "function" ? null : o.render();
        return t.flags |= 1,
        e !== null && y ? (t.child = mr(t, e.child, null, d),
        t.child = mr(t, null, w, d)) : et(e, t, w, d),
        t.memoizedState = o.state,
        u && Gu(t, s, !0),
        t.child
    }
    function Ud(e) {
        var t = e.stateNode;
        t.pendingContext ? Hu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hu(e, t.context, !1),
        jo(e, t.containerInfo)
    }
    function Wd(e, t, s, o, u) {
        return dr(),
        fo(u),
        t.flags |= 256,
        et(e, t, s, o),
        t.child
    }
    var Fo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function zo(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Hd(e, t, s) {
        var o = t.pendingProps, u = Pe.current, d = !1, y = (t.flags & 128) !== 0, w;
        if ((w = y) || (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
        w ? (d = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1),
        je(Pe, u & 1),
        e === null)
            return ho(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (y = o.children,
            e = o.fallback,
            d ? (o = t.mode,
            d = t.child,
            y = {
                mode: "hidden",
                children: y
            },
            (o & 1) === 0 && d !== null ? (d.childLanes = 0,
            d.pendingProps = y) : d = Ii(y, o, 0, null),
            e = Bn(e, o, s, null),
            d.return = t,
            e.return = t,
            d.sibling = e,
            t.child = d,
            t.child.memoizedState = zo(s),
            t.memoizedState = Fo,
            e) : Bo(t, y));
        if (u = e.memoizedState,
        u !== null && (w = u.dehydrated,
        w !== null))
            return y0(e, t, y, o, w, u, s);
        if (d) {
            d = o.fallback,
            y = t.mode,
            u = e.child,
            w = u.sibling;
            var b = {
                mode: "hidden",
                children: o.children
            };
            return (y & 1) === 0 && t.child !== u ? (o = t.child,
            o.childLanes = 0,
            o.pendingProps = b,
            t.deletions = null) : (o = pn(u, b),
            o.subtreeFlags = u.subtreeFlags & 14680064),
            w !== null ? d = pn(w, d) : (d = Bn(d, y, s, null),
            d.flags |= 2),
            d.return = t,
            o.return = t,
            o.sibling = d,
            t.child = o,
            o = d,
            d = t.child,
            y = e.child.memoizedState,
            y = y === null ? zo(s) : {
                baseLanes: y.baseLanes | s,
                cachePool: null,
                transitions: y.transitions
            },
            d.memoizedState = y,
            d.childLanes = e.childLanes & ~s,
            t.memoizedState = Fo,
            o
        }
        return d = e.child,
        e = d.sibling,
        o = pn(d, {
            mode: "visible",
            children: o.children
        }),
        (t.mode & 1) === 0 && (o.lanes = s),
        o.return = t,
        o.sibling = null,
        e !== null && (s = t.deletions,
        s === null ? (t.deletions = [e],
        t.flags |= 16) : s.push(e)),
        t.child = o,
        t.memoizedState = null,
        o
    }
    function Bo(e, t) {
        return t = Ii({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function ji(e, t, s, o) {
        return o !== null && fo(o),
        mr(t, e.child, null, s),
        e = Bo(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function y0(e, t, s, o, u, d, y) {
        if (s)
            return t.flags & 256 ? (t.flags &= -257,
            o = Lo(Error(i(422))),
            ji(e, t, y, o)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (d = o.fallback,
            u = t.mode,
            o = Ii({
                mode: "visible",
                children: o.children
            }, u, 0, null),
            d = Bn(d, u, y, null),
            d.flags |= 2,
            o.return = t,
            d.return = t,
            o.sibling = d,
            t.child = o,
            (t.mode & 1) !== 0 && mr(t, e.child, null, y),
            t.child.memoizedState = zo(y),
            t.memoizedState = Fo,
            d);
        if ((t.mode & 1) === 0)
            return ji(e, t, y, null);
        if (u.data === "$!") {
            if (o = u.nextSibling && u.nextSibling.dataset,
            o)
                var w = o.dgst;
            return o = w,
            d = Error(i(419)),
            o = Lo(d, o, void 0),
            ji(e, t, y, o)
        }
        if (w = (y & e.childLanes) !== 0,
        ot || w) {
            if (o = We,
            o !== null) {
                switch (y & -y) {
                case 4:
                    u = 2;
                    break;
                case 16:
                    u = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    u = 32;
                    break;
                case 536870912:
                    u = 268435456;
                    break;
                default:
                    u = 0
                }
                u = (u & (o.suspendedLanes | y)) !== 0 ? 0 : u,
                u !== 0 && u !== d.retryLane && (d.retryLane = u,
                Wt(e, u),
                At(o, e, u, -1))
            }
            return rl(),
            o = Lo(Error(i(421))),
            ji(e, t, y, o)
        }
        return u.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = M0.bind(null, e),
        u._reactRetry = t,
        null) : (e = d.treeContext,
        ft = rn(u.nextSibling),
        ht = t,
        Se = !0,
        Tt = null,
        e !== null && (xt[vt++] = Bt,
        xt[vt++] = Ut,
        xt[vt++] = An,
        Bt = e.id,
        Ut = e.overflow,
        An = t),
        t = Bo(t, o.children),
        t.flags |= 4096,
        t)
    }
    function $d(e, t, s) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t),
        xo(e.return, t, s)
    }
    function Uo(e, t, s, o, u) {
        var d = e.memoizedState;
        d === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: s,
            tailMode: u
        } : (d.isBackwards = t,
        d.rendering = null,
        d.renderingStartTime = 0,
        d.last = o,
        d.tail = s,
        d.tailMode = u)
    }
    function Gd(e, t, s) {
        var o = t.pendingProps
          , u = o.revealOrder
          , d = o.tail;
        if (et(e, t, o.children, s),
        o = Pe.current,
        (o & 2) !== 0)
            o = o & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && $d(e, s, t);
                    else if (e.tag === 19)
                        $d(e, s, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            o &= 1
        }
        if (je(Pe, o),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (u) {
            case "forwards":
                for (s = t.child,
                u = null; s !== null; )
                    e = s.alternate,
                    e !== null && fi(e) === null && (u = s),
                    s = s.sibling;
                s = u,
                s === null ? (u = t.child,
                t.child = null) : (u = s.sibling,
                s.sibling = null),
                Uo(t, !1, u, s, d);
                break;
            case "backwards":
                for (s = null,
                u = t.child,
                t.child = null; u !== null; ) {
                    if (e = u.alternate,
                    e !== null && fi(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling,
                    u.sibling = s,
                    s = u,
                    u = e
                }
                Uo(t, !0, s, null, d);
                break;
            case "together":
                Uo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function bi(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function $t(e, t, s) {
        if (e !== null && (t.dependencies = e.dependencies),
        Vn |= t.lanes,
        (s & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(i(153));
        if (t.child !== null) {
            for (e = t.child,
            s = pn(e, e.pendingProps),
            t.child = s,
            s.return = t; e.sibling !== null; )
                e = e.sibling,
                s = s.sibling = pn(e, e.pendingProps),
                s.return = t;
            s.sibling = null
        }
        return t.child
    }
    function x0(e, t, s) {
        switch (t.tag) {
        case 3:
            Ud(t),
            dr();
            break;
        case 5:
            ad(t);
            break;
        case 1:
            at(t.type) && si(t);
            break;
        case 4:
            jo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var o = t.type._context
              , u = t.memoizedProps.value;
            je(ui, o._currentValue),
            o._currentValue = u;
            break;
        case 13:
            if (o = t.memoizedState,
            o !== null)
                return o.dehydrated !== null ? (je(Pe, Pe.current & 1),
                t.flags |= 128,
                null) : (s & t.child.childLanes) !== 0 ? Hd(e, t, s) : (je(Pe, Pe.current & 1),
                e = $t(e, t, s),
                e !== null ? e.sibling : null);
            je(Pe, Pe.current & 1);
            break;
        case 19:
            if (o = (s & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (o)
                    return Gd(e, t, s);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            je(Pe, Pe.current),
            o)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Fd(e, t, s)
        }
        return $t(e, t, s)
    }
    var Kd, Wo, qd, Qd;
    Kd = function(e, t) {
        for (var s = t.child; s !== null; ) {
            if (s.tag === 5 || s.tag === 6)
                e.appendChild(s.stateNode);
            else if (s.tag !== 4 && s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === t)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                    return;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
    }
    ,
    Wo = function() {}
    ,
    qd = function(e, t, s, o) {
        var u = e.memoizedProps;
        if (u !== o) {
            e = t.stateNode,
            Ln(Lt.current);
            var d = null;
            switch (s) {
            case "input":
                u = ya(e, u),
                o = ya(e, o),
                d = [];
                break;
            case "select":
                u = $({}, u, {
                    value: void 0
                }),
                o = $({}, o, {
                    value: void 0
                }),
                d = [];
                break;
            case "textarea":
                u = wa(e, u),
                o = wa(e, o),
                d = [];
                break;
            default:
                typeof u.onClick != "function" && typeof o.onClick == "function" && (e.onclick = ti)
            }
            ba(s, o);
            var y;
            s = null;
            for (D in u)
                if (!o.hasOwnProperty(D) && u.hasOwnProperty(D) && u[D] != null)
                    if (D === "style") {
                        var w = u[D];
                        for (y in w)
                            w.hasOwnProperty(y) && (s || (s = {}),
                            s[y] = "")
                    } else
                        D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (c.hasOwnProperty(D) ? d || (d = []) : (d = d || []).push(D, null));
            for (D in o) {
                var b = o[D];
                if (w = u != null ? u[D] : void 0,
                o.hasOwnProperty(D) && b !== w && (b != null || w != null))
                    if (D === "style")
                        if (w) {
                            for (y in w)
                                !w.hasOwnProperty(y) || b && b.hasOwnProperty(y) || (s || (s = {}),
                                s[y] = "");
                            for (y in b)
                                b.hasOwnProperty(y) && w[y] !== b[y] && (s || (s = {}),
                                s[y] = b[y])
                        } else
                            s || (d || (d = []),
                            d.push(D, s)),
                            s = b;
                    else
                        D === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0,
                        w = w ? w.__html : void 0,
                        b != null && w !== b && (d = d || []).push(D, b)) : D === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push(D, "" + b) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (c.hasOwnProperty(D) ? (b != null && D === "onScroll" && be("scroll", e),
                        d || w === b || (d = [])) : (d = d || []).push(D, b))
            }
            s && (d = d || []).push("style", s);
            var D = d;
            (t.updateQueue = D) && (t.flags |= 4)
        }
    }
    ,
    Qd = function(e, t, s, o) {
        s !== o && (t.flags |= 4)
    }
    ;
    function cs(e, t) {
        if (!Se)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var s = null; t !== null; )
                    t.alternate !== null && (s = t),
                    t = t.sibling;
                s === null ? e.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = e.tail;
                for (var o = null; s !== null; )
                    s.alternate !== null && (o = s),
                    s = s.sibling;
                o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
            }
    }
    function Ye(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , s = 0
          , o = 0;
        if (t)
            for (var u = e.child; u !== null; )
                s |= u.lanes | u.childLanes,
                o |= u.subtreeFlags & 14680064,
                o |= u.flags & 14680064,
                u.return = e,
                u = u.sibling;
        else
            for (u = e.child; u !== null; )
                s |= u.lanes | u.childLanes,
                o |= u.subtreeFlags,
                o |= u.flags,
                u.return = e,
                u = u.sibling;
        return e.subtreeFlags |= o,
        e.childLanes = s,
        t
    }
    function v0(e, t, s) {
        var o = t.pendingProps;
        switch (uo(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ye(t),
            null;
        case 1:
            return at(t.type) && ri(),
            Ye(t),
            null;
        case 3:
            return o = t.stateNode,
            pr(),
            ke(it),
            ke(qe),
            No(),
            o.pendingContext && (o.context = o.pendingContext,
            o.pendingContext = null),
            (e === null || e.child === null) && (li(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Tt !== null && (el(Tt),
            Tt = null))),
            Wo(e, t),
            Ye(t),
            null;
        case 5:
            bo(t);
            var u = Ln(ss.current);
            if (s = t.type,
            e !== null && t.stateNode != null)
                qd(e, t, s, o, u),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!o) {
                    if (t.stateNode === null)
                        throw Error(i(166));
                    return Ye(t),
                    null
                }
                if (e = Ln(Lt.current),
                li(t)) {
                    o = t.stateNode,
                    s = t.type;
                    var d = t.memoizedProps;
                    switch (o[It] = t,
                    o[Zr] = d,
                    e = (t.mode & 1) !== 0,
                    s) {
                    case "dialog":
                        be("cancel", o),
                        be("close", o);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        be("load", o);
                        break;
                    case "video":
                    case "audio":
                        for (u = 0; u < Yr.length; u++)
                            be(Yr[u], o);
                        break;
                    case "source":
                        be("error", o);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        be("error", o),
                        be("load", o);
                        break;
                    case "details":
                        be("toggle", o);
                        break;
                    case "input":
                        Ec(o, d),
                        be("invalid", o);
                        break;
                    case "select":
                        o._wrapperState = {
                            wasMultiple: !!d.multiple
                        },
                        be("invalid", o);
                        break;
                    case "textarea":
                        Ac(o, d),
                        be("invalid", o)
                    }
                    ba(s, d),
                    u = null;
                    for (var y in d)
                        if (d.hasOwnProperty(y)) {
                            var w = d[y];
                            y === "children" ? typeof w == "string" ? o.textContent !== w && (d.suppressHydrationWarning !== !0 && ei(o.textContent, w, e),
                            u = ["children", w]) : typeof w == "number" && o.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && ei(o.textContent, w, e),
                            u = ["children", "" + w]) : c.hasOwnProperty(y) && w != null && y === "onScroll" && be("scroll", o)
                        }
                    switch (s) {
                    case "input":
                        yt(o),
                        Dc(o, d, !0);
                        break;
                    case "textarea":
                        yt(o),
                        Ic(o);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof d.onClick == "function" && (o.onclick = ti)
                    }
                    o = u,
                    t.updateQueue = o,
                    o !== null && (t.flags |= 4)
                } else {
                    y = u.nodeType === 9 ? u : u.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = Lc(s)),
                    e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = y.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = y.createElement(s, {
                        is: o.is
                    }) : (e = y.createElement(s),
                    s === "select" && (y = e,
                    o.multiple ? y.multiple = !0 : o.size && (y.size = o.size))) : e = y.createElementNS(e, s),
                    e[It] = t,
                    e[Zr] = o,
                    Kd(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (y = ka(s, o),
                        s) {
                        case "dialog":
                            be("cancel", e),
                            be("close", e),
                            u = o;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            be("load", e),
                            u = o;
                            break;
                        case "video":
                        case "audio":
                            for (u = 0; u < Yr.length; u++)
                                be(Yr[u], e);
                            u = o;
                            break;
                        case "source":
                            be("error", e),
                            u = o;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            be("error", e),
                            be("load", e),
                            u = o;
                            break;
                        case "details":
                            be("toggle", e),
                            u = o;
                            break;
                        case "input":
                            Ec(e, o),
                            u = ya(e, o),
                            be("invalid", e);
                            break;
                        case "option":
                            u = o;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                            u = $({}, o, {
                                value: void 0
                            }),
                            be("invalid", e);
                            break;
                        case "textarea":
                            Ac(e, o),
                            u = wa(e, o),
                            be("invalid", e);
                            break;
                        default:
                            u = o
                        }
                        ba(s, u),
                        w = u;
                        for (d in w)
                            if (w.hasOwnProperty(d)) {
                                var b = w[d];
                                d === "style" ? _c(e, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0,
                                b != null && Oc(e, b)) : d === "children" ? typeof b == "string" ? (s !== "textarea" || b !== "") && Dr(e, b) : typeof b == "number" && Dr(e, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (c.hasOwnProperty(d) ? b != null && d === "onScroll" && be("scroll", e) : b != null && R(e, d, b, y))
                            }
                        switch (s) {
                        case "input":
                            yt(e),
                            Dc(e, o, !1);
                            break;
                        case "textarea":
                            yt(e),
                            Ic(e);
                            break;
                        case "option":
                            o.value != null && e.setAttribute("value", "" + ge(o.value));
                            break;
                        case "select":
                            e.multiple = !!o.multiple,
                            d = o.value,
                            d != null ? Yn(e, !!o.multiple, d, !1) : o.defaultValue != null && Yn(e, !!o.multiple, o.defaultValue, !0);
                            break;
                        default:
                            typeof u.onClick == "function" && (e.onclick = ti)
                        }
                        switch (s) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            o = !!o.autoFocus;
                            break e;
                        case "img":
                            o = !0;
                            break e;
                        default:
                            o = !1
                        }
                    }
                    o && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return Ye(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                Qd(e, t, e.memoizedProps, o);
            else {
                if (typeof o != "string" && t.stateNode === null)
                    throw Error(i(166));
                if (s = Ln(ss.current),
                Ln(Lt.current),
                li(t)) {
                    if (o = t.stateNode,
                    s = t.memoizedProps,
                    o[It] = t,
                    (d = o.nodeValue !== s) && (e = ht,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            ei(o.nodeValue, s, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ei(o.nodeValue, s, (e.mode & 1) !== 0)
                        }
                    d && (t.flags |= 4)
                } else
                    o = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(o),
                    o[It] = t,
                    t.stateNode = o
            }
            return Ye(t),
            null;
        case 13:
            if (ke(Pe),
            o = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Se && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    Ju(),
                    dr(),
                    t.flags |= 98560,
                    d = !1;
                else if (d = li(t),
                o !== null && o.dehydrated !== null) {
                    if (e === null) {
                        if (!d)
                            throw Error(i(318));
                        if (d = t.memoizedState,
                        d = d !== null ? d.dehydrated : null,
                        !d)
                            throw Error(i(317));
                        d[It] = t
                    } else
                        dr(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Ye(t),
                    d = !1
                } else
                    Tt !== null && (el(Tt),
                    Tt = null),
                    d = !0;
                if (!d)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = s,
            t) : (o = o !== null,
            o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (Pe.current & 1) !== 0 ? ze === 0 && (ze = 3) : rl())),
            t.updateQueue !== null && (t.flags |= 4),
            Ye(t),
            null);
        case 4:
            return pr(),
            Wo(e, t),
            e === null && Xr(t.stateNode.containerInfo),
            Ye(t),
            null;
        case 10:
            return yo(t.type._context),
            Ye(t),
            null;
        case 17:
            return at(t.type) && ri(),
            Ye(t),
            null;
        case 19:
            if (ke(Pe),
            d = t.memoizedState,
            d === null)
                return Ye(t),
                null;
            if (o = (t.flags & 128) !== 0,
            y = d.rendering,
            y === null)
                if (o)
                    cs(d, !1);
                else {
                    if (ze !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (y = fi(e),
                            y !== null) {
                                for (t.flags |= 128,
                                cs(d, !1),
                                o = y.updateQueue,
                                o !== null && (t.updateQueue = o,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                o = s,
                                s = t.child; s !== null; )
                                    d = s,
                                    e = o,
                                    d.flags &= 14680066,
                                    y = d.alternate,
                                    y === null ? (d.childLanes = 0,
                                    d.lanes = e,
                                    d.child = null,
                                    d.subtreeFlags = 0,
                                    d.memoizedProps = null,
                                    d.memoizedState = null,
                                    d.updateQueue = null,
                                    d.dependencies = null,
                                    d.stateNode = null) : (d.childLanes = y.childLanes,
                                    d.lanes = y.lanes,
                                    d.child = y.child,
                                    d.subtreeFlags = 0,
                                    d.deletions = null,
                                    d.memoizedProps = y.memoizedProps,
                                    d.memoizedState = y.memoizedState,
                                    d.updateQueue = y.updateQueue,
                                    d.type = y.type,
                                    e = y.dependencies,
                                    d.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    s = s.sibling;
                                return je(Pe, Pe.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    d.tail !== null && Ae() > vr && (t.flags |= 128,
                    o = !0,
                    cs(d, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = fi(y),
                    e !== null) {
                        if (t.flags |= 128,
                        o = !0,
                        s = e.updateQueue,
                        s !== null && (t.updateQueue = s,
                        t.flags |= 4),
                        cs(d, !0),
                        d.tail === null && d.tailMode === "hidden" && !y.alternate && !Se)
                            return Ye(t),
                            null
                    } else
                        2 * Ae() - d.renderingStartTime > vr && s !== 1073741824 && (t.flags |= 128,
                        o = !0,
                        cs(d, !1),
                        t.lanes = 4194304);
                d.isBackwards ? (y.sibling = t.child,
                t.child = y) : (s = d.last,
                s !== null ? s.sibling = y : t.child = y,
                d.last = y)
            }
            return d.tail !== null ? (t = d.tail,
            d.rendering = t,
            d.tail = t.sibling,
            d.renderingStartTime = Ae(),
            t.sibling = null,
            s = Pe.current,
            je(Pe, o ? s & 1 | 2 : s & 1),
            t) : (Ye(t),
            null);
        case 22:
        case 23:
            return nl(),
            o = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
            o && (t.mode & 1) !== 0 ? (pt & 1073741824) !== 0 && (Ye(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(i(156, t.tag))
    }
    function w0(e, t) {
        switch (uo(t),
        t.tag) {
        case 1:
            return at(t.type) && ri(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return pr(),
            ke(it),
            ke(qe),
            No(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return bo(t),
            null;
        case 13:
            if (ke(Pe),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(i(340));
                dr()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return ke(Pe),
            null;
        case 4:
            return pr(),
            null;
        case 10:
            return yo(t.type._context),
            null;
        case 22:
        case 23:
            return nl(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var ki = !1
      , Xe = !1
      , j0 = typeof WeakSet == "function" ? WeakSet : Set
      , G = null;
    function yr(e, t) {
        var s = e.ref;
        if (s !== null)
            if (typeof s == "function")
                try {
                    s(null)
                } catch (o) {
                    De(e, t, o)
                }
            else
                s.current = null
    }
    function Ho(e, t, s) {
        try {
            s()
        } catch (o) {
            De(e, t, o)
        }
    }
    var Yd = !1;
    function b0(e, t) {
        if (to = Ws,
        e = Tu(),
        Ka(e)) {
            if ("selectionStart"in e)
                var s = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    s = (s = e.ownerDocument) && s.defaultView || window;
                    var o = s.getSelection && s.getSelection();
                    if (o && o.rangeCount !== 0) {
                        s = o.anchorNode;
                        var u = o.anchorOffset
                          , d = o.focusNode;
                        o = o.focusOffset;
                        try {
                            s.nodeType,
                            d.nodeType
                        } catch {
                            s = null;
                            break e
                        }
                        var y = 0
                          , w = -1
                          , b = -1
                          , D = 0
                          , _ = 0
                          , F = e
                          , V = null;
                        t: for (; ; ) {
                            for (var H; F !== s || u !== 0 && F.nodeType !== 3 || (w = y + u),
                            F !== d || o !== 0 && F.nodeType !== 3 || (b = y + o),
                            F.nodeType === 3 && (y += F.nodeValue.length),
                            (H = F.firstChild) !== null; )
                                V = F,
                                F = H;
                            for (; ; ) {
                                if (F === e)
                                    break t;
                                if (V === s && ++D === u && (w = y),
                                V === d && ++_ === o && (b = y),
                                (H = F.nextSibling) !== null)
                                    break;
                                F = V,
                                V = F.parentNode
                            }
                            F = H
                        }
                        s = w === -1 || b === -1 ? null : {
                            start: w,
                            end: b
                        }
                    } else
                        s = null
                }
            s = s || {
                start: 0,
                end: 0
            }
        } else
            s = null;
        for (no = {
            focusedElem: e,
            selectionRange: s
        },
        Ws = !1,
        G = t; G !== null; )
            if (t = G,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                G = e;
            else
                for (; G !== null; ) {
                    t = G;
                    try {
                        var K = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (K !== null) {
                                    var q = K.memoizedProps
                                      , Re = K.memoizedState
                                      , T = t.stateNode
                                      , S = T.getSnapshotBeforeUpdate(t.elementType === t.type ? q : Et(t.type, q), Re);
                                    T.__reactInternalSnapshotBeforeUpdate = S
                                }
                                break;
                            case 3:
                                var E = t.stateNode.containerInfo;
                                E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(i(163))
                            }
                    } catch (B) {
                        De(t, t.return, B)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        G = e;
                        break
                    }
                    G = t.return
                }
        return K = Yd,
        Yd = !1,
        K
    }
    function us(e, t, s) {
        var o = t.updateQueue;
        if (o = o !== null ? o.lastEffect : null,
        o !== null) {
            var u = o = o.next;
            do {
                if ((u.tag & e) === e) {
                    var d = u.destroy;
                    u.destroy = void 0,
                    d !== void 0 && Ho(t, s, d)
                }
                u = u.next
            } while (u !== o)
        }
    }
    function Ni(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var s = t = t.next;
            do {
                if ((s.tag & e) === e) {
                    var o = s.create;
                    s.destroy = o()
                }
                s = s.next
            } while (s !== t)
        }
    }
    function $o(e) {
        var t = e.ref;
        if (t !== null) {
            var s = e.stateNode;
            switch (e.tag) {
            case 5:
                e = s;
                break;
            default:
                e = s
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Xd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Xd(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[It],
        delete t[Zr],
        delete t[ao],
        delete t[s0],
        delete t[i0])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function Jd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Zd(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Jd(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Go(e, t, s) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
            t ? s.nodeType === 8 ? s.parentNode.insertBefore(e, t) : s.insertBefore(e, t) : (s.nodeType === 8 ? (t = s.parentNode,
            t.insertBefore(e, s)) : (t = s,
            t.appendChild(e)),
            s = s._reactRootContainer,
            s != null || t.onclick !== null || (t.onclick = ti));
        else if (o !== 4 && (e = e.child,
        e !== null))
            for (Go(e, t, s),
            e = e.sibling; e !== null; )
                Go(e, t, s),
                e = e.sibling
    }
    function Ko(e, t, s) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
            t ? s.insertBefore(e, t) : s.appendChild(e);
        else if (o !== 4 && (e = e.child,
        e !== null))
            for (Ko(e, t, s),
            e = e.sibling; e !== null; )
                Ko(e, t, s),
                e = e.sibling
    }
    var Ge = null
      , Mt = !1;
    function un(e, t, s) {
        for (s = s.child; s !== null; )
            em(e, t, s),
            s = s.sibling
    }
    function em(e, t, s) {
        if (Rt && typeof Rt.onCommitFiberUnmount == "function")
            try {
                Rt.onCommitFiberUnmount(Vs, s)
            } catch {}
        switch (s.tag) {
        case 5:
            Xe || yr(s, t);
        case 6:
            var o = Ge
              , u = Mt;
            Ge = null,
            un(e, t, s),
            Ge = o,
            Mt = u,
            Ge !== null && (Mt ? (e = Ge,
            s = s.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : Ge.removeChild(s.stateNode));
            break;
        case 18:
            Ge !== null && (Mt ? (e = Ge,
            s = s.stateNode,
            e.nodeType === 8 ? io(e.parentNode, s) : e.nodeType === 1 && io(e, s),
            Ur(e)) : io(Ge, s.stateNode));
            break;
        case 4:
            o = Ge,
            u = Mt,
            Ge = s.stateNode.containerInfo,
            Mt = !0,
            un(e, t, s),
            Ge = o,
            Mt = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Xe && (o = s.updateQueue,
            o !== null && (o = o.lastEffect,
            o !== null))) {
                u = o = o.next;
                do {
                    var d = u
                      , y = d.destroy;
                    d = d.tag,
                    y !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Ho(s, t, y),
                    u = u.next
                } while (u !== o)
            }
            un(e, t, s);
            break;
        case 1:
            if (!Xe && (yr(s, t),
            o = s.stateNode,
            typeof o.componentWillUnmount == "function"))
                try {
                    o.props = s.memoizedProps,
                    o.state = s.memoizedState,
                    o.componentWillUnmount()
                } catch (w) {
                    De(s, t, w)
                }
            un(e, t, s);
            break;
        case 21:
            un(e, t, s);
            break;
        case 22:
            s.mode & 1 ? (Xe = (o = Xe) || s.memoizedState !== null,
            un(e, t, s),
            Xe = o) : un(e, t, s);
            break;
        default:
            un(e, t, s)
        }
    }
    function tm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var s = e.stateNode;
            s === null && (s = e.stateNode = new j0),
            t.forEach(function(o) {
                var u = D0.bind(null, e, o);
                s.has(o) || (s.add(o),
                o.then(u, u))
            })
        }
    }
    function Dt(e, t) {
        var s = t.deletions;
        if (s !== null)
            for (var o = 0; o < s.length; o++) {
                var u = s[o];
                try {
                    var d = e
                      , y = t
                      , w = y;
                    e: for (; w !== null; ) {
                        switch (w.tag) {
                        case 5:
                            Ge = w.stateNode,
                            Mt = !1;
                            break e;
                        case 3:
                            Ge = w.stateNode.containerInfo,
                            Mt = !0;
                            break e;
                        case 4:
                            Ge = w.stateNode.containerInfo,
                            Mt = !0;
                            break e
                        }
                        w = w.return
                    }
                    if (Ge === null)
                        throw Error(i(160));
                    em(d, y, u),
                    Ge = null,
                    Mt = !1;
                    var b = u.alternate;
                    b !== null && (b.return = null),
                    u.return = null
                } catch (D) {
                    De(u, t, D)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                nm(t, e),
                t = t.sibling
    }
    function nm(e, t) {
        var s = e.alternate
          , o = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Dt(t, e),
            Vt(e),
            o & 4) {
                try {
                    us(3, e, e.return),
                    Ni(3, e)
                } catch (q) {
                    De(e, e.return, q)
                }
                try {
                    us(5, e, e.return)
                } catch (q) {
                    De(e, e.return, q)
                }
            }
            break;
        case 1:
            Dt(t, e),
            Vt(e),
            o & 512 && s !== null && yr(s, s.return);
            break;
        case 5:
            if (Dt(t, e),
            Vt(e),
            o & 512 && s !== null && yr(s, s.return),
            e.flags & 32) {
                var u = e.stateNode;
                try {
                    Dr(u, "")
                } catch (q) {
                    De(e, e.return, q)
                }
            }
            if (o & 4 && (u = e.stateNode,
            u != null)) {
                var d = e.memoizedProps
                  , y = s !== null ? s.memoizedProps : d
                  , w = e.type
                  , b = e.updateQueue;
                if (e.updateQueue = null,
                b !== null)
                    try {
                        w === "input" && d.type === "radio" && d.name != null && Mc(u, d),
                        ka(w, y);
                        var D = ka(w, d);
                        for (y = 0; y < b.length; y += 2) {
                            var _ = b[y]
                              , F = b[y + 1];
                            _ === "style" ? _c(u, F) : _ === "dangerouslySetInnerHTML" ? Oc(u, F) : _ === "children" ? Dr(u, F) : R(u, _, F, D)
                        }
                        switch (w) {
                        case "input":
                            xa(u, d);
                            break;
                        case "textarea":
                            Rc(u, d);
                            break;
                        case "select":
                            var V = u._wrapperState.wasMultiple;
                            u._wrapperState.wasMultiple = !!d.multiple;
                            var H = d.value;
                            H != null ? Yn(u, !!d.multiple, H, !1) : V !== !!d.multiple && (d.defaultValue != null ? Yn(u, !!d.multiple, d.defaultValue, !0) : Yn(u, !!d.multiple, d.multiple ? [] : "", !1))
                        }
                        u[Zr] = d
                    } catch (q) {
                        De(e, e.return, q)
                    }
            }
            break;
        case 6:
            if (Dt(t, e),
            Vt(e),
            o & 4) {
                if (e.stateNode === null)
                    throw Error(i(162));
                u = e.stateNode,
                d = e.memoizedProps;
                try {
                    u.nodeValue = d
                } catch (q) {
                    De(e, e.return, q)
                }
            }
            break;
        case 3:
            if (Dt(t, e),
            Vt(e),
            o & 4 && s !== null && s.memoizedState.isDehydrated)
                try {
                    Ur(t.containerInfo)
                } catch (q) {
                    De(e, e.return, q)
                }
            break;
        case 4:
            Dt(t, e),
            Vt(e);
            break;
        case 13:
            Dt(t, e),
            Vt(e),
            u = e.child,
            u.flags & 8192 && (d = u.memoizedState !== null,
            u.stateNode.isHidden = d,
            !d || u.alternate !== null && u.alternate.memoizedState !== null || (Yo = Ae())),
            o & 4 && tm(e);
            break;
        case 22:
            if (_ = s !== null && s.memoizedState !== null,
            e.mode & 1 ? (Xe = (D = Xe) || _,
            Dt(t, e),
            Xe = D) : Dt(t, e),
            Vt(e),
            o & 8192) {
                if (D = e.memoizedState !== null,
                (e.stateNode.isHidden = D) && !_ && (e.mode & 1) !== 0)
                    for (G = e,
                    _ = e.child; _ !== null; ) {
                        for (F = G = _; G !== null; ) {
                            switch (V = G,
                            H = V.child,
                            V.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                us(4, V, V.return);
                                break;
                            case 1:
                                yr(V, V.return);
                                var K = V.stateNode;
                                if (typeof K.componentWillUnmount == "function") {
                                    o = V,
                                    s = V.return;
                                    try {
                                        t = o,
                                        K.props = t.memoizedProps,
                                        K.state = t.memoizedState,
                                        K.componentWillUnmount()
                                    } catch (q) {
                                        De(o, s, q)
                                    }
                                }
                                break;
                            case 5:
                                yr(V, V.return);
                                break;
                            case 22:
                                if (V.memoizedState !== null) {
                                    im(F);
                                    continue
                                }
                            }
                            H !== null ? (H.return = V,
                            G = H) : im(F)
                        }
                        _ = _.sibling
                    }
                e: for (_ = null,
                F = e; ; ) {
                    if (F.tag === 5) {
                        if (_ === null) {
                            _ = F;
                            try {
                                u = F.stateNode,
                                D ? (d = u.style,
                                typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = F.stateNode,
                                b = F.memoizedProps.style,
                                y = b != null && b.hasOwnProperty("display") ? b.display : null,
                                w.style.display = Vc("display", y))
                            } catch (q) {
                                De(e, e.return, q)
                            }
                        }
                    } else if (F.tag === 6) {
                        if (_ === null)
                            try {
                                F.stateNode.nodeValue = D ? "" : F.memoizedProps
                            } catch (q) {
                                De(e, e.return, q)
                            }
                    } else if ((F.tag !== 22 && F.tag !== 23 || F.memoizedState === null || F === e) && F.child !== null) {
                        F.child.return = F,
                        F = F.child;
                        continue
                    }
                    if (F === e)
                        break e;
                    for (; F.sibling === null; ) {
                        if (F.return === null || F.return === e)
                            break e;
                        _ === F && (_ = null),
                        F = F.return
                    }
                    _ === F && (_ = null),
                    F.sibling.return = F.return,
                    F = F.sibling
                }
            }
            break;
        case 19:
            Dt(t, e),
            Vt(e),
            o & 4 && tm(e);
            break;
        case 21:
            break;
        default:
            Dt(t, e),
            Vt(e)
        }
    }
    function Vt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var s = e.return; s !== null; ) {
                        if (Jd(s)) {
                            var o = s;
                            break e
                        }
                        s = s.return
                    }
                    throw Error(i(160))
                }
                switch (o.tag) {
                case 5:
                    var u = o.stateNode;
                    o.flags & 32 && (Dr(u, ""),
                    o.flags &= -33);
                    var d = Zd(e);
                    Ko(e, d, u);
                    break;
                case 3:
                case 4:
                    var y = o.stateNode.containerInfo
                      , w = Zd(e);
                    Go(e, w, y);
                    break;
                default:
                    throw Error(i(161))
                }
            } catch (b) {
                De(e, e.return, b)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function k0(e, t, s) {
        G = e,
        rm(e)
    }
    function rm(e, t, s) {
        for (var o = (e.mode & 1) !== 0; G !== null; ) {
            var u = G
              , d = u.child;
            if (u.tag === 22 && o) {
                var y = u.memoizedState !== null || ki;
                if (!y) {
                    var w = u.alternate
                      , b = w !== null && w.memoizedState !== null || Xe;
                    w = ki;
                    var D = Xe;
                    if (ki = y,
                    (Xe = b) && !D)
                        for (G = u; G !== null; )
                            y = G,
                            b = y.child,
                            y.tag === 22 && y.memoizedState !== null ? am(u) : b !== null ? (b.return = y,
                            G = b) : am(u);
                    for (; d !== null; )
                        G = d,
                        rm(d),
                        d = d.sibling;
                    G = u,
                    ki = w,
                    Xe = D
                }
                sm(e)
            } else
                (u.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = u,
                G = d) : sm(e)
        }
    }
    function sm(e) {
        for (; G !== null; ) {
            var t = G;
            if ((t.flags & 8772) !== 0) {
                var s = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Xe || Ni(5, t);
                            break;
                        case 1:
                            var o = t.stateNode;
                            if (t.flags & 4 && !Xe)
                                if (s === null)
                                    o.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? s.memoizedProps : Et(t.type, s.memoizedProps);
                                    o.componentDidUpdate(u, s.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                                }
                            var d = t.updateQueue;
                            d !== null && id(t, d, o);
                            break;
                        case 3:
                            var y = t.updateQueue;
                            if (y !== null) {
                                if (s = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        s = t.child.stateNode;
                                        break;
                                    case 1:
                                        s = t.child.stateNode
                                    }
                                id(t, y, s)
                            }
                            break;
                        case 5:
                            var w = t.stateNode;
                            if (s === null && t.flags & 4) {
                                s = w;
                                var b = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    b.autoFocus && s.focus();
                                    break;
                                case "img":
                                    b.src && (s.src = b.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var D = t.alternate;
                                if (D !== null) {
                                    var _ = D.memoizedState;
                                    if (_ !== null) {
                                        var F = _.dehydrated;
                                        F !== null && Ur(F)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(i(163))
                        }
                    Xe || t.flags & 512 && $o(t)
                } catch (V) {
                    De(t, t.return, V)
                }
            }
            if (t === e) {
                G = null;
                break
            }
            if (s = t.sibling,
            s !== null) {
                s.return = t.return,
                G = s;
                break
            }
            G = t.return
        }
    }
    function im(e) {
        for (; G !== null; ) {
            var t = G;
            if (t === e) {
                G = null;
                break
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return,
                G = s;
                break
            }
            G = t.return
        }
    }
    function am(e) {
        for (; G !== null; ) {
            var t = G;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var s = t.return;
                    try {
                        Ni(4, t)
                    } catch (b) {
                        De(t, s, b)
                    }
                    break;
                case 1:
                    var o = t.stateNode;
                    if (typeof o.componentDidMount == "function") {
                        var u = t.return;
                        try {
                            o.componentDidMount()
                        } catch (b) {
                            De(t, u, b)
                        }
                    }
                    var d = t.return;
                    try {
                        $o(t)
                    } catch (b) {
                        De(t, d, b)
                    }
                    break;
                case 5:
                    var y = t.return;
                    try {
                        $o(t)
                    } catch (b) {
                        De(t, y, b)
                    }
                }
            } catch (b) {
                De(t, t.return, b)
            }
            if (t === e) {
                G = null;
                break
            }
            var w = t.sibling;
            if (w !== null) {
                w.return = t.return,
                G = w;
                break
            }
            G = t.return
        }
    }
    var N0 = Math.ceil
      , Si = L.ReactCurrentDispatcher
      , qo = L.ReactCurrentOwner
      , bt = L.ReactCurrentBatchConfig
      , de = 0
      , We = null
      , Oe = null
      , Ke = 0
      , pt = 0
      , xr = sn(0)
      , ze = 0
      , ds = null
      , Vn = 0
      , Ci = 0
      , Qo = 0
      , ms = null
      , lt = null
      , Yo = 0
      , vr = 1 / 0
      , Gt = null
      , Pi = !1
      , Xo = null
      , dn = null
      , Ti = !1
      , mn = null
      , Ei = 0
      , hs = 0
      , Jo = null
      , Mi = -1
      , Di = 0;
    function tt() {
        return (de & 6) !== 0 ? Ae() : Mi !== -1 ? Mi : Mi = Ae()
    }
    function hn(e) {
        return (e.mode & 1) === 0 ? 1 : (de & 2) !== 0 && Ke !== 0 ? Ke & -Ke : o0.transition !== null ? (Di === 0 && (Di = Zc()),
        Di) : (e = xe,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : lu(e.type)),
        e)
    }
    function At(e, t, s, o) {
        if (50 < hs)
            throw hs = 0,
            Jo = null,
            Error(i(185));
        Vr(e, s, o),
        ((de & 2) === 0 || e !== We) && (e === We && ((de & 2) === 0 && (Ci |= s),
        ze === 4 && fn(e, Ke)),
        ct(e, o),
        s === 1 && de === 0 && (t.mode & 1) === 0 && (vr = Ae() + 500,
        ii && on()))
    }
    function ct(e, t) {
        var s = e.callbackNode;
        og(e, t);
        var o = zs(e, e === We ? Ke : 0);
        if (o === 0)
            s !== null && Yc(s),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = o & -o,
        e.callbackPriority !== t) {
            if (s != null && Yc(s),
            t === 1)
                e.tag === 0 ? a0(lm.bind(null, e)) : Ku(lm.bind(null, e)),
                n0(function() {
                    (de & 6) === 0 && on()
                }),
                s = null;
            else {
                switch (eu(o)) {
                case 1:
                    s = Ma;
                    break;
                case 4:
                    s = Xc;
                    break;
                case 16:
                    s = Os;
                    break;
                case 536870912:
                    s = Jc;
                    break;
                default:
                    s = Os
                }
                s = gm(s, om.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = s
        }
    }
    function om(e, t) {
        if (Mi = -1,
        Di = 0,
        (de & 6) !== 0)
            throw Error(i(327));
        var s = e.callbackNode;
        if (wr() && e.callbackNode !== s)
            return null;
        var o = zs(e, e === We ? Ke : 0);
        if (o === 0)
            return null;
        if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t)
            t = Ai(e, o);
        else {
            t = o;
            var u = de;
            de |= 2;
            var d = um();
            (We !== e || Ke !== t) && (Gt = null,
            vr = Ae() + 500,
            Fn(e, t));
            do
                try {
                    P0();
                    break
                } catch (w) {
                    cm(e, w)
                }
            while (!0);
            go(),
            Si.current = d,
            de = u,
            Oe !== null ? t = 0 : (We = null,
            Ke = 0,
            t = ze)
        }
        if (t !== 0) {
            if (t === 2 && (u = Da(e),
            u !== 0 && (o = u,
            t = Zo(e, u))),
            t === 1)
                throw s = ds,
                Fn(e, 0),
                fn(e, o),
                ct(e, Ae()),
                s;
            if (t === 6)
                fn(e, o);
            else {
                if (u = e.current.alternate,
                (o & 30) === 0 && !S0(u) && (t = Ai(e, o),
                t === 2 && (d = Da(e),
                d !== 0 && (o = d,
                t = Zo(e, d))),
                t === 1))
                    throw s = ds,
                    Fn(e, 0),
                    fn(e, o),
                    ct(e, Ae()),
                    s;
                switch (e.finishedWork = u,
                e.finishedLanes = o,
                t) {
                case 0:
                case 1:
                    throw Error(i(345));
                case 2:
                    zn(e, lt, Gt);
                    break;
                case 3:
                    if (fn(e, o),
                    (o & 130023424) === o && (t = Yo + 500 - Ae(),
                    10 < t)) {
                        if (zs(e, 0) !== 0)
                            break;
                        if (u = e.suspendedLanes,
                        (u & o) !== o) {
                            tt(),
                            e.pingedLanes |= e.suspendedLanes & u;
                            break
                        }
                        e.timeoutHandle = so(zn.bind(null, e, lt, Gt), t);
                        break
                    }
                    zn(e, lt, Gt);
                    break;
                case 4:
                    if (fn(e, o),
                    (o & 4194240) === o)
                        break;
                    for (t = e.eventTimes,
                    u = -1; 0 < o; ) {
                        var y = 31 - Ct(o);
                        d = 1 << y,
                        y = t[y],
                        y > u && (u = y),
                        o &= ~d
                    }
                    if (o = u,
                    o = Ae() - o,
                    o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * N0(o / 1960)) - o,
                    10 < o) {
                        e.timeoutHandle = so(zn.bind(null, e, lt, Gt), o);
                        break
                    }
                    zn(e, lt, Gt);
                    break;
                case 5:
                    zn(e, lt, Gt);
                    break;
                default:
                    throw Error(i(329))
                }
            }
        }
        return ct(e, Ae()),
        e.callbackNode === s ? om.bind(null, e) : null
    }
    function Zo(e, t) {
        var s = ms;
        return e.current.memoizedState.isDehydrated && (Fn(e, t).flags |= 256),
        e = Ai(e, t),
        e !== 2 && (t = lt,
        lt = s,
        t !== null && el(t)),
        e
    }
    function el(e) {
        lt === null ? lt = e : lt.push.apply(lt, e)
    }
    function S0(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var s = t.updateQueue;
                if (s !== null && (s = s.stores,
                s !== null))
                    for (var o = 0; o < s.length; o++) {
                        var u = s[o]
                          , d = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!Pt(d(), u))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (s = t.child,
            t.subtreeFlags & 16384 && s !== null)
                s.return = t,
                t = s;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function fn(e, t) {
        for (t &= ~Qo,
        t &= ~Ci,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var s = 31 - Ct(t)
              , o = 1 << s;
            e[s] = -1,
            t &= ~o
        }
    }
    function lm(e) {
        if ((de & 6) !== 0)
            throw Error(i(327));
        wr();
        var t = zs(e, 0);
        if ((t & 1) === 0)
            return ct(e, Ae()),
            null;
        var s = Ai(e, t);
        if (e.tag !== 0 && s === 2) {
            var o = Da(e);
            o !== 0 && (t = o,
            s = Zo(e, o))
        }
        if (s === 1)
            throw s = ds,
            Fn(e, 0),
            fn(e, t),
            ct(e, Ae()),
            s;
        if (s === 6)
            throw Error(i(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        zn(e, lt, Gt),
        ct(e, Ae()),
        null
    }
    function tl(e, t) {
        var s = de;
        de |= 1;
        try {
            return e(t)
        } finally {
            de = s,
            de === 0 && (vr = Ae() + 500,
            ii && on())
        }
    }
    function _n(e) {
        mn !== null && mn.tag === 0 && (de & 6) === 0 && wr();
        var t = de;
        de |= 1;
        var s = bt.transition
          , o = xe;
        try {
            if (bt.transition = null,
            xe = 1,
            e)
                return e()
        } finally {
            xe = o,
            bt.transition = s,
            de = t,
            (de & 6) === 0 && on()
        }
    }
    function nl() {
        pt = xr.current,
        ke(xr)
    }
    function Fn(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var s = e.timeoutHandle;
        if (s !== -1 && (e.timeoutHandle = -1,
        t0(s)),
        Oe !== null)
            for (s = Oe.return; s !== null; ) {
                var o = s;
                switch (uo(o),
                o.tag) {
                case 1:
                    o = o.type.childContextTypes,
                    o != null && ri();
                    break;
                case 3:
                    pr(),
                    ke(it),
                    ke(qe),
                    No();
                    break;
                case 5:
                    bo(o);
                    break;
                case 4:
                    pr();
                    break;
                case 13:
                    ke(Pe);
                    break;
                case 19:
                    ke(Pe);
                    break;
                case 10:
                    yo(o.type._context);
                    break;
                case 22:
                case 23:
                    nl()
                }
                s = s.return
            }
        if (We = e,
        Oe = e = pn(e.current, null),
        Ke = pt = t,
        ze = 0,
        ds = null,
        Qo = Ci = Vn = 0,
        lt = ms = null,
        In !== null) {
            for (t = 0; t < In.length; t++)
                if (s = In[t],
                o = s.interleaved,
                o !== null) {
                    s.interleaved = null;
                    var u = o.next
                      , d = s.pending;
                    if (d !== null) {
                        var y = d.next;
                        d.next = u,
                        o.next = y
                    }
                    s.pending = o
                }
            In = null
        }
        return e
    }
    function cm(e, t) {
        do {
            var s = Oe;
            try {
                if (go(),
                pi.current = vi,
                gi) {
                    for (var o = Te.memoizedState; o !== null; ) {
                        var u = o.queue;
                        u !== null && (u.pending = null),
                        o = o.next
                    }
                    gi = !1
                }
                if (On = 0,
                Ue = Fe = Te = null,
                is = !1,
                as = 0,
                qo.current = null,
                s === null || s.return === null) {
                    ze = 1,
                    ds = t,
                    Oe = null;
                    break
                }
                e: {
                    var d = e
                      , y = s.return
                      , w = s
                      , b = t;
                    if (t = Ke,
                    w.flags |= 32768,
                    b !== null && typeof b == "object" && typeof b.then == "function") {
                        var D = b
                          , _ = w
                          , F = _.tag;
                        if ((_.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
                            var V = _.alternate;
                            V ? (_.updateQueue = V.updateQueue,
                            _.memoizedState = V.memoizedState,
                            _.lanes = V.lanes) : (_.updateQueue = null,
                            _.memoizedState = null)
                        }
                        var H = Id(y);
                        if (H !== null) {
                            H.flags &= -257,
                            Ld(H, y, w, d, t),
                            H.mode & 1 && Rd(d, D, t),
                            t = H,
                            b = D;
                            var K = t.updateQueue;
                            if (K === null) {
                                var q = new Set;
                                q.add(b),
                                t.updateQueue = q
                            } else
                                K.add(b);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                Rd(d, D, t),
                                rl();
                                break e
                            }
                            b = Error(i(426))
                        }
                    } else if (Se && w.mode & 1) {
                        var Re = Id(y);
                        if (Re !== null) {
                            (Re.flags & 65536) === 0 && (Re.flags |= 256),
                            Ld(Re, y, w, d, t),
                            fo(gr(b, w));
                            break e
                        }
                    }
                    d = b = gr(b, w),
                    ze !== 4 && (ze = 2),
                    ms === null ? ms = [d] : ms.push(d),
                    d = y;
                    do {
                        switch (d.tag) {
                        case 3:
                            d.flags |= 65536,
                            t &= -t,
                            d.lanes |= t;
                            var T = Dd(d, b, t);
                            sd(d, T);
                            break e;
                        case 1:
                            w = b;
                            var S = d.type
                              , E = d.stateNode;
                            if ((d.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (dn === null || !dn.has(E)))) {
                                d.flags |= 65536,
                                t &= -t,
                                d.lanes |= t;
                                var B = Ad(d, w, t);
                                sd(d, B);
                                break e
                            }
                        }
                        d = d.return
                    } while (d !== null)
                }
                mm(s)
            } catch (Q) {
                t = Q,
                Oe === s && s !== null && (Oe = s = s.return);
                continue
            }
            break
        } while (!0)
    }
    function um() {
        var e = Si.current;
        return Si.current = vi,
        e === null ? vi : e
    }
    function rl() {
        (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
        We === null || (Vn & 268435455) === 0 && (Ci & 268435455) === 0 || fn(We, Ke)
    }
    function Ai(e, t) {
        var s = de;
        de |= 2;
        var o = um();
        (We !== e || Ke !== t) && (Gt = null,
        Fn(e, t));
        do
            try {
                C0();
                break
            } catch (u) {
                cm(e, u)
            }
        while (!0);
        if (go(),
        de = s,
        Si.current = o,
        Oe !== null)
            throw Error(i(261));
        return We = null,
        Ke = 0,
        ze
    }
    function C0() {
        for (; Oe !== null; )
            dm(Oe)
    }
    function P0() {
        for (; Oe !== null && !Jp(); )
            dm(Oe)
    }
    function dm(e) {
        var t = pm(e.alternate, e, pt);
        e.memoizedProps = e.pendingProps,
        t === null ? mm(e) : Oe = t,
        qo.current = null
    }
    function mm(e) {
        var t = e;
        do {
            var s = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (s = v0(s, t, pt),
                s !== null) {
                    Oe = s;
                    return
                }
            } else {
                if (s = w0(s, t),
                s !== null) {
                    s.flags &= 32767,
                    Oe = s;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    ze = 6,
                    Oe = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                Oe = t;
                return
            }
            Oe = t = e
        } while (t !== null);
        ze === 0 && (ze = 5)
    }
    function zn(e, t, s) {
        var o = xe
          , u = bt.transition;
        try {
            bt.transition = null,
            xe = 1,
            T0(e, t, s, o)
        } finally {
            bt.transition = u,
            xe = o
        }
        return null
    }
    function T0(e, t, s, o) {
        do
            wr();
        while (mn !== null);
        if ((de & 6) !== 0)
            throw Error(i(327));
        s = e.finishedWork;
        var u = e.finishedLanes;
        if (s === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        s === e.current)
            throw Error(i(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var d = s.lanes | s.childLanes;
        if (lg(e, d),
        e === We && (Oe = We = null,
        Ke = 0),
        (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || Ti || (Ti = !0,
        gm(Os, function() {
            return wr(),
            null
        })),
        d = (s.flags & 15990) !== 0,
        (s.subtreeFlags & 15990) !== 0 || d) {
            d = bt.transition,
            bt.transition = null;
            var y = xe;
            xe = 1;
            var w = de;
            de |= 4,
            qo.current = null,
            b0(e, s),
            nm(s, e),
            qg(no),
            Ws = !!to,
            no = to = null,
            e.current = s,
            k0(s),
            Zp(),
            de = w,
            xe = y,
            bt.transition = d
        } else
            e.current = s;
        if (Ti && (Ti = !1,
        mn = e,
        Ei = u),
        d = e.pendingLanes,
        d === 0 && (dn = null),
        ng(s.stateNode),
        ct(e, Ae()),
        t !== null)
            for (o = e.onRecoverableError,
            s = 0; s < t.length; s++)
                u = t[s],
                o(u.value, {
                    componentStack: u.stack,
                    digest: u.digest
                });
        if (Pi)
            throw Pi = !1,
            e = Xo,
            Xo = null,
            e;
        return (Ei & 1) !== 0 && e.tag !== 0 && wr(),
        d = e.pendingLanes,
        (d & 1) !== 0 ? e === Jo ? hs++ : (hs = 0,
        Jo = e) : hs = 0,
        on(),
        null
    }
    function wr() {
        if (mn !== null) {
            var e = eu(Ei)
              , t = bt.transition
              , s = xe;
            try {
                if (bt.transition = null,
                xe = 16 > e ? 16 : e,
                mn === null)
                    var o = !1;
                else {
                    if (e = mn,
                    mn = null,
                    Ei = 0,
                    (de & 6) !== 0)
                        throw Error(i(331));
                    var u = de;
                    for (de |= 4,
                    G = e.current; G !== null; ) {
                        var d = G
                          , y = d.child;
                        if ((G.flags & 16) !== 0) {
                            var w = d.deletions;
                            if (w !== null) {
                                for (var b = 0; b < w.length; b++) {
                                    var D = w[b];
                                    for (G = D; G !== null; ) {
                                        var _ = G;
                                        switch (_.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            us(8, _, d)
                                        }
                                        var F = _.child;
                                        if (F !== null)
                                            F.return = _,
                                            G = F;
                                        else
                                            for (; G !== null; ) {
                                                _ = G;
                                                var V = _.sibling
                                                  , H = _.return;
                                                if (Xd(_),
                                                _ === D) {
                                                    G = null;
                                                    break
                                                }
                                                if (V !== null) {
                                                    V.return = H,
                                                    G = V;
                                                    break
                                                }
                                                G = H
                                            }
                                    }
                                }
                                var K = d.alternate;
                                if (K !== null) {
                                    var q = K.child;
                                    if (q !== null) {
                                        K.child = null;
                                        do {
                                            var Re = q.sibling;
                                            q.sibling = null,
                                            q = Re
                                        } while (q !== null)
                                    }
                                }
                                G = d
                            }
                        }
                        if ((d.subtreeFlags & 2064) !== 0 && y !== null)
                            y.return = d,
                            G = y;
                        else
                            e: for (; G !== null; ) {
                                if (d = G,
                                (d.flags & 2048) !== 0)
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        us(9, d, d.return)
                                    }
                                var T = d.sibling;
                                if (T !== null) {
                                    T.return = d.return,
                                    G = T;
                                    break e
                                }
                                G = d.return
                            }
                    }
                    var S = e.current;
                    for (G = S; G !== null; ) {
                        y = G;
                        var E = y.child;
                        if ((y.subtreeFlags & 2064) !== 0 && E !== null)
                            E.return = y,
                            G = E;
                        else
                            e: for (y = S; G !== null; ) {
                                if (w = G,
                                (w.flags & 2048) !== 0)
                                    try {
                                        switch (w.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ni(9, w)
                                        }
                                    } catch (Q) {
                                        De(w, w.return, Q)
                                    }
                                if (w === y) {
                                    G = null;
                                    break e
                                }
                                var B = w.sibling;
                                if (B !== null) {
                                    B.return = w.return,
                                    G = B;
                                    break e
                                }
                                G = w.return
                            }
                    }
                    if (de = u,
                    on(),
                    Rt && typeof Rt.onPostCommitFiberRoot == "function")
                        try {
                            Rt.onPostCommitFiberRoot(Vs, e)
                        } catch {}
                    o = !0
                }
                return o
            } finally {
                xe = s,
                bt.transition = t
            }
        }
        return !1
    }
    function hm(e, t, s) {
        t = gr(s, t),
        t = Dd(e, t, 1),
        e = cn(e, t, 1),
        t = tt(),
        e !== null && (Vr(e, 1, t),
        ct(e, t))
    }
    function De(e, t, s) {
        if (e.tag === 3)
            hm(e, e, s);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    hm(t, e, s);
                    break
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (dn === null || !dn.has(o))) {
                        e = gr(s, e),
                        e = Ad(t, e, 1),
                        t = cn(t, e, 1),
                        e = tt(),
                        t !== null && (Vr(t, 1, e),
                        ct(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function E0(e, t, s) {
        var o = e.pingCache;
        o !== null && o.delete(t),
        t = tt(),
        e.pingedLanes |= e.suspendedLanes & s,
        We === e && (Ke & s) === s && (ze === 4 || ze === 3 && (Ke & 130023424) === Ke && 500 > Ae() - Yo ? Fn(e, 0) : Qo |= s),
        ct(e, t)
    }
    function fm(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Fs,
        Fs <<= 1,
        (Fs & 130023424) === 0 && (Fs = 4194304)));
        var s = tt();
        e = Wt(e, t),
        e !== null && (Vr(e, t, s),
        ct(e, s))
    }
    function M0(e) {
        var t = e.memoizedState
          , s = 0;
        t !== null && (s = t.retryLane),
        fm(e, s)
    }
    function D0(e, t) {
        var s = 0;
        switch (e.tag) {
        case 13:
            var o = e.stateNode
              , u = e.memoizedState;
            u !== null && (s = u.retryLane);
            break;
        case 19:
            o = e.stateNode;
            break;
        default:
            throw Error(i(314))
        }
        o !== null && o.delete(t),
        fm(e, s)
    }
    var pm;
    pm = function(e, t, s) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || it.current)
                ot = !0;
            else {
                if ((e.lanes & s) === 0 && (t.flags & 128) === 0)
                    return ot = !1,
                    x0(e, t, s);
                ot = (e.flags & 131072) !== 0
            }
        else
            ot = !1,
            Se && (t.flags & 1048576) !== 0 && qu(t, oi, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var o = t.type;
            bi(e, t),
            e = t.pendingProps;
            var u = lr(t, qe.current);
            fr(t, s),
            u = Po(null, t, o, e, u, s);
            var d = To();
            return t.flags |= 1,
            typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            at(o) ? (d = !0,
            si(t)) : d = !1,
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            wo(t),
            u.updater = wi,
            t.stateNode = u,
            u._reactInternals = t,
            Io(t, o, e, s),
            t = _o(null, t, o, !0, d, s)) : (t.tag = 0,
            Se && d && co(t),
            et(null, t, u, s),
            t = t.child),
            t;
        case 16:
            o = t.elementType;
            e: {
                switch (bi(e, t),
                e = t.pendingProps,
                u = o._init,
                o = u(o._payload),
                t.type = o,
                u = t.tag = R0(o),
                e = Et(o, e),
                u) {
                case 0:
                    t = Vo(null, t, o, e, s);
                    break e;
                case 1:
                    t = Bd(null, t, o, e, s);
                    break e;
                case 11:
                    t = Od(null, t, o, e, s);
                    break e;
                case 14:
                    t = Vd(null, t, o, Et(o.type, e), s);
                    break e
                }
                throw Error(i(306, o, ""))
            }
            return t;
        case 0:
            return o = t.type,
            u = t.pendingProps,
            u = t.elementType === o ? u : Et(o, u),
            Vo(e, t, o, u, s);
        case 1:
            return o = t.type,
            u = t.pendingProps,
            u = t.elementType === o ? u : Et(o, u),
            Bd(e, t, o, u, s);
        case 3:
            e: {
                if (Ud(t),
                e === null)
                    throw Error(i(387));
                o = t.pendingProps,
                d = t.memoizedState,
                u = d.element,
                rd(e, t),
                hi(t, o, null, s);
                var y = t.memoizedState;
                if (o = y.element,
                d.isDehydrated)
                    if (d = {
                        element: o,
                        isDehydrated: !1,
                        cache: y.cache,
                        pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                        transitions: y.transitions
                    },
                    t.updateQueue.baseState = d,
                    t.memoizedState = d,
                    t.flags & 256) {
                        u = gr(Error(i(423)), t),
                        t = Wd(e, t, o, s, u);
                        break e
                    } else if (o !== u) {
                        u = gr(Error(i(424)), t),
                        t = Wd(e, t, o, s, u);
                        break e
                    } else
                        for (ft = rn(t.stateNode.containerInfo.firstChild),
                        ht = t,
                        Se = !0,
                        Tt = null,
                        s = td(t, null, o, s),
                        t.child = s; s; )
                            s.flags = s.flags & -3 | 4096,
                            s = s.sibling;
                else {
                    if (dr(),
                    o === u) {
                        t = $t(e, t, s);
                        break e
                    }
                    et(e, t, o, s)
                }
                t = t.child
            }
            return t;
        case 5:
            return ad(t),
            e === null && ho(t),
            o = t.type,
            u = t.pendingProps,
            d = e !== null ? e.memoizedProps : null,
            y = u.children,
            ro(o, u) ? y = null : d !== null && ro(o, d) && (t.flags |= 32),
            zd(e, t),
            et(e, t, y, s),
            t.child;
        case 6:
            return e === null && ho(t),
            null;
        case 13:
            return Hd(e, t, s);
        case 4:
            return jo(t, t.stateNode.containerInfo),
            o = t.pendingProps,
            e === null ? t.child = mr(t, null, o, s) : et(e, t, o, s),
            t.child;
        case 11:
            return o = t.type,
            u = t.pendingProps,
            u = t.elementType === o ? u : Et(o, u),
            Od(e, t, o, u, s);
        case 7:
            return et(e, t, t.pendingProps, s),
            t.child;
        case 8:
            return et(e, t, t.pendingProps.children, s),
            t.child;
        case 12:
            return et(e, t, t.pendingProps.children, s),
            t.child;
        case 10:
            e: {
                if (o = t.type._context,
                u = t.pendingProps,
                d = t.memoizedProps,
                y = u.value,
                je(ui, o._currentValue),
                o._currentValue = y,
                d !== null)
                    if (Pt(d.value, y)) {
                        if (d.children === u.children && !it.current) {
                            t = $t(e, t, s);
                            break e
                        }
                    } else
                        for (d = t.child,
                        d !== null && (d.return = t); d !== null; ) {
                            var w = d.dependencies;
                            if (w !== null) {
                                y = d.child;
                                for (var b = w.firstContext; b !== null; ) {
                                    if (b.context === o) {
                                        if (d.tag === 1) {
                                            b = Ht(-1, s & -s),
                                            b.tag = 2;
                                            var D = d.updateQueue;
                                            if (D !== null) {
                                                D = D.shared;
                                                var _ = D.pending;
                                                _ === null ? b.next = b : (b.next = _.next,
                                                _.next = b),
                                                D.pending = b
                                            }
                                        }
                                        d.lanes |= s,
                                        b = d.alternate,
                                        b !== null && (b.lanes |= s),
                                        xo(d.return, s, t),
                                        w.lanes |= s;
                                        break
                                    }
                                    b = b.next
                                }
                            } else if (d.tag === 10)
                                y = d.type === t.type ? null : d.child;
                            else if (d.tag === 18) {
                                if (y = d.return,
                                y === null)
                                    throw Error(i(341));
                                y.lanes |= s,
                                w = y.alternate,
                                w !== null && (w.lanes |= s),
                                xo(y, s, t),
                                y = d.sibling
                            } else
                                y = d.child;
                            if (y !== null)
                                y.return = d;
                            else
                                for (y = d; y !== null; ) {
                                    if (y === t) {
                                        y = null;
                                        break
                                    }
                                    if (d = y.sibling,
                                    d !== null) {
                                        d.return = y.return,
                                        y = d;
                                        break
                                    }
                                    y = y.return
                                }
                            d = y
                        }
                et(e, t, u.children, s),
                t = t.child
            }
            return t;
        case 9:
            return u = t.type,
            o = t.pendingProps.children,
            fr(t, s),
            u = wt(u),
            o = o(u),
            t.flags |= 1,
            et(e, t, o, s),
            t.child;
        case 14:
            return o = t.type,
            u = Et(o, t.pendingProps),
            u = Et(o.type, u),
            Vd(e, t, o, u, s);
        case 15:
            return _d(e, t, t.type, t.pendingProps, s);
        case 17:
            return o = t.type,
            u = t.pendingProps,
            u = t.elementType === o ? u : Et(o, u),
            bi(e, t),
            t.tag = 1,
            at(o) ? (e = !0,
            si(t)) : e = !1,
            fr(t, s),
            Ed(t, o, u),
            Io(t, o, u, s),
            _o(null, t, o, !0, e, s);
        case 19:
            return Gd(e, t, s);
        case 22:
            return Fd(e, t, s)
        }
        throw Error(i(156, t.tag))
    }
    ;
    function gm(e, t) {
        return Qc(e, t)
    }
    function A0(e, t, s, o) {
        this.tag = e,
        this.key = s,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = o,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function kt(e, t, s, o) {
        return new A0(e,t,s,o)
    }
    function sl(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function R0(e) {
        if (typeof e == "function")
            return sl(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === Me)
                return 11;
            if (e === $e)
                return 14
        }
        return 2
    }
    function pn(e, t) {
        var s = e.alternate;
        return s === null ? (s = kt(e.tag, t, e.key, e.mode),
        s.elementType = e.elementType,
        s.type = e.type,
        s.stateNode = e.stateNode,
        s.alternate = e,
        e.alternate = s) : (s.pendingProps = t,
        s.type = e.type,
        s.flags = 0,
        s.subtreeFlags = 0,
        s.deletions = null),
        s.flags = e.flags & 14680064,
        s.childLanes = e.childLanes,
        s.lanes = e.lanes,
        s.child = e.child,
        s.memoizedProps = e.memoizedProps,
        s.memoizedState = e.memoizedState,
        s.updateQueue = e.updateQueue,
        t = e.dependencies,
        s.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        s.sibling = e.sibling,
        s.index = e.index,
        s.ref = e.ref,
        s
    }
    function Ri(e, t, s, o, u, d) {
        var y = 2;
        if (o = e,
        typeof e == "function")
            sl(e) && (y = 1);
        else if (typeof e == "string")
            y = 5;
        else
            e: switch (e) {
            case ae:
                return Bn(s.children, u, d, t);
            case re:
                y = 8,
                u |= 8;
                break;
            case fe:
                return e = kt(12, s, t, u | 2),
                e.elementType = fe,
                e.lanes = d,
                e;
            case Ce:
                return e = kt(13, s, t, u),
                e.elementType = Ce,
                e.lanes = d,
                e;
            case we:
                return e = kt(19, s, t, u),
                e.elementType = we,
                e.lanes = d,
                e;
            case pe:
                return Ii(s, u, d, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case _e:
                        y = 10;
                        break e;
                    case st:
                        y = 9;
                        break e;
                    case Me:
                        y = 11;
                        break e;
                    case $e:
                        y = 14;
                        break e;
                    case me:
                        y = 16,
                        o = null;
                        break e
                    }
                throw Error(i(130, e == null ? e : typeof e, ""))
            }
        return t = kt(y, s, t, u),
        t.elementType = e,
        t.type = o,
        t.lanes = d,
        t
    }
    function Bn(e, t, s, o) {
        return e = kt(7, e, o, t),
        e.lanes = s,
        e
    }
    function Ii(e, t, s, o) {
        return e = kt(22, e, o, t),
        e.elementType = pe,
        e.lanes = s,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function il(e, t, s) {
        return e = kt(6, e, null, t),
        e.lanes = s,
        e
    }
    function al(e, t, s) {
        return t = kt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = s,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function I0(e, t, s, o, u) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Aa(0),
        this.expirationTimes = Aa(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Aa(0),
        this.identifierPrefix = o,
        this.onRecoverableError = u,
        this.mutableSourceEagerHydrationData = null
    }
    function ol(e, t, s, o, u, d, y, w, b) {
        return e = new I0(e,t,s,w,b),
        t === 1 ? (t = 1,
        d === !0 && (t |= 8)) : t = 0,
        d = kt(3, null, null, t),
        e.current = d,
        d.stateNode = e,
        d.memoizedState = {
            element: o,
            isDehydrated: s,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        wo(d),
        e
    }
    function L0(e, t, s) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: se,
            key: o == null ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: s
        }
    }
    function ym(e) {
        if (!e)
            return an;
        e = e._reactInternals;
        e: {
            if (En(e) !== e || e.tag !== 1)
                throw Error(i(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (at(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(i(171))
        }
        if (e.tag === 1) {
            var s = e.type;
            if (at(s))
                return $u(e, s, t)
        }
        return t
    }
    function xm(e, t, s, o, u, d, y, w, b) {
        return e = ol(s, o, !0, e, u, d, y, w, b),
        e.context = ym(null),
        s = e.current,
        o = tt(),
        u = hn(s),
        d = Ht(o, u),
        d.callback = t ?? null,
        cn(s, d, u),
        e.current.lanes = u,
        Vr(e, u, o),
        ct(e, o),
        e
    }
    function Li(e, t, s, o) {
        var u = t.current
          , d = tt()
          , y = hn(u);
        return s = ym(s),
        t.context === null ? t.context = s : t.pendingContext = s,
        t = Ht(d, y),
        t.payload = {
            element: e
        },
        o = o === void 0 ? null : o,
        o !== null && (t.callback = o),
        e = cn(u, t, y),
        e !== null && (At(e, u, y, d),
        mi(e, u, y)),
        y
    }
    function Oi(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function vm(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var s = e.retryLane;
            e.retryLane = s !== 0 && s < t ? s : t
        }
    }
    function ll(e, t) {
        vm(e, t),
        (e = e.alternate) && vm(e, t)
    }
    function O0() {
        return null
    }
    var wm = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function cl(e) {
        this._internalRoot = e
    }
    Vi.prototype.render = cl.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(i(409));
        Li(e, t, null, null)
    }
    ,
    Vi.prototype.unmount = cl.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            _n(function() {
                Li(null, e, null, null)
            }),
            t[Ft] = null
        }
    }
    ;
    function Vi(e) {
        this._internalRoot = e
    }
    Vi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ru();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var s = 0; s < en.length && t !== 0 && t < en[s].priority; s++)
                ;
            en.splice(s, 0, e),
            s === 0 && au(e)
        }
    }
    ;
    function ul(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function _i(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function jm() {}
    function V0(e, t, s, o, u) {
        if (u) {
            if (typeof o == "function") {
                var d = o;
                o = function() {
                    var D = Oi(y);
                    d.call(D)
                }
            }
            var y = xm(t, o, e, 0, null, !1, !1, "", jm);
            return e._reactRootContainer = y,
            e[Ft] = y.current,
            Xr(e.nodeType === 8 ? e.parentNode : e),
            _n(),
            y
        }
        for (; u = e.lastChild; )
            e.removeChild(u);
        if (typeof o == "function") {
            var w = o;
            o = function() {
                var D = Oi(b);
                w.call(D)
            }
        }
        var b = ol(e, 0, !1, null, null, !1, !1, "", jm);
        return e._reactRootContainer = b,
        e[Ft] = b.current,
        Xr(e.nodeType === 8 ? e.parentNode : e),
        _n(function() {
            Li(t, b, s, o)
        }),
        b
    }
    function Fi(e, t, s, o, u) {
        var d = s._reactRootContainer;
        if (d) {
            var y = d;
            if (typeof u == "function") {
                var w = u;
                u = function() {
                    var b = Oi(y);
                    w.call(b)
                }
            }
            Li(t, y, e, u)
        } else
            y = V0(s, t, e, u, o);
        return Oi(y)
    }
    tu = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var s = Or(t.pendingLanes);
                s !== 0 && (Ra(t, s | 1),
                ct(t, Ae()),
                (de & 6) === 0 && (vr = Ae() + 500,
                on()))
            }
            break;
        case 13:
            _n(function() {
                var o = Wt(e, 1);
                if (o !== null) {
                    var u = tt();
                    At(o, e, 1, u)
                }
            }),
            ll(e, 1)
        }
    }
    ,
    Ia = function(e) {
        if (e.tag === 13) {
            var t = Wt(e, 134217728);
            if (t !== null) {
                var s = tt();
                At(t, e, 134217728, s)
            }
            ll(e, 134217728)
        }
    }
    ,
    nu = function(e) {
        if (e.tag === 13) {
            var t = hn(e)
              , s = Wt(e, t);
            if (s !== null) {
                var o = tt();
                At(s, e, t, o)
            }
            ll(e, t)
        }
    }
    ,
    ru = function() {
        return xe
    }
    ,
    su = function(e, t) {
        var s = xe;
        try {
            return xe = e,
            t()
        } finally {
            xe = s
        }
    }
    ,
    Ca = function(e, t, s) {
        switch (t) {
        case "input":
            if (xa(e, s),
            t = s.name,
            s.type === "radio" && t != null) {
                for (s = e; s.parentNode; )
                    s = s.parentNode;
                for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < s.length; t++) {
                    var o = s[t];
                    if (o !== e && o.form === e.form) {
                        var u = ni(o);
                        if (!u)
                            throw Error(i(90));
                        ga(o),
                        xa(o, u)
                    }
                }
            }
            break;
        case "textarea":
            Rc(e, s);
            break;
        case "select":
            t = s.value,
            t != null && Yn(e, !!s.multiple, t, !1)
        }
    }
    ,
    Uc = tl,
    Wc = _n;
    var _0 = {
        usingClientEntryPoint: !1,
        Events: [es, ar, ni, zc, Bc, tl]
    }
      , fs = {
        findFiberByHostInstance: Mn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , F0 = {
        bundleType: fs.bundleType,
        version: fs.version,
        rendererPackageName: fs.rendererPackageName,
        rendererConfig: fs.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: L.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Kc(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: fs.findFiberByHostInstance || O0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!zi.isDisabled && zi.supportsFiber)
            try {
                Vs = zi.inject(F0),
                Rt = zi
            } catch {}
    }
    return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0,
    ut.createPortal = function(e, t) {
        var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ul(t))
            throw Error(i(200));
        return L0(e, t, null, s)
    }
    ,
    ut.createRoot = function(e, t) {
        if (!ul(e))
            throw Error(i(299));
        var s = !1
          , o = ""
          , u = wm;
        return t != null && (t.unstable_strictMode === !0 && (s = !0),
        t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        t = ol(e, 1, !1, null, null, s, !1, o, u),
        e[Ft] = t.current,
        Xr(e.nodeType === 8 ? e.parentNode : e),
        new cl(t)
    }
    ,
    ut.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","),
            Error(i(268, e)));
        return e = Kc(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    ut.flushSync = function(e) {
        return _n(e)
    }
    ,
    ut.hydrate = function(e, t, s) {
        if (!_i(t))
            throw Error(i(200));
        return Fi(null, e, t, !0, s)
    }
    ,
    ut.hydrateRoot = function(e, t, s) {
        if (!ul(e))
            throw Error(i(405));
        var o = s != null && s.hydratedSources || null
          , u = !1
          , d = ""
          , y = wm;
        if (s != null && (s.unstable_strictMode === !0 && (u = !0),
        s.identifierPrefix !== void 0 && (d = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (y = s.onRecoverableError)),
        t = xm(t, null, e, 1, s ?? null, u, !1, d, y),
        e[Ft] = t.current,
        Xr(e),
        o)
            for (e = 0; e < o.length; e++)
                s = o[e],
                u = s._getVersion,
                u = u(s._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [s, u] : t.mutableSourceEagerHydrationData.push(s, u);
        return new Vi(t)
    }
    ,
    ut.render = function(e, t, s) {
        if (!_i(t))
            throw Error(i(200));
        return Fi(null, e, t, !1, s)
    }
    ,
    ut.unmountComponentAtNode = function(e) {
        if (!_i(e))
            throw Error(i(40));
        return e._reactRootContainer ? (_n(function() {
            Fi(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[Ft] = null
            })
        }),
        !0) : !1
    }
    ,
    ut.unstable_batchedUpdates = tl,
    ut.unstable_renderSubtreeIntoContainer = function(e, t, s, o) {
        if (!_i(s))
            throw Error(i(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(i(38));
        return Fi(e, t, s, !1, o)
    }
    ,
    ut.version = "18.3.1-next-f1338f8080-20240426",
    ut
}
var Em;
function qh() {
    if (Em)
        return hl.exports;
    Em = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
    hl.exports = Q0(),
    hl.exports
}
var Mm;
function Y0() {
    if (Mm)
        return Bi;
    Mm = 1;
    var n = qh();
    return Bi.createRoot = n.createRoot,
    Bi.hydrateRoot = n.hydrateRoot,
    Bi
}
var X0 = Y0();
qh();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ks() {
    return ks = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l])
        }
        return n
    }
    ,
    ks.apply(this, arguments)
}
var wn;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(wn || (wn = {}));
const Dm = "popstate";
function J0(n) {
    n === void 0 && (n = {});
    function r(l, c) {
        let {pathname: m, search: h, hash: f} = l.location;
        return Tl("", {
            pathname: m,
            search: h,
            hash: f
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function i(l, c) {
        return typeof c == "string" ? c : qi(c)
    }
    return ey(r, i, null, n)
}
function Le(n, r) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(r)
}
function Qh(n, r) {
    if (!n) {
        typeof console < "u" && console.warn(r);
        try {
            throw new Error(r)
        } catch {}
    }
}
function Z0() {
    return Math.random().toString(36).substr(2, 8)
}
function Am(n, r) {
    return {
        usr: n.state,
        key: n.key,
        idx: r
    }
}
function Tl(n, r, i, l) {
    return i === void 0 && (i = null),
    ks({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof r == "string" ? Pr(r) : r, {
        state: i,
        key: r && r.key || l || Z0()
    })
}
function qi(n) {
    let {pathname: r="/", search: i="", hash: l=""} = n;
    return i && i !== "?" && (r += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (r += l.charAt(0) === "#" ? l : "#" + l),
    r
}
function Pr(n) {
    let r = {};
    if (n) {
        let i = n.indexOf("#");
        i >= 0 && (r.hash = n.substr(i),
        n = n.substr(0, i));
        let l = n.indexOf("?");
        l >= 0 && (r.search = n.substr(l),
        n = n.substr(0, l)),
        n && (r.pathname = n)
    }
    return r
}
function ey(n, r, i, l) {
    l === void 0 && (l = {});
    let {window: c=document.defaultView, v5Compat: m=!1} = l
      , h = c.history
      , f = wn.Pop
      , p = null
      , g = v();
    g == null && (g = 0,
    h.replaceState(ks({}, h.state, {
        idx: g
    }), ""));
    function v() {
        return (h.state || {
            idx: null
        }).idx
    }
    function x() {
        f = wn.Pop;
        let A = v()
          , I = A == null ? null : A - g;
        g = A,
        p && p({
            action: f,
            location: P.location,
            delta: I
        })
    }
    function j(A, I) {
        f = wn.Push;
        let z = Tl(P.location, A, I);
        g = v() + 1;
        let R = Am(z, g)
          , L = P.createHref(z);
        try {
            h.pushState(R, "", L)
        } catch (W) {
            if (W instanceof DOMException && W.name === "DataCloneError")
                throw W;
            c.location.assign(L)
        }
        m && p && p({
            action: f,
            location: P.location,
            delta: 1
        })
    }
    function k(A, I) {
        f = wn.Replace;
        let z = Tl(P.location, A, I);
        g = v();
        let R = Am(z, g)
          , L = P.createHref(z);
        h.replaceState(R, "", L),
        m && p && p({
            action: f,
            location: P.location,
            delta: 0
        })
    }
    function M(A) {
        let I = c.location.origin !== "null" ? c.location.origin : c.location.href
          , z = typeof A == "string" ? A : qi(A);
        return z = z.replace(/ $/, "%20"),
        Le(I, "No window.location.(origin|href) available to create URL for href: " + z),
        new URL(z,I)
    }
    let P = {
        get action() {
            return f
        },
        get location() {
            return n(c, h)
        },
        listen(A) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Dm, x),
            p = A,
            () => {
                c.removeEventListener(Dm, x),
                p = null
            }
        },
        createHref(A) {
            return r(c, A)
        },
        createURL: M,
        encodeLocation(A) {
            let I = M(A);
            return {
                pathname: I.pathname,
                search: I.search,
                hash: I.hash
            }
        },
        push: j,
        replace: k,
        go(A) {
            return h.go(A)
        }
    };
    return P
}
var Rm;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(Rm || (Rm = {}));
function ty(n, r, i) {
    return i === void 0 && (i = "/"),
    ny(n, r, i)
}
function ny(n, r, i, l) {
    let c = typeof r == "string" ? Pr(r) : r
      , m = Xl(c.pathname || "/", i);
    if (m == null)
        return null;
    let h = Yh(n);
    ry(h);
    let f = null;
    for (let p = 0; f == null && p < h.length; ++p) {
        let g = py(m);
        f = my(h[p], g)
    }
    return f
}
function Yh(n, r, i, l) {
    r === void 0 && (r = []),
    i === void 0 && (i = []),
    l === void 0 && (l = "");
    let c = (m, h, f) => {
        let p = {
            relativePath: f === void 0 ? m.path || "" : f,
            caseSensitive: m.caseSensitive === !0,
            childrenIndex: h,
            route: m
        };
        p.relativePath.startsWith("/") && (Le(p.relativePath.startsWith(l), 'Absolute route path "' + p.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        p.relativePath = p.relativePath.slice(l.length));
        let g = jn([l, p.relativePath])
          , v = i.concat(p);
        m.children && m.children.length > 0 && (Le(m.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        Yh(m.children, r, v, g)),
        !(m.path == null && !m.index) && r.push({
            path: g,
            score: uy(g, m.index),
            routesMeta: v
        })
    }
    ;
    return n.forEach( (m, h) => {
        var f;
        if (m.path === "" || !((f = m.path) != null && f.includes("?")))
            c(m, h);
        else
            for (let p of Xh(m.path))
                c(m, h, p)
    }
    ),
    r
}
function Xh(n) {
    let r = n.split("/");
    if (r.length === 0)
        return [];
    let[i,...l] = r
      , c = i.endsWith("?")
      , m = i.replace(/\?$/, "");
    if (l.length === 0)
        return c ? [m, ""] : [m];
    let h = Xh(l.join("/"))
      , f = [];
    return f.push(...h.map(p => p === "" ? m : [m, p].join("/"))),
    c && f.push(...h),
    f.map(p => n.startsWith("/") && p === "" ? "/" : p)
}
function ry(n) {
    n.sort( (r, i) => r.score !== i.score ? i.score - r.score : dy(r.routesMeta.map(l => l.childrenIndex), i.routesMeta.map(l => l.childrenIndex)))
}
const sy = /^:[\w-]+$/
  , iy = 3
  , ay = 2
  , oy = 1
  , ly = 10
  , cy = -2
  , Im = n => n === "*";
function uy(n, r) {
    let i = n.split("/")
      , l = i.length;
    return i.some(Im) && (l += cy),
    r && (l += ay),
    i.filter(c => !Im(c)).reduce( (c, m) => c + (sy.test(m) ? iy : m === "" ? oy : ly), l)
}
function dy(n, r) {
    return n.length === r.length && n.slice(0, -1).every( (l, c) => l === r[c]) ? n[n.length - 1] - r[r.length - 1] : 0
}
function my(n, r, i) {
    let {routesMeta: l} = n
      , c = {}
      , m = "/"
      , h = [];
    for (let f = 0; f < l.length; ++f) {
        let p = l[f]
          , g = f === l.length - 1
          , v = m === "/" ? r : r.slice(m.length) || "/"
          , x = hy({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: g
        }, v)
          , j = p.route;
        if (!x)
            return null;
        Object.assign(c, x.params),
        h.push({
            params: c,
            pathname: jn([m, x.pathname]),
            pathnameBase: vy(jn([m, x.pathnameBase])),
            route: j
        }),
        x.pathnameBase !== "/" && (m = jn([m, x.pathnameBase]))
    }
    return h
}
function hy(n, r) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[i,l] = fy(n.path, n.caseSensitive, n.end)
      , c = r.match(i);
    if (!c)
        return null;
    let m = c[0]
      , h = m.replace(/(.)\/+$/, "$1")
      , f = c.slice(1);
    return {
        params: l.reduce( (g, v, x) => {
            let {paramName: j, isOptional: k} = v;
            if (j === "*") {
                let P = f[x] || "";
                h = m.slice(0, m.length - P.length).replace(/(.)\/+$/, "$1")
            }
            const M = f[x];
            return k && !M ? g[j] = void 0 : g[j] = (M || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: m,
        pathnameBase: h,
        pattern: n
    }
}
function fy(n, r, i) {
    r === void 0 && (r = !1),
    i === void 0 && (i = !0),
    Qh(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
    let l = []
      , c = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, f, p) => (l.push({
        paramName: f,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (l.push({
        paramName: "*"
    }),
    c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? c += "\\/*$" : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,r ? void 0 : "i"), l]
}
function py(n) {
    try {
        return n.split("/").map(r => decodeURIComponent(r).replace(/\//g, "%2F")).join("/")
    } catch (r) {
        return Qh(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + r + ").")),
        n
    }
}
function Xl(n, r) {
    if (r === "/")
        return n;
    if (!n.toLowerCase().startsWith(r.toLowerCase()))
        return null;
    let i = r.endsWith("/") ? r.length - 1 : r.length
      , l = n.charAt(i);
    return l && l !== "/" ? null : n.slice(i) || "/"
}
function gy(n, r) {
    r === void 0 && (r = "/");
    let {pathname: i, search: l="", hash: c=""} = typeof n == "string" ? Pr(n) : n;
    return {
        pathname: i ? i.startsWith("/") ? i : yy(i, r) : r,
        search: wy(l),
        hash: jy(c)
    }
}
function yy(n, r) {
    let i = r.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(c => {
        c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c)
    }
    ),
    i.length > 1 ? i.join("/") : "/"
}
function gl(n, r, i, l) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + i + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function xy(n) {
    return n.filter( (r, i) => i === 0 || r.route.path && r.route.path.length > 0)
}
function Jl(n, r) {
    let i = xy(n);
    return r ? i.map( (l, c) => c === i.length - 1 ? l.pathname : l.pathnameBase) : i.map(l => l.pathnameBase)
}
function Zl(n, r, i, l) {
    l === void 0 && (l = !1);
    let c;
    typeof n == "string" ? c = Pr(n) : (c = ks({}, n),
    Le(!c.pathname || !c.pathname.includes("?"), gl("?", "pathname", "search", c)),
    Le(!c.pathname || !c.pathname.includes("#"), gl("#", "pathname", "hash", c)),
    Le(!c.search || !c.search.includes("#"), gl("#", "search", "hash", c)));
    let m = n === "" || c.pathname === "", h = m ? "/" : c.pathname, f;
    if (h == null)
        f = i;
    else {
        let x = r.length - 1;
        if (!l && h.startsWith("..")) {
            let j = h.split("/");
            for (; j[0] === ".."; )
                j.shift(),
                x -= 1;
            c.pathname = j.join("/")
        }
        f = x >= 0 ? r[x] : "/"
    }
    let p = gy(c, f)
      , g = h && h !== "/" && h.endsWith("/")
      , v = (m || h === ".") && i.endsWith("/");
    return !p.pathname.endsWith("/") && (g || v) && (p.pathname += "/"),
    p
}
const jn = n => n.join("/").replace(/\/\/+/g, "/")
  , vy = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , wy = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , jy = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function by(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
const Jh = ["post", "put", "patch", "delete"];
new Set(Jh);
const ky = ["get", ...Jh];
new Set(ky);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ns() {
    return Ns = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l])
        }
        return n
    }
    ,
    Ns.apply(this, arguments)
}
const ec = C.createContext(null)
  , Ny = C.createContext(null)
  , Sn = C.createContext(null)
  , aa = C.createContext(null)
  , Cn = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Zh = C.createContext(null);
function Sy(n, r) {
    let {relative: i} = r === void 0 ? {} : r;
    Tr() || Le(!1);
    let {basename: l, navigator: c} = C.useContext(Sn)
      , {hash: m, pathname: h, search: f} = tf(n, {
        relative: i
    })
      , p = h;
    return l !== "/" && (p = h === "/" ? l : jn([l, h])),
    c.createHref({
        pathname: p,
        search: f,
        hash: m
    })
}
function Tr() {
    return C.useContext(aa) != null
}
function Er() {
    return Tr() || Le(!1),
    C.useContext(aa).location
}
function ef(n) {
    C.useContext(Sn).static || C.useLayoutEffect(n)
}
function Pn() {
    let {isDataRoute: n} = C.useContext(Cn);
    return n ? _y() : Cy()
}
function Cy() {
    Tr() || Le(!1);
    let n = C.useContext(ec)
      , {basename: r, future: i, navigator: l} = C.useContext(Sn)
      , {matches: c} = C.useContext(Cn)
      , {pathname: m} = Er()
      , h = JSON.stringify(Jl(c, i.v7_relativeSplatPath))
      , f = C.useRef(!1);
    return ef( () => {
        f.current = !0
    }
    ),
    C.useCallback(function(g, v) {
        if (v === void 0 && (v = {}),
        !f.current)
            return;
        if (typeof g == "number") {
            l.go(g);
            return
        }
        let x = Zl(g, JSON.parse(h), m, v.relative === "path");
        n == null && r !== "/" && (x.pathname = x.pathname === "/" ? r : jn([r, x.pathname])),
        (v.replace ? l.replace : l.push)(x, v.state, v)
    }, [r, l, h, m, n])
}
function tf(n, r) {
    let {relative: i} = r === void 0 ? {} : r
      , {future: l} = C.useContext(Sn)
      , {matches: c} = C.useContext(Cn)
      , {pathname: m} = Er()
      , h = JSON.stringify(Jl(c, l.v7_relativeSplatPath));
    return C.useMemo( () => Zl(n, JSON.parse(h), m, i === "path"), [n, h, m, i])
}
function Py(n, r) {
    return Ty(n, r)
}
function Ty(n, r, i, l) {
    Tr() || Le(!1);
    let {navigator: c, static: m} = C.useContext(Sn)
      , {matches: h} = C.useContext(Cn)
      , f = h[h.length - 1]
      , p = f ? f.params : {};
    f && f.pathname;
    let g = f ? f.pathnameBase : "/";
    f && f.route;
    let v = Er(), x;
    if (r) {
        var j;
        let I = typeof r == "string" ? Pr(r) : r;
        g === "/" || (j = I.pathname) != null && j.startsWith(g) || Le(!1),
        x = I
    } else
        x = v;
    let k = x.pathname || "/"
      , M = k;
    if (g !== "/") {
        let I = g.replace(/^\//, "").split("/");
        M = "/" + k.replace(/^\//, "").split("/").slice(I.length).join("/")
    }
    let P = ty(n, {
        pathname: M
    })
      , A = Ry(P && P.map(I => Object.assign({}, I, {
        params: Object.assign({}, p, I.params),
        pathname: jn([g, c.encodeLocation ? c.encodeLocation(I.pathname).pathname : I.pathname]),
        pathnameBase: I.pathnameBase === "/" ? g : jn([g, c.encodeLocation ? c.encodeLocation(I.pathnameBase).pathname : I.pathnameBase])
    })), h, i, l);
    return r && A ? C.createElement(aa.Provider, {
        value: {
            location: Ns({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, x),
            navigationType: wn.Pop
        }
    }, A) : A
}
function Ey() {
    let n = Vy()
      , r = by(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n)
      , i = n instanceof Error ? n.stack : null
      , c = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, r), i ? C.createElement("pre", {
        style: c
    }, i) : null, null)
}
const My = C.createElement(Ey, null);
class Dy extends C.Component {
    constructor(r) {
        super(r),
        this.state = {
            location: r.location,
            revalidation: r.revalidation,
            error: r.error
        }
    }
    static getDerivedStateFromError(r) {
        return {
            error: r
        }
    }
    static getDerivedStateFromProps(r, i) {
        return i.location !== r.location || i.revalidation !== "idle" && r.revalidation === "idle" ? {
            error: r.error,
            location: r.location,
            revalidation: r.revalidation
        } : {
            error: r.error !== void 0 ? r.error : i.error,
            location: i.location,
            revalidation: r.revalidation || i.revalidation
        }
    }
    componentDidCatch(r, i) {
        console.error("React Router caught the following error during render", r, i)
    }
    render() {
        return this.state.error !== void 0 ? C.createElement(Cn.Provider, {
            value: this.props.routeContext
        }, C.createElement(Zh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Ay(n) {
    let {routeContext: r, match: i, children: l} = n
      , c = C.useContext(ec);
    return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    C.createElement(Cn.Provider, {
        value: r
    }, l)
}
function Ry(n, r, i, l) {
    var c;
    if (r === void 0 && (r = []),
    i === void 0 && (i = null),
    l === void 0 && (l = null),
    n == null) {
        var m;
        if (!i)
            return null;
        if (i.errors)
            n = i.matches;
        else if ((m = l) != null && m.v7_partialHydration && r.length === 0 && !i.initialized && i.matches.length > 0)
            n = i.matches;
        else
            return null
    }
    let h = n
      , f = (c = i) == null ? void 0 : c.errors;
    if (f != null) {
        let v = h.findIndex(x => x.route.id && (f == null ? void 0 : f[x.route.id]) !== void 0);
        v >= 0 || Le(!1),
        h = h.slice(0, Math.min(h.length, v + 1))
    }
    let p = !1
      , g = -1;
    if (i && l && l.v7_partialHydration)
        for (let v = 0; v < h.length; v++) {
            let x = h[v];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = v),
            x.route.id) {
                let {loaderData: j, errors: k} = i
                  , M = x.route.loader && j[x.route.id] === void 0 && (!k || k[x.route.id] === void 0);
                if (x.route.lazy || M) {
                    p = !0,
                    g >= 0 ? h = h.slice(0, g + 1) : h = [h[0]];
                    break
                }
            }
        }
    return h.reduceRight( (v, x, j) => {
        let k, M = !1, P = null, A = null;
        i && (k = f && x.route.id ? f[x.route.id] : void 0,
        P = x.route.errorElement || My,
        p && (g < 0 && j === 0 ? (Fy("route-fallback"),
        M = !0,
        A = null) : g === j && (M = !0,
        A = x.route.hydrateFallbackElement || null)));
        let I = r.concat(h.slice(0, j + 1))
          , z = () => {
            let R;
            return k ? R = P : M ? R = A : x.route.Component ? R = C.createElement(x.route.Component, null) : x.route.element ? R = x.route.element : R = v,
            C.createElement(Ay, {
                match: x,
                routeContext: {
                    outlet: v,
                    matches: I,
                    isDataRoute: i != null
                },
                children: R
            })
        }
        ;
        return i && (x.route.ErrorBoundary || x.route.errorElement || j === 0) ? C.createElement(Dy, {
            location: i.location,
            revalidation: i.revalidation,
            component: P,
            error: k,
            children: z(),
            routeContext: {
                outlet: null,
                matches: I,
                isDataRoute: !0
            }
        }) : z()
    }
    , null)
}
var nf = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n
}(nf || {})
  , rf = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseLoaderData = "useLoaderData",
    n.UseActionData = "useActionData",
    n.UseRouteError = "useRouteError",
    n.UseNavigation = "useNavigation",
    n.UseRouteLoaderData = "useRouteLoaderData",
    n.UseMatches = "useMatches",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n.UseRouteId = "useRouteId",
    n
}(rf || {});
function Iy(n) {
    let r = C.useContext(ec);
    return r || Le(!1),
    r
}
function Ly(n) {
    let r = C.useContext(Ny);
    return r || Le(!1),
    r
}
function Oy(n) {
    let r = C.useContext(Cn);
    return r || Le(!1),
    r
}
function sf(n) {
    let r = Oy()
      , i = r.matches[r.matches.length - 1];
    return i.route.id || Le(!1),
    i.route.id
}
function Vy() {
    var n;
    let r = C.useContext(Zh)
      , i = Ly()
      , l = sf();
    return r !== void 0 ? r : (n = i.errors) == null ? void 0 : n[l]
}
function _y() {
    let {router: n} = Iy(nf.UseNavigateStable)
      , r = sf(rf.UseNavigateStable)
      , i = C.useRef(!1);
    return ef( () => {
        i.current = !0
    }
    ),
    C.useCallback(function(c, m) {
        m === void 0 && (m = {}),
        i.current && (typeof c == "number" ? n.navigate(c) : n.navigate(c, Ns({
            fromRouteId: r
        }, m)))
    }, [n, r])
}
const Lm = {};
function Fy(n, r, i) {
    Lm[n] || (Lm[n] = !0)
}
function zy(n, r) {
    n == null || n.v7_startTransition,
    n == null || n.v7_relativeSplatPath
}
function By(n) {
    let {to: r, replace: i, state: l, relative: c} = n;
    Tr() || Le(!1);
    let {future: m, static: h} = C.useContext(Sn)
      , {matches: f} = C.useContext(Cn)
      , {pathname: p} = Er()
      , g = Pn()
      , v = Zl(r, Jl(f, m.v7_relativeSplatPath), p, c === "path")
      , x = JSON.stringify(v);
    return C.useEffect( () => g(JSON.parse(x), {
        replace: i,
        state: l,
        relative: c
    }), [g, x, c, i, l]),
    null
}
function Je(n) {
    Le(!1)
}
function Uy(n) {
    let {basename: r="/", children: i=null, location: l, navigationType: c=wn.Pop, navigator: m, static: h=!1, future: f} = n;
    Tr() && Le(!1);
    let p = r.replace(/^\/*/, "/")
      , g = C.useMemo( () => ({
        basename: p,
        navigator: m,
        static: h,
        future: Ns({
            v7_relativeSplatPath: !1
        }, f)
    }), [p, f, m, h]);
    typeof l == "string" && (l = Pr(l));
    let {pathname: v="/", search: x="", hash: j="", state: k=null, key: M="default"} = l
      , P = C.useMemo( () => {
        let A = Xl(v, p);
        return A == null ? null : {
            location: {
                pathname: A,
                search: x,
                hash: j,
                state: k,
                key: M
            },
            navigationType: c
        }
    }
    , [p, v, x, j, k, M, c]);
    return P == null ? null : C.createElement(Sn.Provider, {
        value: g
    }, C.createElement(aa.Provider, {
        children: i,
        value: P
    }))
}
function Wy(n) {
    let {children: r, location: i} = n;
    return Py(El(r), i)
}
new Promise( () => {}
);
function El(n, r) {
    r === void 0 && (r = []);
    let i = [];
    return C.Children.forEach(n, (l, c) => {
        if (!C.isValidElement(l))
            return;
        let m = [...r, c];
        if (l.type === C.Fragment) {
            i.push.apply(i, El(l.props.children, m));
            return
        }
        l.type !== Je && Le(!1),
        !l.props.index || !l.props.children || Le(!1);
        let h = {
            id: l.props.id || m.join("-"),
            caseSensitive: l.props.caseSensitive,
            element: l.props.element,
            Component: l.props.Component,
            index: l.props.index,
            path: l.props.path,
            loader: l.props.loader,
            action: l.props.action,
            errorElement: l.props.errorElement,
            ErrorBoundary: l.props.ErrorBoundary,
            hasErrorBoundary: l.props.ErrorBoundary != null || l.props.errorElement != null,
            shouldRevalidate: l.props.shouldRevalidate,
            handle: l.props.handle,
            lazy: l.props.lazy
        };
        l.props.children && (h.children = El(l.props.children, m)),
        i.push(h)
    }
    ),
    i
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ml() {
    return Ml = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l])
        }
        return n
    }
    ,
    Ml.apply(this, arguments)
}
function Hy(n, r) {
    if (n == null)
        return {};
    var i = {}, l = Object.keys(n), c, m;
    for (m = 0; m < l.length; m++)
        c = l[m],
        !(r.indexOf(c) >= 0) && (i[c] = n[c]);
    return i
}
function $y(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function Gy(n, r) {
    return n.button === 0 && (!r || r === "_self") && !$y(n)
}
const Ky = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , qy = "6";
try {
    window.__reactRouterVersion = qy
} catch {}
const Qy = "startTransition"
  , Om = G0[Qy];
function Yy(n) {
    let {basename: r, children: i, future: l, window: c} = n
      , m = C.useRef();
    m.current == null && (m.current = J0({
        window: c,
        v5Compat: !0
    }));
    let h = m.current
      , [f,p] = C.useState({
        action: h.action,
        location: h.location
    })
      , {v7_startTransition: g} = l || {}
      , v = C.useCallback(x => {
        g && Om ? Om( () => p(x)) : p(x)
    }
    , [p, g]);
    return C.useLayoutEffect( () => h.listen(v), [h, v]),
    C.useEffect( () => zy(l), [l]),
    C.createElement(Uy, {
        basename: r,
        children: i,
        location: f.location,
        navigationType: f.action,
        navigator: h,
        future: l
    })
}
const Xy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Jy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , yn = C.forwardRef(function(r, i) {
    let {onClick: l, relative: c, reloadDocument: m, replace: h, state: f, target: p, to: g, preventScrollReset: v, viewTransition: x} = r, j = Hy(r, Ky), {basename: k} = C.useContext(Sn), M, P = !1;
    if (typeof g == "string" && Jy.test(g) && (M = g,
    Xy))
        try {
            let R = new URL(window.location.href)
              , L = g.startsWith("//") ? new URL(R.protocol + g) : new URL(g)
              , W = Xl(L.pathname, k);
            L.origin === R.origin && W != null ? g = W + L.search + L.hash : P = !0
        } catch {}
    let A = Sy(g, {
        relative: c
    })
      , I = Zy(g, {
        replace: h,
        state: f,
        target: p,
        preventScrollReset: v,
        relative: c,
        viewTransition: x
    });
    function z(R) {
        l && l(R),
        R.defaultPrevented || I(R)
    }
    return C.createElement("a", Ml({}, j, {
        href: M || A,
        onClick: P || m ? l : z,
        ref: i,
        target: p
    }))
});
var Vm;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration",
    n.UseSubmit = "useSubmit",
    n.UseSubmitFetcher = "useSubmitFetcher",
    n.UseFetcher = "useFetcher",
    n.useViewTransitionState = "useViewTransitionState"
}
)(Vm || (Vm = {}));
var _m;
(function(n) {
    n.UseFetcher = "useFetcher",
    n.UseFetchers = "useFetchers",
    n.UseScrollRestoration = "useScrollRestoration"
}
)(_m || (_m = {}));
function Zy(n, r) {
    let {target: i, replace: l, state: c, preventScrollReset: m, relative: h, viewTransition: f} = r === void 0 ? {} : r
      , p = Pn()
      , g = Er()
      , v = tf(n, {
        relative: h
    });
    return C.useCallback(x => {
        if (Gy(x, i)) {
            x.preventDefault();
            let j = l !== void 0 ? l : qi(g) === qi(v);
            p(n, {
                replace: j,
                state: c,
                preventScrollReset: m,
                relative: h,
                viewTransition: f
            })
        }
    }
    , [g, p, v, l, c, i, n, m, h, f])
}
const af = C.createContext(void 0)
  , ex = () => {
    const n = C.useContext(af);
    if (n === void 0)
        throw new Error("useTheme must be used within a ThemeProvider");
    return n
}
  , tx = ({children: n}) => {
    const [r,i] = C.useState( () => {
        const h = localStorage.getItem("theme");
        return h || (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
    }
    )
      , l = h => {
        i(h),
        localStorage.setItem("theme", h)
    }
      , c = () => {
        l(r === "light" ? "dark" : "light")
    }
    ;
    C.useEffect( () => {
        document.documentElement.setAttribute("data-theme", r),
        r === "light" ? (document.body.classList.remove("dark-theme"),
        document.body.classList.add("light-theme")) : (document.body.classList.remove("light-theme"),
        document.body.classList.add("dark-theme"))
    }
    , [r]),
    C.useEffect( () => {
        const h = window.matchMedia("(prefers-color-scheme: light)")
          , f = p => {
            localStorage.getItem("theme") || l(p.matches ? "light" : "dark")
        }
        ;
        return h.addEventListener("change", f),
        () => h.removeEventListener("change", f)
    }
    , []);
    const m = {
        theme: r,
        toggleTheme: c,
        setTheme: l
    };
    return a.jsx(af.Provider, {
        value: m,
        children: n
    })
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , ne = (n, r) => {
    const i = C.forwardRef( ({color: l="currentColor", size: c=24, strokeWidth: m=2, absoluteStrokeWidth: h, className: f="", children: p, ...g}, v) => C.createElement("svg", {
        ref: v,
        ...nx,
        width: c,
        height: c,
        stroke: l,
        strokeWidth: h ? Number(m) * 24 / Number(c) : m,
        className: ["lucide", `lucide-${rx(n)}`, f].join(" "),
        ...g
    }, [...r.map( ([x,j]) => C.createElement(x, j)), ...Array.isArray(p) ? p : [p]]));
    return i.displayName = `${n}`,
    i
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = ne("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = ne("Bell", [["path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
    key: "1qo2s2"
}], ["path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
    key: "qgo35s"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = ne("BookOpen", [["path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    key: "vv98re"
}], ["path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    key: "1cyq3y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lf = ne("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = ne("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = ne("Camera", [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = ne("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = ne("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = ne("Cloud", [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = ne("Code2", [["path", {
    d: "m18 16 4-4-4-4",
    key: "1inbqp"
}], ["path", {
    d: "m6 8-4 4 4 4",
    key: "15zrgr"
}], ["path", {
    d: "m14.5 4-5 16",
    key: "e7oirm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = ne("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = ne("Cog", [["path", {
    d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    key: "sobvz5"
}], ["path", {
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    key: "11i496"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 22v-2",
    key: "1osdcq"
}], ["path", {
    d: "m17 20.66-1-1.73",
    key: "eq3orb"
}], ["path", {
    d: "M11 10.27 7 3.34",
    key: "16pf9h"
}], ["path", {
    d: "m20.66 17-1.73-1",
    key: "sg0v6f"
}], ["path", {
    d: "m3.34 7 1.73 1",
    key: "1ulond"
}], ["path", {
    d: "M14 12h8",
    key: "4f43i9"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "m20.66 7-1.73 1",
    key: "1ow05n"
}], ["path", {
    d: "m3.34 17 1.73-1",
    key: "nuk764"
}], ["path", {
    d: "m17 3.34-1 1.73",
    key: "2wel8s"
}], ["path", {
    d: "m11 13.73-4 6.93",
    key: "794ttg"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = ne("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = ne("Cpu", [["rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    key: "1vbyd7"
}], ["rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6",
    key: "o3kz5p"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = ne("Database", [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
}], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = ne("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = ne("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = ne("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = ne("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = ne("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = ne("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = ne("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = ne("LogIn", [["path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    key: "u53s6r"
}], ["polyline", {
    points: "10 17 15 12 10 7",
    key: "1ail0h"
}], ["line", {
    x1: "15",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "v6grx8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = ne("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = ne("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = ne("MapPin", [["path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    key: "2oe9fu"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = ne("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = ne("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = ne("PanelsTopLeft", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M3 9h18",
    key: "1pudct"
}], ["path", {
    d: "M9 21V9",
    key: "1oto5p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = ne("Pen", [["path", {
    d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
    key: "5qss01"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = ne("Save", [["path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    key: "1owoqh"
}], ["polyline", {
    points: "17 21 17 13 7 13 7 21",
    key: "1md35c"
}], ["polyline", {
    points: "7 3 7 8 15 8",
    key: "8nz8an"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = ne("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = ne("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = ne("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = ne("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = ne("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = ne("ShoppingCart", [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = ne("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = ne("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = ne("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = ne("Terminal", [["polyline", {
    points: "4 17 10 11 4 5",
    key: "akl6gq"
}], ["line", {
    x1: "12",
    x2: "20",
    y1: "19",
    y2: "19",
    key: "q2wloq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = ne("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = ne("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = ne("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = ne("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = ne("Youtube", [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
}], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = ne("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , pf = C.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
})
  , ca = C.createContext({})
  , ic = C.createContext(null)
  , ua = typeof document < "u"
  , Ex = ua ? C.useLayoutEffect : C.useEffect
  , gf = C.createContext({
    strict: !1
})
  , ac = n => n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , Mx = "framerAppearId"
  , yf = "data-" + ac(Mx);
function Dx(n, r, i, l) {
    const {visualElement: c} = C.useContext(ca)
      , m = C.useContext(gf)
      , h = C.useContext(ic)
      , f = C.useContext(pf).reducedMotion
      , p = C.useRef();
    l = l || m.renderer,
    !p.current && l && (p.current = l(n, {
        visualState: r,
        parent: c,
        props: i,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: f
    }));
    const g = p.current;
    C.useInsertionEffect( () => {
        g && g.update(i, h)
    }
    );
    const v = C.useRef(!!(i[yf] && !window.HandoffComplete));
    return Ex( () => {
        g && (g.render(),
        v.current && g.animationState && g.animationState.animateChanges())
    }
    ),
    C.useEffect( () => {
        g && (g.updateFeatures(),
        !v.current && g.animationState && g.animationState.animateChanges(),
        v.current && (v.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    g
}
function jr(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function Ax(n, r, i) {
    return C.useCallback(l => {
        l && n.mount && n.mount(l),
        r && (l ? r.mount(l) : r.unmount()),
        i && (typeof i == "function" ? i(l) : jr(i) && (i.current = l))
    }
    , [r])
}
function Ss(n) {
    return typeof n == "string" || Array.isArray(n)
}
function da(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
const oc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , lc = ["initial", ...oc];
function ma(n) {
    return da(n.animate) || lc.some(r => Ss(n[r]))
}
function xf(n) {
    return !!(ma(n) || n.variants)
}
function Rx(n, r) {
    if (ma(n)) {
        const {initial: i, animate: l} = n;
        return {
            initial: i === !1 || Ss(i) ? i : void 0,
            animate: Ss(l) ? l : void 0
        }
    }
    return n.inherit !== !1 ? r : {}
}
function Ix(n) {
    const {initial: r, animate: i} = Rx(n, C.useContext(ca));
    return C.useMemo( () => ({
        initial: r,
        animate: i
    }), [Um(r), Um(i)])
}
function Um(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const Wm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Cs = {};
for (const n in Wm)
    Cs[n] = {
        isEnabled: r => Wm[n].some(i => !!r[i])
    };
function Lx(n) {
    for (const r in n)
        Cs[r] = {
            ...Cs[r],
            ...n[r]
        }
}
const vf = C.createContext({})
  , wf = C.createContext({})
  , Ox = Symbol.for("motionComponentSymbol");
function Vx({preloadedFeatures: n, createVisualElement: r, useRender: i, useVisualState: l, Component: c}) {
    n && Lx(n);
    function m(f, p) {
        let g;
        const v = {
            ...C.useContext(pf),
            ...f,
            layoutId: _x(f)
        }
          , {isStatic: x} = v
          , j = Ix(f)
          , k = l(f, x);
        if (!x && ua) {
            j.visualElement = Dx(c, k, v, r);
            const M = C.useContext(wf)
              , P = C.useContext(gf).strict;
            j.visualElement && (g = j.visualElement.loadFeatures(v, P, n, M))
        }
        return C.createElement(ca.Provider, {
            value: j
        }, g && j.visualElement ? C.createElement(g, {
            visualElement: j.visualElement,
            ...v
        }) : null, i(c, f, Ax(k, j.visualElement, p), k, x, j.visualElement))
    }
    const h = C.forwardRef(m);
    return h[Ox] = c,
    h
}
function _x({layoutId: n}) {
    const r = C.useContext(vf).id;
    return r && n !== void 0 ? r + "-" + n : n
}
function Fx(n) {
    function r(l, c={}) {
        return Vx(n(l, c))
    }
    if (typeof Proxy > "u")
        return r;
    const i = new Map;
    return new Proxy(r,{
        get: (l, c) => (i.has(c) || i.set(c, r(c)),
        i.get(c))
    })
}
const zx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function cc(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(zx.indexOf(n) > -1 || /[A-Z]/.test(n))
}
const Ji = {};
function Bx(n) {
    Object.assign(Ji, n)
}
const Ts = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , qn = new Set(Ts);
function jf(n, {layout: r, layoutId: i}) {
    return qn.has(n) || n.startsWith("origin") || (r || i !== void 0) && (!!Ji[n] || n === "opacity")
}
const dt = n => !!(n && n.getVelocity)
  , Ux = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Wx = Ts.length;
function Hx(n, {enableHardwareAcceleration: r=!0, allowTransformNone: i=!0}, l, c) {
    let m = "";
    for (let h = 0; h < Wx; h++) {
        const f = Ts[h];
        if (n[f] !== void 0) {
            const p = Ux[f] || f;
            m += `${p}(${n[f]}) `
        }
    }
    return r && !n.z && (m += "translateZ(0)"),
    m = m.trim(),
    c ? m = c(n, l ? "" : m) : i && l && (m = "none"),
    m
}
const bf = n => r => typeof r == "string" && r.startsWith(n)
  , kf = bf("--")
  , Al = bf("var(--")
  , $x = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , Gx = (n, r) => r && typeof n == "number" ? r.transform(n) : n
  , kn = (n, r, i) => Math.min(Math.max(i, n), r)
  , Qn = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , vs = {
    ...Qn,
    transform: n => kn(0, 1, n)
}
  , Ui = {
    ...Qn,
    default: 1
}
  , ws = n => Math.round(n * 1e5) / 1e5
  , ha = /(-)?([\d]*\.?[\d])+/g
  , Nf = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , Kx = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Es(n) {
    return typeof n == "string"
}
const Ms = n => ({
    test: r => Es(r) && r.endsWith(n) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: r => `${r}${n}`
})
  , xn = Ms("deg")
  , _t = Ms("%")
  , Z = Ms("px")
  , qx = Ms("vh")
  , Qx = Ms("vw")
  , Hm = {
    ..._t,
    parse: n => _t.parse(n) / 100,
    transform: n => _t.transform(n * 100)
}
  , $m = {
    ...Qn,
    transform: Math.round
}
  , Sf = {
    borderWidth: Z,
    borderTopWidth: Z,
    borderRightWidth: Z,
    borderBottomWidth: Z,
    borderLeftWidth: Z,
    borderRadius: Z,
    radius: Z,
    borderTopLeftRadius: Z,
    borderTopRightRadius: Z,
    borderBottomRightRadius: Z,
    borderBottomLeftRadius: Z,
    width: Z,
    maxWidth: Z,
    height: Z,
    maxHeight: Z,
    size: Z,
    top: Z,
    right: Z,
    bottom: Z,
    left: Z,
    padding: Z,
    paddingTop: Z,
    paddingRight: Z,
    paddingBottom: Z,
    paddingLeft: Z,
    margin: Z,
    marginTop: Z,
    marginRight: Z,
    marginBottom: Z,
    marginLeft: Z,
    rotate: xn,
    rotateX: xn,
    rotateY: xn,
    rotateZ: xn,
    scale: Ui,
    scaleX: Ui,
    scaleY: Ui,
    scaleZ: Ui,
    skew: xn,
    skewX: xn,
    skewY: xn,
    distance: Z,
    translateX: Z,
    translateY: Z,
    translateZ: Z,
    x: Z,
    y: Z,
    z: Z,
    perspective: Z,
    transformPerspective: Z,
    opacity: vs,
    originX: Hm,
    originY: Hm,
    originZ: Z,
    zIndex: $m,
    fillOpacity: vs,
    strokeOpacity: vs,
    numOctaves: $m
};
function uc(n, r, i, l) {
    const {style: c, vars: m, transform: h, transformOrigin: f} = n;
    let p = !1
      , g = !1
      , v = !0;
    for (const x in r) {
        const j = r[x];
        if (kf(x)) {
            m[x] = j;
            continue
        }
        const k = Sf[x]
          , M = Gx(j, k);
        if (qn.has(x)) {
            if (p = !0,
            h[x] = M,
            !v)
                continue;
            j !== (k.default || 0) && (v = !1)
        } else
            x.startsWith("origin") ? (g = !0,
            f[x] = M) : c[x] = M
    }
    if (r.transform || (p || l ? c.transform = Hx(n.transform, i, v, l) : c.transform && (c.transform = "none")),
    g) {
        const {originX: x="50%", originY: j="50%", originZ: k=0} = f;
        c.transformOrigin = `${x} ${j} ${k}`
    }
}
const dc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Cf(n, r, i) {
    for (const l in r)
        !dt(r[l]) && !jf(l, i) && (n[l] = r[l])
}
function Yx({transformTemplate: n}, r, i) {
    return C.useMemo( () => {
        const l = dc();
        return uc(l, r, {
            enableHardwareAcceleration: !i
        }, n),
        Object.assign({}, l.vars, l.style)
    }
    , [r])
}
function Xx(n, r, i) {
    const l = n.style || {}
      , c = {};
    return Cf(c, l, n),
    Object.assign(c, Yx(n, r, i)),
    n.transformValues ? n.transformValues(c) : c
}
function Jx(n, r, i) {
    const l = {}
      , c = Xx(n, r, i);
    return n.drag && n.dragListener !== !1 && (l.draggable = !1,
    c.userSelect = c.WebkitUserSelect = c.WebkitTouchCallout = "none",
    c.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (l.tabIndex = 0),
    l.style = c,
    l
}
const Zx = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Zi(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || Zx.has(n)
}
let Pf = n => !Zi(n);
function ev(n) {
    n && (Pf = r => r.startsWith("on") ? !Zi(r) : n(r))
}
try {
    ev(require("@emotion/is-prop-valid").default)
} catch {}
function tv(n, r, i) {
    const l = {};
    for (const c in n)
        c === "values" && typeof n.values == "object" || (Pf(c) || i === !0 && Zi(c) || !r && !Zi(c) || n.draggable && c.startsWith("onDrag")) && (l[c] = n[c]);
    return l
}
function Gm(n, r, i) {
    return typeof n == "string" ? n : Z.transform(r + i * n)
}
function nv(n, r, i) {
    const l = Gm(r, n.x, n.width)
      , c = Gm(i, n.y, n.height);
    return `${l} ${c}`
}
const rv = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , sv = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function iv(n, r, i=1, l=0, c=!0) {
    n.pathLength = 1;
    const m = c ? rv : sv;
    n[m.offset] = Z.transform(-l);
    const h = Z.transform(r)
      , f = Z.transform(i);
    n[m.array] = `${h} ${f}`
}
function mc(n, {attrX: r, attrY: i, attrScale: l, originX: c, originY: m, pathLength: h, pathSpacing: f=1, pathOffset: p=0, ...g}, v, x, j) {
    if (uc(n, g, v, j),
    x) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: k, style: M, dimensions: P} = n;
    k.transform && (P && (M.transform = k.transform),
    delete k.transform),
    P && (c !== void 0 || m !== void 0 || M.transform) && (M.transformOrigin = nv(P, c !== void 0 ? c : .5, m !== void 0 ? m : .5)),
    r !== void 0 && (k.x = r),
    i !== void 0 && (k.y = i),
    l !== void 0 && (k.scale = l),
    h !== void 0 && iv(k, h, f, p, !1)
}
const Tf = () => ({
    ...dc(),
    attrs: {}
})
  , hc = n => typeof n == "string" && n.toLowerCase() === "svg";
function av(n, r, i, l) {
    const c = C.useMemo( () => {
        const m = Tf();
        return mc(m, r, {
            enableHardwareAcceleration: !1
        }, hc(l), n.transformTemplate),
        {
            ...m.attrs,
            style: {
                ...m.style
            }
        }
    }
    , [r]);
    if (n.style) {
        const m = {};
        Cf(m, n.style, n),
        c.style = {
            ...m,
            ...c.style
        }
    }
    return c
}
function ov(n=!1) {
    return (i, l, c, {latestValues: m}, h) => {
        const p = (cc(i) ? av : Jx)(l, m, h, i)
          , v = {
            ...tv(l, typeof i == "string", n),
            ...p,
            ref: c
        }
          , {children: x} = l
          , j = C.useMemo( () => dt(x) ? x.get() : x, [x]);
        return C.createElement(i, {
            ...v,
            children: j
        })
    }
}
function Ef(n, {style: r, vars: i}, l, c) {
    Object.assign(n.style, r, c && c.getProjectionStyles(l));
    for (const m in i)
        n.style.setProperty(m, i[m])
}
const Mf = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Df(n, r, i, l) {
    Ef(n, r, void 0, l);
    for (const c in r.attrs)
        n.setAttribute(Mf.has(c) ? c : ac(c), r.attrs[c])
}
function fc(n, r) {
    const {style: i} = n
      , l = {};
    for (const c in i)
        (dt(i[c]) || r.style && dt(r.style[c]) || jf(c, n)) && (l[c] = i[c]);
    return l
}
function Af(n, r) {
    const i = fc(n, r);
    for (const l in n)
        if (dt(n[l]) || dt(r[l])) {
            const c = Ts.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
            i[c] = n[l]
        }
    return i
}
function pc(n, r, i, l={}, c={}) {
    return typeof r == "function" && (r = r(i !== void 0 ? i : n.custom, l, c)),
    typeof r == "string" && (r = n.variants && n.variants[r]),
    typeof r == "function" && (r = r(i !== void 0 ? i : n.custom, l, c)),
    r
}
function lv(n) {
    const r = C.useRef(null);
    return r.current === null && (r.current = n()),
    r.current
}
const ea = n => Array.isArray(n)
  , cv = n => !!(n && typeof n == "object" && n.mix && n.toValue)
  , uv = n => ea(n) ? n[n.length - 1] || 0 : n;
function Gi(n) {
    const r = dt(n) ? n.get() : n;
    return cv(r) ? r.toValue() : r
}
function dv({scrapeMotionValuesFromProps: n, createRenderState: r, onMount: i}, l, c, m) {
    const h = {
        latestValues: mv(l, c, m, n),
        renderState: r()
    };
    return i && (h.mount = f => i(l, f, h)),
    h
}
const Rf = n => (r, i) => {
    const l = C.useContext(ca)
      , c = C.useContext(ic)
      , m = () => dv(n, r, l, c);
    return i ? m() : lv(m)
}
;
function mv(n, r, i, l) {
    const c = {}
      , m = l(n, {});
    for (const j in m)
        c[j] = Gi(m[j]);
    let {initial: h, animate: f} = n;
    const p = ma(n)
      , g = xf(n);
    r && g && !p && n.inherit !== !1 && (h === void 0 && (h = r.initial),
    f === void 0 && (f = r.animate));
    let v = i ? i.initial === !1 : !1;
    v = v || h === !1;
    const x = v ? f : h;
    return x && typeof x != "boolean" && !da(x) && (Array.isArray(x) ? x : [x]).forEach(k => {
        const M = pc(n, k);
        if (!M)
            return;
        const {transitionEnd: P, transition: A, ...I} = M;
        for (const z in I) {
            let R = I[z];
            if (Array.isArray(R)) {
                const L = v ? R.length - 1 : 0;
                R = R[L]
            }
            R !== null && (c[z] = R)
        }
        for (const z in P)
            c[z] = P[z]
    }
    ),
    c
}
const Ie = n => n;
class Km {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(r) {
        if (!this.scheduled.has(r))
            return this.scheduled.add(r),
            this.order.push(r),
            !0
    }
    remove(r) {
        const i = this.order.indexOf(r);
        i !== -1 && (this.order.splice(i, 1),
        this.scheduled.delete(r))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function hv(n) {
    let r = new Km
      , i = new Km
      , l = 0
      , c = !1
      , m = !1;
    const h = new WeakSet
      , f = {
        schedule: (p, g=!1, v=!1) => {
            const x = v && c
              , j = x ? r : i;
            return g && h.add(p),
            j.add(p) && x && c && (l = r.order.length),
            p
        }
        ,
        cancel: p => {
            i.remove(p),
            h.delete(p)
        }
        ,
        process: p => {
            if (c) {
                m = !0;
                return
            }
            if (c = !0,
            [r,i] = [i, r],
            i.clear(),
            l = r.order.length,
            l)
                for (let g = 0; g < l; g++) {
                    const v = r.order[g];
                    v(p),
                    h.has(v) && (f.schedule(v),
                    n())
                }
            c = !1,
            m && (m = !1,
            f.process(p))
        }
    };
    return f
}
const Wi = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , fv = 40;
function pv(n, r) {
    let i = !1
      , l = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , m = Wi.reduce( (x, j) => (x[j] = hv( () => i = !0),
    x), {})
      , h = x => m[x].process(c)
      , f = () => {
        const x = performance.now();
        i = !1,
        c.delta = l ? 1e3 / 60 : Math.max(Math.min(x - c.timestamp, fv), 1),
        c.timestamp = x,
        c.isProcessing = !0,
        Wi.forEach(h),
        c.isProcessing = !1,
        i && r && (l = !1,
        n(f))
    }
      , p = () => {
        i = !0,
        l = !0,
        c.isProcessing || n(f)
    }
    ;
    return {
        schedule: Wi.reduce( (x, j) => {
            const k = m[j];
            return x[j] = (M, P=!1, A=!1) => (i || p(),
            k.schedule(M, P, A)),
            x
        }
        , {}),
        cancel: x => Wi.forEach(j => m[j].cancel(x)),
        state: c,
        steps: m
    }
}
const {schedule: Ne, cancel: Yt, state: Ze, steps: yl} = pv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0)
  , gv = {
    useVisualState: Rf({
        scrapeMotionValuesFromProps: Af,
        createRenderState: Tf,
        onMount: (n, r, {renderState: i, latestValues: l}) => {
            Ne.read( () => {
                try {
                    i.dimensions = typeof r.getBBox == "function" ? r.getBBox() : r.getBoundingClientRect()
                } catch {
                    i.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            Ne.render( () => {
                mc(i, l, {
                    enableHardwareAcceleration: !1
                }, hc(r.tagName), n.transformTemplate),
                Df(r, i)
            }
            )
        }
    })
}
  , yv = {
    useVisualState: Rf({
        scrapeMotionValuesFromProps: fc,
        createRenderState: dc
    })
};
function xv(n, {forwardMotionProps: r=!1}, i, l) {
    return {
        ...cc(n) ? gv : yv,
        preloadedFeatures: i,
        useRender: ov(r),
        createVisualElement: l,
        Component: n
    }
}
function Kt(n, r, i, l={
    passive: !0
}) {
    return n.addEventListener(r, i, l),
    () => n.removeEventListener(r, i)
}
const If = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1;
function fa(n, r="page") {
    return {
        point: {
            x: n[r + "X"],
            y: n[r + "Y"]
        }
    }
}
const vv = n => r => If(r) && n(r, fa(r));
function qt(n, r, i, l) {
    return Kt(n, r, vv(i), l)
}
const wv = (n, r) => i => r(n(i))
  , bn = (...n) => n.reduce(wv);
function Lf(n) {
    let r = null;
    return () => {
        const i = () => {
            r = null
        }
        ;
        return r === null ? (r = n,
        i) : !1
    }
}
const qm = Lf("dragHorizontal")
  , Qm = Lf("dragVertical");
function Of(n) {
    let r = !1;
    if (n === "y")
        r = Qm();
    else if (n === "x")
        r = qm();
    else {
        const i = qm()
          , l = Qm();
        i && l ? r = () => {
            i(),
            l()
        }
        : (i && i(),
        l && l())
    }
    return r
}
function Vf() {
    const n = Of(!0);
    return n ? (n(),
    !1) : !0
}
class Tn {
    constructor(r) {
        this.isMounted = !1,
        this.node = r
    }
    update() {}
}
function Ym(n, r) {
    const i = "pointer" + (r ? "enter" : "leave")
      , l = "onHover" + (r ? "Start" : "End")
      , c = (m, h) => {
        if (m.pointerType === "touch" || Vf())
            return;
        const f = n.getProps();
        n.animationState && f.whileHover && n.animationState.setActive("whileHover", r),
        f[l] && Ne.update( () => f[l](m, h))
    }
    ;
    return qt(n.current, i, c, {
        passive: !n.getProps()[l]
    })
}
class jv extends Tn {
    mount() {
        this.unmount = bn(Ym(this.node, !0), Ym(this.node, !1))
    }
    unmount() {}
}
class bv extends Tn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let r = !1;
        try {
            r = this.node.current.matches(":focus-visible")
        } catch {
            r = !0
        }
        !r || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = bn(Kt(this.node.current, "focus", () => this.onFocus()), Kt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const _f = (n, r) => r ? n === r ? !0 : _f(n, r.parentElement) : !1;
function xl(n, r) {
    if (!r)
        return;
    const i = new PointerEvent("pointer" + n);
    r(i, fa(i))
}
class kv extends Tn {
    constructor() {
        super(...arguments),
        this.removeStartListeners = Ie,
        this.removeEndListeners = Ie,
        this.removeAccessibleListeners = Ie,
        this.startPointerPress = (r, i) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const l = this.node.getProps()
              , m = qt(window, "pointerup", (f, p) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: g, onTapCancel: v, globalTapTarget: x} = this.node.getProps();
                Ne.update( () => {
                    !x && !_f(this.node.current, f.target) ? v && v(f, p) : g && g(f, p)
                }
                )
            }
            , {
                passive: !(l.onTap || l.onPointerUp)
            })
              , h = qt(window, "pointercancel", (f, p) => this.cancelPress(f, p), {
                passive: !(l.onTapCancel || l.onPointerCancel)
            });
            this.removeEndListeners = bn(m, h),
            this.startPress(r, i)
        }
        ,
        this.startAccessiblePress = () => {
            const r = m => {
                if (m.key !== "Enter" || this.isPressing)
                    return;
                const h = f => {
                    f.key !== "Enter" || !this.checkPressEnd() || xl("up", (p, g) => {
                        const {onTap: v} = this.node.getProps();
                        v && Ne.update( () => v(p, g))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = Kt(this.node.current, "keyup", h),
                xl("down", (f, p) => {
                    this.startPress(f, p)
                }
                )
            }
              , i = Kt(this.node.current, "keydown", r)
              , l = () => {
                this.isPressing && xl("cancel", (m, h) => this.cancelPress(m, h))
            }
              , c = Kt(this.node.current, "blur", l);
            this.removeAccessibleListeners = bn(i, c)
        }
    }
    startPress(r, i) {
        this.isPressing = !0;
        const {onTapStart: l, whileTap: c} = this.node.getProps();
        c && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        l && Ne.update( () => l(r, i))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !Vf()
    }
    cancelPress(r, i) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: l} = this.node.getProps();
        l && Ne.update( () => l(r, i))
    }
    mount() {
        const r = this.node.getProps()
          , i = qt(r.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(r.onTapStart || r.onPointerStart)
        })
          , l = Kt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = bn(i, l)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const Rl = new WeakMap
  , vl = new WeakMap
  , Nv = n => {
    const r = Rl.get(n.target);
    r && r(n)
}
  , Sv = n => {
    n.forEach(Nv)
}
;
function Cv({root: n, ...r}) {
    const i = n || document;
    vl.has(i) || vl.set(i, {});
    const l = vl.get(i)
      , c = JSON.stringify(r);
    return l[c] || (l[c] = new IntersectionObserver(Sv,{
        root: n,
        ...r
    })),
    l[c]
}
function Pv(n, r, i) {
    const l = Cv(r);
    return Rl.set(n, i),
    l.observe(n),
    () => {
        Rl.delete(n),
        l.unobserve(n)
    }
}
const Tv = {
    some: 0,
    all: 1
};
class Ev extends Tn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: r={}} = this.node.getProps()
          , {root: i, margin: l, amount: c="some", once: m} = r
          , h = {
            root: i ? i.current : void 0,
            rootMargin: l,
            threshold: typeof c == "number" ? c : Tv[c]
        }
          , f = p => {
            const {isIntersecting: g} = p;
            if (this.isInView === g || (this.isInView = g,
            m && !g && this.hasEnteredView))
                return;
            g && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {onViewportEnter: v, onViewportLeave: x} = this.node.getProps()
              , j = g ? v : x;
            j && j(p)
        }
        ;
        return Pv(this.node.current, h, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: r, prevProps: i} = this.node;
        ["amount", "margin", "root"].some(Mv(r, i)) && this.startObserver()
    }
    unmount() {}
}
function Mv({viewport: n={}}, {viewport: r={}}={}) {
    return i => n[i] !== r[i]
}
const Dv = {
    inView: {
        Feature: Ev
    },
    tap: {
        Feature: kv
    },
    focus: {
        Feature: bv
    },
    hover: {
        Feature: jv
    }
};
function Ff(n, r) {
    if (!Array.isArray(r))
        return !1;
    const i = r.length;
    if (i !== n.length)
        return !1;
    for (let l = 0; l < i; l++)
        if (r[l] !== n[l])
            return !1;
    return !0
}
function Av(n) {
    const r = {};
    return n.values.forEach( (i, l) => r[l] = i.get()),
    r
}
function Rv(n) {
    const r = {};
    return n.values.forEach( (i, l) => r[l] = i.getVelocity()),
    r
}
function pa(n, r, i) {
    const l = n.getProps();
    return pc(l, r, i !== void 0 ? i : l.custom, Av(n), Rv(n))
}
let gc = Ie;
const Gn = n => n * 1e3
  , Qt = n => n / 1e3
  , Iv = {
    current: !1
}
  , zf = n => Array.isArray(n) && typeof n[0] == "number";
function Bf(n) {
    return !!(!n || typeof n == "string" && Uf[n] || zf(n) || Array.isArray(n) && n.every(Bf))
}
const xs = ([n,r,i,l]) => `cubic-bezier(${n}, ${r}, ${i}, ${l})`
  , Uf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xs([0, .65, .55, 1]),
    circOut: xs([.55, 0, 1, .45]),
    backIn: xs([.31, .01, .66, -.59]),
    backOut: xs([.33, 1.53, .69, .99])
};
function Wf(n) {
    if (n)
        return zf(n) ? xs(n) : Array.isArray(n) ? n.map(Wf) : Uf[n]
}
function Lv(n, r, i, {delay: l=0, duration: c, repeat: m=0, repeatType: h="loop", ease: f, times: p}={}) {
    const g = {
        [r]: i
    };
    p && (g.offset = p);
    const v = Wf(f);
    return Array.isArray(v) && (g.easing = v),
    n.animate(g, {
        delay: l,
        duration: c,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: m + 1,
        direction: h === "reverse" ? "alternate" : "normal"
    })
}
function Ov(n, {repeat: r, repeatType: i="loop"}) {
    const l = r && i !== "loop" && r % 2 === 1 ? 0 : n.length - 1;
    return n[l]
}
const Hf = (n, r, i) => (((1 - 3 * i + 3 * r) * n + (3 * i - 6 * r)) * n + 3 * r) * n
  , Vv = 1e-7
  , _v = 12;
function Fv(n, r, i, l, c) {
    let m, h, f = 0;
    do
        h = r + (i - r) / 2,
        m = Hf(h, l, c) - n,
        m > 0 ? i = h : r = h;
    while (Math.abs(m) > Vv && ++f < _v);
    return h
}
function Ds(n, r, i, l) {
    if (n === r && i === l)
        return Ie;
    const c = m => Fv(m, 0, 1, n, i);
    return m => m === 0 || m === 1 ? m : Hf(c(m), r, l)
}
const zv = Ds(.42, 0, 1, 1)
  , Bv = Ds(0, 0, .58, 1)
  , $f = Ds(.42, 0, .58, 1)
  , Uv = n => Array.isArray(n) && typeof n[0] != "number"
  , Gf = n => r => r <= .5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2
  , Kf = n => r => 1 - n(1 - r)
  , yc = n => 1 - Math.sin(Math.acos(n))
  , qf = Kf(yc)
  , Wv = Gf(yc)
  , Qf = Ds(.33, 1.53, .69, .99)
  , xc = Kf(Qf)
  , Hv = Gf(xc)
  , $v = n => (n *= 2) < 1 ? .5 * xc(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , Gv = {
    linear: Ie,
    easeIn: zv,
    easeInOut: $f,
    easeOut: Bv,
    circIn: yc,
    circInOut: Wv,
    circOut: qf,
    backIn: xc,
    backInOut: Hv,
    backOut: Qf,
    anticipate: $v
}
  , Xm = n => {
    if (Array.isArray(n)) {
        gc(n.length === 4);
        const [r,i,l,c] = n;
        return Ds(r, i, l, c)
    } else if (typeof n == "string")
        return Gv[n];
    return n
}
  , vc = (n, r) => i => !!(Es(i) && Kx.test(i) && i.startsWith(n) || r && Object.prototype.hasOwnProperty.call(i, r))
  , Yf = (n, r, i) => l => {
    if (!Es(l))
        return l;
    const [c,m,h,f] = l.match(ha);
    return {
        [n]: parseFloat(c),
        [r]: parseFloat(m),
        [i]: parseFloat(h),
        alpha: f !== void 0 ? parseFloat(f) : 1
    }
}
  , Kv = n => kn(0, 255, n)
  , wl = {
    ...Qn,
    transform: n => Math.round(Kv(n))
}
  , $n = {
    test: vc("rgb", "red"),
    parse: Yf("red", "green", "blue"),
    transform: ({red: n, green: r, blue: i, alpha: l=1}) => "rgba(" + wl.transform(n) + ", " + wl.transform(r) + ", " + wl.transform(i) + ", " + ws(vs.transform(l)) + ")"
};
function qv(n) {
    let r = ""
      , i = ""
      , l = ""
      , c = "";
    return n.length > 5 ? (r = n.substring(1, 3),
    i = n.substring(3, 5),
    l = n.substring(5, 7),
    c = n.substring(7, 9)) : (r = n.substring(1, 2),
    i = n.substring(2, 3),
    l = n.substring(3, 4),
    c = n.substring(4, 5),
    r += r,
    i += i,
    l += l,
    c += c),
    {
        red: parseInt(r, 16),
        green: parseInt(i, 16),
        blue: parseInt(l, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Il = {
    test: vc("#"),
    parse: qv,
    transform: $n.transform
}
  , br = {
    test: vc("hsl", "hue"),
    parse: Yf("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: r, lightness: i, alpha: l=1}) => "hsla(" + Math.round(n) + ", " + _t.transform(ws(r)) + ", " + _t.transform(ws(i)) + ", " + ws(vs.transform(l)) + ")"
}
  , nt = {
    test: n => $n.test(n) || Il.test(n) || br.test(n),
    parse: n => $n.test(n) ? $n.parse(n) : br.test(n) ? br.parse(n) : Il.parse(n),
    transform: n => Es(n) ? n : n.hasOwnProperty("red") ? $n.transform(n) : br.transform(n)
}
  , Ee = (n, r, i) => -i * n + i * r + n;
function jl(n, r, i) {
    return i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6 ? n + (r - n) * 6 * i : i < 1 / 2 ? r : i < 2 / 3 ? n + (r - n) * (2 / 3 - i) * 6 : n
}
function Qv({hue: n, saturation: r, lightness: i, alpha: l}) {
    n /= 360,
    r /= 100,
    i /= 100;
    let c = 0
      , m = 0
      , h = 0;
    if (!r)
        c = m = h = i;
    else {
        const f = i < .5 ? i * (1 + r) : i + r - i * r
          , p = 2 * i - f;
        c = jl(p, f, n + 1 / 3),
        m = jl(p, f, n),
        h = jl(p, f, n - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(m * 255),
        blue: Math.round(h * 255),
        alpha: l
    }
}
const bl = (n, r, i) => {
    const l = n * n;
    return Math.sqrt(Math.max(0, i * (r * r - l) + l))
}
  , Yv = [Il, $n, br]
  , Xv = n => Yv.find(r => r.test(n));
function Jm(n) {
    const r = Xv(n);
    let i = r.parse(n);
    return r === br && (i = Qv(i)),
    i
}
const Xf = (n, r) => {
    const i = Jm(n)
      , l = Jm(r)
      , c = {
        ...i
    };
    return m => (c.red = bl(i.red, l.red, m),
    c.green = bl(i.green, l.green, m),
    c.blue = bl(i.blue, l.blue, m),
    c.alpha = Ee(i.alpha, l.alpha, m),
    $n.transform(c))
}
;
function Jv(n) {
    var r, i;
    return isNaN(n) && Es(n) && (((r = n.match(ha)) === null || r === void 0 ? void 0 : r.length) || 0) + (((i = n.match(Nf)) === null || i === void 0 ? void 0 : i.length) || 0) > 0
}
const Jf = {
    regex: $x,
    countKey: "Vars",
    token: "${v}",
    parse: Ie
}
  , Zf = {
    regex: Nf,
    countKey: "Colors",
    token: "${c}",
    parse: nt.parse
}
  , ep = {
    regex: ha,
    countKey: "Numbers",
    token: "${n}",
    parse: Qn.parse
};
function kl(n, {regex: r, countKey: i, token: l, parse: c}) {
    const m = n.tokenised.match(r);
    m && (n["num" + i] = m.length,
    n.tokenised = n.tokenised.replace(r, l),
    n.values.push(...m.map(c)))
}
function ta(n) {
    const r = n.toString()
      , i = {
        value: r,
        tokenised: r,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return i.value.includes("var(--") && kl(i, Jf),
    kl(i, Zf),
    kl(i, ep),
    i
}
function tp(n) {
    return ta(n).values
}
function np(n) {
    const {values: r, numColors: i, numVars: l, tokenised: c} = ta(n)
      , m = r.length;
    return h => {
        let f = c;
        for (let p = 0; p < m; p++)
            p < l ? f = f.replace(Jf.token, h[p]) : p < l + i ? f = f.replace(Zf.token, nt.transform(h[p])) : f = f.replace(ep.token, ws(h[p]));
        return f
    }
}
const Zv = n => typeof n == "number" ? 0 : n;
function e1(n) {
    const r = tp(n);
    return np(n)(r.map(Zv))
}
const Nn = {
    test: Jv,
    parse: tp,
    createTransformer: np,
    getAnimatableNone: e1
}
  , rp = (n, r) => i => `${i > 0 ? r : n}`;
function sp(n, r) {
    return typeof n == "number" ? i => Ee(n, r, i) : nt.test(n) ? Xf(n, r) : n.startsWith("var(") ? rp(n, r) : ap(n, r)
}
const ip = (n, r) => {
    const i = [...n]
      , l = i.length
      , c = n.map( (m, h) => sp(m, r[h]));
    return m => {
        for (let h = 0; h < l; h++)
            i[h] = c[h](m);
        return i
    }
}
  , t1 = (n, r) => {
    const i = {
        ...n,
        ...r
    }
      , l = {};
    for (const c in i)
        n[c] !== void 0 && r[c] !== void 0 && (l[c] = sp(n[c], r[c]));
    return c => {
        for (const m in l)
            i[m] = l[m](c);
        return i
    }
}
  , ap = (n, r) => {
    const i = Nn.createTransformer(r)
      , l = ta(n)
      , c = ta(r);
    return l.numVars === c.numVars && l.numColors === c.numColors && l.numNumbers >= c.numNumbers ? bn(ip(l.values, c.values), i) : rp(n, r)
}
  , Ps = (n, r, i) => {
    const l = r - n;
    return l === 0 ? 1 : (i - n) / l
}
  , Zm = (n, r) => i => Ee(n, r, i);
function n1(n) {
    return typeof n == "number" ? Zm : typeof n == "string" ? nt.test(n) ? Xf : ap : Array.isArray(n) ? ip : typeof n == "object" ? t1 : Zm
}
function r1(n, r, i) {
    const l = []
      , c = i || n1(n[0])
      , m = n.length - 1;
    for (let h = 0; h < m; h++) {
        let f = c(n[h], n[h + 1]);
        if (r) {
            const p = Array.isArray(r) ? r[h] || Ie : r;
            f = bn(p, f)
        }
        l.push(f)
    }
    return l
}
function op(n, r, {clamp: i=!0, ease: l, mixer: c}={}) {
    const m = n.length;
    if (gc(m === r.length),
    m === 1)
        return () => r[0];
    n[0] > n[m - 1] && (n = [...n].reverse(),
    r = [...r].reverse());
    const h = r1(r, l, c)
      , f = h.length
      , p = g => {
        let v = 0;
        if (f > 1)
            for (; v < n.length - 2 && !(g < n[v + 1]); v++)
                ;
        const x = Ps(n[v], n[v + 1], g);
        return h[v](x)
    }
    ;
    return i ? g => p(kn(n[0], n[m - 1], g)) : p
}
function s1(n, r) {
    const i = n[n.length - 1];
    for (let l = 1; l <= r; l++) {
        const c = Ps(0, r, l);
        n.push(Ee(i, 1, c))
    }
}
function i1(n) {
    const r = [0];
    return s1(r, n.length - 1),
    r
}
function a1(n, r) {
    return n.map(i => i * r)
}
function o1(n, r) {
    return n.map( () => r || $f).splice(0, n.length - 1)
}
function na({duration: n=300, keyframes: r, times: i, ease: l="easeInOut"}) {
    const c = Uv(l) ? l.map(Xm) : Xm(l)
      , m = {
        done: !1,
        value: r[0]
    }
      , h = a1(i && i.length === r.length ? i : i1(r), n)
      , f = op(h, r, {
        ease: Array.isArray(c) ? c : o1(r, c)
    });
    return {
        calculatedDuration: n,
        next: p => (m.value = f(p),
        m.done = p >= n,
        m)
    }
}
function lp(n, r) {
    return r ? n * (1e3 / r) : 0
}
const l1 = 5;
function cp(n, r, i) {
    const l = Math.max(r - l1, 0);
    return lp(i - n(l), r - l)
}
const eh = .001
  , c1 = .01
  , u1 = 10
  , d1 = .05
  , m1 = 1;
function h1({duration: n=800, bounce: r=.25, velocity: i=0, mass: l=1}) {
    let c, m, h = 1 - r;
    h = kn(d1, m1, h),
    n = kn(c1, u1, Qt(n)),
    h < 1 ? (c = g => {
        const v = g * h
          , x = v * n
          , j = v - i
          , k = Ll(g, h)
          , M = Math.exp(-x);
        return eh - j / k * M
    }
    ,
    m = g => {
        const x = g * h * n
          , j = x * i + i
          , k = Math.pow(h, 2) * Math.pow(g, 2) * n
          , M = Math.exp(-x)
          , P = Ll(Math.pow(g, 2), h);
        return (-c(g) + eh > 0 ? -1 : 1) * ((j - k) * M) / P
    }
    ) : (c = g => {
        const v = Math.exp(-g * n)
          , x = (g - i) * n + 1;
        return -.001 + v * x
    }
    ,
    m = g => {
        const v = Math.exp(-g * n)
          , x = (i - g) * (n * n);
        return v * x
    }
    );
    const f = 5 / n
      , p = p1(c, m, f);
    if (n = Gn(n),
    isNaN(p))
        return {
            stiffness: 100,
            damping: 10,
            duration: n
        };
    {
        const g = Math.pow(p, 2) * l;
        return {
            stiffness: g,
            damping: h * 2 * Math.sqrt(l * g),
            duration: n
        }
    }
}
const f1 = 12;
function p1(n, r, i) {
    let l = i;
    for (let c = 1; c < f1; c++)
        l = l - n(l) / r(l);
    return l
}
function Ll(n, r) {
    return n * Math.sqrt(1 - r * r)
}
const g1 = ["duration", "bounce"]
  , y1 = ["stiffness", "damping", "mass"];
function th(n, r) {
    return r.some(i => n[i] !== void 0)
}
function x1(n) {
    let r = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!th(n, y1) && th(n, g1)) {
        const i = h1(n);
        r = {
            ...r,
            ...i,
            mass: 1
        },
        r.isResolvedFromDuration = !0
    }
    return r
}
function up({keyframes: n, restDelta: r, restSpeed: i, ...l}) {
    const c = n[0]
      , m = n[n.length - 1]
      , h = {
        done: !1,
        value: c
    }
      , {stiffness: f, damping: p, mass: g, duration: v, velocity: x, isResolvedFromDuration: j} = x1({
        ...l,
        velocity: -Qt(l.velocity || 0)
    })
      , k = x || 0
      , M = p / (2 * Math.sqrt(f * g))
      , P = m - c
      , A = Qt(Math.sqrt(f / g))
      , I = Math.abs(P) < 5;
    i || (i = I ? .01 : 2),
    r || (r = I ? .005 : .5);
    let z;
    if (M < 1) {
        const R = Ll(A, M);
        z = L => {
            const W = Math.exp(-M * A * L);
            return m - W * ((k + M * A * P) / R * Math.sin(R * L) + P * Math.cos(R * L))
        }
    } else if (M === 1)
        z = R => m - Math.exp(-A * R) * (P + (k + A * P) * R);
    else {
        const R = A * Math.sqrt(M * M - 1);
        z = L => {
            const W = Math.exp(-M * A * L)
              , se = Math.min(R * L, 300);
            return m - W * ((k + M * A * P) * Math.sinh(se) + R * P * Math.cosh(se)) / R
        }
    }
    return {
        calculatedDuration: j && v || null,
        next: R => {
            const L = z(R);
            if (j)
                h.done = R >= v;
            else {
                let W = k;
                R !== 0 && (M < 1 ? W = cp(z, R, L) : W = 0);
                const se = Math.abs(W) <= i
                  , ae = Math.abs(m - L) <= r;
                h.done = se && ae
            }
            return h.value = h.done ? m : L,
            h
        }
    }
}
function nh({keyframes: n, velocity: r=0, power: i=.8, timeConstant: l=325, bounceDamping: c=10, bounceStiffness: m=500, modifyTarget: h, min: f, max: p, restDelta: g=.5, restSpeed: v}) {
    const x = n[0]
      , j = {
        done: !1,
        value: x
    }
      , k = re => f !== void 0 && re < f || p !== void 0 && re > p
      , M = re => f === void 0 ? p : p === void 0 || Math.abs(f - re) < Math.abs(p - re) ? f : p;
    let P = i * r;
    const A = x + P
      , I = h === void 0 ? A : h(A);
    I !== A && (P = I - x);
    const z = re => -P * Math.exp(-re / l)
      , R = re => I + z(re)
      , L = re => {
        const fe = z(re)
          , _e = R(re);
        j.done = Math.abs(fe) <= g,
        j.value = j.done ? I : _e
    }
    ;
    let W, se;
    const ae = re => {
        k(j.value) && (W = re,
        se = up({
            keyframes: [j.value, M(j.value)],
            velocity: cp(R, re, j.value),
            damping: c,
            stiffness: m,
            restDelta: g,
            restSpeed: v
        }))
    }
    ;
    return ae(0),
    {
        calculatedDuration: null,
        next: re => {
            let fe = !1;
            return !se && W === void 0 && (fe = !0,
            L(re),
            ae(re)),
            W !== void 0 && re > W ? se.next(re - W) : (!fe && L(re),
            j)
        }
    }
}
const v1 = n => {
    const r = ({timestamp: i}) => n(i);
    return {
        start: () => Ne.update(r, !0),
        stop: () => Yt(r),
        now: () => Ze.isProcessing ? Ze.timestamp : performance.now()
    }
}
  , rh = 2e4;
function sh(n) {
    let r = 0;
    const i = 50;
    let l = n.next(r);
    for (; !l.done && r < rh; )
        r += i,
        l = n.next(r);
    return r >= rh ? 1 / 0 : r
}
const w1 = {
    decay: nh,
    inertia: nh,
    tween: na,
    keyframes: na,
    spring: up
};
function ra({autoplay: n=!0, delay: r=0, driver: i=v1, keyframes: l, type: c="keyframes", repeat: m=0, repeatDelay: h=0, repeatType: f="loop", onPlay: p, onStop: g, onComplete: v, onUpdate: x, ...j}) {
    let k = 1, M = !1, P, A;
    const I = () => {
        A = new Promise(N => {
            P = N
        }
        )
    }
    ;
    I();
    let z;
    const R = w1[c] || na;
    let L;
    R !== na && typeof l[0] != "number" && (L = op([0, 100], l, {
        clamp: !1
    }),
    l = [0, 100]);
    const W = R({
        ...j,
        keyframes: l
    });
    let se;
    f === "mirror" && (se = R({
        ...j,
        keyframes: [...l].reverse(),
        velocity: -(j.velocity || 0)
    }));
    let ae = "idle"
      , re = null
      , fe = null
      , _e = null;
    W.calculatedDuration === null && m && (W.calculatedDuration = sh(W));
    const {calculatedDuration: st} = W;
    let Me = 1 / 0
      , Ce = 1 / 0;
    st !== null && (Me = st + h,
    Ce = Me * (m + 1) - h);
    let we = 0;
    const $e = N => {
        if (fe === null)
            return;
        k > 0 && (fe = Math.min(fe, N)),
        k < 0 && (fe = Math.min(N - Ce / k, fe)),
        re !== null ? we = re : we = Math.round(N - fe) * k;
        const O = we - r * (k >= 0 ? 1 : -1)
          , ie = k >= 0 ? O < 0 : O > Ce;
        we = Math.max(O, 0),
        ae === "finished" && re === null && (we = Ce);
        let oe = we
          , ue = W;
        if (m) {
            const ve = Math.min(we, Ce) / Me;
            let Be = Math.floor(ve)
              , yt = ve % 1;
            !yt && ve >= 1 && (yt = 1),
            yt === 1 && Be--,
            Be = Math.min(Be, m + 1),
            !!(Be % 2) && (f === "reverse" ? (yt = 1 - yt,
            h && (yt -= h / Me)) : f === "mirror" && (ue = se)),
            oe = kn(0, 1, yt) * Me
        }
        const le = ie ? {
            done: !1,
            value: l[0]
        } : ue.next(oe);
        L && (le.value = L(le.value));
        let {done: ye} = le;
        !ie && st !== null && (ye = k >= 0 ? we >= Ce : we <= 0);
        const ge = re === null && (ae === "finished" || ae === "running" && ye);
        return x && x(le.value),
        ge && U(),
        le
    }
      , me = () => {
        z && z.stop(),
        z = void 0
    }
      , pe = () => {
        ae = "idle",
        me(),
        P(),
        I(),
        fe = _e = null
    }
      , U = () => {
        ae = "finished",
        v && v(),
        me(),
        P()
    }
      , Y = () => {
        if (M)
            return;
        z || (z = i($e));
        const N = z.now();
        p && p(),
        re !== null ? fe = N - re : (!fe || ae === "finished") && (fe = N),
        ae === "finished" && I(),
        _e = fe,
        re = null,
        ae = "running",
        z.start()
    }
    ;
    n && Y();
    const $ = {
        then(N, O) {
            return A.then(N, O)
        },
        get time() {
            return Qt(we)
        },
        set time(N) {
            N = Gn(N),
            we = N,
            re !== null || !z || k === 0 ? re = N : fe = z.now() - N / k
        },
        get duration() {
            const N = W.calculatedDuration === null ? sh(W) : W.calculatedDuration;
            return Qt(N)
        },
        get speed() {
            return k
        },
        set speed(N) {
            N === k || !z || (k = N,
            $.time = Qt(we))
        },
        get state() {
            return ae
        },
        play: Y,
        pause: () => {
            ae = "paused",
            re = we
        }
        ,
        stop: () => {
            M = !0,
            ae !== "idle" && (ae = "idle",
            g && g(),
            pe())
        }
        ,
        cancel: () => {
            _e !== null && $e(_e),
            pe()
        }
        ,
        complete: () => {
            ae = "finished"
        }
        ,
        sample: N => (fe = 0,
        $e(N))
    };
    return $
}
function j1(n) {
    let r;
    return () => (r === void 0 && (r = n()),
    r)
}
const b1 = j1( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , k1 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , Hi = 10
  , N1 = 2e4
  , S1 = (n, r) => r.type === "spring" || n === "backgroundColor" || !Bf(r.ease);
function C1(n, r, {onUpdate: i, onComplete: l, ...c}) {
    if (!(b1() && k1.has(r) && !c.repeatDelay && c.repeatType !== "mirror" && c.damping !== 0 && c.type !== "inertia"))
        return !1;
    let h = !1, f, p, g = !1;
    const v = () => {
        p = new Promise(R => {
            f = R
        }
        )
    }
    ;
    v();
    let {keyframes: x, duration: j=300, ease: k, times: M} = c;
    if (S1(r, c)) {
        const R = ra({
            ...c,
            repeat: 0,
            delay: 0
        });
        let L = {
            done: !1,
            value: x[0]
        };
        const W = [];
        let se = 0;
        for (; !L.done && se < N1; )
            L = R.sample(se),
            W.push(L.value),
            se += Hi;
        M = void 0,
        x = W,
        j = se - Hi,
        k = "linear"
    }
    const P = Lv(n.owner.current, r, x, {
        ...c,
        duration: j,
        ease: k,
        times: M
    })
      , A = () => {
        g = !1,
        P.cancel()
    }
      , I = () => {
        g = !0,
        Ne.update(A),
        f(),
        v()
    }
    ;
    return P.onfinish = () => {
        g || (n.set(Ov(x, c)),
        l && l(),
        I())
    }
    ,
    {
        then(R, L) {
            return p.then(R, L)
        },
        attachTimeline(R) {
            return P.timeline = R,
            P.onfinish = null,
            Ie
        },
        get time() {
            return Qt(P.currentTime || 0)
        },
        set time(R) {
            P.currentTime = Gn(R)
        },
        get speed() {
            return P.playbackRate
        },
        set speed(R) {
            P.playbackRate = R
        },
        get duration() {
            return Qt(j)
        },
        play: () => {
            h || (P.play(),
            Yt(A))
        }
        ,
        pause: () => P.pause(),
        stop: () => {
            if (h = !0,
            P.playState === "idle")
                return;
            const {currentTime: R} = P;
            if (R) {
                const L = ra({
                    ...c,
                    autoplay: !1
                });
                n.setWithVelocity(L.sample(R - Hi).value, L.sample(R).value, Hi)
            }
            I()
        }
        ,
        complete: () => {
            g || P.finish()
        }
        ,
        cancel: I
    }
}
function P1({keyframes: n, delay: r, onUpdate: i, onComplete: l}) {
    const c = () => (i && i(n[n.length - 1]),
    l && l(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: Ie,
        pause: Ie,
        stop: Ie,
        then: m => (m(),
        Promise.resolve()),
        cancel: Ie,
        complete: Ie
    });
    return r ? ra({
        keyframes: [0, 1],
        duration: 0,
        delay: r,
        onComplete: c
    }) : c()
}
const T1 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , E1 = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , M1 = {
    type: "keyframes",
    duration: .8
}
  , D1 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , A1 = (n, {keyframes: r}) => r.length > 2 ? M1 : qn.has(n) ? n.startsWith("scale") ? E1(r[1]) : T1 : D1
  , Ol = (n, r) => n === "zIndex" ? !1 : !!(typeof r == "number" || Array.isArray(r) || typeof r == "string" && (Nn.test(r) || r === "0") && !r.startsWith("url("))
  , R1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function I1(n) {
    const [r,i] = n.slice(0, -1).split("(");
    if (r === "drop-shadow")
        return n;
    const [l] = i.match(ha) || [];
    if (!l)
        return n;
    const c = i.replace(l, "");
    let m = R1.has(r) ? 1 : 0;
    return l !== i && (m *= 100),
    r + "(" + m + c + ")"
}
const L1 = /([a-z-]*)\(.*?\)/g
  , Vl = {
    ...Nn,
    getAnimatableNone: n => {
        const r = n.match(L1);
        return r ? r.map(I1).join(" ") : n
    }
}
  , O1 = {
    ...Sf,
    color: nt,
    backgroundColor: nt,
    outlineColor: nt,
    fill: nt,
    stroke: nt,
    borderColor: nt,
    borderTopColor: nt,
    borderRightColor: nt,
    borderBottomColor: nt,
    borderLeftColor: nt,
    filter: Vl,
    WebkitFilter: Vl
}
  , wc = n => O1[n];
function dp(n, r) {
    let i = wc(n);
    return i !== Vl && (i = Nn),
    i.getAnimatableNone ? i.getAnimatableNone(r) : void 0
}
const mp = n => /^0[^.\s]+$/.test(n);
function V1(n) {
    if (typeof n == "number")
        return n === 0;
    if (n !== null)
        return n === "none" || n === "0" || mp(n)
}
function _1(n, r, i, l) {
    const c = Ol(r, i);
    let m;
    Array.isArray(i) ? m = [...i] : m = [null, i];
    const h = l.from !== void 0 ? l.from : n.get();
    let f;
    const p = [];
    for (let g = 0; g < m.length; g++)
        m[g] === null && (m[g] = g === 0 ? h : m[g - 1]),
        V1(m[g]) && p.push(g),
        typeof m[g] == "string" && m[g] !== "none" && m[g] !== "0" && (f = m[g]);
    if (c && p.length && f)
        for (let g = 0; g < p.length; g++) {
            const v = p[g];
            m[v] = dp(r, f)
        }
    return m
}
function F1({when: n, delay: r, delayChildren: i, staggerChildren: l, staggerDirection: c, repeat: m, repeatType: h, repeatDelay: f, from: p, elapsed: g, ...v}) {
    return !!Object.keys(v).length
}
function jc(n, r) {
    return n[r] || n.default || n
}
const z1 = {
    skipAnimations: !1
}
  , bc = (n, r, i, l={}) => c => {
    const m = jc(l, n) || {}
      , h = m.delay || l.delay || 0;
    let {elapsed: f=0} = l;
    f = f - Gn(h);
    const p = _1(r, n, i, m)
      , g = p[0]
      , v = p[p.length - 1]
      , x = Ol(n, g)
      , j = Ol(n, v);
    let k = {
        keyframes: p,
        velocity: r.getVelocity(),
        ease: "easeOut",
        ...m,
        delay: -f,
        onUpdate: M => {
            r.set(M),
            m.onUpdate && m.onUpdate(M)
        }
        ,
        onComplete: () => {
            c(),
            m.onComplete && m.onComplete()
        }
    };
    if (F1(m) || (k = {
        ...k,
        ...A1(n, k)
    }),
    k.duration && (k.duration = Gn(k.duration)),
    k.repeatDelay && (k.repeatDelay = Gn(k.repeatDelay)),
    !x || !j || Iv.current || m.type === !1 || z1.skipAnimations)
        return P1(k);
    if (!l.isHandoff && r.owner && r.owner.current instanceof HTMLElement && !r.owner.getProps().onUpdate) {
        const M = C1(r, n, k);
        if (M)
            return M
    }
    return ra(k)
}
;
function sa(n) {
    return !!(dt(n) && n.add)
}
const hp = n => /^\-?\d*\.?\d+$/.test(n);
function kc(n, r) {
    n.indexOf(r) === -1 && n.push(r)
}
function Nc(n, r) {
    const i = n.indexOf(r);
    i > -1 && n.splice(i, 1)
}
class Sc {
    constructor() {
        this.subscriptions = []
    }
    add(r) {
        return kc(this.subscriptions, r),
        () => Nc(this.subscriptions, r)
    }
    notify(r, i, l) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](r, i, l);
            else
                for (let m = 0; m < c; m++) {
                    const h = this.subscriptions[m];
                    h && h(r, i, l)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const B1 = n => !isNaN(parseFloat(n));
class U1 {
    constructor(r, i={}) {
        this.version = "10.18.0",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (l, c=!0) => {
            this.prev = this.current,
            this.current = l;
            const {delta: m, timestamp: h} = Ze;
            this.lastUpdated !== h && (this.timeDelta = m,
            this.lastUpdated = h,
            Ne.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            c && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => Ne.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: l}) => {
            l !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = r,
        this.canTrackVelocity = B1(this.current),
        this.owner = i.owner
    }
    onChange(r) {
        return this.on("change", r)
    }
    on(r, i) {
        this.events[r] || (this.events[r] = new Sc);
        const l = this.events[r].add(i);
        return r === "change" ? () => {
            l(),
            Ne.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : l
    }
    clearListeners() {
        for (const r in this.events)
            this.events[r].clear()
    }
    attach(r, i) {
        this.passiveEffect = r,
        this.stopPassiveEffect = i
    }
    set(r, i=!0) {
        !i || !this.passiveEffect ? this.updateAndNotify(r, i) : this.passiveEffect(r, this.updateAndNotify)
    }
    setWithVelocity(r, i, l) {
        this.set(i),
        this.prev = r,
        this.timeDelta = l
    }
    jump(r) {
        this.updateAndNotify(r),
        this.prev = r,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? lp(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(r) {
        return this.stop(),
        new Promise(i => {
            this.hasAnimated = !0,
            this.animation = r(i),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Sr(n, r) {
    return new U1(n,r)
}
const fp = n => r => r.test(n)
  , W1 = {
    test: n => n === "auto",
    parse: n => n
}
  , pp = [Qn, Z, _t, xn, Qx, qx, W1]
  , gs = n => pp.find(fp(n))
  , H1 = [...pp, nt, Nn]
  , $1 = n => H1.find(fp(n));
function G1(n, r, i) {
    n.hasValue(r) ? n.getValue(r).set(i) : n.addValue(r, Sr(i))
}
function K1(n, r) {
    const i = pa(n, r);
    let {transitionEnd: l={}, transition: c={}, ...m} = i ? n.makeTargetAnimatable(i, !1) : {};
    m = {
        ...m,
        ...l
    };
    for (const h in m) {
        const f = uv(m[h]);
        G1(n, h, f)
    }
}
function q1(n, r, i) {
    var l, c;
    const m = Object.keys(r).filter(f => !n.hasValue(f))
      , h = m.length;
    if (h)
        for (let f = 0; f < h; f++) {
            const p = m[f]
              , g = r[p];
            let v = null;
            Array.isArray(g) && (v = g[0]),
            v === null && (v = (c = (l = i[p]) !== null && l !== void 0 ? l : n.readValue(p)) !== null && c !== void 0 ? c : r[p]),
            v != null && (typeof v == "string" && (hp(v) || mp(v)) ? v = parseFloat(v) : !$1(v) && Nn.test(g) && (v = dp(p, g)),
            n.addValue(p, Sr(v, {
                owner: n
            })),
            i[p] === void 0 && (i[p] = v),
            v !== null && n.setBaseTarget(p, v))
        }
}
function Q1(n, r) {
    return r ? (r[n] || r.default || r).from : void 0
}
function Y1(n, r, i) {
    const l = {};
    for (const c in n) {
        const m = Q1(c, r);
        if (m !== void 0)
            l[c] = m;
        else {
            const h = i.getValue(c);
            h && (l[c] = h.get())
        }
    }
    return l
}
function X1({protectedKeys: n, needsAnimating: r}, i) {
    const l = n.hasOwnProperty(i) && r[i] !== !0;
    return r[i] = !1,
    l
}
function J1(n, r) {
    const i = n.get();
    if (Array.isArray(r)) {
        for (let l = 0; l < r.length; l++)
            if (r[l] !== i)
                return !0
    } else
        return i !== r
}
function gp(n, r, {delay: i=0, transitionOverride: l, type: c}={}) {
    let {transition: m=n.getDefaultTransition(), transitionEnd: h, ...f} = n.makeTargetAnimatable(r);
    const p = n.getValue("willChange");
    l && (m = l);
    const g = []
      , v = c && n.animationState && n.animationState.getState()[c];
    for (const x in f) {
        const j = n.getValue(x)
          , k = f[x];
        if (!j || k === void 0 || v && X1(v, x))
            continue;
        const M = {
            delay: i,
            elapsed: 0,
            ...jc(m || {}, x)
        };
        if (window.HandoffAppearAnimations) {
            const I = n.getProps()[yf];
            if (I) {
                const z = window.HandoffAppearAnimations(I, x, j, Ne);
                z !== null && (M.elapsed = z,
                M.isHandoff = !0)
            }
        }
        let P = !M.isHandoff && !J1(j, k);
        if (M.type === "spring" && (j.getVelocity() || M.velocity) && (P = !1),
        j.animation && (P = !1),
        P)
            continue;
        j.start(bc(x, j, k, n.shouldReduceMotion && qn.has(x) ? {
            type: !1
        } : M));
        const A = j.animation;
        sa(p) && (p.add(x),
        A.then( () => p.remove(x))),
        g.push(A)
    }
    return h && Promise.all(g).then( () => {
        h && K1(n, h)
    }
    ),
    g
}
function _l(n, r, i={}) {
    const l = pa(n, r, i.custom);
    let {transition: c=n.getDefaultTransition() || {}} = l || {};
    i.transitionOverride && (c = i.transitionOverride);
    const m = l ? () => Promise.all(gp(n, l, i)) : () => Promise.resolve()
      , h = n.variantChildren && n.variantChildren.size ? (p=0) => {
        const {delayChildren: g=0, staggerChildren: v, staggerDirection: x} = c;
        return Z1(n, r, g + p, v, x, i)
    }
    : () => Promise.resolve()
      , {when: f} = c;
    if (f) {
        const [p,g] = f === "beforeChildren" ? [m, h] : [h, m];
        return p().then( () => g())
    } else
        return Promise.all([m(), h(i.delay)])
}
function Z1(n, r, i=0, l=0, c=1, m) {
    const h = []
      , f = (n.variantChildren.size - 1) * l
      , p = c === 1 ? (g=0) => g * l : (g=0) => f - g * l;
    return Array.from(n.variantChildren).sort(e2).forEach( (g, v) => {
        g.notify("AnimationStart", r),
        h.push(_l(g, r, {
            ...m,
            delay: i + p(v)
        }).then( () => g.notify("AnimationComplete", r)))
    }
    ),
    Promise.all(h)
}
function e2(n, r) {
    return n.sortNodePosition(r)
}
function t2(n, r, i={}) {
    n.notify("AnimationStart", r);
    let l;
    if (Array.isArray(r)) {
        const c = r.map(m => _l(n, m, i));
        l = Promise.all(c)
    } else if (typeof r == "string")
        l = _l(n, r, i);
    else {
        const c = typeof r == "function" ? pa(n, r, i.custom) : r;
        l = Promise.all(gp(n, c, i))
    }
    return l.then( () => n.notify("AnimationComplete", r))
}
const n2 = [...oc].reverse()
  , r2 = oc.length;
function s2(n) {
    return r => Promise.all(r.map( ({animation: i, options: l}) => t2(n, i, l)))
}
function i2(n) {
    let r = s2(n);
    const i = o2();
    let l = !0;
    const c = (p, g) => {
        const v = pa(n, g);
        if (v) {
            const {transition: x, transitionEnd: j, ...k} = v;
            p = {
                ...p,
                ...k,
                ...j
            }
        }
        return p
    }
    ;
    function m(p) {
        r = p(n)
    }
    function h(p, g) {
        const v = n.getProps()
          , x = n.getVariantContext(!0) || {}
          , j = []
          , k = new Set;
        let M = {}
          , P = 1 / 0;
        for (let I = 0; I < r2; I++) {
            const z = n2[I]
              , R = i[z]
              , L = v[z] !== void 0 ? v[z] : x[z]
              , W = Ss(L)
              , se = z === g ? R.isActive : null;
            se === !1 && (P = I);
            let ae = L === x[z] && L !== v[z] && W;
            if (ae && l && n.manuallyAnimateOnMount && (ae = !1),
            R.protectedKeys = {
                ...M
            },
            !R.isActive && se === null || !L && !R.prevProp || da(L) || typeof L == "boolean")
                continue;
            let fe = a2(R.prevProp, L) || z === g && R.isActive && !ae && W || I > P && W
              , _e = !1;
            const st = Array.isArray(L) ? L : [L];
            let Me = st.reduce(c, {});
            se === !1 && (Me = {});
            const {prevResolvedValues: Ce={}} = R
              , we = {
                ...Ce,
                ...Me
            }
              , $e = me => {
                fe = !0,
                k.has(me) && (_e = !0,
                k.delete(me)),
                R.needsAnimating[me] = !0
            }
            ;
            for (const me in we) {
                const pe = Me[me]
                  , U = Ce[me];
                if (M.hasOwnProperty(me))
                    continue;
                let Y = !1;
                ea(pe) && ea(U) ? Y = !Ff(pe, U) : Y = pe !== U,
                Y ? pe !== void 0 ? $e(me) : k.add(me) : pe !== void 0 && k.has(me) ? $e(me) : R.protectedKeys[me] = !0
            }
            R.prevProp = L,
            R.prevResolvedValues = Me,
            R.isActive && (M = {
                ...M,
                ...Me
            }),
            l && n.blockInitialAnimation && (fe = !1),
            fe && (!ae || _e) && j.push(...st.map(me => ({
                animation: me,
                options: {
                    type: z,
                    ...p
                }
            })))
        }
        if (k.size) {
            const I = {};
            k.forEach(z => {
                const R = n.getBaseTarget(z);
                R !== void 0 && (I[z] = R)
            }
            ),
            j.push({
                animation: I
            })
        }
        let A = !!j.length;
        return l && (v.initial === !1 || v.initial === v.animate) && !n.manuallyAnimateOnMount && (A = !1),
        l = !1,
        A ? r(j) : Promise.resolve()
    }
    function f(p, g, v) {
        var x;
        if (i[p].isActive === g)
            return Promise.resolve();
        (x = n.variantChildren) === null || x === void 0 || x.forEach(k => {
            var M;
            return (M = k.animationState) === null || M === void 0 ? void 0 : M.setActive(p, g)
        }
        ),
        i[p].isActive = g;
        const j = h(v, p);
        for (const k in i)
            i[k].protectedKeys = {};
        return j
    }
    return {
        animateChanges: h,
        setActive: f,
        setAnimateFunction: m,
        getState: () => i
    }
}
function a2(n, r) {
    return typeof r == "string" ? r !== n : Array.isArray(r) ? !Ff(r, n) : !1
}
function Un(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function o2() {
    return {
        animate: Un(!0),
        whileInView: Un(),
        whileHover: Un(),
        whileTap: Un(),
        whileDrag: Un(),
        whileFocus: Un(),
        exit: Un()
    }
}
class l2 extends Tn {
    constructor(r) {
        super(r),
        r.animationState || (r.animationState = i2(r))
    }
    updateAnimationControlsSubscription() {
        const {animate: r} = this.node.getProps();
        this.unmount(),
        da(r) && (this.unmount = r.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: r} = this.node.getProps()
          , {animate: i} = this.node.prevProps || {};
        r !== i && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let c2 = 0;
class u2 extends Tn {
    constructor() {
        super(...arguments),
        this.id = c2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: r, onExitComplete: i, custom: l} = this.node.presenceContext
          , {isPresent: c} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || r === c)
            return;
        const m = this.node.animationState.setActive("exit", !r, {
            custom: l ?? this.node.getProps().custom
        });
        i && !r && m.then( () => i(this.id))
    }
    mount() {
        const {register: r} = this.node.presenceContext || {};
        r && (this.unmount = r(this.id))
    }
    unmount() {}
}
const d2 = {
    animation: {
        Feature: l2
    },
    exit: {
        Feature: u2
    }
}
  , ih = (n, r) => Math.abs(n - r);
function m2(n, r) {
    const i = ih(n.x, r.x)
      , l = ih(n.y, r.y);
    return Math.sqrt(i ** 2 + l ** 2)
}
class yp {
    constructor(r, i, {transformPagePoint: l, contextWindow: c, dragSnapToOrigin: m=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = Sl(this.lastMoveEventInfo, this.history)
              , j = this.startEvent !== null
              , k = m2(x.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!j && !k)
                return;
            const {point: M} = x
              , {timestamp: P} = Ze;
            this.history.push({
                ...M,
                timestamp: P
            });
            const {onStart: A, onMove: I} = this.handlers;
            j || (A && A(this.lastMoveEvent, x),
            this.startEvent = this.lastMoveEvent),
            I && I(this.lastMoveEvent, x)
        }
        ,
        this.handlePointerMove = (x, j) => {
            this.lastMoveEvent = x,
            this.lastMoveEventInfo = Nl(j, this.transformPagePoint),
            Ne.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (x, j) => {
            this.end();
            const {onEnd: k, onSessionEnd: M, resumeAnimation: P} = this.handlers;
            if (this.dragSnapToOrigin && P && P(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const A = Sl(x.type === "pointercancel" ? this.lastMoveEventInfo : Nl(j, this.transformPagePoint), this.history);
            this.startEvent && k && k(x, A),
            M && M(x, A)
        }
        ,
        !If(r))
            return;
        this.dragSnapToOrigin = m,
        this.handlers = i,
        this.transformPagePoint = l,
        this.contextWindow = c || window;
        const h = fa(r)
          , f = Nl(h, this.transformPagePoint)
          , {point: p} = f
          , {timestamp: g} = Ze;
        this.history = [{
            ...p,
            timestamp: g
        }];
        const {onSessionStart: v} = i;
        v && v(r, Sl(f, this.history)),
        this.removeListeners = bn(qt(this.contextWindow, "pointermove", this.handlePointerMove), qt(this.contextWindow, "pointerup", this.handlePointerUp), qt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(r) {
        this.handlers = r
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Yt(this.updatePoint)
    }
}
function Nl(n, r) {
    return r ? {
        point: r(n.point)
    } : n
}
function ah(n, r) {
    return {
        x: n.x - r.x,
        y: n.y - r.y
    }
}
function Sl({point: n}, r) {
    return {
        point: n,
        delta: ah(n, xp(r)),
        offset: ah(n, h2(r)),
        velocity: f2(r, .1)
    }
}
function h2(n) {
    return n[0]
}
function xp(n) {
    return n[n.length - 1]
}
function f2(n, r) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let i = n.length - 1
      , l = null;
    const c = xp(n);
    for (; i >= 0 && (l = n[i],
    !(c.timestamp - l.timestamp > Gn(r))); )
        i--;
    if (!l)
        return {
            x: 0,
            y: 0
        };
    const m = Qt(c.timestamp - l.timestamp);
    if (m === 0)
        return {
            x: 0,
            y: 0
        };
    const h = {
        x: (c.x - l.x) / m,
        y: (c.y - l.y) / m
    };
    return h.x === 1 / 0 && (h.x = 0),
    h.y === 1 / 0 && (h.y = 0),
    h
}
function gt(n) {
    return n.max - n.min
}
function Fl(n, r=0, i=.01) {
    return Math.abs(n - r) <= i
}
function oh(n, r, i, l=.5) {
    n.origin = l,
    n.originPoint = Ee(r.min, r.max, n.origin),
    n.scale = gt(i) / gt(r),
    (Fl(n.scale, 1, 1e-4) || isNaN(n.scale)) && (n.scale = 1),
    n.translate = Ee(i.min, i.max, n.origin) - n.originPoint,
    (Fl(n.translate) || isNaN(n.translate)) && (n.translate = 0)
}
function js(n, r, i, l) {
    oh(n.x, r.x, i.x, l ? l.originX : void 0),
    oh(n.y, r.y, i.y, l ? l.originY : void 0)
}
function lh(n, r, i) {
    n.min = i.min + r.min,
    n.max = n.min + gt(r)
}
function p2(n, r, i) {
    lh(n.x, r.x, i.x),
    lh(n.y, r.y, i.y)
}
function ch(n, r, i) {
    n.min = r.min - i.min,
    n.max = n.min + gt(r)
}
function bs(n, r, i) {
    ch(n.x, r.x, i.x),
    ch(n.y, r.y, i.y)
}
function g2(n, {min: r, max: i}, l) {
    return r !== void 0 && n < r ? n = l ? Ee(r, n, l.min) : Math.max(n, r) : i !== void 0 && n > i && (n = l ? Ee(i, n, l.max) : Math.min(n, i)),
    n
}
function uh(n, r, i) {
    return {
        min: r !== void 0 ? n.min + r : void 0,
        max: i !== void 0 ? n.max + i - (n.max - n.min) : void 0
    }
}
function y2(n, {top: r, left: i, bottom: l, right: c}) {
    return {
        x: uh(n.x, i, c),
        y: uh(n.y, r, l)
    }
}
function dh(n, r) {
    let i = r.min - n.min
      , l = r.max - n.max;
    return r.max - r.min < n.max - n.min && ([i,l] = [l, i]),
    {
        min: i,
        max: l
    }
}
function x2(n, r) {
    return {
        x: dh(n.x, r.x),
        y: dh(n.y, r.y)
    }
}
function v2(n, r) {
    let i = .5;
    const l = gt(n)
      , c = gt(r);
    return c > l ? i = Ps(r.min, r.max - l, n.min) : l > c && (i = Ps(n.min, n.max - c, r.min)),
    kn(0, 1, i)
}
function w2(n, r) {
    const i = {};
    return r.min !== void 0 && (i.min = r.min - n.min),
    r.max !== void 0 && (i.max = r.max - n.min),
    i
}
const zl = .35;
function j2(n=zl) {
    return n === !1 ? n = 0 : n === !0 && (n = zl),
    {
        x: mh(n, "left", "right"),
        y: mh(n, "top", "bottom")
    }
}
function mh(n, r, i) {
    return {
        min: hh(n, r),
        max: hh(n, i)
    }
}
function hh(n, r) {
    return typeof n == "number" ? n : n[r] || 0
}
const fh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , kr = () => ({
    x: fh(),
    y: fh()
})
  , ph = () => ({
    min: 0,
    max: 0
})
  , Ve = () => ({
    x: ph(),
    y: ph()
});
function St(n) {
    return [n("x"), n("y")]
}
function vp({top: n, left: r, right: i, bottom: l}) {
    return {
        x: {
            min: r,
            max: i
        },
        y: {
            min: n,
            max: l
        }
    }
}
function b2({x: n, y: r}) {
    return {
        top: r.min,
        right: n.max,
        bottom: r.max,
        left: n.min
    }
}
function k2(n, r) {
    if (!r)
        return n;
    const i = r({
        x: n.left,
        y: n.top
    })
      , l = r({
        x: n.right,
        y: n.bottom
    });
    return {
        top: i.y,
        left: i.x,
        bottom: l.y,
        right: l.x
    }
}
function Cl(n) {
    return n === void 0 || n === 1
}
function Bl({scale: n, scaleX: r, scaleY: i}) {
    return !Cl(n) || !Cl(r) || !Cl(i)
}
function Wn(n) {
    return Bl(n) || wp(n) || n.z || n.rotate || n.rotateX || n.rotateY
}
function wp(n) {
    return gh(n.x) || gh(n.y)
}
function gh(n) {
    return n && n !== "0%"
}
function ia(n, r, i) {
    const l = n - i
      , c = r * l;
    return i + c
}
function yh(n, r, i, l, c) {
    return c !== void 0 && (n = ia(n, c, l)),
    ia(n, i, l) + r
}
function Ul(n, r=0, i=1, l, c) {
    n.min = yh(n.min, r, i, l, c),
    n.max = yh(n.max, r, i, l, c)
}
function jp(n, {x: r, y: i}) {
    Ul(n.x, r.translate, r.scale, r.originPoint),
    Ul(n.y, i.translate, i.scale, i.originPoint)
}
function N2(n, r, i, l=!1) {
    const c = i.length;
    if (!c)
        return;
    r.x = r.y = 1;
    let m, h;
    for (let f = 0; f < c; f++) {
        m = i[f],
        h = m.projectionDelta;
        const p = m.instance;
        p && p.style && p.style.display === "contents" || (l && m.options.layoutScroll && m.scroll && m !== m.root && Nr(n, {
            x: -m.scroll.offset.x,
            y: -m.scroll.offset.y
        }),
        h && (r.x *= h.x.scale,
        r.y *= h.y.scale,
        jp(n, h)),
        l && Wn(m.latestValues) && Nr(n, m.latestValues))
    }
    r.x = xh(r.x),
    r.y = xh(r.y)
}
function xh(n) {
    return Number.isInteger(n) || n > 1.0000000000001 || n < .999999999999 ? n : 1
}
function vn(n, r) {
    n.min = n.min + r,
    n.max = n.max + r
}
function vh(n, r, [i,l,c]) {
    const m = r[c] !== void 0 ? r[c] : .5
      , h = Ee(n.min, n.max, m);
    Ul(n, r[i], r[l], h, r.scale)
}
const S2 = ["x", "scaleX", "originX"]
  , C2 = ["y", "scaleY", "originY"];
function Nr(n, r) {
    vh(n.x, r, S2),
    vh(n.y, r, C2)
}
function bp(n, r) {
    return vp(k2(n.getBoundingClientRect(), r))
}
function P2(n, r, i) {
    const l = bp(n, i)
      , {scroll: c} = r;
    return c && (vn(l.x, c.offset.x),
    vn(l.y, c.offset.y)),
    l
}
const kp = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , T2 = new WeakMap;
class E2 {
    constructor(r) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ve(),
        this.visualElement = r
    }
    start(r, {snapToCursor: i=!1}={}) {
        const {presenceContext: l} = this.visualElement;
        if (l && l.isPresent === !1)
            return;
        const c = v => {
            const {dragSnapToOrigin: x} = this.getProps();
            x ? this.pauseAnimation() : this.stopAnimation(),
            i && this.snapToCursor(fa(v, "page").point)
        }
          , m = (v, x) => {
            const {drag: j, dragPropagation: k, onDragStart: M} = this.getProps();
            if (j && !k && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = Of(j),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            St(A => {
                let I = this.getAxisMotionValue(A).get() || 0;
                if (_t.test(I)) {
                    const {projection: z} = this.visualElement;
                    if (z && z.layout) {
                        const R = z.layout.layoutBox[A];
                        R && (I = gt(R) * (parseFloat(I) / 100))
                    }
                }
                this.originPoint[A] = I
            }
            ),
            M && Ne.update( () => M(v, x), !1, !0);
            const {animationState: P} = this.visualElement;
            P && P.setActive("whileDrag", !0)
        }
          , h = (v, x) => {
            const {dragPropagation: j, dragDirectionLock: k, onDirectionLock: M, onDrag: P} = this.getProps();
            if (!j && !this.openGlobalLock)
                return;
            const {offset: A} = x;
            if (k && this.currentDirection === null) {
                this.currentDirection = M2(A),
                this.currentDirection !== null && M && M(this.currentDirection);
                return
            }
            this.updateAxis("x", x.point, A),
            this.updateAxis("y", x.point, A),
            this.visualElement.render(),
            P && P(v, x)
        }
          , f = (v, x) => this.stop(v, x)
          , p = () => St(v => {
            var x;
            return this.getAnimationState(v) === "paused" && ((x = this.getAxisMotionValue(v).animation) === null || x === void 0 ? void 0 : x.play())
        }
        )
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new yp(r,{
            onSessionStart: c,
            onStart: m,
            onMove: h,
            onSessionEnd: f,
            resumeAnimation: p
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: kp(this.visualElement)
        })
    }
    stop(r, i) {
        const l = this.isDragging;
        if (this.cancel(),
        !l)
            return;
        const {velocity: c} = i;
        this.startAnimation(c);
        const {onDragEnd: m} = this.getProps();
        m && Ne.update( () => m(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: r, animationState: i} = this.visualElement;
        r && (r.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: l} = this.getProps();
        !l && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        i && i.setActive("whileDrag", !1)
    }
    updateAxis(r, i, l) {
        const {drag: c} = this.getProps();
        if (!l || !$i(r, c, this.currentDirection))
            return;
        const m = this.getAxisMotionValue(r);
        let h = this.originPoint[r] + l[r];
        this.constraints && this.constraints[r] && (h = g2(h, this.constraints[r], this.elastic[r])),
        m.set(h)
    }
    resolveConstraints() {
        var r;
        const {dragConstraints: i, dragElastic: l} = this.getProps()
          , c = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (r = this.visualElement.projection) === null || r === void 0 ? void 0 : r.layout
          , m = this.constraints;
        i && jr(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && c ? this.constraints = y2(c.layoutBox, i) : this.constraints = !1,
        this.elastic = j2(l),
        m !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && St(h => {
            this.getAxisMotionValue(h) && (this.constraints[h] = w2(c.layoutBox[h], this.constraints[h]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: r, onMeasureDragConstraints: i} = this.getProps();
        if (!r || !jr(r))
            return !1;
        const l = r.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const m = P2(l, c.root, this.visualElement.getTransformPagePoint());
        let h = x2(c.layout.layoutBox, m);
        if (i) {
            const f = i(b2(h));
            this.hasMutatedConstraints = !!f,
            f && (h = vp(f))
        }
        return h
    }
    startAnimation(r) {
        const {drag: i, dragMomentum: l, dragElastic: c, dragTransition: m, dragSnapToOrigin: h, onDragTransitionEnd: f} = this.getProps()
          , p = this.constraints || {}
          , g = St(v => {
            if (!$i(v, i, this.currentDirection))
                return;
            let x = p && p[v] || {};
            h && (x = {
                min: 0,
                max: 0
            });
            const j = c ? 200 : 1e6
              , k = c ? 40 : 1e7
              , M = {
                type: "inertia",
                velocity: l ? r[v] : 0,
                bounceStiffness: j,
                bounceDamping: k,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...m,
                ...x
            };
            return this.startAxisValueAnimation(v, M)
        }
        );
        return Promise.all(g).then(f)
    }
    startAxisValueAnimation(r, i) {
        const l = this.getAxisMotionValue(r);
        return l.start(bc(r, l, 0, i))
    }
    stopAnimation() {
        St(r => this.getAxisMotionValue(r).stop())
    }
    pauseAnimation() {
        St(r => {
            var i;
            return (i = this.getAxisMotionValue(r).animation) === null || i === void 0 ? void 0 : i.pause()
        }
        )
    }
    getAnimationState(r) {
        var i;
        return (i = this.getAxisMotionValue(r).animation) === null || i === void 0 ? void 0 : i.state
    }
    getAxisMotionValue(r) {
        const i = "_drag" + r.toUpperCase()
          , l = this.visualElement.getProps()
          , c = l[i];
        return c || this.visualElement.getValue(r, (l.initial ? l.initial[r] : void 0) || 0)
    }
    snapToCursor(r) {
        St(i => {
            const {drag: l} = this.getProps();
            if (!$i(i, l, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , m = this.getAxisMotionValue(i);
            if (c && c.layout) {
                const {min: h, max: f} = c.layout.layoutBox[i];
                m.set(r[i] - Ee(h, f, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: r, dragConstraints: i} = this.getProps()
          , {projection: l} = this.visualElement;
        if (!jr(i) || !l || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        St(h => {
            const f = this.getAxisMotionValue(h);
            if (f) {
                const p = f.get();
                c[h] = v2({
                    min: p,
                    max: p
                }, this.constraints[h])
            }
        }
        );
        const {transformTemplate: m} = this.visualElement.getProps();
        this.visualElement.current.style.transform = m ? m({}, "") : "none",
        l.root && l.root.updateScroll(),
        l.updateLayout(),
        this.resolveConstraints(),
        St(h => {
            if (!$i(h, r, null))
                return;
            const f = this.getAxisMotionValue(h)
              , {min: p, max: g} = this.constraints[h];
            f.set(Ee(p, g, c[h]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        T2.set(this.visualElement, this);
        const r = this.visualElement.current
          , i = qt(r, "pointerdown", p => {
            const {drag: g, dragListener: v=!0} = this.getProps();
            g && v && this.start(p)
        }
        )
          , l = () => {
            const {dragConstraints: p} = this.getProps();
            jr(p) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , m = c.addEventListener("measure", l);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        l();
        const h = Kt(window, "resize", () => this.scalePositionWithinConstraints())
          , f = c.addEventListener("didUpdate", ({delta: p, hasLayoutChanged: g}) => {
            this.isDragging && g && (St(v => {
                const x = this.getAxisMotionValue(v);
                x && (this.originPoint[v] += p[v].translate,
                x.set(x.get() + p[v].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            h(),
            i(),
            m(),
            f && f()
        }
    }
    getProps() {
        const r = this.visualElement.getProps()
          , {drag: i=!1, dragDirectionLock: l=!1, dragPropagation: c=!1, dragConstraints: m=!1, dragElastic: h=zl, dragMomentum: f=!0} = r;
        return {
            ...r,
            drag: i,
            dragDirectionLock: l,
            dragPropagation: c,
            dragConstraints: m,
            dragElastic: h,
            dragMomentum: f
        }
    }
}
function $i(n, r, i) {
    return (r === !0 || r === n) && (i === null || i === n)
}
function M2(n, r=10) {
    let i = null;
    return Math.abs(n.y) > r ? i = "y" : Math.abs(n.x) > r && (i = "x"),
    i
}
class D2 extends Tn {
    constructor(r) {
        super(r),
        this.removeGroupControls = Ie,
        this.removeListeners = Ie,
        this.controls = new E2(r)
    }
    mount() {
        const {dragControls: r} = this.node.getProps();
        r && (this.removeGroupControls = r.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ie
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const wh = n => (r, i) => {
    n && Ne.update( () => n(r, i))
}
;
class A2 extends Tn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ie
    }
    onPointerDown(r) {
        this.session = new yp(r,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: kp(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: r, onPanStart: i, onPan: l, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: wh(r),
            onStart: wh(i),
            onMove: l,
            onEnd: (m, h) => {
                delete this.session,
                c && Ne.update( () => c(m, h))
            }
        }
    }
    mount() {
        this.removePointerDownListener = qt(this.node.current, "pointerdown", r => this.onPointerDown(r))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function R2() {
    const n = C.useContext(ic);
    if (n === null)
        return [!0, null];
    const {isPresent: r, onExitComplete: i, register: l} = n
      , c = C.useId();
    return C.useEffect( () => l(c), []),
    !r && i ? [!1, () => i && i(c)] : [!0]
}
const Ki = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function jh(n, r) {
    return r.max === r.min ? 0 : n / (r.max - r.min) * 100
}
const ys = {
    correct: (n, r) => {
        if (!r.target)
            return n;
        if (typeof n == "string")
            if (Z.test(n))
                n = parseFloat(n);
            else
                return n;
        const i = jh(n, r.target.x)
          , l = jh(n, r.target.y);
        return `${i}% ${l}%`
    }
}
  , I2 = {
    correct: (n, {treeScale: r, projectionDelta: i}) => {
        const l = n
          , c = Nn.parse(n);
        if (c.length > 5)
            return l;
        const m = Nn.createTransformer(n)
          , h = typeof c[0] != "number" ? 1 : 0
          , f = i.x.scale * r.x
          , p = i.y.scale * r.y;
        c[0 + h] /= f,
        c[1 + h] /= p;
        const g = Ee(f, p, .5);
        return typeof c[2 + h] == "number" && (c[2 + h] /= g),
        typeof c[3 + h] == "number" && (c[3 + h] /= g),
        m(c)
    }
};
class L2 extends Yl.Component {
    componentDidMount() {
        const {visualElement: r, layoutGroup: i, switchLayoutGroup: l, layoutId: c} = this.props
          , {projection: m} = r;
        Bx(O2),
        m && (i.group && i.group.add(m),
        l && l.register && c && l.register(m),
        m.root.didUpdate(),
        m.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        m.setOptions({
            ...m.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Ki.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(r) {
        const {layoutDependency: i, visualElement: l, drag: c, isPresent: m} = this.props
          , h = l.projection;
        return h && (h.isPresent = m,
        c || r.layoutDependency !== i || i === void 0 ? h.willUpdate() : this.safeToRemove(),
        r.isPresent !== m && (m ? h.promote() : h.relegate() || Ne.postRender( () => {
            const f = h.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: r} = this.props.visualElement;
        r && (r.root.didUpdate(),
        queueMicrotask( () => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: r, layoutGroup: i, switchLayoutGroup: l} = this.props
          , {projection: c} = r;
        c && (c.scheduleCheckAfterUnmount(),
        i && i.group && i.group.remove(c),
        l && l.deregister && l.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: r} = this.props;
        r && r()
    }
    render() {
        return null
    }
}
function Np(n) {
    const [r,i] = R2()
      , l = C.useContext(vf);
    return Yl.createElement(L2, {
        ...n,
        layoutGroup: l,
        switchLayoutGroup: C.useContext(wf),
        isPresent: r,
        safeToRemove: i
    })
}
const O2 = {
    borderRadius: {
        ...ys,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ys,
    borderTopRightRadius: ys,
    borderBottomLeftRadius: ys,
    borderBottomRightRadius: ys,
    boxShadow: I2
}
  , Sp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , V2 = Sp.length
  , bh = n => typeof n == "string" ? parseFloat(n) : n
  , kh = n => typeof n == "number" || Z.test(n);
function _2(n, r, i, l, c, m) {
    c ? (n.opacity = Ee(0, i.opacity !== void 0 ? i.opacity : 1, F2(l)),
    n.opacityExit = Ee(r.opacity !== void 0 ? r.opacity : 1, 0, z2(l))) : m && (n.opacity = Ee(r.opacity !== void 0 ? r.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, l));
    for (let h = 0; h < V2; h++) {
        const f = `border${Sp[h]}Radius`;
        let p = Nh(r, f)
          , g = Nh(i, f);
        if (p === void 0 && g === void 0)
            continue;
        p || (p = 0),
        g || (g = 0),
        p === 0 || g === 0 || kh(p) === kh(g) ? (n[f] = Math.max(Ee(bh(p), bh(g), l), 0),
        (_t.test(g) || _t.test(p)) && (n[f] += "%")) : n[f] = g
    }
    (r.rotate || i.rotate) && (n.rotate = Ee(r.rotate || 0, i.rotate || 0, l))
}
function Nh(n, r) {
    return n[r] !== void 0 ? n[r] : n.borderRadius
}
const F2 = Cp(0, .5, qf)
  , z2 = Cp(.5, .95, Ie);
function Cp(n, r, i) {
    return l => l < n ? 0 : l > r ? 1 : i(Ps(n, r, l))
}
function Sh(n, r) {
    n.min = r.min,
    n.max = r.max
}
function Nt(n, r) {
    Sh(n.x, r.x),
    Sh(n.y, r.y)
}
function Ch(n, r, i, l, c) {
    return n -= r,
    n = ia(n, 1 / i, l),
    c !== void 0 && (n = ia(n, 1 / c, l)),
    n
}
function B2(n, r=0, i=1, l=.5, c, m=n, h=n) {
    if (_t.test(r) && (r = parseFloat(r),
    r = Ee(h.min, h.max, r / 100) - h.min),
    typeof r != "number")
        return;
    let f = Ee(m.min, m.max, l);
    n === m && (f -= r),
    n.min = Ch(n.min, r, i, f, c),
    n.max = Ch(n.max, r, i, f, c)
}
function Ph(n, r, [i,l,c], m, h) {
    B2(n, r[i], r[l], r[c], r.scale, m, h)
}
const U2 = ["x", "scaleX", "originX"]
  , W2 = ["y", "scaleY", "originY"];
function Th(n, r, i, l) {
    Ph(n.x, r, U2, i ? i.x : void 0, l ? l.x : void 0),
    Ph(n.y, r, W2, i ? i.y : void 0, l ? l.y : void 0)
}
function Eh(n) {
    return n.translate === 0 && n.scale === 1
}
function Pp(n) {
    return Eh(n.x) && Eh(n.y)
}
function H2(n, r) {
    return n.x.min === r.x.min && n.x.max === r.x.max && n.y.min === r.y.min && n.y.max === r.y.max
}
function Tp(n, r) {
    return Math.round(n.x.min) === Math.round(r.x.min) && Math.round(n.x.max) === Math.round(r.x.max) && Math.round(n.y.min) === Math.round(r.y.min) && Math.round(n.y.max) === Math.round(r.y.max)
}
function Mh(n) {
    return gt(n.x) / gt(n.y)
}
class $2 {
    constructor() {
        this.members = []
    }
    add(r) {
        kc(this.members, r),
        r.scheduleRender()
    }
    remove(r) {
        if (Nc(this.members, r),
        r === this.prevLead && (this.prevLead = void 0),
        r === this.lead) {
            const i = this.members[this.members.length - 1];
            i && this.promote(i)
        }
    }
    relegate(r) {
        const i = this.members.findIndex(c => r === c);
        if (i === 0)
            return !1;
        let l;
        for (let c = i; c >= 0; c--) {
            const m = this.members[c];
            if (m.isPresent !== !1) {
                l = m;
                break
            }
        }
        return l ? (this.promote(l),
        !0) : !1
    }
    promote(r, i) {
        const l = this.lead;
        if (r !== l && (this.prevLead = l,
        this.lead = r,
        r.show(),
        l)) {
            l.instance && l.scheduleRender(),
            r.scheduleRender(),
            r.resumeFrom = l,
            i && (r.resumeFrom.preserveOpacity = !0),
            l.snapshot && (r.snapshot = l.snapshot,
            r.snapshot.latestValues = l.animationValues || l.latestValues),
            r.root && r.root.isUpdating && (r.isLayoutDirty = !0);
            const {crossfade: c} = r.options;
            c === !1 && l.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(r => {
            const {options: i, resumingFrom: l} = r;
            i.onExitComplete && i.onExitComplete(),
            l && l.options.onExitComplete && l.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(r => {
            r.instance && r.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Dh(n, r, i) {
    let l = "";
    const c = n.x.translate / r.x
      , m = n.y.translate / r.y;
    if ((c || m) && (l = `translate3d(${c}px, ${m}px, 0) `),
    (r.x !== 1 || r.y !== 1) && (l += `scale(${1 / r.x}, ${1 / r.y}) `),
    i) {
        const {rotate: p, rotateX: g, rotateY: v} = i;
        p && (l += `rotate(${p}deg) `),
        g && (l += `rotateX(${g}deg) `),
        v && (l += `rotateY(${v}deg) `)
    }
    const h = n.x.scale * r.x
      , f = n.y.scale * r.y;
    return (h !== 1 || f !== 1) && (l += `scale(${h}, ${f})`),
    l || "none"
}
const G2 = (n, r) => n.depth - r.depth;
class K2 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(r) {
        kc(this.children, r),
        this.isDirty = !0
    }
    remove(r) {
        Nc(this.children, r),
        this.isDirty = !0
    }
    forEach(r) {
        this.isDirty && this.children.sort(G2),
        this.isDirty = !1,
        this.children.forEach(r)
    }
}
function q2(n, r) {
    const i = performance.now()
      , l = ({timestamp: c}) => {
        const m = c - i;
        m >= r && (Yt(l),
        n(m - r))
    }
    ;
    return Ne.read(l, !0),
    () => Yt(l)
}
function Q2(n) {
    window.MotionDebug && window.MotionDebug.record(n)
}
function Y2(n) {
    return n instanceof SVGElement && n.tagName !== "svg"
}
function X2(n, r, i) {
    const l = dt(n) ? n : Sr(n);
    return l.start(bc("", l, r, i)),
    l.animation
}
const Ah = ["", "X", "Y", "Z"]
  , J2 = {
    visibility: "hidden"
}
  , Rh = 1e3;
let Z2 = 0;
const Hn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Ep({attachResizeListener: n, defaultParent: r, measureScroll: i, checkIsScrollRoot: l, resetTransform: c}) {
    return class {
        constructor(h={}, f=r == null ? void 0 : r()) {
            this.id = Z2++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Hn.totalNodes = Hn.resolvedTargetDeltas = Hn.recalculatedProjection = 0,
                this.nodes.forEach(nw),
                this.nodes.forEach(ow),
                this.nodes.forEach(lw),
                this.nodes.forEach(rw),
                Q2(Hn)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = h,
            this.root = f ? f.root || f : this,
            this.path = f ? [...f.path, f] : [],
            this.parent = f,
            this.depth = f ? f.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new K2)
        }
        addEventListener(h, f) {
            return this.eventHandlers.has(h) || this.eventHandlers.set(h, new Sc),
            this.eventHandlers.get(h).add(f)
        }
        notifyListeners(h, ...f) {
            const p = this.eventHandlers.get(h);
            p && p.notify(...f)
        }
        hasListeners(h) {
            return this.eventHandlers.has(h)
        }
        mount(h, f=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Y2(h),
            this.instance = h;
            const {layoutId: p, layout: g, visualElement: v} = this.options;
            if (v && !v.current && v.mount(h),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            f && (g || p) && (this.isLayoutDirty = !0),
            n) {
                let x;
                const j = () => this.root.updateBlockedByResize = !1;
                n(h, () => {
                    this.root.updateBlockedByResize = !0,
                    x && x(),
                    x = q2(j, 250),
                    Ki.hasAnimatedSinceResize && (Ki.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Lh))
                }
                )
            }
            p && this.root.registerSharedNode(p, this),
            this.options.animate !== !1 && v && (p || g) && this.addEventListener("didUpdate", ({delta: x, hasLayoutChanged: j, hasRelativeTargetChanged: k, layout: M}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const P = this.options.transition || v.getDefaultTransition() || hw
                  , {onLayoutAnimationStart: A, onLayoutAnimationComplete: I} = v.getProps()
                  , z = !this.targetLayout || !Tp(this.targetLayout, M) || k
                  , R = !j && k;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || R || j && (z || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(x, R);
                    const L = {
                        ...jc(P, "layout"),
                        onPlay: A,
                        onComplete: I
                    };
                    (v.shouldReduceMotion || this.options.layoutRoot) && (L.delay = 0,
                    L.type = !1),
                    this.startAnimation(L)
                } else
                    j || Lh(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = M
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const h = this.getStack();
            h && h.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Yt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(cw),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: h} = this.options;
            return h && h.getProps().transformTemplate
        }
        willUpdate(h=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const x = this.path[v];
                x.shouldResetTransform = !0,
                x.updateScroll("snapshot"),
                x.options.layoutRoot && x.willUpdate(!1)
            }
            const {layoutId: f, layout: p} = this.options;
            if (f === void 0 && !p)
                return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            h && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Ih);
                return
            }
            this.isUpdating || this.nodes.forEach(iw),
            this.isUpdating = !1,
            this.nodes.forEach(aw),
            this.nodes.forEach(ew),
            this.nodes.forEach(tw),
            this.clearAllSnapshots();
            const f = performance.now();
            Ze.delta = kn(0, 1e3 / 60, f - Ze.timestamp),
            Ze.timestamp = f,
            Ze.isProcessing = !0,
            yl.update.process(Ze),
            yl.preRender.process(Ze),
            yl.render.process(Ze),
            Ze.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(sw),
            this.sharedNodes.forEach(uw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ne.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ne.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const h = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Ve(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: f} = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0)
        }
        updateScroll(h="measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (f = !1),
            f && (this.scroll = {
                animationId: this.root.animationId,
                phase: h,
                isRoot: l(this.instance),
                offset: i(this.instance)
            })
        }
        resetTransform() {
            if (!c)
                return;
            const h = this.isLayoutDirty || this.shouldResetTransform
              , f = this.projectionDelta && !Pp(this.projectionDelta)
              , p = this.getTransformTemplate()
              , g = p ? p(this.latestValues, "") : void 0
              , v = g !== this.prevTransformTemplateValue;
            h && (f || Wn(this.latestValues) || v) && (c(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(h=!0) {
            const f = this.measurePageBox();
            let p = this.removeElementScroll(f);
            return h && (p = this.removeTransform(p)),
            fw(p),
            {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: h} = this.options;
            if (!h)
                return Ve();
            const f = h.measureViewportBox()
              , {scroll: p} = this.root;
            return p && (vn(f.x, p.offset.x),
            vn(f.y, p.offset.y)),
            f
        }
        removeElementScroll(h) {
            const f = Ve();
            Nt(f, h);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p]
                  , {scroll: v, options: x} = g;
                if (g !== this.root && v && x.layoutScroll) {
                    if (v.isRoot) {
                        Nt(f, h);
                        const {scroll: j} = this.root;
                        j && (vn(f.x, -j.offset.x),
                        vn(f.y, -j.offset.y))
                    }
                    vn(f.x, v.offset.x),
                    vn(f.y, v.offset.y)
                }
            }
            return f
        }
        applyTransform(h, f=!1) {
            const p = Ve();
            Nt(p, h);
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                !f && v.options.layoutScroll && v.scroll && v !== v.root && Nr(p, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }),
                Wn(v.latestValues) && Nr(p, v.latestValues)
            }
            return Wn(this.latestValues) && Nr(p, this.latestValues),
            p
        }
        removeTransform(h) {
            const f = Ve();
            Nt(f, h);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                if (!g.instance || !Wn(g.latestValues))
                    continue;
                Bl(g.latestValues) && g.updateSnapshot();
                const v = Ve()
                  , x = g.measurePageBox();
                Nt(v, x),
                Th(f, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v)
            }
            return Wn(this.latestValues) && Th(f, this.latestValues),
            f
        }
        setTargetDelta(h) {
            this.targetDelta = h,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(h) {
            this.options = {
                ...this.options,
                ...h,
                crossfade: h.crossfade !== void 0 ? h.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ze.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(h=!1) {
            var f;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== p;
            if (!(h || g && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: x, layoutId: j} = this.options;
            if (!(!this.layout || !(x || j))) {
                if (this.resolvedRelativeTargetAt = Ze.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const k = this.getClosestProjectingParent();
                    k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ve(),
                    this.relativeTargetOrigin = Ve(),
                    bs(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox),
                    Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ve(),
                    this.targetWithTransforms = Ve()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    p2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Nt(this.target, this.layout.layoutBox),
                    jp(this.target, this.targetDelta)) : Nt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const k = this.getClosestProjectingParent();
                        k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Ve(),
                        this.relativeTargetOrigin = Ve(),
                        bs(this.relativeTargetOrigin, this.target, k.target),
                        Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Hn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Bl(this.parent.latestValues) || wp(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var h;
            const f = this.getLead()
              , p = !!this.resumingFrom || this !== f;
            let g = !0;
            if ((this.isProjectionDirty || !((h = this.parent) === null || h === void 0) && h.isProjectionDirty) && (g = !1),
            p && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1),
            this.resolvedRelativeTargetAt === Ze.timestamp && (g = !1),
            g)
                return;
            const {layout: v, layoutId: x} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(v || x))
                return;
            Nt(this.layoutCorrected, this.layout.layoutBox);
            const j = this.treeScale.x
              , k = this.treeScale.y;
            N2(this.layoutCorrected, this.treeScale, this.path, p),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox);
            const {target: M} = f;
            if (!M) {
                this.projectionTransform && (this.projectionDelta = kr(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = kr(),
            this.projectionDeltaWithTransform = kr());
            const P = this.projectionTransform;
            js(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
            this.projectionTransform = Dh(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== P || this.treeScale.x !== j || this.treeScale.y !== k) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", M)),
            Hn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(h=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            h) {
                const f = this.getStack();
                f && f.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(h, f=!1) {
            const p = this.snapshot
              , g = p ? p.latestValues : {}
              , v = {
                ...this.latestValues
            }
              , x = kr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !f;
            const j = Ve()
              , k = p ? p.source : void 0
              , M = this.layout ? this.layout.source : void 0
              , P = k !== M
              , A = this.getStack()
              , I = !A || A.members.length <= 1
              , z = !!(P && !I && this.options.crossfade === !0 && !this.path.some(mw));
            this.animationProgress = 0;
            let R;
            this.mixTargetDelta = L => {
                const W = L / 1e3;
                Oh(x.x, h.x, W),
                Oh(x.y, h.y, W),
                this.setTargetDelta(x),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bs(j, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                dw(this.relativeTarget, this.relativeTargetOrigin, j, W),
                R && H2(this.relativeTarget, R) && (this.isProjectionDirty = !1),
                R || (R = Ve()),
                Nt(R, this.relativeTarget)),
                P && (this.animationValues = v,
                _2(v, g, this.latestValues, W, z, I)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = W
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(h) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Yt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ne.update( () => {
                Ki.hasAnimatedSinceResize = !0,
                this.currentAnimation = X2(0, Rh, {
                    ...h,
                    onUpdate: f => {
                        this.mixTargetDelta(f),
                        h.onUpdate && h.onUpdate(f)
                    }
                    ,
                    onComplete: () => {
                        h.onComplete && h.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const h = this.getStack();
            h && h.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rh),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const h = this.getLead();
            let {targetWithTransforms: f, target: p, layout: g, latestValues: v} = h;
            if (!(!f || !p || !g)) {
                if (this !== h && this.layout && g && Mp(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    p = this.target || Ve();
                    const x = gt(this.layout.layoutBox.x);
                    p.x.min = h.target.x.min,
                    p.x.max = p.x.min + x;
                    const j = gt(this.layout.layoutBox.y);
                    p.y.min = h.target.y.min,
                    p.y.max = p.y.min + j
                }
                Nt(f, p),
                Nr(f, v),
                js(this.projectionDeltaWithTransform, this.layoutCorrected, f, v)
            }
        }
        registerSharedNode(h, f) {
            this.sharedNodes.has(h) || this.sharedNodes.set(h, new $2),
            this.sharedNodes.get(h).add(f);
            const g = f.options.initialPromotionConfig;
            f.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const h = this.getStack();
            return h ? h.lead === this : !0
        }
        getLead() {
            var h;
            const {layoutId: f} = this.options;
            return f ? ((h = this.getStack()) === null || h === void 0 ? void 0 : h.lead) || this : this
        }
        getPrevLead() {
            var h;
            const {layoutId: f} = this.options;
            return f ? (h = this.getStack()) === null || h === void 0 ? void 0 : h.prevLead : void 0
        }
        getStack() {
            const {layoutId: h} = this.options;
            if (h)
                return this.root.sharedNodes.get(h)
        }
        promote({needsReset: h, transition: f, preserveFollowOpacity: p}={}) {
            const g = this.getStack();
            g && g.promote(this, p),
            h && (this.projectionDelta = void 0,
            this.needsReset = !0),
            f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const h = this.getStack();
            return h ? h.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: h} = this.options;
            if (!h)
                return;
            let f = !1;
            const {latestValues: p} = h;
            if ((p.rotate || p.rotateX || p.rotateY || p.rotateZ) && (f = !0),
            !f)
                return;
            const g = {};
            for (let v = 0; v < Ah.length; v++) {
                const x = "rotate" + Ah[v];
                p[x] && (g[x] = p[x],
                h.setStaticValue(x, 0))
            }
            h.render();
            for (const v in g)
                h.setStaticValue(v, g[v]);
            h.scheduleRender()
        }
        getProjectionStyles(h) {
            var f, p;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return J2;
            const g = {
                visibility: ""
            }
              , v = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                g.opacity = "",
                g.pointerEvents = Gi(h == null ? void 0 : h.pointerEvents) || "",
                g.transform = v ? v(this.latestValues, "") : "none",
                g;
            const x = this.getLead();
            if (!this.projectionDelta || !this.layout || !x.target) {
                const P = {};
                return this.options.layoutId && (P.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                P.pointerEvents = Gi(h == null ? void 0 : h.pointerEvents) || ""),
                this.hasProjected && !Wn(this.latestValues) && (P.transform = v ? v({}, "") : "none",
                this.hasProjected = !1),
                P
            }
            const j = x.animationValues || x.latestValues;
            this.applyTransformsToTarget(),
            g.transform = Dh(this.projectionDeltaWithTransform, this.treeScale, j),
            v && (g.transform = v(j, g.transform));
            const {x: k, y: M} = this.projectionDelta;
            g.transformOrigin = `${k.origin * 100}% ${M.origin * 100}% 0`,
            x.animationValues ? g.opacity = x === this ? (p = (f = j.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : j.opacityExit : g.opacity = x === this ? j.opacity !== void 0 ? j.opacity : "" : j.opacityExit !== void 0 ? j.opacityExit : 0;
            for (const P in Ji) {
                if (j[P] === void 0)
                    continue;
                const {correct: A, applyTo: I} = Ji[P]
                  , z = g.transform === "none" ? j[P] : A(j[P], x);
                if (I) {
                    const R = I.length;
                    for (let L = 0; L < R; L++)
                        g[I[L]] = z
                } else
                    g[P] = z
            }
            return this.options.layoutId && (g.pointerEvents = x === this ? Gi(h == null ? void 0 : h.pointerEvents) || "" : "none"),
            g
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(h => {
                var f;
                return (f = h.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
            }
            ),
            this.root.nodes.forEach(Ih),
            this.root.sharedNodes.clear()
        }
    }
}
function ew(n) {
    n.updateLayout()
}
function tw(n) {
    var r;
    const i = ((r = n.resumeFrom) === null || r === void 0 ? void 0 : r.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
        const {layoutBox: l, measuredBox: c} = n.layout
          , {animationType: m} = n.options
          , h = i.source !== n.layout.source;
        m === "size" ? St(x => {
            const j = h ? i.measuredBox[x] : i.layoutBox[x]
              , k = gt(j);
            j.min = l[x].min,
            j.max = j.min + k
        }
        ) : Mp(m, i.layoutBox, l) && St(x => {
            const j = h ? i.measuredBox[x] : i.layoutBox[x]
              , k = gt(l[x]);
            j.max = j.min + k,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[x].max = n.relativeTarget[x].min + k)
        }
        );
        const f = kr();
        js(f, l, i.layoutBox);
        const p = kr();
        h ? js(p, n.applyTransform(c, !0), i.measuredBox) : js(p, l, i.layoutBox);
        const g = !Pp(f);
        let v = !1;
        if (!n.resumeFrom) {
            const x = n.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {snapshot: j, layout: k} = x;
                if (j && k) {
                    const M = Ve();
                    bs(M, i.layoutBox, j.layoutBox);
                    const P = Ve();
                    bs(P, l, k.layoutBox),
                    Tp(M, P) || (v = !0),
                    x.options.layoutRoot && (n.relativeTarget = P,
                    n.relativeTargetOrigin = M,
                    n.relativeParent = x)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: l,
            snapshot: i,
            delta: p,
            layoutDelta: f,
            hasLayoutChanged: g,
            hasRelativeTargetChanged: v
        })
    } else if (n.isLead()) {
        const {onExitComplete: l} = n.options;
        l && l()
    }
    n.options.transition = void 0
}
function nw(n) {
    Hn.totalNodes++,
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function rw(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function sw(n) {
    n.clearSnapshot()
}
function Ih(n) {
    n.clearMeasurements()
}
function iw(n) {
    n.isLayoutDirty = !1
}
function aw(n) {
    const {visualElement: r} = n.options;
    r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function Lh(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function ow(n) {
    n.resolveTargetDelta()
}
function lw(n) {
    n.calcProjection()
}
function cw(n) {
    n.resetRotation()
}
function uw(n) {
    n.removeLeadSnapshot()
}
function Oh(n, r, i) {
    n.translate = Ee(r.translate, 0, i),
    n.scale = Ee(r.scale, 1, i),
    n.origin = r.origin,
    n.originPoint = r.originPoint
}
function Vh(n, r, i, l) {
    n.min = Ee(r.min, i.min, l),
    n.max = Ee(r.max, i.max, l)
}
function dw(n, r, i, l) {
    Vh(n.x, r.x, i.x, l),
    Vh(n.y, r.y, i.y, l)
}
function mw(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const hw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , _h = n => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(n)
  , Fh = _h("applewebkit/") && !_h("chrome/") ? Math.round : Ie;
function zh(n) {
    n.min = Fh(n.min),
    n.max = Fh(n.max)
}
function fw(n) {
    zh(n.x),
    zh(n.y)
}
function Mp(n, r, i) {
    return n === "position" || n === "preserve-aspect" && !Fl(Mh(r), Mh(i), .2)
}
const pw = Ep({
    attachResizeListener: (n, r) => Kt(n, "resize", r),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Pl = {
    current: void 0
}
  , Dp = Ep({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Pl.current) {
            const n = new pw({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            Pl.current = n
        }
        return Pl.current
    }
    ,
    resetTransform: (n, r) => {
        n.style.transform = r !== void 0 ? r : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , gw = {
    pan: {
        Feature: A2
    },
    drag: {
        Feature: D2,
        ProjectionNode: Dp,
        MeasureLayout: Np
    }
}
  , yw = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function xw(n) {
    const r = yw.exec(n);
    if (!r)
        return [, ];
    const [,i,l] = r;
    return [i, l]
}
function Wl(n, r, i=1) {
    const [l,c] = xw(n);
    if (!l)
        return;
    const m = window.getComputedStyle(r).getPropertyValue(l);
    if (m) {
        const h = m.trim();
        return hp(h) ? parseFloat(h) : h
    } else
        return Al(c) ? Wl(c, r, i + 1) : c
}
function vw(n, {...r}, i) {
    const l = n.current;
    if (!(l instanceof Element))
        return {
            target: r,
            transitionEnd: i
        };
    i && (i = {
        ...i
    }),
    n.values.forEach(c => {
        const m = c.get();
        if (!Al(m))
            return;
        const h = Wl(m, l);
        h && c.set(h)
    }
    );
    for (const c in r) {
        const m = r[c];
        if (!Al(m))
            continue;
        const h = Wl(m, l);
        h && (r[c] = h,
        i || (i = {}),
        i[c] === void 0 && (i[c] = m))
    }
    return {
        target: r,
        transitionEnd: i
    }
}
const ww = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Ap = n => ww.has(n)
  , jw = n => Object.keys(n).some(Ap)
  , Bh = n => n === Qn || n === Z
  , Uh = (n, r) => parseFloat(n.split(", ")[r])
  , Wh = (n, r) => (i, {transform: l}) => {
    if (l === "none" || !l)
        return 0;
    const c = l.match(/^matrix3d\((.+)\)$/);
    if (c)
        return Uh(c[1], r);
    {
        const m = l.match(/^matrix\((.+)\)$/);
        return m ? Uh(m[1], n) : 0
    }
}
  , bw = new Set(["x", "y", "z"])
  , kw = Ts.filter(n => !bw.has(n));
function Nw(n) {
    const r = [];
    return kw.forEach(i => {
        const l = n.getValue(i);
        l !== void 0 && (r.push([i, l.get()]),
        l.set(i.startsWith("scale") ? 1 : 0))
    }
    ),
    r.length && n.render(),
    r
}
const Cr = {
    width: ({x: n}, {paddingLeft: r="0", paddingRight: i="0"}) => n.max - n.min - parseFloat(r) - parseFloat(i),
    height: ({y: n}, {paddingTop: r="0", paddingBottom: i="0"}) => n.max - n.min - parseFloat(r) - parseFloat(i),
    top: (n, {top: r}) => parseFloat(r),
    left: (n, {left: r}) => parseFloat(r),
    bottom: ({y: n}, {top: r}) => parseFloat(r) + (n.max - n.min),
    right: ({x: n}, {left: r}) => parseFloat(r) + (n.max - n.min),
    x: Wh(4, 13),
    y: Wh(5, 14)
};
Cr.translateX = Cr.x;
Cr.translateY = Cr.y;
const Sw = (n, r, i) => {
    const l = r.measureViewportBox()
      , c = r.current
      , m = getComputedStyle(c)
      , {display: h} = m
      , f = {};
    h === "none" && r.setStaticValue("display", n.display || "block"),
    i.forEach(g => {
        f[g] = Cr[g](l, m)
    }
    ),
    r.render();
    const p = r.measureViewportBox();
    return i.forEach(g => {
        const v = r.getValue(g);
        v && v.jump(f[g]),
        n[g] = Cr[g](p, m)
    }
    ),
    n
}
  , Cw = (n, r, i={}, l={}) => {
    r = {
        ...r
    },
    l = {
        ...l
    };
    const c = Object.keys(r).filter(Ap);
    let m = []
      , h = !1;
    const f = [];
    if (c.forEach(p => {
        const g = n.getValue(p);
        if (!n.hasValue(p))
            return;
        let v = i[p]
          , x = gs(v);
        const j = r[p];
        let k;
        if (ea(j)) {
            const M = j.length
              , P = j[0] === null ? 1 : 0;
            v = j[P],
            x = gs(v);
            for (let A = P; A < M && j[A] !== null; A++)
                k ? gc(gs(j[A]) === k) : k = gs(j[A])
        } else
            k = gs(j);
        if (x !== k)
            if (Bh(x) && Bh(k)) {
                const M = g.get();
                typeof M == "string" && g.set(parseFloat(M)),
                typeof j == "string" ? r[p] = parseFloat(j) : Array.isArray(j) && k === Z && (r[p] = j.map(parseFloat))
            } else
                x != null && x.transform && (k != null && k.transform) && (v === 0 || j === 0) ? v === 0 ? g.set(k.transform(v)) : r[p] = x.transform(j) : (h || (m = Nw(n),
                h = !0),
                f.push(p),
                l[p] = l[p] !== void 0 ? l[p] : r[p],
                g.jump(j))
    }
    ),
    f.length) {
        const p = f.indexOf("height") >= 0 ? window.pageYOffset : null
          , g = Sw(r, n, f);
        return m.length && m.forEach( ([v,x]) => {
            n.getValue(v).set(x)
        }
        ),
        n.render(),
        ua && p !== null && window.scrollTo({
            top: p
        }),
        {
            target: g,
            transitionEnd: l
        }
    } else
        return {
            target: r,
            transitionEnd: l
        }
}
;
function Pw(n, r, i, l) {
    return jw(r) ? Cw(n, r, i, l) : {
        target: r,
        transitionEnd: l
    }
}
const Tw = (n, r, i, l) => {
    const c = vw(n, r, l);
    return r = c.target,
    l = c.transitionEnd,
    Pw(n, r, i, l)
}
  , Hl = {
    current: null
}
  , Rp = {
    current: !1
};
function Ew() {
    if (Rp.current = !0,
    !!ua)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , r = () => Hl.current = n.matches;
            n.addListener(r),
            r()
        } else
            Hl.current = !1
}
function Mw(n, r, i) {
    const {willChange: l} = r;
    for (const c in r) {
        const m = r[c]
          , h = i[c];
        if (dt(m))
            n.addValue(c, m),
            sa(l) && l.add(c);
        else if (dt(h))
            n.addValue(c, Sr(m, {
                owner: n
            })),
            sa(l) && l.remove(c);
        else if (h !== m)
            if (n.hasValue(c)) {
                const f = n.getValue(c);
                !f.hasAnimated && f.set(m)
            } else {
                const f = n.getStaticValue(c);
                n.addValue(c, Sr(f !== void 0 ? f : m, {
                    owner: n
                }))
            }
    }
    for (const c in i)
        r[c] === void 0 && n.removeValue(c);
    return r
}
const Hh = new WeakMap
  , Ip = Object.keys(Cs)
  , Dw = Ip.length
  , $h = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , Aw = lc.length;
class Rw {
    constructor({parent: r, props: i, presenceContext: l, reducedMotionConfig: c, visualState: m}, h={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => Ne.render(this.render, !1, !0);
        const {latestValues: f, renderState: p} = m;
        this.latestValues = f,
        this.baseTarget = {
            ...f
        },
        this.initialValues = i.initial ? {
            ...f
        } : {},
        this.renderState = p,
        this.parent = r,
        this.props = i,
        this.presenceContext = l,
        this.depth = r ? r.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = h,
        this.isControllingVariants = ma(i),
        this.isVariantNode = xf(i),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(r && r.current);
        const {willChange: g, ...v} = this.scrapeMotionValuesFromProps(i, {});
        for (const x in v) {
            const j = v[x];
            f[x] !== void 0 && dt(j) && (j.set(f[x], !1),
            sa(g) && g.add(x))
        }
    }
    scrapeMotionValuesFromProps(r, i) {
        return {}
    }
    mount(r) {
        this.current = r,
        Hh.set(r, this),
        this.projection && !this.projection.instance && this.projection.mount(r),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, l) => this.bindToMotionValue(l, i)),
        Rp.current || Ew(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Hl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Hh.delete(this.current),
        this.projection && this.projection.unmount(),
        Yt(this.notifyUpdate),
        Yt(this.render),
        this.valueSubscriptions.forEach(r => r()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const r in this.events)
            this.events[r].clear();
        for (const r in this.features)
            this.features[r].unmount();
        this.current = null
    }
    bindToMotionValue(r, i) {
        const l = qn.has(r)
          , c = i.on("change", h => {
            this.latestValues[r] = h,
            this.props.onUpdate && Ne.update(this.notifyUpdate, !1, !0),
            l && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , m = i.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(r, () => {
            c(),
            m()
        }
        )
    }
    sortNodePosition(r) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== r.type ? 0 : this.sortInstanceNodePosition(this.current, r.current)
    }
    loadFeatures({children: r, ...i}, l, c, m) {
        let h, f;
        for (let p = 0; p < Dw; p++) {
            const g = Ip[p]
              , {isEnabled: v, Feature: x, ProjectionNode: j, MeasureLayout: k} = Cs[g];
            j && (h = j),
            v(i) && (!this.features[g] && x && (this.features[g] = new x(this)),
            k && (f = k))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && h) {
            this.projection = new h(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: p, layout: g, drag: v, dragConstraints: x, layoutScroll: j, layoutRoot: k} = i;
            this.projection.setOptions({
                layoutId: p,
                layout: g,
                alwaysMeasureLayout: !!v || x && jr(x),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof g == "string" ? g : "both",
                initialPromotionConfig: m,
                layoutScroll: j,
                layoutRoot: k
            })
        }
        return f
    }
    updateFeatures() {
        for (const r in this.features) {
            const i = this.features[r];
            i.isMounted ? i.update() : (i.mount(),
            i.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ve()
    }
    getStaticValue(r) {
        return this.latestValues[r]
    }
    setStaticValue(r, i) {
        this.latestValues[r] = i
    }
    makeTargetAnimatable(r, i=!0) {
        return this.makeTargetAnimatableFromInstance(r, this.props, i)
    }
    update(r, i) {
        (r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = r,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = i;
        for (let l = 0; l < $h.length; l++) {
            const c = $h[l];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const m = r["on" + c];
            m && (this.propEventSubscriptions[c] = this.on(c, m))
        }
        this.prevMotionValues = Mw(this, this.scrapeMotionValuesFromProps(r, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(r) {
        return this.props.variants ? this.props.variants[r] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(r=!1) {
        if (r)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const l = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (l.initial = this.props.initial),
            l
        }
        const i = {};
        for (let l = 0; l < Aw; l++) {
            const c = lc[l]
              , m = this.props[c];
            (Ss(m) || m === !1) && (i[c] = m)
        }
        return i
    }
    addVariantChild(r) {
        const i = this.getClosestVariantNode();
        if (i)
            return i.variantChildren && i.variantChildren.add(r),
            () => i.variantChildren.delete(r)
    }
    addValue(r, i) {
        i !== this.values.get(r) && (this.removeValue(r),
        this.bindToMotionValue(r, i)),
        this.values.set(r, i),
        this.latestValues[r] = i.get()
    }
    removeValue(r) {
        this.values.delete(r);
        const i = this.valueSubscriptions.get(r);
        i && (i(),
        this.valueSubscriptions.delete(r)),
        delete this.latestValues[r],
        this.removeValueFromRenderState(r, this.renderState)
    }
    hasValue(r) {
        return this.values.has(r)
    }
    getValue(r, i) {
        if (this.props.values && this.props.values[r])
            return this.props.values[r];
        let l = this.values.get(r);
        return l === void 0 && i !== void 0 && (l = Sr(i, {
            owner: this
        }),
        this.addValue(r, l)),
        l
    }
    readValue(r) {
        var i;
        return this.latestValues[r] !== void 0 || !this.current ? this.latestValues[r] : (i = this.getBaseTargetFromProps(this.props, r)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, r, this.options)
    }
    setBaseTarget(r, i) {
        this.baseTarget[r] = i
    }
    getBaseTarget(r) {
        var i;
        const {initial: l} = this.props
          , c = typeof l == "string" || typeof l == "object" ? (i = pc(this.props, l)) === null || i === void 0 ? void 0 : i[r] : void 0;
        if (l && c !== void 0)
            return c;
        const m = this.getBaseTargetFromProps(this.props, r);
        return m !== void 0 && !dt(m) ? m : this.initialValues[r] !== void 0 && c === void 0 ? void 0 : this.baseTarget[r]
    }
    on(r, i) {
        return this.events[r] || (this.events[r] = new Sc),
        this.events[r].add(i)
    }
    notify(r, ...i) {
        this.events[r] && this.events[r].notify(...i)
    }
}
class Lp extends Rw {
    sortInstanceNodePosition(r, i) {
        return r.compareDocumentPosition(i) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(r, i) {
        return r.style ? r.style[i] : void 0
    }
    removeValueFromRenderState(r, {vars: i, style: l}) {
        delete i[r],
        delete l[r]
    }
    makeTargetAnimatableFromInstance({transition: r, transitionEnd: i, ...l}, {transformValues: c}, m) {
        let h = Y1(l, r || {}, this);
        if (c && (i && (i = c(i)),
        l && (l = c(l)),
        h && (h = c(h))),
        m) {
            q1(this, l, h);
            const f = Tw(this, l, h, i);
            i = f.transitionEnd,
            l = f.target
        }
        return {
            transition: r,
            transitionEnd: i,
            ...l
        }
    }
}
function Iw(n) {
    return window.getComputedStyle(n)
}
class Lw extends Lp {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(r, i) {
        if (qn.has(i)) {
            const l = wc(i);
            return l && l.default || 0
        } else {
            const l = Iw(r)
              , c = (kf(i) ? l.getPropertyValue(i) : l[i]) || 0;
            return typeof c == "string" ? c.trim() : c
        }
    }
    measureInstanceViewportBox(r, {transformPagePoint: i}) {
        return bp(r, i)
    }
    build(r, i, l, c) {
        uc(r, i, l, c.transformTemplate)
    }
    scrapeMotionValuesFromProps(r, i) {
        return fc(r, i)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: r} = this.props;
        dt(r) && (this.childSubscription = r.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }
        ))
    }
    renderInstance(r, i, l, c) {
        Ef(r, i, l, c)
    }
}
class Ow extends Lp {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(r, i) {
        return r[i]
    }
    readValueFromInstance(r, i) {
        if (qn.has(i)) {
            const l = wc(i);
            return l && l.default || 0
        }
        return i = Mf.has(i) ? i : ac(i),
        r.getAttribute(i)
    }
    measureInstanceViewportBox() {
        return Ve()
    }
    scrapeMotionValuesFromProps(r, i) {
        return Af(r, i)
    }
    build(r, i, l, c) {
        mc(r, i, l, this.isSVGTag, c.transformTemplate)
    }
    renderInstance(r, i, l, c) {
        Df(r, i, l, c)
    }
    mount(r) {
        this.isSVGTag = hc(r.tagName),
        super.mount(r)
    }
}
const Vw = (n, r) => cc(n) ? new Ow(r,{
    enableHardwareAcceleration: !1
}) : new Lw(r,{
    enableHardwareAcceleration: !0
})
  , _w = {
    layout: {
        ProjectionNode: Dp,
        MeasureLayout: Np
    }
}
  , Fw = {
    ...d2,
    ...Dv,
    ...gw,
    ..._w
}
  , ee = Fx( (n, r) => xv(n, r, Fw, Vw))
  , zw = [{
    serialNumber: "MTPL/PR/2024/1001",
    name: "Saloni Kushwaha",
    dateOfIssue: "2023-08-01",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "A",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1002",
    name: "Farhat Naaz",
    dateOfIssue: "2024-08-01",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "A",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1003",
    name: "Riya Mathur",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "A+",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1004",
    name: "Divya Bobde",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "A+",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1005",
    name: "Rishabh Raj",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B+",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1006",
    name: "Sujit Kumar",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1007",
    name: "Mudrika Patel",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B+",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1008",
    name: "Satyam Turkar",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1009",
    name: "Saurabh Kumar",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1010",
    name: "Prince Prasad",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1011",
    name: "Shivam Kumar Tiwari",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1012",
    name: "Vivek Kumar",
    dateOfIssue: "2024-10-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1017",
    name: "Naman Kumar",
    dateOfIssue: "2025-03-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "A",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1018",
    name: "Suhani Tiwari",
    dateOfIssue: "2025-03-31",
    college: "TIT Technoctas Group",
    course: "UI/UX Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1019",
    name: "Shalu Tiwari",
    dateOfIssue: "2025-03-31",
    college: "UI/UX Technoctas Group",
    course: "Frontend Web Development",
    grade: "B",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1020",
    name: "Anuj Raj",
    dateOfIssue: "2025-03-31",
    college: "TIT Technoctas Group",
    course: "Backend Web Development",
    grade: "A+",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1021",
    name: "Saud Ansari",
    dateOfIssue: "2025-03-31",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "A+",
    validUntil: "Unlimited"
}, {
    serialNumber: "MTPL/PR/2024/1022",
    name: "Parmanand Hanwat",
    dateOfIssue: "2025-04-04",
    college: "TIT Technoctas Group",
    course: "Frontend Web Development",
    grade: "A",
    validUntil: "Unlimited"
}]
  , Bw = n => zw.find(r => r.serialNumber === n)
  , $l = "verified_certificates"
  , Uw = n => {
    const r = localStorage.getItem($l)
      , i = r ? JSON.parse(r) : [];
    i.some(c => c.serialNumber === n.serialNumber) || (i.push({
        ...n,
        verificationDate: new Date().toISOString()
    }),
    localStorage.setItem($l, JSON.stringify(i)))
}
  , Ww = () => {
    const n = localStorage.getItem($l);
    return n ? JSON.parse(n) : []
}
  , Hw = [{
    id: "1",
    email: "mrmacky143@gmail.com",
    password: "Macky989",
    name: "Pankaj Gupta",
    role: "CEO & Founder",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    employeeId: "EMP001",
    department: "Engineering",
    position: "Senior Software Developer",
    hireDate: "2021-03-15",
    workDuration: "2 years, 8 months",
    birthDate: "1990-05-20",
    address: "123 Tech Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "USA",
    phone: "+1 (555) 123-4567",
    emergencyContact: {
        name: "Jane Doe",
        relationship: "Spouse",
        phone: "+1 (555) 987-6543"
    },
    salary: {
        amount: 12e4,
        currency: "USD",
        lastReview: "2023-01-15",
        nextReview: "2024-01-15"
    },
    benefits: {
        healthInsurance: !0,
        dentalInsurance: !0,
        visionInsurance: !0,
        lifeInsurance: !0,
        retirement401k: !0
    },
    documents: {
        resume: "path/to/resume.pdf",
        contract: "path/to/contract.pdf",
        idCard: "path/to/id.pdf"
    },
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "AWS", "Docker"],
    certifications: [{
        name: "AWS Certified Developer",
        issueDate: "2022-06-15",
        expiryDate: "2025-06-15",
        credentialId: "AWS-DEV-123"
    }, {
        name: "React Advanced Developer",
        issueDate: "2023-01-10",
        expiryDate: "2026-01-10",
        credentialId: "RAD-456"
    }],
    performance: {
        lastReview: {
            date: "2023-01-15",
            rating: 4.8,
            feedback: "Excellent performance and team collaboration"
        },
        goals: ["Lead the migration to microservices architecture", "Mentor junior developers", "Improve system performance by 25%"]
    },
    projects: [{
        name: "E-commerce Platform Redesign",
        role: "Tech Lead",
        startDate: "2023-01-01",
        endDate: "2023-06-30",
        status: "Completed"
    }, {
        name: "Cloud Migration Initiative",
        role: "Senior Developer",
        startDate: "2023-07-01",
        endDate: null,
        status: "In Progress"
    }],
    attendance: {
        totalLeaves: 15,
        leavesUsed: 5,
        leavesRemaining: 10,
        leaveHistory: [{
            type: "Vacation",
            startDate: "2023-07-10",
            endDate: "2023-07-14",
            status: "Approved"
        }, {
            type: "Sick Leave",
            startDate: "2023-09-05",
            endDate: "2023-09-05",
            status: "Approved"
        }]
    }
}, {
    id: "2",
    email: "sarah@example.com",
    password: "sarah123",
    name: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    employeeId: "EMP002",
    department: "Design",
    position: "Senior UI/UX Designer",
    hireDate: "2020-06-01",
    workDuration: "3 years, 5 months",
    birthDate: "1992-08-15",
    address: "456 Design Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    phone: "+1 (555) 234-5678",
    emergencyContact: {
        name: "Mike Chen",
        relationship: "Brother",
        phone: "+1 (555) 876-5432"
    },
    salary: {
        amount: 11e4,
        currency: "USD",
        lastReview: "2023-02-15",
        nextReview: "2024-02-15"
    },
    benefits: {
        healthInsurance: !0,
        dentalInsurance: !0,
        visionInsurance: !0,
        lifeInsurance: !0,
        retirement401k: !0
    },
    documents: {
        resume: "path/to/resume.pdf",
        contract: "path/to/contract.pdf",
        idCard: "path/to/id.pdf"
    },
    skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Sketch", "Prototyping"],
    certifications: [{
        name: "Google UX Design Certificate",
        issueDate: "2022-03-20",
        expiryDate: null,
        credentialId: "GUX-789"
    }],
    performance: {
        lastReview: {
            date: "2023-02-15",
            rating: 4.7,
            feedback: "Outstanding design work and user research"
        },
        goals: ["Implement design system", "Improve user engagement metrics", "Lead design workshops"]
    },
    projects: [{
        name: "Mobile App Redesign",
        role: "Lead Designer",
        startDate: "2023-02-01",
        endDate: "2023-05-30",
        status: "Completed"
    }, {
        name: "Design System Implementation",
        role: "Senior Designer",
        startDate: "2023-06-01",
        endDate: null,
        status: "In Progress"
    }],
    attendance: {
        totalLeaves: 15,
        leavesUsed: 7,
        leavesRemaining: 8,
        leaveHistory: [{
            type: "Vacation",
            startDate: "2023-08-01",
            endDate: "2023-08-07",
            status: "Approved"
        }]
    }
}, {
    id: "3",
    email: "mike@example.com",
    password: "mike123",
    name: "Mike Johnson",
    role: "Product Manager",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    employeeId: "EMP003",
    department: "Product",
    position: "Senior Product Manager",
    hireDate: "2019-09-15",
    workDuration: "4 years, 2 months",
    birthDate: "1988-12-10",
    address: "789 Product Lane",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
    country: "USA",
    phone: "+1 (555) 345-6789",
    emergencyContact: {
        name: "Lisa Johnson",
        relationship: "Spouse",
        phone: "+1 (555) 765-4321"
    },
    salary: {
        amount: 13e4,
        currency: "USD",
        lastReview: "2023-03-15",
        nextReview: "2024-03-15"
    },
    benefits: {
        healthInsurance: !0,
        dentalInsurance: !0,
        visionInsurance: !0,
        lifeInsurance: !0,
        retirement401k: !0
    },
    documents: {
        resume: "path/to/resume.pdf",
        contract: "path/to/contract.pdf",
        idCard: "path/to/id.pdf"
    },
    skills: ["Product Strategy", "Agile", "Market Research", "Data Analysis", "Project Management", "Stakeholder Management"],
    certifications: [{
        name: "Product Management Professional",
        issueDate: "2021-11-30",
        expiryDate: "2024-11-30",
        credentialId: "PMP-101"
    }, {
        name: "Agile Certified Practitioner",
        issueDate: "2022-05-15",
        expiryDate: "2025-05-15",
        credentialId: "ACP-202"
    }],
    performance: {
        lastReview: {
            date: "2023-03-15",
            rating: 4.9,
            feedback: "Exceptional product leadership and strategic thinking"
        },
        goals: ["Launch new product line", "Increase user retention by 30%", "Develop product team"]
    },
    projects: [{
        name: "Product Analytics Platform",
        role: "Product Owner",
        startDate: "2023-01-15",
        endDate: "2023-08-30",
        status: "Completed"
    }, {
        name: "Market Expansion Initiative",
        role: "Product Lead",
        startDate: "2023-09-01",
        endDate: null,
        status: "In Progress"
    }],
    attendance: {
        totalLeaves: 15,
        leavesUsed: 4,
        leavesRemaining: 11,
        leaveHistory: [{
            type: "Vacation",
            startDate: "2023-06-20",
            endDate: "2023-06-23",
            status: "Approved"
        }]
    }
}]
  , $w = n => {
    const r = Hw.find(i => i.email === n.email && i.password === n.password);
    if (r) {
        const {password: i, ...l} = r;
        return localStorage.setItem("currentUser", JSON.stringify(l)),
        l
    }
    return null
}
  , Gl = () => {
    const n = localStorage.getItem("currentUser");
    return n ? JSON.parse(n) : null
}
  , Op = () => {
    localStorage.removeItem("currentUser")
}
  , Gw = ({isOpen: n, onClose: r, onSuccess: i}) => {
    const [l,c] = C.useState({
        email: "",
        password: ""
    })
      , [m,h] = C.useState("")
      , f = p => {
        p.preventDefault(),
        h(""),
        $w(l) ? (i(),
        r()) : h("Invalid email or password")
    }
    ;
    return n ? a.jsx("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: a.jsxs("div", {
            className: "bg-neo-dark p-6 rounded-sm neon-border-blue max-w-md w-full mx-4",
            children: [a.jsxs("div", {
                className: "flex justify-between items-center mb-6",
                children: [a.jsx("h2", {
                    className: "font-vt323 text-xl text-white",
                    children: "Login"
                }), a.jsx("button", {
                    onClick: r,
                    className: "text-gray-400 hover:text-neo-blue-100",
                    children: a.jsx(la, {
                        className: "h-5 w-5"
                    })
                })]
            }), a.jsxs("form", {
                onSubmit: f,
                className: "space-y-4",
                children: [m && a.jsx("div", {
                    className: "text-red-500 font-code text-sm",
                    children: m
                }), a.jsxs("div", {
                    children: [a.jsx("label", {
                        className: "block font-code text-sm text-gray-400 mb-1",
                        children: "Email"
                    }), a.jsx("input", {
                        type: "email",
                        value: l.email,
                        onChange: p => c(g => ({
                            ...g,
                            email: p.target.value
                        })),
                        className: "w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-blue",
                        required: !0
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("label", {
                        className: "block font-code text-sm text-gray-400 mb-1",
                        children: "Password"
                    }), a.jsx("input", {
                        type: "password",
                        value: l.password,
                        onChange: p => c(g => ({
                            ...g,
                            password: p.target.value
                        })),
                        className: "w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-blue",
                        required: !0
                    })]
                }), a.jsx("button", {
                    type: "submit",
                    className: "w-full neon-border-blue px-4 py-3 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300",
                    children: "LOGIN"
                })]
            })]
        })
    }) : null
}
  , Gh = ({className: n="", size: r="md", showLabel: i=!1}) => {
    const {theme: l, toggleTheme: c} = ex()
      , m = {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12"
    }
      , h = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
    };
    return a.jsxs(ee.button, {
        onClick: c,
        className: `
        relative ${m[r]} 
        rounded-full 
        border-2 
        transition-all 
        duration-300 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2
        ${l === "dark" ? "bg-neo-dark border-neo-green-100 focus:ring-neo-green-100" : "bg-white border-gray-300 focus:ring-gray-500"}
        ${n}
      `,
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: .95
        },
        "aria-label": `Switch to ${l === "dark" ? "light" : "dark"} mode`,
        children: [a.jsx(ee.div, {
            className: "absolute inset-0 flex items-center justify-center",
            initial: !1,
            animate: {
                rotate: l === "dark" ? 0 : 180
            },
            transition: {
                duration: .3,
                ease: "easeInOut"
            },
            children: l === "dark" ? a.jsx(vx, {
                className: `${h[r]} ${l === "dark" ? "text-neo-green-100" : "text-gray-600"}`
            }) : a.jsx(Cx, {
                className: `${h[r]} ${l === "light" ? "text-yellow-500" : "text-gray-600"}`
            })
        }), a.jsx(ee.div, {
            className: `
          absolute inset-0 rounded-full
          ${l === "dark" ? "bg-neo-green-100 bg-opacity-10" : "bg-yellow-100"}
        `,
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: l === "dark" ? 1 : .8,
                opacity: l === "dark" ? .1 : .2
            },
            transition: {
                duration: .3
            }
        }), i && a.jsx("span", {
            className: "sr-only",
            children: l === "dark" ? "Switch to light mode" : "Switch to dark mode"
        })]
    })
}
  , Kw = ({items: n, isOpen: r, setIsOpen: i}) => {
    const l = C.useRef(null);
    return C.useEffect( () => {
        const c = m => {
            l.current && !l.current.contains(m.target) && i(!1)
        }
        ;
        return document.addEventListener("mousedown", c),
        () => document.removeEventListener("mousedown", c)
    }
    , [i]),
    r ? a.jsx(ee.div, {
        ref: l,
        className: "absolute top-full left-0 mt-2 w-48 bg-neo-dark border border-gray-800 rounded-sm shadow-lg",
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -10
        },
        transition: {
            duration: .2
        },
        children: n.map(c => a.jsx(yn, {
            to: c.href,
            className: "block px-4 py-2 text-sm font-code text-gray-300 hover:bg-neo-green-100 hover:bg-opacity-10 hover:text-neo-green-100",
            onClick: () => i(!1),
            children: c.name
        }, c.name))
    }) : null
}
  , qw = ({isOpen: n, onClose: r}) => {
    const [i,l] = C.useState("")
      , [c,m] = C.useState("idle")
      , [h,f] = C.useState(null)
      , [p,g] = C.useState(!1)
      , [v,x] = C.useState([]);
    C.useEffect( () => {
        p && x(Ww())
    }
    , [p]);
    const j = () => {
        m("verifying"),
        setTimeout( () => {
            const k = Bw(i);
            k ? (f(k),
            m("verified"),
            Uw(k)) : (m("invalid"),
            f(null))
        }
        , 1e3)
    }
    ;
    return n ? a.jsx("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: a.jsxs(ee.div, {
            className: "bg-neo-dark p-6 rounded-sm neon-border-green max-w-md w-full mx-4",
            initial: {
                scale: .9,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: .9,
                opacity: 0
            },
            children: [a.jsxs("div", {
                className: "flex justify-between items-center mb-6",
                children: [a.jsx("h2", {
                    className: "font-vt323 text-xl text-white",
                    children: "Verify Certificate"
                }), a.jsx("button", {
                    onClick: r,
                    className: "text-gray-400 hover:text-neo-green-100",
                    children: a.jsx(la, {
                        className: "h-5 w-5"
                    })
                })]
            }), a.jsx("div", {
                className: "space-y-4",
                children: p ? a.jsxs("div", {
                    className: "space-y-4",
                    children: [a.jsxs("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [a.jsx("h3", {
                            className: "font-vt323 text-lg text-white",
                            children: "Verification History"
                        }), a.jsx("button", {
                            onClick: () => g(!1),
                            className: "text-neo-blue-100 hover:text-neo-blue-200 transition-colors",
                            children: "Back"
                        })]
                    }), a.jsxs("div", {
                        className: "space-y-4 max-h-96 overflow-y-auto pr-2",
                        children: [v.map( (k, M) => a.jsx("div", {
                            className: "p-4 bg-neo-black rounded-sm neon-border-blue",
                            children: a.jsxs("div", {
                                className: "space-y-2 font-code text-sm",
                                children: [a.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [a.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Name:"
                                    }), a.jsx("span", {
                                        className: "text-white",
                                        children: k.name
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [a.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Certificate No:"
                                    }), a.jsx("span", {
                                        className: "text-white",
                                        children: k.serialNumber
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [a.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Verified On:"
                                    }), a.jsx("span", {
                                        className: "text-white",
                                        children: new Date(k.verificationDate).toLocaleDateString()
                                    })]
                                })]
                            })
                        }, M)), v.length === 0 && a.jsx("p", {
                            className: "text-gray-400 font-code text-sm text-center py-4",
                            children: "No verification history found"
                        })]
                    })]
                }) : a.jsxs(a.Fragment, {
                    children: [a.jsxs("div", {
                        children: [a.jsx("label", {
                            className: "block font-code text-sm text-gray-400 mb-1",
                            children: "Certificate Number"
                        }), a.jsx("input", {
                            type: "text",
                            value: i,
                            onChange: k => {
                                l(k.target.value),
                                m("idle")
                            }
                            ,
                            className: "w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-green",
                            placeholder: "Enter certificate number"
                        })]
                    }), a.jsxs("div", {
                        className: "flex space-x-4",
                        children: [a.jsx("button", {
                            onClick: j,
                            disabled: c === "verifying" || !i,
                            className: "flex-1 neon-border-green px-4 py-3 font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                            children: c === "verifying" ? a.jsxs("span", {
                                className: "flex items-center justify-center",
                                children: [a.jsx("span", {
                                    className: "animate-pulse mr-2",
                                    children: "█"
                                }), "VERIFYING..."]
                            }) : "VERIFY CERTIFICATE"
                        }), a.jsx("button", {
                            onClick: () => g(!0),
                            className: "neon-border-blue px-4 py-3 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300",
                            children: "HISTORY"
                        })]
                    }), c === "verified" && h && a.jsxs("div", {
                        className: "mt-6 p-4 bg-neo-black rounded-sm neon-border-green",
                        children: [a.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [a.jsx("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"
                            }), a.jsx("span", {
                                className: "font-vt323 text-neo-green-100",
                                children: "Certificate Verified"
                            })]
                        }), a.jsxs("div", {
                            className: "space-y-2 font-code text-sm",
                            children: [a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Name:"
                                }), a.jsx("span", {
                                    className: "text-white",
                                    children: h.name
                                })]
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Certificate No:"
                                }), a.jsx("span", {
                                    className: "text-white",
                                    children: h.serialNumber
                                })]
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Issue Date:"
                                }), a.jsx("span", {
                                    className: "text-white",
                                    children: h.dateOfIssue
                                })]
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("span", {
                                    className: "text-gray-400",
                                    children: "College:"
                                }), a.jsx("span", {
                                    className: "text-white",
                                    children: h.college
                                })]
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Course:"
                                }), a.jsx("span", {
                                    className: "text-white",
                                    children: h.course
                                })]
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Grade:"
                                }), a.jsx("span", {
                                    className: "text-white",
                                    children: h.grade
                                })]
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Valid Until:"
                                }), a.jsx("span", {
                                    className: "text-white",
                                    children: h.validUntil
                                })]
                            })]
                        })]
                    }), c === "invalid" && a.jsx("div", {
                        className: "mt-4 p-4 bg-red-900 bg-opacity-20 rounded-sm border border-red-500",
                        children: a.jsx("p", {
                            className: "text-red-400 font-code text-sm",
                            children: "Invalid certificate number. Please check and try again."
                        })
                    })]
                })
            })]
        })
    }) : null
}
  , Qw = () => {
    const [n,r] = C.useState(!1)
      , [i,l] = C.useState(!1)
      , [c,m] = C.useState(!1)
      , [h,f] = C.useState(!1)
      , [p,g] = C.useState(!1)
      , [v,x] = C.useState(!1)
      , [j,k] = C.useState(Gl())
      , M = Pn();
    C.useEffect( () => {
        const L = () => {
            const W = window.scrollY;
            l(W > 50)
        }
        ;
        return window.addEventListener("scroll", L),
        () => window.removeEventListener("scroll", L)
    }
    , []),
    C.useEffect( () => (n ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset",
    () => {
        document.body.style.overflow = "unset"
    }
    ), [n]);
    const P = () => {
        Op(),
        k(null),
        M("/")
    }
      , A = () => {
        k(Gl())
    }
      , I = [{
        name: "Home",
        href: "/"
    }, {
        name: "Services",
        href: "/services"
    }, {
        name: "Products",
        href: "/products"
    }, {
        name: "Projects",
        href: "/projects"
    }, {
        name: "About",
        href: "#",
        dropdown: [{
            name: "About Us",
            href: "/about"
        }, {
            name: "Our Team",
            href: "/team"
        }, {
            name: "Events",
            href: "/events"
        }, {
            name: "Gallery",
            href: "/gallery"
        }, {
            name: "Testimonials",
            href: "/testimonials"
        }]
    }, {
        name: "Careers",
        href: "#",
        dropdown: [{
            name: "Job Openings",
            href: "/jobs"
        }, {
            name: "Internships",
            href: "/internships"
        }, {
            name: "Student Ambassador",
            href: "/ambassador"
        }]
    }, {
        name: "Contact",
        href: "/contact"
    }]
      , z = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: .1,
                delayChildren: .2
            }
        }
    }
      , R = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    return a.jsxs(a.Fragment, {
        children: [a.jsxs(ee.nav, {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .5
            },
            className: `fixed w-full z-50 transition-all duration-300 ${i ? "bg-neo-dark bg-opacity-80 backdrop-blur-md" : "bg-transparent"}`,
            children: [a.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                    className: "flex items-center justify-between h-16",
                    children: [a.jsx("div", {
                        className: "flex items-center",
                        children: a.jsxs(yn, {
                            to: "/",
                            className: "flex items-center",
                            children: [a.jsx("img", {
                                src: "https://i.ibb.co/ymkKpn1w/cropped-image.png",
                                alt: "ZERO MATRIX Logo",
                                className: "h-8 w-auto"
                            }), a.jsxs("div", {
                                className: "ml-3",
                                children: [a.jsx("span", {
                                    className: "text-xl font-vt323 text-neo-green-100",
                                    children: "ZERO MATRIX"
                                }), a.jsx("span", {
                                    className: "block text-xs font-code text-gray-400",
                                    children: "TECHNOLOGY"
                                })]
                            })]
                        })
                    }), a.jsx("div", {
                        className: "hidden md:flex items-center space-x-4",
                        children: a.jsxs(ee.div, {
                            className: "flex items-baseline space-x-4",
                            variants: z,
                            initial: "hidden",
                            animate: "visible",
                            children: [I.map(L => a.jsx(ee.div, {
                                className: "relative group",
                                variants: R,
                                whileHover: {
                                    scale: 1.05
                                },
                                children: L.dropdown ? a.jsxs("div", {
                                    className: "relative",
                                    children: [a.jsxs("button", {
                                        className: "group relative font-code text-sm hover:text-neo-green-100 text-gray-300 px-3 py-2 transition-colors duration-300 flex items-center",
                                        onClick: () => {
                                            L.name === "Careers" ? (m(!c),
                                            f(!1)) : L.name === "About" && (f(!h),
                                            m(!1))
                                        }
                                        ,
                                        children: [L.name, a.jsx(Qi, {
                                            className: "ml-1 h-4 w-4"
                                        }), a.jsx("div", {
                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-neo-green-100 transition-all duration-300 group-hover:w-full"
                                        })]
                                    }), a.jsx(Kw, {
                                        items: L.dropdown,
                                        isOpen: L.name === "Careers" ? c : h,
                                        setIsOpen: L.name === "Careers" ? m : f
                                    })]
                                }) : a.jsxs(yn, {
                                    to: L.href,
                                    className: "group relative font-code text-sm hover:text-neo-green-100 text-gray-300 px-3 py-2 transition-colors duration-300",
                                    children: [L.name, a.jsx("div", {
                                        className: "absolute bottom-0 left-0 w-0 h-0.5 bg-neo-green-100 transition-all duration-300 group-hover:w-full"
                                    })]
                                })
                            }, L.name)), j ? a.jsxs(ee.div, {
                                variants: R,
                                whileHover: {
                                    scale: 1.05
                                },
                                className: "flex items-center space-x-4",
                                children: [a.jsxs(yn, {
                                    to: "/profile",
                                    className: "neon-border-purple px-4 py-1 rounded-sm font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300 flex items-center",
                                    children: [a.jsx(Px, {
                                        className: "h-4 w-4 mr-2"
                                    }), j.name]
                                }), a.jsx("button", {
                                    onClick: P,
                                    className: "font-code text-sm text-gray-400 hover:text-neo-red-100",
                                    children: "Logout"
                                })]
                            }) : a.jsxs(ee.button, {
                                onClick: () => x(!0),
                                className: "neon-border-purple px-4 py-1 rounded-sm font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300 flex items-center",
                                variants: R,
                                whileHover: {
                                    scale: 1.05
                                },
                                children: [a.jsx(px, {
                                    className: "h-4 w-4 mr-2"
                                }), "LOGIN"]
                            }), a.jsxs(ee.button, {
                                onClick: () => g(!0),
                                className: "neon-border-blue px-4 py-1 rounded-full font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300 flex items-center",
                                variants: R,
                                whileHover: {
                                    scale: 1.05
                                },
                                children: [a.jsx(zm, {
                                    className: "h-4 w-4 mr-2"
                                }), "VERIFY"]
                            }), a.jsx(ee.div, {
                                variants: R,
                                whileHover: {
                                    scale: 1.05
                                },
                                children: a.jsx(Gh, {
                                    size: "sm"
                                })
                            }), a.jsx(ee.Link, {
                                to: "/contact",
                                className: "neon-border-green px-4 py-1 rounded-sm font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300",
                                variants: R,
                                whileHover: {
                                    scale: 1.05
                                },
                                children: ">_CONNECT"
                            })]
                        })
                    }), a.jsx("div", {
                        className: "md:hidden",
                        children: a.jsx("button", {
                            onClick: () => r(!n),
                            className: "inline-flex items-center justify-center p-2 rounded-md text-neo-green-100 focus:outline-none",
                            children: n ? a.jsx(la, {
                                className: "block h-6 w-6",
                                "aria-hidden": "true"
                            }) : a.jsx(xx, {
                                className: "block h-6 w-6",
                                "aria-hidden": "true"
                            })
                        })
                    })]
                })
            }), n && a.jsx(ee.div, {
                className: "md:hidden fixed inset-0 top-16 bg-neo-dark bg-opacity-95 backdrop-blur-md overflow-y-auto z-40",
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: "auto",
                    opacity: 1
                },
                exit: {
                    height: 0,
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                children: a.jsxs("div", {
                    className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                    children: [I.map(L => a.jsx("div", {
                        children: L.dropdown ? a.jsxs(a.Fragment, {
                            children: [a.jsxs("button", {
                                className: "w-full flex items-center justify-between px-3 py-2 text-base font-code text-gray-300 hover:text-neo-green-100 border-l-2 border-transparent hover:border-neo-green-100 transition-all duration-300",
                                onClick: () => {
                                    L.name === "Careers" ? (m(!c),
                                    f(!1)) : L.name === "About" && (f(!h),
                                    m(!1))
                                }
                                ,
                                children: [a.jsxs("span", {
                                    children: [">_ ", L.name]
                                }), a.jsx(Qi, {
                                    className: "h-4 w-4"
                                })]
                            }), (L.name === "Careers" && c || L.name === "About" && h) && a.jsx("div", {
                                className: "pl-6 py-2 space-y-1",
                                children: L.dropdown.map(W => a.jsxs(yn, {
                                    to: W.href,
                                    className: "block px-3 py-2 text-sm font-code text-gray-400 hover:text-neo-green-100 transition-all duration-300",
                                    onClick: () => {
                                        r(!1),
                                        m(!1),
                                        f(!1)
                                    }
                                    ,
                                    children: [">_ ", W.name]
                                }, W.name))
                            })]
                        }) : a.jsxs(yn, {
                            to: L.href,
                            className: "block px-3 py-2 text-base font-code text-gray-300 hover:text-neo-green-100 border-l-2 border-transparent hover:border-neo-green-100 transition-all duration-300",
                            onClick: () => r(!1),
                            children: [">_ ", L.name]
                        })
                    }, L.name)), j ? a.jsxs(a.Fragment, {
                        children: [a.jsxs(yn, {
                            to: "/profile",
                            className: "block px-3 py-2 text-base font-code text-neo-purple-100 hover:text-neo-purple-200 border-l-2 border-transparent hover:border-neo-purple-100 transition-all duration-300",
                            onClick: () => r(!1),
                            children: [">_ Profile (", j.name, ")"]
                        }), a.jsx("button", {
                            onClick: () => {
                                P(),
                                r(!1)
                            }
                            ,
                            className: "block w-full text-left px-3 py-2 text-base font-code text-gray-400 hover:text-red-500 border-l-2 border-transparent hover:border-red-500 transition-all duration-300",
                            children: ">_ Logout"
                        })]
                    }) : a.jsx("button", {
                        onClick: () => {
                            r(!1),
                            x(!0)
                        }
                        ,
                        className: "block w-full text-left px-3 py-2 text-base font-code text-neo-purple-100 hover:text-neo-purple-200 border-l-2 border-transparent hover:border-neo-purple-100 transition-all duration-300",
                        children: ">_ Login"
                    }), a.jsxs("button", {
                        onClick: () => {
                            r(!1),
                            g(!0)
                        }
                        ,
                        className: "w-full px-3 py-2 text-base font-code text-neo-blue-100 hover:text-neo-blue-100 border-l-2 border-transparent hover:border-neo-blue-100 transition-all duration-300 flex items-center",
                        children: [a.jsx(zm, {
                            className: "h-4 w-4 mr-2"
                        }), "VERIFY CERTIFICATE"]
                    }), a.jsxs("div", {
                        className: "flex items-center justify-center px-3 py-2 mt-4",
                        children: [a.jsx("span", {
                            className: "text-sm font-code text-gray-400 mr-3",
                            children: "Theme:"
                        }), a.jsx(Gh, {
                            size: "sm"
                        })]
                    }), a.jsx(yn, {
                        to: "/contact",
                        className: "block px-4 py-2 mt-4 text-center neon-border-green font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300",
                        onClick: () => r(!1),
                        children: ">_CONNECT"
                    })]
                })
            })]
        }), a.jsx(qw, {
            isOpen: p,
            onClose: () => g(!1)
        }), a.jsx(Gw, {
            isOpen: v,
            onClose: () => x(!1),
            onSuccess: A
        })]
    })
}
;
function Kl() {
    return Kl = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l])
        }
        return n
    }
    ,
    Kl.apply(this, arguments)
}
var Yw = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: 1 / 0,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function(n) {},
    onComplete: function(n) {},
    preStringTyped: function(n, r) {},
    onStringTyped: function(n, r) {},
    onLastStringBackspaced: function(n) {},
    onTypingPaused: function(n, r) {},
    onTypingResumed: function(n, r) {},
    onReset: function(n) {},
    onStop: function(n, r) {},
    onStart: function(n, r) {},
    onDestroy: function(n) {}
}
  , Xw = new (function() {
    function n() {}
    var r = n.prototype;
    return r.load = function(i, l, c) {
        if (i.el = typeof c == "string" ? document.querySelector(c) : c,
        i.options = Kl({}, Yw, l),
        i.isInput = i.el.tagName.toLowerCase() === "input",
        i.attr = i.options.attr,
        i.bindInputFocusEvents = i.options.bindInputFocusEvents,
        i.showCursor = !i.isInput && i.options.showCursor,
        i.cursorChar = i.options.cursorChar,
        i.cursorBlinking = !0,
        i.elContent = i.attr ? i.el.getAttribute(i.attr) : i.el.textContent,
        i.contentType = i.options.contentType,
        i.typeSpeed = i.options.typeSpeed,
        i.startDelay = i.options.startDelay,
        i.backSpeed = i.options.backSpeed,
        i.smartBackspace = i.options.smartBackspace,
        i.backDelay = i.options.backDelay,
        i.fadeOut = i.options.fadeOut,
        i.fadeOutClass = i.options.fadeOutClass,
        i.fadeOutDelay = i.options.fadeOutDelay,
        i.isPaused = !1,
        i.strings = i.options.strings.map(function(g) {
            return g.trim()
        }),
        i.stringsElement = typeof i.options.stringsElement == "string" ? document.querySelector(i.options.stringsElement) : i.options.stringsElement,
        i.stringsElement) {
            i.strings = [],
            i.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
            var m = Array.prototype.slice.apply(i.stringsElement.children)
              , h = m.length;
            if (h)
                for (var f = 0; f < h; f += 1)
                    i.strings.push(m[f].innerHTML.trim())
        }
        for (var p in i.strPos = 0,
        i.currentElContent = this.getCurrentElContent(i),
        i.currentElContent && i.currentElContent.length > 0 && (i.strPos = i.currentElContent.length - 1,
        i.strings.unshift(i.currentElContent)),
        i.sequence = [],
        i.strings)
            i.sequence[p] = p;
        i.arrayPos = 0,
        i.stopNum = 0,
        i.loop = i.options.loop,
        i.loopCount = i.options.loopCount,
        i.curLoop = 0,
        i.shuffle = i.options.shuffle,
        i.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
        },
        i.typingComplete = !1,
        i.autoInsertCss = i.options.autoInsertCss,
        i.autoInsertCss && (this.appendCursorAnimationCss(i),
        this.appendFadeOutAnimationCss(i))
    }
    ,
    r.getCurrentElContent = function(i) {
        return i.attr ? i.el.getAttribute(i.attr) : i.isInput ? i.el.value : i.contentType === "html" ? i.el.innerHTML : i.el.textContent
    }
    ,
    r.appendCursorAnimationCss = function(i) {
        var l = "data-typed-js-cursor-css";
        if (i.showCursor && !document.querySelector("[" + l + "]")) {
            var c = document.createElement("style");
            c.setAttribute(l, "true"),
            c.innerHTML = `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,
            document.body.appendChild(c)
        }
    }
    ,
    r.appendFadeOutAnimationCss = function(i) {
        var l = "data-typed-fadeout-js-css";
        if (i.fadeOut && !document.querySelector("[" + l + "]")) {
            var c = document.createElement("style");
            c.setAttribute(l, "true"),
            c.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,
            document.body.appendChild(c)
        }
    }
    ,
    n
}())
  , Kh = new (function() {
    function n() {}
    var r = n.prototype;
    return r.typeHtmlChars = function(i, l, c) {
        if (c.contentType !== "html")
            return l;
        var m = i.substring(l).charAt(0);
        if (m === "<" || m === "&") {
            var h;
            for (h = m === "<" ? ">" : ";"; i.substring(l + 1).charAt(0) !== h && !(1 + ++l > i.length); )
                ;
            l++
        }
        return l
    }
    ,
    r.backSpaceHtmlChars = function(i, l, c) {
        if (c.contentType !== "html")
            return l;
        var m = i.substring(l).charAt(0);
        if (m === ">" || m === ";") {
            var h;
            for (h = m === ">" ? "<" : "&"; i.substring(l - 1).charAt(0) !== h && !(--l < 0); )
                ;
            l--
        }
        return l
    }
    ,
    n
}())
  , Vp = function() {
    function n(i, l) {
        Xw.load(this, l, i),
        this.begin()
    }
    var r = n.prototype;
    return r.toggle = function() {
        this.pause.status ? this.start() : this.stop()
    }
    ,
    r.stop = function() {
        this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
        this.pause.status = !0,
        this.options.onStop(this.arrayPos, this))
    }
    ,
    r.start = function() {
        this.typingComplete || this.pause.status && (this.pause.status = !1,
        this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
        this.options.onStart(this.arrayPos, this))
    }
    ,
    r.destroy = function() {
        this.reset(!1),
        this.options.onDestroy(this)
    }
    ,
    r.reset = function(i) {
        i === void 0 && (i = !0),
        clearInterval(this.timeout),
        this.replaceText(""),
        this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
        this.cursor = null),
        this.strPos = 0,
        this.arrayPos = 0,
        this.curLoop = 0,
        i && (this.insertCursor(),
        this.options.onReset(this),
        this.begin())
    }
    ,
    r.begin = function() {
        var i = this;
        this.options.onBegin(this),
        this.typingComplete = !1,
        this.shuffleStringsIfNeeded(this),
        this.insertCursor(),
        this.bindInputFocusEvents && this.bindFocusEvents(),
        this.timeout = setTimeout(function() {
            i.strPos === 0 ? i.typewrite(i.strings[i.sequence[i.arrayPos]], i.strPos) : i.backspace(i.strings[i.sequence[i.arrayPos]], i.strPos)
        }, this.startDelay)
    }
    ,
    r.typewrite = function(i, l) {
        var c = this;
        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
        this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var m = this.humanizer(this.typeSpeed)
          , h = 1;
        this.pause.status !== !0 ? this.timeout = setTimeout(function() {
            l = Kh.typeHtmlChars(i, l, c);
            var f = 0
              , p = i.substring(l);
            if (p.charAt(0) === "^" && /^\^\d+/.test(p)) {
                var g = 1;
                g += (p = /\d+/.exec(p)[0]).length,
                f = parseInt(p),
                c.temporaryPause = !0,
                c.options.onTypingPaused(c.arrayPos, c),
                i = i.substring(0, l) + i.substring(l + g),
                c.toggleBlinking(!0)
            }
            if (p.charAt(0) === "`") {
                for (; i.substring(l + h).charAt(0) !== "`" && (h++,
                !(l + h > i.length)); )
                    ;
                var v = i.substring(0, l)
                  , x = i.substring(v.length + 1, l + h)
                  , j = i.substring(l + h + 1);
                i = v + x + j,
                h--
            }
            c.timeout = setTimeout(function() {
                c.toggleBlinking(!1),
                l >= i.length ? c.doneTyping(i, l) : c.keepTyping(i, l, h),
                c.temporaryPause && (c.temporaryPause = !1,
                c.options.onTypingResumed(c.arrayPos, c))
            }, f)
        }, m) : this.setPauseStatus(i, l, !0)
    }
    ,
    r.keepTyping = function(i, l, c) {
        l === 0 && (this.toggleBlinking(!1),
        this.options.preStringTyped(this.arrayPos, this));
        var m = i.substring(0, l += c);
        this.replaceText(m),
        this.typewrite(i, l)
    }
    ,
    r.doneTyping = function(i, l) {
        var c = this;
        this.options.onStringTyped(this.arrayPos, this),
        this.toggleBlinking(!0),
        this.arrayPos === this.strings.length - 1 && (this.complete(),
        this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
            c.backspace(i, l)
        }, this.backDelay))
    }
    ,
    r.backspace = function(i, l) {
        var c = this;
        if (this.pause.status !== !0) {
            if (this.fadeOut)
                return this.initFadeOut();
            this.toggleBlinking(!1);
            var m = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function() {
                l = Kh.backSpaceHtmlChars(i, l, c);
                var h = i.substring(0, l);
                if (c.replaceText(h),
                c.smartBackspace) {
                    var f = c.strings[c.arrayPos + 1];
                    c.stopNum = f && h === f.substring(0, l) ? l : 0
                }
                l > c.stopNum ? (l--,
                c.backspace(i, l)) : l <= c.stopNum && (c.arrayPos++,
                c.arrayPos === c.strings.length ? (c.arrayPos = 0,
                c.options.onLastStringBackspaced(),
                c.shuffleStringsIfNeeded(),
                c.begin()) : c.typewrite(c.strings[c.sequence[c.arrayPos]], l))
            }, m)
        } else
            this.setPauseStatus(i, l, !1)
    }
    ,
    r.complete = function() {
        this.options.onComplete(this),
        this.loop ? this.curLoop++ : this.typingComplete = !0
    }
    ,
    r.setPauseStatus = function(i, l, c) {
        this.pause.typewrite = c,
        this.pause.curString = i,
        this.pause.curStrPos = l
    }
    ,
    r.toggleBlinking = function(i) {
        this.cursor && (this.pause.status || this.cursorBlinking !== i && (this.cursorBlinking = i,
        i ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
    }
    ,
    r.humanizer = function(i) {
        return Math.round(Math.random() * i / 2) + i
    }
    ,
    r.shuffleStringsIfNeeded = function() {
        this.shuffle && (this.sequence = this.sequence.sort(function() {
            return Math.random() - .5
        }))
    }
    ,
    r.initFadeOut = function() {
        var i = this;
        return this.el.className += " " + this.fadeOutClass,
        this.cursor && (this.cursor.className += " " + this.fadeOutClass),
        setTimeout(function() {
            i.arrayPos++,
            i.replaceText(""),
            i.strings.length > i.arrayPos ? i.typewrite(i.strings[i.sequence[i.arrayPos]], 0) : (i.typewrite(i.strings[0], 0),
            i.arrayPos = 0)
        }, this.fadeOutDelay)
    }
    ,
    r.replaceText = function(i) {
        this.attr ? this.el.setAttribute(this.attr, i) : this.isInput ? this.el.value = i : this.contentType === "html" ? this.el.innerHTML = i : this.el.textContent = i
    }
    ,
    r.bindFocusEvents = function() {
        var i = this;
        this.isInput && (this.el.addEventListener("focus", function(l) {
            i.stop()
        }),
        this.el.addEventListener("blur", function(l) {
            i.el.value && i.el.value.length !== 0 || i.start()
        }))
    }
    ,
    r.insertCursor = function() {
        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
        this.cursor.className = "typed-cursor",
        this.cursor.setAttribute("aria-hidden", !0),
        this.cursor.innerHTML = this.cursorChar,
        this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
    }
    ,
    n
}();
const Jw = () => {
    const n = C.useRef(null);
    return C.useEffect( () => {
        if (!n.current)
            return;
        const r = n.current
          , i = r.getContext("2d");
        if (!i)
            return;
        const l = () => {
            r.width = window.innerWidth,
            r.height = window.innerHeight
        }
        ;
        l(),
        window.addEventListener("resize", l);
        const p = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
          , g = 16
          , v = Math.floor(r.width / g)
          , x = [];
        for (let M = 0; M < v; M++)
            x[M] = Math.floor(Math.random() * -100);
        const k = setInterval( () => {
            i.fillStyle = "rgba(0, 0, 0, 0.05)",
            i.fillRect(0, 0, r.width, r.height),
            i.fillStyle = "#00FF41",
            i.font = `${g}px monospace`,
            i.shadowBlur = 4,
            i.shadowColor = "rgba(0, 255, 65, 0.5)";
            for (let M = 0; M < x.length; M++) {
                const P = p[Math.floor(Math.random() * p.length)];
                if (Math.random() > .98)
                    i.fillStyle = "#FFFFFF";
                else {
                    const A = Math.min(255, Math.floor(150 + x[M] % 50));
                    i.fillStyle = `rgba(0, ${A}, 65, 0.8)`
                }
                i.fillText(P, M * g, x[M] * g),
                x[M] * g > r.height && Math.random() > .975 && (x[M] = Math.floor(Math.random() * -100)),
                x[M]++
            }
            i.shadowBlur = 0
        }
        , 45);
        return () => {
            clearInterval(k),
            window.removeEventListener("resize", l)
        }
    }
    , []),
    a.jsx("canvas", {
        ref: n,
        className: "absolute inset-0 z-0",
        style: {
            opacity: .3
        }
    })
}
  , Zw = () => {
    const n = C.useRef(null)
      , r = C.useRef(null);
    C.useEffect( () => (n.current && (r.current = new Vp(n.current,{
        strings: ["Web/App Solution(Developer for Orgs.);", 'System.infiltrate("secure_network");', 'AI.analyze("neural_patterns");', 'Quantum.decrypt("encrypted_data");', 'Future.initialize("innovation");'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: !0,
        showCursor: !0,
        cursorChar: "_"
    })),
    () => {
        r.current && r.current.destroy()
    }
    ), []);
    const i = [{
        icon: a.jsx(sc, {
            className: "h-6 w-6"
        }),
        text: "Advanced Security"
    }, {
        icon: a.jsx(ux, {
            className: "h-6 w-6"
        }),
        text: "Quantum Computing"
    }, {
        icon: a.jsx(nc, {
            className: "h-6 w-6"
        }),
        text: "Web/App Dev"
    }, {
        icon: a.jsx(fx, {
            className: "h-6 w-6"
        }),
        text: "Blockchain Tech"
    }];
    return a.jsxs("div", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-neo-black",
        children: [a.jsx(Jw, {}), a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-transparent via-neo-black/50 to-neo-black"
        }), a.jsx(ee.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: .1
            },
            transition: {
                duration: 2
            },
            className: "absolute inset-0 bg-[url('https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg')] bg-cover bg-center"
        }), a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10"
        }), a.jsx("div", {
            className: "relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: a.jsxs("div", {
                className: "text-center",
                children: [a.jsxs(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    className: "mb-8 inline-flex items-center justify-center space-x-2 bg-neo-dark/80 backdrop-blur-sm px-4 py-2 rounded-full border border-neo-green-100/20",
                    children: [a.jsx(Kn, {
                        className: "h-4 w-4 text-neo-green-100"
                    }), a.jsx("code", {
                        className: "text-sm text-neo-green-100",
                        children: "./initialize_system --mode=quantum"
                    })]
                }), a.jsxs(ee.h1, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "text-4xl sm:text-6xl md:text-7xl font-vt323 mb-6 text-white text-shadow-neon-green",
                    children: ["NEXT-GEN", a.jsx("span", {
                        className: "text-neo-green-100",
                        children: " IT/CYBER/Ai "
                    }), "SOLUTIONS"]
                }), a.jsx(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    className: "mb-8",
                    children: a.jsx("div", {
                        className: "bg-neo-dark/80 backdrop-blur-sm p-4 rounded-lg inline-block",
                        children: a.jsx("span", {
                            ref: n,
                            className: "text-lg sm:text-xl font-code text-neo-green-100"
                        })
                    })
                }), a.jsx(ee.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto",
                    children: i.map( (l, c) => a.jsx(ee.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .8 + c * .1
                        },
                        className: "bg-neo-dark/80 backdrop-blur-sm p-4 rounded-lg border border-neo-green-100/20 hover:border-neo-green-100/40 transition-all duration-300",
                        children: a.jsxs("div", {
                            className: "flex flex-col items-center space-y-2",
                            children: [a.jsx("div", {
                                className: "text-neo-green-100",
                                children: l.icon
                            }), a.jsx("span", {
                                className: "text-sm font-code text-gray-400",
                                children: l.text
                            })]
                        })
                    }, c))
                }), a.jsxs(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: 1.2
                    },
                    className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4",
                    children: [a.jsx("a", {
                        href: "#services",
                        className: "neon-border-green px-8 py-3 rounded-sm font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 text-lg backdrop-blur-sm",
                        children: ">_INITIALIZE_SYSTEM"
                    }), a.jsxs("a", {
                        href: "#about",
                        className: "px-8 py-3 font-vt323 text-white border border-white hover:border-neo-blue-100 hover:text-neo-blue-100 transition-all duration-300 text-lg group flex items-center backdrop-blur-sm",
                        children: [">_ACCESS_DATA", a.jsx(Qi, {
                            className: "ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                        })]
                    })]
                })]
            })
        }), a.jsx(ee.div, {
            className: "absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20",
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 1,
                delay: 1.5,
                repeat: 1 / 0,
                repeatType: "reverse"
            },
            children: a.jsx(Qi, {
                className: "h-8 w-8 text-neo-green-100"
            })
        }), a.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neo-black to-transparent"
        })]
    })
}
  , rt = ({text: n, className: r="", delay: i=0, intensity: l="medium"}) => {
    const [c,m] = C.useState(n)
      , [h,f] = C.useState(!1)
      , p = "!<>-_\\/[]{}—=+*^?#________";
    return C.useEffect( () => {
        let g;
        return i > 0 ? g = window.setTimeout( () => {
            f(!0)
        }
        , i) : f(!0),
        () => {
            g && clearTimeout(g)
        }
    }
    , [i]),
    C.useEffect( () => {
        if (!h)
            return;
        const g = {
            low: 200,
            medium: 100,
            high: 50
        }[l]
          , v = {
            low: .05,
            medium: .1,
            high: .2
        }[l]
          , x = setInterval( () => {
            m(n.split("").map( (j, k) => Math.random() < v ? p[Math.floor(Math.random() * p.length)] : j).join("")),
            Math.random() > .9 && setTimeout( () => m(n), 50)
        }
        , g);
        return () => clearInterval(x)
    }
    , [n, h, l]),
    a.jsx("span", {
        className: `inline-block ${r}`,
        "data-text": n,
        children: c
    })
}
  , ej = ({icon: n, title: r, description: i, color: l, delay: c=0}) => a.jsxs(ee.div, {
    initial: {
        opacity: 0,
        y: 20
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: .5,
        delay: c
    },
    viewport: {
        once: !0
    },
    className: "bg-neo-black p-6 rounded-sm relative group overflow-hidden",
    children: [a.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,255,65,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    }), a.jsx("div", {
        className: `text-${l} mb-4 transition-transform duration-300 group-hover:scale-110`,
        children: a.jsx(n, {
            className: "h-8 w-8"
        })
    }), a.jsx("h3", {
        className: "font-vt323 text-xl text-white mb-2",
        children: r
    }), a.jsx("p", {
        className: "text-gray-400 font-code text-sm",
        children: i
    }), a.jsx("div", {
        className: "mt-4",
        children: a.jsx("button", {
            className: `text-${l} font-code text-sm group-hover:underline`,
            children: ">_LEARN_MORE"
        })
    })]
})
  , _p = () => {
    const n = [{
        icon: cf,
        title: "Custom Software",
        description: "Tailored software solutions designed to meet your specific business requirements and objectives.",
        color: "neo-blue-100"
    }, {
        icon: tc,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and services for optimal performance and reliability.",
        color: "neo-green-100"
    }, {
        icon: rc,
        title: "Data Analytics",
        description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
        color: "neo-purple-100"
    }, {
        icon: wx,
        title: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies.",
        color: "neo-green-100"
    }, {
        icon: cx,
        title: "DevOps",
        description: "Streamline your development and operations with our automated CI/CD pipelines.",
        color: "neo-blue-100"
    }, {
        icon: oa,
        title: "IT Consulting",
        description: "Expert guidance to help you make informed decisions about your technology stack.",
        color: "neo-purple-100"
    }];
    return a.jsxs("section", {
        id: "services",
        className: "py-20 relative bg-neo-dark overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm",
                        children: "$ ./services --list-all"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "OUR SERV_CES",
                        className: "text-white text-shadow-neon-green",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "We deliver cutting-edge software solutions that drive innovation and business growth. Our services are designed to help you stay ahead in the digital landscape."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: n.map( (r, i) => a.jsx(ej, {
                    ...r,
                    delay: i * .1
                }, i))
            })]
        })]
    })
}
  , Fp = () => {
    const n = [{
        title: "NGO Platform",
        description: "A modern NGO Platform who work for charity and more flexible feature like join, volunteer, Donationas and more... .",
        tech: ["React", "Node.js", "MongoDB"],
        image: "https://i.ibb.co/DD0dnCM6/EA335924-CF63-4524-8749-45-D1368879-D2.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://ngo-helper.vercel.app/"
    }, {
        title: "CyberHex - Event Platform",
        description: "CyberHex is a event organizer platform, where you can oraganize your events like  games, hackathons, workshop and more ..",
        tech: ["React.js", "Supabase", "Node.js", "TypeScript"],
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://adorable-centaur-6a441e.netlify.app/"
    }, {
        title: "Stock Management System",
        description: "Multi-cloud infrastructure management solution.",
        tech: ["Python", "Django", "SQLite3"],
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://github.com/pankajkr-143/Stock-Management-System.git"
    }]
      , r = [{
        title: "AI Image Generator",
        description: "Generate unique images using advanced AI algorithms and deep learning models.",
        tech: ["Python", "TensorFlow", "React", "FastAPI"],
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Blockchain Voting System",
        description: "Secure and transparent voting system built on blockchain technology.",
        tech: ["Solidity", "Web3.js", "React", "Node.js"],
        image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "IoT Dashboard",
        description: "Real-time monitoring and control system for IoT devices.",
        tech: ["React", "Node.js", "MQTT", "Socket.io"],
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "E-Learning Platform",
        description: "Comprehensive online learning platform with video courses and assessments.",
        tech: ["Next.js", "Django", "PostgreSQL", "AWS"],
        image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Healthcare Management System",
        description: "Digital solution for managing patient records and hospital operations.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        image: "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Smart Home Automation",
        description: "IoT-based home automation system with mobile app control.",
        tech: ["React Native", "Node.js", "MQTT", "MongoDB"],
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }]
      , l = window.location.pathname === "/projects" ? [...n, ...r] : n;
    return a.jsxs("section", {
        id: "projects",
        className: "py-20 relative bg-neo-black overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm",
                        children: "$ ./projects --list-featured"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "FEATURED PROJECTS",
                        className: "text-white text-shadow-neon-green",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Explore our portfolio of innovative solutions that showcase our expertise."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: l.map( (c, m) => a.jsxs(ee.div, {
                    className: "bg-neo-dark rounded-sm overflow-hidden group",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: m * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsxs("div", {
                        className: "relative h-48 overflow-hidden",
                        children: [a.jsx("img", {
                            src: c.image,
                            alt: c.title,
                            className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"
                        })]
                    }), a.jsxs("div", {
                        className: "p-6",
                        children: [a.jsx("h3", {
                            className: "font-vt323 text-xl text-white mb-2",
                            children: c.title
                        }), a.jsx("p", {
                            className: "text-gray-400 font-code text-sm mb-4",
                            children: c.description
                        }), a.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-4",
                            children: c.tech.map( (h, f) => a.jsx("span", {
                                className: "px-2 py-1 text-xs font-code bg-neo-green-100 bg-opacity-10 text-neo-green-100",
                                children: h
                            }, f))
                        }), a.jsxs("a", {
                            href: c.link,
                            className: "flex items-center text-neo-green-100 font-code text-sm group",
                            children: [a.jsx(nc, {
                                className: "h-4 w-4 mr-2"
                            }), "View Project", a.jsx(uf, {
                                className: "h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                            })]
                        })]
                    })]
                }, m))
            })]
        })]
    })
}
  , ql = ({strings: n, typeSpeed: r=50, backSpeed: i=30, startDelay: l=300, backDelay: c=1500, loop: m=!0, showCursor: h=!0, className: f=""}) => {
    const p = C.useRef(null)
      , g = C.useRef(null);
    return C.useEffect( () => (p.current && (g.current = new Vp(p.current,{
        strings: n,
        typeSpeed: r,
        backSpeed: i,
        startDelay: l,
        backDelay: c,
        loop: m,
        showCursor: h,
        cursorChar: "_"
    })),
    () => {
        g.current && g.current.destroy()
    }
    ), [n, r, i, l, c, m, h]),
    a.jsx("span", {
        ref: p,
        className: f
    })
}
  , zp = () => {
    const n = [{
        year: "2019",
        title: "Dream Sparked",
        description: "Thought about starting an IT company while studying in Class 10."
    }, {
        year: "2020",
        title: "Learning Begins",
        description: "Started learning programming and exploring web development through online courses."
    }, {
        year: "2021",
        title: "First Project",
        description: "Built and launched a basic website for a local business, gaining real-world experience."
    }, {
        year: "2022",
        title: "Freelance Journey",
        description: "Took freelance projects and started building a small team of like-minded developers."
    }, {
        year: "2023",
        title: "Company Registered",
        description: "Officially registered the IT startup focused on web and app development."
    }, {
        year: "2024",
        title: "Client Growth",
        description: "Delivered over 50 projects and gained clients from multiple countries."
    }, {
        year: "2025",
        title: "Vision Forward",
        description: "Expanding into AI and cybersecurity to shape the future of digital solutions."
    }];
    return a.jsxs("section", {
        id: "about",
        className: "py-20 relative bg-neo-black overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm",
                        children: "$ ./about --show-history"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "OUR JOURNEY",
                        className: "text-white text-shadow-neon-blue",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Since our inception, we've been at the forefront of technological innovation, consistently breaking barriers and redefining what's possible."
                })]
            }), a.jsxs("div", {
                className: "flex flex-col md:flex-row gap-10",
                children: [a.jsx(ee.div, {
                    className: "w-full md:w-1/2",
                    initial: {
                        opacity: 0,
                        x: -30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: a.jsxs("div", {
                        className: "bg-neo-dark p-8 rounded-sm neon-border-blue h-full",
                        children: [a.jsxs("div", {
                            className: "flex items-center mb-6",
                            children: [a.jsx(Kn, {
                                className: "h-5 w-5 text-neo-blue-100 mr-2"
                            }), a.jsx("div", {
                                className: "font-vt323 text-neo-blue-100 text-lg",
                                children: "> About ZERO MATRIX"
                            })]
                        }), a.jsxs("div", {
                            className: "terminal-text font-code text-sm space-y-4 text-gray-300",
                            children: [a.jsx("p", {
                                children: a.jsx(ql, {
                                    strings: ["Mackys Tech is at the frontier of technological evolution, where artificial intelligence meets cybersecurity to create unprecedented solutions."],
                                    typeSpeed: 20,
                                    startDelay: 500,
                                    showCursor: !1,
                                    loop: !1
                                })
                            }), a.jsx("p", {
                                className: "text-gray-400",
                                children: "Our multidisciplinary team combines expertise in machine learning, quantum computing, blockchain technology, and cybersecurity to address the most complex challenges of the digital age."
                            }), a.jsx("p", {
                                className: "text-gray-400",
                                children: "We believe in a future where technology enhances human potential rather than replacing it. Our mission is to develop systems that augment human capabilities while ensuring the highest standards of security and ethical implementation."
                            }), a.jsx("p", {
                                className: "text-gray-400",
                                children: "With clients ranging from Fortune 500 companies to government agencies, our solutions have been deployed across diverse sectors including finance, healthcare, defense, and telecommunications."
                            }), a.jsxs("div", {
                                className: "flex items-center text-neo-blue-100 mt-6 pt-4 border-t border-gray-800",
                                children: [a.jsx("span", {
                                    className: "animate-pulse mr-2",
                                    children: "█"
                                }), a.jsx(ql, {
                                    strings: ["Ready to define the future together?"],
                                    typeSpeed: 40,
                                    startDelay: 2e3,
                                    showCursor: !0,
                                    loop: !1
                                })]
                            })]
                        })]
                    })
                }), a.jsx(ee.div, {
                    className: "w-full md:w-1/2",
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: a.jsx("div", {
                        className: "timeline pl-10 relative",
                        children: n.map( (r, i) => a.jsx(ee.div, {
                            className: "timeline-entry mb-8 pl-8",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                delay: i * .1
                            },
                            viewport: {
                                once: !0
                            },
                            children: a.jsxs("div", {
                                className: "bg-neo-dark p-4 rounded-sm hover:neon-border-green transition-all duration-300",
                                children: [a.jsxs("div", {
                                    className: "flex items-center mb-2",
                                    children: [a.jsx("span", {
                                        className: "font-vt323 text-neo-green-100 text-xl mr-3",
                                        children: r.year
                                    }), a.jsx("h3", {
                                        className: "font-code text-white text-lg",
                                        children: r.title
                                    })]
                                }), a.jsx("p", {
                                    className: "font-code text-gray-400 text-sm",
                                    children: r.description
                                })]
                            })
                        }, i))
                    })
                })]
            })]
        })]
    })
}
  , Bp = () => a.jsxs("section", {
    id: "founder",
    className: "py-20 relative theme-bg-secondary overflow-hidden",
    children: [a.jsx("div", {
        className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
    }), a.jsxs("div", {
        className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [a.jsxs("div", {
            className: "text-center mb-16",
            children: [a.jsx("div", {
                className: "inline-block mb-2",
                children: a.jsx("code", {
                    className: "text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm",
                    children: "$ ./about --show-founder"
                })
            }), a.jsx("h2", {
                className: "text-4xl md:text-5xl font-vt323 mb-4",
                children: a.jsx(rt, {
                    text: "MEET OUR FOUNDER",
                    className: "text-white text-shadow-neon-green",
                    intensity: "low"
                })
            })]
        }), a.jsxs("div", {
            className: "flex flex-col lg:flex-row items-center gap-12",
            children: [a.jsx(ee.div, {
                className: "w-full lg:w-2/5",
                initial: {
                    opacity: 0,
                    x: -30
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: a.jsx("div", {
                    className: "relative max-w-md mx-auto",
                    children: a.jsx("img", {
                        src: "https://i.ibb.co/yGCWX76/Whats-App-Image-2025-06-08-at-04-10-59-002b80d8.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        alt: "Founder",
                        className: "w-full h-[400px] object-cover rounded-sm neon-border-green"
                    })
                })
            }), a.jsxs(ee.div, {
                className: "w-full lg:w-3/5",
                initial: {
                    opacity: 0,
                    x: 30
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: .6
                },
                viewport: {
                    once: !0
                },
                children: [a.jsx("h3", {
                    className: "font-vt323 text-3xl theme-text-primary mb-4",
                    children: "Pankaj Gupta (Macky)"
                }), a.jsx("div", {
                    className: "theme-accent-primary font-code text-lg mb-6",
                    children: "Founder & CEO"
                }), a.jsxs("div", {
                    className: "space-y-4 font-code theme-text-secondary",
                    children: [a.jsx("p", {
                        children: "With over 8+ years of experience in software development and technology innovation, Macky has led multiple successful startups and technology initiatives."
                    }), a.jsx("p", {
                        children: "A graduate of TIT Technocrats with a passion for artificial intelligence and cybersecurity in Computer Science, Macky founded our company with a vision to revolutionize the software industry through cutting-edge solutions."
                    }), a.jsx("p", {
                        children: "Under his leadership, we've grown from a small startup to a leading software development company, serving clients worldwide and pushing the boundaries of what's possible in technology."
                    })]
                }), a.jsxs("div", {
                    className: "mt-8 flex space-x-6",
                    children: [a.jsx("a", {
                        href: "https://github.com/pankajkr-143",
                        className: "text-gray-400 hover:text-neo-green-100 transition-colors duration-300",
                        "aria-label": "GitHub",
                        children: a.jsx(Yi, {
                            className: "h-6 w-6"
                        })
                    }), a.jsx("a", {
                        href: "https://www.linkedin.com/in/pankaj-kumar-647080266/",
                        className: "text-gray-400 hover:text-neo-green-100 transition-colors duration-300",
                        "aria-label": "LinkedIn",
                        children: a.jsx(Xi, {
                            className: "h-6 w-6"
                        })
                    }), a.jsx("a", {
                        href: "https://x.com/pankajkrceo",
                        className: "text-gray-400 hover:text-neo-green-100 transition-colors duration-300",
                        "aria-label": "Twitter",
                        children: a.jsx(Dl, {
                            className: "h-6 w-6"
                        })
                    })]
                })]
            })]
        }), a.jsx("div", {
            className: "mt-20 pt-20 border-t border-gray-800",
            children: a.jsxs("div", {
                className: "flex flex-col lg:flex-row-reverse items-center gap-12",
                children: [a.jsx(ee.div, {
                    className: "w-full lg:w-2/5",
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: a.jsx("div", {
                        className: "relative max-w-md mx-auto",
                        children: a.jsx("img", {
                            src: "https://i.ibb.co/NghfzrHP/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                            alt: "Co-Founder",
                            className: "w-full h-[400px] object-cover rounded-sm neon-border-green"
                        })
                    })
                }), a.jsxs(ee.div, {
                    className: "w-full lg:w-3/5",
                    initial: {
                        opacity: 0,
                        x: -30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-3xl theme-text-primary mb-4",
                        children: "Ayush K Singh"
                    }), a.jsx("div", {
                        className: "theme-accent-primary font-code text-lg mb-6",
                        children: "Co-Founder"
                    }), a.jsxs("div", {
                        className: "space-y-4 font-code theme-text-secondary",
                        children: [a.jsx("p", {
                            children: "With extensive experience in software architecture and technical leadership, our co-founder brings deep expertise in scalable system design and innovation."
                        }), a.jsx("p", {
                            children: "A technology visionary with a strong background in full-stack development and cloud computing, they play a crucial role in driving our technical excellence and product innovation."
                        }), a.jsx("p", {
                            children: "Their leadership in our technical initiatives has been instrumental in building robust, scalable solutions that meet the evolving needs of our clients and partners worldwide."
                        })]
                    }), a.jsxs("div", {
                        className: "mt-8 flex space-x-6",
                        children: [a.jsx("a", {
                            href: "https://github.com/ayushkumar1234/",
                            className: "text-gray-400 hover:text-neo-green-100 transition-colors duration-300",
                            "aria-label": "GitHub",
                            children: a.jsx(Yi, {
                                className: "h-6 w-6"
                            })
                        }), a.jsx("a", {
                            href: "https://www.linkedin.com/in/ayush-kumar-singh-b36b16245/",
                            className: "text-gray-400 hover:text-neo-green-100 transition-colors duration-300",
                            "aria-label": "LinkedIn",
                            children: a.jsx(Xi, {
                                className: "h-6 w-6"
                            })
                        }), a.jsx("a", {
                            href: "https://x.com/ayush_k_singh",
                            className: "text-gray-400 hover:text-neo-green-100 transition-colors duration-300",
                            "aria-label": "Twitter",
                            children: a.jsx(Dl, {
                                className: "h-6 w-6"
                            })
                        })]
                    })]
                })]
            })
        })]
    })]
})
  , Up = () => {
    const [n,r] = C.useState(null)
      , i = Pn()
      , l = [{
        icon: cf,
        title: "Frontend",
        description: "Modern web frameworks and libraries for building responsive, interactive user interfaces.",
        implementation: "100%",
        integration: "Active",
        color: "neo-blue-100"
    }, {
        icon: Nx,
        title: "Backend",
        description: "Robust server-side solutions using Node.js, Python, and modern frameworks.",
        implementation: "100%",
        integration: "Active",
        color: "neo-green-100"
    }, {
        icon: rc,
        title: "Databases",
        description: "PostgreSQL, MongoDB, Redis, and other modern database solutions for data management.",
        implementation: "100%",
        integration: "Active",
        color: "neo-purple-100"
    }, {
        icon: tc,
        title: "Cloud",
        description: "AWS, Google Cloud, Azure for scalable and reliable infrastructure deployment.",
        implementation: "100%",
        integration: "Active",
        color: "neo-green-100"
    }, {
        icon: mx,
        title: "APIs",
        description: "RESTful and GraphQL APIs built for scalability and performance.",
        implementation: "100%",
        integration: "Active",
        color: "neo-blue-100"
    }, {
        icon: sc,
        title: "Security",
        description: "Advanced security measures and best practices for data protection.",
        implementation: "100%",
        integration: "Active",
        color: "neo-purple-100"
    }]
      , c = () => {
        i("/contact")
    }
    ;
    return a.jsxs("section", {
        id: "tech",
        className: "py-20 relative bg-neo-black overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm",
                        children: "$ ./tech --display-stack"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "TECH STACK",
                        className: "text-white text-shadow-neon-blue",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Our technology stack is carefully chosen to deliver robust, scalable, and maintainable solutions for our clients."
                })]
            }), a.jsx("div", {
                className: "flex flex-wrap justify-center gap-8 mb-16",
                children: l.map( (m, h) => a.jsx(ee.div, {
                    className: `w-24 h-24 bg-neo-black flex items-center justify-center cursor-pointer relative hexagon border border-${m.color} hover:neon-border-${m.color}`,
                    whileHover: {
                        scale: 1.1
                    },
                    onClick: () => r(m),
                    children: a.jsx(m.icon, {
                        className: `h-8 w-8 text-${m.color}`
                    })
                }, h))
            }), n && a.jsxs(ee.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: `bg-neo-black p-6 rounded-sm neon-border-${n.color} max-w-2xl mx-auto`,
                children: [a.jsxs("div", {
                    className: "flex items-center mb-4",
                    children: [a.jsx(n.icon, {
                        className: `h-6 w-6 text-${n.color} mr-3`
                    }), a.jsx("h3", {
                        className: "font-vt323 text-xl text-white",
                        children: n.title
                    })]
                }), a.jsx("p", {
                    className: "text-gray-400 font-code text-sm mb-4",
                    children: n.description
                }), a.jsxs("div", {
                    className: "space-y-2 font-code text-sm",
                    children: [a.jsxs("div", {
                        className: "flex items-center",
                        children: [a.jsx("span", {
                            className: "w-32 text-gray-500",
                            children: "Implementation:"
                        }), a.jsx("span", {
                            className: "text-neo-green-100",
                            children: n.implementation
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center",
                        children: [a.jsx("span", {
                            className: "w-32 text-gray-500",
                            children: "Integration:"
                        }), a.jsx("span", {
                            className: "text-neo-blue-100",
                            children: n.integration
                        })]
                    })]
                }), a.jsx("button", {
                    onClick: c,
                    className: `mt-4 px-4 py-2 text-${n.color} font-code text-sm hover:underline`,
                    children: "_REQUEST_DETAILS →"
                })]
            })]
        })]
    })
}
  , Wp = () => {
    const n = [{
        title: "FutureHack 2.0 - 2025",
        date: "June 03-05, 2025",
        location: "Bhopal, MP",
        description: "Join us for 24 hours of coding, innovation, and fun. Build something amazing!",
        image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "Registration Open",
        registrationStart: "April 26, 2025",
        registrationEnd: "May 25, 2025",
        registrationLink: "https://unstop.com/p/futurehack-20-mackys-tech-1469915"
    }, {
        title: "CTF-Hacker 2025",
        date: "July 15-17, 2025",
        location: "Virtual Event",
        description: "Explore the latest trends in CyberSecurity and Hacking.",
        image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "Upcoming",
        registrationStart: "June 01, 2025",
        registrationEnd: "July 01, 2025",
        registrationLink: "https://unstop.com/p/ctf-hacker.2025"
    }, {
        title: "Expert Session 2025",
        date: "May 17, 2025",
        location: "Technocrats Group",
        description: "Learn new programming languages and frameworks from industry experts.",
        image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "Registration Open",
        registrationStart: "May 01, 2025",
        registrationEnd: "May 16, 2025",
        registrationLink: "#"
    }]
      , r = i => {
        switch (i) {
        case "Registration Open":
            return "bg-green-500";
        case "Upcoming":
            return "bg-blue-500";
        case "Ongoing":
            return "bg-yellow-500";
        case "Registration Closed":
            return "bg-red-500";
        default:
            return "bg-gray-500"
        }
    }
    ;
    return a.jsxs("section", {
        id: "events",
        className: "py-20 relative bg-neo-dark overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm",
                        children: "$ ./events --list-upcoming"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "EVENTS & HACKATHONS",
                        className: "text-white text-shadow-neon-blue",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Join our community events and hackathons to learn, network, and innovate together."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: n.map( (i, l) => a.jsxs(ee.div, {
                    className: "bg-neo-black rounded-sm overflow-hidden neon-border-blue",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: l * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsxs("div", {
                        className: "relative h-48 overflow-hidden",
                        children: [a.jsx("img", {
                            src: i.image,
                            alt: i.title,
                            className: "w-full h-full object-cover"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"
                        }), a.jsx("div", {
                            className: `absolute top-4 right-4 ${r(i.status)} text-white text-xs px-3 py-1 rounded-full font-code`,
                            children: i.status
                        })]
                    }), a.jsxs("div", {
                        className: "p-6",
                        children: [a.jsx("h3", {
                            className: "font-vt323 text-xl text-white mb-3",
                            children: i.title
                        }), a.jsxs("div", {
                            className: "space-y-2 mb-4",
                            children: [a.jsxs("div", {
                                className: "flex items-center text-gray-400 font-code text-sm",
                                children: [a.jsx(ax, {
                                    className: "h-4 w-4 mr-2 text-neo-blue-100"
                                }), i.date]
                            }), a.jsxs("div", {
                                className: "flex items-center text-gray-400 font-code text-sm",
                                children: [a.jsx(yx, {
                                    className: "h-4 w-4 mr-2 text-neo-blue-100"
                                }), i.location]
                            }), a.jsxs("div", {
                                className: "flex items-center text-gray-400 font-code text-sm",
                                children: [a.jsx(lx, {
                                    className: "h-4 w-4 mr-2 text-neo-blue-100"
                                }), "Registration: ", i.registrationStart, " to ", i.registrationEnd]
                            })]
                        }), a.jsx("p", {
                            className: "text-gray-400 font-code text-sm mb-4",
                            children: i.description
                        }), a.jsxs("a", {
                            href: i.registrationLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `w-full neon-border-blue px-4 py-2 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center group ${i.status === "Registration Closed" ? "opacity-50 cursor-not-allowed" : ""}`,
                            onClick: c => {
                                i.status === "Registration Closed" && c.preventDefault()
                            }
                            ,
                            children: [a.jsx(oa, {
                                className: "h-4 w-4 mr-2"
                            }), i.status === "Registration Closed" ? "REGISTRATION CLOSED" : "REGISTER NOW", a.jsx("span", {
                                className: "ml-2 transform transition-transform duration-300 group-hover:translate-x-1",
                                children: "→"
                            })]
                        })]
                    })]
                }, l))
            })]
        })]
    })
}
  , Cc = () => {
    const n = [{
        url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Team Collaboration"
    }, {
        url: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Design Workshop"
    }, {
        url: "https://i.ibb.co/v4N8QgCv/IMG-20241212-130033.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Hackathon Winners"
    }, {
        url: "https://i.ibb.co/2TFPG6g/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "NGO Help"
    }, {
        url: "https://i.ibb.co/Jj9zBQLL/Whats-App-Image-2025-05-08-at-16-48-04-562c10d7.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Tech Meetup"
    }, {
        url: "https://i.ibb.co/ycVVH212/Whats-App-Image-2025-05-10-at-13-06-41-6923f707.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Company Event"
    }]
      , r = [{
        url: "https://i.ibb.co/j9DLMWgy/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Expert Session by CEO"
    }, {
        url: "https://i.ibb.co/1JqxhJZ5/Whats-App-Image-2025-05-10-at-13-22-39-b296d582.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Innovation Center"
    }, {
        url: "https://i.ibb.co/h1W0ZhqT/Whats-App-Image-2025-05-10-at-12-01-28-1ebb612b.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Developer Workspace"
    }, {
        url: "https://i.ibb.co/v4N8QgCv/IMG-20241212-130033.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Industrial Meetup"
    }, {
        url: "https://i.ibb.co/W4CHfyJv/IMG-20241213-091731.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Visiting"
    }, {
        url: "https://i.ibb.co/VpMy4JrP/IMG-20240824-150355.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Data Center"
    }, {
        url: "https://i.ibb.co/wh7V4Svj/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Seminar"
    }, {
        url: "https://i.ibb.co/wFzQ9BHd/Whats-App-Image-2025-05-10-at-13-12-45-4c69540a.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Employee Meetup"
    }, {
        url: "https://i.ibb.co/rGJcxZ0N/Whats-App-Image-2025-05-10-at-13-22-38-2ebd5e15.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "IoT Testing Team"
    }, {
        url: "https://i.ibb.co/xKZsMx18/Whats-App-Image-2025-05-10-at-13-28-49-82b4b6da.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Canteen"
    }]
      , l = window.location.pathname === "/gallery" ? [...n, ...r] : n;
    return a.jsxs("section", {
        id: "gallery",
        className: "py-20 relative bg-neo-black overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-purple-100 bg-opacity-10 text-neo-purple-100 px-2 py-1 rounded-sm",
                        children: "$ ./gallery --show-memories"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "OUR GALLERY",
                        className: "text-white text-shadow-neon-purple",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "A glimpse into our company culture, events, and the amazing people behind our success."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: l.map( (c, m) => a.jsxs(ee.div, {
                    className: "relative group overflow-hidden rounded-sm",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: m * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsx("img", {
                        src: c.url,
                        alt: c.title,
                        className: "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300",
                        children: a.jsx("div", {
                            className: "absolute bottom-0 left-0 right-0 p-6",
                            children: a.jsxs("div", {
                                className: "flex items-center",
                                children: [a.jsx(hx, {
                                    className: "h-5 w-5 text-neo-purple-100 mr-2"
                                }), a.jsx("h3", {
                                    className: "font-vt323 text-white text-lg",
                                    children: c.title
                                })]
                            })
                        })
                    })]
                }, m))
            })]
        })]
    })
}
  , Pc = () => {
    const n = [{
        name: "Neeraj Sharma",
        role: "Cyber Security Expert",
        image: "https://i.ibb.co/B55V2zN6/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Cybersecurity Expert – A strategic leader proficient in overseeing security programs, coordinating cross-functional teams, and delivering comprehensive protection through proactive risk management and advanced defensive technologies.",
        social: {
            github: "",
            linkedin: "https://www.linkedin.com/in/neeraj-sharma-293869363?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            email: "neerajkusharma7@gmail.com"
        }
    }, {
        name: "Kapil Kr Sahu",
        role: "DevOps Engineer",
        image: "https://i.ibb.co/Zzk1FQ34/Gemini-Generated-Image-b6ynsbb6ynsbb6yn.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "DevOps Engineer – Experienced in CI/CD automation, cloud infrastructure management, containerization, and optimizing system performance to enable rapid, secure, and consistent software delivery.",
        social: {
            github: "https://github.com/kapilkumarsahu",
            linkedin: "https://www.linkedin.com/in/kapilkumarsahu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "kapilkumarsahu2008@gmail.com"
        }
    }, {
        name: "Vipin K Singh",
        role: "Project Manager",
        image: "https://i.ibb.co/zhXQ9zMX/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Project Manager & Full Stack Developer – A versatile professional skilled in leading projects from concept to deployment, with expertise in managing teams, building scalable applications, and delivering innovative end-to-end digital solutions.",
        social: {
            github: "https://github.com/Vipin840",
            linkedin: "https://www.linkedin.com/in/vipin-kumar-408197382/",
            email: "vipinkumarbj807@gmail.com"
        }
    }, {
        name: "Priya Dubey",
        role: "Hiring Manager",
        image: "https://i.ibb.co/k2LGbCcc/pd.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "A dynamic individual balancing human resource management with a technical background, known for connecting with audiences through engaging talks and fostering strong teams.",
        social: {
            github: "#",
            linkedin: "https://www.linkedin.com/in/priya-dubey-869b08347/",
            email: "pd6838676@gmail.com"
        }
    }, {
        name: "Ranjan Vishwakarma",
        role: "Data & AI Engineer",
        image: "https://i.ibb.co/hRFTh7SP/Gemini-Generated-Image-hz58ewhz58ewhz58.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Data & AI Engineer – A versatile professional skilled in designing and deploying data pipelines, building intelligent systems, and delivering scalable end-to-end solutions that transform data into actionable insights.",
        social: {
            github: "https://github.com/ranjan-89",
            linkedin: "https://www.linkedin.com/in/ranjan-vishwakarma-a7300624b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            email: "ranjanvishwakarma08@gmail.com"
        }
    }, {
        name: "Yash Dhakad",
        role: "Team Leader",
        image: "https://i.ibb.co/Y4rCf6tn/Gemini-Generated-Image-ec43lzec43lzec43.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Team Leader – Software Development – A versatile leader skilled in guiding development teams, overseeing the full software lifecycle, and delivering high-quality, scalable solutions from concept to deployment.",
        social: {
            github: "",
            linkedin: "",
            email: ""
        }
    }, {
        name: "Riya Tiwari",
        role: "Managing Director",
        image: "https://i.ibb.co/N6N8SjDy/riyu.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "A versatile developer experienced in building and managing complete web solutions, focused on delivering impactful and scalable applications for businesses..",
        social: {
            linkedin: "https://www.linkedin.com/in/riya-tiwari-48a93625b/"
        }
    }, {
        name: "Zainab Khan",
        role: "Senior BDA",
        image: "https://i.ibb.co/21pcvk7c/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Senior BDA – A strategic analytical leader experienced in driving data-driven initiatives, managing complex requirements, mentoring junior analysts, and delivering high-impact insights that guide business strategy and operational excellence.",
        social: {
            github: "https://github.com/ZainabKhan90",
            linkedin: "https://www.linkedin.com/in/zainab-imran-17580828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "zainabkhaan41@gmail.com"
        }
    }, {
        name: "Riya Mathur",
        role: "Junior BDA",
        image: "https://i.ibb.co/bMJKwhpZ/IMG-20251202-WA0020.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Junior BDA – An analytical professional skilled in gathering requirements, interpreting data, and supporting decision-making through clear insights, while contributing to process improvements and collaborative project execution.",
        social: {
            github: "https://github.com/Riyamathur21",
            linkedin: "https://www.linkedin.com/in/riya-mathur-594947294?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            email: "mathurshalini708@gmail.com"
        }
    }, {
        name: "Rishabh Raj",
        role: "Public/Corporative Relation",
        image: "https://i.ibb.co/3msbYJbn/rishu.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: " An energetic communicator skilled in managing public and corporate relations, excelling in organizing impactful events and maintaining lasting stakeholder connections.",
        social: {
            github: "#",
            linkedin: "https://www.linkedin.com/in/rishabh-raj-949717273/",
            email: "rajrishabh2209@gmail.com"
        }
    }, {
        name: "Kushagra Dwivedy",
        role: "Chief Technology Officer",
        image: "https://i.ibb.co/zV47yxgT/kush.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Cybersecurity Expert – A dedicated professional leading teams in securing digital environments, with a passion for ethical hacking and protecting networks from modern threats.",
        social: {
            github: "https://github.com/Tekush1/",
            linkedin: "https://www.linkedin.com/in/kushagra-dwivedi-0342062b8/",
            email: "kushdwivedikd@gmail.com"
        }
    }, {
        name: "Yash Gupta",
        role: "Full Stack Mern Developer",
        image: "https://i.ibb.co/RpJ28gJQ/Whats-App-Image-2025-10-02-at-10-22-07-8e518664.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Full Stack MERN Developer – A skilled developer building scalable web applications, with expertise in MongoDB, Express, React, and Node.js, passionate about delivering seamless user experiences.",
        social: {
            github: "https://github.com/",
            linkedin: "https://www.linkedin.com/in/yash-gupta-3a13662a0/",
            email: "yg745192@gmail.com"
        }
    }, {
        name: "Vishal Rajput",
        role: "Full Stack Java Developer",
        image: "https://i.ibb.co/VcLLB5hX/Whats-App-Image-2025-10-02-at-10-31-30-379cac8e.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Full Stack Java Developer – A versatile developer crafting robust applications with Java technologies, skilled in both front-end and back-end, passionate about performance, scalability, and user-focused solutions.",
        social: {
            github: "https://github.com/VishalRajput8305",
            linkedin: "https://www.linkedin.com/in/vishal-rajput-843811247/",
            email: "#"
        }
    }, {
        name: "Chandan Kumar",
        role: "Database Engineer",
        image: "https://i.ibb.co/whhzpk9j/Whats-App-Image-2025-10-02-at-11-04-58-43b5e423.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "Database Engineer – A detail-oriented professional managing data systems and architecture, with a passion for optimization, security, and ensuring reliable access to critical organizational information.",
        social: {
            github: "https://github.com/Chandankr2004",
            linkedin: "https://www.linkedin.com/in/chandan6205/",
            email: "#"
        }
    }, {
        name: "Ishan Sen",
        role: "AI Engineer",
        image: "https://i.ibb.co/gb4Qhkkb/Whats-App-Image-2025-10-02-at-10-18-27-70e18a81.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bio: "AI Engineer – An innovative engineer designing intelligent solutions with machine learning, deep learning, and natural language processing, passionate about advancing automation and human–AI collaboration.",
        social: {
            github: "https://github.com/IshaanYK",
            linkedin: "https://www.linkedin.com/in/ishaan-sen-aa467a323/",
            email: "isen97509@gmail.com"
        }
    }]
      , i = window.location.pathname === "/team" ? n : n.slice(0, 8);
    return a.jsxs("section", {
        id: "team",
        className: "py-20 relative bg-neo-black overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm",
                        children: "$ ./team --list-members"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "OUR TEAM",
                        className: "text-white text-shadow-neon-blue",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Meet our team of experienced developers and technology experts who make the magic happen."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: i.map( (l, c) => a.jsxs(ee.div, {
                    className: "bg-neo-dark rounded-sm overflow-hidden neon-border-blue",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: c * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsxs("div", {
                        className: "relative overflow-hidden group",
                        children: [a.jsx("img", {
                            src: l.image,
                            alt: l.name,
                            className: "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"
                        })]
                    }), a.jsxs("div", {
                        className: "p-6",
                        children: [a.jsx("h3", {
                            className: "font-vt323 text-xl text-white mb-1",
                            children: l.name
                        }), a.jsx("div", {
                            className: "text-neo-blue-100 font-code text-sm mb-3",
                            children: l.role
                        }), a.jsx("p", {
                            className: "text-gray-400 font-code text-sm mb-4",
                            children: l.bio
                        }), a.jsxs("div", {
                            className: "flex space-x-4",
                            children: [a.jsx("a", {
                                href: l.social.github,
                                className: "text-gray-400 hover:text-neo-blue-100 transition-colors duration-300",
                                "aria-label": "GitHub",
                                children: a.jsx(Yi, {
                                    className: "h-5 w-5"
                                })
                            }), a.jsx("a", {
                                href: l.social.linkedin,
                                className: "text-gray-400 hover:text-neo-blue-100 transition-colors duration-300",
                                "aria-label": "LinkedIn",
                                children: a.jsx(Xi, {
                                    className: "h-5 w-5"
                                })
                            }), a.jsx("a", {
                                href: `mailto:${l.social.email}`,
                                className: "text-gray-400 hover:text-neo-blue-100 transition-colors duration-300",
                                "aria-label": "Email",
                                children: a.jsx(df, {
                                    className: "h-5 w-5"
                                })
                            })]
                        })]
                    })]
                }, c))
            })]
        })]
    })
}
  , Hp = () => {
    const n = [{
        name: "Mallik Raza",
        role: "CTO at TechCorp",
        company: "TechCorp Inc.",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Their software development expertise has been instrumental in our digital transformation journey. The team delivered exceptional results.",
        rating: 5
    }, {
        name: "Lisa Joshi",
        role: "Product Manager",
        company: "InnovateTech",
        image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Outstanding technical knowledge and professional service. They helped us modernize our legacy systems efficiently.",
        rating: 5
    }, {
        name: "Prem Nath Vishwami",
        role: "CEO",
        company: "DataFlow Systems",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Their cloud solutions have significantly improved our infrastructure reliability and performance. Highly recommended!",
        rating: 5
    }];
    return a.jsxs("section", {
        id: "testimonials",
        className: "py-20 relative bg-neo-dark overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-purple-100 bg-opacity-10 text-neo-purple-100 px-2 py-1 rounded-sm",
                        children: "$ ./testimonials --show-feedback"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "CLIENT FEEDBACK",
                        className: "text-white text-shadow-neon-purple",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Don't just take our word for it. Here's what our clients have to say about our services."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: n.map( (r, i) => a.jsxs(ee.div, {
                    className: "bg-neo-black p-6 rounded-sm neon-border-purple",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: i * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsx("div", {
                        className: "flex items-center mb-4",
                        children: [...Array(r.rating)].map( (l, c) => a.jsx(mf, {
                            className: "h-4 w-4 text-neo-purple-100 fill-current"
                        }, c))
                    }), a.jsx("blockquote", {
                        className: "mb-6",
                        children: a.jsxs("p", {
                            className: "text-gray-400 font-code text-sm italic",
                            children: ['"', r.content, '"']
                        })
                    }), a.jsxs("div", {
                        className: "flex items-center",
                        children: [a.jsx("img", {
                            src: r.image,
                            alt: r.name,
                            className: "w-12 h-12 rounded-full object-cover mr-4"
                        }), a.jsxs("div", {
                            children: [a.jsx("div", {
                                className: "font-vt323 text-white",
                                children: r.name
                            }), a.jsx("div", {
                                className: "text-neo-purple-100 font-code text-sm",
                                children: r.role
                            }), a.jsx("div", {
                                className: "text-gray-500 font-code text-xs",
                                children: r.company
                            })]
                        })]
                    })]
                }, i))
            })]
        })]
    })
}
  , tj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsxs(a.Fragment, {
    children: [a.jsx(Zw, {}), a.jsx(zp, {}), a.jsx(_p, {}), a.jsx(Fp, {}), a.jsx(Up, {}), a.jsx(Bp, {}), a.jsx(Wp, {}), a.jsx(Pc, {}), a.jsx(Cc, {}), a.jsx(Hp, {})]
}))
  , nj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsx("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: a.jsx(Fp, {})
}))
  , rj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsxs("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: [a.jsx(zp, {}), a.jsx(Bp, {}), a.jsx(Pc, {})]
}))
  , sj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsxs("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: [a.jsx(Wp, {}), a.jsx(Cc, {})]
}))
  , ij = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsx("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: a.jsx(Pc, {})
}))
  , aj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsx("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: a.jsx(Cc, {})
}))
  , oj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsx("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: a.jsx(Hp, {})
}))
  , lj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsxs("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: [a.jsx(_p, {}), a.jsx(Up, {})]
}))
  , cj = () => {
    const r = [{
        title: "Quiz Platform (Faculty/User)",
        description: "Test Your Knowledge Challenge Others | Join the most engaging quiz platform designed for engineer students. Compete, learn, and climb the ranks!",
        features: ["Admin/Faculty/User Dashboard", "Secure Login System", "Dynamic Quiz Creation", "Multi-Level Leaderboard", "Performance Dashboard", "Faculty Tools", "Admin Control Panel", "Mobile Friendly UI", "Database Integration", "Quiz Analytics", "No External Signup"],
        image: "https://i.ibb.co/LDxRjmwG/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://mackysquizz.netlify.app/"
    }, {
        title: "MackyBhai Programming Language",
        description: "A Fun, Natural-Language Inspired Coding Innovation for the Next Generation. | Experience the future of programming with MackyBhai, a language designed to be intuitive and accessible for everyone in desi style.",
        features: ["Natural Syntax", "Error with Emotion", "Beginner Friendly", "Interactive Console", "Auto Hindi Comments", "Code Speak Mode", "Code to Meme Converter", "Custom IDE", "Gamified Learning", "Community Packages"],
        image: "https://i.ibb.co/TMTpJ6Px/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://mackybhai.vercel.app/"
    }, {
        title: "Cyber Security Lab/Practical Learning Platform",
        description: "A gamified, hands-on cybersecurity platform inspired by Mr. Robot and fsociety. Built for aspiring ethical hackers to train, compete, and simulate real-world cyber attacks.",
        features: [" EchoFrame (AI-based Exploitation) ", " fsociety Chat (Real-World Hacking Environments) ", " Dark Army Challenges ", " Live Operations ", " Premium Learning Path ", " Gamified Dashboard ", " CTF Mode (Capture The Flag) "],
        image: "https://i.ibb.co/4ZQkFHRk/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://cyberhx.com/"
    }, {
        title: "Employee Management System",
        description: "Comprehensive HR solution for modern businesses. Streamline employee data, attendance, payroll, and performance management with our all-in-one platform.",
        features: ["Employee Database", "Attendance Tracking", "Payroll Management", "Performance Reviews", "Leave Management", "Document Storage", "Reporting Dashboard", "Role-based Access", "Mobile App", "Integration APIs"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Face Recognition Attendance System",
        description: "Advanced biometric attendance solution using cutting-edge AI technology. Eliminate proxy attendance and ensure accurate time tracking with facial recognition.",
        features: ["Real-time Face Detection", "Anti-spoofing Technology", "Cloud Storage", "Mobile App", "Admin Dashboard", "Attendance Reports", "Multi-location Support", "API Integration", "Custom Notifications", "Data Analytics"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Inventory Management System",
        description: "Complete inventory control solution for businesses of all sizes. Track stock levels, manage suppliers, and optimize your supply chain operations.",
        features: ["Stock Tracking", "Supplier Management", "Purchase Orders", "Sales Analytics", "Barcode Scanning", "Low Stock Alerts", "Multi-warehouse Support", "Reporting Tools", "Mobile Access", "Integration APIs"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "UPI Payment Gateway",
        description: "Secure and reliable payment processing solution for businesses. Accept UPI payments seamlessly with our integrated gateway solution.",
        features: ["UPI Integration", "Multiple Payment Methods", "Secure Transactions", "Real-time Processing", "Payment Analytics", "Refund Management", "Webhook Support", "Mobile SDK", "Dashboard Analytics", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Aadhar Portal",
        description: "Comprehensive Aadhar services portal for citizens and businesses. Access Aadhar-related services with ease and security.",
        features: ["Aadhar Verification", "Document Upload", "Status Tracking", "Secure Authentication", "Digital Signatures", "Government Integration", "Mobile App", "Multi-language Support", "Real-time Updates", "Customer Support"],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Hostel Management System",
        description: "Complete hostel management solution for educational institutions. Manage rooms, residents, fees, and maintenance with our comprehensive platform.",
        features: ["Room Allocation", "Resident Management", "Fee Collection", "Maintenance Tracking", "Mess Management", "Visitor Management", "Reports & Analytics", "Mobile App", "Notification System", "Admin Dashboard"],
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Chat App",
        description: "Modern real-time messaging application with advanced features. Connect with your team, friends, and family through secure and fast communication.",
        features: ["Real-time Messaging", "Group Chats", "File Sharing", "Voice & Video Calls", "Message Encryption", "Push Notifications", "Message History", "Custom Emojis", "Dark Mode", "Cross-platform Sync"],
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "NSS Management System",
        description: "Comprehensive National Service Scheme management platform for educational institutions. Track activities, volunteers, and community service programs.",
        features: ["Volunteer Registration", "Activity Tracking", "Event Management", "Certificate Generation", "Reporting System", "Mobile App", "Admin Dashboard", "Document Management", "Notification System", "Analytics Dashboard"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "School/College Management Software",
        description: "All-in-one educational institution management system. Streamline academic operations, student management, and administrative tasks.",
        features: ["Student Management", "Academic Records", "Fee Management", "Exam System", "Library Management", "Transport Management", "Parent Portal", "Teacher Dashboard", "Mobile App", "Reporting Tools"],
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Home Service Provider Platform",
        description: "On-demand home services marketplace connecting customers with verified service providers. Book cleaning, repairs, maintenance, and more.",
        features: ["Service Booking", "Provider Verification", "Real-time Tracking", "Payment Integration", "Rating System", "Scheduling System", "Customer Support", "Mobile Apps", "Service Categories", "Location-based Search"],
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "MLM Software",
        description: "Multi-level marketing platform with advanced features for network marketing businesses. Manage distributors, commissions, and sales networks.",
        features: ["Distributor Management", "Commission Tracking", "Genealogy Tree", "Product Catalog", "Order Management", "Payment Processing", "Reporting Dashboard", "Mobile App", "Binary/Matrix Plans", "E-wallet Integration"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Online Learning App",
        description: "Comprehensive e-learning platform with interactive courses, assessments, and progress tracking. Perfect for educational institutions and training organizations.",
        features: ["Course Management", "Video Streaming", "Interactive Quizzes", "Progress Tracking", "Certificates", "Discussion Forums", "Mobile Learning", "Offline Access", "Analytics Dashboard", "Multi-language Support"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Event Management Software",
        description: "Complete event planning and management solution. Organize conferences, weddings, corporate events, and more with our comprehensive platform.",
        features: ["Event Planning", "Venue Management", "Guest Management", "Ticketing System", "Payment Processing", "Marketing Tools", "Live Streaming", "Mobile App", "Analytics Dashboard", "Vendor Management"],
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Billing Software",
        description: "Professional invoicing and billing solution for businesses. Create invoices, track payments, and manage your financial records efficiently.",
        features: ["Invoice Generation", "Payment Tracking", "Tax Management", "Customer Management", "Recurring Billing", "Payment Reminders", "Financial Reports", "Multi-currency Support", "Mobile App", "Cloud Storage"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Restaurant Management System",
        description: "Complete restaurant management solution. Manage menu, orders, inventory, and more with our comprehensive platform.",
        features: ["Menu Management", "Order Management", "Inventory Management", "Customer Management", "Payment Processing", "Reporting System", "Mobile App", "Admin Dashboard", "Table Reservation", "Food Delivery"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Hotel Management System",
        description: "Complete hotel management solution. Manage rooms, reservations, billing, and more with our comprehensive platform.",
        features: ["Room Management", "Reservation Management", "Billing System", "Customer Management", "Payment Processing", "Reporting System", "Mobile App", "Admin Dashboard", "Housekeeping Management", "Front Desk Management"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Gym Management System",
        description: "Complete gym management solution. Manage members, classes, billing, and more with our comprehensive platform.",
        features: ["Member Management", "Class Management", "Billing System", "Payment Processing", "Reporting System", "Mobile App", "Admin Dashboard", "Front Desk Management", "Equipment Management", "Staff Management"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Car Rental Management System",
        description: "Complete car rental management solution. Manage cars, bookings, billing, and more with our comprehensive platform.",
        features: ["Car Management", "Booking Management", "Billing System", "Payment Processing", "Reporting System", "Mobile App", "Admin Dashboard", "Front Desk Management", "Maintenance Management", "Staff Management"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "Event Management System",
        description: "Complete event management solution. Manage events, registrations, billing, and more with our comprehensive platform.",
        features: ["Event Management", "Registration Management", "Billing System", "Payment Processing", "Reporting System", "Mobile App", "Admin Dashboard", "Front Desk Management", "Staff Management", "Vendor Management"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }, {
        title: "CRM Software",
        description: "Complete CRM solution. Manage customers, sales, marketing, and more with our comprehensive platform.",
        features: ["Customer Management", "Sales Management", "Marketing Management", "Reporting System", "Mobile App", "Admin Dashboard", "Front Desk Management", "Staff Management", "Vendor Management"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "#"
    }];
    return a.jsxs("section", {
        id: "products",
        className: "py-20 relative bg-neo-black overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm",
                        children: "$ ./products --list-featured"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "OUR PRODUCTS",
                        className: "text-white text-shadow-neon-green",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Explore our range of innovative products designed to elevate your business."
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: r.map( (i, l) => a.jsxs(ee.div, {
                    className: "bg-neo-dark rounded-sm overflow-hidden group relative pb-12",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: l * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsxs("div", {
                        className: "relative h-48 overflow-hidden",
                        children: [a.jsx("img", {
                            src: i.image,
                            alt: i.title,
                            className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"
                        })]
                    }), a.jsxs("div", {
                        className: "p-6",
                        children: [a.jsx("h3", {
                            className: "font-vt323 text-xl text-white mb-2",
                            children: i.title
                        }), a.jsx("p", {
                            className: "text-gray-400 font-code text-sm mb-4",
                            children: i.description
                        }), a.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-4",
                            children: i.features.map( (c, m) => a.jsx("span", {
                                className: "px-2 py-1 text-xs font-code bg-neo-green-100 bg-opacity-10 text-neo-green-100",
                                children: c
                            }, m))
                        }), a.jsxs("a", {
                            href: i.link,
                            className: "flex items-center text-neo-green-100 font-code text-sm group",
                            children: [a.jsx(Bm, {
                                className: "h-4 w-4 mr-2"
                            }), "Learn More", a.jsx(uf, {
                                className: "h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                            })]
                        })]
                    }), a.jsx("div", {
                        className: "absolute bottom-4 right-4",
                        children: a.jsxs("a", {
                            href: `https://wa.link/jwjxe9?text=I%20want%20to%20buy%20the%20${encodeURIComponent(i.title)}!`,
                            className: "flex items-center text-neo-blue-100 font-code text-sm group neon-border-blue px-3 py-1 rounded-sm hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [a.jsx(Bm, {
                                className: "h-4 w-4 mr-2"
                            }), "Buy"]
                        })
                    })]
                }, l))
            })]
        })]
    })
}
  , uj = () => (C.useLayoutEffect( () => {
    window.scrollTo(0, 0)
}
, []),
a.jsx("div", {
    className: "min-h-screen bg-neo-black pt-20",
    children: a.jsx(cj, {})
}))
  , dj = () => {
    C.useLayoutEffect( () => {
        window.scrollTo(0, 0)
    }
    , []);
    const n = Pn()
      , r = [{
        title: "Backend Developer Intern (PostgreSQL)",
        department: "Engineering",
        duration: "3-6 months",
        description: "Work with our backend team to build scalable APIs and data-driven systems using Node.js and PostgreSQL.",
        requirements: ["Pursuing CS/IT or related degree", "Good knowledge of Node.js or Python", "Experience with PostgreSQL or any SQL database", "Understanding of REST APIs and server-side logic"]
    }, {
        title: "Android Developer Intern",
        department: "Mobile Development",
        duration: "3-6 months",
        description: "Join our mobile team to build and enhance Android applications using Kotlin or Java, and contribute to scalable mobile solutions.",
        requirements: ["Pursuing CS/IT or related degree", "Familiarity with Android Studio and XML layouts", "Basic experience in Kotlin or Java for Android", "Understanding of REST APIs and mobile architecture"]
    }, {
        title: "Social Media Marketing Intern",
        department: "Marketing",
        duration: "2-3 months",
        description: "Join our digital marketing team to manage social media platforms, run campaigns, and grow our brand online.",
        requirements: ["Basic understanding of digital marketing", "Familiar with Instagram, LinkedIn, and Facebook", "Creative mindset and content planning skills", "Experience with Canva or basic graphic tools is a plus"]
    }, {
        title: "Full Stack Developer Intern",
        department: "Engineering",
        duration: "3-6 months",
        description: "Contribute to both frontend and backend projects using modern frameworks such as React and Node.js.",
        requirements: ["Strong programming knowledge in JavaScript", "Hands-on experience with React and Node.js", "Basic knowledge of database systems", "Willingness to learn and work on complete web stack"]
    }, {
        title: "UI/UX Designer Intern",
        department: "Design",
        duration: "2-3 months",
        description: "Assist in designing user-friendly interfaces and enhancing user experiences across digital platforms.",
        requirements: ["Basic knowledge of UI/UX principles", "Experience with Figma, Adobe XD, or similar tools", "Ability to create wireframes and mockups", "Attention to detail and user empathy"]
    }, {
        title: "Cyber Security Intern",
        department: "Security",
        duration: "2-4 months",
        description: "Work with our security team to assess, monitor, and improve the security posture of our applications.",
        requirements: ["Pursuing degree in Cyber Security/IT", "Familiarity with OWASP Top 10 and basic network security", "Understanding of vulnerabilities and penetration testing tools", "Ethical hacking certification is a plus"]
    }, {
        title: "Content Creator Intern",
        department: "Content/Marketing",
        duration: "2-3 months",
        description: "Create engaging content for blogs, social media, and marketing campaigns to drive user engagement.",
        requirements: ["Strong written and verbal communication skills", "Creativity in content development and storytelling", "Familiarity with SEO basics and digital trends", "Experience with WordPress or Medium is a plus"]
    }, {
        title: "AI Research Intern",
        department: "R&D",
        duration: "6 months",
        description: "Work on innovative AI projects and help shape the future of machine learning applications.",
        requirements: ["ML/AI academic background", "Python programming skills", "Understanding of neural networks", "Research experience is a plus"],
        icon: a.jsx(lf, {
            className: "h-6 w-6"
        })
    }, {
        title: "DevOps Intern",
        department: "Infrastructure",
        duration: "3-6 months",
        description: "Learn and implement modern DevOps practices and cloud infrastructure solutions.",
        requirements: ["Knowledge of Linux systems", "Basic understanding of CI/CD", "Interest in cloud technologies", "Scripting skills (Python/Bash)"],
        icon: a.jsx(ff, {
            className: "h-6 w-6"
        })
    }];
    return a.jsx("div", {
        className: "min-h-screen bg-neo-black pt-20",
        children: a.jsxs("section", {
            className: "py-20 relative bg-neo-dark overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
            }), a.jsxs("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("div", {
                        className: "inline-block mb-2",
                        children: a.jsx("code", {
                            className: "text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm",
                            children: "$ ./careers --list-internships"
                        })
                    }), a.jsx("h2", {
                        className: "text-4xl md:text-5xl font-vt323 mb-4",
                        children: a.jsx(rt, {
                            text: "INTERNSHIP OPPORTUNITIES",
                            className: "text-white text-shadow-neon-green",
                            intensity: "low"
                        })
                    }), a.jsx("p", {
                        className: "max-w-2xl mx-auto text-gray-400 font-code",
                        children: "Launch your career with hands-on experience in cutting-edge technology projects."
                    })]
                }), a.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: r.map( (i, l) => a.jsxs(ee.div, {
                        className: "bg-neo-black p-6 rounded-sm neon-border-green",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: l * .1
                        },
                        viewport: {
                            once: !0
                        },
                        children: [a.jsx("div", {
                            className: "text-neo-green-100 mb-4",
                            children: i.icon
                        }), a.jsx("h3", {
                            className: "font-vt323 text-xl text-white mb-2",
                            children: i.title
                        }), a.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [a.jsx(oa, {
                                className: "h-4 w-4 text-neo-green-100 mr-2"
                            }), a.jsx("span", {
                                className: "text-gray-400 font-code text-sm",
                                children: i.department
                            }), a.jsx("span", {
                                className: "mx-2 text-gray-600",
                                children: "•"
                            }), a.jsx(ix, {
                                className: "h-4 w-4 text-neo-green-100 mr-2"
                            }), a.jsx("span", {
                                className: "text-gray-400 font-code text-sm",
                                children: i.duration
                            })]
                        }), a.jsx("p", {
                            className: "text-gray-400 font-code text-sm mb-4",
                            children: i.description
                        }), a.jsxs("div", {
                            className: "mb-6",
                            children: [a.jsx("h4", {
                                className: "font-vt323 text-white mb-2",
                                children: "Requirements:"
                            }), a.jsx("ul", {
                                className: "space-y-2",
                                children: i.requirements.map( (c, m) => a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-neo-green-100 mr-2",
                                        children: "›"
                                    }), a.jsx("span", {
                                        className: "text-gray-400 font-code text-sm",
                                        children: c
                                    })]
                                }, m))
                            })]
                        }), a.jsx("button", {
                            className: "w-full neon-border-green px-4 py-2 font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300",
                            onClick: () => n("/InternshipFormPage"),
                            children: "APPLY NOW"
                        })]
                    }, l))
                }), a.jsxs("div", {
                    className: "mt-16 bg-neo-black p-8 rounded-sm neon-border-blue",
                    children: [a.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [a.jsx(of, {
                            className: "h-8 w-8 text-neo-blue-100 mr-4"
                        }), a.jsx("h3", {
                            className: "font-vt323 text-2xl text-white",
                            children: "Benefits"
                        })]
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: [a.jsxs("div", {
                            className: "p-4",
                            children: [a.jsx("h4", {
                                className: "font-vt323 text-neo-blue-100 mb-2",
                                children: "Learning & Development"
                            }), a.jsx("p", {
                                className: "text-gray-400 font-code text-sm",
                                children: "Access to online courses, workshops, and mentorship from industry experts."
                            })]
                        }), a.jsxs("div", {
                            className: "p-4",
                            children: [a.jsx("h4", {
                                className: "font-vt323 text-neo-blue-100 mb-2",
                                children: "Competitive Compensation"
                            }), a.jsx("p", {
                                className: "text-gray-400 font-code text-sm",
                                children: "Paid internships with performance-based bonuses."
                            })]
                        }), a.jsxs("div", {
                            className: "p-4",
                            children: [a.jsx("h4", {
                                className: "font-vt323 text-neo-blue-100 mb-2",
                                children: "Future Opportunities"
                            }), a.jsx("p", {
                                className: "text-gray-400 font-code text-sm",
                                children: "Potential for full-time positions upon successful completion."
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
  , Tc = () => {
    const [n,r] = C.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
      , [i,l] = C.useState(!1)
      , [c,m] = C.useState(!1)
      , [h,f] = C.useState("")
      , p = C.useRef(null);
    C.useEffect( () => {
        p.current && p.current.focus()
    }
    , []);
    const g = j => {
        r({
            ...n,
            [j.target.name]: j.target.value
        })
    }
      , v = async j => {
        j.preventDefault(),
        l(!0),
        f("");
        try {
            if ((await (await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    access_key: "da091ed8-42eb-4541-ade0-28e5cf1c5168",
                    ...n
                })
            })).json()).success)
                m(!0),
                r({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            else
                throw new Error("Something went wrong")
        } catch {
            f("Failed to send message. Please try again.")
        } finally {
            l(!1)
        }
    }
      , x = "w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-green hover:bg-neo-green-100 hover:bg-opacity-5 focus:bg-neo-green-100 focus:bg-opacity-5 transition-colors duration-300";
    return a.jsxs("section", {
        id: "contact",
        className: "py-20 relative bg-neo-black overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "text-center mb-16",
                children: [a.jsx("div", {
                    className: "inline-block mb-2",
                    children: a.jsx("code", {
                        className: "text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm",
                        children: "$ ./connect --initialize-communication"
                    })
                }), a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-vt323 mb-4",
                    children: a.jsx(rt, {
                        text: "ESTABLISH CONNECTION",
                        className: "text-white text-shadow-neon-green",
                        intensity: "low"
                    })
                }), a.jsx("p", {
                    className: "max-w-2xl mx-auto text-gray-400 font-code",
                    children: "Ready to explore how our technology can revolutionize your operations? Initiate contact, and our team will respond within 24 hours."
                })]
            }), a.jsxs("div", {
                className: "flex flex-col lg:flex-row gap-10",
                children: [a.jsx(ee.div, {
                    className: "w-full lg:w-1/2",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: a.jsxs("div", {
                        className: "bg-neo-dark p-8 rounded-sm h-full",
                        children: [a.jsxs("div", {
                            className: "flex items-center mb-6",
                            children: [a.jsx(Kn, {
                                className: "h-5 w-5 text-neo-green-100 mr-2"
                            }), a.jsx("div", {
                                className: "font-vt323 text-neo-green-100 text-lg",
                                children: "> Connection Protocol"
                            })]
                        }), c ? a.jsxs(ee.div, {
                            className: "terminal-text font-code text-sm space-y-4",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .5
                            },
                            children: [a.jsx("div", {
                                className: "text-neo-green-100 mb-4",
                                children: a.jsx(ql, {
                                    strings: ["Message received. Connection established successfully."],
                                    typeSpeed: 30,
                                    showCursor: !0,
                                    loop: !1
                                })
                            }), a.jsx("p", {
                                className: "text-gray-400",
                                children: "Thank you for contacting ZERO MATRIX. Our team will analyze your request and respond within 24 hours."
                            }), a.jsxs("div", {
                                className: "mt-6 text-neo-green-100",
                                children: [a.jsx("span", {
                                    className: "animate-pulse mr-2",
                                    children: "█"
                                }), a.jsxs("span", {
                                    children: ["Transaction ID: ", Math.random().toString(36).substring(2, 15)]
                                })]
                            })]
                        }) : a.jsxs("form", {
                            onSubmit: v,
                            className: "space-y-6",
                            children: [h && a.jsx("div", {
                                className: "text-red-500 font-code text-sm mb-4",
                                children: h
                            }), a.jsxs("div", {
                                children: [a.jsx("label", {
                                    htmlFor: "name",
                                    className: "font-code text-xs text-gray-400 mb-1 block",
                                    children: "> IDENTIFIER:"
                                }), a.jsx("input", {
                                    ref: p,
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    required: !0,
                                    value: n.name,
                                    onChange: g,
                                    placeholder: "Enter your name",
                                    className: x
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("label", {
                                    htmlFor: "email",
                                    className: "font-code text-xs text-gray-400 mb-1 block",
                                    children: "> COMM_CHANNEL:"
                                }), a.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    required: !0,
                                    value: n.email,
                                    onChange: g,
                                    placeholder: "Enter your email",
                                    className: x
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("label", {
                                    htmlFor: "subject",
                                    className: "font-code text-xs text-gray-400 mb-1 block",
                                    children: "> SUBJECT:"
                                }), a.jsxs("select", {
                                    id: "subject",
                                    name: "subject",
                                    required: !0,
                                    value: n.subject,
                                    onChange: g,
                                    className: x,
                                    children: [a.jsx("option", {
                                        value: "",
                                        disabled: !0,
                                        children: "Select interest area"
                                    }), a.jsx("option", {
                                        value: "ai",
                                        children: "AI Solutions"
                                    }), a.jsx("option", {
                                        value: "security",
                                        children: "Cybersecurity"
                                    }), a.jsx("option", {
                                        value: "quantum",
                                        children: "Quantum Computing"
                                    }), a.jsx("option", {
                                        value: "blockchain",
                                        children: "Blockchain Technology"
                                    }), a.jsx("option", {
                                        value: "development",
                                        children: "Advanced Development"
                                    }), a.jsx("option", {
                                        value: "other",
                                        children: "Other"
                                    })]
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("label", {
                                    htmlFor: "message",
                                    className: "font-code text-xs text-gray-400 mb-1 block",
                                    children: "> TRANSMISSION:"
                                }), a.jsx("textarea", {
                                    id: "message",
                                    name: "message",
                                    required: !0,
                                    rows: 5,
                                    value: n.message,
                                    onChange: g,
                                    placeholder: "Enter your message",
                                    className: x
                                })]
                            }), a.jsx("button", {
                                type: "submit",
                                disabled: i,
                                className: "w-full neon-border-green px-6 py-3 flex items-center justify-center font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 text-lg group",
                                children: i ? a.jsxs("span", {
                                    className: "flex items-center",
                                    children: [a.jsx("span", {
                                        className: "animate-pulse mr-2",
                                        children: "█"
                                    }), "TRANSMITTING..."]
                                }) : a.jsxs("span", {
                                    className: "flex items-center",
                                    children: [">_SEND_MESSAGE", a.jsx(kx, {
                                        className: "ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                                    })]
                                })
                            })]
                        })]
                    })
                }), a.jsx(ee.div, {
                    className: "w-full lg:w-1/2",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    viewport: {
                        once: !0
                    },
                    children: a.jsxs("div", {
                        className: "bg-neo-dark p-8 rounded-sm h-full",
                        children: [a.jsxs("div", {
                            className: "flex items-center mb-6",
                            children: [a.jsx(Kn, {
                                className: "h-5 w-5 text-neo-blue-100 mr-2"
                            }), a.jsx("div", {
                                className: "font-vt323 text-neo-blue-100 text-lg",
                                children: "> Connection Nodes"
                            })]
                        }), a.jsxs("div", {
                            className: "space-y-6",
                            children: [a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-vt323 text-xl text-white mb-2",
                                    children: "Global Headquarters"
                                }), a.jsxs("p", {
                                    className: "font-code text-gray-400 text-sm",
                                    children: ["20B Gupta Colony", a.jsx("br", {}), "Anand Nagar, Bhopal, MP 462022", a.jsx("br", {}), "India"]
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-vt323 text-xl text-white mb-2",
                                    children: "Satellite Offices"
                                }), a.jsxs("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [a.jsxs("div", {
                                        className: "font-code text-gray-400 text-sm",
                                        children: [a.jsx("div", {
                                            className: "text-neo-green-100 mb-1",
                                            children: "India"
                                        }), "Anand Nagar", a.jsx("br", {}), "Bhopal, MP - 462022", a.jsx("br", {}), "India"]
                                    }), a.jsxs("div", {
                                        className: "font-code text-gray-400 text-sm",
                                        children: [a.jsx("div", {
                                            className: "text-neo-blue-100 mb-1",
                                            children: "Bihar"
                                        }), "Naka No. 05", a.jsx("br", {}), "Darbhanga - 846004", a.jsx("br", {}), "Bihar"]
                                    })]
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-vt323 text-xl text-white mb-2",
                                    children: "Direct Channels"
                                }), a.jsxs("div", {
                                    className: "space-y-2 font-code text-sm",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center group",
                                        children: [a.jsx("div", {
                                            className: "w-24 text-gray-500",
                                            children: "General:"
                                        }), a.jsx("a", {
                                            href: "mailto:info@mackystech.ai",
                                            className: "text-neo-green-100 hover:underline",
                                            children: "info@mackystech.in"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center",
                                        children: [a.jsx("div", {
                                            className: "w-24 text-gray-500",
                                            children: "Support:"
                                        }), a.jsx("a", {
                                            href: "mailto:support@mackystech.ai",
                                            className: "text-neo-blue-100 hover:underline",
                                            children: "contact@mackystech.in"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center",
                                        children: [a.jsx("div", {
                                            className: "w-24 text-gray-500",
                                            children: "Press:"
                                        }), a.jsx("a", {
                                            href: "mailto:media@mackystech.ai",
                                            className: "text-neo-purple-100 hover:underline",
                                            children: "co.founder@mackystech.in"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center",
                                        children: [a.jsx("div", {
                                            className: "w-24 text-gray-500",
                                            children: "Phone:"
                                        }), a.jsx("span", {
                                            className: "text-gray-300",
                                            children: "+91 82359 10315"
                                        })]
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "pt-4 border-t border-gray-800",
                                children: [a.jsx("h3", {
                                    className: "font-vt323 text-xl text-white mb-3",
                                    children: "Response Time"
                                }), a.jsxs("div", {
                                    className: "font-code text-sm text-gray-400",
                                    children: [a.jsx("p", {
                                        children: "All inquiries receive a response within 24 hours during business days."
                                    }), a.jsxs("div", {
                                        className: "flex items-center mt-2",
                                        children: [a.jsx("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"
                                        }), a.jsx("span", {
                                            children: "Systems operational and monitoring active."
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })]
    })
}
  , mj = () => {
    C.useLayoutEffect( () => {
        window.scrollTo(0, 0)
    }
    , []);
    const n = [{
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "San Francisco, CA",
        type: "Full-time",
        description: "Lead the development of our core platform using modern web technologies.",
        requirements: ["5+ years of full-stack development experience", "Expertise in React and Node.js", "Experience with cloud platforms (AWS/GCP)", "Strong system design skills"],
        icon: a.jsx(nc, {
            className: "h-6 w-6"
        })
    }, {
        title: "AI/ML Engineer",
        department: "R&D",
        location: "Remote",
        type: "Full-time",
        description: "Develop and implement machine learning solutions for our products.",
        requirements: ["MS/PhD in Computer Science or related field", "Strong background in ML/AI", "Experience with TensorFlow/PyTorch", "Published research is a plus"],
        icon: a.jsx(lf, {
            className: "h-6 w-6"
        })
    }, {
        title: "Cloud Infrastructure Engineer",
        department: "DevOps",
        location: "New York, NY",
        type: "Full-time",
        description: "Design and maintain our cloud infrastructure and deployment pipelines.",
        requirements: ["Strong experience with AWS/GCP", "Expertise in Kubernetes and Docker", "Infrastructure as Code experience", "Security best practices knowledge"],
        icon: a.jsx(tc, {
            className: "h-6 w-6"
        })
    }, {
        title: "Security Engineer",
        department: "Security",
        location: "Boston, MA",
        type: "Full-time",
        description: "Implement and maintain security measures across our infrastructure.",
        requirements: ["Security certifications (CISSP, CEH)", "Experience with penetration testing", "Knowledge of compliance frameworks", "Incident response experience"],
        icon: a.jsx(sc, {
            className: "h-6 w-6"
        })
    }, {
        title: "Database Administrator",
        department: "Infrastructure",
        location: "Austin, TX",
        type: "Full-time",
        description: "Manage and optimize our database systems and data infrastructure.",
        requirements: ["Advanced PostgreSQL experience", "Performance tuning expertise", "High availability design", "Backup and recovery planning"],
        icon: a.jsx(rc, {
            className: "h-6 w-6"
        })
    }, {
        title: "DevOps Engineer",
        department: "Infrastructure",
        location: "Seattle, WA",
        type: "Full-time",
        description: "Build and maintain our CI/CD pipelines and automation systems.",
        requirements: ["Strong Linux/Unix background", "CI/CD pipeline expertise", "Configuration management", "Monitoring and logging systems"],
        icon: a.jsx(Kn, {
            className: "h-6 w-6"
        })
    }];
    return a.jsxs("div", {
        className: "min-h-screen bg-neo-black pt-20",
        children: [a.jsxs("section", {
            className: "py-20 relative bg-neo-dark overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
            }), a.jsxs("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("div", {
                        className: "inline-block mb-2",
                        children: a.jsx("code", {
                            className: "text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm",
                            children: "$ ./careers --list-positions"
                        })
                    }), a.jsx("h2", {
                        className: "text-4xl md:text-5xl font-vt323 mb-4",
                        children: a.jsx(rt, {
                            text: "OPEN POSITIONS",
                            className: "text-white text-shadow-neon-blue",
                            intensity: "low"
                        })
                    }), a.jsx("p", {
                        className: "max-w-2xl mx-auto text-gray-400 font-code",
                        children: "Join our team of innovators and help shape the future of technology."
                    })]
                }), a.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: n.map( (r, i) => a.jsxs(ee.div, {
                        className: "bg-neo-black p-6 rounded-sm neon-border-blue",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: i * .1
                        },
                        viewport: {
                            once: !0
                        },
                        children: [a.jsx("div", {
                            className: "text-neo-blue-100 mb-4",
                            children: r.icon
                        }), a.jsx("h3", {
                            className: "font-vt323 text-xl text-white mb-2",
                            children: r.title
                        }), a.jsxs("div", {
                            className: "flex flex-wrap gap-2 mb-4",
                            children: [a.jsx("span", {
                                className: "px-2 py-1 bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 text-xs font-code",
                                children: r.department
                            }), a.jsx("span", {
                                className: "px-2 py-1 bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 text-xs font-code",
                                children: r.location
                            }), a.jsx("span", {
                                className: "px-2 py-1 bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 text-xs font-code",
                                children: r.type
                            })]
                        }), a.jsx("p", {
                            className: "text-gray-400 font-code text-sm mb-4",
                            children: r.description
                        }), a.jsxs("div", {
                            className: "mb-6",
                            children: [a.jsx("h4", {
                                className: "font-vt323 text-white mb-2",
                                children: "Requirements:"
                            }), a.jsx("ul", {
                                className: "space-y-2",
                                children: r.requirements.map( (l, c) => a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-neo-blue-100 mr-2",
                                        children: "›"
                                    }), a.jsx("span", {
                                        className: "text-gray-400 font-code text-sm",
                                        children: l
                                    })]
                                }, c))
                            })]
                        }), a.jsx("button", {
                            className: "w-full neon-border-blue px-4 py-2 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300",
                            children: "APPLY NOW"
                        })]
                    }, i))
                })]
            })]
        }), a.jsx(Tc, {})]
    })
}
  , hj = () => {
    C.useLayoutEffect( () => {
        window.scrollTo(0, 0)
    }
    , []);
    const n = [{
        icon: a.jsx(of, {
            className: "h-8 w-8"
        }),
        title: "Exclusive Training",
        description: "Access to specialized technical workshops and certification programs."
    }, {
        icon: a.jsx(dx, {
            className: "h-8 w-8"
        }),
        title: "Company Swag",
        description: "Receive branded merchandise and exclusive company products."
    }, {
        icon: a.jsx(oa, {
            className: "h-8 w-8"
        }),
        title: "Networking",
        description: "Connect with industry professionals and fellow ambassadors."
    }, {
        icon: a.jsx(hf, {
            className: "h-8 w-8"
        }),
        title: "Career Growth",
        description: "Priority consideration for internships and full-time positions."
    }]
      , r = ["Organize and lead technical workshops on campus", "Represent the company at university events and career fairs", "Create content for social media and blog posts", "Build and maintain relationships with student organizations", "Provide feedback on company initiatives and products", "Help identify and recruit talented students"];
    return a.jsxs("div", {
        className: "min-h-screen bg-neo-black pt-20",
        children: [a.jsxs("section", {
            className: "py-20 relative bg-neo-dark overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
            }), a.jsxs("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("div", {
                        className: "inline-block mb-2",
                        children: a.jsx("code", {
                            className: "text-xs bg-neo-purple-100 bg-opacity-10 text-neo-purple-100 px-2 py-1 rounded-sm",
                            children: "$ ./careers --show-ambassador-program"
                        })
                    }), a.jsx("h2", {
                        className: "text-4xl md:text-5xl font-vt323 mb-4",
                        children: a.jsx(rt, {
                            text: "STUDENT AMBASSADOR PROGRAM",
                            className: "text-white text-shadow-neon-purple",
                            intensity: "low"
                        })
                    }), a.jsx("p", {
                        className: "max-w-2xl mx-auto text-gray-400 font-code",
                        children: "Become a technology advocate and help shape the future of innovation on your campus."
                    })]
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16",
                    children: [a.jsxs(ee.div, {
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-neo-black p-8 rounded-sm neon-border-purple",
                        children: [a.jsxs("h3", {
                            className: "font-vt323 text-2xl text-white mb-6 flex items-center",
                            children: [a.jsx(mf, {
                                className: "h-6 w-6 text-neo-purple-100 mr-3"
                            }), "Program Overview"]
                        }), a.jsxs("div", {
                            className: "space-y-6 font-code text-gray-400",
                            children: [a.jsx("p", {
                                children: "Our Student Ambassador Program is designed for passionate tech enthusiasts who want to make an impact in their university community while gaining valuable industry experience."
                            }), a.jsxs("div", {
                                children: [a.jsx("h4", {
                                    className: "font-vt323 text-white mb-3",
                                    children: "Requirements:"
                                }), a.jsxs("ul", {
                                    className: "space-y-2",
                                    children: [a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-neo-purple-100 mr-2",
                                            children: "›"
                                        }), "Currently enrolled university student"]
                                    }), a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-neo-purple-100 mr-2",
                                            children: "›"
                                        }), "Strong technical background"]
                                    }), a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-neo-purple-100 mr-2",
                                            children: "›"
                                        }), "Excellent communication skills"]
                                    }), a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-neo-purple-100 mr-2",
                                            children: "›"
                                        }), "Leadership experience"]
                                    })]
                                })]
                            })]
                        })]
                    }), a.jsxs(ee.div, {
                        initial: {
                            opacity: 0,
                            x: 30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-neo-black p-8 rounded-sm neon-border-purple",
                        children: [a.jsxs("h3", {
                            className: "font-vt323 text-2xl text-white mb-6 flex items-center",
                            children: [a.jsx(ff, {
                                className: "h-6 w-6 text-neo-purple-100 mr-3"
                            }), "Responsibilities"]
                        }), a.jsx("div", {
                            className: "space-y-4",
                            children: r.map( (i, l) => a.jsxs("div", {
                                className: "flex items-start",
                                children: [a.jsxs("span", {
                                    className: "text-neo-purple-100 mr-3",
                                    children: ["0", l + 1]
                                }), a.jsx("p", {
                                    className: "text-gray-400 font-code",
                                    children: i
                                })]
                            }, l))
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "mb-16",
                    children: [a.jsx("h3", {
                        className: "text-center font-vt323 text-2xl text-white mb-8",
                        children: "Program Benefits"
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: n.map( (i, l) => a.jsxs(ee.div, {
                            className: "bg-neo-black p-6 rounded-sm neon-border-purple text-center",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                delay: l * .1
                            },
                            viewport: {
                                once: !0
                            },
                            children: [a.jsx("div", {
                                className: "text-neo-purple-100 mb-4 flex justify-center",
                                children: i.icon
                            }), a.jsx("h4", {
                                className: "font-vt323 text-white mb-2",
                                children: i.title
                            }), a.jsx("p", {
                                className: "text-gray-400 font-code text-sm",
                                children: i.description
                            })]
                        }, l))
                    })]
                }), a.jsx("div", {
                    className: "text-center",
                    children: a.jsx("button", {
                        className: "neon-border-purple px-8 py-3 font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300 text-lg",
                        children: "APPLY TO PROGRAM"
                    })
                })]
            })]
        }), a.jsx(Tc, {})]
    })
}
  , fj = () => {
    const n = Gl()
      , [r,i] = C.useState(new Date)
      , [l,c] = C.useState(new Date)
      , m = Pn()
      , [h,f] = C.useState(!1)
      , [p,g] = C.useState(n);
    if (C.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , []),
    C.useEffect( () => {
        const P = setInterval( () => {
            c(new Date)
        }
        , 1e3);
        return () => clearInterval(P)
    }
    , []),
    !n)
        return a.jsx(By, {
            to: "/"
        });
    const v = () => {
        Op(),
        m("/")
    }
      , x = P => {
        navigator.clipboard.writeText(P)
    }
      , j = () => {
        f(!0)
    }
      , k = () => {
        f(!1)
    }
      , M = (P, A) => {
        g(I => ({
            ...I,
            [P]: A
        }))
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-[#F5F6FA] pt-16",
        children: [a.jsxs("div", {
            className: "bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center",
            children: [a.jsx("div", {
                className: "flex items-center space-x-4",
                children: a.jsx("h1", {
                    className: "text-2xl font-semibold text-gray-800",
                    children: "Profile"
                })
            }), a.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [a.jsx("div", {
                    className: "text-sm font-medium text-gray-600",
                    children: l.toLocaleTimeString()
                }), a.jsx("button", {
                    className: "p-2 text-gray-500 hover:text-gray-700",
                    children: a.jsx(sx, {
                        className: "h-5 w-5"
                    })
                }), a.jsx("button", {
                    className: "p-2 text-gray-500 hover:text-gray-700",
                    children: a.jsx(Sx, {
                        className: "h-5 w-5"
                    })
                })]
            })]
        }), a.jsxs("div", {
            className: "p-6",
            children: [a.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [a.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm p-6",
                    children: [a.jsxs("div", {
                        className: "relative",
                        children: [a.jsx("div", {
                            className: "absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded",
                            children: "Active"
                        }), a.jsx("img", {
                            src: n.avatar,
                            alt: n.name,
                            className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        }), a.jsx("button", {
                            className: "absolute bottom-4 right-1/2 transform translate-x-12 bg-white rounded-full p-2 shadow-lg",
                            children: a.jsx(ox, {
                                className: "h-4 w-4 text-gray-600"
                            })
                        })]
                    }), a.jsxs("div", {
                        className: "text-center mb-6",
                        children: [a.jsx("h2", {
                            className: "text-xl font-semibold text-gray-800",
                            children: n.name
                        }), a.jsx("p", {
                            className: "text-gray-500",
                            children: n.position
                        })]
                    }), a.jsxs("div", {
                        className: "space-y-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Email"
                            }), a.jsxs("div", {
                                className: "flex items-center mt-1",
                                children: [a.jsx("input", {
                                    type: "email",
                                    value: n.email,
                                    readOnly: !0,
                                    className: "flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm"
                                }), a.jsx("button", {
                                    onClick: () => x(n.email),
                                    className: "ml-2 text-gray-400 hover:text-gray-600",
                                    children: a.jsx(Fm, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Phone"
                            }), a.jsxs("div", {
                                className: "flex items-center mt-1",
                                children: [a.jsx("input", {
                                    type: "tel",
                                    value: n.phone,
                                    readOnly: !h,
                                    onChange: P => M("phone", P.target.value),
                                    className: "flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm"
                                }), a.jsx("button", {
                                    onClick: () => x(n.phone),
                                    className: "ml-2 text-gray-400 hover:text-gray-600",
                                    children: a.jsx(Fm, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Employee ID"
                            }), a.jsx("input", {
                                type: "text",
                                value: n.employeeId,
                                readOnly: !0,
                                className: "w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Department"
                            }), a.jsx("input", {
                                type: "text",
                                value: n.department,
                                readOnly: !0,
                                className: "w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "mt-6 pt-6 border-t border-gray-200 flex justify-between",
                        children: [a.jsxs("button", {
                            onClick: v,
                            className: "flex items-center text-red-500 hover:text-red-600",
                            children: [a.jsx(gx, {
                                className: "h-4 w-4 mr-2"
                            }), "Sign Out"]
                        }), a.jsx("button", {
                            onClick: h ? k : j,
                            className: "flex items-center text-blue-500 hover:text-blue-600",
                            children: h ? a.jsxs(a.Fragment, {
                                children: [a.jsx(bx, {
                                    className: "h-4 w-4 mr-2"
                                }), "Save"]
                            }) : a.jsxs(a.Fragment, {
                                children: [a.jsx(jx, {
                                    className: "h-4 w-4 mr-2"
                                }), "Edit"]
                            })
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm p-6",
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-4",
                        children: "Employment Details"
                    }), a.jsxs("div", {
                        className: "space-y-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Position"
                            }), a.jsx("input", {
                                type: "text",
                                value: n.position,
                                readOnly: !0,
                                className: "w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Hire Date"
                            }), a.jsx("input", {
                                type: "text",
                                value: n.hireDate,
                                readOnly: !0,
                                className: "w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Work Duration"
                            }), a.jsx("input", {
                                type: "text",
                                value: n.workDuration,
                                readOnly: !0,
                                className: "w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Salary"
                            }), a.jsxs("div", {
                                className: "text-sm text-gray-800 mt-1",
                                children: [n.salary.currency, " ", n.salary.amount.toLocaleString()]
                            }), a.jsxs("div", {
                                className: "text-xs text-gray-500",
                                children: ["Last Review: ", n.salary.lastReview, a.jsx("br", {}), "Next Review: ", n.salary.nextReview]
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "text-sm text-gray-500",
                                children: "Benefits"
                            }), a.jsx("div", {
                                className: "grid grid-cols-2 gap-2 mt-1",
                                children: Object.entries(n.benefits).map( ([P,A]) => a.jsxs("div", {
                                    className: `text-sm ${A ? "text-green-600" : "text-red-500"}`,
                                    children: ["• ", P.replace(/([A-Z])/g, " $1").trim()]
                                }, P))
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm p-6",
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-4",
                        children: "Skills & Certifications"
                    }), a.jsxs("div", {
                        className: "mb-6",
                        children: [a.jsx("label", {
                            className: "text-sm text-gray-500",
                            children: "Skills"
                        }), a.jsx("div", {
                            className: "flex flex-wrap gap-2 mt-2",
                            children: n.skills.map( (P, A) => a.jsx("span", {
                                className: "bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm",
                                children: P
                            }, A))
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("label", {
                            className: "text-sm text-gray-500",
                            children: "Certifications"
                        }), a.jsx("div", {
                            className: "space-y-3 mt-2",
                            children: n.certifications.map( (P, A) => a.jsxs("div", {
                                className: "bg-gray-50 p-3 rounded",
                                children: [a.jsx("div", {
                                    className: "font-medium text-gray-800",
                                    children: P.name
                                }), a.jsxs("div", {
                                    className: "text-sm text-gray-500",
                                    children: ["ID: ", P.credentialId, a.jsx("br", {}), "Issued: ", P.issueDate, a.jsx("br", {}), P.expiryDate && `Expires: ${P.expiryDate}`]
                                })]
                            }, A))
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6",
                children: [a.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm p-6",
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-4",
                        children: "Performance"
                    }), a.jsxs("div", {
                        className: "mb-6",
                        children: [a.jsx("label", {
                            className: "text-sm text-gray-500",
                            children: "Last Review"
                        }), a.jsxs("div", {
                            className: "bg-gray-50 p-4 rounded mt-2",
                            children: [a.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [a.jsx("div", {
                                    className: "text-2xl font-semibold text-blue-600",
                                    children: n.performance.lastReview.rating
                                }), a.jsx("div", {
                                    className: "text-sm text-gray-500 ml-2",
                                    children: "/ 5.0"
                                })]
                            }), a.jsx("div", {
                                className: "text-sm text-gray-700",
                                children: n.performance.lastReview.feedback
                            }), a.jsxs("div", {
                                className: "text-xs text-gray-500 mt-2",
                                children: ["Date: ", n.performance.lastReview.date]
                            })]
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("label", {
                            className: "text-sm text-gray-500",
                            children: "Goals"
                        }), a.jsx("div", {
                            className: "space-y-2 mt-2",
                            children: n.performance.goals.map( (P, A) => a.jsxs("div", {
                                className: "flex items-start",
                                children: [a.jsx(hf, {
                                    className: "h-4 w-4 text-blue-600 mt-1 mr-2"
                                }), a.jsx("div", {
                                    className: "text-sm text-gray-700",
                                    children: P
                                })]
                            }, A))
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm p-6",
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-4",
                        children: "Projects"
                    }), a.jsx("div", {
                        className: "space-y-4",
                        children: n.projects.map( (P, A) => a.jsxs("div", {
                            className: "bg-gray-50 p-4 rounded",
                            children: [a.jsx("div", {
                                className: "font-medium text-gray-800",
                                children: P.name
                            }), a.jsx("div", {
                                className: "text-sm text-gray-600 mt-1",
                                children: P.role
                            }), a.jsxs("div", {
                                className: "flex items-center justify-between mt-2",
                                children: [a.jsxs("div", {
                                    className: "text-xs text-gray-500",
                                    children: [P.startDate, " - ", P.endDate || "Present"]
                                }), a.jsx("div", {
                                    className: `text-xs px-2 py-1 rounded ${P.status === "Completed" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`,
                                    children: P.status
                                })]
                            })]
                        }, A))
                    })]
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-sm p-6 mt-6",
                children: [a.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-4",
                    children: "Attendance & Leave"
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [a.jsxs("div", {
                        className: "bg-gray-50 p-4 rounded",
                        children: [a.jsx("div", {
                            className: "text-sm text-gray-500",
                            children: "Total Leaves"
                        }), a.jsx("div", {
                            className: "text-2xl font-semibold text-gray-800 mt-1",
                            children: n.attendance.totalLeaves
                        })]
                    }), a.jsxs("div", {
                        className: "bg-gray-50 p-4 rounded",
                        children: [a.jsx("div", {
                            className: "text-sm text-gray-500",
                            children: "Leaves Used"
                        }), a.jsx("div", {
                            className: "text-2xl font-semibold text-gray-800 mt-1",
                            children: n.attendance.leavesUsed
                        })]
                    }), a.jsxs("div", {
                        className: "bg-gray-50 p-4 rounded",
                        children: [a.jsx("div", {
                            className: "text-sm text-gray-500",
                            children: "Leaves Remaining"
                        }), a.jsx("div", {
                            className: "text-2xl font-semibold text-gray-800 mt-1",
                            children: n.attendance.leavesRemaining
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "mt-6",
                    children: [a.jsx("h4", {
                        className: "font-medium text-gray-800 mb-3",
                        children: "Leave History"
                    }), a.jsx("div", {
                        className: "space-y-3",
                        children: n.attendance.leaveHistory.map( (P, A) => a.jsxs("div", {
                            className: "bg-gray-50 p-3 rounded flex items-center justify-between",
                            children: [a.jsxs("div", {
                                children: [a.jsx("div", {
                                    className: "font-medium text-gray-800",
                                    children: P.type
                                }), a.jsxs("div", {
                                    className: "text-sm text-gray-500",
                                    children: [P.startDate, " - ", P.endDate]
                                })]
                            }), a.jsx("div", {
                                className: `text-xs px-2 py-1 rounded ${P.status === "Approved" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`,
                                children: P.status
                            })]
                        }, A))
                    })]
                })]
            })]
        })]
    })
}
  , pj = () => {
    const n = [{
        icon: a.jsx(Yi, {
            className: "h-5 w-5"
        }),
        url: "#",
        name: "GitHub"
    }, {
        icon: a.jsx(Dl, {
            className: "h-5 w-5"
        }),
        url: "#",
        name: "Twitter"
    }, {
        icon: a.jsx(Xi, {
            className: "h-5 w-5"
        }),
        url: "#",
        name: "LinkedIn"
    }, {
        icon: a.jsx(Tx, {
            className: "h-5 w-5"
        }),
        url: "#",
        name: "YouTube"
    }, {
        icon: a.jsx(df, {
            className: "h-5 w-5"
        }),
        url: "#",
        name: "Email"
    }]
      , r = [{
        name: "Services",
        url: "#services"
    }, {
        name: "About",
        url: "#about"
    }, {
        name: "Technologies",
        url: "#tech"
    }, {
        name: "Contact",
        url: "#contact"
    }, {
        name: "Careers",
        url: "#"
    }, {
        name: "Blog",
        url: "#"
    }]
      , i = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .1
            }
        }
    }
      , l = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    return a.jsxs("footer", {
        className: "relative bg-neo-dark overflow-hidden pt-16 pb-8",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"
        }), a.jsx("div", {
            className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-green-100 to-transparent"
        }), a.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16",
                children: [a.jsxs("div", {
                    className: "col-span-1 lg:col-span-1",
                    children: [a.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [a.jsx("img", {
                            src: "https://i.ibb.co/ymkKpn1w/cropped-image.png",
                            alt: "ZERO MATRIX Logo",
                            className: "h-8 w-auto"
                        }), a.jsx("span", {
                            className: "ml-2 text-2xl font-vt323 glow-text text-neo-green-100",
                            children: "ZERO MATRIX"
                        })]
                    }), a.jsx("p", {
                        className: "font-code text-gray-400 text-sm mb-6",
                        children: "Pioneering the future at the intersection of artificial intelligence, cybersecurity, and quantum computing."
                    }), a.jsx(ee.div, {
                        className: "flex space-x-4",
                        variants: i,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: !0
                        },
                        children: n.map( (c, m) => a.jsx(ee.a, {
                            href: c.url,
                            className: "p-2 text-gray-400 hover:text-neo-green-100 transition-colors duration-300",
                            "aria-label": c.name,
                            variants: l,
                            whileHover: {
                                scale: 1.1,
                                transition: {
                                    duration: .2
                                }
                            },
                            children: c.icon
                        }, m))
                    })]
                }), a.jsxs("div", {
                    className: "col-span-1 lg:col-span-1",
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-lg text-white mb-6",
                        children: "Quick Links"
                    }), a.jsx("ul", {
                        className: "space-y-3",
                        children: r.map( (c, m) => a.jsx("li", {
                            children: a.jsxs("a", {
                                href: c.url,
                                className: "font-code text-sm text-gray-400 hover:text-neo-green-100 transition-colors duration-300 flex items-center",
                                children: [a.jsx("span", {
                                    className: "text-neo-green-100 mr-2",
                                    children: ">"
                                }), " ", c.name]
                            })
                        }, m))
                    })]
                }), a.jsxs("div", {
                    className: "col-span-1 lg:col-span-1",
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-lg text-white mb-6",
                        children: "Our Solutions"
                    }), a.jsxs("ul", {
                        className: "space-y-3",
                        children: [a.jsx("li", {
                            children: a.jsxs("a", {
                                href: "#",
                                className: "font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center",
                                children: [a.jsx("span", {
                                    className: "text-neo-blue-100 mr-2",
                                    children: ">"
                                }), " AI & Machine Learning"]
                            })
                        }), a.jsx("li", {
                            children: a.jsxs("a", {
                                href: "#",
                                className: "font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center",
                                children: [a.jsx("span", {
                                    className: "text-neo-blue-100 mr-2",
                                    children: ">"
                                }), " Cybersecurity Suite"]
                            })
                        }), a.jsx("li", {
                            children: a.jsxs("a", {
                                href: "#",
                                className: "font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center",
                                children: [a.jsx("span", {
                                    className: "text-neo-blue-100 mr-2",
                                    children: ">"
                                }), " Quantum Computing"]
                            })
                        }), a.jsx("li", {
                            children: a.jsxs("a", {
                                href: "#",
                                className: "font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center",
                                children: [a.jsx("span", {
                                    className: "text-neo-blue-100 mr-2",
                                    children: ">"
                                }), " Blockchain Technology"]
                            })
                        }), a.jsx("li", {
                            children: a.jsxs("a", {
                                href: "#",
                                className: "font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center",
                                children: [a.jsx("span", {
                                    className: "text-neo-blue-100 mr-2",
                                    children: ">"
                                }), " IoT Security"]
                            })
                        }), a.jsx("li", {
                            children: a.jsxs("a", {
                                href: "#",
                                className: "font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center",
                                children: [a.jsx("span", {
                                    className: "text-neo-blue-100 mr-2",
                                    children: ">"
                                }), " Custom Solutions"]
                            })
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "col-span-1 lg:col-span-1",
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-lg text-white mb-6",
                        children: "Subscribe"
                    }), a.jsx("p", {
                        className: "font-code text-sm text-gray-400 mb-4",
                        children: "Stay updated with our latest innovations and research."
                    }), a.jsxs("form", {
                        className: "space-y-3",
                        children: [a.jsx("div", {
                            className: "relative",
                            children: a.jsx("input", {
                                type: "email",
                                placeholder: "Enter your email",
                                className: "w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-purple hover:bg-neo-purple-100 hover:bg-opacity-5 focus:bg-neo-purple-100 focus:bg-opacity-5 transition-colors duration-300"
                            })
                        }), a.jsx("button", {
                            type: "submit",
                            className: "w-full neon-border-purple px-4 py-2 font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300",
                            children: ">_SUBSCRIBE"
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between",
                children: [a.jsx("div", {
                    className: "font-code text-xs text-gray-500 mb-4 md:mb-0",
                    children: a.jsx(rt, {
                        text: "© 2025 ZERO MATRIX. All rights reserved.",
                        intensity: "low"
                    })
                }), a.jsxs("div", {
                    className: "flex items-center space-x-6",
                    children: [a.jsx("a", {
                        href: "#",
                        className: "font-code text-xs text-gray-500 hover:text-neo-green-100 transition-colors duration-300",
                        children: "Privacy Policy"
                    }), a.jsx("a", {
                        href: "#",
                        className: "font-code text-xs text-gray-500 hover:text-neo-green-100 transition-colors duration-300",
                        children: "Terms of Service"
                    }), a.jsx("a", {
                        href: "#",
                        className: "font-code text-xs text-gray-500 hover:text-neo-green-100 transition-colors duration-300",
                        children: "Cookies"
                    })]
                })]
            })]
        })]
    })
}
  , gj = () => {
    const [n,r] = C.useState(!0)
      , [i,l] = C.useState([])
      , [c,m] = C.useState("")
      , [h,f] = C.useState("192.168.1.1")
      , [p,g] = C.useState([])
      , [v,x] = C.useState(-1)
      , j = C.useRef(null)
      , k = C.useRef(null)
      , M = Pn();
    C.useEffect( () => {
        const I = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        f(I)
    }
    , []),
    C.useEffect( () => {
        j.current && (j.current.scrollTop = j.current.scrollHeight)
    }
    , [i]);
    const P = I => {
        const z = new Date().toLocaleTimeString();
        let R = "";
        const L = {
            home: "/",
            services: "/services",
            projects: "/projects",
            about: "/about",
            founder: "/about#founder",
            tech: "/services#tech",
            events: "/events",
            gallery: "/gallery",
            team: "/team",
            contact: "/contact",
            internships: "/internships",
            jobs: "/jobs",
            ambassador: "/ambassador",
            testimonials: "/testimonials"
        }
          , W = I.toLowerCase().trim();
        if (g(se => [...se, I]),
        x(-1),
        W === "help")
            R = `Available commands:
- cd [section] : Navigate to a section
- ls : List all sections
- clear : Clear terminal
- pwd : Show current location
- date : Show current date and time
- whoami : Show current user
- ip : Show IP address
- echo [text] : Print text
- history : Show command history
- exit : Minimize terminal
- help : Show this help message

Available sections:
${Object.keys(L).join(", ")}`;
        else if (W === "ls")
            R = Object.keys(L).join("  ");
        else if (W === "clear") {
            l([]);
            return
        } else if (W === "pwd")
            R = "Current location: /home/mackystech/website";
        else if (W === "date")
            R = new Date().toString();
        else if (W === "whoami")
            R = "guest@mackystech";
        else if (W === "ip")
            R = `Current IP: ${h}`;
        else if (W === "history")
            R = p.map( (se, ae) => `${ae + 1}  ${se}`).join(`
`);
        else if (W === "exit") {
            r(!1);
            return
        } else if (W.startsWith("echo "))
            R = I.slice(5);
        else if (W.startsWith("cd ")) {
            const se = W.split(" ")[1];
            L[se] ? (M(L[se]),
            R = `Navigating to ${se}...`) : R = 'Invalid section. Use "ls" to see available sections.'
        } else
            R = 'Command not found. Type "help" for available commands.';
        l([...i, {
            input: I,
            output: R,
            timestamp: z
        }]),
        m("")
    }
      , A = I => {
        if (I.key === "Enter" && c.trim())
            P(c.trim());
        else if (I.key === "ArrowUp") {
            if (I.preventDefault(),
            v < p.length - 1) {
                const z = v + 1;
                x(z),
                m(p[p.length - 1 - z])
            }
        } else if (I.key === "ArrowDown")
            if (I.preventDefault(),
            v > 0) {
                const z = v - 1;
                x(z),
                m(p[p.length - 1 - z])
            } else
                v === 0 && (x(-1),
                m(""))
    }
    ;
    return typeof window < "u" && window.innerWidth < 768 ? null : n ? a.jsx("div", {
        className: "fixed bottom-4 right-4 w-96 z-40 hidden md:block",
        children: a.jsxs("div", {
            className: "bg-neo-dark rounded-t-sm neon-border-green",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between px-4 py-2 border-b border-gray-800",
                children: [a.jsxs("div", {
                    className: "flex items-center",
                    children: [a.jsx(Kn, {
                        className: "h-4 w-4 text-neo-green-100 mr-2"
                    }), a.jsx("span", {
                        className: "text-sm font-code text-gray-400",
                        children: "Terminal"
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [a.jsxs("div", {
                        className: "text-xs font-code text-gray-500",
                        children: ["IP: ", h]
                    }), a.jsx("button", {
                        onClick: () => r(!1),
                        className: "text-gray-400 hover:text-neo-green-100 transition-colors",
                        children: a.jsx(la, {
                            className: "h-4 w-4"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                ref: j,
                className: "h-64 overflow-y-auto p-4 font-code text-sm",
                onClick: () => {
                    var I;
                    return (I = k.current) == null ? void 0 : I.focus()
                }
                ,
                children: [i.map( (I, z) => a.jsxs("div", {
                    className: "mb-2",
                    children: [a.jsxs("div", {
                        className: "flex items-center text-gray-400",
                        children: [a.jsx("span", {
                            className: "text-neo-green-100",
                            children: "guest@mackystech"
                        }), a.jsx("span", {
                            className: "text-gray-500",
                            children: ":"
                        }), a.jsx("span", {
                            className: "text-neo-blue-100",
                            children: "~"
                        }), a.jsx("span", {
                            className: "text-gray-500",
                            children: "$ "
                        }), a.jsx("span", {
                            className: "ml-1",
                            children: I.input
                        }), a.jsx("span", {
                            className: "ml-auto text-xs text-gray-600",
                            children: I.timestamp
                        })]
                    }), I.output && a.jsx("div", {
                        className: "mt-1 text-gray-300 whitespace-pre-line",
                        children: I.output
                    })]
                }, z)), a.jsxs("div", {
                    className: "flex items-center text-gray-400",
                    children: [a.jsx("span", {
                        className: "text-neo-green-100",
                        children: "guest@mackystech"
                    }), a.jsx("span", {
                        className: "text-gray-500",
                        children: ":"
                    }), a.jsx("span", {
                        className: "text-neo-blue-100",
                        children: "~"
                    }), a.jsx("span", {
                        className: "text-gray-500",
                        children: "$ "
                    }), a.jsx("input", {
                        ref: k,
                        type: "text",
                        value: c,
                        onChange: I => m(I.target.value),
                        onKeyDown: A,
                        className: "flex-1 ml-1 bg-transparent border-none outline-none text-gray-300",
                        autoFocus: !0
                    })]
                })]
            })]
        })
    }) : a.jsx("button", {
        onClick: () => r(!0),
        className: "fixed bottom-4 right-4 bg-neo-dark p-2 rounded-sm neon-border-green z-40 hidden md:block",
        children: a.jsx(Kn, {
            className: "h-6 w-6 text-neo-green-100"
        })
    })
}
  , yj = () => {
    const {pathname: n} = Er();
    return C.useEffect( () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        "scrollRestoration"in history && (history.scrollRestoration = "manual")
    }
    , [n]),
    null
}
  , xj = () => {
    const n = Pn()
      , [r,i] = C.useState({
        fullName: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        altPhone: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        college: "",
        degree: "",
        branch: "",
        year: "",
        gradYear: "",
        tenth: "",
        twelfth: "",
        cgpa: "",
        domain: "",
        duration: "",
        startDate: "",
        mode: "",
        locationPref: "",
        languages: [],
        tools: "",
        certifications: "",
        resume: "",
        portfolio: "",
        linkedin: "",
        why: "",
        time: "",
        prevIntern: "",
        referral: "",
        consent: !1,
        signature: "",
        date: ""
    })
      , [l,c] = C.useState({})
      , m = f => {
        const {name: p, value: g, type: v, checked: x, files: j} = f.target;
        i(v === "checkbox" && p === "languages" ? k => {
            const M = Array.isArray(k.languages) ? k.languages : [];
            return x ? {
                ...k,
                languages: [...M, g]
            } : {
                ...k,
                languages: M.filter(P => P !== g)
            }
        }
        : v === "checkbox" ? {
            ...r,
            [p]: x
        } : v === "file" ? {
            ...r,
            [p]: j ? j[0] : null
        } : {
            ...r,
            [p]: g
        })
    }
      , h = async f => {
        f.preventDefault();
        const p = {};
        if (r.fullName || (p.fullName = "Full Name is required"),
        r.email || (p.email = "Email is required"),
        r.phone || (p.phone = "Phone Number is required"),
        r.consent || (p.consent = "You must agree to the declaration"),
        c(p),
        Object.keys(p).length === 0) {
            const g = new FormData;
            g.append("access_key", "da970d1a-13f3-4c9b-a6c2-e23fd0470282"),
            Object.entries(r).forEach( ([v,x]) => {
                v === "resume" ? g.append("resume", x) : Array.isArray(x) ? g.append(v, x.join(", ")) : typeof x == "boolean" ? g.append(v, x ? "Yes" : "No") : g.append(v, x)
            }
            );
            try {
                (await (await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: g
                })).json()).success ? (alert("Application submitted successfully!"),
                n("/InternshipsPage")) : alert("Submission failed. Please try again.")
            } catch {
                alert("An error occurred. Please try again.")
            }
        }
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-neo-black pt-20 pb-10",
        children: [a.jsxs("div", {
            className: "max-w-3xl mx-auto bg-neo-dark p-8 rounded-md neon-border-green shadow-lg",
            children: [a.jsx("h2", {
                className: "text-3xl font-vt323 text-neo-green-100 mb-8 text-center",
                children: "Internship Application Form"
            }), a.jsxs("form", {
                onSubmit: h,
                className: "space-y-8",
                encType: "multipart/form-data",
                children: [a.jsx("input", {
                    type: "hidden",
                    name: "access_key",
                    value: "da970d1a-13f3-4c9b-a6c2-e23fd0470282"
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-xl text-white mb-4",
                        children: "Personal Details"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Full Name*"
                            }), a.jsx("input", {
                                name: "fullName",
                                value: r.fullName,
                                onChange: m,
                                className: "form-input"
                            }), l.fullName && a.jsx("span", {
                                className: "text-red-500 text-xs",
                                children: l.fullName
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Date of Birth"
                            }), a.jsx("input", {
                                type: "date",
                                name: "dob",
                                value: r.dob,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Gender"
                            }), a.jsxs("select", {
                                name: "gender",
                                value: r.gender,
                                onChange: m,
                                className: "form-input",
                                children: [a.jsx("option", {
                                    value: "",
                                    children: "Select"
                                }), a.jsx("option", {
                                    value: "Male",
                                    children: "Male"
                                }), a.jsx("option", {
                                    value: "Female",
                                    children: "Female"
                                }), a.jsx("option", {
                                    value: "Other",
                                    children: "Other"
                                })]
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Email ID*"
                            }), a.jsx("input", {
                                type: "email",
                                name: "email",
                                value: r.email,
                                onChange: m,
                                className: "form-input"
                            }), l.email && a.jsx("span", {
                                className: "text-red-500 text-xs",
                                children: l.email
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Phone Number*"
                            }), a.jsx("input", {
                                name: "phone",
                                value: r.phone,
                                onChange: m,
                                className: "form-input"
                            }), l.phone && a.jsx("span", {
                                className: "text-red-500 text-xs",
                                children: l.phone
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Alternate Contact Number"
                            }), a.jsx("input", {
                                name: "altPhone",
                                value: r.altPhone,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            className: "md:col-span-2",
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Full Address"
                            }), a.jsx("input", {
                                name: "address",
                                value: r.address,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "City"
                            }), a.jsx("input", {
                                name: "city",
                                value: r.city,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "State"
                            }), a.jsx("input", {
                                name: "state",
                                value: r.state,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "PIN Code"
                            }), a.jsx("input", {
                                name: "pin",
                                value: r.pin,
                                onChange: m,
                                className: "form-input"
                            })]
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-xl text-white mb-4",
                        children: "Educational Background"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Current College/University"
                            }), a.jsx("input", {
                                name: "college",
                                value: r.college,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Degree Pursuing"
                            }), a.jsx("input", {
                                name: "degree",
                                value: r.degree,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Branch/Stream"
                            }), a.jsx("input", {
                                name: "branch",
                                value: r.branch,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Current Year/Semester"
                            }), a.jsx("input", {
                                name: "year",
                                value: r.year,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Expected Graduation Year"
                            }), a.jsx("input", {
                                name: "gradYear",
                                value: r.gradYear,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "10th Percentage / CGPA"
                            }), a.jsx("input", {
                                name: "tenth",
                                value: r.tenth,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "12th Percentage / CGPA"
                            }), a.jsx("input", {
                                name: "twelfth",
                                value: r.twelfth,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Current CGPA"
                            }), a.jsx("input", {
                                name: "cgpa",
                                value: r.cgpa,
                                onChange: m,
                                className: "form-input"
                            })]
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-xl text-white mb-4",
                        children: "Internship Preferences"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Preferred Internship Domain"
                            }), a.jsx("input", {
                                name: "domain",
                                value: r.domain,
                                onChange: m,
                                className: "form-input",
                                placeholder: "e.g., Web Dev, Cybersecurity, AI"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Internship Duration"
                            }), a.jsx("input", {
                                name: "duration",
                                value: r.duration,
                                onChange: m,
                                className: "form-input",
                                placeholder: "in weeks/months"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Availability Start Date"
                            }), a.jsx("input", {
                                type: "date",
                                name: "startDate",
                                value: r.startDate,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Mode of Internship"
                            }), a.jsxs("select", {
                                name: "mode",
                                value: r.mode,
                                onChange: m,
                                className: "form-input",
                                children: [a.jsx("option", {
                                    value: "",
                                    children: "Select"
                                }), a.jsx("option", {
                                    value: "Online",
                                    children: "Online"
                                }), a.jsx("option", {
                                    value: "Offline",
                                    children: "Offline"
                                }), a.jsx("option", {
                                    value: "Hybrid",
                                    children: "Hybrid"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "md:col-span-2",
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Location Preference (if any)"
                            }), a.jsx("input", {
                                name: "locationPref",
                                value: r.locationPref,
                                onChange: m,
                                className: "form-input"
                            })]
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-xl text-white mb-4",
                        children: "Skill Set"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Programming Languages Known"
                            }), a.jsx("div", {
                                className: "flex flex-wrap gap-3",
                                children: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "Go", "Ruby", "Other"].map(f => a.jsxs("label", {
                                    className: "flex items-center gap-1",
                                    children: [a.jsx("input", {
                                        type: "checkbox",
                                        name: "languages",
                                        value: f,
                                        checked: r.languages.includes(f),
                                        onChange: m,
                                        className: "form-checkbox accent-neo-green-100"
                                    }), a.jsx("span", {
                                        className: "text-gray-300 font-code text-sm",
                                        children: f
                                    })]
                                }, f))
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Tools/Technologies Familiar With"
                            }), a.jsx("input", {
                                name: "tools",
                                value: r.tools,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Certifications (if any)"
                            }), a.jsx("input", {
                                name: "certifications",
                                value: r.certifications,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Resume (Upload Resume on Google Drive and share the link here)"
                            }), a.jsx("input", {
                                type: "url",
                                name: "resume",
                                value: r.resume,
                                onChange: m,
                                className: "form-input",
                                placeholder: "https://drive.google.com/..."
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Portfolio/GitHub Link (optional)"
                            }), a.jsx("input", {
                                name: "portfolio",
                                value: r.portfolio,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "LinkedIn Profile URL (optional)"
                            }), a.jsx("input", {
                                name: "linkedin",
                                value: r.linkedin,
                                onChange: m,
                                className: "form-input"
                            })]
                        })]
                    })]
                }), a.jsxs("section", {
                    children: [a.jsx("h3", {
                        className: "font-vt323 text-xl text-white mb-4",
                        children: "Other Info"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [a.jsxs("div", {
                            className: "md:col-span-2",
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Why do you want to join this internship?"
                            }), a.jsx("textarea", {
                                name: "why",
                                value: r.why,
                                onChange: m,
                                className: "form-input h-24"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Are you available full-time or part-time?"
                            }), a.jsxs("select", {
                                name: "time",
                                value: r.time,
                                onChange: m,
                                className: "form-input",
                                children: [a.jsx("option", {
                                    value: "",
                                    children: "Select"
                                }), a.jsx("option", {
                                    value: "Full-time",
                                    children: "Full-time"
                                }), a.jsx("option", {
                                    value: "Part-time",
                                    children: "Part-time"
                                })]
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Any previous internship experience?"
                            }), a.jsx("input", {
                                name: "prevIntern",
                                value: r.prevIntern,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Referral (if any)"
                            }), a.jsx("input", {
                                name: "referral",
                                value: r.referral,
                                onChange: m,
                                className: "form-input"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "mt-4 flex items-center",
                        children: [a.jsx("input", {
                            type: "checkbox",
                            name: "consent",
                            checked: r.consent,
                            onChange: m,
                            className: "mr-2"
                        }), a.jsx("label", {
                            className: "form-label",
                            children: "I hereby declare that the information provided is true and I consent to the processing of my data.*"
                        }), l.consent && a.jsx("span", {
                            className: "text-red-500 text-xs ml-2",
                            children: l.consent
                        })]
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Signature / Typed Name"
                            }), a.jsx("input", {
                                name: "signature",
                                value: r.signature,
                                onChange: m,
                                className: "form-input"
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx("label", {
                                className: "form-label",
                                children: "Date of Submission"
                            }), a.jsx("input", {
                                type: "date",
                                name: "date",
                                value: r.date,
                                onChange: m,
                                className: "form-input"
                            })]
                        })]
                    })]
                }), a.jsx("button", {
                    type: "submit",
                    className: "w-full neon-border-green px-4 py-2 font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 mt-8",
                    children: "Submit Application"
                })]
            })]
        }), a.jsx("style", {
            children: `
        .form-label {
          display: block;
          color: #aaffcc;
          font-family: 'Fira Mono', monospace;
          margin-bottom: 0.25rem;
        }
        .form-input {
          width: 100%;
          padding: 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid #22d3ee;
          background: #181c1f;
          color: #fff;
          font-family: 'Fira Mono', monospace;
        }
        .form-input:focus {
          outline: none;
          border-color: #22d3ee;
          box-shadow: 0 0 0 2px #22d3ee33;
        }
      `
        })]
    })
}
;
function vj() {
    return a.jsx(tx, {
        children: a.jsxs(Yy, {
            children: [a.jsx(yj, {}), a.jsxs("div", {
                className: "min-h-screen theme-bg-primary theme-text-primary",
                children: [a.jsx(Qw, {}), a.jsxs(Wy, {
                    children: [a.jsx(Je, {
                        path: "/",
                        element: a.jsx(tj, {})
                    }), a.jsx(Je, {
                        path: "/about",
                        element: a.jsx(rj, {})
                    }), a.jsx(Je, {
                        path: "/services",
                        element: a.jsx(lj, {})
                    }), a.jsx(Je, {
                        path: "/products",
                        element: a.jsx(uj, {})
                    }), a.jsx(Je, {
                        path: "/projects",
                        element: a.jsx(nj, {})
                    }), a.jsx(Je, {
                        path: "/events",
                        element: a.jsx(sj, {})
                    }), a.jsx(Je, {
                        path: "/team",
                        element: a.jsx(ij, {})
                    }), a.jsx(Je, {
                        path: "/gallery",
                        element: a.jsx(aj, {})
                    }), a.jsx(Je, {
                        path: "/testimonials",
                        element: a.jsx(oj, {})
                    }), a.jsx(Je, {
                        path: "/internships",
                        element: a.jsx(dj, {})
                    }), a.jsx(Je, {
                        path: "/jobs",
                        element: a.jsx(mj, {})
                    }), a.jsx(Je, {
                        path: "/ambassador",
                        element: a.jsx(hj, {})
                    }), a.jsx(Je, {
                        path: "/profile",
                        element: a.jsx(fj, {})
                    }), a.jsx(Je, {
                        path: "/contact",
                        element: a.jsx(Tc, {})
                    }), a.jsx(Je, {
                        path: "/InternshipFormPage",
                        element: a.jsx(xj, {})
                    })]
                }), a.jsx(pj, {}), a.jsx(gj, {})]
            })]
        })
    })
}
X0.createRoot(document.getElementById("root")).render(a.jsx(C.StrictMode, {
    children: a.jsx(vj, {})
}));
