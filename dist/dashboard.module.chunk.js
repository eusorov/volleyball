webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard = (function () {
    function Dashboard() {
    }
    return Dashboard;
}());
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.html")
    }),
    __metadata("design:paramtypes", [])
], Dashboard);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <ba-card cardTitle=\"Kurse\" class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-12\">\r\n    <trainings></trainings>\r\n  </ba-card>\r\n<!--\r\n  <ba-card class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-12\"\r\n                     cardTitle=\"dashboard.acquisition_channels\" baCardClass=\"traffic-panel medium-card\">\r\n\r\n  </ba-card>\r\n-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trainings_trainings_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/trainings/trainings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/*
import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';

*/
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_7__trainings_trainings_component__["a" /* TrainingsComponent */]
        ]
        /*
          providers: [
            CalendarService,
            FeedService,
            LineChartService,
            PieChartService,
            TodoService,
            TrafficChartService,
            UsersMapService
          ]
          */
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* Dashboard */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/trainings/trainings.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group row\" *ngIf=\"userService.user && userService.user.isadmin\">\n  <label class=\"form-control-label text-nowrap\" style=\"float: left; padding-top:8px\">Neuen Kurs anlegen</label>\n  <div>\n    <button type=\"button\" [routerLink]=\"['/pages/training']\"  class=\"btn btn-default btn-icon\" title=\"Neuen Kurs anlegen\"><i class=\"fa fa-plus\"></i></button>\n  </div>\n</div>\n\n<div *ngIf=\"trainings\" >\n\n<!--  <pre>{{trainings | json}}</pre>\n-->\n  <ul style=\"list-style-type: none; padding:5px;\" class=\"todo-list\">\n    <div class=\"row\" style=\"padding-bottom:10px;\">\n      <div class=\"col-9\">\n        <div class=\"row\">\n      <div class=\"col-6\">\n          Tag/Uhrzeit\n        </div>\n      <div class=\"col-6\">\n        Level/Trainer\n      </div>\n      </div>\n    </div>\n      <div class=\"col-3\">\n        <span class=\"float-right\">Anmelden</span>\n      </div>\n    </div>\n\n    <ng-template ngFor let-training [ngForOf]=\"trainings\" let-i=\"index\">\n      <li style=\"font-size: 12px; padding-left: 0px; padding-right: 0px; padding-top:10px;\" class=\"feed-message\" [class.active]=\"training === selectedTraining\"\t(click)=\"onSelect(training)\">\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                {{training.weekday}}\n              </div>\n              <div class=\"col-6\">\n                {{training.level}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\" style=\"font-size: 12px; padding-top:5px; font-weight: 300\">\n                {{training.timeFrom |  amDateFormat:'HH:mm'}} - {{training.timeTill |  amDateFormat:'HH:mm'}}\n              </div>\n              <div class=\"col-6\" style=\"font-size: 12px; padding-top:5px; font-weight: 300\">\n                {{training.trainername}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-offset-6 col-6\" style=\"font-size: 12px; padding-top:5px; font-weight: 300\">\n                <span>Freie Plätze: </span>\n                <span *ngIf=\"training.participants\" >{{training.capacity-training.participants.length}}</span>\n                <span *ngIf=\"!training.participants\" >{{training.capacity}}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-3\">\n            <button *ngIf=\"userService.user\"\n            [disabled]=\"training.participants.length==training.capacity || userIsAlreadySigned(training)\"\n            (click)=\"signingToCourse(training)\"\n            class=\"btn btn-default btn-icon pull-right\"\n            [class.btn-success]=\"userIsAlreadySigned(training)\"\n            [class.btn-danger]=\"training.participants.length==training.capacity && !userIsAlreadySigned(training)\"\n            title=\"Zum Kurs anmelden\">\n\n\n            <i *ngIf=\"training.participants.length<training.capacity && !userIsAlreadySigned(training)\" class=\"fa fa-sign-in\"></i>\n              <i *ngIf=\"training.participants.length==training.capacity && !userIsAlreadySigned(training)\" class=\"fa fa-ban\"></i>\n              <i *ngIf=\"userIsAlreadySigned(training)\" class=\"fa fa-check\"></i>\n\n            </button>\n\n            <button *ngIf=\"!userService.user\" [routerLink]=\"['/login']\"\n            [disabled]=\"training.participants.length==training.capacity\"\n            [class.btn-danger]=\"training.participants.length==training.capacity\"\n            class=\"btn btn-default btn-icon pull-right\" type=\"button\" title=\"Zum Kurs anmelden\" >\n\n            <i *ngIf=\"training.participants.length<training.capacity\" class=\"fa fa-sign-in\"></i>\n            <i *ngIf=\"training.participants.length==training.capacity\" class=\"fa fa-ban\"></i>\n          </button>\n\n\n          <button *ngIf=\"userService.user && userService.user.isadmin\"\n          (click)=\"gotoDetail(training._id)\" type=\"button\" title=\"Kurs edit\" class=\"btn btn-default btn-icon pull-right\"><i class=\"fa fa-pencil-square\"></i></button>\n        </div>\n      </div>\n    </li>\n    <ng-template [ngIf]=\"training.showParticipants && userService.user && userService.user.isadmin \" >\n      <div class=\"row\" style=\"padding-top:10px; padding-bottom:10px;\">\n        <div class=\"col-xs-12\">\n          Participants\n        </div>\n      </div>\n      <div class=\"row\" *ngFor=\"let participant of training.participants; let y=index;\"  @flyInOut  >\n        <div class=\"col-1\">{{y}}</div>\n        <div class=\"col-2\">\n          {{participant?.name}}\n        </div>\n        <div class=\"col-6\">\n          {{participant?.email}}\n        </div>\n        <div class=\"col-3\">\n          <button (click)=\"deleteParticipant(training._id, participant._id, y)\" type=\"button\" class=\"btn btn-danger btn-icon pull-right\" title=\"Teilnehmer löschen\"><i class=\"fa fa-minus-circle \"></i></button>\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/trainings/trainings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.task-todo {\n  margin-bottom: 8px; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\nul li {\n    margin: 0 0 -1px 0;\n    padding: 12px;\n    list-style: none;\n    position: relative; }\n\nul li:hover {\n      background: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(255, 255, 255, 0.3)), to(rgba(255, 255, 255, 0)));\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0)); }\n\n.ng2 .task-todo-container .todo-panel.panel, .blur .task-todo-container .todo-panel.panel {\n  color: white;\n  opacity: 0.9; }\n\n.ng2 .task-todo-container input.task-todo, .blur .task-todo-container input.task-todo {\n  color: white;\n  width: calc(100% - 25px);\n  border-radius: 0;\n  border: none;\n  background: transparent; }\n\n.ng2 .task-todo-container input.task-todo:focus, .blur .task-todo-container input.task-todo:focus {\n    outline: none;\n    background-color: transparent;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    -webkit-box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12);\n            box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12); }\n\n.ng2 .task-todo-container .add-item-icon, .blur .task-todo-container .add-item-icon {\n  display: block;\n  float: right;\n  margin-top: -45px;\n  margin-right: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n.ng2 .task-todo-container ul.todo-list li, .blur .task-todo-container ul.todo-list li {\n  margin: 0;\n  border: none;\n  font-weight: 300; }\n\n.ng2 .task-todo-container ul.todo-list li .blur-container, .blur .task-todo-container ul.todo-list li .blur-container {\n    height: 40px;\n    position: absolute;\n    width: calc(100% + 40px);\n    top: 0;\n    left: -25px;\n    overflow-y: hidden; }\n\n.ng2 .task-todo-container ul.todo-list li:hover .blur-container, .blur .task-todo-container ul.todo-list li:hover .blur-container {\n    -webkit-box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12);\n            box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12); }\n\n.ng2 .task-todo-container ul.todo-list li:hover .blur-box, .blur .task-todo-container ul.todo-list li:hover .blur-box {\n    height: 100%;\n    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.3)), to(rgba(255, 255, 255, 0)));\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);\n    -webkit-filter: blur(3px); }\n\n.ng2 .task-todo-container ul.todo-list li i.remove-todo, .blur .task-todo-container ul.todo-list li i.remove-todo {\n    color: white;\n    opacity: 0.4; }\n\n.ng2 .task-todo-container ul.todo-list li i.remove-todo:hover, .blur .task-todo-container ul.todo-list li i.remove-todo:hover {\n      color: white;\n      opacity: 0.95; }\n\n.ng2 .task-todo-container ul.todo-list li i.mark, .blur .task-todo-container ul.todo-list li i.mark {\n    min-width: 40px;\n    display: none; }\n\n.ng2 .task-todo-container ul.todo-list li label.todo-checkbox > span:before, .blur .task-todo-container ul.todo-list li label.todo-checkbox > span:before {\n    position: absolute;\n    color: #ffffff;\n    content: '\\F10C';\n    float: none;\n    margin-right: 6px;\n    -webkit-transition: none;\n    transition: none; }\n\n.ng2 .task-todo-container ul.todo-list li.checked label.todo-checkbox > span:before, .blur .task-todo-container ul.todo-list li.checked label.todo-checkbox > span:before {\n    content: '\\F00C'; }\n\n.ng2 .task-todo-container .box-shadow-border, .blur .task-todo-container .box-shadow-border {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12);\n          box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12);\n  width: calc(100% + 44px);\n  margin-left: -22px; }\n\n.feed-panel .card-body {\n  padding: 10px 0; }\n\n.table-row {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12);\n          box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12); }\n\n.table-row:first-child {\n    padding-top: 0; }\n\n.feed-message {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12);\n          box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12); }\n\n.feed-message:first-child {\n    padding-top: 0; }\n\n.feed-message .hidden {\n    display: none !important; }\n\n.feed-message .message-icon {\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    float: left;\n    position: relative;\n    margin-left: 20px; }\n\n.feed-message .message-icon > img, .feed-message .message-icon .media-icon {\n      border-radius: 30px;\n      width: 100%;\n      height: 100%; }\n\n.feed-message .message-icon .sub-photo-icon {\n      display: inline-block;\n      padding: 4px; }\n\n.feed-message .message-icon .sub-photo-icon:after {\n        content: '';\n        display: inline-block;\n        width: 22px;\n        height: 22px;\n        background-size: contain; }\n\n.feed-message .message-icon .sub-photo-icon.video-message {\n        background: #f95372; }\n\n.feed-message .message-icon .sub-photo-icon.video-message:after {\n          background-image: url(\"/assets/img/theme/icon/feed/feed-video.svg\"); }\n\n.feed-message .message-icon .sub-photo-icon.image-message {\n        background: #8bd22f; }\n\n.feed-message .message-icon .sub-photo-icon.image-message:after {\n          width: 21px;\n          height: 21px;\n          margin-top: 1px;\n          margin-left: 1px;\n          border-radius: 5px;\n          background-image: url(\"/assets/img/theme/icon/feed/feed-image.svg\"); }\n\n.feed-message .message-icon .sub-photo-icon.geo-message {\n        background: #00abff; }\n\n.feed-message .message-icon .sub-photo-icon.geo-message:after {\n          width: 22px;\n          height: 22px;\n          background-image: url(\"/assets/img/theme/icon/feed/feed-location.svg\"); }\n\n.feed-message .message-icon .sub-photo-icon {\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      right: -2px;\n      bottom: -4px;\n      border-radius: 15px; }\n\n.feed-message .text-block {\n    position: relative;\n    border-radius: 5px;\n    margin: 0 0 0 0px;\n    padding: 5px 20px;\n    color: #ffffff;\n    height: 70px; }\n\n.feed-message .text-block.text-message {\n      font-size: 12px;\n      width: inherit;\n      max-width: calc(100% - 80px);\n      height: inherit;\n      min-height: 60px; }\n\n.feed-message .text-block.text-message:before {\n        display: block; }\n\n.feed-message .text-block.text-message .message-content {\n        font-size: 12px;\n        line-height: 15px;\n        font-weight: 300; }\n\n.feed-message .text-block.small-message {\n      width: 155px;\n      height: 145px; }\n\n.feed-message .text-block.small-message .preview {\n        bottom: 0;\n        top: initial;\n        height: 87px; }\n\n.feed-message .text-block.small-message .preview img {\n          width: 155px;\n          height: 87px;\n          border-radius: 0 0 5px 5px; }\n\n.feed-message .message-header {\n    font-size: 12px;\n    padding-bottom: 5px; }\n\n.feed-message .message-header .author {\n      font-size: 13px;\n      padding-right: 5px; }\n\n.feed-message .message-content {\n    font-size: 18px;\n    line-height: 20px; }\n\n.feed-message .preview {\n    -webkit-transition: 0s linear all;\n    transition: 0s linear all;\n    display: inline-block; }\n\n.feed-message .preview img {\n      padding-top: 10px;\n      width: 100%;\n      height: auto;\n      float: none !important; }\n\n.feed-message .message-time {\n    width: 100%;\n    left: 0;\n    font-size: 11px;\n    padding-top: 10px;\n    color: #ffffff;\n    margin-bottom: 5px; }\n\n.feed-message .message-time .post-time {\n      float: left; }\n\n.feed-message .message-time .ago-time {\n      float: right; }\n\n.line-clamp {\n  display: block;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 !important; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .line-clamp:after {\n    content: '...';\n    text-align: right;\n    bottom: 0;\n    right: 0;\n    width: 25%;\n    display: block;\n    position: absolute;\n    height: calc(1em * 1.2); } }\n\n@supports (-webkit-line-clamp: 1) {\n  .line-clamp:after {\n    display: none !important; } }\n\n.line-clamp-1 {\n  -webkit-line-clamp: 1;\n  height: calc(1em * 1.2 * 1); }\n\n.line-clamp-2 {\n  -webkit-line-clamp: 2;\n  height: calc(1em * 1.2 * 2); }\n\n.line-clamp-3 {\n  -webkit-line-clamp: 3;\n  height: calc(1em * 1.2 * 3); }\n\n.line-clamp-4 {\n  -webkit-line-clamp: 4;\n  height: calc(1em * 1.2 * 4); }\n\n.line-clamp-5 {\n  -webkit-line-clamp: 5;\n  height: calc(1em * 1.2 * 5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/trainings/trainings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_training_service__ = __webpack_require__("../../../../../src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainingsComponent = (function () {
    function TrainingsComponent(_trainingService, userService, _router) {
        this._trainingService = _trainingService;
        this.userService = userService;
        this._router = _router;
    }
    TrainingsComponent.prototype.getTrainings = function () {
        var _this = this;
        this._trainingService.getTrainings().subscribe(function (trainings) { return _this.trainings = trainings; }, function (error) {
            _this.errorObj = error;
            if (_this.errorObj.status === 0) {
                _this.errorMessage = "Server is timedout, no connection";
            }
        });
    };
    TrainingsComponent.prototype.ngOnInit = function () {
        this.getTrainings();
    };
    TrainingsComponent.prototype.onSelect = function (training) {
        this.selectedTraining = training;
        training.showParticipants = training.showParticipants == true ? false : true;
    };
    TrainingsComponent.prototype.gotoDetail = function (id) {
        this._router.navigate(['/pages/training', id]);
    };
    TrainingsComponent.prototype.userIsAlreadySigned = function (training) {
        var _this = this;
        if (!this.userService.user) {
            return false;
        }
        return training.participants.some(function (participant) {
            if (participant && participant.email == _this.userService.user.email)
                return true;
        });
    };
    TrainingsComponent.prototype.signingToCourse = function (training) {
        var _this = this;
        if (this.userService.user) {
            this._trainingService.putParticipantToTraining(training._id, this.userService.user.name, this.userService.user.email).
                subscribe(function (res) {
                if (res.status === 201) {
                    // um doppelte Eintrage in participants zu vermeiden
                    if (!_this.userIsAlreadySigned(training)) {
                        // fuegen wir neuen Teilnehmer hinzu.
                        training.participants.push({ _id: '', name: _this.userService.user.name, email: _this.userService.user.email });
                    }
                }
            }, function (error) {
                _this.errorObj = error;
                if (_this.errorObj.status === 0) {
                    _this.errorMessage = "Server is timedout, no connection";
                }
            });
        }
    };
    TrainingsComponent.prototype.deleteParticipant = function (training_id, participant_id, index) {
        var _this = this;
        console.log(training_id, participant_id, index);
        this._trainingService.deleteParticipant(training_id, participant_id).
            subscribe(function (res) {
            if (res.status === 200) {
                console.log("deleted");
                _this.selectedTraining.participants.splice(index, 1);
            }
        });
    };
    return TrainingsComponent;
}());
TrainingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'trainings',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/trainings/trainings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/trainings/trainings.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ 'opacity': 1 })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ 'opacity': 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('800ms linear')
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-20%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500)
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_training_service__["a" /* TrainingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], TrainingsComponent);

var _a, _b, _c;
//# sourceMappingURL=trainings.component.js.map

/***/ }),

