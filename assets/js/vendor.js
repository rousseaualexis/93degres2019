"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 1.20.4
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
    var d = function d(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        e = function e(a, b, c) {
      var d,
          e,
          f = a.cycle;

      for (d in f) {
        e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
      }

      delete a.cycle;
    },
        f = function f(a, b, d) {
      c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = f.prototype.render;
    },
        g = 1e-10,
        h = c._internals,
        i = h.isSelector,
        j = h.isArray,
        k = f.prototype = c.to({}, .1, {}),
        l = [];

    f.version = "1.20.4", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this);
    }, k.updateTo = function (a, b) {
      var d,
          e = this.ratio,
          f = this.vars.immediateRender || a.immediateRender;
      b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));

      for (d in a) {
        this.vars[d] = a[d];
      }

      if (this._initted || f) if (b) this._initted = !1, f && this.render(0, !0, !0);else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
        var g = this._totalTime;
        this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1);
      } else if (this._initted = !1, this._init(), this._time > 0 || f) for (var h, i = 1 / (1 - e), j = this._firstPT; j;) {
        h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
      }
      return this;
    }, k.render = function (a, b, d) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var e,
          f,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = this._dirty ? this.totalDuration() : this._totalDuration,
          q = this._time,
          r = this._totalTime,
          s = this._cycle,
          t = this._duration,
          u = this._rawPrevTime;
      if (a >= p - 1e-7 && a >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = t, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === t && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > u || 0 >= a && a >= -1e-7 || u === g && "isPause" !== this.data) && u !== a && (d = !0, u > g && (f = "onReverseComplete")), this._rawPrevTime = n = !b || a || u === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === t && u > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), this._rawPrevTime = n = !b || a || u === a ? a : g)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (j = t + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * j, this._yoyo && 0 !== (1 & this._cycle) && (this._time = t - this._time, o = this._yoyoEase || this.vars.yoyoEase, o && (this._yoyoEase || (o !== !0 || this._initted ? this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0)), this._time > t ? this._time = t : this._time < 0 && (this._time = 0)), this._easeType && !o ? (k = this._time / t, l = this._easeType, m = this._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : this._time / t < .5 ? this.ratio = k / 2 : this.ratio = 1 - k / 2) : o || (this.ratio = this._ease.getRatio(this._time / t))), q === this._time && !d && s === this._cycle) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));

      if (!this._initted) {
        if (this._init(), !this._initted || this._gc) return;
        if (!d && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = r, this._rawPrevTime = u, this._cycle = s, h.lazyTweens.push(this), void (this._lazy = [a, b]);
        !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / t);
      }

      for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== q && a >= 0 && (this._active = !0), 0 === r && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))), i = this._firstPT; i;) {
        i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next;
      }

      this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== r || f) && this._callback("onUpdate")), this._cycle !== s && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0));
    }, f.to = function (a, b, c) {
      return new f(a, b, c);
    }, f.from = function (a, b, c) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c);
    }, f.fromTo = function (a, b, c, d) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d);
    }, f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
      h = h || 0;

      var o,
          p,
          q,
          r,
          s = 0,
          t = [],
          u = function u() {
        g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l);
      },
          v = g.cycle,
          w = g.startAt && g.startAt.cycle;

      for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
        p = {};

        for (r in g) {
          p[r] = g[r];
        }

        if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
          w = p.startAt = {};

          for (r in g.startAt) {
            w[r] = g.startAt[r];
          }

          e(p.startAt, a, q);
        }

        p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h;
      }

      return t;
    }, f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h);
    }, f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i);
    }, f.delayedCall = function (a, b, c, d, e) {
      return new f(b, 0, {
        delay: a,
        onComplete: b,
        onCompleteParams: c,
        callbackScope: d,
        onReverseComplete: b,
        onReverseCompleteParams: c,
        immediateRender: !1,
        useFrames: e,
        overwrite: 0
      });
    }, f.set = function (a, b) {
      return new f(a, 0, b);
    }, f.isTweening = function (a) {
      return c.getTweensOf(a, !0).length > 0;
    };

    var m = function m(a, b) {
      for (var d = [], e = 0, f = a._first; f;) {
        f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
      }

      return d;
    },
        n = f.getAllTweens = function (b) {
      return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
    };

    f.killAll = function (a, c, d, e) {
      null == c && (c = !0), null == d && (d = !0);
      var f,
          g,
          h,
          i = n(0 != e),
          j = i.length,
          k = c && d && e;

      for (h = 0; j > h; h++) {
        g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
      }
    }, f.killChildTweensOf = function (a, b) {
      if (null != a) {
        var e,
            g,
            k,
            l,
            m,
            n = h.tweenLookup;
        if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a)) for (l = a.length; --l > -1;) {
          f.killChildTweensOf(a[l], b);
        } else {
          e = [];

          for (k in n) {
            for (g = n[k].target.parentNode; g;) {
              g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
            }
          }

          for (m = e.length, l = 0; m > l; l++) {
            b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
          }
        }
      }
    };

    var o = function o(a, c, d, e) {
      c = c !== !1, d = d !== !1, e = e !== !1;

      for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) {
        g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
      }
    };

    return f.pauseAll = function (a, b, c) {
      o(!0, a, b, c);
    }, f.resumeAll = function (a, b, c) {
      o(!1, a, b, c);
    }, f.globalTimeScale = function (b) {
      var d = a._rootTimeline,
          e = c.ticker.time;
      return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale;
    }, k.progress = function (a, b) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration();
    }, k.totalProgress = function (a, b) {
      return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
    }, k.time = function (a, b) {
      return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time;
    }, k.duration = function (b) {
      return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
    }, k.totalDuration = function (a) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
    }, k.repeat = function (a) {
      return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
    }, k.repeatDelay = function (a) {
      return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
    }, k.yoyo = function (a) {
      return arguments.length ? (this._yoyo = a, this) : this._yoyo;
    }, f;
  }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
    var d = function d(a) {
      b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
      var c,
          d,
          e = this.vars;

      for (d in e) {
        c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
      }

      i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
    },
        e = 1e-10,
        f = c._internals,
        g = d._internals = {},
        h = f.isSelector,
        i = f.isArray,
        j = f.lazyTweens,
        k = f.lazyRender,
        l = _gsScope._gsDefine.globals,
        m = function m(a) {
      var b,
          c = {};

      for (b in a) {
        c[b] = a[b];
      }

      return c;
    },
        n = function n(a, b, c) {
      var d,
          e,
          f = a.cycle;

      for (d in f) {
        e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
      }

      delete a.cycle;
    },
        o = g.pauseCallback = function () {},
        p = function p(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        q = d.prototype = new b();

    return d.version = "1.20.4", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) {
      var f = d.repeat && l.TweenMax || c;
      return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
    }, q.from = function (a, b, d, e) {
      return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e);
    }, q.fromTo = function (a, b, d, e, f) {
      var g = e.repeat && l.TweenMax || c;
      return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
    }, q.staggerTo = function (a, b, e, f, g, i, j, k) {
      var l,
          o,
          q = new d({
        onComplete: i,
        onCompleteParams: j,
        callbackScope: k,
        smoothChildTiming: this.smoothChildTiming
      }),
          r = e.cycle;

      for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) {
        l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
      }

      return this.add(q, g);
    }, q.staggerFrom = function (a, b, c, d, e, f, g, h) {
      return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h);
    }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i);
    }, q.call = function (a, b, d, e) {
      return this.add(c.delayedCall(0, a, b, d), e);
    }, q.set = function (a, b, d) {
      return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d);
    }, d.exportRoot = function (a, b) {
      a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
      var e,
          f,
          g,
          h,
          i = new d(a),
          j = i._timeline;

      for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) {
        h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
      }

      return j.add(i, 0), e && i.totalDuration(), i;
    }, q.add = function (e, f, g, h) {
      var j, k, l, m, n, o;

      if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
        if (e instanceof Array || e && e.push && i(e)) {
          for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) {
            i(m = e[l]) && (m = new d({
              tweens: m
            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
          }

          return this._uncache(!0);
        }

        if ("string" == typeof e) return this.addLabel(e, f);
        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
        e = c.delayedCall(0, e);
      }

      if (b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (n = this, o = n.rawTime() > e._startTime; n._timeline;) {
        o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
      }
      return this;
    }, q.remove = function (b) {
      if (b instanceof a) {
        this._remove(b, !1);

        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this;
      }

      if (b instanceof Array || b && b.push && i(b)) {
        for (var d = b.length; --d > -1;) {
          this.remove(b[d]);
        }

        return this;
      }

      return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
    }, q._remove = function (a, c) {
      b.prototype._remove.call(this, a, c);

      var d = this._last;
      return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, q.append = function (a, b) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
    }, q.insert = q.insertMultiple = function (a, b, c, d) {
      return this.add(a, b || 0, c, d);
    }, q.appendMultiple = function (a, b, c, d) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
    }, q.addLabel = function (a, b) {
      return this._labels[a] = this._parseTimeOrLabel(b), this;
    }, q.addPause = function (a, b, d, e) {
      var f = c.delayedCall(0, o, d, e || this);
      return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a);
    }, q.removeLabel = function (a) {
      return delete this._labels[a], this;
    }, q.getLabelTime = function (a) {
      return null != this._labels[a] ? this._labels[a] : -1;
    }, q._parseTimeOrLabel = function (b, c, d, e) {
      var f, g;
      if (e instanceof a && e.timeline === this) this.remove(e);else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; --g > -1;) {
        e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
      }
      if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
      if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);else {
        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
      }
      return Number(b) + c;
    }, q.seek = function (a, b) {
      return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
    }, q.stop = function () {
      return this.paused(!0);
    }, q.gotoAndPlay = function (a, b) {
      return this.play(a, b);
    }, q.gotoAndStop = function (a, b) {
      return this.pause(a, b);
    }, q.render = function (a, b, c) {
      this._gc && this._enabled(!0, !1);
      var d,
          f,
          g,
          h,
          i,
          l,
          m,
          n = this._time,
          o = this._dirty ? this.totalDuration() : this._totalDuration,
          p = this._startTime,
          q = this._timeScale,
          r = this._paused;
      if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4;else if (1e-7 > a) {
        if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;else {
          if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;) {
            d._duration || (f = !1), d = d._next;
          }
          a = 0, this._initted || (i = !0);
        }
      } else {
        if (this._hasPause && !this._forcingPlayhead && !b) {
          if (a >= n) for (d = this._first; d && d._startTime <= a && !l;) {
            d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
          } else for (d = this._last; d && d._startTime >= a && !l;) {
            d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
          }
          l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));
        }

        this._totalTime = this._time = this._rawPrevTime = a;
      }

      if (this._time !== n && this._first || c || i || l) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= n) for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));) {
          (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
        } else for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
          if (d._active || d._startTime <= n && !d._paused && !d._gc) {
            if (l === d) {
              for (l = d._prev; l && l.endTime() > this._time;) {
                l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
              }

              l = null, this.pause();
            }

            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
          }

          d = g;
        }
        this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)));
      }
    }, q._hasPausedChild = function () {
      for (var a = this._first; a;) {
        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
        a = a._next;
      }

      return !1;
    }, q.getChildren = function (a, b, d, e) {
      e = e || -9999999999;

      for (var f = [], g = this._first, h = 0; g;) {
        g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
      }

      return f;
    }, q.getTweensOf = function (a, b) {
      var d,
          e,
          f = this._gc,
          g = [],
          h = 0;

      for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) {
        (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
      }

      return f && this._enabled(!1, !0), g;
    }, q.recent = function () {
      return this._recent;
    }, q._contains = function (a) {
      for (var b = a.timeline; b;) {
        if (b === this) return !0;
        b = b.timeline;
      }

      return !1;
    }, q.shiftChildren = function (a, b, c) {
      c = c || 0;

      for (var d, e = this._first, f = this._labels; e;) {
        e._startTime >= c && (e._startTime += a), e = e._next;
      }

      if (b) for (d in f) {
        f[d] >= c && (f[d] += a);
      }
      return this._uncache(!0);
    }, q._kill = function (a, b) {
      if (!a && !b) return this._enabled(!1, !1);

      for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) {
        c[d]._kill(a, b) && (e = !0);
      }

      return e;
    }, q.clear = function (a) {
      var b = this.getChildren(!1, !0, !0),
          c = b.length;

      for (this._time = this._totalTime = 0; --c > -1;) {
        b[c]._enabled(!1, !1);
      }

      return a !== !1 && (this._labels = {}), this._uncache(!0);
    }, q.invalidate = function () {
      for (var b = this._first; b;) {
        b.invalidate(), b = b._next;
      }

      return a.prototype.invalidate.call(this);
    }, q._enabled = function (a, c) {
      if (a === this._gc) for (var d = this._first; d;) {
        d._enabled(a, !0), d = d._next;
      }
      return b.prototype._enabled.call(this, a, c);
    }, q.totalTime = function (b, c, d) {
      this._forcingPlayhead = !0;
      var e = a.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, q.duration = function (a) {
      return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
    }, q.totalDuration = function (a) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var b, c, d = 0, e = this._last, f = 999999999999; e;) {
            b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
          }

          this._duration = this._totalDuration = d, this._dirty = !1;
        }

        return this._totalDuration;
      }

      return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
    }, q.paused = function (b) {
      if (!b) for (var c = this._first, d = this._time; c;) {
        c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
      }
      return a.prototype.paused.apply(this, arguments);
    }, q.usesFrames = function () {
      for (var b = this._timeline; b._timeline;) {
        b = b._timeline;
      }

      return b === a._rootFramesTimeline;
    }, q.rawTime = function (a) {
      return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
    }, d;
  }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
    var d = function d(b) {
      a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
    },
        e = 1e-10,
        f = b._internals,
        g = f.lazyTweens,
        h = f.lazyRender,
        i = _gsScope._gsDefine.globals,
        j = new c(null, null, 1, 0),
        k = d.prototype = new a();

    return k.constructor = d, k.kill()._gc = !1, d.version = "1.20.4", k.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this);
    }, k.addCallback = function (a, c, d, e) {
      return this.add(b.delayedCall(0, a, d, e), c);
    }, k.removeCallback = function (a, b) {
      if (a) if (null == b) this._kill(null, a);else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) {
        c[d]._startTime === e && c[d]._enabled(!1, !1);
      }
      return this;
    }, k.removePause = function (b) {
      return this.removeCallback(a._internals.pauseCallback, b);
    }, k.tweenTo = function (a, c) {
      c = c || {};
      var d,
          e,
          f,
          g = {
        ease: j,
        useFrames: this.usesFrames(),
        immediateRender: !1,
        lazy: !1
      },
          h = c.repeat && i.TweenMax || b;

      for (e in c) {
        g[e] = c[e];
      }

      return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () {
        f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
      }, f;
    }, k.tweenFromTo = function (a, b, c) {
      c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
        onComplete: this.seek,
        onCompleteParams: [a],
        callbackScope: this
      }, c.immediateRender = c.immediateRender !== !1;
      var d = this.tweenTo(b, c);
      return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
    }, k.render = function (a, b, c) {
      this._gc && this._enabled(!0, !1);
      var d,
          f,
          i,
          j,
          k,
          l,
          m,
          n,
          o = this._time,
          p = this._dirty ? this.totalDuration() : this._totalDuration,
          q = this._duration,
          r = this._totalTime,
          s = this._startTime,
          t = this._timeScale,
          u = this._rawPrevTime,
          v = this._paused,
          w = this._cycle;
      if (o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = q, a = q + 1e-4);else if (1e-7 > a) {
        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === q && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;else {
          if (this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;) {
            d._duration || (f = !1), d = d._next;
          }
          a = 0, this._initted || (k = !0);
        }
      } else if (0 === q && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = q + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time), this._time > q ? (this._time = q, a = q + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
        if (a = this._time, a >= o || this._repeat && w !== this._cycle) for (d = this._first; d && d._startTime <= a && !m;) {
          d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
        } else for (d = this._last; d && d._startTime >= a && !m;) {
          d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
        }
        m && m._startTime < q && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));
      }

      if (this._cycle !== w && !this._locked) {
        var x = this._yoyo && 0 !== (1 & w),
            y = x === (this._yoyo && 0 !== (1 & this._cycle)),
            z = this._totalTime,
            A = this._cycle,
            B = this._rawPrevTime,
            C = this._time;
        if (this._totalTime = w * q, this._cycle < w ? x = !x : this._totalTime += q, this._time = o, this._rawPrevTime = 0 === q ? u - 1e-4 : u, this._cycle = w, this._locked = !0, o = x ? 0 : q, this.render(o, b, 0 === q), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), o !== this._time) return;
        if (y && (this._cycle = w, this._locked = !0, o = x ? q + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !v) return;
        this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B;
      }

      if (!(this._time !== o && this._first || c || k || m)) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
      if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= o) for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));) {
        (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
      } else for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
        if (d._active || d._startTime <= o && !d._paused && !d._gc) {
          if (m === d) {
            for (m = d._prev; m && m.endTime() > this._time;) {
              m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
            }

            m = null, this.pause();
          }

          d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
        }

        d = i;
      }
      this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)));
    }, k.getActive = function (a, b, c) {
      null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
      var d,
          e,
          f = [],
          g = this.getChildren(a, b, c),
          h = 0,
          i = g.length;

      for (d = 0; i > d; d++) {
        e = g[d], e.isActive() && (f[h++] = e);
      }

      return f;
    }, k.getLabelAfter = function (a) {
      a || 0 !== a && (a = this._time);
      var b,
          c = this.getLabelsArray(),
          d = c.length;

      for (b = 0; d > b; b++) {
        if (c[b].time > a) return c[b].name;
      }

      return null;
    }, k.getLabelBefore = function (a) {
      null == a && (a = this._time);

      for (var b = this.getLabelsArray(), c = b.length; --c > -1;) {
        if (b[c].time < a) return b[c].name;
      }

      return null;
    }, k.getLabelsArray = function () {
      var a,
          b = [],
          c = 0;

      for (a in this._labels) {
        b[c++] = {
          time: this._labels[a],
          name: a
        };
      }

      return b.sort(function (a, b) {
        return a.time - b.time;
      }), b;
    }, k.invalidate = function () {
      return this._locked = !1, a.prototype.invalidate.call(this);
    }, k.progress = function (a, b) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
    }, k.totalProgress = function (a, b) {
      return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
    }, k.totalDuration = function (b) {
      return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
    }, k.time = function (a, b) {
      return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time;
    }, k.repeat = function (a) {
      return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
    }, k.repeatDelay = function (a) {
      return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
    }, k.yoyo = function (a) {
      return arguments.length ? (this._yoyo = a, this) : this._yoyo;
    }, k.currentLabel = function (a) {
      return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
    }, d;
  }, !0), function () {
    var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function g(a, b, c, d) {
      c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a;
    },
        h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function i(a, b, c, d) {
      var e = {
        a: a
      },
          f = {},
          g = {},
          h = {
        c: d
      },
          i = (a + b) / 2,
          j = (b + c) / 2,
          k = (c + d) / 2,
          l = (i + j) / 2,
          m = (j + k) / 2,
          n = (m - l) / 8;
      return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h];
    },
        j = function j(a, e, f, g, h) {
      var j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w = a.length - 1,
          x = 0,
          y = a[0].a;

      for (j = 0; w > j; j++) {
        n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
      }

      n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
    },
        k = function k(a, d, e, f) {
      var h,
          i,
          j,
          k,
          l,
          m,
          n = [];
      if (f) for (a = [f].concat(a), i = a.length; --i > -1;) {
        "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
      }
      if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;

      for (i = 0; h > i; i++) {
        j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
      }

      return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n;
    },
        l = function l(a, f, g, i, _l, m) {
      var n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = {},
          w = [],
          x = m || a[0];
      _l = "string" == typeof _l ? "," + _l + "," : h, null == f && (f = 1);

      for (o in a[0]) {
        w.push(o);
      }

      if (a.length > 1) {
        for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;) {
          if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
            t = !1;
            break;
          }
        }

        t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
      }

      for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) {
        o = w[n], e[o] = -1 !== _l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
      }

      for (n = b.length; --n > -1;) {
        b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
      }

      if (!i) {
        for (n = w.length; --n > -1;) {
          if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) {
            r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
          }
        }

        for (n = d.length; --n > -1;) {
          d[n] = Math.sqrt(d[n]);
        }
      }

      for (n = w.length, q = g ? 4 : 1; --n > -1;) {
        o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
      }

      return v;
    },
        m = function m(a, b, c) {
      b = b || "soft";
      var d,
          e,
          f,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = {},
          q = "cubic" === b ? 3 : 2,
          r = "soft" === b,
          s = [];
      if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";

      for (m in a[0]) {
        s.push(m);
      }

      for (j = s.length; --j > -1;) {
        for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) {
          d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
        }

        for (l = n - q + 1, n = 0, k = 0; l > k; k += q) {
          d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
        }

        i.length = n;
      }

      return p;
    },
        n = function n(a, b, c) {
      for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;) {
        for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) {
          j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d;
        }
      }
    },
        o = function o(a, b) {
      b = b >> 0 || 6;
      var c,
          d,
          e,
          f,
          g = [],
          h = [],
          i = 0,
          j = 0,
          k = b - 1,
          l = [],
          m = [];

      for (c in a) {
        n(a[c], g, b);
      }

      for (e = g.length, d = 0; e > d; d++) {
        i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
      }

      return {
        length: j,
        lengths: h,
        segments: l
      };
    },
        p = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.8",
      API: 2,
      global: !0,
      init: function init(a, b, c) {
        this._target = a, b instanceof Array && (b = {
          values: b
        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
        var d,
            e,
            f,
            g,
            h,
            i = b.values || [],
            j = {},
            k = i[0],
            n = b.autoRotate || c.vars.orientToBezier;
        this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null;

        for (d in k) {
          this._props.push(d);
        }

        for (f = this._props.length; --f > -1;) {
          d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
        }

        if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
          var p = o(this._beziers, this._timeRes);
          this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }

        if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
          for (g = 0; 3 > g; g++) {
            d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
          }

          d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d);
        }
        return this._startRatio = c.vars.runBackwards ? 1 : 0, !0;
      },
      set: function set(b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = this._segCount,
            n = this._func,
            o = this._target,
            p = b !== this._startRatio;

        if (this._timeRes) {
          if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
            for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;) {
              ;
            }

            this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
          } else if (b < this._l1 && e > 0) {
            for (; e > 0 && (this._l1 = k[--e]) >= b;) {
              ;
            }

            0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
          }

          if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
            for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;) {
              ;
            }

            this._s1 = l[e - 1], this._si = e;
          } else if (b < this._s1 && e > 0) {
            for (; e > 0 && (this._s1 = l[--e]) >= b;) {
              ;
            }

            0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
          }

          h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;

        for (d = 1 - h, e = this._props.length; --e > -1;) {
          f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
        }

        if (this._autoRotate) {
          var q,
              r,
              s,
              t,
              u,
              v,
              w,
              x = this._autoRotate;

          for (e = x.length; --e > -1;) {
            f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i);
          }
        }
      }
    }),
        q = p.prototype;

    p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) {
      return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    }, p._cssRegister = function () {
      var a = f.CSSPlugin;

      if (a) {
        var b = a._internals,
            c = b._parseToProxy,
            d = b._setPluginRatio,
            e = b.CSSPropTween;

        b._registerComplexSpecialProp("bezier", {
          parser: function parser(a, b, f, g, h, i) {
            b instanceof Array && (b = {
              values: b
            }), i = new p();
            var j,
                k,
                l,
                m = b.values,
                n = m.length - 1,
                o = [],
                q = {};
            if (0 > n) return h;

            for (j = 0; n >= j; j++) {
              l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
            }

            for (k in b) {
              q[k] = b[k];
            }

            return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h;
          }
        });
      }
    }, q._mod = function (a) {
      for (var b, c = this._overwriteProps, d = c.length; --d > -1;) {
        b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b);
      }
    }, q._kill = function (a) {
      var b,
          c,
          d = this._props;

      for (b in this._beziers) {
        if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) {
          d[c] === b && d.splice(c, 1);
        }
      }

      if (d = this._autoRotate) for (c = d.length; --c > -1;) {
        a[d[c][2]] && d.splice(c, 1);
      }
      return this._super._kill.call(this, a);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
    var c,
        d,
        e,
        f,
        g = function g() {
      a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
    },
        h = _gsScope._gsDefine.globals,
        i = {},
        j = g.prototype = new a("css");

    j.constructor = g, g.version = "1.20.4", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
      top: j,
      right: j,
      bottom: j,
      left: j,
      width: j,
      height: j,
      fontSize: j,
      padding: j,
      margin: j,
      perspective: j,
      lineHeight: ""
    };

    var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        w = /(?:\d|\-|\+|=|#|\.)*/g,
        x = /opacity *= *([^)]*)/i,
        y = /opacity:([^;]*)/i,
        z = /alpha\(opacity *=.+?\)/i,
        A = /^(rgb|hsl)/,
        B = /([A-Z])/g,
        C = /-([a-z])/gi,
        D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        E = function E(a, b) {
      return b.toUpperCase();
    },
        F = /(?:Left|Right|Width)/i,
        G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        I = /,(?=[^\)]*(?:\(|$))/gi,
        J = /[\s,\(]/i,
        K = Math.PI / 180,
        L = 180 / Math.PI,
        M = {},
        N = {
      style: {}
    },
        O = _gsScope.document || {
      createElement: function createElement() {
        return N;
      }
    },
        P = function P(a, b) {
      return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a);
    },
        Q = P("div"),
        R = P("img"),
        S = g._internals = {
      _specialProps: i
    },
        T = (_gsScope.navigator || {}).userAgent || "",
        U = function () {
      var a = T.indexOf("Android"),
          b = P("a");
      return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1;
    }(),
        V = function V(a) {
      return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        W = function W(a) {
      _gsScope.console && console.log(a);
    },
        X = "",
        Y = "",
        Z = function Z(a, b) {
      b = b || Q;
      var c,
          d,
          e = b.style;
      if (void 0 !== e[a]) return a;

      for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];) {
        ;
      }

      return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null;
    },
        $ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
        _ = g.getStyle = function (a, b, c, d, e) {
      var f;
      return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a);
    },
        aa = S.convertToPixels = function (a, c, d, e, f) {
      if ("px" === e || !e && "lineHeight" !== c) return d;
      if ("auto" === e || !d) return 0;
      var h,
          i,
          j,
          k = F.test(c),
          l = a,
          m = Q.style,
          n = 0 > d,
          o = 1 === d;
      if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) {
        if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);else {
          if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;else {
            if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
            m[k ? "width" : "height"] = d + e;
          }
          l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0));
        }
      } else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
      return o && (h /= 100), n ? -h : h;
    },
        ba = S.calculateOffset = function (a, b, c) {
      if ("absolute" !== _(a, "position", c)) return 0;

      var d = "left" === b ? "Left" : "Top",
          e = _(a, "margin" + d, c);

      return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0);
    },
        ca = function ca(a, b) {
      var c,
          d,
          e,
          f = {};
      if (b = b || $(a, null)) {
        if (c = b.length) for (; --c > -1;) {
          e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
        } else for (c in b) {
          (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
        }
      } else if (b = a.currentStyle || a.style) for (c in b) {
        "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
      }
      return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f;
    },
        da = function da(a, b, c, d, e) {
      var f,
          g,
          h,
          i = {},
          j = a.style;

      for (g in c) {
        "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
      }

      if (d) for (g in d) {
        "className" !== g && (i[g] = d[g]);
      }
      return {
        difs: i,
        firstMPT: h
      };
    },
        ea = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ga = function ga(a, b, c) {
      if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
      if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
      var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
          e = ea[b],
          f = e.length;

      for (c = c || $(a, null); --f > -1;) {
        d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
      }

      return d;
    },
        ha = function ha(a, b) {
      if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
      (null == a || "" === a) && (a = "0 0");
      var c,
          d = a.split(" "),
          e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
          f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];

      if (d.length > 3 && !b) {
        for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) {
          a.push(ha(d[c]));
        }

        return a.join(",");
      }

      return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a;
    },
        ia = function ia(a, b) {
      return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
    },
        ja = function ja(a, b) {
      return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
    },
        ka = function ka(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = 1e-6;
      return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h;
    },
        la = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        ma = function ma(a, b, c) {
      return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
    },
        na = g.parseColor = function (a, b) {
      var c, d, e, f, g, h, i, j, k, l, m;
      if (a) {
        if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];else {
          if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];else if ("hsl" === a.substr(0, 3)) {
            if (c = m = a.match(s), b) {
              if (-1 !== a.indexOf("=")) return a.match(t);
            } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
          } else c = a.match(s) || la.transparent;
          c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]));
        }
      } else c = la.black;
      return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c;
    },
        oa = function oa(a, b) {
      var c,
          d,
          e,
          f = a.match(pa) || [],
          g = 0,
          h = "";
      if (!f.length) return a;

      for (c = 0; c < f.length; c++) {
        d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
      }

      return h + a.substr(g);
    },
        pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (j in la) {
      pa += "|" + j + "\\b";
    }

    pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) {
      var b,
          c = a[0] + " " + a[1];
      pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0;
    }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);

    var qa = function qa(a, b, c, d) {
      if (null == a) return function (a) {
        return a;
      };
      var e,
          f = b ? (a.match(pa) || [""])[0] : "",
          g = a.split(f).join("").match(u) || [],
          h = a.substr(0, a.indexOf(g[0])),
          i = ")" === a.charAt(a.length - 1) ? ")" : "",
          j = -1 !== a.indexOf(" ") ? " " : ",",
          k = g.length,
          l = k > 0 ? g[0].replace(s, "") : "";
      return k ? e = b ? function (a) {
        var b, m, n, o;
        if ("number" == typeof a) a += l;else if (d && I.test(a)) {
          for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) {
            o[n] = e(o[n]);
          }

          return o.join(",");
        }
        if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--) for (; ++n < k;) {
          m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
        }
        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
      } : function (a) {
        var b, f, m;
        if ("number" == typeof a) a += l;else if (d && I.test(a)) {
          for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) {
            f[m] = e(f[m]);
          }

          return f.join(",");
        }
        if (b = a.match(u) || [], m = b.length, k > m--) for (; ++m < k;) {
          b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
        }
        return h + b.join(j) + i;
      } : function (a) {
        return a;
      };
    },
        ra = function ra(a) {
      return a = a.split(","), function (b, c, d, e, f, g, h) {
        var i,
            j = (c + "").split(" ");

        for (h = {}, i = 0; 4 > i; i++) {
          h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
        }

        return e.parse(b, h, f, g);
      };
    },
        sa = (S._setPluginRatio = function (a) {
      this.plugin.setRatio(a);

      for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) {
        b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
      }

      if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
        if (c = i.t, c.type) {
          if (1 === c.type) {
            for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) {
              e += c["xn" + d] + c["xs" + (d + 1)];
            }

            c[f] = e;
          }
        } else c[f] = c.s + c.xs0;

        i = i._next;
      }
    }, function (a, b, c, d, e) {
      this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
    }),
        ta = (S._parseToProxy = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l = d,
          m = {},
          n = {},
          o = c._transform,
          p = M;

      for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
        if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;) {
          i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
        }
        d = d._next;
      }

      return {
        proxy: m,
        end: n,
        firstMPT: j,
        pt: k
      };
    }, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
      this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
    }),
        ua = function ua(a, b, c, d, e, f) {
      var g = new ta(a, b, c, d - c, e, -1, f);
      return g.b = c, g.e = g.xs0 = d, g;
    },
        va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
      c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
      var m,
          n,
          o,
          p,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D = c.split(", ").join(",").split(" "),
          E = d.split(", ").join(",").split(" "),
          F = D.length,
          G = k !== !1;

      for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++) {
        if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;else if (v = p.match(s)) {
          if (w = u.match(t), !w || w.length !== v.length) return h;

          for (o = 0, n = 0; n < v.length; n++) {
            A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
          }

          h["xs" + h.l] += p.substr(o);
        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
      }

      if (-1 !== d.indexOf("=") && h.data) {
        for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) {
          B += h["xs" + m] + h.data["xn" + m];
        }

        h.e = B + h["xs" + m];
      }

      return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
    },
        wa = 9;

    for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) {
      j["xn" + wa] = 0, j["xs" + wa] = "";
    }

    j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
      var g = this,
          h = g.l;
      return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
        s: b + c
      }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
    };

    var xa = function xa(a, b) {
      b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0;
    },
        ya = S._registerComplexSpecialProp = function (a, b, c) {
      "object" != _typeof(b) && (b = {
        parser: c
      });
      var d,
          e,
          f = a.split(","),
          g = b.defaultValue;

      for (c = c || [g], d = 0; d < f.length; d++) {
        b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b);
      }
    },
        za = S._registerPluginProp = function (a) {
      if (!i[a]) {
        var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
        ya(a, {
          parser: function parser(a, c, d, e, f, g, j) {
            var k = h.com.greensock.plugins[b];
            return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f);
          }
        });
      }
    };

    j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l,
          m = this.keyword;

      if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) {
          b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
        }

        b = h.join(", "), c = i.join(", ");
      }

      return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
    }, j.parse = function (a, b, c, d, f, g, h) {
      return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
    }, g.registerSpecialProp = function (a, b, c) {
      ya(a, {
        parser: function parser(a, d, e, f, g, h, i) {
          var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
          return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
        },
        priority: c
      });
    }, g.useSVGTransformAttr = !0;

    var Aa,
        Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        Ca = Z("transform"),
        Da = X + "transform",
        Ea = Z("transformOrigin"),
        Fa = null !== Z("perspective"),
        Ga = S.Transform = function () {
      this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1;
    },
        Ha = _gsScope.SVGElement,
        Ia = function Ia(a, b, c) {
      var d,
          e = O.createElementNS("http://www.w3.org/2000/svg", a),
          f = /([a-z])([A-Z])/g;

      for (d in c) {
        e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
      }

      return b.appendChild(e), e;
    },
        Ja = O.documentElement || {},
        Ka = function () {
      var a,
          b,
          c,
          d = p || /Android/i.test(T) && !_gsScope.chrome;
      return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
        width: 100,
        height: 50,
        x: 100
      }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d;
    }(),
        La = function La(a, b, c, d, e, f) {
      var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = a._gsTransform,
          w = Qa(a, !0);
      v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
        x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
        y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
        width: 0,
        height: 0
      }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
    },
        Ma = function Ma(a) {
      var b,
          c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          d = this.parentNode,
          e = this.nextSibling,
          f = this.style.cssText;
      if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
        b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma;
      } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
      return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b;
    },
        Na = function Na(a) {
      try {
        return a.getBBox();
      } catch (b) {
        return Ma.call(a, !0);
      }
    },
        Oa = function Oa(a) {
      return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a));
    },
        Pa = [1, 0, 0, 1, 0, 0],
        Qa = function Qa(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i = a._gsTransform || new Ga(),
          j = 1e5,
          k = a.style;
      if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa;

      for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) {
        f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
      }

      return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
    },
        Ra = S.getTransform = function (a, c, d, e) {
      if (a._gsTransform && d && !e) return a._gsTransform;
      var f,
          h,
          i,
          j,
          k,
          l,
          m = d ? a._gsTransform || new Ga() : new Ga(),
          n = m.scaleX < 0,
          o = 2e-5,
          p = 1e5,
          q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
          r = parseFloat(g.defaultTransformPerspective) || 0;

      if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
        if (16 === f.length) {
          var s,
              t,
              u,
              v,
              w,
              x = f[0],
              y = f[1],
              z = f[2],
              A = f[3],
              B = f[4],
              C = f[5],
              D = f[6],
              E = f[7],
              F = f[8],
              G = f[9],
              H = f[10],
              I = f[12],
              J = f[13],
              K = f[14],
              M = f[11],
              N = Math.atan2(D, H);
          m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
        } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
          var O = f.length >= 6,
              P = O ? f[0] : 1,
              Q = f[1] || 0,
              R = f[2] || 0,
              S = O ? f[3] : 1;
          m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
        }

        Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;

        for (h in m) {
          m[h] < o && m[h] > -o && (m[h] = 0);
        }
      }

      return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () {
        Va(a.style, Ca);
      }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () {
        a.removeAttribute("transform");
      }))), m;
    },
        Sa = function Sa(a) {
      var b,
          c,
          d = this.data,
          e = -d.rotation * K,
          f = e + d.skewX * K,
          g = 1e5,
          h = (Math.cos(e) * d.scaleX * g | 0) / g,
          i = (Math.sin(e) * d.scaleX * g | 0) / g,
          j = (Math.sin(f) * -d.scaleY * g | 0) / g,
          k = (Math.cos(f) * d.scaleY * g | 0) / g,
          l = this.t.style,
          m = this.t.currentStyle;

      if (m) {
        c = i, i = -j, j = -c, b = m.filter, l.filter = "";
        var n,
            o,
            q = this.t.offsetWidth,
            r = this.t.offsetHeight,
            s = "absolute" !== m.position,
            t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
            u = d.x + q * d.xPercent / 100,
            v = d.y + r * d.yPercent / 100;

        if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
          var y,
              z,
              A,
              B = 8 > p ? 1 : -1;

          for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) {
            z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px";
          }
        }
      }
    },
        Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z = this.data,
          A = this.t.style,
          B = z.rotation,
          C = z.rotationX,
          D = z.rotationY,
          E = z.scaleX,
          F = z.scaleY,
          G = z.scaleZ,
          H = z.x,
          I = z.y,
          J = z.z,
          L = z.svg,
          M = z.perspective,
          N = z.force3D,
          O = z.skewY,
          P = z.skewX;
      if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void (B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
      if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;else {
        if (!(D || C || 1 !== G || M || L)) return void (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
        c = g = 1, d = f = 0;
      }
      k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u;
    };

    j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(a, b, c, d, f, h, i) {
        if (d._lastParsedTransform === i) return f;
        d._lastParsedTransform = i;
        var j,
            k = i.scale && "function" == typeof i.scale ? i.scale : 0;
        "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
        var l,
            m,
            n,
            o,
            p,
            s,
            t,
            u,
            v,
            w = a._gsTransform,
            x = a.style,
            y = 1e-6,
            z = Ba.length,
            A = i,
            B = {},
            C = "transformOrigin",
            D = Ra(a, e, !0, A.parseTransform),
            E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
        if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));else if ("object" == _typeof(A)) {
          if (l = {
            scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
            scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
            scaleZ: ja(A.scaleZ, D.scaleZ),
            x: ja(A.x, D.x),
            y: ja(A.y, D.y),
            z: ja(A.z, D.z),
            xPercent: ja(A.xPercent, D.xPercent),
            yPercent: ja(A.yPercent, D.yPercent),
            perspective: ja(A.transformPerspective, D.perspective)
          }, p = A.directionalRotation, null != p) if ("object" == _typeof(p)) for (m in p) {
            A[m] = p[m];
          } else A.rotation = p;
          "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY);
        }

        for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) {
          v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
        }

        return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f;
      },
      prefix: !0
    }), ya("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), ya("borderRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, f, g, h) {
        b = this.format(b);
        var i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            z = a.style;

        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) {
          this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
        }

        return g;
      },
      prefix: !0,
      formatter: qa("0px 0px 0px 0px", !1, !0)
    }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, d, f, g) {
        return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
      },
      prefix: !0,
      formatter: qa("0px 0px", !1, !0)
    }), ya("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(a, b, c, d, f, g) {
        var h,
            i,
            j,
            k,
            l,
            m,
            n = "background-position",
            o = e || $(a, null),
            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
            r = this.format(b);

        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
          for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) {
            q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
          }

          q = h.join(" ");
        }

        return this.parseComplex(a.style, q, r, f, g);
      },
      formatter: ha
    }), ya("backgroundSize", {
      defaultValue: "0 0",
      formatter: function formatter(a) {
        return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a);
      }
    }), ya("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), ya("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), ya("transformStyle", {
      prefix: !0
    }), ya("backfaceVisibility", {
      prefix: !0
    }), ya("userSelect", {
      prefix: !0
    }), ya("margin", {
      parser: ra("marginTop,marginRight,marginBottom,marginLeft")
    }), ya("padding", {
      parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), ya("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(a, b, c, d, f, g) {
        var h, i, j;
        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
      }
    }), ya("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), ya("autoRound,strictUnits", {
      parser: function parser(a, b, c, d, e) {
        return e;
      }
    }), ya("border", {
      defaultValue: "0px solid #000",
      parser: function parser(a, b, c, d, f, g) {
        var h = _(a, "borderTopWidth", e, !1, "0px"),
            i = this.format(b).split(" "),
            j = i[0].replace(w, "");

        return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g);
      },
      color: !0,
      formatter: function formatter(a) {
        var b = a.split(" ");
        return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0];
      }
    }), ya("borderWidth", {
      parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), ya("float,cssFloat,styleFloat", {
      parser: function parser(a, b, c, d, e, f) {
        var g = a.style,
            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
        return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
      }
    });

    var Ua = function Ua(a) {
      var b,
          c = this.t,
          d = c.filter || _(this.data, "filter") || "",
          e = this.s + this.c * a | 0;
      100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e));
    };

    ya("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(a, b, c, d, f, g) {
        var h = parseFloat(_(a, "opacity", e, !1, "1")),
            i = a.style,
            j = "autoAlpha" === c;
        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
      }
    });

    var Va = function Va(a, b) {
      b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b));
    },
        Wa = function Wa(a) {
      if (this.t._gsClassPT = this, 1 === a || 0 === a) {
        this.t.setAttribute("class", 0 === a ? this.b : this.e);

        for (var b = this.data, c = this.t.style; b;) {
          b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
        }

        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    ya("className", {
      parser: function parser(a, b, d, f, g, h, i) {
        var j,
            k,
            l,
            m,
            n,
            o = a.getAttribute("class") || "",
            p = a.style.cssText;

        if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
          for (m = {}, n = l.data; n;) {
            m[n.p] = 1, n = n._next;
          }

          l.setRatio(1);
        }

        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h);
      }
    });

    var Xa = function Xa(a) {
      if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var b,
            c,
            d,
            e,
            f,
            g = this.t.style,
            h = i.transform.parse;
        if ("all" === this.e) g.cssText = "", e = !0;else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) {
          c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
        }
        e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };

    for (ya("clearProps", {
      parser: function parser(a, b, d, e, f) {
        return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f;
      }
    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) {
      za(j[wa]);
    }

    j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
      if (!a.nodeType) return !1;
      this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
      var n,
          p,
          s,
          t,
          u,
          v,
          w,
          x,
          z,
          A = a.style;

      if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
        for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) {
          s = s._next;
        }

        x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop();
      }

      if (c) {
        for (; p;) {
          for (v = p._next, s = t; s && s.pr > p.pr;) {
            s = s._next;
          }

          (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v;
        }

        this._firstPT = t;
      }

      return !0;
    }, j.parse = function (a, b, c, f) {
      var g,
          h,
          j,
          l,
          m,
          n,
          o,
          p,
          s,
          t,
          u = a.style;

      for (g in b) {
        if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);else {
          if ("--" === g.substr(0, 2)) {
            this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
            continue;
          }

          m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p));
        }
        f && c && !c.plugin && (c.plugin = f);
      }

      return c;
    }, j.setRatio = function (a) {
      var b,
          c,
          d,
          e = this._firstPT,
          f = 1e-6;
      if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) {
          if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type) {
            if (1 === e.type) {
              if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;else {
                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
          } else e.t[e.p] = b + e.xs0;
          e = e._next;
        } else for (; e;) {
          2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
        }
      } else for (; e;) {
        if (2 !== e.type) {
          if (e.r && -1 !== e.type) {
            if (b = Math.round(e.s + e.c), e.type) {
              if (1 === e.type) {
                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else e.t[e.p] = b + e.xs0;
          } else e.t[e.p] = e.e;
        } else e.setRatio(a);
        e = e._next;
      }
    }, j._enableTransforms = function (a) {
      this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3;
    };

    var Ya = function Ya(a) {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    j._addLazySet = function (a, b, c) {
      var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
      d.e = c, d.setRatio = Ya, d.data = this;
    }, j._linkCSSP = function (a, b, c, d) {
      return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a;
    }, j._mod = function (a) {
      for (var b = this._firstPT; b;) {
        "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next;
      }
    }, j._kill = function (b) {
      var c,
          d,
          e,
          f = b;

      if (b.autoAlpha || b.alpha) {
        f = {};

        for (d in b) {
          f[d] = b[d];
        }

        f.opacity = 1, f.autoAlpha && (f.visibility = 1);
      }

      for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) {
        c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
      }

      return a.prototype._kill.call(this, f);
    };

    var Za = function Za(a, b, c) {
      var d, e, f, g;
      if (a.slice) for (e = a.length; --e > -1;) {
        Za(a[e], b, c);
      } else for (d = a.childNodes, e = d.length; --e > -1;) {
        f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c);
      }
    };

    return g.cascadeTo = function (a, c, d) {
      var e,
          f,
          g,
          h,
          i = b.to(a, c, d),
          j = [i],
          k = [],
          l = [],
          m = [],
          n = b._internals.reservedProps;

      for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;) {
        if (f = da(m[e], k[e], l[e]), f.firstMPT) {
          f = f.difs;

          for (g in d) {
            n[g] && (f[g] = d[g]);
          }

          h = {};

          for (g in f) {
            h[g] = k[e][g];
          }

          j.push(b.fromTo(m[e], c, h, f));
        }
      }

      return j;
    }, a.activate([g]), g;
  }, !0), function () {
    var a = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.6.0",
      priority: -1,
      API: 2,
      init: function init(a, b, c) {
        return this._tween = c, !0;
      }
    }),
        b = function b(a) {
      for (; a;) {
        a.f || a.blob || (a.m = Math.round), a = a._next;
      }
    },
        c = a.prototype;

    c._onInitAllProps = function () {
      for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) {
        h[f[g]] = Math.round;
      }

      for (g = f.length; --g > -1;) {
        for (a = f[g], c = e._firstPT; c;) {
          d = c._next, c.pg ? c.t._mod(h) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
        }
      }

      return !1;
    }, c._add = function (a, b, c, d) {
      this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b);
    };
  }(), function () {
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function init(a, b, c, d) {
        var e, f;
        if ("function" != typeof a.setAttribute) return !1;

        for (e in b) {
          f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
        }

        return !0;
      }
    });
  }(), _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.3.1",
    API: 2,
    init: function init(a, b, c, d) {
      "object" != _typeof(b) && (b = {
        rotation: b
      }), this.finals = {};
      var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;

      for (e in b) {
        "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
      }

      return !0;
    },
    set: function set(a) {
      var b;
      if (1 !== a) this._super.setRatio.call(this, a);else for (b = this._firstPT; b;) {
        b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next;
      }
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
    var b,
        c,
        d,
        e,
        f = _gsScope.GreenSockGlobals || _gsScope,
        g = f.com.greensock,
        h = 2 * Math.PI,
        i = Math.PI / 2,
        j = g._class,
        k = function k(b, c) {
      var d = j("easing." + b, function () {}, !0),
          e = d.prototype = new a();
      return e.constructor = d, e.getRatio = c, d;
    },
        l = a.register || function () {},
        m = function m(a, b, c, d, e) {
      var f = j("easing." + a, {
        easeOut: new b(),
        easeIn: new c(),
        easeInOut: new d()
      }, !0);
      return l(f, a), f;
    },
        n = function n(a, b, c) {
      this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a);
    },
        o = function o(b, c) {
      var d = j("easing." + b, function (a) {
        this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
      }, !0),
          e = d.prototype = new a();
      return e.constructor = d, e.getRatio = c, e.config = function (a) {
        return new d(a);
      }, d;
    },
        p = m("Back", o("BackOut", function (a) {
      return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
    }), o("BackIn", function (a) {
      return a * a * ((this._p1 + 1) * a - this._p1);
    }), o("BackInOut", function (a) {
      return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
    })),
        q = j("easing.SlowMo", function (a, b, c) {
      b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0;
    }, !0),
        r = q.prototype = new a();

    return r.constructor = q, r.getRatio = function (a) {
      var b = a + (.5 - a) * this._p;
      return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
    }, q.ease = new q(.7, .7), r.config = q.config = function (a, b, c) {
      return new q(a, b, c);
    }, b = j("easing.SteppedEase", function (a, b) {
      a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0;
    }, !0), r = b.prototype = new a(), r.constructor = b, r.getRatio = function (a) {
      return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
    }, r.config = b.config = function (a, c) {
      return new b(a, c);
    }, c = j("easing.ExpoScaleEase", function (a, b, c) {
      this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c;
    }, !0), r = c.prototype = new a(), r.constructor = c, r.getRatio = function (a) {
      return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
    }, r.config = c.config = function (a, b, d) {
      return new c(a, b, d);
    }, d = j("easing.RoughEase", function (b) {
      b = b || {};

      for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) {
        c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
          x: c,
          y: d
        };
      }

      for (j.sort(function (a, b) {
        return a.x - b.x;
      }), h = new n(1, 1, null), m = l; --m > -1;) {
        g = j[m], h = new n(g.x, g.y, h);
      }

      this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
    }, !0), r = d.prototype = new a(), r.constructor = d, r.getRatio = function (a) {
      var b = this._prev;

      if (a > b.t) {
        for (; b.next && a >= b.t;) {
          b = b.next;
        }

        b = b.prev;
      } else for (; b.prev && a <= b.t;) {
        b = b.prev;
      }

      return this._prev = b, b.v + (a - b.t) / b.gap * b.c;
    }, r.config = function (a) {
      return new d(a);
    }, d.ease = new d(), m("Bounce", k("BounceOut", function (a) {
      return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
    }), k("BounceIn", function (a) {
      return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
    }), k("BounceInOut", function (a) {
      var b = .5 > a;
      return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5;
    })), m("Circ", k("CircOut", function (a) {
      return Math.sqrt(1 - (a -= 1) * a);
    }), k("CircIn", function (a) {
      return -(Math.sqrt(1 - a * a) - 1);
    }), k("CircInOut", function (a) {
      return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
    })), e = function e(b, c, d) {
      var e = j("easing." + b, function (a, b) {
        this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2;
      }, !0),
          f = e.prototype = new a();
      return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
        return new e(a, b);
      }, e;
    }, m("Elastic", e("ElasticOut", function (a) {
      return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
    }, .3), e("ElasticIn", function (a) {
      return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
    }, .3), e("ElasticInOut", function (a) {
      return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;
    }, .45)), m("Expo", k("ExpoOut", function (a) {
      return 1 - Math.pow(2, -10 * a);
    }), k("ExpoIn", function (a) {
      return Math.pow(2, 10 * (a - 1)) - .001;
    }), k("ExpoInOut", function (a) {
      return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
    })), m("Sine", k("SineOut", function (a) {
      return Math.sin(a * i);
    }), k("SineIn", function (a) {
      return -Math.cos(a * i) + 1;
    }), k("SineInOut", function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    })), j("easing.EaseLookup", {
      find: function find(b) {
        return a.map[b];
      }
    }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a, b) {
  "use strict";

  var c = {},
      d = a.document,
      e = a.GreenSockGlobals = a.GreenSockGlobals || a;

  if (!e.TweenLite) {
    var f,
        g,
        h,
        i,
        j,
        k = function k(a) {
      var b,
          c = a.split("."),
          d = e;

      for (b = 0; b < c.length; b++) {
        d[c[b]] = d = d[c[b]] || {};
      }

      return d;
    },
        l = k("com.greensock"),
        m = 1e-10,
        n = function n(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        o = function o() {},
        p = function () {
      var a = Object.prototype.toString,
          b = a.call([]);
      return function (c) {
        return null != c && (c instanceof Array || "object" == _typeof(c) && !!c.push && a.call(c) === b);
      };
    }(),
        q = {},
        r = function r(d, f, g, h) {
      this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
      var i = [];
      this.check = function (j) {
        for (var l, m, n, o, p = f.length, s = p; --p > -1;) {
          (l = q[f[p]] || new r(f[p], [])).gsClass ? (i[p] = l.gsClass, s--) : j && l.sc.push(this);
        }

        if (0 === s && g) {
          if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (e[n] = c[n] = o, "undefined" != typeof module && module.exports) {
            if (d === b) {
              module.exports = c[b] = o;

              for (p in c) {
                o[p] = c[p];
              }
            } else c[b] && (c[b][n] = o);
          } else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
            return o;
          });

          for (p = 0; p < this.sc.length; p++) {
            this.sc[p].check();
          }
        }
      }, this.check(!0);
    },
        s = a._gsDefine = function (a, b, c, d) {
      return new r(a, b, c, d);
    },
        t = l._class = function (a, b, c) {
      return b = b || function () {}, s(a, [], function () {
        return b;
      }, c), b;
    };

    s.globals = e;

    var u = [0, 0, 1, 1],
        v = t("easing.Ease", function (a, b, c, d) {
      this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u;
    }, !0),
        w = v.map = {},
        x = v.register = function (a, b, c, d) {
      for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) {
        for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) {
          h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
        }
      }
    };

    for (h = v.prototype, h._calcEnd = !1, h.getRatio = function (a) {
      if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
      var b = this._type,
          c = this._power,
          d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
      return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
    }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) {
      h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
    }

    w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
    var y = t("events.EventDispatcher", function (a) {
      this._listeners = {}, this._eventTarget = a || this;
    });
    h = y.prototype, h.addEventListener = function (a, b, c, d, e) {
      e = e || 0;
      var f,
          g,
          h = this._listeners[a],
          k = 0;

      for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) {
        f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
      }

      h.splice(k, 0, {
        c: b,
        s: c,
        up: d,
        pr: e
      });
    }, h.removeEventListener = function (a, b) {
      var c,
          d = this._listeners[a];
      if (d) for (c = d.length; --c > -1;) {
        if (d[c].c === b) return void d.splice(c, 1);
      }
    }, h.dispatchEvent = function (a) {
      var b,
          c,
          d,
          e = this._listeners[a];
      if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) {
        d = e[b], d && (d.up ? d.c.call(d.s || c, {
          type: a,
          target: c
        }) : d.c.call(d.s || c));
      }
    };

    var z = a.requestAnimationFrame,
        A = a.cancelAnimationFrame,
        B = Date.now || function () {
      return new Date().getTime();
    },
        C = B();

    for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) {
      z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
    }

    t("Ticker", function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          k = this,
          l = B(),
          n = b !== !1 && z ? "auto" : !1,
          p = 500,
          q = 33,
          r = "tick",
          s = function s(a) {
        var b,
            d,
            i = B() - C;
        i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r);
      };

      y.call(k), k.time = k.frame = 0, k.tick = function () {
        s(!0);
      }, k.lagSmoothing = function (a, b) {
        return arguments.length ? (p = a || 1 / m, void (q = Math.min(b, p, 0))) : 1 / m > p;
      }, k.sleep = function () {
        null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1));
      }, k.wake = function (a) {
        null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function (a) {
          return setTimeout(a, 1e3 * (h - k.time) + 1 | 0);
        }, k === i && (j = !0), s(2);
      }, k.fps = function (a) {
        return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c;
      }, k.useRAF = function (a) {
        return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n;
      }, k.fps(a), setTimeout(function () {
        "auto" === n && k.frame < 5 && "hidden" !== (d || {}).visibilityState && k.useRAF(!1);
      }, 1500);
    }), h = l.Ticker.prototype = new l.events.EventDispatcher(), h.constructor = l.Ticker;
    var D = t("core.Animation", function (a, b) {
      if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, X) {
        j || i.wake();
        var c = this.vars.useFrames ? W : X;
        c.add(this, c._time), this.vars.paused && this.paused(!0);
      }
    });
    i = D.ticker = new l.Ticker(), h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;

    var E = function E() {
      j && B() - C > 2e3 && ("hidden" !== (d || {}).visibilityState || !i.lagSmoothing()) && i.wake();
      var a = setTimeout(E, 2e3);
      a.unref && a.unref();
    };

    E(), h.play = function (a, b) {
      return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
    }, h.pause = function (a, b) {
      return null != a && this.seek(a, b), this.paused(!0);
    }, h.resume = function (a, b) {
      return null != a && this.seek(a, b), this.paused(!1);
    }, h.seek = function (a, b) {
      return this.totalTime(Number(a), b !== !1);
    }, h.restart = function (a, b) {
      return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
    }, h.reverse = function (a, b) {
      return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
    }, h.render = function (a, b, c) {}, h.invalidate = function () {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
    }, h.isActive = function () {
      var a,
          b = this._timeline,
          c = this._startTime;
      return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7;
    }, h._enabled = function (a, b) {
      return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
    }, h._kill = function (a, b) {
      return this._enabled(!1, !1);
    }, h.kill = function (a, b) {
      return this._kill(a, b), this;
    }, h._uncache = function (a) {
      for (var b = a ? this : this.timeline; b;) {
        b._dirty = !0, b = b.timeline;
      }

      return this;
    }, h._swapSelfInParams = function (a) {
      for (var b = a.length, c = a.concat(); --b > -1;) {
        "{self}" === a[b] && (c[b] = this);
      }

      return c;
    }, h._callback = function (a) {
      var b = this.vars,
          c = b[a],
          d = b[a + "Params"],
          e = b[a + "Scope"] || b.callbackScope || this,
          f = d ? d.length : 0;

      switch (f) {
        case 0:
          c.call(e);
          break;

        case 1:
          c.call(e, d[0]);
          break;

        case 2:
          c.call(e, d[0], d[1]);
          break;

        default:
          c.apply(e, d);
      }
    }, h.eventCallback = function (a, b, c, d) {
      if ("on" === (a || "").substr(0, 2)) {
        var e = this.vars;
        if (1 === arguments.length) return e[a];
        null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
      }

      return this;
    }, h.delay = function (a) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
    }, h.duration = function (a) {
      return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
    }, h.totalDuration = function (a) {
      return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
    }, h.time = function (a, b) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
    }, h.totalTime = function (a, b, c) {
      if (j || i.wake(), !arguments.length) return this._totalTime;

      if (this._timeline) {
        if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var d = this._totalDuration,
              e = this._timeline;
          if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) {
            e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
          }
        }

        this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z());
      }

      return this;
    }, h.progress = h.totalProgress = function (a, b) {
      var c = this.duration();
      return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
    }, h.startTime = function (a) {
      return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
    }, h.endTime = function (a) {
      return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
    }, h.timeScale = function (a) {
      if (!arguments.length) return this._timeScale;
      var b, c;

      for (a = a || m, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) {
        c._dirty = !0, c.totalDuration(), c = c.timeline;
      }

      return this;
    }, h.reversed = function (a) {
      return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
    }, h.paused = function (a) {
      if (!arguments.length) return this._paused;
      var b,
          c,
          d = this._timeline;
      return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
    };
    var F = t("core.SimpleTimeline", function (a) {
      D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    h = F.prototype = new D(), h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function (a, b, c, d) {
      var e, f;
      if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) {
        e = e._prev;
      }
      return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
    }, h._remove = function (a, b) {
      return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
    }, h.render = function (a, b, c) {
      var d,
          e = this._first;

      for (this._totalTime = this._time = this._rawPrevTime = a; e;) {
        d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
      }
    }, h.rawTime = function () {
      return j || i.wake(), this._totalTime;
    };

    var G = t("TweenLite", function (b, c, d) {
      if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
      this.target = b = "string" != typeof b ? b : G.selector(b) || b;
      var e,
          f,
          g,
          h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
          i = this.vars.overwrite;
      if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0]) for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) {
        f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
      } else this._propLookup = {}, this._siblings = $(b, this, !1), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)));
    }, !0),
        H = function H(b) {
      return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
    },
        I = function I(a, b) {
      var c,
          d = {};

      for (c in a) {
        U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c], delete a[c]);
      }

      a.css = d;
    };

    h = G.prototype = new D(), h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.20.4", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function (a, b) {
      i.lagSmoothing(a, b);
    }, G.selector = a.$ || a.jQuery || function (b) {
      var c = a.$ || a.jQuery;
      return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
    };

    var J = [],
        K = {},
        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        M = /[\+-]=-?[\.\d]/,
        N = function N(a) {
      for (var b, c = this._firstPT, d = 1e-6; c;) {
        b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
      }
    },
        O = function O(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = [],
          m = 0,
          n = "",
          o = 0;

      for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) {
        k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
          _next: l._firstPT,
          t: l,
          p: l.length - 1,
          s: g,
          c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
          f: 0,
          m: o && 4 > o ? Math.round : 0
        }), m += k.length;
      }

      return n += b.substr(m), n && l.push(n), l.setRatio = N, M.test(b) && (l.end = null), l;
    },
        P = function P(a, b, c, d, e, f, g, h, i) {
      "function" == typeof d && (d = d(i || 0, a));

      var j,
          k = _typeof(a[b]),
          l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
          m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
          n = "string" == typeof d && "=" === d.charAt(1),
          o = {
        t: a,
        p: b,
        s: m,
        f: "function" === k,
        pg: 0,
        n: e || b,
        m: f ? "function" == typeof f ? f : Math.round : 0,
        pr: 0,
        c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
      };

      return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = O(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || G.defaultStringFilter, o), o = {
        t: j,
        p: "setRatio",
        s: 0,
        c: 1,
        f: 2,
        pg: 0,
        n: e || b,
        pr: 0,
        m: 0
      }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
    },
        Q = G._internals = {
      isArray: p,
      isSelector: H,
      lazyTweens: J,
      blobDif: O
    },
        R = G._plugins = {},
        S = Q.tweenLookup = {},
        T = 0,
        U = Q.reservedProps = {
      ease: 1,
      delay: 1,
      overwrite: 1,
      onComplete: 1,
      onCompleteParams: 1,
      onCompleteScope: 1,
      useFrames: 1,
      runBackwards: 1,
      startAt: 1,
      onUpdate: 1,
      onUpdateParams: 1,
      onUpdateScope: 1,
      onStart: 1,
      onStartParams: 1,
      onStartScope: 1,
      onReverseComplete: 1,
      onReverseCompleteParams: 1,
      onReverseCompleteScope: 1,
      onRepeat: 1,
      onRepeatParams: 1,
      onRepeatScope: 1,
      easeParams: 1,
      yoyo: 1,
      immediateRender: 1,
      repeat: 1,
      repeatDelay: 1,
      data: 1,
      paused: 1,
      reversed: 1,
      autoCSS: 1,
      lazy: 1,
      onOverwrite: 1,
      callbackScope: 1,
      stringFilter: 1,
      id: 1,
      yoyoEase: 1
    },
        V = {
      none: 0,
      all: 1,
      auto: 2,
      concurrent: 3,
      allOnStart: 4,
      preexisting: 5,
      "true": 1,
      "false": 0
    },
        W = D._rootFramesTimeline = new F(),
        X = D._rootTimeline = new F(),
        Y = 30,
        Z = Q.lazyRender = function () {
      var a,
          b = J.length;

      for (K = {}; --b > -1;) {
        a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
      }

      J.length = 0;
    };

    X._startTime = i.time, W._startTime = i.frame, X._active = W._active = !0, setTimeout(Z, 1), D._updateRoot = G.render = function () {
      var a, b, c;

      if (J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y) {
        Y = i.frame + (parseInt(G.autoSleep, 10) || 120);

        for (c in S) {
          for (b = S[c].tweens, a = b.length; --a > -1;) {
            b[a]._gc && b.splice(a, 1);
          }

          0 === b.length && delete S[c];
        }

        if (c = X._first, (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
          for (; c && c._paused;) {
            c = c._next;
          }

          c || i.sleep();
        }
      }
    }, i.addEventListener("tick", D._updateRoot);

    var $ = function $(a, b, c) {
      var d,
          e,
          f = a._gsTweenID;
      if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = {
        target: a,
        tweens: []
      }), b && (d = S[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) {
        d[e] === b && d.splice(e, 1);
      }
      return S[f].tweens;
    },
        _ = function _(a, b, c, d) {
      var e,
          f,
          g = a.vars.onOverwrite;
      return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
    },
        aa = function aa(a, b, c, d, e) {
      var f, g, h, i;

      if (1 === d || d >= 4) {
        for (i = e.length, f = 0; i > f; f++) {
          if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);else if (5 === d) break;
        }

        return g;
      }

      var j,
          k = b._startTime + m,
          l = [],
          n = 0,
          o = 0 === b._duration;

      for (f = e.length; --f > -1;) {
        (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o), 0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
      }

      for (f = n; --f > -1;) {
        if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
          if (2 !== d && !_(h, b)) continue;
          h._enabled(!1, !1) && (g = !0);
        }
      }

      return g;
    },
        ba = function ba(a, b, c) {
      for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
        d = d._timeline;
      }

      return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m;
    };

    h._init = function () {
      var a,
          b,
          c,
          d,
          e,
          f,
          g = this.vars,
          h = this._overwrittenProps,
          i = this._duration,
          j = !!g.immediateRender,
          k = g.ease;

      if (g.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};

        for (d in g.startAt) {
          e[d] = g.startAt[d];
        }

        if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = G.to(this.target, 0, e), j) if (this._time > 0) this._startAt = null;else if (0 !== i) return;
      } else if (g.runBackwards && 0 !== i) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
        0 !== this._time && (j = !1), c = {};

        for (d in g) {
          U[d] && "autoCSS" !== d || (c[d] = g[d]);
        }

        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
          if (0 === this._time) return;
        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
      }

      if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++) {
        this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
      } else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
      if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;) {
        c.s += c.c, c.c = -c.c, c = c._next;
      }
      this._onUpdate = g.onUpdate, this._initted = !0;
    }, h._initProps = function (b, c, d, e, f) {
      var g, h, i, j, k, l;
      if (null == b) return !1;
      K[b._gsTweenID] && Z(), this.vars.css || b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b);

      for (g in this.vars) {
        if (l = this.vars[g], U[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));else if (R[g] && (j = new R[g]())._onInitTween(b, this.vars[g], this, f)) {
          for (this._firstPT = k = {
            _next: this._firstPT,
            t: j,
            p: "setRatio",
            s: 0,
            c: 1,
            f: 1,
            n: g,
            pg: 1,
            pr: j._priority,
            m: 0
          }, h = j._overwriteProps.length; --h > -1;) {
            c[j._overwriteProps[h]] = this._firstPT;
          }

          (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
        } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
      }

      return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i);
    }, h.render = function (a, b, c) {
      var d,
          e,
          f,
          g,
          h = this._time,
          i = this._duration,
          j = this._rawPrevTime;
      if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);else if (this._totalTime = this._time = a, this._easeType) {
        var k = a / i,
            l = this._easeType,
            n = this._easePower;
        (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2;
      } else this.ratio = this._ease.getRatio(a / i);

      if (this._time !== h || c) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void (this._lazy = [a, b]);
          this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
        }

        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) {
          f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
        }

        this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0));
      }
    }, h._kill = function (a, b, c) {
      if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
      b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
      if ((p(b) || H(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) {
        this._kill(a, b[d], c) && (i = !0);
      } else {
        if (this._targets) {
          for (d = this._targets.length; --d > -1;) {
            if (b === this._targets[d]) {
              h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
              break;
            }
          }
        } else {
          if (b !== this.target) return !1;
          h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
        }

        if (h) {
          if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != _typeof(a) || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
            for (f in j) {
              h[f] && (l || (l = []), l.push(f));
            }

            if ((l || !a) && !_(this, c, b, l)) return !1;
          }

          for (f in j) {
            (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
          }

          !this._firstPT && this._initted && this._enabled(!1, !1);
        }
      }
      return i;
    }, h.invalidate = function () {
      return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this;
    }, h._enabled = function (a, b) {
      if (j || i.wake(), a && this._gc) {
        var c,
            d = this._targets;
        if (d) for (c = d.length; --c > -1;) {
          this._siblings[c] = $(d[c], this, !0);
        } else this._siblings = $(this.target, this, !0);
      }

      return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
    }, G.to = function (a, b, c) {
      return new G(a, b, c);
    }, G.from = function (a, b, c) {
      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c);
    }, G.fromTo = function (a, b, c, d) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d);
    }, G.delayedCall = function (a, b, c, d, e) {
      return new G(b, 0, {
        delay: a,
        onComplete: b,
        onCompleteParams: c,
        callbackScope: d,
        onReverseComplete: b,
        onReverseCompleteParams: c,
        immediateRender: !1,
        lazy: !1,
        useFrames: e,
        overwrite: 0
      });
    }, G.set = function (a, b) {
      return new G(a, 0, b);
    }, G.getTweensOf = function (a, b) {
      if (null == a) return [];
      a = "string" != typeof a ? a : G.selector(a) || a;
      var c, d, e, f;

      if ((p(a) || H(a)) && "number" != typeof a[0]) {
        for (c = a.length, d = []; --c > -1;) {
          d = d.concat(G.getTweensOf(a[c], b));
        }

        for (c = d.length; --c > -1;) {
          for (f = d[c], e = c; --e > -1;) {
            f === d[e] && d.splice(c, 1);
          }
        }
      } else if (a._gsTweenID) for (d = $(a).concat(), c = d.length; --c > -1;) {
        (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
      }

      return d || [];
    }, G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
      "object" == _typeof(b) && (c = b, b = !1);

      for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) {
        d[e]._kill(c, a);
      }
    };
    var ca = t("plugins.TweenPlugin", function (a, b) {
      this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ca.prototype;
    }, !0);

    if (h = ca.prototype, ca.version = "1.19.0", ca.API = 2, h._firstPT = null, h._addTween = P, h.setRatio = N, h._kill = function (a) {
      var b,
          c = this._overwriteProps,
          d = this._firstPT;
      if (null != a[this._propName]) this._overwriteProps = [];else for (b = c.length; --b > -1;) {
        null != a[c[b]] && c.splice(b, 1);
      }

      for (; d;) {
        null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
      }

      return !1;
    }, h._mod = h._roundProps = function (a) {
      for (var b, c = this._firstPT; c;) {
        b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
      }
    }, G._onPluginEvent = function (a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = b._firstPT;

      if ("_onInitAllProps" === a) {
        for (; h;) {
          for (g = h._next, d = e; d && d.pr > h.pr;) {
            d = d._next;
          }

          (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
        }

        h = b._firstPT = e;
      }

      for (; h;) {
        h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
      }

      return c;
    }, ca.activate = function (a) {
      for (var b = a.length; --b > -1;) {
        a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
      }

      return !0;
    }, s.plugin = function (a) {
      if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
      var b,
          c = a.propName,
          d = a.priority || 0,
          e = a.overwriteProps,
          f = {
        init: "_onInitTween",
        set: "setRatio",
        kill: "_kill",
        round: "_mod",
        mod: "_mod",
        initAll: "_onInitAllProps"
      },
          g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
        ca.call(this, c, d), this._overwriteProps = e || [];
      }, a.global === !0),
          h = g.prototype = new ca(c);
      h.constructor = g, g.API = a.API;

      for (b in f) {
        "function" == typeof a[b] && (h[f[b]] = a[b]);
      }

      return g.version = a.version, ca.activate([g]), g;
    }, f = a._gsQueue) {
      for (g = 0; g < f.length; g++) {
        f[g]();
      }

      for (h in q) {
        q[h].func || a.console.log("GSAP encountered missing dependency: " + h);
      }
    }

    j = !1;
  }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window, "TweenMax");
