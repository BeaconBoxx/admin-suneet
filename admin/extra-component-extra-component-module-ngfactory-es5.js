(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-component-extra-component-module-ngfactory"], {
    /***/
    "./node_modules/@iplab/ngx-file-upload/fesm2015/iplab-ngx-file-upload.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@iplab/ngx-file-upload/fesm2015/iplab-ngx-file-upload.js ***!
      \*******************************************************************************/

    /*! exports provided: FileSizeValidator, FileUploadAttributeComponent, FileUploadComponent, FileUploadControl, FileUploadDropZoneComponent, FileUploadModule, FileUploadService, FileUploadTypes, FileUploadValidators, FilesAcceptDirective, FilesAcceptValidator, FilesLimitValidator, SimpleFileUploadComponent, ɵa, ɵb, ɵc, ɵd, ɵe */

    /***/
    function node_modulesIplabNgxFileUploadFesm2015IplabNgxFileUploadJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSizeValidator", function () {
        return FileSizeValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadAttributeComponent", function () {
        return FileUploadAttributeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
        return FileUploadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadControl", function () {
        return FileUploadControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadDropZoneComponent", function () {
        return FileUploadDropZoneComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
        return FileUploadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadService", function () {
        return FileUploadService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadTypes", function () {
        return FileUploadTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadValidators", function () {
        return FileUploadValidators;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesAcceptDirective", function () {
        return FilesAcceptDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesAcceptValidator", function () {
        return FilesAcceptValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesLimitValidator", function () {
        return FilesLimitValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleFileUploadComponent", function () {
        return SimpleFileUploadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return FileUploadAbstract;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return ZoomAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return InsertAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return FileUploadListItemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return FileUploadIconComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");

      var _c0 = ["placeholder"];
      var _c1 = ["item"];
      var _c2 = ["inputRef"];
      var _c3 = ["labelRef"];

      function FileUploadComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function FileUploadComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drag and drop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " files");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " or click here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function FileUploadComponent_ng_template_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Click here");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " choose a files ");
        }
      }

      function FileUploadComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "file-upload-drop-zone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_ng_template_3_ng_container_1_Template, 6, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FileUploadComponent_ng_template_3_ng_template_2_Template, 5, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var isFileDragDropAvailable_r6 = ctx.isFileDragDropAvailable;

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isFileDragDropAvailable_r6)("ngIfElse", _r8);
        }
      }

      function FileUploadComponent_div_7_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      var _c4 = function _c4(a0, a1, a2, a3) {
        return {
          $implicit: a0,
          file: a1,
          index: a2,
          control: a3
        };
      };

      function FileUploadComponent_div_7_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FileUploadComponent_div_7_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
        }

        if (rf & 2) {
          var file_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.listItem ? ctx_r10.listItem : _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](2, _c4, file_r13, file_r13, i_r14, ctx_r10.control));
        }
      }

      function FileUploadComponent_div_7_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "file-upload-list-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r16 = ctx.index;
          var file_r17 = ctx.file;
          var control_r18 = ctx.control;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("index", i_r16)("file", file_r17)("control", control_r18);
        }
      }

      function FileUploadComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@insertAnimation.done", function FileUploadComponent_div_7_Template_div_animation_insertAnimation_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.animationListFinished($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_div_7_ng_template_1_Template, 1, 7, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FileUploadComponent_div_7_ng_template_3_Template, 2, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@insertAnimation", ctx_r5.control.size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r5.control.valueChanges));
        }
      }

      var _c5 = ["*"];

      function FileUploadIconComponent__svg_svg_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FileUploadIconComponent__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FileUploadIconComponent__svg_svg_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FileUploadIconComponent__svg_svg_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FileUploadIconComponent__svg_svg_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c6 = ["overlay"];
      var _c7 = ["file-drop-zone", ""];

      function FileUploadAttributeComponent_div_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function FileUploadAttributeComponent_div_1_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "file-upload-drop-zone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " it here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FileUploadAttributeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FileUploadAttributeComponent_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FileUploadAttributeComponent_div_1_ng_template_4_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.templateRef ? ctx_r0.templateRef : _r3);
        }
      }

      var _c8 = ["button"];
      var _c9 = ["simple", ""];

      function SimpleFileUploadComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      var _c10 = function _c10(a0, a1, a2) {
        return {
          $implicit: a0,
          control: a1,
          file: a2
        };
      };

      function SimpleFileUploadComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimpleFileUploadComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.placeholderRef ? ctx_r0.placeholderRef : _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c10, ctx_r0.control.value[0], ctx_r0.control, ctx_r0.control.value[0]));
        }
      }

      function SimpleFileUploadComponent_ng_template_3_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r9.name);
        }
      }

      function SimpleFileUploadComponent_ng_template_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Select a file... ");
        }
      }

      function SimpleFileUploadComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SimpleFileUploadComponent_ng_template_3_span_0_Template, 2, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimpleFileUploadComponent_ng_template_3_ng_template_1_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var file_r9 = ctx.$implicit;

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r9)("ngIfElse", _r11);
        }
      }

      function SimpleFileUploadComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function SimpleFileUploadComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Browse");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c11 = function _c11(a0) {
        return {
          control: a0
        };
      };

      function IsNullOrEmpty(value) {
        return value == null || value.length === 0;
      }

      var STATUS;

      (function (STATUS) {
        STATUS[STATUS["INVALID"] = 0] = "INVALID";
        STATUS[STATUS["VALID"] = 1] = "VALID";
        STATUS[STATUS["DISABLED"] = 2] = "DISABLED";
      })(STATUS || (STATUS = {}));

      var FileEvent;

      (function (FileEvent) {
        FileEvent["click"] = "click";
        FileEvent["focus"] = "focus";
        FileEvent["blur"] = "blur";
      })(FileEvent || (FileEvent = {}));

      var FileUploadControl = /*#__PURE__*/function () {
        function FileUploadControl(validators) {
          _classCallCheck(this, FileUploadControl);

          this.files = new Set();
          this.listVisible = true;
          this.status = STATUS.VALID;
          this.errors = [];
          this.validators = [];
          this.multipleEnabled = true;
          this.multipleChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.multipleEnabled);
          this.statusChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.eventsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.accept = null;
          this.acceptChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.accept);
          /**
           * track status `VALID`, `INVALID` or `DISABLED`
           */

          this.statusChanges = this.statusChanged.asObservable();
          /**
           * emit an event every time the value of the control
           * changes.
           * Initially returns last value
           */

          this.valueChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          /**
           * @internal
           * used to trigger layout change for list visibility
           */

          this.listVisibilityChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.listVisible);
          /**
           * track changed on accept attribute
           */

          this.acceptChanges = this.acceptChanged.asObservable();
          /**
           * emit an event every time user programmatically ask for certain event
           */

          this.eventsChanges = this.eventsChanged.asObservable();
          /**
           * track changed on multiple attribute
           */

          this.multipleChanges = this.multipleChanged.asObservable();
          this.defineValidators(validators);
        }
        /**
         * set functions that determines the synchronous validity of this control.
         */


        _createClass(FileUploadControl, [{
          key: "setValidators",
          value: function setValidators(newValidators) {
            this.defineValidators(newValidators);
            this.validate();
            return this;
          }
        }, {
          key: "defineValidators",
          value: function defineValidators(validators) {
            if (!IsNullOrEmpty(validators)) {
              this.validators = Array.isArray(validators) ? _toConsumableArray(validators) : [validators];
            }
          }
        }, {
          key: "addFile",
          value: function addFile(file) {
            /**
             * if multiple is disabled and one file exists
             * clear it and reupload a new one
             */
            if (!this.multipleEnabled && this.files.size === 1) {
              this.files.clear();
            }

            this.files.add(file);
            this.validate();
            this.valueChanges.next(Array.from(this.files.values()));
            return this;
          }
        }, {
          key: "removeFile",
          value: function removeFile(file) {
            if (!this.disabled) {
              this.files["delete"](file);
              this.validate();
              this.valueChanges.next(Array.from(this.files.values()));
            }

            return this;
          }
        }, {
          key: "addFiles",
          value: function addFiles(files) {
            this.addMultipleFiles(Array.from(files));
            return this;
          }
          /**
           * @internal
           * used to prevent valueChanges emit more times
           * when multiple files are uploaded
           */

        }, {
          key: "addMultipleFiles",
          value: function addMultipleFiles(files) {
            var _this = this;

            if (!this.multipleEnabled && !IsNullOrEmpty(files)) {
              // add only one file
              this.addFile(files[0]);
              return;
            }

            files.forEach(function (file) {
              return _this.files.add(file);
            });
            this.validate();
            this.valueChanges.next(Array.from(this.files.values()));
          }
        }, {
          key: "getError",
          value: function getError() {
            return this.errors;
          }
          /**
           * number of uploaded files
           */

        }, {
          key: "setValue",
          value: function setValue(files) {
            this.files.clear();

            if (files instanceof Array) {
              this.addMultipleFiles(files);
            } else {
              throw Error("FormControl.setValue was provided with wrong argument type, ".concat(files, " was provided instead Array<File>"));
            }

            return this;
          }
          /**
           * reset the control
           */

        }, {
          key: "clear",
          value: function clear() {
            this.files.clear();
            this.validate();
            this.valueChanges.next(Array.from(this.files.values()));
            return this;
          }
        }, {
          key: "setListVisibility",
          value: function setListVisibility() {
            var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.listVisible = isVisible;
            this.listVisibilityChanges.next(this.listVisible);
            return this;
          }
        }, {
          key: "enable",
          value: function enable() {
            var isEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.status = isEnabled ? STATUS.VALID : STATUS.DISABLED;
            this.validate();
            this.statusChanged.next(this.status);
            return this;
          }
        }, {
          key: "disable",
          value: function disable() {
            var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.status = isDisabled ? STATUS.DISABLED : STATUS.VALID;
            this.validate();
            this.statusChanged.next(this.status);
            return this;
          }
        }, {
          key: "click",
          value: function click() {
            this.eventsChanged.next(FileEvent.click);
            return this;
          }
        }, {
          key: "focus",
          value: function focus() {
            this.eventsChanged.next(FileEvent.focus);
            return this;
          }
        }, {
          key: "blur",
          value: function blur() {
            this.eventsChanged.next(FileEvent.blur);
            return this;
          }
          /**
           * specifies the types of files that the server accepts
           *
           * ### Example
           *
           * ```
           * acceptFiles("file_extension|audio/*|video/*|image/*|media_type")
           * ```
           *
           * To specify more than one value, separate the values with a comma (e.g. acceptFiles("audio/*,video/*,image/*").
           *
           */

        }, {
          key: "acceptFiles",
          value: function acceptFiles(accept) {
            this.accept = accept;
            this.acceptChanged.next(this.accept);
            return this;
          }
        }, {
          key: "acceptAll",
          value: function acceptAll() {
            this.accept = null;
            this.acceptChanged.next(this.accept);
            return this;
          }
        }, {
          key: "multiple",
          value: function multiple() {
            var isEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.multipleEnabled = isEnabled;
            this.multipleChanged.next(this.multipleEnabled);
            return this;
          }
        }, {
          key: "validate",
          value: function validate() {
            var _this2 = this;

            if (this.status !== STATUS.DISABLED) {
              var currentState = this.valid;
              this.errors = this.validators.map(function (validator) {
                return validator(_this2);
              }).filter(function (isInvalid) {
                return isInvalid;
              });

              if (currentState !== this.valid) {
                this.statusChanged.next(this.valid ? STATUS.VALID : STATUS.INVALID);
              }
            } else {
              this.errors.length = 0;
            }
          }
        }, {
          key: "valid",
          get: function get() {
            return this.errors.length === 0 && this.status !== STATUS.DISABLED;
          }
        }, {
          key: "invalid",
          get: function get() {
            return this.errors.length > 0;
          }
        }, {
          key: "size",
          get: function get() {
            return this.files.size;
          }
          /**
           * return list of Files
           */

        }, {
          key: "value",
          get: function get() {
            return Array.from(this.files.values());
          }
        }, {
          key: "isListVisible",
          get: function get() {
            return this.listVisible;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.status === STATUS.DISABLED;
          }
        }, {
          key: "isMultiple",
          get: function get() {
            return this.multipleEnabled;
          }
        }]);

        return FileUploadControl;
      }(); // -owner-group-others-
      // -rwxrwxrwx = 0777


      var FileAccess;

      (function (FileAccess) {
        FileAccess[FileAccess["None"] = 0] = "None";
        FileAccess[FileAccess["Read"] = 4] = "Read";
        FileAccess[FileAccess["Write"] = 2] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        FileAccess[FileAccess["Execute"] = 1] = "Execute";
        FileAccess[FileAccess["ReadWriteExecute"] = 7] = "ReadWriteExecute";
        FileAccess[FileAccess["ExecuteRead"] = 5] = "ExecuteRead";
        FileAccess[FileAccess["r"] = 4] = "r";
        FileAccess[FileAccess["w"] = 2] = "w";
        FileAccess[FileAccess["x"] = 1] = "x";
        FileAccess[FileAccess["rw"] = 6] = "rw";
        FileAccess[FileAccess["rwx"] = 7] = "rwx";
        FileAccess[FileAccess["xr"] = 5] = "xr";
      })(FileAccess || (FileAccess = {}));
      /**
       * This table lists some important MIME types for the Web copied from
       * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
       * http://www.iana.org/assignments/media-types/media-types.xhtml
       */


      var FileUploadTypes;

      (function (FileUploadTypes) {
        FileUploadTypes["arc"] = "application/octet-stream";
        FileUploadTypes["midi"] = "audio/midi";
        FileUploadTypes["ts"] = "application/typescript";
        FileUploadTypes["woff2"] = "font/woff2";
        FileUploadTypes["evy"] = "application/envoy";
        FileUploadTypes["fif"] = "application/fractals";
        FileUploadTypes["hta"] = "application/hta";
        FileUploadTypes["acx"] = "application/internet-property-stream";
        FileUploadTypes["dot"] = "application/msword";
        FileUploadTypes["dms"] = "application/octet-stream";
        FileUploadTypes["eps"] = "application/postscript";
        FileUploadTypes["ps"] = "application/postscript";
        FileUploadTypes["xla"] = "application/vnd.ms-excel";
        FileUploadTypes["xlc"] = "application/vnd.ms-excel";
        FileUploadTypes["xlm"] = "application/vnd.ms-excel";
        FileUploadTypes["xlt"] = "application/vnd.ms-excel";
        FileUploadTypes["xlw"] = "application/vnd.ms-excel";
        FileUploadTypes["msg"] = "application/vnd.ms-outlook";
        FileUploadTypes["sst"] = "application/vnd.ms-pkicertstore";
        FileUploadTypes["pot"] = "application/vnd.ms-powerpoint";
        FileUploadTypes["pps"] = "application/vnd.ms-powerpoint";
        FileUploadTypes["wcm"] = "application/vnd.ms-works";
        FileUploadTypes["wdb"] = "application/vnd.ms-works";
        FileUploadTypes["wks"] = "application/vnd.ms-works";
        FileUploadTypes["cdf"] = "application/x-cdf";
        FileUploadTypes["tgz"] = "application/x-compressed";
        FileUploadTypes["dcr"] = "application/x-director";
        FileUploadTypes["dxr"] = "application/x-director";
        FileUploadTypes["gz"] = "application/x-gzip";
        FileUploadTypes["ins"] = "application/x-internet-signup";
        FileUploadTypes["isp"] = "application/x-internet-signup";
        FileUploadTypes["iii"] = "application/x-iphone";
        FileUploadTypes["dll"] = "application/x-msdownload";
        FileUploadTypes["m13"] = "application/x-msmediaview";
        FileUploadTypes["m14"] = "application/x-msmediaview";
        FileUploadTypes["pma"] = "application/x-perfmon";
        FileUploadTypes["pmc"] = "application/x-perfmon";
        FileUploadTypes["pmr"] = "application/x-perfmon";
        FileUploadTypes["pmw"] = "application/x-perfmon";
        FileUploadTypes["pfx"] = "application/x-pkcs12";
        FileUploadTypes["spc"] = "application/x-pkcs7-certificates";
        FileUploadTypes["p7c"] = "application/x-pkcs7-mime";
        FileUploadTypes["texi"] = "application/x-texinfo";
        FileUploadTypes["roff"] = "application/x-troff";
        FileUploadTypes["tr"] = "application/x-troff";
        FileUploadTypes["man"] = "application/x-troff-man";
        FileUploadTypes["me"] = "application/x-troff-me";
        FileUploadTypes["ms"] = "application/x-troff-ms";
        FileUploadTypes["crt"] = "application/x-x509-ca-cert";
        FileUploadTypes["pko"] = "application/ynd.ms-pkipko";
        FileUploadTypes["snd"] = "audio/basic";
        FileUploadTypes["rmi"] = "audio/mid";
        FileUploadTypes["mp3"] = "audio/mpeg";
        FileUploadTypes["aifc"] = "audio/x-aiff";
        FileUploadTypes["aiff"] = "audio/x-aiff";
        FileUploadTypes["ra"] = "audio/x-pn-realaudio";
        FileUploadTypes["jpe"] = "image/jpeg";
        FileUploadTypes["jpeg"] = "image/jpeg";
        FileUploadTypes["jfif"] = "image/pipeg";
        FileUploadTypes["tif"] = "image/tiff";
        FileUploadTypes["mht"] = "message/rfc822";
        FileUploadTypes["mhtml"] = "message/rfc822";
        FileUploadTypes["nws"] = "message/rfc822";
        FileUploadTypes["htm"] = "text/html";
        FileUploadTypes["stm"] = "text/html";
        FileUploadTypes["uls"] = "text/iuls";
        FileUploadTypes["sct"] = "text/scriptlet";
        FileUploadTypes["htt"] = "text/webviewhtml";
        FileUploadTypes["htc"] = "text/x-component";
        FileUploadTypes["mp2"] = "video/mpeg";
        FileUploadTypes["mpa"] = "video/mpeg";
        FileUploadTypes["mpe"] = "video/mpeg";
        FileUploadTypes["mpg"] = "video/mpeg";
        FileUploadTypes["mpv2"] = "video/mpeg";
        FileUploadTypes["mov"] = "video/quicktime";
        FileUploadTypes["lsf"] = "video/x-la-asf";
        FileUploadTypes["lsx"] = "video/x-la-asf";
        FileUploadTypes["asr"] = "video/x-ms-asf";
        FileUploadTypes["asx"] = "video/x-ms-asf";
        FileUploadTypes["flr"] = "x-world/x-vrml";
        FileUploadTypes["vrml"] = "x-world/x-vrml";
        FileUploadTypes["wrz"] = "x-world/x-vrml";
        FileUploadTypes["xaf"] = "x-world/x-vrml";
        FileUploadTypes["xof"] = "x-world/x-vrml";
        FileUploadTypes["x3d"] = "application/vnd.hzn-3d-crossword";
        FileUploadTypes["3gp"] = "video/3gpp";
        FileUploadTypes["3g2"] = "video/3gpp2";
        FileUploadTypes["mseq"] = "application/vnd.mseq";
        FileUploadTypes["pwn"] = "application/vnd.3m.post-it-notes";
        FileUploadTypes["plb"] = "application/vnd.3gpp.pic-bw-large";
        FileUploadTypes["psb"] = "application/vnd.3gpp.pic-bw-small";
        FileUploadTypes["pvb"] = "application/vnd.3gpp.pic-bw-var";
        FileUploadTypes["tcap"] = "application/vnd.3gpp2.tcap";
        FileUploadTypes["7z"] = "application/x-7z-compressed";
        FileUploadTypes["abw"] = "application/x-abiword";
        FileUploadTypes["ace"] = "application/x-ace-compressed";
        FileUploadTypes["acc"] = "application/vnd.americandynamics.acc";
        FileUploadTypes["acu"] = "application/vnd.acucobol";
        FileUploadTypes["atc"] = "application/vnd.acucorp";
        FileUploadTypes["adp"] = "audio/adpcm";
        FileUploadTypes["aab"] = "application/x-authorware-bin";
        FileUploadTypes["aam"] = "application/x-authorware-map";
        FileUploadTypes["aas"] = "application/x-authorware-seg";
        FileUploadTypes["air"] = "application/vnd.adobe.air-application-installer-package+zip";
        FileUploadTypes["swf"] = "application/x-shockwave-flash";
        FileUploadTypes["fxp"] = "application/vnd.adobe.fxp";
        FileUploadTypes["pdf"] = "application/pdf";
        FileUploadTypes["ppd"] = "application/vnd.cups-ppd";
        FileUploadTypes["dir"] = "application/x-director";
        FileUploadTypes["xdp"] = "application/vnd.adobe.xdp+xml";
        FileUploadTypes["xfdf"] = "application/vnd.adobe.xfdf";
        FileUploadTypes["aac"] = "audio/x-aac";
        FileUploadTypes["ahead"] = "application/vnd.ahead.space";
        FileUploadTypes["azf"] = "application/vnd.airzip.filesecure.azf";
        FileUploadTypes["azs"] = "application/vnd.airzip.filesecure.azs";
        FileUploadTypes["azw"] = "application/vnd.amazon.ebook";
        FileUploadTypes["ami"] = "application/vnd.amiga.ami";
        FileUploadTypes["apk"] = "application/vnd.android.package-archive";
        FileUploadTypes["cii"] = "application/vnd.anser-web-certificate-issue-initiation";
        FileUploadTypes["fti"] = "application/vnd.anser-web-funds-transfer-initiation";
        FileUploadTypes["atx"] = "application/vnd.antix.game-component";
        FileUploadTypes["dmg"] = "application/x-apple-diskimage";
        FileUploadTypes["mpkg"] = "application/vnd.apple.installer+xml";
        FileUploadTypes["aw"] = "application/applixware";
        FileUploadTypes["les"] = "application/vnd.hhe.lesson-player";
        FileUploadTypes["swi"] = "application/vnd.aristanetworks.swi";
        FileUploadTypes["s"] = "text/x-asm";
        FileUploadTypes["atomcat"] = "application/atomcat+xml";
        FileUploadTypes["atomsvc"] = "application/atomsvc+xml";
        FileUploadTypes["atom"] = "application/atom+xml";
        FileUploadTypes["ac"] = "application/pkix-attr-cert";
        FileUploadTypes["aif"] = "audio/x-aiff";
        FileUploadTypes["avi"] = "video/x-msvideo";
        FileUploadTypes["aep"] = "application/vnd.audiograph";
        FileUploadTypes["dxf"] = "image/vnd.dxf";
        FileUploadTypes["dwf"] = "model/vnd.dwf";
        FileUploadTypes["par"] = "text/plain-bas";
        FileUploadTypes["bcpio"] = "application/x-bcpio";
        FileUploadTypes["bin"] = "application/octet-stream";
        FileUploadTypes["bmp"] = "image/bmp";
        FileUploadTypes["torrent"] = "application/x-bittorrent";
        FileUploadTypes["cod"] = "application/vnd.rim.cod";
        FileUploadTypes["mpm"] = "application/vnd.blueice.multipass";
        FileUploadTypes["bmi"] = "application/vnd.bmi";
        FileUploadTypes["sh"] = "application/x-sh";
        FileUploadTypes["btif"] = "image/prs.btif";
        FileUploadTypes["rep"] = "application/vnd.businessobjects";
        FileUploadTypes["bz"] = "application/x-bzip";
        FileUploadTypes["bz2"] = "application/x-bzip2";
        FileUploadTypes["csh"] = "application/x-csh";
        FileUploadTypes["c"] = "text/x-c";
        FileUploadTypes["cdxml"] = "application/vnd.chemdraw+xml";
        FileUploadTypes["css"] = "text/css";
        FileUploadTypes["cdx"] = "chemical/x-cdx";
        FileUploadTypes["cml"] = "chemical/x-cml";
        FileUploadTypes["csml"] = "chemical/x-csml";
        FileUploadTypes["cdbcmsg"] = "application/vnd.contact.cmsg";
        FileUploadTypes["cla"] = "application/vnd.claymore";
        FileUploadTypes["c4g"] = "application/vnd.clonk.c4group";
        FileUploadTypes["sub"] = "image/vnd.dvb.subtitle";
        FileUploadTypes["cdmia"] = "application/cdmi-capability";
        FileUploadTypes["cdmic"] = "application/cdmi-container";
        FileUploadTypes["cdmid"] = "application/cdmi-domain";
        FileUploadTypes["cdmio"] = "application/cdmi-object";
        FileUploadTypes["cdmiq"] = "application/cdmi-queue";
        FileUploadTypes["c11amc"] = "application/vnd.cluetrust.cartomobile-config";
        FileUploadTypes["c11amz"] = "application/vnd.cluetrust.cartomobile-config-pkg";
        FileUploadTypes["ras"] = "image/x-cmu-raster";
        FileUploadTypes["dae"] = "model/vnd.collada+xml";
        FileUploadTypes["csv"] = "text/csv";
        FileUploadTypes["cpt"] = "application/mac-compactpro";
        FileUploadTypes["wmlc"] = "application/vnd.wap.wmlc";
        FileUploadTypes["cgm"] = "image/cgm";
        FileUploadTypes["ice"] = "x-conference/x-cooltalk";
        FileUploadTypes["cmx"] = "image/x-cmx";
        FileUploadTypes["xar"] = "application/vnd.xara";
        FileUploadTypes["cmc"] = "application/vnd.cosmocaller";
        FileUploadTypes["cpio"] = "application/x-cpio";
        FileUploadTypes["clkx"] = "application/vnd.crick.clicker";
        FileUploadTypes["clkk"] = "application/vnd.crick.clicker.keyboard";
        FileUploadTypes["clkp"] = "application/vnd.crick.clicker.palette";
        FileUploadTypes["clkt"] = "application/vnd.crick.clicker.template";
        FileUploadTypes["clkw"] = "application/vnd.crick.clicker.wordbank";
        FileUploadTypes["wbs"] = "application/vnd.criticaltools.wbs+xml";
        FileUploadTypes["cryptonote"] = "application/vnd.rig.cryptonote";
        FileUploadTypes["cif"] = "chemical/x-cif";
        FileUploadTypes["cmdf"] = "chemical/x-cmdf";
        FileUploadTypes["cu"] = "application/cu-seeme";
        FileUploadTypes["cww"] = "application/prs.cww";
        FileUploadTypes["curl"] = "text/vnd.curl";
        FileUploadTypes["dcurl"] = "text/vnd.curl.dcurl";
        FileUploadTypes["mcurl"] = "text/vnd.curl.mcurl";
        FileUploadTypes["scurl"] = "text/vnd.curl.scurl";
        FileUploadTypes["car"] = "application/vnd.curl.car";
        FileUploadTypes["pcurl"] = "application/vnd.curl.pcurl";
        FileUploadTypes["cmp"] = "application/vnd.yellowriver-custom-menu";
        FileUploadTypes["dssc"] = "application/dssc+der";
        FileUploadTypes["xdssc"] = "application/dssc+xml";
        FileUploadTypes["deb"] = "application/x-debian-package";
        FileUploadTypes["uva"] = "audio/vnd.dece.audio";
        FileUploadTypes["uvi"] = "image/vnd.dece.graphic";
        FileUploadTypes["uvh"] = "video/vnd.dece.hd";
        FileUploadTypes["uvm"] = "video/vnd.dece.mobile";
        FileUploadTypes["uvu"] = "video/vnd.uvvu.mp4";
        FileUploadTypes["uvp"] = "video/vnd.dece.pd";
        FileUploadTypes["uvs"] = "video/vnd.dece.sd";
        FileUploadTypes["uvv"] = "video/vnd.dece.video";
        FileUploadTypes["dvi"] = "application/x-dvi";
        FileUploadTypes["seed"] = "application/vnd.fdsn.seed";
        FileUploadTypes["dtb"] = "application/x-dtbook+xml";
        FileUploadTypes["res"] = "application/x-dtbresource+xml";
        FileUploadTypes["ait"] = "application/vnd.dvb.ait";
        FileUploadTypes["svc"] = "application/vnd.dvb.service";
        FileUploadTypes["eol"] = "audio/vnd.digital-winds";
        FileUploadTypes["djvu"] = "image/vnd.djvu";
        FileUploadTypes["dtd"] = "application/xml-dtd";
        FileUploadTypes["mlp"] = "application/vnd.dolby.mlp";
        FileUploadTypes["wad"] = "application/x-doom";
        FileUploadTypes["dpg"] = "application/vnd.dpgraph";
        FileUploadTypes["dra"] = "audio/vnd.dra";
        FileUploadTypes["dfac"] = "application/vnd.dreamfactory";
        FileUploadTypes["dts"] = "audio/vnd.dts";
        FileUploadTypes["dtshd"] = "audio/vnd.dts.hd";
        FileUploadTypes["dwg"] = "image/vnd.dwg";
        FileUploadTypes["geo"] = "application/vnd.dynageo";
        FileUploadTypes["es"] = "application/ecmascript";
        FileUploadTypes["mag"] = "application/vnd.ecowin.chart";
        FileUploadTypes["mmr"] = "image/vnd.fujixerox.edmics-mmr";
        FileUploadTypes["rlc"] = "image/vnd.fujixerox.edmics-rlc";
        FileUploadTypes["exi"] = "application/exi";
        FileUploadTypes["mgz"] = "application/vnd.proteus.magazine";
        FileUploadTypes["epub"] = "application/epub+zip";
        FileUploadTypes["eml"] = "message/rfc822";
        FileUploadTypes["nml"] = "application/vnd.enliven";
        FileUploadTypes["xpr"] = "application/vnd.is-xpr";
        FileUploadTypes["xif"] = "image/vnd.xiff";
        FileUploadTypes["xfdl"] = "application/vnd.xfdl";
        FileUploadTypes["emma"] = "application/emma+xml";
        FileUploadTypes["ez2"] = "application/vnd.ezpix-album";
        FileUploadTypes["ez3"] = "application/vnd.ezpix-package";
        FileUploadTypes["fst"] = "image/vnd.fst";
        FileUploadTypes["fvt"] = "video/vnd.fvt";
        FileUploadTypes["fbs"] = "image/vnd.fastbidsheet";
        FileUploadTypes["fe_launch"] = "application/vnd.denovo.fcselayout-link";
        FileUploadTypes["f4v"] = "video/x-f4v";
        FileUploadTypes["flv"] = "video/x-flv";
        FileUploadTypes["fpx"] = "image/vnd.fpx";
        FileUploadTypes["npx"] = "image/vnd.net-fpx";
        FileUploadTypes["flx"] = "text/vnd.fmi.flexstor";
        FileUploadTypes["fli"] = "video/x-fli";
        FileUploadTypes["ftc"] = "application/vnd.fluxtime.clip";
        FileUploadTypes["fdf"] = "application/vnd.fdf";
        FileUploadTypes["f"] = "text/x-fortran";
        FileUploadTypes["mif"] = "application/vnd.mif";
        FileUploadTypes["fm"] = "application/vnd.framemaker";
        FileUploadTypes["fh"] = "image/x-freehand";
        FileUploadTypes["fsc"] = "application/vnd.fsc.weblaunch";
        FileUploadTypes["fnc"] = "application/vnd.frogans.fnc";
        FileUploadTypes["ltf"] = "application/vnd.frogans.ltf";
        FileUploadTypes["ddd"] = "application/vnd.fujixerox.ddd";
        FileUploadTypes["xdw"] = "application/vnd.fujixerox.docuworks";
        FileUploadTypes["xbd"] = "application/vnd.fujixerox.docuworks.binder";
        FileUploadTypes["oas"] = "application/vnd.fujitsu.oasys";
        FileUploadTypes["oa2"] = "application/vnd.fujitsu.oasys2";
        FileUploadTypes["oa3"] = "application/vnd.fujitsu.oasys3";
        FileUploadTypes["fg5"] = "application/vnd.fujitsu.oasysgp";
        FileUploadTypes["bh2"] = "application/vnd.fujitsu.oasysprs";
        FileUploadTypes["spl"] = "application/x-futuresplash";
        FileUploadTypes["fzs"] = "application/vnd.fuzzysheet";
        FileUploadTypes["g3"] = "image/g3fax";
        FileUploadTypes["gmx"] = "application/vnd.gmx";
        FileUploadTypes["gtw"] = "model/vnd.gtw";
        FileUploadTypes["txd"] = "application/vnd.genomatix.tuxedo";
        FileUploadTypes["ggb"] = "application/vnd.geogebra.file";
        FileUploadTypes["ggt"] = "application/vnd.geogebra.tool";
        FileUploadTypes["gdl"] = "model/vnd.gdl";
        FileUploadTypes["gex"] = "application/vnd.geometry-explorer";
        FileUploadTypes["gxt"] = "application/vnd.geonext";
        FileUploadTypes["g2w"] = "application/vnd.geoplan";
        FileUploadTypes["g3w"] = "application/vnd.geospace";
        FileUploadTypes["gsf"] = "application/x-font-ghostscript";
        FileUploadTypes["bdf"] = "application/x-font-bdf";
        FileUploadTypes["gtar"] = "application/x-gtar";
        FileUploadTypes["texinfo"] = "application/x-texinfo";
        FileUploadTypes["gnumeric"] = "application/x-gnumeric";
        FileUploadTypes["kml"] = "application/vnd.google-earth.kml+xml";
        FileUploadTypes["kmz"] = "application/vnd.google-earth.kmz";
        FileUploadTypes["gqf"] = "application/vnd.grafeq";
        FileUploadTypes["gif"] = "image/gif";
        FileUploadTypes["gv"] = "text/vnd.graphviz";
        FileUploadTypes["gac"] = "application/vnd.groove-account";
        FileUploadTypes["ghf"] = "application/vnd.groove-help";
        FileUploadTypes["gim"] = "application/vnd.groove-identity-message";
        FileUploadTypes["grv"] = "application/vnd.groove-injector";
        FileUploadTypes["gtm"] = "application/vnd.groove-tool-message";
        FileUploadTypes["tpl"] = "application/vnd.groove-tool-template";
        FileUploadTypes["vcg"] = "application/vnd.groove-vcard";
        FileUploadTypes["h261"] = "video/h261";
        FileUploadTypes["h263"] = "video/h263";
        FileUploadTypes["h264"] = "video/h264";
        FileUploadTypes["hpid"] = "application/vnd.hp-hpid";
        FileUploadTypes["hps"] = "application/vnd.hp-hps";
        FileUploadTypes["hdf"] = "application/x-hdf";
        FileUploadTypes["rip"] = "audio/vnd.rip";
        FileUploadTypes["hbci"] = "application/vnd.hbci";
        FileUploadTypes["jlt"] = "application/vnd.hp-jlyt";
        FileUploadTypes["pcl"] = "application/vnd.hp-pcl";
        FileUploadTypes["hpgl"] = "application/vnd.hp-hpgl";
        FileUploadTypes["hvs"] = "application/vnd.yamaha.hv-script";
        FileUploadTypes["hvd"] = "application/vnd.yamaha.hv-dic";
        FileUploadTypes["hvp"] = "application/vnd.yamaha.hv-voice";
        FileUploadTypes["sfd-hdstx"] = "application/vnd.hydrostatix.sof-data";
        FileUploadTypes["stk"] = "application/hyperstudio";
        FileUploadTypes["hal"] = "application/vnd.hal+xml";
        FileUploadTypes["html"] = "text/html";
        FileUploadTypes["irm"] = "application/vnd.ibm.rights-management";
        FileUploadTypes["sc"] = "application/vnd.ibm.secure-container";
        FileUploadTypes["ics"] = "text/calendar";
        FileUploadTypes["icc"] = "application/vnd.iccprofile";
        FileUploadTypes["ico"] = "image/x-icon";
        FileUploadTypes["igl"] = "application/vnd.igloader";
        FileUploadTypes["ief"] = "image/ief";
        FileUploadTypes["ivp"] = "application/vnd.immervision-ivp";
        FileUploadTypes["ivu"] = "application/vnd.immervision-ivu";
        FileUploadTypes["rif"] = "application/reginfo+xml";
        FileUploadTypes["3dml"] = "text/vnd.in3d.3dml";
        FileUploadTypes["spot"] = "text/vnd.in3d.spot";
        FileUploadTypes["igs"] = "model/iges";
        FileUploadTypes["i2g"] = "application/vnd.intergeo";
        FileUploadTypes["cdy"] = "application/vnd.cinderella";
        FileUploadTypes["xpw"] = "application/vnd.intercon.formnet";
        FileUploadTypes["fcs"] = "application/vnd.isac.fcs";
        FileUploadTypes["ipfix"] = "application/ipfix";
        FileUploadTypes["cer"] = "application/pkix-cert";
        FileUploadTypes["pki"] = "application/pkixcmp";
        FileUploadTypes["crl"] = "application/pkix-crl";
        FileUploadTypes["pkipath"] = "application/pkix-pkipath";
        FileUploadTypes["igm"] = "application/vnd.insors.igm";
        FileUploadTypes["rcprofile"] = "application/vnd.ipunplugged.rcprofile";
        FileUploadTypes["irp"] = "application/vnd.irepository.package+xml";
        FileUploadTypes["jad"] = "text/vnd.sun.j2me.app-descriptor";
        FileUploadTypes["jar"] = "application/java-archive";
        FileUploadTypes["class"] = "application/java-vm";
        FileUploadTypes["jnlp"] = "application/x-java-jnlp-file";
        FileUploadTypes["ser"] = "application/java-serialized-object";
        FileUploadTypes["java"] = "text/x-java-source,java";
        FileUploadTypes["js"] = "application/javascript";
        FileUploadTypes["json"] = "application/json";
        FileUploadTypes["joda"] = "application/vnd.joost.joda-archive";
        FileUploadTypes["jpm"] = "video/jpm";
        FileUploadTypes["jpg"] = "image/jpeg";
        FileUploadTypes["pjpeg"] = "image/pjpeg";
        FileUploadTypes["jpgv"] = "video/jpeg";
        FileUploadTypes["ktz"] = "application/vnd.kahootz";
        FileUploadTypes["mmd"] = "application/vnd.chipnuts.karaoke-mmd";
        FileUploadTypes["karbon"] = "application/vnd.kde.karbon";
        FileUploadTypes["chrt"] = "application/vnd.kde.kchart";
        FileUploadTypes["kfo"] = "application/vnd.kde.kformula";
        FileUploadTypes["flw"] = "application/vnd.kde.kivio";
        FileUploadTypes["kon"] = "application/vnd.kde.kontour";
        FileUploadTypes["kpr"] = "application/vnd.kde.kpresenter";
        FileUploadTypes["ksp"] = "application/vnd.kde.kspread";
        FileUploadTypes["kwd"] = "application/vnd.kde.kword";
        FileUploadTypes["htke"] = "application/vnd.kenameaapp";
        FileUploadTypes["kia"] = "application/vnd.kidspiration";
        FileUploadTypes["kne"] = "application/vnd.kinar";
        FileUploadTypes["sse"] = "application/vnd.kodak-descriptor";
        FileUploadTypes["lasxml"] = "application/vnd.las.las+xml";
        FileUploadTypes["latex"] = "application/x-latex";
        FileUploadTypes["lbd"] = "application/vnd.llamagraphics.life-balance.desktop";
        FileUploadTypes["lbe"] = "application/vnd.llamagraphics.life-balance.exchange+xml";
        FileUploadTypes["jam"] = "application/vnd.jam";
        FileUploadTypes["apr"] = "application/vnd.lotus-approach";
        FileUploadTypes["pre"] = "application/vnd.lotus-freelance";
        FileUploadTypes["nsf"] = "application/vnd.lotus-notes";
        FileUploadTypes["org"] = "application/vnd.lotus-organizer";
        FileUploadTypes["scm"] = "application/vnd.lotus-screencam";
        FileUploadTypes["lwp"] = "application/vnd.lotus-wordpro";
        FileUploadTypes["lvp"] = "audio/vnd.lucent.voice";
        FileUploadTypes["m3u"] = "audio/x-mpegurl";
        FileUploadTypes["m4v"] = "video/x-m4v";
        FileUploadTypes["hqx"] = "application/mac-binhex40";
        FileUploadTypes["portpkg"] = "application/vnd.macports.portpkg";
        FileUploadTypes["mgp"] = "application/vnd.osgeo.mapguide.package";
        FileUploadTypes["mrc"] = "application/marc";
        FileUploadTypes["mrcx"] = "application/marcxml+xml";
        FileUploadTypes["mxf"] = "application/mxf";
        FileUploadTypes["nbp"] = "application/vnd.wolfram.player";
        FileUploadTypes["ma"] = "application/mathematica";
        FileUploadTypes["mathml"] = "application/mathml+xml";
        FileUploadTypes["mbox"] = "application/mbox";
        FileUploadTypes["mc1"] = "application/vnd.medcalcdata";
        FileUploadTypes["mscml"] = "application/mediaservercontrol+xml";
        FileUploadTypes["cdkey"] = "application/vnd.mediastation.cdkey";
        FileUploadTypes["mwf"] = "application/vnd.mfer";
        FileUploadTypes["mfm"] = "application/vnd.mfmp";
        FileUploadTypes["msh"] = "model/mesh";
        FileUploadTypes["mads"] = "application/mads+xml";
        FileUploadTypes["mets"] = "application/mets+xml";
        FileUploadTypes["mods"] = "application/mods+xml";
        FileUploadTypes["meta4"] = "application/metalink4+xml";
        FileUploadTypes["mcd"] = "application/vnd.mcd";
        FileUploadTypes["flo"] = "application/vnd.micrografx.flo";
        FileUploadTypes["igx"] = "application/vnd.micrografx.igx";
        FileUploadTypes["es3"] = "application/vnd.eszigno3+xml";
        FileUploadTypes["mdb"] = "application/x-msaccess";
        FileUploadTypes["asf"] = "video/x-ms-asf";
        FileUploadTypes["exe"] = "application/x-msdownload";
        FileUploadTypes["cil"] = "application/vnd.ms-artgalry";
        FileUploadTypes["cab"] = "application/vnd.ms-cab-compressed";
        FileUploadTypes["ims"] = "application/vnd.ms-ims";
        FileUploadTypes["application"] = "application/x-ms-application";
        FileUploadTypes["clp"] = "application/x-msclip";
        FileUploadTypes["mdi"] = "image/vnd.ms-modi";
        FileUploadTypes["eot"] = "application/vnd.ms-fontobject";
        FileUploadTypes["xls"] = "application/vnd.ms-excel";
        FileUploadTypes["xlam"] = "application/vnd.ms-excel.addin.macroenabled.12";
        FileUploadTypes["xlsb"] = "application/vnd.ms-excel.sheet.binary.macroenabled.12";
        FileUploadTypes["xltm"] = "application/vnd.ms-excel.template.macroenabled.12";
        FileUploadTypes["xlsm"] = "application/vnd.ms-excel.sheet.macroenabled.12";
        FileUploadTypes["chm"] = "application/vnd.ms-htmlhelp";
        FileUploadTypes["crd"] = "application/x-mscardfile";
        FileUploadTypes["lrm"] = "application/vnd.ms-lrm";
        FileUploadTypes["mvb"] = "application/x-msmediaview";
        FileUploadTypes["mny"] = "application/x-msmoney";
        FileUploadTypes["pptx"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
        FileUploadTypes["sldx"] = "application/vnd.openxmlformats-officedocument.presentationml.slide";
        FileUploadTypes["ppsx"] = "application/vnd.openxmlformats-officedocument.presentationml.slideshow";
        FileUploadTypes["potx"] = "application/vnd.openxmlformats-officedocument.presentationml.template";
        FileUploadTypes["xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        FileUploadTypes["xltx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.template";
        FileUploadTypes["docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        FileUploadTypes["dotx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
        FileUploadTypes["obd"] = "application/x-msbinder";
        FileUploadTypes["thmx"] = "application/vnd.ms-officetheme";
        FileUploadTypes["onetoc"] = "application/onenote";
        FileUploadTypes["pya"] = "audio/vnd.ms-playready.media.pya";
        FileUploadTypes["pyv"] = "video/vnd.ms-playready.media.pyv";
        FileUploadTypes["ppt"] = "application/vnd.ms-powerpoint";
        FileUploadTypes["ppa"] = "application/vnd.ms-powerpoint";
        FileUploadTypes["ppam"] = "application/vnd.ms-powerpoint.addin.macroenabled.12";
        FileUploadTypes["sldm"] = "application/vnd.ms-powerpoint.slide.macroenabled.12";
        FileUploadTypes["pptm"] = "application/vnd.ms-powerpoint.presentation.macroenabled.12";
        FileUploadTypes["ppsm"] = "application/vnd.ms-powerpoint.slideshow.macroenabled.12";
        FileUploadTypes["potm"] = "application/vnd.ms-powerpoint.template.macroenabled.12";
        FileUploadTypes["mpp"] = "application/vnd.ms-project";
        FileUploadTypes["pub"] = "application/x-mspublisher";
        FileUploadTypes["scd"] = "application/x-msschedule";
        FileUploadTypes["xap"] = "application/x-silverlight-app";
        FileUploadTypes["stl"] = "application/vnd.ms-pki.stl";
        FileUploadTypes["cat"] = "application/vnd.ms-pki.seccat";
        FileUploadTypes["vsd"] = "application/vnd.visio";
        FileUploadTypes["vsdx"] = "application/vnd.visio2013";
        FileUploadTypes["wm"] = "video/x-ms-wm";
        FileUploadTypes["wma"] = "audio/x-ms-wma";
        FileUploadTypes["wax"] = "audio/x-ms-wax";
        FileUploadTypes["wmx"] = "video/x-ms-wmx";
        FileUploadTypes["wmd"] = "application/x-ms-wmd";
        FileUploadTypes["wpl"] = "application/vnd.ms-wpl";
        FileUploadTypes["wmz"] = "application/x-ms-wmz";
        FileUploadTypes["wmv"] = "video/x-ms-wmv";
        FileUploadTypes["wvx"] = "video/x-ms-wvx";
        FileUploadTypes["wmf"] = "application/x-msmetafile";
        FileUploadTypes["trm"] = "application/x-msterminal";
        FileUploadTypes["doc"] = "application/msword";
        FileUploadTypes["docm"] = "application/vnd.ms-word.document.macroenabled.12";
        FileUploadTypes["dotm"] = "application/vnd.ms-word.template.macroenabled.12";
        FileUploadTypes["wri"] = "application/x-mswrite";
        FileUploadTypes["wps"] = "application/vnd.ms-works";
        FileUploadTypes["xbap"] = "application/x-ms-xbap";
        FileUploadTypes["xps"] = "application/vnd.ms-xpsdocument";
        FileUploadTypes["mid"] = "audio/midi";
        FileUploadTypes["mpy"] = "application/vnd.ibm.minipay";
        FileUploadTypes["afp"] = "application/vnd.ibm.modcap";
        FileUploadTypes["rms"] = "application/vnd.jcp.javame.midlet-rms";
        FileUploadTypes["tmo"] = "application/vnd.tmobile-livetv";
        FileUploadTypes["prc"] = "application/x-mobipocket-ebook";
        FileUploadTypes["mbk"] = "application/vnd.mobius.mbk";
        FileUploadTypes["dis"] = "application/vnd.mobius.dis";
        FileUploadTypes["plc"] = "application/vnd.mobius.plc";
        FileUploadTypes["mqy"] = "application/vnd.mobius.mqy";
        FileUploadTypes["msl"] = "application/vnd.mobius.msl";
        FileUploadTypes["txf"] = "application/vnd.mobius.txf";
        FileUploadTypes["daf"] = "application/vnd.mobius.daf";
        FileUploadTypes["fly"] = "text/vnd.fly";
        FileUploadTypes["mpc"] = "application/vnd.mophun.certificate";
        FileUploadTypes["mpn"] = "application/vnd.mophun.application";
        FileUploadTypes["mj2"] = "video/mj2";
        FileUploadTypes["mpga"] = "audio/mpeg";
        FileUploadTypes["mxu"] = "video/vnd.mpegurl";
        FileUploadTypes["mpeg"] = "video/mpeg";
        FileUploadTypes["m21"] = "application/mp21";
        FileUploadTypes["mp4a"] = "audio/mp4";
        FileUploadTypes["mp4"] = "video/mp4";
        FileUploadTypes["m3u8"] = "application/vnd.apple.mpegurl";
        FileUploadTypes["mus"] = "application/vnd.musician";
        FileUploadTypes["msty"] = "application/vnd.muvee.style";
        FileUploadTypes["mxml"] = "application/xv+xml";
        FileUploadTypes["ngdat"] = "application/vnd.nokia.n-gage.data";
        FileUploadTypes["n-gage"] = "application/vnd.nokia.n-gage.symbian.install";
        FileUploadTypes["ncx"] = "application/x-dtbncx+xml";
        FileUploadTypes["nc"] = "application/x-netcdf";
        FileUploadTypes["nlu"] = "application/vnd.neurolanguage.nlu";
        FileUploadTypes["dna"] = "application/vnd.dna";
        FileUploadTypes["nnd"] = "application/vnd.noblenet-directory";
        FileUploadTypes["nns"] = "application/vnd.noblenet-sealer";
        FileUploadTypes["nnw"] = "application/vnd.noblenet-web";
        FileUploadTypes["rpst"] = "application/vnd.nokia.radio-preset";
        FileUploadTypes["rpss"] = "application/vnd.nokia.radio-presets";
        FileUploadTypes["n3"] = "text/n3";
        FileUploadTypes["edm"] = "application/vnd.novadigm.edm";
        FileUploadTypes["edx"] = "application/vnd.novadigm.edx";
        FileUploadTypes["ext"] = "application/vnd.novadigm.ext";
        FileUploadTypes["gph"] = "application/vnd.flographit";
        FileUploadTypes["ecelp4800"] = "audio/vnd.nuera.ecelp4800";
        FileUploadTypes["ecelp7470"] = "audio/vnd.nuera.ecelp7470";
        FileUploadTypes["ecelp9600"] = "audio/vnd.nuera.ecelp9600";
        FileUploadTypes["oda"] = "application/oda";
        FileUploadTypes["ogx"] = "application/ogg";
        FileUploadTypes["oga"] = "audio/ogg";
        FileUploadTypes["ogv"] = "video/ogg";
        FileUploadTypes["dd2"] = "application/vnd.oma.dd2+xml";
        FileUploadTypes["oth"] = "application/vnd.oasis.opendocument.text-web";
        FileUploadTypes["opf"] = "application/oebps-package+xml";
        FileUploadTypes["qbo"] = "application/vnd.intu.qbo";
        FileUploadTypes["oxt"] = "application/vnd.openofficeorg.extension";
        FileUploadTypes["osf"] = "application/vnd.yamaha.openscoreformat";
        FileUploadTypes["weba"] = "audio/webm";
        FileUploadTypes["webm"] = "video/webm";
        FileUploadTypes["odc"] = "application/vnd.oasis.opendocument.chart";
        FileUploadTypes["otc"] = "application/vnd.oasis.opendocument.chart-template";
        FileUploadTypes["odb"] = "application/vnd.oasis.opendocument.database";
        FileUploadTypes["odf"] = "application/vnd.oasis.opendocument.formula";
        FileUploadTypes["odft"] = "application/vnd.oasis.opendocument.formula-template";
        FileUploadTypes["odg"] = "application/vnd.oasis.opendocument.graphics";
        FileUploadTypes["otg"] = "application/vnd.oasis.opendocument.graphics-template";
        FileUploadTypes["odi"] = "application/vnd.oasis.opendocument.image";
        FileUploadTypes["oti"] = "application/vnd.oasis.opendocument.image-template";
        FileUploadTypes["odp"] = "application/vnd.oasis.opendocument.presentation";
        FileUploadTypes["otp"] = "application/vnd.oasis.opendocument.presentation-template";
        FileUploadTypes["ods"] = "application/vnd.oasis.opendocument.spreadsheet";
        FileUploadTypes["ots"] = "application/vnd.oasis.opendocument.spreadsheet-template";
        FileUploadTypes["odt"] = "application/vnd.oasis.opendocument.text";
        FileUploadTypes["odm"] = "application/vnd.oasis.opendocument.text-master";
        FileUploadTypes["ott"] = "application/vnd.oasis.opendocument.text-template";
        FileUploadTypes["ktx"] = "image/ktx";
        FileUploadTypes["sxc"] = "application/vnd.sun.xml.calc";
        FileUploadTypes["stc"] = "application/vnd.sun.xml.calc.template";
        FileUploadTypes["sxd"] = "application/vnd.sun.xml.draw";
        FileUploadTypes["std"] = "application/vnd.sun.xml.draw.template";
        FileUploadTypes["sxi"] = "application/vnd.sun.xml.impress";
        FileUploadTypes["sti"] = "application/vnd.sun.xml.impress.template";
        FileUploadTypes["sxm"] = "application/vnd.sun.xml.math";
        FileUploadTypes["sxw"] = "application/vnd.sun.xml.writer";
        FileUploadTypes["sxg"] = "application/vnd.sun.xml.writer.global";
        FileUploadTypes["stw"] = "application/vnd.sun.xml.writer.template";
        FileUploadTypes["otf"] = "application/x-font-otf";
        FileUploadTypes["osfpvg"] = "application/vnd.yamaha.openscoreformat.osfpvg+xml";
        FileUploadTypes["dp"] = "application/vnd.osgi.dp";
        FileUploadTypes["pdb"] = "application/vnd.palm";
        FileUploadTypes["p"] = "text/x-pascal";
        FileUploadTypes["paw"] = "application/vnd.pawaafile";
        FileUploadTypes["pclxl"] = "application/vnd.hp-pclxl";
        FileUploadTypes["efif"] = "application/vnd.picsel";
        FileUploadTypes["pcx"] = "image/x-pcx";
        FileUploadTypes["psd"] = "image/vnd.adobe.photoshop";
        FileUploadTypes["prf"] = "application/pics-rules";
        FileUploadTypes["pic"] = "image/x-pict";
        FileUploadTypes["chat"] = "application/x-chat";
        FileUploadTypes["p10"] = "application/pkcs10";
        FileUploadTypes["p12"] = "application/x-pkcs12";
        FileUploadTypes["p7m"] = "application/pkcs7-mime";
        FileUploadTypes["p7s"] = "application/pkcs7-signature";
        FileUploadTypes["p7r"] = "application/x-pkcs7-certreqresp";
        FileUploadTypes["p7b"] = "application/x-pkcs7-certificates";
        FileUploadTypes["p8"] = "application/pkcs8";
        FileUploadTypes["plf"] = "application/vnd.pocketlearn";
        FileUploadTypes["pnm"] = "image/x-portable-anymap";
        FileUploadTypes["pbm"] = "image/x-portable-bitmap";
        FileUploadTypes["pcf"] = "application/x-font-pcf";
        FileUploadTypes["pfr"] = "application/font-tdpfr";
        FileUploadTypes["pgn"] = "application/x-chess-pgn";
        FileUploadTypes["pgm"] = "image/x-portable-graymap";
        FileUploadTypes["png"] = "image/png";
        FileUploadTypes["ppm"] = "image/x-portable-pixmap";
        FileUploadTypes["pskcxml"] = "application/pskc+xml";
        FileUploadTypes["pml"] = "application/vnd.ctc-posml";
        FileUploadTypes["ai"] = "application/postscript";
        FileUploadTypes["pfa"] = "application/x-font-type1";
        FileUploadTypes["pbd"] = "application/vnd.powerbuilder6";
        FileUploadTypes["pgp"] = "application/pgp-encrypted";
        FileUploadTypes["box"] = "application/vnd.previewsystems.box";
        FileUploadTypes["ptid"] = "application/vnd.pvi.ptid1";
        FileUploadTypes["pls"] = "application/pls+xml";
        FileUploadTypes["str"] = "application/vnd.pg.format";
        FileUploadTypes["ei6"] = "application/vnd.pg.osasli";
        FileUploadTypes["dsc"] = "text/prs.lines.tag";
        FileUploadTypes["psf"] = "application/x-font-linux-psf";
        FileUploadTypes["qps"] = "application/vnd.publishare-delta-tree";
        FileUploadTypes["wg"] = "application/vnd.pmi.widget";
        FileUploadTypes["qxd"] = "application/vnd.quark.quarkxpress";
        FileUploadTypes["esf"] = "application/vnd.epson.esf";
        FileUploadTypes["msf"] = "application/vnd.epson.msf";
        FileUploadTypes["ssf"] = "application/vnd.epson.ssf";
        FileUploadTypes["qam"] = "application/vnd.epson.quickanime";
        FileUploadTypes["qfx"] = "application/vnd.intu.qfx";
        FileUploadTypes["qt"] = "video/quicktime";
        FileUploadTypes["rar"] = "application/x-rar-compressed";
        FileUploadTypes["ram"] = "audio/x-pn-realaudio";
        FileUploadTypes["rmp"] = "audio/x-pn-realaudio-plugin";
        FileUploadTypes["rsd"] = "application/rsd+xml";
        FileUploadTypes["rm"] = "application/vnd.rn-realmedia";
        FileUploadTypes["bed"] = "application/vnd.realvnc.bed";
        FileUploadTypes["mxl"] = "application/vnd.recordare.musicxml";
        FileUploadTypes["musicxml"] = "application/vnd.recordare.musicxml+xml";
        FileUploadTypes["rnc"] = "application/relax-ng-compact-syntax";
        FileUploadTypes["rdz"] = "application/vnd.data-vision.rdz";
        FileUploadTypes["rdf"] = "application/rdf+xml";
        FileUploadTypes["rp9"] = "application/vnd.cloanto.rp9";
        FileUploadTypes["jisp"] = "application/vnd.jisp";
        FileUploadTypes["rtf"] = "application/rtf";
        FileUploadTypes["rtx"] = "text/richtext";
        FileUploadTypes["link66"] = "application/vnd.route66.link66+xml";
        FileUploadTypes["rss"] = "application/rss+xml,";
        FileUploadTypes["shf"] = "application/shf+xml";
        FileUploadTypes["st"] = "application/vnd.sailingtracker.track";
        FileUploadTypes["svg"] = "image/svg+xml";
        FileUploadTypes["sus"] = "application/vnd.sus-calendar";
        FileUploadTypes["sru"] = "application/sru+xml";
        FileUploadTypes["setpay"] = "application/set-payment-initiation";
        FileUploadTypes["setreg"] = "application/set-registration-initiation";
        FileUploadTypes["sema"] = "application/vnd.sema";
        FileUploadTypes["semd"] = "application/vnd.semd";
        FileUploadTypes["semf"] = "application/vnd.semf";
        FileUploadTypes["see"] = "application/vnd.seemail";
        FileUploadTypes["snf"] = "application/x-font-snf";
        FileUploadTypes["spq"] = "application/scvp-vp-request";
        FileUploadTypes["spp"] = "application/scvp-vp-response";
        FileUploadTypes["scq"] = "application/scvp-cv-request";
        FileUploadTypes["scs"] = "application/scvp-cv-response";
        FileUploadTypes["sdp"] = "application/sdp";
        FileUploadTypes["etx"] = "text/x-setext";
        FileUploadTypes["movie"] = "video/x-sgi-movie";
        FileUploadTypes["ifm"] = "application/vnd.shana.informed.formdata";
        FileUploadTypes["itp"] = "application/vnd.shana.informed.formtemplate";
        FileUploadTypes["iif"] = "application/vnd.shana.informed.interchange";
        FileUploadTypes["ipk"] = "application/vnd.shana.informed.package";
        FileUploadTypes["tfi"] = "application/thraud+xml";
        FileUploadTypes["shar"] = "application/x-shar";
        FileUploadTypes["rgb"] = "image/x-rgb";
        FileUploadTypes["slt"] = "application/vnd.epson.salt";
        FileUploadTypes["aso"] = "application/vnd.accpac.simply.aso";
        FileUploadTypes["imp"] = "application/vnd.accpac.simply.imp";
        FileUploadTypes["twd"] = "application/vnd.simtech-mindmapper";
        FileUploadTypes["csp"] = "application/vnd.commonspace";
        FileUploadTypes["saf"] = "application/vnd.yamaha.smaf-audio";
        FileUploadTypes["mmf"] = "application/vnd.smaf";
        FileUploadTypes["spf"] = "application/vnd.yamaha.smaf-phrase";
        FileUploadTypes["teacher"] = "application/vnd.smart.teacher";
        FileUploadTypes["svd"] = "application/vnd.svd";
        FileUploadTypes["rq"] = "application/sparql-query";
        FileUploadTypes["srx"] = "application/sparql-results+xml";
        FileUploadTypes["gram"] = "application/srgs";
        FileUploadTypes["grxml"] = "application/srgs+xml";
        FileUploadTypes["ssml"] = "application/ssml+xml";
        FileUploadTypes["skp"] = "application/vnd.koan";
        FileUploadTypes["sgml"] = "text/sgml";
        FileUploadTypes["sdc"] = "application/vnd.stardivision.calc";
        FileUploadTypes["sda"] = "application/vnd.stardivision.draw";
        FileUploadTypes["sdd"] = "application/vnd.stardivision.impress";
        FileUploadTypes["smf"] = "application/vnd.stardivision.math";
        FileUploadTypes["sdw"] = "application/vnd.stardivision.writer";
        FileUploadTypes["sgl"] = "application/vnd.stardivision.writer-global";
        FileUploadTypes["sm"] = "application/vnd.stepmania.stepchart";
        FileUploadTypes["sit"] = "application/x-stuffit";
        FileUploadTypes["sitx"] = "application/x-stuffitx";
        FileUploadTypes["sdkm"] = "application/vnd.solent.sdkm+xml";
        FileUploadTypes["xo"] = "application/vnd.olpc-sugar";
        FileUploadTypes["au"] = "audio/basic";
        FileUploadTypes["wqd"] = "application/vnd.wqd";
        FileUploadTypes["sis"] = "application/vnd.symbian.install";
        FileUploadTypes["smi"] = "application/smil+xml";
        FileUploadTypes["xsm"] = "application/vnd.syncml+xml";
        FileUploadTypes["bdm"] = "application/vnd.syncml.dm+wbxml";
        FileUploadTypes["xdm"] = "application/vnd.syncml.dm+xml";
        FileUploadTypes["sv4cpio"] = "application/x-sv4cpio";
        FileUploadTypes["sv4crc"] = "application/x-sv4crc";
        FileUploadTypes["sbml"] = "application/sbml+xml";
        FileUploadTypes["tsv"] = "text/tab-separated-values";
        FileUploadTypes["tiff"] = "image/tiff";
        FileUploadTypes["tao"] = "application/vnd.tao.intent-module-archive";
        FileUploadTypes["tar"] = "application/x-tar";
        FileUploadTypes["tcl"] = "application/x-tcl";
        FileUploadTypes["tex"] = "application/x-tex";
        FileUploadTypes["tfm"] = "application/x-tex-tfm";
        FileUploadTypes["tei"] = "application/tei+xml";
        FileUploadTypes["txt"] = "text/plain";
        FileUploadTypes["dxp"] = "application/vnd.spotfire.dxp";
        FileUploadTypes["sfs"] = "application/vnd.spotfire.sfs";
        FileUploadTypes["tsd"] = "application/timestamped-data";
        FileUploadTypes["tpt"] = "application/vnd.trid.tpt";
        FileUploadTypes["mxs"] = "application/vnd.triscape.mxs";
        FileUploadTypes["t"] = "text/troff";
        FileUploadTypes["tra"] = "application/vnd.trueapp";
        FileUploadTypes["ttf"] = "application/x-font-ttf";
        FileUploadTypes["ttl"] = "text/turtle";
        FileUploadTypes["umj"] = "application/vnd.umajin";
        FileUploadTypes["uoml"] = "application/vnd.uoml+xml";
        FileUploadTypes["unityweb"] = "application/vnd.unity";
        FileUploadTypes["ufd"] = "application/vnd.ufdl";
        FileUploadTypes["uri"] = "text/uri-list";
        FileUploadTypes["utz"] = "application/vnd.uiq.theme";
        FileUploadTypes["ustar"] = "application/x-ustar";
        FileUploadTypes["uu"] = "text/x-uuencode";
        FileUploadTypes["vcs"] = "text/x-vcalendar";
        FileUploadTypes["vcf"] = "text/x-vcard";
        FileUploadTypes["vcd"] = "application/x-cdlink";
        FileUploadTypes["vsf"] = "application/vnd.vsf";
        FileUploadTypes["wrl"] = "model/vrml";
        FileUploadTypes["vcx"] = "application/vnd.vcx";
        FileUploadTypes["mts"] = "model/vnd.mts";
        FileUploadTypes["vtu"] = "model/vnd.vtu";
        FileUploadTypes["vis"] = "application/vnd.visionary";
        FileUploadTypes["viv"] = "video/vnd.vivo";
        FileUploadTypes["ccxml"] = "application/ccxml+xml,";
        FileUploadTypes["vxml"] = "application/voicexml+xml";
        FileUploadTypes["src"] = "application/x-wais-source";
        FileUploadTypes["wbxml"] = "application/vnd.wap.wbxml";
        FileUploadTypes["wbmp"] = "image/vnd.wap.wbmp";
        FileUploadTypes["wav"] = "audio/x-wav";
        FileUploadTypes["davmount"] = "application/davmount+xml";
        FileUploadTypes["woff"] = "application/x-font-woff";
        FileUploadTypes["wspolicy"] = "application/wspolicy+xml";
        FileUploadTypes["webp"] = "image/webp";
        FileUploadTypes["wtb"] = "application/vnd.webturbo";
        FileUploadTypes["wgt"] = "application/widget";
        FileUploadTypes["hlp"] = "application/winhlp";
        FileUploadTypes["wml"] = "text/vnd.wap.wml";
        FileUploadTypes["wmls"] = "text/vnd.wap.wmlscript";
        FileUploadTypes["wmlsc"] = "application/vnd.wap.wmlscriptc";
        FileUploadTypes["wpd"] = "application/vnd.wordperfect";
        FileUploadTypes["stf"] = "application/vnd.wt.stf";
        FileUploadTypes["wsdl"] = "application/wsdl+xml";
        FileUploadTypes["xbm"] = "image/x-xbitmap";
        FileUploadTypes["xpm"] = "image/x-xpixmap";
        FileUploadTypes["xwd"] = "image/x-xwindowdump";
        FileUploadTypes["der"] = "application/x-x509-ca-cert";
        FileUploadTypes["fig"] = "application/x-xfig";
        FileUploadTypes["xhtml"] = "application/xhtml+xml";
        FileUploadTypes["xml"] = "application/xml";
        FileUploadTypes["xdf"] = "application/xcap-diff+xml";
        FileUploadTypes["xenc"] = "application/xenc+xml";
        FileUploadTypes["xer"] = "application/patch-ops-error+xml";
        FileUploadTypes["rl"] = "application/resource-lists+xml";
        FileUploadTypes["rs"] = "application/rls-services+xml";
        FileUploadTypes["rld"] = "application/resource-lists-diff+xml";
        FileUploadTypes["xslt"] = "application/xslt+xml";
        FileUploadTypes["xop"] = "application/xop+xml";
        FileUploadTypes["xpi"] = "application/x-xpinstall";
        FileUploadTypes["xspf"] = "application/xspf+xml";
        FileUploadTypes["xul"] = "application/vnd.mozilla.xul+xml";
        FileUploadTypes["xyz"] = "chemical/x-xyz";
        FileUploadTypes["yaml"] = "text/yaml";
        FileUploadTypes["yang"] = "application/yang";
        FileUploadTypes["yin"] = "application/yin+xml";
        FileUploadTypes["zir"] = "application/vnd.zul";
        FileUploadTypes["zip"] = "application/zip";
      })(FileUploadTypes || (FileUploadTypes = {}));

      var FileUploadService = /*#__PURE__*/function () {
        function FileUploadService(renderer) {
          _classCallCheck(this, FileUploadService);

          this.renderer = renderer;
          this.extensions = ['B', 'KB', 'MB', 'GB'];
          this.sizeRegex = new RegExp("^(\\d+)(?:\\s{0,1})(".concat(this.extensions.join('|'), ")?$"), 'i');
        }

        _createClass(FileUploadService, [{
          key: "isFileDragDropAvailable",
          value: function isFileDragDropAvailable() {
            var div = this.renderer.createElement('div');
            return 'draggable' in div || 'ondragstart' in div && 'ondrop' in div;
          }
        }, {
          key: "parseSize",
          value: function parseSize(value) {
            if (IsNullOrEmpty(value)) {
              return 0;
            }

            if (typeof value === 'number') {
              return value;
            }

            var _ref = value.match(this.sizeRegex) || [null, '0', 'B'],
                _ref2 = _slicedToArray(_ref, 3),
                size = _ref2[1],
                extension = _ref2[2];

            var i = IsNullOrEmpty(extension) ? 0 : this.extensions.indexOf(extension.toUpperCase());
            return parseInt(size, 10) * Math.pow(1024, i < 0 ? 0 : i);
          }
        }, {
          key: "formatSize",
          value: function formatSize(size) {
            return this.calculateSize(size);
          }
        }, {
          key: "calculateSize",
          value: function calculateSize(size) {
            var extensionIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (isNaN(size)) {
              size = 0;
            }

            if (size < 1024) {
              return "".concat(Math.round(size * 100) / 100, " ").concat(this.extensions[extensionIndex]);
            }

            return this.calculateSize(size / 1024, extensionIndex + 1);
          }
        }, {
          key: "getFileType",
          value: function getFileType(file) {
            return Object.keys(FileUploadTypes).find(function (key) {
              return FileUploadTypes[key] === file.type;
            });
          }
        }]);

        return FileUploadService;
      }();

      FileUploadService.ɵfac = function FileUploadService_Factory(t) {
        return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FileUploadService,
        factory: function factory(t) {
          return FileUploadService.ɵfac(t);
        }
      });

      FileUploadService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      FileUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], FileUploadService);
      var InsertAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('insertAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 0
      }))])], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(30, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 1
      }))])], {
        optional: true
      })])]);
      var ZoomAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('zoomAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('static => zoomOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translate(-50%, -50%) scale(2, 2)',
        opacity: 0
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('static => zoomIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translate(-50%, -50%) scale(.2, .2)',
        opacity: 0,
        top: '50%',
        left: '50%',
        margin: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(50, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translate(-50%, -50%) scale(1, 1)',
        opacity: 1
      }))])])])]);

      var FileUploadAbstract = /*#__PURE__*/function () {
        function FileUploadAbstract(hostElementRef, renderer, cdr) {
          _classCallCheck(this, FileUploadAbstract);

          this.hostElementRef = hostElementRef;
          this.renderer = renderer;
          this.cdr = cdr;
          this.control = null;
          this.isMultiple = true;
          this.hooks = [];
          this.subscriptions = [];

          this.onChange = function () {};
        }

        _createClass(FileUploadAbstract, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (IsNullOrEmpty(this.control)) {
              this.control = new FileUploadControl();
            }

            this.setEvents();
            this.checkAndMarkAsDisabled();
            this.checkAndSetMultiple();
            this.connectToForm();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.cdr.detach();
            this.hooks.forEach(function (hook) {
              return hook();
            });
            this.hooks.length = 0;
            this.subscriptions.forEach(function (subscription) {
              return subscription.unsubscribe();
            });
            this.subscriptions.length = 0;
          }
        }, {
          key: "setEvents",
          value: function setEvents() {
            var _this3 = this;

            this.subscriptions.push(this.control.statusChanges.subscribe(function (status) {
              return _this3.checkAndMarkAsDisabled();
            }));
            this.subscriptions.push(this.control.eventsChanges.subscribe(function (event) {
              return _this3.triggerEvent(event);
            }));
            this.subscriptions.push(this.control.acceptChanges.subscribe(function (accept) {
              return _this3.updateAcceptAttr(accept);
            }));
            this.subscriptions.push(this.control.multipleChanges.subscribe(function (isMultiple) {
              return _this3.toggleMultiple(isMultiple);
            }));
          }
        }, {
          key: "clearInputEl",
          value: function clearInputEl() {
            this.input.nativeElement.value = null;
          }
        }, {
          key: "checkAndSetMultiple",
          value: function checkAndSetMultiple() {
            if (!this.control) {
              return;
            }

            var isMultiple = !(this.isMultiple === false || this.isMultiple === 'false');

            if (isMultiple !== this.control.isMultiple) {
              this.control.multiple(isMultiple);
            }
          }
        }, {
          key: "triggerEvent",
          value: function triggerEvent(event) {
            if (typeof this.label.nativeElement[event] === 'function') {
              this.label.nativeElement[event]();
            }
          }
        }, {
          key: "updateAcceptAttr",
          value: function updateAcceptAttr(accept) {
            if (!IsNullOrEmpty(accept)) {
              this.renderer.setAttribute(this.input.nativeElement, 'accept', accept);
            } else {
              this.renderer.removeAttribute(this.input.nativeElement, 'accept');
            }
          }
        }, {
          key: "checkAndMarkAsDisabled",
          value: function checkAndMarkAsDisabled() {
            if (this.control.disabled) {
              this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
              this.renderer.setProperty(this.input.nativeElement, 'disabled', true);
            } else {
              this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
              this.renderer.setProperty(this.input.nativeElement, 'disabled', false);
            }
          }
        }, {
          key: "toggleMultiple",
          value: function toggleMultiple(isMultiple) {
            if (isMultiple) {
              this.renderer.setAttribute(this.input.nativeElement, 'multiple', '');
            } else {
              this.renderer.removeAttribute(this.input.nativeElement, 'multiple');
            }
          }
          /**
           * ControlValueAccessor implementation
           */

        }, {
          key: "connectToForm",
          value: function connectToForm() {
            var _this4 = this;

            this.subscriptions.push(this.control.valueChanges.subscribe(function (v) {
              return _this4.onChange(v);
            }));
          }
        }]);

        return FileUploadAbstract;
      }();

      FileUploadAbstract.ɵfac = function FileUploadAbstract_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
      };

      FileUploadAbstract.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: FileUploadAbstract
      });
      var FileUploadComponent_1;
      var DRAGOVER = 'dragover';
      var TOUCHED = 'ng-touched';

      var FileUploadComponent = FileUploadComponent_1 = /*#__PURE__*/function (_FileUploadAbstract) {
        _inherits(FileUploadComponent, _FileUploadAbstract);

        var _super = _createSuper(FileUploadComponent);

        function FileUploadComponent(fileUploadService, hostElementRef, renderer, document, cdr) {
          var _this5;

          _classCallCheck(this, FileUploadComponent);

          _this5 = _super.call(this, hostElementRef, renderer, cdr);
          _this5.fileUploadService = fileUploadService;
          _this5.document = document;
          _this5.control = null;
          _this5.animation = true;
          _this5.templateRef = null;
          _this5.listItem = null;
          _this5.templateContext = {
            $implicit: _this5.fileUploadService.isFileDragDropAvailable(),
            isFileDragDropAvailable: _this5.fileUploadService.isFileDragDropAvailable()
          };
          /** animation fields */

          _this5.zoomText = 'static';
          _this5.listVisible = false;

          _this5.onTouch = function () {
            _this5.renderer.addClass(_this5.hostElementRef.nativeElement, TOUCHED);
          };

          return _this5;
        }

        _createClass(FileUploadComponent, [{
          key: "setEvents",
          value: function setEvents() {
            var _this6 = this;

            _get(_getPrototypeOf(FileUploadComponent.prototype), "setEvents", this).call(this);

            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (eventName) {
              _this6.hooks.push(_this6.renderer.listen(_this6.document, eventName, function (event) {
                return _this6.preventDragEvents(event);
              }));
            });
            ['dragover', 'dragenter'].forEach(function (eventName) {
              _this6.hooks.push(_this6.renderer.listen(_this6.hostElementRef.nativeElement, eventName, function (event) {
                return _this6.onDragOver(event);
              }));
            });
            ['dragleave', 'dragend', 'drop'].forEach(function (eventName) {
              _this6.hooks.push(_this6.renderer.listen(_this6.hostElementRef.nativeElement, eventName, function (event) {
                return _this6.onDragLeave(event);
              }));
            });
            this.subscriptions.push(this.control.valueChanges.subscribe(function (files) {
              return _this6.renderView();
            }));
            this.subscriptions.push(this.control.listVisibilityChanges.subscribe(function (status) {
              return _this6.toggleListVisibility();
            }));
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();
              this.control.click();
            }
          }
        }, {
          key: "preventDragEvents",
          value: function preventDragEvents(event) {
            event.preventDefault();
            event.stopPropagation();
          }
        }, {
          key: "renderView",
          value: function renderView() {
            if (!this.listVisible) {
              this.zoomText = this.control.isListVisible && this.control.size > 0 ? 'zoomOut' : 'static';
            }

            this.cdr.markForCheck();
          }
        }, {
          key: "showList",
          value: function showList() {
            if (this.zoomText !== 'static') {
              this.listVisible = true;
            }
          }
        }, {
          key: "hideList",
          value: function hideList() {
            this.listVisible = false;
          }
        }, {
          key: "toggleListVisibility",
          value: function toggleListVisibility() {
            this.listVisible = this.control.isListVisible && this.control.size > 0;

            if (this.listVisible) {
              this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
              this.zoomText = 'static';
            }

            this.cdr.markForCheck();
          }
          /**
           * on file over add class name
           */

        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
          }
          /**
           * on mouse out remove class name
           */

        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            if (this.control.disabled) {
              return;
            } // There is some issue with DragEvent in typescript lib.dom.d.ts


            var files = event.dataTransfer.files;
            this.control.addFiles(files);
            this.onTouch();
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(event) {
            var input = event.target;

            if (!this.control.disabled && input.files.length > 0) {
              this.control.addFiles(input.files);
              this.clearInputEl();
            }

            this.onTouch();
          }
          /**
           * model -> view changes
           */

        }, {
          key: "writeValue",
          value: function writeValue(files) {
            if (files != null) {
              this.control.setValue(files);
            }
          }
          /**
           * register function which will be called on UI change
           * to update view -> model
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.control.disable(isDisabled);
          }
        }, {
          key: "zoomAnimationDone",
          value: function zoomAnimationDone(event) {
            if (this.control.isListVisible && this.control.size > 0) {
              this.showList();
            } else {
              this.hideList();
            }

            if (event.fromState === 'static' && event.toState === 'zoomOut') {
              this.renderer.addClass(this.hostElementRef.nativeElement, 'hide-text');
            } else {
              this.renderer.removeClass(this.hostElementRef.nativeElement, 'hide-text');
            }

            if (event.toState === 'zoomIn') {
              this.zoomText = 'static';
            }
          }
        }, {
          key: "animationListFinished",
          value: function animationListFinished(event) {
            if (event.toState === 'void') {
              this.zoomText = 'zoomIn';
              this.renderer.removeClass(this.hostElementRef.nativeElement, 'list-visible');
            }

            if (event.fromState === 'void') {
              this.zoomText = 'static';
              this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
            }
          }
        }, {
          key: "multiple",
          set: function set(isMultiple) {
            this.isMultiple = isMultiple;
            this.checkAndSetMultiple();
          }
        }, {
          key: "hasFiles",
          get: function get() {
            return this.control.isListVisible && this.control.size > 0;
          }
        }, {
          key: "isInvalid",
          get: function get() {
            return !this.control.disabled && this.control.invalid;
          }
        }, {
          key: "isAnimationDisabled",
          get: function get() {
            return this.animation === false || this.animation === 'false';
          }
        }]);

        return FileUploadComponent;
      }(FileUploadAbstract);

      FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
        return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FileUploadComponent,
        selectors: [["file-upload", 3, "simple", ""]],
        contentQueries: function FileUploadComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listItem = _t.first);
          }
        },
        viewQuery: function FileUploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
          }
        },
        hostVars: 5,
        hostBindings: function FileUploadComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function FileUploadComponent_drop_HostBindingHandler($event) {
              return ctx.onDrop($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@.disabled", ctx.isAnimationDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-files", ctx.hasFiles)("ng-invalid", ctx.isInvalid);
          }
        },
        inputs: {
          control: "control",
          animation: "animation",
          multiple: "multiple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([FileUploadService, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return FileUploadComponent_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 6,
        consts: [["tabindex", "0", 1, "upload-input", 3, "keydown"], ["labelRef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultTemplate", ""], ["type", "file", "tabindex", "-1", "multiple", "", 1, "files-input", 3, "change"], ["inputRef", ""], ["class", "upload-list", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["isNotDragDropAvailable", ""], [1, "upload-list"], ["ngFor", "", 3, "ngForOf"], ["defaultItemTemplate", ""], [3, "index", "file", "control"]],
        template: function FileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function FileUploadComponent_Template_label_keydown_0_listener($event) {
              return ctx.onKeyDown($event);
            })("@zoomAnimation.done", function FileUploadComponent_Template_label_animation_zoomAnimation_done_0_listener($event) {
              return ctx.zoomAnimationDone($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FileUploadComponent_ng_container_2_Template, 1, 0, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FileUploadComponent_ng_template_3_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_5_listener($event) {
              return ctx.onInputChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FileUploadComponent_div_7_Template, 5, 4, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomAnimation", ctx.zoomText);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateRef ? ctx.templateRef : _r2)("ngTemplateOutletContext", ctx.templateContext);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, ctx.control.listVisibilityChanges) && ctx.control.size > 0 && ctx.listVisible);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], FileUploadDropZoneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], FileUploadListItemComponent];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]];
        },
        styles: ["@charset \"UTF-8\";[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:#92b0b3 dashed 1px;outline-offset:-10px;position:relative}[_nghost-%COMP%]     .icon{float:left}.dragover[_nghost-%COMP%]{outline-width:2px}.disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop}.files-input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.upload-input[_ngcontent-%COMP%]:after{clear:both;content:\"\xA0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);outline:0}.disabled[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{cursor:not-allowed}.list-visible[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{top:20px;left:100%;margin-left:-20px;-ms-transform:translate(-100%,0);transform:translate(-100%,0);text-align:center}.hide-text[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{opacity:0}.dragover[_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover{color:#80a9d2}.dragover[_nghost-%COMP%]:not(.disabled)   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#80a9d2}file-upload-list-item[_ngcontent-%COMP%]{padding:10px 0 0}file-upload-list-item[_ngcontent-%COMP%]:first-child{padding:0}"],
        data: {
          animation: [ZoomAnimation, InsertAnimation]
        },
        changeDetection: 0
      });

      FileUploadComponent.ctorParameters = function () {
        return [{
          type: FileUploadService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FileUploadControl)], FileUploadComponent.prototype, "control", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FileUploadComponent.prototype, "animation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('multiple'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], FileUploadComponent.prototype, "multiple", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('placeholder'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], FileUploadComponent.prototype, "templateRef", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('item'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], FileUploadComponent.prototype, "listItem", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputRef', {
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FileUploadComponent.prototype, "input", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labelRef', {
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FileUploadComponent.prototype, "label", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.has-files'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FileUploadComponent.prototype, "hasFiles", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-invalid'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FileUploadComponent.prototype, "isInvalid", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@.disabled'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FileUploadComponent.prototype, "isAnimationDisabled", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], FileUploadComponent.prototype, "onDrop", null);
      FileUploadComponent = FileUploadComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FileUploadService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], FileUploadComponent);

      var FileUploadDropZoneComponent = function FileUploadDropZoneComponent() {
        _classCallCheck(this, FileUploadDropZoneComponent);
      };

      FileUploadDropZoneComponent.ɵfac = function FileUploadDropZoneComponent_Factory(t) {
        return new (t || FileUploadDropZoneComponent)();
      };

      FileUploadDropZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FileUploadDropZoneComponent,
        selectors: [["file-upload-drop-zone"]],
        ngContentSelectors: _c5,
        decls: 6,
        vars: 0,
        consts: [[1, "icon"], ["viewBox", "0 0 96 96"], ["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"], [1, "upload-text"]],
        template: function FileUploadDropZoneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;position:relative;padding-left:20px}.list-visible[_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%], .list-visible   [_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%]{display:none}"],
        changeDetection: 0
      });

      var FileUploadListItemComponent = /*#__PURE__*/function () {
        function FileUploadListItemComponent(fileUploadService) {
          _classCallCheck(this, FileUploadListItemComponent);

          this.fileUploadService = fileUploadService;
        }

        _createClass(FileUploadListItemComponent, [{
          key: "removeFile",
          value: function removeFile(file) {
            this.control.removeFile(file);
          }
        }, {
          key: "calculateSize",
          value: function calculateSize(size) {
            return this.fileUploadService.formatSize(size);
          }
        }]);

        return FileUploadListItemComponent;
      }();

      FileUploadListItemComponent.ɵfac = function FileUploadListItemComponent_Factory(t) {
        return new (t || FileUploadListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileUploadService));
      };

      FileUploadListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FileUploadListItemComponent,
        selectors: [["file-upload-list-item"]],
        inputs: {
          index: "index",
          file: "file",
          control: "control"
        },
        ngContentSelectors: _c5,
        decls: 11,
        vars: 3,
        consts: [[3, "file"], [1, "file-info"], [1, "file-name"], [1, "file-buttons"], [1, "remove-btn", 3, "click"], ["viewBox", "0 0 96 96"], ["d", "M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4\n                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3\n                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4\n                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5\n                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4\n                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5\n                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5\n                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5\n                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"]],
        template: function FileUploadListItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "file-upload-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadListItemComponent_Template_span_click_6_listener() {
              return ctx.removeFile(ctx.file);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", ctx.file);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.file.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (", ctx.calculateSize(ctx.file.size), ") ");
          }
        },
        directives: function directives() {
          return [FileUploadIconComponent];
        },
        styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;font-size:14px;color:#646464}[_nghost-%COMP%]:after{clear:both;content:\"\xA0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon[_ngcontent-%COMP%]{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn[_ngcontent-%COMP%]{font-size:12px;cursor:pointer}.remove-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block;vertical-align:-20%;height:18px;width:18px}"]
      });

      FileUploadListItemComponent.ctorParameters = function () {
        return [{
          type: FileUploadService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], FileUploadListItemComponent.prototype, "index", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", File)], FileUploadListItemComponent.prototype, "file", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FileUploadControl)], FileUploadListItemComponent.prototype, "control", void 0);
      FileUploadListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FileUploadService])], FileUploadListItemComponent);

      var FileUploadIconComponent = /*#__PURE__*/function () {
        function FileUploadIconComponent(fileUploadService) {
          _classCallCheck(this, FileUploadIconComponent);

          this.fileUploadService = fileUploadService;
          this.fileType = 'unknown';
        }

        _createClass(FileUploadIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fileType = this.fileUploadService.getFileType(this.file);
          }
        }, {
          key: "isIcon",
          value: function isIcon(type) {
            switch (type) {
              case 'text':
                return this.fileType === 'html' || this.fileType === 'css' || this.fileType === 'csv' || this.fileType === 'js' || this.fileType === 'pdf' || this.fileType === 'ppt' || this.fileType === 'xls' || this.fileType === 'xlsx' || this.fileType === 'xml' || this.fileType === 'doc' || this.fileType === 'txt' || this.fileType === 'docx';

              case 'audio':
                return this.fileType === 'aac' || this.fileType === 'midi' || this.fileType === 'oga' || this.fileType === 'wav' || this.fileType === 'weba';

              case 'image':
                return this.fileType === 'png' || this.fileType === 'bmp' || this.fileType === 'gif' || this.fileType === 'jpg' || this.fileType === 'svg' || this.fileType === 'webp' || this.fileType === 'ico';

              case 'video':
                return this.fileType === 'avi' || this.fileType === 'mpeg' || this.fileType === 'ogv' || this.fileType === 'webm' || this.fileType === '3gp' || this.fileType === '3g2';
            }
          }
        }]);

        return FileUploadIconComponent;
      }();

      FileUploadIconComponent.ɵfac = function FileUploadIconComponent_Factory(t) {
        return new (t || FileUploadIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileUploadService));
      };

      FileUploadIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FileUploadIconComponent,
        selectors: [["file-upload-icon"]],
        inputs: {
          file: "file"
        },
        decls: 6,
        vars: 5,
        consts: [[3, "ngSwitch"], ["viewBox", "0 0 96 96", 4, "ngSwitchDefault"], ["viewBox", "0 0 96 96", 4, "ngSwitchCase"], ["viewBox", "0 0 96 96"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\n                C40.6,51.7,39.1,52.3,37.3,52.3z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\n                C48.9,64.4,49.4,64.6,49.9,64.6z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\n                C64.2,43.7,64.3,43.7,64.5,43.8z"]],
        template: function FileUploadIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadIconComponent__svg_svg_1_Template, 3, 0, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FileUploadIconComponent__svg_svg_2_Template, 3, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FileUploadIconComponent__svg_svg_3_Template, 3, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FileUploadIconComponent__svg_svg_4_Template, 3, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileUploadIconComponent__svg_svg_5_Template, 3, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("image"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("audio"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("text"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("video"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]],
        styles: ["[_nghost-%COMP%]{display:block;border:1px solid #eaeaea;border-radius:4px}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}"],
        changeDetection: 0
      });

      FileUploadIconComponent.ctorParameters = function () {
        return [{
          type: FileUploadService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", File)], FileUploadIconComponent.prototype, "file", void 0);
      FileUploadIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FileUploadService])], FileUploadIconComponent);

      var FileUploadAttributeComponent = /*#__PURE__*/function () {
        function FileUploadAttributeComponent(fileUploadService, hostElementRef, renderer, document) {
          var _this7 = this;

          _classCallCheck(this, FileUploadAttributeComponent);

          this.fileUploadService = fileUploadService;
          this.hostElementRef = hostElementRef;
          this.renderer = renderer;
          this.document = document;
          this.control = null;
          this.templateRef = null;
          this.hooks = [];
          this.subscriptions = [];

          this.onTouch = function () {
            _this7.renderer.addClass(_this7.hostElementRef.nativeElement, TOUCHED);
          };
        }

        _createClass(FileUploadAttributeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (IsNullOrEmpty(this.control)) {
              this.control = new FileUploadControl();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.fileUploadService.isFileDragDropAvailable()) {
              this.setEvents();
              this.checkAndMarkAsDisabled();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.hooks.forEach(function (hook) {
              return hook();
            });
            this.hooks.length = 0;
            this.subscriptions.forEach(function (subscription) {
              return subscription.unsubscribe();
            });
            this.subscriptions.length = 0;
          }
        }, {
          key: "setEvents",
          value: function setEvents() {
            var _this8 = this;

            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (eventName) {
              _this8.hooks.push(_this8.renderer.listen(_this8.document, eventName, function (event) {
                return _this8.preventDragEvents(event);
              }));
            });
            ['dragover', 'dragenter'].forEach(function (eventName) {
              _this8.hooks.push(_this8.renderer.listen(_this8.hostElementRef.nativeElement, eventName, function (event) {
                return _this8.onDragOver(event);
              }));
            });
            ['dragleave', 'dragend', 'drop'].forEach(function (eventName) {
              _this8.hooks.push(_this8.renderer.listen(_this8.hostElementRef.nativeElement, eventName, function (event) {
                if (_this8.control.disabled && eventName === 'dragleave' || eventName !== 'dragleave') {
                  _this8.onDragLeave(event);
                }
              }));
            });
            ['dragleave'].forEach(function (eventName) {
              _this8.hooks.push(_this8.renderer.listen(_this8.overlay.nativeElement, eventName, function (event) {
                return _this8.onDragLeave(event);
              }));
            });
            this.subscriptions.push(this.control.statusChanges.subscribe(function (status) {
              return _this8.checkAndMarkAsDisabled();
            }));
          }
        }, {
          key: "checkAndMarkAsDisabled",
          value: function checkAndMarkAsDisabled() {
            if (this.control.disabled) {
              this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
            } else {
              this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
            }
          }
        }, {
          key: "preventDragEvents",
          value: function preventDragEvents(event) {
            event.preventDefault();
            event.stopPropagation();
          }
          /**
           * on file over add class name
           */

        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
          }
          /**
           * on mouse out remove class name
           */

        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            if (this.control.disabled) {
              return;
            }

            var files = event.dataTransfer.files;
            this.control.addFiles(files);
            this.onTouch();
          }
        }, {
          key: "hasFiles",
          get: function get() {
            return this.control.isListVisible && this.control.size > 0;
          }
        }, {
          key: "isInvalid",
          get: function get() {
            return !this.control.disabled && this.control.invalid;
          }
        }]);

        return FileUploadAttributeComponent;
      }();

      FileUploadAttributeComponent.ɵfac = function FileUploadAttributeComponent_Factory(t) {
        return new (t || FileUploadAttributeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      FileUploadAttributeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FileUploadAttributeComponent,
        selectors: [["", "file-drop-zone", ""]],
        contentQueries: function FileUploadAttributeComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        viewQuery: function FileUploadAttributeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function FileUploadAttributeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function FileUploadAttributeComponent_drop_HostBindingHandler($event) {
              return ctx.onDrop($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-files", ctx.hasFiles)("ng-invalid", ctx.isInvalid);
          }
        },
        inputs: {
          control: "control"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([FileUploadService])],
        attrs: _c7,
        ngContentSelectors: _c5,
        decls: 2,
        vars: 1,
        consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], ["overlay", ""], [1, "upload-input"], [4, "ngTemplateOutlet"], ["defaultTemplate", ""]],
        template: function FileUploadAttributeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadAttributeComponent_div_1_Template, 6, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileUploadService.isFileDragDropAvailable());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], FileUploadDropZoneComponent],
        styles: ["[_nghost-%COMP%]{position:relative;display:block}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{display:none;background:rgba(255,255,255,.8);outline:#92b0b3 dashed 2px;outline-offset:-10px;position:absolute;top:0;left:0;right:0;bottom:0}.dragover[_nghost-%COMP%]:not(.disabled)   .overlay[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .icon{margin:0 auto 10px}[_nghost-%COMP%]     .icon svg{fill:#80a9d2}.upload-input[_ngcontent-%COMP%]{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:.15s ease-in-out}"]
      });

      FileUploadAttributeComponent.ctorParameters = function () {
        return [{
          type: FileUploadService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FileUploadControl)], FileUploadAttributeComponent.prototype, "control", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('overlay'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FileUploadAttributeComponent.prototype, "overlay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('placeholder'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], FileUploadAttributeComponent.prototype, "templateRef", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.has-files'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FileUploadAttributeComponent.prototype, "hasFiles", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-invalid'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FileUploadAttributeComponent.prototype, "isInvalid", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], FileUploadAttributeComponent.prototype, "onDrop", null);
      FileUploadAttributeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FileUploadService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])], FileUploadAttributeComponent);
      var SimpleFileUploadComponent_1;

      var SimpleFileUploadComponent = SimpleFileUploadComponent_1 = /*#__PURE__*/function (_FileUploadAbstract2) {
        _inherits(SimpleFileUploadComponent, _FileUploadAbstract2);

        var _super2 = _createSuper(SimpleFileUploadComponent);

        function SimpleFileUploadComponent(fileUploadService, hostElementRef, renderer, cdr) {
          var _this9;

          _classCallCheck(this, SimpleFileUploadComponent);

          _this9 = _super2.call(this, hostElementRef, renderer, cdr);
          _this9.fileUploadService = fileUploadService;
          _this9.control = null;
          _this9.buttonRef = null;
          _this9.placeholderRef = null;
          _this9.isMultiple = false;

          _this9.onTouch = function () {
            _this9.renderer.addClass(_this9.hostElementRef.nativeElement, TOUCHED);
          };

          return _this9;
        }

        _createClass(SimpleFileUploadComponent, [{
          key: "onInputChange",
          value: function onInputChange(event) {
            var input = event.target;

            if (!this.control.disabled && input.files.length > 0) {
              this.control.setValue(Array.from(input.files));
              this.clearInputEl();
            }

            this.onTouch();
          }
          /**
           * model -> view changes
           */

        }, {
          key: "writeValue",
          value: function writeValue(files) {
            if (files != null) {
              this.control.setValue(files);
            }
          }
          /**
           * register function which will be called on UI change
           * to update view -> model
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.control.disable(isDisabled);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();
              this.control.click();
            }
          }
        }, {
          key: "hasFiles",
          get: function get() {
            return this.control.isListVisible && this.control.size > 0;
          }
        }, {
          key: "isInvalid",
          get: function get() {
            return !this.control.disabled && this.control.invalid;
          }
        }]);

        return SimpleFileUploadComponent;
      }(FileUploadAbstract);

      SimpleFileUploadComponent.ɵfac = function SimpleFileUploadComponent_Factory(t) {
        return new (t || SimpleFileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      SimpleFileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SimpleFileUploadComponent,
        selectors: [["file-upload", "simple", ""]],
        contentQueries: function SimpleFileUploadComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c8, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.buttonRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.placeholderRef = _t.first);
          }
        },
        viewQuery: function SimpleFileUploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function SimpleFileUploadComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-files", ctx.hasFiles)("ng-invalid", ctx.isInvalid);
          }
        },
        inputs: {
          control: "control"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([FileUploadService, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return SimpleFileUploadComponent_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        attrs: _c9,
        decls: 12,
        vars: 7,
        consts: [[1, "upload-text"], [3, "ngIf"], ["defaultPlaceholderTemplate", ""], ["tabindex", "0", 1, "upload-button", 3, "keydown"], ["labelRef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultButtonTemplate", ""], ["type", "file", "tabindex", "-1", 1, "files-input", 3, "change"], ["inputRef", ""], ["class", "file-name", 4, "ngIf", "ngIfElse"], ["emptyList", ""], [1, "file-name"], [1, "button"], [1, "icon"], ["viewBox", "0 0 96 96"], ["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"], [1, "button-text"]],
        template: function SimpleFileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimpleFileUploadComponent_ng_template_1_Template, 1, 6, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SimpleFileUploadComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SimpleFileUploadComponent_Template_label_keydown_5_listener($event) {
              return ctx.onKeyDown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SimpleFileUploadComponent_ng_container_7_Template, 1, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SimpleFileUploadComponent_ng_template_8_Template, 7, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SimpleFileUploadComponent_Template_input_change_10_listener($event) {
              return ctx.onInputChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx.control.valueChanges));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.buttonRef ? ctx.buttonRef : _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c11, ctx.control));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{display:-ms-flexbox;display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px rgba(0,0,0,.05)}.disabled[_nghost-%COMP%]{opacity:.5}.files-input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon[_ngcontent-%COMP%]{height:24px;width:24px;display:inline-block}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#555}.upload-button[_ngcontent-%COMP%]{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:0}.upload-text[_ngcontent-%COMP%]{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text[_ngcontent-%COMP%]{vertical-align:middle;padding-left:10px}.disabled[_nghost-%COMP%]   .upload-button[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover{color:#80a9d2}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#80a9d2}"],
        changeDetection: 0
      });

      SimpleFileUploadComponent.ctorParameters = function () {
        return [{
          type: FileUploadService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FileUploadControl)], SimpleFileUploadComponent.prototype, "control", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('button'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], SimpleFileUploadComponent.prototype, "buttonRef", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('placeholder'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], SimpleFileUploadComponent.prototype, "placeholderRef", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputRef', {
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SimpleFileUploadComponent.prototype, "input", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labelRef', {
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SimpleFileUploadComponent.prototype, "label", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.has-files'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SimpleFileUploadComponent.prototype, "hasFiles", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-invalid'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SimpleFileUploadComponent.prototype, "isInvalid", null);
      SimpleFileUploadComponent = SimpleFileUploadComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FileUploadService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], SimpleFileUploadComponent);
      /**
       * function used to check file size
       */

      var checkFileSize = function checkFileSize(file, maxSize) {
        var minSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return !IsNullOrEmpty(maxSize) && file.size > maxSize || file.size < minSize ? {
          maxSize: maxSize,
          minSize: minSize,
          actual: file.size,
          file: file
        } : null;
      };

      var ɵ0 = checkFileSize;

      var getFileType = function getFileType(file, fileExtension) {
        var type = file.type;

        if (!IsNullOrEmpty(type)) {
          return type;
        }

        return FileUploadTypes[fileExtension];
      };

      var ɵ1 = getFileType;
      var FILE_EXT_REG = /(^[.]\w*)$/m;
      /**
       * function used to check file type
       *
       * #### allowedTypes
       * file_extension|audio/*|video/*|image/*|media_type
       */

      var checkFileType = function checkFileType(file, allowedTypes) {
        var fileExtension = file.name.split('.').pop().toLowerCase();
        var fileType = getFileType(file, fileExtension);

        var _iterator = _createForOfIteratorHelper(allowedTypes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var type = _step.value;
            var isValid = FILE_EXT_REG.test(type) ? type === ".".concat(fileExtension) : new RegExp(type).test(fileType);

            if (isValid) {
              return null;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return {
          allowedTypes: allowedTypes,
          actual: file.type,
          file: file
        };
      };

      var ɵ2 = checkFileType;

      var checkValueType = function checkValueType(value) {
        if (!Array.isArray(value)) {
          throw Error("FormControl.setValue was provided with wrong argument type, ".concat(value, " was provided instead Array<File>"));
        }
      };

      var ɵ3 = checkValueType; // @dynamic

      var FileUploadValidators = /*#__PURE__*/function () {
        function FileUploadValidators() {
          _classCallCheck(this, FileUploadValidators);
        }

        _createClass(FileUploadValidators, null, [{
          key: "fileSize",

          /**
           * Validator that requires controls to have a file maximum size length.
           * Compare the File size in bytes
           * @dynamic
           */
          value: function fileSize(maxSize) {
            return function (control) {
              var files = control.value;

              if (IsNullOrEmpty(files)) {
                return null;
              }

              checkValueType(files);
              var toLargeFiles = files.map(function (file) {
                return checkFileSize(file, maxSize);
              }).filter(function (error) {
                return error;
              });
              return toLargeFiles.length > 0 ? {
                'fileSize': toLargeFiles
              } : null;
            };
          }
          /**
           * Compare the File size in bytes with max and min size limits
           * @dynamic
           */

        }, {
          key: "sizeRange",
          value: function sizeRange(_ref3) {
            var minSize = _ref3.minSize,
                maxSize = _ref3.maxSize;
            return function (control) {
              var files = control.value;

              if (IsNullOrEmpty(files)) {
                return null;
              }

              checkValueType(files);
              var sizeMismatch = files.map(function (file) {
                return checkFileSize(file, maxSize, minSize);
              }).filter(function (error) {
                return error;
              });
              return sizeMismatch.length > 0 ? {
                'sizeRange': sizeMismatch
              } : null;
            };
          }
          /**
           * validator that requires control to have limit on files number
           * @dynamic
           */

        }, {
          key: "filesLimit",
          value: function filesLimit(numFiles) {
            return function (control) {
              var files = control.value;

              if (IsNullOrEmpty(files)) {
                return null;
              }

              checkValueType(files);
              return files.length > numFiles ? {
                'filesLimit': {
                  'max': numFiles,
                  'actual': files.length
                }
              } : null;
            };
          }
          /**
           * validator that requires control to have limit on media types
           *
           * ##### Allowed media types are
           *
           * - file_extension - a file extension starting with the STOP character,
           * e.g: .gif, .jpg, .png, .doc
           * - audio/* -        All sound files are accepted
           * - video/* -        All video files are accepted
           * - image/* -        All image files are accepted
           * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
           *
           * #### Example
           * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
           * @dynamic
           */

        }, {
          key: "accept",
          value: function accept(allowedFileTypes) {
            return function (control) {
              var files = control.value;

              if (IsNullOrEmpty(files)) {
                return null;
              }

              checkValueType(files);
              var notAllowedFiles = files.map(function (file) {
                return checkFileType(file, allowedFileTypes);
              }).filter(function (error) {
                return error;
              });
              return notAllowedFiles.length > 0 ? {
                'fileTypes': notAllowedFiles
              } : null;
            };
          }
        }]);

        return FileUploadValidators;
      }();

      var FileSizeValidator_1, FilesLimitValidator_1, FilesAcceptValidator_1;
      /**
       * A Directive that adds the `filesize` validator to controls marked with the
       * `filesize` attribute. The size of the file is in bytes or any other unit
       *
       * ### Example
       *
       * ```
       * <file-upload name="files" ngModel filesize="830000"></file-upload>
       * <file-upload name="files" ngModel [filesize]="830000"></file-upload>
       * <file-upload name="files" ngModel minSize="0" max="6200"></file-upload>
       * <file-upload name="files" ngModel filesize="123MB"></file-upload>
       * <file-upload name="files" ngModel [filesize]="12 mb"></file-upload>
       * <file-upload name="files" ngModel minSize="0" max="324KB"></file-upload>
       * ```
       *
       */

      var FileSizeValidator = FileSizeValidator_1 = /*#__PURE__*/function () {
        function FileSizeValidator(fileUploadService) {
          _classCallCheck(this, FileSizeValidator);

          this.fileUploadService = fileUploadService;
        }

        _createClass(FileSizeValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('filesize' in changes || 'maxsize' in changes || 'minsize' in changes) {
              this._createValidator();

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            var maxSize = null;

            if (!IsNullOrEmpty(this.maxsize)) {
              maxSize = this.fileUploadService.parseSize(this.maxsize);
            } else if (!IsNullOrEmpty(this.filesize)) {
              maxSize = this.fileUploadService.parseSize(this.filesize);
            }

            var minSize = this.fileUploadService.parseSize(this.minsize);
            this.validator = FileUploadValidators.sizeRange({
              maxSize: maxSize,
              minSize: minSize
            });
          }
        }]);

        return FileSizeValidator;
      }();

      FileSizeValidator.ɵfac = function FileSizeValidator_Factory(t) {
        return new (t || FileSizeValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileUploadService));
      };

      FileSizeValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: FileSizeValidator,
        selectors: [["file-upload", "filesize", "", "formControlName", ""], ["file-upload", "filesize", "", "formControl", ""], ["file-upload", "filesize", "", "ngModel", ""], ["file-upload", "minsize", "", "formControlName", ""], ["file-upload", "minsize", "", "formControl", ""], ["file-upload", "minsize", "", "ngModel", ""], ["file-upload", "maxsize", "", "formControlName", ""], ["file-upload", "maxsize", "", "formControl", ""], ["file-upload", "maxsize", "", "ngModel", ""]],
        hostVars: 3,
        hostBindings: function FileSizeValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("filesize", ctx.filesize ? ctx.filesize : null)("minsize", ctx.minsize ? ctx.minsize : null)("maxsize", ctx.maxsize ? ctx.maxsize : null);
          }
        },
        inputs: {
          filesize: "filesize",
          minsize: "minsize",
          maxsize: "maxsize"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return FileSizeValidator_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      FileSizeValidator.ctorParameters = function () {
        return [{
          type: FileUploadService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FileSizeValidator.prototype, "filesize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FileSizeValidator.prototype, "minsize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FileSizeValidator.prototype, "maxsize", void 0);
      FileSizeValidator = FileSizeValidator_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FileUploadService])], FileSizeValidator);
      /**
       * A Directive that adds the `fileslimit` validator to controls marked with the
       * `fileslimit` attribute.
       *
       * ### Example
       *
       * ```
       * <file-upload name="files" ngModel fileslimit="2"></file-upload>
       * <file-upload name="files" ngModel [fileslimit]="2"></file-upload>
       * ```
       *
       */

      var FilesLimitValidator = FilesLimitValidator_1 = /*#__PURE__*/function () {
        function FilesLimitValidator() {
          _classCallCheck(this, FilesLimitValidator);
        }

        _createClass(FilesLimitValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('fileslimit' in changes) {
              this._createValidator();

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.fileslimit != null ? this.validator(c) : null;
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this.validator = FileUploadValidators.filesLimit(typeof this.fileslimit === 'string' ? parseInt(this.fileslimit, 10) : this.fileslimit);
          }
        }]);

        return FilesLimitValidator;
      }();

      FilesLimitValidator.ɵfac = function FilesLimitValidator_Factory(t) {
        return new (t || FilesLimitValidator)();
      };

      FilesLimitValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: FilesLimitValidator,
        selectors: [["file-upload", "fileslimit", "", "formControlName", ""], ["file-upload", "fileslimit", "", "formControl", ""], ["file-upload", "fileslimit", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function FilesLimitValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fileslimit", ctx.fileslimit ? ctx.fileslimit : null);
          }
        },
        inputs: {
          fileslimit: "fileslimit"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return FilesLimitValidator_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FilesLimitValidator.prototype, "fileslimit", void 0);
      /**
       * A Directive that adds the `accept` validator to controls marked with the
       * `accept` attribute.
       *
       * ### Example
       *
       * ```
       * <file-upload name="files" ngModel accept="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
       * <file-upload name="files" ngModel [accept]="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
       * ```
       *
       * To specify more than one value, separate the values with a comma (e.g. <file-upload accept="audio/*,video/*,image/*"></file-upload>.
       *
       */

      var FilesAcceptValidator = FilesAcceptValidator_1 = /*#__PURE__*/function () {
        function FilesAcceptValidator() {
          _classCallCheck(this, FilesAcceptValidator);
        }

        _createClass(FilesAcceptValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('accept' in changes) {
              this._createValidator();

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return !!this.validator ? this.validator(c) : null;
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            if (IsNullOrEmpty(this.accept)) {
              return;
            }

            this.validator = FileUploadValidators.accept(this.accept.split(','));
          }
        }]);

        return FilesAcceptValidator;
      }();

      FilesAcceptValidator.ɵfac = function FilesAcceptValidator_Factory(t) {
        return new (t || FilesAcceptValidator)();
      };

      FilesAcceptValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: FilesAcceptValidator,
        selectors: [["file-upload", "accept", "", "formControlName", ""], ["file-upload", "accept", "", "formControl", ""], ["file-upload", "accept", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function FilesAcceptValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("accept", ctx.accept ? ctx.accept : null);
          }
        },
        inputs: {
          accept: "accept"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return FilesAcceptValidator_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FilesAcceptValidator.prototype, "accept", void 0);

      var FilesAcceptDirective = /*#__PURE__*/function () {
        function FilesAcceptDirective(fileUpload, simpleFileUpload) {
          _classCallCheck(this, FilesAcceptDirective);

          this.fileUpload = null;
          this.fileUpload = fileUpload || simpleFileUpload;
        }

        _createClass(FilesAcceptDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.setAccept(this.accept);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('accept' in changes && changes['accept'].currentValue !== changes['accept'].previousValue) {
              this.setAccept(this.accept);
            }
          }
        }, {
          key: "setAccept",
          value: function setAccept(accept) {
            if (this.fileUpload && this.fileUpload.control) {
              this.fileUpload.control.acceptFiles(accept);
            }
          }
        }]);

        return FilesAcceptDirective;
      }();

      FilesAcceptDirective.ɵfac = function FilesAcceptDirective_Factory(t) {
        return new (t || FilesAcceptDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileUploadComponent, 11), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SimpleFileUploadComponent, 11));
      };

      FilesAcceptDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: FilesAcceptDirective,
        selectors: [["file-upload", "accept", ""]],
        hostVars: 1,
        hostBindings: function FilesAcceptDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("accept", ctx.accept ? ctx.accept : null);
          }
        },
        inputs: {
          accept: "accept"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      FilesAcceptDirective.ctorParameters = function () {
        return [{
          type: FileUploadComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: SimpleFileUploadComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FilesAcceptDirective.prototype, "accept", void 0);
      FilesAcceptDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FileUploadComponent, SimpleFileUploadComponent])], FilesAcceptDirective);

      var FileUploadModule = /*#__PURE__*/function () {
        function FileUploadModule() {
          _classCallCheck(this, FileUploadModule);
        }

        _createClass(FileUploadModule, [{
          key: "ngDoBootstrap",
          value: function ngDoBootstrap() {}
        }]);

        return FileUploadModule;
      }();

      FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: FileUploadModule
      });
      FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function FileUploadModule_Factory(t) {
          return new (t || FileUploadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "file-upload:not([simple])",
            template: "<label #labelRef class=\"upload-input\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\" [@zoomAnimation]=\"zoomText\" (@zoomAnimation.done)=\"zoomAnimationDone($event)\">\r\n\r\n    <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : defaultTemplate; context: templateContext\"></ng-container>\r\n\r\n    <ng-template #defaultTemplate let-isFileDragDropAvailable=\"isFileDragDropAvailable\">\r\n        <file-upload-drop-zone>\r\n            <ng-container *ngIf=\"isFileDragDropAvailable; else isNotDragDropAvailable\">\r\n                <b>Drag and drop</b> files<br> or click here\r\n            </ng-container>\r\n            <ng-template #isNotDragDropAvailable>\r\n                <b>Click here</b> to<br> choose a files\r\n            </ng-template>\r\n        </file-upload-drop-zone>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" multiple (change)=\"onInputChange($event)\">\r\n</label>\r\n\r\n<div class=\"upload-list\" *ngIf=\"(control.listVisibilityChanges | async) && control.size > 0 && listVisible\" [@insertAnimation]=\"control.size\" (@insertAnimation.done)=\"animationListFinished($event)\">\r\n    <ng-template ngFor let-file let-i=\"index\" [ngForOf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"listItem ? listItem : defaultItemTemplate; context: { $implicit: file, file: file, index: i, control: control }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultItemTemplate let-i=\"index\" let-file=\"file\" let-control=\"control\">\r\n        <file-upload-list-item  [index]=\"i\" [file]=\"file\" [control]=\"control\">Remove</file-upload-list-item>\r\n    </ng-template>\r\n</div>",
            providers: [FileUploadService, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return FileUploadComponent_1;
              }),
              multi: true
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [ZoomAnimation, InsertAnimation],
            styles: ["@charset \"UTF-8\";:host,:host>*{box-sizing:border-box}:host{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:#92b0b3 dashed 1px;outline-offset:-10px;position:relative}:host ::ng-deep .icon{float:left}:host(.dragover){outline-width:2px}:host(.disabled){opacity:.5;cursor:no-drop}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.upload-input:after{clear:both;content:\"\xA0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);outline:0}:host(.disabled) .upload-input{cursor:not-allowed}:host(.list-visible) .upload-input{top:20px;left:100%;margin-left:-20px;-ms-transform:translate(-100%,0);transform:translate(-100%,0);text-align:center}:host(.hide-text) .upload-input{opacity:0}:host(.dragover:not(.disabled)) .upload-input,:host(:not(.disabled)) .upload-input:focus,:host(:not(.disabled)) .upload-input:hover{color:#80a9d2}:host(.dragover:not(.disabled)) .icon svg,:host(:not(.disabled)) .upload-input:focus svg,:host(:not(.disabled)) .upload-input:hover svg{fill:#80a9d2}file-upload-list-item{padding:10px 0 0}file-upload-list-item:first-child{padding:0}"]
          }]
        }], function () {
          return [{
            type: FileUploadService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ['placeholder']
          }],
          listItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ['item']
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['multiple']
          }],
          hasFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.has-files']
          }],
          isInvalid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-invalid']
          }],
          isAnimationDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['@.disabled']
          }],
          onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['drop', ['$event']]
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inputRef', {
              "static": true
            }]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['labelRef', {
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadDropZoneComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "file-upload-drop-zone",
            template: "<div class=\"icon\">\r\n    <svg viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n        </g>\r\n    </svg>\r\n</div>\r\n\r\n<div class=\"upload-text\">\r\n    <ng-content></ng-content>\r\n</div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [":host{display:block}.icon{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon svg{fill:#909293}.upload-text{overflow:hidden;width:auto;position:relative;padding-left:20px}:host-context(.list-visible) .upload-text{display:none}"]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadListItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "file-upload-list-item",
            template: "\n    <file-upload-icon [file]=\"file\"></file-upload-icon>\n    <div class=\"file-info\">\n        <span class=\"file-name\">{{ file.name }}</span> ({{ calculateSize( file.size ) }})\n    </div>\n    <div class=\"file-buttons\">\n        <span class=\"remove-btn\" (click)=\"removeFile(file)\">\n        <svg viewBox=\"0 0 96 96\">\n            <g>\n                <path d=\"M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4\n                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3\n                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4\n                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5\n                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4\n                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5\n                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5\n                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5\n                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z\"/>\n            </g>\n        </svg> <ng-content></ng-content></span>\n    </div>\n    ",
            styles: ["@charset \"UTF-8\";:host{display:block;font-size:14px;color:#646464}:host:after{clear:both;content:\"\xA0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn{font-size:12px;cursor:pointer}.remove-btn svg{display:inline-block;vertical-align:-20%;height:18px;width:18px}"]
          }]
        }], function () {
          return [{
            type: FileUploadService
          }];
        }, {
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadIconComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "file-upload-icon",
            template: "\r\n\r\n<ng-container [ngSwitch]=\"true\">\r\n\r\n    <svg *ngSwitchDefault viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('image')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\r\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\r\n                C40.6,51.7,39.1,52.3,37.3,52.3z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('audio')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\r\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\r\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\r\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\r\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\r\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\r\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\r\n                C48.9,64.4,49.4,64.6,49.9,64.6z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('text')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\r\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\r\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\r\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('video')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\r\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\r\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\r\n                C64.2,43.7,64.3,43.7,64.5,43.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n</ng-container>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [":host{display:block;border:1px solid #eaeaea;border-radius:4px}:host svg{fill:#909293}"]
          }]
        }], function () {
          return [{
            type: FileUploadService
          }];
        }, {
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadAttributeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "[file-drop-zone]",
            template: "\n        <ng-content></ng-content>\n        <div #overlay class=\"overlay\" *ngIf=\"fileUploadService.isFileDragDropAvailable()\">\n\n            <div class=\"upload-input\">\n                <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : defaultTemplate\"></ng-container>\n\n                <ng-template #defaultTemplate>\n                    <file-upload-drop-zone>\n                        <b>Drop</b> it here\n                    </file-upload-drop-zone>\n                </ng-template>\n            </div>\n        </div>\n    ",
            providers: [FileUploadService],
            styles: [":host{position:relative;display:block}:host .overlay{display:none;background:rgba(255,255,255,.8);outline:#92b0b3 dashed 2px;outline-offset:-10px;position:absolute;top:0;left:0;right:0;bottom:0}:host(.dragover:not(.disabled)) .overlay{display:block}:host ::ng-deep .icon{margin:0 auto 10px}:host ::ng-deep .icon svg{fill:#80a9d2}.upload-input{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:.15s ease-in-out}"]
          }]
        }], function () {
          return [{
            type: FileUploadService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ['placeholder']
          }],
          hasFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.has-files']
          }],
          isInvalid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-invalid']
          }],
          onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['drop', ['$event']]
          }],
          overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['overlay']
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SimpleFileUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "file-upload[simple]",
            template: "<div class=\"upload-text\">\r\n    <ng-template [ngIf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"placeholderRef ? placeholderRef : defaultPlaceholderTemplate; context: { $implicit: control.value[0], control: control, file: control.value[0] }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultPlaceholderTemplate let-file>\r\n        <span *ngIf=\"file; else emptyList\" class=\"file-name\">{{ file.name }}</span>\r\n\r\n        <ng-template #emptyList>\r\n            Select a file...\r\n        </ng-template>\r\n    </ng-template>\r\n</div>\r\n\r\n<label #labelRef class=\"upload-button\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\r\n    <ng-container *ngTemplateOutlet=\"buttonRef ? buttonRef : defaultButtonTemplate; context: { control: control }\"></ng-container>\r\n\r\n    <ng-template #defaultButtonTemplate>\r\n        <div class=\"button\">\r\n            <div class=\"icon\">\r\n                <svg viewBox=\"0 0 96 96\">\r\n                    <g>\r\n                        <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n            \r\n            <span class=\"button-text\">Browse</span>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" (change)=\"onInputChange($event)\">\r\n</label>",
            providers: [FileUploadService, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return SimpleFileUploadComponent_1;
              }),
              multi: true
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [":host,:host>*{box-sizing:border-box}:host{display:-ms-flexbox;display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px rgba(0,0,0,.05)}:host(.disabled){opacity:.5}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon{height:24px;width:24px;display:inline-block}.icon svg{fill:#555}.upload-button{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:0}.upload-text{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text{vertical-align:middle;padding-left:10px}:host(.disabled) .upload-button{cursor:not-allowed}:host(:not(.disabled)) .upload-button:focus,:host(:not(.disabled)) .upload-button:hover{color:#80a9d2}:host(:not(.disabled)) .upload-button:focus svg,:host(:not(.disabled)) .upload-button:hover svg{fill:#80a9d2}"]
          }]
        }], function () {
          return [{
            type: FileUploadService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          buttonRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ['button']
          }],
          placeholderRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ['placeholder']
          }],
          hasFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.has-files']
          }],
          isInvalid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-invalid']
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inputRef', {
              "static": true
            }]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['labelRef', {
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileSizeValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "file-upload[filesize][formControlName],\n    file-upload[filesize][formControl],\n    file-upload[filesize][ngModel],\n    file-upload[minsize][formControlName],\n    file-upload[minsize][formControl],\n    file-upload[minsize][ngModel],\n    file-upload[maxsize][formControlName],\n    file-upload[maxsize][formControl],\n    file-upload[maxsize][ngModel]",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return FileSizeValidator_1;
              }),
              multi: true
            }],
            host: {
              '[attr.filesize]': 'filesize ? filesize : null',
              '[attr.minsize]': 'minsize ? minsize : null',
              '[attr.maxsize]': 'maxsize ? maxsize : null'
            }
          }]
        }], function () {
          return [{
            type: FileUploadService
          }];
        }, {
          filesize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minsize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxsize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilesLimitValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'file-upload[fileslimit][formControlName], file-upload[fileslimit][formControl], file-upload[fileslimit][ngModel]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return FilesLimitValidator_1;
              }),
              multi: true
            }],
            host: {
              '[attr.fileslimit]': 'fileslimit ? fileslimit : null'
            }
          }]
        }], null, {
          fileslimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilesAcceptValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'file-upload[accept][formControlName], file-upload[accept][formControl], file-upload[accept][ngModel]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return FilesAcceptValidator_1;
              }),
              multi: true
            }],
            host: {
              '[attr.accept]': 'accept ? accept : null'
            }
          }]
        }], null, {
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilesAcceptDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'file-upload[accept]',
            host: {
              '[attr.accept]': 'accept ? accept : null'
            }
          }]
        }], function () {
          return [{
            type: FileUploadComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }, {
            type: SimpleFileUploadComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }];
        }, {
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FileUploadModule, {
          declarations: function declarations() {
            return [FileUploadComponent, FileUploadListItemComponent, FileUploadIconComponent, FileUploadDropZoneComponent, FileUploadAttributeComponent, FileSizeValidator, FilesLimitValidator, FilesAcceptValidator, FilesAcceptDirective, SimpleFileUploadComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]];
          },
          exports: function exports() {
            return [FileUploadComponent, FileUploadDropZoneComponent, FileUploadListItemComponent, FileUploadAttributeComponent, FileSizeValidator, FilesLimitValidator, FilesAcceptValidator, FilesAcceptDirective, SimpleFileUploadComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [FileUploadComponent, FileUploadListItemComponent, FileUploadIconComponent, FileUploadDropZoneComponent, FileUploadAttributeComponent, FileSizeValidator, FilesLimitValidator, FilesAcceptValidator, FilesAcceptDirective, SimpleFileUploadComponent],
            exports: [FileUploadComponent, FileUploadDropZoneComponent, FileUploadListItemComponent, FileUploadAttributeComponent, FileSizeValidator, FilesLimitValidator, FilesAcceptValidator, FilesAcceptDirective, SimpleFileUploadComponent],
            entryComponents: [FileUploadComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-file-upload
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=iplab-ngx-file-upload.js.map

      /***/

    },

    /***/
    "./node_modules/@iplab/ngx-file-upload/iplab-ngx-file-upload.ngfactory.js":
    /*!********************************************************************************!*\
      !*** ./node_modules/@iplab/ngx-file-upload/iplab-ngx-file-upload.ngfactory.js ***!
      \********************************************************************************/

    /*! exports provided: FileUploadModuleNgFactory, RenderType_FileUploadComponent, View_FileUploadComponent_0, View_FileUploadComponent_Host_0, FileUploadComponentNgFactory, RenderType_FileUploadDropZoneComponent, View_FileUploadDropZoneComponent_0, View_FileUploadDropZoneComponent_Host_0, FileUploadDropZoneComponentNgFactory, RenderType_FileUploadAttributeComponent, View_FileUploadAttributeComponent_0, View_FileUploadAttributeComponent_Host_0, FileUploadAttributeComponentNgFactory, RenderType_SimpleFileUploadComponent, View_SimpleFileUploadComponent_0, View_SimpleFileUploadComponent_Host_0, SimpleFileUploadComponentNgFactory, RenderType_ɵd, View_ɵd_0, View_ɵd_Host_0, ɵdNgFactory, RenderType_ɵe, View_ɵe_0, View_ɵe_Host_0, ɵeNgFactory */

    /***/
    function node_modulesIplabNgxFileUploadIplabNgxFileUploadNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadModuleNgFactory", function () {
        return FileUploadModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FileUploadComponent", function () {
        return RenderType_FileUploadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FileUploadComponent_0", function () {
        return View_FileUploadComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FileUploadComponent_Host_0", function () {
        return View_FileUploadComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadComponentNgFactory", function () {
        return FileUploadComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FileUploadDropZoneComponent", function () {
        return RenderType_FileUploadDropZoneComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FileUploadDropZoneComponent_0", function () {
        return View_FileUploadDropZoneComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FileUploadDropZoneComponent_Host_0", function () {
        return View_FileUploadDropZoneComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadDropZoneComponentNgFactory", function () {
        return FileUploadDropZoneComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FileUploadAttributeComponent", function () {
        return RenderType_FileUploadAttributeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FileUploadAttributeComponent_0", function () {
        return View_FileUploadAttributeComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FileUploadAttributeComponent_Host_0", function () {
        return View_FileUploadAttributeComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadAttributeComponentNgFactory", function () {
        return FileUploadAttributeComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SimpleFileUploadComponent", function () {
        return RenderType_SimpleFileUploadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SimpleFileUploadComponent_0", function () {
        return View_SimpleFileUploadComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SimpleFileUploadComponent_Host_0", function () {
        return View_SimpleFileUploadComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleFileUploadComponentNgFactory", function () {
        return SimpleFileUploadComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ɵd", function () {
        return RenderType_ɵd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ɵd_0", function () {
        return View_ɵd_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ɵd_Host_0", function () {
        return View_ɵd_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵdNgFactory", function () {
        return ɵdNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ɵe", function () {
        return RenderType_ɵe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ɵe_0", function () {
        return View_ɵe_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ɵe_Host_0", function () {
        return View_ɵe_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵeNgFactory", function () {
        return ɵeNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iplab/ngx-file-upload */
      "./node_modules/@iplab/ngx-file-upload/fesm2015/iplab-ngx-file-upload.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var FileUploadModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [FileUploadComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"], _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"], [])]);
      });

      var styles_FileUploadComponent = ["@charset \"UTF-8\";[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:#92b0b3 dashed 1px;outline-offset:-10px;position:relative}[_nghost-%COMP%]     .icon{float:left}.dragover[_nghost-%COMP%]{outline-width:2px}.disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop}.files-input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.upload-input[_ngcontent-%COMP%]:after{clear:both;content:\"\xA0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);outline:0}.disabled[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{cursor:not-allowed}.list-visible[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{top:20px;left:100%;margin-left:-20px;-ms-transform:translate(-100%,0);transform:translate(-100%,0);text-align:center}.hide-text[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{opacity:0}.dragover[_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover{color:#80a9d2}.dragover[_nghost-%COMP%]:not(.disabled)   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#80a9d2}file-upload-list-item[_ngcontent-%COMP%]{padding:10px 0 0}file-upload-list-item[_ngcontent-%COMP%]:first-child{padding:0}"];

      var RenderType_FileUploadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FileUploadComponent,
        data: {
          "animation": [{
            type: 7,
            name: "zoomAnimation",
            definitions: [{
              type: 1,
              expr: "static => zoomOut",
              animation: [{
                type: 4,
                styles: {
                  type: 6,
                  styles: {
                    transform: "translate(-50%, -50%) scale(2, 2)",
                    opacity: 0
                  },
                  offset: null
                },
                timings: 250
              }],
              options: null
            }, {
              type: 1,
              expr: "static => zoomIn",
              animation: [{
                type: 11,
                selector: ":self",
                animation: [{
                  type: 6,
                  styles: {
                    transform: "translate(-50%, -50%) scale(.2, .2)",
                    opacity: 0,
                    top: "50%",
                    left: "50%",
                    margin: 0
                  },
                  offset: null
                }, {
                  type: 12,
                  timings: 50,
                  animation: [{
                    type: 4,
                    styles: {
                      type: 6,
                      styles: {
                        transform: "translate(-50%, -50%) scale(1, 1)",
                        opacity: 1
                      },
                      offset: null
                    },
                    timings: 250
                  }]
                }],
                options: null
              }],
              options: null
            }],
            options: {}
          }, {
            type: 7,
            name: "insertAnimation",
            definitions: [{
              type: 1,
              expr: "* => *",
              animation: [{
                type: 11,
                selector: ":leave",
                animation: [{
                  type: 12,
                  timings: 30,
                  animation: [{
                    type: 4,
                    styles: {
                      type: 6,
                      styles: {
                        opacity: 0
                      },
                      offset: null
                    },
                    timings: ".3s"
                  }]
                }],
                options: {
                  optional: true
                }
              }, {
                type: 11,
                selector: ":enter",
                animation: [{
                  type: 6,
                  styles: {
                    opacity: 0
                  },
                  offset: null
                }, {
                  type: 12,
                  timings: 30,
                  animation: [{
                    type: 4,
                    styles: {
                      type: 6,
                      styles: {
                        opacity: 1
                      },
                      offset: null
                    },
                    timings: ".3s"
                  }]
                }],
                options: {
                  optional: true
                }
              }],
              options: null
            }],
            options: {}
          }]
        }
      });

      function View_FileUploadComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_FileUploadComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Drag and drop"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" files"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" or click here "]))], null, null);
      }

      function View_FileUploadComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Click here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" to"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" choose a files "]))], null, null);
      }

      function View_FileUploadComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "file-upload-drop-zone", [], null, null, null, View_FileUploadDropZoneComponent_0, RenderType_FileUploadDropZoneComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadDropZoneComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_FileUploadComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["isNotDragDropAvailable", 2]], 0, 0, null, View_FileUploadComponent_4))], function (_ck, _v) {
          var currVal_0 = _v.context.isFileDragDropAvailable;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4);

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_FileUploadComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_FileUploadComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_FileUploadComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, {
          $implicit: 0,
          file: 1,
          index: 2,
          control: 3
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 2, 0, _v.context.$implicit, _v.context.$implicit, _v.context.index, _co.control);

          var currVal_1 = _co.listItem ? _co.listItem : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 4);

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_FileUploadComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "file-upload-list-item", [], null, null, null, View_ɵd_0, RenderType_ɵd)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["ɵd"], [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"]], {
          index: [0, "index"],
          file: [1, "file"],
          control: [2, "control"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Remove"]))], function (_ck, _v) {
          var currVal_0 = _v.context.index;
          var currVal_1 = _v.context.file;
          var currVal_2 = _v.context.control;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_FileUploadComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "upload-list"]], [[24, "@insertAnimation", 0]], [[null, "@insertAnimation.done"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("@insertAnimation.done" === en) {
            var pd_0 = _co.animationListFinished($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_FileUploadComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["defaultItemTemplate", 2]], null, 0, null, View_FileUploadComponent_8))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).transform(_co.control.valueChanges));

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.control.size;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_FileUploadComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
          input: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, {
          label: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, [[2, 0], ["labelRef", 1]], null, 4, "label", [["class", "upload-input"], ["tabindex", "0"]], [[24, "@zoomAnimation", 0]], [[null, "keydown"], [null, "@zoomAnimation.done"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _co.onKeyDown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("@zoomAnimation.done" === en) {
            var pd_1 = _co.zoomAnimationDone($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_FileUploadComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["defaultTemplate", 2]], null, 0, null, View_FileUploadComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, [[1, 0], ["inputRef", 1]], null, 0, "input", [["class", "files-input"], ["multiple", ""], ["tabindex", "-1"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _co.onInputChange($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_FileUploadComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.templateContext;
          var currVal_2 = _co.templateRef ? _co.templateRef : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5);

          _ck(_v, 4, 0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).transform(_co.control.listVisibilityChanges)) && _co.control.size > 0 && _co.listVisible;

          _ck(_v, 8, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.zoomText;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_FileUploadComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "file-upload", [], [[2, "has-files", null], [2, "ng-invalid", null], [40, "@.disabled", 0]], [[null, "drop"]], function (_v, en, $event) {
          var ad = true;

          if ("drop" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onDrop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_FileUploadComponent_0, RenderType_FileUploadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 245760, null, 2, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"], [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
          templateRef: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
          listItem: 0
        })], function (_ck, _v) {
          _ck(_v, 3, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).hasFiles;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isInvalid;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isAnimationDisabled;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      var FileUploadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("file-upload:not([simple])", _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"], View_FileUploadComponent_Host_0, {
        control: "control",
        animation: "animation",
        multiple: "multiple"
      }, {}, []);

      var styles_FileUploadDropZoneComponent = ["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;position:relative;padding-left:20px}.list-visible[_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%], .list-visible   [_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%]{display:none}"];

      var RenderType_FileUploadDropZoneComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FileUploadDropZoneComponent,
        data: {}
      });

      function View_FileUploadDropZoneComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, ":svg:path", [["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [["class", "upload-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
      }

      function View_FileUploadDropZoneComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "file-upload-drop-zone", [], null, null, null, View_FileUploadDropZoneComponent_0, RenderType_FileUploadDropZoneComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadDropZoneComponent"], [], null, null)], null, null);
      }

      var FileUploadDropZoneComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("file-upload-drop-zone", _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadDropZoneComponent"], View_FileUploadDropZoneComponent_Host_0, {}, {}, ["*"]);

      var styles_FileUploadAttributeComponent = ["[_nghost-%COMP%]{position:relative;display:block}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{display:none;background:rgba(255,255,255,.8);outline:#92b0b3 dashed 2px;outline-offset:-10px;position:absolute;top:0;left:0;right:0;bottom:0}.dragover[_nghost-%COMP%]:not(.disabled)   .overlay[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .icon{margin:0 auto 10px}[_nghost-%COMP%]     .icon svg{fill:#80a9d2}.upload-input[_ngcontent-%COMP%]{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:.15s ease-in-out}"];

      var RenderType_FileUploadAttributeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FileUploadAttributeComponent,
        data: {}
      });

      function View_FileUploadAttributeComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_FileUploadAttributeComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "file-upload-drop-zone", [], null, null, null, View_FileUploadDropZoneComponent_0, RenderType_FileUploadDropZoneComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadDropZoneComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Drop"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" it here "]))], null, null);
      }

      function View_FileUploadAttributeComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[1, 0], ["overlay", 1]], null, 4, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "upload-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_FileUploadAttributeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["defaultTemplate", 2]], null, 0, null, View_FileUploadAttributeComponent_3))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.templateRef ? _co.templateRef : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_FileUploadAttributeComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
          overlay: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_FileUploadAttributeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.fileUploadService.isFileDragDropAvailable();

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_FileUploadAttributeComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["file-drop-zone", ""]], [[2, "has-files", null], [2, "ng-invalid", null]], [[null, "drop"]], function (_v, en, $event) {
          var ad = true;

          if ("drop" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onDrop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_FileUploadAttributeComponent_0, RenderType_FileUploadAttributeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4440064, null, 1, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadAttributeComponent"], [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
          templateRef: 0
        })], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).hasFiles;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isInvalid;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      var FileUploadAttributeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[file-drop-zone]", _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadAttributeComponent"], View_FileUploadAttributeComponent_Host_0, {
        control: "control"
      }, {}, ["*"]);

      var styles_SimpleFileUploadComponent = ["[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{display:-ms-flexbox;display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px rgba(0,0,0,.05)}.disabled[_nghost-%COMP%]{opacity:.5}.files-input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon[_ngcontent-%COMP%]{height:24px;width:24px;display:inline-block}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#555}.upload-button[_ngcontent-%COMP%]{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:0}.upload-text[_ngcontent-%COMP%]{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text[_ngcontent-%COMP%]{vertical-align:middle;padding-left:10px}.disabled[_nghost-%COMP%]   .upload-button[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover{color:#80a9d2}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#80a9d2}"];

      var RenderType_SimpleFileUploadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SimpleFileUploadComponent,
        data: {}
      });

      function View_SimpleFileUploadComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_SimpleFileUploadComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_SimpleFileUploadComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, {
          $implicit: 0,
          control: 1,
          file: 2
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 2, 0, _co.control.value[0], _co.control, _co.control.value[0]);

          var currVal_1 = _co.placeholderRef ? _co.placeholderRef : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 6);

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_SimpleFileUploadComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "file-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.name;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_SimpleFileUploadComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Select a file... "]))], null, null);
      }

      function View_SimpleFileUploadComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SimpleFileUploadComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["emptyList", 2]], null, 0, null, View_SimpleFileUploadComponent_5))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2);

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_SimpleFileUploadComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_SimpleFileUploadComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, ":svg:path", [["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [["class", "button-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Browse"]))], null, null);
      }

      function View_SimpleFileUploadComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
          input: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, {
          label: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "div", [["class", "upload-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_SimpleFileUploadComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["defaultPlaceholderTemplate", 2]], null, 0, null, View_SimpleFileUploadComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, [[2, 0], ["labelRef", 1]], null, 5, "label", [["class", "upload-button"], ["tabindex", "0"]], null, [[null, "keydown"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _co.onKeyDown($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_SimpleFileUploadComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](10, {
          control: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["defaultButtonTemplate", 2]], null, 0, null, View_SimpleFileUploadComponent_7)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, [[1, 0], ["inputRef", 1]], null, 0, "input", [["class", "files-input"], ["tabindex", "-1"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _co.onInputChange($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).transform(_co.control.valueChanges));

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _ck(_v, 10, 0, _co.control);

          var currVal_2 = _co.buttonRef ? _co.buttonRef : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11);

          _ck(_v, 9, 0, currVal_1, currVal_2);
        }, null);
      }

      function View_SimpleFileUploadComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "file-upload", [["simple", ""]], [[2, "has-files", null], [2, "ng-invalid", null]], null, null, View_SimpleFileUploadComponent_0, RenderType_SimpleFileUploadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["SimpleFileUploadComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 245760, null, 2, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["SimpleFileUploadComponent"], [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
          buttonRef: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
          placeholderRef: 0
        })], function (_ck, _v) {
          _ck(_v, 3, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).hasFiles;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isInvalid;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      var SimpleFileUploadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("file-upload[simple]", _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["SimpleFileUploadComponent"], View_SimpleFileUploadComponent_Host_0, {
        control: "control"
      }, {}, []);

      var styles_ɵd = ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;font-size:14px;color:#646464}[_nghost-%COMP%]:after{clear:both;content:\"\xA0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon[_ngcontent-%COMP%]{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn[_ngcontent-%COMP%]{font-size:12px;cursor:pointer}.remove-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block;vertical-align:-20%;height:18px;width:18px}"];

      var RenderType_ɵd = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ɵd,
        data: {}
      });

      function View_ɵd_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "file-upload-icon", [], null, null, null, View_ɵe_0, RenderType_ɵe)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["ɵe"], [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"]], {
          file: [0, "file"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["class", "file-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "file-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, [" (", ") "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 5, "div", [["class", "file-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 4, "span", [["class", "remove-btn"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.removeFile(_co.file) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, ":svg:path", [["d", "M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4\n                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3\n                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4\n                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5\n                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4\n                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5\n                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5\n                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5\n                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.file;

          _ck(_v, 1, 0, currVal_0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.file.name;

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _co.calculateSize(_co.file.size);

          _ck(_v, 5, 0, currVal_2);
        });
      }

      function View_ɵd_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "file-upload-list-item", [], null, null, null, View_ɵd_0, RenderType_ɵd)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["ɵd"], [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"]], null, null)], null, null);
      }

      var ɵdNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("file-upload-list-item", _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["ɵd"], View_ɵd_Host_0, {
        index: "index",
        file: "file",
        control: "control"
      }, {}, ["*"]);

      var styles_ɵe = ["[_nghost-%COMP%]{display:block;border:1px solid #eaeaea;border-radius:4px}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}"];

      var RenderType_ɵe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ɵe,
        data: {}
      });

      function View_ɵe_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, ":svg:path", [["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z"]], null, null, null, null, null))], null, null);
      }

      function View_ɵe_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, ":svg:path", [["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\n                C40.6,51.7,39.1,52.3,37.3,52.3z"]], null, null, null, null, null))], null, null);
      }

      function View_ɵe_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, ":svg:path", [["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\n                C48.9,64.4,49.4,64.6,49.9,64.6z"]], null, null, null, null, null))], null, null);
      }

      function View_ɵe_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, ":svg:path", [["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z"]], null, null, null, null, null))], null, null);
      }

      function View_ɵe_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, ":svg:svg", [["viewBox", "0 0 96 96"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, ":svg:g", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, ":svg:path", [["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\n                C64.2,43.7,64.3,43.7,64.5,43.8z"]], null, null, null, null, null))], null, null);
      }

      function View_ɵe_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], {
          ngSwitch: [0, "ngSwitch"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _co.isIcon("image");

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.isIcon("audio");

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _co.isIcon("text");

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _co.isIcon("video");

          _ck(_v, 11, 0, currVal_4);
        }, null);
      }

      function View_ɵe_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "file-upload-icon", [], null, null, null, View_ɵe_0, RenderType_ɵe)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["ɵe"], [_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ɵeNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("file-upload-icon", _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["ɵe"], View_ɵe_Host_0, {
        file: "file"
      }, {}, []);
      /***/

    },

    /***/
    "./src/app/extra-component/drag-n-drop/drag.component.ngfactory.js":
    /*!*************************************************************************!*\
      !*** ./src/app/extra-component/drag-n-drop/drag.component.ngfactory.js ***!
      \*************************************************************************/

    /*! exports provided: RenderType_DragComponent, View_DragComponent_0, View_DragComponent_Host_0, DragComponentNgFactory */

    /***/
    function srcAppExtraComponentDragNDropDragComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DragComponent", function () {
        return RenderType_DragComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DragComponent_0", function () {
        return View_DragComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DragComponent_Host_0", function () {
        return View_DragComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragComponentNgFactory", function () {
        return DragComponentNgFactory;
      });
      /* harmony import */


      var _drag_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./drag.scss.shim.ngstyle */
      "./src/app/extra-component/drag-n-drop/drag.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _drag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./drag.component */
      "./src/app/extra-component/drag-n-drop/drag.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DragComponent = [_drag_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DragComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DragComponent,
        data: {}
      });

      function View_DragComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "li", [["cdkDrag", ""], ["class", "list-group-item border-bottom border-top-0 border-right-0 border-left-0 cursor-pointer d-flex align-items-center cdk-drag"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_c"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _handles: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          _previewTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _placeholderTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "mdi mdi-arrow-right font-medium text-info mr-2 font-18"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h6", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_DragComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "ul", [["cdkDropList", ""], ["class", "list-group pl-0 shadow-sm cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("cdkDropListDropped" === en) {
            var pd_0 = _co.drop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]]], null, {
          dropped: "cdkDropListDropped"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = _co.movies;

          _ck(_v, 5, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isDragging();

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isReceiving();

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        });
      }

      function View_DragComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "div", [["cdkDrag", ""], ["class", "py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom cdk-drag"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_c"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          _handles: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _previewTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          _placeholderTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["class", "todo-border"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h6", [["class", "mb-0 ml-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_DragComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "div", [["cdkDrag", ""], ["class", "py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom cdk-drag"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_c"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          _handles: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          _previewTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          _placeholderTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["class", "done-border"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h6", [["class", "mb-0 ml-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_DragComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "li", [["cdkDrag", ""], ["class", "list-group-item cursor-pointer text-center cdk-drag"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_c"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          _handles: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          _previewTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          _placeholderTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "mdi mdi-cube-outline font-medium text-info mr-2 font-18 d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h6", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_DragComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "ul", [["cdkDropList", ""], ["cdkDropListOrientation", "horizontal"], ["class", "list-group list-group-horizontal-lg pl-0 mt-4 cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("cdkDropListDropped" === en) {
            var pd_0 = _co.orientationDrop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]]], {
          orientation: [0, "orientation"]
        }, {
          dropped: "cdkDropListDropped"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = "horizontal";

          _ck(_v, 2, 0, currVal_4);

          var currVal_5 = _co.horizontalOrientation;

          _ck(_v, 5, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isDragging();

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isReceiving();

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        });
      }

      function View_DragComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "div", [["cdkDrag", ""], ["class", "py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom cdk-drag"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_c"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], {
          data: [0, "data"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          _handles: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          _previewTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          _placeholderTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["class", "todo-border"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h6", [["class", "mb-0 ml-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_2 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_3 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_3);
        });
      }

      function View_DragComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "div", [["cdkDrag", ""], ["class", "py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom cdk-drag"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_c"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], {
          data: [0, "data"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          _handles: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          _previewTemplate: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          _placeholderTemplate: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["class", "done-border"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h6", [["class", "mb-0 ml-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_2 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_3 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_3);
        });
      }

      function View_DragComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-body pb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Basic Drag n Drop"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Transferring items between lists"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "row mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 11, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "bg-info py-2 px-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h4", [["class", "text-white mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Todo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["cdkDropList", ""], ["class", "todo cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("cdkDropListDropped" === en) {
            var pd_0 = _co.onDrop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 147456, [["todoList", 4]], 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]]], {
          connectedTo: [0, "connectedTo"],
          data: [1, "data"]
        }, {
          dropped: "cdkDropListDropped"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 11, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "bg-success py-2 px-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h4", [["class", "text-white mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Done"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 6, "div", [["cdkDropList", ""], ["class", "done cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("cdkDropListDropped" === en) {
            var pd_0 = _co.onDrop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 147456, [["doneList", 4]], 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]]], {
          connectedTo: [0, "connectedTo"],
          data: [1, "data"]
        }, {
          dropped: "cdkDropListDropped"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](29, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["List orientation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Drag&Drop enter predicate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 22, "div", [["class", "row mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 10, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "div", [["class", "bg-info py-2 px-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "h4", [["class", "text-white mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Available numbers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 5, "div", [["cdkDropList", ""], ["cdkDropListConnectedTo", "even"], ["class", "todo cdk-drop-list"], ["id", "all"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("cdkDropListDropped" === en) {
            var pd_0 = _co.oddevenDrop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]]], {
          connectedTo: [0, "connectedTo"],
          data: [1, "data"],
          id: [2, "id"],
          enterPredicate: [3, "enterPredicate"]
        }, {
          dropped: "cdkDropListDropped"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 10, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "div", [["class", "bg-success py-2 px-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "h4", [["class", "text-white mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Even numbers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 5, "div", [["cdkDropList", ""], ["cdkDropListConnectedTo", "all"], ["class", "done cdk-drop-list"], ["id", "even"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("cdkDropListDropped" === en) {
            var pd_0 = _co.oddevenDrop($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]]], {
          connectedTo: [0, "connectedTo"],
          data: [1, "data"],
          id: [2, "id"],
          enterPredicate: [3, "enterPredicate"]
        }, {
          dropped: "cdkDropListDropped"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST_GROUP"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DragComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.movies.length;

          _ck(_v, 5, 0, currVal_0);

          var currVal_5 = _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28));

          var currVal_6 = _co.todo;

          _ck(_v, 16, 0, currVal_5, currVal_6);

          var currVal_7 = _co.todo;

          _ck(_v, 20, 0, currVal_7);

          var currVal_12 = _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16));

          var currVal_13 = _co.done;

          _ck(_v, 28, 0, currVal_12, currVal_13);

          var currVal_14 = _co.done;

          _ck(_v, 32, 0, currVal_14);

          var currVal_15 = _co.horizontalOrientation.length;

          _ck(_v, 38, 0, currVal_15);

          var currVal_20 = "even";
          var currVal_21 = _co.all;
          var currVal_22 = "all";
          var currVal_23 = _co.noReturnPredicate;

          _ck(_v, 49, 0, currVal_20, currVal_21, currVal_22, currVal_23);

          var currVal_24 = _co.all;

          _ck(_v, 52, 0, currVal_24);

          var currVal_29 = "all";
          var currVal_30 = _co.even;
          var currVal_31 = "even";
          var currVal_32 = _co.evenPredicate;

          _ck(_v, 60, 0, currVal_29, currVal_30, currVal_31, currVal_32);

          var currVal_33 = _co.even;

          _ck(_v, 63, 0, currVal_33);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).id;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._dropListRef.isDragging();

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._dropListRef.isReceiving();

          _ck(_v, 14, 0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).id;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._dropListRef.isDragging();

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._dropListRef.isReceiving();

          _ck(_v, 26, 0, currVal_8, currVal_9, currVal_10, currVal_11);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).id;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).disabled;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._dropListRef.isDragging();

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._dropListRef.isReceiving();

          _ck(_v, 47, 0, currVal_16, currVal_17, currVal_18, currVal_19);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).id;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).disabled;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._dropListRef.isDragging();

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._dropListRef.isReceiving();

          _ck(_v, 58, 0, currVal_25, currVal_26, currVal_27, currVal_28);
        });
      }

      function View_DragComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_DragComponent_0, RenderType_DragComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _drag_component__WEBPACK_IMPORTED_MODULE_6__["DragComponent"], [], null, null)], null, null);
      }

      var DragComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _drag_component__WEBPACK_IMPORTED_MODULE_6__["DragComponent"], View_DragComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/extra-component/drag-n-drop/drag.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/extra-component/drag-n-drop/drag.component.ts ***!
      \***************************************************************/

    /*! exports provided: DragComponent */

    /***/
    function srcAppExtraComponentDragNDropDragComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragComponent", function () {
        return DragComponent;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/fesm2015/drag-drop.js");

      var DragComponent = /*#__PURE__*/function () {
        function DragComponent() {
          _classCallCheck(this, DragComponent);

          this.movies = ["Order the server hardware for production as well as test/quality assurance (QA).", "Install Tivoli Business Systems Manager and appropriate patches on test or QA servers.", "Create configuration level objects for the test LPAR.", "Install Tivoli Business Systems Manager and appropriate maintenance on the test LPAR.", "Install event enablement on the Tivoli Enterprise Console server.", "Install event enablement on the Tivoli Enterprise Console server.", "Configure servers, Source/390 on the production LPARs, event enablement on the Tivoli Enterprise Console server, and verify connectivity.", "Monitor system performance and adjust hardware as required."]; // orientation

          this.horizontalOrientation = ["React", "Angular", "Vuejs", "Bootstrap", "Laravel", "Shopify", "Wordpress", "Jquery", "Ant.js", "Reactstrap"]; // Transfer Items Between Lists

          this.todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];
          this.done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail"]; // ood even number

          this.all = [1, 3, 5, 6, 7, 8, 9];
          this.even = [10, 2, 4];
        }

        _createClass(DragComponent, [{
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.movies, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "orientationDrop",
          value: function orientationDrop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.horizontalOrientation, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
          }
        }, {
          key: "oddevenDrop",
          value: function oddevenDrop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
          }
          /** Predicate function that only allows even numbers to be dropped into a list. */

        }, {
          key: "evenPredicate",
          value: function evenPredicate(item) {
            return item.data % 2 === 0;
          }
          /** Predicate function that doesn't allow items to be dropped into a list. */

        }, {
          key: "noReturnPredicate",
          value: function noReturnPredicate() {
            return false;
          }
        }]);

        return DragComponent;
      }();
      /***/

    },

    /***/
    "./src/app/extra-component/drag-n-drop/drag.scss.shim.ngstyle.js":
    /*!***********************************************************************!*\
      !*** ./src/app/extra-component/drag-n-drop/drag.scss.shim.ngstyle.js ***!
      \***********************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppExtraComponentDragNDropDragScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: move;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtY29tcG9uZW50L2RyYWctbi1kcm9wL2RyYWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUhBQ3dFO0FBQTFFOztBQUdBO0VBQ0UsVUFBVTtBQUFaOztBQUdBO0VBQ0Usc0RBQXNEO0FBQXhEOztBQUdBO0VBQ0UsWUFBWTtBQUFkOztBQUdBO0VBQ0Usc0RBQXNEO0FBQXhEOztBQUdBO0VBQ0UsWUFBWTtBQUFkIiwiZmlsZSI6InNyYy9hcHAvZXh0cmEtY29tcG9uZW50L2RyYWctbi1kcm9wL2RyYWcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmN1cnNvci1wb2ludGVyIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuIl19 */"];
      /***/
    },

    /***/
    "./src/app/extra-component/editor/editor.component.ngfactory.js":
    /*!**********************************************************************!*\
      !*** ./src/app/extra-component/editor/editor.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_EditorComponent, View_EditorComponent_0, View_EditorComponent_Host_0, EditorComponentNgFactory */

    /***/
    function srcAppExtraComponentEditorEditorComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_EditorComponent", function () {
        return RenderType_EditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EditorComponent_0", function () {
        return View_EditorComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EditorComponent_Host_0", function () {
        return View_EditorComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorComponentNgFactory", function () {
        return EditorComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../node_modules/ngx-quill/ngx-quill.ngfactory */
      "./node_modules/ngx-quill/ngx-quill.ngfactory.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editor.component */
      "./src/app/extra-component/editor/editor.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_EditorComponent = [];

      var RenderType_EditorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_EditorComponent,
        data: {}
      });

      function View_EditorComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 13, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 12, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 11, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Basic Editor"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["quill editor with angular and TypeScript. ngx-quill is the new angular 2 and beyond implementation of ngQuill. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "a", [["href", "https://github.com/KillerCodeMonkey/ngx-quill"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Official website"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 4, "quill-editor", [], [[8, "style", 2]], null, null, _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_QuillEditorComponent_0"], _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_QuillEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4898816, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](14, {
          height: 0
        })], null, function (_ck, _v) {
          var currVal_0 = _ck(_v, 14, 0, "200px");

          _ck(_v, 10, 0, currVal_0);
        });
      }

      function View_EditorComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_EditorComponent_0, RenderType_EditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, _editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"], [], null, null)], null, null);
      }

      var EditorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"], View_EditorComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/extra-component/editor/editor.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/extra-component/editor/editor.component.ts ***!
      \************************************************************/

    /*! exports provided: EditorComponent */

    /***/
    function srcAppExtraComponentEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
        return EditorComponent;
      });

      var EditorComponent = /*#__PURE__*/function () {
        function EditorComponent() {
          _classCallCheck(this, EditorComponent);

          this.subtitle = 'This is some text within a card block.';
        }

        _createClass(EditorComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return EditorComponent;
      }();
      /***/

    },

    /***/
    "./src/app/extra-component/extra-component.module.ngfactory.js":
    /*!*********************************************************************!*\
      !*** ./src/app/extra-component/extra-component.module.ngfactory.js ***!
      \*********************************************************************/

    /*! exports provided: ExtraComponentModuleNgFactory */

    /***/
    function srcAppExtraComponentExtraComponentModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraComponentModuleNgFactory", function () {
        return ExtraComponentModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _extra_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./extra-component.module */
      "./src/app/extra-component/extra-component.module.ts");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
      "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
      /* harmony import */


      var _node_modules_iplab_ngx_file_upload_iplab_ngx_file_upload_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../node_modules/@iplab/ngx-file-upload/iplab-ngx-file-upload.ngfactory */
      "./node_modules/@iplab/ngx-file-upload/iplab-ngx-file-upload.ngfactory.js");
      /* harmony import */


      var _toastr_toastr_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toastr/toastr.component.ngfactory */
      "./src/app/extra-component/toastr/toastr.component.ngfactory.js");
      /* harmony import */


      var _file_upload_upload_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./file-upload/upload.component.ngfactory */
      "./src/app/extra-component/file-upload/upload.component.ngfactory.js");
      /* harmony import */


      var _editor_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./editor/editor.component.ngfactory */
      "./src/app/extra-component/editor/editor.component.ngfactory.js");
      /* harmony import */


      var _drag_n_drop_drag_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./drag-n-drop/drag.component.ngfactory */
      "./src/app/extra-component/drag-n-drop/drag.component.ngfactory.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @iplab/ngx-file-upload */
      "./node_modules/@iplab/ngx-file-upload/fesm2015/iplab-ngx-file-upload.js");
      /* harmony import */


      var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./toastr/toastr.component */
      "./src/app/extra-component/toastr/toastr.component.ts");
      /* harmony import */


      var _extra_component_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./extra-component.routing */
      "./src/app/extra-component/extra-component.routing.ts");
      /* harmony import */


      var _file_upload_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./file-upload/upload.component */
      "./src/app/extra-component/file-upload/upload.component.ts");
      /* harmony import */


      var _editor_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./editor/editor.component */
      "./src/app/extra-component/editor/editor.component.ts");
      /* harmony import */


      var _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./drag-n-drop/drag.component */
      "./src/app/extra-component/drag-n-drop/drag.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var ExtraComponentModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_extra_component_module__WEBPACK_IMPORTED_MODULE_1__["ExtraComponentModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _node_modules_iplab_ngx_file_upload_iplab_ngx_file_upload_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponentNgFactory"], _toastr_toastr_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ToastrComponentNgFactory"], _file_upload_upload_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["UploadComponentNgFactory"], _editor_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["EditorComponentNgFactory"], _drag_n_drop_drag_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DragComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillService"], ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillService"], [ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QUILL_CONFIG_TOKEN"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"], _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _extra_component_module__WEBPACK_IMPORTED_MODULE_1__["ExtraComponentModule"], _extra_component_module__WEBPACK_IMPORTED_MODULE_1__["ExtraComponentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QUILL_CONFIG_TOKEN"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
          return [[{
            path: "",
            children: [{
              path: "toastr",
              component: _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_17__["ToastrComponent"],
              data: _extra_component_routing__WEBPACK_IMPORTED_MODULE_18__["ɵ0"]
            }, {
              path: "upload",
              component: _file_upload_upload_component__WEBPACK_IMPORTED_MODULE_19__["UploadComponent"],
              data: _extra_component_routing__WEBPACK_IMPORTED_MODULE_18__["ɵ1"]
            }, {
              path: "editor",
              component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_20__["EditorComponent"],
              data: _extra_component_routing__WEBPACK_IMPORTED_MODULE_18__["ɵ2"]
            }, {
              path: "dragndrop",
              component: _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_21__["DragComponent"],
              data: _extra_component_routing__WEBPACK_IMPORTED_MODULE_18__["ɵ3"]
            }]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "./src/app/extra-component/extra-component.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/extra-component/extra-component.module.ts ***!
      \***********************************************************/

    /*! exports provided: ExtraComponentModule */

    /***/
    function srcAppExtraComponentExtraComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraComponentModule", function () {
        return ExtraComponentModule;
      });

      var ExtraComponentModule = function ExtraComponentModule() {
        _classCallCheck(this, ExtraComponentModule);
      };
      /***/

    },

    /***/
    "./src/app/extra-component/extra-component.routing.ts":
    /*!************************************************************!*\
      !*** ./src/app/extra-component/extra-component.routing.ts ***!
      \************************************************************/

    /*! exports provided: ExtraComponentsRoutes, ɵ0, ɵ1, ɵ2, ɵ3 */

    /***/
    function srcAppExtraComponentExtraComponentRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraComponentsRoutes", function () {
        return ExtraComponentsRoutes;
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
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
        return ɵ3;
      });
      /* harmony import */


      var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toastr/toastr.component */
      "./src/app/extra-component/toastr/toastr.component.ts");
      /* harmony import */


      var _file_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./file-upload/upload.component */
      "./src/app/extra-component/file-upload/upload.component.ts");
      /* harmony import */


      var _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editor/editor.component */
      "./src/app/extra-component/editor/editor.component.ts");
      /* harmony import */


      var _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./drag-n-drop/drag.component */
      "./src/app/extra-component/drag-n-drop/drag.component.ts");

      var ɵ0 = {
        title: 'Toastr Notification',
        urls: [{
          title: 'Dashboard',
          url: '/dashboard'
        }, {
          title: 'Toastr Page'
        }]
      },
          ɵ1 = {
        title: 'Upload Page',
        urls: [{
          title: 'Dashboard',
          url: '/dashboard'
        }, {
          title: 'Upload Page'
        }]
      },
          ɵ2 = {
        title: 'Editor Page',
        urls: [{
          title: 'Dashboard',
          url: '/dashboard'
        }, {
          title: 'Editor Page'
        }]
      },
          ɵ3 = {
        title: 'DragComponent Page',
        urls: [{
          title: 'Dashboard',
          url: '/dashboard'
        }, {
          title: 'DragComponent Page'
        }]
      };
      var ExtraComponentsRoutes = [{
        path: '',
        children: [{
          path: 'toastr',
          component: _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_0__["ToastrComponent"],
          data: ɵ0
        }, {
          path: 'upload',
          component: _file_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadComponent"],
          data: ɵ1
        }, {
          path: 'editor',
          component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"],
          data: ɵ2
        }, {
          path: 'dragndrop',
          component: _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_3__["DragComponent"],
          data: ɵ3
        }]
      }];
      /***/
    },

    /***/
    "./src/app/extra-component/file-upload/upload.component.ngfactory.js":
    /*!***************************************************************************!*\
      !*** ./src/app/extra-component/file-upload/upload.component.ngfactory.js ***!
      \***************************************************************************/

    /*! exports provided: RenderType_UploadComponent, View_UploadComponent_0, View_UploadComponent_Host_0, UploadComponentNgFactory */

    /***/
    function srcAppExtraComponentFileUploadUploadComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_UploadComponent", function () {
        return RenderType_UploadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_UploadComponent_0", function () {
        return View_UploadComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_UploadComponent_Host_0", function () {
        return View_UploadComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadComponentNgFactory", function () {
        return UploadComponentNgFactory;
      });
      /* harmony import */


      var _upload_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./upload.scss.shim.ngstyle */
      "./src/app/extra-component/file-upload/upload.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./upload.component */
      "./src/app/extra-component/file-upload/upload.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_UploadComponent = [_upload_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_UploadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_UploadComponent,
        data: {}
      });

      function View_UploadComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h4", [["class", "card-title mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["With minimal configuration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [["class", "card-title mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["With all available configuration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "h4", [["class", "card-title mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["With all available configuration"]))], null, null);
      }

      function View_UploadComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_UploadComponent_0, RenderType_UploadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null);
      }

      var UploadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], View_UploadComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/extra-component/file-upload/upload.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/extra-component/file-upload/upload.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UploadComponent */

    /***/
    function srcAppExtraComponentFileUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
        return UploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iplab/ngx-file-upload */
      "./node_modules/@iplab/ngx-file-upload/fesm2015/iplab-ngx-file-upload.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var UploadComponent = /*#__PURE__*/function () {
        function UploadComponent(elRef) {
          _classCallCheck(this, UploadComponent);

          this.elRef = elRef;
          this.fileUploadControl = new _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadControl"](_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadValidators"].fileSize(80000)).multiple(false);
          this.fileUploadWithTemplate = new _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadControl"]();
          this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadValidators"].accept(['video/*', 'image/*', '.mp3']));
          this.demoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            files: this.filesControl
          });
          this.customFileUploadControl = new _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploadControl"]().setListVisibility(false);
          this.animation = false;
          this.multiple = false;
          this.uploadedFiles = [];
          this.isDisabled = false;
          this.acceptFiles = 'image/*';
        }

        _createClass(UploadComponent, [{
          key: "toggleStatus",
          value: function toggleStatus() {
            this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
          }
        }, {
          key: "toggleStandAloneStatus",
          value: function toggleStandAloneStatus() {
            this.fileUploadControl.disable(!this.fileUploadControl.disabled);
          }
        }, {
          key: "toggleListVisibility",
          value: function toggleListVisibility() {
            this.fileUploadControl.setListVisibility(!this.fileUploadControl.isListVisible);
          }
        }, {
          key: "toggleMultiple",
          value: function toggleMultiple() {
            this.fileUploadControl.multiple(!this.fileUploadControl.isMultiple);
          }
        }, {
          key: "toggleReactiveMultiple",
          value: function toggleReactiveMultiple() {
            this.multiple = !this.multiple;
          }
        }, {
          key: "clearReactive",
          value: function clearReactive() {
            this.filesControl.setValue([]);
          }
        }, {
          key: "clearTemplateDriven",
          value: function clearTemplateDriven() {
            this.uploadedFiles = [];
          }
        }, {
          key: "clearStandAlone",
          value: function clearStandAlone() {
            this.fileUploadControl.clear();
          }
        }]);

        return UploadComponent;
      }();
      /***/

    },

    /***/
    "./src/app/extra-component/file-upload/upload.scss.shim.ngstyle.js":
    /*!*************************************************************************!*\
      !*** ./src/app/extra-component/file-upload/upload.scss.shim.ngstyle.js ***!
      \*************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppExtraComponentFileUploadUploadScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["img[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\nfile-upload.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  outline-color: #ff0000;\n  background-color: #fdf4f4;\n}\n\n.message-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.file-list[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n}\n\n.file-list[_ngcontent-%COMP%] {\n  padding: 10px 0 5px;\n}\n\n.custom-zone[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 20px;\n  width: auto;\n}\n\n.custom-zone[_ngcontent-%COMP%]   file-upload[_ngcontent-%COMP%] {\n  float: left;\n  max-width: 400px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtY29tcG9uZW50L2ZpbGUtdXBsb2FkL3VwbG9hZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0NBQWtDO0FBQ3RDOztBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7QUFDZjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZXh0cmEtY29tcG9uZW50L2ZpbGUtdXBsb2FkL3VwbG9hZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmZpbGUtdXBsb2FkLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiAjZmYwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjRmNDtcclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcHBlciB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxufVxyXG5cclxuLmZpbGUtbGlzdCBzdmcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbn1cclxuXHJcbi5maWxlLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDVweDtcclxufVxyXG5cclxuLmN1c3RvbS16b25lIC5maWxlLWxpc3Qge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmN1c3RvbS16b25lIGZpbGUtdXBsb2FkIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"];
      /***/
    },

    /***/
    "./src/app/extra-component/toastr/toastr.component.ngfactory.js":
    /*!**********************************************************************!*\
      !*** ./src/app/extra-component/toastr/toastr.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_ToastrComponent, View_ToastrComponent_0, View_ToastrComponent_Host_0, ToastrComponentNgFactory */

    /***/
    function srcAppExtraComponentToastrToastrComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ToastrComponent", function () {
        return RenderType_ToastrComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ToastrComponent_0", function () {
        return View_ToastrComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ToastrComponent_Host_0", function () {
        return View_ToastrComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrComponentNgFactory", function () {
        return ToastrComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _toastr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toastr.component */
      "./src/app/extra-component/toastr/toastr.component.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ToastrComponent = [];

      var RenderType_ToastrComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_ToastrComponent,
        data: {}
      });

      function View_ToastrComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 36, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Success"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simpel toastr with success message"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "button", [["class", "btn btn-success"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showSuccess() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Success"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 8, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Danger"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simpel toastr with Danger message"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-danger"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showError() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Danger Error"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 8, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Warning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simpel toastr with Warning message"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "button", [["class", "btn btn-warning"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showWarning() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Warning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 8, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 6, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Info"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "h6", [["class", "card-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This is the simpel toastr with Info message"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "button", [["class", "btn btn-info"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showInfo() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Info"]))], null, null);
      }

      function View_ToastrComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ToastrComponent_0, RenderType_ToastrComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _toastr_component__WEBPACK_IMPORTED_MODULE_1__["ToastrComponent"], [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]], null, null)], null, null);
      }

      var ToastrComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _toastr_component__WEBPACK_IMPORTED_MODULE_1__["ToastrComponent"], View_ToastrComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/extra-component/toastr/toastr.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/extra-component/toastr/toastr.component.ts ***!
      \************************************************************/

    /*! exports provided: ToastrComponent */

    /***/
    function srcAppExtraComponentToastrToastrComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrComponent", function () {
        return ToastrComponent;
      });
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

      var ToastrComponent = /*#__PURE__*/function () {
        function ToastrComponent(toastr) {
          _classCallCheck(this, ToastrComponent);

          this.toastr = toastr;
        }

        _createClass(ToastrComponent, [{
          key: "showSuccess",
          value: function showSuccess() {
            this.toastr.success('You are awesome!', 'Success!');
          }
        }, {
          key: "showError",
          value: function showError() {
            this.toastr.error('This is not good!', 'Oops!');
          }
        }, {
          key: "showWarning",
          value: function showWarning() {
            this.toastr.warning('You are being warned.', 'Alert!');
          }
        }, {
          key: "showInfo",
          value: function showInfo() {
            this.toastr.info('Just some information for you.');
          }
        }]);

        return ToastrComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=extra-component-extra-component-module-ngfactory-es5.js.map