/***/ "../../../../angular2-moment/add.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var AddPipe = /** @class */ (function () {
    function AddPipe() {
    }
    AddPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return moment(value).add(amount, unit);
    };
    AddPipe = __decorate([
        core_1.Pipe({ name: 'amAdd' })
    ], AddPipe);
    return AddPipe;
}());
exports.AddPipe = AddPipe;
//# sourceMappingURL=add.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/calendar.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var CalendarPipe = /** @class */ (function () {
    function CalendarPipe(cdRef, ngZone) {
        var _this = this;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe_1.initTimer(ngZone);
        CalendarPipe_1.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe_1.midnight.subscribe(function () {
            _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
        });
    }
    CalendarPipe_1 = CalendarPipe;
    CalendarPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var formats = null;
        var referenceTime = null;
        for (var i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !moment.isMoment(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = momentConstructor(args[i]);
                }
            }
        }
        return momentConstructor(value).calendar(referenceTime, formats);
    };
    CalendarPipe.prototype.ngOnDestroy = function () {
        if (CalendarPipe_1.refs > 0) {
            CalendarPipe_1.refs--;
        }
        if (CalendarPipe_1.refs === 0) {
            CalendarPipe_1.removeTimer();
        }
        this.midnightSub.unsubscribe();
    };
    CalendarPipe.initTimer = function (ngZone) {
        // initialize the timer
        if (!CalendarPipe_1.midnight) {
            CalendarPipe_1.midnight = new core_1.EventEmitter();
            if (typeof window !== 'undefined') {
                var timeToUpdate_1 = CalendarPipe_1._getMillisecondsUntilUpdate();
                CalendarPipe_1.timer = ngZone.runOutsideAngular(function () {
                    return window.setTimeout(function () {
                        // emit the current date
                        CalendarPipe_1.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe_1.removeTimer();
                        CalendarPipe_1.initTimer(ngZone);
                    }, timeToUpdate_1);
                });
            }
        }
    };
    CalendarPipe.removeTimer = function () {
        if (CalendarPipe_1.timer) {
            window.clearTimeout(CalendarPipe_1.timer);
            CalendarPipe_1.timer = null;
            CalendarPipe_1.midnight = null;
        }
    };
    CalendarPipe._getMillisecondsUntilUpdate = function () {
        var now = momentConstructor();
        var tomorrow = momentConstructor().startOf('day').add(1, 'days');
        var timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    };
    /**
     * @private Internal reference counter, so we can clean up when no instances are in use
     * @type {number}
     */
    CalendarPipe.refs = 0;
    CalendarPipe = CalendarPipe_1 = __decorate([
        core_1.Pipe({ name: 'amCalendar', pure: false }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
    ], CalendarPipe);
    return CalendarPipe;
    var CalendarPipe_1;
}());
exports.CalendarPipe = CalendarPipe;
//# sourceMappingURL=calendar.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/date-format.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return '';
        return momentConstructor(value).format(args[0]);
    };
    DateFormatPipe = __decorate([
        core_1.Pipe({ name: 'amDateFormat' })
    ], DateFormatPipe);
    return DateFormatPipe;
}());
exports.DateFormatPipe = DateFormatPipe;
//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/difference.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var DifferencePipe = /** @class */ (function () {
    function DifferencePipe() {
    }
    DifferencePipe.prototype.transform = function (value, otherValue, unit, precision) {
        var date = momentConstructor(value);
        var date2 = (otherValue !== null) ? momentConstructor(otherValue) : momentConstructor();
        return date.diff(date2, unit, precision);
    };
    DifferencePipe = __decorate([
        core_1.Pipe({ name: 'amDifference' })
    ], DifferencePipe);
    return DifferencePipe;
}());
exports.DifferencePipe = DifferencePipe;
//# sourceMappingURL=difference.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/duration.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return moment.duration(value, args[0]).humanize();
    };
    DurationPipe = __decorate([
        core_1.Pipe({ name: 'amDuration' })
    ], DurationPipe);
    return DurationPipe;
}());
exports.DurationPipe = DurationPipe;
//# sourceMappingURL=duration.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/from-unix.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var FromUnixPipe = /** @class */ (function () {
    function FromUnixPipe() {
    }
    FromUnixPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return moment.unix(value);
    };
    FromUnixPipe = __decorate([
        core_1.Pipe({ name: 'amFromUnix' })
    ], FromUnixPipe);
    return FromUnixPipe;
}());
exports.FromUnixPipe = FromUnixPipe;
//# sourceMappingURL=from-unix.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/from-utc.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var FromUtcPipe = /** @class */ (function () {
    function FromUtcPipe() {
    }
    FromUtcPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return moment.utc(value);
    };
    FromUtcPipe = __decorate([
        core_1.Pipe({ name: 'amFromUtc' })
    ], FromUtcPipe);
    return FromUtcPipe;
}());
exports.FromUtcPipe = FromUtcPipe;
//# sourceMappingURL=from-utc.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var add_pipe_1 = __webpack_require__("../../../../angular2-moment/add.pipe.js");
exports.AddPipe = add_pipe_1.AddPipe;
var calendar_pipe_1 = __webpack_require__("../../../../angular2-moment/calendar.pipe.js");
exports.CalendarPipe = calendar_pipe_1.CalendarPipe;
var date_format_pipe_1 = __webpack_require__("../../../../angular2-moment/date-format.pipe.js");
exports.DateFormatPipe = date_format_pipe_1.DateFormatPipe;
var difference_pipe_1 = __webpack_require__("../../../../angular2-moment/difference.pipe.js");
exports.DifferencePipe = difference_pipe_1.DifferencePipe;
var duration_pipe_1 = __webpack_require__("../../../../angular2-moment/duration.pipe.js");
exports.DurationPipe = duration_pipe_1.DurationPipe;
var from_unix_pipe_1 = __webpack_require__("../../../../angular2-moment/from-unix.pipe.js");
exports.FromUnixPipe = from_unix_pipe_1.FromUnixPipe;
var parse_pipe_1 = __webpack_require__("../../../../angular2-moment/parse.pipe.js");
exports.ParsePipe = parse_pipe_1.ParsePipe;
var moment_module_1 = __webpack_require__("../../../../angular2-moment/moment.module.js");
exports.MomentModule = moment_module_1.MomentModule;
var subtract_pipe_1 = __webpack_require__("../../../../angular2-moment/subtract.pipe.js");
exports.SubtractPipe = subtract_pipe_1.SubtractPipe;
var time_ago_pipe_1 = __webpack_require__("../../../../angular2-moment/time-ago.pipe.js");
exports.TimeAgoPipe = time_ago_pipe_1.TimeAgoPipe;
var utc_pipe_1 = __webpack_require__("../../../../angular2-moment/utc.pipe.js");
exports.UtcPipe = utc_pipe_1.UtcPipe;
var from_utc_pipe_1 = __webpack_require__("../../../../angular2-moment/from-utc.pipe.js");
exports.FromUtcPipe = from_utc_pipe_1.FromUtcPipe;
var local_pipe_1 = __webpack_require__("../../../../angular2-moment/local.pipe.js");
exports.LocalTimePipe = local_pipe_1.LocalTimePipe;
var locale_pipe_1 = __webpack_require__("../../../../angular2-moment/locale.pipe.js");
exports.LocalePipe = locale_pipe_1.LocalePipe;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-moment/local.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var LocalTimePipe = /** @class */ (function () {
    function LocalTimePipe() {
    }
    LocalTimePipe.prototype.transform = function (value) {
        return moment(value).local();
    };
    LocalTimePipe = __decorate([
        core_1.Pipe({ name: 'amLocal' })
    ], LocalTimePipe);
    return LocalTimePipe;
}());
exports.LocalTimePipe = LocalTimePipe;
//# sourceMappingURL=local.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/locale.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var LocalePipe = /** @class */ (function () {
    function LocalePipe() {
    }
    LocalePipe.prototype.transform = function (value, locale) {
        return moment(value).locale(locale);
    };
    LocalePipe = __decorate([
        core_1.Pipe({ name: 'amLocale' })
    ], LocalePipe);
    return LocalePipe;
}());
exports.LocalePipe = LocalePipe;
//# sourceMappingURL=locale.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/moment.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var add_pipe_1 = __webpack_require__("../../../../angular2-moment/add.pipe.js");
var calendar_pipe_1 = __webpack_require__("../../../../angular2-moment/calendar.pipe.js");
var date_format_pipe_1 = __webpack_require__("../../../../angular2-moment/date-format.pipe.js");
var difference_pipe_1 = __webpack_require__("../../../../angular2-moment/difference.pipe.js");
var duration_pipe_1 = __webpack_require__("../../../../angular2-moment/duration.pipe.js");
var from_unix_pipe_1 = __webpack_require__("../../../../angular2-moment/from-unix.pipe.js");
var parse_pipe_1 = __webpack_require__("../../../../angular2-moment/parse.pipe.js");
var subtract_pipe_1 = __webpack_require__("../../../../angular2-moment/subtract.pipe.js");
var time_ago_pipe_1 = __webpack_require__("../../../../angular2-moment/time-ago.pipe.js");
var utc_pipe_1 = __webpack_require__("../../../../angular2-moment/utc.pipe.js");
var from_utc_pipe_1 = __webpack_require__("../../../../angular2-moment/from-utc.pipe.js");
var local_pipe_1 = __webpack_require__("../../../../angular2-moment/local.pipe.js");
var locale_pipe_1 = __webpack_require__("../../../../angular2-moment/locale.pipe.js");
var ANGULAR_MOMENT_PIPES = [
    add_pipe_1.AddPipe,
    calendar_pipe_1.CalendarPipe,
    date_format_pipe_1.DateFormatPipe,
    difference_pipe_1.DifferencePipe,
    duration_pipe_1.DurationPipe,
    from_unix_pipe_1.FromUnixPipe,
    parse_pipe_1.ParsePipe,
    subtract_pipe_1.SubtractPipe,
    time_ago_pipe_1.TimeAgoPipe,
    utc_pipe_1.UtcPipe,
    from_utc_pipe_1.FromUtcPipe,
    local_pipe_1.LocalTimePipe,
    locale_pipe_1.LocalePipe
];
var MomentModule = /** @class */ (function () {
    function MomentModule() {
    }
    MomentModule = __decorate([
        core_1.NgModule({
            declarations: ANGULAR_MOMENT_PIPES,
            exports: ANGULAR_MOMENT_PIPES
        })
    ], MomentModule);
    return MomentModule;
}());
exports.MomentModule = MomentModule;
//# sourceMappingURL=moment.module.js.map