"use strict";

/*
infiniteslide.js v2
version: 2.0.1
Author: T.Morimoto

Copyright 2017, T.Morimoto
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php

https://github.com/woodroots/infiniteslidev2
*/
(function ($) {
  $(function () {
    $.fn.infiniteslide = function (options) {
      //option
      var settings = $.extend({
        'speed': 100,
        //速さ　単位はpx/秒です。
        'direction': 'left',
        //up/down/left/rightから選択
        'pauseonhover': true,
        //マウスオーバーでストップ
        'responsive': false,
        //子要素の幅を%で指定しているとき
        'clone': 1
      }, options);

      var setCss = function setCss(obj, direction) {
        $(obj).wrap('<div class="infiniteslide_wrap"></div>').parent().css({
          overflow: 'hidden'
        });

        if (direction == 'up' || direction == 'down') {
          var d = 'column';
        } else {
          var d = 'row';
        }

        $(obj).css({
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          '-ms-flex-align': 'center',
          flexDirection: d
        }).children().css({
          flex: 'none',
          display: 'block'
        });
      };

      var setClone = function setClone(obj, clone) {
        var $clone = $(obj).children().clone().addClass('infiniteslide_clone');
        i = 1;

        while (i <= clone) {
          $clone.clone().appendTo($(obj));
          i++;
        }
      };

      var getWidth = function getWidth(obj) {
        w = 0;
        $(obj).children(':not(.infiniteslide_clone)').each(function (key, value) {
          w = w + $(this).outerWidth(true);
        });
        return w;
      };

      var getHeight = function getHeight(obj) {
        h = 0;
        $(obj).children(':not(.infiniteslide_clone)').each(function (key, value) {
          h = h + $(this).outerHeight(true);
        });
        return h;
      };

      var getSpeed = function getSpeed(l, s) {
        return l / s;
      };

      var getNum = function getNum(obj, direction) {
        if (direction == 'up' || direction == 'down') {
          var num = getHeight(obj);
        } else {
          var num = getWidth(obj);
        }

        return num;
      };

      var getTranslate = function getTranslate(num, direction) {
        if (direction == 'up' || direction == 'down') {
          var i = '0,-' + num + 'px,0';
        } else {
          var i = '-' + num + 'px,0,0';
        }

        return i;
      };

      var setAnim = function setAnim(obj, id, direction, speed) {
        var num = getNum(obj, direction);

        if (direction == 'up' || direction == 'down') {
          $(obj).parent('.infiniteslide_wrap').css({
            height: num + 'px'
          });
        }

        var i = getTranslate(num, direction);
        $(obj).attr('data-style', 'infiniteslide' + id);
        var css = '@keyframes infiniteslide' + id + '{' + 'from {transform:translate3d(0,0,0);}' + 'to {transform:translate3d(' + i + ');}' + '}';
        $('<style />').attr('id', 'infiniteslide' + id + '_style').html(css).appendTo('head');

        if (direction == 'right' || direction == 'down') {
          var reverse = ' reverse';
        } else {
          var reverse = '';
        }

        $(obj).css({
          animation: 'infiniteslide' + id + ' ' + getSpeed(num, speed) + 's linear 0s infinite' + reverse
        });
      };

      var setStop = function setStop(obj) {
        $(obj).on('mouseenter', function () {
          $(this).css({
            animationPlayState: 'paused'
          });
        }).on('mouseleave', function () {
          $(this).css({
            animationPlayState: 'running'
          });
        });
      };

      var setResponsive = function setResponsive(obj, direction) {
        var num = getNum(obj, direction);
        var i = getTranslate(num, direction);
        return i;
      };

      return this.each(function (key, value) {
        var $this = $(this);
        var num = Date.now() + Math.floor(10000 * Math.random()).toString(16);

        if (settings.pauseonhover == true) {
          setStop($this);
        }

        $(window).on('load', function () {
          setCss($this, settings.direction);
          setClone($this, settings.clone);
          setAnim($this, num, settings.direction, settings.speed);

          if (settings.responsive) {
            $(window).on('resize', function () {
              var i = setResponsive($this, settings.direction);
              var styleid = $this.attr('data-style');
              var stylehtml = $('#' + styleid + '_style').html();
              var stylehtml_new = stylehtml.replace(/to {transform:translate3d\((.*?)\)/, 'to {transform:translate3d(' + i + ')');
              $('#' + styleid + '_style').html(stylehtml_new);
            });
          }
        });
      });
    };
  });
})(jQuery);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";

  var o = !1,
      t = !1,
      r = 0,
      i = 2e3,
      s = 0,
      n = e,
      l = document,
      a = window,
      c = n(a),
      d = [],
      u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1,
      h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
  if (u) a.cancelAnimationFrame || (h = function h(e) {});else {
    var p = 0;
    u = function u(e, o) {
      var t = new Date().getTime(),
          r = Math.max(0, 16 - (t - p)),
          i = a.setTimeout(function () {
        e(t + r);
      }, r);
      return p = t + r, i;
    }, h = function h(e) {
      a.clearTimeout(e);
    };
  }

  var m = a.MutationObserver || a.WebKitMutationObserver || !1,
      f = Date.now || function () {
    return new Date().getTime();
  },
      g = {
    zindex: "auto",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: "#424242",
    cursorwidth: "6px",
    cursorborder: "1px solid #fff",
    cursorborderradius: "5px",
    scrollspeed: 40,
    mousescrollstep: 27,
    touchbehavior: !1,
    emulatetouch: !1,
    hwacceleration: !0,
    usetransition: !0,
    boxzoom: !1,
    dblclickzoom: !0,
    gesturezoom: !0,
    grabcursorenabled: !0,
    autohidemode: !0,
    background: "",
    iframeautoresize: !0,
    cursorminheight: 32,
    preservenativescrolling: !0,
    railoffset: !1,
    railhoffset: !1,
    bouncescroll: !0,
    spacebarenabled: !0,
    railpadding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    disableoutline: !0,
    horizrailenabled: !0,
    railalign: "right",
    railvalign: "bottom",
    enabletranslate3d: !0,
    enablemousewheel: !0,
    enablekeyboard: !0,
    smoothscroll: !0,
    sensitiverail: !0,
    enablemouselockapi: !0,
    cursorfixedheight: !1,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: !0,
    enablescrollonselection: !0,
    overflowx: !0,
    overflowy: !0,
    cursordragspeed: .3,
    rtlmode: "auto",
    cursordragontouch: !1,
    oneaxismousemode: "auto",
    scriptpath: function () {
      var e = l.currentScript || function () {
        var e = l.getElementsByTagName("script");
        return !!e.length && e[e.length - 1];
      }(),
          o = e ? e.src.split("?")[0] : "";

      return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : "";
    }(),
    preventmultitouchscrolling: !0,
    disablemutationobserver: !1,
    enableobserver: !0,
    scrollbarid: !1
  },
      v = !1,
      w = function w() {
    if (v) return v;
    var e = l.createElement("DIV"),
        o = e.style,
        t = navigator.userAgent,
        r = navigator.platform,
        i = {};
    return i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l, i.isopera = "opera" in a, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all" in l && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode, i.isie9 = i.isie && "performance" in a && 9 === l.documentMode, i.isie10 = i.isie && "performance" in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11, i.ismsedge = "msCredentials" in a, i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = i.iswebkit && "chrome" in a, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in l, i.isios8 = i.isios && "hidden" in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function () {
      for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++) {
        if (void 0 !== o[e[t]]) {
          i.trstyle = e[t];
          break;
        }
      }

      i.hastransform = !!i.trstyle;
    }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function () {
      i.transitionend = !1;

      for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++) {
        if (e[s] in o) {
          i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
          break;
        }
      }

      i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle;
    }(), i.cursorgrabvalue = function () {
      var e = ["grab", "-webkit-grab", "-moz-grab"];
      (i.ischrome && !i.ischrome38 || i.isie) && (e = []);

      for (var t = 0, r = e.length; t < r; t++) {
        var s = e[t];
        if (o.cursor = s, o.cursor == s) return s;
      }

      return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
    }(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i;
  },
      b = function b(e, p) {
    function v() {
      var e = T.doc.css(P.trstyle);
      return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
    }

    function b() {
      var e = T.win;
      if ("zIndex" in e) return e.zIndex();

      for (; e.length > 0;) {
        if (9 == e[0].nodeType) return !1;
        var o = e.css("zIndex");
        if (!isNaN(o) && 0 !== o) return parseInt(o);
        e = e.parent();
      }

      return !1;
    }

    function x(e, o, t) {
      var r = e.css(o),
          i = parseFloat(r);

      if (isNaN(i)) {
        var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
        return T.isie8 && i && (i += 1), s ? i : 0;
      }

      return i;
    }

    function S(e, o, t, r) {
      T._bind(e, o, function (r) {
        var i = {
          original: r = r || a.event,
          target: r.target || r.srcElement,
          type: "wheel",
          deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function preventDefault() {
            return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1;
          },
          stopImmediatePropagation: function stopImmediatePropagation() {
            r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0;
          }
        };
        return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i);
      }, r);
    }

    function z(e, o, t, r) {
      T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
      var i = f() - D;

      if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
        if (r) if (e < 0) {
          if (T.getScrollLeft() >= T.page.maxw) return !0;
        } else if (T.getScrollLeft() <= 0) return !0;
        var s = e > 0 ? 1 : -1;
        X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e;
      }

      if (o) {
        if (function () {
          var e = T.getScrollTop();

          if (o < 0) {
            if (e >= T.page.maxh) return !0;
          } else if (e <= 0) return !0;
        }()) {
          if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
          var n = T.view.h >> 1;
          T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0;
        }

        var l = o > 0 ? 1 : -1;
        B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o;
      }

      (o || e) && T.synched("relativexy", function () {
        var e = T.lastdeltay + T.newscrolly;
        T.lastdeltay = 0;
        var o = T.lastdeltax + T.newscrollx;
        T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e);
      });
    }

    function k(e, o, t) {
      var r, i;
      return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void (t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()));
    }

    var T = this;
    this.version = "3.7.6", this.name = "nicescroll", this.me = p;
    var E = n("body"),
        M = this.opt = {
      doc: E,
      win: !1
    };
    if (n.extend(M, g), M.snapbackspeed = 80, e) for (var L in M) {
      void 0 !== e[L] && (M[L] = e[L]);
    }

    if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
      x: 0,
      y: 0
    }, this.scrollratio = {
      x: 0,
      y: 0
    }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
      var C = this.win[0] == a ? this.body : this.win,
          N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
      "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N);
    } else this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;

    if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid) this.id = M.scrollbarid;else do {
      this.id = "ascrail" + i++;
    } while (l.getElementById(this.id));
    this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
    var P = n.extend({}, this.detected);
    this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
      T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
        h: u(function () {
          T.delaylist[e].fn.call(T), T.delaylist[e] = !1;
        }, t)
      }, o.call(T)), T.delaylist[e].fn = o);
    }, this.synched = function (e, o) {
      T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
        T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null);
      }));
    }, this.unsynched = function (e) {
      T.synclist[e] && (T.synclist[e] = !1);
    }, this.css = function (e, o) {
      for (var t in o) {
        T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
      }
    }, this.scrollTop = function (e) {
      return void 0 === e ? T.getScrollTop() : T.setScrollTop(e);
    }, this.scrollLeft = function (e) {
      return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e);
    };

    var R = function R(e, o, t, r, i, s, n) {
      this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e;
    };

    if (R.prototype = {
      B2: function B2(e) {
        return 3 * (1 - e) * (1 - e) * e;
      },
      B3: function B3(e) {
        return 3 * (1 - e) * e * e;
      },
      B4: function B4(e) {
        return e * e * e;
      },
      getPos: function getPos() {
        return (f() - this.ts) / this.spd;
      },
      getNow: function getNow() {
        var e = (f() - this.ts) / this.spd,
            o = this.B2(e) + this.B3(e) + this.B4(e);
        return e >= 1 ? this.ed : this.st + this.df * o | 0;
      },
      update: function update(e, o) {
        return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this;
      }
    }, this.ishwscroll) {
      this.doc.translate = {
        x: 0,
        y: 0,
        tx: "0px",
        ty: "0px"
      }, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
        if (!e) {
          var o = v();
          if (o) return 16 == o.length ? -o[13] : -o[5];
          if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow();
        }

        return T.doc.translate.y;
      }, this.getScrollLeft = function (e) {
        if (!e) {
          var o = v();
          if (o) return 16 == o.length ? -o[12] : -o[4];
          if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow();
        }

        return T.doc.translate.x;
      }, this.notifyScrollEvent = function (e) {
        var o = l.createEvent("UIEvents");
        o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o);
      };

      var _ = this.isrtlmode ? 1 : -1;

      P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
        T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0]);
      }, this.setScrollLeft = function (e, o) {
        T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0]);
      }) : (this.setScrollTop = function (e, o) {
        T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0]);
      }, this.setScrollLeft = function (e, o) {
        T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0]);
      });
    } else this.getScrollTop = function () {
      return T.docscroll.scrollTop();
    }, this.setScrollTop = function (e) {
      T.docscroll.scrollTop(e);
    }, this.getScrollLeft = function () {
      return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft();
    }, this.setScrollLeft = function (e) {
      return setTimeout(function () {
        if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e);
      }, 1);
    };

    this.getTarget = function (e) {
      return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement);
    }, this.hasParent = function (e, o) {
      if (!e) return !1;

      for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) {
        t = t.parentNode || !1;
      }

      return !1 !== t;
    };
    var I = {
      thin: 1,
      medium: 3,
      thick: 5
    };
    this.getDocumentScrollOffset = function () {
      return {
        top: a.pageYOffset || l.documentElement.scrollTop,
        left: a.pageXOffset || l.documentElement.scrollLeft
      };
    }, this.getOffset = function () {
      if (T.isfixed) {
        var e = T.win.offset(),
            o = T.getDocumentScrollOffset();
        return e.top -= o.top, e.left -= o.left, e;
      }

      var t = T.win.offset();
      if (!T.viewport) return t;
      var r = T.viewport.offset();
      return {
        top: t.top - r.top,
        left: t.left - r.left
      };
    }, this.updateScrollBar = function (e) {
      var o, t;
      if (T.ishwscroll) T.rail.css({
        height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
      }), T.railh && T.railh.css({
        width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
      });else {
        var r = T.getOffset();

        if (o = {
          top: r.top,
          left: r.left - (M.railpadding.left + M.railpadding.right)
        }, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
          top: o.top,
          left: o.left,
          height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
        }), T.zoom && T.zoom.css({
          top: o.top + 1,
          left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
        }), T.railh && !T.railslocked) {
          o = {
            top: r.top,
            left: r.left
          }, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
          var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0),
              s = o.left + x(T.win, "border-left-width");
          T.railh.css({
            top: i - (M.railpadding.top + M.railpadding.bottom),
            left: s,
            width: T.railh.width
          });
        }
      }
    }, this.doRailClick = function (e, o, t) {
      var r, i, s, n;
      T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)));
    }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in a, T.hascancelanimationframe = "cancelAnimationFrame" in a, T.hasborderbox = !1, this.init = function () {
      if (T.saved.css = [], P.isoperamini) return !0;
      if (P.isandroid && !("hidden" in l)) return !0;
      M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
      var e = {
        "overflow-y": "hidden"
      };

      if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
        var i = T.docscroll;
        T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {
          "-webkit-overflow-scrolling": "touch"
        });
        var d = n(l.createElement("div"));
        d.css({
          position: "relative",
          top: 0,
          float: "right",
          width: M.cursorwidth,
          height: 0,
          "background-color": M.cursorcolor,
          border: M.cursorborder,
          "background-clip": "padding-box",
          "-webkit-border-radius": M.cursorborderradius,
          "-moz-border-radius": M.cursorborderradius,
          "border-radius": M.cursorborderradius
        }), d.addClass("nicescroll-cursors"), T.cursor = d;
        var u = n(l.createElement("div"));
        u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
        var h,
            p,
            f = ["left", "right", "top", "bottom"];

        for (var g in f) {
          p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
        }

        u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({
          width: u.width + "px",
          zIndex: T.zindex,
          background: M.background,
          cursor: "default"
        }), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
        var v = !1;
        !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
          T.zoom.css("opacity", M.cursoropacitymax);
        }), T.bind(v, "mouseleave", function () {
          T.zoom.css("opacity", M.cursoropacitymin);
        }), T.zoom = n(v), T.zoom.css({
          cursor: "pointer",
          zIndex: T.zindex,
          backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
          height: 18,
          width: 18,
          backgroundPosition: "0 0"
        }), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
          return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e);
        }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
        var w;
        if (M.horizrailenabled && (T.css(i, {
          overflowX: "hidden"
        }), (d = n(l.createElement("div"))).css({
          position: "absolute",
          top: 0,
          height: M.cursorwidth,
          width: 0,
          backgroundColor: M.cursorcolor,
          border: M.cursorborder,
          backgroundClip: "padding-box",
          "-webkit-border-radius": M.cursorborderradius,
          "-moz-border-radius": M.cursorborderradius,
          "border-radius": M.cursorborderradius
        }), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({
          height: w.height + "px",
          zIndex: T.zindex,
          background: M.background
        }), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage) u.css({
          position: "fixed",
          top: 0,
          height: "100%"
        }), u.css(u.align ? {
          right: 0
        } : {
          left: 0
        }), T.body.append(u), T.railh && (w.css({
          position: "fixed",
          left: 0,
          width: "100%"
        }), w.css(w.align ? {
          bottom: 0
        } : {
          top: 0
        }), T.body.append(w));else {
          if (T.ishwscroll) {
            "static" == T.win.css("position") && T.css(T.win, {
              position: "relative"
            });
            var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
            n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
              position: "absolute",
              top: 1,
              right: 0,
              "margin-right": u.width + 4
            }), x.append(T.zoom)), u.css({
              position: "absolute",
              top: 0
            }), u.css(u.align ? {
              right: 0
            } : {
              left: 0
            }), x.append(u), w && (w.css({
              position: "absolute",
              left: 0,
              bottom: 0
            }), w.css(w.align ? {
              bottom: 0
            } : {
              top: 0
            }), x.append(w));
          } else {
            T.isfixed = "fixed" == T.win.css("position");
            var S = T.isfixed ? "fixed" : "absolute";
            T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
              position: "relative"
            })), u.css({
              position: S
            }), T.zoom && T.zoom.css({
              position: S
            }), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({
              position: S
            }), T.body.append(w));
          }

          P.isios && T.css(T.win, {
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
            "-webkit-touch-callout": "none"
          }), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"));
        }

        if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({
          opacity: M.cursoropacitymax
        }), T.railh && T.railh.css({
          opacity: M.cursoropacitymax
        })) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
          T.scrollmom = new y(T);
          T.ontouchstart = function (e) {
            if (T.locked) return !1;
            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;

            if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
              var o = T.getTarget(e);
              if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return T.stopPropagation(e);
              var t = "mousedown" === e.type;

              if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                var r = e;
                (e = {
                  original: e.original ? e.original : e
                }).clientX = r.screenX, e.clientY = r.screenY;
              }

              if (T.rail.drag = {
                x: e.clientX,
                y: e.clientY,
                sx: T.scroll.x,
                sy: T.scroll.y,
                st: T.getScrollTop(),
                sl: T.getScrollLeft(),
                pt: 2,
                dl: !1,
                tg: o
              }, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f";else {
                var i = {
                  w: c.width(),
                  h: c.height()
                },
                    s = T.getContentSize(),
                    l = s.h - i.h,
                    a = s.w - i.w;
                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1;
              }

              if (M.emulatetouch && T.isiframe && P.isie) {
                var d = T.win.position();
                T.rail.drag.x += d.left, T.rail.drag.y += d.top;
              }

              if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                  if (T.hasmoving) return !1;

                  o._onclick.call(this, e);
                }), T.cancelEvent(e)) : T.stopPropagation(e);
                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {
                  tg: o,
                  click: !1
                });
              }
            }
          }, T.ontouchend = function (e) {
            if (!T.rail.drag) return !0;

            if (2 == T.rail.drag.pt) {
              if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
              T.rail.drag = !1;
              var o = "mouseup" === e.type;
              if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o)) return T.cancelEvent(e);
            } else if (1 == T.rail.drag.pt) return T.onmouseup(e);
          };
          var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
              k = .3 * M.directionlockdeadzone | 0;
          T.ontouchmove = function (e, o) {
            if (!T.rail.drag) return !0;
            if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;

            if (2 == T.rail.drag.pt) {
              "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
              var t, r;

              if (r = t = 0, z && !o) {
                var i = T.win.position();
                r = -i.left, t = -i.top;
              }

              var s = e.clientY + t,
                  n = s - T.rail.drag.y,
                  a = e.clientX + r,
                  c = a - T.rail.drag.x,
                  d = T.rail.drag.st - n;
              if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
              var u = T.getScrollLeft();

              if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
                var h = Math.abs(n),
                    p = Math.abs(c),
                    m = M.directionlockdeadzone;
                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0;
              }

              return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear());
              }), T.cancelEvent(e);
            }

            return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0;
          }, T.ontouchstartCursor = function (e, o) {
            if (!T.rail.drag || 3 == T.rail.drag.pt) {
              if (T.locked) return T.cancelEvent(e);
              T.cancelScroll(), T.rail.drag = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                sx: T.scroll.x,
                sy: T.scroll.y,
                pt: 3,
                hr: !!o
              };
              var t = T.getTarget(e);
              return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                "pointer-events": "none"
              })), T.cancelEvent(e);
            }
          }, T.ontouchendCursor = function (e) {
            if (T.rail.drag) {
              if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
              return T.rail.drag = !1, T.cancelEvent(e);
            }
          }, T.ontouchmoveCursor = function (e) {
            if (T.rail.drag) {
              if (3 != T.rail.drag.pt) return;

              if (T.cursorfreezed = !0, T.rail.drag.hr) {
                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                var o = T.scrollvaluemaxw;
                T.scroll.x > o && (T.scroll.x = o);
              } else {
                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                var t = T.scrollvaluemax;
                T.scroll.y > t && (T.scroll.y = t);
              }

              return T.synched("touchmove", function () {
                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed));
              }), T.cancelEvent(e);
            }
          };
        }

        if (T.onmousedown = function (e, o) {
          if (!T.rail.drag || 1 == T.rail.drag.pt) {
            if (T.railslocked) return T.cancelEvent(e);
            T.cancelScroll(), T.rail.drag = {
              x: e.clientX,
              y: e.clientY,
              sx: T.scroll.x,
              sy: T.scroll.y,
              pt: 1,
              hr: o || !1
            };
            var t = T.getTarget(e);
            return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
              "pointer-events": "none"
            })), T.hasmoving = !1, T.cancelEvent(e);
          }
        }, T.onmouseup = function (e) {
          if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e));
        }, T.onmousemove = function (e) {
          if (T.rail.drag) {
            if (1 !== T.rail.drag.pt) return;
            if (P.ischrome && 0 === e.which) return T.onmouseup(e);

            if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
              T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
              var o = T.scrollvaluemaxw;
              T.scroll.x > o && (T.scroll.x = o);
            } else {
              T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
              var t = T.scrollvaluemax;
              T.scroll.y > t && (T.scroll.y = t);
            }

            return T.synched("mousemove", function () {
              T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)));
            }), T.cancelEvent(e);
          }

          T.checkarea = 0;
        }, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
          if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e);
        }, T.onclick = !P.isios && function (e) {
          return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e));
        }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
          cursor: P.cursorgrabvalue
        }), T.css(T.rail, {
          cursor: P.cursorgrabvalue
        }));else {
          var L = function L(e) {
            if (T.selectiondrag) {
              if (e) {
                var o = T.win.outerHeight(),
                    t = e.pageY - T.selectiondrag.top;
                t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t;
              }

              if (0 !== T.selectiondrag.df) {
                var r = -2 * T.selectiondrag.df / 6 | 0;
                T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                  L();
                }, 50);
              }
            }
          };

          T.hasTextSelected = "getSelection" in l ? function () {
            return l.getSelection().rangeCount > 0;
          } : "selection" in l ? function () {
            return "None" != l.selection.type;
          } : function () {
            return !1;
          }, T.onselectionstart = function (e) {
            T.ispage || (T.selectiondrag = T.win.offset());
          }, T.onselectionend = function (e) {
            T.selectiondrag = !1;
          }, T.onselectiondrag = function (e) {
            T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
              L(e);
            }, 250);
          };
        }

        if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {
          "touch-action": "none"
        }), T.css(T.rail, {
          "touch-action": "none"
        }), T.css(T.cursor, {
          "touch-action": "none"
        }), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {
          "-ms-touch-action": "none"
        }), T.css(T.rail, {
          "-ms-touch-action": "none"
        }), T.css(T.cursor, {
          "-ms-touch-action": "none"
        }), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
          e.preventDefault();
        }), T.bind(T.cursor, "contextmenu", function (e) {
          e.preventDefault();
        })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
          cursor: "default"
        }), T.railh && T.railh.css({
          cursor: "default"
        }), T.jqbind(T.rail, "mouseenter", function () {
          if (!T.ispage && !T.win.is(":visible")) return !1;
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.rail, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
          T.doRailClick(e, !1, !1);
        }), T.bind(T.rail, "dblclick", function (e) {
          T.doRailClick(e, !0, !1);
        }), T.bind(T.cursor, "click", function (e) {
          T.cancelEvent(e);
        }), T.bind(T.cursor, "dblclick", function (e) {
          T.cancelEvent(e);
        })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
          if (!T.ispage && !T.win.is(":visible")) return !1;
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.railh, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
          T.doRailClick(e, !1, !0);
        }), T.bind(T.railh, "dblclick", function (e) {
          T.doRailClick(e, !0, !0);
        }), T.bind(T.cursorh, "click", function (e) {
          T.cancelEvent(e);
        }), T.bind(T.cursorh, "dblclick", function (e) {
          T.cancelEvent(e);
        })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
          T.ontouchstartCursor(e, !0);
        }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
          T.onmousedown(e, !0);
        }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
          e.preventDefault();
        }), T.railh && T.bind(T.railh, "mousedown", function (e) {
          e.preventDefault();
        }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
          T.onmousedown(e, !0);
        }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.zoom, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
          tabindex: ++r
        }), T.bind(T.win, "focus", function (e) {
          o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor();
        }), T.bind(T.win, "blur", function (e) {
          o = !1, T.hasfocus = !1;
        }), T.bind(T.win, "mouseenter", function (e) {
          t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor();
        }), T.bind(T.win, "mouseleave", function (e) {
          t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor();
        })), T.onkeypress = function (e) {
          if (T.railslocked && 0 === T.page.maxh) return !0;
          e = e || a.event;
          var r = T.getTarget(e);
          if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
          if (n(r).attr("contenteditable")) return !0;

          if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
            var i = e.keyCode;
            if (T.railslocked && 27 != i) return T.cancelEvent(e);
            var s = e.ctrlKey || !1,
                l = e.shiftKey || !1,
                c = !1;

            switch (i) {
              case 38:
              case 63233:
                T.doScrollBy(72), c = !0;
                break;

              case 40:
              case 63235:
                T.doScrollBy(-72), c = !0;
                break;

              case 37:
              case 63232:
                T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                break;

              case 39:
              case 63234:
                T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                break;

              case 33:
              case 63276:
                T.doScrollBy(T.view.h), c = !0;
                break;

              case 34:
              case 63277:
                T.doScrollBy(-T.view.h), c = !0;
                break;

              case 36:
              case 63273:
                T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                break;

              case 35:
              case 63275:
                T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                break;

              case 32:
                M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                break;

              case 27:
                T.zoomactive && (T.doZoom(), c = !0);
            }

            if (c) return T.cancelEvent(e);
          }
        }, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
          (e.ctrlKey || !1) && (T.wheelprevented = !0);
        }), T.bind(l, "keyup", function (e) {
          e.ctrlKey || !1 || (T.wheelprevented = !1);
        }), T.bind(a, "blur", function (e) {
          T.wheelprevented = !1;
        }), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
          var C = T.win.attr("style"),
              N = parseFloat(T.win.css("width")) + 1;
          T.win.css("width", N), T.synched("chromefix", function () {
            T.win.attr("style", C);
          });
        }

        if (T.onAttributeChange = function (e) {
          T.lazyResize(T.isieold ? 250 : 30);
        }, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
          if (e.forEach(function (e) {
            if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show();
          }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30);
        }), T.observerbody.observe(l.body, {
          childList: !0,
          subtree: !0,
          characterData: !1,
          attributes: !0,
          attributeFilter: ["class"]
        })), !T.ispage && !T.haswrapper)) {
          var R = T.win[0];
          !1 !== m ? (T.observer = new m(function (e) {
            e.forEach(T.onAttributeChange);
          }), T.observer.observe(R, {
            childList: !0,
            characterData: !1,
            attributes: !0,
            subtree: !1
          }), T.observerremover = new m(function (e) {
            e.forEach(function (e) {
              if (e.removedNodes.length > 0) for (var o in e.removedNodes) {
                if (T && e.removedNodes[o] === R) return T.remove();
              }
            });
          }), T.observerremover.observe(R.parentNode, {
            childList: !0,
            characterData: !1,
            attributes: !1,
            subtree: !1
          })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
            e.target === R && T.remove();
          }));
        }

        !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30);
      }

      if ("IFRAME" == this.doc[0].nodeName) {
        var _ = function _() {
          T.iframexd = !1;
          var o;

          try {
            (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain;
          } catch (e) {
            T.iframexd = !0, o = !1;
          }

          if (T.iframexd) return "console" in a && console.log("NiceScroll error: policy restriced iframe"), !0;

          if (T.forcescreen = !0, T.isiframe && (T.iframe = {
            doc: n(o),
            html: T.doc.contents().find("html")[0],
            body: T.doc.contents().find("body")[0]
          }, T.getContentSize = function () {
            return {
              w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
              h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
            };
          }, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
            T.win.scrollTop(0), T.doc.height("");
            var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
            T.doc.height(t);
          }

          T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {
            "-webkit-transform": "translate3d(0,0,0)"
          }), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
            return T.ontouchmove(e, !0);
          }), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {
            cursor: P.cursorgrabvalue
          })), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom));
        };

        this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
          _.call(T.doc[0], !1);
        }, 500), T.bind(this.doc, "load", _);
      }
    }, this.showCursor = function (e, o) {
      if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
        if (T.autohidedom && (T.autohidedom.stop().css({
          opacity: M.cursoropacitymax
        }), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
          height: T.cursorheight,
          top: T.scroll.y
        }), T.cursorh) {
          var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
          T.cursorh.css({
            width: T.cursorwidth,
            left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
          }), T.cursoractive = !0;
        }

        T.zoom && T.zoom.stop().css({
          opacity: M.cursoropacitymax
        });
      }
    }, this.hideCursor = function (e) {
      T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
        T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
          opacity: M.cursoropacitymin
        }), T.zoom && T.zoom.stop().animate({
          opacity: M.cursoropacitymin
        }), T.cursoractive = !1), T.cursortimeout = 0;
      }, e || M.hidecursordelay)));
    }, this.noticeCursor = function (e, o, t) {
      T.showCursor(o, t), T.rail.active || T.hideCursor(e);
    }, this.getContentSize = T.ispage ? function () {
      return {
        w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
        h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
      };
    } : T.haswrapper ? function () {
      return {
        w: T.doc[0].offsetWidth,
        h: T.doc[0].offsetHeight
      };
    } : function () {
      return {
        w: T.docscroll[0].scrollWidth,
        h: T.docscroll[0].scrollHeight
      };
    }, this.onResize = function (e, o) {
      if (!T || !T.win) return !1;
      var t = T.page.maxh,
          r = T.page.maxw,
          i = T.view.h,
          s = T.view.w;

      if (T.view = {
        w: T.ispage ? T.win.width() : T.win[0].clientWidth,
        h: T.ispage ? T.win.height() : T.win[0].clientHeight
      }, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
        if (T.ispage) return T;
        var n = T.win.offset();

        if (T.lastposition) {
          var l = T.lastposition;
          if (l.top == n.top && l.left == n.left) return T;
        }

        T.lastposition = n;
      }

      return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
        x: T.page.maxw / T.scrollvaluemaxw,
        y: T.page.maxh / T.scrollvaluemax
      }, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T);
    }, this.resize = T.onResize;
    var O = 0;
    this.onscreenresize = function (e) {
      clearTimeout(O);
      var o = !T.ispage && !T.haswrapper;
      o && T.hideRails(), O = setTimeout(function () {
        T && (o && T.showRails(), T.resize()), O = 0;
      }, 120);
    }, this.lazyResize = function (e) {
      return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
        T && T.resize(), O = 0;
      }, e), T;
    }, this.jqbind = function (e, o, t) {
      T.events.push({
        e: e,
        n: o,
        f: t,
        q: !0
      }), n(e).on(o, t);
    }, this.mousewheel = function (e, o, t) {
      var r = "jquery" in e ? e[0] : e;
      if ("onwheel" in l.createElement("div")) T._bind(r, "wheel", o, t || !1);else {
        var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1);
      }
    };
    var Y = !1;

    if (P.haseventlistener) {
      try {
        var H = Object.defineProperty({}, "passive", {
          get: function get() {
            Y = !0;
          }
        });
        a.addEventListener("test", null, H);
      } catch (e) {}

      this.stopPropagation = function (e) {
        return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1);
      }, this.cancelEvent = function (e) {
        return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1;
      };
    } else Event.prototype.preventDefault = function () {
      this.returnValue = !1;
    }, Event.prototype.stopPropagation = function () {
      this.cancelBubble = !0;
    }, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
      this.attachEvent("on" + e, o);
    }, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
      this.detachEvent("on" + e, o);
    }, this.cancelEvent = function (e) {
      return (e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1;
    }, this.stopPropagation = function (e) {
      return (e = e || a.event) && (e.cancelBubble = !0), !1;
    };

    this.delegate = function (e, o, t, r, i) {
      var s = d[o] || !1;
      s || (s = {
        a: [],
        l: [],
        f: function f(e) {
          for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--) {
            if (!1 === (t = o[r].call(e.target, e))) return !1;
          }

          return t;
        }
      }, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t));
    }, this.undelegate = function (e, o, t, r, i) {
      var s = d[o] || !1;
      if (s && s.l) for (var n = 0, l = s.l.length; n < l; n++) {
        s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null));
      }
    }, this.bind = function (e, o, t, r, i) {
      var s = "jquery" in e ? e[0] : e;

      T._bind(s, o, t, r || !1, i || !1);
    }, this._bind = function (e, o, t, r, i) {
      T.events.push({
        e: e,
        n: o,
        f: t,
        b: r,
        q: !1
      }), Y && i ? e.addEventListener(o, t, {
        passive: !1,
        capture: r
      }) : e.addEventListener(o, t, r || !1);
    }, this._unbind = function (e, o, t, r) {
      d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r);
    }, this.unbindAll = function () {
      for (var e = 0; e < T.events.length; e++) {
        var o = T.events[e];
        o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b);
      }
    }, this.showRails = function () {
      return T.showRail().showRailHr();
    }, this.showRail = function () {
      return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T;
    }, this.showRailHr = function () {
      return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T;
    }, this.hideRails = function () {
      return T.hideRail().hideRailHr();
    }, this.hideRail = function () {
      return T.rail.visibility = !1, T.rail.css("display", "none"), T;
    }, this.hideRailHr = function () {
      return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T;
    }, this.show = function () {
      return T.hidden = !1, T.railslocked = !1, T.showRails();
    }, this.hide = function () {
      return T.hidden = !0, T.railslocked = !0, T.hideRails();
    }, this.toggle = function () {
      return T.hidden ? T.show() : T.hide();
    }, this.remove = function () {
      T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);

      for (var e in T.delaylist) {
        T.delaylist[e] && h(T.delaylist[e].h);
      }

      T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();

      for (var o = 0; o < T.saved.css.length; o++) {
        var t = T.saved.css[o];
        t[0].css(t[1], void 0 === t[2] ? "" : t[2]);
      }

      T.saved = !1, T.me.data("__nicescroll", "");
      var r = n.nicescroll;
      r.each(function (e) {
        if (this && this.id === T.id) {
          delete r[e];

          for (var o = ++e; o < r.length; o++, e++) {
            r[e] = r[o];
          }

          --r.length && delete r[r.length];
        }
      });

      for (var i in T) {
        T[i] = null, delete T[i];
      }

      T = null;
    }, this.scrollstart = function (e) {
      return this.onscrollstart = e, T;
    }, this.scrollend = function (e) {
      return this.onscrollend = e, T;
    }, this.scrollcancel = function (e) {
      return this.onscrollcancel = e, T;
    }, this.zoomin = function (e) {
      return this.onzoomin = e, T;
    }, this.zoomout = function (e) {
      return this.onzoomout = e, T;
    }, this.isScrollable = function (e) {
      var o = e.target ? e.target : e;
      if ("OPTION" == o.nodeName) return !0;

      for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
        var t = n(o),
            r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
        if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
        o = !!o.parentNode && o.parentNode;
      }

      return !1;
    }, this.getViewport = function (e) {
      for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
        var t = n(o);
        if (/fixed|absolute/.test(t.css("position"))) return t;
        var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
        if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
        if (t.getNiceScroll().length > 0) return t;
        o = !!o.parentNode && o.parentNode;
      }

      return !1;
    }, this.triggerScrollStart = function (e, o, t, r, i) {
      if (T.onscrollstart) {
        var s = {
          type: "scrollstart",
          current: {
            x: e,
            y: o
          },
          request: {
            x: t,
            y: r
          },
          end: {
            x: T.newscrollx,
            y: T.newscrolly
          },
          speed: i
        };
        T.onscrollstart.call(T, s);
      }
    }, this.triggerScrollEnd = function () {
      if (T.onscrollend) {
        var e = T.getScrollLeft(),
            o = T.getScrollTop(),
            t = {
          type: "scrollend",
          current: {
            x: e,
            y: o
          },
          end: {
            x: e,
            y: o
          }
        };
        T.onscrollend.call(T, t);
      }
    };
    var B = 0,
        X = 0,
        D = 0,
        A = 1,
        q = !1;
    if (this.onmousewheel = function (e) {
      if (T.wheelprevented || T.locked) return !1;
      if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
      if (T.rail.drag) return T.cancelEvent(e);
      if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
      var o = f(),
          t = !1;
      if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
      var r = k(e, !1, t);
      return r && (T.checkarea = 0), r;
    }, this.onmousewheelhr = function (e) {
      if (!T.wheelprevented) {
        if (T.railslocked || !T.railh.scrollable) return !0;
        if (T.rail.drag) return T.cancelEvent(e);
        var o = f(),
            t = !1;
        return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t));
      }
    }, this.stop = function () {
      return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T;
    }, this.getTransitionSpeed = function (e) {
      return 80 + e / 72 * M.scrollspeed | 0;
    }, M.smoothscroll) {
      if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
        var j = "";
        this.resetTransition = function () {
          j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms");
        }, this.prepareTransition = function (e, o) {
          var t = o ? e : T.getTransitionSpeed(e),
              r = t + "ms";
          return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t;
        }, this.doScrollLeft = function (e, o) {
          var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
          T.doScrollPos(e, t, o);
        }, this.doScrollTop = function (e, o) {
          var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
          T.doScrollPos(t, e, o);
        }, this.cursorupdate = {
          running: !1,
          start: function start() {
            var e = this;

            if (!e.running) {
              e.running = !0;

              var o = function o() {
                e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0]);
              };

              u(o);
            }
          },
          stop: function stop() {
            this.running = !1;
          }
        }, this.doScrollPos = function (e, o, t) {
          var r = T.getScrollTop(),
              i = T.getScrollLeft();
          if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
          T.newscrolly = o, T.newscrollx = e;
          var s = T.getScrollTop(),
              n = T.getScrollLeft(),
              l = {};
          l.x = e - n, l.y = o - s;
          var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
              c = T.prepareTransition(a);
          T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx);
        }, this.cancelScroll = function () {
          if (!T.scrollendtrapped) return !0;
          var e = T.getScrollTop(),
              o = T.getScrollLeft();
          return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T;
        }, this.onScrollTransitionEnd = function () {
          if (T.scrollendtrapped) {
            var e = T.getScrollTop(),
                o = T.getScrollLeft();
            if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
            T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1;
          }
        };
      } else this.doScrollLeft = function (e, o) {
        var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
        T.doScrollPos(e, t, o);
      }, this.doScrollTop = function (e, o) {
        var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
        T.doScrollPos(t, e, o);
      }, this.doScrollPos = function (e, o, t) {
        var r = T.getScrollTop(),
            i = T.getScrollLeft();
        ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
        var s = !1;
        if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
        T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
        var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
            l = T.getTransitionSpeed(n);
        T.bzscroll = {};
        var a = s ? 1 : .58;
        T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
        f();

        var c = function c() {
          if (T.scrollrunning) {
            var e = T.bzscroll.y.getPos();
            T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd());
          }
        };

        T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c));
      }, this.cancelScroll = function () {
        return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T;
      };
    } else this.doScrollLeft = function (e, o) {
      var t = T.getScrollTop();
      T.doScrollPos(e, t, o);
    }, this.doScrollTop = function (e, o) {
      var t = T.getScrollLeft();
      T.doScrollPos(t, e, o);
    }, this.doScrollPos = function (e, o, t) {
      var r = e > T.page.maxw ? T.page.maxw : e;
      r < 0 && (r = 0);
      var i = o > T.page.maxh ? T.page.maxh : o;
      i < 0 && (i = 0), T.synched("scroll", function () {
        T.setScrollTop(i), T.setScrollLeft(r);
      });
    }, this.cancelScroll = function () {};
    this.doScrollBy = function (e, o) {
      z(0, e);
    }, this.doScrollLeftBy = function (e, o) {
      z(e, 0);
    }, this.doScrollTo = function (e, o) {
      var t = o ? Math.round(e * T.scrollratio.y) : e;
      t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e);
    }, this.checkContentSize = function () {
      var e = T.getContentSize();
      e.h == T.page.h && e.w == T.page.w || T.resize(!1, e);
    }, T.onscroll = function (e) {
      T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
        T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor();
      });
    }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
      if (!T.zoomactive) {
        T.zoomactive = !0, T.zoomrestore = {
          style: {}
        };
        var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
            t = T.win[0].style;

        for (var r in o) {
          var i = o[r];
          T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : "";
        }

        T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
          w: T.win.outerWidth() - T.win.width(),
          h: T.win.outerHeight() - T.win.height()
        }, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({
          position: P.isios4 ? "absolute" : "fixed",
          top: 0,
          left: 0,
          zIndex: s + 100,
          margin: 0
        });
        var n = T.win.css("backgroundColor");
        return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
          zIndex: s + 101
        }), T.zoom.css({
          zIndex: s + 102
        }), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e);
      }
    }, this.doZoomOut = function (e) {
      if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({
        "z-index": T.zindex
      }), T.zoom.css({
        "z-index": T.zindex
      }), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e);
    }, this.doZoom = function (e) {
      return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e);
    }, this.resizeZoom = function () {
      if (T.zoomactive) {
        var e = T.getScrollTop();
        T.win.css({
          width: c.width() - T.zoomrestore.padding.w + "px",
          height: c.height() - T.zoomrestore.padding.h + "px"
        }), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e));
      }
    }, this.init(), n.nicescroll.push(this);
  },
      y = function y(e) {
    var o = this;
    this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
      o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1;
    }, this.update = function (e, t) {
      var r = f();
      o.steptime = r - o.lasttime, o.lasttime = r;
      var i = t - o.lasty,
          s = e - o.lastx,
          n = o.nc.getScrollTop() + i,
          l = o.nc.getScrollLeft() + s;
      o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t;
    }, this.stop = function () {
      o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1;
    }, this.doSnapy = function (e, t) {
      var r = !1;
      t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd();
    }, this.doMomentum = function (e) {
      var t = f(),
          r = e ? t + e : o.lasttime,
          i = o.nc.getScrollLeft(),
          s = o.nc.getScrollTop(),
          n = o.nc.page.maxh,
          l = o.nc.page.maxw;
      o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
      var a = r && t - r <= 60;
      (s < 0 || s > n || i < 0 || i > l) && (a = !1);
      var c = !(!o.speedy || !a) && o.speedy,
          d = !(!o.speedx || !a) && o.speedx;

      if (c || d) {
        var u = Math.max(16, o.steptime);

        if (u > 50) {
          var h = u / 50;
          o.speedx *= h, o.speedy *= h, u = 50;
        }

        o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;

        var p = o.lastscrollx,
            m = o.lastscrolly,
            g = function g() {
          var e = f() - t > 600 ? .04 : .02;
          o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
            if (o.speedx) {
              o.nc.getScrollLeft();
              o.chkx = p, o.nc.setScrollLeft(p);
            }

            if (o.speedy) {
              o.nc.getScrollTop();
              o.chky = m, o.nc.setScrollTop(m);
            }

            o.timer || (o.nc.hideCursor(), o.doSnapy(p, m));
          }), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m));
        };

        g();
      } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
    };
  },
      x = e.fn.scrollTop;

  e.cssHooks.pageYOffset = {
    get: function get(e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollTop() : x.call(e);
    },
    set: function set(e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this;
    }
  }, e.fn.scrollTop = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollTop() : x.call(this);
    }

    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e);
    });
  };
  var S = e.fn.scrollLeft;
  n.cssHooks.pageXOffset = {
    get: function get(e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollLeft() : S.call(e);
    },
    set: function set(e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this;
    }
  }, e.fn.scrollLeft = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollLeft() : S.call(this);
    }

    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e);
    });
  };

  var z = function z(e) {
    var o = this;
    if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
      return n.each(o, e), o;
    }, this.push = function (e) {
      o[o.length] = e, o.length++;
    }, this.eq = function (e) {
      return o[e];
    }, e) for (var t = 0; t < e.length; t++) {
      var r = n.data(e[t], "__nicescroll") || !1;
      r && (this[this.length] = r, this.length++);
    }
    return this;
  };

  !function (e, o, t) {
    for (var r = 0, i = o.length; r < i; r++) {
      t(e, o[r]);
    }
  }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
    e[o] = function () {
      var e = arguments;
      return this.each(function () {
        this[o].apply(this, e);
      });
    };
  }), e.fn.getNiceScroll = function (e) {
    return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1;
  }, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
    return void 0 !== n.data(e, "__nicescroll");
  }, n.fn.niceScroll = function (e, o) {
    void 0 !== o || "object" != _typeof(e) || "jquery" in e || (o = e, e = !1);
    var t = new z();
    return this.each(function () {
      var r = n(this),
          i = n.extend({}, o);

      if (e) {
        var s = n(e);
        i.doc = s.length > 1 ? n(e, r) : s, i.win = r;
      }

      !("doc" in i) || "win" in i || (i.win = r);
      var l = r.data("__nicescroll") || !1;
      l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l);
    }), 1 === t.length ? t[0] : t;
  }, a.NiceScroll = {
    getjQuery: function getjQuery() {
      return e;
    }
  }, n.nicescroll || (n.nicescroll = new z(), n.nicescroll.options = g);
});
"use strict";

