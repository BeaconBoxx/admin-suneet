(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-forms-module-ngfactory"],{

/***/ "./src/app/form/forms.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/form/forms.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: FormModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModuleNgFactory", function() { return FormModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.module */ "./src/app/form/forms.module.ts");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _ngx_wizard_ngx_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-wizard/ngx-wizard.component.ngfactory */ "./src/app/form/ngx-wizard/ngx-wizard.component.ngfactory.js");
/* harmony import */ var _ngx_wizard_personal_personal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-wizard/personal/personal.component.ngfactory */ "./src/app/form/ngx-wizard/personal/personal.component.ngfactory.js");
/* harmony import */ var _ngx_wizard_work_work_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-wizard/work/work.component.ngfactory */ "./src/app/form/ngx-wizard/work/work.component.ngfactory.js");
/* harmony import */ var _ngx_wizard_address_address_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngx-wizard/address/address.component.ngfactory */ "./src/app/form/ngx-wizard/address/address.component.ngfactory.js");
/* harmony import */ var _ngx_wizard_result_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngx-wizard/result/result.component.ngfactory */ "./src/app/form/ngx-wizard/result/result.component.ngfactory.js");
/* harmony import */ var _form_basic_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-basic/basic.component.ngfactory */ "./src/app/form/form-basic/basic.component.ngfactory.js");
/* harmony import */ var _form_validation_form_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-validation/form-validation.component.ngfactory */ "./src/app/form/form-validation/form-validation.component.ngfactory.js");
/* harmony import */ var _multiselect_multiselect_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./multiselect/multiselect.component.ngfactory */ "./src/app/form/multiselect/multiselect.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_wizard_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ngx-wizard/workflow/workflow.service */ "./src/app/form/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _ngx_wizard_data_formData_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ngx-wizard/data/formData.service */ "./src/app/form/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ngx-wizard/ngx-wizard-routing.module */ "./src/app/form/ngx-wizard/ngx-wizard-routing.module.ts");
/* harmony import */ var _ngx_wizard_ngx_wizard_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ngx-wizard/ngx-wizard.module */ "./src/app/form/ngx-wizard/ngx-wizard.module.ts");
/* harmony import */ var _ngx_wizard_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ngx-wizard/ngx-wizard.component */ "./src/app/form/ngx-wizard/ngx-wizard.component.ts");
/* harmony import */ var _ngx_wizard_personal_personal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ngx-wizard/personal/personal.component */ "./src/app/form/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var _ngx_wizard_work_work_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ngx-wizard/work/work.component */ "./src/app/form/ngx-wizard/work/work.component.ts");
/* harmony import */ var _ngx_wizard_address_address_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ngx-wizard/address/address.component */ "./src/app/form/ngx-wizard/address/address.component.ts");
/* harmony import */ var _ngx_wizard_result_result_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ngx-wizard/result/result.component */ "./src/app/form/ngx-wizard/result/result.component.ts");
/* harmony import */ var _form_basic_basic_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form-basic/basic.component */ "./src/app/form/form-basic/basic.component.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forms.routing */ "./src/app/form/forms.routing.ts");
/* harmony import */ var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./form-validation/form-validation.component */ "./src/app/form/form-validation/form-validation.component.ts");
/* harmony import */ var _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./multiselect/multiselect.component */ "./src/app/form/multiselect/multiselect.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






























var FormModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_forms_module__WEBPACK_IMPORTED_MODULE_1__["FormModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _ngx_wizard_ngx_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NGXFormWizardComponentNgFactory"], _ngx_wizard_personal_personal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PersonalComponentNgFactory"], _ngx_wizard_work_work_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["WorkComponentNgFactory"], _ngx_wizard_address_address_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddressComponentNgFactory"], _ngx_wizard_result_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ResultComponentNgFactory"], _form_basic_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["BasicComponentNgFactory"], _form_validation_form_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["FormvalComponentNgFactory"], _multiselect_multiselect_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["MultiselectComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_wizard_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_15__["WorkflowService"], _ngx_wizard_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_15__["WorkflowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_wizard_data_formData_service__WEBPACK_IMPORTED_MODULE_16__["FormDataService"], _ngx_wizard_data_formData_service__WEBPACK_IMPORTED_MODULE_16__["FormDataService"], [_ngx_wizard_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_15__["WorkflowService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__["NGXWizardRoutingModule"], _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__["NGXWizardRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_wizard_ngx_wizard_module__WEBPACK_IMPORTED_MODULE_20__["NGXFormWizardModule"], _ngx_wizard_ngx_wizard_module__WEBPACK_IMPORTED_MODULE_20__["NGXFormWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _forms_module__WEBPACK_IMPORTED_MODULE_1__["FormModule"], _forms_module__WEBPACK_IMPORTED_MODULE_1__["FormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () { return [[{ path: "", component: _ngx_wizard_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_21__["NGXFormWizardComponent"], data: _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__["ɵ0"], children: [{ path: "wizard", component: _ngx_wizard_personal_personal_component__WEBPACK_IMPORTED_MODULE_22__["PersonalComponent"], data: _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__["ɵ1"] }, { path: "work", component: _ngx_wizard_work_work_component__WEBPACK_IMPORTED_MODULE_23__["WorkComponent"], data: _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__["ɵ2"] }, { path: "address", component: _ngx_wizard_address_address_component__WEBPACK_IMPORTED_MODULE_24__["AddressComponent"], data: _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__["ɵ3"] }, { path: "result", component: _ngx_wizard_result_result_component__WEBPACK_IMPORTED_MODULE_25__["ResultComponent"], data: _ngx_wizard_ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_19__["ɵ4"] }] }], [{ path: "", children: [{ path: "formbasic", component: _form_basic_basic_component__WEBPACK_IMPORTED_MODULE_26__["BasicComponent"], data: _forms_routing__WEBPACK_IMPORTED_MODULE_27__["ɵ0"] }, { path: "formvalidation", component: _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_28__["FormvalComponent"], data: _forms_routing__WEBPACK_IMPORTED_MODULE_27__["ɵ1"] }, { path: "multiselect", component: _multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_29__["MultiselectComponent"], data: _forms_routing__WEBPACK_IMPORTED_MODULE_27__["ɵ2"] }, { path: "ngx", loadChildren: _forms_routing__WEBPACK_IMPORTED_MODULE_27__["ɵ3"] }] }]]; }, [])]); });



/***/ })

}]);
//# sourceMappingURL=form-forms-module-ngfactory-es2015.js.map