(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19], {
    /***/
    "./node_modules/ngx-quill/fesm2015/ngx-quill.js":
    /*!******************************************************!*\
      !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.js ***!
      \******************************************************/

    /*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorBase, QuillEditorComponent, QuillModule, QuillService, QuillViewComponent, QuillViewHTMLComponent, defaultModules */

    /***/
    function node_modulesNgxQuillFesm2015NgxQuillJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function () {
        return QUILL_CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorBase", function () {
        return QuillEditorBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function () {
        return QuillEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillModule", function () {
        return QuillModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillService", function () {
        return QuillService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewComponent", function () {
        return QuillViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponent", function () {
        return QuillViewHTMLComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultModules", function () {
        return defaultModules;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ng-bootstrap/ng-bootstrap/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var _c0 = [[["", "quill-editor-toolbar", ""]]];
      var _c1 = ["[quill-editor-toolbar]"];
      var defaultModules = {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
          header: 1
        }, {
          header: 2
        }], [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }], [{
          script: 'sub'
        }, {
          script: 'super'
        }], [{
          indent: '-1'
        }, {
          indent: '+1'
        }], [{
          direction: 'rtl'
        }], [{
          size: ['small', false, 'large', 'huge']
        }], [{
          header: [1, 2, 3, 4, 5, 6, false]
        }], [{
          color: []
        }, {
          background: []
        }], [{
          font: []
        }], [{
          align: []
        }], ['clean'], ['link', 'image', 'video'] // link and image, video
        ]
      };

      var getFormat = function getFormat(format, configFormat) {
        var passedFormat = format || configFormat;
        return passedFormat || 'html';
      };

      var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');

      var QuillService = /*@__PURE__*/function () {
        var QuillService = /*#__PURE__*/function () {
          function QuillService(config) {
            _classCallCheck(this, QuillService);

            this.config = config;
            this.count = 0;

            if (!this.config) {
              this.config = {
                modules: defaultModules
              };
            }
          }

          _createClass(QuillService, [{
            key: "getQuill",
            value: function getQuill() {
              var _this = this;

              this.count++;

              if (!this.Quill && this.count === 1) {
                this.$importPromise = new Promise(function (resolve) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _this2 = this;

                    var _a, _b, quillImport;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return __webpack_require__.e(
                            /*! import() */
                            35).then(__webpack_require__.t.bind(null,
                            /*! quill */
                            "./node_modules/quill/dist/quill.js", 7));

                          case 2:
                            quillImport = _context.sent;
                            this.Quill = quillImport["default"] ? quillImport["default"] : quillImport; // Only register custom options and modules once

                            (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                              var newCustomOption = _this2.Quill["import"](customOption["import"]);

                              newCustomOption.whitelist = customOption.whitelist;

                              _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                            });
                            (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                              var implementation = _ref.implementation,
                                  path = _ref.path;

                              _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                            });
                            resolve(this.Quill);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                });
              }

              return this.$importPromise;
            }
          }]);

          return QuillService;
        }();

        QuillService.ɵfac = function QuillService_Factory(t) {
          return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](QUILL_CONFIG_TOKEN));
        };

        QuillService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
          factory: function QuillService_Factory() {
            return new QuillService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(QUILL_CONFIG_TOKEN));
          },
          token: QuillService,
          providedIn: "root"
        });
        return QuillService;
      }();

      var QuillEditorBase = /*@__PURE__*/function () {
        var QuillEditorBase = /*#__PURE__*/function () {
          function QuillEditorBase(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
            var _this3 = this;

            _classCallCheck(this, QuillEditorBase);

            this.elementRef = elementRef;
            this.domSanitizer = domSanitizer;
            this.doc = doc;
            this.platformId = platformId;
            this.renderer = renderer;
            this.zone = zone;
            this.service = service;
            this.required = false;
            this.customToolbarPosition = 'top';
            this.sanitize = false;
            this.styles = null;
            this.strict = true;
            this.customOptions = [];
            this.customModules = [];
            this.preserveWhitespace = false;
            this.trimOnValidation = false;
            this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.disabled = false; // used to store initial value before ViewInit

            this.valueGetter = function (quillEditor, editorElement) {
              var html = editorElement.querySelector('.ql-editor').innerHTML;

              if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
              }

              var modelValue = html;
              var format = getFormat(_this3.format, _this3.service.config.format);

              if (format === 'text') {
                modelValue = quillEditor.getText();
              } else if (format === 'object') {
                modelValue = quillEditor.getContents();
              } else if (format === 'json') {
                try {
                  modelValue = JSON.stringify(quillEditor.getContents());
                } catch (e) {
                  modelValue = quillEditor.getText();
                }
              }

              return modelValue;
            };

            this.valueSetter = function (quillEditor, value) {
              var format = getFormat(_this3.format, _this3.service.config.format);

              if (format === 'html') {
                if (_this3.sanitize) {
                  value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
                }

                return quillEditor.clipboard.convert(value);
              } else if (format === 'json') {
                try {
                  return JSON.parse(value);
                } catch (e) {
                  return [{
                    insert: value
                  }];
                }
              }

              return value;
            };

            this.selectionChangeHandler = function (range, oldRange, source) {
              var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

              if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
                return;
              }

              _this3.zone.run(function () {
                if (range === null) {
                  _this3.onBlur.emit({
                    editor: _this3.quillEditor,
                    source: source
                  });
                } else if (oldRange === null) {
                  _this3.onFocus.emit({
                    editor: _this3.quillEditor,
                    source: source
                  });
                }

                _this3.onSelectionChanged.emit({
                  editor: _this3.quillEditor,
                  oldRange: oldRange,
                  range: range,
                  source: source
                });

                if (shouldTriggerOnModelTouched) {
                  _this3.onModelTouched();
                }
              });
            };

            this.textChangeHandler = function (delta, oldDelta, source) {
              // only emit changes emitted by user interactions
              var text = _this3.quillEditor.getText();

              var content = _this3.quillEditor.getContents();

              var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

              if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
              }

              var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
              var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

              if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
                return;
              }

              _this3.zone.run(function () {
                if (shouldTriggerOnModelChange) {
                  _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
                }

                _this3.onContentChanged.emit({
                  content: content,
                  delta: delta,
                  editor: _this3.quillEditor,
                  html: html,
                  oldDelta: oldDelta,
                  source: source,
                  text: text
                });
              });
            }; // tslint:disable-next-line:max-line-length


            this.editorChangeHandler = function (event, current, old, source) {
              // only emit changes when there's any listener
              if (!_this3.onEditorChanged.observers.length) {
                return;
              } // only emit changes emitted by user interactions


              if (event === 'text-change') {
                var text = _this3.quillEditor.getText();

                var content = _this3.quillEditor.getContents();

                var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

                if (html === '<p><br></p>' || html === '<div><br></div>') {
                  html = null;
                }

                _this3.zone.run(function () {
                  _this3.onEditorChanged.emit({
                    content: content,
                    delta: current,
                    editor: _this3.quillEditor,
                    event: event,
                    html: html,
                    oldDelta: old,
                    source: source,
                    text: text
                  });
                });
              } else {
                _this3.onEditorChanged.emit({
                  editor: _this3.quillEditor,
                  event: event,
                  oldRange: old,
                  range: current,
                  source: source
                });
              }
            };
          }

          _createClass(QuillEditorBase, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this4 = this;

                var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, scrollingContainer, formats, format, contents;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                          _context2.next = 2;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 2:
                        _context2.next = 4;
                        return this.service.getQuill();

                      case 4:
                        Quill = _context2.sent;
                        this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                        toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                        modules = Object.assign({}, this.modules || this.service.config.modules);

                        if (toolbarElem) {
                          modules.toolbar = toolbarElem;
                        } else if (modules.toolbar === undefined) {
                          modules.toolbar = defaultModules.toolbar;
                        }

                        placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                        if (placeholder === undefined) {
                          placeholder = 'Insert text here ...';
                        }

                        if (this.styles) {
                          Object.keys(this.styles).forEach(function (key) {
                            _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                          });
                        }

                        if (this.classes) {
                          this.addClasses(this.classes);
                        }

                        this.customOptions.forEach(function (customOption) {
                          var newCustomOption = Quill["import"](customOption["import"]);
                          newCustomOption.whitelist = customOption.whitelist;
                          Quill.register(newCustomOption, true);
                        });
                        this.customModules.forEach(function (_ref2) {
                          var implementation = _ref2.implementation,
                              path = _ref2.path;
                          Quill.register(path, implementation);
                        });
                        bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                        if (!bounds) {
                          bounds = this.service.config.bounds ? this.service.config.bounds : this.doc.body;
                        }

                        debug = this.debug;

                        if (!debug && debug !== false && this.service.config.debug) {
                          debug = this.service.config.debug;
                        }

                        readOnly = this.readOnly;

                        if (!readOnly && this.readOnly !== false) {
                          readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                        }

                        scrollingContainer = this.scrollingContainer;

                        if (!scrollingContainer && this.scrollingContainer !== null) {
                          scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                        }

                        formats = this.formats;

                        if (!formats && formats === undefined) {
                          formats = this.service.config.formats ? _toConsumableArray(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                        }

                        this.zone.runOutsideAngular(function () {
                          _this4.quillEditor = new Quill(_this4.editorElem, {
                            bounds: bounds,
                            debug: debug,
                            formats: formats,
                            modules: modules,
                            placeholder: placeholder,
                            readOnly: readOnly,
                            scrollingContainer: scrollingContainer,
                            strict: _this4.strict,
                            theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                          });
                        });

                        if (this.content) {
                          format = getFormat(this.format, this.service.config.format);

                          if (format === 'object') {
                            this.quillEditor.setContents(this.content, 'silent');
                          } else if (format === 'text') {
                            this.quillEditor.setText(this.content, 'silent');
                          } else if (format === 'json') {
                            try {
                              this.quillEditor.setContents(JSON.parse(this.content), 'silent');
                            } catch (e) {
                              this.quillEditor.setText(this.content, 'silent');
                            }
                          } else {
                            if (this.sanitize) {
                              this.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.content);
                            }

                            contents = this.quillEditor.clipboard.convert(this.content);
                            this.quillEditor.setContents(contents, 'silent');
                          }

                          this.quillEditor.getModule('history').clear();
                        } // initialize disabled status based on this.disabled as default value


                        this.setDisabledState(); // triggered if selection or text changed

                        this.quillEditor.on('editor-change', this.editorChangeHandler); // mark model as touched if editor lost focus

                        this.quillEditor.on('selection-change', this.selectionChangeHandler); // update model if text changes

                        this.quillEditor.on('text-change', this.textChangeHandler); // trigger created in a timeout to avoid changed models after checked
                        // if you are using the editor api in created output to change the editor content

                        setTimeout(function () {
                          if (_this4.onValidatorChanged) {
                            _this4.onValidatorChanged();
                          }

                          _this4.onEditorCreated.emit(_this4.quillEditor);
                        });

                      case 33:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this.quillEditor) {
                this.quillEditor.off('selection-change', this.selectionChangeHandler);
                this.quillEditor.off('text-change', this.textChangeHandler);
                this.quillEditor.off('editor-change', this.editorChangeHandler);
              }
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              var _this5 = this;

              if (!this.quillEditor) {
                return;
              } // tslint:disable:no-string-literal


              if (changes['readOnly']) {
                this.quillEditor.enable(!changes['readOnly'].currentValue);
              }

              if (changes['placeholder']) {
                this.quillEditor.root.dataset.placeholder = changes['placeholder'].currentValue;
              }

              if (changes['styles']) {
                var currentStyling = changes['styles'].currentValue;
                var previousStyling = changes['styles'].previousValue;

                if (previousStyling) {
                  Object.keys(previousStyling).forEach(function (key) {
                    _this5.renderer.removeStyle(_this5.editorElem, key);
                  });
                }

                if (currentStyling) {
                  Object.keys(currentStyling).forEach(function (key) {
                    _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
                  });
                }
              }

              if (changes['classes']) {
                var currentClasses = changes['classes'].currentValue;
                var previousClasses = changes['classes'].previousValue;

                if (previousClasses) {
                  this.removeClasses(previousClasses);
                }

                if (currentClasses) {
                  this.addClasses(currentClasses);
                }
              } // tslint:enable:no-string-literal

            }
          }, {
            key: "addClasses",
            value: function addClasses(classList) {
              var _this6 = this;

              QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
                _this6.renderer.addClass(_this6.editorElem, c);
              });
            }
          }, {
            key: "removeClasses",
            value: function removeClasses(classList) {
              var _this7 = this;

              QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
                _this7.renderer.removeClass(_this7.editorElem, c);
              });
            }
          }, {
            key: "writeValue",
            value: function writeValue(currentValue) {
              this.content = currentValue;
              var format = getFormat(this.format, this.service.config.format);

              if (this.quillEditor) {
                if (currentValue) {
                  if (format === 'text') {
                    this.quillEditor.setText(currentValue);
                  } else {
                    this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
                  }

                  return;
                }

                this.quillEditor.setText('');
              }
            }
          }, {
            key: "setDisabledState",
            value: function setDisabledState() {
              var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
              // store initial value to set appropriate disabled status after ViewInit
              this.disabled = isDisabled;

              if (this.quillEditor) {
                if (isDisabled) {
                  this.quillEditor.disable();
                  this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
                } else {
                  if (!this.readOnly) {
                    this.quillEditor.enable();
                  }

                  this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
                }
              }
            }
          }, {
            key: "registerOnChange",
            value: function registerOnChange(fn) {
              this.onModelChange = fn;
            }
          }, {
            key: "registerOnTouched",
            value: function registerOnTouched(fn) {
              this.onModelTouched = fn;
            }
          }, {
            key: "registerOnValidatorChange",
            value: function registerOnValidatorChange(fn) {
              this.onValidatorChanged = fn;
            }
          }, {
            key: "validate",
            value: function validate() {
              if (!this.quillEditor) {
                return null;
              }

              var err = {};
              var valid = true;
              var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

              var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;

              if (this.minLength && textLength && textLength < this.minLength) {
                err.minLengthError = {
                  given: textLength,
                  minLength: this.minLength
                };
                valid = false;
              }

              if (this.maxLength && textLength > this.maxLength) {
                err.maxLengthError = {
                  given: textLength,
                  maxLength: this.maxLength
                };
                valid = false;
              }

              if (this.required && !textLength) {
                err.requiredError = {
                  empty: true
                };
                valid = false;
              }

              return valid ? null : err;
            }
          }], [{
            key: "normalizeClassNames",
            value: function normalizeClassNames(classes) {
              var classList = classes.trim().split(' ');
              return classList.reduce(function (prev, cur) {
                var trimmed = cur.trim();

                if (trimmed) {
                  prev.push(trimmed);
                }

                return prev;
              }, []);
            }
          }]);

          return QuillEditorBase;
        }();

        QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
          return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
        };

        QuillEditorBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: QuillEditorBase,
          inputs: {
            required: "required",
            customToolbarPosition: "customToolbarPosition",
            sanitize: "sanitize",
            styles: "styles",
            strict: "strict",
            customOptions: "customOptions",
            customModules: "customModules",
            preserveWhitespace: "preserveWhitespace",
            trimOnValidation: "trimOnValidation",
            valueGetter: "valueGetter",
            valueSetter: "valueSetter",
            format: "format",
            theme: "theme",
            modules: "modules",
            debug: "debug",
            readOnly: "readOnly",
            placeholder: "placeholder",
            maxLength: "maxLength",
            minLength: "minLength",
            formats: "formats",
            scrollingContainer: "scrollingContainer",
            bounds: "bounds",
            trackChanges: "trackChanges",
            classes: "classes"
          },
          outputs: {
            onEditorCreated: "onEditorCreated",
            onEditorChanged: "onEditorChanged",
            onContentChanged: "onContentChanged",
            onSelectionChanged: "onSelectionChanged",
            onFocus: "onFocus",
            onBlur: "onBlur"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
        });
        return QuillEditorBase;
      }();

      var QuillEditorComponent = /*@__PURE__*/function () {
        var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
          _inherits(QuillEditorComponent, _QuillEditorBase);

          var _super = _createSuper(QuillEditorComponent);

          function QuillEditorComponent(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
            _classCallCheck(this, QuillEditorComponent);

            return _super.call(this, elementRef, domSanitizer, doc, platformId, renderer, zone, service);
          }

          return QuillEditorComponent;
        }(QuillEditorBase);

        QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
          return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
        };

        QuillEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: QuillEditorComponent,
          selectors: [["quill-editor"]],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return QuillEditorComponent;
            })
          }, {
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return QuillEditorComponent;
            })
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c1,
          decls: 1,
          vars: 0,
          template: function QuillEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
          },
          encapsulation: 2
        });
        return QuillEditorComponent;
      }();

      var QuillViewHTMLComponent = /*@__PURE__*/function () {
        var QuillViewHTMLComponent = /*#__PURE__*/function () {
          function QuillViewHTMLComponent(sanitizer, service) {
            _classCallCheck(this, QuillViewHTMLComponent);

            this.sanitizer = sanitizer;
            this.service = service;
            this.innerHTML = '';
            this.themeClass = 'ql-snow';
            this.content = '';
          }

          _createClass(QuillViewHTMLComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes.theme) {
                var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
                this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
              } else if (!this.theme) {
                var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

                this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
              }

              if (changes.content) {
                this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
              }
            }
          }]);

          return QuillViewHTMLComponent;
        }();

        QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
          return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
        };

        QuillViewHTMLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: QuillViewHTMLComponent,
          selectors: [["quill-view-html"]],
          inputs: {
            content: "content",
            theme: "theme"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          decls: 2,
          vars: 2,
          consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
          template: function QuillViewHTMLComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themeClass);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]],
          styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
          encapsulation: 2
        });
        return QuillViewHTMLComponent;
      }();

      var QuillViewComponent = /*@__PURE__*/function () {
        var QuillViewComponent = /*#__PURE__*/function () {
          function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
            var _this8 = this;

            _classCallCheck(this, QuillViewComponent);

            this.elementRef = elementRef;
            this.renderer = renderer;
            this.zone = zone;
            this.service = service;
            this.domSanitizer = domSanitizer;
            this.platformId = platformId;
            this.sanitize = false;
            this.strict = true;
            this.customModules = [];
            this.customOptions = [];
            this.preserveWhitespace = false;

            this.valueSetter = function (quillEditor, value) {
              var format = getFormat(_this8.format, _this8.service.config.format);
              var content = value;

              if (format === 'text') {
                quillEditor.setText(content);
              } else {
                if (format === 'html') {
                  if (_this8.sanitize) {
                    value = _this8.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
                  }

                  content = quillEditor.clipboard.convert(value);
                } else if (format === 'json') {
                  try {
                    content = JSON.parse(value);
                  } catch (e) {
                    content = [{
                      insert: value
                    }];
                  }
                }

                quillEditor.setContents(content);
              }
            };
          }

          _createClass(QuillViewComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (!this.quillEditor) {
                return;
              }

              if (changes.content) {
                this.valueSetter(this.quillEditor, changes.content.currentValue);
              }
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this9 = this;

                var Quill, modules, debug, formats, theme;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                          _context3.next = 2;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 2:
                        _context3.next = 4;
                        return this.service.getQuill();

                      case 4:
                        Quill = _context3.sent;
                        modules = Object.assign({}, this.modules || this.service.config.modules);
                        modules.toolbar = false;
                        this.customOptions.forEach(function (customOption) {
                          var newCustomOption = Quill["import"](customOption["import"]);
                          newCustomOption.whitelist = customOption.whitelist;
                          Quill.register(newCustomOption, true);
                        });
                        this.customModules.forEach(function (_ref3) {
                          var implementation = _ref3.implementation,
                              path = _ref3.path;
                          Quill.register(path, implementation);
                        });
                        debug = this.debug;

                        if (!debug && debug !== false && this.service.config.debug) {
                          debug = this.service.config.debug;
                        }

                        formats = this.formats;

                        if (!formats && formats === undefined) {
                          formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                        }

                        theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                        this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                        this.zone.runOutsideAngular(function () {
                          _this9.quillEditor = new Quill(_this9.editorElem, {
                            debug: debug,
                            formats: formats,
                            modules: modules,
                            readOnly: true,
                            strict: _this9.strict,
                            theme: theme
                          });
                        });
                        this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                        if (this.content) {
                          this.valueSetter(this.quillEditor, this.content);
                        }

                      case 19:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }]);

          return QuillViewComponent;
        }();

        QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
          return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
        };

        QuillViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: QuillViewComponent,
          selectors: [["quill-view"]],
          inputs: {
            sanitize: "sanitize",
            strict: "strict",
            customModules: "customModules",
            customOptions: "customOptions",
            preserveWhitespace: "preserveWhitespace",
            format: "format",
            theme: "theme",
            modules: "modules",
            debug: "debug",
            formats: "formats",
            content: "content"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          decls: 0,
          vars: 0,
          template: function QuillViewComponent_Template(rf, ctx) {},
          styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
          encapsulation: 2
        });
        return QuillViewComponent;
      }();

      var QuillModule = /*@__PURE__*/function () {
        var QuillModule = /*#__PURE__*/function () {
          function QuillModule() {
            _classCallCheck(this, QuillModule);
          }

          _createClass(QuillModule, null, [{
            key: "forRoot",
            value: function forRoot(config) {
              return {
                ngModule: QuillModule,
                providers: [{
                  provide: QUILL_CONFIG_TOKEN,
                  useValue: config
                }]
              };
            }
          }]);

          return QuillModule;
        }();

        QuillModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: QuillModule
        });
        QuillModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function QuillModule_Factory(t) {
            return new (t || QuillModule)();
          },
          providers: [QuillService],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
        });
        return QuillModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuillModule, {
          declarations: function declarations() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          }
        });
      })();
      /*
       * Public API Surface of ngx-quill
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-quill.js.map

      /***/

    },

    /***/
    "./node_modules/ngx-quill/ngx-quill.ngfactory.js":
    /*!*******************************************************!*\
      !*** ./node_modules/ngx-quill/ngx-quill.ngfactory.js ***!
      \*******************************************************/

    /*! exports provided: QuillModuleNgFactory, RenderType_QuillEditorComponent, View_QuillEditorComponent_0, View_QuillEditorComponent_Host_0, QuillEditorComponentNgFactory, RenderType_QuillViewComponent, View_QuillViewComponent_0, View_QuillViewComponent_Host_0, QuillViewComponentNgFactory, RenderType_QuillViewHTMLComponent, View_QuillViewHTMLComponent_0, View_QuillViewHTMLComponent_Host_0, QuillViewHTMLComponentNgFactory */

    /***/
    function node_modulesNgxQuillNgxQuillNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillModuleNgFactory", function () {
        return QuillModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_QuillEditorComponent", function () {
        return RenderType_QuillEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillEditorComponent_0", function () {
        return View_QuillEditorComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillEditorComponent_Host_0", function () {
        return View_QuillEditorComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorComponentNgFactory", function () {
        return QuillEditorComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_QuillViewComponent", function () {
        return RenderType_QuillViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewComponent_0", function () {
        return View_QuillViewComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewComponent_Host_0", function () {
        return View_QuillViewComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewComponentNgFactory", function () {
        return QuillViewComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_QuillViewHTMLComponent", function () {
        return RenderType_QuillViewHTMLComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewHTMLComponent_0", function () {
        return View_QuillViewHTMLComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewHTMLComponent_Host_0", function () {
        return View_QuillViewHTMLComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponentNgFactory", function () {
        return QuillViewHTMLComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var QuillModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"], [ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QUILL_CONFIG_TOKEN"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillModule"], [])]);
      });

      var styles_QuillEditorComponent = [];

      var RenderType_QuillEditorComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_QuillEditorComponent,
        data: {}
      });

      function View_QuillEditorComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
      }

      function View_QuillEditorComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "quill-editor", [], null, null, null, View_QuillEditorComponent_0, RenderType_QuillEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4898816, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"]], null, null)], null, null);
      }

      var QuillEditorComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("quill-editor", ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"], View_QuillEditorComponent_Host_0, {
        format: "format",
        theme: "theme",
        modules: "modules",
        debug: "debug",
        readOnly: "readOnly",
        placeholder: "placeholder",
        maxLength: "maxLength",
        minLength: "minLength",
        required: "required",
        formats: "formats",
        customToolbarPosition: "customToolbarPosition",
        sanitize: "sanitize",
        styles: "styles",
        strict: "strict",
        scrollingContainer: "scrollingContainer",
        bounds: "bounds",
        customOptions: "customOptions",
        customModules: "customModules",
        trackChanges: "trackChanges",
        preserveWhitespace: "preserveWhitespace",
        classes: "classes",
        trimOnValidation: "trimOnValidation",
        valueGetter: "valueGetter",
        valueSetter: "valueSetter"
      }, {
        onEditorCreated: "onEditorCreated",
        onEditorChanged: "onEditorChanged",
        onContentChanged: "onContentChanged",
        onSelectionChanged: "onSelectionChanged",
        onFocus: "onFocus",
        onBlur: "onBlur"
      }, ["[quill-editor-toolbar]"]);

      var styles_QuillViewComponent = ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"];

      var RenderType_QuillViewComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_QuillViewComponent,
        data: {}
      });

      function View_QuillViewComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null);
      }

      function View_QuillViewComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "quill-view", [], null, null, null, View_QuillViewComponent_0, RenderType_QuillViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4767744, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], null, null)], null, null);
      }

      var QuillViewComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("quill-view", ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewComponent"], View_QuillViewComponent_Host_0, {
        format: "format",
        theme: "theme",
        modules: "modules",
        debug: "debug",
        formats: "formats",
        sanitize: "sanitize",
        strict: "strict",
        content: "content",
        customModules: "customModules",
        customOptions: "customOptions",
        preserveWhitespace: "preserveWhitespace"
      }, {}, []);

      var styles_QuillViewHTMLComponent = ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"];

      var RenderType_QuillViewHTMLComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_QuillViewHTMLComponent,
        data: {}
      });

      function View_QuillViewHTMLComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ql-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "div", [["class", "ql-editor"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "ql-container";
          var currVal_1 = _co.themeClass;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.innerHTML;

          _ck(_v, 2, 0, currVal_2);
        });
      }

      function View_QuillViewHTMLComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "quill-view-html", [], null, null, null, View_QuillViewHTMLComponent_0, RenderType_QuillViewHTMLComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewHTMLComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"]], null, null)], null, null);
      }

      var QuillViewHTMLComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("quill-view-html", ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewHTMLComponent"], View_QuillViewHTMLComponent_Host_0, {
        content: "content",
        theme: "theme"
      }, {}, []);
      /***/

    },

    /***/
    "./src/app/_services/urls.ts":
    /*!***********************************!*\
      !*** ./src/app/_services/urls.ts ***!
      \***********************************/

    /*! exports provided: urls */

    /***/
    function srcApp_servicesUrlsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "urls", function () {
        return urls;
      });

      var urls = {
        getCms: 'cms/get-cms/',
        createCms: 'cms/create-update-cms/',
        createCmsFaq: 'cms/get-create-update-delete-faq/',
        getCmsFaq: 'cms/get-faq/',
        getAllNotification: 'admin/get-all-notifications/',
        createNotification: 'admin/create-notifications/',
        getUserList: 'admin/get-user-list/',
        addUser: 'admin/add-user/',
        uplaodMedia: 'upload/media/',
        getUserDetailsById: 'admin/get-user-details-by-id/',
        updateDetailsById: 'admin/update-user-details-by-id/',
        getAllUserWithPagination: 'admin/get-all-users-with-pagination/',
        changeUserStatusById: 'admin/change-user-status-by-id/',
        getAllUserWithoutPagination: 'admin/get-all-users-without-pagination/',
        deleteUserById: 'admin/delete-users-by-id/',
        getUserProfileByToken: 'user/get-user-profile-by-token/',
        updateUserProfileByToken: 'user/update-user-profile-by-token/',
        changePassword: 'user/change-password/',
        getTotalUserGraph: 'admin/get-total-users-graph/',
        getTotalEmergencyMessageGraph: 'admin/get-total-emergency-messages-graph/',
        getEmergencyProtocol: 'admin/get-emergency-protocol/',
        getEmergencyAction: 'admin/get-emergency-actions/',
        addEmergencyProtocol: 'admin/add-emergency-protocol/',
        updateEmergencyProtocol: 'admin/update-emergency-protocol/'
      };
      /***/
    },

    /***/
    "./src/app/pages/cms/about/about.component.css.shim.ngstyle.js":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/cms/about/about.component.css.shim.ngstyle.js ***!
      \*********************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppPagesCmsAboutAboutComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [""];
      /***/
    },

    /***/
    "./src/app/pages/cms/about/about.component.ngfactory.js":
    /*!**************************************************************!*\
      !*** ./src/app/pages/cms/about/about.component.ngfactory.js ***!
      \**************************************************************/

    /*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */

    /***/
    function srcAppPagesCmsAboutAboutComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function () {
        return RenderType_AboutComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function () {
        return View_AboutComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function () {
        return View_AboutComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function () {
        return AboutComponentNgFactory;
      });
      /* harmony import */


      var _about_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about.component.css.shim.ngstyle */
      "./src/app/pages/cms/about/about.component.css.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/ngx-quill/ngx-quill.ngfactory */
      "./node_modules/ngx-quill/ngx-quill.ngfactory.js");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about.component */
      "./src/app/pages/cms/about/about.component.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AboutComponent = [_about_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AboutComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AboutComponent,
        data: {}
      });

      function View_AboutComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About is Required !"]))], null, null);
      }

      function View_AboutComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "quill-editor", [["class", "w-100"]], [[8, "style", 2], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ngModelChange" === en) {
            var pd_0 = (_co.about = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("keyup" === en) {
            var pd_1 = _co.ValidationChk() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_QuillEditorComponent_0"], _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_QuillEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4898816, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, {
          height: 0,
          display: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "div", [["class", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["class", "btn btn-primary mt-3"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_8 = _co.about;

          _ck(_v, 8, 0, currVal_8);

          var currVal_9 = _co.aboutFlag && _co.about == null;

          _ck(_v, 13, 0, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = _ck(_v, 11, 0, "300px", "inline-block");

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        });
      }

      function View_AboutComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AboutComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about", _about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/pages/cms/about/about.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/cms/about/about.component.ts ***!
      \****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function srcAppPagesCmsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _services_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../_services/urls */
      "./src/app/_services/urls.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(http, toastr) {
          _classCallCheck(this, AboutComponent);

          this.http = http;
          this.toastr = toastr;
          this.aboutFlag = false;
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCms();
          }
        }, {
          key: "getCms",
          value: function getCms() {
            var _this10 = this;

            this.http.get(_services_urls__WEBPACK_IMPORTED_MODULE_0__["urls"].getCms).subscribe(function (res) {
              if (res.code == 200) {
                _this10.about = res.data.about;
              }
            });
          }
        }, {
          key: "ValidationChk",
          value: function ValidationChk() {
            if (this.about) {
              if (this.about.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
                this.about = null;
                this.aboutFlag = true;
              } else {
                this.aboutFlag = false;
              }
            }
          }
        }, {
          key: "update",
          value: function update() {
            var _this11 = this;

            var params = {
              'about': this.about
            };

            if (this.about) {
              this.http.post(_services_urls__WEBPACK_IMPORTED_MODULE_0__["urls"].createCms, params).subscribe(function (res) {
                if (res.code == 200) {
                  _this11.toastr.success(res.message, 'Success');

                  _this11.getCms();
                }
              });
            } else {
              this.aboutFlag = true;
            }
          }
        }]);

        return AboutComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/cms/cms-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/cms/cms-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: CmsRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */

    /***/
    function srcAppPagesCmsCmsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CmsRoutingModule", function () {
        return CmsRoutingModule;
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
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
        return ɵ4;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about/about.component */
      "./src/app/pages/cms/about/about.component.ts");
      /* harmony import */


      var _cms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cms.component */
      "./src/app/pages/cms/cms.component.ts");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact/contact.component */
      "./src/app/pages/cms/contact/contact.component.ts");
      /* harmony import */


      var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./faq/faq.component */
      "./src/app/pages/cms/faq/faq.component.ts");
      /* harmony import */


      var _legal_legal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./legal/legal.component */
      "./src/app/pages/cms/legal/legal.component.ts");
      /* harmony import */


      var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy/privacy.component */
      "./src/app/pages/cms/privacy/privacy.component.ts");

      var ɵ0 = {
        title: "About"
      },
          ɵ1 = {
        title: "Terms and Condition"
      },
          ɵ2 = {
        title: "Privacy"
      },
          ɵ3 = {
        title: "Contact"
      },
          ɵ4 = {
        title: "Faq"
      };
      var routes = [{
        path: "",
        component: _cms_component__WEBPACK_IMPORTED_MODULE_2__["CmsComponent"],
        children: [{
          path: "about",
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"],
          data: ɵ0
        }, {
          path: "legal",
          component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_5__["LegalComponent"],
          data: ɵ1
        }, {
          path: "privacy",
          component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyComponent"],
          data: ɵ2
        }, {
          path: "contact",
          component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
          data: ɵ3
        }, {
          path: "faq",
          component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"],
          data: ɵ4
        }]
      }];

      var CmsRoutingModule = function CmsRoutingModule() {
        _classCallCheck(this, CmsRoutingModule);
      };
      /***/

    },

    /***/
    "./src/app/pages/cms/cms.component.css.shim.ngstyle.js":
    /*!*************************************************************!*\
      !*** ./src/app/pages/cms/cms.component.css.shim.ngstyle.js ***!
      \*************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppPagesCmsCmsComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [""];
      /***/
    },

    /***/
    "./src/app/pages/cms/cms.component.ngfactory.js":
    /*!******************************************************!*\
      !*** ./src/app/pages/cms/cms.component.ngfactory.js ***!
      \******************************************************/

    /*! exports provided: RenderType_CmsComponent, View_CmsComponent_0, View_CmsComponent_Host_0, CmsComponentNgFactory */

    /***/
    function srcAppPagesCmsCmsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CmsComponent", function () {
        return RenderType_CmsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CmsComponent_0", function () {
        return View_CmsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CmsComponent_Host_0", function () {
        return View_CmsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CmsComponentNgFactory", function () {
        return CmsComponentNgFactory;
      });
      /* harmony import */


      var _cms_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cms.component.css.shim.ngstyle */
      "./src/app/pages/cms/cms.component.css.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/tabs/index.ngfactory */
      "./node_modules/@angular/material/tabs/index.ngfactory.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/fesm2015/tabs.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about/about.component.ngfactory */
      "./src/app/pages/cms/about/about.component.ngfactory.js");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about/about.component */
      "./src/app/pages/cms/about/about.component.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _privacy_privacy_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./privacy/privacy.component.ngfactory */
      "./src/app/pages/cms/privacy/privacy.component.ngfactory.js");
      /* harmony import */


      var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./privacy/privacy.component */
      "./src/app/pages/cms/privacy/privacy.component.ts");
      /* harmony import */


      var _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contact/contact.component.ngfactory */
      "./src/app/pages/cms/contact/contact.component.ngfactory.js");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./contact/contact.component */
      "./src/app/pages/cms/contact/contact.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _legal_legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./legal/legal.component.ngfactory */
      "./src/app/pages/cms/legal/legal.component.ngfactory.js");
      /* harmony import */


      var _legal_legal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./legal/legal.component */
      "./src/app/pages/cms/legal/legal.component.ts");
      /* harmony import */


      var _faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./faq/faq.component.ngfactory */
      "./src/app/pages/cms/faq/faq.component.ngfactory.js");
      /* harmony import */


      var _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./faq/faq.component */
      "./src/app/pages/cms/faq/faq.component.ts");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
      /* harmony import */


      var _cms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./cms.component */
      "./src/app/pages/cms/cms.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CmsComponent = [_cms_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CmsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CmsComponent,
        data: {}
      });

      function View_CmsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "mat-tab-group", [["class", "mat-tab-group"], ["mat-align-tabs", "start"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _allTabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 5, "mat-tab", [["label", "About"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "app-about", [], null, null, null, _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_AboutComponent_0"], _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_AboutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 16777216, null, null, 5, "mat-tab", [["label", "Privacy"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "app-privacy", [], null, null, null, _privacy_privacy_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_PrivacyComponent_0"], _privacy_privacy_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_PrivacyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 16777216, null, null, 5, "mat-tab", [["label", "Contact"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "app-contact", [], null, null, null, _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ContactComponent_0"], _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ContactComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 16777216, null, null, 5, "mat-tab", [["label", "Legal"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 0, 1, "app-legal", [], null, null, null, _legal_legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_LegalComponent_0"], _legal_legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_LegalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, null, 0, _legal_legal_component__WEBPACK_IMPORTED_MODULE_16__["LegalComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 16777216, null, null, 5, "mat-tab", [["label", "FAQ"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 1, "app-faq", [], null, null, null, _faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_FaqComponent_0"], _faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_FaqComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 114688, null, 0, _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__["FaqComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
          var currVal_2 = "About";

          _ck(_v, 5, 0, currVal_2);

          _ck(_v, 9, 0);

          var currVal_3 = "Privacy";

          _ck(_v, 11, 0, currVal_3);

          _ck(_v, 15, 0);

          var currVal_4 = "Contact";

          _ck(_v, 17, 0, currVal_4);

          _ck(_v, 21, 0);

          var currVal_5 = "Legal";

          _ck(_v, 23, 0, currVal_5);

          _ck(_v, 27, 0);

          var currVal_6 = "FAQ";

          _ck(_v, 29, 0, currVal_6);

          _ck(_v, 33, 0);

          _ck(_v, 35, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dynamicHeight;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).headerPosition === "below";

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_CmsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-cms", [], null, null, null, View_CmsComponent_0, RenderType_CmsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _cms_component__WEBPACK_IMPORTED_MODULE_20__["CmsComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CmsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-cms", _cms_component__WEBPACK_IMPORTED_MODULE_20__["CmsComponent"], View_CmsComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/pages/cms/cms.component.ts":
    /*!********************************************!*\
      !*** ./src/app/pages/cms/cms.component.ts ***!
      \********************************************/

    /*! exports provided: CmsComponent */

    /***/
    function srcAppPagesCmsCmsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CmsComponent", function () {
        return CmsComponent;
      });

      var CmsComponent = /*#__PURE__*/function () {
        function CmsComponent() {
          _classCallCheck(this, CmsComponent);
        }

        _createClass(CmsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CmsComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/cms/cms.module.ngfactory.js":
    /*!***************************************************!*\
      !*** ./src/app/pages/cms/cms.module.ngfactory.js ***!
      \***************************************************/

    /*! exports provided: CmsModuleNgFactory */

    /***/
    function srcAppPagesCmsCmsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CmsModuleNgFactory", function () {
        return CmsModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _cms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cms.module */
      "./src/app/pages/cms/cms.module.ts");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _cms_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cms.component.ngfactory */
      "./src/app/pages/cms/cms.component.ngfactory.js");
      /* harmony import */


      var _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./about/about.component.ngfactory */
      "./src/app/pages/cms/about/about.component.ngfactory.js");
      /* harmony import */


      var _legal_legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./legal/legal.component.ngfactory */
      "./src/app/pages/cms/legal/legal.component.ngfactory.js");
      /* harmony import */


      var _privacy_privacy_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy/privacy.component.ngfactory */
      "./src/app/pages/cms/privacy/privacy.component.ngfactory.js");
      /* harmony import */


      var _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact/contact.component.ngfactory */
      "./src/app/pages/cms/contact/contact.component.ngfactory.js");
      /* harmony import */


      var _faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./faq/faq.component.ngfactory */
      "./src/app/pages/cms/faq/faq.component.ngfactory.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "./node_modules/@angular/cdk/fesm2015/observers.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/fesm2015/agm-core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cms-routing.module */
      "./src/app/pages/cms/cms-routing.module.ts");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/fesm2015/portal.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/fesm2015/text-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var ngx_google_places_autocomplete_ngx_google_places_autocomplete_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.module */
      "./node_modules/ngx-google-places-autocomplete/ngx-google-places-autocomplete.module.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
      /* harmony import */


      var _cms_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./cms.component */
      "./src/app/pages/cms/cms.component.ts");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./about/about.component */
      "./src/app/pages/cms/about/about.component.ts");
      /* harmony import */


      var _legal_legal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./legal/legal.component */
      "./src/app/pages/cms/legal/legal.component.ts");
      /* harmony import */


      var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./privacy/privacy.component */
      "./src/app/pages/cms/privacy/privacy.component.ts");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./contact/contact.component */
      "./src/app/pages/cms/contact/contact.component.ts");
      /* harmony import */


      var _faq_faq_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./faq/faq.component */
      "./src/app/pages/cms/faq/faq.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var CmsModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_cms_module__WEBPACK_IMPORTED_MODULE_1__["CmsModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _cms_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CmsComponentNgFactory"], _about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AboutComponentNgFactory"], _legal_legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["LegalComponentNgFactory"], _privacy_privacy_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["PrivacyComponentNgFactory"], _contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ContactComponentNgFactory"], _faq_faq_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["FaqComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillService"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillService"], [ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QUILL_CONFIG_TOKEN"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_14__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_14__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_14__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__["CmsRoutingModule"], _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__["CmsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_google_places_autocomplete_ngx_google_places_autocomplete_module__WEBPACK_IMPORTED_MODULE_25__["GooglePlaceModule"], ngx_google_places_autocomplete_ngx_google_places_autocomplete_module__WEBPACK_IMPORTED_MODULE_25__["GooglePlaceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cms_module__WEBPACK_IMPORTED_MODULE_1__["CmsModule"], _cms_module__WEBPACK_IMPORTED_MODULE_1__["CmsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
          return [[{
            path: "",
            component: _cms_component__WEBPACK_IMPORTED_MODULE_27__["CmsComponent"],
            children: [{
              path: "about",
              component: _about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"],
              data: _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ0"]
            }, {
              path: "legal",
              component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_29__["LegalComponent"],
              data: _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ1"]
            }, {
              path: "privacy",
              component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_30__["PrivacyComponent"],
              data: _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ2"]
            }, {
              path: "contact",
              component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_31__["ContactComponent"],
              data: _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ3"]
            }, {
              path: "faq",
              component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_32__["FaqComponent"],
              data: _cms_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ4"]
            }]
          }]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QUILL_CONFIG_TOKEN"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_14__["LAZY_MAPS_API_CONFIG"], {
          apiKey: "AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0",
          libraries: ["places", "drawing", "geometry"]
        }, [])]);
      });
      /***/

    },

    /***/
    "./src/app/pages/cms/cms.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/cms/cms.module.ts ***!
      \*****************************************/

    /*! exports provided: CmsModule */

    /***/
    function srcAppPagesCmsCmsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CmsModule", function () {
        return CmsModule;
      });

      var CmsModule = function CmsModule() {
        _classCallCheck(this, CmsModule);
      };
      /***/

    },

    /***/
    "./src/app/pages/cms/contact/contact.component.css.shim.ngstyle.js":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/cms/contact/contact.component.css.shim.ngstyle.js ***!
      \*************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppPagesCmsContactContactComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [""];
      /***/
    },

    /***/
    "./src/app/pages/cms/contact/contact.component.ngfactory.js":
    /*!******************************************************************!*\
      !*** ./src/app/pages/cms/contact/contact.component.ngfactory.js ***!
      \******************************************************************/

    /*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */

    /***/
    function srcAppPagesCmsContactContactComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function () {
        return RenderType_ContactComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function () {
        return View_ContactComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function () {
        return View_ContactComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function () {
        return ContactComponentNgFactory;
      });
      /* harmony import */


      var _contact_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact.component.css.shim.ngstyle */
      "./src/app/pages/cms/contact/contact.component.css.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive */
      "./node_modules/ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive.js");
      /* harmony import */


      var _contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact.component */
      "./src/app/pages/cms/contact/contact.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ContactComponent = [_contact_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ContactComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ContactComponent,
        data: {}
      });

      function View_ContactComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "mat-error", [["class", "text-danger d-inline-block pt-1 mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_ERROR"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" *Please enter valid email "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ContactComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" *Email is required! "]))], null, null);
      }

      function View_ContactComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "mat-error", [["class", "text-danger d-inline-block pt-1 mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_ERROR"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" *Please enter valid Contact No "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ContactComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" *Contact No. is required! "]))], null, null);
      }

      function View_ContactComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "mat-error", [["class", "text-danger d-inline-block pt-1 mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_ERROR"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" *Please enter valid address "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ContactComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" *Address is required! "]))], null, null);
      }

      function View_ContactComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 55, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 54, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 53, "div", [["class", "card card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 52, "form", [["class", "form-horizontal m-t-30"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 45, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 44, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "label", [["for", "example-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, [["email", 1]], null, 5, "input", [["class", "form-control"], ["formControlName", "email"], ["id", "example-email"], ["name", "example-email"], ["placeholder", "Email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown.space"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("keydown.space" === en) {
            var pd_4 = _co.doSomething($event, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).value) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "label", [["for", "example-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "contact"], ["id", "contact"], ["name", "example-email"], ["placeholder", "Contact No"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keypress"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("keypress" === en) {
            var pd_4 = _co.phoneNoInput($event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 13, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, [["address", 1]], null, 6, "input", [["class", "form-control"], ["formControlName", "address"], ["ngx-google-places-autocomplete", ""], ["rows", "5"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown.space"], [null, "onAddressChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("keydown.space" === en) {
            var pd_4 = _co.doSomething($event, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).value) !== false;
            ad = pd_4 && ad;
          }

          if ("onAddressChange" === en) {
            var pd_5 = _co.AddressChange($event) !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 4210688, null, 0, ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, {
          onAddressChange: "onAddressChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_14 = _co.contactForm;

          _ck(_v, 11, 0, currVal_14);

          var currVal_22 = "email";

          _ck(_v, 20, 0, currVal_22);

          var currVal_23 = _co.contactForm.controls["email"].touched && _co.contactForm.controls["email"].invalid;

          _ck(_v, 24, 0, currVal_23);

          var currVal_24 = _co.submitted && _co.errorHandling("email", "required");

          _ck(_v, 26, 0, currVal_24);

          var currVal_32 = "contact";

          _ck(_v, 33, 0, currVal_32);

          var currVal_33 = _co.contactForm.controls["contact"].touched && _co.contactForm.controls["contact"].invalid;

          _ck(_v, 37, 0, currVal_33);

          var currVal_34 = _co.submitted && _co.errorHandling("contact", "required");

          _ck(_v, 39, 0, currVal_34);

          var currVal_42 = "address";

          _ck(_v, 46, 0, currVal_42);

          var currVal_43 = _co.contactForm.controls["address"].touched && _co.contactForm.controls["address"].invalid;

          _ck(_v, 51, 0, currVal_43);

          var currVal_44 = _co.submitted && _co.errorHandling("address", "required");

          _ck(_v, 53, 0, currVal_44);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending;

          _ck(_v, 9, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending;

          _ck(_v, 17, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending;

          _ck(_v, 30, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31);

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassUntouched;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassTouched;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPristine;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassDirty;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassValid;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassInvalid;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPending;

          _ck(_v, 43, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41);
        });
      }

      function View_ContactComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ContactComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact", _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/pages/cms/contact/contact.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/cms/contact/contact.component.ts ***!
      \********************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function srcAppPagesCmsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "./node_modules/sweetalert2/dist/sweetalert2.all.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _services_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_services/urls */
      "./src/app/_services/urls.ts");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(route, _route, http, formBuilder, toastr) {
          var _this12 = this;

          _classCallCheck(this, ContactComponent);

          this.route = route;
          this._route = _route;
          this.http = http;
          this.formBuilder = formBuilder;
          this.toastr = toastr;
          this.submitted = false;

          this.errorHandling = function (control, error) {
            return _this12.contactForm.controls[control].hasError(error);
          };

          this.contactForm = formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            contact: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14)]],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(550)]]
          });
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          } //Location Dropdown

        }, {
          key: "AddressChange",
          value: function AddressChange(address) {
            this.contactForm.get('address').patchValue(address.formatted_address);
            this.address = address.formatted_address;
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this13 = this;

            this.http.get(_services_urls__WEBPACK_IMPORTED_MODULE_5__["urls"].getCms).subscribe(function (res) {
              if (res.code == 200) {
                _this13.email = res.data.email;
                _this13.contact = res.data.contact;
                _this13.address = res.data.address;

                _this13.contactForm.controls["contact"].setValue(_this13.contact);

                _this13.contactForm.controls["email"].setValue(_this13.email);

                _this13.contactForm.controls["address"].setValue(_this13.address);
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this14 = this;

            this.submitted = true;

            if (this.contactForm.valid) {
              var body = {
                email: this.contactForm.controls["email"].value,
                contact: this.contactForm.controls["contact"].value,
                address: this.address
              };

              if (!this.address) {
                body.address = this.contactForm.controls["address"].value;
              }

              console.log(body); // return

              this.http.post(_services_urls__WEBPACK_IMPORTED_MODULE_5__["urls"].createCms, body).subscribe(function (res) {
                if (res.code == 200) {
                  _this14.submitted = false;

                  _this14.toastr.success("Details updated successfully"); // this.toastr.success(res.message,'Success');


                  _this14.getData(); // this.Srvc.searchdata();

                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Oops", res.message, "error");
                }
              });
            }
          }
        }, {
          key: "phoneNoInput",
          value: function phoneNoInput(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode >= 48 && charCode <= 57 || charCode == 43) {
              return true;
            }

            return false;
          }
        }, {
          key: "doSomething",
          value: function doSomething(e, ref) {
            if (!ref.length) {
              e.preventDefault();
            }
          }
        }]);

        return ContactComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/cms/faq/faq.component.css.shim.ngstyle.js":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cms/faq/faq.component.css.shim.ngstyle.js ***!
      \*****************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppPagesCmsFaqFaqComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".ssb[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 36px;\r\n    font-size: 13px;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n    color: red;\r\n}"];
      /***/
    },

    /***/
    "./src/app/pages/cms/faq/faq.component.ngfactory.js":
    /*!**********************************************************!*\
      !*** ./src/app/pages/cms/faq/faq.component.ngfactory.js ***!
      \**********************************************************/

    /*! exports provided: RenderType_FaqComponent, View_FaqComponent_0, View_FaqComponent_Host_0, FaqComponentNgFactory */

    /***/
    function srcAppPagesCmsFaqFaqComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FaqComponent", function () {
        return RenderType_FaqComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaqComponent_0", function () {
        return View_FaqComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaqComponent_Host_0", function () {
        return View_FaqComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqComponentNgFactory", function () {
        return FaqComponentNgFactory;
      });
      /* harmony import */


      var _faq_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./faq.component.css.shim.ngstyle */
      "./src/app/pages/cms/faq/faq.component.css.shim.ngstyle.js");
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


      var _faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./faq.component */
      "./src/app/pages/cms/faq/faq.component.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_FaqComponent = [_faq_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_FaqComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FaqComponent,
        data: {}
      });

      function View_FaqComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter question! "]))], null, null);
      }

      function View_FaqComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter answer! "]))], null, null);
      }

      function View_FaqComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "tr", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "td", [["style", "width: 40%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "row col-12 form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Question:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "question"], ["min", "0"], ["placeholder", "Enter question"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 11, "td", [["style", "width: 40%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 10, "div", [["class", "row col-12 form-group "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Answer:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "answer"], ["min", "0"], ["placeholder", "Enter answer"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "td", [["style", " vertical-align: middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.removeSpecification(_v.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Remove "]))], function (_ck, _v) {
          var currVal_7 = _v.context.index;

          _ck(_v, 1, 0, currVal_7);

          var currVal_15 = "question";

          _ck(_v, 11, 0, currVal_15);

          var currVal_16 = _v.context.$implicit.get("question").hasError("required") && _v.context.$implicit.get("question").touched;

          _ck(_v, 15, 0, currVal_16);

          var currVal_24 = "answer";

          _ck(_v, 23, 0, currVal_24);

          var currVal_25 = _v.context.$implicit.get("answer").hasError("required") && _v.context.$implicit.get("answer").touched;

          _ck(_v, 27, 0, currVal_25);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPending;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending;

          _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending;

          _ck(_v, 20, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);
        });
      }

      function View_FaqComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 11, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "table", [["class", "table table-bordered"], ["formArrayName", "specification"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaqComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.saveFaq() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xA0\xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-info"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.addNewSpecification() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, [" ", " "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.Faqcheck;

          _ck(_v, 3, 0, currVal_7);

          var currVal_15 = "specification";

          _ck(_v, 9, 0, currVal_15);

          var currVal_16 = _co.specification().controls;

          _ck(_v, 13, 0, currVal_16);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending;

          _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_17 = _co.IdData ? "Add More" : "Add faq's";

          _ck(_v, 18, 0, currVal_17);
        });
      }

      function View_FaqComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-faq", [], null, null, null, View_FaqComponent_0, RenderType_FaqComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var FaqComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-faq", _faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"], View_FaqComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/pages/cms/faq/faq.component.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/cms/faq/faq.component.ts ***!
      \************************************************/

    /*! exports provided: FaqComponent */

    /***/
    function srcAppPagesCmsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
        return FaqComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var _services_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_services/urls */
      "./src/app/_services/urls.ts");

      var FaqComponent = /*#__PURE__*/function () {
        function FaqComponent(Srvc, formBuilder, noti, spinner) {
          _classCallCheck(this, FaqComponent);

          this.Srvc = Srvc;
          this.formBuilder = formBuilder;
          this.noti = noti;
          this.spinner = spinner;
          this.Faqcheck = this.formBuilder.group({
            specification: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
          });
        }

        _createClass(FaqComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetFaq();
          }
        }, {
          key: "GetFaq",
          value: function GetFaq() {
            var _this15 = this;

            this.Srvc.get(_services_urls__WEBPACK_IMPORTED_MODULE_4__["urls"].getCmsFaq).subscribe(function (res) {
              if ([200, 201].includes(res.code)) {
                _this15.setSpecifications(res.data);

                _this15.IdData = res === null || res === void 0 ? void 0 : res.data;
              }
            });
          }
        }, {
          key: "addNewSpecification",
          value: function addNewSpecification() {
            this.specification().push(this.newSpecifiaction());
          }
        }, {
          key: "removeSpecification",
          value: function removeSpecification(i) {
            this.specification().removeAt(i);
          }
        }, {
          key: "newSpecifiaction",
          value: function newSpecifiaction() {
            return this.formBuilder.group({
              question: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
            });
          }
        }, {
          key: "specification",
          value: function specification() {
            return this.Faqcheck.get('specification');
          }
        }, {
          key: "saveFaq",
          value: function saveFaq() {
            var _this16 = this;

            this.noti.clear();
            this.spinner.show();
            this.Faqcheck.controls['specification'].value.forEach(function (v) {
              return v.id == "" ? delete v.id : '';
            });

            if (this.Faqcheck.valid && this.Faqcheck.controls['specification'].value.length > 0) {
              this.Srvc.post(_services_urls__WEBPACK_IMPORTED_MODULE_4__["urls"].createCmsFaq, this.Faqcheck.get('specification').value).subscribe(function (res) {
                if (res.code == 200) {
                  _this16.noti.success("Faq's updated successfully", 'Success');

                  setTimeout(function () {
                    _this16.spinner.hide();
                  }, 1000);
                }
              });
            } else {
              this.Faqcheck.markAllAsTouched();
            }
          }
        }, {
          key: "setSpecifications",
          value: function setSpecifications(item) {
            var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);

            var _iterator = _createForOfIteratorHelper(item),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var x = _step.value;
                console.log(x);
                formArray.push(this.formBuilder.group({
                  question: [x.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                  answer: [x.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                  id: x.id
                }));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.Faqcheck.setControl('specification', formArray);
          }
        }]);

        return FaqComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/cms/legal/legal.component.css.shim.ngstyle.js":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/cms/legal/legal.component.css.shim.ngstyle.js ***!
      \*********************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppPagesCmsLegalLegalComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [""];
      /***/
    },

    /***/
    "./src/app/pages/cms/legal/legal.component.ngfactory.js":
    /*!**************************************************************!*\
      !*** ./src/app/pages/cms/legal/legal.component.ngfactory.js ***!
      \**************************************************************/

    /*! exports provided: RenderType_LegalComponent, View_LegalComponent_0, View_LegalComponent_Host_0, LegalComponentNgFactory */

    /***/
    function srcAppPagesCmsLegalLegalComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_LegalComponent", function () {
        return RenderType_LegalComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_LegalComponent_0", function () {
        return View_LegalComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_LegalComponent_Host_0", function () {
        return View_LegalComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegalComponentNgFactory", function () {
        return LegalComponentNgFactory;
      });
      /* harmony import */


      var _legal_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./legal.component.css.shim.ngstyle */
      "./src/app/pages/cms/legal/legal.component.css.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/ngx-quill/ngx-quill.ngfactory */
      "./node_modules/ngx-quill/ngx-quill.ngfactory.js");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _legal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./legal.component */
      "./src/app/pages/cms/legal/legal.component.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_LegalComponent = [_legal_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_LegalComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_LegalComponent,
        data: {}
      });

      function View_LegalComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Legal is Required!"]))], null, null);
      }

      function View_LegalComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "quill-editor", [["class", "w-100"]], [[8, "style", 2], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ngModelChange" === en) {
            var pd_0 = (_co.legal = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("keyup" === en) {
            var pd_1 = _co.ValidationChk() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_QuillEditorComponent_0"], _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_QuillEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4898816, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, {
          height: 0,
          display: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LegalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "div", [["class", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["class", "btn btn-primary mt-3"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_8 = _co.legal;

          _ck(_v, 8, 0, currVal_8);

          var currVal_9 = _co.legalFlag;

          _ck(_v, 13, 0, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = _ck(_v, 11, 0, "300px", "inline-block");

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        });
      }

      function View_LegalComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-legal", [], null, null, null, View_LegalComponent_0, RenderType_LegalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _legal_component__WEBPACK_IMPORTED_MODULE_7__["LegalComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var LegalComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-legal", _legal_component__WEBPACK_IMPORTED_MODULE_7__["LegalComponent"], View_LegalComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/pages/cms/legal/legal.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/cms/legal/legal.component.ts ***!
      \****************************************************/

    /*! exports provided: LegalComponent */

    /***/
    function srcAppPagesCmsLegalLegalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegalComponent", function () {
        return LegalComponent;
      });
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var _services_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_services/urls */
      "./src/app/_services/urls.ts");

      var LegalComponent = /*#__PURE__*/function () {
        function LegalComponent(http, toastr) {
          _classCallCheck(this, LegalComponent);

          this.http = http;
          this.toastr = toastr;
          this.legalFlag = false;
        }

        _createClass(LegalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCms();
          }
        }, {
          key: "getCms",
          value: function getCms() {
            var _this17 = this;

            this.http.get(_services_urls__WEBPACK_IMPORTED_MODULE_2__["urls"].getCms).subscribe(function (res) {
              if (res.code == 200) {
                _this17.legal = res.data.legal;
              }
            });
          }
        }, {
          key: "ValidationChk",
          value: function ValidationChk() {
            if (this.legal) {
              if (this.legal.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
                this.legal = null;
                this.legalFlag = true;
              } else {
                this.legalFlag = false;
              }
            }
          }
        }, {
          key: "update",
          value: function update() {
            var _this18 = this;

            var params = {
              'legal': this.legal
            };

            if (this.legal) {
              this.http.post(_services_urls__WEBPACK_IMPORTED_MODULE_2__["urls"].createCms, params).subscribe(function (res) {
                if (res.code == 200) {
                  _this18.toastr.success(res.message, 'Success');

                  _this18.getCms();
                }
              });
            } else {
              this.legalFlag = true;
            }
          }
        }]);

        return LegalComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/cms/privacy/privacy.component.css.shim.ngstyle.js":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/cms/privacy/privacy.component.css.shim.ngstyle.js ***!
      \*************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppPagesCmsPrivacyPrivacyComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [""];
      /***/
    },

    /***/
    "./src/app/pages/cms/privacy/privacy.component.ngfactory.js":
    /*!******************************************************************!*\
      !*** ./src/app/pages/cms/privacy/privacy.component.ngfactory.js ***!
      \******************************************************************/

    /*! exports provided: RenderType_PrivacyComponent, View_PrivacyComponent_0, View_PrivacyComponent_Host_0, PrivacyComponentNgFactory */

    /***/
    function srcAppPagesCmsPrivacyPrivacyComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrivacyComponent", function () {
        return RenderType_PrivacyComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrivacyComponent_0", function () {
        return View_PrivacyComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrivacyComponent_Host_0", function () {
        return View_PrivacyComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyComponentNgFactory", function () {
        return PrivacyComponentNgFactory;
      });
      /* harmony import */


      var _privacy_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./privacy.component.css.shim.ngstyle */
      "./src/app/pages/cms/privacy/privacy.component.css.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/ngx-quill/ngx-quill.ngfactory */
      "./node_modules/ngx-quill/ngx-quill.ngfactory.js");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./privacy.component */
      "./src/app/pages/cms/privacy/privacy.component.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrivacyComponent = [_privacy_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrivacyComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrivacyComponent,
        data: {}
      });

      function View_PrivacyComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Privacy is Required!"]))], null, null);
      }

      function View_PrivacyComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "quill-editor", [["class", "w-100"]], [[8, "style", 2], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ngModelChange" === en) {
            var pd_0 = (_co.privacy = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("keyup" === en) {
            var pd_1 = _co.ValidationChk() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_QuillEditorComponent_0"], _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_QuillEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4898816, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, {
          height: 0,
          display: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrivacyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "div", [["class", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["class", "btn btn-primary mt-3"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_8 = _co.privacy;

          _ck(_v, 8, 0, currVal_8);

          var currVal_9 = _co.privacyFlag;

          _ck(_v, 13, 0, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = _ck(_v, 11, 0, "300px", "inline-block");

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        });
      }

      function View_PrivacyComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-privacy", [], null, null, null, View_PrivacyComponent_0, RenderType_PrivacyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"], [_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PrivacyComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-privacy", _privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"], View_PrivacyComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/pages/cms/privacy/privacy.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/cms/privacy/privacy.component.ts ***!
      \********************************************************/

    /*! exports provided: PrivacyComponent */

    /***/
    function srcAppPagesCmsPrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
        return PrivacyComponent;
      });
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var _services_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../_services/urls */
      "./src/app/_services/urls.ts");

      var PrivacyComponent = /*#__PURE__*/function () {
        function PrivacyComponent(http, toastr) {
          _classCallCheck(this, PrivacyComponent);

          this.http = http;
          this.toastr = toastr;
          this.privacyFlag = false;
        }

        _createClass(PrivacyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCms();
          }
        }, {
          key: "getCms",
          value: function getCms() {
            var _this19 = this;

            this.http.get(_services_urls__WEBPACK_IMPORTED_MODULE_2__["urls"].getCms).subscribe(function (res) {
              if (res.code == 200) {
                _this19.privacy = res.data.privacy;
              }
            });
          }
        }, {
          key: "ValidationChk",
          value: function ValidationChk() {
            if (this.privacy) {
              if (this.privacy.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
                this.privacy = null;
                this.privacyFlag = true;
              } else {
                this.privacyFlag = false;
              }
            }
          }
        }, {
          key: "update",
          value: function update() {
            var _this20 = this;

            var params = {
              'privacy': this.privacy
            };

            if (this.privacy) {
              this.http.post(_services_urls__WEBPACK_IMPORTED_MODULE_2__["urls"].createCms, params).subscribe(function (res) {
                if (res.code == 200) {
                  _this20.toastr.success(res.message, 'Success');

                  _this20.getCms();
                }
              });
            } else {
              this.privacyFlag = true;
            }
          }
        }]);

        return PrivacyComponent;
      }();
      /***/

    }
  }]);
})();