// ====================================== RANDOMIZE ================================== //

/*$( document ).ready(function() {
    $( '.randomize' ).each(function() {
        $minRotate = -45;
        $maxRotate = 45;
        $holder    = $(this).parent();
        $divWidth  = $holder.width() * 0.15;
        $divHeight = $holder.height()* 0.15;
        $degree = Math.floor(Math.random()*( $maxRotate - $minRotate + 1 ) + $minRotate);

           $(this).css({
                "position" : "absolute",
                "left": Math.floor( Math.random() * 100 ) + "%",
                "top" : Math.floor( Math.random() * 100 ) + "%",
                "-webkit-transform": "rotate(" + $degree + "deg)",
                "-moz-transform": "rotate(" + $degree + "deg)",
                "-ms-transform": "rotate(" + $degree + "deg)",
                "-o-transform": "rotate(" + $degree + "deg)",
                "transform": "rotate(" + $degree + "deg)"
           });        
    })
});
*/
// ===================================== INITIAL ===================================== //
var tools = function () {
  /**
   * Check if device is desktop
   */
  var isDesktop = function isDesktop() {
    return $(window).width() >= 992;
  };
  /**
   * Check if device is tablet
   */


  var isTablet = function isTablet() {
    return $(window).width() < 992 && $(window).width() >= 768;
  };
  /**
   * Check if device is smartphone
   */


  var isSmartphone = function isSmartphone() {
    return $(window).width() < 768;
  };
  /**
   * Check if device is handheld
   */


  var isTabletOrSmart = function isTabletOrSmart() {
    return isTablet() || isSmartphone();
  };

  var scrollPos = {
    y: $(window).scrollTop(),
    x: 0
  };
  return {
    isDesktop: isDesktop,
    isTablet: isTablet,
    isSmartphone: isSmartphone
  };
}();

