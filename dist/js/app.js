(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/topbar/topbar.min.js
  var require_topbar_min = __commonJS({
    "node_modules/topbar/topbar.min.js"(exports, module) {
      (function(window2, document2) {
        "use strict";
        function repaint() {
          canvas.width = window2.innerWidth, canvas.height = 5 * options.barThickness;
          var ctx = canvas.getContext("2d");
          ctx.shadowBlur = options.shadowBlur, ctx.shadowColor = options.shadowColor;
          var stop, lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          for (stop in options.barColors)
            lineGradient.addColorStop(stop, options.barColors[stop]);
          ctx.lineWidth = options.barThickness, ctx.beginPath(), ctx.moveTo(0, options.barThickness / 2), ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness / 2), ctx.strokeStyle = lineGradient, ctx.stroke();
        }
        var canvas, currentProgress, showing, progressTimerId = null, fadeTimerId = null, delayTimerId = null, options = { autoRun: true, barThickness: 3, barColors: { 0: "rgba(26,  188, 156, .9)", ".25": "rgba(52,  152, 219, .9)", ".50": "rgba(241, 196, 15,  .9)", ".75": "rgba(230, 126, 34,  .9)", "1.0": "rgba(211, 84,  0,   .9)" }, shadowBlur: 10, shadowColor: "rgba(0,   0,   0,   .6)", className: null }, topbar2 = { config: function(opts) {
          for (var key in opts)
            options.hasOwnProperty(key) && (options[key] = opts[key]);
        }, show: function(handler) {
          var type, elem;
          showing || (handler ? delayTimerId = delayTimerId || setTimeout(() => topbar2.show(), handler) : (showing = true, null !== fadeTimerId && window2.cancelAnimationFrame(fadeTimerId), canvas || ((elem = (canvas = document2.createElement("canvas")).style).position = "fixed", elem.top = elem.left = elem.right = elem.margin = elem.padding = 0, elem.zIndex = 100001, elem.display = "none", options.className && canvas.classList.add(options.className), document2.body.appendChild(canvas), type = "resize", handler = repaint, (elem = window2).addEventListener ? elem.addEventListener(type, handler, false) : elem.attachEvent ? elem.attachEvent("on" + type, handler) : elem["on" + type] = handler), canvas.style.opacity = 1, canvas.style.display = "block", topbar2.progress(0), options.autoRun && function loop() {
            progressTimerId = window2.requestAnimationFrame(loop), topbar2.progress("+" + 0.05 * Math.pow(1 - Math.sqrt(currentProgress), 2));
          }()));
        }, progress: function(to) {
          return void 0 === to || ("string" == typeof to && (to = (0 <= to.indexOf("+") || 0 <= to.indexOf("-") ? currentProgress : 0) + parseFloat(to)), currentProgress = 1 < to ? 1 : to, repaint()), currentProgress;
        }, hide: function() {
          clearTimeout(delayTimerId), delayTimerId = null, showing && (showing = false, null != progressTimerId && (window2.cancelAnimationFrame(progressTimerId), progressTimerId = null), function loop() {
            return 1 <= topbar2.progress("+.1") && (canvas.style.opacity -= 0.05, canvas.style.opacity <= 0.05) ? (canvas.style.display = "none", void (fadeTimerId = null)) : void (fadeTimerId = window2.requestAnimationFrame(loop));
          }());
        } };
        "object" == typeof module && "object" == typeof module.exports ? module.exports = topbar2 : "function" == typeof define && define.amd ? define(function() {
          return topbar2;
        }) : this.topbar = topbar2;
      }).call(exports, window, document);
    }
  });

  // js/app.js
  var import_topbar = __toESM(require_topbar_min());

  // node_modules/uplot/dist/uPlot.esm.js
  var FEAT_TIME = true;
  var pre = "u-";
  var UPLOT = "uplot";
  var ORI_HZ = pre + "hz";
  var ORI_VT = pre + "vt";
  var TITLE = pre + "title";
  var WRAP = pre + "wrap";
  var UNDER = pre + "under";
  var OVER = pre + "over";
  var AXIS = pre + "axis";
  var OFF = pre + "off";
  var SELECT = pre + "select";
  var CURSOR_X = pre + "cursor-x";
  var CURSOR_Y = pre + "cursor-y";
  var CURSOR_PT = pre + "cursor-pt";
  var LEGEND = pre + "legend";
  var LEGEND_LIVE = pre + "live";
  var LEGEND_INLINE = pre + "inline";
  var LEGEND_THEAD = pre + "thead";
  var LEGEND_SERIES = pre + "series";
  var LEGEND_MARKER = pre + "marker";
  var LEGEND_LABEL = pre + "label";
  var LEGEND_VALUE = pre + "value";
  var WIDTH = "width";
  var HEIGHT = "height";
  var TOP = "top";
  var BOTTOM = "bottom";
  var LEFT = "left";
  var RIGHT = "right";
  var hexBlack = "#000";
  var transparent = hexBlack + "0";
  var mousemove = "mousemove";
  var mousedown = "mousedown";
  var mouseup = "mouseup";
  var mouseenter = "mouseenter";
  var mouseleave = "mouseleave";
  var dblclick = "dblclick";
  var resize = "resize";
  var scroll = "scroll";
  var change = "change";
  var dppxchange = "dppxchange";
  var LEGEND_DISP = "--";
  var domEnv = typeof window != "undefined";
  var doc = domEnv ? document : null;
  var win = domEnv ? window : null;
  var nav = domEnv ? navigator : null;
  var pxRatio;
  var query;
  function setPxRatio() {
    let _pxRatio = devicePixelRatio;
    if (pxRatio != _pxRatio) {
      pxRatio = _pxRatio;
      query && off(change, query, setPxRatio);
      query = matchMedia(`(min-resolution: ${pxRatio - 1e-3}dppx) and (max-resolution: ${pxRatio + 1e-3}dppx)`);
      on(change, query, setPxRatio);
      win.dispatchEvent(new CustomEvent(dppxchange));
    }
  }
  function addClass(el, c) {
    if (c != null) {
      let cl = el.classList;
      !cl.contains(c) && cl.add(c);
    }
  }
  function remClass(el, c) {
    let cl = el.classList;
    cl.contains(c) && cl.remove(c);
  }
  function setStylePx(el, name, value) {
    el.style[name] = value + "px";
  }
  function placeTag(tag, cls, targ, refEl) {
    let el = doc.createElement(tag);
    if (cls != null)
      addClass(el, cls);
    if (targ != null)
      targ.insertBefore(el, refEl);
    return el;
  }
  function placeDiv(cls, targ) {
    return placeTag("div", cls, targ);
  }
  var xformCache = /* @__PURE__ */ new WeakMap();
  function elTrans(el, xPos, yPos, xMax, yMax) {
    let xform = "translate(" + xPos + "px," + yPos + "px)";
    let xformOld = xformCache.get(el);
    if (xform != xformOld) {
      el.style.transform = xform;
      xformCache.set(el, xform);
      if (xPos < 0 || yPos < 0 || xPos > xMax || yPos > yMax)
        addClass(el, OFF);
      else
        remClass(el, OFF);
    }
  }
  var colorCache = /* @__PURE__ */ new WeakMap();
  function elColor(el, background, borderColor) {
    let newColor = background + borderColor;
    let oldColor = colorCache.get(el);
    if (newColor != oldColor) {
      colorCache.set(el, newColor);
      el.style.background = background;
      el.style.borderColor = borderColor;
    }
  }
  var sizeCache = /* @__PURE__ */ new WeakMap();
  function elSize(el, newWid, newHgt, centered) {
    let newSize = newWid + "" + newHgt;
    let oldSize = sizeCache.get(el);
    if (newSize != oldSize) {
      sizeCache.set(el, newSize);
      el.style.height = newHgt + "px";
      el.style.width = newWid + "px";
      el.style.marginLeft = centered ? -newWid / 2 + "px" : 0;
      el.style.marginTop = centered ? -newHgt / 2 + "px" : 0;
    }
  }
  var evOpts = { passive: true };
  var evOpts2 = { ...evOpts, capture: true };
  function on(ev, el, cb, capt) {
    el.addEventListener(ev, cb, capt ? evOpts2 : evOpts);
  }
  function off(ev, el, cb, capt) {
    el.removeEventListener(ev, cb, capt ? evOpts2 : evOpts);
  }
  domEnv && setPxRatio();
  function closestIdx(num, arr, lo, hi) {
    let mid;
    lo = lo || 0;
    hi = hi || arr.length - 1;
    let bitwise = hi <= 2147483647;
    while (hi - lo > 1) {
      mid = bitwise ? lo + hi >> 1 : floor((lo + hi) / 2);
      if (arr[mid] < num)
        lo = mid;
      else
        hi = mid;
    }
    if (num - arr[lo] <= arr[hi] - num)
      return lo;
    return hi;
  }
  function nonNullIdx(data, _i0, _i1, dir) {
    for (let i = dir == 1 ? _i0 : _i1; i >= _i0 && i <= _i1; i += dir) {
      if (data[i] != null)
        return i;
    }
    return -1;
  }
  function getMinMax(data, _i0, _i1, sorted) {
    let _min = inf;
    let _max = -inf;
    if (sorted == 1) {
      _min = data[_i0];
      _max = data[_i1];
    } else if (sorted == -1) {
      _min = data[_i1];
      _max = data[_i0];
    } else {
      for (let i = _i0; i <= _i1; i++) {
        if (data[i] != null) {
          _min = min(_min, data[i]);
          _max = max(_max, data[i]);
        }
      }
    }
    return [_min, _max];
  }
  function getMinMaxLog(data, _i0, _i1) {
    let _min = inf;
    let _max = -inf;
    for (let i = _i0; i <= _i1; i++) {
      if (data[i] > 0) {
        _min = min(_min, data[i]);
        _max = max(_max, data[i]);
      }
    }
    return [
      _min == inf ? 1 : _min,
      _max == -inf ? 10 : _max
    ];
  }
  function rangeLog(min2, max2, base, fullMags) {
    let minSign = sign(min2);
    let maxSign = sign(max2);
    let logFn = base == 10 ? log10 : log2;
    if (min2 == max2) {
      if (minSign == -1) {
        min2 *= base;
        max2 /= base;
      } else {
        min2 /= base;
        max2 *= base;
      }
    }
    let growMinAbs = minSign == 1 ? floor : ceil;
    let growMaxAbs = maxSign == 1 ? ceil : floor;
    let minExp = growMinAbs(logFn(abs(min2)));
    let maxExp = growMaxAbs(logFn(abs(max2)));
    let minIncr = pow(base, minExp);
    let maxIncr = pow(base, maxExp);
    if (base == 10) {
      if (minExp < 0)
        minIncr = roundDec(minIncr, -minExp);
      if (maxExp < 0)
        maxIncr = roundDec(maxIncr, -maxExp);
    }
    if (fullMags || base == 2) {
      min2 = minIncr * minSign;
      max2 = maxIncr * maxSign;
    } else {
      min2 = incrRoundDn(min2, minIncr);
      max2 = incrRoundUp(max2, maxIncr);
    }
    return [min2, max2];
  }
  function rangeAsinh(min2, max2, base, fullMags) {
    let minMax = rangeLog(min2, max2, base, fullMags);
    if (min2 == 0)
      minMax[0] = 0;
    if (max2 == 0)
      minMax[1] = 0;
    return minMax;
  }
  var rangePad = 0.1;
  var autoRangePart = {
    mode: 3,
    pad: rangePad
  };
  var _eqRangePart = {
    pad: 0,
    soft: null,
    mode: 0
  };
  var _eqRange = {
    min: _eqRangePart,
    max: _eqRangePart
  };
  function rangeNum(_min, _max, mult, extra) {
    if (isObj(mult))
      return _rangeNum(_min, _max, mult);
    _eqRangePart.pad = mult;
    _eqRangePart.soft = extra ? 0 : null;
    _eqRangePart.mode = extra ? 3 : 0;
    return _rangeNum(_min, _max, _eqRange);
  }
  function ifNull(lh, rh) {
    return lh == null ? rh : lh;
  }
  function hasData(data, idx0, idx1) {
    idx0 = ifNull(idx0, 0);
    idx1 = ifNull(idx1, data.length - 1);
    while (idx0 <= idx1) {
      if (data[idx0] != null)
        return true;
      idx0++;
    }
    return false;
  }
  function _rangeNum(_min, _max, cfg) {
    let cmin = cfg.min;
    let cmax = cfg.max;
    let padMin = ifNull(cmin.pad, 0);
    let padMax = ifNull(cmax.pad, 0);
    let hardMin = ifNull(cmin.hard, -inf);
    let hardMax = ifNull(cmax.hard, inf);
    let softMin = ifNull(cmin.soft, inf);
    let softMax = ifNull(cmax.soft, -inf);
    let softMinMode = ifNull(cmin.mode, 0);
    let softMaxMode = ifNull(cmax.mode, 0);
    let delta = _max - _min;
    let deltaMag = log10(delta);
    let scalarMax = max(abs(_min), abs(_max));
    let scalarMag = log10(scalarMax);
    let scalarMagDelta = abs(scalarMag - deltaMag);
    if (delta < 1e-9 || scalarMagDelta > 10) {
      delta = 0;
      if (_min == 0 || _max == 0) {
        delta = 1e-9;
        if (softMinMode == 2 && softMin != inf)
          padMin = 0;
        if (softMaxMode == 2 && softMax != -inf)
          padMax = 0;
      }
    }
    let nonZeroDelta = delta || scalarMax || 1e3;
    let mag = log10(nonZeroDelta);
    let base = pow(10, floor(mag));
    let _padMin = nonZeroDelta * (delta == 0 ? _min == 0 ? 0.1 : 1 : padMin);
    let _newMin = roundDec(incrRoundDn(_min - _padMin, base / 10), 9);
    let _softMin = _min >= softMin && (softMinMode == 1 || softMinMode == 3 && _newMin <= softMin || softMinMode == 2 && _newMin >= softMin) ? softMin : inf;
    let minLim = max(hardMin, _newMin < _softMin && _min >= _softMin ? _softMin : min(_softMin, _newMin));
    let _padMax = nonZeroDelta * (delta == 0 ? _max == 0 ? 0.1 : 1 : padMax);
    let _newMax = roundDec(incrRoundUp(_max + _padMax, base / 10), 9);
    let _softMax = _max <= softMax && (softMaxMode == 1 || softMaxMode == 3 && _newMax >= softMax || softMaxMode == 2 && _newMax <= softMax) ? softMax : -inf;
    let maxLim = min(hardMax, _newMax > _softMax && _max <= _softMax ? _softMax : max(_softMax, _newMax));
    if (minLim == maxLim && minLim == 0)
      maxLim = 100;
    return [minLim, maxLim];
  }
  var numFormatter = new Intl.NumberFormat(domEnv ? nav.language : "en-US");
  var fmtNum = (val) => numFormatter.format(val);
  var M = Math;
  var PI = M.PI;
  var abs = M.abs;
  var floor = M.floor;
  var round = M.round;
  var ceil = M.ceil;
  var min = M.min;
  var max = M.max;
  var pow = M.pow;
  var sign = M.sign;
  var log10 = M.log10;
  var log2 = M.log2;
  var sinh = (v, linthresh = 1) => M.sinh(v) * linthresh;
  var asinh = (v, linthresh = 1) => M.asinh(v / linthresh);
  var inf = Infinity;
  function numIntDigits(x) {
    return (log10((x ^ x >> 31) - (x >> 31)) | 0) + 1;
  }
  function clamp(num, _min, _max) {
    return min(max(num, _min), _max);
  }
  function fnOrSelf(v) {
    return typeof v == "function" ? v : () => v;
  }
  var noop = () => {
  };
  var retArg0 = (_0) => _0;
  var retArg1 = (_0, _1) => _1;
  var retNull = (_2) => null;
  var retTrue = (_2) => true;
  var retEq = (a, b) => a == b;
  var fixFloat = (v) => roundDec(v, 14);
  function incrRound(num, incr) {
    return fixFloat(roundDec(fixFloat(num / incr)) * incr);
  }
  function incrRoundUp(num, incr) {
    return fixFloat(ceil(fixFloat(num / incr)) * incr);
  }
  function incrRoundDn(num, incr) {
    return fixFloat(floor(fixFloat(num / incr)) * incr);
  }
  function roundDec(val, dec = 0) {
    if (isInt(val))
      return val;
    let p = 10 ** dec;
    let n = val * p * (1 + Number.EPSILON);
    return round(n) / p;
  }
  var fixedDec = /* @__PURE__ */ new Map();
  function guessDec(num) {
    return (("" + num).split(".")[1] || "").length;
  }
  function genIncrs(base, minExp, maxExp, mults) {
    let incrs = [];
    let multDec = mults.map(guessDec);
    for (let exp = minExp; exp < maxExp; exp++) {
      let expa = abs(exp);
      let mag = roundDec(pow(base, exp), expa);
      for (let i = 0; i < mults.length; i++) {
        let _incr = mults[i] * mag;
        let dec = (_incr >= 0 && exp >= 0 ? 0 : expa) + (exp >= multDec[i] ? 0 : multDec[i]);
        let incr = roundDec(_incr, dec);
        incrs.push(incr);
        fixedDec.set(incr, dec);
      }
    }
    return incrs;
  }
  var EMPTY_OBJ = {};
  var EMPTY_ARR = [];
  var nullNullTuple = [null, null];
  var isArr = Array.isArray;
  var isInt = Number.isInteger;
  var isUndef = (v) => v === void 0;
  function isStr(v) {
    return typeof v == "string";
  }
  function isObj(v) {
    let is = false;
    if (v != null) {
      let c = v.constructor;
      is = c == null || c == Object;
    }
    return is;
  }
  function fastIsObj(v) {
    return v != null && typeof v == "object";
  }
  var TypedArray = Object.getPrototypeOf(Uint8Array);
  function copy(o, _isObj = isObj) {
    let out;
    if (isArr(o)) {
      let val = o.find((v) => v != null);
      if (isArr(val) || _isObj(val)) {
        out = Array(o.length);
        for (let i = 0; i < o.length; i++)
          out[i] = copy(o[i], _isObj);
      } else
        out = o.slice();
    } else if (o instanceof TypedArray)
      out = o.slice();
    else if (_isObj(o)) {
      out = {};
      for (let k in o)
        out[k] = copy(o[k], _isObj);
    } else
      out = o;
    return out;
  }
  function assign(targ) {
    let args = arguments;
    for (let i = 1; i < args.length; i++) {
      let src = args[i];
      for (let key in src) {
        if (isObj(targ[key]))
          assign(targ[key], copy(src[key]));
        else
          targ[key] = copy(src[key]);
      }
    }
    return targ;
  }
  var NULL_REMOVE = 0;
  var NULL_RETAIN = 1;
  var NULL_EXPAND = 2;
  function nullExpand(yVals, nullIdxs, alignedLen) {
    for (let i = 0, xi, lastNullIdx = -1; i < nullIdxs.length; i++) {
      let nullIdx = nullIdxs[i];
      if (nullIdx > lastNullIdx) {
        xi = nullIdx - 1;
        while (xi >= 0 && yVals[xi] == null)
          yVals[xi--] = null;
        xi = nullIdx + 1;
        while (xi < alignedLen && yVals[xi] == null)
          yVals[lastNullIdx = xi++] = null;
      }
    }
  }
  function join(tables, nullModes) {
    let xVals = /* @__PURE__ */ new Set();
    for (let ti = 0; ti < tables.length; ti++) {
      let t = tables[ti];
      let xs = t[0];
      let len = xs.length;
      for (let i = 0; i < len; i++)
        xVals.add(xs[i]);
    }
    let data = [Array.from(xVals).sort((a, b) => a - b)];
    let alignedLen = data[0].length;
    let xIdxs = /* @__PURE__ */ new Map();
    for (let i = 0; i < alignedLen; i++)
      xIdxs.set(data[0][i], i);
    for (let ti = 0; ti < tables.length; ti++) {
      let t = tables[ti];
      let xs = t[0];
      for (let si = 1; si < t.length; si++) {
        let ys = t[si];
        let yVals = Array(alignedLen).fill(void 0);
        let nullMode = nullModes ? nullModes[ti][si] : NULL_RETAIN;
        let nullIdxs = [];
        for (let i = 0; i < ys.length; i++) {
          let yVal = ys[i];
          let alignedIdx = xIdxs.get(xs[i]);
          if (yVal === null) {
            if (nullMode != NULL_REMOVE) {
              yVals[alignedIdx] = yVal;
              if (nullMode == NULL_EXPAND)
                nullIdxs.push(alignedIdx);
            }
          } else
            yVals[alignedIdx] = yVal;
        }
        nullExpand(yVals, nullIdxs, alignedLen);
        data.push(yVals);
      }
    }
    return data;
  }
  var microTask = typeof queueMicrotask == "undefined" ? (fn) => Promise.resolve().then(fn) : queueMicrotask;
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  function slice3(str) {
    return str.slice(0, 3);
  }
  var days3 = days.map(slice3);
  var months3 = months.map(slice3);
  var engNames = {
    MMMM: months,
    MMM: months3,
    WWWW: days,
    WWW: days3
  };
  function zeroPad2(int) {
    return (int < 10 ? "0" : "") + int;
  }
  function zeroPad3(int) {
    return (int < 10 ? "00" : int < 100 ? "0" : "") + int;
  }
  var subs = {
    // 2019
    YYYY: (d) => d.getFullYear(),
    // 19
    YY: (d) => (d.getFullYear() + "").slice(2),
    // July
    MMMM: (d, names) => names.MMMM[d.getMonth()],
    // Jul
    MMM: (d, names) => names.MMM[d.getMonth()],
    // 07
    MM: (d) => zeroPad2(d.getMonth() + 1),
    // 7
    M: (d) => d.getMonth() + 1,
    // 09
    DD: (d) => zeroPad2(d.getDate()),
    // 9
    D: (d) => d.getDate(),
    // Monday
    WWWW: (d, names) => names.WWWW[d.getDay()],
    // Mon
    WWW: (d, names) => names.WWW[d.getDay()],
    // 03
    HH: (d) => zeroPad2(d.getHours()),
    // 3
    H: (d) => d.getHours(),
    // 9 (12hr, unpadded)
    h: (d) => {
      let h = d.getHours();
      return h == 0 ? 12 : h > 12 ? h - 12 : h;
    },
    // AM
    AA: (d) => d.getHours() >= 12 ? "PM" : "AM",
    // am
    aa: (d) => d.getHours() >= 12 ? "pm" : "am",
    // a
    a: (d) => d.getHours() >= 12 ? "p" : "a",
    // 09
    mm: (d) => zeroPad2(d.getMinutes()),
    // 9
    m: (d) => d.getMinutes(),
    // 09
    ss: (d) => zeroPad2(d.getSeconds()),
    // 9
    s: (d) => d.getSeconds(),
    // 374
    fff: (d) => zeroPad3(d.getMilliseconds())
  };
  function fmtDate(tpl, names) {
    names = names || engNames;
    let parts = [];
    let R = /\{([a-z]+)\}|[^{]+/gi, m;
    while (m = R.exec(tpl))
      parts.push(m[0][0] == "{" ? subs[m[1]] : m[0]);
    return (d) => {
      let out = "";
      for (let i = 0; i < parts.length; i++)
        out += typeof parts[i] == "string" ? parts[i] : parts[i](d, names);
      return out;
    };
  }
  var localTz = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  function tzDate(date, tz) {
    let date2;
    if (tz == "UTC" || tz == "Etc/UTC")
      date2 = new Date(+date + date.getTimezoneOffset() * 6e4);
    else if (tz == localTz)
      date2 = date;
    else {
      date2 = new Date(date.toLocaleString("en-US", { timeZone: tz }));
      date2.setMilliseconds(date.getMilliseconds());
    }
    return date2;
  }
  var onlyWhole = (v) => v % 1 == 0;
  var allMults = [1, 2, 2.5, 5];
  var decIncrs = genIncrs(10, -16, 0, allMults);
  var oneIncrs = genIncrs(10, 0, 16, allMults);
  var wholeIncrs = oneIncrs.filter(onlyWhole);
  var numIncrs = decIncrs.concat(oneIncrs);
  var NL = "\n";
  var yyyy = "{YYYY}";
  var NLyyyy = NL + yyyy;
  var md = "{M}/{D}";
  var NLmd = NL + md;
  var NLmdyy = NLmd + "/{YY}";
  var aa = "{aa}";
  var hmm = "{h}:{mm}";
  var hmmaa = hmm + aa;
  var NLhmmaa = NL + hmmaa;
  var ss = ":{ss}";
  var _ = null;
  function genTimeStuffs(ms) {
    let s = ms * 1e3, m = s * 60, h = m * 60, d = h * 24, mo = d * 30, y = d * 365;
    let subSecIncrs = ms == 1 ? genIncrs(10, 0, 3, allMults).filter(onlyWhole) : genIncrs(10, -3, 0, allMults);
    let timeIncrs = subSecIncrs.concat([
      // minute divisors (# of secs)
      s,
      s * 5,
      s * 10,
      s * 15,
      s * 30,
      // hour divisors (# of mins)
      m,
      m * 5,
      m * 10,
      m * 15,
      m * 30,
      // day divisors (# of hrs)
      h,
      h * 2,
      h * 3,
      h * 4,
      h * 6,
      h * 8,
      h * 12,
      // month divisors TODO: need more?
      d,
      d * 2,
      d * 3,
      d * 4,
      d * 5,
      d * 6,
      d * 7,
      d * 8,
      d * 9,
      d * 10,
      d * 15,
      // year divisors (# months, approx)
      mo,
      mo * 2,
      mo * 3,
      mo * 4,
      mo * 6,
      // century divisors
      y,
      y * 2,
      y * 5,
      y * 10,
      y * 25,
      y * 50,
      y * 100
    ]);
    const _timeAxisStamps = [
      //   tick incr    default          year                    month   day                   hour    min       sec   mode
      [y, yyyy, _, _, _, _, _, _, 1],
      [d * 28, "{MMM}", NLyyyy, _, _, _, _, _, 1],
      [d, md, NLyyyy, _, _, _, _, _, 1],
      [h, "{h}" + aa, NLmdyy, _, NLmd, _, _, _, 1],
      [m, hmmaa, NLmdyy, _, NLmd, _, _, _, 1],
      [s, ss, NLmdyy + " " + hmmaa, _, NLmd + " " + hmmaa, _, NLhmmaa, _, 1],
      [ms, ss + ".{fff}", NLmdyy + " " + hmmaa, _, NLmd + " " + hmmaa, _, NLhmmaa, _, 1]
    ];
    function timeAxisSplits(tzDate2) {
      return (self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace) => {
        let splits = [];
        let isYr = foundIncr >= y;
        let isMo = foundIncr >= mo && foundIncr < y;
        let minDate = tzDate2(scaleMin);
        let minDateTs = roundDec(minDate * ms, 3);
        let minMin = mkDate(minDate.getFullYear(), isYr ? 0 : minDate.getMonth(), isMo || isYr ? 1 : minDate.getDate());
        let minMinTs = roundDec(minMin * ms, 3);
        if (isMo || isYr) {
          let moIncr = isMo ? foundIncr / mo : 0;
          let yrIncr = isYr ? foundIncr / y : 0;
          let split = minDateTs == minMinTs ? minDateTs : roundDec(mkDate(minMin.getFullYear() + yrIncr, minMin.getMonth() + moIncr, 1) * ms, 3);
          let splitDate = new Date(round(split / ms));
          let baseYear = splitDate.getFullYear();
          let baseMonth = splitDate.getMonth();
          for (let i = 0; split <= scaleMax; i++) {
            let next = mkDate(baseYear + yrIncr * i, baseMonth + moIncr * i, 1);
            let offs = next - tzDate2(roundDec(next * ms, 3));
            split = roundDec((+next + offs) * ms, 3);
            if (split <= scaleMax)
              splits.push(split);
          }
        } else {
          let incr0 = foundIncr >= d ? d : foundIncr;
          let tzOffset = floor(scaleMin) - floor(minDateTs);
          let split = minMinTs + tzOffset + incrRoundUp(minDateTs - minMinTs, incr0);
          splits.push(split);
          let date0 = tzDate2(split);
          let prevHour = date0.getHours() + date0.getMinutes() / m + date0.getSeconds() / h;
          let incrHours = foundIncr / h;
          let minSpace = self.axes[axisIdx]._space;
          let pctSpace = foundSpace / minSpace;
          while (1) {
            split = roundDec(split + foundIncr, ms == 1 ? 0 : 3);
            if (split > scaleMax)
              break;
            if (incrHours > 1) {
              let expectedHour = floor(roundDec(prevHour + incrHours, 6)) % 24;
              let splitDate = tzDate2(split);
              let actualHour = splitDate.getHours();
              let dstShift = actualHour - expectedHour;
              if (dstShift > 1)
                dstShift = -1;
              split -= dstShift * h;
              prevHour = (prevHour + incrHours) % 24;
              let prevSplit = splits[splits.length - 1];
              let pctIncr = roundDec((split - prevSplit) / foundIncr, 3);
              if (pctIncr * pctSpace >= 0.7)
                splits.push(split);
            } else
              splits.push(split);
          }
        }
        return splits;
      };
    }
    return [
      timeIncrs,
      _timeAxisStamps,
      timeAxisSplits
    ];
  }
  var [timeIncrsMs, _timeAxisStampsMs, timeAxisSplitsMs] = genTimeStuffs(1);
  var [timeIncrsS, _timeAxisStampsS, timeAxisSplitsS] = genTimeStuffs(1e-3);
  genIncrs(2, -53, 53, [1]);
  function timeAxisStamps(stampCfg, fmtDate2) {
    return stampCfg.map((s) => s.map(
      (v, i) => i == 0 || i == 8 || v == null ? v : fmtDate2(i == 1 || s[8] == 0 ? v : s[1] + v)
    ));
  }
  function timeAxisVals(tzDate2, stamps) {
    return (self, splits, axisIdx, foundSpace, foundIncr) => {
      let s = stamps.find((s2) => foundIncr >= s2[0]) || stamps[stamps.length - 1];
      let prevYear;
      let prevMnth;
      let prevDate;
      let prevHour;
      let prevMins;
      let prevSecs;
      return splits.map((split) => {
        let date = tzDate2(split);
        let newYear = date.getFullYear();
        let newMnth = date.getMonth();
        let newDate = date.getDate();
        let newHour = date.getHours();
        let newMins = date.getMinutes();
        let newSecs = date.getSeconds();
        let stamp = newYear != prevYear && s[2] || newMnth != prevMnth && s[3] || newDate != prevDate && s[4] || newHour != prevHour && s[5] || newMins != prevMins && s[6] || newSecs != prevSecs && s[7] || s[1];
        prevYear = newYear;
        prevMnth = newMnth;
        prevDate = newDate;
        prevHour = newHour;
        prevMins = newMins;
        prevSecs = newSecs;
        return stamp(date);
      });
    };
  }
  function timeAxisVal(tzDate2, dateTpl) {
    let stamp = fmtDate(dateTpl);
    return (self, splits, axisIdx, foundSpace, foundIncr) => splits.map((split) => stamp(tzDate2(split)));
  }
  function mkDate(y, m, d) {
    return new Date(y, m, d);
  }
  function timeSeriesStamp(stampCfg, fmtDate2) {
    return fmtDate2(stampCfg);
  }
  var _timeSeriesStamp = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
  function timeSeriesVal(tzDate2, stamp) {
    return (self, val, seriesIdx, dataIdx2) => dataIdx2 == null ? LEGEND_DISP : stamp(tzDate2(val));
  }
  function legendStroke(self, seriesIdx) {
    let s = self.series[seriesIdx];
    return s.width ? s.stroke(self, seriesIdx) : s.points.width ? s.points.stroke(self, seriesIdx) : null;
  }
  function legendFill(self, seriesIdx) {
    return self.series[seriesIdx].fill(self, seriesIdx);
  }
  var legendOpts = {
    show: true,
    live: true,
    isolate: false,
    mount: noop,
    markers: {
      show: true,
      width: 2,
      stroke: legendStroke,
      fill: legendFill,
      dash: "solid"
    },
    idx: null,
    idxs: null,
    values: []
  };
  function cursorPointShow(self, si) {
    let o = self.cursor.points;
    let pt = placeDiv();
    let size = o.size(self, si);
    setStylePx(pt, WIDTH, size);
    setStylePx(pt, HEIGHT, size);
    let mar = size / -2;
    setStylePx(pt, "marginLeft", mar);
    setStylePx(pt, "marginTop", mar);
    let width = o.width(self, si, size);
    width && setStylePx(pt, "borderWidth", width);
    return pt;
  }
  function cursorPointFill(self, si) {
    let sp = self.series[si].points;
    return sp._fill || sp._stroke;
  }
  function cursorPointStroke(self, si) {
    let sp = self.series[si].points;
    return sp._stroke || sp._fill;
  }
  function cursorPointSize(self, si) {
    let sp = self.series[si].points;
    return sp.size;
  }
  function dataIdx(self, seriesIdx, cursorIdx) {
    return cursorIdx;
  }
  var moveTuple = [0, 0];
  function cursorMove(self, mouseLeft1, mouseTop1) {
    moveTuple[0] = mouseLeft1;
    moveTuple[1] = mouseTop1;
    return moveTuple;
  }
  function filtBtn0(self, targ, handle) {
    return (e) => {
      e.button == 0 && handle(e);
    };
  }
  function passThru(self, targ, handle) {
    return handle;
  }
  var cursorOpts = {
    show: true,
    x: true,
    y: true,
    lock: false,
    move: cursorMove,
    points: {
      show: cursorPointShow,
      size: cursorPointSize,
      width: 0,
      stroke: cursorPointStroke,
      fill: cursorPointFill
    },
    bind: {
      mousedown: filtBtn0,
      mouseup: filtBtn0,
      click: filtBtn0,
      dblclick: filtBtn0,
      mousemove: passThru,
      mouseleave: passThru,
      mouseenter: passThru
    },
    drag: {
      setScale: true,
      x: true,
      y: false,
      dist: 0,
      uni: null,
      click: (self, e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
      },
      _x: false,
      _y: false
    },
    focus: {
      prox: -1,
      bias: 0
    },
    left: -10,
    top: -10,
    idx: null,
    dataIdx,
    idxs: null
  };
  var axisLines = {
    show: true,
    stroke: "rgba(0,0,0,0.07)",
    width: 2
    //	dash: [],
  };
  var grid = assign({}, axisLines, {
    filter: retArg1
  });
  var ticks = assign({}, grid, {
    size: 10
  });
  var border = assign({}, axisLines, {
    show: false
  });
  var font = '12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  var labelFont = "bold " + font;
  var lineMult = 1.5;
  var xAxisOpts = {
    show: true,
    scale: "x",
    stroke: hexBlack,
    space: 50,
    gap: 5,
    size: 50,
    labelGap: 0,
    labelSize: 30,
    labelFont,
    side: 2,
    //	class: "x-vals",
    //	incrs: timeIncrs,
    //	values: timeVals,
    //	filter: retArg1,
    grid,
    ticks,
    border,
    font,
    rotate: 0
  };
  var numSeriesLabel = "Value";
  var timeSeriesLabel = "Time";
  var xSeriesOpts = {
    show: true,
    scale: "x",
    auto: false,
    sorted: 1,
    //	label: "Time",
    //	value: v => stamp(new Date(v * 1e3)),
    // internal caches
    min: inf,
    max: -inf,
    idxs: []
  };
  function numAxisVals(self, splits, axisIdx, foundSpace, foundIncr) {
    return splits.map((v) => v == null ? "" : fmtNum(v));
  }
  function numAxisSplits(self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace, forceMin) {
    let splits = [];
    let numDec = fixedDec.get(foundIncr) || 0;
    scaleMin = forceMin ? scaleMin : roundDec(incrRoundUp(scaleMin, foundIncr), numDec);
    for (let val = scaleMin; val <= scaleMax; val = roundDec(val + foundIncr, numDec))
      splits.push(Object.is(val, -0) ? 0 : val);
    return splits;
  }
  function logAxisSplits(self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace, forceMin) {
    const splits = [];
    const logBase = self.scales[self.axes[axisIdx].scale].log;
    const logFn = logBase == 10 ? log10 : log2;
    const exp = floor(logFn(scaleMin));
    foundIncr = pow(logBase, exp);
    if (logBase == 10 && exp < 0)
      foundIncr = roundDec(foundIncr, -exp);
    let split = scaleMin;
    do {
      splits.push(split);
      split = split + foundIncr;
      if (logBase == 10)
        split = roundDec(split, fixedDec.get(foundIncr));
      if (split >= foundIncr * logBase)
        foundIncr = split;
    } while (split <= scaleMax);
    return splits;
  }
  function asinhAxisSplits(self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace, forceMin) {
    let sc = self.scales[self.axes[axisIdx].scale];
    let linthresh = sc.asinh;
    let posSplits = scaleMax > linthresh ? logAxisSplits(self, axisIdx, max(linthresh, scaleMin), scaleMax, foundIncr) : [linthresh];
    let zero = scaleMax >= 0 && scaleMin <= 0 ? [0] : [];
    let negSplits = scaleMin < -linthresh ? logAxisSplits(self, axisIdx, max(linthresh, -scaleMax), -scaleMin, foundIncr) : [linthresh];
    return negSplits.reverse().map((v) => -v).concat(zero, posSplits);
  }
  var RE_ALL = /./;
  var RE_12357 = /[12357]/;
  var RE_125 = /[125]/;
  var RE_1 = /1/;
  function log10AxisValsFilt(self, splits, axisIdx, foundSpace, foundIncr) {
    let axis = self.axes[axisIdx];
    let scaleKey = axis.scale;
    let sc = self.scales[scaleKey];
    if (sc.distr == 3 && sc.log == 2)
      return splits;
    let valToPos = self.valToPos;
    let minSpace = axis._space;
    let _10 = valToPos(10, scaleKey);
    let re = valToPos(9, scaleKey) - _10 >= minSpace ? RE_ALL : valToPos(7, scaleKey) - _10 >= minSpace ? RE_12357 : valToPos(5, scaleKey) - _10 >= minSpace ? RE_125 : RE_1;
    return splits.map((v) => sc.distr == 4 && v == 0 || re.test(v) ? v : null);
  }
  function numSeriesVal(self, val, seriesIdx, dataIdx2) {
    return dataIdx2 == null ? LEGEND_DISP : val == null ? "" : fmtNum(val);
  }
  var yAxisOpts = {
    show: true,
    scale: "y",
    stroke: hexBlack,
    space: 30,
    gap: 5,
    size: 50,
    labelGap: 0,
    labelSize: 30,
    labelFont,
    side: 3,
    //	class: "y-vals",
    //	incrs: numIncrs,
    //	values: (vals, space) => vals,
    //	filter: retArg1,
    grid,
    ticks,
    border,
    font,
    rotate: 0
  };
  function ptDia(width, mult) {
    let dia = 3 + (width || 1) * 2;
    return roundDec(dia * mult, 3);
  }
  function seriesPointsShow(self, si) {
    let { scale: scale2, idxs } = self.series[0];
    let xData = self._data[0];
    let p0 = self.valToPos(xData[idxs[0]], scale2, true);
    let p1 = self.valToPos(xData[idxs[1]], scale2, true);
    let dim = abs(p1 - p0);
    let s = self.series[si];
    let maxPts = dim / (s.points.space * pxRatio);
    return idxs[1] - idxs[0] <= maxPts;
  }
  var facet = {
    scale: null,
    auto: true,
    sorted: 0,
    // internal caches
    min: inf,
    max: -inf
  };
  var gaps = (self, seriesIdx, idx0, idx1, nullGaps) => nullGaps;
  var xySeriesOpts = {
    show: true,
    auto: true,
    sorted: 0,
    gaps,
    alpha: 1,
    facets: [
      assign({}, facet, { scale: "x" }),
      assign({}, facet, { scale: "y" })
    ]
  };
  var ySeriesOpts = {
    scale: "y",
    auto: true,
    sorted: 0,
    show: true,
    spanGaps: false,
    gaps,
    alpha: 1,
    points: {
      show: seriesPointsShow,
      filter: null
      //  paths:
      //	stroke: "#000",
      //	fill: "#fff",
      //	width: 1,
      //	size: 10,
    },
    //	label: "Value",
    //	value: v => v,
    values: null,
    // internal caches
    min: inf,
    max: -inf,
    idxs: [],
    path: null,
    clip: null
  };
  function clampScale(self, val, scaleMin, scaleMax, scaleKey) {
    return scaleMin / 10;
  }
  var xScaleOpts = {
    time: FEAT_TIME,
    auto: true,
    distr: 1,
    log: 10,
    asinh: 1,
    min: null,
    max: null,
    dir: 1,
    ori: 0
  };
  var yScaleOpts = assign({}, xScaleOpts, {
    time: false,
    ori: 1
  });
  var syncs = {};
  function _sync(key, opts) {
    let s = syncs[key];
    if (!s) {
      s = {
        key,
        plots: [],
        sub(plot) {
          s.plots.push(plot);
        },
        unsub(plot) {
          s.plots = s.plots.filter((c) => c != plot);
        },
        pub(type, self, x, y, w, h, i) {
          for (let j = 0; j < s.plots.length; j++)
            s.plots[j] != self && s.plots[j].pub(type, self, x, y, w, h, i);
        }
      };
      if (key != null)
        syncs[key] = s;
    }
    return s;
  }
  var BAND_CLIP_FILL = 1 << 0;
  var BAND_CLIP_STROKE = 1 << 1;
  function orient(u, seriesIdx, cb) {
    const mode = u.mode;
    const series = u.series[seriesIdx];
    const data = mode == 2 ? u._data[seriesIdx] : u._data;
    const scales = u.scales;
    const bbox = u.bbox;
    let dx = data[0], dy = mode == 2 ? data[1] : data[seriesIdx], sx = mode == 2 ? scales[series.facets[0].scale] : scales[u.series[0].scale], sy = mode == 2 ? scales[series.facets[1].scale] : scales[series.scale], l = bbox.left, t = bbox.top, w = bbox.width, h = bbox.height, H = u.valToPosH, V = u.valToPosV;
    return sx.ori == 0 ? cb(
      series,
      dx,
      dy,
      sx,
      sy,
      H,
      V,
      l,
      t,
      w,
      h,
      moveToH,
      lineToH,
      rectH,
      arcH,
      bezierCurveToH
    ) : cb(
      series,
      dx,
      dy,
      sx,
      sy,
      V,
      H,
      t,
      l,
      h,
      w,
      moveToV,
      lineToV,
      rectV,
      arcV,
      bezierCurveToV
    );
  }
  function bandFillClipDirs(self, seriesIdx) {
    let fillDir = 0;
    let clipDirs = 0;
    let bands = ifNull(self.bands, EMPTY_ARR);
    for (let i = 0; i < bands.length; i++) {
      let b = bands[i];
      if (b.series[0] == seriesIdx)
        fillDir = b.dir;
      else if (b.series[1] == seriesIdx) {
        if (b.dir == 1)
          clipDirs |= 1;
        else
          clipDirs |= 2;
      }
    }
    return [
      fillDir,
      clipDirs == 1 ? -1 : (
        // neg only
        clipDirs == 2 ? 1 : (
          // pos only
          clipDirs == 3 ? 2 : (
            // both
            0
          )
        )
      )
    ];
  }
  function seriesFillTo(self, seriesIdx, dataMin, dataMax, bandFillDir) {
    let mode = self.mode;
    let series = self.series[seriesIdx];
    let scaleKey = mode == 2 ? series.facets[1].scale : series.scale;
    let scale2 = self.scales[scaleKey];
    return bandFillDir == -1 ? scale2.min : bandFillDir == 1 ? scale2.max : scale2.distr == 3 ? scale2.dir == 1 ? scale2.min : scale2.max : 0;
  }
  function clipBandLine(self, seriesIdx, idx0, idx1, strokePath, clipDir) {
    return orient(self, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
      let pxRound = series.pxRound;
      const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
      const lineTo = scaleX.ori == 0 ? lineToH : lineToV;
      let frIdx, toIdx;
      if (dir == 1) {
        frIdx = idx0;
        toIdx = idx1;
      } else {
        frIdx = idx1;
        toIdx = idx0;
      }
      let x0 = pxRound(valToPosX(dataX[frIdx], scaleX, xDim, xOff));
      let y0 = pxRound(valToPosY(dataY[frIdx], scaleY, yDim, yOff));
      let x1 = pxRound(valToPosX(dataX[toIdx], scaleX, xDim, xOff));
      let yLimit = pxRound(valToPosY(clipDir == 1 ? scaleY.max : scaleY.min, scaleY, yDim, yOff));
      let clip = new Path2D(strokePath);
      lineTo(clip, x1, yLimit);
      lineTo(clip, x0, yLimit);
      lineTo(clip, x0, y0);
      return clip;
    });
  }
  function clipGaps(gaps2, ori, plotLft, plotTop, plotWid, plotHgt) {
    let clip = null;
    if (gaps2.length > 0) {
      clip = new Path2D();
      const rect2 = ori == 0 ? rectH : rectV;
      let prevGapEnd = plotLft;
      for (let i = 0; i < gaps2.length; i++) {
        let g = gaps2[i];
        if (g[1] > g[0]) {
          let w2 = g[0] - prevGapEnd;
          w2 > 0 && rect2(clip, prevGapEnd, plotTop, w2, plotTop + plotHgt);
          prevGapEnd = g[1];
        }
      }
      let w = plotLft + plotWid - prevGapEnd;
      w > 0 && rect2(clip, prevGapEnd, plotTop, w, plotTop + plotHgt);
    }
    return clip;
  }
  function addGap(gaps2, fromX, toX) {
    let prevGap = gaps2[gaps2.length - 1];
    if (prevGap && prevGap[0] == fromX)
      prevGap[1] = toX;
    else
      gaps2.push([fromX, toX]);
  }
  function findGaps(xs, ys, idx0, idx1, dir, pixelForX, align) {
    let gaps2 = [];
    let len = xs.length;
    for (let i = dir == 1 ? idx0 : idx1; i >= idx0 && i <= idx1; i += dir) {
      let yVal = ys[i];
      if (yVal === null) {
        let fr = i, to = i;
        if (dir == 1) {
          while (++i <= idx1 && ys[i] === null)
            to = i;
        } else {
          while (--i >= idx0 && ys[i] === null)
            to = i;
        }
        let frPx = pixelForX(xs[fr]);
        let toPx = to == fr ? frPx : pixelForX(xs[to]);
        let fri2 = fr - dir;
        let frPx2 = align <= 0 && fri2 >= 0 && fri2 < len ? pixelForX(xs[fri2]) : frPx;
        frPx = frPx2;
        let toi2 = to + dir;
        let toPx2 = align >= 0 && toi2 >= 0 && toi2 < len ? pixelForX(xs[toi2]) : toPx;
        toPx = toPx2;
        if (toPx >= frPx)
          gaps2.push([frPx, toPx]);
      }
    }
    return gaps2;
  }
  function pxRoundGen(pxAlign) {
    return pxAlign == 0 ? retArg0 : pxAlign == 1 ? round : (v) => incrRound(v, pxAlign);
  }
  function rect(ori) {
    let moveTo = ori == 0 ? moveToH : moveToV;
    let arcTo = ori == 0 ? (p, x1, y1, x2, y2, r) => {
      p.arcTo(x1, y1, x2, y2, r);
    } : (p, y1, x1, y2, x2, r) => {
      p.arcTo(x1, y1, x2, y2, r);
    };
    let rect2 = ori == 0 ? (p, x, y, w, h) => {
      p.rect(x, y, w, h);
    } : (p, y, x, h, w) => {
      p.rect(x, y, w, h);
    };
    return (p, x, y, w, h, endRad = 0, baseRad = 0) => {
      if (endRad == 0 && baseRad == 0)
        rect2(p, x, y, w, h);
      else {
        endRad = min(endRad, w / 2, h / 2);
        baseRad = min(baseRad, w / 2, h / 2);
        moveTo(p, x + endRad, y);
        arcTo(p, x + w, y, x + w, y + h, endRad);
        arcTo(p, x + w, y + h, x, y + h, baseRad);
        arcTo(p, x, y + h, x, y, baseRad);
        arcTo(p, x, y, x + w, y, endRad);
        p.closePath();
      }
    };
  }
  var moveToH = (p, x, y) => {
    p.moveTo(x, y);
  };
  var moveToV = (p, y, x) => {
    p.moveTo(x, y);
  };
  var lineToH = (p, x, y) => {
    p.lineTo(x, y);
  };
  var lineToV = (p, y, x) => {
    p.lineTo(x, y);
  };
  var rectH = rect(0);
  var rectV = rect(1);
  var arcH = (p, x, y, r, startAngle, endAngle) => {
    p.arc(x, y, r, startAngle, endAngle);
  };
  var arcV = (p, y, x, r, startAngle, endAngle) => {
    p.arc(x, y, r, startAngle, endAngle);
  };
  var bezierCurveToH = (p, bp1x, bp1y, bp2x, bp2y, p2x, p2y) => {
    p.bezierCurveTo(bp1x, bp1y, bp2x, bp2y, p2x, p2y);
  };
  var bezierCurveToV = (p, bp1y, bp1x, bp2y, bp2x, p2y, p2x) => {
    p.bezierCurveTo(bp1x, bp1y, bp2x, bp2y, p2x, p2y);
  };
  function points(opts) {
    return (u, seriesIdx, idx0, idx1, filtIdxs) => {
      return orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
        let { pxRound, points: points2 } = series;
        let moveTo, arc;
        if (scaleX.ori == 0) {
          moveTo = moveToH;
          arc = arcH;
        } else {
          moveTo = moveToV;
          arc = arcV;
        }
        const width = roundDec(points2.width * pxRatio, 3);
        let rad = (points2.size - points2.width) / 2 * pxRatio;
        let dia = roundDec(rad * 2, 3);
        let fill = new Path2D();
        let clip = new Path2D();
        let { left: lft, top, width: wid, height: hgt } = u.bbox;
        rectH(
          clip,
          lft - dia,
          top - dia,
          wid + dia * 2,
          hgt + dia * 2
        );
        const drawPoint = (pi) => {
          if (dataY[pi] != null) {
            let x = pxRound(valToPosX(dataX[pi], scaleX, xDim, xOff));
            let y = pxRound(valToPosY(dataY[pi], scaleY, yDim, yOff));
            moveTo(fill, x + rad, y);
            arc(fill, x, y, rad, 0, PI * 2);
          }
        };
        if (filtIdxs)
          filtIdxs.forEach(drawPoint);
        else {
          for (let pi = idx0; pi <= idx1; pi++)
            drawPoint(pi);
        }
        return {
          stroke: width > 0 ? fill : null,
          fill,
          clip,
          flags: BAND_CLIP_FILL | BAND_CLIP_STROKE
        };
      });
    };
  }
  function _drawAcc(lineTo) {
    return (stroke, accX, minY, maxY, inY, outY) => {
      if (minY != maxY) {
        if (inY != minY && outY != minY)
          lineTo(stroke, accX, minY);
        if (inY != maxY && outY != maxY)
          lineTo(stroke, accX, maxY);
        lineTo(stroke, accX, outY);
      }
    };
  }
  var drawAccH = _drawAcc(lineToH);
  var drawAccV = _drawAcc(lineToV);
  function linear(opts) {
    const alignGaps = ifNull(opts?.alignGaps, 0);
    return (u, seriesIdx, idx0, idx1) => {
      return orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
        let pxRound = series.pxRound;
        let pixelForX = (val) => pxRound(valToPosX(val, scaleX, xDim, xOff));
        let pixelForY = (val) => pxRound(valToPosY(val, scaleY, yDim, yOff));
        let lineTo, drawAcc;
        if (scaleX.ori == 0) {
          lineTo = lineToH;
          drawAcc = drawAccH;
        } else {
          lineTo = lineToV;
          drawAcc = drawAccV;
        }
        const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
        const _paths = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: BAND_CLIP_FILL };
        const stroke = _paths.stroke;
        let minY = inf, maxY = -inf, inY, outY, drawnAtX;
        let accX = pixelForX(dataX[dir == 1 ? idx0 : idx1]);
        let lftIdx = nonNullIdx(dataY, idx0, idx1, 1 * dir);
        let rgtIdx = nonNullIdx(dataY, idx0, idx1, -1 * dir);
        let lftX = pixelForX(dataX[lftIdx]);
        let rgtX = pixelForX(dataX[rgtIdx]);
        let hasGap = false;
        for (let i = dir == 1 ? idx0 : idx1; i >= idx0 && i <= idx1; i += dir) {
          let x = pixelForX(dataX[i]);
          let yVal = dataY[i];
          if (x == accX) {
            if (yVal != null) {
              outY = pixelForY(yVal);
              if (minY == inf) {
                lineTo(stroke, x, outY);
                inY = outY;
              }
              minY = min(outY, minY);
              maxY = max(outY, maxY);
            } else {
              if (yVal === null)
                hasGap = true;
            }
          } else {
            if (minY != inf) {
              drawAcc(stroke, accX, minY, maxY, inY, outY);
              drawnAtX = accX;
            }
            if (yVal != null) {
              outY = pixelForY(yVal);
              lineTo(stroke, x, outY);
              minY = maxY = inY = outY;
            } else {
              minY = inf;
              maxY = -inf;
              if (yVal === null)
                hasGap = true;
            }
            accX = x;
          }
        }
        if (minY != inf && minY != maxY && drawnAtX != accX)
          drawAcc(stroke, accX, minY, maxY, inY, outY);
        let [bandFillDir, bandClipDir] = bandFillClipDirs(u, seriesIdx);
        if (series.fill != null || bandFillDir != 0) {
          let fill = _paths.fill = new Path2D(stroke);
          let fillToVal = series.fillTo(u, seriesIdx, series.min, series.max, bandFillDir);
          let fillToY = pixelForY(fillToVal);
          lineTo(fill, rgtX, fillToY);
          lineTo(fill, lftX, fillToY);
        }
        if (!series.spanGaps) {
          let gaps2 = [];
          hasGap && gaps2.push(...findGaps(dataX, dataY, idx0, idx1, dir, pixelForX, alignGaps));
          _paths.gaps = gaps2 = series.gaps(u, seriesIdx, idx0, idx1, gaps2);
          _paths.clip = clipGaps(gaps2, scaleX.ori, xOff, yOff, xDim, yDim);
        }
        if (bandClipDir != 0) {
          _paths.band = bandClipDir == 2 ? [
            clipBandLine(u, seriesIdx, idx0, idx1, stroke, -1),
            clipBandLine(u, seriesIdx, idx0, idx1, stroke, 1)
          ] : clipBandLine(u, seriesIdx, idx0, idx1, stroke, bandClipDir);
        }
        return _paths;
      });
    };
  }
  function stepped(opts) {
    const align = ifNull(opts.align, 1);
    const ascDesc = ifNull(opts.ascDesc, false);
    const alignGaps = ifNull(opts.alignGaps, 0);
    const extend = ifNull(opts.extend, false);
    return (u, seriesIdx, idx0, idx1) => {
      return orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
        let pxRound = series.pxRound;
        let { left, width } = u.bbox;
        let pixelForX = (val) => pxRound(valToPosX(val, scaleX, xDim, xOff));
        let pixelForY = (val) => pxRound(valToPosY(val, scaleY, yDim, yOff));
        let lineTo = scaleX.ori == 0 ? lineToH : lineToV;
        const _paths = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: BAND_CLIP_FILL };
        const stroke = _paths.stroke;
        const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
        idx0 = nonNullIdx(dataY, idx0, idx1, 1);
        idx1 = nonNullIdx(dataY, idx0, idx1, -1);
        let prevYPos = pixelForY(dataY[dir == 1 ? idx0 : idx1]);
        let firstXPos = pixelForX(dataX[dir == 1 ? idx0 : idx1]);
        let prevXPos = firstXPos;
        let firstXPosExt = firstXPos;
        if (extend && align == -1) {
          firstXPosExt = left;
          lineTo(stroke, firstXPosExt, prevYPos);
        }
        lineTo(stroke, firstXPos, prevYPos);
        for (let i = dir == 1 ? idx0 : idx1; i >= idx0 && i <= idx1; i += dir) {
          let yVal1 = dataY[i];
          if (yVal1 == null)
            continue;
          let x1 = pixelForX(dataX[i]);
          let y1 = pixelForY(yVal1);
          if (align == 1)
            lineTo(stroke, x1, prevYPos);
          else
            lineTo(stroke, prevXPos, y1);
          lineTo(stroke, x1, y1);
          prevYPos = y1;
          prevXPos = x1;
        }
        let prevXPosExt = prevXPos;
        if (extend && align == 1) {
          prevXPosExt = left + width;
          lineTo(stroke, prevXPosExt, prevYPos);
        }
        let [bandFillDir, bandClipDir] = bandFillClipDirs(u, seriesIdx);
        if (series.fill != null || bandFillDir != 0) {
          let fill = _paths.fill = new Path2D(stroke);
          let fillTo = series.fillTo(u, seriesIdx, series.min, series.max, bandFillDir);
          let fillToY = pixelForY(fillTo);
          lineTo(fill, prevXPosExt, fillToY);
          lineTo(fill, firstXPosExt, fillToY);
        }
        if (!series.spanGaps) {
          let gaps2 = [];
          gaps2.push(...findGaps(dataX, dataY, idx0, idx1, dir, pixelForX, alignGaps));
          let halfStroke = series.width * pxRatio / 2;
          let startsOffset = ascDesc || align == 1 ? halfStroke : -halfStroke;
          let endsOffset = ascDesc || align == -1 ? -halfStroke : halfStroke;
          gaps2.forEach((g) => {
            g[0] += startsOffset;
            g[1] += endsOffset;
          });
          _paths.gaps = gaps2 = series.gaps(u, seriesIdx, idx0, idx1, gaps2);
          _paths.clip = clipGaps(gaps2, scaleX.ori, xOff, yOff, xDim, yDim);
        }
        if (bandClipDir != 0) {
          _paths.band = bandClipDir == 2 ? [
            clipBandLine(u, seriesIdx, idx0, idx1, stroke, -1),
            clipBandLine(u, seriesIdx, idx0, idx1, stroke, 1)
          ] : clipBandLine(u, seriesIdx, idx0, idx1, stroke, bandClipDir);
        }
        return _paths;
      });
    };
  }
  function bars(opts) {
    opts = opts || EMPTY_OBJ;
    const size = ifNull(opts.size, [0.6, inf, 1]);
    const align = opts.align || 0;
    const extraGap = (opts.gap || 0) * pxRatio;
    let ro = opts.radius;
    ro = // [valueRadius, baselineRadius]
    ro == null ? [0, 0] : typeof ro == "number" ? [ro, 0] : ro;
    const radiusFn = fnOrSelf(ro);
    const gapFactor = 1 - size[0];
    const maxWidth = ifNull(size[1], inf) * pxRatio;
    const minWidth = ifNull(size[2], 1) * pxRatio;
    const disp = ifNull(opts.disp, EMPTY_OBJ);
    const _each = ifNull(opts.each, (_2) => {
    });
    const { fill: dispFills, stroke: dispStrokes } = disp;
    return (u, seriesIdx, idx0, idx1) => {
      return orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
        let pxRound = series.pxRound;
        let valRadius, baseRadius;
        if (scaleX.ori == 0)
          [valRadius, baseRadius] = radiusFn(u, seriesIdx);
        else
          [baseRadius, valRadius] = radiusFn(u, seriesIdx);
        const _dirX = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
        const _dirY = scaleY.dir * (scaleY.ori == 1 ? 1 : -1);
        let rect2 = scaleX.ori == 0 ? rectH : rectV;
        let each = scaleX.ori == 0 ? _each : (u2, seriesIdx2, i, top, lft, hgt, wid) => {
          _each(u2, seriesIdx2, i, lft, top, wid, hgt);
        };
        let [bandFillDir, bandClipDir] = bandFillClipDirs(u, seriesIdx);
        let fillToY = scaleY.distr == 3 ? bandFillDir == 1 ? scaleY.max : scaleY.min : 0;
        let y0Pos = valToPosY(fillToY, scaleY, yDim, yOff);
        let xShift, barWid;
        let strokeWidth = pxRound(series.width * pxRatio);
        let multiPath = false;
        let fillColors = null;
        let fillPaths = null;
        let strokeColors = null;
        let strokePaths = null;
        if (dispFills != null && (strokeWidth == 0 || dispStrokes != null)) {
          multiPath = true;
          fillColors = dispFills.values(u, seriesIdx, idx0, idx1);
          fillPaths = /* @__PURE__ */ new Map();
          new Set(fillColors).forEach((color) => {
            if (color != null)
              fillPaths.set(color, new Path2D());
          });
          if (strokeWidth > 0) {
            strokeColors = dispStrokes.values(u, seriesIdx, idx0, idx1);
            strokePaths = /* @__PURE__ */ new Map();
            new Set(strokeColors).forEach((color) => {
              if (color != null)
                strokePaths.set(color, new Path2D());
            });
          }
        }
        let { x0, size: size2 } = disp;
        if (x0 != null && size2 != null) {
          dataX = x0.values(u, seriesIdx, idx0, idx1);
          if (x0.unit == 2)
            dataX = dataX.map((pct) => u.posToVal(xOff + pct * xDim, scaleX.key, true));
          let sizes = size2.values(u, seriesIdx, idx0, idx1);
          if (size2.unit == 2)
            barWid = sizes[0] * xDim;
          else
            barWid = valToPosX(sizes[0], scaleX, xDim, xOff) - valToPosX(0, scaleX, xDim, xOff);
          barWid = pxRound(barWid - strokeWidth);
          xShift = _dirX == 1 ? -strokeWidth / 2 : barWid + strokeWidth / 2;
        } else {
          let colWid = xDim;
          if (dataX.length > 1) {
            let prevIdx = null;
            for (let i = 0, minDelta = Infinity; i < dataX.length; i++) {
              if (dataY[i] !== void 0) {
                if (prevIdx != null) {
                  let delta = abs(dataX[i] - dataX[prevIdx]);
                  if (delta < minDelta) {
                    minDelta = delta;
                    colWid = abs(valToPosX(dataX[i], scaleX, xDim, xOff) - valToPosX(dataX[prevIdx], scaleX, xDim, xOff));
                  }
                }
                prevIdx = i;
              }
            }
          }
          let gapWid = colWid * gapFactor;
          barWid = pxRound(min(maxWidth, max(minWidth, colWid - gapWid)) - strokeWidth - extraGap);
          xShift = (align == 0 ? barWid / 2 : align == _dirX ? 0 : barWid) - align * _dirX * extraGap / 2;
        }
        const _paths = { stroke: null, fill: null, clip: null, band: null, gaps: null, flags: BAND_CLIP_FILL | BAND_CLIP_STROKE };
        let yLimit;
        if (bandClipDir != 0) {
          _paths.band = new Path2D();
          yLimit = pxRound(valToPosY(bandClipDir == 1 ? scaleY.max : scaleY.min, scaleY, yDim, yOff));
        }
        const stroke = multiPath ? null : new Path2D();
        const band = _paths.band;
        let { y0, y1 } = disp;
        let dataY0 = null;
        if (y0 != null && y1 != null) {
          dataY = y1.values(u, seriesIdx, idx0, idx1);
          dataY0 = y0.values(u, seriesIdx, idx0, idx1);
        }
        let radVal = valRadius * barWid;
        let radBase = baseRadius * barWid;
        for (let i = _dirX == 1 ? idx0 : idx1; i >= idx0 && i <= idx1; i += _dirX) {
          let yVal = dataY[i];
          if (yVal === void 0)
            continue;
          let xVal = scaleX.distr != 2 || disp != null ? dataX[i] : i;
          let xPos = valToPosX(xVal, scaleX, xDim, xOff);
          let yPos = valToPosY(ifNull(yVal, fillToY), scaleY, yDim, yOff);
          if (dataY0 != null && yVal != null)
            y0Pos = valToPosY(dataY0[i], scaleY, yDim, yOff);
          let lft = pxRound(xPos - xShift);
          let btm = pxRound(max(yPos, y0Pos));
          let top = pxRound(min(yPos, y0Pos));
          let barHgt = btm - top;
          if (yVal != null) {
            let rv = yVal < 0 ? radBase : radVal;
            let rb = yVal < 0 ? radVal : radBase;
            if (multiPath) {
              if (strokeWidth > 0 && strokeColors[i] != null)
                rect2(strokePaths.get(strokeColors[i]), lft, top + floor(strokeWidth / 2), barWid, max(0, barHgt - strokeWidth), rv, rb);
              if (fillColors[i] != null)
                rect2(fillPaths.get(fillColors[i]), lft, top + floor(strokeWidth / 2), barWid, max(0, barHgt - strokeWidth), rv, rb);
            } else
              rect2(stroke, lft, top + floor(strokeWidth / 2), barWid, max(0, barHgt - strokeWidth), rv, rb);
            each(
              u,
              seriesIdx,
              i,
              lft - strokeWidth / 2,
              top,
              barWid + strokeWidth,
              barHgt
            );
          }
          if (bandClipDir != 0) {
            if (_dirY * bandClipDir == 1) {
              btm = top;
              top = yLimit;
            } else {
              top = btm;
              btm = yLimit;
            }
            barHgt = btm - top;
            rect2(band, lft - strokeWidth / 2, top, barWid + strokeWidth, max(0, barHgt), 0, 0);
          }
        }
        if (strokeWidth > 0)
          _paths.stroke = multiPath ? strokePaths : stroke;
        _paths.fill = multiPath ? fillPaths : stroke;
        return _paths;
      });
    };
  }
  function splineInterp(interp, opts) {
    const alignGaps = ifNull(opts?.alignGaps, 0);
    return (u, seriesIdx, idx0, idx1) => {
      return orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
        let pxRound = series.pxRound;
        let pixelForX = (val) => pxRound(valToPosX(val, scaleX, xDim, xOff));
        let pixelForY = (val) => pxRound(valToPosY(val, scaleY, yDim, yOff));
        let moveTo, bezierCurveTo, lineTo;
        if (scaleX.ori == 0) {
          moveTo = moveToH;
          lineTo = lineToH;
          bezierCurveTo = bezierCurveToH;
        } else {
          moveTo = moveToV;
          lineTo = lineToV;
          bezierCurveTo = bezierCurveToV;
        }
        const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
        idx0 = nonNullIdx(dataY, idx0, idx1, 1);
        idx1 = nonNullIdx(dataY, idx0, idx1, -1);
        let firstXPos = pixelForX(dataX[dir == 1 ? idx0 : idx1]);
        let prevXPos = firstXPos;
        let xCoords = [];
        let yCoords = [];
        for (let i = dir == 1 ? idx0 : idx1; i >= idx0 && i <= idx1; i += dir) {
          let yVal = dataY[i];
          if (yVal != null) {
            let xVal = dataX[i];
            let xPos = pixelForX(xVal);
            xCoords.push(prevXPos = xPos);
            yCoords.push(pixelForY(dataY[i]));
          }
        }
        const _paths = { stroke: interp(xCoords, yCoords, moveTo, lineTo, bezierCurveTo, pxRound), fill: null, clip: null, band: null, gaps: null, flags: BAND_CLIP_FILL };
        const stroke = _paths.stroke;
        let [bandFillDir, bandClipDir] = bandFillClipDirs(u, seriesIdx);
        if (series.fill != null || bandFillDir != 0) {
          let fill = _paths.fill = new Path2D(stroke);
          let fillTo = series.fillTo(u, seriesIdx, series.min, series.max, bandFillDir);
          let fillToY = pixelForY(fillTo);
          lineTo(fill, prevXPos, fillToY);
          lineTo(fill, firstXPos, fillToY);
        }
        if (!series.spanGaps) {
          let gaps2 = [];
          gaps2.push(...findGaps(dataX, dataY, idx0, idx1, dir, pixelForX, alignGaps));
          _paths.gaps = gaps2 = series.gaps(u, seriesIdx, idx0, idx1, gaps2);
          _paths.clip = clipGaps(gaps2, scaleX.ori, xOff, yOff, xDim, yDim);
        }
        if (bandClipDir != 0) {
          _paths.band = bandClipDir == 2 ? [
            clipBandLine(u, seriesIdx, idx0, idx1, stroke, -1),
            clipBandLine(u, seriesIdx, idx0, idx1, stroke, 1)
          ] : clipBandLine(u, seriesIdx, idx0, idx1, stroke, bandClipDir);
        }
        return _paths;
      });
    };
  }
  function monotoneCubic(opts) {
    return splineInterp(_monotoneCubic, opts);
  }
  function _monotoneCubic(xs, ys, moveTo, lineTo, bezierCurveTo, pxRound) {
    const n = xs.length;
    if (n < 2)
      return null;
    const path = new Path2D();
    moveTo(path, xs[0], ys[0]);
    if (n == 2)
      lineTo(path, xs[1], ys[1]);
    else {
      let ms = Array(n), ds = Array(n - 1), dys = Array(n - 1), dxs = Array(n - 1);
      for (let i = 0; i < n - 1; i++) {
        dys[i] = ys[i + 1] - ys[i];
        dxs[i] = xs[i + 1] - xs[i];
        ds[i] = dys[i] / dxs[i];
      }
      ms[0] = ds[0];
      for (let i = 1; i < n - 1; i++) {
        if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0)
          ms[i] = 0;
        else {
          ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);
          if (!isFinite(ms[i]))
            ms[i] = 0;
        }
      }
      ms[n - 1] = ds[n - 2];
      for (let i = 0; i < n - 1; i++) {
        bezierCurveTo(
          path,
          xs[i] + dxs[i] / 3,
          ys[i] + ms[i] * dxs[i] / 3,
          xs[i + 1] - dxs[i] / 3,
          ys[i + 1] - ms[i + 1] * dxs[i] / 3,
          xs[i + 1],
          ys[i + 1]
        );
      }
    }
    return path;
  }
  var cursorPlots = /* @__PURE__ */ new Set();
  function invalidateRects() {
    for (let u of cursorPlots)
      u.syncRect(true);
  }
  if (domEnv) {
    on(resize, win, invalidateRects);
    on(scroll, win, invalidateRects, true);
    on(dppxchange, win, () => {
      uPlot.pxRatio = pxRatio;
    });
  }
  var linearPath = linear();
  var pointsPath = points();
  function setDefaults(d, xo, yo, initY) {
    let d2 = initY ? [d[0], d[1]].concat(d.slice(2)) : [d[0]].concat(d.slice(1));
    return d2.map((o, i) => setDefault(o, i, xo, yo));
  }
  function setDefaults2(d, xyo) {
    return d.map((o, i) => i == 0 ? null : assign({}, xyo, o));
  }
  function setDefault(o, i, xo, yo) {
    return assign({}, i == 0 ? xo : yo, o);
  }
  function snapNumX(self, dataMin, dataMax) {
    return dataMin == null ? nullNullTuple : [dataMin, dataMax];
  }
  var snapTimeX = snapNumX;
  function snapNumY(self, dataMin, dataMax) {
    return dataMin == null ? nullNullTuple : rangeNum(dataMin, dataMax, rangePad, true);
  }
  function snapLogY(self, dataMin, dataMax, scale2) {
    return dataMin == null ? nullNullTuple : rangeLog(dataMin, dataMax, self.scales[scale2].log, false);
  }
  var snapLogX = snapLogY;
  function snapAsinhY(self, dataMin, dataMax, scale2) {
    return dataMin == null ? nullNullTuple : rangeAsinh(dataMin, dataMax, self.scales[scale2].log, false);
  }
  var snapAsinhX = snapAsinhY;
  function findIncr(minVal, maxVal, incrs, dim, minSpace) {
    let intDigits = max(numIntDigits(minVal), numIntDigits(maxVal));
    let delta = maxVal - minVal;
    let incrIdx = closestIdx(minSpace / dim * delta, incrs);
    do {
      let foundIncr = incrs[incrIdx];
      let foundSpace = dim * foundIncr / delta;
      if (foundSpace >= minSpace && intDigits + (foundIncr < 5 ? fixedDec.get(foundIncr) : 0) <= 17)
        return [foundIncr, foundSpace];
    } while (++incrIdx < incrs.length);
    return [0, 0];
  }
  function pxRatioFont(font2) {
    let fontSize, fontSizeCss;
    font2 = font2.replace(/(\d+)px/, (m, p1) => (fontSize = round((fontSizeCss = +p1) * pxRatio)) + "px");
    return [font2, fontSize, fontSizeCss];
  }
  function syncFontSize(axis) {
    if (axis.show) {
      [axis.font, axis.labelFont].forEach((f) => {
        let size = roundDec(f[2] * pxRatio, 1);
        f[0] = f[0].replace(/[0-9.]+px/, size + "px");
        f[1] = size;
      });
    }
  }
  function uPlot(opts, data, then) {
    const self = {
      mode: ifNull(opts.mode, 1)
    };
    const mode = self.mode;
    function getValPct(val, scale2) {
      let _val = scale2.distr == 3 ? log10(val > 0 ? val : scale2.clamp(self, val, scale2.min, scale2.max, scale2.key)) : scale2.distr == 4 ? asinh(val, scale2.asinh) : val;
      return (_val - scale2._min) / (scale2._max - scale2._min);
    }
    function getHPos(val, scale2, dim, off2) {
      let pct = getValPct(val, scale2);
      return off2 + dim * (scale2.dir == -1 ? 1 - pct : pct);
    }
    function getVPos(val, scale2, dim, off2) {
      let pct = getValPct(val, scale2);
      return off2 + dim * (scale2.dir == -1 ? pct : 1 - pct);
    }
    function getPos(val, scale2, dim, off2) {
      return scale2.ori == 0 ? getHPos(val, scale2, dim, off2) : getVPos(val, scale2, dim, off2);
    }
    self.valToPosH = getHPos;
    self.valToPosV = getVPos;
    let ready = false;
    self.status = 0;
    const root = self.root = placeDiv(UPLOT);
    if (opts.id != null)
      root.id = opts.id;
    addClass(root, opts.class);
    if (opts.title) {
      let title = placeDiv(TITLE, root);
      title.textContent = opts.title;
    }
    const can = placeTag("canvas");
    const ctx = self.ctx = can.getContext("2d");
    const wrap = placeDiv(WRAP, root);
    on("click", wrap, (e) => {
      let didDrag = mouseLeft1 != mouseLeft0 || mouseTop1 != mouseTop0;
      didDrag && drag.click(self, e);
    }, true);
    const under = self.under = placeDiv(UNDER, wrap);
    wrap.appendChild(can);
    const over = self.over = placeDiv(OVER, wrap);
    opts = copy(opts);
    const pxAlign = +ifNull(opts.pxAlign, 1);
    const pxRound = pxRoundGen(pxAlign);
    (opts.plugins || []).forEach((p) => {
      if (p.opts)
        opts = p.opts(self, opts) || opts;
    });
    const ms = opts.ms || 1e-3;
    const series = self.series = mode == 1 ? setDefaults(opts.series || [], xSeriesOpts, ySeriesOpts, false) : setDefaults2(opts.series || [null], xySeriesOpts);
    const axes = self.axes = setDefaults(opts.axes || [], xAxisOpts, yAxisOpts, true);
    const scales = self.scales = {};
    const bands = self.bands = opts.bands || [];
    bands.forEach((b) => {
      b.fill = fnOrSelf(b.fill || null);
      b.dir = ifNull(b.dir, -1);
    });
    const xScaleKey = mode == 2 ? series[1].facets[0].scale : series[0].scale;
    const drawOrderMap = {
      axes: drawAxesGrid,
      series: drawSeries
    };
    const drawOrder = (opts.drawOrder || ["axes", "series"]).map((key2) => drawOrderMap[key2]);
    function initScale(scaleKey) {
      let sc = scales[scaleKey];
      if (sc == null) {
        let scaleOpts = (opts.scales || EMPTY_OBJ)[scaleKey] || EMPTY_OBJ;
        if (scaleOpts.from != null) {
          initScale(scaleOpts.from);
          scales[scaleKey] = assign({}, scales[scaleOpts.from], scaleOpts, { key: scaleKey });
        } else {
          sc = scales[scaleKey] = assign({}, scaleKey == xScaleKey ? xScaleOpts : yScaleOpts, scaleOpts);
          sc.key = scaleKey;
          let isTime = sc.time;
          let rn = sc.range;
          let rangeIsArr = isArr(rn);
          if (scaleKey != xScaleKey || mode == 2 && !isTime) {
            if (rangeIsArr && (rn[0] == null || rn[1] == null)) {
              rn = {
                min: rn[0] == null ? autoRangePart : {
                  mode: 1,
                  hard: rn[0],
                  soft: rn[0]
                },
                max: rn[1] == null ? autoRangePart : {
                  mode: 1,
                  hard: rn[1],
                  soft: rn[1]
                }
              };
              rangeIsArr = false;
            }
            if (!rangeIsArr && isObj(rn)) {
              let cfg = rn;
              rn = (self2, dataMin, dataMax) => dataMin == null ? nullNullTuple : rangeNum(dataMin, dataMax, cfg);
            }
          }
          sc.range = fnOrSelf(rn || (isTime ? snapTimeX : scaleKey == xScaleKey ? sc.distr == 3 ? snapLogX : sc.distr == 4 ? snapAsinhX : snapNumX : sc.distr == 3 ? snapLogY : sc.distr == 4 ? snapAsinhY : snapNumY));
          sc.auto = fnOrSelf(rangeIsArr ? false : sc.auto);
          sc.clamp = fnOrSelf(sc.clamp || clampScale);
          sc._min = sc._max = null;
        }
      }
    }
    initScale("x");
    initScale("y");
    if (mode == 1) {
      series.forEach((s) => {
        initScale(s.scale);
      });
    }
    axes.forEach((a) => {
      initScale(a.scale);
    });
    for (let k in opts.scales)
      initScale(k);
    const scaleX = scales[xScaleKey];
    const xScaleDistr = scaleX.distr;
    let valToPosX, valToPosY;
    if (scaleX.ori == 0) {
      addClass(root, ORI_HZ);
      valToPosX = getHPos;
      valToPosY = getVPos;
    } else {
      addClass(root, ORI_VT);
      valToPosX = getVPos;
      valToPosY = getHPos;
    }
    const pendScales = {};
    for (let k in scales) {
      let sc = scales[k];
      if (sc.min != null || sc.max != null) {
        pendScales[k] = { min: sc.min, max: sc.max };
        sc.min = sc.max = null;
      }
    }
    const _tzDate = opts.tzDate || ((ts) => new Date(round(ts / ms)));
    const _fmtDate = opts.fmtDate || fmtDate;
    const _timeAxisSplits = ms == 1 ? timeAxisSplitsMs(_tzDate) : timeAxisSplitsS(_tzDate);
    const _timeAxisVals = timeAxisVals(_tzDate, timeAxisStamps(ms == 1 ? _timeAxisStampsMs : _timeAxisStampsS, _fmtDate));
    const _timeSeriesVal = timeSeriesVal(_tzDate, timeSeriesStamp(_timeSeriesStamp, _fmtDate));
    const activeIdxs = [];
    const legend = self.legend = assign({}, legendOpts, opts.legend);
    const showLegend = legend.show;
    const markers = legend.markers;
    {
      legend.idxs = activeIdxs;
      markers.width = fnOrSelf(markers.width);
      markers.dash = fnOrSelf(markers.dash);
      markers.stroke = fnOrSelf(markers.stroke);
      markers.fill = fnOrSelf(markers.fill);
    }
    let legendEl;
    let legendRows = [];
    let legendCells = [];
    let legendCols;
    let multiValLegend = false;
    let NULL_LEGEND_VALUES = {};
    if (legend.live) {
      const getMultiVals = series[1] ? series[1].values : null;
      multiValLegend = getMultiVals != null;
      legendCols = multiValLegend ? getMultiVals(self, 1, 0) : { _: 0 };
      for (let k in legendCols)
        NULL_LEGEND_VALUES[k] = LEGEND_DISP;
    }
    if (showLegend) {
      legendEl = placeTag("table", LEGEND, root);
      legend.mount(self, legendEl);
      if (multiValLegend) {
        let head = placeTag("tr", LEGEND_THEAD, legendEl);
        placeTag("th", null, head);
        for (var key in legendCols)
          placeTag("th", LEGEND_LABEL, head).textContent = key;
      } else {
        addClass(legendEl, LEGEND_INLINE);
        legend.live && addClass(legendEl, LEGEND_LIVE);
      }
    }
    const son = { show: true };
    const soff = { show: false };
    function initLegendRow(s, i) {
      if (i == 0 && (multiValLegend || !legend.live || mode == 2))
        return nullNullTuple;
      let cells = [];
      let row = placeTag("tr", LEGEND_SERIES, legendEl, legendEl.childNodes[i]);
      addClass(row, s.class);
      if (!s.show)
        addClass(row, OFF);
      let label = placeTag("th", null, row);
      if (markers.show) {
        let indic = placeDiv(LEGEND_MARKER, label);
        if (i > 0) {
          let width = markers.width(self, i);
          if (width)
            indic.style.border = width + "px " + markers.dash(self, i) + " " + markers.stroke(self, i);
          indic.style.background = markers.fill(self, i);
        }
      }
      let text = placeDiv(LEGEND_LABEL, label);
      text.textContent = s.label;
      if (i > 0) {
        if (!markers.show)
          text.style.color = s.width > 0 ? markers.stroke(self, i) : markers.fill(self, i);
        onMouse("click", label, (e) => {
          if (cursor._lock)
            return;
          let seriesIdx = series.indexOf(s);
          if ((e.ctrlKey || e.metaKey) != legend.isolate) {
            let isolate = series.some((s2, i2) => i2 > 0 && i2 != seriesIdx && s2.show);
            series.forEach((s2, i2) => {
              i2 > 0 && setSeries(i2, isolate ? i2 == seriesIdx ? son : soff : son, true, syncOpts.setSeries);
            });
          } else
            setSeries(seriesIdx, { show: !s.show }, true, syncOpts.setSeries);
        });
        if (cursorFocus) {
          onMouse(mouseenter, label, (e) => {
            if (cursor._lock)
              return;
            setSeries(series.indexOf(s), FOCUS_TRUE, true, syncOpts.setSeries);
          });
        }
      }
      for (var key2 in legendCols) {
        let v = placeTag("td", LEGEND_VALUE, row);
        v.textContent = "--";
        cells.push(v);
      }
      return [row, cells];
    }
    const mouseListeners = /* @__PURE__ */ new Map();
    function onMouse(ev, targ, fn) {
      const targListeners = mouseListeners.get(targ) || {};
      const listener = cursor.bind[ev](self, targ, fn);
      if (listener) {
        on(ev, targ, targListeners[ev] = listener);
        mouseListeners.set(targ, targListeners);
      }
    }
    function offMouse(ev, targ, fn) {
      const targListeners = mouseListeners.get(targ) || {};
      for (let k in targListeners) {
        if (ev == null || k == ev) {
          off(k, targ, targListeners[k]);
          delete targListeners[k];
        }
      }
      if (ev == null)
        mouseListeners.delete(targ);
    }
    let fullWidCss = 0;
    let fullHgtCss = 0;
    let plotWidCss = 0;
    let plotHgtCss = 0;
    let plotLftCss = 0;
    let plotTopCss = 0;
    let plotLft = 0;
    let plotTop = 0;
    let plotWid = 0;
    let plotHgt = 0;
    self.bbox = {};
    let shouldSetScales = false;
    let shouldSetSize = false;
    let shouldConvergeSize = false;
    let shouldSetCursor = false;
    let shouldSetSelect = false;
    let shouldSetLegend = false;
    function _setSize(width, height, force) {
      if (force || (width != self.width || height != self.height))
        calcSize(width, height);
      resetYSeries(false);
      shouldConvergeSize = true;
      shouldSetSize = true;
      if (cursor.left >= 0)
        shouldSetCursor = shouldSetLegend = true;
      commit();
    }
    function calcSize(width, height) {
      self.width = fullWidCss = plotWidCss = width;
      self.height = fullHgtCss = plotHgtCss = height;
      plotLftCss = plotTopCss = 0;
      calcPlotRect();
      calcAxesRects();
      let bb = self.bbox;
      plotLft = bb.left = incrRound(plotLftCss * pxRatio, 0.5);
      plotTop = bb.top = incrRound(plotTopCss * pxRatio, 0.5);
      plotWid = bb.width = incrRound(plotWidCss * pxRatio, 0.5);
      plotHgt = bb.height = incrRound(plotHgtCss * pxRatio, 0.5);
    }
    const CYCLE_LIMIT = 3;
    function convergeSize() {
      let converged = false;
      let cycleNum = 0;
      while (!converged) {
        cycleNum++;
        let axesConverged = axesCalc(cycleNum);
        let paddingConverged = paddingCalc(cycleNum);
        converged = cycleNum == CYCLE_LIMIT || axesConverged && paddingConverged;
        if (!converged) {
          calcSize(self.width, self.height);
          shouldSetSize = true;
        }
      }
    }
    function setSize({ width, height }) {
      _setSize(width, height);
    }
    self.setSize = setSize;
    function calcPlotRect() {
      let hasTopAxis = false;
      let hasBtmAxis = false;
      let hasRgtAxis = false;
      let hasLftAxis = false;
      axes.forEach((axis, i) => {
        if (axis.show && axis._show) {
          let { side, _size } = axis;
          let isVt = side % 2;
          let labelSize = axis.label != null ? axis.labelSize : 0;
          let fullSize = _size + labelSize;
          if (fullSize > 0) {
            if (isVt) {
              plotWidCss -= fullSize;
              if (side == 3) {
                plotLftCss += fullSize;
                hasLftAxis = true;
              } else
                hasRgtAxis = true;
            } else {
              plotHgtCss -= fullSize;
              if (side == 0) {
                plotTopCss += fullSize;
                hasTopAxis = true;
              } else
                hasBtmAxis = true;
            }
          }
        }
      });
      sidesWithAxes[0] = hasTopAxis;
      sidesWithAxes[1] = hasRgtAxis;
      sidesWithAxes[2] = hasBtmAxis;
      sidesWithAxes[3] = hasLftAxis;
      plotWidCss -= _padding[1] + _padding[3];
      plotLftCss += _padding[3];
      plotHgtCss -= _padding[2] + _padding[0];
      plotTopCss += _padding[0];
    }
    function calcAxesRects() {
      let off1 = plotLftCss + plotWidCss;
      let off2 = plotTopCss + plotHgtCss;
      let off3 = plotLftCss;
      let off0 = plotTopCss;
      function incrOffset(side, size) {
        switch (side) {
          case 1:
            off1 += size;
            return off1 - size;
          case 2:
            off2 += size;
            return off2 - size;
          case 3:
            off3 -= size;
            return off3 + size;
          case 0:
            off0 -= size;
            return off0 + size;
        }
      }
      axes.forEach((axis, i) => {
        if (axis.show && axis._show) {
          let side = axis.side;
          axis._pos = incrOffset(side, axis._size);
          if (axis.label != null)
            axis._lpos = incrOffset(side, axis.labelSize);
        }
      });
    }
    const cursor = self.cursor = assign({}, cursorOpts, { drag: { y: mode == 2 } }, opts.cursor);
    {
      cursor.idxs = activeIdxs;
      cursor._lock = false;
      let points2 = cursor.points;
      points2.show = fnOrSelf(points2.show);
      points2.size = fnOrSelf(points2.size);
      points2.stroke = fnOrSelf(points2.stroke);
      points2.width = fnOrSelf(points2.width);
      points2.fill = fnOrSelf(points2.fill);
    }
    const focus = self.focus = assign({}, opts.focus || { alpha: 0.3 }, cursor.focus);
    if (focus.bias != 0)
      focus.prox = 1e5;
    const cursorFocus = focus.prox >= 0;
    let cursorPts = [null];
    function initCursorPt(s, si) {
      if (si > 0) {
        let pt = cursor.points.show(self, si);
        if (pt) {
          addClass(pt, CURSOR_PT);
          addClass(pt, s.class);
          elTrans(pt, -10, -10, plotWidCss, plotHgtCss);
          over.insertBefore(pt, cursorPts[si]);
          return pt;
        }
      }
    }
    function initSeries(s, i) {
      if (mode == 1 || i > 0) {
        let isTime = mode == 1 && scales[s.scale].time;
        let sv = s.value;
        s.value = isTime ? isStr(sv) ? timeSeriesVal(_tzDate, timeSeriesStamp(sv, _fmtDate)) : sv || _timeSeriesVal : sv || numSeriesVal;
        s.label = s.label || (isTime ? timeSeriesLabel : numSeriesLabel);
      }
      if (i > 0) {
        s.width = s.width == null ? 1 : s.width;
        s.paths = s.paths || linearPath || retNull;
        s.fillTo = fnOrSelf(s.fillTo || seriesFillTo);
        s.pxAlign = +ifNull(s.pxAlign, pxAlign);
        s.pxRound = pxRoundGen(s.pxAlign);
        s.stroke = fnOrSelf(s.stroke || null);
        s.fill = fnOrSelf(s.fill || null);
        s._stroke = s._fill = s._paths = s._focus = null;
        let _ptDia = ptDia(max(1, s.width), 1);
        let points2 = s.points = assign({}, {
          size: _ptDia,
          width: max(1, _ptDia * 0.2),
          stroke: s.stroke,
          space: _ptDia * 2,
          paths: pointsPath,
          _stroke: null,
          _fill: null
        }, s.points);
        points2.show = fnOrSelf(points2.show);
        points2.filter = fnOrSelf(points2.filter);
        points2.fill = fnOrSelf(points2.fill);
        points2.stroke = fnOrSelf(points2.stroke);
        points2.paths = fnOrSelf(points2.paths);
        points2.pxAlign = s.pxAlign;
      }
      if (showLegend) {
        let rowCells = initLegendRow(s, i);
        legendRows.splice(i, 0, rowCells[0]);
        legendCells.splice(i, 0, rowCells[1]);
        legend.values.push(null);
      }
      if (cursor.show) {
        activeIdxs.splice(i, 0, null);
        let pt = initCursorPt(s, i);
        pt && cursorPts.splice(i, 0, pt);
      }
      fire("addSeries", i);
    }
    function addSeries(opts2, si) {
      si = si == null ? series.length : si;
      opts2 = mode == 1 ? setDefault(opts2, si, xSeriesOpts, ySeriesOpts) : setDefault(opts2, si, null, xySeriesOpts);
      series.splice(si, 0, opts2);
      initSeries(series[si], si);
    }
    self.addSeries = addSeries;
    function delSeries(i) {
      series.splice(i, 1);
      if (showLegend) {
        legend.values.splice(i, 1);
        legendCells.splice(i, 1);
        let tr = legendRows.splice(i, 1)[0];
        offMouse(null, tr.firstChild);
        tr.remove();
      }
      if (cursor.show) {
        activeIdxs.splice(i, 1);
        cursorPts.length > 1 && cursorPts.splice(i, 1)[0].remove();
      }
      fire("delSeries", i);
    }
    self.delSeries = delSeries;
    const sidesWithAxes = [false, false, false, false];
    function initAxis(axis, i) {
      axis._show = axis.show;
      if (axis.show) {
        let isVt = axis.side % 2;
        let sc = scales[axis.scale];
        if (sc == null) {
          axis.scale = isVt ? series[1].scale : xScaleKey;
          sc = scales[axis.scale];
        }
        let isTime = sc.time;
        axis.size = fnOrSelf(axis.size);
        axis.space = fnOrSelf(axis.space);
        axis.rotate = fnOrSelf(axis.rotate);
        axis.incrs = fnOrSelf(axis.incrs || (sc.distr == 2 ? wholeIncrs : isTime ? ms == 1 ? timeIncrsMs : timeIncrsS : numIncrs));
        axis.splits = fnOrSelf(axis.splits || (isTime && sc.distr == 1 ? _timeAxisSplits : sc.distr == 3 ? logAxisSplits : sc.distr == 4 ? asinhAxisSplits : numAxisSplits));
        axis.stroke = fnOrSelf(axis.stroke);
        axis.grid.stroke = fnOrSelf(axis.grid.stroke);
        axis.ticks.stroke = fnOrSelf(axis.ticks.stroke);
        axis.border.stroke = fnOrSelf(axis.border.stroke);
        let av = axis.values;
        axis.values = // static array of tick values
        isArr(av) && !isArr(av[0]) ? fnOrSelf(av) : (
          // temporal
          isTime ? (
            // config array of fmtDate string tpls
            isArr(av) ? timeAxisVals(_tzDate, timeAxisStamps(av, _fmtDate)) : (
              // fmtDate string tpl
              isStr(av) ? timeAxisVal(_tzDate, av) : av || _timeAxisVals
            )
          ) : av || numAxisVals
        );
        axis.filter = fnOrSelf(axis.filter || (sc.distr >= 3 && sc.log == 10 ? log10AxisValsFilt : retArg1));
        axis.font = pxRatioFont(axis.font);
        axis.labelFont = pxRatioFont(axis.labelFont);
        axis._size = axis.size(self, null, i, 0);
        axis._space = axis._rotate = axis._incrs = axis._found = // foundIncrSpace
        axis._splits = axis._values = null;
        if (axis._size > 0) {
          sidesWithAxes[i] = true;
          axis._el = placeDiv(AXIS, wrap);
        }
      }
    }
    function autoPadSide(self2, side, sidesWithAxes2, cycleNum) {
      let [hasTopAxis, hasRgtAxis, hasBtmAxis, hasLftAxis] = sidesWithAxes2;
      let ori = side % 2;
      let size = 0;
      if (ori == 0 && (hasLftAxis || hasRgtAxis))
        size = side == 0 && !hasTopAxis || side == 2 && !hasBtmAxis ? round(xAxisOpts.size / 3) : 0;
      if (ori == 1 && (hasTopAxis || hasBtmAxis))
        size = side == 1 && !hasRgtAxis || side == 3 && !hasLftAxis ? round(yAxisOpts.size / 2) : 0;
      return size;
    }
    const padding = self.padding = (opts.padding || [autoPadSide, autoPadSide, autoPadSide, autoPadSide]).map((p) => fnOrSelf(ifNull(p, autoPadSide)));
    const _padding = self._padding = padding.map((p, i) => p(self, i, sidesWithAxes, 0));
    let dataLen;
    let i0 = null;
    let i1 = null;
    const idxs = mode == 1 ? series[0].idxs : null;
    let data0 = null;
    let viaAutoScaleX = false;
    function setData(_data, _resetScales) {
      data = _data == null ? [] : copy(_data, fastIsObj);
      if (mode == 2) {
        dataLen = 0;
        for (let i = 1; i < series.length; i++)
          dataLen += data[i][0].length;
        self.data = data = _data;
      } else {
        if (data[0] == null)
          data[0] = [];
        self.data = data.slice();
        data0 = data[0];
        dataLen = data0.length;
        if (xScaleDistr == 2) {
          data[0] = Array(dataLen);
          for (let i = 0; i < dataLen; i++)
            data[0][i] = i;
        }
      }
      self._data = data;
      resetYSeries(true);
      fire("setData");
      if (xScaleDistr == 2) {
        shouldConvergeSize = true;
      }
      if (_resetScales !== false) {
        let xsc = scaleX;
        if (xsc.auto(self, viaAutoScaleX))
          autoScaleX();
        else
          _setScale(xScaleKey, xsc.min, xsc.max);
        shouldSetCursor = cursor.left >= 0;
        shouldSetLegend = true;
        commit();
      }
    }
    self.setData = setData;
    function autoScaleX() {
      viaAutoScaleX = true;
      let _min, _max;
      if (mode == 1) {
        if (dataLen > 0) {
          i0 = idxs[0] = 0;
          i1 = idxs[1] = dataLen - 1;
          _min = data[0][i0];
          _max = data[0][i1];
          if (xScaleDistr == 2) {
            _min = i0;
            _max = i1;
          } else if (dataLen == 1) {
            if (xScaleDistr == 3)
              [_min, _max] = rangeLog(_min, _min, scaleX.log, false);
            else if (xScaleDistr == 4)
              [_min, _max] = rangeAsinh(_min, _min, scaleX.log, false);
            else if (scaleX.time)
              _max = _min + round(86400 / ms);
            else
              [_min, _max] = rangeNum(_min, _max, rangePad, true);
          }
        } else {
          i0 = idxs[0] = _min = null;
          i1 = idxs[1] = _max = null;
        }
      }
      _setScale(xScaleKey, _min, _max);
    }
    let ctxStroke, ctxFill, ctxWidth, ctxDash, ctxJoin, ctxCap, ctxFont, ctxAlign, ctxBaseline;
    let ctxAlpha;
    function setCtxStyle(stroke, width, dash, cap, fill, join2) {
      stroke ?? (stroke = transparent);
      dash ?? (dash = EMPTY_ARR);
      cap ?? (cap = "butt");
      fill ?? (fill = transparent);
      join2 ?? (join2 = "round");
      if (stroke != ctxStroke)
        ctx.strokeStyle = ctxStroke = stroke;
      if (fill != ctxFill)
        ctx.fillStyle = ctxFill = fill;
      if (width != ctxWidth)
        ctx.lineWidth = ctxWidth = width;
      if (join2 != ctxJoin)
        ctx.lineJoin = ctxJoin = join2;
      if (cap != ctxCap)
        ctx.lineCap = ctxCap = cap;
      if (dash != ctxDash)
        ctx.setLineDash(ctxDash = dash);
    }
    function setFontStyle(font2, fill, align, baseline) {
      if (fill != ctxFill)
        ctx.fillStyle = ctxFill = fill;
      if (font2 != ctxFont)
        ctx.font = ctxFont = font2;
      if (align != ctxAlign)
        ctx.textAlign = ctxAlign = align;
      if (baseline != ctxBaseline)
        ctx.textBaseline = ctxBaseline = baseline;
    }
    function accScale(wsc, psc, facet2, data2, sorted = 0) {
      if (data2.length > 0 && wsc.auto(self, viaAutoScaleX) && (psc == null || psc.min == null)) {
        let _i0 = ifNull(i0, 0);
        let _i1 = ifNull(i1, data2.length - 1);
        let minMax = facet2.min == null ? wsc.distr == 3 ? getMinMaxLog(data2, _i0, _i1) : getMinMax(data2, _i0, _i1, sorted) : [facet2.min, facet2.max];
        wsc.min = min(wsc.min, facet2.min = minMax[0]);
        wsc.max = max(wsc.max, facet2.max = minMax[1]);
      }
    }
    function setScales() {
      let wipScales = copy(scales, fastIsObj);
      for (let k in wipScales) {
        let wsc = wipScales[k];
        let psc = pendScales[k];
        if (psc != null && psc.min != null) {
          assign(wsc, psc);
          if (k == xScaleKey)
            resetYSeries(true);
        } else if (k != xScaleKey || mode == 2) {
          if (dataLen == 0 && wsc.from == null) {
            let minMax = wsc.range(self, null, null, k);
            wsc.min = minMax[0];
            wsc.max = minMax[1];
          } else {
            wsc.min = inf;
            wsc.max = -inf;
          }
        }
      }
      if (dataLen > 0) {
        series.forEach((s, i) => {
          if (mode == 1) {
            let k = s.scale;
            let wsc = wipScales[k];
            let psc = pendScales[k];
            if (i == 0) {
              let minMax = wsc.range(self, wsc.min, wsc.max, k);
              wsc.min = minMax[0];
              wsc.max = minMax[1];
              i0 = closestIdx(wsc.min, data[0]);
              i1 = closestIdx(wsc.max, data[0]);
              if (i1 - i0 > 1) {
                if (data[0][i0] < wsc.min)
                  i0++;
                if (data[0][i1] > wsc.max)
                  i1--;
              }
              s.min = data0[i0];
              s.max = data0[i1];
            } else if (s.show && s.auto)
              accScale(wsc, psc, s, data[i], s.sorted);
            s.idxs[0] = i0;
            s.idxs[1] = i1;
          } else {
            if (i > 0) {
              if (s.show && s.auto) {
                let [xFacet, yFacet] = s.facets;
                let xScaleKey2 = xFacet.scale;
                let yScaleKey = yFacet.scale;
                let [xData, yData] = data[i];
                accScale(wipScales[xScaleKey2], pendScales[xScaleKey2], xFacet, xData, xFacet.sorted);
                accScale(wipScales[yScaleKey], pendScales[yScaleKey], yFacet, yData, yFacet.sorted);
                s.min = yFacet.min;
                s.max = yFacet.max;
              }
            }
          }
        });
        for (let k in wipScales) {
          let wsc = wipScales[k];
          let psc = pendScales[k];
          if (wsc.from == null && (psc == null || psc.min == null)) {
            let minMax = wsc.range(
              self,
              wsc.min == inf ? null : wsc.min,
              wsc.max == -inf ? null : wsc.max,
              k
            );
            wsc.min = minMax[0];
            wsc.max = minMax[1];
          }
        }
      }
      for (let k in wipScales) {
        let wsc = wipScales[k];
        if (wsc.from != null) {
          let base = wipScales[wsc.from];
          if (base.min == null)
            wsc.min = wsc.max = null;
          else {
            let minMax = wsc.range(self, base.min, base.max, k);
            wsc.min = minMax[0];
            wsc.max = minMax[1];
          }
        }
      }
      let changed = {};
      let anyChanged = false;
      for (let k in wipScales) {
        let wsc = wipScales[k];
        let sc = scales[k];
        if (sc.min != wsc.min || sc.max != wsc.max) {
          sc.min = wsc.min;
          sc.max = wsc.max;
          let distr = sc.distr;
          sc._min = distr == 3 ? log10(sc.min) : distr == 4 ? asinh(sc.min, sc.asinh) : sc.min;
          sc._max = distr == 3 ? log10(sc.max) : distr == 4 ? asinh(sc.max, sc.asinh) : sc.max;
          changed[k] = anyChanged = true;
        }
      }
      if (anyChanged) {
        series.forEach((s, i) => {
          if (mode == 2) {
            if (i > 0 && changed.y)
              s._paths = null;
          } else {
            if (changed[s.scale])
              s._paths = null;
          }
        });
        for (let k in changed) {
          shouldConvergeSize = true;
          fire("setScale", k);
        }
        if (cursor.show && cursor.left >= 0)
          shouldSetCursor = shouldSetLegend = true;
      }
      for (let k in pendScales)
        pendScales[k] = null;
    }
    function getOuterIdxs(ydata) {
      let _i0 = clamp(i0 - 1, 0, dataLen - 1);
      let _i1 = clamp(i1 + 1, 0, dataLen - 1);
      while (ydata[_i0] == null && _i0 > 0)
        _i0--;
      while (ydata[_i1] == null && _i1 < dataLen - 1)
        _i1++;
      return [_i0, _i1];
    }
    function drawSeries() {
      if (dataLen > 0) {
        series.forEach((s, i) => {
          if (i > 0 && s.show && s._paths == null) {
            let _idxs = mode == 2 ? [0, data[i][0].length - 1] : getOuterIdxs(data[i]);
            s._paths = s.paths(self, i, _idxs[0], _idxs[1]);
          }
        });
        series.forEach((s, i) => {
          if (i > 0 && s.show) {
            if (ctxAlpha != s.alpha)
              ctx.globalAlpha = ctxAlpha = s.alpha;
            {
              cacheStrokeFill(i, false);
              s._paths && drawPath(i, false);
            }
            {
              cacheStrokeFill(i, true);
              let _gaps = s._paths ? s._paths.gaps : null;
              let show = s.points.show(self, i, i0, i1, _gaps);
              let idxs2 = s.points.filter(self, i, show, _gaps);
              if (show || idxs2) {
                s.points._paths = s.points.paths(self, i, i0, i1, idxs2);
                drawPath(i, true);
              }
            }
            if (ctxAlpha != 1)
              ctx.globalAlpha = ctxAlpha = 1;
            fire("drawSeries", i);
          }
        });
      }
    }
    function cacheStrokeFill(si, _points) {
      let s = _points ? series[si].points : series[si];
      s._stroke = s.stroke(self, si);
      s._fill = s.fill(self, si);
    }
    function drawPath(si, _points) {
      let s = _points ? series[si].points : series[si];
      let strokeStyle = s._stroke;
      let fillStyle = s._fill;
      let { stroke, fill, clip: gapsClip, flags } = s._paths;
      let boundsClip = null;
      let width = roundDec(s.width * pxRatio, 3);
      let offset = width % 2 / 2;
      if (_points && fillStyle == null)
        fillStyle = width > 0 ? "#fff" : strokeStyle;
      let _pxAlign = s.pxAlign == 1;
      _pxAlign && ctx.translate(offset, offset);
      if (!_points) {
        let lft = plotLft, top = plotTop, wid = plotWid, hgt = plotHgt;
        let halfWid = width * pxRatio / 2;
        if (s.min == 0)
          hgt += halfWid;
        if (s.max == 0) {
          top -= halfWid;
          hgt += halfWid;
        }
        boundsClip = new Path2D();
        boundsClip.rect(lft, top, wid, hgt);
      }
      if (_points)
        strokeFill(strokeStyle, width, s.dash, s.cap, fillStyle, stroke, fill, flags, gapsClip);
      else
        fillStroke(si, strokeStyle, width, s.dash, s.cap, fillStyle, stroke, fill, flags, boundsClip, gapsClip);
      _pxAlign && ctx.translate(-offset, -offset);
    }
    function fillStroke(si, strokeStyle, lineWidth, lineDash, lineCap, fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip) {
      let didStrokeFill = false;
      bands.forEach((b, bi) => {
        if (b.series[0] == si) {
          let lowerEdge = series[b.series[1]];
          let lowerData = data[b.series[1]];
          let bandClip = (lowerEdge._paths || EMPTY_OBJ).band;
          if (isArr(bandClip))
            bandClip = b.dir == 1 ? bandClip[0] : bandClip[1];
          let gapsClip2;
          let _fillStyle = null;
          if (lowerEdge.show && bandClip && hasData(lowerData, i0, i1)) {
            _fillStyle = b.fill(self, bi) || fillStyle;
            gapsClip2 = lowerEdge._paths.clip;
          } else
            bandClip = null;
          strokeFill(strokeStyle, lineWidth, lineDash, lineCap, _fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip, gapsClip2, bandClip);
          didStrokeFill = true;
        }
      });
      if (!didStrokeFill)
        strokeFill(strokeStyle, lineWidth, lineDash, lineCap, fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip);
    }
    const CLIP_FILL_STROKE = BAND_CLIP_FILL | BAND_CLIP_STROKE;
    function strokeFill(strokeStyle, lineWidth, lineDash, lineCap, fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip, gapsClip2, bandClip) {
      setCtxStyle(strokeStyle, lineWidth, lineDash, lineCap, fillStyle);
      if (boundsClip || gapsClip || bandClip) {
        ctx.save();
        boundsClip && ctx.clip(boundsClip);
        gapsClip && ctx.clip(gapsClip);
      }
      if (bandClip) {
        if ((flags & CLIP_FILL_STROKE) == CLIP_FILL_STROKE) {
          ctx.clip(bandClip);
          gapsClip2 && ctx.clip(gapsClip2);
          doFill(fillStyle, fillPath);
          doStroke(strokeStyle, strokePath, lineWidth);
        } else if (flags & BAND_CLIP_STROKE) {
          doFill(fillStyle, fillPath);
          ctx.clip(bandClip);
          doStroke(strokeStyle, strokePath, lineWidth);
        } else if (flags & BAND_CLIP_FILL) {
          ctx.save();
          ctx.clip(bandClip);
          gapsClip2 && ctx.clip(gapsClip2);
          doFill(fillStyle, fillPath);
          ctx.restore();
          doStroke(strokeStyle, strokePath, lineWidth);
        }
      } else {
        doFill(fillStyle, fillPath);
        doStroke(strokeStyle, strokePath, lineWidth);
      }
      if (boundsClip || gapsClip || bandClip)
        ctx.restore();
    }
    function doStroke(strokeStyle, strokePath, lineWidth) {
      if (lineWidth > 0) {
        if (strokePath instanceof Map) {
          strokePath.forEach((strokePath2, strokeStyle2) => {
            ctx.strokeStyle = ctxStroke = strokeStyle2;
            ctx.stroke(strokePath2);
          });
        } else
          strokePath != null && strokeStyle && ctx.stroke(strokePath);
      }
    }
    function doFill(fillStyle, fillPath) {
      if (fillPath instanceof Map) {
        fillPath.forEach((fillPath2, fillStyle2) => {
          ctx.fillStyle = ctxFill = fillStyle2;
          ctx.fill(fillPath2);
        });
      } else
        fillPath != null && fillStyle && ctx.fill(fillPath);
    }
    function getIncrSpace(axisIdx, min2, max2, fullDim) {
      let axis = axes[axisIdx];
      let incrSpace;
      if (fullDim <= 0)
        incrSpace = [0, 0];
      else {
        let minSpace = axis._space = axis.space(self, axisIdx, min2, max2, fullDim);
        let incrs = axis._incrs = axis.incrs(self, axisIdx, min2, max2, fullDim, minSpace);
        incrSpace = findIncr(min2, max2, incrs, fullDim, minSpace);
      }
      return axis._found = incrSpace;
    }
    function drawOrthoLines(offs, filts, ori, side, pos0, len, width, stroke, dash, cap) {
      let offset = width % 2 / 2;
      pxAlign == 1 && ctx.translate(offset, offset);
      setCtxStyle(stroke, width, dash, cap, stroke);
      ctx.beginPath();
      let x0, y0, x1, y1, pos1 = pos0 + (side == 0 || side == 3 ? -len : len);
      if (ori == 0) {
        y0 = pos0;
        y1 = pos1;
      } else {
        x0 = pos0;
        x1 = pos1;
      }
      for (let i = 0; i < offs.length; i++) {
        if (filts[i] != null) {
          if (ori == 0)
            x0 = x1 = offs[i];
          else
            y0 = y1 = offs[i];
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
        }
      }
      ctx.stroke();
      pxAlign == 1 && ctx.translate(-offset, -offset);
    }
    function axesCalc(cycleNum) {
      let converged = true;
      axes.forEach((axis, i) => {
        if (!axis.show)
          return;
        let scale2 = scales[axis.scale];
        if (scale2.min == null) {
          if (axis._show) {
            converged = false;
            axis._show = false;
            resetYSeries(false);
          }
          return;
        } else {
          if (!axis._show) {
            converged = false;
            axis._show = true;
            resetYSeries(false);
          }
        }
        let side = axis.side;
        let ori = side % 2;
        let { min: min2, max: max2 } = scale2;
        let [_incr, _space] = getIncrSpace(i, min2, max2, ori == 0 ? plotWidCss : plotHgtCss);
        if (_space == 0)
          return;
        let forceMin = scale2.distr == 2;
        let _splits = axis._splits = axis.splits(self, i, min2, max2, _incr, _space, forceMin);
        let splits = scale2.distr == 2 ? _splits.map((i2) => data0[i2]) : _splits;
        let incr = scale2.distr == 2 ? data0[_splits[1]] - data0[_splits[0]] : _incr;
        let values = axis._values = axis.values(self, axis.filter(self, splits, i, _space, incr), i, _space, incr);
        axis._rotate = side == 2 ? axis.rotate(self, values, i, _space) : 0;
        let oldSize = axis._size;
        axis._size = ceil(axis.size(self, values, i, cycleNum));
        if (oldSize != null && axis._size != oldSize)
          converged = false;
      });
      return converged;
    }
    function paddingCalc(cycleNum) {
      let converged = true;
      padding.forEach((p, i) => {
        let _p = p(self, i, sidesWithAxes, cycleNum);
        if (_p != _padding[i])
          converged = false;
        _padding[i] = _p;
      });
      return converged;
    }
    function drawAxesGrid() {
      for (let i = 0; i < axes.length; i++) {
        let axis = axes[i];
        if (!axis.show || !axis._show)
          continue;
        let side = axis.side;
        let ori = side % 2;
        let x, y;
        let fillStyle = axis.stroke(self, i);
        let shiftDir = side == 0 || side == 3 ? -1 : 1;
        if (axis.label) {
          let shiftAmt2 = axis.labelGap * shiftDir;
          let baseLpos = round((axis._lpos + shiftAmt2) * pxRatio);
          setFontStyle(axis.labelFont[0], fillStyle, "center", side == 2 ? TOP : BOTTOM);
          ctx.save();
          if (ori == 1) {
            x = y = 0;
            ctx.translate(
              baseLpos,
              round(plotTop + plotHgt / 2)
            );
            ctx.rotate((side == 3 ? -PI : PI) / 2);
          } else {
            x = round(plotLft + plotWid / 2);
            y = baseLpos;
          }
          ctx.fillText(axis.label, x, y);
          ctx.restore();
        }
        let [_incr, _space] = axis._found;
        if (_space == 0)
          continue;
        let scale2 = scales[axis.scale];
        let plotDim = ori == 0 ? plotWid : plotHgt;
        let plotOff = ori == 0 ? plotLft : plotTop;
        let axisGap = round(axis.gap * pxRatio);
        let _splits = axis._splits;
        let splits = scale2.distr == 2 ? _splits.map((i2) => data0[i2]) : _splits;
        let incr = scale2.distr == 2 ? data0[_splits[1]] - data0[_splits[0]] : _incr;
        let ticks2 = axis.ticks;
        let border2 = axis.border;
        let tickSize = ticks2.show ? round(ticks2.size * pxRatio) : 0;
        let angle = axis._rotate * -PI / 180;
        let basePos = pxRound(axis._pos * pxRatio);
        let shiftAmt = (tickSize + axisGap) * shiftDir;
        let finalPos = basePos + shiftAmt;
        y = ori == 0 ? finalPos : 0;
        x = ori == 1 ? finalPos : 0;
        let font2 = axis.font[0];
        let textAlign = axis.align == 1 ? LEFT : axis.align == 2 ? RIGHT : angle > 0 ? LEFT : angle < 0 ? RIGHT : ori == 0 ? "center" : side == 3 ? RIGHT : LEFT;
        let textBaseline = angle || ori == 1 ? "middle" : side == 2 ? TOP : BOTTOM;
        setFontStyle(font2, fillStyle, textAlign, textBaseline);
        let lineHeight = axis.font[1] * lineMult;
        let canOffs = _splits.map((val) => pxRound(getPos(val, scale2, plotDim, plotOff)));
        let _values = axis._values;
        for (let i2 = 0; i2 < _values.length; i2++) {
          let val = _values[i2];
          if (val != null) {
            if (ori == 0)
              x = canOffs[i2];
            else
              y = canOffs[i2];
            val = "" + val;
            let _parts = val.indexOf("\n") == -1 ? [val] : val.split(/\n/gm);
            for (let j = 0; j < _parts.length; j++) {
              let text = _parts[j];
              if (angle) {
                ctx.save();
                ctx.translate(x, y + j * lineHeight);
                ctx.rotate(angle);
                ctx.fillText(text, 0, 0);
                ctx.restore();
              } else
                ctx.fillText(text, x, y + j * lineHeight);
            }
          }
        }
        if (ticks2.show) {
          drawOrthoLines(
            canOffs,
            ticks2.filter(self, splits, i, _space, incr),
            ori,
            side,
            basePos,
            tickSize,
            roundDec(ticks2.width * pxRatio, 3),
            ticks2.stroke(self, i),
            ticks2.dash,
            ticks2.cap
          );
        }
        let grid2 = axis.grid;
        if (grid2.show) {
          drawOrthoLines(
            canOffs,
            grid2.filter(self, splits, i, _space, incr),
            ori,
            ori == 0 ? 2 : 1,
            ori == 0 ? plotTop : plotLft,
            ori == 0 ? plotHgt : plotWid,
            roundDec(grid2.width * pxRatio, 3),
            grid2.stroke(self, i),
            grid2.dash,
            grid2.cap
          );
        }
        if (border2.show) {
          drawOrthoLines(
            [basePos],
            [1],
            ori == 0 ? 1 : 0,
            ori == 0 ? 1 : 2,
            ori == 1 ? plotTop : plotLft,
            ori == 1 ? plotHgt : plotWid,
            roundDec(border2.width * pxRatio, 3),
            border2.stroke(self, i),
            border2.dash,
            border2.cap
          );
        }
      }
      fire("drawAxes");
    }
    function resetYSeries(minMax) {
      series.forEach((s, i) => {
        if (i > 0) {
          s._paths = null;
          if (minMax) {
            if (mode == 1) {
              s.min = null;
              s.max = null;
            } else {
              s.facets.forEach((f) => {
                f.min = null;
                f.max = null;
              });
            }
          }
        }
      });
    }
    let queuedCommit = false;
    function commit() {
      if (!queuedCommit) {
        microTask(_commit);
        queuedCommit = true;
      }
    }
    function _commit() {
      if (shouldSetScales) {
        setScales();
        shouldSetScales = false;
      }
      if (shouldConvergeSize) {
        convergeSize();
        shouldConvergeSize = false;
      }
      if (shouldSetSize) {
        setStylePx(under, LEFT, plotLftCss);
        setStylePx(under, TOP, plotTopCss);
        setStylePx(under, WIDTH, plotWidCss);
        setStylePx(under, HEIGHT, plotHgtCss);
        setStylePx(over, LEFT, plotLftCss);
        setStylePx(over, TOP, plotTopCss);
        setStylePx(over, WIDTH, plotWidCss);
        setStylePx(over, HEIGHT, plotHgtCss);
        setStylePx(wrap, WIDTH, fullWidCss);
        setStylePx(wrap, HEIGHT, fullHgtCss);
        can.width = round(fullWidCss * pxRatio);
        can.height = round(fullHgtCss * pxRatio);
        axes.forEach(({ _el, _show, _size, _pos, side }) => {
          if (_el != null) {
            if (_show) {
              let posOffset = side === 3 || side === 0 ? _size : 0;
              let isVt = side % 2 == 1;
              setStylePx(_el, isVt ? "left" : "top", _pos - posOffset);
              setStylePx(_el, isVt ? "width" : "height", _size);
              setStylePx(_el, isVt ? "top" : "left", isVt ? plotTopCss : plotLftCss);
              setStylePx(_el, isVt ? "height" : "width", isVt ? plotHgtCss : plotWidCss);
              remClass(_el, OFF);
            } else
              addClass(_el, OFF);
          }
        });
        ctxStroke = ctxFill = ctxWidth = ctxJoin = ctxCap = ctxFont = ctxAlign = ctxBaseline = ctxDash = null;
        ctxAlpha = 1;
        syncRect(true);
        fire("setSize");
        shouldSetSize = false;
      }
      if (fullWidCss > 0 && fullHgtCss > 0) {
        ctx.clearRect(0, 0, can.width, can.height);
        fire("drawClear");
        drawOrder.forEach((fn) => fn());
        fire("draw");
      }
      if (select.show && shouldSetSelect) {
        setSelect(select);
        shouldSetSelect = false;
      }
      if (cursor.show && shouldSetCursor) {
        updateCursor(null, true, false);
        shouldSetCursor = false;
      }
      if (legend.show && legend.live && shouldSetLegend) {
        setLegend();
        shouldSetLegend = false;
      }
      if (!ready) {
        ready = true;
        self.status = 1;
        fire("ready");
      }
      viaAutoScaleX = false;
      queuedCommit = false;
    }
    self.redraw = (rebuildPaths, recalcAxes) => {
      shouldConvergeSize = recalcAxes || false;
      if (rebuildPaths !== false)
        _setScale(xScaleKey, scaleX.min, scaleX.max);
      else
        commit();
    };
    function setScale(key2, opts2) {
      let sc = scales[key2];
      if (sc.from == null) {
        if (dataLen == 0) {
          let minMax = sc.range(self, opts2.min, opts2.max, key2);
          opts2.min = minMax[0];
          opts2.max = minMax[1];
        }
        if (opts2.min > opts2.max) {
          let _min = opts2.min;
          opts2.min = opts2.max;
          opts2.max = _min;
        }
        if (dataLen > 1 && opts2.min != null && opts2.max != null && opts2.max - opts2.min < 1e-16)
          return;
        if (key2 == xScaleKey) {
          if (sc.distr == 2 && dataLen > 0) {
            opts2.min = closestIdx(opts2.min, data[0]);
            opts2.max = closestIdx(opts2.max, data[0]);
            if (opts2.min == opts2.max)
              opts2.max++;
          }
        }
        pendScales[key2] = opts2;
        shouldSetScales = true;
        commit();
      }
    }
    self.setScale = setScale;
    let xCursor;
    let yCursor;
    let vCursor;
    let hCursor;
    let rawMouseLeft0;
    let rawMouseTop0;
    let mouseLeft0;
    let mouseTop0;
    let rawMouseLeft1;
    let rawMouseTop1;
    let mouseLeft1;
    let mouseTop1;
    let dragging = false;
    const drag = cursor.drag;
    let dragX = drag.x;
    let dragY = drag.y;
    if (cursor.show) {
      if (cursor.x)
        xCursor = placeDiv(CURSOR_X, over);
      if (cursor.y)
        yCursor = placeDiv(CURSOR_Y, over);
      if (scaleX.ori == 0) {
        vCursor = xCursor;
        hCursor = yCursor;
      } else {
        vCursor = yCursor;
        hCursor = xCursor;
      }
      mouseLeft1 = cursor.left;
      mouseTop1 = cursor.top;
    }
    const select = self.select = assign({
      show: true,
      over: true,
      left: 0,
      width: 0,
      top: 0,
      height: 0
    }, opts.select);
    const selectDiv = select.show ? placeDiv(SELECT, select.over ? over : under) : null;
    function setSelect(opts2, _fire) {
      if (select.show) {
        for (let prop in opts2) {
          select[prop] = opts2[prop];
          if (prop in _hideProps)
            setStylePx(selectDiv, prop, opts2[prop]);
        }
        _fire !== false && fire("setSelect");
      }
    }
    self.setSelect = setSelect;
    function toggleDOM(i, onOff) {
      let s = series[i];
      let label = showLegend ? legendRows[i] : null;
      if (s.show)
        label && remClass(label, OFF);
      else {
        label && addClass(label, OFF);
        cursorPts.length > 1 && elTrans(cursorPts[i], -10, -10, plotWidCss, plotHgtCss);
      }
    }
    function _setScale(key2, min2, max2) {
      setScale(key2, { min: min2, max: max2 });
    }
    function setSeries(i, opts2, _fire, _pub) {
      if (opts2.focus != null)
        setFocus(i);
      if (opts2.show != null) {
        series.forEach((s, si) => {
          if (si > 0 && (i == si || i == null)) {
            s.show = opts2.show;
            toggleDOM(si, opts2.show);
            _setScale(mode == 2 ? s.facets[1].scale : s.scale, null, null);
            commit();
          }
        });
      }
      _fire !== false && fire("setSeries", i, opts2);
      _pub && pubSync("setSeries", self, i, opts2);
    }
    self.setSeries = setSeries;
    function setBand(bi, opts2) {
      assign(bands[bi], opts2);
    }
    function addBand(opts2, bi) {
      opts2.fill = fnOrSelf(opts2.fill || null);
      opts2.dir = ifNull(opts2.dir, -1);
      bi = bi == null ? bands.length : bi;
      bands.splice(bi, 0, opts2);
    }
    function delBand(bi) {
      if (bi == null)
        bands.length = 0;
      else
        bands.splice(bi, 1);
    }
    self.addBand = addBand;
    self.setBand = setBand;
    self.delBand = delBand;
    function setAlpha(i, value) {
      series[i].alpha = value;
      if (cursor.show && cursorPts[i])
        cursorPts[i].style.opacity = value;
      if (showLegend && legendRows[i])
        legendRows[i].style.opacity = value;
    }
    let closestDist;
    let closestSeries;
    let focusedSeries;
    const FOCUS_TRUE = { focus: true };
    function setFocus(i) {
      if (i != focusedSeries) {
        let allFocused = i == null;
        let _setAlpha = focus.alpha != 1;
        series.forEach((s, i2) => {
          let isFocused = allFocused || i2 == 0 || i2 == i;
          s._focus = allFocused ? null : isFocused;
          _setAlpha && setAlpha(i2, isFocused ? 1 : focus.alpha);
        });
        focusedSeries = i;
        _setAlpha && commit();
      }
    }
    if (showLegend && cursorFocus) {
      on(mouseleave, legendEl, (e) => {
        if (cursor._lock)
          return;
        if (focusedSeries != null)
          setSeries(null, FOCUS_TRUE, true, syncOpts.setSeries);
      });
    }
    function posToVal(pos, scale2, can2) {
      let sc = scales[scale2];
      if (can2)
        pos = pos / pxRatio - (sc.ori == 1 ? plotTopCss : plotLftCss);
      let dim = plotWidCss;
      if (sc.ori == 1) {
        dim = plotHgtCss;
        pos = dim - pos;
      }
      if (sc.dir == -1)
        pos = dim - pos;
      let _min = sc._min, _max = sc._max, pct = pos / dim;
      let sv = _min + (_max - _min) * pct;
      let distr = sc.distr;
      return distr == 3 ? pow(10, sv) : distr == 4 ? sinh(sv, sc.asinh) : sv;
    }
    function closestIdxFromXpos(pos, can2) {
      let v = posToVal(pos, xScaleKey, can2);
      return closestIdx(v, data[0], i0, i1);
    }
    self.valToIdx = (val) => closestIdx(val, data[0]);
    self.posToIdx = closestIdxFromXpos;
    self.posToVal = posToVal;
    self.valToPos = (val, scale2, can2) => scales[scale2].ori == 0 ? getHPos(
      val,
      scales[scale2],
      can2 ? plotWid : plotWidCss,
      can2 ? plotLft : 0
    ) : getVPos(
      val,
      scales[scale2],
      can2 ? plotHgt : plotHgtCss,
      can2 ? plotTop : 0
    );
    function batch(fn) {
      fn(self);
      commit();
    }
    self.batch = batch;
    self.setCursor = (opts2, _fire, _pub) => {
      mouseLeft1 = opts2.left;
      mouseTop1 = opts2.top;
      updateCursor(null, _fire, _pub);
    };
    function setSelH(off2, dim) {
      setStylePx(selectDiv, LEFT, select.left = off2);
      setStylePx(selectDiv, WIDTH, select.width = dim);
    }
    function setSelV(off2, dim) {
      setStylePx(selectDiv, TOP, select.top = off2);
      setStylePx(selectDiv, HEIGHT, select.height = dim);
    }
    let setSelX = scaleX.ori == 0 ? setSelH : setSelV;
    let setSelY = scaleX.ori == 1 ? setSelH : setSelV;
    function syncLegend() {
      if (showLegend && legend.live) {
        for (let i = mode == 2 ? 1 : 0; i < series.length; i++) {
          if (i == 0 && multiValLegend)
            continue;
          let vals = legend.values[i];
          let j = 0;
          for (let k in vals)
            legendCells[i][j++].firstChild.nodeValue = vals[k];
        }
      }
    }
    function setLegend(opts2, _fire) {
      if (opts2 != null) {
        if (opts2.idxs) {
          opts2.idxs.forEach((didx, sidx) => {
            activeIdxs[sidx] = didx;
          });
        } else if (!isUndef(opts2.idx))
          activeIdxs.fill(opts2.idx);
        legend.idx = activeIdxs[0];
      }
      for (let sidx = 0; sidx < series.length; sidx++) {
        if (sidx > 0 || mode == 1 && !multiValLegend)
          setLegendValues(sidx, activeIdxs[sidx]);
      }
      if (showLegend && legend.live)
        syncLegend();
      shouldSetLegend = false;
      _fire !== false && fire("setLegend");
    }
    self.setLegend = setLegend;
    function setLegendValues(sidx, idx) {
      let s = series[sidx];
      let src = sidx == 0 && xScaleDistr == 2 ? data0 : data[sidx];
      let val;
      if (multiValLegend)
        val = s.values(self, sidx, idx) ?? NULL_LEGEND_VALUES;
      else {
        val = s.value(self, idx == null ? null : src[idx], sidx, idx);
        val = val == null ? NULL_LEGEND_VALUES : { _: val };
      }
      legend.values[sidx] = val;
    }
    function updateCursor(src, _fire, _pub) {
      rawMouseLeft1 = mouseLeft1;
      rawMouseTop1 = mouseTop1;
      [mouseLeft1, mouseTop1] = cursor.move(self, mouseLeft1, mouseTop1);
      if (cursor.show) {
        vCursor && elTrans(vCursor, round(mouseLeft1), 0, plotWidCss, plotHgtCss);
        hCursor && elTrans(hCursor, 0, round(mouseTop1), plotWidCss, plotHgtCss);
      }
      let idx;
      let noDataInRange = i0 > i1;
      closestDist = inf;
      let xDim = scaleX.ori == 0 ? plotWidCss : plotHgtCss;
      let yDim = scaleX.ori == 1 ? plotWidCss : plotHgtCss;
      if (mouseLeft1 < 0 || dataLen == 0 || noDataInRange) {
        idx = null;
        for (let i = 0; i < series.length; i++) {
          if (i > 0) {
            cursorPts.length > 1 && elTrans(cursorPts[i], -10, -10, plotWidCss, plotHgtCss);
          }
        }
        if (cursorFocus)
          setSeries(null, FOCUS_TRUE, true, src == null && syncOpts.setSeries);
        if (legend.live) {
          activeIdxs.fill(idx);
          shouldSetLegend = true;
        }
      } else {
        let mouseXPos, valAtPosX, xPos;
        if (mode == 1) {
          mouseXPos = scaleX.ori == 0 ? mouseLeft1 : mouseTop1;
          valAtPosX = posToVal(mouseXPos, xScaleKey);
          idx = closestIdx(valAtPosX, data[0], i0, i1);
          xPos = valToPosX(data[0][idx], scaleX, xDim, 0);
        }
        for (let i = mode == 2 ? 1 : 0; i < series.length; i++) {
          let s = series[i];
          let idx1 = activeIdxs[i];
          let yVal1 = mode == 1 ? data[i][idx1] : data[i][1][idx1];
          let idx2 = cursor.dataIdx(self, i, idx, valAtPosX);
          let yVal2 = mode == 1 ? data[i][idx2] : data[i][1][idx2];
          shouldSetLegend = shouldSetLegend || yVal2 != yVal1 || idx2 != idx1;
          activeIdxs[i] = idx2;
          let xPos2 = incrRoundUp(idx2 == idx ? xPos : valToPosX(mode == 1 ? data[0][idx2] : data[i][0][idx2], scaleX, xDim, 0), 1);
          if (i > 0 && s.show) {
            let yPos = yVal2 == null ? -10 : incrRoundUp(valToPosY(yVal2, mode == 1 ? scales[s.scale] : scales[s.facets[1].scale], yDim, 0), 1);
            if (cursorFocus && yPos >= 0 && mode == 1) {
              let dist = abs(yPos - mouseTop1);
              let bias = focus.bias;
              if (bias != 0) {
                let mouseYPos = scaleX.ori == 1 ? mouseLeft1 : mouseTop1;
                let mouseYVal = posToVal(mouseYPos, s.scale);
                let seriesYValSign = yVal2 >= 0 ? 1 : -1;
                let mouseYValSign = mouseYVal >= 0 ? 1 : -1;
                if (mouseYValSign == seriesYValSign) {
                  if (dist < closestDist && (mouseYValSign == 1 ? bias == 1 ? yVal2 >= mouseYVal : yVal2 <= mouseYVal : (
                    // >= 0
                    bias == 1 ? yVal2 <= mouseYVal : yVal2 >= mouseYVal
                  ))) {
                    closestDist = dist;
                    closestSeries = i;
                  }
                }
              } else {
                if (dist < closestDist) {
                  closestDist = dist;
                  closestSeries = i;
                }
              }
            }
            let hPos, vPos;
            if (scaleX.ori == 0) {
              hPos = xPos2;
              vPos = yPos;
            } else {
              hPos = yPos;
              vPos = xPos2;
            }
            if (shouldSetLegend && cursorPts.length > 1) {
              elColor(cursorPts[i], cursor.points.fill(self, i), cursor.points.stroke(self, i));
              let ptWid, ptHgt, ptLft, ptTop, centered = true, getBBox = cursor.points.bbox;
              if (getBBox != null) {
                centered = false;
                let bbox = getBBox(self, i);
                ptLft = bbox.left;
                ptTop = bbox.top;
                ptWid = bbox.width;
                ptHgt = bbox.height;
              } else {
                ptLft = hPos;
                ptTop = vPos;
                ptWid = ptHgt = cursor.points.size(self, i);
              }
              elSize(cursorPts[i], ptWid, ptHgt, centered);
              elTrans(cursorPts[i], ptLft, ptTop, plotWidCss, plotHgtCss);
            }
          }
        }
      }
      cursor.idx = idx;
      cursor.left = mouseLeft1;
      cursor.top = mouseTop1;
      if (shouldSetLegend) {
        legend.idx = idx;
        setLegend();
      }
      if (select.show && dragging) {
        if (src != null) {
          let [xKey, yKey] = syncOpts.scales;
          let [matchXKeys, matchYKeys] = syncOpts.match;
          let [xKeySrc, yKeySrc] = src.cursor.sync.scales;
          let sdrag = src.cursor.drag;
          dragX = sdrag._x;
          dragY = sdrag._y;
          if (dragX || dragY) {
            let { left, top, width, height } = src.select;
            let sori = src.scales[xKey].ori;
            let sPosToVal = src.posToVal;
            let sOff, sDim, sc, a, b;
            let matchingX = xKey != null && matchXKeys(xKey, xKeySrc);
            let matchingY = yKey != null && matchYKeys(yKey, yKeySrc);
            if (matchingX && dragX) {
              if (sori == 0) {
                sOff = left;
                sDim = width;
              } else {
                sOff = top;
                sDim = height;
              }
              sc = scales[xKey];
              a = valToPosX(sPosToVal(sOff, xKeySrc), sc, xDim, 0);
              b = valToPosX(sPosToVal(sOff + sDim, xKeySrc), sc, xDim, 0);
              setSelX(min(a, b), abs(b - a));
            } else
              setSelX(0, xDim);
            if (matchingY && dragY) {
              if (sori == 1) {
                sOff = left;
                sDim = width;
              } else {
                sOff = top;
                sDim = height;
              }
              sc = scales[yKey];
              a = valToPosY(sPosToVal(sOff, yKeySrc), sc, yDim, 0);
              b = valToPosY(sPosToVal(sOff + sDim, yKeySrc), sc, yDim, 0);
              setSelY(min(a, b), abs(b - a));
            } else
              setSelY(0, yDim);
          } else
            hideSelect();
        } else {
          let rawDX = abs(rawMouseLeft1 - rawMouseLeft0);
          let rawDY = abs(rawMouseTop1 - rawMouseTop0);
          if (scaleX.ori == 1) {
            let _rawDX = rawDX;
            rawDX = rawDY;
            rawDY = _rawDX;
          }
          dragX = drag.x && rawDX >= drag.dist;
          dragY = drag.y && rawDY >= drag.dist;
          let uni = drag.uni;
          if (uni != null) {
            if (dragX && dragY) {
              dragX = rawDX >= uni;
              dragY = rawDY >= uni;
              if (!dragX && !dragY) {
                if (rawDY > rawDX)
                  dragY = true;
                else
                  dragX = true;
              }
            }
          } else if (drag.x && drag.y && (dragX || dragY))
            dragX = dragY = true;
          let p0, p1;
          if (dragX) {
            if (scaleX.ori == 0) {
              p0 = mouseLeft0;
              p1 = mouseLeft1;
            } else {
              p0 = mouseTop0;
              p1 = mouseTop1;
            }
            setSelX(min(p0, p1), abs(p1 - p0));
            if (!dragY)
              setSelY(0, yDim);
          }
          if (dragY) {
            if (scaleX.ori == 1) {
              p0 = mouseLeft0;
              p1 = mouseLeft1;
            } else {
              p0 = mouseTop0;
              p1 = mouseTop1;
            }
            setSelY(min(p0, p1), abs(p1 - p0));
            if (!dragX)
              setSelX(0, xDim);
          }
          if (!dragX && !dragY) {
            setSelX(0, 0);
            setSelY(0, 0);
          }
        }
      }
      drag._x = dragX;
      drag._y = dragY;
      if (src == null) {
        if (_pub) {
          if (syncKey != null) {
            let [xSyncKey, ySyncKey] = syncOpts.scales;
            syncOpts.values[0] = xSyncKey != null ? posToVal(scaleX.ori == 0 ? mouseLeft1 : mouseTop1, xSyncKey) : null;
            syncOpts.values[1] = ySyncKey != null ? posToVal(scaleX.ori == 1 ? mouseLeft1 : mouseTop1, ySyncKey) : null;
          }
          pubSync(mousemove, self, mouseLeft1, mouseTop1, plotWidCss, plotHgtCss, idx);
        }
        if (cursorFocus) {
          let shouldPub = _pub && syncOpts.setSeries;
          let p = focus.prox;
          if (focusedSeries == null) {
            if (closestDist <= p)
              setSeries(closestSeries, FOCUS_TRUE, true, shouldPub);
          } else {
            if (closestDist > p)
              setSeries(null, FOCUS_TRUE, true, shouldPub);
            else if (closestSeries != focusedSeries)
              setSeries(closestSeries, FOCUS_TRUE, true, shouldPub);
          }
        }
      }
      _fire !== false && fire("setCursor");
    }
    let rect2 = null;
    function syncRect(defer) {
      if (defer === true)
        rect2 = null;
      else {
        rect2 = over.getBoundingClientRect();
        fire("syncRect", rect2);
      }
    }
    function mouseMove(e, src, _l, _t, _w, _h, _i) {
      if (cursor._lock)
        return;
      if (dragging && e != null && e.movementX == 0 && e.movementY == 0)
        return;
      cacheMouse(e, src, _l, _t, _w, _h, _i, false, e != null);
      if (e != null)
        updateCursor(null, true, true);
      else
        updateCursor(src, true, false);
    }
    function cacheMouse(e, src, _l, _t, _w, _h, _i, initial, snap) {
      if (rect2 == null)
        syncRect(false);
      if (e != null) {
        _l = e.clientX - rect2.left;
        _t = e.clientY - rect2.top;
      } else {
        if (_l < 0 || _t < 0) {
          mouseLeft1 = -10;
          mouseTop1 = -10;
          return;
        }
        let [xKey, yKey] = syncOpts.scales;
        let syncOptsSrc = src.cursor.sync;
        let [xValSrc, yValSrc] = syncOptsSrc.values;
        let [xKeySrc, yKeySrc] = syncOptsSrc.scales;
        let [matchXKeys, matchYKeys] = syncOpts.match;
        let rotSrc = src.axes[0].side % 2 == 1;
        let xDim = scaleX.ori == 0 ? plotWidCss : plotHgtCss, yDim = scaleX.ori == 1 ? plotWidCss : plotHgtCss, _xDim = rotSrc ? _h : _w, _yDim = rotSrc ? _w : _h, _xPos = rotSrc ? _t : _l, _yPos = rotSrc ? _l : _t;
        if (xKeySrc != null)
          _l = matchXKeys(xKey, xKeySrc) ? getPos(xValSrc, scales[xKey], xDim, 0) : -10;
        else
          _l = xDim * (_xPos / _xDim);
        if (yKeySrc != null)
          _t = matchYKeys(yKey, yKeySrc) ? getPos(yValSrc, scales[yKey], yDim, 0) : -10;
        else
          _t = yDim * (_yPos / _yDim);
        if (scaleX.ori == 1) {
          let __l = _l;
          _l = _t;
          _t = __l;
        }
      }
      if (snap) {
        if (_l <= 1 || _l >= plotWidCss - 1)
          _l = incrRound(_l, plotWidCss);
        if (_t <= 1 || _t >= plotHgtCss - 1)
          _t = incrRound(_t, plotHgtCss);
      }
      if (initial) {
        rawMouseLeft0 = _l;
        rawMouseTop0 = _t;
        [mouseLeft0, mouseTop0] = cursor.move(self, _l, _t);
      } else {
        mouseLeft1 = _l;
        mouseTop1 = _t;
      }
    }
    const _hideProps = {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    function hideSelect() {
      setSelect(_hideProps, false);
    }
    function mouseDown(e, src, _l, _t, _w, _h, _i) {
      dragging = true;
      dragX = dragY = drag._x = drag._y = false;
      cacheMouse(e, src, _l, _t, _w, _h, _i, true, false);
      if (e != null) {
        onMouse(mouseup, doc, mouseUp);
        pubSync(mousedown, self, mouseLeft0, mouseTop0, plotWidCss, plotHgtCss, null);
      }
    }
    function mouseUp(e, src, _l, _t, _w, _h, _i) {
      dragging = drag._x = drag._y = false;
      cacheMouse(e, src, _l, _t, _w, _h, _i, false, true);
      let { left, top, width, height } = select;
      let hasSelect = width > 0 || height > 0;
      hasSelect && setSelect(select);
      if (drag.setScale && hasSelect) {
        let xOff = left, xDim = width, yOff = top, yDim = height;
        if (scaleX.ori == 1) {
          xOff = top, xDim = height, yOff = left, yDim = width;
        }
        if (dragX) {
          _setScale(
            xScaleKey,
            posToVal(xOff, xScaleKey),
            posToVal(xOff + xDim, xScaleKey)
          );
        }
        if (dragY) {
          for (let k in scales) {
            let sc = scales[k];
            if (k != xScaleKey && sc.from == null && sc.min != inf) {
              _setScale(
                k,
                posToVal(yOff + yDim, k),
                posToVal(yOff, k)
              );
            }
          }
        }
        hideSelect();
      } else if (cursor.lock) {
        cursor._lock = !cursor._lock;
        if (!cursor._lock)
          updateCursor(null, true, false);
      }
      if (e != null) {
        offMouse(mouseup, doc);
        pubSync(mouseup, self, mouseLeft1, mouseTop1, plotWidCss, plotHgtCss, null);
      }
    }
    function mouseLeave(e, src, _l, _t, _w, _h, _i) {
      if (!cursor._lock) {
        let _dragging = dragging;
        if (dragging) {
          let snapH = true;
          let snapV = true;
          let snapProx = 10;
          let dragH, dragV;
          if (scaleX.ori == 0) {
            dragH = dragX;
            dragV = dragY;
          } else {
            dragH = dragY;
            dragV = dragX;
          }
          if (dragH && dragV) {
            snapH = mouseLeft1 <= snapProx || mouseLeft1 >= plotWidCss - snapProx;
            snapV = mouseTop1 <= snapProx || mouseTop1 >= plotHgtCss - snapProx;
          }
          if (dragH && snapH)
            mouseLeft1 = mouseLeft1 < mouseLeft0 ? 0 : plotWidCss;
          if (dragV && snapV)
            mouseTop1 = mouseTop1 < mouseTop0 ? 0 : plotHgtCss;
          updateCursor(null, true, true);
          dragging = false;
        }
        mouseLeft1 = -10;
        mouseTop1 = -10;
        updateCursor(null, true, true);
        if (_dragging)
          dragging = _dragging;
      }
    }
    function dblClick(e, src, _l, _t, _w, _h, _i) {
      autoScaleX();
      hideSelect();
      if (e != null)
        pubSync(dblclick, self, mouseLeft1, mouseTop1, plotWidCss, plotHgtCss, null);
    }
    function syncPxRatio() {
      axes.forEach(syncFontSize);
      _setSize(self.width, self.height, true);
    }
    on(dppxchange, win, syncPxRatio);
    const events = {};
    events.mousedown = mouseDown;
    events.mousemove = mouseMove;
    events.mouseup = mouseUp;
    events.dblclick = dblClick;
    events["setSeries"] = (e, src, idx, opts2) => {
      setSeries(idx, opts2, true, false);
    };
    if (cursor.show) {
      onMouse(mousedown, over, mouseDown);
      onMouse(mousemove, over, mouseMove);
      onMouse(mouseenter, over, syncRect);
      onMouse(mouseleave, over, mouseLeave);
      onMouse(dblclick, over, dblClick);
      cursorPlots.add(self);
      self.syncRect = syncRect;
    }
    const hooks = self.hooks = opts.hooks || {};
    function fire(evName, a1, a2) {
      if (evName in hooks) {
        hooks[evName].forEach((fn) => {
          fn.call(null, self, a1, a2);
        });
      }
    }
    (opts.plugins || []).forEach((p) => {
      for (let evName in p.hooks)
        hooks[evName] = (hooks[evName] || []).concat(p.hooks[evName]);
    });
    const syncOpts = assign({
      key: null,
      setSeries: false,
      filters: {
        pub: retTrue,
        sub: retTrue
      },
      scales: [xScaleKey, series[1] ? series[1].scale : null],
      match: [retEq, retEq],
      values: [null, null]
    }, cursor.sync);
    cursor.sync = syncOpts;
    const syncKey = syncOpts.key;
    const sync = _sync(syncKey);
    function pubSync(type, src, x, y, w, h, i) {
      if (syncOpts.filters.pub(type, src, x, y, w, h, i))
        sync.pub(type, src, x, y, w, h, i);
    }
    sync.sub(self);
    function pub(type, src, x, y, w, h, i) {
      if (syncOpts.filters.sub(type, src, x, y, w, h, i))
        events[type](null, src, x, y, w, h, i);
    }
    self.pub = pub;
    function destroy() {
      sync.unsub(self);
      cursorPlots.delete(self);
      mouseListeners.clear();
      off(dppxchange, win, syncPxRatio);
      root.remove();
      legendEl?.remove();
      fire("destroy");
    }
    self.destroy = destroy;
    function _init() {
      fire("init", opts, data);
      setData(data || opts.data, false);
      if (pendScales[xScaleKey])
        setScale(xScaleKey, pendScales[xScaleKey]);
      else
        autoScaleX();
      shouldSetSelect = select.show;
      shouldSetCursor = shouldSetLegend = true;
      _setSize(opts.width, opts.height);
    }
    series.forEach(initSeries);
    axes.forEach(initAxis);
    if (then) {
      if (then instanceof HTMLElement) {
        then.appendChild(root);
        _init();
      } else
        then(self, _init);
    } else
      _init();
    return self;
  }
  uPlot.assign = assign;
  uPlot.fmtNum = fmtNum;
  uPlot.rangeNum = rangeNum;
  uPlot.rangeLog = rangeLog;
  uPlot.rangeAsinh = rangeAsinh;
  uPlot.orient = orient;
  uPlot.pxRatio = pxRatio;
  {
    uPlot.join = join;
  }
  {
    uPlot.fmtDate = fmtDate;
    uPlot.tzDate = tzDate;
  }
  {
    uPlot.sync = _sync;
  }
  {
    uPlot.addGap = addGap;
    uPlot.clipGaps = clipGaps;
    let paths2 = uPlot.paths = {
      points
    };
    paths2.linear = linear;
    paths2.stepped = stepped;
    paths2.bars = bars;
    paths2.spline = monotoneCubic;
  }

  // js/chart.js
  function paths(u, sidx, i0, i1) {
    const s = u.series[sidx];
    const xdata = u.data[0];
    const ydata = u.data[sidx];
    const scaleX = "x";
    const scaleY = s.scale;
    const stroke = new Path2D();
    const x_width = Math.abs((u.valToPos(xdata[0], scaleX, true) - u.valToPos(xdata[1], scaleX, true)) / 2);
    stroke.moveTo(
      Math.round(u.valToPos(xdata[0], scaleX, true)),
      Math.round(u.valToPos(ydata[0], scaleY, true))
    );
    for (let i = i0; i < i1; i++) {
      let x0 = Math.round(u.valToPos(xdata[i], scaleX, true));
      let y0 = Math.round(u.valToPos(ydata[i], scaleY, true));
      let x1 = Math.round(u.valToPos(xdata[i + 1], scaleX, true));
      let y1 = Math.round(u.valToPos(ydata[i + 1], scaleY, true));
      stroke.lineTo(x0 - x_width, y0);
      stroke.lineTo(x1 - x_width, y0);
      if (i == i1 - 1) {
        stroke.lineTo(x1 - x_width, y1);
        stroke.lineTo(x1, y1);
      }
    }
    const fill = new Path2D(stroke);
    let minY = Math.round(u.valToPos(u.scales[scaleY].min, scaleY, true));
    let minX = Math.round(u.valToPos(u.scales[scaleX].min, scaleX, true));
    let maxX = Math.round(u.valToPos(u.scales[scaleX].max, scaleX, true));
    fill.lineTo(maxX, minY);
    fill.lineTo(minX, minY);
    return {
      stroke,
      fill
    };
  }
  function safe_to_fixed(number, decimals) {
    return number && number.toFixed(decimals);
  }
  function make_opts(parent, scale2) {
    let rect2 = { width: parent.clientWidth, height: 600 };
    let scaler = null;
    if (scale2 == "Linear") {
      scaler = (x) => x && x;
    } else if (scale2 == "Log10") {
      scaler = (x) => x && Math.pow(10, x);
    } else if (scale2 == "Log2") {
      scaler = (x) => x && Math.pow(2, x);
    }
    return {
      id: parent.id + "-chart",
      width: rect2.width,
      height: rect2.height,
      labelSize: 10,
      labelFont: "bold 8px Arial",
      ticks: { show: false },
      points: { show: false },
      font: "8px Arial",
      padding: [null, 30, null, 30],
      series: [
        { value: "{HH}:{mm}:{ss}" },
        {
          label: "P99",
          stroke: "rgb(155, 214, 206)",
          value: (self, rawValue) => safe_to_fixed(scaler(rawValue), 3) + "ms",
          fill: "rgb(155, 214, 206, 0.5 )",
          paths,
          scale: "ms"
        },
        {
          label: "P90",
          stroke: "rgb(79, 169, 184)",
          value: (self, rawValue) => safe_to_fixed(scaler(rawValue), 3) + "ms",
          fill: "rgb(79, 169, 184, 0.5)",
          paths,
          scale: "ms"
        },
        {
          label: "P50",
          stroke: "rgb(2, 88, 115)",
          value: (self, rawValue) => safe_to_fixed(scaler(rawValue), 3) + "ms",
          fill: "rgb(2, 88, 115, 0.5)",
          paths,
          scale: "ms"
        },
        {
          label: "count",
          stroke: "rgb(30, 30, 30)",
          value: (self, rawValue) => scaler(rawValue) + "cps",
          scale: "calls"
        }
      ],
      axes: [
        {
          values: [
            [1, "{HH}:{mm}:{ss}", null, null, null, null, null, null, 1]
          ]
        },
        {
          scale: "ms",
          grid: { show: false },
          values: (u, vals, space) => vals.map((val) => safe_to_fixed(scaler(val), 3) + "ms")
        },
        {
          side: 1,
          values: (u, vals, space) => vals.map((val) => safe_to_fixed(scaler(val), 1) + " calls"),
          scale: "calls",
          grid: { show: false }
        }
      ]
    };
  }
  var HistoChart = class {
    constructor(chartEl, data, scale2) {
      let opts = make_opts(chartEl, scale2);
      this.uplotChart = new uPlot(opts, data, chartEl);
    }
    updateData(quantile_data, scale2) {
      this.uplotChart.setData(quantile_data, scale2);
    }
  };
  var scale = "";
  var ChartData = {
    mounted() {
      let chartEl = this.el.parentElement.querySelector(".chart");
      scale = JSON.parse(chartEl.dataset.scale);
      let quantile_data = JSON.parse(chartEl.dataset.quantile);
      this.chart = new HistoChart(chartEl, quantile_data, scale);
    },
    updated() {
      let chartEl = this.el.parentElement.querySelector(".chart");
      let new_scale = JSON.parse(chartEl.dataset.scale);
      if (scale == new_scale) {
        let quantile_data = JSON.parse(chartEl.dataset.quantile);
        this.chart.updateData(quantile_data, scale);
      } else {
        this.mounted();
      }
    }
  };

  // js/app.js
  var socketPath = document.querySelector("html").getAttribute("phx-socket") || "/live";
  var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var Hooks = {
    ChartData
  };
  var liveSocket = new LiveView.LiveSocket(socketPath, Phoenix.Socket, { hooks: Hooks, params: { _csrf_token: csrfToken } });
  import_topbar.default.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
  window.addEventListener("phx:page-loading-start", (info) => import_topbar.default.show());
  window.addEventListener("phx:page-loading-stop", (info) => import_topbar.default.hide());
  liveSocket.connect();
  window.liveSocket = liveSocket;
})();
/*! Bundled license information:

topbar/topbar.min.js:
  (**
   * @license MIT
   * topbar 2.0.0, 2023-02-04
   * http://buunguyen.github.io/topbar
   * Copyright (c) 2021 Buu Nguyen
   *)
*/
