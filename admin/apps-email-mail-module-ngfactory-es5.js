(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-email-mail-module-ngfactory"], {
    /***/
    "./node_modules/rxjs-compat/add/operator/switchMap.js":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatAddOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var switchMap_1 = __webpack_require__(
      /*! ../../operator/switchMap */
      "./node_modules/rxjs-compat/operator/switchMap.js");

      rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operator/switchMap.js":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable, emitting values only from the most recently projected Observable.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link switch}.</span>
       *
       * <img src="./img/switchMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an (so-called "inner") Observable. Each time it observes one of these
       * inner Observables, the output Observable begins emitting the items emitted by
       * that inner Observable. When a new inner Observable is emitted, `switchMap`
       * stops emitting items from the earlier-emitted inner Observable and begins
       * emitting items from the new one. It continues to behave like this for
       * subsequent inner Observables.
       *
       * @example <caption>Rerun an interval Observable on every click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMap}
       * @see {@link exhaustMap}
       * @see {@link mergeMap}
       * @see {@link switch}
       * @see {@link switchMapTo}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @return {Observable} An Observable that emits the result of applying the
       * projection function (and the optional `resultSelector`) to each item emitted
       * by the source Observable and taking only the values from the most recently
       * projected inner Observable.
       * @method switchMap
       * @owner Observable
       */


      function switchMap(project) {
        return operators_1.switchMap(project)(this);
      }

      exports.switchMap = switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs/add/operator/switchMap.js":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsAddOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __webpack_require__(
      /*! rxjs-compat/add/operator/switchMap */
      "./node_modules/rxjs-compat/add/operator/switchMap.js"); //# sourceMappingURL=switchMap.js.map

      /***/

    },

    /***/
    "./src/app/apps/email/app.state.ts":
    /*!*****************************************!*\
      !*** ./src/app/apps/email/app.state.ts ***!
      \*****************************************/

    /*! exports provided: AppState */

    /***/
    function srcAppAppsEmailAppStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppState", function () {
        return AppState;
      });
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/Subject */
      "./node_modules/rxjs/Subject.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__);

      var AppState = /*#__PURE__*/function () {
        function AppState() {
          var _this = this;

          _classCallCheck(this, AppState);

          this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this._dataStream$ = this._data.asObservable();
          this._subscriptions = new Map();

          this._dataStream$.subscribe(function (data) {
            return _this._onEvent(data);
          });
        }

        _createClass(AppState, [{
          key: "notifyDataChanged",
          value: function notifyDataChanged(event, value) {// const current:any = this._data[event];
            // if (current !== value) {
            //   this._data[event] = value;
            //   this._data.next({
            //     event: event,
            //     data: this._data[event]
            //   });
            // }
          }
        }, {
          key: "subscribe",
          value: function subscribe(event, callback) {
            var subscribers = this._subscriptions.get(event) || [];
            subscribers.push(callback);

            this._subscriptions.set(event, subscribers);
          }
        }, {
          key: "_onEvent",
          value: function _onEvent(data) {
            var subscribers = this._subscriptions.get(data['event']) || [];
            subscribers.forEach(function (callback) {
              callback.call(null, data['data']);
            });
          }
        }]);

        return AppState;
      }();
      /***/

    },

    /***/
    "./src/app/apps/email/mail-compose/mail-compose.component.ngfactory.js":
    /*!*****************************************************************************!*\
      !*** ./src/app/apps/email/mail-compose/mail-compose.component.ngfactory.js ***!
      \*****************************************************************************/

    /*! exports provided: RenderType_MailComposeComponent, View_MailComposeComponent_0, View_MailComposeComponent_Host_0, MailComposeComponentNgFactory */

    /***/
    function srcAppAppsEmailMailComposeMailComposeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MailComposeComponent", function () {
        return RenderType_MailComposeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailComposeComponent_0", function () {
        return View_MailComposeComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailComposeComponent_Host_0", function () {
        return View_MailComposeComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComposeComponentNgFactory", function () {
        return MailComposeComponentNgFactory;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _mail_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mail-compose.component */
      "./src/app/apps/email/mail-compose/mail-compose.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_MailComposeComponent = [];

      var RenderType_MailComposeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MailComposeComponent,
        data: {}
      });

      function View_MailComposeComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 20, "div", [["class", "card-body compose"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 19, "form", [["action", "#"], ["method", "get"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "To"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Cc / Bcc"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Subject"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "textarea", [["class", "form-control"], ["placeholder", "Message"], ["rows", "10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 6, "div", [["class", "form-group float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 3, "a", [["class", "btn btn-secondary"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "button", [["class", "btn btn-main"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Send"]))], function (_ck, _v) {
          var currVal_9 = _ck(_v, 17, 0, "../mail-list/inbox");

          _ck(_v, 16, 0, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassPending;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).target;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).href;

          _ck(_v, 15, 0, currVal_7, currVal_8);
        });
      }

      function View_MailComposeComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-mail-compose", [], null, null, null, View_MailComposeComponent_0, RenderType_MailComposeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _mail_compose_component__WEBPACK_IMPORTED_MODULE_4__["MailComposeComponent"], [], null, null)], null, null);
      }

      var MailComposeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-mail-compose", _mail_compose_component__WEBPACK_IMPORTED_MODULE_4__["MailComposeComponent"], View_MailComposeComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/apps/email/mail-compose/mail-compose.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/apps/email/mail-compose/mail-compose.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MailComposeComponent */

    /***/
    function srcAppAppsEmailMailComposeMailComposeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function () {
        return MailComposeComponent;
      });

      var MailComposeComponent = function MailComposeComponent() {
        _classCallCheck(this, MailComposeComponent);
      };
      /***/

    },

    /***/
    "./src/app/apps/email/mail-detail/mail-detail.component.ngfactory.js":
    /*!***************************************************************************!*\
      !*** ./src/app/apps/email/mail-detail/mail-detail.component.ngfactory.js ***!
      \***************************************************************************/

    /*! exports provided: RenderType_MailDetailComponent, View_MailDetailComponent_0, View_MailDetailComponent_Host_0, MailDetailComponentNgFactory */

    /***/
    function srcAppAppsEmailMailDetailMailDetailComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MailDetailComponent", function () {
        return RenderType_MailDetailComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailDetailComponent_0", function () {
        return View_MailDetailComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailDetailComponent_Host_0", function () {
        return View_MailDetailComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailDetailComponentNgFactory", function () {
        return MailDetailComponentNgFactory;
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


      var _mail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mail-detail.component */
      "./src/app/apps/email/mail-detail/mail-detail.component.ts");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_MailDetailComponent = [];

      var RenderType_MailDetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MailDetailComponent,
        data: {}
      });

      function View_MailDetailComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "email text-truncate d-block w-75"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["<", ">"]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.mail.senderMail;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_MailDetailComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "section", [["class", "attachment"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h5", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["image-", ".jpg"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 457K \xA0\xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \xA0\xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Download"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.index + 1;

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_MailDetailComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "mail-attachments"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 11, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 8, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", " attachments"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \xA0-\xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Download all attachments"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\xA0\xA0\xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["View all Images"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MailDetailComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.mail.attachments;

          _ck(_v, 14, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.mail.attachments.length;

          _ck(_v, 6, 0, currVal_0);
        });
      }

      function View_MailDetailComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h4", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 12, "div", [["class", "d-flex mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "round mr-2 flex-shrink-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "span", [["class", "font-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MailDetailComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "span", [["class", "receiver"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["to me"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "span", [["class", "mail-date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](16, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "div", [["class", "mailbox-body"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MailDetailComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.mail.senderMail;

          _ck(_v, 11, 0, currVal_2);

          var currVal_5 = _co.mail.attachments.length > 0;

          _ck(_v, 19, 0, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.mail.subject;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.mail.sender;

          _ck(_v, 9, 0, currVal_1);

          var currVal_3 = _co.mail.date;

          _ck(_v, 16, 0, currVal_3);

          var currVal_4 = _co.mail.body;

          _ck(_v, 17, 0, currVal_4);
        });
      }

      function View_MailDetailComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MailDetailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.mail;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_MailDetailComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-mail-detail", [], null, null, null, View_MailDetailComponent_0, RenderType_MailDetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _mail_detail_component__WEBPACK_IMPORTED_MODULE_2__["MailDetailComponent"], [_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var MailDetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-mail-detail", _mail_detail_component__WEBPACK_IMPORTED_MODULE_2__["MailDetailComponent"], View_MailDetailComponent_Host_0, {}, {
        replyMessage: "replyMessage"
      }, []);
      /***/

    },

    /***/
    "./src/app/apps/email/mail-detail/mail-detail.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/email/mail-detail/mail-detail.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MailDetailComponent */

    /***/
    function srcAppAppsEmailMailDetailMailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailDetailComponent", function () {
        return MailDetailComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var MailDetailComponent = /*#__PURE__*/function () {
        function MailDetailComponent(service, route, router) {
          _classCallCheck(this, MailDetailComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.mail = undefined;
          this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(MailDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // this.route.params
            // .switchMap((params: Params) => this.service.getMail(+params['id']))
            // .subscribe((mail: Mail) => this.mail = mail);
            this.route.params.forEach(function (params) {
              if (params['id'] !== undefined) {
                var id = +params['id'];

                _this2.service.getMail(id).then(function (mail) {
                  return _this2.mail = mail;
                });
              }
            });
          }
        }, {
          key: "goToReply",
          value: function goToReply(mail) {
            this.replyMessage.emit(mail);
          }
        }, {
          key: "trash",
          value: function trash(id) {
            this.service.getMail(id).then(function (mail) {
              if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
              }
            });
            this.router.navigate(['apps/email/mail-list/inbox']);
          }
        }]);

        return MailDetailComponent;
      }();
      /***/

    },

    /***/
    "./src/app/apps/email/mail-list/mail-list.component.ngfactory.js":
    /*!***********************************************************************!*\
      !*** ./src/app/apps/email/mail-list/mail-list.component.ngfactory.js ***!
      \***********************************************************************/

    /*! exports provided: RenderType_MailListComponent, View_MailListComponent_0, View_MailListComponent_Host_0, MailListComponentNgFactory */

    /***/
    function srcAppAppsEmailMailListMailListComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MailListComponent", function () {
        return RenderType_MailListComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailListComponent_0", function () {
        return View_MailListComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailListComponent_Host_0", function () {
        return View_MailListComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailListComponentNgFactory", function () {
        return MailListComponentNgFactory;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _pipes_mail_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipes/mail-search.pipe */
      "./src/app/apps/email/pipes/mail-search.pipe.ts");
      /* harmony import */


      var _mail_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mail-list.component */
      "./src/app/apps/email/mail-list/mail-list.component.ts");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.state */
      "./src/app/apps/email/app.state.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_MailListComponent = [];

      var RenderType_MailListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MailListComponent,
        data: {}
      });

      function View_MailListComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mail-star width-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "i", [["class", "fa "]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.changeStarStatus(_v.parent.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, {
          "fa-star": 0,
          "fa-star-o": 1
        })], function (_ck, _v) {
          var currVal_0 = "fa ";

          var currVal_1 = _ck(_v, 3, 0, _v.parent.context.$implicit.starred, !_v.parent.context.$implicit.starred);

          _ck(_v, 2, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_MailListComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-paperclip"]], null, null, null, null, null))], null, null);
      }

      function View_MailListComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 21, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, {
          "unread": 0,
          "selected": 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 8, "td", [["class", "mail-checkbox pl-3 width-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 7, "div", [["class", "custom-control custom-checkbox mycustomcheckbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 5, "input", [["class", "custom-control-input"], ["type", "checkbox"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_v.context.$implicit.selected = $event) !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = _co.toggleOne() !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "label", [["class", "custom-control-label"]], [[1, "for", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MailListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "td", [["class", "sender"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToDetail(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "td", [["class", "subject"]], [[8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToDetail(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "td", [["class", "attachment"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToDetail(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MailListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "td", [["class", "date"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToDetail(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](21, null, ["", ""]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 2, 0, _v.context.$implicit.unread, _v.context.$implicit.selected);

          _ck(_v, 1, 0, currVal_0);

          var currVal_9 = _v.context.$implicit.selected;

          _ck(_v, 8, 0, currVal_9);

          var currVal_11 = _co.router.url != "/pages/mail/mail-list/trash";

          _ck(_v, 13, 0, currVal_11);

          var currVal_14 = _v.context.$implicit.attachment;

          _ck(_v, 19, 0, currVal_14);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "checkbox", _v.context.$implicit.id, "");

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPending;

          _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "checkbox", _v.context.$implicit.id, "");

          _ck(_v, 11, 0, currVal_10);

          var currVal_12 = _v.context.$implicit.sender;

          _ck(_v, 15, 0, currVal_12);

          var currVal_13 = _v.context.$implicit.subject;

          _ck(_v, 16, 0, currVal_13);

          var currVal_15 = _v.context.$implicit.date;

          _ck(_v, 21, 0, currVal_15);
        });
      }

      function View_MailListComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _pipes_mail_search_pipe__WEBPACK_IMPORTED_MODULE_3__["MailSearchPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 16, "div", [["class", "d-flex mailbox-header-bar p-3 bg-white align-items-center border-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 8, "div", [["class", "custom-control custom-checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 5, "input", [["class", "custom-control-input"], ["id", "toggle-all"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.isAllSelected = $event) !== false;
            ad = pd_2 && ad;
          }

          if ("click" === en) {
            var pd_3 = _co.toggleAll() !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "label", [["class", "custom-control-label"], ["for", "toggle-all"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Check all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 6, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 5, "input", [["class", "form-control form-control-sm"], ["id", "table-search-input"], ["placeholder", "Search mail..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.searchText = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 6, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 5, "table", [["class", "table table-hover no-wrap bg-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 3, null, View_MailListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](24, 2)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.isAllSelected;

          _ck(_v, 6, 0, currVal_7);

          var currVal_15 = _co.searchText;

          _ck(_v, 15, 0, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 22, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).transform(_co.mails)), _co.searchText));

          _ck(_v, 22, 0, currVal_16);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPending;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassUntouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassTouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPristine;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassDirty;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassValid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassInvalid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPending;

          _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        });
      }

      function View_MailListComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-inbox-list", [], null, null, null, View_MailListComponent_0, RenderType_MailListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _mail_list_component__WEBPACK_IMPORTED_MODULE_4__["MailListComponent"], [_mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_7__["AppState"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var MailListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-inbox-list", _mail_list_component__WEBPACK_IMPORTED_MODULE_4__["MailListComponent"], View_MailListComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/apps/email/mail-list/mail-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/apps/email/mail-list/mail-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: MailListComponent */

    /***/
    function srcAppAppsEmailMailListMailListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailListComponent", function () {
        return MailListComponent;
      });
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/add/operator/switchMap */
      "./node_modules/rxjs/add/operator/switchMap.js");
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.state */
      "./src/app/apps/email/app.state.ts");

      var MailListComponent = /*#__PURE__*/function () {
        function MailListComponent(service, route, router, state) {
          var _this3 = this;

          _classCallCheck(this, MailListComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.state = state;
          this.mails = null;
          this.type = null;
          this.isAllSelected = false;
          this.searchText = null;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this3.unSelectAll();

              _this3.searchText = '';
            }
          });
          this.state.subscribe('markAsRead', function () {
            _this3.markAllAsRead();
          });
          this.state.subscribe('markAsUnRead', function () {
            _this3.markAllAsUnRead();
          });
          this.state.subscribe('deleteChecked', function () {
            _this3.deleteAllCheckedMail();
          });
        }

        _createClass(MailListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMails();
          }
        }, {
          key: "getMails",
          value: function getMails() {
            var _this4 = this;

            this.mails = this.route.params.switchMap(function (params) {
              _this4.type = params['type'];

              switch (_this4.type) {
                case 'inbox':
                  return _this4.service.getInboxMails();

                case 'starred':
                  return _this4.service.getStarredMails();

                case 'sent':
                  return _this4.service.getSentMails();

                case 'drafts':
                  return _this4.service.getDraftMails();

                case 'trash':
                  return _this4.service.getTrashMails();

                default:
                  return _this4.service.getInboxMails();
              }
            });
          }
        }, {
          key: "toggleAll",
          value: function toggleAll() {
            var _a;

            var toggleStatus = !this.isAllSelected;
            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                mail.selected = toggleStatus;
              });
            });
          }
        }, {
          key: "toggleOne",
          value: function toggleOne() {
            var _this5 = this;

            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              _this5.isAllSelected = result.every(function (mail) {
                return mail.selected === true;
              });
            });
          }
        }, {
          key: "unSelectAll",
          value: function unSelectAll() {
            this.isAllSelected = false;

            if (this.mails) {
              this.mails.subscribe(function (result) {
                result.forEach(function (mail) {
                  mail.selected = false;
                });
              });
            }
          }
        }, {
          key: "markAllAsRead",
          value: function markAllAsRead() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.unread = false;
                }
              });
            });
          }
        }, {
          key: "markAllAsUnRead",
          value: function markAllAsUnRead() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.unread = true;
                }
              });
            });
          }
        }, {
          key: "deleteAllCheckedMail",
          value: function deleteAllCheckedMail() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.trash = true;
                  mail.sent = false;
                  mail.draft = false;
                  mail.starred = false;
                }
              });
            });
            this.getMails();
            this.isAllSelected = false;
          }
        }, {
          key: "goToDetail",
          value: function goToDetail(mail) {
            mail.unread = false;
            this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
          }
        }, {
          key: "changeStarStatus",
          value: function changeStarStatus(mail) {
            mail.starred = !mail.starred;
          }
        }]);

        return MailListComponent;
      }();
      /***/

    },

    /***/
    "./src/app/apps/email/mail.component.ngfactory.js":
    /*!********************************************************!*\
      !*** ./src/app/apps/email/mail.component.ngfactory.js ***!
      \********************************************************/

    /*! exports provided: RenderType_MailComponent, View_MailComponent_0, View_MailComponent_Host_0, MailComponentNgFactory */

    /***/
    function srcAppAppsEmailMailComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MailComponent", function () {
        return RenderType_MailComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailComponent_0", function () {
        return View_MailComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MailComponent_Host_0", function () {
        return View_MailComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComponentNgFactory", function () {
        return MailComponentNgFactory;
      });
      /* harmony import */


      var _mail_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mail.component.scss.ngstyle */
      "./src/app/apps/email/mail.component.scss.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _mail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mail.component */
      "./src/app/apps/email/mail.component.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.state */
      "./src/app/apps/email/app.state.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_MailComponent = [_mail_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_MailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MailComponent,
        data: {}
      });

      function View_MailComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "b-btn mr-1"], ["data-animation", "false"], ["data-placement", "top"], ["data-toggle", "tooltip"], ["title", "Delete"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-dark btn-sm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.trash() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-trash"]], null, null, null, null, null))], null, null);
      }

      function View_MailComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 119, "div", [["class", "email-container px-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 47, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "col-sm-3 col-md-3 col-lg-3 col-xlg-2 bg-white border-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "h2", [["class", "mb-0 pt-4 text-center font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Mailbox "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["class", "text-dark float-right custom-control-button"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openClleft() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "ti-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 41, "div", [["class", "col-sm-9 col-md-9 col-lg-9 col-xlg-10 bg-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 40, "div", [["class", "pb-3 pt-3 d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "b-btn mr-1"], ["data-animation", "false"], ["data-placement", "top"], ["data-toggle", "tooltip"]], [[4, "display", null], [8, "title", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "button", [["class", "btn btn-dark btn-sm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.getBack() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "fa fa-arrow-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "div", [["class", "b-btn mr-1"], ["data-animation", "false"], ["data-placement", "top"], ["data-toggle", "tooltip"], ["title", "Refresh"]], [[4, "display", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["class", "btn btn-dark btn-sm"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "span", [["class", "fa fa-refresh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 16, "div", [["class", "btn-group"], ["ngbDropdown", ""]], [[4, "display", null], [2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1720320, null, 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _menu: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          _anchor: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "button", [["aria-controls", "dropdown-basic"], ["class", "btn btn-warning btn-sm dropdown-toggle"], ["ngbDropdownToggle", ""], ["type", "button"]], [[1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.toggle() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.ArrowUp" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("keydown.ArrowDown" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false;
            ad = pd_2 && ad;
          }

          if ("keydown.Home" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false;
            ad = pd_3 && ad;
          }

          if ("keydown.End" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false;
            ad = pd_4 && ad;
          }

          if ("keydown.Tab" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false;
            ad = pd_5 && ad;
          }

          if ("keydown.Shift.Tab" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" More "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 8, "div", [["class", ""], ["id", "dropdown-basic"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], [[null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Enter"], [null, "keydown.Space"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
          var ad = true;

          if ("keydown.ArrowUp" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.ArrowDown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("keydown.Home" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_2 && ad;
          }

          if ("keydown.End" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_3 && ad;
          }

          if ("keydown.Enter" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_4 && ad;
          }

          if ("keydown.Space" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_5 && ad;
          }

          if ("keydown.Tab" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_6 && ad;
          }

          if ("keydown.Shift.Tab" === en) {
            var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.onKeyDown($event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, [[1, 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          menuItems: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "a", [["class", "dropdown-item"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.setAsRead() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mark as read"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "a", [["class", "dropdown-item"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.setAsUnRead() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mark as unread"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "a", [["class", "dropdown-item"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deleteCheckedMail() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Delete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 14, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 8, "span", [["class", "mr-1 text-dark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u2013"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 4, "div", [["class", "btn-group btn-group-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "button", [["class", "btn btn-dark"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "span", [["class", "fa fa-chevron-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "button", [["class", "btn btn-dark"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "span", [["class", "fa fa-chevron-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 70, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 65, "div", [["class", "col-md-3 col-lg-3 col-xlg-2 bg-white border-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 64, "div", [["class", "inbox-panel p-2 bg-white"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 3, "a", [["class", "btn btn-danger rounded-pill btn-block mt-3"], ["role", "button"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](55, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COMPOSE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 58, "div", [["class", "mailbox bg-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 57, "ul", [["class", "list-group custom-group message-center"], ["style", "height: unset;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 2, "li", [["class", "py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "h6", [["class", "font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mailbox"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 8, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 7, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](65, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 0, "i", [["class", "fa-inbox fa font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inbox "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 2, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "span", [["class", "badge badge-info badge-pill"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 5, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 4, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](74, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "i", [["class", "fa-paper-plane fa font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Sent Mail "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 8, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 7, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](80, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 0, "i", [["class", "fa-archive fa font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Drafts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 2, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "span", [["class", "badge badge-info badge-pill"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 5, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 4, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](89, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 0, "i", [["class", "fa-history fa font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Trash "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 2, "li", [["class", "py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "h6", [["class", "font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Filters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 5, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 4, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](98, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 0, "i", [["class", "fa fa-star font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Starred "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 2, "li", [["class", "py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 1, "h6", [["class", "font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Labels"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 3, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 2, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 0, "i", [["class", "fa fa-circle text-danger font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Notes "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 3, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 2, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 0, "i", [["class", "fa fa-circle text-warning font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Personal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 3, "li", [["class", "list-group-item p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 2, "a", [["class", "message-item d-flex align-items-center border-0 py-3 font-weight-normal"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 0, "i", [["class", "fa fa-circle text-info font-18 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Travel "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 3, "div", [["class", "col-md-9 col-lg-9 col-xlg-10 bg-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 2, "div", [["class", "inbox-right-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](119, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.id;

          _ck(_v, 13, 0, currVal_2);

          var currVal_10 = "inbox-panel p-2 bg-white";
          var currVal_11 = _co.status ? "showlpanel" : "";

          _ck(_v, 52, 0, currVal_10, currVal_11);

          var currVal_14 = _ck(_v, 55, 0, "mail-compose");

          _ck(_v, 54, 0, currVal_14);

          var currVal_17 = _ck(_v, 65, 0, "mail-list/inbox");

          _ck(_v, 64, 0, currVal_17);

          var currVal_20 = _ck(_v, 74, 0, "mail-list/sent");

          _ck(_v, 73, 0, currVal_20);

          var currVal_23 = _ck(_v, 80, 0, "mail-list/drafts");

          _ck(_v, 79, 0, currVal_23);

          var currVal_26 = _ck(_v, 89, 0, "mail-list/trash");

          _ck(_v, 88, 0, currVal_26);

          var currVal_29 = _ck(_v, 98, 0, "mail-list/starred");

          _ck(_v, 97, 0, currVal_29);

          _ck(_v, 119, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.id || !_co.type ? "inline-block" : "none";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "Back to ", _co.type, "");

          _ck(_v, 9, 0, currVal_0, currVal_1);

          var currVal_3 = _co.router.url == "/apps/email/mail-compose" || _co.id ? "none" : "inline-block";

          _ck(_v, 14, 0, currVal_3);

          var currVal_4 = _co.router.url == "/apps/email/mail-compose" ? "none" : "block";

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).isOpen();

          _ck(_v, 17, 0, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).dropdown.isOpen();

          _ck(_v, 21, 0, currVal_6);

          var currVal_7 = true;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dropdown.isOpen();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).placement;

          _ck(_v, 25, 0, currVal_7, currVal_8, currVal_9);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).target;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).href;

          _ck(_v, 53, 0, currVal_12, currVal_13);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).target;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).href;

          _ck(_v, 63, 0, currVal_15, currVal_16);

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).target;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).href;

          _ck(_v, 72, 0, currVal_18, currVal_19);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).target;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).href;

          _ck(_v, 78, 0, currVal_21, currVal_22);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).target;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).href;

          _ck(_v, 87, 0, currVal_24, currVal_25);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).target;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).href;

          _ck(_v, 96, 0, currVal_27, currVal_28);
        });
      }

      function View_MailComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-mail", [], null, null, null, View_MailComponent_0, RenderType_MailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"], _mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"], [_mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_7__["AppState"]], null, null)], null, null);
      }

      var MailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-mail", _mail_component__WEBPACK_IMPORTED_MODULE_6__["MailComponent"], View_MailComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/apps/email/mail.component.scss.ngstyle.js":
    /*!***********************************************************!*\
      !*** ./src/app/apps/email/mail.component.scss.ngstyle.js ***!
      \***********************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppAppsEmailMailComponentScssNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".email-container {\n  overflow: hidden;\n}\n\n.email-container .unread {\n  font-weight: 800;\n}\n\n.email-container .mail-star .fa-star {\n  color: #f9a913;\n}\n\n.email-container .inbox-right-panel,\n.email-container .inbox-panel {\n  min-height: calc(100vh - 300px);\n}\n\n.email-container .inbox-right-panel {\n  margin: 0 -10px;\n}\n\n.email-container .inbox-right-panel .table tr {\n  cursor: pointer;\n}\n\n.email-container .subject,\n.email-container .sender {\n  max-width: 350px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.email-container .sender {\n  max-width: 150px;\n}\n\n.email-container .custom-control-button {\n  display: none;\n}\n\n.email-container .width-50 {\n  width: 50px;\n}\n\n.email-container .custom-group .list-group-item {\n  border: 0px;\n  padding: 0.75rem 0.25rem;\n}\n\n.email-container .custom-group .list-group-item a {\n  color: #3e556a;\n}\n\n@media (max-width: 767px) {\n  .email-container .inbox-panel {\n    position: absolute;\n    width: 200px;\n    min-height: 100vh;\n    height: 100%;\n    background: white;\n    left: -202px;\n    z-index: 10;\n    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n    padding: 0 10px;\n  }\n  .email-container .inbox-panel.showlpanel {\n    left: 0px;\n  }\n  .email-container .custom-control-button {\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUZBO0VBSUksZ0JBQWdCO0FBRXBCOztBQU5BO0VBT0ksY0FBYztBQUdsQjs7QUFWQTs7RUFXSSwrQkFBK0I7QUFJbkM7O0FBZkE7RUFjSSxlQUFlO0FBS25COztBQW5CQTtFQWdCTSxlQUFlO0FBT3JCOztBQXZCQTs7RUFxQkksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFPM0I7O0FBOUJBO0VBMEJJLGdCQUFnQjtBQVFwQjs7QUFsQ0E7RUE2QkksYUFBYTtBQVNqQjs7QUF0Q0E7RUFpQ0ksV0FBVztBQVNmOztBQTFDQTtFQXFDTSxXQUFXO0VBQ1gsd0JBQXdCO0FBUzlCOztBQS9DQTtFQXdDUSxjQUFjO0FBV3RCOztBQVBFO0VBNUNGO0lBOENNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtFQVVuQjtFQWhFRjtJQXdEUSxTQUFTO0VBV2Y7RUFuRUY7SUE2RE0sY0FBYztFQVNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnVucmVhZCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICAubWFpbC1zdGFyIC5mYS1zdGFyIHtcclxuICAgIGNvbG9yOiAjZjlhOTEzO1xyXG4gIH1cclxuICAuaW5ib3gtcmlnaHQtcGFuZWwsXHJcbiAgLmluYm94LXBhbmVsIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XHJcbiAgfVxyXG4gIC5pbmJveC1yaWdodC1wYW5lbCB7XHJcbiAgICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgICAudGFibGUgdHIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdWJqZWN0LFxyXG4gIC5zZW5kZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLnNlbmRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuY3VzdG9tLWNvbnRyb2wtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAud2lkdGgtNTAge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5jdXN0b20tZ3JvdXAge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDAuMjVyZW07XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjM2U1NTZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmluYm94LXBhbmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBsZWZ0OiAtMjAycHg7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAmLnNob3dscGFuZWwge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20tY29udHJvbC1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"];
      /***/
    },

    /***/
    "./src/app/apps/email/mail.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/apps/email/mail.component.ts ***!
      \**********************************************/

    /*! exports provided: MailComponent */

    /***/
    function srcAppAppsEmailMailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComponent", function () {
        return MailComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.state */
      "./src/app/apps/email/app.state.ts");

      var MailComponent = /*#__PURE__*/function () {
        function MailComponent(service, route, router, state) {
          var _this6 = this;

          _classCallCheck(this, MailComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.state = state;
          this.mails = Object.create(null);
          this.id = 0;
          this.type = null;
          this.markAsRead = '';
          this.markAsUnRead = '';
          this.deleteChecked = '';
          this.status = false;
          this.router.events.subscribe(function (event) {
            var _a, _b, _c, _d, _e, _f;

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
              _this6.id = (_c = (_b = (_a = _this6.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.params['id'];
              _this6.type = (_f = (_e = (_d = _this6.route) === null || _d === void 0 ? void 0 : _d.snapshot) === null || _e === void 0 ? void 0 : _e.firstChild) === null || _f === void 0 ? void 0 : _f.params['type'];
              setTimeout(function () {// jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
              });
            }
          });
        }

        _createClass(MailComponent, [{
          key: "getBack",
          value: function getBack() {
            if (this.type) {
              this.router.navigate(['apps/email/mail-list/' + this.type]);
            } else {
              this.router.navigate(['apps/email/mail-list/inbox']);
            }
          }
        }, {
          key: "trash",
          value: function trash() {
            // jQuery('[data-toggle="tooltip"]').tooltip('hide');
            this.service.getMail(this.id).then(function (mail) {
              if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
              }
            });
            this.router.navigate(['apps/email/mail-list/inbox']);
          }
        }, {
          key: "setAsRead",
          value: function setAsRead() {
            this.markAsRead = this.markAsRead;
            this.state.notifyDataChanged('markAsRead', this.markAsRead);
          }
        }, {
          key: "setAsUnRead",
          value: function setAsUnRead() {
            this.markAsUnRead = this.markAsUnRead;
            this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
          }
        }, {
          key: "deleteCheckedMail",
          value: function deleteCheckedMail() {
            this.deleteChecked = this.deleteChecked;
            this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
          }
        }, {
          key: "openClleft",
          value: function openClleft() {
            this.status = !this.status;
          }
        }]);

        return MailComponent;
      }();
      /***/

    },

    /***/
    "./src/app/apps/email/mail.module.ngfactory.js":
    /*!*****************************************************!*\
      !*** ./src/app/apps/email/mail.module.ngfactory.js ***!
      \*****************************************************/

    /*! exports provided: MailModuleNgFactory */

    /***/
    function srcAppAppsEmailMailModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailModuleNgFactory", function () {
        return MailModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _mail_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mail.module */
      "./src/app/apps/email/mail.module.ts");
      /* harmony import */


      var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
      "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _mail_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mail.component.ngfactory */
      "./src/app/apps/email/mail.component.ngfactory.js");
      /* harmony import */


      var _mail_list_mail_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mail-list/mail-list.component.ngfactory */
      "./src/app/apps/email/mail-list/mail-list.component.ngfactory.js");
      /* harmony import */


      var _mail_compose_mail_compose_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mail-compose/mail-compose.component.ngfactory */
      "./src/app/apps/email/mail-compose/mail-compose.component.ngfactory.js");
      /* harmony import */


      var _mail_detail_mail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mail-detail/mail-detail.component.ngfactory */
      "./src/app/apps/email/mail-detail/mail-detail.component.ngfactory.js");
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


      var _app_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.state */
      "./src/app/apps/email/app.state.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "./src/app/apps/email/pipes/pipes.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _mail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./mail.component */
      "./src/app/apps/email/mail.component.ts");
      /* harmony import */


      var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./mail-list/mail-list.component */
      "./src/app/apps/email/mail-list/mail-list.component.ts");
      /* harmony import */


      var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./mail-compose/mail-compose.component */
      "./src/app/apps/email/mail-compose/mail-compose.component.ts");
      /* harmony import */


      var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./mail-detail/mail-detail.component */
      "./src/app/apps/email/mail-detail/mail-detail.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var MailModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_mail_module__WEBPACK_IMPORTED_MODULE_1__["MailModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _mail_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MailComponentNgFactory"], _mail_list_mail_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MailListComponentNgFactory"], _mail_compose_mail_compose_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MailComposeComponentNgFactory"], _mail_detail_mail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MailDetailComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _app_state__WEBPACK_IMPORTED_MODULE_11__["AppState"], _app_state__WEBPACK_IMPORTED_MODULE_11__["AppState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _mail_module__WEBPACK_IMPORTED_MODULE_1__["MailModule"], _mail_module__WEBPACK_IMPORTED_MODULE_1__["MailModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], function () {
          return [[{
            path: "",
            component: _mail_component__WEBPACK_IMPORTED_MODULE_14__["MailComponent"],
            children: [{
              path: "",
              redirectTo: "mail-list/inbox",
              pathMatch: "full"
            }, {
              path: "mail-list/:type",
              component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_15__["MailListComponent"]
            }, {
              path: "mail-compose",
              component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_16__["MailComposeComponent"]
            }, {
              path: "mail-list/:type/:id",
              component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_17__["MailDetailComponent"]
            }]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "./src/app/apps/email/mail.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/apps/email/mail.module.ts ***!
      \*******************************************/

    /*! exports provided: routes, MailModule */

    /***/
    function srcAppAppsEmailMailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailModule", function () {
        return MailModule;
      });
      /* harmony import */


      var _mail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mail.component */
      "./src/app/apps/email/mail.component.ts");
      /* harmony import */


      var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mail-compose/mail-compose.component */
      "./src/app/apps/email/mail-compose/mail-compose.component.ts");
      /* harmony import */


      var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mail-list/mail-list.component */
      "./src/app/apps/email/mail-list/mail-list.component.ts");
      /* harmony import */


      var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mail-detail/mail-detail.component */
      "./src/app/apps/email/mail-detail/mail-detail.component.ts");

      var routes = [{
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_0__["MailComponent"],
        children: [{
          path: '',
          redirectTo: 'mail-list/inbox',
          pathMatch: 'full'
        }, {
          path: 'mail-list/:type',
          component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_2__["MailListComponent"]
        }, {
          path: 'mail-compose',
          component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_1__["MailComposeComponent"]
        }, {
          path: 'mail-list/:type/:id',
          component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_3__["MailDetailComponent"]
        }]
      }];

      var MailModule = function MailModule() {
        _classCallCheck(this, MailModule);
      };
      /***/

    },

    /***/
    "./src/app/apps/email/mail.service.ts":
    /*!********************************************!*\
      !*** ./src/app/apps/email/mail.service.ts ***!
      \********************************************/

    /*! exports provided: Mail, MailService */

    /***/
    function srcAppAppsEmailMailServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mail", function () {
        return Mail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailService", function () {
        return MailService;
      });

      var Mail = function Mail(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        _classCallCheck(this, Mail);

        this.id = id;
        this.sender = sender;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
      };

      var Mails = [new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false), new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', true, ['assets/images/product/chair.png', 'assets/images/product/chair2.png'], true, false, true, false, false, false), new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false), new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false), new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. ', false, [], false, false, false, true, false, false), new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, true, false, false, false), new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, true, false, false, false, false), new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false)];
      var mailsPromise = Promise.resolve(Mails);

      var MailService = /*#__PURE__*/function () {
        function MailService() {
          _classCallCheck(this, MailService);
        }

        _createClass(MailService, [{
          key: "getInboxMails",
          value: function getInboxMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.sent === false && mail.draft === false && mail.trash === false;
              });
            });
          }
        }, {
          key: "getStarredMails",
          value: function getStarredMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.starred === true;
              });
            });
          }
        }, {
          key: "getSentMails",
          value: function getSentMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.sent === true;
              });
            });
          }
        }, {
          key: "getDraftMails",
          value: function getDraftMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.draft === true;
              });
            });
          }
        }, {
          key: "getTrashMails",
          value: function getTrashMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.trash === true;
              });
            });
          }
        }, {
          key: "getMail",
          value: function getMail(id) {
            return mailsPromise.then(function (mails) {
              return mails.find(function (mail) {
                return mail.id === +id;
              });
            });
          }
        }]);

        return MailService;
      }();
      /***/

    },

    /***/
    "./src/app/apps/email/pipes/mail-search.pipe.ts":
    /*!******************************************************!*\
      !*** ./src/app/apps/email/pipes/mail-search.pipe.ts ***!
      \******************************************************/

    /*! exports provided: MailSearchPipe */

    /***/
    function srcAppAppsEmailPipesMailSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function () {
        return MailSearchPipe;
      });

      var MailSearchPipe = /*#__PURE__*/function () {
        function MailSearchPipe() {
          _classCallCheck(this, MailSearchPipe);
        }

        _createClass(MailSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                  if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                    return true;
                  }
                }
              });
            }
          }
        }]);

        return MailSearchPipe;
      }();
      /***/

    },

    /***/
    "./src/app/apps/email/pipes/pipes.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/apps/email/pipes/pipes.module.ts ***!
      \**************************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppAppsEmailPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=apps-email-mail-module-ngfactory-es5.js.map