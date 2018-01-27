webpackJsonp(["training-detail.module"],{

/***/ "../../../../../src/app/pages/training-detail/training-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<pre>{{training | json}}</pre>\n -->\n<div class=\"row\">\n\t<div class=\"col-xs-12 col-lg-8\">\n\t\t<ba-card title=\"\" baCardClass=\"with-scroll table-panel\">\n\t\t\t<form class=\"form-horizontal\" [formGroup]=\"form\" novalidate (ngSubmit)=\"submitForm(form.value, form.valid)\">\n\t\t\t\t<div class=\"form-group row\" [class.has-error]=\"!form.controls.weekday.valid && submitAttempt\">\n\t\t\t\t\t<label for=\"weekday\" class=\"col-xs-4 col-sm-2 form-control-label\">Wochentag</label>\n\t\t\t\t\t<div class=\"col-xs-8 col-sm-10\">\n\t\t\t\t\t\t<input formControlName=\"weekday\" type=\"text\" id=\"weekday\" class=\"form-control\" placeholder=\"Mo\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t    <label class=\"col-form-label col-xs-4 col-sm-2\">Uhrzeit</label>\n\t\t\t\t\t<div class=\"col-xs-8 col-sm-10 form-inline\">\n\t\t\t\t\t\t<div class=\"form-group\" [class.has-error]=\"!form.controls.timeFrom.valid && submitAttempt\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<input  formControlName=\"timeFrom\"\n\t\t\t\t\t\t\t\t id=\"timeFrom\" type=\"time\" class=\"form-control\" placeholder=\"00:00\" style=\"line-height: 1rem;\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"control-label\">:</label>\n\t\t\t\t\t\t<div class=\"form-group\"  [class.has-error]=\"!form.controls.timeTill.valid && submitAttempt\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<input formControlName=\"timeTill\"\n\t\t\t\t\t\t\t\tid=\"timeFrom\" type=\"time\" class=\"form-control\" placeholder=\"24:00\" style=\"line-height: 1rem;\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\"  [class.has-error]=\"!form.controls.level.valid && submitAttempt\">\n\t\t\t\t\t<label for=\"level\" class=\"col-xs-4 col-sm-2 form-control-label\">Level</label>\n\t\t\t\t\t<div class=\"col-xs-8 col-sm-10 \">\n\t\t\t\t\t\t<input formControlName=\"level\" type=\"text\" id=\"level\" class=\"form-control\" placeholder=\"Level A1-F\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group row\"  [class.has-error]=\"!form.controls.trainername.valid && submitAttempt\">\n\t\t\t\t\t<label for=\"level\" class=\"col-xs-4 col-sm-2 form-control-label\">Trainername</label>\n\t\t\t\t\t<div class=\"col-xs-8 col-sm-10\">\n\t\t\t\t\t\t<input formControlName=\"trainername\" type=\"text\" id=\"trainername\" class=\"form-control\" placeholder=\"Trainername\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\"  [class.has-error]=\"!form.controls.capacity.valid && submitAttempt\">\n\t\t\t\t\t<label for=\"capacity\" class=\"col-xs-4 col-sm-2 form-control-label\">Teilnehmerzahl</label>\n\t\t\t\t\t<div class=\"col-xs-8 col-sm-10\">\n\t\t\t\t\t\t<input formControlName=\"capacity\" type=\"number\" id=\"capacity\" class=\"form-control\" placeholder=\"10\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\n\t\t\t\t\t\t<button *ngIf=\"id\" type=\"button\" (click)=\"smModal.show()\" class=\"btn btn-danger\">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ba-card>\n\t</div>\n</div>\n\n<!--\n\n<div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" >\n    <div class=\"modal-content\" style=\"background: rgba(181, 117, 7, 0.75);\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"smModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>You delete the Training</h4>\n      </div>\n      <div class=\"modal-body\">\n\t\tSie löschen den Kurs, Daten werden nicht wiederhergestellt.\n      </div>\n      <div class=\"modal-footer\">\n\t\t\t<button type=\"button\" type=\"submit\" (click)=\"smModal.hide();\" class=\"btn btn-primary\">Cancel</button>\n        \t<button type=\"button\" (click)=\"delete(); smModal.hide();\" class=\"btn btn-danger\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/training-detail/training-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_training_service__ = __webpack_require__("../../../../../src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainingDetail = (function () {
    function TrainingDetail(fb, _trainingService, activeRoute, router) {
        this.fb = fb;
        this._trainingService = _trainingService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.submitAttempt = false;
        this.form = fb.group({
            '_id': [''],
            'weekday': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            'timeFrom': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)])],
            'timeTill': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)])],
            'level': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'trainername': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)])],
            'capacity': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
            /*   'availableFrom': ['', Validators.compose([Validators.required,Validators.minLength(6)])],
               'availableTill': ['', Validators.compose([Validators.required,Validators.minLength(6)])],
               'placeStr': ['', Validators.compose([Validators.required,Validators.minLength(4)])]*/
        });
    }
    TrainingDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.forEach(function (params) {
            _this.id = params['id'];
            if (_this.id) {
                console.log("id:" + _this.id);
                _this._trainingService.getTraining(_this.id)
                    .subscribe(function (training) {
                    training.timeFrom = __WEBPACK_IMPORTED_MODULE_4_moment__(training.timeFrom).format("HH:mm");
                    training.timeTill = __WEBPACK_IMPORTED_MODULE_4_moment__(training.timeTill).format("HH:mm");
                    _this.form.patchValue(training, { onlySelf: true });
                });
            }
            else {
                //this.training = new Training();
            }
        });
    };
    TrainingDetail.prototype.submitForm = function (form, isValid) {
        this.submitAttempt = true;
        if (isValid) {
            form.timeFrom = "2000-01-01T" + form.timeFrom + ":00";
            form.timeTill = "2000-01-01T" + form.timeTill + ":00";
            this._trainingService.putTraining(form);
            this.router.navigate(['/pages/dashboard']);
        }
    };
    TrainingDetail.prototype.delete = function () {
        var _this = this;
        this._trainingService.deleteTraining(this.id).subscribe(function () { return (_this.router.navigate(['/pages/dashboard'])); });
    };
    return TrainingDetail;
}());
TrainingDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'training-detail',
        template: __webpack_require__("../../../../../src/app/pages/training-detail/training-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_training_service__["a" /* TrainingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], TrainingDetail);

var _a, _b, _c, _d;
//# sourceMappingURL=training-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training-detail/training-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_detail_routing__ = __webpack_require__("../../../../../src/app/pages/training-detail/training-detail.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__training_detail_component__ = __webpack_require__("../../../../../src/app/pages/training-detail/training-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {SelectModule} from 'ng2-select';


//import { MomentModule } from 'moment';
//MomentModule,
var TrainingDetailModule = (function () {
    //  SelectModule
    function TrainingDetailModule() {
    }
    return TrainingDetailModule;
}());
TrainingDetailModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__training_detail_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__training_detail_component__["a" /* TrainingDetail */]
        ],
        providers: []
    })
    //  SelectModule
], TrainingDetailModule);
/* harmony default export */ __webpack_exports__["default"] = (TrainingDetailModule);
//# sourceMappingURL=training-detail.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training-detail/training-detail.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_detail_component__ = __webpack_require__("../../../../../src/app/pages/training-detail/training-detail.component.ts");


// noinspection TypeScriptValidateTypes
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__training_detail_component__["a" /* TrainingDetail */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__training_detail_component__["a" /* TrainingDetail */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=training-detail.routing.js.map

/***/ })

});
//# sourceMappingURL=training-detail.module.chunk.js.map