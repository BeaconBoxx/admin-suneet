(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-email-mail-module"],{

/***/ "./node_modules/rxjs-compat/add/operator/switchMap.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var switchMap_1 = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/operator/switchMap.js");
rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/switchMap.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
exports.switchMap = switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/switchMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/switchMap */ "./node_modules/rxjs-compat/add/operator/switchMap.js");
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/apps/email/app.state.ts":
/*!*****************************************!*\
  !*** ./src/app/apps/email/app.state.ts ***!
  \*****************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/Subject.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__);



class AppState {
    constructor() {
        this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }
    notifyDataChanged(event, value) {
        // const current:any = this._data[event];
        // if (current !== value) {
        //   this._data[event] = value;
        //   this._data.next({
        //     event: event,
        //     data: this._data[event]
        //   });
        // }
    }
    subscribe(event, callback) {
        const subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    }
    _onEvent(data) {
        const subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach((callback) => {
            callback.call(null, data['data']);
        });
    }
}
AppState.ɵfac = function AppState_Factory(t) { return new (t || AppState)(); };
AppState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppState, factory: AppState.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/apps/email/mail-compose/mail-compose.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/apps/email/mail-compose/mail-compose.component.ts ***!
  \*******************************************************************/
/*! exports provided: MailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function() { return MailComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const _c0 = function () { return ["../mail-list/inbox"]; };
class MailComposeComponent {
}
MailComposeComponent.ɵfac = function MailComposeComponent_Factory(t) { return new (t || MailComposeComponent)(); };
MailComposeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailComposeComponent, selectors: [["app-mail-compose"]], decls: 15, vars: 2, consts: [[1, "card-body", "compose"], ["method", "get", "action", "#"], [1, "form-group"], ["type", "text", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Cc / Bcc", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", "rows", "10", 1, "form-control"], [1, "form-group", "float-right"], [1, "btn", "btn-secondary", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-main"]], template: function MailComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailComposeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail-compose',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './mail-compose.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/apps/email/mail-detail/mail-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/apps/email/mail-detail/mail-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDetailComponent", function() { return MailDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









function MailDetailComponent_div_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("<", ctx_r1.mail.senderMail, ">");
} }
function MailDetailComponent_div_0_div_17_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 457K \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attachment_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", attachment_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("image-", i_r5 + 1, ".jpg");
} }
function MailDetailComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0-\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Download all attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View all Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MailDetailComponent_div_0_div_17_section_13_Template, 11, 2, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.mail.attachments.length, " attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.mail.attachments);
} }
function MailDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MailDetailComponent_div_0_span_10_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "to me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MailDetailComponent_div_0_div_17_Template, 14, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.mail.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.mail.sender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mail.senderMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.mail.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.mail.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mail.attachments.length > 0);
} }
class MailDetailComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.mail = undefined;
        this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // this.route.params
        // .switchMap((params: Params) => this.service.getMail(+params['id']))
        // .subscribe((mail: Mail) => this.mail = mail);
        this.route.params.forEach((params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.service.getMail(id)
                    .then(mail => this.mail = mail);
            }
        });
    }
    goToReply(mail) {
        this.replyMessage.emit(mail);
    }
    trash(id) {
        this.service.getMail(id).then(mail => {
            if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
            }
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    }
}
MailDetailComponent.ɵfac = function MailDetailComponent_Factory(t) { return new (t || MailDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MailDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailDetailComponent, selectors: [["app-mail-detail"]], outputs: { replyMessage: "replyMessage" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "card-body"], [1, "mb-3"], [1, "d-flex", "mt-4", "mb-4"], [1, "round", "mr-2", "flex-shrink-0"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, ""], [1, "font-bold"], ["class", "email text-truncate d-block w-75", 4, "ngIf"], [1, "receiver"], [1, "ml-auto"], [1, "mail-date"], [1, "mailbox-body", 3, "innerHTML"], ["class", "mail-attachments", 4, "ngIf"], [1, "email", "text-truncate", "d-block", "w-75"], [1, "mail-attachments"], [1, "row"], [1, "col-sm-6"], ["href", "#"], ["class", "attachment", 4, "ngFor", "ngForOf"], [1, "attachment"], ["alt", "", 3, "src"], [1, "title"]], template: function MailDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MailDetailComponent_div_0_Template, 18, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail-detail',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './mail-detail.component.html'
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { replyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/apps/email/mail-list/mail-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/apps/email/mail-list/mail-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListComponent", function() { return MailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.state */ "./src/app/apps/email/app.state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pipes_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/mail-search.pipe */ "./src/app/apps/email/pipes/mail-search.pipe.ts");












