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
        !function() {
          for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window2.requestAnimationFrame; ++x)
            window2.requestAnimationFrame = window2[vendors[x] + "RequestAnimationFrame"], window2.cancelAnimationFrame = window2[vendors[x] + "CancelAnimationFrame"] || window2[vendors[x] + "CancelRequestAnimationFrame"];
          window2.requestAnimationFrame || (window2.requestAnimationFrame = function(callback, element) {
            var currTime = (/* @__PURE__ */ new Date()).getTime(), timeToCall = Math.max(0, 16 - (currTime - lastTime)), id = window2.setTimeout(function() {
              callback(currTime + timeToCall);
            }, timeToCall);
            return lastTime = currTime + timeToCall, id;
          }), window2.cancelAnimationFrame || (window2.cancelAnimationFrame = function(id) {
            clearTimeout(id);
          });
        }();
        function repaint() {
          canvas.width = window2.innerWidth, canvas.height = 5 * options.barThickness;
          var ctx = canvas.getContext("2d");
          ctx.shadowBlur = options.shadowBlur, ctx.shadowColor = options.shadowColor;
          var stop, lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          for (stop in options.barColors)
            lineGradient.addColorStop(stop, options.barColors[stop]);
          ctx.lineWidth = options.barThickness, ctx.beginPath(), ctx.moveTo(0, options.barThickness / 2), ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness / 2), ctx.strokeStyle = lineGradient, ctx.stroke();
        }
        var canvas, progressTimerId, fadeTimerId, currentProgress, showing, options = { autoRun: true, barThickness: 3, barColors: { 0: "rgba(26,  188, 156, .9)", ".25": "rgba(52,  152, 219, .9)", ".50": "rgba(241, 196, 15,  .9)", ".75": "rgba(230, 126, 34,  .9)", "1.0": "rgba(211, 84,  0,   .9)" }, shadowBlur: 10, shadowColor: "rgba(0,   0,   0,   .6)", className: null }, topbar2 = { config: function(opts) {
          for (var key in opts)
            options.hasOwnProperty(key) && (options[key] = opts[key]);
        }, show: function() {
          var type, handler, elem;
          showing || (showing = true, null !== fadeTimerId && window2.cancelAnimationFrame(fadeTimerId), canvas || ((elem = (canvas = document2.createElement("canvas")).style).position = "fixed", elem.top = elem.left = elem.right = elem.margin = elem.padding = 0, elem.zIndex = 100001, elem.display = "none", options.className && canvas.classList.add(options.className), document2.body.appendChild(canvas), type = "resize", handler = repaint, (elem = window2).addEventListener ? elem.addEventListener(type, handler, false) : elem.attachEvent ? elem.attachEvent("on" + type, handler) : elem["on" + type] = handler), canvas.style.opacity = 1, canvas.style.display = "block", topbar2.progress(0), options.autoRun && function loop() {
            progressTimerId = window2.requestAnimationFrame(loop), topbar2.progress("+" + 0.05 * Math.pow(1 - Math.sqrt(currentProgress), 2));
          }());
        }, progress: function(to) {
          return void 0 === to || ("string" == typeof to && (to = (0 <= to.indexOf("+") || 0 <= to.indexOf("-") ? currentProgress : 0) + parseFloat(to)), currentProgress = 1 < to ? 1 : to, repaint()), currentProgress;
        }, hide: function() {
          showing && (showing = false, null != progressTimerId && (window2.cancelAnimationFrame(progressTimerId), progressTimerId = null), function loop() {
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
  function make_opts(id, scale2) {
    let rect2 = { width: window.innerWidth * 0.9, height: 600 };
    let scaler = null;
    if (scale2 == "Linear") {
      scaler = (x) => x && x;
    } else if (scale2 == "Log10") {
      scaler = (x) => x && Math.pow(10, x);
    } else if (scale2 == "Log2") {
      scaler = (x) => x && Math.pow(2, x);
    }
    return {
      id: id + "-chart",
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
      let opts = make_opts(chartEl.id, scale2);
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
      let new_scale = JSON.parse(this.el.dataset.scale);
      if (scale == new_scale) {
        let quantile_data = JSON.parse(this.el.dataset.quantile);
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
   * topbar 1.0.0, 2021-01-06
   * http://buunguyen.github.io/topbar
   * Copyright (c) 2021 Buu Nguyen
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy90b3BiYXIvdG9wYmFyLm1pbi5qcyIsICIuLi8uLi9hc3NldHMvanMvYXBwLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvdXBsb3QvZGlzdC91UGxvdC5lc20uanMiLCAiLi4vLi4vYXNzZXRzL2pzL2NoYXJ0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogdG9wYmFyIDEuMC4wLCAyMDIxLTAxLTA2XG4gKiBodHRwOi8vYnV1bmd1eWVuLmdpdGh1Yi5pby90b3BiYXJcbiAqIENvcHlyaWdodCAoYykgMjAyMSBCdXUgTmd1eWVuXG4gKi9cbihmdW5jdGlvbih3aW5kb3csZG9jdW1lbnQpe1widXNlIHN0cmljdFwiOyFmdW5jdGlvbigpe2Zvcih2YXIgbGFzdFRpbWU9MCx2ZW5kb3JzPVtcIm1zXCIsXCJtb3pcIixcIndlYmtpdFwiLFwib1wiXSx4PTA7eDx2ZW5kb3JzLmxlbmd0aCYmIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7Kyt4KXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93W3ZlbmRvcnNbeF0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvd1t2ZW5kb3JzW3hdK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fHdpbmRvd1t2ZW5kb3JzW3hdK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGNhbGxiYWNrLGVsZW1lbnQpe3ZhciBjdXJyVGltZT0obmV3IERhdGUpLmdldFRpbWUoKSx0aW1lVG9DYWxsPU1hdGgubWF4KDAsMTYtKGN1cnJUaW1lLWxhc3RUaW1lKSksaWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYWxsYmFjayhjdXJyVGltZSt0aW1lVG9DYWxsKX0sdGltZVRvQ2FsbCk7cmV0dXJuIGxhc3RUaW1lPWN1cnJUaW1lK3RpbWVUb0NhbGwsaWR9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oaWQpe2NsZWFyVGltZW91dChpZCl9KX0oKTtmdW5jdGlvbiByZXBhaW50KCl7Y2FudmFzLndpZHRoPXdpbmRvdy5pbm5lcldpZHRoLGNhbnZhcy5oZWlnaHQ9NSpvcHRpb25zLmJhclRoaWNrbmVzczt2YXIgY3R4PWNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7Y3R4LnNoYWRvd0JsdXI9b3B0aW9ucy5zaGFkb3dCbHVyLGN0eC5zaGFkb3dDb2xvcj1vcHRpb25zLnNoYWRvd0NvbG9yO3ZhciBzdG9wLGxpbmVHcmFkaWVudD1jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLGNhbnZhcy53aWR0aCwwKTtmb3Ioc3RvcCBpbiBvcHRpb25zLmJhckNvbG9ycylsaW5lR3JhZGllbnQuYWRkQ29sb3JTdG9wKHN0b3Asb3B0aW9ucy5iYXJDb2xvcnNbc3RvcF0pO2N0eC5saW5lV2lkdGg9b3B0aW9ucy5iYXJUaGlja25lc3MsY3R4LmJlZ2luUGF0aCgpLGN0eC5tb3ZlVG8oMCxvcHRpb25zLmJhclRoaWNrbmVzcy8yKSxjdHgubGluZVRvKE1hdGguY2VpbChjdXJyZW50UHJvZ3Jlc3MqY2FudmFzLndpZHRoKSxvcHRpb25zLmJhclRoaWNrbmVzcy8yKSxjdHguc3Ryb2tlU3R5bGU9bGluZUdyYWRpZW50LGN0eC5zdHJva2UoKX12YXIgY2FudmFzLHByb2dyZXNzVGltZXJJZCxmYWRlVGltZXJJZCxjdXJyZW50UHJvZ3Jlc3Msc2hvd2luZyxvcHRpb25zPXthdXRvUnVuOiEwLGJhclRoaWNrbmVzczozLGJhckNvbG9yczp7MDpcInJnYmEoMjYsICAxODgsIDE1NiwgLjkpXCIsXCIuMjVcIjpcInJnYmEoNTIsICAxNTIsIDIxOSwgLjkpXCIsXCIuNTBcIjpcInJnYmEoMjQxLCAxOTYsIDE1LCAgLjkpXCIsXCIuNzVcIjpcInJnYmEoMjMwLCAxMjYsIDM0LCAgLjkpXCIsXCIxLjBcIjpcInJnYmEoMjExLCA4NCwgIDAsICAgLjkpXCJ9LHNoYWRvd0JsdXI6MTAsc2hhZG93Q29sb3I6XCJyZ2JhKDAsICAgMCwgICAwLCAgIC42KVwiLGNsYXNzTmFtZTpudWxsfSx0b3BiYXI9e2NvbmZpZzpmdW5jdGlvbihvcHRzKXtmb3IodmFyIGtleSBpbiBvcHRzKW9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSYmKG9wdGlvbnNba2V5XT1vcHRzW2tleV0pfSxzaG93OmZ1bmN0aW9uKCl7dmFyIHR5cGUsaGFuZGxlcixlbGVtO3Nob3dpbmd8fChzaG93aW5nPSEwLG51bGwhPT1mYWRlVGltZXJJZCYmd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGZhZGVUaW1lcklkKSxjYW52YXN8fCgoZWxlbT0oY2FudmFzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpLnN0eWxlKS5wb3NpdGlvbj1cImZpeGVkXCIsZWxlbS50b3A9ZWxlbS5sZWZ0PWVsZW0ucmlnaHQ9ZWxlbS5tYXJnaW49ZWxlbS5wYWRkaW5nPTAsZWxlbS56SW5kZXg9MTAwMDAxLGVsZW0uZGlzcGxheT1cIm5vbmVcIixvcHRpb25zLmNsYXNzTmFtZSYmY2FudmFzLmNsYXNzTGlzdC5hZGQob3B0aW9ucy5jbGFzc05hbWUpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKSx0eXBlPVwicmVzaXplXCIsaGFuZGxlcj1yZXBhaW50LChlbGVtPXdpbmRvdykuYWRkRXZlbnRMaXN0ZW5lcj9lbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSxoYW5kbGVyLCExKTplbGVtLmF0dGFjaEV2ZW50P2VsZW0uYXR0YWNoRXZlbnQoXCJvblwiK3R5cGUsaGFuZGxlcik6ZWxlbVtcIm9uXCIrdHlwZV09aGFuZGxlciksY2FudmFzLnN0eWxlLm9wYWNpdHk9MSxjYW52YXMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsdG9wYmFyLnByb2dyZXNzKDApLG9wdGlvbnMuYXV0b1J1biYmZnVuY3Rpb24gbG9vcCgpe3Byb2dyZXNzVGltZXJJZD13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApLHRvcGJhci5wcm9ncmVzcyhcIitcIisuMDUqTWF0aC5wb3coMS1NYXRoLnNxcnQoY3VycmVudFByb2dyZXNzKSwyKSl9KCkpfSxwcm9ncmVzczpmdW5jdGlvbih0byl7cmV0dXJuIHZvaWQgMD09PXRvfHwoXCJzdHJpbmdcIj09dHlwZW9mIHRvJiYodG89KDA8PXRvLmluZGV4T2YoXCIrXCIpfHwwPD10by5pbmRleE9mKFwiLVwiKT9jdXJyZW50UHJvZ3Jlc3M6MCkrcGFyc2VGbG9hdCh0bykpLGN1cnJlbnRQcm9ncmVzcz0xPHRvPzE6dG8scmVwYWludCgpKSxjdXJyZW50UHJvZ3Jlc3N9LGhpZGU6ZnVuY3Rpb24oKXtzaG93aW5nJiYoc2hvd2luZz0hMSxudWxsIT1wcm9ncmVzc1RpbWVySWQmJih3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocHJvZ3Jlc3NUaW1lcklkKSxwcm9ncmVzc1RpbWVySWQ9bnVsbCksZnVuY3Rpb24gbG9vcCgpe3JldHVybiAxPD10b3BiYXIucHJvZ3Jlc3MoXCIrLjFcIikmJihjYW52YXMuc3R5bGUub3BhY2l0eS09LjA1LGNhbnZhcy5zdHlsZS5vcGFjaXR5PD0uMDUpPyhjYW52YXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix2b2lkKGZhZGVUaW1lcklkPW51bGwpKTp2b2lkKGZhZGVUaW1lcklkPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCkpfSgpKX19O1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10b3BiYXI6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiB0b3BiYXJ9KTp0aGlzLnRvcGJhcj10b3BiYXJ9KS5jYWxsKHRoaXMsd2luZG93LGRvY3VtZW50KTsiLCAiaW1wb3J0IHRvcGJhciBmcm9tIFwidG9wYmFyXCJcbmltcG9ydCB7IENoYXJ0RGF0YSB9IGZyb20gXCIuL2NoYXJ0LmpzXCJcblxubGV0IHNvY2tldFBhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5nZXRBdHRyaWJ1dGUoXCJwaHgtc29ja2V0XCIpIHx8IFwiL2xpdmVcIlxubGV0IGNzcmZUb2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J2NzcmYtdG9rZW4nXVwiKS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG5cbmxldCBIb29rcyA9IHtcbiAgQ2hhcnREYXRhOiBDaGFydERhdGFcbn1cblxubGV0IGxpdmVTb2NrZXQgPSBuZXcgTGl2ZVZpZXcuTGl2ZVNvY2tldChzb2NrZXRQYXRoLCBQaG9lbml4LlNvY2tldCwgeyBob29rczogSG9va3MsIHBhcmFtczogeyBfY3NyZl90b2tlbjogY3NyZlRva2VuIH0gfSlcblxuLy8gU2hvdyBwcm9ncmVzcyBiYXIgb24gbGl2ZSBuYXZpZ2F0aW9uIGFuZCBmb3JtIHN1Ym1pdHNcbnRvcGJhci5jb25maWcoeyBiYXJDb2xvcnM6IHsgMDogXCIjMjlkXCIgfSwgc2hhZG93Q29sb3I6IFwicmdiYSgwLCAwLCAwLCAuMylcIiB9KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwaHg6cGFnZS1sb2FkaW5nLXN0YXJ0XCIsIGluZm8gPT4gdG9wYmFyLnNob3coKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGh4OnBhZ2UtbG9hZGluZy1zdG9wXCIsIGluZm8gPT4gdG9wYmFyLmhpZGUoKSlcblxuLy8gY29ubmVjdCBpZiB0aGVyZSBhcmUgYW55IExpdmVWaWV3cyBvbiB0aGUgcGFnZVxubGl2ZVNvY2tldC5jb25uZWN0KClcblxuLy8gZXhwb3NlIGxpdmVTb2NrZXQgb24gd2luZG93IGZvciB3ZWIgY29uc29sZSBkZWJ1ZyBsb2dzIGFuZCBsYXRlbmN5IHNpbXVsYXRpb246XG4vLyA+PiBsaXZlU29ja2V0LmVuYWJsZURlYnVnKClcbi8vID4+IGxpdmVTb2NrZXQuZW5hYmxlTGF0ZW5jeVNpbSgxMDAwKSAgLy8gZW5hYmxlZCBmb3IgZHVyYXRpb24gb2YgYnJvd3NlciBzZXNzaW9uXG4vLyA+PiBsaXZlU29ja2V0LmRpc2FibGVMYXRlbmN5U2ltKClcbndpbmRvdy5saXZlU29ja2V0ID0gbGl2ZVNvY2tldFxuXG4iLCAiLyoqXG4qIENvcHlyaWdodCAoYykgMjAyMywgTGVvbiBTb3Jva2luXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuIChNSVQgTGljZW5zZWQpXG4qXG4qIHVQbG90LmpzIChcdTAzQkNQbG90KVxuKiBBIHNtYWxsLCBmYXN0IGNoYXJ0IGZvciB0aW1lIHNlcmllcywgbGluZXMsIGFyZWFzLCBvaGxjICYgYmFyc1xuKiBodHRwczovL2dpdGh1Yi5jb20vbGVlb25peWEvdVBsb3QgKHYxLjYuMjQpXG4qL1xuXG5jb25zdCBGRUFUX1RJTUUgICAgICAgICAgPSB0cnVlO1xuXG5jb25zdCBwcmUgPSBcInUtXCI7XG5cbmNvbnN0IFVQTE9UICAgICAgICAgID0gICAgICAgXCJ1cGxvdFwiO1xuY29uc3QgT1JJX0haICAgICAgICAgPSBwcmUgKyBcImh6XCI7XG5jb25zdCBPUklfVlQgICAgICAgICA9IHByZSArIFwidnRcIjtcbmNvbnN0IFRJVExFICAgICAgICAgID0gcHJlICsgXCJ0aXRsZVwiO1xuY29uc3QgV1JBUCAgICAgICAgICAgPSBwcmUgKyBcIndyYXBcIjtcbmNvbnN0IFVOREVSICAgICAgICAgID0gcHJlICsgXCJ1bmRlclwiO1xuY29uc3QgT1ZFUiAgICAgICAgICAgPSBwcmUgKyBcIm92ZXJcIjtcbmNvbnN0IEFYSVMgICAgICAgICAgID0gcHJlICsgXCJheGlzXCI7XG5jb25zdCBPRkYgICAgICAgICAgICA9IHByZSArIFwib2ZmXCI7XG5jb25zdCBTRUxFQ1QgICAgICAgICA9IHByZSArIFwic2VsZWN0XCI7XG5jb25zdCBDVVJTT1JfWCAgICAgICA9IHByZSArIFwiY3Vyc29yLXhcIjtcbmNvbnN0IENVUlNPUl9ZICAgICAgID0gcHJlICsgXCJjdXJzb3IteVwiO1xuY29uc3QgQ1VSU09SX1BUICAgICAgPSBwcmUgKyBcImN1cnNvci1wdFwiO1xuY29uc3QgTEVHRU5EICAgICAgICAgPSBwcmUgKyBcImxlZ2VuZFwiO1xuY29uc3QgTEVHRU5EX0xJVkUgICAgPSBwcmUgKyBcImxpdmVcIjtcbmNvbnN0IExFR0VORF9JTkxJTkUgID0gcHJlICsgXCJpbmxpbmVcIjtcbmNvbnN0IExFR0VORF9USEVBRCAgID0gcHJlICsgXCJ0aGVhZFwiO1xuY29uc3QgTEVHRU5EX1NFUklFUyAgPSBwcmUgKyBcInNlcmllc1wiO1xuY29uc3QgTEVHRU5EX01BUktFUiAgPSBwcmUgKyBcIm1hcmtlclwiO1xuY29uc3QgTEVHRU5EX0xBQkVMICAgPSBwcmUgKyBcImxhYmVsXCI7XG5jb25zdCBMRUdFTkRfVkFMVUUgICA9IHByZSArIFwidmFsdWVcIjtcblxuY29uc3QgV0lEVEggICAgICAgPSBcIndpZHRoXCI7XG5jb25zdCBIRUlHSFQgICAgICA9IFwiaGVpZ2h0XCI7XG5jb25zdCBUT1AgICAgICAgICA9IFwidG9wXCI7XG5jb25zdCBCT1RUT00gICAgICA9IFwiYm90dG9tXCI7XG5jb25zdCBMRUZUICAgICAgICA9IFwibGVmdFwiO1xuY29uc3QgUklHSFQgICAgICAgPSBcInJpZ2h0XCI7XG5jb25zdCBoZXhCbGFjayAgICA9IFwiIzAwMFwiO1xuY29uc3QgdHJhbnNwYXJlbnQgPSBoZXhCbGFjayArIFwiMFwiO1xuXG5jb25zdCBtb3VzZW1vdmUgICA9IFwibW91c2Vtb3ZlXCI7XG5jb25zdCBtb3VzZWRvd24gICA9IFwibW91c2Vkb3duXCI7XG5jb25zdCBtb3VzZXVwICAgICA9IFwibW91c2V1cFwiO1xuY29uc3QgbW91c2VlbnRlciAgPSBcIm1vdXNlZW50ZXJcIjtcbmNvbnN0IG1vdXNlbGVhdmUgID0gXCJtb3VzZWxlYXZlXCI7XG5jb25zdCBkYmxjbGljayAgICA9IFwiZGJsY2xpY2tcIjtcbmNvbnN0IHJlc2l6ZSAgICAgID0gXCJyZXNpemVcIjtcbmNvbnN0IHNjcm9sbCAgICAgID0gXCJzY3JvbGxcIjtcblxuY29uc3QgY2hhbmdlICAgICAgPSBcImNoYW5nZVwiO1xuY29uc3QgZHBweGNoYW5nZSAgPSBcImRwcHhjaGFuZ2VcIjtcblxuY29uc3QgTEVHRU5EX0RJU1AgPSBcIi0tXCI7XG5cbmNvbnN0IGRvbUVudiA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IGRvYyA9IGRvbUVudiA/IGRvY3VtZW50ICA6IG51bGw7XG5jb25zdCB3aW4gPSBkb21FbnYgPyB3aW5kb3cgICAgOiBudWxsO1xuY29uc3QgbmF2ID0gZG9tRW52ID8gbmF2aWdhdG9yIDogbnVsbDtcblxubGV0IHB4UmF0aW87XG5cbi8vZXhwb3J0IGNvbnN0IGNhbkhvdmVyID0gZG9tRW52ICYmICF3aW4ubWF0Y2hNZWRpYSgnKGhvdmVyOiBub25lKScpLm1hdGNoZXM7XG5cbmxldCBxdWVyeTtcblxuZnVuY3Rpb24gc2V0UHhSYXRpbygpIHtcblx0bGV0IF9weFJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbztcblxuXHQvLyBkdXJpbmcgcHJpbnQgcHJldmlldywgQ2hyb21lIGZpcmVzIG9mZiB0aGVzZSBkcHB4IHF1ZXJpZXMgZXZlbiB3aXRob3V0IGNoYW5nZXNcblx0aWYgKHB4UmF0aW8gIT0gX3B4UmF0aW8pIHtcblx0XHRweFJhdGlvID0gX3B4UmF0aW87XG5cblx0XHRxdWVyeSAmJiBvZmYoY2hhbmdlLCBxdWVyeSwgc2V0UHhSYXRpbyk7XG5cdFx0cXVlcnkgPSBtYXRjaE1lZGlhKGAobWluLXJlc29sdXRpb246ICR7cHhSYXRpbyAtIDAuMDAxfWRwcHgpIGFuZCAobWF4LXJlc29sdXRpb246ICR7cHhSYXRpbyArIDAuMDAxfWRwcHgpYCk7XG5cdFx0b24oY2hhbmdlLCBxdWVyeSwgc2V0UHhSYXRpbyk7XG5cblx0XHR3aW4uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZHBweGNoYW5nZSkpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjKSB7XG5cdGlmIChjICE9IG51bGwpIHtcblx0XHRsZXQgY2wgPSBlbC5jbGFzc0xpc3Q7XG5cdFx0IWNsLmNvbnRhaW5zKGMpICYmIGNsLmFkZChjKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1DbGFzcyhlbCwgYykge1xuXHRsZXQgY2wgPSBlbC5jbGFzc0xpc3Q7XG5cdGNsLmNvbnRhaW5zKGMpICYmIGNsLnJlbW92ZShjKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVQeChlbCwgbmFtZSwgdmFsdWUpIHtcblx0ZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZSArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gcGxhY2VUYWcodGFnLCBjbHMsIHRhcmcsIHJlZkVsKSB7XG5cdGxldCBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZyk7XG5cblx0aWYgKGNscyAhPSBudWxsKVxuXHRcdGFkZENsYXNzKGVsLCBjbHMpO1xuXG5cdGlmICh0YXJnICE9IG51bGwpXG5cdFx0dGFyZy5pbnNlcnRCZWZvcmUoZWwsIHJlZkVsKTtcblxuXHRyZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIHBsYWNlRGl2KGNscywgdGFyZykge1xuXHRyZXR1cm4gcGxhY2VUYWcoXCJkaXZcIiwgY2xzLCB0YXJnKTtcbn1cblxuY29uc3QgeGZvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGVsVHJhbnMoZWwsIHhQb3MsIHlQb3MsIHhNYXgsIHlNYXgpIHtcblx0bGV0IHhmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4UG9zICsgXCJweCxcIiArIHlQb3MgKyBcInB4KVwiO1xuXHRsZXQgeGZvcm1PbGQgPSB4Zm9ybUNhY2hlLmdldChlbCk7XG5cblx0aWYgKHhmb3JtICE9IHhmb3JtT2xkKSB7XG5cdFx0ZWwuc3R5bGUudHJhbnNmb3JtID0geGZvcm07XG5cdFx0eGZvcm1DYWNoZS5zZXQoZWwsIHhmb3JtKTtcblxuXHRcdGlmICh4UG9zIDwgMCB8fCB5UG9zIDwgMCB8fCB4UG9zID4geE1heCB8fCB5UG9zID4geU1heClcblx0XHRcdGFkZENsYXNzKGVsLCBPRkYpO1xuXHRcdGVsc2Vcblx0XHRcdHJlbUNsYXNzKGVsLCBPRkYpO1xuXHR9XG59XG5cbmNvbnN0IGNvbG9yQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBlbENvbG9yKGVsLCBiYWNrZ3JvdW5kLCBib3JkZXJDb2xvcikge1xuXHRsZXQgbmV3Q29sb3IgPSBiYWNrZ3JvdW5kICsgYm9yZGVyQ29sb3I7XG5cdGxldCBvbGRDb2xvciA9IGNvbG9yQ2FjaGUuZ2V0KGVsKTtcblxuXHRpZiAobmV3Q29sb3IgIT0gb2xkQ29sb3IpIHtcblx0XHRjb2xvckNhY2hlLnNldChlbCwgbmV3Q29sb3IpO1xuXHRcdGVsLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuXHRcdGVsLnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XG5cdH1cbn1cblxuY29uc3Qgc2l6ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gZWxTaXplKGVsLCBuZXdXaWQsIG5ld0hndCwgY2VudGVyZWQpIHtcblx0bGV0IG5ld1NpemUgPSBuZXdXaWQgKyBcIlwiICsgbmV3SGd0O1xuXHRsZXQgb2xkU2l6ZSA9IHNpemVDYWNoZS5nZXQoZWwpO1xuXG5cdGlmIChuZXdTaXplICE9IG9sZFNpemUpIHtcblx0XHRzaXplQ2FjaGUuc2V0KGVsLCBuZXdTaXplKTtcblx0XHRlbC5zdHlsZS5oZWlnaHQgPSBuZXdIZ3QgKyBcInB4XCI7XG5cdFx0ZWwuc3R5bGUud2lkdGggPSBuZXdXaWQgKyBcInB4XCI7XG5cdFx0ZWwuc3R5bGUubWFyZ2luTGVmdCA9IGNlbnRlcmVkID8gLW5ld1dpZC8yICsgXCJweFwiIDogMDtcblx0XHRlbC5zdHlsZS5tYXJnaW5Ub3AgPSBjZW50ZXJlZCA/IC1uZXdIZ3QvMiArIFwicHhcIiA6IDA7XG5cdH1cbn1cblxuY29uc3QgZXZPcHRzID0ge3Bhc3NpdmU6IHRydWV9O1xuY29uc3QgZXZPcHRzMiA9IHsuLi5ldk9wdHMsIGNhcHR1cmU6IHRydWV9O1xuXG5mdW5jdGlvbiBvbihldiwgZWwsIGNiLCBjYXB0KSB7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGNiLCBjYXB0ID8gZXZPcHRzMiA6IGV2T3B0cyk7XG59XG5cbmZ1bmN0aW9uIG9mZihldiwgZWwsIGNiLCBjYXB0KSB7XG5cdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXYsIGNiLCBjYXB0ID8gZXZPcHRzMiA6IGV2T3B0cyk7XG59XG5cbmRvbUVudiAmJiBzZXRQeFJhdGlvKCk7XG5cbi8vIGJpbmFyeSBzZWFyY2ggZm9yIGluZGV4IG9mIGNsb3Nlc3QgdmFsdWVcbmZ1bmN0aW9uIGNsb3Nlc3RJZHgobnVtLCBhcnIsIGxvLCBoaSkge1xuXHRsZXQgbWlkO1xuXHRsbyA9IGxvIHx8IDA7XG5cdGhpID0gaGkgfHwgYXJyLmxlbmd0aCAtIDE7XG5cdGxldCBiaXR3aXNlID0gaGkgPD0gMjE0NzQ4MzY0NztcblxuXHR3aGlsZSAoaGkgLSBsbyA+IDEpIHtcblx0XHRtaWQgPSBiaXR3aXNlID8gKGxvICsgaGkpID4+IDEgOiBmbG9vcigobG8gKyBoaSkgLyAyKTtcblxuXHRcdGlmIChhcnJbbWlkXSA8IG51bSlcblx0XHRcdGxvID0gbWlkO1xuXHRcdGVsc2Vcblx0XHRcdGhpID0gbWlkO1xuXHR9XG5cblx0aWYgKG51bSAtIGFycltsb10gPD0gYXJyW2hpXSAtIG51bSlcblx0XHRyZXR1cm4gbG87XG5cblx0cmV0dXJuIGhpO1xufVxuXG5mdW5jdGlvbiBub25OdWxsSWR4KGRhdGEsIF9pMCwgX2kxLCBkaXIpIHtcblx0Zm9yIChsZXQgaSA9IGRpciA9PSAxID8gX2kwIDogX2kxOyBpID49IF9pMCAmJiBpIDw9IF9pMTsgaSArPSBkaXIpIHtcblx0XHRpZiAoZGF0YVtpXSAhPSBudWxsKVxuXHRcdFx0cmV0dXJuIGk7XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGdldE1pbk1heChkYXRhLCBfaTAsIF9pMSwgc29ydGVkKSB7XG4vL1x0Y29uc29sZS5sb2coXCJnZXRNaW5NYXgoKVwiKTtcblxuXHRsZXQgX21pbiA9IGluZjtcblx0bGV0IF9tYXggPSAtaW5mO1xuXG5cdGlmIChzb3J0ZWQgPT0gMSkge1xuXHRcdF9taW4gPSBkYXRhW19pMF07XG5cdFx0X21heCA9IGRhdGFbX2kxXTtcblx0fVxuXHRlbHNlIGlmIChzb3J0ZWQgPT0gLTEpIHtcblx0XHRfbWluID0gZGF0YVtfaTFdO1xuXHRcdF9tYXggPSBkYXRhW19pMF07XG5cdH1cblx0ZWxzZSB7XG5cdFx0Zm9yIChsZXQgaSA9IF9pMDsgaSA8PSBfaTE7IGkrKykge1xuXHRcdFx0aWYgKGRhdGFbaV0gIT0gbnVsbCkge1xuXHRcdFx0XHRfbWluID0gbWluKF9taW4sIGRhdGFbaV0pO1xuXHRcdFx0XHRfbWF4ID0gbWF4KF9tYXgsIGRhdGFbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbX21pbiwgX21heF07XG59XG5cbmZ1bmN0aW9uIGdldE1pbk1heExvZyhkYXRhLCBfaTAsIF9pMSkge1xuLy9cdGNvbnNvbGUubG9nKFwiZ2V0TWluTWF4KClcIik7XG5cblx0bGV0IF9taW4gPSBpbmY7XG5cdGxldCBfbWF4ID0gLWluZjtcblxuXHRmb3IgKGxldCBpID0gX2kwOyBpIDw9IF9pMTsgaSsrKSB7XG5cdFx0aWYgKGRhdGFbaV0gPiAwKSB7XG5cdFx0XHRfbWluID0gbWluKF9taW4sIGRhdGFbaV0pO1xuXHRcdFx0X21heCA9IG1heChfbWF4LCBkYXRhW2ldKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdF9taW4gPT0gIGluZiA/ICAxIDogX21pbixcblx0XHRfbWF4ID09IC1pbmYgPyAxMCA6IF9tYXgsXG5cdF07XG59XG5cbmZ1bmN0aW9uIHJhbmdlTG9nKG1pbiwgbWF4LCBiYXNlLCBmdWxsTWFncykge1xuXHRsZXQgbWluU2lnbiA9IHNpZ24obWluKTtcblx0bGV0IG1heFNpZ24gPSBzaWduKG1heCk7XG5cblx0bGV0IGxvZ0ZuID0gYmFzZSA9PSAxMCA/IGxvZzEwIDogbG9nMjtcblxuXHRpZiAobWluID09IG1heCkge1xuXHRcdGlmIChtaW5TaWduID09IC0xKSB7XG5cdFx0XHRtaW4gKj0gYmFzZTtcblx0XHRcdG1heCAvPSBiYXNlO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdG1pbiAvPSBiYXNlO1xuXHRcdFx0bWF4ICo9IGJhc2U7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGdyb3dNaW5BYnMgPSBtaW5TaWduID09IDEgPyBmbG9vciA6IGNlaWw7XG5cdGxldCBncm93TWF4QWJzID0gbWF4U2lnbiA9PSAxID8gY2VpbCA6IGZsb29yO1xuXG5cdGxldCBtaW5FeHAgPSBncm93TWluQWJzKGxvZ0ZuKGFicyhtaW4pKSk7XG5cdGxldCBtYXhFeHAgPSBncm93TWF4QWJzKGxvZ0ZuKGFicyhtYXgpKSk7XG5cblx0bGV0IG1pbkluY3IgPSBwb3coYmFzZSwgbWluRXhwKTtcblx0bGV0IG1heEluY3IgPSBwb3coYmFzZSwgbWF4RXhwKTtcblxuXHQvLyBmaXggdmFsdWVzIGxpa2UgTWF0aC5wb3coMTAsIC01KSA9PT0gMC4wMDAwMDk5OTk5OTk5OTk5OTk5OTlcblx0aWYgKGJhc2UgPT0gMTApIHtcblx0XHRpZiAobWluRXhwIDwgMClcblx0XHRcdG1pbkluY3IgPSByb3VuZERlYyhtaW5JbmNyLCAtbWluRXhwKTtcblx0XHRpZiAobWF4RXhwIDwgMClcblx0XHRcdG1heEluY3IgPSByb3VuZERlYyhtYXhJbmNyLCAtbWF4RXhwKTtcblx0fVxuXG5cdGlmIChmdWxsTWFncyB8fCBiYXNlID09IDIpIHtcblx0XHRtaW4gPSBtaW5JbmNyICogbWluU2lnbjtcblx0XHRtYXggPSBtYXhJbmNyICogbWF4U2lnbjtcblx0fVxuXHRlbHNlIHtcblx0XHRtaW4gPSBpbmNyUm91bmREbihtaW4sIG1pbkluY3IpO1xuXHRcdG1heCA9IGluY3JSb3VuZFVwKG1heCwgbWF4SW5jcik7XG5cdH1cblxuXHRyZXR1cm4gW21pbiwgbWF4XTtcbn1cblxuZnVuY3Rpb24gcmFuZ2VBc2luaChtaW4sIG1heCwgYmFzZSwgZnVsbE1hZ3MpIHtcblx0bGV0IG1pbk1heCA9IHJhbmdlTG9nKG1pbiwgbWF4LCBiYXNlLCBmdWxsTWFncyk7XG5cblx0aWYgKG1pbiA9PSAwKVxuXHRcdG1pbk1heFswXSA9IDA7XG5cblx0aWYgKG1heCA9PSAwKVxuXHRcdG1pbk1heFsxXSA9IDA7XG5cblx0cmV0dXJuIG1pbk1heDtcbn1cblxuY29uc3QgcmFuZ2VQYWQgPSAwLjE7XG5cbmNvbnN0IGF1dG9SYW5nZVBhcnQgPSB7XG5cdG1vZGU6IDMsXG5cdHBhZDogcmFuZ2VQYWQsXG59O1xuXG5jb25zdCBfZXFSYW5nZVBhcnQgPSB7XG5cdHBhZDogIDAsXG5cdHNvZnQ6IG51bGwsXG5cdG1vZGU6IDAsXG59O1xuXG5jb25zdCBfZXFSYW5nZSA9IHtcblx0bWluOiBfZXFSYW5nZVBhcnQsXG5cdG1heDogX2VxUmFuZ2VQYXJ0LFxufTtcblxuLy8gdGhpcyBlbnN1cmVzIHRoYXQgbm9uLXRlbXBvcmFsL251bWVyaWMgeS1heGVzIGdldCBtdWx0aXBsZS1zbmFwcGVkIHBhZGRpbmcgYWRkZWQgYWJvdmUvYmVsb3dcbi8vIFRPRE86IGFsc28gYWNjb3VudCBmb3IgaW5jcnMgd2hlbiBzbmFwcGluZyB0byBlbnN1cmUgdG9wIG9mIGF4aXMgZ2V0cyBhIHRpY2sgJiB2YWx1ZVxuZnVuY3Rpb24gcmFuZ2VOdW0oX21pbiwgX21heCwgbXVsdCwgZXh0cmEpIHtcblx0aWYgKGlzT2JqKG11bHQpKVxuXHRcdHJldHVybiBfcmFuZ2VOdW0oX21pbiwgX21heCwgbXVsdCk7XG5cblx0X2VxUmFuZ2VQYXJ0LnBhZCAgPSBtdWx0O1xuXHRfZXFSYW5nZVBhcnQuc29mdCA9IGV4dHJhID8gMCA6IG51bGw7XG5cdF9lcVJhbmdlUGFydC5tb2RlID0gZXh0cmEgPyAzIDogMDtcblxuXHRyZXR1cm4gX3JhbmdlTnVtKF9taW4sIF9tYXgsIF9lcVJhbmdlKTtcbn1cblxuLy8gbnVsbGlzaCBjb2FsZXNjZVxuZnVuY3Rpb24gaWZOdWxsKGxoLCByaCkge1xuXHRyZXR1cm4gbGggPT0gbnVsbCA/IHJoIDogbGg7XG59XG5cbi8vIGNoZWNrcyBpZiBnaXZlbiBpbmRleCByYW5nZSBpbiBhbiBhcnJheSBjb250YWlucyBhIG5vbi1udWxsIHZhbHVlXG4vLyBha2EgYSByYW5nZS1ib3VuZGVkIEFycmF5LnNvbWUoKVxuZnVuY3Rpb24gaGFzRGF0YShkYXRhLCBpZHgwLCBpZHgxKSB7XG5cdGlkeDAgPSBpZk51bGwoaWR4MCwgMCk7XG5cdGlkeDEgPSBpZk51bGwoaWR4MSwgZGF0YS5sZW5ndGggLSAxKTtcblxuXHR3aGlsZSAoaWR4MCA8PSBpZHgxKSB7XG5cdFx0aWYgKGRhdGFbaWR4MF0gIT0gbnVsbClcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGlkeDArKztcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3JhbmdlTnVtKF9taW4sIF9tYXgsIGNmZykge1xuXHRsZXQgY21pbiA9IGNmZy5taW47XG5cdGxldCBjbWF4ID0gY2ZnLm1heDtcblxuXHRsZXQgcGFkTWluID0gaWZOdWxsKGNtaW4ucGFkLCAwKTtcblx0bGV0IHBhZE1heCA9IGlmTnVsbChjbWF4LnBhZCwgMCk7XG5cblx0bGV0IGhhcmRNaW4gPSBpZk51bGwoY21pbi5oYXJkLCAtaW5mKTtcblx0bGV0IGhhcmRNYXggPSBpZk51bGwoY21heC5oYXJkLCAgaW5mKTtcblxuXHRsZXQgc29mdE1pbiA9IGlmTnVsbChjbWluLnNvZnQsICBpbmYpO1xuXHRsZXQgc29mdE1heCA9IGlmTnVsbChjbWF4LnNvZnQsIC1pbmYpO1xuXG5cdGxldCBzb2Z0TWluTW9kZSA9IGlmTnVsbChjbWluLm1vZGUsIDApO1xuXHRsZXQgc29mdE1heE1vZGUgPSBpZk51bGwoY21heC5tb2RlLCAwKTtcblxuXHRsZXQgZGVsdGEgPSBfbWF4IC0gX21pbjtcblx0bGV0IGRlbHRhTWFnID0gbG9nMTAoZGVsdGEpO1xuXG5cdGxldCBzY2FsYXJNYXggPSBtYXgoYWJzKF9taW4pLCBhYnMoX21heCkpO1xuXHRsZXQgc2NhbGFyTWFnID0gbG9nMTAoc2NhbGFyTWF4KTtcblxuXHRsZXQgc2NhbGFyTWFnRGVsdGEgPSBhYnMoc2NhbGFyTWFnIC0gZGVsdGFNYWcpO1xuXG5cdC8vIHRoaXMgaGFuZGxlcyBzaXR1YXRpb25zIGxpa2UgODkuNywgODkuNjk5OTk5OTk5OTk5OTlcblx0Ly8gYnkgYXNzdW1pbmcgMC4wMDF4IGRlbHRhcyBhcmUgcHJlY2lzaW9uIGVycm9yc1xuLy9cdGlmIChkZWx0YSA+IDAgJiYgZGVsdGEgPCBhYnMoX21heCkgLyAxZTMpXG4vL1x0XHRkZWx0YSA9IDA7XG5cblx0Ly8gdHJlYXQgZGF0YSBhcyBmbGF0IGlmIGRlbHRhIGlzIGxlc3MgdGhhbiAxIGJpbGxpb250aFxuXHQvLyBvciByYW5nZSBpcyAxMSsgb3JkZXJzIG9mIG1hZ25pdHVkZSBiZWxvdyByYXcgdmFsdWVzLCBlLmcuIDk5OTk5OTk5Ljk5OTk5OTk2IC0gMTAwMDAwMDAwLjAwMDAwMDA0XG5cdGlmIChkZWx0YSA8IDFlLTkgfHwgc2NhbGFyTWFnRGVsdGEgPiAxMCkge1xuXHRcdGRlbHRhID0gMDtcblxuXHRcdC8vIGlmIHNvZnQgbW9kZSBpcyAyIGFuZCBhbGwgdmFscyBhcmUgZmxhdCBhdCAwLCBhdm9pZCB0aGUgMC4xICogMWUzIGZhbGxiYWNrXG5cdFx0Ly8gdGhpcyBwcmV2ZW50cyAwLDAsMCBmcm9tIHJhbmdpbmcgdG8gLTEwMCwxMDAgd2hlbiBzb2Z0TWluL3NvZnRNYXggYXJlIC0xLDFcblx0XHRpZiAoX21pbiA9PSAwIHx8IF9tYXggPT0gMCkge1xuXHRcdFx0ZGVsdGEgPSAxZS05O1xuXG5cdFx0XHRpZiAoc29mdE1pbk1vZGUgPT0gMiAmJiBzb2Z0TWluICE9IGluZilcblx0XHRcdFx0cGFkTWluID0gMDtcblxuXHRcdFx0aWYgKHNvZnRNYXhNb2RlID09IDIgJiYgc29mdE1heCAhPSAtaW5mKVxuXHRcdFx0XHRwYWRNYXggPSAwO1xuXHRcdH1cblx0fVxuXG5cdGxldCBub25aZXJvRGVsdGEgPSBkZWx0YSB8fCBzY2FsYXJNYXggfHwgMWUzO1xuXHRsZXQgbWFnICAgICAgICAgID0gbG9nMTAobm9uWmVyb0RlbHRhKTtcblx0bGV0IGJhc2UgICAgICAgICA9IHBvdygxMCwgZmxvb3IobWFnKSk7XG5cblx0bGV0IF9wYWRNaW4gID0gbm9uWmVyb0RlbHRhICogKGRlbHRhID09IDAgPyAoX21pbiA9PSAwID8gLjEgOiAxKSA6IHBhZE1pbik7XG5cdGxldCBfbmV3TWluICA9IHJvdW5kRGVjKGluY3JSb3VuZERuKF9taW4gLSBfcGFkTWluLCBiYXNlLzEwKSwgOSk7XG5cdGxldCBfc29mdE1pbiA9IF9taW4gPj0gc29mdE1pbiAmJiAoc29mdE1pbk1vZGUgPT0gMSB8fCBzb2Z0TWluTW9kZSA9PSAzICYmIF9uZXdNaW4gPD0gc29mdE1pbiB8fCBzb2Z0TWluTW9kZSA9PSAyICYmIF9uZXdNaW4gPj0gc29mdE1pbikgPyBzb2Z0TWluIDogaW5mO1xuXHRsZXQgbWluTGltICAgPSBtYXgoaGFyZE1pbiwgX25ld01pbiA8IF9zb2Z0TWluICYmIF9taW4gPj0gX3NvZnRNaW4gPyBfc29mdE1pbiA6IG1pbihfc29mdE1pbiwgX25ld01pbikpO1xuXG5cdGxldCBfcGFkTWF4ICA9IG5vblplcm9EZWx0YSAqIChkZWx0YSA9PSAwID8gKF9tYXggPT0gMCA/IC4xIDogMSkgOiBwYWRNYXgpO1xuXHRsZXQgX25ld01heCAgPSByb3VuZERlYyhpbmNyUm91bmRVcChfbWF4ICsgX3BhZE1heCwgYmFzZS8xMCksIDkpO1xuXHRsZXQgX3NvZnRNYXggPSBfbWF4IDw9IHNvZnRNYXggJiYgKHNvZnRNYXhNb2RlID09IDEgfHwgc29mdE1heE1vZGUgPT0gMyAmJiBfbmV3TWF4ID49IHNvZnRNYXggfHwgc29mdE1heE1vZGUgPT0gMiAmJiBfbmV3TWF4IDw9IHNvZnRNYXgpID8gc29mdE1heCA6IC1pbmY7XG5cdGxldCBtYXhMaW0gICA9IG1pbihoYXJkTWF4LCBfbmV3TWF4ID4gX3NvZnRNYXggJiYgX21heCA8PSBfc29mdE1heCA/IF9zb2Z0TWF4IDogbWF4KF9zb2Z0TWF4LCBfbmV3TWF4KSk7XG5cblx0aWYgKG1pbkxpbSA9PSBtYXhMaW0gJiYgbWluTGltID09IDApXG5cdFx0bWF4TGltID0gMTAwO1xuXG5cdHJldHVybiBbbWluTGltLCBtYXhMaW1dO1xufVxuXG4vLyBhbHRlcm5hdGl2ZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNTQ4OTZcbmNvbnN0IG51bUZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChkb21FbnYgPyBuYXYubGFuZ3VhZ2UgOiAnZW4tVVMnKTtcbmNvbnN0IGZtdE51bSA9IHZhbCA9PiBudW1Gb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XG5cbmNvbnN0IE0gPSBNYXRoO1xuXG5jb25zdCBQSSA9IE0uUEk7XG5jb25zdCBhYnMgPSBNLmFicztcbmNvbnN0IGZsb29yID0gTS5mbG9vcjtcbmNvbnN0IHJvdW5kID0gTS5yb3VuZDtcbmNvbnN0IGNlaWwgPSBNLmNlaWw7XG5jb25zdCBtaW4gPSBNLm1pbjtcbmNvbnN0IG1heCA9IE0ubWF4O1xuY29uc3QgcG93ID0gTS5wb3c7XG5jb25zdCBzaWduID0gTS5zaWduO1xuY29uc3QgbG9nMTAgPSBNLmxvZzEwO1xuY29uc3QgbG9nMiA9IE0ubG9nMjtcbi8vIFRPRE86IHNlZW1zIGxpa2UgdGhpcyBuZWVkcyB0byBtYXRjaCBhc2luaCBpbXBsIGlmIHRoZSBwYXNzZWQgdiBpcyB0d2Vha2VkP1xuY29uc3Qgc2luaCA9ICAodiwgbGludGhyZXNoID0gMSkgPT4gTS5zaW5oKHYpICogbGludGhyZXNoO1xuY29uc3QgYXNpbmggPSAodiwgbGludGhyZXNoID0gMSkgPT4gTS5hc2luaCh2IC8gbGludGhyZXNoKTtcblxuY29uc3QgaW5mID0gSW5maW5pdHk7XG5cbmZ1bmN0aW9uIG51bUludERpZ2l0cyh4KSB7XG5cdHJldHVybiAobG9nMTAoKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpKSB8IDApICsgMTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobnVtLCBfbWluLCBfbWF4KSB7XG5cdHJldHVybiBtaW4obWF4KG51bSwgX21pbiksIF9tYXgpO1xufVxuXG5mdW5jdGlvbiBmbk9yU2VsZih2KSB7XG5cdHJldHVybiB0eXBlb2YgdiA9PSBcImZ1bmN0aW9uXCIgPyB2IDogKCkgPT4gdjtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5jb25zdCByZXRBcmcwID0gXzAgPT4gXzA7XG5cbmNvbnN0IHJldEFyZzEgPSAoXzAsIF8xKSA9PiBfMTtcblxuY29uc3QgcmV0TnVsbCA9IF8gPT4gbnVsbDtcblxuY29uc3QgcmV0VHJ1ZSA9IF8gPT4gdHJ1ZTtcblxuY29uc3QgcmV0RXEgPSAoYSwgYikgPT4gYSA9PSBiO1xuXG4vLyB0aGlzIHdpbGwgcHJvYmFibHkgcHJldmVudCB0aWNrIGluY3JzID4gMTQgZGVjaW1hbCBwbGFjZXNcbi8vICh3ZSBnZW5lcmF0ZSB1cCB0byAxNyBkZWMsIHNlZSBmaXhlZERlYyBjb25zdClcbmNvbnN0IGZpeEZsb2F0ID0gdiA9PiByb3VuZERlYyh2LCAxNCk7XG5cbmZ1bmN0aW9uIGluY3JSb3VuZChudW0sIGluY3IpIHtcblx0cmV0dXJuIGZpeEZsb2F0KHJvdW5kRGVjKGZpeEZsb2F0KG51bS9pbmNyKSkqaW5jcik7XG59XG5cbmZ1bmN0aW9uIGluY3JSb3VuZFVwKG51bSwgaW5jcikge1xuXHRyZXR1cm4gZml4RmxvYXQoY2VpbChmaXhGbG9hdChudW0vaW5jcikpKmluY3IpO1xufVxuXG5mdW5jdGlvbiBpbmNyUm91bmREbihudW0sIGluY3IpIHtcblx0cmV0dXJuIGZpeEZsb2F0KGZsb29yKGZpeEZsb2F0KG51bS9pbmNyKSkqaW5jcik7XG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODc2NDQzNlxuLy8gcm91bmRzIGhhbGYgYXdheSBmcm9tIHplcm9cbmZ1bmN0aW9uIHJvdW5kRGVjKHZhbCwgZGVjID0gMCkge1xuXHRpZiAoaXNJbnQodmFsKSlcblx0XHRyZXR1cm4gdmFsO1xuLy9cdGVsc2UgaWYgKGRlYyA9PSAwKVxuLy9cdFx0cmV0dXJuIHJvdW5kKHZhbCk7XG5cblx0bGV0IHAgPSAxMCAqKiBkZWM7XG5cdGxldCBuID0gKHZhbCAqIHApICogKDEgKyBOdW1iZXIuRVBTSUxPTik7XG5cdHJldHVybiByb3VuZChuKSAvIHA7XG59XG5cbmNvbnN0IGZpeGVkRGVjID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBndWVzc0RlYyhudW0pIHtcblx0cmV0dXJuICgoXCJcIitudW0pLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdlbkluY3JzKGJhc2UsIG1pbkV4cCwgbWF4RXhwLCBtdWx0cykge1xuXHRsZXQgaW5jcnMgPSBbXTtcblxuXHRsZXQgbXVsdERlYyA9IG11bHRzLm1hcChndWVzc0RlYyk7XG5cblx0Zm9yIChsZXQgZXhwID0gbWluRXhwOyBleHAgPCBtYXhFeHA7IGV4cCsrKSB7XG5cdFx0bGV0IGV4cGEgPSBhYnMoZXhwKTtcblx0XHRsZXQgbWFnID0gcm91bmREZWMocG93KGJhc2UsIGV4cCksIGV4cGEpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IF9pbmNyID0gbXVsdHNbaV0gKiBtYWc7XG5cdFx0XHRsZXQgZGVjID0gKF9pbmNyID49IDAgJiYgZXhwID49IDAgPyAwIDogZXhwYSkgKyAoZXhwID49IG11bHREZWNbaV0gPyAwIDogbXVsdERlY1tpXSk7XG5cdFx0XHRsZXQgaW5jciA9IHJvdW5kRGVjKF9pbmNyLCBkZWMpO1xuXHRcdFx0aW5jcnMucHVzaChpbmNyKTtcblx0XHRcdGZpeGVkRGVjLnNldChpbmNyLCBkZWMpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBpbmNycztcbn1cblxuLy9leHBvcnQgY29uc3QgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuY29uc3QgRU1QVFlfT0JKID0ge307XG5jb25zdCBFTVBUWV9BUlIgPSBbXTtcblxuY29uc3QgbnVsbE51bGxUdXBsZSA9IFtudWxsLCBudWxsXTtcblxuY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgaXNJbnQgPSBOdW1iZXIuaXNJbnRlZ2VyO1xuY29uc3QgaXNVbmRlZiA9IHYgPT4gdiA9PT0gdm9pZCAwO1xuXG5mdW5jdGlvbiBpc1N0cih2KSB7XG5cdHJldHVybiB0eXBlb2YgdiA9PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNPYmoodikge1xuXHRsZXQgaXMgPSBmYWxzZTtcblxuXHRpZiAodiAhPSBudWxsKSB7XG5cdFx0bGV0IGMgPSB2LmNvbnN0cnVjdG9yO1xuXHRcdGlzID0gYyA9PSBudWxsIHx8IGMgPT0gT2JqZWN0O1xuXHR9XG5cblx0cmV0dXJuIGlzO1xufVxuXG5mdW5jdGlvbiBmYXN0SXNPYmoodikge1xuXHRyZXR1cm4gdiAhPSBudWxsICYmIHR5cGVvZiB2ID09ICdvYmplY3QnO1xufVxuXG5jb25zdCBUeXBlZEFycmF5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpO1xuXG5mdW5jdGlvbiBjb3B5KG8sIF9pc09iaiA9IGlzT2JqKSB7XG5cdGxldCBvdXQ7XG5cblx0aWYgKGlzQXJyKG8pKSB7XG5cdFx0bGV0IHZhbCA9IG8uZmluZCh2ID0+IHYgIT0gbnVsbCk7XG5cblx0XHRpZiAoaXNBcnIodmFsKSB8fCBfaXNPYmoodmFsKSkge1xuXHRcdFx0b3V0ID0gQXJyYXkoby5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRvdXRbaV0gPSBjb3B5KG9baV0sIF9pc09iaik7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdG91dCA9IG8uc2xpY2UoKTtcblx0fVxuXHRlbHNlIGlmIChvIGluc3RhbmNlb2YgVHlwZWRBcnJheSkgLy8gYWxzbyAoQXJyYXlCdWZmZXIuaXNWaWV3KG8pICYmICEobyBpbnN0YW5jZW9mIERhdGFWaWV3KSlcblx0XHRvdXQgPSBvLnNsaWNlKCk7XG5cdGVsc2UgaWYgKF9pc09iaihvKSkge1xuXHRcdG91dCA9IHt9O1xuXHRcdGZvciAobGV0IGsgaW4gbylcblx0XHRcdG91dFtrXSA9IGNvcHkob1trXSwgX2lzT2JqKTtcblx0fVxuXHRlbHNlXG5cdFx0b3V0ID0gbztcblxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZykge1xuXHRsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgc3JjID0gYXJnc1tpXTtcblxuXHRcdGZvciAobGV0IGtleSBpbiBzcmMpIHtcblx0XHRcdGlmIChpc09iaih0YXJnW2tleV0pKVxuXHRcdFx0XHRhc3NpZ24odGFyZ1trZXldLCBjb3B5KHNyY1trZXldKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRhcmdba2V5XSA9IGNvcHkoc3JjW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0YXJnO1xufVxuXG4vLyBudWxsTW9kZXNcbmNvbnN0IE5VTExfUkVNT1ZFID0gMDsgIC8vIG51bGxzIGFyZSBjb252ZXJ0ZWQgdG8gdW5kZWZpbmVkIChlLmcuIGZvciBzcGFuR2FwczogdHJ1ZSlcbmNvbnN0IE5VTExfUkVUQUlOID0gMTsgIC8vIG51bGxzIGFyZSByZXRhaW5lZCwgd2l0aCBhbGlnbm1lbnQgYXJ0aWZhY3RzIHNldCB0byB1bmRlZmluZWQgKGRlZmF1bHQpXG5jb25zdCBOVUxMX0VYUEFORCA9IDI7ICAvLyBudWxscyBhcmUgZXhwYW5kZWQgdG8gaW5jbHVkZSBhbnkgYWRqYWNlbnQgYWxpZ25tZW50IGFydGlmYWN0c1xuXG4vLyBzZXRzIHVuZGVmaW5lZCB2YWx1ZXMgdG8gbnVsbHMgd2hlbiBhZGphY2VudCB0byBleGlzdGluZyBudWxscyAobWluZXN3ZWVwZXIpXG5mdW5jdGlvbiBudWxsRXhwYW5kKHlWYWxzLCBudWxsSWR4cywgYWxpZ25lZExlbikge1xuXHRmb3IgKGxldCBpID0gMCwgeGksIGxhc3ROdWxsSWR4ID0gLTE7IGkgPCBudWxsSWR4cy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBudWxsSWR4ID0gbnVsbElkeHNbaV07XG5cblx0XHRpZiAobnVsbElkeCA+IGxhc3ROdWxsSWR4KSB7XG5cdFx0XHR4aSA9IG51bGxJZHggLSAxO1xuXHRcdFx0d2hpbGUgKHhpID49IDAgJiYgeVZhbHNbeGldID09IG51bGwpXG5cdFx0XHRcdHlWYWxzW3hpLS1dID0gbnVsbDtcblxuXHRcdFx0eGkgPSBudWxsSWR4ICsgMTtcblx0XHRcdHdoaWxlICh4aSA8IGFsaWduZWRMZW4gJiYgeVZhbHNbeGldID09IG51bGwpXG5cdFx0XHRcdHlWYWxzW2xhc3ROdWxsSWR4ID0geGkrK10gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG4vLyBudWxsTW9kZXMgaXMgYSB0YWJsZXMtbWF0Y2hlZCBhcnJheSBpbmRpY2F0aW5nIGhvdyB0byB0cmVhdCBudWxscyBpbiBlYWNoIHNlcmllc1xuLy8gb3V0cHV0IGlzIHNvcnRlZCBBU0Mgb24gdGhlIGpvaW5lZCBmaWVsZCAodGFibGVbMF0pIGFuZCBkdXBsaWNhdGUgam9pbiB2YWx1ZXMgYXJlIGNvbGxhcHNlZFxuZnVuY3Rpb24gam9pbih0YWJsZXMsIG51bGxNb2Rlcykge1xuXHRsZXQgeFZhbHMgPSBuZXcgU2V0KCk7XG5cblx0Zm9yIChsZXQgdGkgPSAwOyB0aSA8IHRhYmxlcy5sZW5ndGg7IHRpKyspIHtcblx0XHRsZXQgdCA9IHRhYmxlc1t0aV07XG5cdFx0bGV0IHhzID0gdFswXTtcblx0XHRsZXQgbGVuID0geHMubGVuZ3RoO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0XHRcdHhWYWxzLmFkZCh4c1tpXSk7XG5cdH1cblxuXHRsZXQgZGF0YSA9IFtBcnJheS5mcm9tKHhWYWxzKS5zb3J0KChhLCBiKSA9PiBhIC0gYildO1xuXG5cdGxldCBhbGlnbmVkTGVuID0gZGF0YVswXS5sZW5ndGg7XG5cblx0bGV0IHhJZHhzID0gbmV3IE1hcCgpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYWxpZ25lZExlbjsgaSsrKVxuXHRcdHhJZHhzLnNldChkYXRhWzBdW2ldLCBpKTtcblxuXHRmb3IgKGxldCB0aSA9IDA7IHRpIDwgdGFibGVzLmxlbmd0aDsgdGkrKykge1xuXHRcdGxldCB0ID0gdGFibGVzW3RpXTtcblx0XHRsZXQgeHMgPSB0WzBdO1xuXG5cdFx0Zm9yIChsZXQgc2kgPSAxOyBzaSA8IHQubGVuZ3RoOyBzaSsrKSB7XG5cdFx0XHRsZXQgeXMgPSB0W3NpXTtcblxuXHRcdFx0bGV0IHlWYWxzID0gQXJyYXkoYWxpZ25lZExlbikuZmlsbCh1bmRlZmluZWQpO1xuXG5cdFx0XHRsZXQgbnVsbE1vZGUgPSBudWxsTW9kZXMgPyBudWxsTW9kZXNbdGldW3NpXSA6IE5VTExfUkVUQUlOO1xuXG5cdFx0XHRsZXQgbnVsbElkeHMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgeVZhbCA9IHlzW2ldO1xuXHRcdFx0XHRsZXQgYWxpZ25lZElkeCA9IHhJZHhzLmdldCh4c1tpXSk7XG5cblx0XHRcdFx0aWYgKHlWYWwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRpZiAobnVsbE1vZGUgIT0gTlVMTF9SRU1PVkUpIHtcblx0XHRcdFx0XHRcdHlWYWxzW2FsaWduZWRJZHhdID0geVZhbDtcblxuXHRcdFx0XHRcdFx0aWYgKG51bGxNb2RlID09IE5VTExfRVhQQU5EKVxuXHRcdFx0XHRcdFx0XHRudWxsSWR4cy5wdXNoKGFsaWduZWRJZHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0eVZhbHNbYWxpZ25lZElkeF0gPSB5VmFsO1xuXHRcdFx0fVxuXG5cdFx0XHRudWxsRXhwYW5kKHlWYWxzLCBudWxsSWR4cywgYWxpZ25lZExlbik7XG5cblx0XHRcdGRhdGEucHVzaCh5VmFscyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbmNvbnN0IG1pY3JvVGFzayA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PSBcInVuZGVmaW5lZFwiID8gZm4gPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmbikgOiBxdWV1ZU1pY3JvdGFzaztcblxuY29uc3QgbW9udGhzID0gW1xuXHRcIkphbnVhcnlcIixcblx0XCJGZWJydWFyeVwiLFxuXHRcIk1hcmNoXCIsXG5cdFwiQXByaWxcIixcblx0XCJNYXlcIixcblx0XCJKdW5lXCIsXG5cdFwiSnVseVwiLFxuXHRcIkF1Z3VzdFwiLFxuXHRcIlNlcHRlbWJlclwiLFxuXHRcIk9jdG9iZXJcIixcblx0XCJOb3ZlbWJlclwiLFxuXHRcIkRlY2VtYmVyXCIsXG5dO1xuXG5jb25zdCBkYXlzID0gW1xuXHRcIlN1bmRheVwiLFxuXHRcIk1vbmRheVwiLFxuXHRcIlR1ZXNkYXlcIixcblx0XCJXZWRuZXNkYXlcIixcblx0XCJUaHVyc2RheVwiLFxuXHRcIkZyaWRheVwiLFxuXHRcIlNhdHVyZGF5XCIsXG5dO1xuXG5mdW5jdGlvbiBzbGljZTMoc3RyKSB7XG5cdHJldHVybiBzdHIuc2xpY2UoMCwgMyk7XG59XG5cbmNvbnN0IGRheXMzID0gZGF5cy5tYXAoc2xpY2UzKTtcblxuY29uc3QgbW9udGhzMyA9IG1vbnRocy5tYXAoc2xpY2UzKTtcblxuY29uc3QgZW5nTmFtZXMgPSB7XG5cdE1NTU06IG1vbnRocyxcblx0TU1NOiAgbW9udGhzMyxcblx0V1dXVzogZGF5cyxcblx0V1dXOiAgZGF5czMsXG59O1xuXG5mdW5jdGlvbiB6ZXJvUGFkMihpbnQpIHtcblx0cmV0dXJuIChpbnQgPCAxMCA/ICcwJyA6ICcnKSArIGludDtcbn1cblxuZnVuY3Rpb24gemVyb1BhZDMoaW50KSB7XG5cdHJldHVybiAoaW50IDwgMTAgPyAnMDAnIDogaW50IDwgMTAwID8gJzAnIDogJycpICsgaW50O1xufVxuXG4vKlxuZnVuY3Rpb24gc3VmZml4KGludCkge1xuXHRsZXQgbW9kMTAgPSBpbnQgJSAxMDtcblxuXHRyZXR1cm4gaW50ICsgKFxuXHRcdG1vZDEwID09IDEgJiYgaW50ICE9IDExID8gXCJzdFwiIDpcblx0XHRtb2QxMCA9PSAyICYmIGludCAhPSAxMiA/IFwibmRcIiA6XG5cdFx0bW9kMTAgPT0gMyAmJiBpbnQgIT0gMTMgPyBcInJkXCIgOiBcInRoXCJcblx0KTtcbn1cbiovXG5cbmNvbnN0IHN1YnMgPSB7XG5cdC8vIDIwMTlcblx0WVlZWTpcdGQgPT4gZC5nZXRGdWxsWWVhcigpLFxuXHQvLyAxOVxuXHRZWTpcdFx0ZCA9PiAoZC5nZXRGdWxsWWVhcigpKycnKS5zbGljZSgyKSxcblx0Ly8gSnVseVxuXHRNTU1NOlx0KGQsIG5hbWVzKSA9PiBuYW1lcy5NTU1NW2QuZ2V0TW9udGgoKV0sXG5cdC8vIEp1bFxuXHRNTU06XHQoZCwgbmFtZXMpID0+IG5hbWVzLk1NTVtkLmdldE1vbnRoKCldLFxuXHQvLyAwN1xuXHRNTTpcdFx0ZCA9PiB6ZXJvUGFkMihkLmdldE1vbnRoKCkrMSksXG5cdC8vIDdcblx0TTpcdFx0ZCA9PiBkLmdldE1vbnRoKCkrMSxcblx0Ly8gMDlcblx0REQ6XHRcdGQgPT4gemVyb1BhZDIoZC5nZXREYXRlKCkpLFxuXHQvLyA5XG5cdEQ6XHRcdGQgPT4gZC5nZXREYXRlKCksXG5cdC8vIE1vbmRheVxuXHRXV1dXOlx0KGQsIG5hbWVzKSA9PiBuYW1lcy5XV1dXW2QuZ2V0RGF5KCldLFxuXHQvLyBNb25cblx0V1dXOlx0KGQsIG5hbWVzKSA9PiBuYW1lcy5XV1dbZC5nZXREYXkoKV0sXG5cdC8vIDAzXG5cdEhIOlx0XHRkID0+IHplcm9QYWQyKGQuZ2V0SG91cnMoKSksXG5cdC8vIDNcblx0SDpcdFx0ZCA9PiBkLmdldEhvdXJzKCksXG5cdC8vIDkgKDEyaHIsIHVucGFkZGVkKVxuXHRoOlx0XHRkID0+IHtsZXQgaCA9IGQuZ2V0SG91cnMoKTsgcmV0dXJuIGggPT0gMCA/IDEyIDogaCA+IDEyID8gaCAtIDEyIDogaDt9LFxuXHQvLyBBTVxuXHRBQTpcdFx0ZCA9PiBkLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcblx0Ly8gYW1cblx0YWE6XHRcdGQgPT4gZC5nZXRIb3VycygpID49IDEyID8gJ3BtJyA6ICdhbScsXG5cdC8vIGFcblx0YTpcdFx0ZCA9PiBkLmdldEhvdXJzKCkgPj0gMTIgPyAncCcgOiAnYScsXG5cdC8vIDA5XG5cdG1tOlx0XHRkID0+IHplcm9QYWQyKGQuZ2V0TWludXRlcygpKSxcblx0Ly8gOVxuXHRtOlx0XHRkID0+IGQuZ2V0TWludXRlcygpLFxuXHQvLyAwOVxuXHRzczpcdFx0ZCA9PiB6ZXJvUGFkMihkLmdldFNlY29uZHMoKSksXG5cdC8vIDlcblx0czpcdFx0ZCA9PiBkLmdldFNlY29uZHMoKSxcblx0Ly8gMzc0XG5cdGZmZjpcdGQgPT4gemVyb1BhZDMoZC5nZXRNaWxsaXNlY29uZHMoKSksXG59O1xuXG5mdW5jdGlvbiBmbXREYXRlKHRwbCwgbmFtZXMpIHtcblx0bmFtZXMgPSBuYW1lcyB8fCBlbmdOYW1lcztcblx0bGV0IHBhcnRzID0gW107XG5cblx0bGV0IFIgPSAvXFx7KFthLXpdKylcXH18W157XSsvZ2ksIG07XG5cblx0d2hpbGUgKG0gPSBSLmV4ZWModHBsKSlcblx0XHRwYXJ0cy5wdXNoKG1bMF1bMF0gPT0gJ3snID8gc3Vic1ttWzFdXSA6IG1bMF0pO1xuXG5cdHJldHVybiBkID0+IHtcblx0XHRsZXQgb3V0ID0gJyc7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKVxuXHRcdFx0b3V0ICs9IHR5cGVvZiBwYXJ0c1tpXSA9PSBcInN0cmluZ1wiID8gcGFydHNbaV0gOiBwYXJ0c1tpXShkLCBuYW1lcyk7XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG59XG5cbmNvbnN0IGxvY2FsVHogPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTE0MTc2Mi9ob3ctdG8taW5pdGlhbGl6ZS1hLWphdmFzY3JpcHQtZGF0ZS10by1hLXBhcnRpY3VsYXItdGltZS16b25lLzUzNjUyMTMxIzUzNjUyMTMxXG5mdW5jdGlvbiB0ekRhdGUoZGF0ZSwgdHopIHtcblx0bGV0IGRhdGUyO1xuXG5cdC8vIHBlcmYgb3B0aW1pemF0aW9uXG5cdGlmICh0eiA9PSAnVVRDJyB8fCB0eiA9PSAnRXRjL1VUQycpXG5cdFx0ZGF0ZTIgPSBuZXcgRGF0ZSgrZGF0ZSArIGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDZlNCk7XG5cdGVsc2UgaWYgKHR6ID09IGxvY2FsVHopXG5cdFx0ZGF0ZTIgPSBkYXRlO1xuXHRlbHNlIHtcblx0XHRkYXRlMiA9IG5ldyBEYXRlKGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge3RpbWVab25lOiB0en0pKTtcblx0XHRkYXRlMi5zZXRNaWxsaXNlY29uZHMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG5cdH1cblxuXHRyZXR1cm4gZGF0ZTI7XG59XG5cbi8vZXhwb3J0IGNvbnN0IHNlcmllcyA9IFtdO1xuXG4vLyBkZWZhdWx0IGZvcm1hdHRlcnM6XG5cbmNvbnN0IG9ubHlXaG9sZSA9IHYgPT4gdiAlIDEgPT0gMDtcblxuY29uc3QgYWxsTXVsdHMgPSBbMSwyLDIuNSw1XTtcblxuLy8gLi4uMC4wMSwgMC4wMiwgMC4wMjUsIDAuMDUsIDAuMSwgMC4yLCAwLjI1LCAwLjVcbmNvbnN0IGRlY0luY3JzID0gZ2VuSW5jcnMoMTAsIC0xNiwgMCwgYWxsTXVsdHMpO1xuXG4vLyAxLCAyLCAyLjUsIDUsIDEwLCAyMCwgMjUsIDUwLi4uXG5jb25zdCBvbmVJbmNycyA9IGdlbkluY3JzKDEwLCAwLCAxNiwgYWxsTXVsdHMpO1xuXG4vLyAxLCAyLCAgICAgIDUsIDEwLCAyMCwgMjUsIDUwLi4uXG5jb25zdCB3aG9sZUluY3JzID0gb25lSW5jcnMuZmlsdGVyKG9ubHlXaG9sZSk7XG5cbmNvbnN0IG51bUluY3JzID0gZGVjSW5jcnMuY29uY2F0KG9uZUluY3JzKTtcblxuY29uc3QgTkwgPSBcIlxcblwiO1xuXG5jb25zdCB5eXl5ICAgID0gXCJ7WVlZWX1cIjtcbmNvbnN0IE5MeXl5eSAgPSBOTCArIHl5eXk7XG5jb25zdCBtZCAgICAgID0gXCJ7TX0ve0R9XCI7XG5jb25zdCBOTG1kICAgID0gTkwgKyBtZDtcbmNvbnN0IE5MbWR5eSAgPSBOTG1kICsgXCIve1lZfVwiO1xuXG5jb25zdCBhYSAgICAgID0gXCJ7YWF9XCI7XG5jb25zdCBobW0gICAgID0gXCJ7aH06e21tfVwiO1xuY29uc3QgaG1tYWEgICA9IGhtbSArIGFhO1xuY29uc3QgTkxobW1hYSA9IE5MICsgaG1tYWE7XG5jb25zdCBzcyAgICAgID0gXCI6e3NzfVwiO1xuXG5jb25zdCBfID0gbnVsbDtcblxuZnVuY3Rpb24gZ2VuVGltZVN0dWZmcyhtcykge1xuXHRsZXRcdHMgID0gbXMgKiAxZTMsXG5cdFx0bSAgPSBzICAqIDYwLFxuXHRcdGggID0gbSAgKiA2MCxcblx0XHRkICA9IGggICogMjQsXG5cdFx0bW8gPSBkICAqIDMwLFxuXHRcdHkgID0gZCAgKiAzNjU7XG5cblx0Ly8gbWluIG9mIDFlLTMgcHJldmVudHMgc2V0dGluZyBhIHRlbXBvcmFsIHggdGlja3MgdG9vIHNtYWxsIHNpbmNlIERhdGUgb2JqZWN0cyBjYW5ub3QgYWR2YW5jZSB0aWNrcyBzbWFsbGVyIHRoYW4gMW1zXG5cdGxldCBzdWJTZWNJbmNycyA9IG1zID09IDEgPyBnZW5JbmNycygxMCwgMCwgMywgYWxsTXVsdHMpLmZpbHRlcihvbmx5V2hvbGUpIDogZ2VuSW5jcnMoMTAsIC0zLCAwLCBhbGxNdWx0cyk7XG5cblx0bGV0IHRpbWVJbmNycyA9IHN1YlNlY0luY3JzLmNvbmNhdChbXG5cdFx0Ly8gbWludXRlIGRpdmlzb3JzICgjIG9mIHNlY3MpXG5cdFx0cyxcblx0XHRzICogNSxcblx0XHRzICogMTAsXG5cdFx0cyAqIDE1LFxuXHRcdHMgKiAzMCxcblx0XHQvLyBob3VyIGRpdmlzb3JzICgjIG9mIG1pbnMpXG5cdFx0bSxcblx0XHRtICogNSxcblx0XHRtICogMTAsXG5cdFx0bSAqIDE1LFxuXHRcdG0gKiAzMCxcblx0XHQvLyBkYXkgZGl2aXNvcnMgKCMgb2YgaHJzKVxuXHRcdGgsXG5cdFx0aCAqIDIsXG5cdFx0aCAqIDMsXG5cdFx0aCAqIDQsXG5cdFx0aCAqIDYsXG5cdFx0aCAqIDgsXG5cdFx0aCAqIDEyLFxuXHRcdC8vIG1vbnRoIGRpdmlzb3JzIFRPRE86IG5lZWQgbW9yZT9cblx0XHRkLFxuXHRcdGQgKiAyLFxuXHRcdGQgKiAzLFxuXHRcdGQgKiA0LFxuXHRcdGQgKiA1LFxuXHRcdGQgKiA2LFxuXHRcdGQgKiA3LFxuXHRcdGQgKiA4LFxuXHRcdGQgKiA5LFxuXHRcdGQgKiAxMCxcblx0XHRkICogMTUsXG5cdFx0Ly8geWVhciBkaXZpc29ycyAoIyBtb250aHMsIGFwcHJveClcblx0XHRtbyxcblx0XHRtbyAqIDIsXG5cdFx0bW8gKiAzLFxuXHRcdG1vICogNCxcblx0XHRtbyAqIDYsXG5cdFx0Ly8gY2VudHVyeSBkaXZpc29yc1xuXHRcdHksXG5cdFx0eSAqIDIsXG5cdFx0eSAqIDUsXG5cdFx0eSAqIDEwLFxuXHRcdHkgKiAyNSxcblx0XHR5ICogNTAsXG5cdFx0eSAqIDEwMCxcblx0XSk7XG5cblx0Ly8gWzBdOiAgIG1pbmltdW0gbnVtIHNlY3MgaW4gdGhlIHRpY2sgaW5jclxuXHQvLyBbMV06ICAgZGVmYXVsdCB0aWNrIGZvcm1hdFxuXHQvLyBbMi03XTogcm9sbG92ZXIgdGljayBmb3JtYXRzXG5cdC8vIFs4XTogICBtb2RlOiAwOiByZXBsYWNlIFsxXSAtPiBbMi03XSwgMTogY29uY2F0IFsxXSArIFsyLTddXG5cdGNvbnN0IF90aW1lQXhpc1N0YW1wcyA9IFtcblx0Ly8gICB0aWNrIGluY3IgICAgZGVmYXVsdCAgICAgICAgICB5ZWFyICAgICAgICAgICAgICAgICAgICBtb250aCAgIGRheSAgICAgICAgICAgICAgICAgICBob3VyICAgIG1pbiAgICAgICBzZWMgICBtb2RlXG5cdFx0W3ksICAgICAgICAgICB5eXl5LCAgICAgICAgICAgIF8sICAgICAgICAgICAgICAgICAgICAgIF8sICAgICAgXywgICAgICAgICAgICAgICAgICAgIF8sICAgICAgXywgICAgICAgIF8sICAgICAgIDFdLFxuXHRcdFtkICogMjgsICAgICAgXCJ7TU1NfVwiLCAgICAgICAgIE5MeXl5eSwgICAgICAgICAgICAgICAgIF8sICAgICAgXywgICAgICAgICAgICAgICAgICAgIF8sICAgICAgXywgICAgICAgIF8sICAgICAgIDFdLFxuXHRcdFtkLCAgICAgICAgICAgbWQsICAgICAgICAgICAgICBOTHl5eXksICAgICAgICAgICAgICAgICBfLCAgICAgIF8sICAgICAgICAgICAgICAgICAgICBfLCAgICAgIF8sICAgICAgICBfLCAgICAgICAxXSxcblx0XHRbaCwgICAgICAgICAgIFwie2h9XCIgKyBhYSwgICAgICBOTG1keXksICAgICAgICAgICAgICAgICBfLCAgICAgIE5MbWQsICAgICAgICAgICAgICAgICBfLCAgICAgIF8sICAgICAgICBfLCAgICAgICAxXSxcblx0XHRbbSwgICAgICAgICAgIGhtbWFhLCAgICAgICAgICAgTkxtZHl5LCAgICAgICAgICAgICAgICAgXywgICAgICBOTG1kLCAgICAgICAgICAgICAgICAgXywgICAgICBfLCAgICAgICAgXywgICAgICAgMV0sXG5cdFx0W3MsICAgICAgICAgICBzcywgICAgICAgICAgICAgIE5MbWR5eSArIFwiIFwiICsgaG1tYWEsICAgXywgICAgICBOTG1kICsgXCIgXCIgKyBobW1hYSwgICBfLCAgICAgIE5MaG1tYWEsICBfLCAgICAgICAxXSxcblx0XHRbbXMsICAgICAgICAgIHNzICsgXCIue2ZmZn1cIiwgICBOTG1keXkgKyBcIiBcIiArIGhtbWFhLCAgIF8sICAgICAgTkxtZCArIFwiIFwiICsgaG1tYWEsICAgXywgICAgICBOTGhtbWFhLCAgXywgICAgICAgMV0sXG5cdF07XG5cblx0Ly8gdGhlIGVuc3VyZXMgdGhhdCBheGlzIHRpY2tzLCB2YWx1ZXMgJiBncmlkIGFyZSBhbGlnbmVkIHRvIGxvZ2ljYWwgdGVtcG9yYWwgYnJlYWtwb2ludHMgYW5kIG5vdCBhbiBhcmJpdHJhcnkgdGltZXN0YW1wXG5cdC8vIGh0dHBzOi8vd3d3LnRpbWVhbmRkYXRlLmNvbS90aW1lL2RzdC9cblx0Ly8gaHR0cHM6Ly93d3cudGltZWFuZGRhdGUuY29tL3RpbWUvZHN0LzIwMTkuaHRtbFxuXHQvLyBodHRwczovL3d3dy5lcG9jaGNvbnZlcnRlci5jb20vdGltZXpvbmVzXG5cdGZ1bmN0aW9uIHRpbWVBeGlzU3BsaXRzKHR6RGF0ZSkge1xuXHRcdHJldHVybiAoc2VsZiwgYXhpc0lkeCwgc2NhbGVNaW4sIHNjYWxlTWF4LCBmb3VuZEluY3IsIGZvdW5kU3BhY2UpID0+IHtcblx0XHRcdGxldCBzcGxpdHMgPSBbXTtcblx0XHRcdGxldCBpc1lyID0gZm91bmRJbmNyID49IHk7XG5cdFx0XHRsZXQgaXNNbyA9IGZvdW5kSW5jciA+PSBtbyAmJiBmb3VuZEluY3IgPCB5O1xuXG5cdFx0XHQvLyBnZXQgdGhlIHRpbWV6b25lLWFkanVzdGVkIGRhdGVcblx0XHRcdGxldCBtaW5EYXRlID0gdHpEYXRlKHNjYWxlTWluKTtcblx0XHRcdGxldCBtaW5EYXRlVHMgPSByb3VuZERlYyhtaW5EYXRlICogbXMsIDMpO1xuXG5cdFx0XHQvLyBnZXQgdHMgb2YgMTJhbSAodGhpcyBsYW5kcyB1cyBhdCBvciBiZWZvcmUgdGhlIG9yaWdpbmFsIHNjYWxlTWluKVxuXHRcdFx0bGV0IG1pbk1pbiA9IG1rRGF0ZShtaW5EYXRlLmdldEZ1bGxZZWFyKCksIGlzWXIgPyAwIDogbWluRGF0ZS5nZXRNb250aCgpLCBpc01vIHx8IGlzWXIgPyAxIDogbWluRGF0ZS5nZXREYXRlKCkpO1xuXHRcdFx0bGV0IG1pbk1pblRzID0gcm91bmREZWMobWluTWluICogbXMsIDMpO1xuXG5cdFx0XHRpZiAoaXNNbyB8fCBpc1lyKSB7XG5cdFx0XHRcdGxldCBtb0luY3IgPSBpc01vID8gZm91bmRJbmNyIC8gbW8gOiAwO1xuXHRcdFx0XHRsZXQgeXJJbmNyID0gaXNZciA/IGZvdW5kSW5jciAvIHkgIDogMDtcblx0XHRcdC8vXHRsZXQgdHpPZmZzZXQgPSBzY2FsZU1pbiAtIG1pbkRhdGVUcztcdFx0Ly8gbmVlZGVkP1xuXHRcdFx0XHRsZXQgc3BsaXQgPSBtaW5EYXRlVHMgPT0gbWluTWluVHMgPyBtaW5EYXRlVHMgOiByb3VuZERlYyhta0RhdGUobWluTWluLmdldEZ1bGxZZWFyKCkgKyB5ckluY3IsIG1pbk1pbi5nZXRNb250aCgpICsgbW9JbmNyLCAxKSAqIG1zLCAzKTtcblx0XHRcdFx0bGV0IHNwbGl0RGF0ZSA9IG5ldyBEYXRlKHJvdW5kKHNwbGl0IC8gbXMpKTtcblx0XHRcdFx0bGV0IGJhc2VZZWFyID0gc3BsaXREYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdGxldCBiYXNlTW9udGggPSBzcGxpdERhdGUuZ2V0TW9udGgoKTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgc3BsaXQgPD0gc2NhbGVNYXg7IGkrKykge1xuXHRcdFx0XHRcdGxldCBuZXh0ID0gbWtEYXRlKGJhc2VZZWFyICsgeXJJbmNyICogaSwgYmFzZU1vbnRoICsgbW9JbmNyICogaSwgMSk7XG5cdFx0XHRcdFx0bGV0IG9mZnMgPSBuZXh0IC0gdHpEYXRlKHJvdW5kRGVjKG5leHQgKiBtcywgMykpO1xuXG5cdFx0XHRcdFx0c3BsaXQgPSByb3VuZERlYygoK25leHQgKyBvZmZzKSAqIG1zLCAzKTtcblxuXHRcdFx0XHRcdGlmIChzcGxpdCA8PSBzY2FsZU1heClcblx0XHRcdFx0XHRcdHNwbGl0cy5wdXNoKHNwbGl0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxldCBpbmNyMCA9IGZvdW5kSW5jciA+PSBkID8gZCA6IGZvdW5kSW5jcjtcblx0XHRcdFx0bGV0IHR6T2Zmc2V0ID0gZmxvb3Ioc2NhbGVNaW4pIC0gZmxvb3IobWluRGF0ZVRzKTtcblx0XHRcdFx0bGV0IHNwbGl0ID0gbWluTWluVHMgKyB0ek9mZnNldCArIGluY3JSb3VuZFVwKG1pbkRhdGVUcyAtIG1pbk1pblRzLCBpbmNyMCk7XG5cdFx0XHRcdHNwbGl0cy5wdXNoKHNwbGl0KTtcblxuXHRcdFx0XHRsZXQgZGF0ZTAgPSB0ekRhdGUoc3BsaXQpO1xuXG5cdFx0XHRcdGxldCBwcmV2SG91ciA9IGRhdGUwLmdldEhvdXJzKCkgKyAoZGF0ZTAuZ2V0TWludXRlcygpIC8gbSkgKyAoZGF0ZTAuZ2V0U2Vjb25kcygpIC8gaCk7XG5cdFx0XHRcdGxldCBpbmNySG91cnMgPSBmb3VuZEluY3IgLyBoO1xuXG5cdFx0XHRcdGxldCBtaW5TcGFjZSA9IHNlbGYuYXhlc1theGlzSWR4XS5fc3BhY2U7XG5cdFx0XHRcdGxldCBwY3RTcGFjZSA9IGZvdW5kU3BhY2UgLyBtaW5TcGFjZTtcblxuXHRcdFx0XHR3aGlsZSAoMSkge1xuXHRcdFx0XHRcdHNwbGl0ID0gcm91bmREZWMoc3BsaXQgKyBmb3VuZEluY3IsIG1zID09IDEgPyAwIDogMyk7XG5cblx0XHRcdFx0XHRpZiAoc3BsaXQgPiBzY2FsZU1heClcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0aWYgKGluY3JIb3VycyA+IDEpIHtcblx0XHRcdFx0XHRcdGxldCBleHBlY3RlZEhvdXIgPSBmbG9vcihyb3VuZERlYyhwcmV2SG91ciArIGluY3JIb3VycywgNikpICUgMjQ7XG5cdFx0XHRcdFx0XHRsZXQgc3BsaXREYXRlID0gdHpEYXRlKHNwbGl0KTtcblx0XHRcdFx0XHRcdGxldCBhY3R1YWxIb3VyID0gc3BsaXREYXRlLmdldEhvdXJzKCk7XG5cblx0XHRcdFx0XHRcdGxldCBkc3RTaGlmdCA9IGFjdHVhbEhvdXIgLSBleHBlY3RlZEhvdXI7XG5cblx0XHRcdFx0XHRcdGlmIChkc3RTaGlmdCA+IDEpXG5cdFx0XHRcdFx0XHRcdGRzdFNoaWZ0ID0gLTE7XG5cblx0XHRcdFx0XHRcdHNwbGl0IC09IGRzdFNoaWZ0ICogaDtcblxuXHRcdFx0XHRcdFx0cHJldkhvdXIgPSAocHJldkhvdXIgKyBpbmNySG91cnMpICUgMjQ7XG5cblx0XHRcdFx0XHRcdC8vIGFkZCBhIHRpY2sgb25seSBpZiBpdCdzIGZ1cnRoZXIgdGhhbiA3MCUgb2YgdGhlIG1pbiBhbGxvd2VkIGxhYmVsIHNwYWNpbmdcblx0XHRcdFx0XHRcdGxldCBwcmV2U3BsaXQgPSBzcGxpdHNbc3BsaXRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRcdFx0bGV0IHBjdEluY3IgPSByb3VuZERlYygoc3BsaXQgLSBwcmV2U3BsaXQpIC8gZm91bmRJbmNyLCAzKTtcblxuXHRcdFx0XHRcdFx0aWYgKHBjdEluY3IgKiBwY3RTcGFjZSA+PSAuNylcblx0XHRcdFx0XHRcdFx0c3BsaXRzLnB1c2goc3BsaXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRzcGxpdHMucHVzaChzcGxpdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNwbGl0cztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHRpbWVJbmNycyxcblx0XHRfdGltZUF4aXNTdGFtcHMsXG5cdFx0dGltZUF4aXNTcGxpdHMsXG5cdF07XG59XG5cbmNvbnN0IFsgdGltZUluY3JzTXMsIF90aW1lQXhpc1N0YW1wc01zLCB0aW1lQXhpc1NwbGl0c01zIF0gPSBnZW5UaW1lU3R1ZmZzKDEpO1xuY29uc3QgWyB0aW1lSW5jcnNTLCAgX3RpbWVBeGlzU3RhbXBzUywgIHRpbWVBeGlzU3BsaXRzUyAgXSA9IGdlblRpbWVTdHVmZnMoMWUtMyk7XG5cbi8vIGJhc2UgMlxuZ2VuSW5jcnMoMiwgLTUzLCA1MywgWzFdKTtcblxuLypcbmNvbnNvbGUubG9nKHtcblx0ZGVjSW5jcnMsXG5cdG9uZUluY3JzLFxuXHR3aG9sZUluY3JzLFxuXHRudW1JbmNycyxcblx0dGltZUluY3JzLFxuXHRmaXhlZERlYyxcbn0pO1xuKi9cblxuZnVuY3Rpb24gdGltZUF4aXNTdGFtcHMoc3RhbXBDZmcsIGZtdERhdGUpIHtcblx0cmV0dXJuIHN0YW1wQ2ZnLm1hcChzID0+IHMubWFwKCh2LCBpKSA9PlxuXHRcdGkgPT0gMCB8fCBpID09IDggfHwgdiA9PSBudWxsID8gdiA6IGZtdERhdGUoaSA9PSAxIHx8IHNbOF0gPT0gMCA/IHYgOiBzWzFdICsgdilcblx0KSk7XG59XG5cbi8vIFRPRE86IHdpbGwgbmVlZCB0byBhY2NlcHQgc3BhY2VzW10gYW5kIHB1bGwgaW5jciBpbnRvIHRoZSBsb29wIHdoZW4gZ3JpZCB3aWxsIGJlIG5vbi11bmlmb3JtLCBlZyBmb3IgbG9nIHNjYWxlcy5cbi8vIGN1cnJlbnRseSB3ZSBpZ25vcmUgdGhpcyBmb3IgbW9udGhzIHNpbmNlIHRoZXkncmUgKm5lYXJseSogdW5pZm9ybSBhbmQgdGhlIGFkZGVkIGNvbXBsZXhpdHkgaXMgbm90IHdvcnRoIGl0XG5mdW5jdGlvbiB0aW1lQXhpc1ZhbHModHpEYXRlLCBzdGFtcHMpIHtcblx0cmV0dXJuIChzZWxmLCBzcGxpdHMsIGF4aXNJZHgsIGZvdW5kU3BhY2UsIGZvdW5kSW5jcikgPT4ge1xuXHRcdGxldCBzID0gc3RhbXBzLmZpbmQocyA9PiBmb3VuZEluY3IgPj0gc1swXSkgfHwgc3RhbXBzW3N0YW1wcy5sZW5ndGggLSAxXTtcblxuXHRcdC8vIHRoZXNlIHRyYWNrIGJvdW5kYXJpZXMgd2hlbiBhIGZ1bGwgbGFiZWwgaXMgbmVlZGVkIGFnYWluXG5cdFx0bGV0IHByZXZZZWFyO1xuXHRcdGxldCBwcmV2TW50aDtcblx0XHRsZXQgcHJldkRhdGU7XG5cdFx0bGV0IHByZXZIb3VyO1xuXHRcdGxldCBwcmV2TWlucztcblx0XHRsZXQgcHJldlNlY3M7XG5cblx0XHRyZXR1cm4gc3BsaXRzLm1hcChzcGxpdCA9PiB7XG5cdFx0XHRsZXQgZGF0ZSA9IHR6RGF0ZShzcGxpdCk7XG5cblx0XHRcdGxldCBuZXdZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0bGV0IG5ld01udGggPSBkYXRlLmdldE1vbnRoKCk7XG5cdFx0XHRsZXQgbmV3RGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0bGV0IG5ld0hvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG5cdFx0XHRsZXQgbmV3TWlucyA9IGRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0bGV0IG5ld1NlY3MgPSBkYXRlLmdldFNlY29uZHMoKTtcblxuXHRcdFx0bGV0IHN0YW1wID0gKFxuXHRcdFx0XHRuZXdZZWFyICE9IHByZXZZZWFyICYmIHNbMl0gfHxcblx0XHRcdFx0bmV3TW50aCAhPSBwcmV2TW50aCAmJiBzWzNdIHx8XG5cdFx0XHRcdG5ld0RhdGUgIT0gcHJldkRhdGUgJiYgc1s0XSB8fFxuXHRcdFx0XHRuZXdIb3VyICE9IHByZXZIb3VyICYmIHNbNV0gfHxcblx0XHRcdFx0bmV3TWlucyAhPSBwcmV2TWlucyAmJiBzWzZdIHx8XG5cdFx0XHRcdG5ld1NlY3MgIT0gcHJldlNlY3MgJiYgc1s3XSB8fFxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgIHNbMV1cblx0XHRcdCk7XG5cblx0XHRcdHByZXZZZWFyID0gbmV3WWVhcjtcblx0XHRcdHByZXZNbnRoID0gbmV3TW50aDtcblx0XHRcdHByZXZEYXRlID0gbmV3RGF0ZTtcblx0XHRcdHByZXZIb3VyID0gbmV3SG91cjtcblx0XHRcdHByZXZNaW5zID0gbmV3TWlucztcblx0XHRcdHByZXZTZWNzID0gbmV3U2VjcztcblxuXHRcdFx0cmV0dXJuIHN0YW1wKGRhdGUpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8vIGZvciB3aGVuIGF4aXMudmFsdWVzIGlzIGRlZmluZWQgYXMgYSBzdGF0aWMgZm10RGF0ZSB0ZW1wbGF0ZSBzdHJpbmdcbmZ1bmN0aW9uIHRpbWVBeGlzVmFsKHR6RGF0ZSwgZGF0ZVRwbCkge1xuXHRsZXQgc3RhbXAgPSBmbXREYXRlKGRhdGVUcGwpO1xuXHRyZXR1cm4gKHNlbGYsIHNwbGl0cywgYXhpc0lkeCwgZm91bmRTcGFjZSwgZm91bmRJbmNyKSA9PiBzcGxpdHMubWFwKHNwbGl0ID0+IHN0YW1wKHR6RGF0ZShzcGxpdCkpKTtcbn1cblxuZnVuY3Rpb24gbWtEYXRlKHksIG0sIGQpIHtcblx0cmV0dXJuIG5ldyBEYXRlKHksIG0sIGQpO1xufVxuXG5mdW5jdGlvbiB0aW1lU2VyaWVzU3RhbXAoc3RhbXBDZmcsIGZtdERhdGUpIHtcblx0cmV0dXJuIGZtdERhdGUoc3RhbXBDZmcpO1xufVxuY29uc3QgX3RpbWVTZXJpZXNTdGFtcCA9ICd7WVlZWX0te01NfS17RER9IHtofTp7bW19e2FhfSc7XG5cbmZ1bmN0aW9uIHRpbWVTZXJpZXNWYWwodHpEYXRlLCBzdGFtcCkge1xuXHRyZXR1cm4gKHNlbGYsIHZhbCwgc2VyaWVzSWR4LCBkYXRhSWR4KSA9PiBkYXRhSWR4ID09IG51bGwgPyBMRUdFTkRfRElTUCA6IHN0YW1wKHR6RGF0ZSh2YWwpKTtcbn1cblxuZnVuY3Rpb24gbGVnZW5kU3Ryb2tlKHNlbGYsIHNlcmllc0lkeCkge1xuXHRsZXQgcyA9IHNlbGYuc2VyaWVzW3Nlcmllc0lkeF07XG5cdHJldHVybiBzLndpZHRoID8gcy5zdHJva2Uoc2VsZiwgc2VyaWVzSWR4KSA6IHMucG9pbnRzLndpZHRoID8gcy5wb2ludHMuc3Ryb2tlKHNlbGYsIHNlcmllc0lkeCkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBsZWdlbmRGaWxsKHNlbGYsIHNlcmllc0lkeCkge1xuXHRyZXR1cm4gc2VsZi5zZXJpZXNbc2VyaWVzSWR4XS5maWxsKHNlbGYsIHNlcmllc0lkeCk7XG59XG5cbmNvbnN0IGxlZ2VuZE9wdHMgPSB7XG5cdHNob3c6IHRydWUsXG5cdGxpdmU6IHRydWUsXG5cdGlzb2xhdGU6IGZhbHNlLFxuXHRtb3VudDogbm9vcCxcblx0bWFya2Vyczoge1xuXHRcdHNob3c6IHRydWUsXG5cdFx0d2lkdGg6IDIsXG5cdFx0c3Ryb2tlOiBsZWdlbmRTdHJva2UsXG5cdFx0ZmlsbDogbGVnZW5kRmlsbCxcblx0XHRkYXNoOiBcInNvbGlkXCIsXG5cdH0sXG5cdGlkeDogbnVsbCxcblx0aWR4czogbnVsbCxcblx0dmFsdWVzOiBbXSxcbn07XG5cbmZ1bmN0aW9uIGN1cnNvclBvaW50U2hvdyhzZWxmLCBzaSkge1xuXHRsZXQgbyA9IHNlbGYuY3Vyc29yLnBvaW50cztcblxuXHRsZXQgcHQgPSBwbGFjZURpdigpO1xuXG5cdGxldCBzaXplID0gby5zaXplKHNlbGYsIHNpKTtcblx0c2V0U3R5bGVQeChwdCwgV0lEVEgsIHNpemUpO1xuXHRzZXRTdHlsZVB4KHB0LCBIRUlHSFQsIHNpemUpO1xuXG5cdGxldCBtYXIgPSBzaXplIC8gLTI7XG5cdHNldFN0eWxlUHgocHQsIFwibWFyZ2luTGVmdFwiLCBtYXIpO1xuXHRzZXRTdHlsZVB4KHB0LCBcIm1hcmdpblRvcFwiLCBtYXIpO1xuXG5cdGxldCB3aWR0aCA9IG8ud2lkdGgoc2VsZiwgc2ksIHNpemUpO1xuXHR3aWR0aCAmJiBzZXRTdHlsZVB4KHB0LCBcImJvcmRlcldpZHRoXCIsIHdpZHRoKTtcblxuXHRyZXR1cm4gcHQ7XG59XG5cbmZ1bmN0aW9uIGN1cnNvclBvaW50RmlsbChzZWxmLCBzaSkge1xuXHRsZXQgc3AgPSBzZWxmLnNlcmllc1tzaV0ucG9pbnRzO1xuXHRyZXR1cm4gc3AuX2ZpbGwgfHwgc3AuX3N0cm9rZTtcbn1cblxuZnVuY3Rpb24gY3Vyc29yUG9pbnRTdHJva2Uoc2VsZiwgc2kpIHtcblx0bGV0IHNwID0gc2VsZi5zZXJpZXNbc2ldLnBvaW50cztcblx0cmV0dXJuIHNwLl9zdHJva2UgfHwgc3AuX2ZpbGw7XG59XG5cbmZ1bmN0aW9uIGN1cnNvclBvaW50U2l6ZShzZWxmLCBzaSkge1xuXHRsZXQgc3AgPSBzZWxmLnNlcmllc1tzaV0ucG9pbnRzO1xuXHRyZXR1cm4gc3Auc2l6ZTtcbn1cblxuZnVuY3Rpb24gZGF0YUlkeChzZWxmLCBzZXJpZXNJZHgsIGN1cnNvcklkeCkge1xuXHRyZXR1cm4gY3Vyc29ySWR4O1xufVxuXG5jb25zdCBtb3ZlVHVwbGUgPSBbMCwwXTtcblxuZnVuY3Rpb24gY3Vyc29yTW92ZShzZWxmLCBtb3VzZUxlZnQxLCBtb3VzZVRvcDEpIHtcblx0bW92ZVR1cGxlWzBdID0gbW91c2VMZWZ0MTtcblx0bW92ZVR1cGxlWzFdID0gbW91c2VUb3AxO1xuXHRyZXR1cm4gbW92ZVR1cGxlO1xufVxuXG5mdW5jdGlvbiBmaWx0QnRuMChzZWxmLCB0YXJnLCBoYW5kbGUpIHtcblx0cmV0dXJuIGUgPT4ge1xuXHRcdGUuYnV0dG9uID09IDAgJiYgaGFuZGxlKGUpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBwYXNzVGhydShzZWxmLCB0YXJnLCBoYW5kbGUpIHtcblx0cmV0dXJuIGhhbmRsZTtcbn1cblxuY29uc3QgY3Vyc29yT3B0cyA9IHtcblx0c2hvdzogdHJ1ZSxcblx0eDogdHJ1ZSxcblx0eTogdHJ1ZSxcblx0bG9jazogZmFsc2UsXG5cdG1vdmU6IGN1cnNvck1vdmUsXG5cdHBvaW50czoge1xuXHRcdHNob3c6ICAgY3Vyc29yUG9pbnRTaG93LFxuXHRcdHNpemU6ICAgY3Vyc29yUG9pbnRTaXplLFxuXHRcdHdpZHRoOiAgMCxcblx0XHRzdHJva2U6IGN1cnNvclBvaW50U3Ryb2tlLFxuXHRcdGZpbGw6ICAgY3Vyc29yUG9pbnRGaWxsLFxuXHR9LFxuXG5cdGJpbmQ6IHtcblx0XHRtb3VzZWRvd246ICAgZmlsdEJ0bjAsXG5cdFx0bW91c2V1cDogICAgIGZpbHRCdG4wLFxuXHRcdGNsaWNrOiAgICAgICBmaWx0QnRuMCxcblx0XHRkYmxjbGljazogICAgZmlsdEJ0bjAsXG5cblx0XHRtb3VzZW1vdmU6ICAgcGFzc1RocnUsXG5cdFx0bW91c2VsZWF2ZTogIHBhc3NUaHJ1LFxuXHRcdG1vdXNlZW50ZXI6ICBwYXNzVGhydSxcblx0fSxcblxuXHRkcmFnOiB7XG5cdFx0c2V0U2NhbGU6IHRydWUsXG5cdFx0eDogdHJ1ZSxcblx0XHR5OiBmYWxzZSxcblx0XHRkaXN0OiAwLFxuXHRcdHVuaTogbnVsbCxcblx0XHRjbGljazogKHNlbGYsIGUpID0+IHtcblx0XHQvL1x0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0fSxcblx0XHRfeDogZmFsc2UsXG5cdFx0X3k6IGZhbHNlLFxuXHR9LFxuXG5cdGZvY3VzOiB7XG5cdFx0cHJveDogLTEsXG5cdFx0YmlhczogMCxcblx0fSxcblxuXHRsZWZ0OiAtMTAsXG5cdHRvcDogLTEwLFxuXHRpZHg6IG51bGwsXG5cdGRhdGFJZHgsXG5cdGlkeHM6IG51bGwsXG59O1xuXG5jb25zdCBheGlzTGluZXMgPSB7XG5cdHNob3c6IHRydWUsXG5cdHN0cm9rZTogXCJyZ2JhKDAsMCwwLDAuMDcpXCIsXG5cdHdpZHRoOiAyLFxuLy9cdGRhc2g6IFtdLFxufTtcblxuY29uc3QgZ3JpZCA9IGFzc2lnbih7fSwgYXhpc0xpbmVzLCB7XG5cdGZpbHRlcjogcmV0QXJnMSxcbn0pO1xuXG5jb25zdCB0aWNrcyA9IGFzc2lnbih7fSwgZ3JpZCwge1xuXHRzaXplOiAxMCxcbn0pO1xuXG5jb25zdCBib3JkZXIgPSBhc3NpZ24oe30sIGF4aXNMaW5lcywge1xuXHRzaG93OiBmYWxzZSxcbn0pO1xuXG5jb25zdCBmb250ICAgICAgPSAnMTJweCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCInO1xuY29uc3QgbGFiZWxGb250ID0gXCJib2xkIFwiICsgZm9udDtcbmNvbnN0IGxpbmVNdWx0ID0gMS41O1x0XHQvLyBmb250LXNpemUgbXVsdGlwbGllclxuXG5jb25zdCB4QXhpc09wdHMgPSB7XG5cdHNob3c6IHRydWUsXG5cdHNjYWxlOiBcInhcIixcblx0c3Ryb2tlOiBoZXhCbGFjayxcblx0c3BhY2U6IDUwLFxuXHRnYXA6IDUsXG5cdHNpemU6IDUwLFxuXHRsYWJlbEdhcDogMCxcblx0bGFiZWxTaXplOiAzMCxcblx0bGFiZWxGb250LFxuXHRzaWRlOiAyLFxuLy9cdGNsYXNzOiBcIngtdmFsc1wiLFxuLy9cdGluY3JzOiB0aW1lSW5jcnMsXG4vL1x0dmFsdWVzOiB0aW1lVmFscyxcbi8vXHRmaWx0ZXI6IHJldEFyZzEsXG5cdGdyaWQsXG5cdHRpY2tzLFxuXHRib3JkZXIsXG5cdGZvbnQsXG5cdHJvdGF0ZTogMCxcbn07XG5cbmNvbnN0IG51bVNlcmllc0xhYmVsID0gXCJWYWx1ZVwiO1xuY29uc3QgdGltZVNlcmllc0xhYmVsID0gXCJUaW1lXCI7XG5cbmNvbnN0IHhTZXJpZXNPcHRzID0ge1xuXHRzaG93OiB0cnVlLFxuXHRzY2FsZTogXCJ4XCIsXG5cdGF1dG86IGZhbHNlLFxuXHRzb3J0ZWQ6IDEsXG4vL1x0bGFiZWw6IFwiVGltZVwiLFxuLy9cdHZhbHVlOiB2ID0+IHN0YW1wKG5ldyBEYXRlKHYgKiAxZTMpKSxcblxuXHQvLyBpbnRlcm5hbCBjYWNoZXNcblx0bWluOiBpbmYsXG5cdG1heDogLWluZixcblx0aWR4czogW10sXG59O1xuXG5mdW5jdGlvbiBudW1BeGlzVmFscyhzZWxmLCBzcGxpdHMsIGF4aXNJZHgsIGZvdW5kU3BhY2UsIGZvdW5kSW5jcikge1xuXHRyZXR1cm4gc3BsaXRzLm1hcCh2ID0+IHYgPT0gbnVsbCA/IFwiXCIgOiBmbXROdW0odikpO1xufVxuXG5mdW5jdGlvbiBudW1BeGlzU3BsaXRzKHNlbGYsIGF4aXNJZHgsIHNjYWxlTWluLCBzY2FsZU1heCwgZm91bmRJbmNyLCBmb3VuZFNwYWNlLCBmb3JjZU1pbikge1xuXHRsZXQgc3BsaXRzID0gW107XG5cblx0bGV0IG51bURlYyA9IGZpeGVkRGVjLmdldChmb3VuZEluY3IpIHx8IDA7XG5cblx0c2NhbGVNaW4gPSBmb3JjZU1pbiA/IHNjYWxlTWluIDogcm91bmREZWMoaW5jclJvdW5kVXAoc2NhbGVNaW4sIGZvdW5kSW5jciksIG51bURlYyk7XG5cblx0Zm9yIChsZXQgdmFsID0gc2NhbGVNaW47IHZhbCA8PSBzY2FsZU1heDsgdmFsID0gcm91bmREZWModmFsICsgZm91bmRJbmNyLCBudW1EZWMpKVxuXHRcdHNwbGl0cy5wdXNoKE9iamVjdC5pcyh2YWwsIC0wKSA/IDAgOiB2YWwpO1x0XHQvLyBjb2FsZXNjZXMgLTBcblxuXHRyZXR1cm4gc3BsaXRzO1xufVxuXG4vLyB0aGlzIGRvZXNudCB3b3JrIGZvciBzaW4sIHdoaWNoIG5lZWRzIHRvIGNvbWUgb2ZmIGZyb20gMCBpbmRlcGVuZGVudGx5IGluIHBvcyBhbmQgbmVnIGRpcnNcbmZ1bmN0aW9uIGxvZ0F4aXNTcGxpdHMoc2VsZiwgYXhpc0lkeCwgc2NhbGVNaW4sIHNjYWxlTWF4LCBmb3VuZEluY3IsIGZvdW5kU3BhY2UsIGZvcmNlTWluKSB7XG5cdGNvbnN0IHNwbGl0cyA9IFtdO1xuXG5cdGNvbnN0IGxvZ0Jhc2UgPSBzZWxmLnNjYWxlc1tzZWxmLmF4ZXNbYXhpc0lkeF0uc2NhbGVdLmxvZztcblxuXHRjb25zdCBsb2dGbiA9IGxvZ0Jhc2UgPT0gMTAgPyBsb2cxMCA6IGxvZzI7XG5cblx0Y29uc3QgZXhwID0gZmxvb3IobG9nRm4oc2NhbGVNaW4pKTtcblxuXHRmb3VuZEluY3IgPSBwb3cobG9nQmFzZSwgZXhwKTtcblxuXHRpZiAobG9nQmFzZSA9PSAxMCAmJiBleHAgPCAwKVxuXHRcdGZvdW5kSW5jciA9IHJvdW5kRGVjKGZvdW5kSW5jciwgLWV4cCk7XG5cblx0bGV0IHNwbGl0ID0gc2NhbGVNaW47XG5cblx0ZG8ge1xuXHRcdHNwbGl0cy5wdXNoKHNwbGl0KTtcblx0XHRzcGxpdCA9IHNwbGl0ICsgZm91bmRJbmNyO1xuXG5cdFx0aWYgKGxvZ0Jhc2UgPT0gMTApXG5cdFx0XHRzcGxpdCA9IHJvdW5kRGVjKHNwbGl0LCBmaXhlZERlYy5nZXQoZm91bmRJbmNyKSk7XG5cblx0XHRpZiAoc3BsaXQgPj0gZm91bmRJbmNyICogbG9nQmFzZSlcblx0XHRcdGZvdW5kSW5jciA9IHNwbGl0O1xuXG5cdH0gd2hpbGUgKHNwbGl0IDw9IHNjYWxlTWF4KTtcblxuXHRyZXR1cm4gc3BsaXRzO1xufVxuXG5mdW5jdGlvbiBhc2luaEF4aXNTcGxpdHMoc2VsZiwgYXhpc0lkeCwgc2NhbGVNaW4sIHNjYWxlTWF4LCBmb3VuZEluY3IsIGZvdW5kU3BhY2UsIGZvcmNlTWluKSB7XG5cdGxldCBzYyA9IHNlbGYuc2NhbGVzW3NlbGYuYXhlc1theGlzSWR4XS5zY2FsZV07XG5cblx0bGV0IGxpbnRocmVzaCA9IHNjLmFzaW5oO1xuXG5cdGxldCBwb3NTcGxpdHMgPSBzY2FsZU1heCA+IGxpbnRocmVzaCA/IGxvZ0F4aXNTcGxpdHMoc2VsZiwgYXhpc0lkeCwgbWF4KGxpbnRocmVzaCwgc2NhbGVNaW4pLCBzY2FsZU1heCwgZm91bmRJbmNyKSA6IFtsaW50aHJlc2hdO1xuXHRsZXQgemVybyA9IHNjYWxlTWF4ID49IDAgJiYgc2NhbGVNaW4gPD0gMCA/IFswXSA6IFtdO1xuXHRsZXQgbmVnU3BsaXRzID0gc2NhbGVNaW4gPCAtbGludGhyZXNoID8gbG9nQXhpc1NwbGl0cyhzZWxmLCBheGlzSWR4LCBtYXgobGludGhyZXNoLCAtc2NhbGVNYXgpLCAtc2NhbGVNaW4sIGZvdW5kSW5jcik6IFtsaW50aHJlc2hdO1xuXG5cdHJldHVybiBuZWdTcGxpdHMucmV2ZXJzZSgpLm1hcCh2ID0+IC12KS5jb25jYXQoemVybywgcG9zU3BsaXRzKTtcbn1cblxuY29uc3QgUkVfQUxMICAgPSAvLi87XG5jb25zdCBSRV8xMjM1NyA9IC9bMTIzNTddLztcbmNvbnN0IFJFXzEyNSAgID0gL1sxMjVdLztcbmNvbnN0IFJFXzEgICAgID0gLzEvO1xuXG5mdW5jdGlvbiBsb2cxMEF4aXNWYWxzRmlsdChzZWxmLCBzcGxpdHMsIGF4aXNJZHgsIGZvdW5kU3BhY2UsIGZvdW5kSW5jcikge1xuXHRsZXQgYXhpcyA9IHNlbGYuYXhlc1theGlzSWR4XTtcblx0bGV0IHNjYWxlS2V5ID0gYXhpcy5zY2FsZTtcblx0bGV0IHNjID0gc2VsZi5zY2FsZXNbc2NhbGVLZXldO1xuXG5cdGlmIChzYy5kaXN0ciA9PSAzICYmIHNjLmxvZyA9PSAyKVxuXHRcdHJldHVybiBzcGxpdHM7XG5cblx0bGV0IHZhbFRvUG9zID0gc2VsZi52YWxUb1BvcztcblxuXHRsZXQgbWluU3BhY2UgPSBheGlzLl9zcGFjZTtcblxuXHRsZXQgXzEwID0gdmFsVG9Qb3MoMTAsIHNjYWxlS2V5KTtcblxuXHRsZXQgcmUgPSAoXG5cdFx0dmFsVG9Qb3MoOSwgc2NhbGVLZXkpIC0gXzEwID49IG1pblNwYWNlID8gUkVfQUxMIDpcblx0XHR2YWxUb1Bvcyg3LCBzY2FsZUtleSkgLSBfMTAgPj0gbWluU3BhY2UgPyBSRV8xMjM1NyA6XG5cdFx0dmFsVG9Qb3MoNSwgc2NhbGVLZXkpIC0gXzEwID49IG1pblNwYWNlID8gUkVfMTI1IDpcblx0XHRSRV8xXG5cdCk7XG5cblx0cmV0dXJuIHNwbGl0cy5tYXAodiA9PiAoKHNjLmRpc3RyID09IDQgJiYgdiA9PSAwKSB8fCByZS50ZXN0KHYpKSA/IHYgOiBudWxsKTtcbn1cblxuZnVuY3Rpb24gbnVtU2VyaWVzVmFsKHNlbGYsIHZhbCwgc2VyaWVzSWR4LCBkYXRhSWR4KSB7XG5cdHJldHVybiBkYXRhSWR4ID09IG51bGwgPyBMRUdFTkRfRElTUCA6IHZhbCA9PSBudWxsID8gXCJcIiA6IGZtdE51bSh2YWwpO1xufVxuXG5jb25zdCB5QXhpc09wdHMgPSB7XG5cdHNob3c6IHRydWUsXG5cdHNjYWxlOiBcInlcIixcblx0c3Ryb2tlOiBoZXhCbGFjayxcblx0c3BhY2U6IDMwLFxuXHRnYXA6IDUsXG5cdHNpemU6IDUwLFxuXHRsYWJlbEdhcDogMCxcblx0bGFiZWxTaXplOiAzMCxcblx0bGFiZWxGb250LFxuXHRzaWRlOiAzLFxuLy9cdGNsYXNzOiBcInktdmFsc1wiLFxuLy9cdGluY3JzOiBudW1JbmNycyxcbi8vXHR2YWx1ZXM6ICh2YWxzLCBzcGFjZSkgPT4gdmFscyxcbi8vXHRmaWx0ZXI6IHJldEFyZzEsXG5cdGdyaWQsXG5cdHRpY2tzLFxuXHRib3JkZXIsXG5cdGZvbnQsXG5cdHJvdGF0ZTogMCxcbn07XG5cbi8vIHRha2VzIHN0cm9rZSB3aWR0aFxuZnVuY3Rpb24gcHREaWEod2lkdGgsIG11bHQpIHtcblx0bGV0IGRpYSA9IDMgKyAod2lkdGggfHwgMSkgKiAyO1xuXHRyZXR1cm4gcm91bmREZWMoZGlhICogbXVsdCwgMyk7XG59XG5cbmZ1bmN0aW9uIHNlcmllc1BvaW50c1Nob3coc2VsZiwgc2kpIHtcblx0bGV0IHsgc2NhbGUsIGlkeHMgfSA9IHNlbGYuc2VyaWVzWzBdO1xuXHRsZXQgeERhdGEgPSBzZWxmLl9kYXRhWzBdO1xuXHRsZXQgcDAgPSBzZWxmLnZhbFRvUG9zKHhEYXRhW2lkeHNbMF1dLCBzY2FsZSwgdHJ1ZSk7XG5cdGxldCBwMSA9IHNlbGYudmFsVG9Qb3MoeERhdGFbaWR4c1sxXV0sIHNjYWxlLCB0cnVlKTtcblx0bGV0IGRpbSA9IGFicyhwMSAtIHAwKTtcblxuXHRsZXQgcyA9IHNlbGYuc2VyaWVzW3NpXTtcbi8vXHRjb25zdCBkaWEgPSBwdERpYShzLndpZHRoLCBweFJhdGlvKTtcblx0bGV0IG1heFB0cyA9IGRpbSAvIChzLnBvaW50cy5zcGFjZSAqIHB4UmF0aW8pO1xuXHRyZXR1cm4gaWR4c1sxXSAtIGlkeHNbMF0gPD0gbWF4UHRzO1xufVxuXG5jb25zdCBmYWNldCA9IHtcblx0c2NhbGU6IG51bGwsXG5cdGF1dG86IHRydWUsXG5cdHNvcnRlZDogMCxcblxuXHQvLyBpbnRlcm5hbCBjYWNoZXNcblx0bWluOiBpbmYsXG5cdG1heDogLWluZixcbn07XG5cbmNvbnN0IGdhcHMgPSAoc2VsZiwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBudWxsR2FwcykgPT4gbnVsbEdhcHM7XG5cbmNvbnN0IHh5U2VyaWVzT3B0cyA9IHtcblx0c2hvdzogdHJ1ZSxcblx0YXV0bzogdHJ1ZSxcblx0c29ydGVkOiAwLFxuXHRnYXBzLFxuXHRhbHBoYTogMSxcblx0ZmFjZXRzOiBbXG5cdFx0YXNzaWduKHt9LCBmYWNldCwge3NjYWxlOiAneCd9KSxcblx0XHRhc3NpZ24oe30sIGZhY2V0LCB7c2NhbGU6ICd5J30pLFxuXHRdLFxufTtcblxuY29uc3QgeVNlcmllc09wdHMgPSB7XG5cdHNjYWxlOiBcInlcIixcblx0YXV0bzogdHJ1ZSxcblx0c29ydGVkOiAwLFxuXHRzaG93OiB0cnVlLFxuXHRzcGFuR2FwczogZmFsc2UsXG5cdGdhcHMsXG5cdGFscGhhOiAxLFxuXHRwb2ludHM6IHtcblx0XHRzaG93OiBzZXJpZXNQb2ludHNTaG93LFxuXHRcdGZpbHRlcjogbnVsbCxcblx0Ly8gIHBhdGhzOlxuXHQvL1x0c3Ryb2tlOiBcIiMwMDBcIixcblx0Ly9cdGZpbGw6IFwiI2ZmZlwiLFxuXHQvL1x0d2lkdGg6IDEsXG5cdC8vXHRzaXplOiAxMCxcblx0fSxcbi8vXHRsYWJlbDogXCJWYWx1ZVwiLFxuLy9cdHZhbHVlOiB2ID0+IHYsXG5cdHZhbHVlczogbnVsbCxcblxuXHQvLyBpbnRlcm5hbCBjYWNoZXNcblx0bWluOiBpbmYsXG5cdG1heDogLWluZixcblx0aWR4czogW10sXG5cblx0cGF0aDogbnVsbCxcblx0Y2xpcDogbnVsbCxcbn07XG5cbmZ1bmN0aW9uIGNsYW1wU2NhbGUoc2VsZiwgdmFsLCBzY2FsZU1pbiwgc2NhbGVNYXgsIHNjYWxlS2V5KSB7XG4vKlxuXHRpZiAodmFsIDwgMCkge1xuXHRcdGxldCBjc3NIZ3QgPSBzZWxmLmJib3guaGVpZ2h0IC8gcHhSYXRpbztcblx0XHRsZXQgYWJzUG9zID0gc2VsZi52YWxUb1BvcyhhYnModmFsKSwgc2NhbGVLZXkpO1xuXHRcdGxldCBmcm9tQnRtID0gY3NzSGd0IC0gYWJzUG9zO1xuXHRcdHJldHVybiBzZWxmLnBvc1RvVmFsKGNzc0hndCArIGZyb21CdG0sIHNjYWxlS2V5KTtcblx0fVxuKi9cblx0cmV0dXJuIHNjYWxlTWluIC8gMTA7XG59XG5cbmNvbnN0IHhTY2FsZU9wdHMgPSB7XG5cdHRpbWU6IEZFQVRfVElNRSxcblx0YXV0bzogdHJ1ZSxcblx0ZGlzdHI6IDEsXG5cdGxvZzogMTAsXG5cdGFzaW5oOiAxLFxuXHRtaW46IG51bGwsXG5cdG1heDogbnVsbCxcblx0ZGlyOiAxLFxuXHRvcmk6IDAsXG59O1xuXG5jb25zdCB5U2NhbGVPcHRzID0gYXNzaWduKHt9LCB4U2NhbGVPcHRzLCB7XG5cdHRpbWU6IGZhbHNlLFxuXHRvcmk6IDEsXG59KTtcblxuY29uc3Qgc3luY3MgPSB7fTtcblxuZnVuY3Rpb24gX3N5bmMoa2V5LCBvcHRzKSB7XG5cdGxldCBzID0gc3luY3Nba2V5XTtcblxuXHRpZiAoIXMpIHtcblx0XHRzID0ge1xuXHRcdFx0a2V5LFxuXHRcdFx0cGxvdHM6IFtdLFxuXHRcdFx0c3ViKHBsb3QpIHtcblx0XHRcdFx0cy5wbG90cy5wdXNoKHBsb3QpO1xuXHRcdFx0fSxcblx0XHRcdHVuc3ViKHBsb3QpIHtcblx0XHRcdFx0cy5wbG90cyA9IHMucGxvdHMuZmlsdGVyKGMgPT4gYyAhPSBwbG90KTtcblx0XHRcdH0sXG5cdFx0XHRwdWIodHlwZSwgc2VsZiwgeCwgeSwgdywgaCwgaSkge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHMucGxvdHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0cy5wbG90c1tqXSAhPSBzZWxmICYmIHMucGxvdHNbal0ucHViKHR5cGUsIHNlbGYsIHgsIHksIHcsIGgsIGkpO1xuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0aWYgKGtleSAhPSBudWxsKVxuXHRcdFx0c3luY3Nba2V5XSA9IHM7XG5cdH1cblxuXHRyZXR1cm4gcztcbn1cblxuY29uc3QgQkFORF9DTElQX0ZJTEwgICA9IDEgPDwgMDtcbmNvbnN0IEJBTkRfQ0xJUF9TVFJPS0UgPSAxIDw8IDE7XG5cbmZ1bmN0aW9uIG9yaWVudCh1LCBzZXJpZXNJZHgsIGNiKSB7XG5cdGNvbnN0IG1vZGUgPSB1Lm1vZGU7XG5cdGNvbnN0IHNlcmllcyA9IHUuc2VyaWVzW3Nlcmllc0lkeF07XG5cdGNvbnN0IGRhdGEgPSBtb2RlID09IDIgPyB1Ll9kYXRhW3Nlcmllc0lkeF0gOiB1Ll9kYXRhO1xuXHRjb25zdCBzY2FsZXMgPSB1LnNjYWxlcztcblx0Y29uc3QgYmJveCAgID0gdS5iYm94O1xuXG5cdGxldCBkeCA9IGRhdGFbMF0sXG5cdFx0ZHkgPSBtb2RlID09IDIgPyBkYXRhWzFdIDogZGF0YVtzZXJpZXNJZHhdLFxuXHRcdHN4ID0gbW9kZSA9PSAyID8gc2NhbGVzW3Nlcmllcy5mYWNldHNbMF0uc2NhbGVdIDogc2NhbGVzW3Uuc2VyaWVzWzBdLnNjYWxlXSxcblx0XHRzeSA9IG1vZGUgPT0gMiA/IHNjYWxlc1tzZXJpZXMuZmFjZXRzWzFdLnNjYWxlXSA6IHNjYWxlc1tzZXJpZXMuc2NhbGVdLFxuXHRcdGwgPSBiYm94LmxlZnQsXG5cdFx0dCA9IGJib3gudG9wLFxuXHRcdHcgPSBiYm94LndpZHRoLFxuXHRcdGggPSBiYm94LmhlaWdodCxcblx0XHRIID0gdS52YWxUb1Bvc0gsXG5cdFx0ViA9IHUudmFsVG9Qb3NWO1xuXG5cdHJldHVybiAoc3gub3JpID09IDBcblx0XHQ/IGNiKFxuXHRcdFx0c2VyaWVzLFxuXHRcdFx0ZHgsXG5cdFx0XHRkeSxcblx0XHRcdHN4LFxuXHRcdFx0c3ksXG5cdFx0XHRILFxuXHRcdFx0Vixcblx0XHRcdGwsXG5cdFx0XHR0LFxuXHRcdFx0dyxcblx0XHRcdGgsXG5cdFx0XHRtb3ZlVG9ILFxuXHRcdFx0bGluZVRvSCxcblx0XHRcdHJlY3RILFxuXHRcdFx0YXJjSCxcblx0XHRcdGJlemllckN1cnZlVG9ILFxuXHRcdClcblx0XHQ6IGNiKFxuXHRcdFx0c2VyaWVzLFxuXHRcdFx0ZHgsXG5cdFx0XHRkeSxcblx0XHRcdHN4LFxuXHRcdFx0c3ksXG5cdFx0XHRWLFxuXHRcdFx0SCxcblx0XHRcdHQsXG5cdFx0XHRsLFxuXHRcdFx0aCxcblx0XHRcdHcsXG5cdFx0XHRtb3ZlVG9WLFxuXHRcdFx0bGluZVRvVixcblx0XHRcdHJlY3RWLFxuXHRcdFx0YXJjVixcblx0XHRcdGJlemllckN1cnZlVG9WLFxuXHRcdClcblx0KTtcbn1cblxuZnVuY3Rpb24gYmFuZEZpbGxDbGlwRGlycyhzZWxmLCBzZXJpZXNJZHgpIHtcblx0bGV0IGZpbGxEaXIgPSAwO1xuXG5cdC8vIDIgYml0cywgLTEgfCAxXG5cdGxldCBjbGlwRGlycyA9IDA7XG5cblx0bGV0IGJhbmRzID0gaWZOdWxsKHNlbGYuYmFuZHMsIEVNUFRZX0FSUik7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kcy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBiID0gYmFuZHNbaV07XG5cblx0XHQvLyBpcyBhIFwiZnJvbVwiIGJhbmQgZWRnZVxuXHRcdGlmIChiLnNlcmllc1swXSA9PSBzZXJpZXNJZHgpXG5cdFx0XHRmaWxsRGlyID0gYi5kaXI7XG5cdFx0Ly8gaXMgYSBcInRvXCIgYmFuZCBlZGdlXG5cdFx0ZWxzZSBpZiAoYi5zZXJpZXNbMV0gPT0gc2VyaWVzSWR4KSB7XG5cdFx0XHRpZiAoYi5kaXIgPT0gMSlcblx0XHRcdFx0Y2xpcERpcnMgfD0gMTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y2xpcERpcnMgfD0gMjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGZpbGxEaXIsXG5cdFx0KFxuXHRcdFx0Y2xpcERpcnMgPT0gMSA/IC0xIDogLy8gbmVnIG9ubHlcblx0XHRcdGNsaXBEaXJzID09IDIgPyAgMSA6IC8vIHBvcyBvbmx5XG5cdFx0XHRjbGlwRGlycyA9PSAzID8gIDIgOiAvLyBib3RoXG5cdFx0XHQgICAgICAgICAgICAgICAgIDAgICAvLyBuZWl0aGVyXG5cdFx0KVxuXHRdO1xufVxuXG5mdW5jdGlvbiBzZXJpZXNGaWxsVG8oc2VsZiwgc2VyaWVzSWR4LCBkYXRhTWluLCBkYXRhTWF4LCBiYW5kRmlsbERpcikge1xuXHRsZXQgbW9kZSA9IHNlbGYubW9kZTtcblx0bGV0IHNlcmllcyA9IHNlbGYuc2VyaWVzW3Nlcmllc0lkeF07XG5cdGxldCBzY2FsZUtleSA9IG1vZGUgPT0gMiA/IHNlcmllcy5mYWNldHNbMV0uc2NhbGUgOiBzZXJpZXMuc2NhbGU7XG5cdGxldCBzY2FsZSA9IHNlbGYuc2NhbGVzW3NjYWxlS2V5XTtcblxuXHRyZXR1cm4gKFxuXHRcdGJhbmRGaWxsRGlyID09IC0xID8gc2NhbGUubWluIDpcblx0XHRiYW5kRmlsbERpciA9PSAgMSA/IHNjYWxlLm1heCA6XG5cdFx0c2NhbGUuZGlzdHIgPT0gIDMgPyAoXG5cdFx0XHRzY2FsZS5kaXIgPT0gMSA/IHNjYWxlLm1pbiA6XG5cdFx0XHRzY2FsZS5tYXhcblx0XHQpIDogMFxuXHQpO1xufVxuXG4vLyBjcmVhdGVzIGludmVydGVkIGJhbmQgY2xpcCBwYXRoIChmcm9tIHN0cm9rZSBwYXRoIC0+IHlNYXggfHwgeU1pbilcbi8vIGNsaXBEaXIgaXMgYWx3YXlzIGludmVyc2Ugb2YgZmlsbERpclxuLy8gZGVmYXVsdCBjbGlwIGRpciBpcyB1cHdhcmRzICgxKSwgc2luY2UgZGVmYXVsdCBiYW5kIGZpbGwgaXMgZG93bndhcmRzL2ZpbGxCZWxvd1RvICgtMSkgKGhpZ2hJZHggLT4gbG93SWR4KVxuZnVuY3Rpb24gY2xpcEJhbmRMaW5lKHNlbGYsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgc3Ryb2tlUGF0aCwgY2xpcERpcikge1xuXHRyZXR1cm4gb3JpZW50KHNlbGYsIHNlcmllc0lkeCwgKHNlcmllcywgZGF0YVgsIGRhdGFZLCBzY2FsZVgsIHNjYWxlWSwgdmFsVG9Qb3NYLCB2YWxUb1Bvc1ksIHhPZmYsIHlPZmYsIHhEaW0sIHlEaW0pID0+IHtcblx0XHRsZXQgcHhSb3VuZCA9IHNlcmllcy5weFJvdW5kO1xuXG5cdFx0Y29uc3QgZGlyID0gc2NhbGVYLmRpciAqIChzY2FsZVgub3JpID09IDAgPyAxIDogLTEpO1xuXHRcdGNvbnN0IGxpbmVUbyA9IHNjYWxlWC5vcmkgPT0gMCA/IGxpbmVUb0ggOiBsaW5lVG9WO1xuXG5cdFx0bGV0IGZySWR4LCB0b0lkeDtcblxuXHRcdGlmIChkaXIgPT0gMSkge1xuXHRcdFx0ZnJJZHggPSBpZHgwO1xuXHRcdFx0dG9JZHggPSBpZHgxO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGZySWR4ID0gaWR4MTtcblx0XHRcdHRvSWR4ID0gaWR4MDtcblx0XHR9XG5cblx0XHQvLyBwYXRoIHN0YXJ0XG5cdFx0bGV0IHgwID0gcHhSb3VuZCh2YWxUb1Bvc1goZGF0YVhbZnJJZHhdLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcblx0XHRsZXQgeTAgPSBweFJvdW5kKHZhbFRvUG9zWShkYXRhWVtmcklkeF0sIHNjYWxlWSwgeURpbSwgeU9mZikpO1xuXHRcdC8vIHBhdGggZW5kIHhcblx0XHRsZXQgeDEgPSBweFJvdW5kKHZhbFRvUG9zWChkYXRhWFt0b0lkeF0sIHNjYWxlWCwgeERpbSwgeE9mZikpO1xuXHRcdC8vIHVwcGVyIG9yIGxvd2VyIHkgbGltaXRcblx0XHRsZXQgeUxpbWl0ID0gcHhSb3VuZCh2YWxUb1Bvc1koY2xpcERpciA9PSAxID8gc2NhbGVZLm1heCA6IHNjYWxlWS5taW4sIHNjYWxlWSwgeURpbSwgeU9mZikpO1xuXG5cdFx0bGV0IGNsaXAgPSBuZXcgUGF0aDJEKHN0cm9rZVBhdGgpO1xuXG5cdFx0bGluZVRvKGNsaXAsIHgxLCB5TGltaXQpO1xuXHRcdGxpbmVUbyhjbGlwLCB4MCwgeUxpbWl0KTtcblx0XHRsaW5lVG8oY2xpcCwgeDAsIHkwKTtcblxuXHRcdHJldHVybiBjbGlwO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xpcEdhcHMoZ2Fwcywgb3JpLCBwbG90TGZ0LCBwbG90VG9wLCBwbG90V2lkLCBwbG90SGd0KSB7XG5cdGxldCBjbGlwID0gbnVsbDtcblxuXHQvLyBjcmVhdGUgY2xpcCBwYXRoIChpbnZlcnQgZ2FwcyBhbmQgbm9uLWdhcHMpXG5cdGlmIChnYXBzLmxlbmd0aCA+IDApIHtcblx0XHRjbGlwID0gbmV3IFBhdGgyRCgpO1xuXG5cdFx0Y29uc3QgcmVjdCA9IG9yaSA9PSAwID8gcmVjdEggOiByZWN0VjtcblxuXHRcdGxldCBwcmV2R2FwRW5kID0gcGxvdExmdDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZ2Fwcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGcgPSBnYXBzW2ldO1xuXG5cdFx0XHRpZiAoZ1sxXSA+IGdbMF0pIHtcblx0XHRcdFx0bGV0IHcgPSBnWzBdIC0gcHJldkdhcEVuZDtcblxuXHRcdFx0XHR3ID4gMCAmJiByZWN0KGNsaXAsIHByZXZHYXBFbmQsIHBsb3RUb3AsIHcsIHBsb3RUb3AgKyBwbG90SGd0KTtcblxuXHRcdFx0XHRwcmV2R2FwRW5kID0gZ1sxXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgdyA9IHBsb3RMZnQgKyBwbG90V2lkIC0gcHJldkdhcEVuZDtcblxuXHRcdHcgPiAwICYmIHJlY3QoY2xpcCwgcHJldkdhcEVuZCwgcGxvdFRvcCwgdywgcGxvdFRvcCArIHBsb3RIZ3QpO1xuXHR9XG5cblx0cmV0dXJuIGNsaXA7XG59XG5cbmZ1bmN0aW9uIGFkZEdhcChnYXBzLCBmcm9tWCwgdG9YKSB7XG5cdGxldCBwcmV2R2FwID0gZ2Fwc1tnYXBzLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChwcmV2R2FwICYmIHByZXZHYXBbMF0gPT0gZnJvbVgpXHRcdFx0Ly8gVE9ETzogZ2FwcyBtdXN0IGJlIGVuY29kZWQgYXQgc3Ryb2tlIHdpZHRocz9cblx0XHRwcmV2R2FwWzFdID0gdG9YO1xuXHRlbHNlXG5cdFx0Z2Fwcy5wdXNoKFtmcm9tWCwgdG9YXSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRHYXBzKHhzLCB5cywgaWR4MCwgaWR4MSwgZGlyLCBwaXhlbEZvclgsIGFsaWduKSB7XG5cdGxldCBnYXBzID0gW107XG5cdGxldCBsZW4gPSB4cy5sZW5ndGg7XG5cblx0Zm9yIChsZXQgaSA9IGRpciA9PSAxID8gaWR4MCA6IGlkeDE7IGkgPj0gaWR4MCAmJiBpIDw9IGlkeDE7IGkgKz0gZGlyKSB7XG5cdFx0bGV0IHlWYWwgPSB5c1tpXTtcblxuXHRcdGlmICh5VmFsID09PSBudWxsKSB7XG5cdFx0XHRsZXQgZnIgPSBpLCB0byA9IGk7XG5cblx0XHRcdGlmIChkaXIgPT0gMSkge1xuXHRcdFx0XHR3aGlsZSAoKytpIDw9IGlkeDEgJiYgeXNbaV0gPT09IG51bGwpXG5cdFx0XHRcdFx0dG8gPSBpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHdoaWxlICgtLWkgPj0gaWR4MCAmJiB5c1tpXSA9PT0gbnVsbClcblx0XHRcdFx0XHR0byA9IGk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBmclB4ID0gcGl4ZWxGb3JYKHhzW2ZyXSk7XG5cdFx0XHRsZXQgdG9QeCA9IHRvID09IGZyID8gZnJQeCA6IHBpeGVsRm9yWCh4c1t0b10pO1xuXG5cdFx0XHQvLyBpZiB2YWx1ZSBhZGphY2VudCB0byBlZGdlIG51bGwgaXMgc2FtZSBwaXhlbCwgdGhlbiBpdCdzIHBhcnRpYWxseVxuXHRcdFx0Ly8gZmlsbGVkIGFuZCBnYXAgc2hvdWxkIHN0YXJ0IGF0IG5leHQgcGl4ZWxcblx0XHRcdGxldCBmcmkyID0gZnIgLSBkaXI7XG5cdFx0XHRsZXQgZnJQeDIgPSBhbGlnbiA8PSAwICYmIGZyaTIgPj0gMCAmJiBmcmkyIDwgbGVuID8gcGl4ZWxGb3JYKHhzW2ZyaTJdKSA6IGZyUHg7XG5cdFx0Ly9cdGlmIChmclB4MiA9PSBmclB4KVxuXHRcdC8vXHRcdGZyUHgrKztcblx0XHQvL1x0ZWxzZVxuXHRcdFx0XHRmclB4ID0gZnJQeDI7XG5cblx0XHRcdGxldCB0b2kyID0gdG8gKyBkaXI7XG5cdFx0XHRsZXQgdG9QeDIgPSBhbGlnbiA+PSAwICYmIHRvaTIgPj0gMCAmJiB0b2kyIDwgbGVuID8gcGl4ZWxGb3JYKHhzW3RvaTJdKSA6IHRvUHg7XG5cdFx0Ly9cdGlmICh0b1B4MiA9PSB0b1B4KVxuXHRcdC8vXHRcdHRvUHgtLTtcblx0XHQvL1x0ZWxzZVxuXHRcdFx0XHR0b1B4ID0gdG9QeDI7XG5cblx0XHRcdGlmICh0b1B4ID49IGZyUHgpXG5cdFx0XHRcdGdhcHMucHVzaChbZnJQeCwgdG9QeF0pOyAvLyBhZGRHYXBcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ2Fwcztcbn1cblxuZnVuY3Rpb24gcHhSb3VuZEdlbihweEFsaWduKSB7XG5cdHJldHVybiBweEFsaWduID09IDAgPyByZXRBcmcwIDogcHhBbGlnbiA9PSAxID8gcm91bmQgOiB2ID0+IGluY3JSb3VuZCh2LCBweEFsaWduKTtcbn1cblxuZnVuY3Rpb24gcmVjdChvcmkpIHtcblx0bGV0IG1vdmVUbyA9IG9yaSA9PSAwID9cblx0XHRtb3ZlVG9IIDpcblx0XHRtb3ZlVG9WO1xuXG5cdGxldCBhcmNUbyA9IG9yaSA9PSAwID9cblx0XHQocCwgeDEsIHkxLCB4MiwgeTIsIHIpID0+IHsgcC5hcmNUbyh4MSwgeTEsIHgyLCB5Miwgcik7IH0gOlxuXHRcdChwLCB5MSwgeDEsIHkyLCB4MiwgcikgPT4geyBwLmFyY1RvKHgxLCB5MSwgeDIsIHkyLCByKTsgfTtcblxuXHRsZXQgcmVjdCA9IG9yaSA9PSAwID9cblx0XHQocCwgeCwgeSwgdywgaCkgPT4geyBwLnJlY3QoeCwgeSwgdywgaCk7IH0gOlxuXHRcdChwLCB5LCB4LCBoLCB3KSA9PiB7IHAucmVjdCh4LCB5LCB3LCBoKTsgfTtcblxuXHQvLyBUT0RPIChwZW5kaW5nIGJldHRlciBicm93c2VyIHN1cHBvcnQpOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL3JvdW5kUmVjdFxuXHRyZXR1cm4gKHAsIHgsIHksIHcsIGgsIGVuZFJhZCA9IDAsIGJhc2VSYWQgPSAwKSA9PiB7XG5cdFx0aWYgKGVuZFJhZCA9PSAwICYmIGJhc2VSYWQgPT0gMClcblx0XHRcdHJlY3QocCwgeCwgeSwgdywgaCk7XG5cdFx0ZWxzZSB7XG5cdFx0XHRlbmRSYWQgID0gbWluKGVuZFJhZCwgIHcgLyAyLCBoIC8gMik7XG5cdFx0XHRiYXNlUmFkID0gbWluKGJhc2VSYWQsIHcgLyAyLCBoIC8gMik7XG5cblx0XHRcdC8vIGFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjU1NTEyL2hvdy10by1kcmF3LWEtcm91bmRlZC1yZWN0YW5nbGUtdXNpbmctaHRtbC1jYW52YXMvNzgzODg3MSM3ODM4ODcxXG5cdFx0XHRtb3ZlVG8ocCwgeCArIGVuZFJhZCwgeSk7XG5cdFx0XHRhcmNUbyhwLCB4ICsgdywgeSwgeCArIHcsIHkgKyBoLCBlbmRSYWQpO1xuXHRcdFx0YXJjVG8ocCwgeCArIHcsIHkgKyBoLCB4LCB5ICsgaCwgYmFzZVJhZCk7XG5cdFx0XHRhcmNUbyhwLCB4LCB5ICsgaCwgeCwgeSwgYmFzZVJhZCk7XG5cdFx0XHRhcmNUbyhwLCB4LCB5LCB4ICsgdywgeSwgZW5kUmFkKTtcblx0XHRcdHAuY2xvc2VQYXRoKCk7XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBvcmllbnRhdGlvbi1pbnZlcnRpbmcgY2FudmFzIGZ1bmN0aW9uc1xuY29uc3QgbW92ZVRvSCA9IChwLCB4LCB5KSA9PiB7IHAubW92ZVRvKHgsIHkpOyB9O1xuY29uc3QgbW92ZVRvViA9IChwLCB5LCB4KSA9PiB7IHAubW92ZVRvKHgsIHkpOyB9O1xuY29uc3QgbGluZVRvSCA9IChwLCB4LCB5KSA9PiB7IHAubGluZVRvKHgsIHkpOyB9O1xuY29uc3QgbGluZVRvViA9IChwLCB5LCB4KSA9PiB7IHAubGluZVRvKHgsIHkpOyB9O1xuY29uc3QgcmVjdEggPSByZWN0KDApO1xuY29uc3QgcmVjdFYgPSByZWN0KDEpO1xuY29uc3QgYXJjSCA9IChwLCB4LCB5LCByLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkgPT4geyBwLmFyYyh4LCB5LCByLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7IH07XG5jb25zdCBhcmNWID0gKHAsIHksIHgsIHIsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSA9PiB7IHAuYXJjKHgsIHksIHIsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTsgfTtcbmNvbnN0IGJlemllckN1cnZlVG9IID0gKHAsIGJwMXgsIGJwMXksIGJwMngsIGJwMnksIHAyeCwgcDJ5KSA9PiB7IHAuYmV6aWVyQ3VydmVUbyhicDF4LCBicDF5LCBicDJ4LCBicDJ5LCBwMngsIHAyeSk7IH07XG5jb25zdCBiZXppZXJDdXJ2ZVRvViA9IChwLCBicDF5LCBicDF4LCBicDJ5LCBicDJ4LCBwMnksIHAyeCkgPT4geyBwLmJlemllckN1cnZlVG8oYnAxeCwgYnAxeSwgYnAyeCwgYnAyeSwgcDJ4LCBwMnkpOyB9O1xuXG4vLyBUT0RPOiBkcmF3V3JhcChzZXJpZXNJZHgsIGRyYXdQb2ludHMpIChzYXZlLCByZXN0b3JlLCB0cmFuc2xhdGUsIGNsaXApXG5mdW5jdGlvbiBwb2ludHMob3B0cykge1xuXHRyZXR1cm4gKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgZmlsdElkeHMpID0+IHtcblx0Ly9cdGxvZyhcImRyYXdQb2ludHMoKVwiLCBhcmd1bWVudHMpO1xuXG5cdFx0cmV0dXJuIG9yaWVudCh1LCBzZXJpZXNJZHgsIChzZXJpZXMsIGRhdGFYLCBkYXRhWSwgc2NhbGVYLCBzY2FsZVksIHZhbFRvUG9zWCwgdmFsVG9Qb3NZLCB4T2ZmLCB5T2ZmLCB4RGltLCB5RGltKSA9PiB7XG5cdFx0XHRsZXQgeyBweFJvdW5kLCBwb2ludHMgfSA9IHNlcmllcztcblxuXHRcdFx0bGV0IG1vdmVUbywgYXJjO1xuXG5cdFx0XHRpZiAoc2NhbGVYLm9yaSA9PSAwKSB7XG5cdFx0XHRcdG1vdmVUbyA9IG1vdmVUb0g7XG5cdFx0XHRcdGFyYyA9IGFyY0g7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bW92ZVRvID0gbW92ZVRvVjtcblx0XHRcdFx0YXJjID0gYXJjVjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgd2lkdGggPSByb3VuZERlYyhwb2ludHMud2lkdGggKiBweFJhdGlvLCAzKTtcblxuXHRcdFx0bGV0IHJhZCA9IChwb2ludHMuc2l6ZSAtIHBvaW50cy53aWR0aCkgLyAyICogcHhSYXRpbztcblx0XHRcdGxldCBkaWEgPSByb3VuZERlYyhyYWQgKiAyLCAzKTtcblxuXHRcdFx0bGV0IGZpbGwgPSBuZXcgUGF0aDJEKCk7XG5cdFx0XHRsZXQgY2xpcCA9IG5ldyBQYXRoMkQoKTtcblxuXHRcdFx0bGV0IHsgbGVmdDogbGZ0LCB0b3A6IHRvcCwgd2lkdGg6IHdpZCwgaGVpZ2h0OiBoZ3QgfSA9IHUuYmJveDtcblxuXHRcdFx0cmVjdEgoY2xpcCxcblx0XHRcdFx0bGZ0IC0gZGlhLFxuXHRcdFx0XHR0b3AgLSBkaWEsXG5cdFx0XHRcdHdpZCArIGRpYSAqIDIsXG5cdFx0XHRcdGhndCArIGRpYSAqIDIsXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBkcmF3UG9pbnQgPSBwaSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhWVtwaV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGxldCB4ID0gcHhSb3VuZCh2YWxUb1Bvc1goZGF0YVhbcGldLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcblx0XHRcdFx0XHRsZXQgeSA9IHB4Um91bmQodmFsVG9Qb3NZKGRhdGFZW3BpXSwgc2NhbGVZLCB5RGltLCB5T2ZmKSk7XG5cblx0XHRcdFx0XHRtb3ZlVG8oZmlsbCwgeCArIHJhZCwgeSk7XG5cdFx0XHRcdFx0YXJjKGZpbGwsIHgsIHksIHJhZCwgMCwgUEkgKiAyKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGZpbHRJZHhzKVxuXHRcdFx0XHRmaWx0SWR4cy5mb3JFYWNoKGRyYXdQb2ludCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Zm9yIChsZXQgcGkgPSBpZHgwOyBwaSA8PSBpZHgxOyBwaSsrKVxuXHRcdFx0XHRcdGRyYXdQb2ludChwaSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0cm9rZTogd2lkdGggPiAwID8gZmlsbCA6IG51bGwsXG5cdFx0XHRcdGZpbGwsXG5cdFx0XHRcdGNsaXAsXG5cdFx0XHRcdGZsYWdzOiBCQU5EX0NMSVBfRklMTCB8IEJBTkRfQ0xJUF9TVFJPS0UsXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfZHJhd0FjYyhsaW5lVG8pIHtcblx0cmV0dXJuIChzdHJva2UsIGFjY1gsIG1pblksIG1heFksIGluWSwgb3V0WSkgPT4ge1xuXHRcdGlmIChtaW5ZICE9IG1heFkpIHtcblx0XHRcdGlmIChpblkgIT0gbWluWSAmJiBvdXRZICE9IG1pblkpXG5cdFx0XHRcdGxpbmVUbyhzdHJva2UsIGFjY1gsIG1pblkpO1xuXHRcdFx0aWYgKGluWSAhPSBtYXhZICYmIG91dFkgIT0gbWF4WSlcblx0XHRcdFx0bGluZVRvKHN0cm9rZSwgYWNjWCwgbWF4WSk7XG5cblx0XHRcdGxpbmVUbyhzdHJva2UsIGFjY1gsIG91dFkpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZHJhd0FjY0ggPSBfZHJhd0FjYyhsaW5lVG9IKTtcbmNvbnN0IGRyYXdBY2NWID0gX2RyYXdBY2MobGluZVRvVik7XG5cbmZ1bmN0aW9uIGxpbmVhcihvcHRzKSB7XG5cdGNvbnN0IGFsaWduR2FwcyA9IGlmTnVsbChvcHRzPy5hbGlnbkdhcHMsIDApO1xuXG5cdHJldHVybiAodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxKSA9PiB7XG5cdFx0cmV0dXJuIG9yaWVudCh1LCBzZXJpZXNJZHgsIChzZXJpZXMsIGRhdGFYLCBkYXRhWSwgc2NhbGVYLCBzY2FsZVksIHZhbFRvUG9zWCwgdmFsVG9Qb3NZLCB4T2ZmLCB5T2ZmLCB4RGltLCB5RGltKSA9PiB7XG5cdFx0XHRsZXQgcHhSb3VuZCA9IHNlcmllcy5weFJvdW5kO1xuXG5cdFx0XHRsZXQgcGl4ZWxGb3JYID0gdmFsID0+IHB4Um91bmQodmFsVG9Qb3NYKHZhbCwgc2NhbGVYLCB4RGltLCB4T2ZmKSk7XG5cdFx0XHRsZXQgcGl4ZWxGb3JZID0gdmFsID0+IHB4Um91bmQodmFsVG9Qb3NZKHZhbCwgc2NhbGVZLCB5RGltLCB5T2ZmKSk7XG5cblx0XHRcdGxldCBsaW5lVG8sIGRyYXdBY2M7XG5cblx0XHRcdGlmIChzY2FsZVgub3JpID09IDApIHtcblx0XHRcdFx0bGluZVRvID0gbGluZVRvSDtcblx0XHRcdFx0ZHJhd0FjYyA9IGRyYXdBY2NIO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxpbmVUbyA9IGxpbmVUb1Y7XG5cdFx0XHRcdGRyYXdBY2MgPSBkcmF3QWNjVjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGlyID0gc2NhbGVYLmRpciAqIChzY2FsZVgub3JpID09IDAgPyAxIDogLTEpO1xuXG5cdFx0XHRjb25zdCBfcGF0aHMgPSB7c3Ryb2tlOiBuZXcgUGF0aDJEKCksIGZpbGw6IG51bGwsIGNsaXA6IG51bGwsIGJhbmQ6IG51bGwsIGdhcHM6IG51bGwsIGZsYWdzOiBCQU5EX0NMSVBfRklMTH07XG5cdFx0XHRjb25zdCBzdHJva2UgPSBfcGF0aHMuc3Ryb2tlO1xuXG5cdFx0XHRsZXQgbWluWSA9IGluZixcblx0XHRcdFx0bWF4WSA9IC1pbmYsXG5cdFx0XHRcdGluWSwgb3V0WSwgZHJhd25BdFg7XG5cblx0XHRcdGxldCBhY2NYID0gcGl4ZWxGb3JYKGRhdGFYW2RpciA9PSAxID8gaWR4MCA6IGlkeDFdKTtcblxuXHRcdFx0Ly8gZGF0YSBlZGdlc1xuXHRcdFx0bGV0IGxmdElkeCA9IG5vbk51bGxJZHgoZGF0YVksIGlkeDAsIGlkeDEsICAxICogZGlyKTtcblx0XHRcdGxldCByZ3RJZHggPSBub25OdWxsSWR4KGRhdGFZLCBpZHgwLCBpZHgxLCAtMSAqIGRpcik7XG5cdFx0XHRsZXQgbGZ0WCAgID0gIHBpeGVsRm9yWChkYXRhWFtsZnRJZHhdKTtcblx0XHRcdGxldCByZ3RYICAgPSAgcGl4ZWxGb3JYKGRhdGFYW3JndElkeF0pO1xuXG5cdFx0XHRsZXQgaGFzR2FwID0gZmFsc2U7XG5cblx0XHRcdGZvciAobGV0IGkgPSBkaXIgPT0gMSA/IGlkeDAgOiBpZHgxOyBpID49IGlkeDAgJiYgaSA8PSBpZHgxOyBpICs9IGRpcikge1xuXHRcdFx0XHRsZXQgeCA9IHBpeGVsRm9yWChkYXRhWFtpXSk7XG5cdFx0XHRcdGxldCB5VmFsID0gZGF0YVlbaV07XG5cblx0XHRcdFx0aWYgKHggPT0gYWNjWCkge1xuXHRcdFx0XHRcdGlmICh5VmFsICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdG91dFkgPSBwaXhlbEZvclkoeVZhbCk7XG5cblx0XHRcdFx0XHRcdGlmIChtaW5ZID09IGluZikge1xuXHRcdFx0XHRcdFx0XHRsaW5lVG8oc3Ryb2tlLCB4LCBvdXRZKTtcblx0XHRcdFx0XHRcdFx0aW5ZID0gb3V0WTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bWluWSA9IG1pbihvdXRZLCBtaW5ZKTtcblx0XHRcdFx0XHRcdG1heFkgPSBtYXgob3V0WSwgbWF4WSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHlWYWwgPT09IG51bGwpXG5cdFx0XHRcdFx0XHRcdGhhc0dhcCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChtaW5ZICE9IGluZikge1xuXHRcdFx0XHRcdFx0ZHJhd0FjYyhzdHJva2UsIGFjY1gsIG1pblksIG1heFksIGluWSwgb3V0WSk7XG5cdFx0XHRcdFx0XHRkcmF3bkF0WCA9IGFjY1g7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHlWYWwgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3V0WSA9IHBpeGVsRm9yWSh5VmFsKTtcblx0XHRcdFx0XHRcdGxpbmVUbyhzdHJva2UsIHgsIG91dFkpO1xuXHRcdFx0XHRcdFx0bWluWSA9IG1heFkgPSBpblkgPSBvdXRZO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdG1pblkgPSBpbmY7XG5cdFx0XHRcdFx0XHRtYXhZID0gLWluZjtcblxuXHRcdFx0XHRcdFx0aWYgKHlWYWwgPT09IG51bGwpXG5cdFx0XHRcdFx0XHRcdGhhc0dhcCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YWNjWCA9IHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG1pblkgIT0gaW5mICYmIG1pblkgIT0gbWF4WSAmJiBkcmF3bkF0WCAhPSBhY2NYKVxuXHRcdFx0XHRkcmF3QWNjKHN0cm9rZSwgYWNjWCwgbWluWSwgbWF4WSwgaW5ZLCBvdXRZKTtcblxuXHRcdFx0bGV0IFsgYmFuZEZpbGxEaXIsIGJhbmRDbGlwRGlyIF0gPSBiYW5kRmlsbENsaXBEaXJzKHUsIHNlcmllc0lkeCk7XG5cblx0XHRcdGlmIChzZXJpZXMuZmlsbCAhPSBudWxsIHx8IGJhbmRGaWxsRGlyICE9IDApIHtcblx0XHRcdFx0bGV0IGZpbGwgPSBfcGF0aHMuZmlsbCA9IG5ldyBQYXRoMkQoc3Ryb2tlKTtcblxuXHRcdFx0XHRsZXQgZmlsbFRvVmFsID0gc2VyaWVzLmZpbGxUbyh1LCBzZXJpZXNJZHgsIHNlcmllcy5taW4sIHNlcmllcy5tYXgsIGJhbmRGaWxsRGlyKTtcblx0XHRcdFx0bGV0IGZpbGxUb1kgPSBwaXhlbEZvclkoZmlsbFRvVmFsKTtcblxuXHRcdFx0XHRsaW5lVG8oZmlsbCwgcmd0WCwgZmlsbFRvWSk7XG5cdFx0XHRcdGxpbmVUbyhmaWxsLCBsZnRYLCBmaWxsVG9ZKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFzZXJpZXMuc3BhbkdhcHMpIHtcblx0XHRcdC8vXHRjb25zb2xlLnRpbWUoJ2dhcHMnKTtcblx0XHRcdFx0bGV0IGdhcHMgPSBbXTtcblxuXHRcdFx0XHRoYXNHYXAgJiYgZ2Fwcy5wdXNoKC4uLmZpbmRHYXBzKGRhdGFYLCBkYXRhWSwgaWR4MCwgaWR4MSwgZGlyLCBwaXhlbEZvclgsIGFsaWduR2FwcykpO1xuXG5cdFx0XHQvL1x0Y29uc29sZS50aW1lRW5kKCdnYXBzJyk7XG5cblx0XHRcdC8vXHRjb25zb2xlLmxvZygnZ2FwcycsIEpTT04uc3RyaW5naWZ5KGdhcHMpKTtcblxuXHRcdFx0XHRfcGF0aHMuZ2FwcyA9IGdhcHMgPSBzZXJpZXMuZ2Fwcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIGdhcHMpO1xuXG5cdFx0XHRcdF9wYXRocy5jbGlwID0gY2xpcEdhcHMoZ2Fwcywgc2NhbGVYLm9yaSwgeE9mZiwgeU9mZiwgeERpbSwgeURpbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChiYW5kQ2xpcERpciAhPSAwKSB7XG5cdFx0XHRcdF9wYXRocy5iYW5kID0gYmFuZENsaXBEaXIgPT0gMiA/IFtcblx0XHRcdFx0XHRjbGlwQmFuZExpbmUodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2UsIC0xKSxcblx0XHRcdFx0XHRjbGlwQmFuZExpbmUodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2UsICAxKSxcblx0XHRcdFx0XSA6IGNsaXBCYW5kTGluZSh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIHN0cm9rZSwgYmFuZENsaXBEaXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3BhdGhzO1xuXHRcdH0pO1xuXHR9O1xufVxuXG4vLyBCVUc6IGFsaWduOiAtMSBiZWhhdmVzIGxpa2UgYWxpZ246IDEgd2hlbiBzY2FsZS5kaXI6IC0xXG5mdW5jdGlvbiBzdGVwcGVkKG9wdHMpIHtcblx0Y29uc3QgYWxpZ24gPSBpZk51bGwob3B0cy5hbGlnbiwgMSk7XG5cdC8vIHdoZXRoZXIgdG8gZHJhdyBhc2NlbmRlcnMvZGVzY2VuZGVycyBhdCBudWxsL2dhcCBib25kYXJpZXNcblx0Y29uc3QgYXNjRGVzYyA9IGlmTnVsbChvcHRzLmFzY0Rlc2MsIGZhbHNlKTtcblx0Y29uc3QgYWxpZ25HYXBzID0gaWZOdWxsKG9wdHMuYWxpZ25HYXBzLCAwKTtcblx0Y29uc3QgZXh0ZW5kID0gaWZOdWxsKG9wdHMuZXh0ZW5kLCBmYWxzZSk7XG5cblx0cmV0dXJuICh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpID0+IHtcblx0XHRyZXR1cm4gb3JpZW50KHUsIHNlcmllc0lkeCwgKHNlcmllcywgZGF0YVgsIGRhdGFZLCBzY2FsZVgsIHNjYWxlWSwgdmFsVG9Qb3NYLCB2YWxUb1Bvc1ksIHhPZmYsIHlPZmYsIHhEaW0sIHlEaW0pID0+IHtcblx0XHRcdGxldCBweFJvdW5kID0gc2VyaWVzLnB4Um91bmQ7XG5cblx0XHRcdGxldCB7IGxlZnQsIHdpZHRoIH0gPSB1LmJib3g7XG5cblx0XHRcdGxldCBwaXhlbEZvclggPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1godmFsLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcblx0XHRcdGxldCBwaXhlbEZvclkgPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1kodmFsLCBzY2FsZVksIHlEaW0sIHlPZmYpKTtcblxuXHRcdFx0bGV0IGxpbmVUbyA9IHNjYWxlWC5vcmkgPT0gMCA/IGxpbmVUb0ggOiBsaW5lVG9WO1xuXG5cdFx0XHRjb25zdCBfcGF0aHMgPSB7c3Ryb2tlOiBuZXcgUGF0aDJEKCksIGZpbGw6IG51bGwsIGNsaXA6IG51bGwsIGJhbmQ6IG51bGwsIGdhcHM6IG51bGwsIGZsYWdzOiBCQU5EX0NMSVBfRklMTH07XG5cdFx0XHRjb25zdCBzdHJva2UgPSBfcGF0aHMuc3Ryb2tlO1xuXG5cdFx0XHRjb25zdCBkaXIgPSBzY2FsZVguZGlyICogKHNjYWxlWC5vcmkgPT0gMCA/IDEgOiAtMSk7XG5cblx0XHRcdGlkeDAgPSBub25OdWxsSWR4KGRhdGFZLCBpZHgwLCBpZHgxLCAgMSk7XG5cdFx0XHRpZHgxID0gbm9uTnVsbElkeChkYXRhWSwgaWR4MCwgaWR4MSwgLTEpO1xuXG5cdFx0XHRsZXQgcHJldllQb3MgID0gcGl4ZWxGb3JZKGRhdGFZW2RpciA9PSAxID8gaWR4MCA6IGlkeDFdKTtcblx0XHRcdGxldCBmaXJzdFhQb3MgPSBwaXhlbEZvclgoZGF0YVhbZGlyID09IDEgPyBpZHgwIDogaWR4MV0pO1xuXHRcdFx0bGV0IHByZXZYUG9zID0gZmlyc3RYUG9zO1xuXG5cdFx0XHRsZXQgZmlyc3RYUG9zRXh0ID0gZmlyc3RYUG9zO1xuXG5cdFx0XHRpZiAoZXh0ZW5kICYmIGFsaWduID09IC0xKSB7XG5cdFx0XHRcdGZpcnN0WFBvc0V4dCA9IGxlZnQ7XG5cdFx0XHRcdGxpbmVUbyhzdHJva2UsIGZpcnN0WFBvc0V4dCwgcHJldllQb3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRsaW5lVG8oc3Ryb2tlLCBmaXJzdFhQb3MsIHByZXZZUG9zKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IGRpciA9PSAxID8gaWR4MCA6IGlkeDE7IGkgPj0gaWR4MCAmJiBpIDw9IGlkeDE7IGkgKz0gZGlyKSB7XG5cdFx0XHRcdGxldCB5VmFsMSA9IGRhdGFZW2ldO1xuXG5cdFx0XHRcdGlmICh5VmFsMSA9PSBudWxsKVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRcdGxldCB4MSA9IHBpeGVsRm9yWChkYXRhWFtpXSk7XG5cdFx0XHRcdGxldCB5MSA9IHBpeGVsRm9yWSh5VmFsMSk7XG5cblx0XHRcdFx0aWYgKGFsaWduID09IDEpXG5cdFx0XHRcdFx0bGluZVRvKHN0cm9rZSwgeDEsIHByZXZZUG9zKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGxpbmVUbyhzdHJva2UsIHByZXZYUG9zLCB5MSk7XG5cblx0XHRcdFx0bGluZVRvKHN0cm9rZSwgeDEsIHkxKTtcblxuXHRcdFx0XHRwcmV2WVBvcyA9IHkxO1xuXHRcdFx0XHRwcmV2WFBvcyA9IHgxO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcHJldlhQb3NFeHQgPSBwcmV2WFBvcztcblxuXHRcdFx0aWYgKGV4dGVuZCAmJiBhbGlnbiA9PSAxKSB7XG5cdFx0XHRcdHByZXZYUG9zRXh0ID0gbGVmdCArIHdpZHRoO1xuXHRcdFx0XHRsaW5lVG8oc3Ryb2tlLCBwcmV2WFBvc0V4dCwgcHJldllQb3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgWyBiYW5kRmlsbERpciwgYmFuZENsaXBEaXIgXSA9IGJhbmRGaWxsQ2xpcERpcnModSwgc2VyaWVzSWR4KTtcblxuXHRcdFx0aWYgKHNlcmllcy5maWxsICE9IG51bGwgfHwgYmFuZEZpbGxEaXIgIT0gMCkge1xuXHRcdFx0XHRsZXQgZmlsbCA9IF9wYXRocy5maWxsID0gbmV3IFBhdGgyRChzdHJva2UpO1xuXG5cdFx0XHRcdGxldCBmaWxsVG8gPSBzZXJpZXMuZmlsbFRvKHUsIHNlcmllc0lkeCwgc2VyaWVzLm1pbiwgc2VyaWVzLm1heCwgYmFuZEZpbGxEaXIpO1xuXHRcdFx0XHRsZXQgZmlsbFRvWSA9IHBpeGVsRm9yWShmaWxsVG8pO1xuXG5cdFx0XHRcdGxpbmVUbyhmaWxsLCBwcmV2WFBvc0V4dCwgZmlsbFRvWSk7XG5cdFx0XHRcdGxpbmVUbyhmaWxsLCBmaXJzdFhQb3NFeHQsIGZpbGxUb1kpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXNlcmllcy5zcGFuR2Fwcykge1xuXHRcdFx0Ly9cdGNvbnNvbGUudGltZSgnZ2FwcycpO1xuXHRcdFx0XHRsZXQgZ2FwcyA9IFtdO1xuXG5cdFx0XHRcdGdhcHMucHVzaCguLi5maW5kR2FwcyhkYXRhWCwgZGF0YVksIGlkeDAsIGlkeDEsIGRpciwgcGl4ZWxGb3JYLCBhbGlnbkdhcHMpKTtcblxuXHRcdFx0Ly9cdGNvbnNvbGUudGltZUVuZCgnZ2FwcycpO1xuXG5cdFx0XHQvL1x0Y29uc29sZS5sb2coJ2dhcHMnLCBKU09OLnN0cmluZ2lmeShnYXBzKSk7XG5cblx0XHRcdFx0Ly8gZXhwYW5kL2NvbnRyYWN0IGNsaXBzIGZvciBhc2NlbmRlcnMvZGVzY2VuZGVyc1xuXHRcdFx0XHRsZXQgaGFsZlN0cm9rZSA9IChzZXJpZXMud2lkdGggKiBweFJhdGlvKSAvIDI7XG5cdFx0XHRcdGxldCBzdGFydHNPZmZzZXQgPSAoYXNjRGVzYyB8fCBhbGlnbiA9PSAgMSkgPyAgaGFsZlN0cm9rZSA6IC1oYWxmU3Ryb2tlO1xuXHRcdFx0XHRsZXQgZW5kc09mZnNldCAgID0gKGFzY0Rlc2MgfHwgYWxpZ24gPT0gLTEpID8gLWhhbGZTdHJva2UgOiAgaGFsZlN0cm9rZTtcblxuXHRcdFx0XHRnYXBzLmZvckVhY2goZyA9PiB7XG5cdFx0XHRcdFx0Z1swXSArPSBzdGFydHNPZmZzZXQ7XG5cdFx0XHRcdFx0Z1sxXSArPSBlbmRzT2Zmc2V0O1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRfcGF0aHMuZ2FwcyA9IGdhcHMgPSBzZXJpZXMuZ2Fwcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIGdhcHMpO1xuXG5cdFx0XHRcdF9wYXRocy5jbGlwID0gY2xpcEdhcHMoZ2Fwcywgc2NhbGVYLm9yaSwgeE9mZiwgeU9mZiwgeERpbSwgeURpbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChiYW5kQ2xpcERpciAhPSAwKSB7XG5cdFx0XHRcdF9wYXRocy5iYW5kID0gYmFuZENsaXBEaXIgPT0gMiA/IFtcblx0XHRcdFx0XHRjbGlwQmFuZExpbmUodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2UsIC0xKSxcblx0XHRcdFx0XHRjbGlwQmFuZExpbmUodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2UsICAxKSxcblx0XHRcdFx0XSA6IGNsaXBCYW5kTGluZSh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIHN0cm9rZSwgYmFuZENsaXBEaXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3BhdGhzO1xuXHRcdH0pO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBiYXJzKG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwgRU1QVFlfT0JKO1xuXHRjb25zdCBzaXplID0gaWZOdWxsKG9wdHMuc2l6ZSwgWzAuNiwgaW5mLCAxXSk7XG5cdGNvbnN0IGFsaWduID0gb3B0cy5hbGlnbiB8fCAwO1xuXHRjb25zdCBleHRyYUdhcCA9IChvcHRzLmdhcCB8fCAwKSAqIHB4UmF0aW87XG5cblx0bGV0IHJvID0gb3B0cy5yYWRpdXM7XG5cblx0cm8gPVxuXHRcdC8vIFt2YWx1ZVJhZGl1cywgYmFzZWxpbmVSYWRpdXNdXG5cdFx0cm8gPT0gbnVsbCA/IFswLCAwXSA6XG5cdFx0dHlwZW9mIHJvID09ICdudW1iZXInID8gW3JvLCAwXSA6IHJvO1xuXG5cdGNvbnN0IHJhZGl1c0ZuID0gZm5PclNlbGYocm8pO1xuXG5cdGNvbnN0IGdhcEZhY3RvciA9IDEgLSBzaXplWzBdO1xuXHRjb25zdCBtYXhXaWR0aCAgPSBpZk51bGwoc2l6ZVsxXSwgaW5mKSAqIHB4UmF0aW87XG5cdGNvbnN0IG1pbldpZHRoICA9IGlmTnVsbChzaXplWzJdLCAxKSAqIHB4UmF0aW87XG5cblx0Y29uc3QgZGlzcCA9IGlmTnVsbChvcHRzLmRpc3AsIEVNUFRZX09CSik7XG5cdGNvbnN0IF9lYWNoID0gaWZOdWxsKG9wdHMuZWFjaCwgXyA9PiB7fSk7XG5cblx0Y29uc3QgeyBmaWxsOiBkaXNwRmlsbHMsIHN0cm9rZTogZGlzcFN0cm9rZXMgfSA9IGRpc3A7XG5cblx0cmV0dXJuICh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpID0+IHtcblx0XHRyZXR1cm4gb3JpZW50KHUsIHNlcmllc0lkeCwgKHNlcmllcywgZGF0YVgsIGRhdGFZLCBzY2FsZVgsIHNjYWxlWSwgdmFsVG9Qb3NYLCB2YWxUb1Bvc1ksIHhPZmYsIHlPZmYsIHhEaW0sIHlEaW0pID0+IHtcblx0XHRcdGxldCBweFJvdW5kID0gc2VyaWVzLnB4Um91bmQ7XG5cblx0XHRcdGxldCB2YWxSYWRpdXMsIGJhc2VSYWRpdXM7XG5cblx0XHRcdGlmIChzY2FsZVgub3JpID09IDApXG5cdFx0XHRcdFt2YWxSYWRpdXMsIGJhc2VSYWRpdXNdID0gcmFkaXVzRm4odSwgc2VyaWVzSWR4KTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0W2Jhc2VSYWRpdXMsIHZhbFJhZGl1c10gPSByYWRpdXNGbih1LCBzZXJpZXNJZHgpO1xuXG5cdFx0XHRjb25zdCBfZGlyWCA9IHNjYWxlWC5kaXIgKiAoc2NhbGVYLm9yaSA9PSAwID8gMSA6IC0xKTtcblx0XHRcdGNvbnN0IF9kaXJZID0gc2NhbGVZLmRpciAqIChzY2FsZVkub3JpID09IDEgPyAxIDogLTEpO1xuXG5cdFx0XHRsZXQgcmVjdCA9IHNjYWxlWC5vcmkgPT0gMCA/IHJlY3RIIDogcmVjdFY7XG5cblx0XHRcdGxldCBlYWNoID0gc2NhbGVYLm9yaSA9PSAwID8gX2VhY2ggOiAodSwgc2VyaWVzSWR4LCBpLCB0b3AsIGxmdCwgaGd0LCB3aWQpID0+IHtcblx0XHRcdFx0X2VhY2godSwgc2VyaWVzSWR4LCBpLCBsZnQsIHRvcCwgd2lkLCBoZ3QpO1xuXHRcdFx0fTtcblxuXHRcdFx0bGV0IFsgYmFuZEZpbGxEaXIsIGJhbmRDbGlwRGlyIF0gPSBiYW5kRmlsbENsaXBEaXJzKHUsIHNlcmllc0lkeCk7XG5cblx0XHQvL1x0bGV0IGZpbGxUb1kgPSBzZXJpZXMuZmlsbFRvKHUsIHNlcmllc0lkeCwgc2VyaWVzLm1pbiwgc2VyaWVzLm1heCwgYmFuZEZpbGxEaXIpO1xuXHRcdFx0bGV0IGZpbGxUb1kgPSBzY2FsZVkuZGlzdHIgPT0gMyA/IChiYW5kRmlsbERpciA9PSAxID8gc2NhbGVZLm1heCA6IHNjYWxlWS5taW4pIDogMDtcblxuXHRcdFx0bGV0IHkwUG9zID0gdmFsVG9Qb3NZKGZpbGxUb1ksIHNjYWxlWSwgeURpbSwgeU9mZik7XG5cblx0XHRcdC8vIGJhcldpZCBpcyB0byBjZW50ZXIgb2Ygc3Ryb2tlXG5cdFx0XHRsZXQgeFNoaWZ0LCBiYXJXaWQ7XG5cblx0XHRcdGxldCBzdHJva2VXaWR0aCA9IHB4Um91bmQoc2VyaWVzLndpZHRoICogcHhSYXRpbyk7XG5cblx0XHRcdGxldCBtdWx0aVBhdGggPSBmYWxzZTtcblxuXHRcdFx0bGV0IGZpbGxDb2xvcnMgPSBudWxsO1xuXHRcdFx0bGV0IGZpbGxQYXRocyA9IG51bGw7XG5cdFx0XHRsZXQgc3Ryb2tlQ29sb3JzID0gbnVsbDtcblx0XHRcdGxldCBzdHJva2VQYXRocyA9IG51bGw7XG5cblx0XHRcdGlmIChkaXNwRmlsbHMgIT0gbnVsbCAmJiAoc3Ryb2tlV2lkdGggPT0gMCB8fCBkaXNwU3Ryb2tlcyAhPSBudWxsKSkge1xuXHRcdFx0XHRtdWx0aVBhdGggPSB0cnVlO1xuXG5cdFx0XHRcdGZpbGxDb2xvcnMgPSBkaXNwRmlsbHMudmFsdWVzKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSk7XG5cdFx0XHRcdGZpbGxQYXRocyA9IG5ldyBNYXAoKTtcblx0XHRcdFx0KG5ldyBTZXQoZmlsbENvbG9ycykpLmZvckVhY2goY29sb3IgPT4ge1xuXHRcdFx0XHRcdGlmIChjb2xvciAhPSBudWxsKVxuXHRcdFx0XHRcdFx0ZmlsbFBhdGhzLnNldChjb2xvciwgbmV3IFBhdGgyRCgpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHN0cm9rZVdpZHRoID4gMCkge1xuXHRcdFx0XHRcdHN0cm9rZUNvbG9ycyA9IGRpc3BTdHJva2VzLnZhbHVlcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpO1xuXHRcdFx0XHRcdHN0cm9rZVBhdGhzID0gbmV3IE1hcCgpO1xuXHRcdFx0XHRcdChuZXcgU2V0KHN0cm9rZUNvbG9ycykpLmZvckVhY2goY29sb3IgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGNvbG9yICE9IG51bGwpXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVBhdGhzLnNldChjb2xvciwgbmV3IFBhdGgyRCgpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgeyB4MCwgc2l6ZSB9ID0gZGlzcDtcblxuXHRcdFx0aWYgKHgwICE9IG51bGwgJiYgc2l6ZSAhPSBudWxsKSB7XG5cdFx0XHRcdGRhdGFYID0geDAudmFsdWVzKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSk7XG5cblx0XHRcdFx0aWYgKHgwLnVuaXQgPT0gMilcblx0XHRcdFx0XHRkYXRhWCA9IGRhdGFYLm1hcChwY3QgPT4gdS5wb3NUb1ZhbCh4T2ZmICsgcGN0ICogeERpbSwgc2NhbGVYLmtleSwgdHJ1ZSkpO1xuXG5cdFx0XHRcdC8vIGFzc3VtZXMgdW5pZm9ybSBzaXplcywgZm9yIG5vd1xuXHRcdFx0XHRsZXQgc2l6ZXMgPSBzaXplLnZhbHVlcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpO1xuXG5cdFx0XHRcdGlmIChzaXplLnVuaXQgPT0gMilcblx0XHRcdFx0XHRiYXJXaWQgPSBzaXplc1swXSAqIHhEaW07XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRiYXJXaWQgPSB2YWxUb1Bvc1goc2l6ZXNbMF0sIHNjYWxlWCwgeERpbSwgeE9mZikgLSB2YWxUb1Bvc1goMCwgc2NhbGVYLCB4RGltLCB4T2ZmKTsgLy8gYXNzdW1lcyBsaW5lYXIgc2NhbGUgKGRlbHRhIGZyb20gMClcblxuXHRcdFx0XHRiYXJXaWQgPSBweFJvdW5kKGJhcldpZCAtIHN0cm9rZVdpZHRoKTtcblxuXHRcdFx0XHR4U2hpZnQgPSAoX2RpclggPT0gMSA/IC1zdHJva2VXaWR0aCAvIDIgOiBiYXJXaWQgKyBzdHJva2VXaWR0aCAvIDIpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxldCBjb2xXaWQgPSB4RGltO1xuXG5cdFx0XHRcdGlmIChkYXRhWC5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Ly8gcHJpb3IgaW5kZXggd2l0aCBub24tdW5kZWZpbmVkIHkgZGF0YVxuXHRcdFx0XHRcdGxldCBwcmV2SWR4ID0gbnVsbDtcblxuXHRcdFx0XHRcdC8vIHNjYW4gZnVsbCBkYXRhc2V0IGZvciBzbWFsbGVzdCBhZGphY2VudCBkZWx0YVxuXHRcdFx0XHRcdC8vIHdpbGwgbm90IHdvcmsgcHJvcGVybHkgZm9yIG5vbi1saW5lYXIgeCBzY2FsZXMsIHNpbmNlIGRvZXMgbm90IGRvIGV4cGVuc2l2ZSB2YWxUb1Bvc1ggY2FsY3MgdGlsbCBlbmRcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbWluRGVsdGEgPSBJbmZpbml0eTsgaSA8IGRhdGFYLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YVlbaV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRpZiAocHJldklkeCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGRlbHRhID0gYWJzKGRhdGFYW2ldIC0gZGF0YVhbcHJldklkeF0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRlbHRhIDwgbWluRGVsdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1pbkRlbHRhID0gZGVsdGE7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xXaWQgPSBhYnModmFsVG9Qb3NYKGRhdGFYW2ldLCBzY2FsZVgsIHhEaW0sIHhPZmYpIC0gdmFsVG9Qb3NYKGRhdGFYW3ByZXZJZHhdLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRwcmV2SWR4ID0gaTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgZ2FwV2lkID0gY29sV2lkICogZ2FwRmFjdG9yO1xuXG5cdFx0XHRcdGJhcldpZCA9IHB4Um91bmQobWluKG1heFdpZHRoLCBtYXgobWluV2lkdGgsIGNvbFdpZCAtIGdhcFdpZCkpIC0gc3Ryb2tlV2lkdGggLSBleHRyYUdhcCk7XG5cblx0XHRcdFx0eFNoaWZ0ID0gKGFsaWduID09IDAgPyBiYXJXaWQgLyAyIDogYWxpZ24gPT0gX2RpclggPyAwIDogYmFyV2lkKSAtIGFsaWduICogX2RpclggKiBleHRyYUdhcCAvIDI7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IF9wYXRocyA9IHtzdHJva2U6IG51bGwsIGZpbGw6IG51bGwsIGNsaXA6IG51bGwsIGJhbmQ6IG51bGwsIGdhcHM6IG51bGwsIGZsYWdzOiBCQU5EX0NMSVBfRklMTCB8IEJBTkRfQ0xJUF9TVFJPS0V9OyAgLy8gZGlzcCwgZ2VvbVxuXG5cdFx0XHRsZXQgeUxpbWl0O1xuXG5cdFx0XHRpZiAoYmFuZENsaXBEaXIgIT0gMCkge1xuXHRcdFx0XHRfcGF0aHMuYmFuZCA9IG5ldyBQYXRoMkQoKTtcblx0XHRcdFx0eUxpbWl0ID0gcHhSb3VuZCh2YWxUb1Bvc1koYmFuZENsaXBEaXIgPT0gMSA/IHNjYWxlWS5tYXggOiBzY2FsZVkubWluLCBzY2FsZVksIHlEaW0sIHlPZmYpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3Ryb2tlID0gbXVsdGlQYXRoID8gbnVsbCA6IG5ldyBQYXRoMkQoKTtcblx0XHRcdGNvbnN0IGJhbmQgPSBfcGF0aHMuYmFuZDtcblxuXHRcdFx0bGV0IHsgeTAsIHkxIH0gPSBkaXNwO1xuXG5cdFx0XHRsZXQgZGF0YVkwID0gbnVsbDtcblxuXHRcdFx0aWYgKHkwICE9IG51bGwgJiYgeTEgIT0gbnVsbCkge1xuXHRcdFx0XHRkYXRhWSA9IHkxLnZhbHVlcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpO1xuXHRcdFx0XHRkYXRhWTAgPSB5MC52YWx1ZXModSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHJhZFZhbCA9IHZhbFJhZGl1cyAqIGJhcldpZDtcblx0XHRcdGxldCByYWRCYXNlID0gYmFzZVJhZGl1cyAqIGJhcldpZDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IF9kaXJYID09IDEgPyBpZHgwIDogaWR4MTsgaSA+PSBpZHgwICYmIGkgPD0gaWR4MTsgaSArPSBfZGlyWCkge1xuXHRcdFx0XHRsZXQgeVZhbCA9IGRhdGFZW2ldO1xuXG5cdFx0XHRcdC8vIHdlIGNhbiBza2lwIGJvdGgsIGRyYXdpbmcgYW5kIGJhbmQgY2xpcHBpbmcgZm9yIGFsaWdubWVudCBhcnRpZmFjdHNcblx0XHRcdFx0aWYgKHlWYWwgPT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0Lypcblx0XHRcdFx0Ly8gaW50ZXJwb2xhdGUgdXB3YXJkcyBiYW5kIGNsaXBzXG5cdFx0XHRcdGlmICh5VmFsID09IG51bGwpIHtcblx0XHRcdFx0Ly9cdGlmIChoYXNCYW5kcylcblx0XHRcdFx0Ly9cdFx0eVZhbCA9IGNvc3RseUxlcnAoaSwgaWR4MCwgaWR4MSwgX2RpclgsIGRhdGFZKTtcblx0XHRcdFx0Ly9cdGVsc2Vcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHQqL1xuXG5cdFx0XHRcdGxldCB4VmFsID0gc2NhbGVYLmRpc3RyICE9IDIgfHwgZGlzcCAhPSBudWxsID8gZGF0YVhbaV0gOiBpO1xuXG5cdFx0XHRcdC8vIFRPRE86IGFsbCB4UG9zIGNhbiBiZSBwcmUtY29tcHV0ZWQgb25jZSBmb3IgYWxsIHNlcmllcyBpbiBhbGlnbmVkIHNldFxuXHRcdFx0XHRsZXQgeFBvcyA9IHZhbFRvUG9zWCh4VmFsLCBzY2FsZVgsIHhEaW0sIHhPZmYpO1xuXHRcdFx0XHRsZXQgeVBvcyA9IHZhbFRvUG9zWShpZk51bGwoeVZhbCwgZmlsbFRvWSksIHNjYWxlWSwgeURpbSwgeU9mZik7XG5cblx0XHRcdFx0aWYgKGRhdGFZMCAhPSBudWxsICYmIHlWYWwgIT0gbnVsbClcblx0XHRcdFx0XHR5MFBvcyA9IHZhbFRvUG9zWShkYXRhWTBbaV0sIHNjYWxlWSwgeURpbSwgeU9mZik7XG5cblx0XHRcdFx0bGV0IGxmdCA9IHB4Um91bmQoeFBvcyAtIHhTaGlmdCk7XG5cdFx0XHRcdGxldCBidG0gPSBweFJvdW5kKG1heCh5UG9zLCB5MFBvcykpO1xuXHRcdFx0XHRsZXQgdG9wID0gcHhSb3VuZChtaW4oeVBvcywgeTBQb3MpKTtcblx0XHRcdFx0Ly8gdGhpcyBpbmNsdWRlcyB0aGUgc3Ryb2tlXG5cdFx0XHRcdGxldCBiYXJIZ3QgPSBidG0gLSB0b3A7XG5cblx0XHRcdFx0aWYgKHlWYWwgIT0gbnVsbCkgeyAgLy8gJiYgeVZhbCAhPSBmaWxsVG9ZICgwIGhlaWdodCBiYXIpXG5cdFx0XHRcdFx0bGV0IHJ2ID0geVZhbCA8IDAgPyByYWRCYXNlIDogcmFkVmFsO1xuXHRcdFx0XHRcdGxldCByYiA9IHlWYWwgPCAwID8gcmFkVmFsIDogcmFkQmFzZTtcblxuXHRcdFx0XHRcdGlmIChtdWx0aVBhdGgpIHtcblx0XHRcdFx0XHRcdGlmIChzdHJva2VXaWR0aCA+IDAgJiYgc3Ryb2tlQ29sb3JzW2ldICE9IG51bGwpXG5cdFx0XHRcdFx0XHRcdHJlY3Qoc3Ryb2tlUGF0aHMuZ2V0KHN0cm9rZUNvbG9yc1tpXSksIGxmdCwgdG9wICsgZmxvb3Ioc3Ryb2tlV2lkdGggLyAyKSwgYmFyV2lkLCBtYXgoMCwgYmFySGd0IC0gc3Ryb2tlV2lkdGgpLCBydiwgcmIpO1xuXG5cdFx0XHRcdFx0XHRpZiAoZmlsbENvbG9yc1tpXSAhPSBudWxsKVxuXHRcdFx0XHRcdFx0XHRyZWN0KGZpbGxQYXRocy5nZXQoZmlsbENvbG9yc1tpXSksIGxmdCwgdG9wICsgZmxvb3Ioc3Ryb2tlV2lkdGggLyAyKSwgYmFyV2lkLCBtYXgoMCwgYmFySGd0IC0gc3Ryb2tlV2lkdGgpLCBydiwgcmIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRyZWN0KHN0cm9rZSwgbGZ0LCB0b3AgKyBmbG9vcihzdHJva2VXaWR0aCAvIDIpLCBiYXJXaWQsIG1heCgwLCBiYXJIZ3QgLSBzdHJva2VXaWR0aCksIHJ2LCByYik7XG5cblx0XHRcdFx0XHRlYWNoKHUsIHNlcmllc0lkeCwgaSxcblx0XHRcdFx0XHRcdGxmdCAgICAtIHN0cm9rZVdpZHRoIC8gMixcblx0XHRcdFx0XHRcdHRvcCxcblx0XHRcdFx0XHRcdGJhcldpZCArIHN0cm9rZVdpZHRoLFxuXHRcdFx0XHRcdFx0YmFySGd0LFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYmFuZENsaXBEaXIgIT0gMCkge1xuXHRcdFx0XHRcdGlmIChfZGlyWSAqIGJhbmRDbGlwRGlyID09IDEpIHtcblx0XHRcdFx0XHRcdGJ0bSA9IHRvcDtcblx0XHRcdFx0XHRcdHRvcCA9IHlMaW1pdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR0b3AgPSBidG07XG5cdFx0XHRcdFx0XHRidG0gPSB5TGltaXQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YmFySGd0ID0gYnRtIC0gdG9wO1xuXG5cdFx0XHRcdFx0cmVjdChiYW5kLCBsZnQgLSBzdHJva2VXaWR0aCAvIDIsIHRvcCwgYmFyV2lkICsgc3Ryb2tlV2lkdGgsIG1heCgwLCBiYXJIZ3QpLCAwLCAwKTsgIC8vIHJhZGl1cyBoZXJlP1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdHJva2VXaWR0aCA+IDApXG5cdFx0XHRcdF9wYXRocy5zdHJva2UgPSBtdWx0aVBhdGggPyBzdHJva2VQYXRocyA6IHN0cm9rZTtcblxuXHRcdFx0X3BhdGhzLmZpbGwgPSBtdWx0aVBhdGggPyBmaWxsUGF0aHMgOiBzdHJva2U7XG5cblx0XHRcdHJldHVybiBfcGF0aHM7XG5cdFx0fSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNwbGluZUludGVycChpbnRlcnAsIG9wdHMpIHtcblx0Y29uc3QgYWxpZ25HYXBzID0gaWZOdWxsKG9wdHM/LmFsaWduR2FwcywgMCk7XG5cblx0cmV0dXJuICh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpID0+IHtcblx0XHRyZXR1cm4gb3JpZW50KHUsIHNlcmllc0lkeCwgKHNlcmllcywgZGF0YVgsIGRhdGFZLCBzY2FsZVgsIHNjYWxlWSwgdmFsVG9Qb3NYLCB2YWxUb1Bvc1ksIHhPZmYsIHlPZmYsIHhEaW0sIHlEaW0pID0+IHtcblx0XHRcdGxldCBweFJvdW5kID0gc2VyaWVzLnB4Um91bmQ7XG5cblx0XHRcdGxldCBwaXhlbEZvclggPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1godmFsLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcblx0XHRcdGxldCBwaXhlbEZvclkgPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1kodmFsLCBzY2FsZVksIHlEaW0sIHlPZmYpKTtcblxuXHRcdFx0bGV0IG1vdmVUbywgYmV6aWVyQ3VydmVUbywgbGluZVRvO1xuXG5cdFx0XHRpZiAoc2NhbGVYLm9yaSA9PSAwKSB7XG5cdFx0XHRcdG1vdmVUbyA9IG1vdmVUb0g7XG5cdFx0XHRcdGxpbmVUbyA9IGxpbmVUb0g7XG5cdFx0XHRcdGJlemllckN1cnZlVG8gPSBiZXppZXJDdXJ2ZVRvSDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRtb3ZlVG8gPSBtb3ZlVG9WO1xuXHRcdFx0XHRsaW5lVG8gPSBsaW5lVG9WO1xuXHRcdFx0XHRiZXppZXJDdXJ2ZVRvID0gYmV6aWVyQ3VydmVUb1Y7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRpciA9IHNjYWxlWC5kaXIgKiAoc2NhbGVYLm9yaSA9PSAwID8gMSA6IC0xKTtcblxuXHRcdFx0aWR4MCA9IG5vbk51bGxJZHgoZGF0YVksIGlkeDAsIGlkeDEsICAxKTtcblx0XHRcdGlkeDEgPSBub25OdWxsSWR4KGRhdGFZLCBpZHgwLCBpZHgxLCAtMSk7XG5cblx0XHRcdGxldCBmaXJzdFhQb3MgPSBwaXhlbEZvclgoZGF0YVhbZGlyID09IDEgPyBpZHgwIDogaWR4MV0pO1xuXHRcdFx0bGV0IHByZXZYUG9zID0gZmlyc3RYUG9zO1xuXG5cdFx0XHRsZXQgeENvb3JkcyA9IFtdO1xuXHRcdFx0bGV0IHlDb29yZHMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IGRpciA9PSAxID8gaWR4MCA6IGlkeDE7IGkgPj0gaWR4MCAmJiBpIDw9IGlkeDE7IGkgKz0gZGlyKSB7XG5cdFx0XHRcdGxldCB5VmFsID0gZGF0YVlbaV07XG5cblx0XHRcdFx0aWYgKHlWYWwgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGxldCB4VmFsID0gZGF0YVhbaV07XG5cdFx0XHRcdFx0bGV0IHhQb3MgPSBwaXhlbEZvclgoeFZhbCk7XG5cblx0XHRcdFx0XHR4Q29vcmRzLnB1c2gocHJldlhQb3MgPSB4UG9zKTtcblx0XHRcdFx0XHR5Q29vcmRzLnB1c2gocGl4ZWxGb3JZKGRhdGFZW2ldKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgX3BhdGhzID0ge3N0cm9rZTogaW50ZXJwKHhDb29yZHMsIHlDb29yZHMsIG1vdmVUbywgbGluZVRvLCBiZXppZXJDdXJ2ZVRvLCBweFJvdW5kKSwgZmlsbDogbnVsbCwgY2xpcDogbnVsbCwgYmFuZDogbnVsbCwgZ2FwczogbnVsbCwgZmxhZ3M6IEJBTkRfQ0xJUF9GSUxMfTtcblx0XHRcdGNvbnN0IHN0cm9rZSA9IF9wYXRocy5zdHJva2U7XG5cblx0XHRcdGxldCBbIGJhbmRGaWxsRGlyLCBiYW5kQ2xpcERpciBdID0gYmFuZEZpbGxDbGlwRGlycyh1LCBzZXJpZXNJZHgpO1xuXG5cdFx0XHRpZiAoc2VyaWVzLmZpbGwgIT0gbnVsbCB8fCBiYW5kRmlsbERpciAhPSAwKSB7XG5cdFx0XHRcdGxldCBmaWxsID0gX3BhdGhzLmZpbGwgPSBuZXcgUGF0aDJEKHN0cm9rZSk7XG5cblx0XHRcdFx0bGV0IGZpbGxUbyA9IHNlcmllcy5maWxsVG8odSwgc2VyaWVzSWR4LCBzZXJpZXMubWluLCBzZXJpZXMubWF4LCBiYW5kRmlsbERpcik7XG5cdFx0XHRcdGxldCBmaWxsVG9ZID0gcGl4ZWxGb3JZKGZpbGxUbyk7XG5cblx0XHRcdFx0bGluZVRvKGZpbGwsIHByZXZYUG9zLCBmaWxsVG9ZKTtcblx0XHRcdFx0bGluZVRvKGZpbGwsIGZpcnN0WFBvcywgZmlsbFRvWSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghc2VyaWVzLnNwYW5HYXBzKSB7XG5cdFx0XHQvL1x0Y29uc29sZS50aW1lKCdnYXBzJyk7XG5cdFx0XHRcdGxldCBnYXBzID0gW107XG5cblx0XHRcdFx0Z2Fwcy5wdXNoKC4uLmZpbmRHYXBzKGRhdGFYLCBkYXRhWSwgaWR4MCwgaWR4MSwgZGlyLCBwaXhlbEZvclgsIGFsaWduR2FwcykpO1xuXG5cdFx0XHQvL1x0Y29uc29sZS50aW1lRW5kKCdnYXBzJyk7XG5cblx0XHRcdC8vXHRjb25zb2xlLmxvZygnZ2FwcycsIEpTT04uc3RyaW5naWZ5KGdhcHMpKTtcblxuXHRcdFx0XHRfcGF0aHMuZ2FwcyA9IGdhcHMgPSBzZXJpZXMuZ2Fwcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIGdhcHMpO1xuXG5cdFx0XHRcdF9wYXRocy5jbGlwID0gY2xpcEdhcHMoZ2Fwcywgc2NhbGVYLm9yaSwgeE9mZiwgeU9mZiwgeERpbSwgeURpbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChiYW5kQ2xpcERpciAhPSAwKSB7XG5cdFx0XHRcdF9wYXRocy5iYW5kID0gYmFuZENsaXBEaXIgPT0gMiA/IFtcblx0XHRcdFx0XHRjbGlwQmFuZExpbmUodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2UsIC0xKSxcblx0XHRcdFx0XHRjbGlwQmFuZExpbmUodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2UsICAxKSxcblx0XHRcdFx0XSA6IGNsaXBCYW5kTGluZSh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIHN0cm9rZSwgYmFuZENsaXBEaXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3BhdGhzO1xuXG5cdFx0XHQvLyAgaWYgRkVBVF9QQVRIUzogZmFsc2UgaW4gcm9sbHVwLmNvbmZpZy5qc1xuXHRcdFx0Ly9cdHUuY3R4LnNhdmUoKTtcblx0XHRcdC8vXHR1LmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdC8vXHR1LmN0eC5yZWN0KHUuYmJveC5sZWZ0LCB1LmJib3gudG9wLCB1LmJib3gud2lkdGgsIHUuYmJveC5oZWlnaHQpO1xuXHRcdFx0Ly9cdHUuY3R4LmNsaXAoKTtcblx0XHRcdC8vXHR1LmN0eC5zdHJva2VTdHlsZSA9IHUuc2VyaWVzW3NpZHhdLnN0cm9rZTtcblx0XHRcdC8vXHR1LmN0eC5zdHJva2Uoc3Ryb2tlKTtcblx0XHRcdC8vXHR1LmN0eC5maWxsU3R5bGUgPSB1LnNlcmllc1tzaWR4XS5maWxsO1xuXHRcdFx0Ly9cdHUuY3R4LmZpbGwoZmlsbCk7XG5cdFx0XHQvL1x0dS5jdHgucmVzdG9yZSgpO1xuXHRcdFx0Ly9cdHJldHVybiBudWxsO1xuXHRcdH0pO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBtb25vdG9uZUN1YmljKG9wdHMpIHtcblx0cmV0dXJuIHNwbGluZUludGVycChfbW9ub3RvbmVDdWJpYywgb3B0cyk7XG59XG5cbi8vIE1vbm90b25lIEN1YmljIFNwbGluZSBpbnRlcnBvbGF0aW9uLCBhZGFwdGVkIGZyb20gdGhlIENoYXJ0aXN0LmpzIGltcGxlbWVudGF0aW9uOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpb25rdW56L2NoYXJ0aXN0LWpzL2Jsb2IvZTdlNzgyMDFiZmZlOTYwOTkxNWU1ZTUzY2ZhZmEyOWE1ZDZjNDlmOS9zcmMvc2NyaXB0cy9pbnRlcnBvbGF0aW9uLmpzI0wyNDAtTDM2OVxuZnVuY3Rpb24gX21vbm90b25lQ3ViaWMoeHMsIHlzLCBtb3ZlVG8sIGxpbmVUbywgYmV6aWVyQ3VydmVUbywgcHhSb3VuZCkge1xuXHRjb25zdCBuID0geHMubGVuZ3RoO1xuXG5cdGlmIChuIDwgMilcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRjb25zdCBwYXRoID0gbmV3IFBhdGgyRCgpO1xuXG5cdG1vdmVUbyhwYXRoLCB4c1swXSwgeXNbMF0pO1xuXG5cdGlmIChuID09IDIpXG5cdFx0bGluZVRvKHBhdGgsIHhzWzFdLCB5c1sxXSk7XG5cdGVsc2Uge1xuXHRcdGxldCBtcyAgPSBBcnJheShuKSxcblx0XHRcdGRzICA9IEFycmF5KG4gLSAxKSxcblx0XHRcdGR5cyA9IEFycmF5KG4gLSAxKSxcblx0XHRcdGR4cyA9IEFycmF5KG4gLSAxKTtcblxuXHRcdC8vIGNhbGMgZGVsdGFzIGFuZCBkZXJpdmF0aXZlXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG5cdFx0XHRkeXNbaV0gPSB5c1tpICsgMV0gLSB5c1tpXTtcblx0XHRcdGR4c1tpXSA9IHhzW2kgKyAxXSAtIHhzW2ldO1xuXHRcdFx0ZHNbaV0gID0gZHlzW2ldIC8gZHhzW2ldO1xuXHRcdH1cblxuXHRcdC8vIGRldGVybWluZSBkZXNpcmVkIHNsb3BlIChtKSBhdCBlYWNoIHBvaW50IHVzaW5nIEZyaXRzY2gtQ2FybHNvbiBtZXRob2Rcblx0XHQvLyBodHRwOi8vbWF0aC5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvNDUyMTgvaW1wbGVtZW50YXRpb24tb2YtbW9ub3RvbmUtY3ViaWMtaW50ZXJwb2xhdGlvblxuXHRcdG1zWzBdID0gZHNbMF07XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IG4gLSAxOyBpKyspIHtcblx0XHRcdGlmIChkc1tpXSA9PT0gMCB8fCBkc1tpIC0gMV0gPT09IDAgfHwgKGRzW2kgLSAxXSA+IDApICE9PSAoZHNbaV0gPiAwKSlcblx0XHRcdFx0bXNbaV0gPSAwO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG1zW2ldID0gMyAqIChkeHNbaSAtIDFdICsgZHhzW2ldKSAvIChcblx0XHRcdFx0XHQoMiAqIGR4c1tpXSArIGR4c1tpIC0gMV0pIC8gZHNbaSAtIDFdICtcblx0XHRcdFx0XHQoZHhzW2ldICsgMiAqIGR4c1tpIC0gMV0pIC8gZHNbaV1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoIWlzRmluaXRlKG1zW2ldKSlcblx0XHRcdFx0XHRtc1tpXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bXNbbiAtIDFdID0gZHNbbiAtIDJdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG5cdFx0XHRiZXppZXJDdXJ2ZVRvKFxuXHRcdFx0XHRwYXRoLFxuXHRcdFx0XHR4c1tpXSArIGR4c1tpXSAvIDMsXG5cdFx0XHRcdHlzW2ldICsgbXNbaV0gKiBkeHNbaV0gLyAzLFxuXHRcdFx0XHR4c1tpICsgMV0gLSBkeHNbaV0gLyAzLFxuXHRcdFx0XHR5c1tpICsgMV0gLSBtc1tpICsgMV0gKiBkeHNbaV0gLyAzLFxuXHRcdFx0XHR4c1tpICsgMV0sXG5cdFx0XHRcdHlzW2kgKyAxXSxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBhdGg7XG59XG5cbmNvbnN0IGN1cnNvclBsb3RzID0gbmV3IFNldCgpO1xuXG5mdW5jdGlvbiBpbnZhbGlkYXRlUmVjdHMoKSB7XG5cdGZvciAobGV0IHUgb2YgY3Vyc29yUGxvdHMpXG5cdFx0dS5zeW5jUmVjdCh0cnVlKTtcbn1cblxuaWYgKGRvbUVudikge1xuXHRvbihyZXNpemUsIHdpbiwgaW52YWxpZGF0ZVJlY3RzKTtcblx0b24oc2Nyb2xsLCB3aW4sIGludmFsaWRhdGVSZWN0cywgdHJ1ZSk7XG5cdG9uKGRwcHhjaGFuZ2UsIHdpbiwgKCkgPT4geyB1UGxvdC5weFJhdGlvID0gcHhSYXRpbzsgfSk7XG59XG5cbmNvbnN0IGxpbmVhclBhdGggPSBsaW5lYXIoKSA7XG5jb25zdCBwb2ludHNQYXRoID0gcG9pbnRzKCkgO1xuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyhkLCB4bywgeW8sIGluaXRZKSB7XG5cdGxldCBkMiA9IGluaXRZID8gW2RbMF0sIGRbMV1dLmNvbmNhdChkLnNsaWNlKDIpKSA6IFtkWzBdXS5jb25jYXQoZC5zbGljZSgxKSk7XG5cdHJldHVybiBkMi5tYXAoKG8sIGkpID0+IHNldERlZmF1bHQobywgaSwgeG8sIHlvKSk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRzMihkLCB4eW8pIHtcblx0cmV0dXJuIGQubWFwKChvLCBpKSA9PiBpID09IDAgPyBudWxsIDogYXNzaWduKHt9LCB4eW8sIG8pKTsgIC8vIHRvZG86IGFzc2lnbigpIHdpbGwgbm90IG1lcmdlIGZhY2V0IGFycmF5c1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0KG8sIGksIHhvLCB5bykge1xuXHRyZXR1cm4gYXNzaWduKHt9LCAoaSA9PSAwID8geG8gOiB5byksIG8pO1xufVxuXG5mdW5jdGlvbiBzbmFwTnVtWChzZWxmLCBkYXRhTWluLCBkYXRhTWF4KSB7XG5cdHJldHVybiBkYXRhTWluID09IG51bGwgPyBudWxsTnVsbFR1cGxlIDogW2RhdGFNaW4sIGRhdGFNYXhdO1xufVxuXG5jb25zdCBzbmFwVGltZVggPSBzbmFwTnVtWDtcblxuLy8gdGhpcyBlbnN1cmVzIHRoYXQgbm9uLXRlbXBvcmFsL251bWVyaWMgeS1heGVzIGdldCBtdWx0aXBsZS1zbmFwcGVkIHBhZGRpbmcgYWRkZWQgYWJvdmUvYmVsb3dcbi8vIFRPRE86IGFsc28gYWNjb3VudCBmb3IgaW5jcnMgd2hlbiBzbmFwcGluZyB0byBlbnN1cmUgdG9wIG9mIGF4aXMgZ2V0cyBhIHRpY2sgJiB2YWx1ZVxuZnVuY3Rpb24gc25hcE51bVkoc2VsZiwgZGF0YU1pbiwgZGF0YU1heCkge1xuXHRyZXR1cm4gZGF0YU1pbiA9PSBudWxsID8gbnVsbE51bGxUdXBsZSA6IHJhbmdlTnVtKGRhdGFNaW4sIGRhdGFNYXgsIHJhbmdlUGFkLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc25hcExvZ1koc2VsZiwgZGF0YU1pbiwgZGF0YU1heCwgc2NhbGUpIHtcblx0cmV0dXJuIGRhdGFNaW4gPT0gbnVsbCA/IG51bGxOdWxsVHVwbGUgOiByYW5nZUxvZyhkYXRhTWluLCBkYXRhTWF4LCBzZWxmLnNjYWxlc1tzY2FsZV0ubG9nLCBmYWxzZSk7XG59XG5cbmNvbnN0IHNuYXBMb2dYID0gc25hcExvZ1k7XG5cbmZ1bmN0aW9uIHNuYXBBc2luaFkoc2VsZiwgZGF0YU1pbiwgZGF0YU1heCwgc2NhbGUpIHtcblx0cmV0dXJuIGRhdGFNaW4gPT0gbnVsbCA/IG51bGxOdWxsVHVwbGUgOiByYW5nZUFzaW5oKGRhdGFNaW4sIGRhdGFNYXgsIHNlbGYuc2NhbGVzW3NjYWxlXS5sb2csIGZhbHNlKTtcbn1cblxuY29uc3Qgc25hcEFzaW5oWCA9IHNuYXBBc2luaFk7XG5cbi8vIGRpbSBpcyBsb2dpY2FsIChnZXRDbGllbnRCb3VuZGluZ1JlY3QpIHBpeGVscywgbm90IGNhbnZhcyBwaXhlbHNcbmZ1bmN0aW9uIGZpbmRJbmNyKG1pblZhbCwgbWF4VmFsLCBpbmNycywgZGltLCBtaW5TcGFjZSkge1xuXHRsZXQgaW50RGlnaXRzID0gbWF4KG51bUludERpZ2l0cyhtaW5WYWwpLCBudW1JbnREaWdpdHMobWF4VmFsKSk7XG5cblx0bGV0IGRlbHRhID0gbWF4VmFsIC0gbWluVmFsO1xuXG5cdGxldCBpbmNySWR4ID0gY2xvc2VzdElkeCgobWluU3BhY2UgLyBkaW0pICogZGVsdGEsIGluY3JzKTtcblxuXHRkbyB7XG5cdFx0bGV0IGZvdW5kSW5jciA9IGluY3JzW2luY3JJZHhdO1xuXHRcdGxldCBmb3VuZFNwYWNlID0gZGltICogZm91bmRJbmNyIC8gZGVsdGE7XG5cblx0XHRpZiAoZm91bmRTcGFjZSA+PSBtaW5TcGFjZSAmJiBpbnREaWdpdHMgKyAoZm91bmRJbmNyIDwgNSA/IGZpeGVkRGVjLmdldChmb3VuZEluY3IpIDogMCkgPD0gMTcpXG5cdFx0XHRyZXR1cm4gW2ZvdW5kSW5jciwgZm91bmRTcGFjZV07XG5cdH0gd2hpbGUgKCsraW5jcklkeCA8IGluY3JzLmxlbmd0aCk7XG5cblx0cmV0dXJuIFswLCAwXTtcbn1cblxuZnVuY3Rpb24gcHhSYXRpb0ZvbnQoZm9udCkge1xuXHRsZXQgZm9udFNpemUsIGZvbnRTaXplQ3NzO1xuXHRmb250ID0gZm9udC5yZXBsYWNlKC8oXFxkKylweC8sIChtLCBwMSkgPT4gKGZvbnRTaXplID0gcm91bmQoKGZvbnRTaXplQ3NzID0gK3AxKSAqIHB4UmF0aW8pKSArICdweCcpO1xuXHRyZXR1cm4gW2ZvbnQsIGZvbnRTaXplLCBmb250U2l6ZUNzc107XG59XG5cbmZ1bmN0aW9uIHN5bmNGb250U2l6ZShheGlzKSB7XG5cdGlmIChheGlzLnNob3cpIHtcblx0XHRbYXhpcy5mb250LCBheGlzLmxhYmVsRm9udF0uZm9yRWFjaChmID0+IHtcblx0XHRcdGxldCBzaXplID0gcm91bmREZWMoZlsyXSAqIHB4UmF0aW8sIDEpO1xuXHRcdFx0ZlswXSA9IGZbMF0ucmVwbGFjZSgvWzAtOS5dK3B4Lywgc2l6ZSArICdweCcpO1xuXHRcdFx0ZlsxXSA9IHNpemU7XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdVBsb3Qob3B0cywgZGF0YSwgdGhlbikge1xuXHRjb25zdCBzZWxmID0ge1xuXHRcdG1vZGU6IGlmTnVsbChvcHRzLm1vZGUsIDEpLFxuXHR9O1xuXG5cdGNvbnN0IG1vZGUgPSBzZWxmLm1vZGU7XG5cblx0Ly8gVE9ETzogY2FjaGUgZGVub21zICYgbWlucyBzY2FsZS5jYWNoZSA9IHtyLCBtaW4sIH1cblx0ZnVuY3Rpb24gZ2V0VmFsUGN0KHZhbCwgc2NhbGUpIHtcblx0XHRsZXQgX3ZhbCA9IChcblx0XHRcdHNjYWxlLmRpc3RyID09IDMgPyBsb2cxMCh2YWwgPiAwID8gdmFsIDogc2NhbGUuY2xhbXAoc2VsZiwgdmFsLCBzY2FsZS5taW4sIHNjYWxlLm1heCwgc2NhbGUua2V5KSkgOlxuXHRcdFx0c2NhbGUuZGlzdHIgPT0gNCA/IGFzaW5oKHZhbCwgc2NhbGUuYXNpbmgpIDpcblx0XHRcdHZhbFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gKF92YWwgLSBzY2FsZS5fbWluKSAvIChzY2FsZS5fbWF4IC0gc2NhbGUuX21pbik7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRIUG9zKHZhbCwgc2NhbGUsIGRpbSwgb2ZmKSB7XG5cdFx0bGV0IHBjdCA9IGdldFZhbFBjdCh2YWwsIHNjYWxlKTtcblx0XHRyZXR1cm4gb2ZmICsgZGltICogKHNjYWxlLmRpciA9PSAtMSA/ICgxIC0gcGN0KSA6IHBjdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRWUG9zKHZhbCwgc2NhbGUsIGRpbSwgb2ZmKSB7XG5cdFx0bGV0IHBjdCA9IGdldFZhbFBjdCh2YWwsIHNjYWxlKTtcblx0XHRyZXR1cm4gb2ZmICsgZGltICogKHNjYWxlLmRpciA9PSAtMSA/IHBjdCA6ICgxIC0gcGN0KSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRQb3ModmFsLCBzY2FsZSwgZGltLCBvZmYpIHtcblx0XHRyZXR1cm4gc2NhbGUub3JpID09IDAgPyBnZXRIUG9zKHZhbCwgc2NhbGUsIGRpbSwgb2ZmKSA6IGdldFZQb3ModmFsLCBzY2FsZSwgZGltLCBvZmYpO1xuXHR9XG5cblx0c2VsZi52YWxUb1Bvc0ggPSBnZXRIUG9zO1xuXHRzZWxmLnZhbFRvUG9zViA9IGdldFZQb3M7XG5cblx0bGV0IHJlYWR5ID0gZmFsc2U7XG5cdHNlbGYuc3RhdHVzID0gMDtcblxuXHRjb25zdCByb290ID0gc2VsZi5yb290ID0gcGxhY2VEaXYoVVBMT1QpO1xuXG5cdGlmIChvcHRzLmlkICE9IG51bGwpXG5cdFx0cm9vdC5pZCA9IG9wdHMuaWQ7XG5cblx0YWRkQ2xhc3Mocm9vdCwgb3B0cy5jbGFzcyk7XG5cblx0aWYgKG9wdHMudGl0bGUpIHtcblx0XHRsZXQgdGl0bGUgPSBwbGFjZURpdihUSVRMRSwgcm9vdCk7XG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSBvcHRzLnRpdGxlO1xuXHR9XG5cblx0Y29uc3QgY2FuID0gcGxhY2VUYWcoXCJjYW52YXNcIik7XG5cdGNvbnN0IGN0eCA9IHNlbGYuY3R4ID0gY2FuLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRjb25zdCB3cmFwID0gcGxhY2VEaXYoV1JBUCwgcm9vdCk7XG5cblx0b24oXCJjbGlja1wiLCB3cmFwLCBlID0+IHtcblx0XHRsZXQgZGlkRHJhZyA9IG1vdXNlTGVmdDEgIT0gbW91c2VMZWZ0MCB8fCBtb3VzZVRvcDEgIT0gbW91c2VUb3AwO1xuXHRcdGRpZERyYWcgJiYgZHJhZy5jbGljayhzZWxmLCBlKTtcblx0fSwgdHJ1ZSk7XG5cblx0Y29uc3QgdW5kZXIgPSBzZWxmLnVuZGVyID0gcGxhY2VEaXYoVU5ERVIsIHdyYXApO1xuXHR3cmFwLmFwcGVuZENoaWxkKGNhbik7XG5cdGNvbnN0IG92ZXIgPSBzZWxmLm92ZXIgPSBwbGFjZURpdihPVkVSLCB3cmFwKTtcblxuXHRvcHRzID0gY29weShvcHRzKTtcblxuXHRjb25zdCBweEFsaWduID0gK2lmTnVsbChvcHRzLnB4QWxpZ24sIDEpO1xuXG5cdGNvbnN0IHB4Um91bmQgPSBweFJvdW5kR2VuKHB4QWxpZ24pO1xuXG5cdChvcHRzLnBsdWdpbnMgfHwgW10pLmZvckVhY2gocCA9PiB7XG5cdFx0aWYgKHAub3B0cylcblx0XHRcdG9wdHMgPSBwLm9wdHMoc2VsZiwgb3B0cykgfHwgb3B0cztcblx0fSk7XG5cblx0Y29uc3QgbXMgPSBvcHRzLm1zIHx8IDFlLTM7XG5cblx0Y29uc3Qgc2VyaWVzICA9IHNlbGYuc2VyaWVzID0gbW9kZSA9PSAxID9cblx0XHRzZXREZWZhdWx0cyhvcHRzLnNlcmllcyB8fCBbXSwgeFNlcmllc09wdHMsIHlTZXJpZXNPcHRzLCBmYWxzZSkgOlxuXHRcdHNldERlZmF1bHRzMihvcHRzLnNlcmllcyB8fCBbbnVsbF0sIHh5U2VyaWVzT3B0cyk7XG5cdGNvbnN0IGF4ZXMgICAgPSBzZWxmLmF4ZXMgICA9IHNldERlZmF1bHRzKG9wdHMuYXhlcyAgIHx8IFtdLCB4QXhpc09wdHMsICAgeUF4aXNPcHRzLCAgICB0cnVlKTtcblx0Y29uc3Qgc2NhbGVzICA9IHNlbGYuc2NhbGVzID0ge307XG5cdGNvbnN0IGJhbmRzICAgPSBzZWxmLmJhbmRzICA9IG9wdHMuYmFuZHMgfHwgW107XG5cblx0YmFuZHMuZm9yRWFjaChiID0+IHtcblx0XHRiLmZpbGwgPSBmbk9yU2VsZihiLmZpbGwgfHwgbnVsbCk7XG5cdFx0Yi5kaXIgPSBpZk51bGwoYi5kaXIsIC0xKTtcblx0fSk7XG5cblx0Y29uc3QgeFNjYWxlS2V5ID0gbW9kZSA9PSAyID8gc2VyaWVzWzFdLmZhY2V0c1swXS5zY2FsZSA6IHNlcmllc1swXS5zY2FsZTtcblxuXHRjb25zdCBkcmF3T3JkZXJNYXAgPSB7XG5cdFx0YXhlczogZHJhd0F4ZXNHcmlkLFxuXHRcdHNlcmllczogZHJhd1Nlcmllcyxcblx0fTtcblxuXHRjb25zdCBkcmF3T3JkZXIgPSAob3B0cy5kcmF3T3JkZXIgfHwgW1wiYXhlc1wiLCBcInNlcmllc1wiXSkubWFwKGtleSA9PiBkcmF3T3JkZXJNYXBba2V5XSk7XG5cblx0ZnVuY3Rpb24gaW5pdFNjYWxlKHNjYWxlS2V5KSB7XG5cdFx0bGV0IHNjID0gc2NhbGVzW3NjYWxlS2V5XTtcblxuXHRcdGlmIChzYyA9PSBudWxsKSB7XG5cdFx0XHRsZXQgc2NhbGVPcHRzID0gKG9wdHMuc2NhbGVzIHx8IEVNUFRZX09CSilbc2NhbGVLZXldIHx8IEVNUFRZX09CSjtcblxuXHRcdFx0aWYgKHNjYWxlT3B0cy5mcm9tICE9IG51bGwpIHtcblx0XHRcdFx0Ly8gZW5zdXJlIHBhcmVudCBpcyBpbml0aWFsaXplZFxuXHRcdFx0XHRpbml0U2NhbGUoc2NhbGVPcHRzLmZyb20pO1xuXHRcdFx0XHQvLyBkZXBlbmRlbnQgc2NhbGVzIGluaGVyaXRcblx0XHRcdFx0c2NhbGVzW3NjYWxlS2V5XSA9IGFzc2lnbih7fSwgc2NhbGVzW3NjYWxlT3B0cy5mcm9tXSwgc2NhbGVPcHRzLCB7a2V5OiBzY2FsZUtleX0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNjID0gc2NhbGVzW3NjYWxlS2V5XSA9IGFzc2lnbih7fSwgKHNjYWxlS2V5ID09IHhTY2FsZUtleSA/IHhTY2FsZU9wdHMgOiB5U2NhbGVPcHRzKSwgc2NhbGVPcHRzKTtcblxuXHRcdFx0XHRzYy5rZXkgPSBzY2FsZUtleTtcblxuXHRcdFx0XHRsZXQgaXNUaW1lID0gc2MudGltZTtcblxuXHRcdFx0XHRsZXQgcm4gPSBzYy5yYW5nZTtcblxuXHRcdFx0XHRsZXQgcmFuZ2VJc0FyciA9IGlzQXJyKHJuKTtcblxuXHRcdFx0XHRpZiAoc2NhbGVLZXkgIT0geFNjYWxlS2V5IHx8IChtb2RlID09IDIgJiYgIWlzVGltZSkpIHtcblx0XHRcdFx0XHQvLyBpZiByYW5nZSBhcnJheSBoYXMgbnVsbCBsaW1pdHMsIGl0IHNob3VsZCBiZSBhdXRvXG5cdFx0XHRcdFx0aWYgKHJhbmdlSXNBcnIgJiYgKHJuWzBdID09IG51bGwgfHwgcm5bMV0gPT0gbnVsbCkpIHtcblx0XHRcdFx0XHRcdHJuID0ge1xuXHRcdFx0XHRcdFx0XHRtaW46IHJuWzBdID09IG51bGwgPyBhdXRvUmFuZ2VQYXJ0IDoge1xuXHRcdFx0XHRcdFx0XHRcdG1vZGU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0aGFyZDogcm5bMF0sXG5cdFx0XHRcdFx0XHRcdFx0c29mdDogcm5bMF0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdG1heDogcm5bMV0gPT0gbnVsbCA/IGF1dG9SYW5nZVBhcnQgOiB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kZTogMSxcblx0XHRcdFx0XHRcdFx0XHRoYXJkOiByblsxXSxcblx0XHRcdFx0XHRcdFx0XHRzb2Z0OiByblsxXSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyYW5nZUlzQXJyID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyYW5nZUlzQXJyICYmIGlzT2JqKHJuKSkge1xuXHRcdFx0XHRcdFx0bGV0IGNmZyA9IHJuO1xuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBzaW1pbGFyIHRvIHNuYXBOdW1ZXG5cdFx0XHRcdFx0XHRybiA9IChzZWxmLCBkYXRhTWluLCBkYXRhTWF4KSA9PiBkYXRhTWluID09IG51bGwgPyBudWxsTnVsbFR1cGxlIDogcmFuZ2VOdW0oZGF0YU1pbiwgZGF0YU1heCwgY2ZnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzYy5yYW5nZSA9IGZuT3JTZWxmKHJuIHx8IChpc1RpbWUgPyBzbmFwVGltZVggOiBzY2FsZUtleSA9PSB4U2NhbGVLZXkgP1xuXHRcdFx0XHRcdChzYy5kaXN0ciA9PSAzID8gc25hcExvZ1ggOiBzYy5kaXN0ciA9PSA0ID8gc25hcEFzaW5oWCA6IHNuYXBOdW1YKSA6XG5cdFx0XHRcdFx0KHNjLmRpc3RyID09IDMgPyBzbmFwTG9nWSA6IHNjLmRpc3RyID09IDQgPyBzbmFwQXNpbmhZIDogc25hcE51bVkpXG5cdFx0XHRcdCkpO1xuXG5cdFx0XHRcdHNjLmF1dG8gPSBmbk9yU2VsZihyYW5nZUlzQXJyID8gZmFsc2UgOiBzYy5hdXRvKTtcblxuXHRcdFx0XHRzYy5jbGFtcCA9IGZuT3JTZWxmKHNjLmNsYW1wIHx8IGNsYW1wU2NhbGUpO1xuXG5cdFx0XHRcdC8vIGNhY2hlcyBmb3IgZXhwZW5zaXZlIG9wcyBsaWtlIGFzaW5oKCkgJiBsb2coKVxuXHRcdFx0XHRzYy5fbWluID0gc2MuX21heCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aW5pdFNjYWxlKFwieFwiKTtcblx0aW5pdFNjYWxlKFwieVwiKTtcblxuXHQvLyBUT0RPOiBpbml0IHNjYWxlcyBmcm9tIGZhY2V0cyBpbiBtb2RlOiAyXG5cdGlmIChtb2RlID09IDEpIHtcblx0XHRzZXJpZXMuZm9yRWFjaChzID0+IHtcblx0XHRcdGluaXRTY2FsZShzLnNjYWxlKTtcblx0XHR9KTtcblx0fVxuXG5cdGF4ZXMuZm9yRWFjaChhID0+IHtcblx0XHRpbml0U2NhbGUoYS5zY2FsZSk7XG5cdH0pO1xuXG5cdGZvciAobGV0IGsgaW4gb3B0cy5zY2FsZXMpXG5cdFx0aW5pdFNjYWxlKGspO1xuXG5cdGNvbnN0IHNjYWxlWCA9IHNjYWxlc1t4U2NhbGVLZXldO1xuXG5cdGNvbnN0IHhTY2FsZURpc3RyID0gc2NhbGVYLmRpc3RyO1xuXG5cdGxldCB2YWxUb1Bvc1gsIHZhbFRvUG9zWTtcblxuXHRpZiAoc2NhbGVYLm9yaSA9PSAwKSB7XG5cdFx0YWRkQ2xhc3Mocm9vdCwgT1JJX0haKTtcblx0XHR2YWxUb1Bvc1ggPSBnZXRIUG9zO1xuXHRcdHZhbFRvUG9zWSA9IGdldFZQb3M7XG5cdFx0Lypcblx0XHR1cGRPcmlEaW1zID0gKCkgPT4ge1xuXHRcdFx0eERpbUNhbiA9IHBsb3RXaWQ7XG5cdFx0XHR4T2ZmQ2FuID0gcGxvdExmdDtcblx0XHRcdHlEaW1DYW4gPSBwbG90SGd0O1xuXHRcdFx0eU9mZkNhbiA9IHBsb3RUb3A7XG5cblx0XHRcdHhEaW1Dc3MgPSBwbG90V2lkQ3NzO1xuXHRcdFx0eE9mZkNzcyA9IHBsb3RMZnRDc3M7XG5cdFx0XHR5RGltQ3NzID0gcGxvdEhndENzcztcblx0XHRcdHlPZmZDc3MgPSBwbG90VG9wQ3NzO1xuXHRcdH07XG5cdFx0Ki9cblx0fVxuXHRlbHNlIHtcblx0XHRhZGRDbGFzcyhyb290LCBPUklfVlQpO1xuXHRcdHZhbFRvUG9zWCA9IGdldFZQb3M7XG5cdFx0dmFsVG9Qb3NZID0gZ2V0SFBvcztcblx0XHQvKlxuXHRcdHVwZE9yaURpbXMgPSAoKSA9PiB7XG5cdFx0XHR4RGltQ2FuID0gcGxvdEhndDtcblx0XHRcdHhPZmZDYW4gPSBwbG90VG9wO1xuXHRcdFx0eURpbUNhbiA9IHBsb3RXaWQ7XG5cdFx0XHR5T2ZmQ2FuID0gcGxvdExmdDtcblxuXHRcdFx0eERpbUNzcyA9IHBsb3RIZ3RDc3M7XG5cdFx0XHR4T2ZmQ3NzID0gcGxvdFRvcENzcztcblx0XHRcdHlEaW1Dc3MgPSBwbG90V2lkQ3NzO1xuXHRcdFx0eU9mZkNzcyA9IHBsb3RMZnRDc3M7XG5cdFx0fTtcblx0XHQqL1xuXHR9XG5cblx0Y29uc3QgcGVuZFNjYWxlcyA9IHt9O1xuXG5cdC8vIGV4cGxpY2l0bHktc2V0IGluaXRpYWwgc2NhbGVzXG5cdGZvciAobGV0IGsgaW4gc2NhbGVzKSB7XG5cdFx0bGV0IHNjID0gc2NhbGVzW2tdO1xuXG5cdFx0aWYgKHNjLm1pbiAhPSBudWxsIHx8IHNjLm1heCAhPSBudWxsKSB7XG5cdFx0XHRwZW5kU2NhbGVzW2tdID0ge21pbjogc2MubWluLCBtYXg6IHNjLm1heH07XG5cdFx0XHRzYy5taW4gPSBzYy5tYXggPSBudWxsO1xuXHRcdH1cblx0fVxuXG4vL1x0c2VsZi50eiA9IG9wdHMudHogfHwgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuXHRjb25zdCBfdHpEYXRlICA9IChvcHRzLnR6RGF0ZSB8fCAodHMgPT4gbmV3IERhdGUocm91bmQodHMgLyBtcykpKSk7XG5cdGNvbnN0IF9mbXREYXRlID0gKG9wdHMuZm10RGF0ZSB8fCBmbXREYXRlKTtcblxuXHRjb25zdCBfdGltZUF4aXNTcGxpdHMgPSAobXMgPT0gMSA/IHRpbWVBeGlzU3BsaXRzTXMoX3R6RGF0ZSkgOiB0aW1lQXhpc1NwbGl0c1MoX3R6RGF0ZSkpO1xuXHRjb25zdCBfdGltZUF4aXNWYWxzICAgPSB0aW1lQXhpc1ZhbHMoX3R6RGF0ZSwgdGltZUF4aXNTdGFtcHMoKG1zID09IDEgPyBfdGltZUF4aXNTdGFtcHNNcyA6IF90aW1lQXhpc1N0YW1wc1MpLCBfZm10RGF0ZSkpO1xuXHRjb25zdCBfdGltZVNlcmllc1ZhbCAgPSB0aW1lU2VyaWVzVmFsKF90ekRhdGUsIHRpbWVTZXJpZXNTdGFtcChfdGltZVNlcmllc1N0YW1wLCBfZm10RGF0ZSkpO1xuXG5cdGNvbnN0IGFjdGl2ZUlkeHMgPSBbXTtcblxuXHRjb25zdCBsZWdlbmQgICAgID0gKHNlbGYubGVnZW5kID0gYXNzaWduKHt9LCBsZWdlbmRPcHRzLCBvcHRzLmxlZ2VuZCkpO1xuXHRjb25zdCBzaG93TGVnZW5kID0gbGVnZW5kLnNob3c7XG5cdGNvbnN0IG1hcmtlcnMgICAgPSBsZWdlbmQubWFya2VycztcblxuXHR7XG5cdFx0bGVnZW5kLmlkeHMgPSBhY3RpdmVJZHhzO1xuXG5cdFx0bWFya2Vycy53aWR0aCAgPSBmbk9yU2VsZihtYXJrZXJzLndpZHRoKTtcblx0XHRtYXJrZXJzLmRhc2ggICA9IGZuT3JTZWxmKG1hcmtlcnMuZGFzaCk7XG5cdFx0bWFya2Vycy5zdHJva2UgPSBmbk9yU2VsZihtYXJrZXJzLnN0cm9rZSk7XG5cdFx0bWFya2Vycy5maWxsICAgPSBmbk9yU2VsZihtYXJrZXJzLmZpbGwpO1xuXHR9XG5cblx0bGV0IGxlZ2VuZEVsO1xuXHRsZXQgbGVnZW5kUm93cyA9IFtdO1xuXHRsZXQgbGVnZW5kQ2VsbHMgPSBbXTtcblx0bGV0IGxlZ2VuZENvbHM7XG5cdGxldCBtdWx0aVZhbExlZ2VuZCA9IGZhbHNlO1xuXHRsZXQgTlVMTF9MRUdFTkRfVkFMVUVTID0ge307XG5cblx0aWYgKGxlZ2VuZC5saXZlKSB7XG5cdFx0Y29uc3QgZ2V0TXVsdGlWYWxzID0gc2VyaWVzWzFdID8gc2VyaWVzWzFdLnZhbHVlcyA6IG51bGw7XG5cdFx0bXVsdGlWYWxMZWdlbmQgPSBnZXRNdWx0aVZhbHMgIT0gbnVsbDtcblx0XHRsZWdlbmRDb2xzID0gbXVsdGlWYWxMZWdlbmQgPyBnZXRNdWx0aVZhbHMoc2VsZiwgMSwgMCkgOiB7XzogMH07XG5cblx0XHRmb3IgKGxldCBrIGluIGxlZ2VuZENvbHMpXG5cdFx0XHROVUxMX0xFR0VORF9WQUxVRVNba10gPSBMRUdFTkRfRElTUDtcblx0fVxuXG5cdGlmIChzaG93TGVnZW5kKSB7XG5cdFx0bGVnZW5kRWwgPSBwbGFjZVRhZyhcInRhYmxlXCIsIExFR0VORCwgcm9vdCk7XG5cblx0XHRsZWdlbmQubW91bnQoc2VsZiwgbGVnZW5kRWwpO1xuXG5cdFx0aWYgKG11bHRpVmFsTGVnZW5kKSB7XG5cdFx0XHRsZXQgaGVhZCA9IHBsYWNlVGFnKFwidHJcIiwgTEVHRU5EX1RIRUFELCBsZWdlbmRFbCk7XG5cdFx0XHRwbGFjZVRhZyhcInRoXCIsIG51bGwsIGhlYWQpO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbGVnZW5kQ29scylcblx0XHRcdFx0cGxhY2VUYWcoXCJ0aFwiLCBMRUdFTkRfTEFCRUwsIGhlYWQpLnRleHRDb250ZW50ID0ga2V5O1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGFkZENsYXNzKGxlZ2VuZEVsLCBMRUdFTkRfSU5MSU5FKTtcblx0XHRcdGxlZ2VuZC5saXZlICYmIGFkZENsYXNzKGxlZ2VuZEVsLCBMRUdFTkRfTElWRSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc29uICA9IHtzaG93OiB0cnVlfTtcblx0Y29uc3Qgc29mZiA9IHtzaG93OiBmYWxzZX07XG5cblx0ZnVuY3Rpb24gaW5pdExlZ2VuZFJvdyhzLCBpKSB7XG5cdFx0aWYgKGkgPT0gMCAmJiAobXVsdGlWYWxMZWdlbmQgfHwgIWxlZ2VuZC5saXZlIHx8IG1vZGUgPT0gMikpXG5cdFx0XHRyZXR1cm4gbnVsbE51bGxUdXBsZTtcblxuXHRcdGxldCBjZWxscyA9IFtdO1xuXG5cdFx0bGV0IHJvdyA9IHBsYWNlVGFnKFwidHJcIiwgTEVHRU5EX1NFUklFUywgbGVnZW5kRWwsIGxlZ2VuZEVsLmNoaWxkTm9kZXNbaV0pO1xuXG5cdFx0YWRkQ2xhc3Mocm93LCBzLmNsYXNzKTtcblxuXHRcdGlmICghcy5zaG93KVxuXHRcdFx0YWRkQ2xhc3Mocm93LCBPRkYpO1xuXG5cdFx0bGV0IGxhYmVsID0gcGxhY2VUYWcoXCJ0aFwiLCBudWxsLCByb3cpO1xuXG5cdFx0aWYgKG1hcmtlcnMuc2hvdykge1xuXHRcdFx0bGV0IGluZGljID0gcGxhY2VEaXYoTEVHRU5EX01BUktFUiwgbGFiZWwpO1xuXG5cdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0bGV0IHdpZHRoICA9IG1hcmtlcnMud2lkdGgoc2VsZiwgaSk7XG5cblx0XHRcdFx0aWYgKHdpZHRoKVxuXHRcdFx0XHRcdGluZGljLnN0eWxlLmJvcmRlciA9IHdpZHRoICsgXCJweCBcIiArIG1hcmtlcnMuZGFzaChzZWxmLCBpKSArIFwiIFwiICsgbWFya2Vycy5zdHJva2Uoc2VsZiwgaSk7XG5cblx0XHRcdFx0aW5kaWMuc3R5bGUuYmFja2dyb3VuZCA9IG1hcmtlcnMuZmlsbChzZWxmLCBpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgdGV4dCA9IHBsYWNlRGl2KExFR0VORF9MQUJFTCwgbGFiZWwpO1xuXHRcdHRleHQudGV4dENvbnRlbnQgPSBzLmxhYmVsO1xuXG5cdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRpZiAoIW1hcmtlcnMuc2hvdylcblx0XHRcdFx0dGV4dC5zdHlsZS5jb2xvciA9IHMud2lkdGggPiAwID8gbWFya2Vycy5zdHJva2Uoc2VsZiwgaSkgOiBtYXJrZXJzLmZpbGwoc2VsZiwgaSk7XG5cblx0XHRcdG9uTW91c2UoXCJjbGlja1wiLCBsYWJlbCwgZSA9PiB7XG5cdFx0XHRcdGlmIChjdXJzb3IuX2xvY2spXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdGxldCBzZXJpZXNJZHggPSBzZXJpZXMuaW5kZXhPZihzKTtcblxuXHRcdFx0XHRpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICE9IGxlZ2VuZC5pc29sYXRlKSB7XG5cdFx0XHRcdFx0Ly8gaWYgYW55IG90aGVyIHNlcmllcyBpcyBzaG93biwgaXNvbGF0ZSB0aGlzIG9uZS4gZWxzZSBzaG93IGFsbFxuXHRcdFx0XHRcdGxldCBpc29sYXRlID0gc2VyaWVzLnNvbWUoKHMsIGkpID0+IGkgPiAwICYmIGkgIT0gc2VyaWVzSWR4ICYmIHMuc2hvdyk7XG5cblx0XHRcdFx0XHRzZXJpZXMuZm9yRWFjaCgocywgaSkgPT4ge1xuXHRcdFx0XHRcdFx0aSA+IDAgJiYgc2V0U2VyaWVzKGksIGlzb2xhdGUgPyAoaSA9PSBzZXJpZXNJZHggPyBzb24gOiBzb2ZmKSA6IHNvbiwgdHJ1ZSwgc3luY09wdHMuc2V0U2VyaWVzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c2V0U2VyaWVzKHNlcmllc0lkeCwge3Nob3c6ICFzLnNob3d9LCB0cnVlLCBzeW5jT3B0cy5zZXRTZXJpZXMpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChjdXJzb3JGb2N1cykge1xuXHRcdFx0XHRvbk1vdXNlKG1vdXNlZW50ZXIsIGxhYmVsLCBlID0+IHtcblx0XHRcdFx0XHRpZiAoY3Vyc29yLl9sb2NrKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0c2V0U2VyaWVzKHNlcmllcy5pbmRleE9mKHMpLCBGT0NVU19UUlVFLCB0cnVlLCBzeW5jT3B0cy5zZXRTZXJpZXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gbGVnZW5kQ29scykge1xuXHRcdFx0bGV0IHYgPSBwbGFjZVRhZyhcInRkXCIsIExFR0VORF9WQUxVRSwgcm93KTtcblx0XHRcdHYudGV4dENvbnRlbnQgPSBcIi0tXCI7XG5cdFx0XHRjZWxscy5wdXNoKHYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBbcm93LCBjZWxsc107XG5cdH1cblxuXHRjb25zdCBtb3VzZUxpc3RlbmVycyA9IG5ldyBNYXAoKTtcblxuXHRmdW5jdGlvbiBvbk1vdXNlKGV2LCB0YXJnLCBmbikge1xuXHRcdGNvbnN0IHRhcmdMaXN0ZW5lcnMgPSBtb3VzZUxpc3RlbmVycy5nZXQodGFyZykgfHwge307XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSBjdXJzb3IuYmluZFtldl0oc2VsZiwgdGFyZywgZm4pO1xuXG5cdFx0aWYgKGxpc3RlbmVyKSB7XG5cdFx0XHRvbihldiwgdGFyZywgdGFyZ0xpc3RlbmVyc1tldl0gPSBsaXN0ZW5lcik7XG5cdFx0XHRtb3VzZUxpc3RlbmVycy5zZXQodGFyZywgdGFyZ0xpc3RlbmVycyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb2ZmTW91c2UoZXYsIHRhcmcsIGZuKSB7XG5cdFx0Y29uc3QgdGFyZ0xpc3RlbmVycyA9IG1vdXNlTGlzdGVuZXJzLmdldCh0YXJnKSB8fCB7fTtcblxuXHRcdGZvciAobGV0IGsgaW4gdGFyZ0xpc3RlbmVycykge1xuXHRcdFx0aWYgKGV2ID09IG51bGwgfHwgayA9PSBldikge1xuXHRcdFx0XHRvZmYoaywgdGFyZywgdGFyZ0xpc3RlbmVyc1trXSk7XG5cdFx0XHRcdGRlbGV0ZSB0YXJnTGlzdGVuZXJzW2tdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChldiA9PSBudWxsKVxuXHRcdFx0bW91c2VMaXN0ZW5lcnMuZGVsZXRlKHRhcmcpO1xuXHR9XG5cblx0bGV0IGZ1bGxXaWRDc3MgPSAwO1xuXHRsZXQgZnVsbEhndENzcyA9IDA7XG5cblx0bGV0IHBsb3RXaWRDc3MgPSAwO1xuXHRsZXQgcGxvdEhndENzcyA9IDA7XG5cblx0Ly8gcGxvdCBtYXJnaW5zIHRvIGFjY291bnQgZm9yIGF4ZXNcblx0bGV0IHBsb3RMZnRDc3MgPSAwO1xuXHRsZXQgcGxvdFRvcENzcyA9IDA7XG5cblx0bGV0IHBsb3RMZnQgPSAwO1xuXHRsZXQgcGxvdFRvcCA9IDA7XG5cdGxldCBwbG90V2lkID0gMDtcblx0bGV0IHBsb3RIZ3QgPSAwO1xuXG5cdHNlbGYuYmJveCA9IHt9O1xuXG5cdGxldCBzaG91bGRTZXRTY2FsZXMgPSBmYWxzZTtcblx0bGV0IHNob3VsZFNldFNpemUgPSBmYWxzZTtcblx0bGV0IHNob3VsZENvbnZlcmdlU2l6ZSA9IGZhbHNlO1xuXHRsZXQgc2hvdWxkU2V0Q3Vyc29yID0gZmFsc2U7XG5cdGxldCBzaG91bGRTZXRTZWxlY3QgPSBmYWxzZTtcblx0bGV0IHNob3VsZFNldExlZ2VuZCA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIF9zZXRTaXplKHdpZHRoLCBoZWlnaHQsIGZvcmNlKSB7XG5cdFx0aWYgKGZvcmNlIHx8ICh3aWR0aCAhPSBzZWxmLndpZHRoIHx8IGhlaWdodCAhPSBzZWxmLmhlaWdodCkpXG5cdFx0XHRjYWxjU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuXHRcdHJlc2V0WVNlcmllcyhmYWxzZSk7XG5cblx0XHRzaG91bGRDb252ZXJnZVNpemUgPSB0cnVlO1xuXHRcdHNob3VsZFNldFNpemUgPSB0cnVlO1xuXG5cdFx0aWYgKGN1cnNvci5sZWZ0ID49IDApXG5cdFx0XHRzaG91bGRTZXRDdXJzb3IgPSBzaG91bGRTZXRMZWdlbmQgPSB0cnVlO1xuXG5cdFx0Y29tbWl0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjYWxjU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG5cdC8vXHRsb2coXCJjYWxjU2l6ZSgpXCIsIGFyZ3VtZW50cyk7XG5cblx0XHRzZWxmLndpZHRoICA9IGZ1bGxXaWRDc3MgPSBwbG90V2lkQ3NzID0gd2lkdGg7XG5cdFx0c2VsZi5oZWlnaHQgPSBmdWxsSGd0Q3NzID0gcGxvdEhndENzcyA9IGhlaWdodDtcblx0XHRwbG90TGZ0Q3NzICA9IHBsb3RUb3BDc3MgPSAwO1xuXG5cdFx0Y2FsY1Bsb3RSZWN0KCk7XG5cdFx0Y2FsY0F4ZXNSZWN0cygpO1xuXG5cdFx0bGV0IGJiID0gc2VsZi5iYm94O1xuXG5cdFx0cGxvdExmdCA9IGJiLmxlZnQgICA9IGluY3JSb3VuZChwbG90TGZ0Q3NzICogcHhSYXRpbywgMC41KTtcblx0XHRwbG90VG9wID0gYmIudG9wICAgID0gaW5jclJvdW5kKHBsb3RUb3BDc3MgKiBweFJhdGlvLCAwLjUpO1xuXHRcdHBsb3RXaWQgPSBiYi53aWR0aCAgPSBpbmNyUm91bmQocGxvdFdpZENzcyAqIHB4UmF0aW8sIDAuNSk7XG5cdFx0cGxvdEhndCA9IGJiLmhlaWdodCA9IGluY3JSb3VuZChwbG90SGd0Q3NzICogcHhSYXRpbywgMC41KTtcblxuXHQvL1x0dXBkT3JpRGltcygpO1xuXHR9XG5cblx0Ly8gZW5zdXJlcyBzaXplIGNhbGMgY29udmVyZ2VuY2Vcblx0Y29uc3QgQ1lDTEVfTElNSVQgPSAzO1xuXG5cdGZ1bmN0aW9uIGNvbnZlcmdlU2l6ZSgpIHtcblx0XHRsZXQgY29udmVyZ2VkID0gZmFsc2U7XG5cblx0XHRsZXQgY3ljbGVOdW0gPSAwO1xuXG5cdFx0d2hpbGUgKCFjb252ZXJnZWQpIHtcblx0XHRcdGN5Y2xlTnVtKys7XG5cblx0XHRcdGxldCBheGVzQ29udmVyZ2VkID0gYXhlc0NhbGMoY3ljbGVOdW0pO1xuXHRcdFx0bGV0IHBhZGRpbmdDb252ZXJnZWQgPSBwYWRkaW5nQ2FsYyhjeWNsZU51bSk7XG5cblx0XHRcdGNvbnZlcmdlZCA9IGN5Y2xlTnVtID09IENZQ0xFX0xJTUlUIHx8IChheGVzQ29udmVyZ2VkICYmIHBhZGRpbmdDb252ZXJnZWQpO1xuXG5cdFx0XHRpZiAoIWNvbnZlcmdlZCkge1xuXHRcdFx0XHRjYWxjU2l6ZShzZWxmLndpZHRoLCBzZWxmLmhlaWdodCk7XG5cdFx0XHRcdHNob3VsZFNldFNpemUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNpemUoe3dpZHRoLCBoZWlnaHR9KSB7XG5cdFx0X3NldFNpemUod2lkdGgsIGhlaWdodCk7XG5cdH1cblxuXHRzZWxmLnNldFNpemUgPSBzZXRTaXplO1xuXG5cdC8vIGFjY3VtdWxhdGUgYXhpcyBvZmZzZXRzLCByZWR1Y2UgY2FudmFzIHdpZHRoXG5cdGZ1bmN0aW9uIGNhbGNQbG90UmVjdCgpIHtcblx0XHQvLyBlYXNlbWVudHMgZm9yIGVkZ2UgbGFiZWxzXG5cdFx0bGV0IGhhc1RvcEF4aXMgPSBmYWxzZTtcblx0XHRsZXQgaGFzQnRtQXhpcyA9IGZhbHNlO1xuXHRcdGxldCBoYXNSZ3RBeGlzID0gZmFsc2U7XG5cdFx0bGV0IGhhc0xmdEF4aXMgPSBmYWxzZTtcblxuXHRcdGF4ZXMuZm9yRWFjaCgoYXhpcywgaSkgPT4ge1xuXHRcdFx0aWYgKGF4aXMuc2hvdyAmJiBheGlzLl9zaG93KSB7XG5cdFx0XHRcdGxldCB7c2lkZSwgX3NpemV9ID0gYXhpcztcblx0XHRcdFx0bGV0IGlzVnQgPSBzaWRlICUgMjtcblx0XHRcdFx0bGV0IGxhYmVsU2l6ZSA9IGF4aXMubGFiZWwgIT0gbnVsbCA/IGF4aXMubGFiZWxTaXplIDogMDtcblxuXHRcdFx0XHRsZXQgZnVsbFNpemUgPSBfc2l6ZSArIGxhYmVsU2l6ZTtcblxuXHRcdFx0XHRpZiAoZnVsbFNpemUgPiAwKSB7XG5cdFx0XHRcdFx0aWYgKGlzVnQpIHtcblx0XHRcdFx0XHRcdHBsb3RXaWRDc3MgLT0gZnVsbFNpemU7XG5cblx0XHRcdFx0XHRcdGlmIChzaWRlID09IDMpIHtcblx0XHRcdFx0XHRcdFx0cGxvdExmdENzcyArPSBmdWxsU2l6ZTtcblx0XHRcdFx0XHRcdFx0aGFzTGZ0QXhpcyA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGhhc1JndEF4aXMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHBsb3RIZ3RDc3MgLT0gZnVsbFNpemU7XG5cblx0XHRcdFx0XHRcdGlmIChzaWRlID09IDApIHtcblx0XHRcdFx0XHRcdFx0cGxvdFRvcENzcyArPSBmdWxsU2l6ZTtcblx0XHRcdFx0XHRcdFx0aGFzVG9wQXhpcyA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGhhc0J0bUF4aXMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0c2lkZXNXaXRoQXhlc1swXSA9IGhhc1RvcEF4aXM7XG5cdFx0c2lkZXNXaXRoQXhlc1sxXSA9IGhhc1JndEF4aXM7XG5cdFx0c2lkZXNXaXRoQXhlc1syXSA9IGhhc0J0bUF4aXM7XG5cdFx0c2lkZXNXaXRoQXhlc1szXSA9IGhhc0xmdEF4aXM7XG5cblx0XHQvLyBoeiBwYWRkaW5nXG5cdFx0cGxvdFdpZENzcyAtPSBfcGFkZGluZ1sxXSArIF9wYWRkaW5nWzNdO1xuXHRcdHBsb3RMZnRDc3MgKz0gX3BhZGRpbmdbM107XG5cblx0XHQvLyB2dCBwYWRkaW5nXG5cdFx0cGxvdEhndENzcyAtPSBfcGFkZGluZ1syXSArIF9wYWRkaW5nWzBdO1xuXHRcdHBsb3RUb3BDc3MgKz0gX3BhZGRpbmdbMF07XG5cdH1cblxuXHRmdW5jdGlvbiBjYWxjQXhlc1JlY3RzKCkge1xuXHRcdC8vIHdpbGwgYWNjdW0gK1xuXHRcdGxldCBvZmYxID0gcGxvdExmdENzcyArIHBsb3RXaWRDc3M7XG5cdFx0bGV0IG9mZjIgPSBwbG90VG9wQ3NzICsgcGxvdEhndENzcztcblx0XHQvLyB3aWxsIGFjY3VtIC1cblx0XHRsZXQgb2ZmMyA9IHBsb3RMZnRDc3M7XG5cdFx0bGV0IG9mZjAgPSBwbG90VG9wQ3NzO1xuXG5cdFx0ZnVuY3Rpb24gaW5jck9mZnNldChzaWRlLCBzaXplKSB7XG5cdFx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdFx0Y2FzZSAxOiBvZmYxICs9IHNpemU7IHJldHVybiBvZmYxIC0gc2l6ZTtcblx0XHRcdFx0Y2FzZSAyOiBvZmYyICs9IHNpemU7IHJldHVybiBvZmYyIC0gc2l6ZTtcblx0XHRcdFx0Y2FzZSAzOiBvZmYzIC09IHNpemU7IHJldHVybiBvZmYzICsgc2l6ZTtcblx0XHRcdFx0Y2FzZSAwOiBvZmYwIC09IHNpemU7IHJldHVybiBvZmYwICsgc2l6ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRheGVzLmZvckVhY2goKGF4aXMsIGkpID0+IHtcblx0XHRcdGlmIChheGlzLnNob3cgJiYgYXhpcy5fc2hvdykge1xuXHRcdFx0XHRsZXQgc2lkZSA9IGF4aXMuc2lkZTtcblxuXHRcdFx0XHRheGlzLl9wb3MgPSBpbmNyT2Zmc2V0KHNpZGUsIGF4aXMuX3NpemUpO1xuXG5cdFx0XHRcdGlmIChheGlzLmxhYmVsICE9IG51bGwpXG5cdFx0XHRcdFx0YXhpcy5fbHBvcyA9IGluY3JPZmZzZXQoc2lkZSwgYXhpcy5sYWJlbFNpemUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgY3Vyc29yID0gKHNlbGYuY3Vyc29yID0gYXNzaWduKHt9LCBjdXJzb3JPcHRzLCB7ZHJhZzoge3k6IG1vZGUgPT0gMn19LCBvcHRzLmN1cnNvcikpO1xuXG5cdHtcblx0XHRjdXJzb3IuaWR4cyA9IGFjdGl2ZUlkeHM7XG5cblx0XHRjdXJzb3IuX2xvY2sgPSBmYWxzZTtcblxuXHRcdGxldCBwb2ludHMgPSBjdXJzb3IucG9pbnRzO1xuXG5cdFx0cG9pbnRzLnNob3cgICA9IGZuT3JTZWxmKHBvaW50cy5zaG93KTtcblx0XHRwb2ludHMuc2l6ZSAgID0gZm5PclNlbGYocG9pbnRzLnNpemUpO1xuXHRcdHBvaW50cy5zdHJva2UgPSBmbk9yU2VsZihwb2ludHMuc3Ryb2tlKTtcblx0XHRwb2ludHMud2lkdGggID0gZm5PclNlbGYocG9pbnRzLndpZHRoKTtcblx0XHRwb2ludHMuZmlsbCAgID0gZm5PclNlbGYocG9pbnRzLmZpbGwpO1xuXHR9XG5cblx0Y29uc3QgZm9jdXMgPSBzZWxmLmZvY3VzID0gYXNzaWduKHt9LCBvcHRzLmZvY3VzIHx8IHthbHBoYTogMC4zfSwgY3Vyc29yLmZvY3VzKTtcblxuXHRpZiAoZm9jdXMuYmlhcyAhPSAwKVxuXHRcdGZvY3VzLnByb3ggPSAxZTU7IC8vIGJpZywgYnV0IDwgSW5maW5pdHlcblxuXHRjb25zdCBjdXJzb3JGb2N1cyA9IGZvY3VzLnByb3ggPj0gMDtcblxuXHQvLyBzZXJpZXMtaW50ZXJzZWN0aW9uIG1hcmtlcnNcblx0bGV0IGN1cnNvclB0cyA9IFtudWxsXTtcblxuXHRmdW5jdGlvbiBpbml0Q3Vyc29yUHQocywgc2kpIHtcblx0XHRpZiAoc2kgPiAwKSB7XG5cdFx0XHRsZXQgcHQgPSBjdXJzb3IucG9pbnRzLnNob3coc2VsZiwgc2kpO1xuXG5cdFx0XHRpZiAocHQpIHtcblx0XHRcdFx0YWRkQ2xhc3MocHQsIENVUlNPUl9QVCk7XG5cdFx0XHRcdGFkZENsYXNzKHB0LCBzLmNsYXNzKTtcblx0XHRcdFx0ZWxUcmFucyhwdCwgLTEwLCAtMTAsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MpO1xuXHRcdFx0XHRvdmVyLmluc2VydEJlZm9yZShwdCwgY3Vyc29yUHRzW3NpXSk7XG5cblx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRTZXJpZXMocywgaSkge1xuXHRcdGlmIChtb2RlID09IDEgfHwgaSA+IDApIHtcblx0XHRcdGxldCBpc1RpbWUgPSBtb2RlID09IDEgJiYgc2NhbGVzW3Muc2NhbGVdLnRpbWU7XG5cblx0XHRcdGxldCBzdiA9IHMudmFsdWU7XG5cdFx0XHRzLnZhbHVlID0gaXNUaW1lID8gKGlzU3RyKHN2KSA/IHRpbWVTZXJpZXNWYWwoX3R6RGF0ZSwgdGltZVNlcmllc1N0YW1wKHN2LCBfZm10RGF0ZSkpIDogc3YgfHwgX3RpbWVTZXJpZXNWYWwpIDogc3YgfHwgbnVtU2VyaWVzVmFsO1xuXHRcdFx0cy5sYWJlbCA9IHMubGFiZWwgfHwgKGlzVGltZSA/IHRpbWVTZXJpZXNMYWJlbCA6IG51bVNlcmllc0xhYmVsKTtcblx0XHR9XG5cblx0XHRpZiAoaSA+IDApIHtcblx0XHRcdHMud2lkdGggID0gcy53aWR0aCA9PSBudWxsID8gMSA6IHMud2lkdGg7XG5cdFx0XHRzLnBhdGhzICA9IHMucGF0aHMgfHwgbGluZWFyUGF0aCB8fCByZXROdWxsO1xuXHRcdFx0cy5maWxsVG8gPSBmbk9yU2VsZihzLmZpbGxUbyB8fCBzZXJpZXNGaWxsVG8pO1xuXHRcdFx0cy5weEFsaWduID0gK2lmTnVsbChzLnB4QWxpZ24sIHB4QWxpZ24pO1xuXHRcdFx0cy5weFJvdW5kID0gcHhSb3VuZEdlbihzLnB4QWxpZ24pO1xuXG5cdFx0XHRzLnN0cm9rZSA9IGZuT3JTZWxmKHMuc3Ryb2tlIHx8IG51bGwpO1xuXHRcdFx0cy5maWxsICAgPSBmbk9yU2VsZihzLmZpbGwgfHwgbnVsbCk7XG5cdFx0XHRzLl9zdHJva2UgPSBzLl9maWxsID0gcy5fcGF0aHMgPSBzLl9mb2N1cyA9IG51bGw7XG5cblx0XHRcdGxldCBfcHREaWEgPSBwdERpYShtYXgoMSwgcy53aWR0aCksIDEpO1xuXHRcdFx0bGV0IHBvaW50cyA9IHMucG9pbnRzID0gYXNzaWduKHt9LCB7XG5cdFx0XHRcdHNpemU6IF9wdERpYSxcblx0XHRcdFx0d2lkdGg6IG1heCgxLCBfcHREaWEgKiAuMiksXG5cdFx0XHRcdHN0cm9rZTogcy5zdHJva2UsXG5cdFx0XHRcdHNwYWNlOiBfcHREaWEgKiAyLFxuXHRcdFx0XHRwYXRoczogcG9pbnRzUGF0aCxcblx0XHRcdFx0X3N0cm9rZTogbnVsbCxcblx0XHRcdFx0X2ZpbGw6IG51bGwsXG5cdFx0XHR9LCBzLnBvaW50cyk7XG5cdFx0XHRwb2ludHMuc2hvdyAgID0gZm5PclNlbGYocG9pbnRzLnNob3cpO1xuXHRcdFx0cG9pbnRzLmZpbHRlciA9IGZuT3JTZWxmKHBvaW50cy5maWx0ZXIpO1xuXHRcdFx0cG9pbnRzLmZpbGwgICA9IGZuT3JTZWxmKHBvaW50cy5maWxsKTtcblx0XHRcdHBvaW50cy5zdHJva2UgPSBmbk9yU2VsZihwb2ludHMuc3Ryb2tlKTtcblx0XHRcdHBvaW50cy5wYXRocyAgPSBmbk9yU2VsZihwb2ludHMucGF0aHMpO1xuXHRcdFx0cG9pbnRzLnB4QWxpZ24gPSBzLnB4QWxpZ247XG5cdFx0fVxuXG5cdFx0aWYgKHNob3dMZWdlbmQpIHtcblx0XHRcdGxldCByb3dDZWxscyA9IGluaXRMZWdlbmRSb3cocywgaSk7XG5cdFx0XHRsZWdlbmRSb3dzLnNwbGljZShpLCAwLCByb3dDZWxsc1swXSk7XG5cdFx0XHRsZWdlbmRDZWxscy5zcGxpY2UoaSwgMCwgcm93Q2VsbHNbMV0pO1xuXHRcdFx0bGVnZW5kLnZhbHVlcy5wdXNoKG51bGwpO1x0Ly8gTlVMTF9MRUdFTkRfVkFMUyBub3QgeWV0IGF2aWwgaGVyZSA6KFxuXHRcdH1cblxuXHRcdGlmIChjdXJzb3Iuc2hvdykge1xuXHRcdFx0YWN0aXZlSWR4cy5zcGxpY2UoaSwgMCwgbnVsbCk7XG5cblx0XHRcdGxldCBwdCA9IGluaXRDdXJzb3JQdChzLCBpKTtcblx0XHRcdHB0ICYmIGN1cnNvclB0cy5zcGxpY2UoaSwgMCwgcHQpO1xuXHRcdH1cblxuXHRcdGZpcmUoXCJhZGRTZXJpZXNcIiwgaSk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRTZXJpZXMob3B0cywgc2kpIHtcblx0XHRzaSA9IHNpID09IG51bGwgPyBzZXJpZXMubGVuZ3RoIDogc2k7XG5cblx0XHRvcHRzID0gbW9kZSA9PSAxID8gc2V0RGVmYXVsdChvcHRzLCBzaSwgeFNlcmllc09wdHMsIHlTZXJpZXNPcHRzKSA6IHNldERlZmF1bHQob3B0cywgc2ksIG51bGwsIHh5U2VyaWVzT3B0cyk7XG5cblx0XHRzZXJpZXMuc3BsaWNlKHNpLCAwLCBvcHRzKTtcblx0XHRpbml0U2VyaWVzKHNlcmllc1tzaV0sIHNpKTtcblx0fVxuXG5cdHNlbGYuYWRkU2VyaWVzID0gYWRkU2VyaWVzO1xuXG5cdGZ1bmN0aW9uIGRlbFNlcmllcyhpKSB7XG5cdFx0c2VyaWVzLnNwbGljZShpLCAxKTtcblxuXHRcdGlmIChzaG93TGVnZW5kKSB7XG5cdFx0XHRsZWdlbmQudmFsdWVzLnNwbGljZShpLCAxKTtcblxuXHRcdFx0bGVnZW5kQ2VsbHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0bGV0IHRyID0gbGVnZW5kUm93cy5zcGxpY2UoaSwgMSlbMF07XG5cdFx0XHRvZmZNb3VzZShudWxsLCB0ci5maXJzdENoaWxkKTtcblx0XHRcdHRyLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdGlmIChjdXJzb3Iuc2hvdykge1xuXHRcdFx0YWN0aXZlSWR4cy5zcGxpY2UoaSwgMSk7XG5cblx0XHRcdGN1cnNvclB0cy5sZW5ndGggPiAxICYmIGN1cnNvclB0cy5zcGxpY2UoaSwgMSlbMF0ucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogZGUtaW5pdCBuby1sb25nZXItbmVlZGVkIHNjYWxlcz9cblxuXHRcdGZpcmUoXCJkZWxTZXJpZXNcIiwgaSk7XG5cdH1cblxuXHRzZWxmLmRlbFNlcmllcyA9IGRlbFNlcmllcztcblxuXHRjb25zdCBzaWRlc1dpdGhBeGVzID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcblxuXHRmdW5jdGlvbiBpbml0QXhpcyhheGlzLCBpKSB7XG5cdFx0YXhpcy5fc2hvdyA9IGF4aXMuc2hvdztcblxuXHRcdGlmIChheGlzLnNob3cpIHtcblx0XHRcdGxldCBpc1Z0ID0gYXhpcy5zaWRlICUgMjtcblxuXHRcdFx0bGV0IHNjID0gc2NhbGVzW2F4aXMuc2NhbGVdO1xuXG5cdFx0XHQvLyB0aGlzIGNhbiBvY2N1ciBpZiBhbGwgc2VyaWVzIHNwZWNpZnkgbm9uLWRlZmF1bHQgc2NhbGVzXG5cdFx0XHRpZiAoc2MgPT0gbnVsbCkge1xuXHRcdFx0XHRheGlzLnNjYWxlID0gaXNWdCA/IHNlcmllc1sxXS5zY2FsZSA6IHhTY2FsZUtleTtcblx0XHRcdFx0c2MgPSBzY2FsZXNbYXhpcy5zY2FsZV07XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFsc28gc2V0IGRlZmF1bHRzIGZvciBpbmNycyAmIHZhbHVlcyBiYXNlZCBvbiBheGlzIGRpc3RyXG5cdFx0XHRsZXQgaXNUaW1lID0gc2MudGltZTtcblxuXHRcdFx0YXhpcy5zaXplICAgPSBmbk9yU2VsZihheGlzLnNpemUpO1xuXHRcdFx0YXhpcy5zcGFjZSAgPSBmbk9yU2VsZihheGlzLnNwYWNlKTtcblx0XHRcdGF4aXMucm90YXRlID0gZm5PclNlbGYoYXhpcy5yb3RhdGUpO1xuXHRcdFx0YXhpcy5pbmNycyAgPSBmbk9yU2VsZihheGlzLmluY3JzICB8fCAoICAgICAgICAgIHNjLmRpc3RyID09IDIgPyB3aG9sZUluY3JzIDogKGlzVGltZSA/IChtcyA9PSAxID8gdGltZUluY3JzTXMgOiB0aW1lSW5jcnNTKSA6IG51bUluY3JzKSkpO1xuXHRcdFx0YXhpcy5zcGxpdHMgPSBmbk9yU2VsZihheGlzLnNwbGl0cyB8fCAoaXNUaW1lICYmIHNjLmRpc3RyID09IDEgPyBfdGltZUF4aXNTcGxpdHMgOiBzYy5kaXN0ciA9PSAzID8gbG9nQXhpc1NwbGl0cyA6IHNjLmRpc3RyID09IDQgPyBhc2luaEF4aXNTcGxpdHMgOiBudW1BeGlzU3BsaXRzKSk7XG5cblx0XHRcdGF4aXMuc3Ryb2tlICAgICAgICA9IGZuT3JTZWxmKGF4aXMuc3Ryb2tlKTtcblx0XHRcdGF4aXMuZ3JpZC5zdHJva2UgICA9IGZuT3JTZWxmKGF4aXMuZ3JpZC5zdHJva2UpO1xuXHRcdFx0YXhpcy50aWNrcy5zdHJva2UgID0gZm5PclNlbGYoYXhpcy50aWNrcy5zdHJva2UpO1xuXHRcdFx0YXhpcy5ib3JkZXIuc3Ryb2tlID0gZm5PclNlbGYoYXhpcy5ib3JkZXIuc3Ryb2tlKTtcblxuXHRcdFx0bGV0IGF2ID0gYXhpcy52YWx1ZXM7XG5cblx0XHRcdGF4aXMudmFsdWVzID0gKFxuXHRcdFx0XHQvLyBzdGF0aWMgYXJyYXkgb2YgdGljayB2YWx1ZXNcblx0XHRcdFx0aXNBcnIoYXYpICYmICFpc0FycihhdlswXSkgPyBmbk9yU2VsZihhdikgOlxuXHRcdFx0XHQvLyB0ZW1wb3JhbFxuXHRcdFx0XHRpc1RpbWUgPyAoXG5cdFx0XHRcdFx0Ly8gY29uZmlnIGFycmF5IG9mIGZtdERhdGUgc3RyaW5nIHRwbHNcblx0XHRcdFx0XHRpc0FycihhdikgP1xuXHRcdFx0XHRcdFx0dGltZUF4aXNWYWxzKF90ekRhdGUsIHRpbWVBeGlzU3RhbXBzKGF2LCBfZm10RGF0ZSkpIDpcblx0XHRcdFx0XHQvLyBmbXREYXRlIHN0cmluZyB0cGxcblx0XHRcdFx0XHRpc1N0cihhdikgP1xuXHRcdFx0XHRcdFx0dGltZUF4aXNWYWwoX3R6RGF0ZSwgYXYpIDpcblx0XHRcdFx0XHRhdiB8fCBfdGltZUF4aXNWYWxzXG5cdFx0XHRcdCkgOiBhdiB8fCBudW1BeGlzVmFsc1xuXHRcdFx0KTtcblxuXHRcdFx0YXhpcy5maWx0ZXIgPSBmbk9yU2VsZihheGlzLmZpbHRlciB8fCAoICAgICAgICAgIHNjLmRpc3RyID49IDMgJiYgc2MubG9nID09IDEwID8gbG9nMTBBeGlzVmFsc0ZpbHQgOiByZXRBcmcxKSk7XG5cblx0XHRcdGF4aXMuZm9udCAgICAgID0gcHhSYXRpb0ZvbnQoYXhpcy5mb250KTtcblx0XHRcdGF4aXMubGFiZWxGb250ID0gcHhSYXRpb0ZvbnQoYXhpcy5sYWJlbEZvbnQpO1xuXG5cdFx0XHRheGlzLl9zaXplICAgPSBheGlzLnNpemUoc2VsZiwgbnVsbCwgaSwgMCk7XG5cblx0XHRcdGF4aXMuX3NwYWNlICA9XG5cdFx0XHRheGlzLl9yb3RhdGUgPVxuXHRcdFx0YXhpcy5faW5jcnMgID1cblx0XHRcdGF4aXMuX2ZvdW5kICA9XHQvLyBmb3VuZEluY3JTcGFjZVxuXHRcdFx0YXhpcy5fc3BsaXRzID1cblx0XHRcdGF4aXMuX3ZhbHVlcyA9IG51bGw7XG5cblx0XHRcdGlmIChheGlzLl9zaXplID4gMCkge1xuXHRcdFx0XHRzaWRlc1dpdGhBeGVzW2ldID0gdHJ1ZTtcblx0XHRcdFx0YXhpcy5fZWwgPSBwbGFjZURpdihBWElTLCB3cmFwKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGVidWdcblx0XHQvL1x0YXhpcy5fZWwuc3R5bGUuYmFja2dyb3VuZCA9IFwiI1wiICArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNjc3NzIxNSkudG9TdHJpbmcoMTYpICsgJzgwJztcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBhdXRvUGFkU2lkZShzZWxmLCBzaWRlLCBzaWRlc1dpdGhBeGVzLCBjeWNsZU51bSkge1xuXHRcdGxldCBbaGFzVG9wQXhpcywgaGFzUmd0QXhpcywgaGFzQnRtQXhpcywgaGFzTGZ0QXhpc10gPSBzaWRlc1dpdGhBeGVzO1xuXG5cdFx0bGV0IG9yaSA9IHNpZGUgJSAyO1xuXHRcdGxldCBzaXplID0gMDtcblxuXHRcdGlmIChvcmkgPT0gMCAmJiAoaGFzTGZ0QXhpcyB8fCBoYXNSZ3RBeGlzKSlcblx0XHRcdHNpemUgPSAoc2lkZSA9PSAwICYmICFoYXNUb3BBeGlzIHx8IHNpZGUgPT0gMiAmJiAhaGFzQnRtQXhpcyA/IHJvdW5kKHhBeGlzT3B0cy5zaXplIC8gMykgOiAwKTtcblx0XHRpZiAob3JpID09IDEgJiYgKGhhc1RvcEF4aXMgfHwgaGFzQnRtQXhpcykpXG5cdFx0XHRzaXplID0gKHNpZGUgPT0gMSAmJiAhaGFzUmd0QXhpcyB8fCBzaWRlID09IDMgJiYgIWhhc0xmdEF4aXMgPyByb3VuZCh5QXhpc09wdHMuc2l6ZSAvIDIpIDogMCk7XG5cblx0XHRyZXR1cm4gc2l6ZTtcblx0fVxuXG5cdGNvbnN0IHBhZGRpbmcgPSBzZWxmLnBhZGRpbmcgPSAob3B0cy5wYWRkaW5nIHx8IFthdXRvUGFkU2lkZSxhdXRvUGFkU2lkZSxhdXRvUGFkU2lkZSxhdXRvUGFkU2lkZV0pLm1hcChwID0+IGZuT3JTZWxmKGlmTnVsbChwLCBhdXRvUGFkU2lkZSkpKTtcblx0Y29uc3QgX3BhZGRpbmcgPSBzZWxmLl9wYWRkaW5nID0gcGFkZGluZy5tYXAoKHAsIGkpID0+IHAoc2VsZiwgaSwgc2lkZXNXaXRoQXhlcywgMCkpO1xuXG5cdGxldCBkYXRhTGVuO1xuXG5cdC8vIHJlbmRlcmVkIGRhdGEgd2luZG93XG5cdGxldCBpMCA9IG51bGw7XG5cdGxldCBpMSA9IG51bGw7XG5cdGNvbnN0IGlkeHMgPSBtb2RlID09IDEgPyBzZXJpZXNbMF0uaWR4cyA6IG51bGw7XG5cblx0bGV0IGRhdGEwID0gbnVsbDtcblxuXHRsZXQgdmlhQXV0b1NjYWxlWCA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIHNldERhdGEoX2RhdGEsIF9yZXNldFNjYWxlcykge1xuXHRcdGRhdGEgPSBfZGF0YSA9PSBudWxsID8gW10gOiBjb3B5KF9kYXRhLCBmYXN0SXNPYmopO1xuXG5cdFx0aWYgKG1vZGUgPT0gMikge1xuXHRcdFx0ZGF0YUxlbiA9IDA7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHNlcmllcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0ZGF0YUxlbiArPSBkYXRhW2ldWzBdLmxlbmd0aDtcblx0XHRcdHNlbGYuZGF0YSA9IGRhdGEgPSBfZGF0YTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoZGF0YVswXSA9PSBudWxsKVxuXHRcdFx0XHRkYXRhWzBdID0gW107XG5cblx0XHRcdHNlbGYuZGF0YSA9IGRhdGEuc2xpY2UoKTtcblxuXHRcdFx0ZGF0YTAgPSBkYXRhWzBdO1xuXHRcdFx0ZGF0YUxlbiA9IGRhdGEwLmxlbmd0aDtcblxuXHRcdFx0aWYgKHhTY2FsZURpc3RyID09IDIpIHtcblx0XHRcdFx0ZGF0YVswXSA9IEFycmF5KGRhdGFMZW4pO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMZW47IGkrKylcblx0XHRcdFx0XHRkYXRhWzBdW2ldID0gaTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzZWxmLl9kYXRhID0gZGF0YTtcblxuXHRcdHJlc2V0WVNlcmllcyh0cnVlKTtcblxuXHRcdGZpcmUoXCJzZXREYXRhXCIpO1xuXG5cdFx0Ly8gZm9yY2VzIHggYXhpcyB0aWNrIHZhbHVlcyB0byByZS1nZW5lcmF0ZSB3aGVuIG5laXRoZXIgeCBzY2FsZSBub3IgeSBzY2FsZSBjaGFuZ2VzXG5cdFx0Ly8gaW4gb3JkaW5hbCBtb2RlLCBzY2FsZSByYW5nZSBpcyBieSBpbmRleCwgc28gd2lsbCBub3QgY2hhbmdlIGlmIG5ldyBkYXRhIGhhcyBzYW1lIGxlbmd0aCwgYnV0IHRpY2sgdmFsdWVzIGFyZSBmcm9tIGRhdGFcblx0XHRpZiAoeFNjYWxlRGlzdHIgPT0gMikge1xuXHRcdFx0c2hvdWxkQ29udmVyZ2VTaXplID0gdHJ1ZTtcblxuXHRcdFx0Lyogb3Igc29tZXdoYXQgY2hlYXBlciwgYW5kIHVnbGllcjpcblx0XHRcdGlmIChyZWFkeSkge1xuXHRcdFx0XHQvLyBsb2dpYyBleHRyYWN0ZWQgZnJvbSBheGVzQ2FsYygpXG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0bGV0IGF4aXMgPSBheGVzW2ldO1xuXHRcdFx0XHRsZXQgX3NwbGl0cyA9IGF4aXMuX3NwbGl0cy5tYXAoaSA9PiBkYXRhMFtpXSk7XG5cdFx0XHRcdGxldCBbX2luY3IsIF9zcGFjZV0gPSBheGlzLl9mb3VuZDtcblx0XHRcdFx0bGV0IGluY3IgPSBkYXRhMFtfc3BsaXRzWzFdXSAtIGRhdGEwW19zcGxpdHNbMF1dO1xuXHRcdFx0XHRheGlzLl92YWx1ZXMgPSBheGlzLnZhbHVlcyhzZWxmLCBheGlzLmZpbHRlcihzZWxmLCBfc3BsaXRzLCBpLCBfc3BhY2UsIGluY3IpLCBpLCBfc3BhY2UsIGluY3IpO1xuXHRcdFx0fVxuXHRcdFx0Ki9cblx0XHR9XG5cblx0XHRpZiAoX3Jlc2V0U2NhbGVzICE9PSBmYWxzZSkge1xuXHRcdFx0bGV0IHhzYyA9IHNjYWxlWDtcblxuXHRcdFx0aWYgKHhzYy5hdXRvKHNlbGYsIHZpYUF1dG9TY2FsZVgpKVxuXHRcdFx0XHRhdXRvU2NhbGVYKCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdF9zZXRTY2FsZSh4U2NhbGVLZXksIHhzYy5taW4sIHhzYy5tYXgpO1xuXG5cdFx0XHRzaG91bGRTZXRDdXJzb3IgPSBjdXJzb3IubGVmdCA+PSAwO1xuXHRcdFx0c2hvdWxkU2V0TGVnZW5kID0gdHJ1ZTtcblx0XHRcdGNvbW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHNlbGYuc2V0RGF0YSA9IHNldERhdGE7XG5cblx0ZnVuY3Rpb24gYXV0b1NjYWxlWCgpIHtcblx0XHR2aWFBdXRvU2NhbGVYID0gdHJ1ZTtcblxuXHRcdGxldCBfbWluLCBfbWF4O1xuXG5cdFx0aWYgKG1vZGUgPT0gMSkge1xuXHRcdFx0aWYgKGRhdGFMZW4gPiAwKSB7XG5cdFx0XHRcdGkwID0gaWR4c1swXSA9IDA7XG5cdFx0XHRcdGkxID0gaWR4c1sxXSA9IGRhdGFMZW4gLSAxO1xuXG5cdFx0XHRcdF9taW4gPSBkYXRhWzBdW2kwXTtcblx0XHRcdFx0X21heCA9IGRhdGFbMF1baTFdO1xuXG5cdFx0XHRcdGlmICh4U2NhbGVEaXN0ciA9PSAyKSB7XG5cdFx0XHRcdFx0X21pbiA9IGkwO1xuXHRcdFx0XHRcdF9tYXggPSBpMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChkYXRhTGVuID09IDEpIHtcblx0XHRcdFx0XHRpZiAoeFNjYWxlRGlzdHIgPT0gMylcblx0XHRcdFx0XHRcdFtfbWluLCBfbWF4XSA9IHJhbmdlTG9nKF9taW4sIF9taW4sIHNjYWxlWC5sb2csIGZhbHNlKTtcblx0XHRcdFx0XHRlbHNlIGlmICh4U2NhbGVEaXN0ciA9PSA0KVxuXHRcdFx0XHRcdFx0W19taW4sIF9tYXhdID0gcmFuZ2VBc2luaChfbWluLCBfbWluLCBzY2FsZVgubG9nLCBmYWxzZSk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoc2NhbGVYLnRpbWUpXG5cdFx0XHRcdFx0XHRfbWF4ID0gX21pbiArIHJvdW5kKDg2NDAwIC8gbXMpO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFtfbWluLCBfbWF4XSA9IHJhbmdlTnVtKF9taW4sIF9tYXgsIHJhbmdlUGFkLCB0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGkwID0gaWR4c1swXSA9IF9taW4gPSBudWxsO1xuXHRcdFx0XHRpMSA9IGlkeHNbMV0gPSBfbWF4ID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRfc2V0U2NhbGUoeFNjYWxlS2V5LCBfbWluLCBfbWF4KTtcblx0fVxuXG5cdGxldCBjdHhTdHJva2UsIGN0eEZpbGwsIGN0eFdpZHRoLCBjdHhEYXNoLCBjdHhKb2luLCBjdHhDYXAsIGN0eEZvbnQsIGN0eEFsaWduLCBjdHhCYXNlbGluZTtcblx0bGV0IGN0eEFscGhhO1xuXG5cdGZ1bmN0aW9uIHNldEN0eFN0eWxlKHN0cm9rZSwgd2lkdGgsIGRhc2gsIGNhcCwgZmlsbCwgam9pbikge1xuXHRcdHN0cm9rZSA/Pz0gdHJhbnNwYXJlbnQ7XG5cdFx0ZGFzaCAgID8/PSBFTVBUWV9BUlI7XG5cdFx0Y2FwICAgID8/PSBcImJ1dHRcIjsgLy8gKFx1MjAzRnxcdTIwM0YpXG5cdFx0ZmlsbCAgID8/PSB0cmFuc3BhcmVudDtcblx0XHRqb2luICAgPz89IFwicm91bmRcIjtcblxuXHRcdGlmIChzdHJva2UgIT0gY3R4U3Ryb2tlKVxuXHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gY3R4U3Ryb2tlID0gc3Ryb2tlO1xuXHRcdGlmIChmaWxsICE9IGN0eEZpbGwpXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gY3R4RmlsbCA9IGZpbGw7XG5cdFx0aWYgKHdpZHRoICE9IGN0eFdpZHRoKVxuXHRcdFx0Y3R4LmxpbmVXaWR0aCA9IGN0eFdpZHRoID0gd2lkdGg7XG5cdFx0aWYgKGpvaW4gIT0gY3R4Sm9pbilcblx0XHRcdGN0eC5saW5lSm9pbiA9IGN0eEpvaW4gPSBqb2luO1xuXHRcdGlmIChjYXAgIT0gY3R4Q2FwKVxuXHRcdFx0Y3R4LmxpbmVDYXAgPSBjdHhDYXAgPSBjYXA7XG5cdFx0aWYgKGRhc2ggIT0gY3R4RGFzaClcblx0XHRcdGN0eC5zZXRMaW5lRGFzaChjdHhEYXNoID0gZGFzaCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRGb250U3R5bGUoZm9udCwgZmlsbCwgYWxpZ24sIGJhc2VsaW5lKSB7XG5cdFx0aWYgKGZpbGwgIT0gY3R4RmlsbClcblx0XHRcdGN0eC5maWxsU3R5bGUgPSBjdHhGaWxsID0gZmlsbDtcblx0XHRpZiAoZm9udCAhPSBjdHhGb250KVxuXHRcdFx0Y3R4LmZvbnQgPSBjdHhGb250ID0gZm9udDtcblx0XHRpZiAoYWxpZ24gIT0gY3R4QWxpZ24pXG5cdFx0XHRjdHgudGV4dEFsaWduID0gY3R4QWxpZ24gPSBhbGlnbjtcblx0XHRpZiAoYmFzZWxpbmUgIT0gY3R4QmFzZWxpbmUpXG5cdFx0XHRjdHgudGV4dEJhc2VsaW5lID0gY3R4QmFzZWxpbmUgPSBiYXNlbGluZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFjY1NjYWxlKHdzYywgcHNjLCBmYWNldCwgZGF0YSwgc29ydGVkID0gMCkge1xuXHRcdGlmIChkYXRhLmxlbmd0aCA+IDAgJiYgd3NjLmF1dG8oc2VsZiwgdmlhQXV0b1NjYWxlWCkgJiYgKHBzYyA9PSBudWxsIHx8IHBzYy5taW4gPT0gbnVsbCkpIHtcblx0XHRcdGxldCBfaTAgPSBpZk51bGwoaTAsIDApO1xuXHRcdFx0bGV0IF9pMSA9IGlmTnVsbChpMSwgZGF0YS5sZW5ndGggLSAxKTtcblxuXHRcdFx0Ly8gb25seSBydW4gZ2V0TWluTWF4KCkgZm9yIGludmFsaWRhdGVkIHNlcmllcyBkYXRhLCBlbHNlIHJldXNlXG5cdFx0XHRsZXQgbWluTWF4ID0gZmFjZXQubWluID09IG51bGwgPyAod3NjLmRpc3RyID09IDMgPyBnZXRNaW5NYXhMb2coZGF0YSwgX2kwLCBfaTEpIDogZ2V0TWluTWF4KGRhdGEsIF9pMCwgX2kxLCBzb3J0ZWQpKSA6IFtmYWNldC5taW4sIGZhY2V0Lm1heF07XG5cblx0XHRcdC8vIGluaXRpYWwgbWluL21heFxuXHRcdFx0d3NjLm1pbiA9IG1pbih3c2MubWluLCBmYWNldC5taW4gPSBtaW5NYXhbMF0pO1xuXHRcdFx0d3NjLm1heCA9IG1heCh3c2MubWF4LCBmYWNldC5tYXggPSBtaW5NYXhbMV0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNjYWxlcygpIHtcblx0Ly9cdGxvZyhcInNldFNjYWxlcygpXCIsIGFyZ3VtZW50cyk7XG5cblx0XHQvLyB3aXAgc2NhbGVzXG5cdFx0bGV0IHdpcFNjYWxlcyA9IGNvcHkoc2NhbGVzLCBmYXN0SXNPYmopO1xuXG5cdFx0Zm9yIChsZXQgayBpbiB3aXBTY2FsZXMpIHtcblx0XHRcdGxldCB3c2MgPSB3aXBTY2FsZXNba107XG5cdFx0XHRsZXQgcHNjID0gcGVuZFNjYWxlc1trXTtcblxuXHRcdFx0aWYgKHBzYyAhPSBudWxsICYmIHBzYy5taW4gIT0gbnVsbCkge1xuXHRcdFx0XHRhc3NpZ24od3NjLCBwc2MpO1xuXG5cdFx0XHRcdC8vIGV4cGxpY2l0bHkgc2V0dGluZyB0aGUgeC1zY2FsZSBpbnZhbGlkYXRlcyBldmVyeXRoaW5nIChhY3RzIGFzIHJlZHJhdylcblx0XHRcdFx0aWYgKGsgPT0geFNjYWxlS2V5KVxuXHRcdFx0XHRcdHJlc2V0WVNlcmllcyh0cnVlKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGsgIT0geFNjYWxlS2V5IHx8IG1vZGUgPT0gMikge1xuXHRcdFx0XHRpZiAoZGF0YUxlbiA9PSAwICYmIHdzYy5mcm9tID09IG51bGwpIHtcblx0XHRcdFx0XHRsZXQgbWluTWF4ID0gd3NjLnJhbmdlKHNlbGYsIG51bGwsIG51bGwsIGspO1xuXHRcdFx0XHRcdHdzYy5taW4gPSBtaW5NYXhbMF07XG5cdFx0XHRcdFx0d3NjLm1heCA9IG1pbk1heFsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR3c2MubWluID0gaW5mO1xuXHRcdFx0XHRcdHdzYy5tYXggPSAtaW5mO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGFMZW4gPiAwKSB7XG5cdFx0XHQvLyBwcmUtcmFuZ2UgeS1zY2FsZXMgZnJvbSB5IHNlcmllcycgZGF0YSB2YWx1ZXNcblx0XHRcdHNlcmllcy5mb3JFYWNoKChzLCBpKSA9PiB7XG5cdFx0XHRcdGlmIChtb2RlID09IDEpIHtcblx0XHRcdFx0XHRsZXQgayA9IHMuc2NhbGU7XG5cdFx0XHRcdFx0bGV0IHdzYyA9IHdpcFNjYWxlc1trXTtcblx0XHRcdFx0XHRsZXQgcHNjID0gcGVuZFNjYWxlc1trXTtcblxuXHRcdFx0XHRcdGlmIChpID09IDApIHtcblx0XHRcdFx0XHRcdGxldCBtaW5NYXggPSB3c2MucmFuZ2Uoc2VsZiwgd3NjLm1pbiwgd3NjLm1heCwgayk7XG5cblx0XHRcdFx0XHRcdHdzYy5taW4gPSBtaW5NYXhbMF07XG5cdFx0XHRcdFx0XHR3c2MubWF4ID0gbWluTWF4WzFdO1xuXG5cdFx0XHRcdFx0XHRpMCA9IGNsb3Nlc3RJZHgod3NjLm1pbiwgZGF0YVswXSk7XG5cdFx0XHRcdFx0XHRpMSA9IGNsb3Nlc3RJZHgod3NjLm1heCwgZGF0YVswXSk7XG5cblx0XHRcdFx0XHRcdC8vIGRvbid0IHRyeSB0byBjb250cmFjdCBzYW1lIG9yIGFkamFjZW50IGlkeHNcblx0XHRcdFx0XHRcdGlmIChpMSAtIGkwID4gMSkge1xuXHRcdFx0XHRcdFx0XHQvLyBjbG9zZXN0IGluZGljZXMgY2FuIGJlIG91dHNpZGUgb2Ygdmlld1xuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YVswXVtpMF0gPCB3c2MubWluKVxuXHRcdFx0XHRcdFx0XHRcdGkwKys7XG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhWzBdW2kxXSA+IHdzYy5tYXgpXG5cdFx0XHRcdFx0XHRcdFx0aTEtLTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cy5taW4gPSBkYXRhMFtpMF07XG5cdFx0XHRcdFx0XHRzLm1heCA9IGRhdGEwW2kxXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocy5zaG93ICYmIHMuYXV0bylcblx0XHRcdFx0XHRcdGFjY1NjYWxlKHdzYywgcHNjLCBzLCBkYXRhW2ldLCBzLnNvcnRlZCk7XG5cblx0XHRcdFx0XHRzLmlkeHNbMF0gPSBpMDtcblx0XHRcdFx0XHRzLmlkeHNbMV0gPSBpMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdGlmIChzLnNob3cgJiYgcy5hdXRvKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IG9ubHkgaGFuZGxlcywgYXNzdW1lcyBhbmQgcmVxdWlyZXMgZmFjZXRzWzBdIC8gJ3gnIHNjYWxlLCBhbmQgZmFjZXRzWzFdIC8gJ3knIHNjYWxlXG5cdFx0XHRcdFx0XHRcdGxldCBbIHhGYWNldCwgeUZhY2V0IF0gPSBzLmZhY2V0cztcblx0XHRcdFx0XHRcdFx0bGV0IHhTY2FsZUtleSA9IHhGYWNldC5zY2FsZTtcblx0XHRcdFx0XHRcdFx0bGV0IHlTY2FsZUtleSA9IHlGYWNldC5zY2FsZTtcblx0XHRcdFx0XHRcdFx0bGV0IFsgeERhdGEsIHlEYXRhIF0gPSBkYXRhW2ldO1xuXG5cdFx0XHRcdFx0XHRcdGFjY1NjYWxlKHdpcFNjYWxlc1t4U2NhbGVLZXldLCBwZW5kU2NhbGVzW3hTY2FsZUtleV0sIHhGYWNldCwgeERhdGEsIHhGYWNldC5zb3J0ZWQpO1xuXHRcdFx0XHRcdFx0XHRhY2NTY2FsZSh3aXBTY2FsZXNbeVNjYWxlS2V5XSwgcGVuZFNjYWxlc1t5U2NhbGVLZXldLCB5RmFjZXQsIHlEYXRhLCB5RmFjZXQuc29ydGVkKTtcblxuXHRcdFx0XHRcdFx0XHQvLyB0ZW1wXG5cdFx0XHRcdFx0XHRcdHMubWluID0geUZhY2V0Lm1pbjtcblx0XHRcdFx0XHRcdFx0cy5tYXggPSB5RmFjZXQubWF4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHJhbmdlIGluZGVwZW5kZW50IHNjYWxlc1xuXHRcdFx0Zm9yIChsZXQgayBpbiB3aXBTY2FsZXMpIHtcblx0XHRcdFx0bGV0IHdzYyA9IHdpcFNjYWxlc1trXTtcblx0XHRcdFx0bGV0IHBzYyA9IHBlbmRTY2FsZXNba107XG5cblx0XHRcdFx0aWYgKHdzYy5mcm9tID09IG51bGwgJiYgKHBzYyA9PSBudWxsIHx8IHBzYy5taW4gPT0gbnVsbCkpIHtcblx0XHRcdFx0XHRsZXQgbWluTWF4ID0gd3NjLnJhbmdlKFxuXHRcdFx0XHRcdFx0c2VsZixcblx0XHRcdFx0XHRcdHdzYy5taW4gPT0gIGluZiA/IG51bGwgOiB3c2MubWluLFxuXHRcdFx0XHRcdFx0d3NjLm1heCA9PSAtaW5mID8gbnVsbCA6IHdzYy5tYXgsXG5cdFx0XHRcdFx0XHRrXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR3c2MubWluID0gbWluTWF4WzBdO1xuXHRcdFx0XHRcdHdzYy5tYXggPSBtaW5NYXhbMV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyByYW5nZSBkZXBlbmRlbnQgc2NhbGVzXG5cdFx0Zm9yIChsZXQgayBpbiB3aXBTY2FsZXMpIHtcblx0XHRcdGxldCB3c2MgPSB3aXBTY2FsZXNba107XG5cblx0XHRcdGlmICh3c2MuZnJvbSAhPSBudWxsKSB7XG5cdFx0XHRcdGxldCBiYXNlID0gd2lwU2NhbGVzW3dzYy5mcm9tXTtcblxuXHRcdFx0XHRpZiAoYmFzZS5taW4gPT0gbnVsbClcblx0XHRcdFx0XHR3c2MubWluID0gd3NjLm1heCA9IG51bGw7XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGxldCBtaW5NYXggPSB3c2MucmFuZ2Uoc2VsZiwgYmFzZS5taW4sIGJhc2UubWF4LCBrKTtcblx0XHRcdFx0XHR3c2MubWluID0gbWluTWF4WzBdO1xuXHRcdFx0XHRcdHdzYy5tYXggPSBtaW5NYXhbMV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgY2hhbmdlZCA9IHt9O1xuXHRcdGxldCBhbnlDaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRmb3IgKGxldCBrIGluIHdpcFNjYWxlcykge1xuXHRcdFx0bGV0IHdzYyA9IHdpcFNjYWxlc1trXTtcblx0XHRcdGxldCBzYyA9IHNjYWxlc1trXTtcblxuXHRcdFx0aWYgKHNjLm1pbiAhPSB3c2MubWluIHx8IHNjLm1heCAhPSB3c2MubWF4KSB7XG5cdFx0XHRcdHNjLm1pbiA9IHdzYy5taW47XG5cdFx0XHRcdHNjLm1heCA9IHdzYy5tYXg7XG5cblx0XHRcdFx0bGV0IGRpc3RyID0gc2MuZGlzdHI7XG5cblx0XHRcdFx0c2MuX21pbiA9IGRpc3RyID09IDMgPyBsb2cxMChzYy5taW4pIDogZGlzdHIgPT0gNCA/IGFzaW5oKHNjLm1pbiwgc2MuYXNpbmgpIDogc2MubWluO1xuXHRcdFx0XHRzYy5fbWF4ID0gZGlzdHIgPT0gMyA/IGxvZzEwKHNjLm1heCkgOiBkaXN0ciA9PSA0ID8gYXNpbmgoc2MubWF4LCBzYy5hc2luaCkgOiBzYy5tYXg7XG5cblx0XHRcdFx0Y2hhbmdlZFtrXSA9IGFueUNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChhbnlDaGFuZ2VkKSB7XG5cdFx0XHQvLyBpbnZhbGlkYXRlIHBhdGhzIG9mIGFsbCBzZXJpZXMgb24gY2hhbmdlZCBzY2FsZXNcblx0XHRcdHNlcmllcy5mb3JFYWNoKChzLCBpKSA9PiB7XG5cdFx0XHRcdGlmIChtb2RlID09IDIpIHtcblx0XHRcdFx0XHRpZiAoaSA+IDAgJiYgY2hhbmdlZC55KVxuXHRcdFx0XHRcdFx0cy5fcGF0aHMgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkW3Muc2NhbGVdKVxuXHRcdFx0XHRcdFx0cy5fcGF0aHMgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yIChsZXQgayBpbiBjaGFuZ2VkKSB7XG5cdFx0XHRcdHNob3VsZENvbnZlcmdlU2l6ZSA9IHRydWU7XG5cdFx0XHRcdGZpcmUoXCJzZXRTY2FsZVwiLCBrKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGN1cnNvci5zaG93ICYmIGN1cnNvci5sZWZ0ID49IDApXG5cdFx0XHRcdHNob3VsZFNldEN1cnNvciA9IHNob3VsZFNldExlZ2VuZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgayBpbiBwZW5kU2NhbGVzKVxuXHRcdFx0cGVuZFNjYWxlc1trXSA9IG51bGw7XG5cdH1cblxuXHQvLyBncmFicyB0aGUgbmVhcmVzdCBpbmRpY2VzIHdpdGggeSBkYXRhIG91dHNpZGUgb2YgeC1zY2FsZSBsaW1pdHNcblx0ZnVuY3Rpb24gZ2V0T3V0ZXJJZHhzKHlkYXRhKSB7XG5cdFx0bGV0IF9pMCA9IGNsYW1wKGkwIC0gMSwgMCwgZGF0YUxlbiAtIDEpO1xuXHRcdGxldCBfaTEgPSBjbGFtcChpMSArIDEsIDAsIGRhdGFMZW4gLSAxKTtcblxuXHRcdHdoaWxlICh5ZGF0YVtfaTBdID09IG51bGwgJiYgX2kwID4gMClcblx0XHRcdF9pMC0tO1xuXG5cdFx0d2hpbGUgKHlkYXRhW19pMV0gPT0gbnVsbCAmJiBfaTEgPCBkYXRhTGVuIC0gMSlcblx0XHRcdF9pMSsrO1xuXG5cdFx0cmV0dXJuIFtfaTAsIF9pMV07XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3U2VyaWVzKCkge1xuXHRcdGlmIChkYXRhTGVuID4gMCkge1xuXHRcdFx0c2VyaWVzLmZvckVhY2goKHMsIGkpID0+IHtcblx0XHRcdFx0aWYgKGkgPiAwICYmIHMuc2hvdyAmJiBzLl9wYXRocyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0bGV0IF9pZHhzID0gbW9kZSA9PSAyID8gWzAsIGRhdGFbaV1bMF0ubGVuZ3RoIC0gMV0gOiBnZXRPdXRlcklkeHMoZGF0YVtpXSk7XG5cdFx0XHRcdFx0cy5fcGF0aHMgPSBzLnBhdGhzKHNlbGYsIGksIF9pZHhzWzBdLCBfaWR4c1sxXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZXJpZXMuZm9yRWFjaCgocywgaSkgPT4ge1xuXHRcdFx0XHRpZiAoaSA+IDAgJiYgcy5zaG93KSB7XG5cdFx0XHRcdFx0aWYgKGN0eEFscGhhICE9IHMuYWxwaGEpXG5cdFx0XHRcdFx0XHRjdHguZ2xvYmFsQWxwaGEgPSBjdHhBbHBoYSA9IHMuYWxwaGE7XG5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjYWNoZVN0cm9rZUZpbGwoaSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0cy5fcGF0aHMgJiYgZHJhd1BhdGgoaSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNhY2hlU3Ryb2tlRmlsbChpLCB0cnVlKTtcblxuXHRcdFx0XHRcdFx0bGV0IF9nYXBzID0gcy5fcGF0aHMgPyBzLl9wYXRocy5nYXBzIDogbnVsbDtcblxuXHRcdFx0XHRcdFx0bGV0IHNob3cgPSBzLnBvaW50cy5zaG93KHNlbGYsIGksIGkwLCBpMSwgX2dhcHMpO1xuXHRcdFx0XHRcdFx0bGV0IGlkeHMgPSBzLnBvaW50cy5maWx0ZXIoc2VsZiwgaSwgc2hvdywgX2dhcHMpO1xuXG5cdFx0XHRcdFx0XHRpZiAoc2hvdyB8fCBpZHhzKSB7XG5cdFx0XHRcdFx0XHRcdHMucG9pbnRzLl9wYXRocyA9IHMucG9pbnRzLnBhdGhzKHNlbGYsIGksIGkwLCBpMSwgaWR4cyk7XG5cdFx0XHRcdFx0XHRcdGRyYXdQYXRoKGksIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjdHhBbHBoYSAhPSAxKVxuXHRcdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gY3R4QWxwaGEgPSAxO1xuXG5cdFx0XHRcdFx0ZmlyZShcImRyYXdTZXJpZXNcIiwgaSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNhY2hlU3Ryb2tlRmlsbChzaSwgX3BvaW50cykge1xuXHRcdGxldCBzID0gX3BvaW50cyA/IHNlcmllc1tzaV0ucG9pbnRzIDogc2VyaWVzW3NpXTtcblxuXHRcdHMuX3N0cm9rZSA9IHMuc3Ryb2tlKHNlbGYsIHNpKTtcblx0XHRzLl9maWxsICAgPSBzLmZpbGwoc2VsZiwgc2kpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BhdGgoc2ksIF9wb2ludHMpIHtcblx0XHRsZXQgcyA9IF9wb2ludHMgPyBzZXJpZXNbc2ldLnBvaW50cyA6IHNlcmllc1tzaV07XG5cblx0XHRsZXQgc3Ryb2tlU3R5bGUgPSBzLl9zdHJva2U7XG5cdFx0bGV0IGZpbGxTdHlsZSAgID0gcy5fZmlsbDtcblxuXHRcdGxldCB7IHN0cm9rZSwgZmlsbCwgY2xpcDogZ2Fwc0NsaXAsIGZsYWdzIH0gPSBzLl9wYXRocztcblx0XHRsZXQgYm91bmRzQ2xpcCA9IG51bGw7XG5cdFx0bGV0IHdpZHRoID0gcm91bmREZWMocy53aWR0aCAqIHB4UmF0aW8sIDMpO1xuXHRcdGxldCBvZmZzZXQgPSAod2lkdGggJSAyKSAvIDI7XG5cblx0XHRpZiAoX3BvaW50cyAmJiBmaWxsU3R5bGUgPT0gbnVsbClcblx0XHRcdGZpbGxTdHlsZSA9IHdpZHRoID4gMCA/IFwiI2ZmZlwiIDogc3Ryb2tlU3R5bGU7XG5cblx0XHRsZXQgX3B4QWxpZ24gPSBzLnB4QWxpZ24gPT0gMTtcblxuXHRcdF9weEFsaWduICYmIGN0eC50cmFuc2xhdGUob2Zmc2V0LCBvZmZzZXQpO1xuXG5cdFx0aWYgKCFfcG9pbnRzKSB7XG5cdFx0XHRsZXQgbGZ0ID0gcGxvdExmdCxcblx0XHRcdFx0dG9wID0gcGxvdFRvcCxcblx0XHRcdFx0d2lkID0gcGxvdFdpZCxcblx0XHRcdFx0aGd0ID0gcGxvdEhndDtcblxuXHRcdFx0bGV0IGhhbGZXaWQgPSB3aWR0aCAqIHB4UmF0aW8gLyAyO1xuXG5cdFx0XHRpZiAocy5taW4gPT0gMClcblx0XHRcdFx0aGd0ICs9IGhhbGZXaWQ7XG5cblx0XHRcdGlmIChzLm1heCA9PSAwKSB7XG5cdFx0XHRcdHRvcCAtPSBoYWxmV2lkO1xuXHRcdFx0XHRoZ3QgKz0gaGFsZldpZDtcblx0XHRcdH1cblxuXHRcdFx0Ym91bmRzQ2xpcCA9IG5ldyBQYXRoMkQoKTtcblx0XHRcdGJvdW5kc0NsaXAucmVjdChsZnQsIHRvcCwgd2lkLCBoZ3QpO1xuXHRcdH1cblxuXHRcdC8vIHRoZSBwb2ludHMgcGF0aGJ1aWxkZXIncyBnYXBzQ2xpcCBpcyBpdHMgYm91bmRzQ2xpcCwgc2luY2UgcG9pbnRzIGRvbnQgbmVlZCBnYXBzIGNsaXBwaW5nLCBhbmQgYm91bmRzIGRlcGVuZCBvbiBwb2ludCBzaXplXG5cdFx0aWYgKF9wb2ludHMpXG5cdFx0XHRzdHJva2VGaWxsKHN0cm9rZVN0eWxlLCB3aWR0aCwgcy5kYXNoLCBzLmNhcCwgZmlsbFN0eWxlLCBzdHJva2UsIGZpbGwsIGZsYWdzLCBnYXBzQ2xpcCk7XG5cdFx0ZWxzZVxuXHRcdFx0ZmlsbFN0cm9rZShzaSwgc3Ryb2tlU3R5bGUsIHdpZHRoLCBzLmRhc2gsIHMuY2FwLCBmaWxsU3R5bGUsIHN0cm9rZSwgZmlsbCwgZmxhZ3MsIGJvdW5kc0NsaXAsIGdhcHNDbGlwKTtcblxuXHRcdF9weEFsaWduICYmIGN0eC50cmFuc2xhdGUoLW9mZnNldCwgLW9mZnNldCk7XG5cdH1cblxuXHRmdW5jdGlvbiBmaWxsU3Ryb2tlKHNpLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoLCBsaW5lRGFzaCwgbGluZUNhcCwgZmlsbFN0eWxlLCBzdHJva2VQYXRoLCBmaWxsUGF0aCwgZmxhZ3MsIGJvdW5kc0NsaXAsIGdhcHNDbGlwKSB7XG5cdFx0bGV0IGRpZFN0cm9rZUZpbGwgPSBmYWxzZTtcblxuXHRcdC8vIGZvciBhbGwgYmFuZHMgd2hlcmUgdGhpcyBzZXJpZXMgaXMgdGhlIHRvcCBlZGdlLCBjcmVhdGUgdXB3YXJkcyBjbGlwcyB1c2luZyB0aGUgYm90dG9tIGVkZ2VzXG5cdFx0Ly8gYW5kIGFwcGx5IGNsaXBzICsgZmlsbCB3aXRoIGJhbmQgZmlsbCBvciBkZmx0RmlsbFxuXHRcdGJhbmRzLmZvckVhY2goKGIsIGJpKSA9PiB7XG5cdFx0XHQvLyBpc1VwcGVyRWRnZT9cblx0XHRcdGlmIChiLnNlcmllc1swXSA9PSBzaSkge1xuXHRcdFx0XHRsZXQgbG93ZXJFZGdlID0gc2VyaWVzW2Iuc2VyaWVzWzFdXTtcblx0XHRcdFx0bGV0IGxvd2VyRGF0YSA9IGRhdGFbYi5zZXJpZXNbMV1dO1xuXG5cdFx0XHRcdGxldCBiYW5kQ2xpcCA9IChsb3dlckVkZ2UuX3BhdGhzIHx8IEVNUFRZX09CSikuYmFuZDtcblxuXHRcdFx0XHRpZiAoaXNBcnIoYmFuZENsaXApKVxuXHRcdFx0XHRcdGJhbmRDbGlwID0gYi5kaXIgPT0gMSA/IGJhbmRDbGlwWzBdIDogYmFuZENsaXBbMV07XG5cblx0XHRcdFx0bGV0IGdhcHNDbGlwMjtcblxuXHRcdFx0XHRsZXQgX2ZpbGxTdHlsZSA9IG51bGw7XG5cblx0XHRcdFx0Ly8gaGFzTG93ZXJFZGdlP1xuXHRcdFx0XHRpZiAobG93ZXJFZGdlLnNob3cgJiYgYmFuZENsaXAgJiYgaGFzRGF0YShsb3dlckRhdGEsIGkwLCBpMSkpIHtcblx0XHRcdFx0XHRfZmlsbFN0eWxlID0gYi5maWxsKHNlbGYsIGJpKSB8fCBmaWxsU3R5bGU7XG5cdFx0XHRcdFx0Z2Fwc0NsaXAyID0gbG93ZXJFZGdlLl9wYXRocy5jbGlwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRiYW5kQ2xpcCA9IG51bGw7XG5cblx0XHRcdFx0c3Ryb2tlRmlsbChzdHJva2VTdHlsZSwgbGluZVdpZHRoLCBsaW5lRGFzaCwgbGluZUNhcCwgX2ZpbGxTdHlsZSwgc3Ryb2tlUGF0aCwgZmlsbFBhdGgsIGZsYWdzLCBib3VuZHNDbGlwLCBnYXBzQ2xpcCwgZ2Fwc0NsaXAyLCBiYW5kQ2xpcCk7XG5cblx0XHRcdFx0ZGlkU3Ryb2tlRmlsbCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIWRpZFN0cm9rZUZpbGwpXG5cdFx0XHRzdHJva2VGaWxsKHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIGxpbmVEYXNoLCBsaW5lQ2FwLCBmaWxsU3R5bGUsIHN0cm9rZVBhdGgsIGZpbGxQYXRoLCBmbGFncywgYm91bmRzQ2xpcCwgZ2Fwc0NsaXApO1xuXHR9XG5cblx0Y29uc3QgQ0xJUF9GSUxMX1NUUk9LRSA9IEJBTkRfQ0xJUF9GSUxMIHwgQkFORF9DTElQX1NUUk9LRTtcblxuXHRmdW5jdGlvbiBzdHJva2VGaWxsKHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIGxpbmVEYXNoLCBsaW5lQ2FwLCBmaWxsU3R5bGUsIHN0cm9rZVBhdGgsIGZpbGxQYXRoLCBmbGFncywgYm91bmRzQ2xpcCwgZ2Fwc0NsaXAsIGdhcHNDbGlwMiwgYmFuZENsaXApIHtcblx0XHRzZXRDdHhTdHlsZShzdHJva2VTdHlsZSwgbGluZVdpZHRoLCBsaW5lRGFzaCwgbGluZUNhcCwgZmlsbFN0eWxlKTtcblxuXHRcdGlmIChib3VuZHNDbGlwIHx8IGdhcHNDbGlwIHx8IGJhbmRDbGlwKSB7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Ym91bmRzQ2xpcCAmJiBjdHguY2xpcChib3VuZHNDbGlwKTtcblx0XHRcdGdhcHNDbGlwICYmIGN0eC5jbGlwKGdhcHNDbGlwKTtcblx0XHR9XG5cblx0XHRpZiAoYmFuZENsaXApIHtcblx0XHRcdGlmICgoZmxhZ3MgJiBDTElQX0ZJTExfU1RST0tFKSA9PSBDTElQX0ZJTExfU1RST0tFKSB7XG5cdFx0XHRcdGN0eC5jbGlwKGJhbmRDbGlwKTtcblx0XHRcdFx0Z2Fwc0NsaXAyICYmIGN0eC5jbGlwKGdhcHNDbGlwMik7XG5cdFx0XHRcdGRvRmlsbChmaWxsU3R5bGUsIGZpbGxQYXRoKTtcblx0XHRcdFx0ZG9TdHJva2Uoc3Ryb2tlU3R5bGUsIHN0cm9rZVBhdGgsIGxpbmVXaWR0aCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChmbGFncyAmIEJBTkRfQ0xJUF9TVFJPS0UpIHtcblx0XHRcdFx0ZG9GaWxsKGZpbGxTdHlsZSwgZmlsbFBhdGgpO1xuXHRcdFx0XHRjdHguY2xpcChiYW5kQ2xpcCk7XG5cdFx0XHRcdGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoZmxhZ3MgJiBCQU5EX0NMSVBfRklMTCkge1xuXHRcdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0XHRjdHguY2xpcChiYW5kQ2xpcCk7XG5cdFx0XHRcdGdhcHNDbGlwMiAmJiBjdHguY2xpcChnYXBzQ2xpcDIpO1xuXHRcdFx0XHRkb0ZpbGwoZmlsbFN0eWxlLCBmaWxsUGF0aCk7XG5cdFx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0XHRcdGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGRvRmlsbChmaWxsU3R5bGUsIGZpbGxQYXRoKTtcblx0XHRcdGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChib3VuZHNDbGlwIHx8IGdhcHNDbGlwIHx8IGJhbmRDbGlwKVxuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpIHtcblx0XHRpZiAobGluZVdpZHRoID4gMCkge1xuXHRcdFx0aWYgKHN0cm9rZVBhdGggaW5zdGFuY2VvZiBNYXApIHtcblx0XHRcdFx0c3Ryb2tlUGF0aC5mb3JFYWNoKChzdHJva2VQYXRoLCBzdHJva2VTdHlsZSkgPT4ge1xuXHRcdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IGN0eFN0cm9rZSA9IHN0cm9rZVN0eWxlO1xuXHRcdFx0XHRcdGN0eC5zdHJva2Uoc3Ryb2tlUGF0aCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdHJva2VQYXRoICE9IG51bGwgJiYgc3Ryb2tlU3R5bGUgJiYgY3R4LnN0cm9rZShzdHJva2VQYXRoKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBkb0ZpbGwoZmlsbFN0eWxlLCBmaWxsUGF0aCkge1xuXHRcdGlmIChmaWxsUGF0aCBpbnN0YW5jZW9mIE1hcCkge1xuXHRcdFx0ZmlsbFBhdGguZm9yRWFjaCgoZmlsbFBhdGgsIGZpbGxTdHlsZSkgPT4ge1xuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gY3R4RmlsbCA9IGZpbGxTdHlsZTtcblx0XHRcdFx0Y3R4LmZpbGwoZmlsbFBhdGgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdGZpbGxQYXRoICE9IG51bGwgJiYgZmlsbFN0eWxlICYmIGN0eC5maWxsKGZpbGxQYXRoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEluY3JTcGFjZShheGlzSWR4LCBtaW4sIG1heCwgZnVsbERpbSkge1xuXHRcdGxldCBheGlzID0gYXhlc1theGlzSWR4XTtcblxuXHRcdGxldCBpbmNyU3BhY2U7XG5cblx0XHRpZiAoZnVsbERpbSA8PSAwKVxuXHRcdFx0aW5jclNwYWNlID0gWzAsIDBdO1xuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IG1pblNwYWNlID0gYXhpcy5fc3BhY2UgPSBheGlzLnNwYWNlKHNlbGYsIGF4aXNJZHgsIG1pbiwgbWF4LCBmdWxsRGltKTtcblx0XHRcdGxldCBpbmNycyAgICA9IGF4aXMuX2luY3JzID0gYXhpcy5pbmNycyhzZWxmLCBheGlzSWR4LCBtaW4sIG1heCwgZnVsbERpbSwgbWluU3BhY2UpO1xuXHRcdFx0aW5jclNwYWNlICAgID0gZmluZEluY3IobWluLCBtYXgsIGluY3JzLCBmdWxsRGltLCBtaW5TcGFjZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChheGlzLl9mb3VuZCA9IGluY3JTcGFjZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3T3J0aG9MaW5lcyhvZmZzLCBmaWx0cywgb3JpLCBzaWRlLCBwb3MwLCBsZW4sIHdpZHRoLCBzdHJva2UsIGRhc2gsIGNhcCkge1xuXHRcdGxldCBvZmZzZXQgPSAod2lkdGggJSAyKSAvIDI7XG5cblx0XHRweEFsaWduID09IDEgJiYgY3R4LnRyYW5zbGF0ZShvZmZzZXQsIG9mZnNldCk7XG5cblx0XHRzZXRDdHhTdHlsZShzdHJva2UsIHdpZHRoLCBkYXNoLCBjYXAsIHN0cm9rZSk7XG5cblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cblx0XHRsZXQgeDAsIHkwLCB4MSwgeTEsIHBvczEgPSBwb3MwICsgKHNpZGUgPT0gMCB8fCBzaWRlID09IDMgPyAtbGVuIDogbGVuKTtcblxuXHRcdGlmIChvcmkgPT0gMCkge1xuXHRcdFx0eTAgPSBwb3MwO1xuXHRcdFx0eTEgPSBwb3MxO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHgwID0gcG9zMDtcblx0XHRcdHgxID0gcG9zMTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9mZnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChmaWx0c1tpXSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChvcmkgPT0gMClcblx0XHRcdFx0XHR4MCA9IHgxID0gb2Zmc1tpXTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHkwID0geTEgPSBvZmZzW2ldO1xuXG5cdFx0XHRcdGN0eC5tb3ZlVG8oeDAsIHkwKTtcblx0XHRcdFx0Y3R4LmxpbmVUbyh4MSwgeTEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGN0eC5zdHJva2UoKTtcblxuXHRcdHB4QWxpZ24gPT0gMSAmJiBjdHgudHJhbnNsYXRlKC1vZmZzZXQsIC1vZmZzZXQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXhlc0NhbGMoY3ljbGVOdW0pIHtcblx0Ly9cdGxvZyhcImF4ZXNDYWxjKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdGxldCBjb252ZXJnZWQgPSB0cnVlO1xuXG5cdFx0YXhlcy5mb3JFYWNoKChheGlzLCBpKSA9PiB7XG5cdFx0XHRpZiAoIWF4aXMuc2hvdylcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRsZXQgc2NhbGUgPSBzY2FsZXNbYXhpcy5zY2FsZV07XG5cblx0XHRcdGlmIChzY2FsZS5taW4gPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoYXhpcy5fc2hvdykge1xuXHRcdFx0XHRcdGNvbnZlcmdlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdGF4aXMuX3Nob3cgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXNldFlTZXJpZXMoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAoIWF4aXMuX3Nob3cpIHtcblx0XHRcdFx0XHRjb252ZXJnZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRheGlzLl9zaG93ID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXNldFlTZXJpZXMoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzaWRlID0gYXhpcy5zaWRlO1xuXHRcdFx0bGV0IG9yaSA9IHNpZGUgJSAyO1xuXG5cdFx0XHRsZXQge21pbiwgbWF4fSA9IHNjYWxlO1x0XHQvLyBcdFx0Ly8gc2hvdWxkIHRoaXMgdG9nZ2xlIHRoZW0gLl9zaG93ID0gZmFsc2VcblxuXHRcdFx0bGV0IFtfaW5jciwgX3NwYWNlXSA9IGdldEluY3JTcGFjZShpLCBtaW4sIG1heCwgb3JpID09IDAgPyBwbG90V2lkQ3NzIDogcGxvdEhndENzcyk7XG5cblx0XHRcdGlmIChfc3BhY2UgPT0gMClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvLyBpZiB3ZSdyZSB1c2luZyBpbmRleCBwb3NpdGlvbnMsIGZvcmNlIGZpcnN0IHRpY2sgdG8gbWF0Y2ggcGFzc2VkIGluZGV4XG5cdFx0XHRsZXQgZm9yY2VNaW4gPSBzY2FsZS5kaXN0ciA9PSAyO1xuXG5cdFx0XHRsZXQgX3NwbGl0cyA9IGF4aXMuX3NwbGl0cyA9IGF4aXMuc3BsaXRzKHNlbGYsIGksIG1pbiwgbWF4LCBfaW5jciwgX3NwYWNlLCBmb3JjZU1pbik7XG5cblx0XHRcdC8vIHRpY2sgbGFiZWxzXG5cdFx0XHQvLyBCT08gdGhpcyBhc3N1bWVzIGEgc3BlY2lmaWMgZGF0YS9zZXJpZXNcblx0XHRcdGxldCBzcGxpdHMgPSBzY2FsZS5kaXN0ciA9PSAyID8gX3NwbGl0cy5tYXAoaSA9PiBkYXRhMFtpXSkgOiBfc3BsaXRzO1xuXHRcdFx0bGV0IGluY3IgICA9IHNjYWxlLmRpc3RyID09IDIgPyBkYXRhMFtfc3BsaXRzWzFdXSAtIGRhdGEwW19zcGxpdHNbMF1dIDogX2luY3I7XG5cblx0XHRcdGxldCB2YWx1ZXMgPSBheGlzLl92YWx1ZXMgPSBheGlzLnZhbHVlcyhzZWxmLCBheGlzLmZpbHRlcihzZWxmLCBzcGxpdHMsIGksIF9zcGFjZSwgaW5jciksIGksIF9zcGFjZSwgaW5jcik7XG5cblx0XHRcdC8vIHJvdGF0aW5nIG9mIGxhYmVscyBvbmx5IHN1cHBvcnRlZCBvbiBib3R0b20geCBheGlzXG5cdFx0XHRheGlzLl9yb3RhdGUgPSBzaWRlID09IDIgPyBheGlzLnJvdGF0ZShzZWxmLCB2YWx1ZXMsIGksIF9zcGFjZSkgOiAwO1xuXG5cdFx0XHRsZXQgb2xkU2l6ZSA9IGF4aXMuX3NpemU7XG5cblx0XHRcdGF4aXMuX3NpemUgPSBjZWlsKGF4aXMuc2l6ZShzZWxmLCB2YWx1ZXMsIGksIGN5Y2xlTnVtKSk7XG5cblx0XHRcdGlmIChvbGRTaXplICE9IG51bGwgJiYgYXhpcy5fc2l6ZSAhPSBvbGRTaXplKVx0XHRcdC8vIHJlYWR5ICYmID9cblx0XHRcdFx0Y29udmVyZ2VkID0gZmFsc2U7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29udmVyZ2VkO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFkZGluZ0NhbGMoY3ljbGVOdW0pIHtcblx0XHRsZXQgY29udmVyZ2VkID0gdHJ1ZTtcblxuXHRcdHBhZGRpbmcuZm9yRWFjaCgocCwgaSkgPT4ge1xuXHRcdFx0bGV0IF9wID0gcChzZWxmLCBpLCBzaWRlc1dpdGhBeGVzLCBjeWNsZU51bSk7XG5cblx0XHRcdGlmIChfcCAhPSBfcGFkZGluZ1tpXSlcblx0XHRcdFx0Y29udmVyZ2VkID0gZmFsc2U7XG5cblx0XHRcdF9wYWRkaW5nW2ldID0gX3A7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29udmVyZ2VkO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0F4ZXNHcmlkKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGF4aXMgPSBheGVzW2ldO1xuXG5cdFx0XHRpZiAoIWF4aXMuc2hvdyB8fCAhYXhpcy5fc2hvdylcblx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdGxldCBzaWRlID0gYXhpcy5zaWRlO1xuXHRcdFx0bGV0IG9yaSA9IHNpZGUgJSAyO1xuXG5cdFx0XHRsZXQgeCwgeTtcblxuXHRcdFx0bGV0IGZpbGxTdHlsZSA9IGF4aXMuc3Ryb2tlKHNlbGYsIGkpO1xuXG5cdFx0XHRsZXQgc2hpZnREaXIgPSBzaWRlID09IDAgfHwgc2lkZSA9PSAzID8gLTEgOiAxO1xuXG5cdFx0XHQvLyBheGlzIGxhYmVsXG5cdFx0XHRpZiAoYXhpcy5sYWJlbCkge1xuXHRcdFx0XHRsZXQgc2hpZnRBbXQgPSBheGlzLmxhYmVsR2FwICogc2hpZnREaXI7XG5cdFx0XHRcdGxldCBiYXNlTHBvcyA9IHJvdW5kKChheGlzLl9scG9zICsgc2hpZnRBbXQpICogcHhSYXRpbyk7XG5cblx0XHRcdFx0c2V0Rm9udFN0eWxlKGF4aXMubGFiZWxGb250WzBdLCBmaWxsU3R5bGUsIFwiY2VudGVyXCIsIHNpZGUgPT0gMiA/IFRPUCA6IEJPVFRPTSk7XG5cblx0XHRcdFx0Y3R4LnNhdmUoKTtcblxuXHRcdFx0XHRpZiAob3JpID09IDEpIHtcblx0XHRcdFx0XHR4ID0geSA9IDA7XG5cblx0XHRcdFx0XHRjdHgudHJhbnNsYXRlKFxuXHRcdFx0XHRcdFx0YmFzZUxwb3MsXG5cdFx0XHRcdFx0XHRyb3VuZChwbG90VG9wICsgcGxvdEhndCAvIDIpLFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y3R4LnJvdGF0ZSgoc2lkZSA9PSAzID8gLVBJIDogUEkpIC8gMik7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR4ID0gcm91bmQocGxvdExmdCArIHBsb3RXaWQgLyAyKTtcblx0XHRcdFx0XHR5ID0gYmFzZUxwb3M7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjdHguZmlsbFRleHQoYXhpcy5sYWJlbCwgeCwgeSk7XG5cblx0XHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IFtfaW5jciwgX3NwYWNlXSA9IGF4aXMuX2ZvdW5kO1xuXG5cdFx0XHRpZiAoX3NwYWNlID09IDApXG5cdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRsZXQgc2NhbGUgPSBzY2FsZXNbYXhpcy5zY2FsZV07XG5cblx0XHRcdGxldCBwbG90RGltID0gb3JpID09IDAgPyBwbG90V2lkIDogcGxvdEhndDtcblx0XHRcdGxldCBwbG90T2ZmID0gb3JpID09IDAgPyBwbG90TGZ0IDogcGxvdFRvcDtcblxuXHRcdFx0bGV0IGF4aXNHYXAgPSByb3VuZChheGlzLmdhcCAqIHB4UmF0aW8pO1xuXG5cdFx0XHRsZXQgX3NwbGl0cyA9IGF4aXMuX3NwbGl0cztcblxuXHRcdFx0Ly8gdGljayBsYWJlbHNcblx0XHRcdC8vIEJPTyB0aGlzIGFzc3VtZXMgYSBzcGVjaWZpYyBkYXRhL3Nlcmllc1xuXHRcdFx0bGV0IHNwbGl0cyA9IHNjYWxlLmRpc3RyID09IDIgPyBfc3BsaXRzLm1hcChpID0+IGRhdGEwW2ldKSA6IF9zcGxpdHM7XG5cdFx0XHRsZXQgaW5jciAgID0gc2NhbGUuZGlzdHIgPT0gMiA/IGRhdGEwW19zcGxpdHNbMV1dIC0gZGF0YTBbX3NwbGl0c1swXV0gOiBfaW5jcjtcblxuXHRcdFx0bGV0IHRpY2tzID0gYXhpcy50aWNrcztcblx0XHRcdGxldCBib3JkZXIgPSBheGlzLmJvcmRlcjtcblx0XHRcdGxldCB0aWNrU2l6ZSA9IHRpY2tzLnNob3cgPyByb3VuZCh0aWNrcy5zaXplICogcHhSYXRpbykgOiAwO1xuXG5cdFx0XHQvLyByb3RhdGluZyBvZiBsYWJlbHMgb25seSBzdXBwb3J0ZWQgb24gYm90dG9tIHggYXhpc1xuXHRcdFx0bGV0IGFuZ2xlID0gYXhpcy5fcm90YXRlICogLVBJLzE4MDtcblxuXHRcdFx0bGV0IGJhc2VQb3MgID0gcHhSb3VuZChheGlzLl9wb3MgKiBweFJhdGlvKTtcblx0XHRcdGxldCBzaGlmdEFtdCA9ICh0aWNrU2l6ZSArIGF4aXNHYXApICogc2hpZnREaXI7XG5cdFx0XHRsZXQgZmluYWxQb3MgPSBiYXNlUG9zICsgc2hpZnRBbXQ7XG5cdFx0XHQgICAgeSAgICAgICAgPSBvcmkgPT0gMCA/IGZpbmFsUG9zIDogMDtcblx0XHRcdCAgICB4ICAgICAgICA9IG9yaSA9PSAxID8gZmluYWxQb3MgOiAwO1xuXG5cdFx0XHRsZXQgZm9udCAgICAgICAgID0gYXhpcy5mb250WzBdO1xuXHRcdFx0bGV0IHRleHRBbGlnbiAgICA9IGF4aXMuYWxpZ24gPT0gMSA/IExFRlQgOlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgIGF4aXMuYWxpZ24gPT0gMiA/IFJJR0hUIDpcblx0XHRcdCAgICAgICAgICAgICAgICAgICBhbmdsZSA+IDAgPyBMRUZUIDpcblx0XHRcdCAgICAgICAgICAgICAgICAgICBhbmdsZSA8IDAgPyBSSUdIVCA6XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgb3JpID09IDAgPyBcImNlbnRlclwiIDogc2lkZSA9PSAzID8gUklHSFQgOiBMRUZUO1xuXHRcdFx0bGV0IHRleHRCYXNlbGluZSA9IGFuZ2xlIHx8XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgb3JpID09IDEgPyBcIm1pZGRsZVwiIDogc2lkZSA9PSAyID8gVE9QICAgOiBCT1RUT007XG5cblx0XHRcdHNldEZvbnRTdHlsZShmb250LCBmaWxsU3R5bGUsIHRleHRBbGlnbiwgdGV4dEJhc2VsaW5lKTtcblxuXHRcdFx0bGV0IGxpbmVIZWlnaHQgPSBheGlzLmZvbnRbMV0gKiBsaW5lTXVsdDtcblxuXHRcdFx0bGV0IGNhbk9mZnMgPSBfc3BsaXRzLm1hcCh2YWwgPT4gcHhSb3VuZChnZXRQb3ModmFsLCBzY2FsZSwgcGxvdERpbSwgcGxvdE9mZikpKTtcblxuXHRcdFx0bGV0IF92YWx1ZXMgPSBheGlzLl92YWx1ZXM7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgX3ZhbHVlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgdmFsID0gX3ZhbHVlc1tpXTtcblxuXHRcdFx0XHRpZiAodmFsICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAob3JpID09IDApXG5cdFx0XHRcdFx0XHR4ID0gY2FuT2Zmc1tpXTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR5ID0gY2FuT2Zmc1tpXTtcblxuXHRcdFx0XHRcdHZhbCA9IFwiXCIgKyB2YWw7XG5cblx0XHRcdFx0XHRsZXQgX3BhcnRzID0gdmFsLmluZGV4T2YoXCJcXG5cIikgPT0gLTEgPyBbdmFsXSA6IHZhbC5zcGxpdCgvXFxuL2dtKTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgX3BhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRsZXQgdGV4dCA9IF9wYXJ0c1tqXTtcblxuXHRcdFx0XHRcdFx0aWYgKGFuZ2xlKSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRcdFx0XHRcdGN0eC50cmFuc2xhdGUoeCwgeSArIGogKiBsaW5lSGVpZ2h0KTsgLy8gY2FuIHRoaXMgYmUgcmVwbGFjZWQgd2l0aCBwb3NpdGlvbiBtYXRoP1xuXHRcdFx0XHRcdFx0XHRjdHgucm90YXRlKGFuZ2xlKTsgLy8gY2FuIHRoaXMgYmUgZG9uZSBvbmNlP1xuXHRcdFx0XHRcdFx0XHRjdHguZmlsbFRleHQodGV4dCwgMCwgMCk7XG5cdFx0XHRcdFx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5ICsgaiAqIGxpbmVIZWlnaHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyB0aWNrc1xuXHRcdFx0aWYgKHRpY2tzLnNob3cpIHtcblx0XHRcdFx0ZHJhd09ydGhvTGluZXMoXG5cdFx0XHRcdFx0Y2FuT2Zmcyxcblx0XHRcdFx0XHR0aWNrcy5maWx0ZXIoc2VsZiwgc3BsaXRzLCBpLCBfc3BhY2UsIGluY3IpLFxuXHRcdFx0XHRcdG9yaSxcblx0XHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRcdGJhc2VQb3MsXG5cdFx0XHRcdFx0dGlja1NpemUsXG5cdFx0XHRcdFx0cm91bmREZWModGlja3Mud2lkdGggKiBweFJhdGlvLCAzKSxcblx0XHRcdFx0XHR0aWNrcy5zdHJva2Uoc2VsZiwgaSksXG5cdFx0XHRcdFx0dGlja3MuZGFzaCxcblx0XHRcdFx0XHR0aWNrcy5jYXAsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGdyaWRcblx0XHRcdGxldCBncmlkID0gYXhpcy5ncmlkO1xuXG5cdFx0XHRpZiAoZ3JpZC5zaG93KSB7XG5cdFx0XHRcdGRyYXdPcnRob0xpbmVzKFxuXHRcdFx0XHRcdGNhbk9mZnMsXG5cdFx0XHRcdFx0Z3JpZC5maWx0ZXIoc2VsZiwgc3BsaXRzLCBpLCBfc3BhY2UsIGluY3IpLFxuXHRcdFx0XHRcdG9yaSxcblx0XHRcdFx0XHRvcmkgPT0gMCA/IDIgOiAxLFxuXHRcdFx0XHRcdG9yaSA9PSAwID8gcGxvdFRvcCA6IHBsb3RMZnQsXG5cdFx0XHRcdFx0b3JpID09IDAgPyBwbG90SGd0IDogcGxvdFdpZCxcblx0XHRcdFx0XHRyb3VuZERlYyhncmlkLndpZHRoICogcHhSYXRpbywgMyksXG5cdFx0XHRcdFx0Z3JpZC5zdHJva2Uoc2VsZiwgaSksXG5cdFx0XHRcdFx0Z3JpZC5kYXNoLFxuXHRcdFx0XHRcdGdyaWQuY2FwLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYm9yZGVyLnNob3cpIHtcblx0XHRcdFx0ZHJhd09ydGhvTGluZXMoXG5cdFx0XHRcdFx0W2Jhc2VQb3NdLFxuXHRcdFx0XHRcdFsxXSxcblx0XHRcdFx0XHRvcmkgPT0gMCA/IDEgOiAwLFxuXHRcdFx0XHRcdG9yaSA9PSAwID8gMSA6IDIsXG5cdFx0XHRcdFx0b3JpID09IDEgPyBwbG90VG9wIDogcGxvdExmdCxcblx0XHRcdFx0XHRvcmkgPT0gMSA/IHBsb3RIZ3QgOiBwbG90V2lkLFxuXHRcdFx0XHRcdHJvdW5kRGVjKGJvcmRlci53aWR0aCAqIHB4UmF0aW8sIDMpLFxuXHRcdFx0XHRcdGJvcmRlci5zdHJva2Uoc2VsZiwgaSksXG5cdFx0XHRcdFx0Ym9yZGVyLmRhc2gsXG5cdFx0XHRcdFx0Ym9yZGVyLmNhcCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmaXJlKFwiZHJhd0F4ZXNcIik7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldFlTZXJpZXMobWluTWF4KSB7XG5cdC8vXHRsb2coXCJyZXNldFlTZXJpZXMoKVwiLCBhcmd1bWVudHMpO1xuXG5cdFx0c2VyaWVzLmZvckVhY2goKHMsIGkpID0+IHtcblx0XHRcdGlmIChpID4gMCkge1xuXHRcdFx0XHRzLl9wYXRocyA9IG51bGw7XG5cblx0XHRcdFx0aWYgKG1pbk1heCkge1xuXHRcdFx0XHRcdGlmIChtb2RlID09IDEpIHtcblx0XHRcdFx0XHRcdHMubWluID0gbnVsbDtcblx0XHRcdFx0XHRcdHMubWF4ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRzLmZhY2V0cy5mb3JFYWNoKGYgPT4ge1xuXHRcdFx0XHRcdFx0XHRmLm1pbiA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdGYubWF4ID0gbnVsbDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0bGV0IHF1ZXVlZENvbW1pdCA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIGNvbW1pdCgpIHtcblx0XHRpZiAoIXF1ZXVlZENvbW1pdCkge1xuXHRcdFx0bWljcm9UYXNrKF9jb21taXQpO1xuXHRcdFx0cXVldWVkQ29tbWl0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBfY29tbWl0KCkge1xuXHQvL1x0bG9nKFwiX2NvbW1pdCgpXCIsIGFyZ3VtZW50cyk7XG5cblx0XHRpZiAoc2hvdWxkU2V0U2NhbGVzKSB7XG5cdFx0XHRzZXRTY2FsZXMoKTtcblx0XHRcdHNob3VsZFNldFNjYWxlcyA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChzaG91bGRDb252ZXJnZVNpemUpIHtcblx0XHRcdGNvbnZlcmdlU2l6ZSgpO1xuXHRcdFx0c2hvdWxkQ29udmVyZ2VTaXplID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3VsZFNldFNpemUpIHtcblx0XHRcdHNldFN0eWxlUHgodW5kZXIsIExFRlQsICAgcGxvdExmdENzcyk7XG5cdFx0XHRzZXRTdHlsZVB4KHVuZGVyLCBUT1AsICAgIHBsb3RUb3BDc3MpO1xuXHRcdFx0c2V0U3R5bGVQeCh1bmRlciwgV0lEVEgsICBwbG90V2lkQ3NzKTtcblx0XHRcdHNldFN0eWxlUHgodW5kZXIsIEhFSUdIVCwgcGxvdEhndENzcyk7XG5cblx0XHRcdHNldFN0eWxlUHgob3ZlciwgTEVGVCwgICAgcGxvdExmdENzcyk7XG5cdFx0XHRzZXRTdHlsZVB4KG92ZXIsIFRPUCwgICAgIHBsb3RUb3BDc3MpO1xuXHRcdFx0c2V0U3R5bGVQeChvdmVyLCBXSURUSCwgICBwbG90V2lkQ3NzKTtcblx0XHRcdHNldFN0eWxlUHgob3ZlciwgSEVJR0hULCAgcGxvdEhndENzcyk7XG5cblx0XHRcdHNldFN0eWxlUHgod3JhcCwgV0lEVEgsICAgZnVsbFdpZENzcyk7XG5cdFx0XHRzZXRTdHlsZVB4KHdyYXAsIEhFSUdIVCwgIGZ1bGxIZ3RDc3MpO1xuXG5cdFx0XHQvLyBOT1RFOiBtdXRhdGluZyB0aGlzIGR1cmluZyBwcmludCBwcmV2aWV3IGluIENocm9tZSBmb3JjZXMgdHJhbnNwYXJlbnRcblx0XHRcdC8vIGNhbnZhcyBwaXhlbHMgdG8gd2hpdGUsIGV2ZW4gd2hlbiBmb2xsb3dlZCB1cCB3aXRoIGNsZWFyUmVjdCgpIGJlbG93XG5cdFx0XHRjYW4ud2lkdGggID0gcm91bmQoZnVsbFdpZENzcyAqIHB4UmF0aW8pO1xuXHRcdFx0Y2FuLmhlaWdodCA9IHJvdW5kKGZ1bGxIZ3RDc3MgKiBweFJhdGlvKTtcblxuXHRcdFx0YXhlcy5mb3JFYWNoKCh7IF9lbCwgX3Nob3csIF9zaXplLCBfcG9zLCBzaWRlIH0pID0+IHtcblx0XHRcdFx0aWYgKF9lbCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKF9zaG93KSB7XG5cdFx0XHRcdFx0XHRsZXQgcG9zT2Zmc2V0ID0gKHNpZGUgPT09IDMgfHwgc2lkZSA9PT0gMCA/IF9zaXplIDogMCk7XG5cdFx0XHRcdFx0XHRsZXQgaXNWdCA9IHNpZGUgJSAyID09IDE7XG5cblx0XHRcdFx0XHRcdHNldFN0eWxlUHgoX2VsLCBpc1Z0ID8gXCJsZWZ0XCIgICA6IFwidG9wXCIsICAgIF9wb3MgLSBwb3NPZmZzZXQpO1xuXHRcdFx0XHRcdFx0c2V0U3R5bGVQeChfZWwsIGlzVnQgPyBcIndpZHRoXCIgIDogXCJoZWlnaHRcIiwgX3NpemUpO1xuXHRcdFx0XHRcdFx0c2V0U3R5bGVQeChfZWwsIGlzVnQgPyBcInRvcFwiICAgIDogXCJsZWZ0XCIsICAgaXNWdCA/IHBsb3RUb3BDc3MgOiBwbG90TGZ0Q3NzKTtcblx0XHRcdFx0XHRcdHNldFN0eWxlUHgoX2VsLCBpc1Z0ID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIiwgIGlzVnQgPyBwbG90SGd0Q3NzIDogcGxvdFdpZENzcyk7XG5cblx0XHRcdFx0XHRcdHJlbUNsYXNzKF9lbCwgT0ZGKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoX2VsLCBPRkYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gaW52YWxpZGF0ZSBjdHggc3R5bGUgY2FjaGVcblx0XHRcdGN0eFN0cm9rZSA9IGN0eEZpbGwgPSBjdHhXaWR0aCA9IGN0eEpvaW4gPSBjdHhDYXAgPSBjdHhGb250ID0gY3R4QWxpZ24gPSBjdHhCYXNlbGluZSA9IGN0eERhc2ggPSBudWxsO1xuXHRcdFx0Y3R4QWxwaGEgPSAxO1xuXG5cdFx0XHRzeW5jUmVjdCh0cnVlKTtcblxuXHRcdFx0ZmlyZShcInNldFNpemVcIik7XG5cblx0XHRcdHNob3VsZFNldFNpemUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoZnVsbFdpZENzcyA+IDAgJiYgZnVsbEhndENzcyA+IDApIHtcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgY2FuLndpZHRoLCBjYW4uaGVpZ2h0KTtcblx0XHRcdGZpcmUoXCJkcmF3Q2xlYXJcIik7XG5cdFx0XHRkcmF3T3JkZXIuZm9yRWFjaChmbiA9PiBmbigpKTtcblx0XHRcdGZpcmUoXCJkcmF3XCIpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxlY3Quc2hvdyAmJiBzaG91bGRTZXRTZWxlY3QpIHtcblx0XHRcdHNldFNlbGVjdChzZWxlY3QpO1xuXHRcdFx0c2hvdWxkU2V0U2VsZWN0ID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGN1cnNvci5zaG93ICYmIHNob3VsZFNldEN1cnNvcikge1xuXHRcdFx0dXBkYXRlQ3Vyc29yKG51bGwsIHRydWUsIGZhbHNlKTtcblx0XHRcdHNob3VsZFNldEN1cnNvciA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChsZWdlbmQuc2hvdyAmJiBsZWdlbmQubGl2ZSAmJiBzaG91bGRTZXRMZWdlbmQpIHtcblx0XHRcdHNldExlZ2VuZCgpO1xuXHRcdFx0c2hvdWxkU2V0TGVnZW5kID0gZmFsc2U7IC8vIHJlZHVuZGFudCBjdXJyZW50bHlcblx0XHR9XG5cblx0XHRpZiAoIXJlYWR5KSB7XG5cdFx0XHRyZWFkeSA9IHRydWU7XG5cdFx0XHRzZWxmLnN0YXR1cyA9IDE7XG5cblx0XHRcdGZpcmUoXCJyZWFkeVwiKTtcblx0XHR9XG5cblx0XHR2aWFBdXRvU2NhbGVYID0gZmFsc2U7XG5cblx0XHRxdWV1ZWRDb21taXQgPSBmYWxzZTtcblx0fVxuXG5cdHNlbGYucmVkcmF3ID0gKHJlYnVpbGRQYXRocywgcmVjYWxjQXhlcykgPT4ge1xuXHRcdHNob3VsZENvbnZlcmdlU2l6ZSA9IHJlY2FsY0F4ZXMgfHwgZmFsc2U7XG5cblx0XHRpZiAocmVidWlsZFBhdGhzICE9PSBmYWxzZSlcblx0XHRcdF9zZXRTY2FsZSh4U2NhbGVLZXksIHNjYWxlWC5taW4sIHNjYWxlWC5tYXgpO1xuXHRcdGVsc2Vcblx0XHRcdGNvbW1pdCgpO1xuXHR9O1xuXG5cdC8vIHJlZHJhdygpID0+IHNldFNjYWxlKCd4Jywgc2NhbGVzLngubWluLCBzY2FsZXMueC5tYXgpO1xuXG5cdC8vIGV4cGxpY2l0LCBuZXZlciByZS1yYW5nZWQgKGlzIHRoaXMgYWN0dWFsbHkgdHJ1ZT8gZm9yIHggYW5kIHkpXG5cdGZ1bmN0aW9uIHNldFNjYWxlKGtleSwgb3B0cykge1xuXHRcdGxldCBzYyA9IHNjYWxlc1trZXldO1xuXG5cdFx0aWYgKHNjLmZyb20gPT0gbnVsbCkge1xuXHRcdFx0aWYgKGRhdGFMZW4gPT0gMCkge1xuXHRcdFx0XHRsZXQgbWluTWF4ID0gc2MucmFuZ2Uoc2VsZiwgb3B0cy5taW4sIG9wdHMubWF4LCBrZXkpO1xuXHRcdFx0XHRvcHRzLm1pbiA9IG1pbk1heFswXTtcblx0XHRcdFx0b3B0cy5tYXggPSBtaW5NYXhbMV07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRzLm1pbiA+IG9wdHMubWF4KSB7XG5cdFx0XHRcdGxldCBfbWluID0gb3B0cy5taW47XG5cdFx0XHRcdG9wdHMubWluID0gb3B0cy5tYXg7XG5cdFx0XHRcdG9wdHMubWF4ID0gX21pbjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRhdGFMZW4gPiAxICYmIG9wdHMubWluICE9IG51bGwgJiYgb3B0cy5tYXggIT0gbnVsbCAmJiBvcHRzLm1heCAtIG9wdHMubWluIDwgMWUtMTYpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYgKGtleSA9PSB4U2NhbGVLZXkpIHtcblx0XHRcdFx0aWYgKHNjLmRpc3RyID09IDIgJiYgZGF0YUxlbiA+IDApIHtcblx0XHRcdFx0XHRvcHRzLm1pbiA9IGNsb3Nlc3RJZHgob3B0cy5taW4sIGRhdGFbMF0pO1xuXHRcdFx0XHRcdG9wdHMubWF4ID0gY2xvc2VzdElkeChvcHRzLm1heCwgZGF0YVswXSk7XG5cblx0XHRcdFx0XHRpZiAob3B0cy5taW4gPT0gb3B0cy5tYXgpXG5cdFx0XHRcdFx0XHRvcHRzLm1heCsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvL1x0bG9nKFwic2V0U2NhbGUoKVwiLCBhcmd1bWVudHMpO1xuXG5cdFx0XHRwZW5kU2NhbGVzW2tleV0gPSBvcHRzO1xuXG5cdFx0XHRzaG91bGRTZXRTY2FsZXMgPSB0cnVlO1xuXHRcdFx0Y29tbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0c2VsZi5zZXRTY2FsZSA9IHNldFNjYWxlO1xuXG4vL1x0SU5URVJBQ1RJT05cblxuXHRsZXQgeEN1cnNvcjtcblx0bGV0IHlDdXJzb3I7XG5cdGxldCB2Q3Vyc29yO1xuXHRsZXQgaEN1cnNvcjtcblxuXHQvLyBzdGFydGluZyBwb3NpdGlvbiBiZWZvcmUgY3Vyc29yLm1vdmVcblx0bGV0IHJhd01vdXNlTGVmdDA7XG5cdGxldCByYXdNb3VzZVRvcDA7XG5cblx0Ly8gc3RhcnRpbmcgcG9zaXRpb25cblx0bGV0IG1vdXNlTGVmdDA7XG5cdGxldCBtb3VzZVRvcDA7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBiZWZvcmUgY3Vyc29yLm1vdmVcblx0bGV0IHJhd01vdXNlTGVmdDE7XG5cdGxldCByYXdNb3VzZVRvcDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvblxuXHRsZXQgbW91c2VMZWZ0MTtcblx0bGV0IG1vdXNlVG9wMTtcblxuXHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblxuXHRjb25zdCBkcmFnID0gY3Vyc29yLmRyYWc7XG5cblx0bGV0IGRyYWdYID0gZHJhZy54O1xuXHRsZXQgZHJhZ1kgPSBkcmFnLnk7XG5cblx0aWYgKGN1cnNvci5zaG93KSB7XG5cdFx0aWYgKGN1cnNvci54KVxuXHRcdFx0eEN1cnNvciA9IHBsYWNlRGl2KENVUlNPUl9YLCBvdmVyKTtcblx0XHRpZiAoY3Vyc29yLnkpXG5cdFx0XHR5Q3Vyc29yID0gcGxhY2VEaXYoQ1VSU09SX1ksIG92ZXIpO1xuXG5cdFx0aWYgKHNjYWxlWC5vcmkgPT0gMCkge1xuXHRcdFx0dkN1cnNvciA9IHhDdXJzb3I7XG5cdFx0XHRoQ3Vyc29yID0geUN1cnNvcjtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2Q3Vyc29yID0geUN1cnNvcjtcblx0XHRcdGhDdXJzb3IgPSB4Q3Vyc29yO1xuXHRcdH1cblxuXHRcdG1vdXNlTGVmdDEgPSBjdXJzb3IubGVmdDtcblx0XHRtb3VzZVRvcDEgPSBjdXJzb3IudG9wO1xuXHR9XG5cblx0Y29uc3Qgc2VsZWN0ID0gc2VsZi5zZWxlY3QgPSBhc3NpZ24oe1xuXHRcdHNob3c6ICAgdHJ1ZSxcblx0XHRvdmVyOiAgIHRydWUsXG5cdFx0bGVmdDogICAwLFxuXHRcdHdpZHRoOiAgMCxcblx0XHR0b3A6ICAgIDAsXG5cdFx0aGVpZ2h0OiAwLFxuXHR9LCBvcHRzLnNlbGVjdCk7XG5cblx0Y29uc3Qgc2VsZWN0RGl2ID0gc2VsZWN0LnNob3cgPyBwbGFjZURpdihTRUxFQ1QsIHNlbGVjdC5vdmVyID8gb3ZlciA6IHVuZGVyKSA6IG51bGw7XG5cblx0ZnVuY3Rpb24gc2V0U2VsZWN0KG9wdHMsIF9maXJlKSB7XG5cdFx0aWYgKHNlbGVjdC5zaG93KSB7XG5cdFx0XHRmb3IgKGxldCBwcm9wIGluIG9wdHMpIHtcblx0XHRcdFx0c2VsZWN0W3Byb3BdID0gb3B0c1twcm9wXTtcblxuXHRcdFx0XHRpZiAocHJvcCBpbiBfaGlkZVByb3BzKVxuXHRcdFx0XHRcdHNldFN0eWxlUHgoc2VsZWN0RGl2LCBwcm9wLCBvcHRzW3Byb3BdKTtcblx0XHRcdH1cblxuXHRcdFx0X2ZpcmUgIT09IGZhbHNlICYmIGZpcmUoXCJzZXRTZWxlY3RcIik7XG5cdFx0fVxuXHR9XG5cblx0c2VsZi5zZXRTZWxlY3QgPSBzZXRTZWxlY3Q7XG5cblx0ZnVuY3Rpb24gdG9nZ2xlRE9NKGksIG9uT2ZmKSB7XG5cdFx0bGV0IHMgPSBzZXJpZXNbaV07XG5cdFx0bGV0IGxhYmVsID0gc2hvd0xlZ2VuZCA/IGxlZ2VuZFJvd3NbaV0gOiBudWxsO1xuXG5cdFx0aWYgKHMuc2hvdylcblx0XHRcdGxhYmVsICYmIHJlbUNsYXNzKGxhYmVsLCBPRkYpO1xuXHRcdGVsc2Uge1xuXHRcdFx0bGFiZWwgJiYgYWRkQ2xhc3MobGFiZWwsIE9GRik7XG5cdFx0XHRjdXJzb3JQdHMubGVuZ3RoID4gMSAmJiBlbFRyYW5zKGN1cnNvclB0c1tpXSwgLTEwLCAtMTAsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIF9zZXRTY2FsZShrZXksIG1pbiwgbWF4KSB7XG5cdFx0c2V0U2NhbGUoa2V5LCB7bWluLCBtYXh9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNlcmllcyhpLCBvcHRzLCBfZmlyZSwgX3B1Yikge1xuXHQvL1x0bG9nKFwic2V0U2VyaWVzKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdGlmIChvcHRzLmZvY3VzICE9IG51bGwpXG5cdFx0XHRzZXRGb2N1cyhpKTtcblxuXHRcdGlmIChvcHRzLnNob3cgIT0gbnVsbCkge1xuXHRcdFx0c2VyaWVzLmZvckVhY2goKHMsIHNpKSA9PiB7XG5cdFx0XHRcdGlmIChzaSA+IDAgJiYgKGkgPT0gc2kgfHwgaSA9PSBudWxsKSkge1xuXHRcdFx0XHRcdHMuc2hvdyA9IG9wdHMuc2hvdztcblx0XHRcdFx0XHR0b2dnbGVET00oc2ksIG9wdHMuc2hvdyk7XG5cblx0XHRcdFx0XHRfc2V0U2NhbGUobW9kZSA9PSAyID8gcy5mYWNldHNbMV0uc2NhbGUgOiBzLnNjYWxlLCBudWxsLCBudWxsKTtcblx0XHRcdFx0XHRjb21taXQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0X2ZpcmUgIT09IGZhbHNlICYmIGZpcmUoXCJzZXRTZXJpZXNcIiwgaSwgb3B0cyk7XG5cblx0XHRfcHViICYmIHB1YlN5bmMoXCJzZXRTZXJpZXNcIiwgc2VsZiwgaSwgb3B0cyk7XG5cdH1cblxuXHRzZWxmLnNldFNlcmllcyA9IHNldFNlcmllcztcblxuXHRmdW5jdGlvbiBzZXRCYW5kKGJpLCBvcHRzKSB7XG5cdFx0YXNzaWduKGJhbmRzW2JpXSwgb3B0cyk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRCYW5kKG9wdHMsIGJpKSB7XG5cdFx0b3B0cy5maWxsID0gZm5PclNlbGYob3B0cy5maWxsIHx8IG51bGwpO1xuXHRcdG9wdHMuZGlyID0gaWZOdWxsKG9wdHMuZGlyLCAtMSk7XG5cdFx0YmkgPSBiaSA9PSBudWxsID8gYmFuZHMubGVuZ3RoIDogYmk7XG5cdFx0YmFuZHMuc3BsaWNlKGJpLCAwLCBvcHRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbEJhbmQoYmkpIHtcblx0XHRpZiAoYmkgPT0gbnVsbClcblx0XHRcdGJhbmRzLmxlbmd0aCA9IDA7XG5cdFx0ZWxzZVxuXHRcdFx0YmFuZHMuc3BsaWNlKGJpLCAxKTtcblx0fVxuXG5cdHNlbGYuYWRkQmFuZCA9IGFkZEJhbmQ7XG5cdHNlbGYuc2V0QmFuZCA9IHNldEJhbmQ7XG5cdHNlbGYuZGVsQmFuZCA9IGRlbEJhbmQ7XG5cblx0ZnVuY3Rpb24gc2V0QWxwaGEoaSwgdmFsdWUpIHtcblx0XHRzZXJpZXNbaV0uYWxwaGEgPSB2YWx1ZTtcblxuXHRcdGlmIChjdXJzb3Iuc2hvdyAmJiBjdXJzb3JQdHNbaV0pXG5cdFx0XHRjdXJzb3JQdHNbaV0uc3R5bGUub3BhY2l0eSA9IHZhbHVlO1xuXG5cdFx0aWYgKHNob3dMZWdlbmQgJiYgbGVnZW5kUm93c1tpXSlcblx0XHRcdGxlZ2VuZFJvd3NbaV0uc3R5bGUub3BhY2l0eSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8geS1kaXN0YW5jZVxuXHRsZXQgY2xvc2VzdERpc3Q7XG5cdGxldCBjbG9zZXN0U2VyaWVzO1xuXHRsZXQgZm9jdXNlZFNlcmllcztcblx0Y29uc3QgRk9DVVNfVFJVRSAgPSB7Zm9jdXM6IHRydWV9O1xuXG5cdGZ1bmN0aW9uIHNldEZvY3VzKGkpIHtcblx0XHRpZiAoaSAhPSBmb2N1c2VkU2VyaWVzKSB7XG5cdFx0Ly9cdGxvZyhcInNldEZvY3VzKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdFx0bGV0IGFsbEZvY3VzZWQgPSBpID09IG51bGw7XG5cblx0XHRcdGxldCBfc2V0QWxwaGEgPSBmb2N1cy5hbHBoYSAhPSAxO1xuXG5cdFx0XHRzZXJpZXMuZm9yRWFjaCgocywgaTIpID0+IHtcblx0XHRcdFx0bGV0IGlzRm9jdXNlZCA9IGFsbEZvY3VzZWQgfHwgaTIgPT0gMCB8fCBpMiA9PSBpO1xuXHRcdFx0XHRzLl9mb2N1cyA9IGFsbEZvY3VzZWQgPyBudWxsIDogaXNGb2N1c2VkO1xuXHRcdFx0XHRfc2V0QWxwaGEgJiYgc2V0QWxwaGEoaTIsIGlzRm9jdXNlZCA/IDEgOiBmb2N1cy5hbHBoYSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9jdXNlZFNlcmllcyA9IGk7XG5cdFx0XHRfc2V0QWxwaGEgJiYgY29tbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNob3dMZWdlbmQgJiYgY3Vyc29yRm9jdXMpIHtcblx0XHRvbihtb3VzZWxlYXZlLCBsZWdlbmRFbCwgZSA9PiB7XG5cdFx0XHRpZiAoY3Vyc29yLl9sb2NrKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmIChmb2N1c2VkU2VyaWVzICE9IG51bGwpXG5cdFx0XHRcdHNldFNlcmllcyhudWxsLCBGT0NVU19UUlVFLCB0cnVlLCBzeW5jT3B0cy5zZXRTZXJpZXMpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcG9zVG9WYWwocG9zLCBzY2FsZSwgY2FuKSB7XG5cdFx0bGV0IHNjID0gc2NhbGVzW3NjYWxlXTtcblxuXHRcdGlmIChjYW4pXG5cdFx0XHRwb3MgPSBwb3MgLyBweFJhdGlvIC0gKHNjLm9yaSA9PSAxID8gcGxvdFRvcENzcyA6IHBsb3RMZnRDc3MpO1xuXG5cdFx0bGV0IGRpbSA9IHBsb3RXaWRDc3M7XG5cblx0XHRpZiAoc2Mub3JpID09IDEpIHtcblx0XHRcdGRpbSA9IHBsb3RIZ3RDc3M7XG5cdFx0XHRwb3MgPSBkaW0gLSBwb3M7XG5cdFx0fVxuXG5cdFx0aWYgKHNjLmRpciA9PSAtMSlcblx0XHRcdHBvcyA9IGRpbSAtIHBvcztcblxuXHRcdGxldCBfbWluID0gc2MuX21pbixcblx0XHRcdF9tYXggPSBzYy5fbWF4LFxuXHRcdFx0cGN0ID0gcG9zIC8gZGltO1xuXG5cdFx0bGV0IHN2ID0gX21pbiArIChfbWF4IC0gX21pbikgKiBwY3Q7XG5cblx0XHRsZXQgZGlzdHIgPSBzYy5kaXN0cjtcblxuXHRcdHJldHVybiAoXG5cdFx0XHRkaXN0ciA9PSAzID8gcG93KDEwLCBzdikgOlxuXHRcdFx0ZGlzdHIgPT0gNCA/IHNpbmgoc3YsIHNjLmFzaW5oKSA6XG5cdFx0XHRzdlxuXHRcdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZXN0SWR4RnJvbVhwb3MocG9zLCBjYW4pIHtcblx0XHRsZXQgdiA9IHBvc1RvVmFsKHBvcywgeFNjYWxlS2V5LCBjYW4pO1xuXHRcdHJldHVybiBjbG9zZXN0SWR4KHYsIGRhdGFbMF0sIGkwLCBpMSk7XG5cdH1cblxuXHRzZWxmLnZhbFRvSWR4ID0gdmFsID0+IGNsb3Nlc3RJZHgodmFsLCBkYXRhWzBdKTtcblx0c2VsZi5wb3NUb0lkeCA9IGNsb3Nlc3RJZHhGcm9tWHBvcztcblx0c2VsZi5wb3NUb1ZhbCA9IHBvc1RvVmFsO1xuXHRzZWxmLnZhbFRvUG9zID0gKHZhbCwgc2NhbGUsIGNhbikgPT4gKFxuXHRcdHNjYWxlc1tzY2FsZV0ub3JpID09IDAgP1xuXHRcdGdldEhQb3ModmFsLCBzY2FsZXNbc2NhbGVdLFxuXHRcdFx0Y2FuID8gcGxvdFdpZCA6IHBsb3RXaWRDc3MsXG5cdFx0XHRjYW4gPyBwbG90TGZ0IDogMCxcblx0XHQpIDpcblx0XHRnZXRWUG9zKHZhbCwgc2NhbGVzW3NjYWxlXSxcblx0XHRcdGNhbiA/IHBsb3RIZ3QgOiBwbG90SGd0Q3NzLFxuXHRcdFx0Y2FuID8gcGxvdFRvcCA6IDAsXG5cdFx0KVxuXHQpO1xuXG5cdC8vIGRlZmVycyBjYWxsaW5nIGV4cGVuc2l2ZSBmdW5jdGlvbnNcblx0ZnVuY3Rpb24gYmF0Y2goZm4pIHtcblx0XHRmbihzZWxmKTtcblx0XHRjb21taXQoKTtcblx0fVxuXG5cdHNlbGYuYmF0Y2ggPSBiYXRjaDtcblxuXHQoc2VsZi5zZXRDdXJzb3IgPSAob3B0cywgX2ZpcmUsIF9wdWIpID0+IHtcblx0XHRtb3VzZUxlZnQxID0gb3B0cy5sZWZ0O1xuXHRcdG1vdXNlVG9wMSA9IG9wdHMudG9wO1xuXHQvL1x0YXNzaWduKGN1cnNvciwgb3B0cyk7XG5cdFx0dXBkYXRlQ3Vyc29yKG51bGwsIF9maXJlLCBfcHViKTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gc2V0U2VsSChvZmYsIGRpbSkge1xuXHRcdHNldFN0eWxlUHgoc2VsZWN0RGl2LCBMRUZULCAgc2VsZWN0LmxlZnQgPSBvZmYpO1xuXHRcdHNldFN0eWxlUHgoc2VsZWN0RGl2LCBXSURUSCwgc2VsZWN0LndpZHRoID0gZGltKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNlbFYob2ZmLCBkaW0pIHtcblx0XHRzZXRTdHlsZVB4KHNlbGVjdERpdiwgVE9QLCAgICBzZWxlY3QudG9wID0gb2ZmKTtcblx0XHRzZXRTdHlsZVB4KHNlbGVjdERpdiwgSEVJR0hULCBzZWxlY3QuaGVpZ2h0ID0gZGltKTtcblx0fVxuXG5cdGxldCBzZXRTZWxYID0gc2NhbGVYLm9yaSA9PSAwID8gc2V0U2VsSCA6IHNldFNlbFY7XG5cdGxldCBzZXRTZWxZID0gc2NhbGVYLm9yaSA9PSAxID8gc2V0U2VsSCA6IHNldFNlbFY7XG5cblx0ZnVuY3Rpb24gc3luY0xlZ2VuZCgpIHtcblx0XHRpZiAoc2hvd0xlZ2VuZCAmJiBsZWdlbmQubGl2ZSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IG1vZGUgPT0gMiA/IDEgOiAwOyBpIDwgc2VyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChpID09IDAgJiYgbXVsdGlWYWxMZWdlbmQpXG5cdFx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdFx0bGV0IHZhbHMgPSBsZWdlbmQudmFsdWVzW2ldO1xuXG5cdFx0XHRcdGxldCBqID0gMDtcblxuXHRcdFx0XHRmb3IgKGxldCBrIGluIHZhbHMpXG5cdFx0XHRcdFx0bGVnZW5kQ2VsbHNbaV1baisrXS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZhbHNba107XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TGVnZW5kKG9wdHMsIF9maXJlKSB7XG5cdFx0aWYgKG9wdHMgIT0gbnVsbCkge1xuXHRcdFx0aWYgKG9wdHMuaWR4cykge1xuXHRcdFx0XHRvcHRzLmlkeHMuZm9yRWFjaCgoZGlkeCwgc2lkeCkgPT4ge1xuXHRcdFx0XHRcdGFjdGl2ZUlkeHNbc2lkeF0gPSBkaWR4O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCFpc1VuZGVmKG9wdHMuaWR4KSlcblx0XHRcdFx0YWN0aXZlSWR4cy5maWxsKG9wdHMuaWR4KTtcblxuXHRcdFx0bGVnZW5kLmlkeCA9IGFjdGl2ZUlkeHNbMF07XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgc2lkeCA9IDA7IHNpZHggPCBzZXJpZXMubGVuZ3RoOyBzaWR4KyspIHtcblx0XHRcdGlmIChzaWR4ID4gMCB8fCBtb2RlID09IDEgJiYgIW11bHRpVmFsTGVnZW5kKVxuXHRcdFx0XHRzZXRMZWdlbmRWYWx1ZXMoc2lkeCwgYWN0aXZlSWR4c1tzaWR4XSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3dMZWdlbmQgJiYgbGVnZW5kLmxpdmUpXG5cdFx0XHRzeW5jTGVnZW5kKCk7XG5cblx0XHRzaG91bGRTZXRMZWdlbmQgPSBmYWxzZTtcblxuXHRcdF9maXJlICE9PSBmYWxzZSAmJiBmaXJlKFwic2V0TGVnZW5kXCIpO1xuXHR9XG5cblx0c2VsZi5zZXRMZWdlbmQgPSBzZXRMZWdlbmQ7XG5cblx0ZnVuY3Rpb24gc2V0TGVnZW5kVmFsdWVzKHNpZHgsIGlkeCkge1xuXHRcdGxldCBzID0gc2VyaWVzW3NpZHhdO1xuXHRcdGxldCBzcmMgPSBzaWR4ID09IDAgJiYgeFNjYWxlRGlzdHIgPT0gMiA/IGRhdGEwIDogZGF0YVtzaWR4XTtcblx0XHRsZXQgdmFsO1xuXG5cdFx0aWYgKG11bHRpVmFsTGVnZW5kKVxuXHRcdFx0dmFsID0gcy52YWx1ZXMoc2VsZiwgc2lkeCwgaWR4KSA/PyBOVUxMX0xFR0VORF9WQUxVRVM7XG5cdFx0ZWxzZSB7XG5cdFx0XHR2YWwgPSBzLnZhbHVlKHNlbGYsIGlkeCA9PSBudWxsID8gbnVsbCA6IHNyY1tpZHhdLCBzaWR4LCBpZHgpO1xuXHRcdFx0dmFsID0gdmFsID09IG51bGwgPyBOVUxMX0xFR0VORF9WQUxVRVMgOiB7XzogdmFsfTtcblx0XHR9XG5cblx0XHRsZWdlbmQudmFsdWVzW3NpZHhdID0gdmFsO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ3Vyc29yKHNyYywgX2ZpcmUsIF9wdWIpIHtcblx0Ly9cdHRzID09IG51bGwgJiYgbG9nKFwidXBkYXRlQ3Vyc29yKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdHJhd01vdXNlTGVmdDEgPSBtb3VzZUxlZnQxO1xuXHRcdHJhd01vdXNlVG9wMSA9IG1vdXNlVG9wMTtcblxuXHRcdFttb3VzZUxlZnQxLCBtb3VzZVRvcDFdID0gY3Vyc29yLm1vdmUoc2VsZiwgbW91c2VMZWZ0MSwgbW91c2VUb3AxKTtcblxuXHRcdGlmIChjdXJzb3Iuc2hvdykge1xuXHRcdFx0dkN1cnNvciAmJiBlbFRyYW5zKHZDdXJzb3IsIHJvdW5kKG1vdXNlTGVmdDEpLCAwLCBwbG90V2lkQ3NzLCBwbG90SGd0Q3NzKTtcblx0XHRcdGhDdXJzb3IgJiYgZWxUcmFucyhoQ3Vyc29yLCAwLCByb3VuZChtb3VzZVRvcDEpLCBwbG90V2lkQ3NzLCBwbG90SGd0Q3NzKTtcblx0XHR9XG5cblx0XHRsZXQgaWR4O1xuXG5cdFx0Ly8gd2hlbiB6b29taW5nIHRvIGFuIHggc2NhbGUgcmFuZ2UgYmV0d2VlbiBkYXRhcG9pbnRzIHRoZSBiaW5hcnkgc2VhcmNoXG5cdFx0Ly8gZm9yIG5lYXJlc3QgbWluL21heCBpbmRpY2VzIHJlc3VsdHMgaW4gdGhpcyBjb25kaXRpb24uIGNoZWFwIGhhY2sgOkRcblx0XHRsZXQgbm9EYXRhSW5SYW5nZSA9IGkwID4gaTE7IC8vIHdvcmtzIGZvciBtb2RlIDEgb25seVxuXG5cdFx0Y2xvc2VzdERpc3QgPSBpbmY7XG5cblx0XHQvLyBUT0RPOiBleHRyYWN0XG5cdFx0bGV0IHhEaW0gPSBzY2FsZVgub3JpID09IDAgPyBwbG90V2lkQ3NzIDogcGxvdEhndENzcztcblx0XHRsZXQgeURpbSA9IHNjYWxlWC5vcmkgPT0gMSA/IHBsb3RXaWRDc3MgOiBwbG90SGd0Q3NzO1xuXG5cdFx0Ly8gaWYgY3Vyc29yIGhpZGRlbiwgaGlkZSBwb2ludHMgJiBjbGVhciBsZWdlbmQgdmFsc1xuXHRcdGlmIChtb3VzZUxlZnQxIDwgMCB8fCBkYXRhTGVuID09IDAgfHwgbm9EYXRhSW5SYW5nZSkge1xuXHRcdFx0aWR4ID0gbnVsbDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0Y3Vyc29yUHRzLmxlbmd0aCA+IDEgJiYgZWxUcmFucyhjdXJzb3JQdHNbaV0sIC0xMCwgLTEwLCBwbG90V2lkQ3NzLCBwbG90SGd0Q3NzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3Vyc29yRm9jdXMpXG5cdFx0XHRcdHNldFNlcmllcyhudWxsLCBGT0NVU19UUlVFLCB0cnVlLCBzcmMgPT0gbnVsbCAmJiBzeW5jT3B0cy5zZXRTZXJpZXMpO1xuXG5cdFx0XHRpZiAobGVnZW5kLmxpdmUpIHtcblx0XHRcdFx0YWN0aXZlSWR4cy5maWxsKGlkeCk7XG5cdFx0XHRcdHNob3VsZFNldExlZ2VuZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdC8vXHRsZXQgcGN0WSA9IDEgLSAoeSAvIHJlY3QuaGVpZ2h0KTtcblxuXHRcdFx0bGV0IG1vdXNlWFBvcywgdmFsQXRQb3NYLCB4UG9zO1xuXG5cdFx0XHRpZiAobW9kZSA9PSAxKSB7XG5cdFx0XHRcdG1vdXNlWFBvcyA9IHNjYWxlWC5vcmkgPT0gMCA/IG1vdXNlTGVmdDEgOiBtb3VzZVRvcDE7XG5cdFx0XHRcdHZhbEF0UG9zWCA9IHBvc1RvVmFsKG1vdXNlWFBvcywgeFNjYWxlS2V5KTtcblx0XHRcdFx0aWR4ID0gY2xvc2VzdElkeCh2YWxBdFBvc1gsIGRhdGFbMF0sIGkwLCBpMSk7XG5cdFx0XHRcdHhQb3MgPSB2YWxUb1Bvc1goZGF0YVswXVtpZHhdLCBzY2FsZVgsIHhEaW0sIDApO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gbW9kZSA9PSAyID8gMSA6IDA7IGkgPCBzZXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHMgPSBzZXJpZXNbaV07XG5cblx0XHRcdFx0bGV0IGlkeDEgID0gYWN0aXZlSWR4c1tpXTtcblx0XHRcdFx0bGV0IHlWYWwxID0gbW9kZSA9PSAxID8gZGF0YVtpXVtpZHgxXSA6IGRhdGFbaV1bMV1baWR4MV07XG5cblx0XHRcdFx0bGV0IGlkeDIgID0gY3Vyc29yLmRhdGFJZHgoc2VsZiwgaSwgaWR4LCB2YWxBdFBvc1gpO1xuXHRcdFx0XHRsZXQgeVZhbDIgPSBtb2RlID09IDEgPyBkYXRhW2ldW2lkeDJdIDogZGF0YVtpXVsxXVtpZHgyXTtcblxuXHRcdFx0XHRzaG91bGRTZXRMZWdlbmQgPSBzaG91bGRTZXRMZWdlbmQgfHwgeVZhbDIgIT0geVZhbDEgfHwgaWR4MiAhPSBpZHgxO1xuXG5cdFx0XHRcdGFjdGl2ZUlkeHNbaV0gPSBpZHgyO1xuXG5cdFx0XHRcdGxldCB4UG9zMiA9IGluY3JSb3VuZFVwKGlkeDIgPT0gaWR4ID8geFBvcyA6IHZhbFRvUG9zWChtb2RlID09IDEgPyBkYXRhWzBdW2lkeDJdIDogZGF0YVtpXVswXVtpZHgyXSwgc2NhbGVYLCB4RGltLCAwKSwgMSk7XG5cblx0XHRcdFx0aWYgKGkgPiAwICYmIHMuc2hvdykge1xuXHRcdFx0XHRcdGxldCB5UG9zID0geVZhbDIgPT0gbnVsbCA/IC0xMCA6IGluY3JSb3VuZFVwKHZhbFRvUG9zWSh5VmFsMiwgbW9kZSA9PSAxID8gc2NhbGVzW3Muc2NhbGVdIDogc2NhbGVzW3MuZmFjZXRzWzFdLnNjYWxlXSwgeURpbSwgMCksIDEpO1xuXG5cdFx0XHRcdFx0aWYgKGN1cnNvckZvY3VzICYmIHlQb3MgPj0gMCAmJiBtb2RlID09IDEpIHtcblx0XHRcdFx0XHRcdGxldCBkaXN0ID0gYWJzKHlQb3MgLSBtb3VzZVRvcDEpO1xuXHRcdFx0XHRcdFx0bGV0IGJpYXMgPSBmb2N1cy5iaWFzO1xuXG5cdFx0XHRcdFx0XHRpZiAoYmlhcyAhPSAwKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtb3VzZVlQb3MgPSBzY2FsZVgub3JpID09IDEgPyBtb3VzZUxlZnQxIDogbW91c2VUb3AxO1xuXHRcdFx0XHRcdFx0XHRsZXQgbW91c2VZVmFsID0gcG9zVG9WYWwobW91c2VZUG9zLCBzLnNjYWxlKTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgc2VyaWVzWVZhbFNpZ24gPSB5VmFsMiAgICAgPj0gMCA/IDEgOiAtMTtcblx0XHRcdFx0XHRcdFx0bGV0IG1vdXNlWVZhbFNpZ24gID0gbW91c2VZVmFsID49IDAgPyAxIDogLTE7XG5cblx0XHRcdFx0XHRcdFx0Ly8gd2l0aCBhIGZvY3VzIGJpYXMsIHdlIHdpbGwgbmV2ZXIgY3Jvc3MgemVybyB3aGVuIHByb3ggdGVzdGluZ1xuXHRcdFx0XHRcdFx0XHQvLyBpdCdzIGVpdGhlciBjbG9zZXN0IHRvd2FyZHMgemVybywgb3IgY2xvc2VzdCBhd2F5IGZyb20gemVyb1xuXHRcdFx0XHRcdFx0XHRpZiAobW91c2VZVmFsU2lnbiA9PSBzZXJpZXNZVmFsU2lnbikge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3QgPCBjbG9zZXN0RGlzdFxuXHRcdFx0XHRcdFx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3VzZVlWYWxTaWduID09IDEgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdChiaWFzID09IDEgPyB5VmFsMiA+PSBtb3VzZVlWYWwgOiB5VmFsMiA8PSBtb3VzZVlWYWwpIDogIC8vID49IDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoYmlhcyA9PSAxID8geVZhbDIgPD0gbW91c2VZVmFsIDogeVZhbDIgPj0gbW91c2VZVmFsKSAgICAvLyAgPCAwXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9zZXN0U2VyaWVzID0gaTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHRcdFx0XHRcdGNsb3Nlc3RTZXJpZXMgPSBpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGhQb3MsIHZQb3M7XG5cblx0XHRcdFx0XHRpZiAoc2NhbGVYLm9yaSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRoUG9zID0geFBvczI7XG5cdFx0XHRcdFx0XHR2UG9zID0geVBvcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRoUG9zID0geVBvcztcblx0XHRcdFx0XHRcdHZQb3MgPSB4UG9zMjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc2hvdWxkU2V0TGVnZW5kICYmIGN1cnNvclB0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRlbENvbG9yKGN1cnNvclB0c1tpXSwgY3Vyc29yLnBvaW50cy5maWxsKHNlbGYsIGkpLCBjdXJzb3IucG9pbnRzLnN0cm9rZShzZWxmLCBpKSk7XG5cblx0XHRcdFx0XHRcdGxldCBwdFdpZCwgcHRIZ3QsIHB0TGZ0LCBwdFRvcCxcblx0XHRcdFx0XHRcdFx0Y2VudGVyZWQgPSB0cnVlLFxuXHRcdFx0XHRcdFx0XHRnZXRCQm94ID0gY3Vyc29yLnBvaW50cy5iYm94O1xuXG5cdFx0XHRcdFx0XHRpZiAoZ2V0QkJveCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGNlbnRlcmVkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdFx0bGV0IGJib3ggPSBnZXRCQm94KHNlbGYsIGkpO1xuXG5cdFx0XHRcdFx0XHRcdHB0TGZ0ID0gYmJveC5sZWZ0O1xuXHRcdFx0XHRcdFx0XHRwdFRvcCA9IGJib3gudG9wO1xuXHRcdFx0XHRcdFx0XHRwdFdpZCA9IGJib3gud2lkdGg7XG5cdFx0XHRcdFx0XHRcdHB0SGd0ID0gYmJveC5oZWlnaHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0cHRMZnQgPSBoUG9zO1xuXHRcdFx0XHRcdFx0XHRwdFRvcCA9IHZQb3M7XG5cdFx0XHRcdFx0XHRcdHB0V2lkID0gcHRIZ3QgPSBjdXJzb3IucG9pbnRzLnNpemUoc2VsZiwgaSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGVsU2l6ZShjdXJzb3JQdHNbaV0sIHB0V2lkLCBwdEhndCwgY2VudGVyZWQpO1xuXHRcdFx0XHRcdFx0ZWxUcmFucyhjdXJzb3JQdHNbaV0sIHB0TGZ0LCBwdFRvcCwgcGxvdFdpZENzcywgcGxvdEhndENzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y3Vyc29yLmlkeCA9IGlkeDtcblx0XHRjdXJzb3IubGVmdCA9IG1vdXNlTGVmdDE7XG5cdFx0Y3Vyc29yLnRvcCA9IG1vdXNlVG9wMTtcblxuXHRcdGlmIChzaG91bGRTZXRMZWdlbmQpIHtcblx0XHRcdGxlZ2VuZC5pZHggPSBpZHg7XG5cdFx0XHRzZXRMZWdlbmQoKTtcblx0XHR9XG5cblx0XHQvLyBuaXQ6IGN1cnNvci5kcmFnLnNldFNlbGVjdCBpcyBhc3N1bWVkIGFsd2F5cyB0cnVlXG5cdFx0aWYgKHNlbGVjdC5zaG93ICYmIGRyYWdnaW5nKSB7XG5cdFx0XHRpZiAoc3JjICE9IG51bGwpIHtcblx0XHRcdFx0bGV0IFt4S2V5LCB5S2V5XSA9IHN5bmNPcHRzLnNjYWxlcztcblx0XHRcdFx0bGV0IFttYXRjaFhLZXlzLCBtYXRjaFlLZXlzXSA9IHN5bmNPcHRzLm1hdGNoO1xuXHRcdFx0XHRsZXQgW3hLZXlTcmMsIHlLZXlTcmNdID0gc3JjLmN1cnNvci5zeW5jLnNjYWxlcztcblxuXHRcdFx0XHQvLyBtYXRjaCB0aGUgZHJhZ1gvZHJhZ1kgaW1wbGljaXRuZXNzL2V4cGxpY2l0bmVzcyBvZiBzcmNcblx0XHRcdFx0bGV0IHNkcmFnID0gc3JjLmN1cnNvci5kcmFnO1xuXHRcdFx0XHRkcmFnWCA9IHNkcmFnLl94O1xuXHRcdFx0XHRkcmFnWSA9IHNkcmFnLl95O1xuXG5cdFx0XHRcdGlmIChkcmFnWCB8fCBkcmFnWSkge1xuXHRcdFx0XHRcdGxldCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gc3JjLnNlbGVjdDtcblxuXHRcdFx0XHRcdGxldCBzb3JpID0gc3JjLnNjYWxlc1t4S2V5XS5vcmk7XG5cdFx0XHRcdFx0bGV0IHNQb3NUb1ZhbCA9IHNyYy5wb3NUb1ZhbDtcblxuXHRcdFx0XHRcdGxldCBzT2ZmLCBzRGltLCBzYywgYSwgYjtcblxuXHRcdFx0XHRcdGxldCBtYXRjaGluZ1ggPSB4S2V5ICE9IG51bGwgJiYgbWF0Y2hYS2V5cyh4S2V5LCB4S2V5U3JjKTtcblx0XHRcdFx0XHRsZXQgbWF0Y2hpbmdZID0geUtleSAhPSBudWxsICYmIG1hdGNoWUtleXMoeUtleSwgeUtleVNyYyk7XG5cblx0XHRcdFx0XHRpZiAobWF0Y2hpbmdYICYmIGRyYWdYKSB7XG5cdFx0XHRcdFx0XHRpZiAoc29yaSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHNPZmYgPSBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRzRGltID0gd2lkdGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0c09mZiA9IHRvcDtcblx0XHRcdFx0XHRcdFx0c0RpbSA9IGhlaWdodDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c2MgPSBzY2FsZXNbeEtleV07XG5cblx0XHRcdFx0XHRcdGEgPSB2YWxUb1Bvc1goc1Bvc1RvVmFsKHNPZmYsIHhLZXlTcmMpLCAgICAgICAgc2MsIHhEaW0sIDApO1xuXHRcdFx0XHRcdFx0YiA9IHZhbFRvUG9zWChzUG9zVG9WYWwoc09mZiArIHNEaW0sIHhLZXlTcmMpLCBzYywgeERpbSwgMCk7XG5cblx0XHRcdFx0XHRcdHNldFNlbFgobWluKGEsYiksIGFicyhiLWEpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0c2V0U2VsWCgwLCB4RGltKTtcblxuXHRcdFx0XHRcdGlmIChtYXRjaGluZ1kgJiYgZHJhZ1kpIHtcblx0XHRcdFx0XHRcdGlmIChzb3JpID09IDEpIHtcblx0XHRcdFx0XHRcdFx0c09mZiA9IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdHNEaW0gPSB3aWR0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzT2ZmID0gdG9wO1xuXHRcdFx0XHRcdFx0XHRzRGltID0gaGVpZ2h0O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzYyA9IHNjYWxlc1t5S2V5XTtcblxuXHRcdFx0XHRcdFx0YSA9IHZhbFRvUG9zWShzUG9zVG9WYWwoc09mZiwgeUtleVNyYyksICAgICAgICBzYywgeURpbSwgMCk7XG5cdFx0XHRcdFx0XHRiID0gdmFsVG9Qb3NZKHNQb3NUb1ZhbChzT2ZmICsgc0RpbSwgeUtleVNyYyksIHNjLCB5RGltLCAwKTtcblxuXHRcdFx0XHRcdFx0c2V0U2VsWShtaW4oYSxiKSwgYWJzKGItYSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRzZXRTZWxZKDAsIHlEaW0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRoaWRlU2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bGV0IHJhd0RYID0gYWJzKHJhd01vdXNlTGVmdDEgLSByYXdNb3VzZUxlZnQwKTtcblx0XHRcdFx0bGV0IHJhd0RZID0gYWJzKHJhd01vdXNlVG9wMSAtIHJhd01vdXNlVG9wMCk7XG5cblx0XHRcdFx0aWYgKHNjYWxlWC5vcmkgPT0gMSkge1xuXHRcdFx0XHRcdGxldCBfcmF3RFggPSByYXdEWDtcblx0XHRcdFx0XHRyYXdEWCA9IHJhd0RZO1xuXHRcdFx0XHRcdHJhd0RZID0gX3Jhd0RYO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZHJhZ1ggPSBkcmFnLnggJiYgcmF3RFggPj0gZHJhZy5kaXN0O1xuXHRcdFx0XHRkcmFnWSA9IGRyYWcueSAmJiByYXdEWSA+PSBkcmFnLmRpc3Q7XG5cblx0XHRcdFx0bGV0IHVuaSA9IGRyYWcudW5pO1xuXG5cdFx0XHRcdGlmICh1bmkgIT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIG9ubHkgY2FsYyBkcmFnIHN0YXR1cyBpZiB0aGV5IHBhc3MgdGhlIGRpc3QgdGhyZXNoXG5cdFx0XHRcdFx0aWYgKGRyYWdYICYmIGRyYWdZKSB7XG5cdFx0XHRcdFx0XHRkcmFnWCA9IHJhd0RYID49IHVuaTtcblx0XHRcdFx0XHRcdGRyYWdZID0gcmF3RFkgPj0gdW5pO1xuXG5cdFx0XHRcdFx0XHQvLyBmb3JjZSB1bmlkaXJlY3Rpb25hbGl0eSB3aGVuIGJvdGggYXJlIHVuZGVyIHVuaSBsaW1pdFxuXHRcdFx0XHRcdFx0aWYgKCFkcmFnWCAmJiAhZHJhZ1kpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHJhd0RZID4gcmF3RFgpXG5cdFx0XHRcdFx0XHRcdFx0ZHJhZ1kgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZHJhZ1ggPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChkcmFnLnggJiYgZHJhZy55ICYmIChkcmFnWCB8fCBkcmFnWSkpXG5cdFx0XHRcdFx0Ly8gaWYgb21uaSB3aXRoIG5vIHVuaSB0aGVuIGJvdGggZHJhZ1ggLyBkcmFnWSBzaG91bGQgYmUgdHJ1ZSBpZiBlaXRoZXIgaXMgdHJ1ZVxuXHRcdFx0XHRcdGRyYWdYID0gZHJhZ1kgPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBwMCwgcDE7XG5cblx0XHRcdFx0aWYgKGRyYWdYKSB7XG5cdFx0XHRcdFx0aWYgKHNjYWxlWC5vcmkgPT0gMCkge1xuXHRcdFx0XHRcdFx0cDAgPSBtb3VzZUxlZnQwO1xuXHRcdFx0XHRcdFx0cDEgPSBtb3VzZUxlZnQxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHAwID0gbW91c2VUb3AwO1xuXHRcdFx0XHRcdFx0cDEgPSBtb3VzZVRvcDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2V0U2VsWChtaW4ocDAsIHAxKSwgYWJzKHAxIC0gcDApKTtcblxuXHRcdFx0XHRcdGlmICghZHJhZ1kpXG5cdFx0XHRcdFx0XHRzZXRTZWxZKDAsIHlEaW0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRyYWdZKSB7XG5cdFx0XHRcdFx0aWYgKHNjYWxlWC5vcmkgPT0gMSkge1xuXHRcdFx0XHRcdFx0cDAgPSBtb3VzZUxlZnQwO1xuXHRcdFx0XHRcdFx0cDEgPSBtb3VzZUxlZnQxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHAwID0gbW91c2VUb3AwO1xuXHRcdFx0XHRcdFx0cDEgPSBtb3VzZVRvcDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2V0U2VsWShtaW4ocDAsIHAxKSwgYWJzKHAxIC0gcDApKTtcblxuXHRcdFx0XHRcdGlmICghZHJhZ1gpXG5cdFx0XHRcdFx0XHRzZXRTZWxYKDAsIHhEaW0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdGhlIGRyYWcgZGlkbid0IHBhc3MgdGhlIGRpc3QgcmVxdWlyZW1lbnRcblx0XHRcdFx0aWYgKCFkcmFnWCAmJiAhZHJhZ1kpIHtcblx0XHRcdFx0XHRzZXRTZWxYKDAsIDApO1xuXHRcdFx0XHRcdHNldFNlbFkoMCwgMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRkcmFnLl94ID0gZHJhZ1g7XG5cdFx0ZHJhZy5feSA9IGRyYWdZO1xuXG5cdFx0aWYgKHNyYyA9PSBudWxsKSB7XG5cdFx0XHRpZiAoX3B1Yikge1xuXHRcdFx0XHRpZiAoc3luY0tleSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0bGV0IFt4U3luY0tleSwgeVN5bmNLZXldID0gc3luY09wdHMuc2NhbGVzO1xuXG5cdFx0XHRcdFx0c3luY09wdHMudmFsdWVzWzBdID0geFN5bmNLZXkgIT0gbnVsbCA/IHBvc1RvVmFsKHNjYWxlWC5vcmkgPT0gMCA/IG1vdXNlTGVmdDEgOiBtb3VzZVRvcDEsIHhTeW5jS2V5KSA6IG51bGw7XG5cdFx0XHRcdFx0c3luY09wdHMudmFsdWVzWzFdID0geVN5bmNLZXkgIT0gbnVsbCA/IHBvc1RvVmFsKHNjYWxlWC5vcmkgPT0gMSA/IG1vdXNlTGVmdDEgOiBtb3VzZVRvcDEsIHlTeW5jS2V5KSA6IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwdWJTeW5jKG1vdXNlbW92ZSwgc2VsZiwgbW91c2VMZWZ0MSwgbW91c2VUb3AxLCBwbG90V2lkQ3NzLCBwbG90SGd0Q3NzLCBpZHgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3Vyc29yRm9jdXMpIHtcblx0XHRcdFx0bGV0IHNob3VsZFB1YiA9IF9wdWIgJiYgc3luY09wdHMuc2V0U2VyaWVzO1xuXHRcdFx0XHRsZXQgcCA9IGZvY3VzLnByb3g7XG5cblx0XHRcdFx0aWYgKGZvY3VzZWRTZXJpZXMgPT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChjbG9zZXN0RGlzdCA8PSBwKVxuXHRcdFx0XHRcdFx0c2V0U2VyaWVzKGNsb3Nlc3RTZXJpZXMsIEZPQ1VTX1RSVUUsIHRydWUsIHNob3VsZFB1Yik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGNsb3Nlc3REaXN0ID4gcClcblx0XHRcdFx0XHRcdHNldFNlcmllcyhudWxsLCBGT0NVU19UUlVFLCB0cnVlLCBzaG91bGRQdWIpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGNsb3Nlc3RTZXJpZXMgIT0gZm9jdXNlZFNlcmllcylcblx0XHRcdFx0XHRcdHNldFNlcmllcyhjbG9zZXN0U2VyaWVzLCBGT0NVU19UUlVFLCB0cnVlLCBzaG91bGRQdWIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X2ZpcmUgIT09IGZhbHNlICYmIGZpcmUoXCJzZXRDdXJzb3JcIik7XG5cdH1cblxuXHRsZXQgcmVjdCA9IG51bGw7XG5cblx0ZnVuY3Rpb24gc3luY1JlY3QoZGVmZXIpIHtcblx0XHRpZiAoZGVmZXIgPT09IHRydWUpXG5cdFx0XHRyZWN0ID0gbnVsbDtcblx0XHRlbHNlIHtcblx0XHRcdHJlY3QgPSBvdmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0ZmlyZShcInN5bmNSZWN0XCIsIHJlY3QpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlTW92ZShlLCBzcmMsIF9sLCBfdCwgX3csIF9oLCBfaSkge1xuXHRcdGlmIChjdXJzb3IuX2xvY2spXG5cdFx0XHRyZXR1cm47XG5cblx0XHQvLyBDaHJvbWUgb24gV2luZG93cyBoYXMgYSBidWcgd2hpY2ggdHJpZ2dlcnMgYSBzdHJheSBtb3VzZW1vdmUgZXZlbnQgYWZ0ZXIgYW4gaW5pdGlhbCBtb3VzZWRvd24gZXZlbnRcblx0XHQvLyB3aGVuIGNsaWNraW5nIGludG8gYSBwbG90IGFzIHBhcnQgb2YgcmUtZm9jdXNpbmcgdGhlIGJyb3dzZXIgd2luZG93LlxuXHRcdC8vIHdlIGdvdHRhIGlnbm9yZSBpdCB0byBhdm9pZCB0cmlnZ2VyaW5nIGEgcGhhbnRvbSBkcmFnIC8gc2V0U2VsZWN0XG5cdFx0Ly8gSG93ZXZlciwgb24gdG91Y2gtb25seSBkZXZpY2VzIENocm9tZS1iYXNlZCBicm93c2VycyB0cmlnZ2VyIGEgMC1kaXN0YW5jZSBtb3VzZW1vdmUgYmVmb3JlIG1vdXNlZG93blxuXHRcdC8vIHNvIHdlIGRvbid0IGlnbm9yZSBpdCB3aGVuIG1vdXNlZG93biBoYXMgc2V0IHRoZSBkcmFnZ2luZyBmbGFnXG5cdFx0aWYgKGRyYWdnaW5nICYmIGUgIT0gbnVsbCAmJiBlLm1vdmVtZW50WCA9PSAwICYmIGUubW92ZW1lbnRZID09IDApXG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYWNoZU1vdXNlKGUsIHNyYywgX2wsIF90LCBfdywgX2gsIF9pLCBmYWxzZSwgZSAhPSBudWxsKTtcblxuXHRcdGlmIChlICE9IG51bGwpXG5cdFx0XHR1cGRhdGVDdXJzb3IobnVsbCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dXBkYXRlQ3Vyc29yKHNyYywgdHJ1ZSwgZmFsc2UpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FjaGVNb3VzZShlLCBzcmMsIF9sLCBfdCwgX3csIF9oLCBfaSwgaW5pdGlhbCwgc25hcCkge1xuXHRcdGlmIChyZWN0ID09IG51bGwpXG5cdFx0XHRzeW5jUmVjdChmYWxzZSk7XG5cblx0XHRpZiAoZSAhPSBudWxsKSB7XG5cdFx0XHRfbCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcblx0XHRcdF90ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKF9sIDwgMCB8fCBfdCA8IDApIHtcblx0XHRcdFx0bW91c2VMZWZ0MSA9IC0xMDtcblx0XHRcdFx0bW91c2VUb3AxID0gLTEwO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBbeEtleSwgeUtleV0gPSBzeW5jT3B0cy5zY2FsZXM7XG5cblx0XHRcdGxldCBzeW5jT3B0c1NyYyA9IHNyYy5jdXJzb3Iuc3luYztcblx0XHRcdGxldCBbeFZhbFNyYywgeVZhbFNyY10gPSBzeW5jT3B0c1NyYy52YWx1ZXM7XG5cdFx0XHRsZXQgW3hLZXlTcmMsIHlLZXlTcmNdID0gc3luY09wdHNTcmMuc2NhbGVzO1xuXHRcdFx0bGV0IFttYXRjaFhLZXlzLCBtYXRjaFlLZXlzXSA9IHN5bmNPcHRzLm1hdGNoO1xuXG5cdFx0XHRsZXQgcm90U3JjID0gc3JjLmF4ZXNbMF0uc2lkZSAlIDIgPT0gMTtcblxuXHRcdFx0bGV0IHhEaW0gPSBzY2FsZVgub3JpID09IDAgPyBwbG90V2lkQ3NzIDogcGxvdEhndENzcyxcblx0XHRcdFx0eURpbSA9IHNjYWxlWC5vcmkgPT0gMSA/IHBsb3RXaWRDc3MgOiBwbG90SGd0Q3NzLFxuXHRcdFx0XHRfeERpbSA9IHJvdFNyYyA/IF9oIDogX3csXG5cdFx0XHRcdF95RGltID0gcm90U3JjID8gX3cgOiBfaCxcblx0XHRcdFx0X3hQb3MgPSByb3RTcmMgPyBfdCA6IF9sLFxuXHRcdFx0XHRfeVBvcyA9IHJvdFNyYyA/IF9sIDogX3Q7XG5cblx0XHRcdGlmICh4S2V5U3JjICE9IG51bGwpXG5cdFx0XHRcdF9sID0gbWF0Y2hYS2V5cyh4S2V5LCB4S2V5U3JjKSA/IGdldFBvcyh4VmFsU3JjLCBzY2FsZXNbeEtleV0sIHhEaW0sIDApIDogLTEwO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRfbCA9IHhEaW0gKiAoX3hQb3MvX3hEaW0pO1xuXG5cdFx0XHRpZiAoeUtleVNyYyAhPSBudWxsKVxuXHRcdFx0XHRfdCA9IG1hdGNoWUtleXMoeUtleSwgeUtleVNyYykgPyBnZXRQb3MoeVZhbFNyYywgc2NhbGVzW3lLZXldLCB5RGltLCAwKSA6IC0xMDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0X3QgPSB5RGltICogKF95UG9zL195RGltKTtcblxuXHRcdFx0aWYgKHNjYWxlWC5vcmkgPT0gMSkge1xuXHRcdFx0XHRsZXQgX19sID0gX2w7XG5cdFx0XHRcdF9sID0gX3Q7XG5cdFx0XHRcdF90ID0gX19sO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzbmFwKSB7XG5cdFx0XHRpZiAoX2wgPD0gMSB8fCBfbCA+PSBwbG90V2lkQ3NzIC0gMSlcblx0XHRcdFx0X2wgPSBpbmNyUm91bmQoX2wsIHBsb3RXaWRDc3MpO1xuXG5cdFx0XHRpZiAoX3QgPD0gMSB8fCBfdCA+PSBwbG90SGd0Q3NzIC0gMSlcblx0XHRcdFx0X3QgPSBpbmNyUm91bmQoX3QsIHBsb3RIZ3RDc3MpO1xuXHRcdH1cblxuXHRcdGlmIChpbml0aWFsKSB7XG5cdFx0XHRyYXdNb3VzZUxlZnQwID0gX2w7XG5cdFx0XHRyYXdNb3VzZVRvcDAgPSBfdDtcblxuXHRcdFx0W21vdXNlTGVmdDAsIG1vdXNlVG9wMF0gPSBjdXJzb3IubW92ZShzZWxmLCBfbCwgX3QpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdG1vdXNlTGVmdDEgPSBfbDtcblx0XHRcdG1vdXNlVG9wMSA9IF90O1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IF9oaWRlUHJvcHMgPSB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0dG9wOiAwLFxuXHR9O1xuXG5cdGZ1bmN0aW9uIGhpZGVTZWxlY3QoKSB7XG5cdFx0c2V0U2VsZWN0KF9oaWRlUHJvcHMsIGZhbHNlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlRG93bihlLCBzcmMsIF9sLCBfdCwgX3csIF9oLCBfaSkge1xuXHRcdGRyYWdnaW5nID0gdHJ1ZTtcblx0XHRkcmFnWCA9IGRyYWdZID0gZHJhZy5feCA9IGRyYWcuX3kgPSBmYWxzZTtcblxuXHRcdGNhY2hlTW91c2UoZSwgc3JjLCBfbCwgX3QsIF93LCBfaCwgX2ksIHRydWUsIGZhbHNlKTtcblxuXHRcdGlmIChlICE9IG51bGwpIHtcblx0XHRcdG9uTW91c2UobW91c2V1cCwgZG9jLCBtb3VzZVVwKTtcblx0XHRcdHB1YlN5bmMobW91c2Vkb3duLCBzZWxmLCBtb3VzZUxlZnQwLCBtb3VzZVRvcDAsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MsIG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlVXAoZSwgc3JjLCBfbCwgX3QsIF93LCBfaCwgX2kpIHtcblx0XHRkcmFnZ2luZyA9IGRyYWcuX3ggPSBkcmFnLl95ID0gZmFsc2U7XG5cblx0XHRjYWNoZU1vdXNlKGUsIHNyYywgX2wsIF90LCBfdywgX2gsIF9pLCBmYWxzZSwgdHJ1ZSk7XG5cblx0XHRsZXQgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IHNlbGVjdDtcblxuXHRcdGxldCBoYXNTZWxlY3QgPSB3aWR0aCA+IDAgfHwgaGVpZ2h0ID4gMDtcblxuXHRcdGhhc1NlbGVjdCAmJiBzZXRTZWxlY3Qoc2VsZWN0KTtcblxuXHRcdGlmIChkcmFnLnNldFNjYWxlICYmIGhhc1NlbGVjdCkge1xuXHRcdC8vXHRpZiAoc3luY0tleSAhPSBudWxsKSB7XG5cdFx0Ly9cdFx0ZHJhZ1ggPSBkcmFnLng7XG5cdFx0Ly9cdFx0ZHJhZ1kgPSBkcmFnLnk7XG5cdFx0Ly9cdH1cblxuXHRcdFx0bGV0IHhPZmYgPSBsZWZ0LFxuXHRcdFx0XHR4RGltID0gd2lkdGgsXG5cdFx0XHRcdHlPZmYgPSB0b3AsXG5cdFx0XHRcdHlEaW0gPSBoZWlnaHQ7XG5cblx0XHRcdGlmIChzY2FsZVgub3JpID09IDEpIHtcblx0XHRcdFx0eE9mZiA9IHRvcCxcblx0XHRcdFx0eERpbSA9IGhlaWdodCxcblx0XHRcdFx0eU9mZiA9IGxlZnQsXG5cdFx0XHRcdHlEaW0gPSB3aWR0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRyYWdYKSB7XG5cdFx0XHRcdF9zZXRTY2FsZSh4U2NhbGVLZXksXG5cdFx0XHRcdFx0cG9zVG9WYWwoeE9mZiwgeFNjYWxlS2V5KSxcblx0XHRcdFx0XHRwb3NUb1ZhbCh4T2ZmICsgeERpbSwgeFNjYWxlS2V5KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZHJhZ1kpIHtcblx0XHRcdFx0Zm9yIChsZXQgayBpbiBzY2FsZXMpIHtcblx0XHRcdFx0XHRsZXQgc2MgPSBzY2FsZXNba107XG5cblx0XHRcdFx0XHRpZiAoayAhPSB4U2NhbGVLZXkgJiYgc2MuZnJvbSA9PSBudWxsICYmIHNjLm1pbiAhPSBpbmYpIHtcblx0XHRcdFx0XHRcdF9zZXRTY2FsZShrLFxuXHRcdFx0XHRcdFx0XHRwb3NUb1ZhbCh5T2ZmICsgeURpbSwgayksXG5cdFx0XHRcdFx0XHRcdHBvc1RvVmFsKHlPZmYsIGspXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRoaWRlU2VsZWN0KCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGN1cnNvci5sb2NrKSB7XG5cdFx0XHRjdXJzb3IuX2xvY2sgPSAhY3Vyc29yLl9sb2NrO1xuXG5cdFx0XHRpZiAoIWN1cnNvci5fbG9jaylcblx0XHRcdFx0dXBkYXRlQ3Vyc29yKG51bGwsIHRydWUsIGZhbHNlKTtcblx0XHR9XG5cblx0XHRpZiAoZSAhPSBudWxsKSB7XG5cdFx0XHRvZmZNb3VzZShtb3VzZXVwLCBkb2MpO1xuXHRcdFx0cHViU3luYyhtb3VzZXVwLCBzZWxmLCBtb3VzZUxlZnQxLCBtb3VzZVRvcDEsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MsIG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlTGVhdmUoZSwgc3JjLCBfbCwgX3QsIF93LCBfaCwgX2kpIHtcblx0XHRpZiAoIWN1cnNvci5fbG9jaykge1xuXHRcdFx0bGV0IF9kcmFnZ2luZyA9IGRyYWdnaW5nO1xuXG5cdFx0XHRpZiAoZHJhZ2dpbmcpIHtcblx0XHRcdFx0Ly8gaGFuZGxlIGNhc2Ugd2hlbiBtb3VzZW1vdmUgYXJlbid0IGZpcmVkIGFsbCB0aGUgd2F5IHRvIGVkZ2VzIGJ5IGJyb3dzZXJcblx0XHRcdFx0bGV0IHNuYXBIID0gdHJ1ZTtcblx0XHRcdFx0bGV0IHNuYXBWID0gdHJ1ZTtcblx0XHRcdFx0bGV0IHNuYXBQcm94ID0gMTA7XG5cblx0XHRcdFx0bGV0IGRyYWdILCBkcmFnVjtcblxuXHRcdFx0XHRpZiAoc2NhbGVYLm9yaSA9PSAwKSB7XG5cdFx0XHRcdFx0ZHJhZ0ggPSBkcmFnWDtcblx0XHRcdFx0XHRkcmFnViA9IGRyYWdZO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGRyYWdIID0gZHJhZ1k7XG5cdFx0XHRcdFx0ZHJhZ1YgPSBkcmFnWDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkcmFnSCAmJiBkcmFnVikge1xuXHRcdFx0XHRcdC8vIG1heWJlIG9tbmkgY29ybmVyIHNuYXBcblx0XHRcdFx0XHRzbmFwSCA9IG1vdXNlTGVmdDEgPD0gc25hcFByb3ggfHwgbW91c2VMZWZ0MSA+PSBwbG90V2lkQ3NzIC0gc25hcFByb3g7XG5cdFx0XHRcdFx0c25hcFYgPSBtb3VzZVRvcDEgIDw9IHNuYXBQcm94IHx8IG1vdXNlVG9wMSAgPj0gcGxvdEhndENzcyAtIHNuYXBQcm94O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRyYWdIICYmIHNuYXBIKVxuXHRcdFx0XHRcdG1vdXNlTGVmdDEgPSBtb3VzZUxlZnQxIDwgbW91c2VMZWZ0MCA/IDAgOiBwbG90V2lkQ3NzO1xuXG5cdFx0XHRcdGlmIChkcmFnViAmJiBzbmFwVilcblx0XHRcdFx0XHRtb3VzZVRvcDEgPSBtb3VzZVRvcDEgPCBtb3VzZVRvcDAgPyAwIDogcGxvdEhndENzcztcblxuXHRcdFx0XHR1cGRhdGVDdXJzb3IobnVsbCwgdHJ1ZSwgdHJ1ZSk7XG5cblx0XHRcdFx0ZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0bW91c2VMZWZ0MSA9IC0xMDtcblx0XHRcdG1vdXNlVG9wMSA9IC0xMDtcblxuXHRcdFx0Ly8gcGFzc2luZyBhIG5vbi1udWxsIHRpbWVzdGFtcCB0byBmb3JjZSBzeW5jL21vdXNlbW92ZSBldmVudFxuXHRcdFx0dXBkYXRlQ3Vyc29yKG51bGwsIHRydWUsIHRydWUpO1xuXG5cdFx0XHRpZiAoX2RyYWdnaW5nKVxuXHRcdFx0XHRkcmFnZ2luZyA9IF9kcmFnZ2luZztcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBkYmxDbGljayhlLCBzcmMsIF9sLCBfdCwgX3csIF9oLCBfaSkge1xuXHRcdGF1dG9TY2FsZVgoKTtcblxuXHRcdGhpZGVTZWxlY3QoKTtcblxuXHRcdGlmIChlICE9IG51bGwpXG5cdFx0XHRwdWJTeW5jKGRibGNsaWNrLCBzZWxmLCBtb3VzZUxlZnQxLCBtb3VzZVRvcDEsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MsIG51bGwpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc3luY1B4UmF0aW8oKSB7XG5cdFx0YXhlcy5mb3JFYWNoKHN5bmNGb250U2l6ZSk7XG5cdFx0X3NldFNpemUoc2VsZi53aWR0aCwgc2VsZi5oZWlnaHQsIHRydWUpO1xuXHR9XG5cblx0b24oZHBweGNoYW5nZSwgd2luLCBzeW5jUHhSYXRpbyk7XG5cblx0Ly8gaW50ZXJuYWwgcHViL3N1YlxuXHRjb25zdCBldmVudHMgPSB7fTtcblxuXHRldmVudHMubW91c2Vkb3duID0gbW91c2VEb3duO1xuXHRldmVudHMubW91c2Vtb3ZlID0gbW91c2VNb3ZlO1xuXHRldmVudHMubW91c2V1cCA9IG1vdXNlVXA7XG5cdGV2ZW50cy5kYmxjbGljayA9IGRibENsaWNrO1xuXHRldmVudHNbXCJzZXRTZXJpZXNcIl0gPSAoZSwgc3JjLCBpZHgsIG9wdHMpID0+IHtcblx0XHRzZXRTZXJpZXMoaWR4LCBvcHRzLCB0cnVlLCBmYWxzZSk7XG5cdH07XG5cblx0aWYgKGN1cnNvci5zaG93KSB7XG5cdFx0b25Nb3VzZShtb3VzZWRvd24sICBvdmVyLCBtb3VzZURvd24pO1xuXHRcdG9uTW91c2UobW91c2Vtb3ZlLCAgb3ZlciwgbW91c2VNb3ZlKTtcblx0XHRvbk1vdXNlKG1vdXNlZW50ZXIsIG92ZXIsIHN5bmNSZWN0KTtcblx0XHRvbk1vdXNlKG1vdXNlbGVhdmUsIG92ZXIsIG1vdXNlTGVhdmUpO1xuXG5cdFx0b25Nb3VzZShkYmxjbGljaywgb3ZlciwgZGJsQ2xpY2spO1xuXG5cdFx0Y3Vyc29yUGxvdHMuYWRkKHNlbGYpO1xuXG5cdFx0c2VsZi5zeW5jUmVjdCA9IHN5bmNSZWN0O1xuXHR9XG5cblx0Ly8gZXh0ZXJuYWwgb24vb2ZmXG5cdGNvbnN0IGhvb2tzID0gc2VsZi5ob29rcyA9IG9wdHMuaG9va3MgfHwge307XG5cblx0ZnVuY3Rpb24gZmlyZShldk5hbWUsIGExLCBhMikge1xuXHRcdGlmIChldk5hbWUgaW4gaG9va3MpIHtcblx0XHRcdGhvb2tzW2V2TmFtZV0uZm9yRWFjaChmbiA9PiB7XG5cdFx0XHRcdGZuLmNhbGwobnVsbCwgc2VsZiwgYTEsIGEyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdChvcHRzLnBsdWdpbnMgfHwgW10pLmZvckVhY2gocCA9PiB7XG5cdFx0Zm9yIChsZXQgZXZOYW1lIGluIHAuaG9va3MpXG5cdFx0XHRob29rc1tldk5hbWVdID0gKGhvb2tzW2V2TmFtZV0gfHwgW10pLmNvbmNhdChwLmhvb2tzW2V2TmFtZV0pO1xuXHR9KTtcblxuXHRjb25zdCBzeW5jT3B0cyA9IGFzc2lnbih7XG5cdFx0a2V5OiBudWxsLFxuXHRcdHNldFNlcmllczogZmFsc2UsXG5cdFx0ZmlsdGVyczoge1xuXHRcdFx0cHViOiByZXRUcnVlLFxuXHRcdFx0c3ViOiByZXRUcnVlLFxuXHRcdH0sXG5cdFx0c2NhbGVzOiBbeFNjYWxlS2V5LCBzZXJpZXNbMV0gPyBzZXJpZXNbMV0uc2NhbGUgOiBudWxsXSxcblx0XHRtYXRjaDogW3JldEVxLCByZXRFcV0sXG5cdFx0dmFsdWVzOiBbbnVsbCwgbnVsbF0sXG5cdH0sIGN1cnNvci5zeW5jKTtcblxuXHQoY3Vyc29yLnN5bmMgPSBzeW5jT3B0cyk7XG5cblx0Y29uc3Qgc3luY0tleSA9IHN5bmNPcHRzLmtleTtcblxuXHRjb25zdCBzeW5jID0gX3N5bmMoc3luY0tleSk7XG5cblx0ZnVuY3Rpb24gcHViU3luYyh0eXBlLCBzcmMsIHgsIHksIHcsIGgsIGkpIHtcblx0XHRpZiAoc3luY09wdHMuZmlsdGVycy5wdWIodHlwZSwgc3JjLCB4LCB5LCB3LCBoLCBpKSlcblx0XHRcdHN5bmMucHViKHR5cGUsIHNyYywgeCwgeSwgdywgaCwgaSk7XG5cdH1cblxuXHRzeW5jLnN1YihzZWxmKTtcblxuXHRmdW5jdGlvbiBwdWIodHlwZSwgc3JjLCB4LCB5LCB3LCBoLCBpKSB7XG5cdFx0aWYgKHN5bmNPcHRzLmZpbHRlcnMuc3ViKHR5cGUsIHNyYywgeCwgeSwgdywgaCwgaSkpXG5cdFx0XHRldmVudHNbdHlwZV0obnVsbCwgc3JjLCB4LCB5LCB3LCBoLCBpKTtcblx0fVxuXG5cdChzZWxmLnB1YiA9IHB1Yik7XG5cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRzeW5jLnVuc3ViKHNlbGYpO1xuXHRcdGN1cnNvclBsb3RzLmRlbGV0ZShzZWxmKTtcblx0XHRtb3VzZUxpc3RlbmVycy5jbGVhcigpO1xuXHRcdG9mZihkcHB4Y2hhbmdlLCB3aW4sIHN5bmNQeFJhdGlvKTtcblx0XHRyb290LnJlbW92ZSgpO1xuXHRcdGxlZ2VuZEVsPy5yZW1vdmUoKTsgLy8gaW4gY2FzZSBtb3VudGVkIG91dHNpZGUgb2Ygcm9vdFxuXHRcdGZpcmUoXCJkZXN0cm95XCIpO1xuXHR9XG5cblx0c2VsZi5kZXN0cm95ID0gZGVzdHJveTtcblxuXHRmdW5jdGlvbiBfaW5pdCgpIHtcblx0XHRmaXJlKFwiaW5pdFwiLCBvcHRzLCBkYXRhKTtcblxuXHRcdHNldERhdGEoZGF0YSB8fCBvcHRzLmRhdGEsIGZhbHNlKTtcblxuXHRcdGlmIChwZW5kU2NhbGVzW3hTY2FsZUtleV0pXG5cdFx0XHRzZXRTY2FsZSh4U2NhbGVLZXksIHBlbmRTY2FsZXNbeFNjYWxlS2V5XSk7XG5cdFx0ZWxzZVxuXHRcdFx0YXV0b1NjYWxlWCgpO1xuXG5cdFx0c2hvdWxkU2V0U2VsZWN0ID0gc2VsZWN0LnNob3c7XG5cdFx0c2hvdWxkU2V0Q3Vyc29yID0gc2hvdWxkU2V0TGVnZW5kID0gdHJ1ZTtcblxuXHRcdF9zZXRTaXplKG9wdHMud2lkdGgsIG9wdHMuaGVpZ2h0KTtcblx0fVxuXG5cdHNlcmllcy5mb3JFYWNoKGluaXRTZXJpZXMpO1xuXG5cdGF4ZXMuZm9yRWFjaChpbml0QXhpcyk7XG5cblx0aWYgKHRoZW4pIHtcblx0XHRpZiAodGhlbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHR0aGVuLmFwcGVuZENoaWxkKHJvb3QpO1xuXHRcdFx0X2luaXQoKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0dGhlbihzZWxmLCBfaW5pdCk7XG5cdH1cblx0ZWxzZVxuXHRcdF9pbml0KCk7XG5cblx0cmV0dXJuIHNlbGY7XG59XG5cbnVQbG90LmFzc2lnbiA9IGFzc2lnbjtcbnVQbG90LmZtdE51bSA9IGZtdE51bTtcbnVQbG90LnJhbmdlTnVtID0gcmFuZ2VOdW07XG51UGxvdC5yYW5nZUxvZyA9IHJhbmdlTG9nO1xudVBsb3QucmFuZ2VBc2luaCA9IHJhbmdlQXNpbmg7XG51UGxvdC5vcmllbnQgICA9IG9yaWVudDtcbnVQbG90LnB4UmF0aW8gPSBweFJhdGlvO1xuXG57XG5cdHVQbG90LmpvaW4gPSBqb2luO1xufVxuXG57XG5cdHVQbG90LmZtdERhdGUgPSBmbXREYXRlO1xuXHR1UGxvdC50ekRhdGUgID0gdHpEYXRlO1xufVxuXG57XG5cdHVQbG90LnN5bmMgPSBfc3luYztcbn1cblxue1xuXHR1UGxvdC5hZGRHYXAgPSBhZGRHYXA7XG5cdHVQbG90LmNsaXBHYXBzID0gY2xpcEdhcHM7XG5cblx0bGV0IHBhdGhzID0gdVBsb3QucGF0aHMgPSB7XG5cdFx0cG9pbnRzLFxuXHR9O1xuXG5cdChwYXRocy5saW5lYXIgID0gbGluZWFyKTtcblx0KHBhdGhzLnN0ZXBwZWQgPSBzdGVwcGVkKTtcblx0KHBhdGhzLmJhcnMgICAgPSBiYXJzKTtcblx0KHBhdGhzLnNwbGluZSAgPSBtb25vdG9uZUN1YmljKTtcbn1cblxuZXhwb3J0IHsgdVBsb3QgYXMgZGVmYXVsdCB9O1xuIiwgImltcG9ydCB1UGxvdCBmcm9tICd1cGxvdCdcblxubGV0IGNoYXJ0ID0gbnVsbDtcblxuZnVuY3Rpb24gcGF0aHModSwgc2lkeCwgaTAsIGkxKSB7XG4gIGNvbnN0IHMgPSB1LnNlcmllc1tzaWR4XTtcbiAgY29uc3QgeGRhdGEgPSB1LmRhdGFbMF07XG4gIGNvbnN0IHlkYXRhID0gdS5kYXRhW3NpZHhdO1xuICBjb25zdCBzY2FsZVggPSAneCc7XG4gIGNvbnN0IHNjYWxlWSA9IHMuc2NhbGU7XG5cbiAgY29uc3Qgc3Ryb2tlID0gbmV3IFBhdGgyRCgpO1xuXG4gIGNvbnN0IHhfd2lkdGggPSBNYXRoLmFicygodS52YWxUb1Bvcyh4ZGF0YVswXSwgc2NhbGVYLCB0cnVlKSAtIHUudmFsVG9Qb3MoeGRhdGFbMV0sIHNjYWxlWCwgdHJ1ZSkpIC8gMik7XG5cbiAgc3Ryb2tlLm1vdmVUbyhcbiAgICBNYXRoLnJvdW5kKHUudmFsVG9Qb3MoeGRhdGFbMF0sIHNjYWxlWCwgdHJ1ZSkpLFxuICAgIE1hdGgucm91bmQodS52YWxUb1Bvcyh5ZGF0YVswXSwgc2NhbGVZLCB0cnVlKSlcbiAgKTtcblxuICBmb3IgKGxldCBpID0gaTA7IGkgPCBpMTsgaSsrKSB7XG4gICAgbGV0IHgwID0gTWF0aC5yb3VuZCh1LnZhbFRvUG9zKHhkYXRhW2ldLCBzY2FsZVgsIHRydWUpKTtcbiAgICBsZXQgeTAgPSBNYXRoLnJvdW5kKHUudmFsVG9Qb3MoeWRhdGFbaV0sIHNjYWxlWSwgdHJ1ZSkpO1xuICAgIGxldCB4MSA9IE1hdGgucm91bmQodS52YWxUb1Bvcyh4ZGF0YVtpICsgMV0sIHNjYWxlWCwgdHJ1ZSkpO1xuICAgIGxldCB5MSA9IE1hdGgucm91bmQodS52YWxUb1Bvcyh5ZGF0YVtpICsgMV0sIHNjYWxlWSwgdHJ1ZSkpO1xuXG4gICAgc3Ryb2tlLmxpbmVUbyh4MCAtIHhfd2lkdGgsIHkwKTtcbiAgICBzdHJva2UubGluZVRvKHgxIC0geF93aWR0aCwgeTApO1xuXG4gICAgaWYgKGkgPT0gaTEgLSAxKSB7XG4gICAgICBzdHJva2UubGluZVRvKHgxIC0geF93aWR0aCwgeTEpO1xuICAgICAgc3Ryb2tlLmxpbmVUbyh4MSwgeTEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZpbGwgPSBuZXcgUGF0aDJEKHN0cm9rZSk7XG5cbiAgbGV0IG1pblkgPSBNYXRoLnJvdW5kKHUudmFsVG9Qb3ModS5zY2FsZXNbc2NhbGVZXS5taW4sIHNjYWxlWSwgdHJ1ZSkpO1xuICBsZXQgbWluWCA9IE1hdGgucm91bmQodS52YWxUb1Bvcyh1LnNjYWxlc1tzY2FsZVhdLm1pbiwgc2NhbGVYLCB0cnVlKSk7XG4gIGxldCBtYXhYID0gTWF0aC5yb3VuZCh1LnZhbFRvUG9zKHUuc2NhbGVzW3NjYWxlWF0ubWF4LCBzY2FsZVgsIHRydWUpKTtcblxuICBmaWxsLmxpbmVUbyhtYXhYLCBtaW5ZKTtcbiAgZmlsbC5saW5lVG8obWluWCwgbWluWSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdHJva2UsXG4gICAgZmlsbCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2FmZV90b19maXhlZChudW1iZXIsIGRlY2ltYWxzKSB7XG4gIHJldHVybiBudW1iZXIgJiYgbnVtYmVyLnRvRml4ZWQoZGVjaW1hbHMpXG59XG5cbmZ1bmN0aW9uIG1ha2Vfb3B0cyhpZCwgc2NhbGUpIHtcbiAgbGV0IHJlY3QgPSB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOSwgaGVpZ2h0OiA2MDAgfTtcblxuICBsZXQgc2NhbGVyID0gbnVsbDtcbiAgaWYgKHNjYWxlID09IFwiTGluZWFyXCIpIHtcbiAgICBzY2FsZXIgPSAoeCkgPT4geCAmJiB4XG4gIH0gZWxzZSBpZiAoc2NhbGUgPT0gXCJMb2cxMFwiKSB7XG4gICAgc2NhbGVyID0gKHgpID0+IHggJiYgTWF0aC5wb3coMTAsIHgpXG4gIH0gZWxzZSBpZiAoc2NhbGUgPT0gXCJMb2cyXCIpIHtcbiAgICBzY2FsZXIgPSAoeCkgPT4geCAmJiBNYXRoLnBvdygyLCB4KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaWQgKyBcIi1jaGFydFwiLFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgbGFiZWxTaXplOiAxMCxcbiAgICBsYWJlbEZvbnQ6IFwiYm9sZCA4cHggQXJpYWxcIixcbiAgICB0aWNrczogeyBzaG93OiBmYWxzZSB9LFxuICAgIHBvaW50czogeyBzaG93OiBmYWxzZSB9LFxuICAgIGZvbnQ6IFwiOHB4IEFyaWFsXCIsXG4gICAgcGFkZGluZzogW251bGwsIDMwLCBudWxsLCAzMF0sXG4gICAgc2VyaWVzOiBbXG4gICAgICB7IHZhbHVlOiAne0hIfTp7bW19Ontzc30nIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlA5OVwiLFxuICAgICAgICBzdHJva2U6IFwicmdiKDE1NSwgMjE0LCAyMDYpXCIsXG4gICAgICAgIHZhbHVlOiAoc2VsZiwgcmF3VmFsdWUpID0+IHNhZmVfdG9fZml4ZWQoc2NhbGVyKHJhd1ZhbHVlKSwgMykgKyBcIm1zXCIsXG4gICAgICAgIGZpbGw6IFwicmdiKDE1NSwgMjE0LCAyMDYsIDAuNSApXCIsXG4gICAgICAgIHBhdGhzOiBwYXRocyxcbiAgICAgICAgc2NhbGU6IFwibXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiUDkwXCIsXG4gICAgICAgIHN0cm9rZTogXCJyZ2IoNzksIDE2OSwgMTg0KVwiLFxuICAgICAgICB2YWx1ZTogKHNlbGYsIHJhd1ZhbHVlKSA9PiBzYWZlX3RvX2ZpeGVkKHNjYWxlcihyYXdWYWx1ZSksIDMpICsgXCJtc1wiLFxuICAgICAgICBmaWxsOiBcInJnYig3OSwgMTY5LCAxODQsIDAuNSlcIixcbiAgICAgICAgcGF0aHM6IHBhdGhzLFxuICAgICAgICBzY2FsZTogXCJtc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJQNTBcIixcbiAgICAgICAgc3Ryb2tlOiBcInJnYigyLCA4OCwgMTE1KVwiLFxuICAgICAgICB2YWx1ZTogKHNlbGYsIHJhd1ZhbHVlKSA9PiBzYWZlX3RvX2ZpeGVkKHNjYWxlcihyYXdWYWx1ZSksIDMpICsgXCJtc1wiLFxuICAgICAgICBmaWxsOiBcInJnYigyLCA4OCwgMTE1LCAwLjUpXCIsXG4gICAgICAgIHBhdGhzOiBwYXRocyxcbiAgICAgICAgc2NhbGU6IFwibXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiY291bnRcIixcbiAgICAgICAgc3Ryb2tlOiBcInJnYigzMCwgMzAsIDMwKVwiLFxuICAgICAgICB2YWx1ZTogKHNlbGYsIHJhd1ZhbHVlKSA9PiBzY2FsZXIocmF3VmFsdWUpICsgXCJjcHNcIixcbiAgICAgICAgc2NhbGU6IFwiY2FsbHNcIlxuICAgICAgfVxuICAgIF0sXG4gICAgYXhlczogW1xuICAgICAge1xuICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICBbMSwgXCJ7SEh9OnttbX06e3NzfVwiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxXSxdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzY2FsZTogXCJtc1wiLFxuICAgICAgICBncmlkOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgIHZhbHVlczogKHUsIHZhbHMsIHNwYWNlKSA9PiB2YWxzLm1hcCgodmFsKSA9PiBzYWZlX3RvX2ZpeGVkKHNjYWxlcih2YWwpLCAzKSArIFwibXNcIilcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNpZGU6IDEsXG4gICAgICAgIHZhbHVlczogKHUsIHZhbHMsIHNwYWNlKSA9PiB2YWxzLm1hcCgodmFsKSA9PiBzYWZlX3RvX2ZpeGVkKHNjYWxlcih2YWwpLCAxKSArIFwiIGNhbGxzXCIpLFxuICAgICAgICBzY2FsZTogXCJjYWxsc1wiLFxuICAgICAgICBncmlkOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICB9LFxuICAgIF1cbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEhpc3RvQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihjaGFydEVsLCBkYXRhLCBzY2FsZSkge1xuICAgIGxldCBvcHRzID0gbWFrZV9vcHRzKGNoYXJ0RWwuaWQsIHNjYWxlKVxuICAgIHRoaXMudXBsb3RDaGFydCA9IG5ldyB1UGxvdChvcHRzLCBkYXRhLCBjaGFydEVsKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEocXVhbnRpbGVfZGF0YSwgc2NhbGUpIHtcbiAgICB0aGlzLnVwbG90Q2hhcnQuc2V0RGF0YShxdWFudGlsZV9kYXRhLCBzY2FsZSlcbiAgfVxufVxuXG5sZXQgc2NhbGUgPSBcIlwiO1xuXG5leHBvcnQgY29uc3QgQ2hhcnREYXRhID0ge1xuICBtb3VudGVkKCkge1xuICAgIGxldCBjaGFydEVsID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydCcpO1xuICAgIHNjYWxlID0gSlNPTi5wYXJzZShjaGFydEVsLmRhdGFzZXQuc2NhbGUpO1xuICAgIGxldCBxdWFudGlsZV9kYXRhID0gSlNPTi5wYXJzZShjaGFydEVsLmRhdGFzZXQucXVhbnRpbGUpO1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgSGlzdG9DaGFydChjaGFydEVsLCBxdWFudGlsZV9kYXRhLCBzY2FsZSk7XG4gIH0sXG4gIHVwZGF0ZWQoKSB7XG4gICAgbGV0IG5ld19zY2FsZSA9IEpTT04ucGFyc2UodGhpcy5lbC5kYXRhc2V0LnNjYWxlKTtcbiAgICBpZiAoc2NhbGUgPT0gbmV3X3NjYWxlKSB7XG4gICAgICBsZXQgcXVhbnRpbGVfZGF0YSA9IEpTT04ucGFyc2UodGhpcy5lbC5kYXRhc2V0LnF1YW50aWxlKTtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlRGF0YShxdWFudGlsZV9kYXRhLCBzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW91bnRlZCgpO1xuICAgIH1cbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBTUEsT0FBQyxTQUFTQSxTQUFPQyxXQUFTO0FBQUM7QUFBYSxTQUFDLFdBQVU7QUFBQyxtQkFBUSxXQUFTLEdBQUUsVUFBUSxDQUFDLE1BQUssT0FBTSxVQUFTLEdBQUcsR0FBRSxJQUFFLEdBQUUsSUFBRSxRQUFRLFVBQVEsQ0FBQ0QsUUFBTyx1QkFBc0IsRUFBRTtBQUFFLFlBQUFBLFFBQU8sd0JBQXNCQSxRQUFPLFFBQVEsQ0FBQyxJQUFFLHVCQUF1QixHQUFFQSxRQUFPLHVCQUFxQkEsUUFBTyxRQUFRLENBQUMsSUFBRSxzQkFBc0IsS0FBR0EsUUFBTyxRQUFRLENBQUMsSUFBRSw2QkFBNkI7QUFBRSxVQUFBQSxRQUFPLDBCQUF3QkEsUUFBTyx3QkFBc0IsU0FBUyxVQUFTLFNBQVE7QUFBQyxnQkFBSSxZQUFVLG9CQUFJLFFBQU0sUUFBUSxHQUFFLGFBQVcsS0FBSyxJQUFJLEdBQUUsTUFBSSxXQUFTLFNBQVMsR0FBRSxLQUFHQSxRQUFPLFdBQVcsV0FBVTtBQUFDLHVCQUFTLFdBQVMsVUFBVTtBQUFBLFlBQUMsR0FBRSxVQUFVO0FBQUUsbUJBQU8sV0FB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O0FBQUEsRUFDRjtBQUVBLE1BQUksYUFBYSxJQUFJLFNBQVMsV0FBVyxZQUFZLFFBQVEsUUFBUSxFQUFFLE9BQU8sT0FBTyxRQUFRLEVBQUUsYUFBYSxVQUFVLEVBQUUsQ0FBQztBQUd6SCxnQkFBQUUsUUFBTyxPQUFPLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxHQUFHLGFBQWEsb0JBQW9CLENBQUM7QUFDNUUsU0FBTyxpQkFBaUIsMEJBQTBCLFVBQVEsY0FBQUEsUUFBTyxLQUFLLENBQUM7QUFDdkUsU0FBTyxpQkFBaUIseUJBQXlCLFVBQVEsY0FBQUEsUUFBTyxLQUFLLENBQUM7QUFHdEUsYUFBVyxRQUFRO0FBTW5CLFNBQU8sYUFBYTsiLAogICJuYW1lcyI6IFsid2luZG93IiwgImRvY3VtZW50IiwgInRvcGJhciIsICJtaW4iLCAibWF4IiwgIl8iLCAidHpEYXRlIiwgImZtdERhdGUiLCAicyIsICJkYXRhSWR4IiwgInNjYWxlIiwgImdhcHMiLCAicmVjdCIsICJ3IiwgInBvaW50cyIsICJ1IiwgInNlcmllc0lkeCIsICJzaXplIiwgImZvbnQiLCAib2ZmIiwgImtleSIsICJzZWxmIiwgImkiLCAib3B0cyIsICJzaWRlc1dpdGhBeGVzIiwgImpvaW4iLCAiZmFjZXQiLCAiZGF0YSIsICJ4U2NhbGVLZXkiLCAiaWR4cyIsICJzdHJva2VQYXRoIiwgInN0cm9rZVN0eWxlIiwgImZpbGxQYXRoIiwgImZpbGxTdHlsZSIsICJzaGlmdEFtdCIsICJ0aWNrcyIsICJib3JkZXIiLCAiZ3JpZCIsICJjYW4iLCAicGF0aHMiLCAic2NhbGUiLCAicmVjdCIsICJ0b3BiYXIiXQp9Cg==
