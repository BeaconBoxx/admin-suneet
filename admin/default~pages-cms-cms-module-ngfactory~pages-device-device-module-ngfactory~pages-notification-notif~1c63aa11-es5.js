(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cms-cms-module-ngfactory~pages-device-device-module-ngfactory~pages-notification-notif~1c63aa11"], {
    /***/
    "./node_modules/@angular/cdk/fesm2015/collections.js":
    /*!***********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/collections.js ***!
      \***********************************************************/

    /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

    /***/
    function node_modulesAngularCdkFesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
        return ArrayDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSource", function () {
        return DataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
        return SelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
        return UniqueSelectionDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
        return getMultipleValuesInSingleSelectionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
        return isDataSource;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DataSource = function DataSource() {
        _classCallCheck(this, DataSource);
      };
      /** Checks whether an object is a data source. */


      function isDataSource(value) {
        // Check if the value is a DataSource by observing if it has a connect function. Cannot
        // be checked as an `instanceof DataSource` since people could create their own sources
        // that match the interface, but don't extend DataSource.
        return value && typeof value.connect === 'function';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** DataSource wrapper for a native array. */


      var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
        _inherits(ArrayDataSource, _DataSource);

        var _super = _createSuper(ArrayDataSource);

        function ArrayDataSource(_data) {
          var _this;

          _classCallCheck(this, ArrayDataSource);

          _this = _super.call(this);
          _this._data = _data;
          return _this;
        }

        _createClass(ArrayDataSource, [{
          key: "connect",
          value: function connect() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return ArrayDataSource;
      }(DataSource);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to be used to power selecting one or more options from a list.
       */


      var SelectionModel = /*#__PURE__*/function () {
        function SelectionModel() {
          var _this2 = this;

          var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

          var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          _classCallCheck(this, SelectionModel);

          this._multiple = _multiple;
          this._emitChanges = _emitChanges;
          /** Currently-selected values. */

          this._selection = new Set();
          /** Keeps track of the deselected options that haven't been emitted by the change event. */

          this._deselectedToEmit = [];
          /** Keeps track of the selected options that haven't been emitted by the change event. */

          this._selectedToEmit = [];
          /** Event emitted when the value has changed. */

          this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
              initiallySelectedValues.forEach(function (value) {
                return _this2._markSelected(value);
              });
            } else {
              this._markSelected(initiallySelectedValues[0]);
            } // Clear the array in order to avoid firing the change event for preselected values.


            this._selectedToEmit.length = 0;
          }
        }
        /** Selected values. */


        _createClass(SelectionModel, [{
          key: "select",

          /**
           * Selects a value or an array of values.
           */
          value: function select() {
            var _this3 = this;

            for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
              values[_key] = arguments[_key];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this3._markSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Deselects a value or an array of values.
           */

        }, {
          key: "deselect",
          value: function deselect() {
            var _this4 = this;

            for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              values[_key2] = arguments[_key2];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this4._unmarkSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Toggles a value between selected and deselected.
           */

        }, {
          key: "toggle",
          value: function toggle(value) {
            this.isSelected(value) ? this.deselect(value) : this.select(value);
          }
          /**
           * Clears all of the selected values.
           */

        }, {
          key: "clear",
          value: function clear() {
            this._unmarkAll();

            this._emitChangeEvent();
          }
          /**
           * Determines whether a value is selected.
           */

        }, {
          key: "isSelected",
          value: function isSelected(value) {
            return this._selection.has(value);
          }
          /**
           * Determines whether the model does not have a value.
           */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._selection.size === 0;
          }
          /**
           * Determines whether the model has a value.
           */

        }, {
          key: "hasValue",
          value: function hasValue() {
            return !this.isEmpty();
          }
          /**
           * Sorts the selected values based on a predicate function.
           */

        }, {
          key: "sort",
          value: function sort(predicate) {
            if (this._multiple && this.selected) {
              this._selected.sort(predicate);
            }
          }
          /**
           * Gets whether multiple values can be selected.
           */

        }, {
          key: "isMultipleSelection",
          value: function isMultipleSelection() {
            return this._multiple;
          }
          /** Emits a change event and clears the records of selected and deselected values. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            // Clear the selected values so they can be re-cached.
            this._selected = null;

            if (this._selectedToEmit.length || this._deselectedToEmit.length) {
              this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
              });
              this._deselectedToEmit = [];
              this._selectedToEmit = [];
            }
          }
          /** Selects a value. */

        }, {
          key: "_markSelected",
          value: function _markSelected(value) {
            if (!this.isSelected(value)) {
              if (!this._multiple) {
                this._unmarkAll();
              }

              this._selection.add(value);

              if (this._emitChanges) {
                this._selectedToEmit.push(value);
              }
            }
          }
          /** Deselects a value. */

        }, {
          key: "_unmarkSelected",
          value: function _unmarkSelected(value) {
            if (this.isSelected(value)) {
              this._selection["delete"](value);

              if (this._emitChanges) {
                this._deselectedToEmit.push(value);
              }
            }
          }
          /** Clears out the selected values. */

        }, {
          key: "_unmarkAll",
          value: function _unmarkAll() {
            var _this5 = this;

            if (!this.isEmpty()) {
              this._selection.forEach(function (value) {
                return _this5._unmarkSelected(value);
              });
            }
          }
          /**
           * Verifies the value assignment and throws an error if the specified value array is
           * including multiple values while the selection model is not supporting multiple values.
           */

        }, {
          key: "_verifyValueAssignment",
          value: function _verifyValueAssignment(values) {
            if (values.length > 1 && !this._multiple) {
              throw getMultipleValuesInSingleSelectionError();
            }
          }
        }, {
          key: "selected",
          get: function get() {
            if (!this._selected) {
              this._selected = Array.from(this._selection.values());
            }

            return this._selected;
          }
        }]);

        return SelectionModel;
      }();
      /**
       * Returns an error that reports that multiple values are passed into a selection model
       * with a single value.
       * @docs-private
       */


      function getMultipleValuesInSingleSelectionError() {
        return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to coordinate unique selection based on name.
       * Intended to be consumed as an Angular service.
       * This service is needed because native radio change events are only fired on the item currently
       * being selected, and we still need to uncheck the previous selection.
       *
       * This service does not *store* any IDs and names because they may change at any time, so it is
       * less error-prone if they are simply passed through when the events occur.
       */


      var UniqueSelectionDispatcher = /*#__PURE__*/function () {
        function UniqueSelectionDispatcher() {
          _classCallCheck(this, UniqueSelectionDispatcher);

          this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param id ID of the item.
         * @param name Name of the item.
         */


        _createClass(UniqueSelectionDispatcher, [{
          key: "notify",
          value: function notify(id, name) {
            var _iterator = _createForOfIteratorHelper(this._listeners),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var listener = _step.value;
                listener(id, name);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Listen for future changes to item selection.
           * @return Function used to deregister listener
           */

        }, {
          key: "listen",
          value: function listen(listener) {
            var _this6 = this;

            this._listeners.push(listener);

            return function () {
              _this6._listeners = _this6._listeners.filter(function (registered) {
                return listener !== registered;
              });
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._listeners = [];
          }
        }]);

        return UniqueSelectionDispatcher;
      }();

      UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
        return new (t || UniqueSelectionDispatcher)();
      };

      UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function UniqueSelectionDispatcher_Factory() {
          return new UniqueSelectionDispatcher();
        },
        token: UniqueSelectionDispatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=collections.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/fesm2015/portal.js":
    /*!******************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/portal.js ***!
      \******************************************************/

    /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

    /***/
    function node_modulesAngularCdkFesm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
        return BasePortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
        return BasePortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
        return CdkPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
        return CdkPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
        return ComponentPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
        return DomPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
        return DomPortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
        return DomPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Portal", function () {
        return Portal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
        return PortalHostDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
        return PortalInjector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
        return PortalModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
        return TemplatePortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
        return TemplatePortalDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception when attempting to attach a null portal to a host.
       * @docs-private
       */


      function throwNullPortalError() {
        throw Error('Must provide a portal to attach');
      }
      /**
       * Throws an exception when attempting to attach a portal to a host that is already attached.
       * @docs-private
       */


      function throwPortalAlreadyAttachedError() {
        throw Error('Host already has a portal attached');
      }
      /**
       * Throws an exception when attempting to attach a portal to an already-disposed host.
       * @docs-private
       */


      function throwPortalOutletAlreadyDisposedError() {
        throw Error('This PortalOutlet has already been disposed');
      }
      /**
       * Throws an exception when attempting to attach an unknown portal type.
       * @docs-private
       */


      function throwUnknownPortalTypeError() {
        throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
      }
      /**
       * Throws an exception when attempting to attach a portal to a null host.
       * @docs-private
       */


      function throwNullPortalOutletError() {
        throw Error('Attempting to attach a portal to a null PortalOutlet');
      }
      /**
       * Throws an exception when attempting to detach a portal that is not attached.
       * @docs-private
       */


      function throwNoPortalAttachedError() {
        throw Error('Attempting to detach a portal that is not attached to a host');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A `Portal` is something that you want to render somewhere else.
       * It can be attach to / detached from a `PortalOutlet`.
       */


      var Portal = /*#__PURE__*/function () {
        function Portal() {
          _classCallCheck(this, Portal);
        }

        _createClass(Portal, [{
          key: "attach",

          /** Attach this portal to a host. */
          value: function attach(host) {
            if (host == null) {
              throwNullPortalOutletError();
            }

            if (host.hasAttached()) {
              throwPortalAlreadyAttachedError();
            }

            this._attachedHost = host;
            return host.attach(this);
          }
          /** Detach this portal from its host */

        }, {
          key: "detach",
          value: function detach() {
            var host = this._attachedHost;

            if (host == null) {
              throwNoPortalAttachedError();
            } else {
              this._attachedHost = null;
              host.detach();
            }
          }
          /** Whether this portal is attached to a host. */

        }, {
          key: "setAttachedHost",

          /**
           * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
           * the PortalOutlet when it is performing an `attach()` or `detach()`.
           */
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
        }]);

        return Portal;
      }();
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       */


      var ComponentPortal = /*#__PURE__*/function (_Portal) {
        _inherits(ComponentPortal, _Portal);

        var _super2 = _createSuper(ComponentPortal);

        function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
          var _this7;

          _classCallCheck(this, ComponentPortal);

          _this7 = _super2.call(this);
          _this7.component = component;
          _this7.viewContainerRef = viewContainerRef;
          _this7.injector = injector;
          _this7.componentFactoryResolver = componentFactoryResolver;
          return _this7;
        }

        return ComponentPortal;
      }(Portal);
      /**
       * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
       */


      var TemplatePortal = /*#__PURE__*/function (_Portal2) {
        _inherits(TemplatePortal, _Portal2);

        var _super3 = _createSuper(TemplatePortal);

        function TemplatePortal(template, viewContainerRef, context) {
          var _this8;

          _classCallCheck(this, TemplatePortal);

          _this8 = _super3.call(this);
          _this8.templateRef = template;
          _this8.viewContainerRef = viewContainerRef;
          _this8.context = context;
          return _this8;
        }

        _createClass(TemplatePortal, [{
          key: "attach",

          /**
           * Attach the portal to the provided `PortalOutlet`.
           * When a context is provided it will override the `context` property of the `TemplatePortal`
           * instance.
           */
          value: function attach(host) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
            this.context = context;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
          }
        }, {
          key: "detach",
          value: function detach() {
            this.context = undefined;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
          }
        }, {
          key: "origin",
          get: function get() {
            return this.templateRef.elementRef;
          }
        }]);

        return TemplatePortal;
      }(Portal);
      /**
       * A `DomPortal` is a portal whose DOM element will be taken from its current position
       * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
       * will be restored to its original position.
       */


      var DomPortal = /*#__PURE__*/function (_Portal3) {
        _inherits(DomPortal, _Portal3);

        var _super4 = _createSuper(DomPortal);

        function DomPortal(element) {
          var _this9;

          _classCallCheck(this, DomPortal);

          _this9 = _super4.call(this);
          _this9.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
          return _this9;
        }

        return DomPortal;
      }(Portal);
      /**
       * Partial implementation of PortalOutlet that handles attaching
       * ComponentPortal and TemplatePortal.
       */


      var BasePortalOutlet = /*#__PURE__*/function () {
        function BasePortalOutlet() {
          _classCallCheck(this, BasePortalOutlet);

          /** Whether this host has already been permanently disposed. */
          this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

          this.attachDomPortal = null;
        }
        /** Whether this host has an attached portal. */


        _createClass(BasePortalOutlet, [{
          key: "hasAttached",
          value: function hasAttached() {
            return !!this._attachedPortal;
          }
          /** Attaches a portal. */

        }, {
          key: "attach",
          value: function attach(portal) {
            if (!portal) {
              throwNullPortalError();
            }

            if (this.hasAttached()) {
              throwPortalAlreadyAttachedError();
            }

            if (this._isDisposed) {
              throwPortalOutletAlreadyDisposedError();
            }

            if (portal instanceof ComponentPortal) {
              this._attachedPortal = portal;
              return this.attachComponentPortal(portal);
            } else if (portal instanceof TemplatePortal) {
              this._attachedPortal = portal;
              return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
            } else if (this.attachDomPortal && portal instanceof DomPortal) {
              this._attachedPortal = portal;
              return this.attachDomPortal(portal);
            }

            throwUnknownPortalTypeError();
          }
          /** Detaches a previously attached portal. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost(null);

              this._attachedPortal = null;
            }

            this._invokeDisposeFn();
          }
          /** Permanently dispose of this portal host. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.hasAttached()) {
              this.detach();
            }

            this._invokeDisposeFn();

            this._isDisposed = true;
          }
          /** @docs-private */

        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
        }, {
          key: "_invokeDisposeFn",
          value: function _invokeDisposeFn() {
            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = null;
            }
          }
        }]);

        return BasePortalOutlet;
      }();
      /**
       * @deprecated Use `BasePortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
        _inherits(BasePortalHost, _BasePortalOutlet);

        var _super5 = _createSuper(BasePortalHost);

        function BasePortalHost() {
          _classCallCheck(this, BasePortalHost);

          return _super5.apply(this, arguments);
        }

        return BasePortalHost;
      }(BasePortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       */


      var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
        _inherits(DomPortalOutlet, _BasePortalOutlet2);

        var _super6 = _createSuper(DomPortalOutlet);

        function DomPortalOutlet(
        /** Element into which the content is projected. */
        outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
        /**
         * @deprecated `_document` Parameter to be made required.
         * @breaking-change 10.0.0
         */
        _document) {
          var _thisSuper, _this10;

          _classCallCheck(this, DomPortalOutlet);

          _this10 = _super6.call(this);
          _this10.outletElement = outletElement;
          _this10._componentFactoryResolver = _componentFactoryResolver;
          _this10._appRef = _appRef;
          _this10._defaultInjector = _defaultInjector;
          /**
           * Attaches a DOM portal by transferring its content into the outlet.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this10.attachDomPortal = function (portal) {
            // @breaking-change 10.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this10._document) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this10._document.createComment('dom-portal');

            element.parentNode.insertBefore(anchorNode, element);

            _this10.outletElement.appendChild(element);

            _get((_thisSuper = _assertThisInitialized(_this10), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper, function () {
              // We can't use `replaceWith` here because IE doesn't support it.
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this10._document = _document;
          return _this10;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         * @returns Reference to the created component.
         */


        _createClass(DomPortalOutlet, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            var _this11 = this;

            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the view to the application.

            if (portal.viewContainerRef) {
              componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
              this.setDisposeFn(function () {
                return componentRef.destroy();
              });
            } else {
              componentRef = componentFactory.create(portal.injector || this._defaultInjector);

              this._appRef.attachView(componentRef.hostView);

              this.setDisposeFn(function () {
                _this11._appRef.detachView(componentRef.hostView);

                componentRef.destroy();
              });
            } // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.


            this.outletElement.appendChild(this._getComponentRootNode(componentRef));
            return componentRef;
          }
          /**
           * Attaches a template portal to the DOM as an embedded view.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this12 = this;

            var viewContainer = portal.viewContainerRef;
            var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
            // But for the DomPortalOutlet the view can be added everywhere in the DOM
            // (e.g Overlay Container) To move the view to the specified host element. We just
            // re-append the existing root nodes.

            viewRef.rootNodes.forEach(function (rootNode) {
              return _this12.outletElement.appendChild(rootNode);
            }); // Note that we want to detect changes after the nodes have been moved so that
            // any directives inside the portal that are looking at the DOM inside a lifecycle
            // hook won't be invoked too early.

            viewRef.detectChanges();
            this.setDisposeFn(function () {
              var index = viewContainer.indexOf(viewRef);

              if (index !== -1) {
                viewContainer.remove(index);
              }
            }); // TODO(jelbourn): Return locals from view.

            return viewRef;
          }
          /**
           * Clears out a portal from the DOM.
           */

        }, {
          key: "dispose",
          value: function dispose() {
            _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

            if (this.outletElement.parentNode != null) {
              this.outletElement.parentNode.removeChild(this.outletElement);
            }
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return DomPortalOutlet;
      }(BasePortalOutlet);
      /**
       * @deprecated Use `DomPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
        _inherits(DomPortalHost, _DomPortalOutlet);

        var _super7 = _createSuper(DomPortalHost);

        function DomPortalHost() {
          _classCallCheck(this, DomPortalHost);

          return _super7.apply(this, arguments);
        }

        return DomPortalHost;
      }(DomPortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
       * the directive instance itself can be attached to a host, enabling declarative use of portals.
       */


      var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
        _inherits(CdkPortal, _TemplatePortal);

        var _super8 = _createSuper(CdkPortal);

        function CdkPortal(templateRef, viewContainerRef) {
          _classCallCheck(this, CdkPortal);

          return _super8.call(this, templateRef, viewContainerRef);
        }

        return CdkPortal;
      }(TemplatePortal);

      CdkPortal.ɵfac = function CdkPortal_Factory(t) {
        return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortal,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortal]',
            exportAs: 'cdkPortal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, null);
      })();
      /**
       * @deprecated Use `CdkPortal` instead.
       * @breaking-change 9.0.0
       */


      var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
        _inherits(TemplatePortalDirective, _CdkPortal);

        var _super9 = _createSuper(TemplatePortalDirective);

        function TemplatePortalDirective() {
          _classCallCheck(this, TemplatePortalDirective);

          return _super9.apply(this, arguments);
        }

        return TemplatePortalDirective;
      }(CdkPortal);

      TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
        return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
      };

      TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TemplatePortalDirective,
        selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortal,
          useExisting: TemplatePortalDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵTemplatePortalDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdk-portal], [portal]',
            exportAs: 'cdkPortal',
            providers: [{
              provide: CdkPortal,
              useExisting: TemplatePortalDirective
            }]
          }]
        }], null, null);
      })();
      /**
       * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
       * directly attached to it, enabling declarative use.
       *
       * Usage:
       * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
       */


      var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
        _inherits(CdkPortalOutlet, _BasePortalOutlet3);

        var _super10 = _createSuper(CdkPortalOutlet);

        function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
          var _thisSuper2, _this13;

          _classCallCheck(this, CdkPortalOutlet);

          _this13 = _super10.call(this);
          _this13._componentFactoryResolver = _componentFactoryResolver;
          _this13._viewContainerRef = _viewContainerRef;
          /** Whether the portal component is initialized. */

          _this13._isInitialized = false;
          /** Emits when a portal is attached to the outlet. */

          _this13.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this13.attachDomPortal = function (portal) {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this13._document) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this13._document.createComment('dom-portal');

            portal.setAttachedHost(_assertThisInitialized(_this13));
            element.parentNode.insertBefore(anchorNode, element);

            _this13._getRootNode().appendChild(element);

            _get((_thisSuper2 = _assertThisInitialized(_this13), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2, function () {
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this13._document = _document;
          return _this13;
        }
        /** Portal associated with the Portal outlet. */


        _createClass(CdkPortalOutlet, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

            this._attachedPortal = null;
            this._attachedRef = null;
          }
          /**
           * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
           *
           * @param portal Portal to be attached to the portal outlet.
           * @returns Reference to the created component.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.

            var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
            // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
            // inside of the alternate view container.

            if (viewContainerRef !== this._viewContainerRef) {
              this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
            }

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return ref.destroy();
            });

            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
          }
          /**
           * Attach the given TemplatePortal to this PortalHost as an embedded View.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this14 = this;

            portal.setAttachedHost(this);

            var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return _this14._viewContainerRef.clear();
            });

            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
          }
          /** Gets the root node of the portal outlet. */

        }, {
          key: "_getRootNode",
          value: function _getRootNode() {
            var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
            // node being the root. Use the comment's parent node if that is the case.

            return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
          }
        }, {
          key: "portal",
          get: function get() {
            return this._attachedPortal;
          },
          set: function set(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
              return;
            }

            if (this.hasAttached()) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
            }

            if (portal) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
            }

            this._attachedPortal = portal;
          }
          /** Component or view reference that is attached to the portal. */

        }, {
          key: "attachedRef",
          get: function get() {
            return this._attachedRef;
          }
        }]);

        return CdkPortalOutlet;
      }(BasePortalOutlet);

      CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
        return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortalOutlet,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
          portal: ["cdkPortalOutlet", "portal"]
        },
        outputs: {
          attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortalOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      CdkPortalOutlet.propDecorators = {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalOutlet]',
            exportAs: 'cdkPortalOutlet',
            inputs: ['portal: cdkPortalOutlet']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          attached: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * @deprecated Use `CdkPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
        _inherits(PortalHostDirective, _CdkPortalOutlet);

        var _super11 = _createSuper(PortalHostDirective);

        function PortalHostDirective() {
          _classCallCheck(this, PortalHostDirective);

          return _super11.apply(this, arguments);
        }

        return PortalHostDirective;
      }(CdkPortalOutlet);

      PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
        return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
      };

      PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PortalHostDirective,
        selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
        inputs: {
          portal: ["cdkPortalHost", "portal"]
        },
        exportAs: ["cdkPortalHost"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortalOutlet,
          useExisting: PortalHostDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵPortalHostDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalHost], [portalHost]',
            exportAs: 'cdkPortalHost',
            inputs: ['portal: cdkPortalHost'],
            providers: [{
              provide: CdkPortalOutlet,
              useExisting: PortalHostDirective
            }]
          }]
        }], null, null);
      })();

      var PortalModule = function PortalModule() {
        _classCallCheck(this, PortalModule);
      };

      PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PortalModule
      });
      PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PortalModule_Factory(t) {
          return new (t || PortalModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
            declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Custom injector to be used when providing custom
       * injection tokens to components inside a portal.
       * @docs-private
       */


      var PortalInjector = /*#__PURE__*/function () {
        function PortalInjector(_parentInjector, _customTokens) {
          _classCallCheck(this, PortalInjector);

          this._parentInjector = _parentInjector;
          this._customTokens = _customTokens;
        }

        _createClass(PortalInjector, [{
          key: "get",
          value: function get(token, notFoundValue) {
            var value = this._customTokens.get(token);

            if (typeof value !== 'undefined') {
              return value;
            }

            return this._parentInjector.get(token, notFoundValue);
          }
        }]);

        return PortalInjector;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=portal.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/fesm2015/scrolling.js":
    /*!*********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/scrolling.js ***!
      \*********************************************************/

    /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

    /***/
    function node_modulesAngularCdkFesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
        return CdkFixedSizeVirtualScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return CdkScrollable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
        return CdkScrollableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
        return CdkVirtualForOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
        return CdkVirtualScrollViewport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
        return DEFAULT_RESIZE_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
        return DEFAULT_SCROLL_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
        return FixedSizeVirtualScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return ScrollDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
        return ScrollingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
        return VIRTUAL_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return ViewportRuler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
        return _fixedSizeVirtualScrollStrategyFactory;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/fesm2015/collections.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the virtual scrolling strategy. */


      var _c0 = ["contentWrapper"];
      var _c1 = ["*"];
      var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Virtual scrolling strategy for lists with items of known fixed size. */

      var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param itemSize The size of the items in the virtually scrolling list.
         * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */
        function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
          _classCallCheck(this, FixedSizeVirtualScrollStrategy);

          this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          /** The attached viewport. */

          this._viewport = null;
          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;
        }
        /**
         * Attaches this scroll strategy to a viewport.
         * @param viewport The viewport to attach this strategy to.
         */


        _createClass(FixedSizeVirtualScrollStrategy, [{
          key: "attach",
          value: function attach(viewport) {
            this._viewport = viewport;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** Detaches this scroll strategy from the currently attached viewport. */

        }, {
          key: "detach",
          value: function detach() {
            this._scrolledIndexChange.complete();

            this._viewport = null;
          }
          /**
           * Update the item size and buffer size.
           * @param itemSize The size of the items in the virtually scrolling list.
           * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
           * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
           */

        }, {
          key: "updateItemAndBufferSize",
          value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
            if (maxBufferPx < minBufferPx) {
              throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
            }

            this._itemSize = itemSize;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentScrolled",
          value: function onContentScrolled() {
            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onDataLengthChanged",
          value: function onDataLengthChanged() {
            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentRendered",
          value: function onContentRendered() {}
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onRenderedOffsetChanged",
          value: function onRenderedOffsetChanged() {}
          /**
           * Scroll to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index, behavior) {
            if (this._viewport) {
              this._viewport.scrollToOffset(index * this._itemSize, behavior);
            }
          }
          /** Update the viewport's total content size. */

        }, {
          key: "_updateTotalContentSize",
          value: function _updateTotalContentSize() {
            if (!this._viewport) {
              return;
            }

            this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
          }
          /** Update the viewport's rendered range. */

        }, {
          key: "_updateRenderedRange",
          value: function _updateRenderedRange() {
            if (!this._viewport) {
              return;
            }

            var renderedRange = this._viewport.getRenderedRange();

            var newRange = {
              start: renderedRange.start,
              end: renderedRange.end
            };

            var viewportSize = this._viewport.getViewportSize();

            var dataLength = this._viewport.getDataLength();

            var scrollOffset = this._viewport.measureScrollOffset();

            var firstVisibleIndex = scrollOffset / this._itemSize; // If user scrolls to the bottom of the list and data changes to a smaller list

            if (newRange.end > dataLength) {
              // We have to recalculate the first visible index based on new data length and viewport size.
              var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
              var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
              // Current range must also be adjusted to cover the new position (bottom of new list).

              if (firstVisibleIndex != newVisibleIndex) {
                firstVisibleIndex = newVisibleIndex;
                scrollOffset = newVisibleIndex * this._itemSize;
                newRange.start = Math.floor(firstVisibleIndex);
              }

              newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
            }

            var startBuffer = scrollOffset - newRange.start * this._itemSize;

            if (startBuffer < this._minBufferPx && newRange.start != 0) {
              var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
              newRange.start = Math.max(0, newRange.start - expandStart);
              newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
            } else {
              var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

              if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

                if (expandEnd > 0) {
                  newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                  newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
              }
            }

            this._viewport.setRenderedRange(newRange);

            this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

            this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
          }
        }]);

        return FixedSizeVirtualScrollStrategy;
      }();
      /**
       * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
       * `FixedSizeVirtualScrollStrategy` from the given directive.
       * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
       *     `FixedSizeVirtualScrollStrategy` from.
       */


      function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
        return fixedSizeDir._scrollStrategy;
      }
      /** A virtual scroll strategy that supports fixed-size items. */


      var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
        function CdkFixedSizeVirtualScroll() {
          _classCallCheck(this, CdkFixedSizeVirtualScroll);

          this._itemSize = 20;
          this._minBufferPx = 100;
          this._maxBufferPx = 200;
          /** The scroll strategy used by this directive. */

          this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /** The size of the items in the list (in pixels). */


        _createClass(CdkFixedSizeVirtualScroll, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(value) {
            this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           */

        }, {
          key: "minBufferPx",
          get: function get() {
            return this._minBufferPx;
          },
          set: function set(value) {
            this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           */

        }, {
          key: "maxBufferPx",
          get: function get() {
            return this._maxBufferPx;
          },
          set: function set(value) {
            this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
        }]);

        return CdkFixedSizeVirtualScroll;
      }();

      CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
        return new (t || CdkFixedSizeVirtualScroll)();
      };

      CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkFixedSizeVirtualScroll,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return CdkFixedSizeVirtualScroll;
          })]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport[itemSize]',
            providers: [{
              provide: VIRTUAL_SCROLL_STRATEGY,
              useFactory: _fixedSizeVirtualScrollStrategyFactory,
              deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return CdkFixedSizeVirtualScroll;
              })]
            }]
          }]
        }], function () {
          return [];
        }, {
          itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the scrolling events by default. */


      var DEFAULT_SCROLL_TIME = 20;
      /**
       * Service contained all registered Scrollable references and emits an event when any one of the
       * Scrollable references emit a scrolled event.
       */

      var ScrollDispatcher = /*#__PURE__*/function () {
        function ScrollDispatcher(_ngZone, _platform,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, ScrollDispatcher);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** Subject for notifying that a registered scrollable reference element has been scrolled. */

          this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Keeps track of the global `scroll` and `resize` subscriptions. */

          this._globalSubscription = null;
          /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

          this._scrolledCount = 0;
          /**
           * Map of all the scrollable references that are registered with the service and their
           * scroll event subscriptions.
           */

          this.scrollContainers = new Map();
          this._document = document;
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param scrollable Scrollable instance to be registered.
         */


        _createClass(ScrollDispatcher, [{
          key: "register",
          value: function register(scrollable) {
            var _this15 = this;

            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
                return _this15._scrolled.next(scrollable);
              }));
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param scrollable Scrollable instance to be deregistered.
           */

        }, {
          key: "deregister",
          value: function deregister(scrollable) {
            var scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers["delete"](scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           */

        }, {
          key: "scrolled",
          value: function scrolled() {
            var _this16 = this;

            var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

            if (!this._platform.isBrowser) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              if (!_this16._globalSubscription) {
                _this16._addGlobalListener();
              } // In the case of a 0ms delay, use an observable without auditTime
              // since it does add a perceptible delay in processing overhead.


              var subscription = auditTimeInMs > 0 ? _this16._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this16._scrolled.subscribe(observer);
              _this16._scrolledCount++;
              return function () {
                subscription.unsubscribe();
                _this16._scrolledCount--;

                if (!_this16._scrolledCount) {
                  _this16._removeGlobalListener();
                }
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this17 = this;

            this._removeGlobalListener();

            this.scrollContainers.forEach(function (_, container) {
              return _this17.deregister(container);
            });

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param elementRef Element whose ancestors to listen for.
           * @param auditTimeInMs Time to throttle the scroll events.
           */

        }, {
          key: "ancestorScrolled",
          value: function ancestorScrolled(elementRef, auditTimeInMs) {
            var ancestors = this.getAncestorScrollContainers(elementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
              return !target || ancestors.indexOf(target) > -1;
            }));
          }
          /** Returns all registered Scrollables that contain the provided element. */

        }, {
          key: "getAncestorScrollContainers",
          value: function getAncestorScrollContainers(elementRef) {
            var _this18 = this;

            var scrollingContainers = [];
            this.scrollContainers.forEach(function (_subscription, scrollable) {
              if (_this18._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Returns true if the element is contained within the provided Scrollable. */

        }, {
          key: "_scrollableContainsElement",
          value: function _scrollableContainsElement(scrollable, elementRef) {
            var element = elementRef.nativeElement;
            var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while (element = element.parentElement);

            return false;
          }
          /** Sets up the global scroll listeners. */

        }, {
          key: "_addGlobalListener",
          value: function _addGlobalListener() {
            var _this19 = this;

            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
              var window = _this19._getWindow();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () {
                return _this19._scrolled.next();
              });
            });
          }
          /** Cleans up the global scroll listener. */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }]);

        return ScrollDispatcher;
      }();

      ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
        return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollDispatcher_Factory() {
          return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ScrollDispatcher,
        providedIn: "root"
      });

      ScrollDispatcher.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Sends an event when the directive's element is scrolled. Registers itself with the
       * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
       * can be listened to through the service.
       */


      var CdkScrollable = /*#__PURE__*/function () {
        function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
          var _this20 = this;

          _classCallCheck(this, CdkScrollable);

          this.elementRef = elementRef;
          this.scrollDispatcher = scrollDispatcher;
          this.ngZone = ngZone;
          this.dir = dir;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this20.ngZone.runOutsideAngular(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this20.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this20._destroyed)).subscribe(observer);
            });
          });
        }

        _createClass(CdkScrollable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollDispatcher.register(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Returns observable that emits when a scroll event is fired on the host element. */

        }, {
          key: "elementScrolled",
          value: function elementScrolled() {
            return this._elementScrolled;
          }
          /** Gets the ElementRef for the viewport. */

        }, {
          key: "getElementRef",
          value: function getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param options specified the offsets to scroll to.
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(options) {
            var el = this.elementRef.nativeElement;
            var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

            if (options.left == null) {
              options.left = isRtl ? options.end : options.start;
            }

            if (options.right == null) {
              options.right = isRtl ? options.start : options.end;
            } // Rewrite the bottom offset as a top offset.


            if (options.bottom != null) {
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.


            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
            /* NORMAL */
            ) {
                if (options.left != null) {
                  options.right = el.scrollWidth - el.clientWidth - options.left;
                }

                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
                /* INVERTED */
                ) {
                    options.left = options.right;
                  } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
                /* NEGATED */
                ) {
                    options.left = options.right ? -options.right : options.right;
                  }
              } else {
              if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }
        }, {
          key: "_applyScrollToOptions",
          value: function _applyScrollToOptions(options) {
            var el = this.elementRef.nativeElement;

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param from The edge to measure from.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            var LEFT = 'left';
            var RIGHT = 'right';
            var el = this.elementRef.nativeElement;

            if (from == 'top') {
              return el.scrollTop;
            }

            if (from == 'bottom') {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.


            var isRtl = this.dir && this.dir.value == 'rtl';

            if (from == 'start') {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == 'end') {
              from = isRtl ? LEFT : RIGHT;
            }

            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
            /* INVERTED */
            ) {
                // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollWidth - el.clientWidth - el.scrollLeft;
                } else {
                  return el.scrollLeft;
                }
              } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
            /* NEGATED */
            ) {
                // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollLeft + el.scrollWidth - el.clientWidth;
                } else {
                  return -el.scrollLeft;
                }
              } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }]);

        return CdkScrollable;
      }();

      CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
        return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
      };

      CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkScrollable,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
      });

      CdkScrollable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-scrollable], [cdkScrollable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the resize events by default. */


      var DEFAULT_RESIZE_TIME = 20;
      /**
       * Simple utility for getting the bounds of the browser viewport.
       * @docs-private
       */

      var ViewportRuler = /*#__PURE__*/function () {
        function ViewportRuler(_platform, ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          var _this21 = this;

          _classCallCheck(this, ViewportRuler);

          this._platform = _platform;
          /** Stream of viewport change events. */

          this._change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Event listener that will be used to handle the viewport change events. */

          this._changeListener = function (event) {
            _this21._change.next(event);
          };

          this._document = document;
          ngZone.runOutsideAngular(function () {
            if (_platform.isBrowser) {
              var _window = _this21._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
              // `fromEvent` so that we can ensure that they're bound outside of the NgZone.


              _window.addEventListener('resize', _this21._changeListener);

              _window.addEventListener('orientationchange', _this21._changeListener);
            } // We don't need to keep track of the subscription,
            // because we complete the `change` stream on destroy.


            _this21.change().subscribe(function () {
              return _this21._updateViewportSize();
            });
          });
        }

        _createClass(ViewportRuler, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._platform.isBrowser) {
              var _window2 = this._getWindow();

              _window2.removeEventListener('resize', this._changeListener);

              _window2.removeEventListener('orientationchange', this._changeListener);
            }

            this._change.complete();
          }
          /** Returns the viewport's width and height. */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }

            var output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize = null;
            }

            return output;
          }
          /** Gets a ClientRect for the viewport's bounds. */

        }, {
          key: "getViewportRect",
          value: function getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            var scrollPosition = this.getViewportScrollPosition();

            var _this$getViewportSize = this.getViewportSize(),
                width = _this$getViewportSize.width,
                height = _this$getViewportSize.height;

            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height: height,
              width: width
            };
          }
          /** Gets the (top, left) scroll position of the viewport. */

        }, {
          key: "getViewportScrollPosition",
          value: function getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.


            var document = this._getDocument();

            var window = this._getWindow();

            var documentElement = document.documentElement;
            var documentRect = documentElement.getBoundingClientRect();
            var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
            var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
            return {
              top: top,
              left: left
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * @param throttleTime Time in milliseconds to throttle the stream.
           */

        }, {
          key: "change",
          value: function change() {
            var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Updates the cached viewport size. */

        }, {
          key: "_updateViewportSize",
          value: function _updateViewportSize() {
            var window = this._getWindow();

            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            };
          }
        }]);

        return ViewportRuler;
      }();

      ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
        return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ViewportRuler_Factory() {
          return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ViewportRuler,
        providedIn: "root"
      });

      ViewportRuler.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Checks if the given ranges are equal. */


      function rangesEqual(r1, r2) {
        return r1.start == r2.start && r1.end == r2.end;
      }
      /**
       * Scheduler to be used for scroll events. Needs to fall back to
       * something that doesn't rely on requestAnimationFrame on environments
       * that don't support it (e.g. server-side rendering).
       */


      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
      /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

      var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
        _inherits(CdkVirtualScrollViewport, _CdkScrollable);

        var _super12 = _createSuper(CdkVirtualScrollViewport);

        function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
        /**
         * @deprecated `viewportRuler` parameter to become required.
         * @breaking-change 11.0.0
         */
        viewportRuler) {
          var _this22;

          _classCallCheck(this, CdkVirtualScrollViewport);

          _this22 = _super12.call(this, elementRef, scrollDispatcher, ngZone, dir);
          _this22.elementRef = elementRef;
          _this22._changeDetectorRef = _changeDetectorRef;
          _this22._scrollStrategy = _scrollStrategy;
          /** Emits when the viewport is detached from a CdkVirtualForOf. */

          _this22._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Emits when the rendered range changes. */

          _this22._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this22._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
          // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
          // depending on how the strategy calculates the scrolled index, it may come at a cost to
          // performance.

          /** Emits when the index of the first element visible in the viewport changes. */

          _this22.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this22._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
              return Promise.resolve().then(function () {
                return _this22.ngZone.run(function () {
                  return observer.next(index);
                });
              });
            });
          });
          /** A stream that emits whenever the rendered range changes. */

          _this22.renderedRangeStream = _this22._renderedRangeSubject.asObservable();
          /**
           * The total size of all content (in pixels), including content that is not currently rendered.
           */

          _this22._totalContentSize = 0;
          /** A string representing the `style.width` property value to be used for the spacer element. */

          _this22._totalContentWidth = '';
          /** A string representing the `style.height` property value to be used for the spacer element. */

          _this22._totalContentHeight = '';
          /** The currently rendered range of indices. */

          _this22._renderedRange = {
            start: 0,
            end: 0
          };
          /** The length of the data bound to this viewport (in number of items). */

          _this22._dataLength = 0;
          /** The size of the viewport (in pixels). */

          _this22._viewportSize = 0;
          /** The last rendered content offset that was set. */

          _this22._renderedContentOffset = 0;
          /**
           * Whether the last rendered content offset was to the end of the content (and therefore needs to
           * be rewritten as an offset to the start of the content).
           */

          _this22._renderedContentOffsetNeedsRewrite = false;
          /** Whether there is a pending change detection cycle. */

          _this22._isChangeDetectionPending = false;
          /** A list of functions to run after the next change detection cycle. */

          _this22._runAfterChangeDetection = [];
          /** Subscription to changes in the viewport size. */

          _this22._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

          if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
          } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


          if (viewportRuler) {
            _this22._viewportChanges = viewportRuler.change().subscribe(function () {
              _this22.checkViewportSize();
            });
          }

          return _this22;
        }
        /** The direction the viewport scrolls. */


        _createClass(CdkVirtualScrollViewport, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.


            this.ngZone.runOutsideAngular(function () {
              return Promise.resolve().then(function () {
                _this23._measureViewportSize();

                _this23._scrollStrategy.attach(_this23);

                _this23.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(function () {
                  return _this23._scrollStrategy.onContentScrolled();
                });

                _this23._markChangeDetectionNeeded();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects


            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            this._viewportChanges.unsubscribe();

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
          }
          /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */

        }, {
          key: "attach",
          value: function attach(forOf) {
            var _this24 = this;

            if (this._forOf) {
              throw Error('CdkVirtualScrollViewport is already attached.');
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.


            this.ngZone.runOutsideAngular(function () {
              _this24._forOf = forOf;

              _this24._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this24._detachedSubject)).subscribe(function (data) {
                var newLength = data.length;

                if (newLength !== _this24._dataLength) {
                  _this24._dataLength = newLength;

                  _this24._scrollStrategy.onDataLengthChanged();
                }

                _this24._doChangeDetection();
              });
            });
          }
          /** Detaches the current `CdkVirtualForOf`. */

        }, {
          key: "detach",
          value: function detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /** Gets the length of the data bound to this viewport (in number of items). */

        }, {
          key: "getDataLength",
          value: function getDataLength() {
            return this._dataLength;
          }
          /** Gets the size of the viewport (in pixels). */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /** Get the current rendered range of items. */

        }, {
          key: "getRenderedRange",
          value: function getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           */

        }, {
          key: "setTotalContentSize",
          value: function setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /** Sets the currently rendered range of indices. */

        }, {
          key: "setRenderedRange",
          value: function setRenderedRange(range) {
            var _this25 = this;

            if (!rangesEqual(this._renderedRange, range)) {
              this._renderedRangeSubject.next(this._renderedRange = range);

              this._markChangeDetectionNeeded(function () {
                return _this25._scrollStrategy.onContentRendered();
              });
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           */

        }, {
          key: "getOffsetToRenderedContentStart",
          value: function getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           */

        }, {
          key: "setRenderedContentOffset",
          value: function setRenderedContentOffset(offset) {
            var _this26 = this;

            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            var isRtl = this.dir && this.dir.value == 'rtl';
            var isHorizontal = this.orientation == 'horizontal';
            var axis = isHorizontal ? 'X' : 'Y';
            var axisDirection = isHorizontal && isRtl ? -1 : 1;
            var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
            this._renderedContentOffset = offset;

            if (to === 'to-end') {
              transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(function () {
                if (_this26._renderedContentOffsetNeedsRewrite) {
                  _this26._renderedContentOffset -= _this26.measureRenderedContentSize();
                  _this26._renderedContentOffsetNeedsRewrite = false;

                  _this26.setRenderedContentOffset(_this26._renderedContentOffset);
                } else {
                  _this26._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param offset The offset to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
            var options = {
              behavior: behavior
            };

            if (this.orientation === 'horizontal') {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
          }
          /** Measure the combined size of all of the rendered items. */

        }, {
          key: "measureRenderedContentSize",
          value: function measureRenderedContentSize() {
            var contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /** Update the viewport dimensions and re-render. */

        }, {
          key: "checkViewportSize",
          value: function checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /** Measure the viewport size. */

        }, {
          key: "_measureViewportSize",
          value: function _measureViewportSize() {
            var viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
          }
          /** Queue up change detection to run. */

        }, {
          key: "_markChangeDetectionNeeded",
          value: function _markChangeDetectionNeeded(runAfter) {
            var _this27 = this;

            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.


            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(function () {
                return Promise.resolve().then(function () {
                  _this27._doChangeDetection();
                });
              });
            }
          }
          /** Run change detection. */

        }, {
          key: "_doChangeDetection",
          value: function _doChangeDetection() {
            var _this28 = this;

            this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(function () {
              return _this28._changeDetectorRef.markForCheck();
            });
            var runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            var _iterator2 = _createForOfIteratorHelper(runAfterChangeDetection),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var fn = _step2.value;
                fn();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /** Calculates the `style.width` and `style.height` for the spacer element. */

        }, {
          key: "_calculateSpacerSize",
          value: function _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
            this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
          }
        }, {
          key: "orientation",
          get: function get() {
            return this._orientation;
          },
          set: function set(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
        }]);

        return CdkVirtualScrollViewport;
      }(CdkScrollable);

      CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
        return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
      };

      CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CdkVirtualScrollViewport,
        selectors: [["cdk-virtual-scroll-viewport"]],
        viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
          }
        },
        hostAttrs: [1, "cdk-virtual-scroll-viewport"],
        hostVars: 4,
        hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
          }
        },
        inputs: {
          orientation: "orientation"
        },
        outputs: {
          scrolledIndexChange: "scrolledIndexChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CdkScrollable,
          useExisting: CdkVirtualScrollViewport
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 4,
        consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
        template: function CdkVirtualScrollViewport_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
          }
        },
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      CdkVirtualScrollViewport.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      CdkVirtualScrollViewport.propDecorators = {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport',
            template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
            host: {
              'class': 'cdk-virtual-scroll-viewport',
              '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
              '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: CdkScrollable,
              useExisting: CdkVirtualScrollViewport
            }],
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [VIRTUAL_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: ScrollDispatcher
          }, {
            type: ViewportRuler,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          scrolledIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contentWrapper', {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Helper to extract the offset of a DOM Node in a certain direction. */


      function getOffset(orientation, direction, node) {
        var el = node;

        if (!el.getBoundingClientRect) {
          return 0;
        }

        var rect = el.getBoundingClientRect();

        if (orientation === 'horizontal') {
          return direction === 'start' ? rect.left : rect.right;
        }

        return direction === 'start' ? rect.top : rect.bottom;
      }
      /**
       * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
       * container.
       */


      var CdkVirtualForOf = /*#__PURE__*/function () {
        function CdkVirtualForOf(
        /** The view container to add items to. */
        _viewContainerRef,
        /** The template to use when stamping out new items. */
        _template,
        /** The set of available differs. */
        _differs,
        /** The virtual scrolling viewport that these items are being rendered in. */
        _viewport, ngZone) {
          var _this29 = this;

          _classCallCheck(this, CdkVirtualForOf);

          this._viewContainerRef = _viewContainerRef;
          this._template = _template;
          this._differs = _differs;
          this._viewport = _viewport;
          /** Emits when the rendered view of the data changes. */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Subject that emits when a new DataSource instance is given. */

          this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

          this.cdkVirtualForTemplateCacheSize = 20;
          /** Emits whenever the data in the current DataSource changes. */

          this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Bundle up the previous and current data sources so we can work with both.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
          // new one, passing back a stream of data changes which we run through `switchMap` to give
          // us a data stream that emits the latest data from whatever the current `DataSource` is.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                prev = _ref2[0],
                cur = _ref2[1];

            return _this29._changeDataSource(prev, cur);
          }), // Replay the last emitted data when someone subscribes.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          /** The differ used to calculate changes to the data. */

          this._differ = null;
          /**
           * The template cache used to hold on ot template instancess that have been stamped out, but don't
           * currently need to be rendered. These instances will be reused in the future rather than
           * stamping out brand new ones.
           */

          this._templateCache = [];
          /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

          this._needsUpdate = false;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.dataStream.subscribe(function (data) {
            _this29._data = data;

            _this29._onRenderedDataChange();
          });

          this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this29._renderedRange = range;
            ngZone.run(function () {
              return _this29.viewChange.next(_this29._renderedRange);
            });

            _this29._onRenderedDataChange();
          });

          this._viewport.attach(this);
        }
        /** The DataSource to display. */


        _createClass(CdkVirtualForOf, [{
          key: "measureRangeSize",

          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           */
          value: function measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
              throw Error("Error: attempted to measure an item that isn't rendered.");
            } // The index into the list of rendered views for the first item in the range.


            var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            var rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
            // the top of the first node from the bottom of the last one.

            var firstNode;
            var lastNode; // Find the first node by starting from the beginning and going forwards.

            for (var i = 0; i < rangeLen; i++) {
              var view = this._viewContainerRef.get(i + renderedStartIndex);

              if (view && view.rootNodes.length) {
                firstNode = lastNode = view.rootNodes[0];
                break;
              }
            } // Find the last node by starting from the end and going backwards.


            for (var _i2 = rangeLen - 1; _i2 > -1; _i2--) {
              var _view = this._viewContainerRef.get(_i2 + renderedStartIndex);

              if (_view && _view.rootNodes.length) {
                lastNode = _view.rootNodes[_view.rootNodes.length - 1];
                break;
              }
            }

            return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).
              var changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next(undefined);

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            var _iterator3 = _createForOfIteratorHelper(this._templateCache),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var view = _step3.value;
                view.destroy();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          /** React to scroll state changes in the viewport. */

        }, {
          key: "_onRenderedDataChange",
          value: function _onRenderedDataChange() {
            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

            if (!this._differ) {
              this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
            }

            this._needsUpdate = true;
          }
          /** Swap out one `DataSource` for another. */

        }, {
          key: "_changeDataSource",
          value: function _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }
          /** Update the `CdkVirtualForOfContext` for all views. */

        }, {
          key: "_updateContext",
          value: function _updateContext() {
            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /** Apply changes to the DOM. */

        }, {
          key: "_applyChanges",
          value: function _applyChanges(changes) {
            var _this30 = this;

            // Rearrange the views to put them in the right location.
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              if (record.previousIndex == null) {
                // Item added.
                var view = _this30._insertViewForNewItem(currentIndex);

                view.context.$implicit = record.item;
              } else if (currentIndex == null) {
                // Item removed.
                _this30._cacheView(_this30._detachView(adjustedPreviousIndex));
              } else {
                // Item moved.
                var _view2 = _this30._viewContainerRef.get(adjustedPreviousIndex);

                _this30._viewContainerRef.move(_view2, currentIndex);

                _view2.context.$implicit = record.item;
              }
            }); // Update $implicit for any items that had an identity change.

            changes.forEachIdentityChange(function (record) {
              var view = _this30._viewContainerRef.get(record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /** Cache the given detached view. */

        }, {
          key: "_cacheView",
          value: function _cacheView(view) {
            if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
              this._templateCache.push(view);
            } else {
              var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.


              if (index === -1) {
                view.destroy();
              } else {
                this._viewContainerRef.remove(index);
              }
            }
          }
          /** Inserts a view for a new item, either from the cache or by creating a new one. */

        }, {
          key: "_insertViewForNewItem",
          value: function _insertViewForNewItem(index) {
            return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
          }
          /** Update the computed properties on the `CdkVirtualForOfContext`. */

        }, {
          key: "_updateComputedContextProperties",
          value: function _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }
          /** Creates a new embedded view and moves it to the given index */

        }, {
          key: "_createEmbeddedViewAt",
          value: function _createEmbeddedViewAt(index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return this._viewContainerRef.createEmbeddedView(this._template, {
              $implicit: null,
              // It's guaranteed that the iterable is not "undefined" or "null" because we only
              // generate views for elements if the "cdkVirtualForOf" iterable has elements.
              cdkVirtualForOf: this._cdkVirtualForOf,
              index: -1,
              count: -1,
              first: false,
              last: false,
              odd: false,
              even: false
            }, index);
          }
          /** Inserts a recycled view from the cache at the given index. */

        }, {
          key: "_insertViewFromCache",
          value: function _insertViewFromCache(index) {
            var cachedView = this._templateCache.pop();

            if (cachedView) {
              this._viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
          /** Detaches the embedded view at the given index. */

        }, {
          key: "_detachView",
          value: function _detachView(index) {
            return this._viewContainerRef.detach(index);
          }
        }, {
          key: "cdkVirtualForOf",
          get: function get() {
            return this._cdkVirtualForOf;
          },
          set: function set(value) {
            this._cdkVirtualForOf = value;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
              this._dataSourceChanges.next(value);
            } else {
              // Slice the value if its an NgIterable to ensure we're working with an array.
              this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
            }
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           */

        }, {
          key: "cdkVirtualForTrackBy",
          get: function get() {
            return this._cdkVirtualForTrackBy;
          },
          set: function set(fn) {
            var _this31 = this;

            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ? function (index, item) {
              return fn(index + (_this31._renderedRange ? _this31._renderedRange.start : 0), item);
            } : undefined;
          }
          /** The template used to stamp out new elements. */

        }, {
          key: "cdkVirtualForTemplate",
          set: function set(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
        }]);

        return CdkVirtualForOf;
      }();

      CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
        return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkVirtualForOf,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate"
        }
      });

      CdkVirtualForOf.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkVirtualFor][cdkVirtualForOf]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
          }, {
            type: CdkVirtualScrollViewport,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          cdkVirtualForTemplateCacheSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkScrollableModule = function CdkScrollableModule() {
        _classCallCheck(this, CdkScrollableModule);
      };

      CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CdkScrollableModule
      });
      CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CdkScrollableModule_Factory(t) {
          return new (t || CdkScrollableModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
          declarations: [CdkScrollable],
          exports: [CdkScrollable]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkScrollable],
            declarations: [CdkScrollable]
          }]
        }], null, null);
      })();

      var ScrollingModule = function ScrollingModule() {
        _classCallCheck(this, ScrollingModule);
      };

      ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ScrollingModule
      });
      ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ScrollingModule_Factory(t) {
          return new (t || ScrollingModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
          declarations: function declarations() {
            return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
            declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=scrolling.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-cms-cms-module-ngfactory~pages-device-device-module-ngfactory~pages-notification-notif~1c63aa11-es5.js.map