const _c0 = function (a0, a1) { return { "fa-star": a0, "fa-star-o": a1 }; };
function MailListComponent_tr_10_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailListComponent_tr_10_td_5_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const mail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeStarStatus(mail_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, mail_r1.starred, !mail_r1.starred));
} }
function MailListComponent_tr_10_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
} }
const _c1 = function (a0, a1) { return { "unread": a0, "selected": a1 }; };
function MailListComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MailListComponent_tr_10_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const mail_r1 = ctx.$implicit; return mail_r1.selected = $event; })("ngModelChange", function MailListComponent_tr_10_Template_input_ngModelChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleOne(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MailListComponent_tr_10_td_5_Template, 2, 4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailListComponent_tr_10_Template_td_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const mail_r1 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goToDetail(mail_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailListComponent_tr_10_Template_td_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const mail_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.goToDetail(mail_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailListComponent_tr_10_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const mail_r1 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.goToDetail(mail_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MailListComponent_tr_10_i_10_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailListComponent_tr_10_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const mail_r1 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.goToDetail(mail_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, mail_r1.unread, mail_r1.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox", mail_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", mail_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("for", "checkbox", mail_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.router.url != "/pages/mail/mail-list/trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r1.sender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", mail_r1.subject, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mail_r1.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r1.date);
} }
class MailListComponent {
    constructor(service, route, router, state) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.mails = null;
        this.type = null;
        this.isAllSelected = false;
        this.searchText = null;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.unSelectAll();
                this.searchText = '';
            }
        });
        this.state.subscribe('markAsRead', () => {
            this.markAllAsRead();
        });
        this.state.subscribe('markAsUnRead', () => {
            this.markAllAsUnRead();
        });
        this.state.subscribe('deleteChecked', () => {
            this.deleteAllCheckedMail();
        });
    }
    ngOnInit() {
        this.getMails();
    }
    getMails() {
        this.mails = this.route.params.switchMap((params) => {
            this.type = params['type'];
            switch (this.type) {
                case 'inbox':
                    return this.service.getInboxMails();
                case 'starred':
                    return this.service.getStarredMails();
                case 'sent':
                    return this.service.getSentMails();
                case 'drafts':
                    return this.service.getDraftMails();
                case 'trash':
                    return this.service.getTrashMails();
                default:
                    return this.service.getInboxMails();
            }
        });
    }
    toggleAll() {
        var _a;
        const toggleStatus = !this.isAllSelected;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
                mail.selected = toggleStatus;
            });
        });
    }
    toggleOne() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            this.isAllSelected = result.every(mail => {
                return mail.selected === true;
            });
        });
    }
    unSelectAll() {
        this.isAllSelected = false;
        if (this.mails) {
            this.mails.subscribe(result => {
                result.forEach(mail => {
                    mail.selected = false;
                });
            });
        }
    }
    markAllAsRead() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
                if (mail.selected) {
                    mail.unread = false;
                }
            });
        });
    }
    markAllAsUnRead() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
                if (mail.selected) {
                    mail.unread = true;
                }
            });
        });
    }
    deleteAllCheckedMail() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
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
    goToDetail(mail) {
        mail.unread = false;
        this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
    }
    changeStarStatus(mail) {
        mail.starred = !mail.starred;
    }
}
MailListComponent.ɵfac = function MailListComponent_Factory(t) { return new (t || MailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"])); };
MailListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailListComponent, selectors: [["app-inbox-list"]], decls: 13, vars: 8, consts: [[1, "d-flex", "mailbox-header-bar", "p-3", "bg-white", "align-items-center", "border-top"], [1, "custom-control", "custom-checkbox"], ["id", "toggle-all", "type", "checkbox", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "toggle-all", 1, "custom-control-label"], [1, "ml-auto"], ["id", "table-search-input", "type", "text", "placeholder", "Search mail...", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], [1, "table", "table-hover", "no-wrap", "bg-white"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "mail-checkbox", "pl-3", "width-50"], [1, "custom-control", "custom-checkbox", "mycustomcheckbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "ngModel", "ngModelChange"], [1, "custom-control-label"], ["class", "mail-star width-50", 4, "ngIf"], [1, "sender", 3, "click"], [1, "subject", 3, "innerHTML", "click"], [1, "attachment", 3, "click"], ["class", "fa fa-paperclip", 4, "ngIf"], [1, "date", 3, "click"], [1, "mail-star", "width-50"], [1, "fa", 3, "ngClass", "click"], [1, "fa", "fa-paperclip"]], template: function MailListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MailListComponent_Template_input_ngModelChange_2_listener($event) { return ctx.isAllSelected = $event; })("click", function MailListComponent_Template_input_click_2_listener() { return ctx.toggleAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Check all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MailListComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MailListComponent_tr_10_Template, 13, 12, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "MailSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isAllSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, ctx.mails), ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_pipes_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inbox-list',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './mail-list.component.html'
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"] }]; }, null); })();


/***/ }),

/***/ "./src/app/apps/email/mail.component.ts":
/*!**********************************************!*\
  !*** ./src/app/apps/email/mail.component.ts ***!
  \**********************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");










function MailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.trash(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["mail-compose"]; };
const _c1 = function () { return ["mail-list/inbox"]; };
const _c2 = function () { return ["mail-list/sent"]; };
const _c3 = function () { return ["mail-list/drafts"]; };
const _c4 = function () { return ["mail-list/trash"]; };
const _c5 = function () { return ["mail-list/starred"]; };
class MailComponent {
    constructor(service, route, router, state) {
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
        this.router.events.subscribe(event => {
            var _a, _b, _c, _d, _e, _f;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.id = (_c = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.params['id'];
                this.type = (_f = (_e = (_d = this.route) === null || _d === void 0 ? void 0 : _d.snapshot) === null || _e === void 0 ? void 0 : _e.firstChild) === null || _f === void 0 ? void 0 : _f.params['type'];
                setTimeout(() => {
                    // jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
                });
            }
        });
    }
    getBack() {
        if (this.type) {
            this.router.navigate(['apps/email/mail-list/' + this.type]);
        }
        else {
            this.router.navigate(['apps/email/mail-list/inbox']);
        }
    }
    trash() {
        // jQuery('[data-toggle="tooltip"]').tooltip('hide');
        this.service.getMail(this.id).then(mail => {
            if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
            }
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    }
    setAsRead() {
        this.markAsRead = this.markAsRead;
        this.state.notifyDataChanged('markAsRead', this.markAsRead);
    }
    setAsUnRead() {
        this.markAsUnRead = this.markAsUnRead;
        this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
    }
    deleteCheckedMail() {
        this.deleteChecked = this.deleteChecked;
        this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
    }
    openClleft() {
        this.status = !this.status;
    }
}
MailComponent.ɵfac = function MailComponent_Factory(t) { return new (t || MailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"])); };
MailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailComponent, selectors: [["app-mail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]])], decls: 98, vars: 21, consts: [[1, "email-container", "px-3"], [1, "row"], [1, "col-sm-3", "col-md-3", "col-lg-3", "col-xlg-2", "bg-white", "border-right"], [1, "mb-0", "pt-4", "text-center", "font-weight-bold"], ["href", "javascript:void(0)", 1, "text-dark", "float-right", "custom-control-button", 3, "click"], [1, "ti-menu"], [1, "col-sm-9", "col-md-9", "col-lg-9", "col-xlg-10", "bg-white"], [1, "pb-3", "pt-3", "d-flex", "align-items-center"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", 1, "b-btn", "mr-1", 3, "title"], ["type", "button", 1, "btn", "btn-dark", "btn-sm", 3, "click"], [1, "fa", "fa-arrow-left"], ["class", "b-btn mr-1", "data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Delete", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Refresh", 1, "b-btn", "mr-1"], ["type", "button", 1, "btn", "btn-dark", "btn-sm"], [1, "fa", "fa-refresh"], ["ngbDropdown", "", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", "aria-controls", "dropdown-basic", 1, "btn", "btn-warning", "btn-sm"], ["id", "dropdown-basic", "ngbDropdownMenu", "", 1, ""], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "ml-auto"], [1, "mr-1", "text-dark"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-dark"], [1, "fa", "fa-chevron-left"], [1, "fa", "fa-chevron-right"], [1, "col-md-3", "col-lg-3", "col-xlg-2", "bg-white", "border-right"], [1, "inbox-panel", "p-2", "bg-white", 3, "ngClass"], ["role", "button", 1, "btn", "btn-danger", "rounded-pill", "btn-block", "mt-3", 3, "routerLink"], [1, "mailbox", "bg-white"], [1, "list-group", "custom-group", "message-center", 2, "height", "unset"], [1, "py-2"], [1, "font-weight-normal", "text-muted", "text-uppercase", "mb-0", "mt-3", "font-12"], [1, "list-group-item", "p-0"], [1, "message-item", "d-flex", "align-items-center", "border-0", "py-3", "font-weight-normal", 3, "routerLink"], [1, "fa-inbox", "fa", "font-18", "mr-2"], [1, "badge", "badge-info", "badge-pill"], [1, "fa-paper-plane", "fa", "font-18", "mr-2"], [1, "fa-archive", "fa", "font-18", "mr-2"], [1, "fa-history", "fa", "font-18", "mr-2"], [1, "fa", "fa-star", "font-18", "mr-2"], ["href", "#", 1, "message-item", "d-flex", "align-items-center", "border-0", "py-3", "font-weight-normal"], [1, "fa", "fa-circle", "text-danger", "font-18", "mr-2"], [1, "fa", "fa-circle", "text-warning", "font-18", "mr-2"], [1, "fa", "fa-circle", "text-info", "font-18", "mr-2"], [1, "col-md-9", "col-lg-9", "col-xlg-10", "bg-white"], [1, "inbox-right-panel"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Delete", 1, "b-btn", "mr-1"], [1, "fa", "fa-trash"]], template: function MailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Mailbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_Template_a_click_5_listener() { return ctx.openClleft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_Template_button_click_10_listener() { return ctx.getBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MailComponent_div_12_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_Template_a_click_20_listener() { return ctx.setAsRead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mark as read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_Template_a_click_22_listener() { return ctx.setAsUnRead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mark as unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_Template_a_click_24_listener() { return ctx.deleteCheckedMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Sent Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Drafts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Trash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Starred ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Personal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.id || !ctx.type ? "inline-block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Back to ", ctx.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.router.url == "/apps/email/mail-compose" || ctx.id ? "none" : "inline-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.router.url == "/apps/email/mail-compose" ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status ? "showlpanel" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".email-container {\n  overflow: hidden;\n}\n\n.email-container .unread {\n  font-weight: 800;\n}\n\n.email-container .mail-star .fa-star {\n  color: #f9a913;\n}\n\n.email-container .inbox-right-panel,\n.email-container .inbox-panel {\n  min-height: calc(100vh - 300px);\n}\n\n.email-container .inbox-right-panel {\n  margin: 0 -10px;\n}\n\n.email-container .inbox-right-panel .table tr {\n  cursor: pointer;\n}\n\n.email-container .subject,\n.email-container .sender {\n  max-width: 350px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.email-container .sender {\n  max-width: 150px;\n}\n\n.email-container .custom-control-button {\n  display: none;\n}\n\n.email-container .width-50 {\n  width: 50px;\n}\n\n.email-container .custom-group .list-group-item {\n  border: 0px;\n  padding: 0.75rem 0.25rem;\n}\n\n.email-container .custom-group .list-group-item a {\n  color: #3e556a;\n}\n\n@media (max-width: 767px) {\n  .email-container .inbox-panel {\n    position: absolute;\n    width: 200px;\n    min-height: 100vh;\n    height: 100%;\n    background: white;\n    left: -202px;\n    z-index: 10;\n    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n    padding: 0 10px;\n  }\n  .email-container .inbox-panel.showlpanel {\n    left: 0px;\n  }\n  .email-container .custom-control-button {\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUZBO0VBSUksZ0JBQWdCO0FBRXBCOztBQU5BO0VBT0ksY0FBYztBQUdsQjs7QUFWQTs7RUFXSSwrQkFBK0I7QUFJbkM7O0FBZkE7RUFjSSxlQUFlO0FBS25COztBQW5CQTtFQWdCTSxlQUFlO0FBT3JCOztBQXZCQTs7RUFxQkksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFPM0I7O0FBOUJBO0VBMEJJLGdCQUFnQjtBQVFwQjs7QUFsQ0E7RUE2QkksYUFBYTtBQVNqQjs7QUF0Q0E7RUFpQ0ksV0FBVztBQVNmOztBQTFDQTtFQXFDTSxXQUFXO0VBQ1gsd0JBQXdCO0FBUzlCOztBQS9DQTtFQXdDUSxjQUFjO0FBV3RCOztBQVBFO0VBNUNGO0lBOENNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtFQVVuQjtFQWhFRjtJQXdEUSxTQUFTO0VBV2Y7RUFuRUY7SUE2RE0sY0FBYztFQVNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnVucmVhZCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICAubWFpbC1zdGFyIC5mYS1zdGFyIHtcclxuICAgIGNvbG9yOiAjZjlhOTEzO1xyXG4gIH1cclxuICAuaW5ib3gtcmlnaHQtcGFuZWwsXHJcbiAgLmluYm94LXBhbmVsIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XHJcbiAgfVxyXG4gIC5pbmJveC1yaWdodC1wYW5lbCB7XHJcbiAgICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgICAudGFibGUgdHIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdWJqZWN0LFxyXG4gIC5zZW5kZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLnNlbmRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuY3VzdG9tLWNvbnRyb2wtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAud2lkdGgtNTAge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5jdXN0b20tZ3JvdXAge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDAuMjVyZW07XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjM2U1NTZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmluYm94LXBhbmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBsZWZ0OiAtMjAycHg7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAmLnNob3dscGFuZWwge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20tY29udHJvbC1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './mail.component.html',
                styleUrls: ['./mail.component.scss'],
                providers: [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]]
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"] }]; }, null); })();


/***/ }),

