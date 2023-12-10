/*!
 * Physics2DPlugin 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((n = n || self).window = n.window || {}));
})(this, function (e) {
  "use strict";
  function j() {
    return (
      r ||
      ("undefined" != typeof window &&
        (r = window.gsap) &&
        r.registerPlugin &&
        r)
    );
  }
  function k(n) {
    return Math.round(1e4 * n) / 1e4;
  }
  function n() {
    return String.fromCharCode.apply(null, arguments);
  }
  function s(n) {
    (r = n || j()),
      d ||
        ((a = r.utils.getUnit),
        (u = r.core.getStyleSaver),
        (y = r.core.reverting || function () {}),
        (d = 1));
  }
  function t(n, e, t, i, s) {
    var o = n._gsap,
      r = o.get(n, e);
    (this.p = e),
      (this.set = o.set(n, e)),
      (this.s = this.val = parseFloat(r)),
      (this.u = a(r) || 0),
      (this.vel = t || 0),
      (this.v = this.vel / s),
      i || 0 === i
        ? ((this.acc = i), (this.a = this.acc / (s * s)))
        : (this.acc = this.a = 0);
  }
  var r,
    d,
    a,
    u,
    y,
    v = Math.PI / 180,
    c = "Physics2DPlugin",
    l = n(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    p = n(103, 115, 97, 112, 46, 99, 111, 109),
    f = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
    i =
      ((function (e) {
        var t = "undefined" != typeof window,
          i =
            0 === (t ? "" : "").indexOf(n(102, 105, 108, 101, 58, 47, 47)) ||
            -1 !== e.indexOf(n(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
            f.test(e),
          s = [
            l,
            p,
            n(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
            n(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              112,
              108,
              117,
              109,
              98,
              105,
              110,
              103
            ),
            n(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
            n(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
            n(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              119,
              101,
              98,
              115,
              105,
              116,
              101
            ),
            n(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
            n(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
            n(99, 100, 112, 110, 46, 105, 111),
            n(112, 101, 110, 115, 46, 105, 111),
            n(103, 97, 110, 110, 111, 110, 46, 116, 118),
            n(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
            n(
              116,
              104,
              101,
              109,
              101,
              102,
              111,
              114,
              101,
              115,
              116,
              46,
              110,
              101,
              116
            ),
            n(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
            n(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
            n(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
            n(112, 108, 110, 107, 114, 46, 99, 111),
            n(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
            n(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
            n(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
            n(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
            n(99, 115, 98, 46, 97, 112, 112),
            n(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
            n(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
            n(99, 111, 100, 105, 101, 114, 46, 105, 111),
            n(
              109,
              111,
              116,
              105,
              111,
              110,
              116,
              114,
              105,
              99,
              107,
              115,
              46,
              99,
              111,
              109
            ),
            n(
              115,
              116,
              97,
              99,
              107,
              111,
              118,
              101,
              114,
              102,
              108,
              111,
              119,
              46,
              99,
              111,
              109
            ),
            n(
              115,
              116,
              97,
              99,
              107,
              101,
              120,
              99,
              104,
              97,
              110,
              103,
              101,
              46,
              99,
              111,
              109
            ),
            n(
              115,
              116,
              117,
              100,
              105,
              111,
              102,
              114,
              101,
              105,
              103,
              104,
              116,
              46,
              99,
              111,
              109
            ),
            n(
              119,
              101,
              98,
              99,
              111,
              110,
              116,
              97,
              105,
              110,
              101,
              114,
              46,
              105,
              111
            ),
            n(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
          ],
          o = s.length;

        if (-1 !== e.indexOf(s[o])) return;
      })("undefined" != typeof window ? "" : ""),
      {
        version: "3.12.3",
        name: "physics2D",
        register: s,
        init: function init(n, e, i) {
          d || s();
          var o = this,
            r = +e.angle || 0,
            a = +e.velocity || 0,
            c = +e.acceleration || 0,
            l = e.xProp || "x",
            p = e.yProp || "y",
            f =
              e.accelerationAngle || 0 === e.accelerationAngle
                ? +e.accelerationAngle
                : r;
          (o.styles =
            u &&
            u(
              n,
              e.xProp && "x" !== e.xProp ? e.xProp + "," + e.yProp : "transform"
            )),
            (o.target = n),
            (o.tween = i),
            (o.step = 0),
            (o.sps = 30),
            e.gravity && ((c = +e.gravity), (f = 90)),
            (r *= v),
            (f *= v),
            (o.fr = 1 - (+e.friction || 0)),
            o._props.push(l, p),
            (o.xp = new t(n, l, Math.cos(r) * a, Math.cos(f) * c, o.sps)),
            (o.yp = new t(n, p, Math.sin(r) * a, Math.sin(f) * c, o.sps)),
            (o.skipX = o.skipY = 0);
        },
        render: function render(n, e) {
          var t,
            i,
            s,
            o,
            r,
            a,
            c = e.xp,
            l = e.yp,
            p = e.tween,
            f = e.target,
            d = e.step,
            u = e.sps,
            v = e.fr,
            h = e.skipX,
            g = e.skipY,
            w = p._from ? p._dur - p._time : p._time;
          if (p._time || !y()) {
            if (1 === v)
              (s = w * w * 0.5),
                (t = c.s + c.vel * w + c.acc * s),
                (i = l.s + l.vel * w + l.acc * s);
            else {
              for (
                o = a = (0 | (w *= u)) - d,
                  a < 0 &&
                    ((c.v = c.vel / u),
                    (l.v = l.vel / u),
                    (c.val = c.s),
                    (l.val = l.s),
                    (o = a = (e.step = 0) | w)),
                  r = (w % 1) * v;
                a--;

              )
                (c.v += c.a),
                  (l.v += l.a),
                  (c.v *= v),
                  (l.v *= v),
                  (c.val += c.v),
                  (l.val += l.v);
              (t = c.val + c.v * r), (i = l.val + l.v * r), (e.step += o);
            }
            h || c.set(f, c.p, k(t) + c.u), g || l.set(f, l.p, k(i) + l.u);
          } else e.styles.revert();
        },
        kill: function kill(n) {
          this.xp.p === n && (this.skipX = 1),
            this.yp.p === n && (this.skipY = 1);
        },
      });
  j() && r.registerPlugin(i), (e.Physics2DPlugin = i), (e.default = i);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