/***/ }),

/***/ "../../../../angular2-moment/parse.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var ParsePipe = /** @class */ (function () {
    function ParsePipe() {
    }
    ParsePipe.prototype.transform = function (value, format) {
        return moment(value, format);
    };
    ParsePipe = __decorate([
        core_1.Pipe({ name: 'amParse' })
    ], ParsePipe);
    return ParsePipe;
}());
exports.ParsePipe = ParsePipe;
//# sourceMappingURL=parse.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/subtract.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var SubtractPipe = /** @class */ (function () {
    function SubtractPipe() {
    }
    SubtractPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return moment(value).subtract(amount, unit);
    };
    SubtractPipe = __decorate([
        core_1.Pipe({ name: 'amSubtract' })
    ], SubtractPipe);
    return SubtractPipe;
}());
exports.SubtractPipe = SubtractPipe;
//# sourceMappingURL=subtract.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/time-ago.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value, omitSuffix) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.removeTimer();
            this.createTimer();
            this.lastText = momentConstructor(value).from(momentConstructor(), omitSuffix);
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.createTimer = function () {
        var _this = this;
        if (this.currentTimer) {
            return;
        }
        var momentInstance = momentConstructor(this.lastValue);
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.lastText = momentConstructor(_this.lastValue).from(momentConstructor(), _this.lastOmitSuffix);
                    _this.currentTimer = null;
                    _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
                }, timeToUpdate);
            }
        });
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(momentConstructor().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    TimeAgoPipe.prototype.hasChanged = function (value, omitSuffix) {
        return this.getTime(value) !== this.lastTime || omitSuffix !== this.lastOmitSuffix;
    };
    TimeAgoPipe.prototype.getTime = function (value) {
        if (moment.isDate(value)) {
            return value.getTime();
        }
        else if (moment.isMoment(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor(value).valueOf();
        }
    };
    TimeAgoPipe = __decorate([
        core_1.Pipe({ name: 'amTimeAgo', pure: false }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=time-ago.pipe.js.map

/***/ }),

/***/ "../../../../angular2-moment/utc.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var UtcPipe = /** @class */ (function () {
    function UtcPipe() {
    }
    UtcPipe.prototype.transform = function (value) {
        return moment(value).utc();
    };
    UtcPipe = __decorate([
        core_1.Pipe({ name: 'amUtc' })
    ], UtcPipe);
    return UtcPipe;
}());
exports.UtcPipe = UtcPipe;
//# sourceMappingURL=utc.pipe.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map