/***/ "./src/app/apps/email/mail.module.ts":
/*!*******************************************!*\
  !*** ./src/app/apps/email/mail.module.ts ***!
  \*******************************************/
/*! exports provided: routes, MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/apps/email/pipes/pipes.module.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail.component */ "./src/app/apps/email/mail.component.ts");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "./src/app/apps/email/mail-compose/mail-compose.component.ts");
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-list/mail-list.component */ "./src/app/apps/email/mail-list/mail-list.component.ts");
/* harmony import */ var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-detail/mail-detail.component */ "./src/app/apps/email/mail-detail/mail-detail.component.ts");













const routes = [
    {
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        children: [
            { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
            { path: 'mail-list/:type', component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"] },
            { path: 'mail-compose', component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"] },
            { path: 'mail-list/:type/:id', component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"] }
        ]
    }
];
class MailModule {
}
MailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MailModule });
MailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MailModule_Factory(t) { return new (t || MailModule)(); }, providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MailModule, { declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"],
        _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"],
        _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                declarations: [
                    _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
                    _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"],
                    _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"],
                    _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]
                ],
                providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/apps/email/mail.service.ts":
/*!********************************************!*\
  !*** ./src/app/apps/email/mail.service.ts ***!
  \********************************************/
/*! exports provided: Mail, MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Mail {
    constructor(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
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
    }
}
const Mails = [
    new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false),
    new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', true, ['assets/images/product/chair.png', 'assets/images/product/chair2.png'], true, false, true, false, false, false),
    new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false),
    new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false),
    new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. ', false, [], false, false, false, true, false, false),
    new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, true, false, false, false),
    new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, true, false, false, false, false),
    new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false)
];
const mailsPromise = Promise.resolve(Mails);
class MailService {
    getInboxMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.sent === false && mail.draft === false && mail.trash === false));
    }
    getStarredMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.starred === true));
    }
    getSentMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.sent === true));
    }
    getDraftMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.draft === true));
    }
    getTrashMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.trash === true));
    }
    getMail(id) {
        return mailsPromise.then(mails => mails.find(mail => mail.id === +id));
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/apps/email/pipes/mail-search.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/apps/email/pipes/mail-search.pipe.ts ***!
  \******************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class MailSearchPipe {
    transform(value, args) {
        const searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter((mail) => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 ||
                        mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
}
MailSearchPipe.ɵfac = function MailSearchPipe_Factory(t) { return new (t || MailSearchPipe)(); };
MailSearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "MailSearch", type: MailSearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailSearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'MailSearch'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/apps/email/pipes/pipes.module.ts":
/*!**************************************************!*\
  !*** ./src/app/apps/email/pipes/pipes.module.ts ***!
  \**************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-search.pipe */ "./src/app/apps/email/pipes/mail-search.pipe.ts");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
                ],
                exports: [
                    _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=apps-email-mail-module-es2015.js.map