var site = function () {
  /*  =============================================================================
      PRELOADER
  ============================================================================== */

  /**
   * Show preloader
   */
  var showPreloader = function showPreloader() {
    TweenLite.to($(".mask"), 0.8, {
      y: "-100%",
      ease: Power2.easeOut,
      delay: 0.75,
      onComplete: function onComplete() {
        $(".mask").remove();
      }
    });
    setTimeout(function () {
      init();
    }, 100);
  };

  var init = function init() {
    onClick();
    pageInit();
  };

  var onClick = function onClick() {
    $("body").on("click", "a", function (e) {
      var url = $(this).attr('href');
      var isblank = this.target === '_blank'; // check if the link has a hash

      if (isblank) {
        e.preventDefault(); // if the link has only "#"

        window.open(url);
        return;
      } else {
        e.preventDefault();
        mask = $("<div/>").appendTo("body").addClass("mask");
        var tl = new TimelineLite();
        tl.from(mask, 0.3, {
          display: "none",
          top: "100%",
          onComplete: function onComplete() {
            setTimeout(function () {
              window.location = url;
            }, 200, url);
          }
        });
      }
    });
    $("#mobile-menu").on('click', function () {
      $('.menu-principal-container').toggleClass('active-menu');
      $('.rotate').toggleClass('active-menu');
    });
  };
  /**
   * Init page
   */


  var pageInit = function pageInit() {
    setTimeout(function () {
      allModules();
    }, 200);
  };
  /*============================================================
          Events
  ============================================================== */

  /*  =============================================================================
         MODULES INIT - Les modules à lancer à chaque fois qu'une page est chargée
     ============================================================================== */


  var allModules = function allModules() {
    navItem();
    randomize();
    scrollReveal();
  };
  /*  =============================================================================
         MODULES
     ============================================================================== */


  var navItem = function navItem() {
    var $el = $('#header'),
        $text = $('.menu a'),
        split = new SplitText($text, {
      charsClass: 'charsplit',
      wordsClass: 'wordsplit'
    }),
        tl = new TimelineLite();
    tl.staggerFrom($el.find('.wordsplit'), 1.2, {
      y: '400%',
      ease: Power4.easeOut
    }, 0.03, 1);
  };

  var randomize = function randomize() {
    var tl = new TimelineLite();
    $('.randomize').each(function () {
      var minRotate = -45,
          maxRotate = 45,
          randomX = Math.floor(Math.random() * 100) + "%",
          randomY = Math.floor(Math.random() * 100) + "%",
          degree = Math.floor(Math.random() * (maxRotate - minRotate + 1) + minRotate);
      tl.to($(this), 0.1, {
        rotation: degree,
        y: randomY,
        x: randomX,
        ease: Power2.easeOut
      }, 0.1);
    });
  };

  var scrollReveal = function scrollReveal() {
    //get viewport size
    var windowHeight = $(window).innerHeight(),
        windowWidth = $(window).width(),
        initialScroll = $(window).scrollTop(),
        items = $('.scroll-reveal'),
        bottomScreen = initialScroll + windowHeight;
    scroll; //hide anything not in the viewport

    items.each(function () {
      if (bottomScreen - 35 > $(this).offset().top) {
        var $self = $(this);
        setTimeout(function () {
          $self.trigger('reveal');
          $self.addClass('scroll-reveal--revealed');
        }, 400);
      }
    }); //on scroll

    $(window).scroll(function (event) {
      //get the current scroll position
      scroll = $(window).scrollTop();
      items.each(function () {
        //show anything that is now in view (scroll + windowHeight)
        var $self = $(this);

        if ($self.hasClass('scroll-reveal--revealed')) {
          return;
        }

        var offsetTop = $self.offset().top;

        if (scroll + windowHeight >= offsetTop) {
          $self.trigger('reveal');
          $self.addClass('scroll-reveal--revealed');
        }
      });
    });
  };

  return {
    showPreloader: showPreloader
  };
}();

