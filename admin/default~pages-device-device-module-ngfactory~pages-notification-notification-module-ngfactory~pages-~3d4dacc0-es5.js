(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-device-device-module-ngfactory~pages-notification-notification-module-ngfactory~pages-~3d4dacc0"], {
    /***/
    "./node_modules/@angular/material/fesm2015/slide-toggle.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/slide-toggle.js ***!
      \*****************************************************************/

    /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

    /***/
    function node_modulesAngularMaterialFesm2015SlideToggleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
        return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
        return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
        return MatSlideToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
        return MatSlideToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
        return MatSlideToggleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
        return MatSlideToggleRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
        return _MatSlideToggleRequiredValidatorModule;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "./node_modules/@angular/cdk/fesm2015/observers.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-slide-toggle`. */


      var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
        providedIn: 'root',
        factory: function factory() {
          return {
            disableToggleValue: false
          };
        }
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids for slide-toggle components.

      var nextUniqueId = 0;
      /** @docs-private */

      var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggle;
        }),
        multi: true
      };
      /** Change event object emitted by a MatSlideToggle. */

      var MatSlideToggleChange = function MatSlideToggleChange(
      /** The source MatSlideToggle of the event. */
      source,
      /** The new `checked` value of the MatSlideToggle. */
      checked) {
        _classCallCheck(this, MatSlideToggleChange);

        this.source = source;
        this.checked = checked;
      }; // Boilerplate for applying mixins to MatSlideToggle.

      /** @docs-private */


      var MatSlideToggleBase = function MatSlideToggleBase(_elementRef) {
        _classCallCheck(this, MatSlideToggleBase);

        this._elementRef = _elementRef;
      };

      var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
      /** Represents a slidable "switch" toggle that can be moved between on and off. */


      var MatSlideToggle = /*#__PURE__*/function (_MatSlideToggleMixinB) {
        _inherits(MatSlideToggle, _MatSlideToggleMixinB);

        var _super = _createSuper(MatSlideToggle);

        function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
          var _this;

          _classCallCheck(this, MatSlideToggle);

          _this = _super.call(this, elementRef);
          _this._focusMonitor = _focusMonitor;
          _this._changeDetectorRef = _changeDetectorRef;
          _this.defaults = defaults;
          _this._animationMode = _animationMode;

          _this._onChange = function (_) {};

          _this._onTouched = function () {};

          _this._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
          _this._required = false;
          _this._checked = false;
          /** Name value will be applied to the input element if present. */

          _this.name = null;
          /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */

          _this.id = _this._uniqueId;
          /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */

          _this.labelPosition = 'after';
          /** Used to set the aria-label attribute on the underlying input element. */

          _this.ariaLabel = null;
          /** Used to set the aria-labelledby attribute on the underlying input element. */

          _this.ariaLabelledby = null;
          /** An event will be dispatched each time the slide-toggle changes its value. */

          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * An event will be dispatched each time the slide-toggle input is toggled.
           * This event is always emitted when the user toggles the slide toggle, but this does not mean
           * the slide toggle's value has changed.
           */

          _this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this.tabIndex = parseInt(tabIndex) || 0;
          return _this;
        }
        /** Whether the slide-toggle is required. */


        _createClass(MatSlideToggle, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              // Only forward focus manually when it was received programmatically or through the
              // keyboard. We should not do this for mouse/touch focus for two reasons:
              // 1. It can prevent clicks from landing in Chrome (see #18269).
              // 2. They're already handled by the wrapping `label` element.
              if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                _this2._inputElement.nativeElement.focus();
              } else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () {
                  return _this2._onTouched();
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Method being called whenever the underlying input emits a change event. */

        }, {
          key: "_onChangeEvent",
          value: function _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
            // `disableToggleValue: true`, the slide toggle's value does not change, and the
            // checked state of the underlying input needs to be changed back.

            if (this.defaults.disableToggleValue) {
              this._inputElement.nativeElement.checked = this.checked;
              return;
            } // Sync the value from the underlying input element with the component instance.


            this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.

            this._emitChangeEvent();
          }
          /** Method being called whenever the slide-toggle has been clicked. */

        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /** Implemented as a part of ControlValueAccessor. */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the slide-toggle. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
          }
          /** Toggles the checked state of the slide-toggle. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;

            this._onChange(this.checked);
          }
          /**
           * Emits a change event on the `change` output. Also notifies the FormControl about the change.
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._onChange(this.checked);

            this.change.emit(new MatSlideToggleChange(this, this.checked));
          }
          /** Method being called whenever the label text changes. */

        }, {
          key: "_onLabelTextChange",
          value: function _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and its children.
            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Whether the slide-toggle element is checked or not. */

        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Returns the unique id for the visual hidden input. */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
        }]);

        return MatSlideToggle;
      }(_MatSlideToggleMixinBase);

      MatSlideToggle.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-slide-toggle',
          exportAs: 'matSlideToggle',
          host: {
            'class': 'mat-slide-toggle',
            '[id]': 'id',
            // Needs to be `-1` so it can still receive programmatic focus.
            '[attr.tabindex]': 'disabled ? null : -1',
            '[attr.aria-label]': 'null',
            '[attr.aria-labelledby]': 'null',
            '[class.mat-checked]': 'checked',
            '[class.mat-disabled]': 'disabled',
            '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
          providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
          inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
        }]
      }];

      MatSlideToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatSlideToggle.propDecorators = {
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggleRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Material slide-toggle components with the required attribute in a
       * template-driven form. The default validator for required form controls asserts
       * that the control value is not undefined but that is not appropriate for a slide-toggle
       * where the value is always defined.
       *
       * Required slide-toggle form controls are valid when checked.
       */

      var MatSlideToggleRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

        var _super2 = _createSuper(MatSlideToggleRequiredValidator);

        function MatSlideToggleRequiredValidator() {
          _classCallCheck(this, MatSlideToggleRequiredValidator);

          return _super2.apply(this, arguments);
        }

        return MatSlideToggleRequiredValidator;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"]);

      MatSlideToggleRequiredValidator.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
          providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
        }]
      }];
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** This module is used by both original and MDC-based slide-toggle implementations. */

      var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
        _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
      };

      _MatSlideToggleRequiredValidatorModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [MatSlideToggleRequiredValidator],
          declarations: [MatSlideToggleRequiredValidator]
        }]
      }];

      var MatSlideToggleModule = function MatSlideToggleModule() {
        _classCallCheck(this, MatSlideToggleModule);
      };

      MatSlideToggleModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
          exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlideToggle]
        }]
      }];
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
      //# sourceMappingURL=slide-toggle.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-device-device-module-ngfactory~pages-notification-notification-module-ngfactory~pages-~3d4dacc0-es5.js.map