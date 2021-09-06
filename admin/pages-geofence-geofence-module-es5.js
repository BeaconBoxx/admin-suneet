(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geofence-geofence-module"], {
    /***/
    "./src/app/pages/geofence/geofence-add/geofence-add.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/geofence/geofence-add/geofence-add.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GeofenceAddComponent */

    /***/
    function srcAppPagesGeofenceGeofenceAddGeofenceAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceAddComponent", function () {
        return GeofenceAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/fesm2015/agm-core.js");

      var _c0 = ["map2"];

      var GeofenceAddComponent = /*#__PURE__*/function () {
        function GeofenceAddComponent() {
          _classCallCheck(this, GeofenceAddComponent);

          this.lat = -34.397;
          this.lng = 150.644;
          this.latA = -34.754764;
          this.lngA = 149.736246;
          this.zoom = 8;
          this.styles = [{
            featureType: 'all',
            stylers: [{
              saturation: -80
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              hue: '#00ffee'
            }, {
              saturation: 50
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }];
        }

        _createClass(GeofenceAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GeofenceAddComponent;
      }();

      GeofenceAddComponent.ɵfac = function GeofenceAddComponent_Factory(t) {
        return new (t || GeofenceAddComponent)();
      };

      GeofenceAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofenceAddComponent,
        selectors: [["app-geofence-add"]],
        viewQuery: function GeofenceAddComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map1 = _t.first);
          }
        },
        decls: 16,
        vars: 4,
        consts: [[1, "card"], [1, "card-body"], [1, "d-block", "text-right", "mb-3"], ["routerLink", "/geofence/geofencelist", 1, "btn", "btn-primary"], [1, "row"], [1, "col-12"], ["action", ""], [1, "form-group"], ["type", "text", "placeholder", "Add Geofence Name", 1, "form-control"], [2, "height", "300px", 3, "latitude", "longitude", "zoom", "styles"], ["map2", ""], [1, "btn", "btn-primary", "mt-3"]],
        template: function GeofenceAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "agm-map", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("styles", ctx.styles);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2ZlbmNlL2dlb2ZlbmNlLWFkZC9nZW9mZW5jZS1hZGQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofence-add',
            templateUrl: './geofence-add.component.html',
            styleUrls: ['./geofence-add.component.css']
          }]
        }], function () {
          return [];
        }, {
          map1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map2', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofence-edit/geofence-edit.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/geofence/geofence-edit/geofence-edit.component.ts ***!
      \*************************************************************************/

    /*! exports provided: GeofenceEditComponent */

    /***/
    function srcAppPagesGeofenceGeofenceEditGeofenceEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceEditComponent", function () {
        return GeofenceEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/fesm2015/agm-core.js");

      var _c0 = ["map2"];

      var GeofenceEditComponent = /*#__PURE__*/function () {
        function GeofenceEditComponent() {
          _classCallCheck(this, GeofenceEditComponent);

          this.lat = -34.397;
          this.lng = 150.644;
          this.latA = -34.754764;
          this.lngA = 149.736246;
          this.zoom = 8;
          this.styles = [{
            featureType: 'all',
            stylers: [{
              saturation: -80
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              hue: '#00ffee'
            }, {
              saturation: 50
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }];
        }

        _createClass(GeofenceEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GeofenceEditComponent;
      }();

      GeofenceEditComponent.ɵfac = function GeofenceEditComponent_Factory(t) {
        return new (t || GeofenceEditComponent)();
      };

      GeofenceEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofenceEditComponent,
        selectors: [["app-geofence-edit"]],
        viewQuery: function GeofenceEditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map1 = _t.first);
          }
        },
        decls: 16,
        vars: 4,
        consts: [[1, "card"], [1, "card-body"], [1, "d-block", "text-right", "mb-3"], ["routerLink", "/geofence/geofencelist", 1, "btn", "btn-primary"], [1, "row"], [1, "col-12"], ["action", ""], [1, "form-group"], ["type", "text", "placeholder", "Add Geofence Name", 1, "form-control"], [2, "height", "300px", 3, "latitude", "longitude", "zoom", "styles"], ["map2", ""], [1, "btn", "btn-primary", "mt-3"]],
        template: function GeofenceEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "agm-map", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("styles", ctx.styles);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2ZlbmNlL2dlb2ZlbmNlLWVkaXQvZ2VvZmVuY2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofence-edit',
            templateUrl: './geofence-edit.component.html',
            styleUrls: ['./geofence-edit.component.css']
          }]
        }], function () {
          return [];
        }, {
          map1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map2', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofence-list/geofence-list.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/geofence/geofence-list/geofence-list.component.ts ***!
      \*************************************************************************/

    /*! exports provided: GeofenceListComponent */

    /***/
    function srcAppPagesGeofenceGeofenceListGeofenceListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceListComponent", function () {
        return GeofenceListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var _c0 = ["map2"];

      var GeofenceListComponent = /*#__PURE__*/function () {
        function GeofenceListComponent() {
          _classCallCheck(this, GeofenceListComponent);

          this.lat = -34.397;
          this.lng = 150.644;
          this.latA = -34.754764;
          this.lngA = 149.736246;
          this.zoom = 8;
          this.styles = [{
            featureType: 'all',
            stylers: [{
              saturation: -80
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              hue: '#00ffee'
            }, {
              saturation: 50
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }];
        }

        _createClass(GeofenceListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GeofenceListComponent;
      }();

      GeofenceListComponent.ɵfac = function GeofenceListComponent_Factory(t) {
        return new (t || GeofenceListComponent)();
      };

      GeofenceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofenceListComponent,
        selectors: [["app-geofence-list"]],
        viewQuery: function GeofenceListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map1 = _t.first);
          }
        },
        decls: 39,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["routerLink", "/geofence/geofenceadd", 1, "btn", "btn-primary", "mb-3"], [1, "col-md-3"], [1, "mb-0"], [1, "d-flex"], [1, "ml-auto"], ["routerLink", "/geofence/geofenceedit"], [1, "mdi", "mdi-pencil"], ["href", "javascript:void()", 1, "ml-2"], [1, "mdi", "mdi-delete"]],
        template: function GeofenceListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Geofence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Geo Fencing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Geo Fencing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Geo Fencing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2ZlbmNlL2dlb2ZlbmNlLWxpc3QvZ2VvZmVuY2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofence-list',
            templateUrl: './geofence-list.component.html',
            styleUrls: ['./geofence-list.component.css']
          }]
        }], function () {
          return [];
        }, {
          map1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map2', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofence-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/geofence/geofence-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: GeofenceRoutingModule */

    /***/
    function srcAppPagesGeofenceGeofenceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceRoutingModule", function () {
        return GeofenceRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _geofence_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./geofence.component */
      "./src/app/pages/geofence/geofence.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _geofence_list_geofence_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./geofence-list/geofence-list.component */
      "./src/app/pages/geofence/geofence-list/geofence-list.component.ts");
      /* harmony import */


      var _geofence_edit_geofence_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./geofence-edit/geofence-edit.component */
      "./src/app/pages/geofence/geofence-edit/geofence-edit.component.ts");
      /* harmony import */


      var _geofence_add_geofence_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./geofence-add/geofence-add.component */
      "./src/app/pages/geofence/geofence-add/geofence-add.component.ts");

      var routes = [{
        path: '',
        component: _geofence_component__WEBPACK_IMPORTED_MODULE_1__["GeofenceComponent"],
        children: [{
          path: 'geofencelist',
          component: _geofence_list_geofence_list_component__WEBPACK_IMPORTED_MODULE_3__["GeofenceListComponent"],
          data: {
            title: "Geofence"
          }
        }, {
          path: 'geofenceedit',
          component: _geofence_edit_geofence_edit_component__WEBPACK_IMPORTED_MODULE_4__["GeofenceEditComponent"],
          data: {
            title: "Edit Geofence "
          }
        }, {
          path: 'geofenceadd',
          component: _geofence_add_geofence_add_component__WEBPACK_IMPORTED_MODULE_5__["GeofenceAddComponent"],
          data: {
            title: "Add Geofence"
          }
        }]
      }];

      var GeofenceRoutingModule = function GeofenceRoutingModule() {
        _classCallCheck(this, GeofenceRoutingModule);
      };

      GeofenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GeofenceRoutingModule
      });
      GeofenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GeofenceRoutingModule_Factory(t) {
          return new (t || GeofenceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeofenceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofence.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/geofence/geofence.component.ts ***!
      \******************************************************/

    /*! exports provided: GeofenceComponent */

    /***/
    function srcAppPagesGeofenceGeofenceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceComponent", function () {
        return GeofenceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var GeofenceComponent = /*#__PURE__*/function () {
        function GeofenceComponent() {
          _classCallCheck(this, GeofenceComponent);
        }

        _createClass(GeofenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GeofenceComponent;
      }();

      GeofenceComponent.ɵfac = function GeofenceComponent_Factory(t) {
        return new (t || GeofenceComponent)();
      };

      GeofenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofenceComponent,
        selectors: [["app-geofence"]],
        decls: 1,
        vars: 0,
        template: function GeofenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2ZlbmNlL2dlb2ZlbmNlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofence',
            templateUrl: './geofence.component.html',
            styleUrls: ['./geofence.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofence.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/geofence/geofence.module.ts ***!
      \***************************************************/

    /*! exports provided: GeofenceModule */

    /***/
    function srcAppPagesGeofenceGeofenceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceModule", function () {
        return GeofenceModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _geofence_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./geofence.component */
      "./src/app/pages/geofence/geofence.component.ts");
      /* harmony import */


      var _geofence_list_geofence_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./geofence-list/geofence-list.component */
      "./src/app/pages/geofence/geofence-list/geofence-list.component.ts");
      /* harmony import */


      var _geofence_add_geofence_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./geofence-add/geofence-add.component */
      "./src/app/pages/geofence/geofence-add/geofence-add.component.ts");
      /* harmony import */


      var _geofence_edit_geofence_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./geofence-edit/geofence-edit.component */
      "./src/app/pages/geofence/geofence-edit/geofence-edit.component.ts");
      /* harmony import */


      var _geofence_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./geofence-routing.module */
      "./src/app/pages/geofence/geofence-routing.module.ts");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/fesm2015/agm-core.js");

      var GeofenceModule = function GeofenceModule() {
        _classCallCheck(this, GeofenceModule);
      };

      GeofenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GeofenceModule
      });
      GeofenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GeofenceModule_Factory(t) {
          return new (t || GeofenceModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _geofence_routing_module__WEBPACK_IMPORTED_MODULE_6__["GeofenceRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({//  apiKey: ''
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeofenceModule, {
          declarations: [_geofence_component__WEBPACK_IMPORTED_MODULE_2__["GeofenceComponent"], _geofence_list_geofence_list_component__WEBPACK_IMPORTED_MODULE_3__["GeofenceListComponent"], _geofence_add_geofence_add_component__WEBPACK_IMPORTED_MODULE_4__["GeofenceAddComponent"], _geofence_edit_geofence_edit_component__WEBPACK_IMPORTED_MODULE_5__["GeofenceEditComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _geofence_routing_module__WEBPACK_IMPORTED_MODULE_6__["GeofenceRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_geofence_component__WEBPACK_IMPORTED_MODULE_2__["GeofenceComponent"], _geofence_list_geofence_list_component__WEBPACK_IMPORTED_MODULE_3__["GeofenceListComponent"], _geofence_add_geofence_add_component__WEBPACK_IMPORTED_MODULE_4__["GeofenceAddComponent"], _geofence_edit_geofence_edit_component__WEBPACK_IMPORTED_MODULE_5__["GeofenceEditComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _geofence_routing_module__WEBPACK_IMPORTED_MODULE_6__["GeofenceRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({//  apiKey: ''
            })]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-geofence-geofence-module-es5.js.map