var homepage = function () {
  var init = function init() {
    firstPost();
    $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
  };

  var scrollRevealHandler = function scrollRevealHandler() {
    var $el = $(this);
    if ($el.hasClass('scroll-reveal--revealed')) return;

    if ($el.is('.grid')) {
      tl = new TimelineLite();
      tl.staggerFrom($el.find('.post .image'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 0.2);
      tl.staggerFrom($el.find('.post .categories'), 1.8, {
        alpha: '0',
        ease: Power4.easeOut
      }, 0.2, 0.4);
      tl.staggerFrom($el.find('.post h1'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 0.8);
      tl.staggerFrom($el.find('.post p'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 1.2);
    } else if ($el.is('#destinations h5')) {
      var split = new SplitText($el, {
        charsClass: "charsplit",
        wordsClass: "wordsplit"
      });
      tl = new TimelineLite();
      tl.staggerFrom($el.find('.charsplit'), 1.2, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.04, 0.2);
    } else if ($el.is('#destinations li')) {
      tl = new TimelineLite();
      tl.staggerFrom($el, 1.8, {
        y: '250%',
        ease: Power4.easeOut
      }, 0.12, 0);
    } else if ($el.is('#about h2')) {
      var split = new SplitText($el, {
        charsClass: "charsplit",
        wordsClass: "wordsplit"
      });
      tl = new TimelineLite();
      tl.staggerFrom($el.find('.wordsplit'), 1, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.05, 0.2);
    } else if ($el.is('.instagram_shots')) {
      tl = new TimelineLite();
      tl.staggerFrom($el.find('li'), 1.8, {
        y: '250%',
        ease: Power4.easeOut
      }, 0.12, 0);
    }
  };

  var firstPost = function firstPost() {
    var $el = $('.first-post'),
        $text = $("#title h1"),
        $categories = $el.find('.categories div'),
        split = new SplitText($text, {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    }),
        splitCategories = new SplitText($categories, {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    });
    $("h1").prepend('<div class="trait"></div>');
    var tl = new TimelineLite();
    tl.staggerFrom($el.find('.country-code h5'), 1.8, {
      alpha: '0',
      ease: Power4.easeOut
    }, 0.2, '+=0.8');
    tl.from($el.find('.first-post-image .image'), 1.8, {
      y: '200%',
      ease: Power4.easeOut
    }, '-=1.6');
    tl.from($el.find('.categories img'), 0.6, {
      y: '300%',
      ease: Power2.easeOut
    }, '-=1.2');
    tl.staggerFrom($el.find('.categories .wordsplit'), 0.6, {
      y: '300%',
      ease: Power2.easeOut
    }, 0.1, '-=1.1');
    tl.staggerFrom($el.find('h1 .charsplit'), 1.2, {
      y: '150%',
      ease: Power4.easeOut
    }, 0.01, '-=1');
    tl.from($el.find('strong'), 0.8, {
      left: '-120%',
      ease: Power4.easeOut
    }, '-=0.8');
    tl.from($el.find('.a-cta'), 1, {
      opacity: 0,
      y: '300',
      ease: Power4.easeOut
    }, '-=1');
    tl.from($el.find('.trait'), 1.2, {
      scaleX: '0',
      transformOrigin: "left",
      ease: Power4.easeOut
    }, '-=1');
    tl.from($el.find('.label'), 0.8, {
      alpha: '0',
      scale: '1.4',
      ease: Power4.easeOut
    }, '-=0.6');
  };

  return {
    init: init
  };
}();

var archive = function () {
  var init = function init() {
    top();
    $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
  };

  var top = function top() {
    var $coverArchive = $('.cover-archive h5'),
        $sousCat = $('.list-sous-cat'),
        split = new SplitText($coverArchive, {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    });
    var tl = new TimelineLite();
    tl.staggerFrom($coverArchive.find('.charsplit'), 1.2, {
      y: '300%',
      ease: Power4.easeOut
    }, 0.02, 0.6);
    tl.from($sousCat, 0.8, {
      y: '400%',
      ease: Power2.easeOut
    }, '-=0.8');
  };

  var scrollRevealHandler = function scrollRevealHandler() {
    var $el = $(this);
    if ($el.hasClass('scroll-reveal--revealed')) return;

    if ($el.is('.grid')) {
      tl = new TimelineLite();
      tl.staggerFrom($el.find('.post .image'), 1.8, {
        y: '250%',
        ease: Power4.easeOut
      }, 0.2, 0.2);
      tl.staggerFrom($el.find('.post .categories'), 1.8, {
        alpha: '0',
        ease: Power4.easeOut
      }, 0.2, 0.4);
      tl.staggerFrom($el.find('.post h1'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 0.8);
      tl.staggerFrom($el.find('.post p'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 1.2);
      /*$('.post').each(function(index, element){
          if ($('.post').hasClass('scroll-reveal--revealed'))
              return false;
          else{tl = new TimelineLite();
      tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
      tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
      tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
      tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
          }  
      })*/
    }
  };

  return {
    init: init
  };
}();

var destinations = function () {
  var init = function init() {
    top();
    $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
  };

  var top = function top() {
    var $coverDestinations = $('#cover-container-text h1'),
        $sousCat = $('.list-sous-cat'),
        split = new SplitText($coverDestinations, {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    });
    var tl = new TimelineLite();
    tl.staggerFrom($coverDestinations.find('.charsplit'), 1.2, {
      y: '300%',
      ease: Power4.easeOut
    }, 0.02, 0.6);
    tl.from($sousCat, 0.8, {
      y: '400%',
      ease: Power2.easeOut
    }, '-=0.8');
  };

  var scrollRevealHandler = function scrollRevealHandler() {
    var $el = $(this);
    if ($el.hasClass('scroll-reveal--revealed')) return;

    if ($el.is('.grid')) {
      tl = new TimelineLite();
      tl.staggerFrom($el.find('.post .image'), 1.8, {
        y: '250%',
        ease: Power4.easeOut
      }, 0.2, 0.2);
      tl.staggerFrom($el.find('.post .categories'), 1.8, {
        alpha: '0',
        ease: Power4.easeOut
      }, 0.2, 0.4);
      tl.staggerFrom($el.find('.post h1'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 0.8);
      tl.staggerFrom($el.find('.post p'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 1.2);
    }
  };

  return {
    init: init
  };
}();

var allDestinations = function () {
  var init = function init() {
    top();
  };

  var top = function top() {
    var $coverDestinations = $('.all-destinations--title h1'),
        split = new SplitText($coverDestinations, {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    });
    var tl = new TimelineLite();
    tl.staggerFrom($coverDestinations.find('.charsplit'), 1.2, {
      y: '300%',
      ease: Power4.easeOut
    }, 0.02, 0.6);
  };

  return {
    init: init
  };
}();

var single = function () {
  var init = function init() {
    introduction();
    $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
  };

  var introduction = function introduction() {
    var $title = $("#introduction h1"),
        $subtitle = $("#introduction h4"),
        $categories = $("#introduction .categories"),
        $categoriesImg = $("#introduction .categories img"),
        $thumbnail = $("#introduction__thumbnail");
    var splitTitle = new SplitText($title, {
      wordsClass: "wordsplit"
    });
    var splitSubtitle = new SplitText($subtitle, {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    }); //var splitSummary = new SplitText($summary,{wordsClass: "wordsplit"});

    var splitCategories = new SplitText($categories.find('div'), {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    });
    var tl = new TimelineLite();
    $('.random').each(function () {
      $minRotate = -45;
      $maxRotate = 45;
      $randomX = Math.floor(Math.random() * 50) + "%";
      $randomY = Math.floor(Math.random() * 50) + "%";
      $degree = Math.floor(Math.random() * ($maxRotate - $minRotate + 1) + $minRotate);
      tl.to($(this), 2, {
        rotation: $degree,
        y: $randomY,
        x: $randomX,
        ease: Power4.easeOut
      }, 0.5);
    });
    $('.random--rotate').each(function () {
      minRotate = -10;
      maxRotate = 10;
      degree = Math.floor(Math.random() * (maxRotate - minRotate + 1) + minRotate);
      tl.to($(this), 2, {
        rotation: degree,
        ease: Power4.easeOut
      }, 0);
    });
    tl.from($thumbnail.find('.image'), 2.5, {
      y: '100%',
      rotation: -10,
      ease: Power4.easeOut
    }, '-=2');
    tl.from($categoriesImg, 0.6, {
      y: '250%',
      ease: Power4.easeOut
    }, '-=2');
    tl.staggerFrom($categories.find('.wordsplit'), 0.6, {
      y: '200%',
      ease: Power2.easeOut
    }, 0.07, '-=1.8');
    tl.staggerFrom($title.find('.wordsplit'), 1.2, {
      y: '250%',
      ease: Power4.easeOut
    }, 0.07, '-=1.8');
    tl.staggerFrom($subtitle.find('.charsplit'), 1, {
      y: '250%',
      ease: Power4.easeOut
    }, 0.01, '-=0.8');
  };

  $(window).bind('scroll', function (e) {
    parallaxScroll();
  });

  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#date').css({
      "transform": "translateY(" + (0 - scrolled * 1.2) + "px)"
    });
    $('#country-code').css({
      "transform": "translateY(" + (0 - scrolled * 0.9) + "px)"
    });
    $('#introduction__thumbnail').css({
      "transform": "translateY(" + (0 - scrolled * 1.4) + "px)" + "rotate(" + (0 + scrolled * 0.02) + "deg)"
    });
  }

  var scrollRevealHandler = function scrollRevealHandler() {
    var $el = $(this);
    if ($el.hasClass('scroll-reveal--revealed')) return;

    if ($el.is('.deux-tiers')) {
      tl = new TimelineLite();
      tl.from($el, 1.8, {
        alpha: 0,
        y: '100%',
        ease: Power4.easeOut
      }, 0.2);
    } else if ($el.is('.un-tiers')) {
      tl = new TimelineLite();
      tl.from($el, 1.8, {
        alpha: 0,
        y: '100%',
        ease: Power4.easeOut
      }, 0.2);
    } else if ($el.is('#introduction__thumbnail .image')) {
      tl = new TimelineLite();
      tl.from($el, 1.8, {
        alpha: 0,
        y: '100%',
        ease: Power4.easeOut
      }, 0.2);
    } else if ($el.is('.full-width blockquote')) {
      var splitQuote = new SplitText($el, {
        charsClass: "charsplit",
        wordsClass: "wordsplit"
      });
      tl = new TimelineLite();
      tl.staggerFrom($el.find('>div'), 1.5, {
        y: '250%',
        ease: Power4.easeOut
      }, 0.1, 0.3);
    } else if ($el.is('.grid')) {
      tl = new TimelineLite();
      tl.staggerFrom($el.find('.post .image'), 1.8, {
        y: '250%',
        ease: Power4.easeOut
      }, 0.2, 0.2);
      tl.staggerFrom($el.find('.post .categories'), 1.8, {
        alpha: '0',
        ease: Power4.easeOut
      }, 0.2, 0.4);
      tl.staggerFrom($el.find('.post h1'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 0.8);
      tl.staggerFrom($el.find('.post p'), 1.8, {
        y: '200%',
        ease: Power4.easeOut
      }, 0.2, 1.2);
    }
  };

  return {
    init: init
  };
}();

var about = function () {
  var init = function init() {
    summary();
    $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
  };

  var summary = function summary() {
    var $title = $(".about--content h1"),
        $social = $("#social"),
        $summary = $("#summary p");
    $contact = $("#contact");
    var splitTitle = new SplitText($title, {
      charsClass: "charsplit",
      wordsClass: "wordsplit"
    });
    var $summaryline = $("#summary > div");
    var tl = new TimelineLite();
    tl.staggerFrom($title.find('.charsplit'), 1.2, {
      y: '250%',
      ease: Power4.easeOut
    }, 0.05, 0.6);
  };

  var scrollRevealHandler = function scrollRevealHandler() {
    var $el = $(this);
    if ($el.hasClass('scroll-reveal--revealed')) return;

    if ($el.is('.instagram_shots')) {
      tl = new TimelineLite();
      tl.staggerFrom($el.find('li'), 1.8, {
        y: '250%',
        ease: Power4.easeOut
      }, 0.12, 0);
      /*$('.post').each(function(index, element){
          if ($('.post').hasClass('scroll-reveal--revealed'))
              return false;
          else{tl = new TimelineLite();
      tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
      tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
      tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
      tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
          }  
      })*/
    }
  };

  return {
    init: init
  };
}(); // Launch site


window.onload = function () {
  site.showPreloader();

  if ($('body').hasClass('homepage') === true) {
    setTimeout(function () {
      homepage.init();
    }, 200);
  }

  ;

  if ($('body').hasClass('archive') === true) {
    setTimeout(function () {
      archive.init();
    }, 200);
  }

  ;

  if ($('body').hasClass('destinations') === true) {
    setTimeout(function () {
      destinations.init();
    }, 200);
  }

  ;

  if ($('body').hasClass('all-destinations') === true) {
    setTimeout(function () {
      allDestinations.init();
    }, 200);
  }

  ;

  if ($('body').hasClass('single') === true) {
    setTimeout(function () {
      single.init();
    }, 200);
  }

  ;

  if ($('body').hasClass('about') === true) {
    setTimeout(function () {
      about.init();
    }, 200);
  }

  ;
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000
 * http://github.com/ezekielaquino/marquee3000
 * Marquees for the new millenium v1.0
 * MIT License
 */
;

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    root.Marquee3k = factory();
  }
})(void 0, function () {
  'use strict';

  var Marquee3k =
  /*#__PURE__*/
  function () {
    function Marquee3k(element, options) {
      _classCallCheck(this, Marquee3k);

      this.element = element;
      this.selector = options.selector;
      this.speed = element.dataset.speed || 0.25;
      this.pausable = element.dataset.pausable;
      this.reverse = element.dataset.reverse;
      this.paused = false;
      this.parent = element.parentElement;
      this.parentProps = this.parent.getBoundingClientRect();
      this.content = element.children[0];
      this.innerContent = this.content.innerHTML;
      this.wrapStyles = '';
      this.offset = 0;

      this._setupWrapper();

      this._setupContent();

      this._setupEvents();

      this.wrapper.appendChild(this.content);
      this.element.appendChild(this.wrapper);
    }

    _createClass(Marquee3k, [{
      key: "_setupWrapper",
      value: function _setupWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('marquee3k__wrapper');
        this.wrapper.style.whiteSpace = 'nowrap';
      }
    }, {
      key: "_setupContent",
      value: function _setupContent() {
        this.content.classList.add("".concat(this.selector, "__copy"));
        this.content.style.display = 'inline-block';
        this.contentWidth = this.content.offsetWidth;
        this.requiredReps = this.contentWidth > this.parentProps.width ? 2 : Math.ceil((this.parentProps.width - this.contentWidth) / this.contentWidth) + 1;

        for (var i = 0; i < this.requiredReps; i++) {
          this._createClone();
        }

        if (this.reverse) {
          this.offset = this.contentWidth * -1;
        }

        this.element.classList.add('is-init');
      }
    }, {
      key: "_setupEvents",
      value: function _setupEvents() {
        var _this = this;

        this.element.addEventListener('mouseenter', function () {
          if (_this.pausable) _this.paused = true;
        });
        this.element.addEventListener('mouseleave', function () {
          if (_this.pausable) _this.paused = false;
        });
      }
    }, {
      key: "_createClone",
      value: function _createClone() {
        var clone = this.content.cloneNode(true);
        clone.style.display = 'inline-block';
        clone.classList.add("".concat(this.selector, "__copy"));
        this.wrapper.appendChild(clone);
      }
    }, {
      key: "animate",
      value: function animate() {
        if (!this.paused) {
          var isScrolled = this.reverse ? this.offset < 0 : this.offset > this.contentWidth * -1;
          var direction = this.reverse ? -1 : 1;
          var reset = this.reverse ? this.contentWidth * -1 : 0;
          if (isScrolled) this.offset -= this.speed * direction;else this.offset = reset;
          this.wrapper.style.whiteSpace = 'nowrap';
          this.wrapper.style.transform = "translate(".concat(this.offset, "px, 0) translateZ(0)");
        }
      }
    }, {
      key: "_refresh",
      value: function _refresh() {
        this.contentWidth = this.content.offsetWidth;
      }
    }, {
      key: "repopulate",
      value: function repopulate(difference, isLarger) {
        this.contentWidth = this.content.offsetWidth;

        if (isLarger) {
          var amount = Math.ceil(difference / this.contentWidth) + 1;

          for (var i = 0; i < amount; i++) {
            this._createClone();
          }
        }
      }
    }], [{
      key: "refresh",
      value: function refresh(index) {
        MARQUEES[index]._refresh();
      }
    }, {
      key: "refreshAll",
      value: function refreshAll() {
        for (var i = 0; i < MARQUEES.length; i++) {
          MARQUEES[i]._refresh();
        }
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          selector: 'marquee3k'
        };
        window.MARQUEES = [];
        var marquees = Array.from(document.querySelectorAll(".".concat(options.selector)));
        var previousWidth = window.innerWidth;
        var timer;

        for (var i = 0; i < marquees.length; i++) {
          var marquee = marquees[i];
          var instance = new Marquee3k(marquee, options);
          MARQUEES.push(instance);
        }

        animate();

        function animate() {
          for (var _i = 0; _i < MARQUEES.length; _i++) {
            MARQUEES[_i].animate();
          }

          window.requestAnimationFrame(animate);
        }

        window.addEventListener('resize', function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            var isLarger = previousWidth < window.innerWidth;
            var difference = window.innerWidth - previousWidth;

            for (var _i2 = 0; _i2 < MARQUEES.length; _i2++) {
              MARQUEES[_i2].repopulate(difference, isLarger);
            }

            previousWidth = _this2.innerWidth;
          });
        }, 250);
      }
    }]);

    return Marquee3k;
  }();

  return Marquee3k;
});
"use strict";

