(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module-ngfactory"], {
    /***/
    "./node_modules/d3-shape/src/arc.js":
    /*!******************************************!*\
      !*** ./node_modules/d3-shape/src/arc.js ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcArcJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3-path */
      "./node_modules/d3-path/index.js");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constant */
      "./node_modules/d3-shape/src/constant.js");
      /* harmony import */


      var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./math */
      "./node_modules/d3-shape/src/math.js");

      function arcInnerRadius(d) {
        return d.innerRadius;
      }

      function arcOuterRadius(d) {
        return d.outerRadius;
      }

      function arcStartAngle(d) {
        return d.startAngle;
      }

      function arcEndAngle(d) {
        return d.endAngle;
      }

      function arcPadAngle(d) {
        return d && d.padAngle; // Note: optional!
      }

      function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
        var x10 = x1 - x0,
            y10 = y1 - y0,
            x32 = x3 - x2,
            y32 = y3 - y2,
            t = y32 * x10 - x32 * y10;
        if (t * t < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) return;
        t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
        return [x0 + t * x10, y0 + t * y10];
      } // Compute perpendicular offset line of length rc.
      // http://mathworld.wolfram.com/Circle-LineIntersection.html


      function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
        var x01 = x0 - x1,
            y01 = y0 - y1,
            lo = (cw ? rc : -rc) / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
            ox = lo * y01,
            oy = -lo * x01,
            x11 = x0 + ox,
            y11 = y0 + oy,
            x10 = x1 + ox,
            y10 = y1 + oy,
            x00 = (x11 + x10) / 2,
            y00 = (y11 + y10) / 2,
            dx = x10 - x11,
            dy = y10 - y11,
            d2 = dx * dx + dy * dy,
            r = r1 - rc,
            D = x11 * y10 - x10 * y11,
            d = (dy < 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
            cx0 = (D * dy - dx * d) / d2,
            cy0 = (-D * dx - dy * d) / d2,
            cx1 = (D * dy + dx * d) / d2,
            cy1 = (-D * dx + dy * d) / d2,
            dx0 = cx0 - x00,
            dy0 = cy0 - y00,
            dx1 = cx1 - x00,
            dy1 = cy1 - y00; // Pick the closer of the two intersection points.
        // TODO Is there a faster way to determine which intersection to use?

        if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
        return {
          cx: cx0,
          cy: cy0,
          x01: -ox,
          y01: -oy,
          x11: cx0 * (r1 / r - 1),
          y11: cy0 * (r1 / r - 1)
        };
      }
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var innerRadius = arcInnerRadius,
            outerRadius = arcOuterRadius,
            cornerRadius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
            padRadius = null,
            startAngle = arcStartAngle,
            endAngle = arcEndAngle,
            padAngle = arcPadAngle,
            context = null;

        function arc() {
          var buffer,
              r,
              r0 = +innerRadius.apply(this, arguments),
              r1 = +outerRadius.apply(this, arguments),
              a0 = startAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
              a1 = endAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
              da = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
              cw = a1 > a0;

          if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])(); // Ensure that the outer radius is always larger than the inner radius.

          if (r1 < r0) r = r1, r1 = r0, r0 = r; // Is it a point?

          if (!(r1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0); // Or is it a circle or annulus?
          else if (da > _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
              context.moveTo(r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
              context.arc(0, 0, r1, a0, a1, !cw);

              if (r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                context.moveTo(r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
                context.arc(0, 0, r0, a1, a0, cw);
              }
            } // Or is it a circular or annular sector?
            else {
                var a01 = a0,
                    a11 = a1,
                    a00 = a0,
                    a10 = a1,
                    da0 = da,
                    da1 = da,
                    ap = padAngle.apply(this, arguments) / 2,
                    rp = ap > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] && (padRadius ? +padRadius.apply(this, arguments) : Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
                    rc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
                    rc0 = rc,
                    rc1 = rc,
                    t0,
                    t1; // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.

                if (rp > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                  var p0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
                      p1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
                  if ((da0 -= p0 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
                  if ((da1 -= p1 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
                }

                var x01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
                    y01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
                    x10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
                    y10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10); // Apply rounded corners?

                if (rc > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                  var x11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
                      y11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
                      x00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
                      y00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00),
                      oc; // Restrict the corner radius according to the sector angle.

                  if (da < _math__WEBPACK_IMPORTED_MODULE_2__["pi"] && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
                    var ax = x01 - oc[0],
                        ay = y01 - oc[1],
                        bx = x11 - oc[0],
                        by = y11 - oc[1],
                        kc = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
                        lc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
                    rc0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
                    rc1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
                  }
                } // Is the sector collapsed to a line?


                if (!(da1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01); // Does the sector’s outer ring have rounded corners?
                else if (rc1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                    t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                    t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                    context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

                    if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
                    else {
                        context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
                        context.arc(0, 0, r1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                        context.arc(t1.cx, t1.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
                      }
                  } // Or is the outer ring just a circular arc?
                  else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw); // Is there no inner ring, and it’s a circular sector?
                // Or perhaps it’s an annular sector collapsed due to padding?

                if (!(r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10); // Does the sector’s inner ring (or point) have rounded corners?
                else if (rc0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
                    t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                    t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                    context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

                    if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
                    else {
                        context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
                        context.arc(0, 0, r0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                        context.arc(t1.cx, t1.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
                      }
                  } // Or is the inner ring just a circular arc?
                  else context.arc(0, 0, r0, a10, a00, cw);
              }
          context.closePath();
          if (buffer) return context = null, buffer + "" || null;
        }

        arc.centroid = function () {
          var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
              a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
          return [Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
        };

        arc.innerRadius = function (_) {
          return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
        };

        arc.outerRadius = function (_) {
          return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
        };

        arc.cornerRadius = function (_) {
          return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
        };

        arc.padRadius = function (_) {
          return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
        };

        arc.startAngle = function (_) {
          return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
        };

        arc.endAngle = function (_) {
          return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
        };

        arc.padAngle = function (_) {
          return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
        };

        arc.context = function (_) {
          return arguments.length ? (context = _ == null ? null : _, arc) : context;
        };

        return arc;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/area.js":
    /*!*******************************************!*\
      !*** ./node_modules/d3-shape/src/area.js ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcAreaJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3-path */
      "./node_modules/d3-path/index.js");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constant */
      "./node_modules/d3-shape/src/constant.js");
      /* harmony import */


      var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./curve/linear */
      "./node_modules/d3-shape/src/curve/linear.js");
      /* harmony import */


      var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./line */
      "./node_modules/d3-shape/src/line.js");
      /* harmony import */


      var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./point */
      "./node_modules/d3-shape/src/point.js");
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var x0 = _point__WEBPACK_IMPORTED_MODULE_4__["x"],
            x1 = null,
            y0 = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
            y1 = _point__WEBPACK_IMPORTED_MODULE_4__["y"],
            defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
            context = null,
            curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
            output = null;

        function area(data) {
          var i,
              j,
              k,
              n = data.length,
              d,
              defined0 = false,
              buffer,
              x0z = new Array(n),
              y0z = new Array(n);
          if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

          for (i = 0; i <= n; ++i) {
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
              if (defined0 = !defined0) {
                j = i;
                output.areaStart();
                output.lineStart();
              } else {
                output.lineEnd();
                output.lineStart();

                for (k = i - 1; k >= j; --k) {
                  output.point(x0z[k], y0z[k]);
                }

                output.lineEnd();
                output.areaEnd();
              }
            }

            if (defined0) {
              x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
              output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
            }
          }

          if (buffer) return output = null, buffer + "" || null;
        }

        function arealine() {
          return Object(_line__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
        }

        area.x = function (_) {
          return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
        };

        area.x0 = function (_) {
          return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
        };

        area.x1 = function (_) {
          return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
        };

        area.y = function (_) {
          return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
        };

        area.y0 = function (_) {
          return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
        };

        area.y1 = function (_) {
          return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
        };

        area.lineX0 = area.lineY0 = function () {
          return arealine().x(x0).y(y0);
        };

        area.lineY1 = function () {
          return arealine().x(x0).y(y1);
        };

        area.lineX1 = function () {
          return arealine().x(x1).y(y0);
        };

        area.defined = function (_) {
          return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
        };

        area.curve = function (_) {
          return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
        };

        area.context = function (_) {
          return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
        };

        return area;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/areaRadial.js":
    /*!*************************************************!*\
      !*** ./node_modules/d3-shape/src/areaRadial.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcAreaRadialJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./curve/radial */
      "./node_modules/d3-shape/src/curve/radial.js");
      /* harmony import */


      var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./area */
      "./node_modules/d3-shape/src/area.js");
      /* harmony import */


      var _lineRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lineRadial */
      "./node_modules/d3-shape/src/lineRadial.js");
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var a = Object(_area__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
            c = a.curve,
            x0 = a.lineX0,
            x1 = a.lineX1,
            y0 = a.lineY0,
            y1 = a.lineY1;
        a.angle = a.x, delete a.x;
        a.startAngle = a.x0, delete a.x0;
        a.endAngle = a.x1, delete a.x1;
        a.radius = a.y, delete a.y;
        a.innerRadius = a.y0, delete a.y0;
        a.outerRadius = a.y1, delete a.y1;
        a.lineStartAngle = function () {
          return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0());
        }, delete a.lineX0;
        a.lineEndAngle = function () {
          return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1());
        }, delete a.lineX1;
        a.lineInnerRadius = function () {
          return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0());
        }, delete a.lineY0;
        a.lineOuterRadius = function () {
          return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1());
        }, delete a.lineY1;

        a.curve = function (_) {
          return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
        };

        return a;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/array.js":
    /*!********************************************!*\
      !*** ./node_modules/d3-shape/src/array.js ***!
      \********************************************/

    /*! exports provided: slice */

    /***/
    function node_modulesD3ShapeSrcArrayJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slice", function () {
        return slice;
      });

      var slice = Array.prototype.slice;
      /***/
    },

    /***/
    "./node_modules/d3-shape/src/constant.js":
    /*!***********************************************!*\
      !*** ./node_modules/d3-shape/src/constant.js ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcConstantJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (x) {
        return function constant() {
          return x;
        };
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/basis.js":
    /*!**************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/basis.js ***!
      \**************************************************/

    /*! exports provided: point, Basis, default */

    /***/
    function node_modulesD3ShapeSrcCurveBasisJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "point", function () {
        return _point;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Basis", function () {
        return Basis;
      });

      function _point(that, x, y) {
        that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
      }

      function Basis(context) {
        this._context = context;
      }

      Basis.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 3:
              _point(this, this._x1, this._y1);

            // proceed

            case 2:
              this._context.lineTo(this._x1, this._y1);

              break;
          }

          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;

              this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

            // proceed

            default:
              _point(this, x, y);

              break;
          }

          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function (context) {
        return new Basis(context);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/basisClosed.js":
    /*!********************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveBasisClosedJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../noop */
      "./node_modules/d3-shape/src/noop.js");
      /* harmony import */


      var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basis */
      "./node_modules/d3-shape/src/curve/basis.js");

      function BasisClosed(context) {
        this._context = context;
      }

      BasisClosed.prototype = {
        areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
        areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 1:
              {
                this._context.moveTo(this._x2, this._y2);

                this._context.closePath();

                break;
              }

            case 2:
              {
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);

                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);

                this._context.closePath();

                break;
              }

            case 3:
              {
                this.point(this._x2, this._y2);
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                break;
              }
          }
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              this._x2 = x, this._y2 = y;
              break;

            case 1:
              this._point = 2;
              this._x3 = x, this._y3 = y;
              break;

            case 2:
              this._point = 3;
              this._x4 = x, this._y4 = y;

              this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);

              break;

            default:
              Object(_basis__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y);
              break;
          }

          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function (context) {
        return new BasisClosed(context);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/basisOpen.js":
    /*!******************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveBasisOpenJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basis */
      "./node_modules/d3-shape/src/curve/basis.js");

      function BasisOpen(context) {
        this._context = context;
      }

      BasisOpen.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;
              var x0 = (this._x0 + 4 * this._x1 + x) / 6,
                  y0 = (this._y0 + 4 * this._y1 + y) / 6;
              this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
              break;

            case 3:
              this._point = 4;
            // proceed

            default:
              Object(_basis__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y);
              break;
          }

          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function (context) {
        return new BasisOpen(context);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/bundle.js":
    /*!***************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveBundleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basis */
      "./node_modules/d3-shape/src/curve/basis.js");

      function Bundle(context, beta) {
        this._basis = new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
        this._beta = beta;
      }

      Bundle.prototype = {
        lineStart: function lineStart() {
          this._x = [];
          this._y = [];

          this._basis.lineStart();
        },
        lineEnd: function lineEnd() {
          var x = this._x,
              y = this._y,
              j = x.length - 1;

          if (j > 0) {
            var x0 = x[0],
                y0 = y[0],
                dx = x[j] - x0,
                dy = y[j] - y0,
                i = -1,
                t;

            while (++i <= j) {
              t = i / j;

              this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
            }
          }

          this._x = this._y = null;

          this._basis.lineEnd();
        },
        point: function point(x, y) {
          this._x.push(+x);

          this._y.push(+y);
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function custom(beta) {
        function bundle(context) {
          return beta === 1 ? new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
        }

        bundle.beta = function (beta) {
          return custom(+beta);
        };

        return bundle;
      }(0.85);
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/cardinal.js":
    /*!*****************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
      \*****************************************************/

    /*! exports provided: point, Cardinal, default */

    /***/
    function node_modulesD3ShapeSrcCurveCardinalJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "point", function () {
        return _point2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cardinal", function () {
        return Cardinal;
      });

      function _point2(that, x, y) {
        that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
      }

      function Cardinal(context, tension) {
        this._context = context;
        this._k = (1 - tension) / 6;
      }

      Cardinal.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);

              break;

            case 3:
              _point2(this, this._x1, this._y1);

              break;
          }

          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;

            case 1:
              this._point = 2;
              this._x1 = x, this._y1 = y;
              break;

            case 2:
              this._point = 3;
            // proceed

            default:
              _point2(this, x, y);

              break;
          }

          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function custom(tension) {
        function cardinal(context) {
          return new Cardinal(context, tension);
        }

        cardinal.tension = function (tension) {
          return custom(+tension);
        };

        return cardinal;
      }(0);
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/cardinalClosed.js":
    /*!***********************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
      \***********************************************************/

    /*! exports provided: CardinalClosed, default */

    /***/
    function node_modulesD3ShapeSrcCurveCardinalClosedJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardinalClosed", function () {
        return CardinalClosed;
      });
      /* harmony import */


      var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../noop */
      "./node_modules/d3-shape/src/noop.js");
      /* harmony import */


      var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cardinal */
      "./node_modules/d3-shape/src/curve/cardinal.js");

      function CardinalClosed(context, tension) {
        this._context = context;
        this._k = (1 - tension) / 6;
      }

      CardinalClosed.prototype = {
        areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
        areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 1:
              {
                this._context.moveTo(this._x3, this._y3);

                this._context.closePath();

                break;
              }

            case 2:
              {
                this._context.lineTo(this._x3, this._y3);

                this._context.closePath();

                break;
              }

            case 3:
              {
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
              }
          }
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              this._x3 = x, this._y3 = y;
              break;

            case 1:
              this._point = 2;

              this._context.moveTo(this._x4 = x, this._y4 = y);

              break;

            case 2:
              this._point = 3;
              this._x5 = x, this._y5 = y;
              break;

            default:
              Object(_cardinal__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y);
              break;
          }

          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function custom(tension) {
        function cardinal(context) {
          return new CardinalClosed(context, tension);
        }

        cardinal.tension = function (tension) {
          return custom(+tension);
        };

        return cardinal;
      }(0);
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/cardinalOpen.js":
    /*!*********************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
      \*********************************************************/

    /*! exports provided: CardinalOpen, default */

    /***/
    function node_modulesD3ShapeSrcCurveCardinalOpenJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardinalOpen", function () {
        return CardinalOpen;
      });
      /* harmony import */


      var _cardinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cardinal */
      "./node_modules/d3-shape/src/curve/cardinal.js");

      function CardinalOpen(context, tension) {
        this._context = context;
        this._k = (1 - tension) / 6;
      }

      CardinalOpen.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;

            case 3:
              this._point = 4;
            // proceed

            default:
              Object(_cardinal__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y);
              break;
          }

          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function custom(tension) {
        function cardinal(context) {
          return new CardinalOpen(context, tension);
        }

        cardinal.tension = function (tension) {
          return custom(+tension);
        };

        return cardinal;
      }(0);
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/catmullRom.js":
    /*!*******************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
      \*******************************************************/

    /*! exports provided: point, default */

    /***/
    function node_modulesD3ShapeSrcCurveCatmullRomJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "point", function () {
        return _point3;
      });
      /* harmony import */


      var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../math */
      "./node_modules/d3-shape/src/math.js");
      /* harmony import */


      var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cardinal */
      "./node_modules/d3-shape/src/curve/cardinal.js");

      function _point3(that, x, y) {
        var x1 = that._x1,
            y1 = that._y1,
            x2 = that._x2,
            y2 = that._y2;

        if (that._l01_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
          var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
              n = 3 * that._l01_a * (that._l01_a + that._l12_a);
          x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
          y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
        }

        if (that._l23_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
          var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
              m = 3 * that._l23_a * (that._l23_a + that._l12_a);
          x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
          y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
        }

        that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
      }

      function CatmullRom(context, alpha) {
        this._context = context;
        this._alpha = alpha;
      }

      CatmullRom.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);

              break;

            case 3:
              this.point(this._x2, this._y2);
              break;
          }

          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          if (this._point) {
            var x23 = this._x2 - x,
                y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
          }

          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;
            // proceed

            default:
              _point3(this, x, y);

              break;
          }

          this._l01_a = this._l12_a, this._l12_a = this._l23_a;
          this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function custom(alpha) {
        function catmullRom(context) {
          return alpha ? new CatmullRom(context, alpha) : new _cardinal__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
        }

        catmullRom.alpha = function (alpha) {
          return custom(+alpha);
        };

        return catmullRom;
      }(0.5);
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
    /*!*************************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveCatmullRomClosedJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cardinalClosed */
      "./node_modules/d3-shape/src/curve/cardinalClosed.js");
      /* harmony import */


      var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../noop */
      "./node_modules/d3-shape/src/noop.js");
      /* harmony import */


      var _catmullRom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catmullRom */
      "./node_modules/d3-shape/src/curve/catmullRom.js");

      function CatmullRomClosed(context, alpha) {
        this._context = context;
        this._alpha = alpha;
      }

      CatmullRomClosed.prototype = {
        areaStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
        areaEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 1:
              {
                this._context.moveTo(this._x3, this._y3);

                this._context.closePath();

                break;
              }

            case 2:
              {
                this._context.lineTo(this._x3, this._y3);

                this._context.closePath();

                break;
              }

            case 3:
              {
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
              }
          }
        },
        point: function point(x, y) {
          x = +x, y = +y;

          if (this._point) {
            var x23 = this._x2 - x,
                y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
          }

          switch (this._point) {
            case 0:
              this._point = 1;
              this._x3 = x, this._y3 = y;
              break;

            case 1:
              this._point = 2;

              this._context.moveTo(this._x4 = x, this._y4 = y);

              break;

            case 2:
              this._point = 3;
              this._x5 = x, this._y5 = y;
              break;

            default:
              Object(_catmullRom__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y);
              break;
          }

          this._l01_a = this._l12_a, this._l12_a = this._l23_a;
          this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function custom(alpha) {
        function catmullRom(context) {
          return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
        }

        catmullRom.alpha = function (alpha) {
          return custom(+alpha);
        };

        return catmullRom;
      }(0.5);
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
    /*!***********************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveCatmullRomOpenJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cardinalOpen */
      "./node_modules/d3-shape/src/curve/cardinalOpen.js");
      /* harmony import */


      var _catmullRom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./catmullRom */
      "./node_modules/d3-shape/src/curve/catmullRom.js");

      function CatmullRomOpen(context, alpha) {
        this._context = context;
        this._alpha = alpha;
      }

      CatmullRomOpen.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function lineEnd() {
          if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          if (this._point) {
            var x23 = this._x2 - x,
                y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
          }

          switch (this._point) {
            case 0:
              this._point = 1;
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;

            case 3:
              this._point = 4;
            // proceed

            default:
              Object(_catmullRom__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y);
              break;
          }

          this._l01_a = this._l12_a, this._l12_a = this._l23_a;
          this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function custom(alpha) {
        function catmullRom(context) {
          return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
        }

        catmullRom.alpha = function (alpha) {
          return custom(+alpha);
        };

        return catmullRom;
      }(0.5);
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/linear.js":
    /*!***************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/linear.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveLinearJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function Linear(context) {
        this._context = context;
      }

      Linear.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;

            case 1:
              this._point = 2;
            // proceed

            default:
              this._context.lineTo(x, y);

              break;
          }
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function (context) {
        return new Linear(context);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/linearClosed.js":
    /*!*********************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveLinearClosedJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../noop */
      "./node_modules/d3-shape/src/noop.js");

      function LinearClosed(context) {
        this._context = context;
      }

      LinearClosed.prototype = {
        areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
        areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
        lineStart: function lineStart() {
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          if (this._point) this._context.closePath();
        },
        point: function point(x, y) {
          x = +x, y = +y;
          if (this._point) this._context.lineTo(x, y);else this._point = 1, this._context.moveTo(x, y);
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function (context) {
        return new LinearClosed(context);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/monotone.js":
    /*!*****************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
      \*****************************************************/

    /*! exports provided: monotoneX, monotoneY */

    /***/
    function node_modulesD3ShapeSrcCurveMonotoneJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "monotoneX", function () {
        return monotoneX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "monotoneY", function () {
        return monotoneY;
      });

      function sign(x) {
        return x < 0 ? -1 : 1;
      } // Calculate the slopes of the tangents (Hermite-type interpolation) based on
      // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
      // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
      // NOV(II), P. 443, 1990.


      function slope3(that, x2, y2) {
        var h0 = that._x1 - that._x0,
            h1 = x2 - that._x1,
            s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
            s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
            p = (s0 * h1 + s1 * h0) / (h0 + h1);
        return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
      } // Calculate a one-sided slope.


      function slope2(that, t) {
        var h = that._x1 - that._x0;
        return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
      } // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
      // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
      // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".


      function _point4(that, t0, t1) {
        var x0 = that._x0,
            y0 = that._y0,
            x1 = that._x1,
            y1 = that._y1,
            dx = (x1 - x0) / 3;

        that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
      }

      function MonotoneX(context) {
        this._context = context;
      }

      MonotoneX.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);

              break;

            case 3:
              _point4(this, this._t0, slope2(this, this._t0));

              break;
          }

          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function point(x, y) {
          var t1 = NaN;
          x = +x, y = +y;
          if (x === this._x1 && y === this._y1) return; // Ignore coincident points.

          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;

              _point4(this, slope2(this, t1 = slope3(this, x, y)), t1);

              break;

            default:
              _point4(this, this._t0, t1 = slope3(this, x, y));

              break;
          }

          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
          this._t0 = t1;
        }
      };

      function MonotoneY(context) {
        this._context = new ReflectContext(context);
      }

      (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
        MonotoneX.prototype.point.call(this, y, x);
      };

      function ReflectContext(context) {
        this._context = context;
      }

      ReflectContext.prototype = {
        moveTo: function moveTo(x, y) {
          this._context.moveTo(y, x);
        },
        closePath: function closePath() {
          this._context.closePath();
        },
        lineTo: function lineTo(x, y) {
          this._context.lineTo(y, x);
        },
        bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
          this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
        }
      };

      function monotoneX(context) {
        return new MonotoneX(context);
      }

      function monotoneY(context) {
        return new MonotoneY(context);
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/natural.js":
    /*!****************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/natural.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcCurveNaturalJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function Natural(context) {
        this._context = context;
      }

      Natural.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x = [];
          this._y = [];
        },
        lineEnd: function lineEnd() {
          var x = this._x,
              y = this._y,
              n = x.length;

          if (n) {
            this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);

            if (n === 2) {
              this._context.lineTo(x[1], y[1]);
            } else {
              var px = controlPoints(x),
                  py = controlPoints(y);

              for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
                this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
              }
            }
          }

          if (this._line || this._line !== 0 && n === 1) this._context.closePath();
          this._line = 1 - this._line;
          this._x = this._y = null;
        },
        point: function point(x, y) {
          this._x.push(+x);

          this._y.push(+y);
        }
      }; // See https://www.particleincell.com/2012/bezier-splines/ for derivation.

      function controlPoints(x) {
        var i,
            n = x.length - 1,
            m,
            a = new Array(n),
            b = new Array(n),
            r = new Array(n);
        a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];

        for (i = 1; i < n - 1; ++i) {
          a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
        }

        a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];

        for (i = 1; i < n; ++i) {
          m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
        }

        a[n - 1] = r[n - 1] / b[n - 1];

        for (i = n - 2; i >= 0; --i) {
          a[i] = (r[i] - a[i + 1]) / b[i];
        }

        b[n - 1] = (x[n] + a[n - 1]) / 2;

        for (i = 0; i < n - 1; ++i) {
          b[i] = 2 * x[i + 1] - a[i + 1];
        }

        return [a, b];
      }
      /* harmony default export */


      __webpack_exports__["default"] = function (context) {
        return new Natural(context);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/radial.js":
    /*!***************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/radial.js ***!
      \***************************************************/

    /*! exports provided: curveRadialLinear, default */

    /***/
    function node_modulesD3ShapeSrcCurveRadialJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function () {
        return curveRadialLinear;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return curveRadial;
      });
      /* harmony import */


      var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./linear */
      "./node_modules/d3-shape/src/curve/linear.js");

      var curveRadialLinear = curveRadial(_linear__WEBPACK_IMPORTED_MODULE_0__["default"]);

      function Radial(curve) {
        this._curve = curve;
      }

      Radial.prototype = {
        areaStart: function areaStart() {
          this._curve.areaStart();
        },
        areaEnd: function areaEnd() {
          this._curve.areaEnd();
        },
        lineStart: function lineStart() {
          this._curve.lineStart();
        },
        lineEnd: function lineEnd() {
          this._curve.lineEnd();
        },
        point: function point(a, r) {
          this._curve.point(r * Math.sin(a), r * -Math.cos(a));
        }
      };

      function curveRadial(curve) {
        function radial(context) {
          return new Radial(curve(context));
        }

        radial._curve = curve;
        return radial;
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/curve/step.js":
    /*!*************************************************!*\
      !*** ./node_modules/d3-shape/src/curve/step.js ***!
      \*************************************************/

    /*! exports provided: default, stepBefore, stepAfter */

    /***/
    function node_modulesD3ShapeSrcCurveStepJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stepBefore", function () {
        return stepBefore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stepAfter", function () {
        return stepAfter;
      });

      function Step(context, t) {
        this._context = context;
        this._t = t;
      }

      Step.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x = this._y = NaN;
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
        },
        point: function point(x, y) {
          x = +x, y = +y;

          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;

            case 1:
              this._point = 2;
            // proceed

            default:
              {
                if (this._t <= 0) {
                  this._context.lineTo(this._x, y);

                  this._context.lineTo(x, y);
                } else {
                  var x1 = this._x * (1 - this._t) + x * this._t;

                  this._context.lineTo(x1, this._y);

                  this._context.lineTo(x1, y);
                }

                break;
              }
          }

          this._x = x, this._y = y;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = function (context) {
        return new Step(context, 0.5);
      };

      function stepBefore(context) {
        return new Step(context, 0);
      }

      function stepAfter(context) {
        return new Step(context, 1);
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/descending.js":
    /*!*************************************************!*\
      !*** ./node_modules/d3-shape/src/descending.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcDescendingJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/identity.js":
    /*!***********************************************!*\
      !*** ./node_modules/d3-shape/src/identity.js ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcIdentityJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (d) {
        return d;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/index.js":
    /*!********************************************!*\
      !*** ./node_modules/d3-shape/src/index.js ***!
      \********************************************/

    /*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */

    /***/
    function node_modulesD3ShapeSrcIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _arc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./arc */
      "./node_modules/d3-shape/src/arc.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arc", function () {
        return _arc__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./area */
      "./node_modules/d3-shape/src/area.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "area", function () {
        return _area__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./line */
      "./node_modules/d3-shape/src/line.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "line", function () {
        return _line__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pie */
      "./node_modules/d3-shape/src/pie.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "pie", function () {
        return _pie__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _areaRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./areaRadial */
      "./node_modules/d3-shape/src/areaRadial.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "areaRadial", function () {
        return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "radialArea", function () {
        return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _lineRadial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lineRadial */
      "./node_modules/d3-shape/src/lineRadial.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "lineRadial", function () {
        return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "radialLine", function () {
        return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _pointRadial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pointRadial */
      "./node_modules/d3-shape/src/pointRadial.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "pointRadial", function () {
        return _pointRadial__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /* harmony import */


      var _link_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./link/index */
      "./node_modules/d3-shape/src/link/index.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "linkHorizontal", function () {
        return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "linkVertical", function () {
        return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkVertical"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "linkRadial", function () {
        return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkRadial"];
      });
      /* harmony import */


      var _symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./symbol */
      "./node_modules/d3-shape/src/symbol.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbol", function () {
        return _symbol__WEBPACK_IMPORTED_MODULE_8__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbols", function () {
        return _symbol__WEBPACK_IMPORTED_MODULE_8__["symbols"];
      });
      /* harmony import */


      var _symbol_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./symbol/circle */
      "./node_modules/d3-shape/src/symbol/circle.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbolCircle", function () {
        return _symbol_circle__WEBPACK_IMPORTED_MODULE_9__["default"];
      });
      /* harmony import */


      var _symbol_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./symbol/cross */
      "./node_modules/d3-shape/src/symbol/cross.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbolCross", function () {
        return _symbol_cross__WEBPACK_IMPORTED_MODULE_10__["default"];
      });
      /* harmony import */


      var _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./symbol/diamond */
      "./node_modules/d3-shape/src/symbol/diamond.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbolDiamond", function () {
        return _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__["default"];
      });
      /* harmony import */


      var _symbol_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./symbol/square */
      "./node_modules/d3-shape/src/symbol/square.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbolSquare", function () {
        return _symbol_square__WEBPACK_IMPORTED_MODULE_12__["default"];
      });
      /* harmony import */


      var _symbol_star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./symbol/star */
      "./node_modules/d3-shape/src/symbol/star.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbolStar", function () {
        return _symbol_star__WEBPACK_IMPORTED_MODULE_13__["default"];
      });
      /* harmony import */


      var _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./symbol/triangle */
      "./node_modules/d3-shape/src/symbol/triangle.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbolTriangle", function () {
        return _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__["default"];
      });
      /* harmony import */


      var _symbol_wye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./symbol/wye */
      "./node_modules/d3-shape/src/symbol/wye.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symbolWye", function () {
        return _symbol_wye__WEBPACK_IMPORTED_MODULE_15__["default"];
      });
      /* harmony import */


      var _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./curve/basisClosed */
      "./node_modules/d3-shape/src/curve/basisClosed.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function () {
        return _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__["default"];
      });
      /* harmony import */


      var _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./curve/basisOpen */
      "./node_modules/d3-shape/src/curve/basisOpen.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function () {
        return _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__["default"];
      });
      /* harmony import */


      var _curve_basis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./curve/basis */
      "./node_modules/d3-shape/src/curve/basis.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveBasis", function () {
        return _curve_basis__WEBPACK_IMPORTED_MODULE_18__["default"];
      });
      /* harmony import */


      var _curve_bundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./curve/bundle */
      "./node_modules/d3-shape/src/curve/bundle.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveBundle", function () {
        return _curve_bundle__WEBPACK_IMPORTED_MODULE_19__["default"];
      });
      /* harmony import */


      var _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./curve/cardinalClosed */
      "./node_modules/d3-shape/src/curve/cardinalClosed.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function () {
        return _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__["default"];
      });
      /* harmony import */


      var _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./curve/cardinalOpen */
      "./node_modules/d3-shape/src/curve/cardinalOpen.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function () {
        return _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__["default"];
      });
      /* harmony import */


      var _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./curve/cardinal */
      "./node_modules/d3-shape/src/curve/cardinal.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveCardinal", function () {
        return _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__["default"];
      });
      /* harmony import */


      var _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./curve/catmullRomClosed */
      "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function () {
        return _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__["default"];
      });
      /* harmony import */


      var _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./curve/catmullRomOpen */
      "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function () {
        return _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__["default"];
      });
      /* harmony import */


      var _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./curve/catmullRom */
      "./node_modules/d3-shape/src/curve/catmullRom.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function () {
        return _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__["default"];
      });
      /* harmony import */


      var _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./curve/linearClosed */
      "./node_modules/d3-shape/src/curve/linearClosed.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function () {
        return _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__["default"];
      });
      /* harmony import */


      var _curve_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./curve/linear */
      "./node_modules/d3-shape/src/curve/linear.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveLinear", function () {
        return _curve_linear__WEBPACK_IMPORTED_MODULE_27__["default"];
      });
      /* harmony import */


      var _curve_monotone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./curve/monotone */
      "./node_modules/d3-shape/src/curve/monotone.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function () {
        return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneX"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function () {
        return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneY"];
      });
      /* harmony import */


      var _curve_natural__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./curve/natural */
      "./node_modules/d3-shape/src/curve/natural.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveNatural", function () {
        return _curve_natural__WEBPACK_IMPORTED_MODULE_29__["default"];
      });
      /* harmony import */


      var _curve_step__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./curve/step */
      "./node_modules/d3-shape/src/curve/step.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveStep", function () {
        return _curve_step__WEBPACK_IMPORTED_MODULE_30__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveStepAfter", function () {
        return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepAfter"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "curveStepBefore", function () {
        return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepBefore"];
      });
      /* harmony import */


      var _stack__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./stack */
      "./node_modules/d3-shape/src/stack.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stack", function () {
        return _stack__WEBPACK_IMPORTED_MODULE_31__["default"];
      });
      /* harmony import */


      var _offset_expand__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./offset/expand */
      "./node_modules/d3-shape/src/offset/expand.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function () {
        return _offset_expand__WEBPACK_IMPORTED_MODULE_32__["default"];
      });
      /* harmony import */


      var _offset_diverging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./offset/diverging */
      "./node_modules/d3-shape/src/offset/diverging.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function () {
        return _offset_diverging__WEBPACK_IMPORTED_MODULE_33__["default"];
      });
      /* harmony import */


      var _offset_none__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./offset/none */
      "./node_modules/d3-shape/src/offset/none.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function () {
        return _offset_none__WEBPACK_IMPORTED_MODULE_34__["default"];
      });
      /* harmony import */


      var _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./offset/silhouette */
      "./node_modules/d3-shape/src/offset/silhouette.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function () {
        return _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__["default"];
      });
      /* harmony import */


      var _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./offset/wiggle */
      "./node_modules/d3-shape/src/offset/wiggle.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function () {
        return _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__["default"];
      });
      /* harmony import */


      var _order_appearance__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./order/appearance */
      "./node_modules/d3-shape/src/order/appearance.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOrderAppearance", function () {
        return _order_appearance__WEBPACK_IMPORTED_MODULE_37__["default"];
      });
      /* harmony import */


      var _order_ascending__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./order/ascending */
      "./node_modules/d3-shape/src/order/ascending.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function () {
        return _order_ascending__WEBPACK_IMPORTED_MODULE_38__["default"];
      });
      /* harmony import */


      var _order_descending__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./order/descending */
      "./node_modules/d3-shape/src/order/descending.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function () {
        return _order_descending__WEBPACK_IMPORTED_MODULE_39__["default"];
      });
      /* harmony import */


      var _order_insideOut__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./order/insideOut */
      "./node_modules/d3-shape/src/order/insideOut.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function () {
        return _order_insideOut__WEBPACK_IMPORTED_MODULE_40__["default"];
      });
      /* harmony import */


      var _order_none__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./order/none */
      "./node_modules/d3-shape/src/order/none.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOrderNone", function () {
        return _order_none__WEBPACK_IMPORTED_MODULE_41__["default"];
      });
      /* harmony import */


      var _order_reverse__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./order/reverse */
      "./node_modules/d3-shape/src/order/reverse.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function () {
        return _order_reverse__WEBPACK_IMPORTED_MODULE_42__["default"];
      }); // Note: radialArea is deprecated!
      // Note: radialLine is deprecated!

      /***/

    },

    /***/
    "./node_modules/d3-shape/src/line.js":
    /*!*******************************************!*\
      !*** ./node_modules/d3-shape/src/line.js ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcLineJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3-path */
      "./node_modules/d3-path/index.js");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constant */
      "./node_modules/d3-shape/src/constant.js");
      /* harmony import */


      var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./curve/linear */
      "./node_modules/d3-shape/src/curve/linear.js");
      /* harmony import */


      var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./point */
      "./node_modules/d3-shape/src/point.js");
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
            y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
            defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
            context = null,
            curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
            output = null;

        function line(data) {
          var i,
              n = data.length,
              d,
              defined0 = false,
              buffer;
          if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

          for (i = 0; i <= n; ++i) {
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
              if (defined0 = !defined0) output.lineStart();else output.lineEnd();
            }

            if (defined0) output.point(+x(d, i, data), +y(d, i, data));
          }

          if (buffer) return output = null, buffer + "" || null;
        }

        line.x = function (_) {
          return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
        };

        line.y = function (_) {
          return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
        };

        line.defined = function (_) {
          return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
        };

        line.curve = function (_) {
          return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
        };

        line.context = function (_) {
          return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
        };

        return line;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/lineRadial.js":
    /*!*************************************************!*\
      !*** ./node_modules/d3-shape/src/lineRadial.js ***!
      \*************************************************/

    /*! exports provided: lineRadial, default */

    /***/
    function node_modulesD3ShapeSrcLineRadialJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineRadial", function () {
        return lineRadial;
      });
      /* harmony import */


      var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./curve/radial */
      "./node_modules/d3-shape/src/curve/radial.js");
      /* harmony import */


      var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./line */
      "./node_modules/d3-shape/src/line.js");

      function lineRadial(l) {
        var c = l.curve;
        l.angle = l.x, delete l.x;
        l.radius = l.y, delete l.y;

        l.curve = function (_) {
          return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
        };

        return l;
      }
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        return lineRadial(Object(_line__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/link/index.js":
    /*!*************************************************!*\
      !*** ./node_modules/d3-shape/src/link/index.js ***!
      \*************************************************/

    /*! exports provided: linkHorizontal, linkVertical, linkRadial */

    /***/
    function node_modulesD3ShapeSrcLinkIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "linkHorizontal", function () {
        return linkHorizontal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "linkVertical", function () {
        return linkVertical;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "linkRadial", function () {
        return linkRadial;
      });
      /* harmony import */


      var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3-path */
      "./node_modules/d3-path/index.js");
      /* harmony import */


      var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../array */
      "./node_modules/d3-shape/src/array.js");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../constant */
      "./node_modules/d3-shape/src/constant.js");
      /* harmony import */


      var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../point */
      "./node_modules/d3-shape/src/point.js");
      /* harmony import */


      var _pointRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pointRadial */
      "./node_modules/d3-shape/src/pointRadial.js");

      function linkSource(d) {
        return d.source;
      }

      function linkTarget(d) {
        return d.target;
      }

      function link(curve) {
        var source = linkSource,
            target = linkTarget,
            x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
            y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
            context = null;

        function link() {
          var buffer,
              argv = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments),
              s = source.apply(this, argv),
              t = target.apply(this, argv);

          if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
          curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
          if (buffer) return context = null, buffer + "" || null;
        }

        link.source = function (_) {
          return arguments.length ? (source = _, link) : source;
        };

        link.target = function (_) {
          return arguments.length ? (target = _, link) : target;
        };

        link.x = function (_) {
          return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
        };

        link.y = function (_) {
          return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
        };

        link.context = function (_) {
          return arguments.length ? (context = _ == null ? null : _, link) : context;
        };

        return link;
      }

      function curveHorizontal(context, x0, y0, x1, y1) {
        context.moveTo(x0, y0);
        context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
      }

      function curveVertical(context, x0, y0, x1, y1) {
        context.moveTo(x0, y0);
        context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
      }

      function curveRadial(context, x0, y0, x1, y1) {
        var p0 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
            p1 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
            p2 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
            p3 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
        context.moveTo(p0[0], p0[1]);
        context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
      }

      function linkHorizontal() {
        return link(curveHorizontal);
      }

      function linkVertical() {
        return link(curveVertical);
      }

      function linkRadial() {
        var l = link(curveRadial);
        l.angle = l.x, delete l.x;
        l.radius = l.y, delete l.y;
        return l;
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/math.js":
    /*!*******************************************!*\
      !*** ./node_modules/d3-shape/src/math.js ***!
      \*******************************************/

    /*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */

    /***/
    function node_modulesD3ShapeSrcMathJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "abs", function () {
        return abs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "atan2", function () {
        return atan2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cos", function () {
        return cos;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "max", function () {
        return max;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "min", function () {
        return min;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sin", function () {
        return sin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sqrt", function () {
        return sqrt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "epsilon", function () {
        return epsilon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pi", function () {
        return pi;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "halfPi", function () {
        return halfPi;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tau", function () {
        return tau;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "acos", function () {
        return acos;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asin", function () {
        return asin;
      });

      var abs = Math.abs;
      var atan2 = Math.atan2;
      var cos = Math.cos;
      var max = Math.max;
      var min = Math.min;
      var sin = Math.sin;
      var sqrt = Math.sqrt;
      var epsilon = 1e-12;
      var pi = Math.PI;
      var halfPi = pi / 2;
      var tau = 2 * pi;

      function acos(x) {
        return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
      }

      function asin(x) {
        return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/noop.js":
    /*!*******************************************!*\
      !*** ./node_modules/d3-shape/src/noop.js ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcNoopJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function () {};
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/offset/diverging.js":
    /*!*******************************************************!*\
      !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOffsetDivergingJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (series, order) {
        if (!((n = series.length) > 0)) return;

        for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
          for (yp = yn = 0, i = 0; i < n; ++i) {
            if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
              d[0] = yp, d[1] = yp += dy;
            } else if (dy < 0) {
              d[1] = yn, d[0] = yn += dy;
            } else {
              d[0] = yp;
            }
          }
        }
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/offset/expand.js":
    /*!****************************************************!*\
      !*** ./node_modules/d3-shape/src/offset/expand.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOffsetExpandJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./none */
      "./node_modules/d3-shape/src/offset/none.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series, order) {
        if (!((n = series.length) > 0)) return;

        for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
          for (y = i = 0; i < n; ++i) {
            y += series[i][j][1] || 0;
          }

          if (y) for (i = 0; i < n; ++i) {
            series[i][j][1] /= y;
          }
        }

        Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/offset/none.js":
    /*!**************************************************!*\
      !*** ./node_modules/d3-shape/src/offset/none.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOffsetNoneJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (series, order) {
        if (!((n = series.length) > 1)) return;

        for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
          s0 = s1, s1 = series[order[i]];

          for (j = 0; j < m; ++j) {
            s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
          }
        }
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/offset/silhouette.js":
    /*!********************************************************!*\
      !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOffsetSilhouetteJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./none */
      "./node_modules/d3-shape/src/offset/none.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series, order) {
        if (!((n = series.length) > 0)) return;

        for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
          for (var i = 0, y = 0; i < n; ++i) {
            y += series[i][j][1] || 0;
          }

          s0[j][1] += s0[j][0] = -y / 2;
        }

        Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/offset/wiggle.js":
    /*!****************************************************!*\
      !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOffsetWiggleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./none */
      "./node_modules/d3-shape/src/offset/none.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series, order) {
        if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;

        for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
          for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
            var si = series[order[i]],
                sij0 = si[j][1] || 0,
                sij1 = si[j - 1][1] || 0,
                s3 = (sij0 - sij1) / 2;

            for (var k = 0; k < i; ++k) {
              var sk = series[order[k]],
                  skj0 = sk[j][1] || 0,
                  skj1 = sk[j - 1][1] || 0;
              s3 += skj0 - skj1;
            }

            s1 += sij0, s2 += s3 * sij0;
          }

          s0[j - 1][1] += s0[j - 1][0] = y;
          if (s1) y -= s2 / s1;
        }

        s0[j - 1][1] += s0[j - 1][0] = y;
        Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/order/appearance.js":
    /*!*******************************************************!*\
      !*** ./node_modules/d3-shape/src/order/appearance.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOrderAppearanceJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./none */
      "./node_modules/d3-shape/src/order/none.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series) {
        var peaks = series.map(peak);
        return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function (a, b) {
          return peaks[a] - peaks[b];
        });
      };

      function peak(series) {
        var i = -1,
            j = 0,
            n = series.length,
            vi,
            vj = -Infinity;

        while (++i < n) {
          if ((vi = +series[i][1]) > vj) vj = vi, j = i;
        }

        return j;
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/order/ascending.js":
    /*!******************************************************!*\
      !*** ./node_modules/d3-shape/src/order/ascending.js ***!
      \******************************************************/

    /*! exports provided: default, sum */

    /***/
    function node_modulesD3ShapeSrcOrderAscendingJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sum", function () {
        return sum;
      });
      /* harmony import */


      var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./none */
      "./node_modules/d3-shape/src/order/none.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series) {
        var sums = series.map(sum);
        return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function (a, b) {
          return sums[a] - sums[b];
        });
      };

      function sum(series) {
        var s = 0,
            i = -1,
            n = series.length,
            v;

        while (++i < n) {
          if (v = +series[i][1]) s += v;
        }

        return s;
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/order/descending.js":
    /*!*******************************************************!*\
      !*** ./node_modules/d3-shape/src/order/descending.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOrderDescendingJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ascending */
      "./node_modules/d3-shape/src/order/ascending.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series) {
        return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/order/insideOut.js":
    /*!******************************************************!*\
      !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOrderInsideOutJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _appearance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./appearance */
      "./node_modules/d3-shape/src/order/appearance.js");
      /* harmony import */


      var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ascending */
      "./node_modules/d3-shape/src/order/ascending.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series) {
        var n = series.length,
            i,
            j,
            sums = series.map(_ascending__WEBPACK_IMPORTED_MODULE_1__["sum"]),
            order = Object(_appearance__WEBPACK_IMPORTED_MODULE_0__["default"])(series),
            top = 0,
            bottom = 0,
            tops = [],
            bottoms = [];

        for (i = 0; i < n; ++i) {
          j = order[i];

          if (top < bottom) {
            top += sums[j];
            tops.push(j);
          } else {
            bottom += sums[j];
            bottoms.push(j);
          }
        }

        return bottoms.reverse().concat(tops);
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/order/none.js":
    /*!*************************************************!*\
      !*** ./node_modules/d3-shape/src/order/none.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOrderNoneJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (series) {
        var n = series.length,
            o = new Array(n);

        while (--n >= 0) {
          o[n] = n;
        }

        return o;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/order/reverse.js":
    /*!****************************************************!*\
      !*** ./node_modules/d3-shape/src/order/reverse.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcOrderReverseJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./none */
      "./node_modules/d3-shape/src/order/none.js");
      /* harmony default export */


      __webpack_exports__["default"] = function (series) {
        return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/pie.js":
    /*!******************************************!*\
      !*** ./node_modules/d3-shape/src/pie.js ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcPieJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./constant */
      "./node_modules/d3-shape/src/constant.js");
      /* harmony import */


      var _descending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./descending */
      "./node_modules/d3-shape/src/descending.js");
      /* harmony import */


      var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./identity */
      "./node_modules/d3-shape/src/identity.js");
      /* harmony import */


      var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./math */
      "./node_modules/d3-shape/src/math.js");
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var value = _identity__WEBPACK_IMPORTED_MODULE_2__["default"],
            sortValues = _descending__WEBPACK_IMPORTED_MODULE_1__["default"],
            sort = null,
            startAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
            endAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(_math__WEBPACK_IMPORTED_MODULE_3__["tau"]),
            padAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

        function pie(data) {
          var i,
              n = data.length,
              j,
              k,
              sum = 0,
              index = new Array(n),
              arcs = new Array(n),
              a0 = +startAngle.apply(this, arguments),
              da = Math.min(_math__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
              a1,
              p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
              pa = p * (da < 0 ? -1 : 1),
              v;

          for (i = 0; i < n; ++i) {
            if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
              sum += v;
            }
          } // Optionally sort the arcs by previously-computed values or by data.


          if (sortValues != null) index.sort(function (i, j) {
            return sortValues(arcs[i], arcs[j]);
          });else if (sort != null) index.sort(function (i, j) {
            return sort(data[i], data[j]);
          }); // Compute the arcs! They are stored in the original data's order.

          for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
            j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
              data: data[j],
              index: i,
              value: v,
              startAngle: a0,
              endAngle: a1,
              padAngle: p
            };
          }

          return arcs;
        }

        pie.value = function (_) {
          return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
        };

        pie.sortValues = function (_) {
          return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
        };

        pie.sort = function (_) {
          return arguments.length ? (sort = _, sortValues = null, pie) : sort;
        };

        pie.startAngle = function (_) {
          return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
        };

        pie.endAngle = function (_) {
          return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
        };

        pie.padAngle = function (_) {
          return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
        };

        return pie;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/point.js":
    /*!********************************************!*\
      !*** ./node_modules/d3-shape/src/point.js ***!
      \********************************************/

    /*! exports provided: x, y */

    /***/
    function node_modulesD3ShapeSrcPointJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return y;
      });

      function x(p) {
        return p[0];
      }

      function y(p) {
        return p[1];
      }
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/pointRadial.js":
    /*!**************************************************!*\
      !*** ./node_modules/d3-shape/src/pointRadial.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcPointRadialJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (x, y) {
        return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/stack.js":
    /*!********************************************!*\
      !*** ./node_modules/d3-shape/src/stack.js ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcStackJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./array */
      "./node_modules/d3-shape/src/array.js");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constant */
      "./node_modules/d3-shape/src/constant.js");
      /* harmony import */


      var _offset_none__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./offset/none */
      "./node_modules/d3-shape/src/offset/none.js");
      /* harmony import */


      var _order_none__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order/none */
      "./node_modules/d3-shape/src/order/none.js");

      function stackValue(d, key) {
        return d[key];
      }
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var keys = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
            order = _order_none__WEBPACK_IMPORTED_MODULE_3__["default"],
            offset = _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"],
            value = stackValue;

        function stack(data) {
          var kz = keys.apply(this, arguments),
              i,
              m = data.length,
              n = kz.length,
              sz = new Array(n),
              oz;

          for (i = 0; i < n; ++i) {
            for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
              si[j] = sij = [0, +value(data[j], ki, j, data)];
              sij.data = data[j];
            }

            si.key = ki;
          }

          for (i = 0, oz = order(sz); i < n; ++i) {
            sz[oz[i]].index = i;
          }

          offset(sz, oz);
          return sz;
        }

        stack.keys = function (_) {
          return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
        };

        stack.value = function (_) {
          return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
        };

        stack.order = function (_) {
          return arguments.length ? (order = _ == null ? _order_none__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
        };

        stack.offset = function (_) {
          return arguments.length ? (offset = _ == null ? _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
        };

        return stack;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/symbol.js":
    /*!*********************************************!*\
      !*** ./node_modules/d3-shape/src/symbol.js ***!
      \*********************************************/

    /*! exports provided: symbols, default */

    /***/
    function node_modulesD3ShapeSrcSymbolJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "symbols", function () {
        return symbols;
      });
      /* harmony import */


      var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3-path */
      "./node_modules/d3-path/index.js");
      /* harmony import */


      var _symbol_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./symbol/circle */
      "./node_modules/d3-shape/src/symbol/circle.js");
      /* harmony import */


      var _symbol_cross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./symbol/cross */
      "./node_modules/d3-shape/src/symbol/cross.js");
      /* harmony import */


      var _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./symbol/diamond */
      "./node_modules/d3-shape/src/symbol/diamond.js");
      /* harmony import */


      var _symbol_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./symbol/star */
      "./node_modules/d3-shape/src/symbol/star.js");
      /* harmony import */


      var _symbol_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./symbol/square */
      "./node_modules/d3-shape/src/symbol/square.js");
      /* harmony import */


      var _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./symbol/triangle */
      "./node_modules/d3-shape/src/symbol/triangle.js");
      /* harmony import */


      var _symbol_wye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./symbol/wye */
      "./node_modules/d3-shape/src/symbol/wye.js");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./constant */
      "./node_modules/d3-shape/src/constant.js");

      var symbols = [_symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"], _symbol_cross__WEBPACK_IMPORTED_MODULE_2__["default"], _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__["default"], _symbol_square__WEBPACK_IMPORTED_MODULE_5__["default"], _symbol_star__WEBPACK_IMPORTED_MODULE_4__["default"], _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__["default"], _symbol_wye__WEBPACK_IMPORTED_MODULE_7__["default"]];
      /* harmony default export */

      __webpack_exports__["default"] = function () {
        var type = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"]),
            size = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
            context = null;

        function symbol() {
          var buffer;
          if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
          type.apply(this, arguments).draw(context, +size.apply(this, arguments));
          if (buffer) return context = null, buffer + "" || null;
        }

        symbol.type = function (_) {
          return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
        };

        symbol.size = function (_) {
          return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
        };

        symbol.context = function (_) {
          return arguments.length ? (context = _ == null ? null : _, symbol) : context;
        };

        return symbol;
      };
      /***/

    },

    /***/
    "./node_modules/d3-shape/src/symbol/circle.js":
    /*!****************************************************!*\
      !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcSymbolCircleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../math */
      "./node_modules/d3-shape/src/math.js");
      /* harmony default export */


      __webpack_exports__["default"] = {
        draw: function draw(context, size) {
          var r = Math.sqrt(size / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]);
          context.moveTo(r, 0);
          context.arc(0, 0, r, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
        }
      };
      /***/
    },

    /***/
    "./node_modules/d3-shape/src/symbol/cross.js":
    /*!***************************************************!*\
      !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcSymbolCrossJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = {
        draw: function draw(context, size) {
          var r = Math.sqrt(size / 5) / 2;
          context.moveTo(-3 * r, -r);
          context.lineTo(-r, -r);
          context.lineTo(-r, -3 * r);
          context.lineTo(r, -3 * r);
          context.lineTo(r, -r);
          context.lineTo(3 * r, -r);
          context.lineTo(3 * r, r);
          context.lineTo(r, r);
          context.lineTo(r, 3 * r);
          context.lineTo(-r, 3 * r);
          context.lineTo(-r, r);
          context.lineTo(-3 * r, r);
          context.closePath();
        }
      };
      /***/
    },

    /***/
    "./node_modules/d3-shape/src/symbol/diamond.js":
    /*!*****************************************************!*\
      !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcSymbolDiamondJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var tan30 = Math.sqrt(1 / 3),
          tan30_2 = tan30 * 2;
      /* harmony default export */

      __webpack_exports__["default"] = {
        draw: function draw(context, size) {
          var y = Math.sqrt(size / tan30_2),
              x = y * tan30;
          context.moveTo(0, -y);
          context.lineTo(x, 0);
          context.lineTo(0, y);
          context.lineTo(-x, 0);
          context.closePath();
        }
      };
      /***/
    },

    /***/
    "./node_modules/d3-shape/src/symbol/square.js":
    /*!****************************************************!*\
      !*** ./node_modules/d3-shape/src/symbol/square.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcSymbolSquareJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = {
        draw: function draw(context, size) {
          var w = Math.sqrt(size),
              x = -w / 2;
          context.rect(x, x, w, w);
        }
      };
      /***/
    },

    /***/
    "./node_modules/d3-shape/src/symbol/star.js":
    /*!**************************************************!*\
      !*** ./node_modules/d3-shape/src/symbol/star.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcSymbolStarJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../math */
      "./node_modules/d3-shape/src/math.js");

      var ka = 0.89081309152928522810,
          kr = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
          kx = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
          ky = -Math.cos(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;
      /* harmony default export */

      __webpack_exports__["default"] = {
        draw: function draw(context, size) {
          var r = Math.sqrt(size * ka),
              x = kx * r,
              y = ky * r;
          context.moveTo(0, -r);
          context.lineTo(x, y);

          for (var i = 1; i < 5; ++i) {
            var a = _math__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
                c = Math.cos(a),
                s = Math.sin(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
          }

          context.closePath();
        }
      };
      /***/
    },

    /***/
    "./node_modules/d3-shape/src/symbol/triangle.js":
    /*!******************************************************!*\
      !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcSymbolTriangleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var sqrt3 = Math.sqrt(3);
      /* harmony default export */

      __webpack_exports__["default"] = {
        draw: function draw(context, size) {
          var y = -Math.sqrt(size / (sqrt3 * 3));
          context.moveTo(0, y * 2);
          context.lineTo(-sqrt3 * y, -y);
          context.lineTo(sqrt3 * y, -y);
          context.closePath();
        }
      };
      /***/
    },

    /***/
    "./node_modules/d3-shape/src/symbol/wye.js":
    /*!*************************************************!*\
      !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesD3ShapeSrcSymbolWyeJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var c = -0.5,
          s = Math.sqrt(3) / 2,
          k = 1 / Math.sqrt(12),
          a = (k / 2 + 1) * 3;
      /* harmony default export */

      __webpack_exports__["default"] = {
        draw: function draw(context, size) {
          var r = Math.sqrt(size / a),
              x0 = r / 2,
              y0 = r * k,
              x1 = x0,
              y1 = r * k + r,
              x2 = -x1,
              y2 = y1;
          context.moveTo(x0, y0);
          context.lineTo(x1, y1);
          context.lineTo(x2, y2);
          context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
          context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
          context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
          context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
          context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
          context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
          context.closePath();
        }
      };
      /***/
    },

    /***/
    "./src/app/charts/chart-js/chartjs.component.ngfactory.js":
    /*!****************************************************************!*\
      !*** ./src/app/charts/chart-js/chartjs.component.ngfactory.js ***!
      \****************************************************************/

    /*! exports provided: RenderType_ChartjsComponent, View_ChartjsComponent_0, View_ChartjsComponent_Host_0, ChartjsComponentNgFactory */

    /***/
    function srcAppChartsChartJsChartjsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ChartjsComponent", function () {
        return RenderType_ChartjsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChartjsComponent_0", function () {
        return View_ChartjsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChartjsComponent_Host_0", function () {
        return View_ChartjsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartjsComponentNgFactory", function () {
        return ChartjsComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var _chartjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chartjs.component */
      "./src/app/charts/chart-js/chartjs.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ChartjsComponent = [];

      var RenderType_ChartjsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_ChartjsComponent,
        data: {}
      });

      function View_ChartjsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 24, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 11, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bar Sales Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple example of bar chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "canvas", [["baseChart", ""]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartHover" === en) {
            var pd_0 = _co.chartHovered($event) !== false;
            ad = pd_0 && ad;
          }

          if ("chartClick" === en) {
            var pd_1 = _co.chartClicked($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          colors: [4, "colors"],
          legend: [5, "legend"]
        }, {
          chartClick: "chartClick",
          chartHover: "chartHover"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "button", [["class", "btn btn-info btn-sm"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.randomize() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 11, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 9, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Doughnut Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple example of Doughnut chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "canvas", [["baseChart", ""], ["height", "165px"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartHover" === en) {
            var pd_0 = _co.chartHovered($event) !== false;
            ad = pd_0 && ad;
          }

          if ("chartClick" === en) {
            var pd_1 = _co.chartClicked($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], {
          data: [0, "data"],
          labels: [1, "labels"],
          chartType: [2, "chartType"],
          colors: [3, "colors"]
        }, {
          chartClick: "chartClick",
          chartHover: "chartHover"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](22, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](23, {
          backgroundColor: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 21, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 8, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Radar Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple example of Radar chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "canvas", [["baseChart", ""], ["height", "150px"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartHover" === en) {
            var pd_0 = _co.chartHovered($event) !== false;
            ad = pd_0 && ad;
          }

          if ("chartClick" === en) {
            var pd_1 = _co.chartClicked($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          chartType: [2, "chartType"],
          colors: [3, "colors"]
        }, {
          chartClick: "chartClick",
          chartHover: "chartHover"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 11, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 9, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Pie Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple example of Pie chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 4, "canvas", [["baseChart", ""], ["height", "150px"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartHover" === en) {
            var pd_0 = _co.chartHovered($event) !== false;
            ad = pd_0 && ad;
          }

          if ("chartClick" === en) {
            var pd_1 = _co.chartClicked($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], {
          data: [0, "data"],
          labels: [1, "labels"],
          chartType: [2, "chartType"],
          colors: [3, "colors"]
        }, {
          chartClick: "chartClick",
          chartHover: "chartHover"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](44, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](45, {
          backgroundColor: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](46, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 21, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 11, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 9, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Polar Area Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple example of Polar Area Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 4, "canvas", [["baseChart", ""], ["height", "130px"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartHover" === en) {
            var pd_0 = _co.chartHovered($event) !== false;
            ad = pd_0 && ad;
          }

          if ("chartClick" === en) {
            var pd_1 = _co.chartClicked($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], {
          data: [0, "data"],
          labels: [1, "labels"],
          chartType: [2, "chartType"],
          colors: [3, "colors"],
          legend: [4, "legend"]
        }, {
          chartClick: "chartClick",
          chartHover: "chartHover"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](57, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](58, {
          backgroundColor: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](59, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 8, "div", [["class", "col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Line Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple example of Polar Line Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "canvas", [["baseChart", ""], ["height", "130"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartHover" === en) {
            var pd_0 = _co.chartHovered($event) !== false;
            ad = pd_0 && ad;
          }

          if ("chartClick" === en) {
            var pd_1 = _co.chartClicked($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          colors: [4, "colors"],
          legend: [5, "legend"]
        }, {
          chartClick: "chartClick",
          chartHover: "chartHover"
        })], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.barChartData;
          var currVal_1 = _co.barChartLabels;
          var currVal_2 = _co.barChartOptions;
          var currVal_3 = _co.barChartType;
          var currVal_4 = _co.barChartColors;
          var currVal_5 = _co.barChartLegend;

          _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _co.doughnutChartData;
          var currVal_7 = _co.doughnutChartLabels;
          var currVal_8 = _co.doughnutChartType;

          var currVal_9 = _ck(_v, 24, 0, _ck(_v, 23, 0, _ck(_v, 22, 0, "#a1aab2", "#36bea6", "#2962FF")));

          _ck(_v, 21, 0, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_10 = _co.radarChartData;
          var currVal_11 = _co.radarChartLabels;
          var currVal_12 = _co.radarChartType;
          var currVal_13 = _co.radarChartColors;

          _ck(_v, 34, 0, currVal_10, currVal_11, currVal_12, currVal_13);

          var currVal_14 = _co.pieChartData;
          var currVal_15 = _co.pieChartLabels;
          var currVal_16 = _co.pieChartType;

          var currVal_17 = _ck(_v, 46, 0, _ck(_v, 45, 0, _ck(_v, 44, 0, "#a1aab2", "#36bea6", "#2962FF")));

          _ck(_v, 43, 0, currVal_14, currVal_15, currVal_16, currVal_17);

          var currVal_18 = _co.polarAreaChartData;
          var currVal_19 = _co.polarAreaChartLabels;
          var currVal_20 = _co.polarAreaChartType;

          var currVal_21 = _ck(_v, 59, 0, _ck(_v, 58, 0, _ck(_v, 57, 0, "#a1aab2", "#36bea6", "#2962FF", "#7460ee", "#f62d51")));

          var currVal_22 = _co.polarAreaLegend;

          _ck(_v, 56, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);

          var currVal_23 = _co.lineChartData;
          var currVal_24 = _co.lineChartLabels;
          var currVal_25 = _co.lineChartOptions;
          var currVal_26 = _co.lineChartType;
          var currVal_27 = _co.lineChartColors;
          var currVal_28 = _co.lineChartLegend;

          _ck(_v, 68, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);
        }, null);
      }

      function View_ChartjsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ChartjsComponent_0, RenderType_ChartjsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, _chartjs_component__WEBPACK_IMPORTED_MODULE_2__["ChartjsComponent"], [], null, null)], null, null);
      }

      var ChartjsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _chartjs_component__WEBPACK_IMPORTED_MODULE_2__["ChartjsComponent"], View_ChartjsComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/charts/chart-js/chartjs.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/charts/chart-js/chartjs.component.ts ***!
      \******************************************************/

    /*! exports provided: ChartjsComponent */

    /***/
    function srcAppChartsChartJsChartjsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function () {
        return ChartjsComponent;
      });

      var ChartjsComponent = /*#__PURE__*/function () {
        function ChartjsComponent() {
          _classCallCheck(this, ChartjsComponent);

          // This is line chart
          // bar chart
          this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            barThickness: 10
          };
          this.barChartLabels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartData = [{
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Iphone 8'
          }, {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Iphone X'
          }];
          this.barChartColors = [{
            backgroundColor: '#36bea6'
          }, {
            backgroundColor: '#2962FF'
          }]; // Doughnut

          this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
          this.doughnutChartData = [350, 450, 100];
          this.doughnutChartType = 'doughnut'; // Radar

          this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
          this.radarChartData = [{
            data: [65, 59, 90, 81, 56, 55, 40],
            label: 'Series A'
          }, {
            data: [28, 48, 40, 19, 96, 27, 100],
            label: 'Series B'
          }];
          this.radarChartType = 'radar';
          this.radarChartColors = [{
            backgroundColor: 'rgba(54,190,166,.5)',
            borderColor: 'rgba(54,190,166,1)'
          }, {
            backgroundColor: 'rgb(41,98,255,.5)',
            borderColor: 'rgb(41,98,255,1)'
          }]; // Pie

          this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
          this.pieChartData = [300, 500, 100];
          this.pieChartType = 'pie'; // PolarArea

          this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
          this.polarAreaChartData = [300, 500, 100, 40, 120];
          this.polarAreaLegend = true;
          this.polarAreaChartType = 'polarArea'; // lineChart

          this.lineChartData = [{
            data: [65, 39, 80, 15, 76, 35, 40],
            label: 'Series A'
          }, {
            data: [18, 58, 20, 69, 16, 27, 90],
            label: 'Series B'
          }];
          this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            // grey
            backgroundColor: 'rgba(54,190,166,.1)',
            borderColor: '#36bea6',
            pointBackgroundColor: '#36bea6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#36bea6'
          }, {
            // dark grey
            backgroundColor: 'rgb(41,98,255,.1)',
            borderColor: '#2962FF',
            pointBackgroundColor: '#2962FF',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#2962FF'
          }];
          this.lineChartLegend = true;
          this.lineChartType = 'line';
        } // events


        _createClass(ChartjsComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {// console.log(e);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {// console.log(e);
          }
        }, {
          key: "randomize",
          value: function randomize() {
            // Only Change 3 values
            var data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
            var clone = JSON.parse(JSON.stringify(this.barChartData));
            clone[0].data = data;
            this.barChartData = clone;
            /**
             * (My guess), for Angular to recognize the change in the dataset
             * it has to change the dataset variable directly,
             * so one way around it, is to clone the data, change it and then
             * assign it;
             */
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return ChartjsComponent;
      }();
      /***/

    },

    /***/
    "./src/app/charts/chartist-js/chartistjs.component.ngfactory.js":
    /*!**********************************************************************!*\
      !*** ./src/app/charts/chartist-js/chartistjs.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_ChartistjsComponent, View_ChartistjsComponent_0, View_ChartistjsComponent_Host_0, ChartistjsComponentNgFactory */

    /***/
    function srcAppChartsChartistJsChartistjsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ChartistjsComponent", function () {
        return RenderType_ChartistjsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChartistjsComponent_0", function () {
        return View_ChartistjsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChartistjsComponent_Host_0", function () {
        return View_ChartistjsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartistjsComponentNgFactory", function () {
        return ChartistjsComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../node_modules/ng-chartist/ng-chartist.ngfactory */
      "./node_modules/ng-chartist/ng-chartist.ngfactory.js");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
      /* harmony import */


      var _dynamic_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dynamic.component.ngfactory */
      "./src/app/charts/chartist-js/dynamic.component.ngfactory.js");
      /* harmony import */


      var _dynamic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dynamic.component */
      "./src/app/charts/chartist-js/dynamic.component.ts");
      /* harmony import */


      var _chartistjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chartistjs.component */
      "./src/app/charts/chartist-js/chartistjs.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ChartistjsComponent = [];

      var RenderType_ChartistjsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_ChartistjsComponent,
        data: {}
      });

      function View_ChartistjsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 77, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 76, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bar chart Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a bar chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "div", [["class", "barchrt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Line Area chart Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a Line chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "div", [["class", "linearea"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Line chart Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a Line chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 2, "div", [["class", "linearea"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Line chart 2 Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a Line chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 2, "div", [["class", "linearea"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Scatter chart Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a Scatter chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 2, "div", [["class", "linearea"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Pie chart Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a Pie chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 2, "div", [["class", "piechart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Donute chart Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a Pie chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 2, "div", [["class", "piechart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bipollar chart Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simple data export from the json file and creating a Bipollar chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 2, "div", [["class", "barchrt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 1, "x-chartist", [["class", ""]], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"],
          responsiveOptions: [3, "responsiveOptions"],
          events: [4, "events"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 3, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "app-dynamic-chart", [["class", "barchrt linearea"]], null, null, null, _dynamic_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DynamicChartComponent_0"], _dynamic_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DynamicChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 49152, null, 0, _dynamic_component__WEBPACK_IMPORTED_MODULE_4__["DynamicChartComponent"], [], null, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.barChart1.data;
          var currVal_1 = _co.barChart1.type;
          var currVal_2 = _co.barChart1.options;
          var currVal_3 = _co.barChart1.responsiveOptions;
          var currVal_4 = _co.barChart1.events;

          _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _co.lineChart1.data;
          var currVal_6 = _co.lineChart1.type;
          var currVal_7 = _co.lineChart1.options;
          var currVal_8 = _co.lineChart1.responsiveOptions;
          var currVal_9 = _co.lineChart1.events;

          _ck(_v, 19, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_10 = _co.lineChart2.data;
          var currVal_11 = _co.lineChart2.type;
          var currVal_12 = _co.lineChart2.options;
          var currVal_13 = _co.lineChart2.responsiveOptions;
          var currVal_14 = _co.lineChart2.events;

          _ck(_v, 28, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_15 = _co.lineChart3.data;
          var currVal_16 = _co.lineChart3.type;
          var currVal_17 = _co.lineChart3.options;
          var currVal_18 = _co.lineChart3.responsiveOptions;
          var currVal_19 = _co.lineChart3.events;

          _ck(_v, 37, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);

          var currVal_20 = _co.scatterChart1.data;
          var currVal_21 = _co.scatterChart1.type;
          var currVal_22 = _co.scatterChart1.options;
          var currVal_23 = _co.scatterChart1.responsiveOptions;
          var currVal_24 = _co.scatterChart1.events;

          _ck(_v, 46, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

          var currVal_25 = _co.pieChart1.data;
          var currVal_26 = _co.pieChart1.type;
          var currVal_27 = _co.pieChart1.options;
          var currVal_28 = _co.pieChart1.responsiveOptions;
          var currVal_29 = _co.pieChart1.events;

          _ck(_v, 55, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

          var currVal_30 = _co.donuteChart1.data;
          var currVal_31 = _co.donuteChart1.type;
          var currVal_32 = _co.donuteChart1.options;
          var currVal_33 = _co.donuteChart1.responsiveOptions;
          var currVal_34 = _co.donuteChart1.events;

          _ck(_v, 64, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);

          var currVal_35 = _co.bipollarChart1.data;
          var currVal_36 = _co.bipollarChart1.type;
          var currVal_37 = _co.bipollarChart1.options;
          var currVal_38 = _co.bipollarChart1.responsiveOptions;
          var currVal_39 = _co.bipollarChart1.events;

          _ck(_v, 73, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39);
        }, null);
      }

      function View_ChartistjsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ChartistjsComponent_0, RenderType_ChartistjsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _chartistjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartistjsComponent"], [], null, null)], null, null);
      }

      var ChartistjsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _chartistjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartistjsComponent"], View_ChartistjsComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/charts/chartist-js/chartistjs.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/charts/chartist-js/chartistjs.component.ts ***!
      \************************************************************/

    /*! exports provided: ChartistjsComponent */

    /***/
    function srcAppChartsChartistJsChartistjsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartistjsComponent", function () {
        return ChartistjsComponent;
      });

      var data = __webpack_require__(
      /*! ./data.json */
      "./src/app/charts/chartist-js/data.json");

      var ChartistjsComponent = function ChartistjsComponent() {
        _classCallCheck(this, ChartistjsComponent);

        // Barchart
        this.barChart1 = {
          type: 'Bar',
          data: data['Bar'],
          options: {
            seriesBarDistance: 15,
            height: 400,
            axisX: {
              showGrid: false,
              offset: 70
            },
            axisY: {
              showGrid: true,
              offset: 50
            }
          },
          responsiveOptions: [['screen and (min-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                return index % 1 === 0 ? "".concat(value) : null;
              }
            }
          }]]
        }; // Line chart

        this.lineChart1 = {
          type: 'Line',
          data: data['LineWithArea'],
          options: {
            low: 0,
            height: 400,
            showArea: true,
            fullWidth: true
          }
        }; // Line chart 2

        this.lineChart2 = {
          type: 'Line',
          data: data['Line'],
          options: {
            low: 0,
            height: 400,
            showArea: true,
            fullWidth: true
          }
        }; // Line chart 2

        this.lineChart3 = {
          type: 'Line',
          data: data['Line2'],
          options: {
            low: 0,
            height: 400,
            showArea: true,
            fullWidth: true
          }
        }; // Scatter chart

        this.scatterChart1 = {
          type: 'Line',
          data: data['Scatter'],
          options: {
            showLine: false,
            height: 400,
            axisX: {
              labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                return index % 13 === 0 ? "W".concat(value) : null;
              }
            }
          },
          responsiveOptions: [['screen and (min-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                return index % 4 === 0 ? "W".concat(value) : null;
              }
            }
          }]]
        }; // Pie chart

        this.pieChart1 = {
          type: 'Pie',
          data: data['Pie'],
          options: {
            donut: true,
            donutWidth: 50,
            startAngle: 270,
            height: 250,
            total: 200,
            showLabel: false
          }
        };
        this.donuteChart1 = {
          type: 'Pie',
          data: data['Pie'],
          options: {
            donut: true,
            showLabel: false,
            height: 250
          } // events: {
          //   draw(data: any): boolean {
          //     return data;
          //   }
          // }

        }; // Bi Poller chart

        this.bipollarChart1 = {
          type: 'Bar',
          data: data['Bi-PolarBar'],
          options: {
            high: 10,
            low: -10,
            height: 400,
            axisX: {
              labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
          }
        };
      };
      /***/

    },

    /***/
    "./src/app/charts/chartist-js/data.json":
    /*!**********************************************!*\
      !*** ./src/app/charts/chartist-js/data.json ***!
      \**********************************************/

    /*! exports provided: Bar, Line, Line2, Scatter, LineWithArea, Bi-PolarBar, DistributedSeries, Pie, default */

    /***/
    function srcAppChartsChartistJsDataJson(module) {
      module.exports = JSON.parse("{\"Bar\":{\"labels\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\"],\"series\":[[5,4,3,7,5,10],[3,2,9,5,4,6]]},\"Line\":{\"labels\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"series\":[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},\"Line2\":{\"labels\":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\"series\":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},\"Scatter\":{\"labels\":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],\"series\":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},\"LineWithArea\":{\"labels\":[1,2,3,4,5,6,7,8],\"series\":[[0,5000,15000,8000,15000,9000,30000,0],[0,3000,5000,2000,8000,1000,5000,0]]},\"Bi-PolarBar\":{\"labels\":[\"W1\",\"W2\",\"W3\",\"W4\",\"W5\",\"W6\",\"W7\",\"W8\",\"W9\",\"W10\"],\"series\":[[1,2,4,8,6,-2,-1,-4,-6,-2]]},\"DistributedSeries\":{\"labels\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\",\"XXXL\"],\"series\":[20,60,120,200,180,20,10]},\"Pie\":{\"series\":[20,10,30,40]}}");
      /***/
    },

    /***/
    "./src/app/charts/chartist-js/dynamic.component.ngfactory.js":
    /*!*******************************************************************!*\
      !*** ./src/app/charts/chartist-js/dynamic.component.ngfactory.js ***!
      \*******************************************************************/

    /*! exports provided: RenderType_DynamicChartComponent, View_DynamicChartComponent_0, View_DynamicChartComponent_Host_0, DynamicChartComponentNgFactory */

    /***/
    function srcAppChartsChartistJsDynamicComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DynamicChartComponent", function () {
        return RenderType_DynamicChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DynamicChartComponent_0", function () {
        return View_DynamicChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DynamicChartComponent_Host_0", function () {
        return View_DynamicChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicChartComponentNgFactory", function () {
        return DynamicChartComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../node_modules/ng-chartist/ng-chartist.ngfactory */
      "./node_modules/ng-chartist/ng-chartist.ngfactory.js");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
      /* harmony import */


      var _dynamic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dynamic.component */
      "./src/app/charts/chartist-js/dynamic.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DynamicChartComponent = [];

      var RenderType_DynamicChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_DynamicChartComponent,
        data: {}
      });

      function View_DynamicChartComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], {
          ngValue: [0, "ngValue"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], {
          ngValue: [0, "ngValue"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_2 = _v.context.$implicit;

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_DynamicChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dynamic Chart Types"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 8, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 7, "select", [["class", "form-control"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.type = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DynamicChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "x-chartist", [], null, null, null, _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ChartistComponent_0"], _node_modules_ng_chartist_ng_chartist_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ChartistComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 770048, null, 0, ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
          data: [0, "data"],
          type: [1, "type"],
          options: [2, "options"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.type;

          _ck(_v, 8, 0, currVal_7);

          var currVal_8 = _co.chartTypes;

          _ck(_v, 12, 0, currVal_8);

          var currVal_9 = _co.data;
          var currVal_10 = _co.type;
          var currVal_11 = _co.options;

          _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPending;

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        });
      }

      function View_DynamicChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-dynamic-chart", [], null, null, null, View_DynamicChartComponent_0, RenderType_DynamicChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _dynamic_component__WEBPACK_IMPORTED_MODULE_5__["DynamicChartComponent"], [], null, null)], null, null);
      }

      var DynamicChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-dynamic-chart", _dynamic_component__WEBPACK_IMPORTED_MODULE_5__["DynamicChartComponent"], View_DynamicChartComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/charts/chartist-js/dynamic.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/charts/chartist-js/dynamic.component.ts ***!
      \*********************************************************/

    /*! exports provided: DynamicChartComponent */

    /***/
    function srcAppChartsChartistJsDynamicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicChartComponent", function () {
        return DynamicChartComponent;
      });

      var data = __webpack_require__(
      /*! ./data.json */
      "./src/app/charts/chartist-js/data.json");

      var DynamicChartComponent = function DynamicChartComponent() {
        _classCallCheck(this, DynamicChartComponent);

        this.chartTypes = ['Bar', 'Line'];
        this.type = 'Bar';
        this.data = data['Bar'];
        this.options = {
          height: 400,
          axisX: {
            showLabel: false
          },
          axisY: {
            showLabel: false
          }
        };
      };
      /***/

    },

    /***/
    "./src/app/charts/charts.module.ngfactory.js":
    /*!***************************************************!*\
      !*** ./src/app/charts/charts.module.ngfactory.js ***!
      \***************************************************/

    /*! exports provided: ChartModuleNgFactory */

    /***/
    function srcAppChartsChartsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartModuleNgFactory", function () {
        return ChartModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _charts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./charts.module */
      "./src/app/charts/charts.module.ts");
      /* harmony import */


      var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
      "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../node_modules/@swimlane/ngx-charts/swimlane-ngx-charts.ngfactory */
      "./node_modules/@swimlane/ngx-charts/swimlane-ngx-charts.ngfactory.js");
      /* harmony import */


      var _chartist_js_chartistjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chartist-js/chartistjs.component.ngfactory */
      "./src/app/charts/chartist-js/chartistjs.component.ngfactory.js");
      /* harmony import */


      var _chart_js_chartjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chart-js/chartjs.component.ngfactory */
      "./src/app/charts/chart-js/chartjs.component.ngfactory.js");
      /* harmony import */


      var _ngx_charts_ngx_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ngx-charts/ngx-chart.component.ngfactory */
      "./src/app/charts/ngx-charts/ngx-chart.component.ngfactory.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./chartist-js/chartistjs.component */
      "./src/app/charts/chartist-js/chartistjs.component.ts");
      /* harmony import */


      var _charts_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./charts.routing */
      "./src/app/charts/charts.routing.ts");
      /* harmony import */


      var _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./chart-js/chartjs.component */
      "./src/app/charts/chart-js/chartjs.component.ts");
      /* harmony import */


      var _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./ngx-charts/ngx-chart.component */
      "./src/app/charts/ngx-charts/ngx-chart.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var ChartModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_charts_module__WEBPACK_IMPORTED_MODULE_1__["ChartModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipContentComponentNgFactory"], _chartist_js_chartistjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ChartistjsComponentNgFactory"], _chart_js_chartjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ChartjsComponentNgFactory"], _ngx_charts_ngx_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["NgxChartComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["ɵb"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["TooltipService"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["TooltipService"], [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_chartist__WEBPACK_IMPORTED_MODULE_13__["ChartistModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_13__["ChartistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["AxesModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["AxesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["ChartCommonModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["ChartCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["AreaChartModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["AreaChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["BarChartModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["BarChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["BubbleChartModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["BubbleChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["HeatMapModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["HeatMapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["LineChartModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["LineChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["PieChartModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["PieChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["PolarChartModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["PolarChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NumberCardModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NumberCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["TreeMapModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["TreeMapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["GaugeModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["GaugeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _charts_module__WEBPACK_IMPORTED_MODULE_1__["ChartModule"], _charts_module__WEBPACK_IMPORTED_MODULE_1__["ChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () {
          return [[{
            path: "",
            children: [{
              path: "chartistjs",
              component: _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_15__["ChartistjsComponent"],
              data: _charts_routing__WEBPACK_IMPORTED_MODULE_16__["ɵ0"]
            }, {
              path: "chartjs",
              component: _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_17__["ChartjsComponent"],
              data: _charts_routing__WEBPACK_IMPORTED_MODULE_16__["ɵ1"]
            }, {
              path: "ngxchart",
              component: _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_18__["NgxChartComponent"],
              data: _charts_routing__WEBPACK_IMPORTED_MODULE_16__["ɵ2"]
            }]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "./src/app/charts/charts.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/charts/charts.module.ts ***!
      \*****************************************/

    /*! exports provided: ChartModule */

    /***/
    function srcAppChartsChartsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartModule", function () {
        return ChartModule;
      });

      var ChartModule = function ChartModule() {
        _classCallCheck(this, ChartModule);
      };
      /***/

    },

    /***/
    "./src/app/charts/charts.routing.ts":
    /*!******************************************!*\
      !*** ./src/app/charts/charts.routing.ts ***!
      \******************************************/

    /*! exports provided: ChartsRoutes, ɵ0, ɵ1, ɵ2 */

    /***/
    function srcAppChartsChartsRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function () {
        return ChartsRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
        return ɵ2;
      });
      /* harmony import */


      var _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chartist-js/chartistjs.component */
      "./src/app/charts/chartist-js/chartistjs.component.ts");
      /* harmony import */


      var _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart-js/chartjs.component */
      "./src/app/charts/chart-js/chartjs.component.ts");
      /* harmony import */


      var _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ngx-charts/ngx-chart.component */
      "./src/app/charts/ngx-charts/ngx-chart.component.ts");

      var ɵ0 = {
        title: 'Chartis js',
        urls: [{
          title: 'Dashboard',
          url: '/dashboard'
        }, {
          title: 'Chartis js Page'
        }]
      },
          ɵ1 = {
        title: 'Chart js',
        urls: [{
          title: 'Dashboard',
          url: '/dashboard'
        }, {
          title: 'Chart js Page'
        }]
      },
          ɵ2 = {
        title: 'Ngx Charts',
        urls: [{
          title: 'Dashboard',
          url: '/dashboard'
        }, {
          title: 'Ngx Charts'
        }]
      };
      var ChartsRoutes = [{
        path: '',
        children: [{
          path: 'chartistjs',
          component: _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_0__["ChartistjsComponent"],
          data: ɵ0
        }, {
          path: 'chartjs',
          component: _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_1__["ChartjsComponent"],
          data: ɵ1
        }, {
          path: 'ngxchart',
          component: _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_2__["NgxChartComponent"],
          data: ɵ2
        }]
      }];
      /***/
    },

    /***/
    "./src/app/charts/ngx-charts/chartData.ts":
    /*!************************************************!*\
      !*** ./src/app/charts/ngx-charts/chartData.ts ***!
      \************************************************/

    /*! exports provided: single, multi, bubble, countries, generateGraph, generateData */

    /***/
    function srcAppChartsNgxChartsChartDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "single", function () {
        return single;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "multi", function () {
        return multi;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bubble", function () {
        return bubble;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "countries", function () {
        return countries;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateGraph", function () {
        return generateGraph;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateData", function () {
        return generateData;
      });

      var single = [{
        name: 'Germany',
        value: 40
      }, {
        name: 'USA',
        value: 49
      }, {
        name: 'France',
        value: 36
      }, {
        name: 'United Kingdom',
        value: 36
      }, {
        name: 'Spain',
        value: 33
      }, {
        name: 'Italy',
        value: 35
      }];
      var multi = [{
        name: 'Germany',
        series: [{
          name: '2010',
          value: 40
        }, {
          name: '2000',
          value: 36
        }, {
          name: '1990',
          value: 31
        }]
      }, {
        name: 'USA',
        series: [{
          name: '2010',
          value: 49
        }, {
          name: '2000',
          value: 45
        }, {
          name: '1990',
          value: 37
        }]
      }, {
        name: 'France',
        series: [{
          name: '2010',
          value: 36
        }, {
          name: '2000',
          value: 34
        }, {
          name: '1990',
          value: 29
        }]
      }, {
        name: 'United Kingdom',
        series: [{
          name: '2010',
          value: 36
        }, {
          name: '2000',
          value: 32
        }, {
          name: '1990',
          value: 26
        }]
      }];
      var bubble = [{
        name: 'Germany',
        series: [{
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 80.3,
          r: 80.4
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 80.3,
          r: 78
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 75.4,
          r: 79
        }]
      }, {
        name: 'USA',
        series: [{
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 78.8,
          r: 310
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 76.9,
          r: 283
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 75.4,
          r: 253
        }]
      }, {
        name: 'France',
        series: [{
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 81.4,
          r: 63
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 79.1,
          r: 59.4
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 77.2,
          r: 56.9
        }]
      }, {
        name: 'United Kingdom',
        series: [{
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 80.2,
          r: 62.7
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 77.8,
          r: 58.9
        }, {
          name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
          y: 75.7,
          r: 57.1
        }]
      }];
      var countries = ['Abkhazia', 'Afghanistan', 'Akrotiri and Dhekelia', 'Aland', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Ascension Island', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas, The', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central Africa Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote dlvoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Gabon', 'Cambia, The', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guemsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, N', 'Korea, S', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nagorno-Karabakh', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Cyprus', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcaim Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Sahrawi Arab Democratic Republic', 'Saint-Barthelemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and Grenadines', 'Samos', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'Somaliland', 'South Africa', 'South Ossetia', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Transnistria', 'Trinidad and Tobago', 'Tristan da Cunha', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Wallis and Futuna', 'Yemen', 'Zambia', 'Zimbabwe'];

      function generateGraph(nodeCount) {
        var nodes = [];
        var links = [];

        for (var i = 0; i < nodeCount; i++) {
          var country = countries[Math.floor(Math.random() * countries.length)];
          nodes.push({
            value: country
          });

          for (var j = 0; j < nodes.length - 1; j++) {
            if (Math.random() < 0.03) {
              links.push({
                source: country,
                target: nodes[j].value
              });
            }
          }
        }

        return {
          links: links,
          nodes: nodes
        };
      }

      function generateData(seriesLength, includeMinMaxRange) {
        var results = [];
        var domain = []; // array of time stamps in milliseconds

        for (var j = 0; j < 8; j++) {
          // random dates between Sep 12, 2016 and Sep 24, 2016
          domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
        }

        for (var i = 0; i < seriesLength; i++) {
          var country = countries[Math.floor(Math.random() * countries.length)];
          var series = {
            name: country,
            series: []
          };

          for (var _j = 0; _j < domain.length; _j++) {
            var value = Math.floor(2 + Math.random() * 5); // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);

            var timestamp = domain[_j];

            if (includeMinMaxRange) {
              var errorMargin = 0.02 + Math.random() * 0.08;
              series.series.push({
                value: value,
                name: timestamp,
                min: Math.floor(value * (1 - errorMargin)),
                max: Math.ceil(value * (1 + errorMargin))
              });
            } else {
              series.series.push({
                value: value,
                name: timestamp
              });
            }
          }

          results.push(series);
        }

        return results;
      }
      /***/

    },

    /***/
    "./src/app/charts/ngx-charts/ngx-chart.component.ngfactory.js":
    /*!********************************************************************!*\
      !*** ./src/app/charts/ngx-charts/ngx-chart.component.ngfactory.js ***!
      \********************************************************************/

    /*! exports provided: RenderType_NgxChartComponent, View_NgxChartComponent_0, View_NgxChartComponent_Host_0, NgxChartComponentNgFactory */

    /***/
    function srcAppChartsNgxChartsNgxChartComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_NgxChartComponent", function () {
        return RenderType_NgxChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_NgxChartComponent_0", function () {
        return View_NgxChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_NgxChartComponent_Host_0", function () {
        return View_NgxChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxChartComponentNgFactory", function () {
        return NgxChartComponentNgFactory;
      });
      /* harmony import */


      var _ngx_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ngx-chart.component.scss.shim.ngstyle */
      "./src/app/charts/ngx-charts/ngx-chart.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@swimlane/ngx-charts/swimlane-ngx-charts.ngfactory */
      "./node_modules/@swimlane/ngx-charts/swimlane-ngx-charts.ngfactory.js");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
      /* harmony import */


      var _ngx_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ngx-chart.component */
      "./src/app/charts/ngx-charts/ngx-chart.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_NgxChartComponent = [_ngx_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_NgxChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_NgxChartComponent,
        data: {}
      });

      function View_NgxChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 84, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vertical Bar Chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "ngx-charts-bar-vertical", [["class", "chart-container"]], null, [[null, "select"], [null, "legendLabelClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("select" === en) {
            var pd_0 = _co.select($event) !== false;
            ad = pd_0 && ad;
          }

          if ("legendLabelClick" === en) {
            var pd_1 = _co.onLegendLabelClick($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BarVerticalComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BarVerticalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4898816, null, 1, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarVerticalComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          view: [1, "view"],
          scheme: [2, "scheme"],
          schemeType: [3, "schemeType"],
          legend: [4, "legend"],
          xAxis: [5, "xAxis"],
          yAxis: [6, "yAxis"],
          showXAxisLabel: [7, "showXAxisLabel"],
          showYAxisLabel: [8, "showYAxisLabel"],
          xAxisLabel: [9, "xAxisLabel"],
          yAxisLabel: [10, "yAxisLabel"],
          tooltipDisabled: [11, "tooltipDisabled"],
          gradient: [12, "gradient"],
          showGridLines: [13, "showGridLines"],
          barPadding: [14, "barPadding"],
          roundDomains: [15, "roundDomains"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          tooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Horizontal bar chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "ngx-charts-bar-horizontal", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("legendLabelClick" === en) {
            var pd_0 = _co.onLegendLabelClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("select" === en) {
            var pd_1 = _co.select($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BarHorizontalComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BarHorizontalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4898816, null, 1, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarHorizontalComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          schemeType: [2, "schemeType"],
          legend: [3, "legend"],
          xAxis: [4, "xAxis"],
          yAxis: [5, "yAxis"],
          showXAxisLabel: [6, "showXAxisLabel"],
          showYAxisLabel: [7, "showYAxisLabel"],
          xAxisLabel: [8, "xAxisLabel"],
          yAxisLabel: [9, "yAxisLabel"],
          tooltipDisabled: [10, "tooltipDisabled"],
          gradient: [11, "gradient"],
          showGridLines: [12, "showGridLines"],
          barPadding: [13, "barPadding"],
          roundDomains: [14, "roundDomains"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          tooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 6, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Group Vertical bar chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "ngx-charts-bar-vertical-2d", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("legendLabelClick" === en) {
            var pd_0 = _co.onLegendLabelClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("select" === en) {
            var pd_1 = _co.select($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BarVertical2DComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BarVertical2DComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4898816, null, 1, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarVertical2DComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          schemeType: [2, "schemeType"],
          legend: [3, "legend"],
          xAxis: [4, "xAxis"],
          yAxis: [5, "yAxis"],
          showXAxisLabel: [6, "showXAxisLabel"],
          showYAxisLabel: [7, "showYAxisLabel"],
          xAxisLabel: [8, "xAxisLabel"],
          yAxisLabel: [9, "yAxisLabel"],
          tooltipDisabled: [10, "tooltipDisabled"],
          gradient: [11, "gradient"],
          showGridLines: [12, "showGridLines"],
          groupPadding: [13, "groupPadding"],
          barPadding: [14, "barPadding"],
          roundDomains: [15, "roundDomains"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          tooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 6, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Group horizontal bar chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "ngx-charts-bar-horizontal-2d", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("legendLabelClick" === en) {
            var pd_0 = _co.onLegendLabelClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("select" === en) {
            var pd_1 = _co.select($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BarHorizontal2DComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BarHorizontal2DComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4898816, null, 1, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarHorizontal2DComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          schemeType: [2, "schemeType"],
          legend: [3, "legend"],
          xAxis: [4, "xAxis"],
          yAxis: [5, "yAxis"],
          showXAxisLabel: [6, "showXAxisLabel"],
          showYAxisLabel: [7, "showYAxisLabel"],
          xAxisLabel: [8, "xAxisLabel"],
          yAxisLabel: [9, "yAxisLabel"],
          tooltipDisabled: [10, "tooltipDisabled"],
          gradient: [11, "gradient"],
          showGridLines: [12, "showGridLines"],
          groupPadding: [13, "groupPadding"],
          barPadding: [14, "barPadding"],
          roundDomains: [15, "roundDomains"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          tooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 8, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Line chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 3, "ngx-charts-line-chart", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"], [null, "mouseleave"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("mouseleave" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).hideCircles() !== false;
            ad = pd_0 && ad;
          }

          if ("legendLabelClick" === en) {
            var pd_1 = _co.onLegendLabelClick($event) !== false;
            ad = pd_1 && ad;
          }

          if ("select" === en) {
            var pd_2 = _co.select($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LineChartComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LineChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 4898816, null, 2, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          schemeType: [2, "schemeType"],
          legend: [3, "legend"],
          xAxis: [4, "xAxis"],
          yAxis: [5, "yAxis"],
          showXAxisLabel: [6, "showXAxisLabel"],
          showYAxisLabel: [7, "showYAxisLabel"],
          xAxisLabel: [8, "xAxisLabel"],
          yAxisLabel: [9, "yAxisLabel"],
          autoScale: [10, "autoScale"],
          timeline: [11, "timeline"],
          gradient: [12, "gradient"],
          showGridLines: [13, "showGridLines"],
          curve: [14, "curve"],
          rangeFillOpacity: [15, "rangeFillOpacity"],
          roundDomains: [16, "roundDomains"],
          tooltipDisabled: [17, "tooltipDisabled"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          tooltipTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          seriesTooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 8, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Area chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 3, "ngx-charts-area-chart", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"], [null, "mouseleave"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("mouseleave" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).hideCircles() !== false;
            ad = pd_0 && ad;
          }

          if ("legendLabelClick" === en) {
            var pd_1 = _co.onLegendLabelClick($event) !== false;
            ad = pd_1 && ad;
          }

          if ("select" === en) {
            var pd_2 = _co.select($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AreaChartComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AreaChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 4898816, null, 2, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AreaChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          schemeType: [2, "schemeType"],
          legend: [3, "legend"],
          xAxis: [4, "xAxis"],
          yAxis: [5, "yAxis"],
          autoScale: [6, "autoScale"],
          showXAxisLabel: [7, "showXAxisLabel"],
          showYAxisLabel: [8, "showYAxisLabel"],
          xAxisLabel: [9, "xAxisLabel"],
          yAxisLabel: [10, "yAxisLabel"],
          timeline: [11, "timeline"],
          gradient: [12, "gradient"],
          showGridLines: [13, "showGridLines"],
          curve: [14, "curve"],
          roundDomains: [15, "roundDomains"],
          tooltipDisabled: [16, "tooltipDisabled"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          tooltipTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          seriesTooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 8, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Stacked chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 3, "ngx-charts-area-chart-stacked", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"], [null, "mouseleave"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("mouseleave" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).hideCircles() !== false;
            ad = pd_0 && ad;
          }

          if ("legendLabelClick" === en) {
            var pd_1 = _co.onLegendLabelClick($event) !== false;
            ad = pd_1 && ad;
          }

          if ("select" === en) {
            var pd_2 = _co.select($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AreaChartStackedComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AreaChartStackedComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 4898816, null, 2, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AreaChartStackedComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          schemeType: [2, "schemeType"],
          legend: [3, "legend"],
          xAxis: [4, "xAxis"],
          yAxis: [5, "yAxis"],
          showXAxisLabel: [6, "showXAxisLabel"],
          showYAxisLabel: [7, "showYAxisLabel"],
          xAxisLabel: [8, "xAxisLabel"],
          yAxisLabel: [9, "yAxisLabel"],
          timeline: [10, "timeline"],
          gradient: [11, "gradient"],
          showGridLines: [12, "showGridLines"],
          curve: [13, "curve"],
          roundDomains: [14, "roundDomains"],
          tooltipDisabled: [15, "tooltipDisabled"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          tooltipTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          seriesTooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 8, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Normalize Area chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 3, "ngx-charts-area-chart-normalized", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"], [null, "mouseleave"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("mouseleave" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).hideCircles() !== false;
            ad = pd_0 && ad;
          }

          if ("legendLabelClick" === en) {
            var pd_1 = _co.onLegendLabelClick($event) !== false;
            ad = pd_1 && ad;
          }

          if ("select" === en) {
            var pd_2 = _co.select($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AreaChartNormalizedComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AreaChartNormalizedComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 4898816, null, 2, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AreaChartNormalizedComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          schemeType: [2, "schemeType"],
          legend: [3, "legend"],
          xAxis: [4, "xAxis"],
          yAxis: [5, "yAxis"],
          showXAxisLabel: [6, "showXAxisLabel"],
          showYAxisLabel: [7, "showYAxisLabel"],
          xAxisLabel: [8, "xAxisLabel"],
          yAxisLabel: [9, "yAxisLabel"],
          timeline: [10, "timeline"],
          gradient: [11, "gradient"],
          showGridLines: [12, "showGridLines"],
          curve: [13, "curve"],
          roundDomains: [14, "roundDomains"],
          tooltipDisabled: [15, "tooltipDisabled"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          tooltipTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          seriesTooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 6, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pie chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 2, "ngx-charts-pie-chart", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("legendLabelClick" === en) {
            var pd_0 = _co.onLegendLabelClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("select" === en) {
            var pd_1 = _co.select($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PieChartComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PieChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 4898816, null, 1, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          labels: [2, "labels"],
          legend: [3, "legend"],
          explodeSlices: [4, "explodeSlices"],
          doughnut: [5, "doughnut"],
          arcWidth: [6, "arcWidth"],
          gradient: [7, "gradient"],
          tooltipDisabled: [8, "tooltipDisabled"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          tooltipTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 6, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Advanced pie chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 2, "ngx-charts-advanced-pie-chart", [["class", "chart-container"]], null, [[null, "legendLabelClick"], [null, "select"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("legendLabelClick" === en) {
            var pd_0 = _co.onLegendLabelClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("select" === en) {
            var pd_1 = _co.select($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AdvancedPieChartComponent_0"], _node_modules_swimlane_ngx_charts_swimlane_ngx_charts_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AdvancedPieChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 4898816, null, 1, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AdvancedPieChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          results: [0, "results"],
          scheme: [1, "scheme"],
          gradient: [2, "gradient"],
          tooltipDisabled: [3, "tooltipDisabled"]
        }, {
          select: "select"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          tooltipTemplate: 0
        })], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.single;
          var currVal_1 = _co.view;
          var currVal_2 = _co.colorScheme;
          var currVal_3 = _co.schemeType;
          var currVal_4 = _co.showLegend;
          var currVal_5 = _co.showXAxis;
          var currVal_6 = _co.showYAxis;
          var currVal_7 = _co.showXAxisLabel;
          var currVal_8 = _co.showYAxisLabel;
          var currVal_9 = _co.xAxisLabel;
          var currVal_10 = _co.yAxisLabel;
          var currVal_11 = _co.tooltipDisabled;
          var currVal_12 = _co.gradient;
          var currVal_13 = _co.showGridLines;
          var currVal_14 = 40;
          var currVal_15 = _co.roundDomains;

          _ck(_v, 7, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]);

          var currVal_16 = _co.single;
          var currVal_17 = _co.colorScheme;
          var currVal_18 = _co.schemeType;
          var currVal_19 = _co.showLegend;
          var currVal_20 = _co.showXAxis;
          var currVal_21 = _co.showYAxis;
          var currVal_22 = _co.showXAxisLabel;
          var currVal_23 = _co.showYAxisLabel;
          var currVal_24 = _co.xAxisLabel;
          var currVal_25 = _co.yAxisLabel;
          var currVal_26 = _co.tooltipDisabled;
          var currVal_27 = _co.gradient;
          var currVal_28 = _co.showGridLines;
          var currVal_29 = 20;
          var currVal_30 = _co.roundDomains;

          _ck(_v, 15, 1, [currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30]);

          var currVal_31 = _co.multi;
          var currVal_32 = _co.colorScheme;
          var currVal_33 = _co.schemeType;
          var currVal_34 = _co.showLegend;
          var currVal_35 = _co.showXAxis;
          var currVal_36 = _co.showYAxis;
          var currVal_37 = _co.showXAxisLabel;
          var currVal_38 = _co.showYAxisLabel;
          var currVal_39 = _co.xAxisLabel;
          var currVal_40 = _co.yAxisLabel;
          var currVal_41 = _co.tooltipDisabled;
          var currVal_42 = _co.gradient;
          var currVal_43 = _co.showGridLines;
          var currVal_44 = 20;
          var currVal_45 = _co.barPadding;
          var currVal_46 = _co.roundDomains;

          _ck(_v, 23, 1, [currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46]);

          var currVal_47 = _co.multi;
          var currVal_48 = _co.colorScheme;
          var currVal_49 = _co.schemeType;
          var currVal_50 = _co.showLegend;
          var currVal_51 = _co.showXAxis;
          var currVal_52 = _co.showYAxis;
          var currVal_53 = _co.showXAxisLabel;
          var currVal_54 = _co.showYAxisLabel;
          var currVal_55 = _co.xAxisLabel;
          var currVal_56 = _co.yAxisLabel;
          var currVal_57 = _co.tooltipDisabled;
          var currVal_58 = _co.gradient;
          var currVal_59 = _co.showGridLines;
          var currVal_60 = 20;
          var currVal_61 = _co.barPadding;
          var currVal_62 = _co.roundDomains;

          _ck(_v, 31, 1, [currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62]);

          var currVal_63 = _co.dateDataWithOrWithoutRange;
          var currVal_64 = _co.colorScheme;
          var currVal_65 = _co.schemeType;
          var currVal_66 = _co.showLegend;
          var currVal_67 = _co.showXAxis;
          var currVal_68 = _co.showYAxis;
          var currVal_69 = _co.showXAxisLabel;
          var currVal_70 = _co.showYAxisLabel;
          var currVal_71 = _co.xAxisLabel;
          var currVal_72 = _co.yAxisLabel;
          var currVal_73 = _co.autoScale;
          var currVal_74 = _co.timeline;
          var currVal_75 = _co.gradient;
          var currVal_76 = _co.showGridLines;
          var currVal_77 = _co.curve;
          var currVal_78 = _co.rangeFillOpacity;
          var currVal_79 = _co.roundDomains;
          var currVal_80 = true;

          _ck(_v, 39, 1, [currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80]);

          var currVal_81 = _co.dateData;
          var currVal_82 = _co.colorScheme;
          var currVal_83 = _co.schemeType;
          var currVal_84 = _co.showLegend;
          var currVal_85 = _co.showXAxis;
          var currVal_86 = _co.showYAxis;
          var currVal_87 = _co.autoScale;
          var currVal_88 = _co.showXAxisLabel;
          var currVal_89 = _co.showYAxisLabel;
          var currVal_90 = _co.xAxisLabel;
          var currVal_91 = _co.yAxisLabel;
          var currVal_92 = _co.timeline;
          var currVal_93 = _co.gradient;
          var currVal_94 = _co.showGridLines;
          var currVal_95 = _co.curve;
          var currVal_96 = _co.roundDomains;
          var currVal_97 = _co.tooltipDisabled;

          _ck(_v, 48, 1, [currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97]);

          var currVal_98 = _co.dateData;
          var currVal_99 = _co.colorScheme;
          var currVal_100 = _co.schemeType;
          var currVal_101 = _co.showLegend;
          var currVal_102 = _co.showXAxis;
          var currVal_103 = _co.showYAxis;
          var currVal_104 = _co.showXAxisLabel;
          var currVal_105 = _co.showYAxisLabel;
          var currVal_106 = _co.xAxisLabel;
          var currVal_107 = _co.yAxisLabel;
          var currVal_108 = _co.timeline;
          var currVal_109 = _co.gradient;
          var currVal_110 = _co.showGridLines;
          var currVal_111 = _co.curve;
          var currVal_112 = _co.roundDomains;
          var currVal_113 = _co.tooltipDisabled;

          _ck(_v, 57, 1, [currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113]);

          var currVal_114 = _co.dateData;
          var currVal_115 = _co.colorScheme;
          var currVal_116 = _co.schemeType;
          var currVal_117 = _co.showLegend;
          var currVal_118 = _co.showXAxis;
          var currVal_119 = _co.showYAxis;
          var currVal_120 = _co.showXAxisLabel;
          var currVal_121 = _co.showYAxisLabel;
          var currVal_122 = _co.xAxisLabel;
          var currVal_123 = _co.yAxisLabel;
          var currVal_124 = _co.timeline;
          var currVal_125 = _co.gradient;
          var currVal_126 = _co.showGridLines;
          var currVal_127 = _co.curve;
          var currVal_128 = _co.roundDomains;
          var currVal_129 = _co.tooltipDisabled;

          _ck(_v, 66, 1, [currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129]);

          var currVal_130 = _co.single;
          var currVal_131 = _co.colorScheme;
          var currVal_132 = _co.showLabels;
          var currVal_133 = _co.showLegend;
          var currVal_134 = _co.explodeSlices;
          var currVal_135 = _co.doughnut;
          var currVal_136 = _co.arcWidth;
          var currVal_137 = _co.gradient;
          var currVal_138 = _co.tooltipDisabled;

          _ck(_v, 75, 0, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138);

          var currVal_139 = _co.single;
          var currVal_140 = _co.colorScheme;
          var currVal_141 = _co.gradient;
          var currVal_142 = _co.tooltipDisabled;

          _ck(_v, 83, 0, currVal_139, currVal_140, currVal_141, currVal_142);
        }, null);
      }

      function View_NgxChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-ngxchart", [], null, null, null, View_NgxChartComponent_0, RenderType_NgxChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ngx_chart_component__WEBPACK_IMPORTED_MODULE_4__["NgxChartComponent"], [], null, null)], null, null);
      }

      var NgxChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-ngxchart", _ngx_chart_component__WEBPACK_IMPORTED_MODULE_4__["NgxChartComponent"], View_NgxChartComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/charts/ngx-charts/ngx-chart.component.scss.shim.ngstyle.js":
    /*!****************************************************************************!*\
      !*** ./src/app/charts/ngx-charts/ngx-chart.component.scss.shim.ngstyle.js ***!
      \****************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppChartsNgxChartsNgxChartComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".chart-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnRzL25neC1jaGFydHMvbmd4LWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jaGFydHMvbmd4LWNoYXJ0cy9uZ3gtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLncxMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"];
      /***/
    },

    /***/
    "./src/app/charts/ngx-charts/ngx-chart.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/charts/ngx-charts/ngx-chart.component.ts ***!
      \**********************************************************/

    /*! exports provided: NgxChartComponent */

    /***/
    function srcAppChartsNgxChartsNgxChartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxChartComponent", function () {
        return NgxChartComponent;
      });
      /* harmony import */


      var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3-shape */
      "./node_modules/d3-shape/src/index.js");
      /* harmony import */


      var _chartData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chartData */
      "./src/app/charts/ngx-charts/chartData.ts");

      var NgxChartComponent = /*#__PURE__*/function () {
        function NgxChartComponent() {
          _classCallCheck(this, NgxChartComponent);

          this.range = false; // options

          this.showXAxis = true;
          this.showYAxis = true;
          this.gradient = false;
          this.showLegend = false;
          this.showXAxisLabel = true;
          this.tooltipDisabled = false;
          this.xAxisLabel = 'Country';
          this.showYAxisLabel = true;
          this.yAxisLabel = 'GDP Per Capita';
          this.showGridLines = true;
          this.innerPadding = 0;
          this.autoScale = true;
          this.timeline = false;
          this.barPadding = 8;
          this.groupPadding = 0;
          this.roundDomains = false;
          this.maxRadius = 10;
          this.minRadius = 3;
          this.view = '';
          this.showLabels = true;
          this.explodeSlices = false;
          this.doughnut = false;
          this.arcWidth = 0.25;
          this.rangeFillOpacity = 0.15;
          this.colorScheme = {
            domain: ['#4fc3f7', '#fb8c00', '#7460ee', '#f62d51', '#20c997', '#2962FF']
          };
          this.schemeType = 'ordinal'; // line interpolation

          this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveLinear"];
          Object.assign(this, {
            single: _chartData__WEBPACK_IMPORTED_MODULE_1__["single"],
            multi: _chartData__WEBPACK_IMPORTED_MODULE_1__["multi"]
          });
          this.dateData = Object(_chartData__WEBPACK_IMPORTED_MODULE_1__["generateData"])(6, false);
          this.dateDataWithRange = Object(_chartData__WEBPACK_IMPORTED_MODULE_1__["generateData"])(2, true);
        }

        _createClass(NgxChartComponent, [{
          key: "select",
          value: function select(data) {
            console.log('Item clicked', data);
          }
        }, {
          key: "onLegendLabelClick",
          value: function onLegendLabelClick(entry) {
            console.log('Legend clicked', entry);
          }
        }, {
          key: "dateDataWithOrWithoutRange",
          get: function get() {
            if (this.range) {
              return this.dateDataWithRange;
            } else {
              return this.dateData;
            }
          }
        }]);

        return NgxChartComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=charts-charts-module-ngfactory-es5.js.map