(function () {
  var HIGH_SURROGATE_START = 0xD800;
  var HIGH_SURROGATE_END = 0xDBFF;
  var LOW_SURROGATE_START = 0xDC00;
  var REGIONAL_INDICATOR_START = 0x1F1E6;
  var REGIONAL_INDICATOR_END = 0x1F1FF;
  var FITZPATRICK_MODIFIER_START = 0x1f3fb;
  var FITZPATRICK_MODIFIER_END = 0x1f3ff;

  function spliddit(s) {
    var i = 0;
    var increment;
    var result = [];

    if (s === void 0 || s === null) {
      throw new Error('s cannot be undefined or null');
    }

    if (Array.isArray(s)) {
      s = s.join('');
    }

    while (i < s.length) {
      increment = take_how_many(i, s);
      result.push(s.substring(i, i + increment));
      i += increment;
    }

    return result;
  } // Decide how many code units make up the current character.
  // BMP characters: 1 code unit
  // Non-BMP characters (represented by surrogate pairs): 2 code units
  // Emoji with skin-tone modifiers: 4 code units (2 code points)
  // Country flags: 4 code units (2 code points)


  function take_how_many(i, s) {
    var last_index = s.length - 1;
    var current = s[i];
    var current_pair;
    var next_pair; // If we don't have a value that is part of a surrogate pair, or we're at
    // the end, only take the value at i

    if (!is_first_of_surrogate_pair(current) || i === last_index) {
      return 1;
    } // If the array isn't long enough to take another pair after this one, we
    // can only take the current pair


    if (i + 3 > last_index) {
      return 2;
    }

    current_pair = current + s[i + 1];
    next_pair = s.substring(i + 2, i + 5); // Country flags are comprised of two regional indicator symbols,
    // each represented by a surrogate pair.
    // See http://emojipedia.org/flags/
    // If both pairs are regional indicator symbols, take 4

    if (is_regional_indicator_symbol(current_pair) && is_regional_indicator_symbol(next_pair)) {
      return 4;
    } // If the next pair make a Fitzpatrick skin tone
    // modifier, take 4
    // See http://emojipedia.org/modifiers/
    // Technically, only some code points are meant to be
    // combined with the skin tone modifiers. This function
    // does not check the current pair to see if it is
    // one of them.


    if (is_fitzpatrick_modifier(next_pair)) {
      return 4;
    }

    return 2;
  }

  function is_first_of_surrogate_pair(c) {
    if (c === void 0 || c === null || !c.hasOwnProperty(0)) {
      return false;
    }

    return between_inclusive(c[0].charCodeAt(0), HIGH_SURROGATE_START, HIGH_SURROGATE_END);
  }

  function has_pair(s) {
    if (typeof s !== 'string') {
      return false;
    }

    return s.split('').some(is_first_of_surrogate_pair);
  }

  function is_regional_indicator_symbol(s) {
    var code_point = code_point_from_surrogate_pair(s);
    return between_inclusive(code_point, REGIONAL_INDICATOR_START, REGIONAL_INDICATOR_END);
  }

  function is_fitzpatrick_modifier(s) {
    var code_point = code_point_from_surrogate_pair(s);
    return between_inclusive(code_point, FITZPATRICK_MODIFIER_START, FITZPATRICK_MODIFIER_END);
  } // Turn two code units (surrogate pair) into
  // the code point they represent.


  function code_point_from_surrogate_pair(s) {
    var high_offset = s.charCodeAt(0) - HIGH_SURROGATE_START;
    var low_offset = s.charCodeAt(1) - LOW_SURROGATE_START;
    return (high_offset << 10) + low_offset + 0x10000;
  }

  function between_inclusive(value, lower_bound, upper_bound) {
    return value >= lower_bound && value <= upper_bound;
  }

  spliddit.isFirstOfPair = is_first_of_surrogate_pair;
  spliddit.hasPair = has_pair;
  window.spliddit = spliddit;
})(); // module.exports = spliddit
// module.exports.isFirstOfPair = is_first_of_surrogate_pair
// module.exports.hasPair = has_pair
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function SplitText(identifier, vars) {
  function duplicateObject(obj) {
    if (_typeof(obj) == "object" && obj !== null) {
      var ret = {};

      for (var index in obj) {
        ret[index] = duplicateObject(obj[index]);
      }

      return ret;
    } else {
      return obj;
    }
  }

  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };

  function hasClass(obj, c) {
    return new RegExp('(\\s|^)' + c + '(\\s|$)').test(obj.className);
  }

  function addClass(obj, c) {
    if (!hasClass(obj, c)) {
      obj.className += ' ' + c;
    }
  }

  function removeClass(obj, c) {
    if (hasClass(obj, c)) {
      obj.className = obj.className.replace(new RegExp('(\\s|^)' + c + '(\\s|$)'), ' ').replace(/\s+/g, ' ').replace(/^\s|\s$/, '');
    }
  }

  function findPos(node) {
    var node = node;
    var curtop = 0;
    var curtopscroll = 0;
    var curleft = 0;
    var curleftscroll = 0; //var needHTML = true;

    if (node.offsetParent) {
      do {
        if (node.offsetParent && node.offsetParent == document.getElementsByTagName("html")[0]) {// needHTML = false;
        }

        curtop += node.offsetTop;
        curtopscroll += node.offsetParent ? node.offsetParent.scrollTop : 0;
        curleft += node.offsetLeft;
        curleftscroll += node.offsetParent ? node.offsetParent.scrollLeft : 0;
      } while (node = node.offsetParent); // if(needHTML){
      // 	curtopscroll += document.getElementsByTagName("html")[0].scrollTop;
      // 	curleftscroll += document.getElementsByTagName("html")[0].scrollLeft;
      // }


      return [curleft - curleftscroll, curtop - curtopscroll];
    }
  }

  var identifier = identifier || [];
  var defaults = {
    type: "chars,words,lines",
    charsClass: undefined,
    linesClass: undefined,
    wordsClass: undefined,
    position: "relative"
  };
  this.HTMLobjects = [];
  this.vars = {};
  this.originalHTML = [];
  this.lines = [];
  this.words = [];
  this.chars = []; //if the identifier isn't an array, make it one.  If it already is, don't worry.  :)

  if (!Array.isArray(identifier)) {
    identifier = [identifier];
  } //itterate through the array


  for (var i = 0; i < identifier.length; i++) {
    //if it is an html element, simply add it
    if (identifier[i].nodeType == 1) {
      this.HTMLobjects.push(identifier[i]);
    } //if jquery Element add each html Element


    if (window.jQuery && identifier[i] && (identifier[i] instanceof jQuery || identifier[i].constructor.prototype.jquery)) {
      //itterate through array of html elements inside jquery object
      for (var j = 0; j < identifier[i].length; j++) {
        //Check that it is an html element before appending it
        if (identifier[i][j].nodeType == 1) {
          this.HTMLobjects.push(identifier[i][j]);
        }
      }
    } //if it's a string, try query selector all


    if (typeof identifier[i] == "string") {
      elements = document.querySelectorAll(identifier[i]);

      for (var j = 0; j < elements.length; j++) {
        if (elements[j].nodeType == 1) {
          this.HTMLobjects.push(elements[j]);
        }
      }
    }
  } //if there is an object of variables replace defaults otherwise use defaults


  if (vars && _typeof(vars) == "object" && vars !== null) {
    //if type is passed and it's a string, try and validate otherwise use default
    if (vars.type && typeof vars.type == "string") {
      vars.type = vars.type.split(",");
      var possible = ["chars", "words", "lines"];
      var use = [];

      for (var i = 0; i < vars.type.length; i++) {
        if (possible.indexOf(vars.type[i].toLowerCase()) != -1 && use.indexOf(vars.type[i].toLowerCase()) == -1) {
          use.push(vars.type[i].toLowerCase());
        } else {
          console.error(vars.type[i] + "is not a valid type");
        }
      }

      if (use.length == 0) {
        this.vars.type = defaults.type;
      } else {
        this.vars.type = use.join(",");
      }
    } else {
      this.vars.type = defaults.type;
    } //if charsClass is set then use it


    this.vars.charsClass = vars.charsClass && typeof vars.charsClass == "string" ? vars.charsClass : defaults.charsClass; //if wordsClass is set then use it

    this.vars.wordsClass = vars.wordsClass && typeof vars.wordsClass == "string" ? vars.wordsClass : defaults.wordsClass; //if linesClass is set then use it

    this.vars.linesClass = vars.linesClass && typeof vars.linesClass == "string" ? vars.linesClass : defaults.linesClass; //greensock's splittext doesn't allow static or null.  null will not set position and leave it to any css on the page

    var allowedPositions = ["absolute", "relative", "static", "fixed", "inherit", "initial", null];
    this.vars.position = vars.position && allowedPositions.indexOf(vars.position) != -1 ? vars.position : defaults.position;
  } else {
    this.vars = duplicateObject(defaults);
  } //Store the original state so we can revert easily


  for (var i = 0; i < this.HTMLobjects.length; i++) {
    this.originalHTML[i] = this.HTMLobjects[i].innerHTML;
  } //add the revert function


  this.revert = function () {
    for (var i = 0; i < this.HTMLobjects.length; i++) {
      this.HTMLobjects[i].innerHTML = this.originalHTML[i];
    }
  }; //
  //By now we should have an array at this.HTMLobjects of html objects that need spliting.
  //	
  //regex match spaces and non space characters
  //can't use this for 


  var regex = {
    wordbreak: / /gm,
    charbreak: /[^\s]/gm
  };
  this.vars.type = this.vars.type.split(",");

  for (var i = 0; i < this.HTMLobjects.length; i++) {
    var current = this.HTMLobjects[i]; //remove tags from element
    //ideally, this won't be needed in the future

    current.innerHTML = current.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
    var currentLists = {
      lines: [],
      words: [],
      chars: []
    }; //Split Lines

    if (this.vars.type.indexOf("lines") != -1) {
      var text = current.innerHTML;
      var words = text.split(' ');
      var splitPoints = [];
      current.innerHTML = words[0];
      var height = current.offsetHeight; //work out where the splits are

      for (var j = 1; j < words.length; j++) {
        current.innerHTML = current.innerHTML + ' ' + words[j];

        if (current.offsetHeight > height) {
          height = current.offsetHeight;
          splitPoints.push(current.innerHTML.length - (words[j].length + 1));
        }
      } //add the last line


      splitPoints.push(current.innerHTML.length); //add the text to the element, adding in the tags

      current.innerHTML = "";

      for (var j = 0; j < splitPoints.length; j++) {
        var lineStart = j == 0 ? 0 : splitPoints[j - 1] + 1;
        var lineEnd = j == splitPoints.length - 1 ? text.length : splitPoints[j];
        var div = document.createElement("div");
        div.style.display = "block";

        if (this.vars.linesClass !== undefined && this.vars.linesClass != "undefined") {
          this.class = this.vars.linesClass.replace("++", j + 1);
        }

        div.innerHTML = text.substring(lineStart, lineEnd);
        current.appendChild(div);

        if (this.vars.position !== null) {
          if (this.vars.position == "absolute") {
            div.toBe = {
              top: div.offsetTop,
              left: div.offsetLeft
            };
            div.style.position = "relative";
          } else if (this.vars.position == "fixed") {
            var pos = findPos(div);
            div.toBe = {
              top: pos[1],
              left: pos[0]
            };
            div.style.position = "relative";
          } else {
            div.style.position = this.vars.position;
          }
        }

        currentLists.lines.push(div);
      }
    } //split the words


    if (this.vars.type.indexOf("words") != -1) {
      var splitWords = function splitWords(parent, st) {
        var startTag = "<div style='display:inline-block;'>";
        var endTag = "</div>";
        parent.innerHTML = startTag + parent.innerHTML.replaceAll(" ", endTag + " " + startTag) + endTag;
        var nodes = parent.querySelectorAll("div");

        for (var j = 0; j < nodes.length; j++) {
          if (st.vars.wordsClass !== undefined && st.vars.wordsClass != "undefined") {
            addClass(nodes[j], st.vars.wordsClass.replaceAll("++", j + 1));
          }

          if (st.vars.position !== null) {
            if (st.vars.position == "absolute") {
              nodes[j].toBe = {
                top: nodes[j].offsetTop,
                left: nodes[j].offsetLeft
              };
              nodes[j].style.position = "relative";
            } else if (st.vars.position == "fixed") {
              var pos = findPos(nodes[j]);
              nodes[j].toBe = {
                top: pos[1],
                left: pos[0]
              };
              nodes[j].style.position = "relative";
            } else {
              nodes[j].style.position = st.vars.position;
            }
          }

          currentLists.words.push(nodes[j]);
        }
      }; //if it has been split by lines, split each line by words


      if (this.vars.type.indexOf("lines") != -1) {
        for (var j = 0; j < currentLists.lines.length; j++) {
          splitWords(currentLists.lines[j], this);
        }
      } else {
        splitWords(current, this);
      }
    } //split the characters


    if (this.vars.type.indexOf("chars") != -1) {
      var splitChars = function splitChars(parent, st) {
        //var spliddit = require('spliddit');
        var startTag = "<div style='display:inline-block;'>";
        var endTag = "</div>";
        var specials = parent.innerHTML.match(/(&\w+;)/g);
        var splid = parent.innerHTML.replace(/(&\w+;)/g, "ህ");
        parent.innerHTML = startTag + spliddit(splid).join(endTag + startTag) + endTag; //parent.innerHTML = startTag + splidditparent.innerHTML.replace(/&\w+;/g,"ህ").split("").join(endTag+startTag) + endTag;

        var nodes = parent.querySelectorAll("div");

        for (var j = 0; j < nodes.length; j++) {
          if (st.vars.charsClass !== undefined && st.vars.charsClass != "undefined") {
            var newClass = st.vars.charsClass.replaceAll("++", j + 1);

            if (j != nodes.length - 1) {
              newClass = newClass.replaceAll("**", nodes[j].innerHTML + nodes[j + 1].innerHTML);
            } else {
              newClass = newClass.replaceAll("**", "");
            }

            addClass(nodes[j], newClass);
          }

          if (st.vars.position !== null) {
            if (st.vars.position == "absolute") {
              nodes[j].toBe = {
                top: nodes[j].offsetTop,
                left: nodes[j].offsetLeft
              };
              nodes[j].style.position = "relative";
            } else if (st.vars.position == "fixed") {
              var pos = findPos(nodes[j]);
              nodes[j].toBe = {
                top: pos[1],
                left: pos[0]
              };
              nodes[j].style.position = "relative";
            } else {
              nodes[j].style.position = st.vars.position;
            }
          }

          if (nodes[j].innerHTML == "ህ") {
            nodes[j].innerHTML = specials[0];
            specials.splice(0, 1);
          }

          currentLists.chars.push(nodes[j]);
        }
      }; //if it has been split by words, split each word by characters
      //if it has only be split by lines, split each line by characters


      if (this.vars.type.indexOf("words") != -1) {
        for (var j = 0; j < currentLists.words.length; j++) {
          splitChars(currentLists.words[j], this);
        }
      } else if (this.vars.type.indexOf("lines") != -1) {
        for (var j = 0; j < currentLists.lines.length; j++) {
          splitChars(currentLists.lines[j], this);
        }
      } else {
        splitChars(current, this);
      }
    }

    if (this.vars.position == "absolute" || this.vars.position == "fixed") {
      for (var j = currentLists.chars.length - 1; j >= 0; j--) {
        currentLists.chars[j].style.width = currentLists.chars[j].offsetWidth + "px";
        currentLists.chars[j].style.height = currentLists.chars[j].offsetHeight + "px";
        currentLists.chars[j].style.left = currentLists.chars[j].toBe.left + "px";
        currentLists.chars[j].style.top = currentLists.chars[j].toBe.top + "px";
      }

      for (var j = currentLists.words.length - 1; j >= 0; j--) {
        currentLists.words[j].style.width = currentLists.words[j].offsetWidth + "px";
        currentLists.words[j].style.height = currentLists.words[j].offsetHeight + "px";
        currentLists.words[j].style.left = currentLists.words[j].toBe.left + "px";
        currentLists.words[j].style.top = currentLists.words[j].toBe.top + "px";
      }

      for (var j = currentLists.lines.length - 1; j >= 0; j--) {
        currentLists.lines[j].style.width = currentLists.lines[j].offsetWidth + "px";
        currentLists.lines[j].style.height = currentLists.lines[j].offsetHeight + "px";
        currentLists.lines[j].style.left = currentLists.lines[j].toBe.left + "px";
        currentLists.lines[j].style.top = currentLists.lines[j].toBe.top + "px";
      }

      for (var j = currentLists.chars.length - 1; j >= 0; j--) {
        currentLists.chars[j].style.position = this.vars.position;
      }

      for (var j = currentLists.words.length - 1; j >= 0; j--) {
        currentLists.words[j].style.position = this.vars.position;
      }

      for (var j = currentLists.lines.length - 1; j >= 0; j--) {
        currentLists.lines[j].style.position = this.vars.position;
      }
    }

    this.lines = this.lines.concat(currentLists.lines);
    this.words = this.words.concat(currentLists.words);
    this.chars = this.chars.concat(currentLists.chars);
  }
}