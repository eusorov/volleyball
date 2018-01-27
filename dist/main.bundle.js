webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./contact/contact.module": [
		"../../../../../src/app/pages/contact/contact.module.ts",
		"contact.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/pages/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./training-detail/training-detail.module": [
		"../../../../../src/app/pages/training-detail/training-detail.module.ts",
		"common",
		"training-detail.module"
	],
	"app/pages/login/login.module": [
		"../../../../../src/app/pages/login/login.module.ts",
		"login.module"
	],
	"app/pages/register/register.module": [
		"../../../../../src/app/pages/register/register.module.ts",
		"register.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n\n:host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n\n:host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n\n:host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n\n:host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n\n:host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n\n:host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n\n:host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    -webkit-transition: -webkit-transform 0.2s linear;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n\n:host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  -webkit-transition-property: top, height;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n\n@media (min-width: 1200px) {\n  :host /deep/ .menu-collapsed .al-main {\n    margin-left: 50px; }\n  :host /deep/ .menu-collapsed .al-footer {\n    padding-left: 83px; } }\n\n@media (max-width: 1200px) and (min-width: 500px) {\n  :host /deep/ .al-main {\n    margin-left: 50px; }\n  :host /deep/ .al-footer {\n    padding-left: 83px; } }\n\n@media (min-width: 501px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 52px; }\n    :host /deep/ .menu-collapsed .al-sidebar .fa-angle-down, :host /deep/ .menu-collapsed .al-sidebar .fa-angle-up {\n      opacity: 0; }\n    :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist {\n      position: absolute;\n      top: -1px;\n      left: 52px;\n      background: rgba(0, 0, 0, 0.8);\n      width: 0;\n      display: block;\n      overflow: hidden;\n      -webkit-transition: width 0.5s ease;\n      transition: width 0.5s ease; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist.slide-right {\n        width: 135px; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li a {\n        padding-left: 18px;\n        padding-right: 18px;\n        min-width: 130px;\n        white-space: nowrap; }\n    :host /deep/ .menu-collapsed .al-sidebar .sidebar-hover-elem, :host /deep/ .menu-collapsed .al-sidebar .sidebar-select-elem {\n      left: 48px; } }\n\n@media (max-width: 1200px) {\n  :host /deep/ .al-sidebar {\n    width: 180px;\n    background: rgba(0, 0, 0, 0.75);\n    -webkit-transition: width 0.5s ease;\n    transition: width 0.5s ease; }\n    :host /deep/ .al-sidebar .fa-angle-down, :host /deep/ .al-sidebar .fa-angle-up {\n      opacity: 1; }\n    :host /deep/ .al-sidebar .al-sidebar-sublist {\n      padding: 0;\n      list-style: none;\n      position: relative;\n      display: none;\n      top: auto;\n      left: auto;\n      background: none;\n      width: auto;\n      overflow: visible;\n      -webkit-transition: none;\n      transition: none; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist.expanded {\n        display: block; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li {\n        display: block;\n        float: none;\n        padding: 0;\n        border-bottom: none;\n        position: relative; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a {\n          display: block;\n          text-shadow: none;\n          font-size: 13px;\n          text-decoration: none;\n          color: #ffffff;\n          padding-left: 52px;\n          height: auto;\n          line-height: 29px; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a:hover {\n            color: #00abff; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n          border: none;\n          background-color: #00abff; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n            color: #ffffff; }\n    :host /deep/ .al-sidebar .sidebar-hover-elem, :host /deep/ .al-sidebar .sidebar-select-elem {\n      left: 176px;\n      -webkit-transition: left 0.5s ease;\n      transition: left 0.5s ease; } }\n\n@media (max-width: 500px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 0; }\n  :host /deep/ .menu-collapsed .sidebar-hover-elem, :host /deep/ .menu-collapsed .sidebar-select-elem {\n    display: none; }\n  :host /deep/ .al-main {\n    margin-left: 0; }\n  :host /deep/ .al-footer {\n    padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(_state, _imageLoader, _spinner, viewContainerRef, _userService, themeConfig) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this.viewContainerRef = viewContainerRef;
        this._userService = _userService;
        this.themeConfig = themeConfig;
        this.isMenuCollapsed = false;
        themeConfig.config();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        this._userService.authenticated().subscribe(function (data) {
            if (data.authenticated) {
                _this._userService.getMe().subscribe();
            }
        });
    }
    App.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    App.prototype._loadImages = function () {
        // register some loaders
        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].registerLoader(this._imageLoader.load('assets/img/sky-bg.jpg'));
    };
    return App;
}());
App = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        template: "\n    <main [class.menu-collapsed]=\"isMenuCollapsed\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["a" /* BaImageLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["a" /* BaImageLoaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */]) === "function" && _f || Object])
], App);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_training_service__ = __webpack_require__("../../../../../src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component







// Application wide providers
var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_9__global_state__["a" /* GlobalState */],
    __WEBPACK_IMPORTED_MODULE_12__services_training_service__["a" /* TrainingService */],
    __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appState) {
        this.appState = appState;
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* App */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* App */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__theme_nga_module__["a" /* NgaModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */]
        ],
        providers: [
            APP_PROVIDERS
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
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

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppState);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.translation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTranslationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/US/', '.json');
}
var translationOptions = {
    loader: {
        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
        useFactory: (createTranslateLoader),
        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]
    }
};
var AppTranslationModule = (function () {
    function AppTranslationModule(translate) {
        this.translate = translate;
        translate.addLangs(["en"]);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    return AppTranslationModule;
}());
AppTranslationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot(translationOptions)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppTranslationModule);

var _a;
//# sourceMappingURL=app.translation.module.js.map

/***/ }),

/***/ "../../../../../src/app/global.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalState = (function () {
    function GlobalState() {
        var _this = this;
        this._data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    GlobalState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    GlobalState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    return GlobalState;
}());
GlobalState = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GlobalState);

//# sourceMappingURL=global.state.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages.menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pages = (function () {
    function Pages(_menuService) {
        this._menuService = _menuService;
    }
    Pages.prototype.ngOnInit = function () {
        this._menuService.updateMenuByRoutes(__WEBPACK_IMPORTED_MODULE_2__pages_menu__["a" /* PAGES_MENU */]);
    };
    return Pages;
}());
Pages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pages',
        template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      <div class=\"al-footer-right\" translate>{{'general.created_with'}} <i class=\"ion-heart\"></i></div>\n      <div class=\"al-footer-main clearfix\">\n        <div class=\"al-copy\">&copy; EUsorov, admin panel: <a href=\"http://akveo.com\" translate>{{'general.akveo'}}</a> 2016</div>\n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */]) === "function" && _a || Object])
], Pages);

var _a;
//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES_MENU; });
var PAGES_MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Trainings',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'contact',
                data: {
                    menu: {
                        title: 'contact',
                        icon: 'ion-edit',
                        selected: false,
                        expanded: false,
                        order: 100,
                    }
                }
            },
        ]
    }
];
//# sourceMappingURL=pages.menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */], __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */], __WEBPACK_IMPORTED_MODULE_2__pages_routing__["a" /* routing */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__pages_component__["a" /* Pages */]]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");


// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
var routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/pages/register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* Pages */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'training', loadChildren: './training-detail/training-detail.module' },
            { path: 'contact', loadChildren: './contact/contact.module' }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/services/mock-training.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PARTICIPANTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRAININGS; });
var PARTICIPANTS = [
    { "_id": "1",
        "name": "Mr. Profi",
        "email": "profi@volleyball.com"
    },
    { "_id": "2",
        "name": "Mr. Semiprofi ",
        "email": "semiprofi@volleyball.com"
    },
    { "_id": "3",
        "name": "Frau Anfaengerin",
        "email": "anfaengerin@volleyball.com"
    }
];
var TRAININGS = [
    { "_id": "1",
        "weekday": "Mo",
        "timeFrom": "2010-01-01T18:00:00.000Z",
        "timeTill": "2010-01-01T18:00:00.000Z",
        "timeFromHour": 16,
        "timeFromMinute": 0,
        "timeTillHour": 20,
        "timeTillMinute": 0,
        "level": "F",
        "trainername": "Super Trainer",
        "capacity": 10,
        participants: PARTICIPANTS,
        availableFrom: "2010-01-01T18:00:00.000Z",
        availableTill: "2010-01-10T18:00:00.000Z",
        placeStr: "SouthBeach",
        showParticipants: false
    },
    { "_id": "2",
        "weekday": "Mo",
        "timeFrom": "2010-01-01T18:00:00.000Z",
        "timeTill": "2010-01-01T18:00:00.000Z",
        "timeFromHour": 17,
        "timeFromMinute": 0,
        "timeTillHour": 21,
        "timeTillMinute": 0,
        "level": "A2",
        "trainername": "Guter Trainer",
        "capacity": 20,
        participants: PARTICIPANTS,
        availableFrom: "2010-01-01T18:00:00.000Z",
        availableTill: "2010-01-10T18:00:00.000Z",
        placeStr: "SouthBeach",
        showParticipants: false
    },
    { "_id": "4",
        "weekday": "Mo",
        "timeFrom": "2010-01-01T18:00:00.000Z",
        "timeTill": "2010-01-01T18:00:00.000Z",
        "timeFromHour": 17,
        "timeFromMinute": 0,
        "timeTillHour": 21,
        "timeTillMinute": 0,
        "level": "A2",
        "trainername": "Mr. Meister",
        "capacity": 20,
        participants: PARTICIPANTS,
        availableFrom: "2010-01-01T18:00:00.000Z",
        availableTill: "2010-01-10T18:00:00.000Z",
        placeStr: "SouthBeach",
        showParticipants: false
    },
    { "_id": "5",
        "weekday": "Do",
        "timeFrom": "2010-01-01T18:00:00.000Z",
        "timeTill": "2010-01-01T18:00:00.000Z",
        "timeFromHour": 17,
        "timeFromMinute": 0,
        "timeTillHour": 21,
        "timeTillMinute": 0,
        "level": "A2",
        "trainername": "Mr. Meister",
        "capacity": 20,
        participants: PARTICIPANTS,
        availableFrom: "2010-01-01T18:00:00.000Z",
        availableTill: "2010-01-10T18:00:00.000Z",
        placeStr: "SouthBeach",
        showParticipants: false
    },
    { "_id": "6",
        "weekday": "Do",
        "timeFrom": "2010-01-01T18:00:00.000Z",
        "timeTill": "2010-01-01T18:00:00.000Z",
        "timeFromHour": 17,
        "timeFromMinute": 0,
        "timeTillHour": 21,
        "timeTillMinute": 0,
        "level": "F",
        "trainername": "Mr. Meister",
        "capacity": 20,
        participants: PARTICIPANTS,
        availableFrom: "2010-01-01T18:00:00.000Z",
        availableTill: "2010-01-10T18:00:00.000Z",
        placeStr: "SouthBeach",
        showParticipants: false
    },
    { "_id": "7",
        "weekday": "Do",
        "timeFrom": "2010-01-01T12:00:00.000Z",
        "timeTill": "2010-01-01T13:00:00.000Z",
        "timeFromHour": 17,
        "timeFromMinute": 0,
        "timeTillHour": 21,
        "timeTillMinute": 0,
        "level": "F",
        "trainername": "Mr. Meister",
        "capacity": 20,
        participants: PARTICIPANTS,
        availableFrom: "2010-01-01T18:00:00.000Z",
        availableTill: "2010-01-10T18:00:00.000Z",
        placeStr: "SouthBeach",
        showParticipants: false
    },
    { "_id": "8",
        "weekday": "Fr",
        "timeFrom": "2010-01-01T12:00:00.000Z",
        "timeTill": "2010-01-01T13:00:00.000Z",
        "timeFromHour": 17,
        "timeFromMinute": 0,
        "timeTillHour": 21,
        "timeTillMinute": 0,
        "level": "F",
        "trainername": "Mr. Meister",
        "capacity": 20,
        participants: PARTICIPANTS,
        availableFrom: "2010-01-01T18:00:00.000Z",
        availableTill: "2010-01-10T18:00:00.000Z",
        placeStr: "SouthBeach",
        showParticipants: false
    }
];
//# sourceMappingURL=mock-training.js.map

/***/ }),

/***/ "../../../../../src/app/services/training.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_training__ = __webpack_require__("../../../../../src/app/services/mock-training.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrainingService = (function () {
    function TrainingService(http) {
        this.http = http;
        this.trainingsUrl = '/api/trainings'; // URL to web API
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    TrainingService.prototype.getTrainingsMock = function () {
        var trainings = new Array(1);
        trainings[0] = __WEBPACK_IMPORTED_MODULE_3__mock_training__["a" /* TRAININGS */];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(trainings);
    };
    TrainingService.prototype.getTrainings = function () {
        return this.http.get(this.trainingsUrl)
            .map(this.extractData);
    };
    TrainingService.prototype.getMyTrainings = function (email) {
        return this.http.get(this.trainingsUrl + '/me')
            .map(this.extractData);
    };
    TrainingService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json();
        return body || {};
    };
    TrainingService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    // See the "Take it slow" appendix
    TrainingService.prototype.getTrainingsSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(__WEBPACK_IMPORTED_MODULE_3__mock_training__["a" /* TRAININGS */]); }, 2000);
        } // 2 seconds
        );
    };
    TrainingService.prototype.getTraining = function (id) {
        console.log("Aufruf von " + this.trainingsUrl + "/" + id);
        return this.http.get(this.trainingsUrl + "/" + id)
            .map(this.extractData);
    };
    /**
     * PUT = Aendern, wenn ID vorhanden ist, oder neu Hinzufuegen wenn noch keine ID vorhanden ist
     */
    TrainingService.prototype.putTraining = function (training) {
        console.log(training._id);
        if (training._id && training._id.length > 0) {
            return this.http.put(this.trainingsUrl + "/" + training._id, JSON.stringify(training), { headers: this.headers })
                .subscribe(function () { return console.log('POST/PUT Complete'); });
        }
        else {
            // hinzufuegen, das Training wird als Array uebertragen
            delete training._id;
            var newTrainings = new Array();
            newTrainings.push(training);
            return this.http.post(this.trainingsUrl, JSON.stringify(newTrainings), { headers: this.headers })
                .subscribe(function () { return console.log('POST/PUT Complete'); });
        }
    };
    /**
     * add participant to training
     */
    TrainingService.prototype.putParticipantToTraining = function (_id, username, email) {
        if (_id) {
            var participants = new Array();
            participants.push({ _id: '', name: username, email: email });
            return this.http.post(this.trainingsUrl + "/" + _id + "/participants", JSON.stringify(participants), { headers: this.headers });
        }
    };
    TrainingService.prototype.deleteTraining = function (_id) {
        console.log(_id);
        if (_id) {
            console.log(_id);
            return this.http.delete(this.trainingsUrl + "/" + _id, { headers: this.headers });
        }
    };
    TrainingService.prototype.deleteParticipant = function (training_id, participant_id) {
        if (training_id) {
            console.log(training_id, participant_id);
            return this.http.delete(this.trainingsUrl + "/" + training_id + "/participants/" + participant_id, { headers: this.headers });
        }
    };
    return TrainingService;
}());
TrainingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TrainingService);

var _a;
//# sourceMappingURL=training.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// user.service.ts






var UserService = (function () {
    function UserService(http, _state) {
        this.http = http;
        this._state = _state;
        //private _authenticatedApi = this._apiBase + '/api/authenticated';
        this._authenticatedApi = '/api/authenticated';
        this._logoutApi = '/api/logout';
        this._meApi = '/api/users/me';
        this._signupApi = '/api/signup';
        this._loginApi = '/api/login';
        //  this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.signup = function (user, captcha) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this._signupApi, JSON.stringify({ email: user.email, password: user.password, name: user.name, captcha: captcha }), { headers: headers, withCredentials: true })
            .map(function (res) {
            var user;
            user = res.json();
            user.isadmin = user.groups.some(function (group) {
                if (group.name === "admin")
                    return true;
            });
            _this.user = user;
            _this._state.notifyDataChanged('isLoggedIn', true);
            _this._state.notifyDataChanged('user.loggedin', user);
            return user;
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || "Server Error");
    };
    UserService.prototype.authenticated = function () {
        var _this = this;
        return this.http.get(this._authenticatedApi, { withCredentials: true })
            .map(function (res) {
            console.log(" is logged!");
            _this._state.notifyDataChanged('isLoggedIn', true);
            return res.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this._logoutApi, { withCredentials: true })
            .map(function (res) {
            delete _this.user;
            _this._state.notifyDataChanged('isLoggedIn', false);
            _this._state.notifyDataChanged('user.loggedin', null);
            return res.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._loginApi, JSON.stringify({ 'email': email, 'password': password }), { headers: headers, withCredentials: true })
            .map(function (res) {
            var user;
            user = res.json();
            user.isadmin = user.groups.some(function (group) {
                if (group.name === "admin")
                    return true;
            });
            _this.user = user;
            _this._state.notifyDataChanged('user.loggedin', user);
            return user;
        })
            .catch(this.handleError);
    };
    UserService.prototype.loginWithProvider = function (provider) {
        // es reicht hier in der url die Adresse
        window.location.href = '/auth/' + provider;
    };
    UserService.prototype.getMe = function () {
        var _this = this;
        return this.http.get(this._meApi, { withCredentials: true })
            .map(function (res) {
            var user;
            user = res.json();
            user.isadmin = user.groups.some(function (group) {
                if (group.name === "admin")
                    return true;
            });
            _this.user = user;
            _this._state.notifyDataChanged('user.loggedin', user);
            return _this.user;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/baBackTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaBackTop; });
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

var BaBackTop = (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    return BaBackTop;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "position", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "showSpeed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "moveSpeed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('baBackTop'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BaBackTop.prototype, "_selector", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BaBackTop.prototype, "_onClick", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaBackTop.prototype, "_onWindowScroll", null);
BaBackTop = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-back-top',
        styles: [__webpack_require__("../../../../../src/app/theme/components/baBackTop/baBackTop.scss")],
        template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
    })
], BaBackTop);

var _a;
//# sourceMappingURL=baBackTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/baBackTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ba-back-top {\n  position: fixed;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 45px;\n  text-align: center;\n  opacity: 0.4;\n  color: #00abff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  line-height: 46px; }\n  .ba-back-top:hover {\n    opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baBackTop/baBackTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCard; });
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

var BaCard = (function () {
    function BaCard() {
    }
    return BaCard;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaCard.prototype, "cardTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaCard.prototype, "baCardClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaCard.prototype, "cardType", void 0);
BaCard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-card',
        template: __webpack_require__("../../../../../src/app/theme/components/baCard/baCard.html"),
    })
], BaCard);

//# sourceMappingURL=baCard.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCard.html":
/***/ (function(module, exports) {

module.exports = "<div baCardBlur class=\"animated fadeIn card {{cardType}} {{baCardClass || ''}}\" zoom-in>\r\n    <div *ngIf=\"cardTitle\" class=\"card-header clearfix\">\r\n        <h3 class=\"card-title\" translate>{{cardTitle}}</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCardBlur.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCardBlur; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCardBlurHelper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaCardBlur = (function () {
    function BaCardBlur(_baConfig, _baCardBlurHelper, _el) {
        this._baConfig = _baConfig;
        this._baCardBlurHelper = _baCardBlurHelper;
        this._el = _el;
        this.isEnabled = false;
        if (this._isEnabled()) {
            this._baCardBlurHelper.init();
            this._getBodyImageSizesOnBgLoad();
            this._recalculateCardStylesOnBgLoad();
            this.isEnabled = true;
        }
    }
    BaCardBlur.prototype._onWindowResize = function () {
        if (this._isEnabled()) {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    };
    BaCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function () {
            _this._bodyBgSize = _this._baCardBlurHelper.getBodyBgImageSizes();
        });
    };
    BaCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function (event) {
            setTimeout(_this._recalculateCardStyle.bind(_this));
        });
    };
    BaCardBlur.prototype._recalculateCardStyle = function () {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    };
    BaCardBlur.prototype._isEnabled = function () {
        return this._baConfig.get().theme.name == 'blur';
    };
    return BaCardBlur;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.card-blur'),
    __metadata("design:type", Boolean)
], BaCardBlur.prototype, "isEnabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaCardBlur.prototype, "_onWindowResize", null);
BaCardBlur = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[baCardBlur]',
        providers: [__WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], BaCardBlur);

var _a, _b, _c;
//# sourceMappingURL=baCardBlur.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCardBlurHelper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCardBlurHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaCardBlurHelper = (function () {
    function BaCardBlurHelper() {
    }
    BaCardBlurHelper.prototype.init = function () {
        this._genBgImage();
        this._genImageLoadSubject();
    };
    BaCardBlurHelper.prototype.bodyBgLoad = function () {
        return this.imageLoadSubject;
    };
    BaCardBlurHelper.prototype.getBodyBgImageSizes = function () {
        var elemW = document.documentElement.clientWidth;
        var elemH = document.documentElement.clientHeight;
        if (elemW <= 640)
            return;
        var imgRatio = (this.image.height / this.image.width); // original img ratio
        var containerRatio = (elemH / elemW); // container ratio
        var finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        }
        else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2 };
    };
    BaCardBlurHelper.prototype._genBgImage = function () {
        this.image = new Image();
        var computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    };
    BaCardBlurHelper.prototype._genImageLoadSubject = function () {
        var _this = this;
        this.imageLoadSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.image.onerror = function (err) {
            _this.imageLoadSubject.complete();
        };
        this.image.onload = function () {
            _this.imageLoadSubject.next(null);
            _this.imageLoadSubject.complete();
        };
    };
    return BaCardBlurHelper;
}());
BaCardBlurHelper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BaCardBlurHelper);

//# sourceMappingURL=baCardBlurHelper.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baCard_component__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baCard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaContentTop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaContentTop = (function () {
    function BaContentTop(_state) {
        var _this = this;
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', function (activeLink) {
            if (activeLink) {
                _this.activePageTitle = activeLink.title;
            }
        });
    }
    return BaContentTop;
}());
BaContentTop = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-content-top',
        styles: [__webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.scss")],
        template: __webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object])
], BaContentTop);

var _a;
//# sourceMappingURL=baContentTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-top clearfix\">\r\n  <h1 class=\"al-title\" translate>{{ activePageTitle }}</h1>\r\n\r\n<!--\r\n  <ul class=\"breadcrumb al-breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/pages/dashboard\" translate>{{'general.home'}}</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" translate>{{ activePageTitle }}</li>\r\n  </ul>\r\n-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-top {\n  padding-top: 13px;\n  padding-bottom: 27px; }\n\nh1.al-title {\n  font-weight: 700;\n  color: #ffffff;\n  float: left;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: uppercase;\n  opacity: 0.9; }\n\n.al-breadcrumb {\n  background: none;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  float: right;\n  padding-top: 11px; }\n\n.al-breadcrumb li {\n    font-size: 18px;\n    font-weight: 400; }\n\n.al-breadcrumb li a {\n      color: #4dc4ff; }\n\n.al-breadcrumb li.breadcrumb-item.active {\n      color: #ffffff; }\n\n.al-look {\n  float: right;\n  margin-right: 10px;\n  padding-top: 10px; }\n\n.al-look > a {\n    font-size: 19px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaMenu = (function () {
    function BaMenu(_router, _service, _state) {
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.sidebarCollapsed = false;
        this.expandMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.outOfArea = -200;
    }
    BaMenu.prototype.updateMenu = function (newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    };
    BaMenu.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    BaMenu.prototype.ngOnInit = function () {
        var _this = this;
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (_this.menuItems) {
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    };
    BaMenu.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    };
    BaMenu.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    BaMenu.prototype.toggleSubMenu = function ($event) {
        var submenu = jQuery($event.currentTarget).next();
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
        return false;
    };
    return BaMenu;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], BaMenu.prototype, "sidebarCollapsed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BaMenu.prototype, "menuHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BaMenu.prototype, "expandMenu", void 0);
BaMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-menu',
        template: __webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* BaMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */]) === "function" && _c || Object])
], BaMenu);

var _a, _b, _c;
//# sourceMappingURL=baMenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"al-sidebar-list\" class=\"al-sidebar-list\" baSlimScroll [baSlimScrollOptions]=\"{height: menuHeight}\"\r\n    (mouseleave)=\"hoverElemTop=outOfArea\">\r\n  <ba-menu-item\r\n    [menuItem]=\"item\"\r\n    (itemHover)=\"hoverItem($event)\"\r\n    (toggleSubMenu)=\"toggleSubMenu($event)\"\r\n    *ngFor=\"let item of menuItems\"></ba-menu-item>\r\n</ul>\r\n<div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\r\n     [ngClass]=\"{'show-hover-elem': showHoverElem }\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenuItem; });
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

var BaMenuItem = (function () {
    function BaMenuItem() {
        this.child = false;
        this.itemHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleSubMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BaMenuItem.prototype.onHoverItem = function ($event) {
        this.itemHover.emit($event);
    };
    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    };
    return BaMenuItem;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "menuItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], BaMenuItem.prototype, "child", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "itemHover", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "toggleSubMenu", void 0);
BaMenuItem = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-menu-item',
        template: __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss")]
    })
], BaMenuItem);

//# sourceMappingURL=baMenuItem.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html":
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"!menuItem.hidden\" [title]=\"menuItem.title | translate\" [ngClass]=\"{'al-sidebar-list-item': !child, 'ba-sidebar-sublist-item': child, 'selected': menuItem.selected && !menuItem.expanded, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}\">\r\n\r\n  <a *ngIf=\"!menuItem.children && !menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [routerLink]=\"menuItem.route.paths\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"!menuItem.children && menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [href]=\"menuItem.url\" [target]=\"menuItem.target\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.children\" (mouseenter)=\"onHoverItem($event, item)\" href (click)=\"onToggleSubMenu($event, menuItem)\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n    <b class=\"fa fa-angle-down\" [ngClass]=\"{'fa-angle-up': menuItem.expanded}\"></b>\r\n  </a>\r\n\r\n  <ul *ngIf=\"menuItem.children\" class=\"al-sidebar-sublist\" [ngClass]=\"{'slide-right': menuItem.slideRight}\">\r\n    <ba-menu-item [menuItem]=\"subItem\"\r\n                  [child]=\"true\"\r\n                  (itemHover)=\"onHoverItem($event)\"\r\n                  (toggleSubMenu)=\"onToggleSubMenu($event, subItem)\"\r\n                  *ngFor=\"let subItem of menuItem.children\"></ba-menu-item>\r\n  </ul>\r\n\r\n</li>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_component__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMsgCenter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__ = __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaMsgCenter = (function () {
    function BaMsgCenter(_baMsgCenterService) {
        this._baMsgCenterService = _baMsgCenterService;
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }
    return BaMsgCenter;
}());
BaMsgCenter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-msg-center',
        providers: [__WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */]],
        styles: [__webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.scss")],
        template: __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */]) === "function" && _a || Object])
], BaMsgCenter);

var _a;
//# sourceMappingURL=baMsgCenter.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"al-msg-center clearfix\">\r\n  <li class=\"dropdown\">\r\n    <a href class=\"dropdown-toggle\" id=\"msg-dd1\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-bell-o\"></i><span>{{ notifications.length }}</span>\r\n\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd1\">\r\n      <i class=\"dropdown-arr\"></i>\r\n\r\n      <div class=\"header clearfix\">\r\n        <strong>Notifications</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of notifications\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all notifications</a>\r\n    </div>\r\n  </li>\r\n  <li class=\"dropdown\">\r\n    <a href class=\"msg dropdown-toggle\" id=\"msg-dd2\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-envelope-o\"></i><span>{{ messages.length }}</span>\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd2\">\r\n      <i class=\"dropdown-arr\"></i>\r\n      <div class=\"header clearfix\">\r\n        <strong>Messages</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of messages\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all messages</a>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n.al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n.al-msg-center li:first-child {\n      margin-left: 0; }\n.al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n.al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n.al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        -webkit-animation: pulsate 8s ease-out;\n                animation: pulsate 8s ease-out;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        opacity: 0.0; }\n.al-msg-center li > a:hover {\n        color: #f95372; }\n.al-msg-center li > a:hover.msg {\n          color: #00abff; }\n.al-msg-center li > a.msg span {\n        background-color: #00abff; }\n.al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n.al-msg-center li.open > a {\n      color: #f95372; }\n.al-msg-center li.open > a.msg {\n        color: #00abff; }\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n.top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n.top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n.top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n.top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n.top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n.top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n.top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n.top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n.top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n.top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n.top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n.top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n.top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n.top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n.top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n.top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n.top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n.top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n.top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n.top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n.top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n.top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n.top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n.top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n.top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n.top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n.top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n.top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n.top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n.top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n.top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n.top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMsgCenterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaMsgCenterService = (function () {
    function BaMsgCenterService() {
        this._notifications = [
            {
                name: 'Vlad',
                text: 'Vlad posted a new article.',
                time: '1 min ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya changed his contact information.',
                time: '2 hrs ago'
            },
            {
                image: 'assets/img/shopping-cart.svg',
                text: 'New orders received.',
                time: '5 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Andrey replied to your comment.',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Today is Nasta\'s birthday.',
                time: '2 days ago'
            },
            {
                image: 'assets/img/comments.svg',
                text: 'New comments on your post.',
                time: '3 days ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya invited you to join the event.',
                time: '1 week ago'
            }
        ];
        this._messages = [
            {
                name: 'Nasta',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'Vlad',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'Kostya',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'Kostya',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'Vlad',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
    }
    BaMsgCenterService.prototype.getMessages = function () {
        return this._messages;
    };
    BaMsgCenterService.prototype.getNotifications = function () {
        return this._notifications;
    };
    return BaMsgCenterService;
}());
BaMsgCenterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BaMsgCenterService);

//# sourceMappingURL=baMsgCenter.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMsgCenter/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMsgCenter_component__ = __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/baMsgCenter.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMsgCenter_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaPageTop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaPageTop = (function () {
    function BaPageTop(_state, _userService) {
        var _this = this;
        this._state = _state;
        this._userService = _userService;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        this._state.subscribe('user.loggedin', function (user) {
            _this.user = user;
        });
    }
    BaPageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    };
    BaPageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    BaPageTop.prototype.logout = function () {
        this._userService.logout().subscribe(function (data) { });
        this._state.notifyDataChanged('user.loggedin', null);
        this._state.notifyDataChanged('isLoggedIn', false);
        delete this.user;
    };
    return BaPageTop;
}());
BaPageTop = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-page-top',
        template: __webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], BaPageTop);

var _a, _b;
//# sourceMappingURL=baPageTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top clearfix\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\r\n     [ngClass]=\"{scrolled: isScrolled}\">\r\n  <a routerLink=\"/pages/dashboard\" class=\"al-logo clearfix\"><span>Volley</span>ball</a>\r\n  <a href (click)=\"toggleMenu()\" class=\"collapse-menu-link ion-navicon\"></a>\r\n<!--\r\n\r\n  <div class=\"search\">\r\n    <i class=\"ion-ios-search-strong\" ng-click=\"startSearch()\"></i>\r\n    <input id=\"searchInput\" type=\"text\" placeholder=\"Search for...\">\r\n  </div>\r\n-->\r\n  <a *ngIf=\"!user\" [routerLink]=\"['/login']\" class=\"al-logo float-right\" title=\"Login\"><span style=\"color:white;\"><i class=\"fa fa-power-off\"></i></span></a>\r\n\r\n  <div *ngIf=\"user\" class=\"user-profile clearfix\" >\r\n  <div class=\"user-profile clearfix\">\r\n    <div class=\"dropdown al-user-profile\">\r\n      <a *ngIf=\"user.profile_picture\" class=\"profile-toggle-link dropdown-toggle\" id=\"user-profile-dd1\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n        <img *ngIf=\"user.profile_picture\" src=\"{{ user.profile_picture  }}\">\r\n      </a>\r\n      <a *ngIf=\"!user.profile_picture\" id=\"user-profile-dd2\" data-toggle=\"dropdown\" aria-expanded=\"false\"\r\n        style=\"font-size:24px;   margin-top: 8px; color:white;\">\r\n        <i *ngIf=\"!user.profile_picture\" class=\"fa fa-user\"></i>\r\n      </a>\r\n      <ul class=\"dropdown-menu top-dropdown-menu profile-dropdown\" aria-labelledby=\"user-profile-dd\">\r\n        <!-- <li class=\"dropdown-item\"><a href><i class=\"fa fa-user\"></i>Profile</a></li> -->\r\n        <li class=\"dropdown-item\"><a href class=\"signout\"><i class=\"fa fa-power-off\"></i>Sign out</a></li>\r\n      </ul>\r\n    </div>\r\n    <ba-msg-center></ba-msg-center>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n.al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n.al-msg-center li:first-child {\n      margin-left: 0; }\n.al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n.al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n.al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        -webkit-animation: pulsate 8s ease-out;\n                animation: pulsate 8s ease-out;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        opacity: 0.0; }\n.al-msg-center li > a:hover {\n        color: #f95372; }\n.al-msg-center li > a:hover.msg {\n          color: #00abff; }\n.al-msg-center li > a.msg span {\n        background-color: #00abff; }\n.al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n.al-msg-center li.open > a {\n      color: #f95372; }\n.al-msg-center li.open > a.msg {\n        color: #00abff; }\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n.top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n.top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n.top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n.top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n.top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n.top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n.top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n.top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n.top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n.top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n.top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n.top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n.top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n.top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n.top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n.top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n.top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n.top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n.top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n.top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n.top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n.top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n.top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n.top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n.top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n.top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n.top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n.top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n.top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n.top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n.top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n.top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n:host /deep/ .page-top {\n  background-color: #282828;\n  position: fixed;\n  z-index: 904;\n  -webkit-box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n          box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  height: 66px;\n  width: 100%;\n  min-width: 320px;\n  padding: 0 32px 0 40px; }\n:host /deep/ .page-top .dropdown-toggle::after {\n    display: none; }\n:host /deep/ .blur .page-top.scrolled {\n  background-color: rgba(0, 0, 0, 0.85); }\n:host /deep/ a.al-logo {\n  color: #ffffff;\n  display: block;\n  font-size: 24px;\n  font-family: \"Roboto\", sans-serif;\n  white-space: nowrap;\n  float: left;\n  outline: none !important;\n  line-height: 60px; }\n:host /deep/ a.al-logo span {\n    color: #00abff; }\n:host /deep/ a.al-logo:hover {\n  color: #00abff; }\n:host /deep/ .user-profile {\n  float: right;\n  min-width: 230px;\n  margin-top: 10px; }\n:host /deep/ .al-user-profile {\n  float: right;\n  margin-right: 12px;\n  -webkit-transition: all .15s ease-in-out;\n  transition: all .15s ease-in-out;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  opacity: 1;\n  position: relative; }\n:host /deep/ .al-user-profile ul.profile-dropdown:after {\n    bottom: 100%;\n    right: 0;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #fff;\n    border-width: 10px;\n    margin-right: 28px; }\n:host /deep/ .al-user-profile a {\n    display: block; }\n:host /deep/ .al-user-profile img {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%; }\n:host /deep/ a.refresh-data {\n  color: #ffffff;\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 400;\n  float: right;\n  margin-top: 13px;\n  margin-right: 26px; }\n:host /deep/ a.refresh-data:hover {\n    color: #e7ba08 !important; }\n:host /deep/ a.collapse-menu-link {\n  font-size: 31px;\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  line-height: 42px;\n  color: #ffffff;\n  padding: 0;\n  float: left;\n  margin: 11px 0 0 25px; }\n:host /deep/ a.collapse-menu-link:hover {\n    text-decoration: none;\n    color: #e7ba08; }\n:host /deep/ .al-skin-dropdown {\n  float: right;\n  margin-top: 14px;\n  margin-right: 26px; }\n:host /deep/ .al-skin-dropdown .tpl-skin-panel {\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n:host /deep/ .icon-palette {\n  display: inline-block;\n  width: 14px;\n  height: 13px;\n  background: url(\"/img/theme/palette.png\");\n  background-size: cover; }\n:host /deep/ .search {\n  text-shadow: none;\n  font-size: 13px;\n  line-height: 25px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 162px;\n  float: left;\n  margin: 20px 0 0 30px; }\n:host /deep/ .search label {\n    cursor: pointer; }\n:host /deep/ .search i {\n    width: 16px;\n    display: inline-block;\n    cursor: pointer;\n    padding-left: 1px;\n    font-size: 16px;\n    margin-right: 13px; }\n:host /deep/ .search input {\n    color: #ffffff;\n    background: none;\n    border: none;\n    outline: none;\n    width: 120px;\n    padding: 0;\n    margin: 0 0 0 -3px;\n    height: 27px; }\n@media screen and (max-width: 660px) {\n  :host /deep/ .search {\n    display: none; } }\n@media screen and (max-width: 500px) {\n  :host /deep/ .page-top {\n    padding: 0 20px; } }\n@media (max-width: 435px) {\n  :host /deep/ .user-profile {\n    min-width: 136px; }\n  :host /deep/ a.refresh-data {\n    margin-right: 10px; }\n  :host /deep/ a.collapse-menu-link {\n    margin-left: 10px; }\n  :host /deep/ .al-skin-dropdown {\n    display: none; } }\n:host /deep/ .profile-toggle-link {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaSidebar = (function () {
    function BaSidebar(_elementRef, _state) {
        var _this = this;
        this._elementRef = _elementRef;
        this._state = _state;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaSidebar.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    };
    BaSidebar.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.updateSidebarHeight(); });
    };
    BaSidebar.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    BaSidebar.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    BaSidebar.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    BaSidebar.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    BaSidebar.prototype.updateSidebarHeight = function () {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    };
    BaSidebar.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= __WEBPACK_IMPORTED_MODULE_2__theme__["e" /* layoutSizes */].resWidthCollapseSidebar;
    };
    return BaSidebar;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaSidebar.prototype, "onWindowResize", null);
BaSidebar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ba-sidebar',
        template: __webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _b || Object])
], BaSidebar);

var _a, _b;
//# sourceMappingURL=baSidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" sidebarResize>\r\n  <ba-menu [menuHeight]=\"menuHeight\"\r\n           [sidebarCollapsed]=\"isMenuCollapsed\"\r\n           (expandMenu)=\"menuExpand()\"></ba-menu>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n\n:host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n\n:host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n\n:host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n\n:host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n\n:host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n\n:host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n\n:host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    -webkit-transition: -webkit-transform 0.2s linear;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n\n:host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n\n:host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  -webkit-transition-property: top, height;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__ = __webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop__ = __webpack_require__("../../../../../src/app/theme/components/baPageTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMsgCenter__ = __webpack_require__("../../../../../src/app/theme/components/baMsgCenter/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__baMsgCenter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baSidebar__ = __webpack_require__("../../../../../src/app/theme/components/baSidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__baSidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baMenu_components_baMenuItem__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__baMenu_components_baMenuItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baMenu__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baContentTop__ = __webpack_require__("../../../../../src/app/theme/components/baContentTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__baContentTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baCard__ = __webpack_require__("../../../../../src/app/theme/components/baCard/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__baCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baBackTop__ = __webpack_require__("../../../../../src/app/theme/components/baBackTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__baBackTop__["a"]; });







//export * from './baAmChart';
//export * from './baChartistChart';

//export * from './baFullCalendar';
//export * from './baPictureUploader';
//export * from './baCheckbox';
//export * from './baMultiCheckbox';
//export * from './baFileUploader';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaScrollPosition; });
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

var BaScrollPosition = (function () {
    function BaScrollPosition() {
        this.scrollChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BaScrollPosition.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    BaScrollPosition.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    };
    return BaScrollPosition;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BaScrollPosition.prototype, "maxHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BaScrollPosition.prototype, "scrollChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaScrollPosition.prototype, "onWindowScroll", null);
BaScrollPosition = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[baScrollPosition]'
    })
], BaScrollPosition);

var _a;
//# sourceMappingURL=baScrollPosition.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baScrollPosition/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaSlimScroll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__ = __webpack_require__("../../../../jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaSlimScroll = (function () {
    function BaSlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    BaSlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    BaSlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    BaSlimScroll.prototype._init = function () {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    };
    BaSlimScroll.prototype._destroy = function () {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    return BaSlimScroll;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaSlimScroll.prototype, "baSlimScrollOptions", void 0);
BaSlimScroll = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[baSlimScroll]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], BaSlimScroll);

var _a;
//# sourceMappingURL=baSlimScroll.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baSlimScroll/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baThemeRun/baThemeRun.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeRun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaThemeRun = (function () {
    function BaThemeRun(_baConfig) {
        this._baConfig = _baConfig;
        this._classes = [];
    }
    BaThemeRun.prototype.ngOnInit = function () {
        this._assignTheme();
        this._assignMobile();
    };
    BaThemeRun.prototype._assignTheme = function () {
        this._addClass(this._baConfig.get().theme.name);
    };
    BaThemeRun.prototype._assignMobile = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__theme__["c" /* isMobile */])()) {
            this._addClass('mobile');
        }
    };
    BaThemeRun.prototype._addClass = function (cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    };
    return BaThemeRun;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
    __metadata("design:type", String)
], BaThemeRun.prototype, "classesString", void 0);
BaThemeRun = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[baThemeRun]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], BaThemeRun);

var _a;
//# sourceMappingURL=baThemeRun.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baThemeRun/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baThemeRun/baThemeRun.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__ = __webpack_require__("../../../../../src/app/theme/directives/baScrollPosition/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baThemeRun__ = __webpack_require__("../../../../../src/app/theme/directives/baThemeRun/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__baThemeRun__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__ = __webpack_require__("../../../../../src/app/theme/directives/baSlimScroll/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_constants__ = __webpack_require__("../../../../../src/app/theme/theme.constants.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/nga.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_uploader__ = __webpack_require__("../../../../ngx-uploader/ngx-uploader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__("../../../../../src/app/theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_baCard_baCardBlur_directive__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCardBlur.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives__ = __webpack_require__("../../../../../src/app/theme/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes__ = __webpack_require__("../../../../../src/app/theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validators__ = __webpack_require__("../../../../../src/app/theme/validators/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var NGA_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_8__components__["a" /* BaBackTop */],
    __WEBPACK_IMPORTED_MODULE_8__components__["b" /* BaCard */],
    __WEBPACK_IMPORTED_MODULE_8__components__["c" /* BaContentTop */],
    __WEBPACK_IMPORTED_MODULE_8__components__["e" /* BaMenuItem */],
    __WEBPACK_IMPORTED_MODULE_8__components__["d" /* BaMenu */],
    __WEBPACK_IMPORTED_MODULE_8__components__["f" /* BaMsgCenter */],
    __WEBPACK_IMPORTED_MODULE_8__components__["g" /* BaPageTop */],
    __WEBPACK_IMPORTED_MODULE_8__components__["h" /* BaSidebar */],
];
/*
const NGA_COMPONENTS = [
  BaAmChart,
  BaBackTop,
  BaCard,
  BaChartistChart,
  BaCheckbox,
  BaContentTop,
  BaFullCalendar,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaPictureUploader,
  BaSidebar,
  BaFileUploader
];
*/
var NGA_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_10__directives__["a" /* BaScrollPosition */],
    __WEBPACK_IMPORTED_MODULE_10__directives__["b" /* BaSlimScroll */],
    __WEBPACK_IMPORTED_MODULE_10__directives__["c" /* BaThemeRun */],
    __WEBPACK_IMPORTED_MODULE_9__components_baCard_baCardBlur_directive__["a" /* BaCardBlur */]
];
var NGA_PIPES = [
    __WEBPACK_IMPORTED_MODULE_11__pipes__["a" /* BaAppPicturePipe */],
    __WEBPACK_IMPORTED_MODULE_11__pipes__["b" /* BaKameleonPicturePipe */],
    __WEBPACK_IMPORTED_MODULE_11__pipes__["c" /* BaProfilePicturePipe */]
];
var NGA_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_12__services__["a" /* BaImageLoaderService */],
    __WEBPACK_IMPORTED_MODULE_12__services__["c" /* BaThemePreloader */],
    __WEBPACK_IMPORTED_MODULE_12__services__["d" /* BaThemeSpinner */],
    __WEBPACK_IMPORTED_MODULE_12__services__["b" /* BaMenuService */]
];
var NGA_VALIDATORS = [
    __WEBPACK_IMPORTED_MODULE_13__validators__["a" /* EmailValidator */],
    __WEBPACK_IMPORTED_MODULE_13__validators__["b" /* EqualPasswordsValidator */]
];
var NgaModule = NgaModule_1 = (function () {
    function NgaModule() {
    }
    NgaModule.forRoot = function () {
        return {
            ngModule: NgaModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__theme_configProvider__["a" /* BaThemeConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_6__theme_config__["a" /* BaThemeConfig */]
            ].concat(NGA_VALIDATORS, NGA_SERVICES),
        };
    };
    return NgaModule;
}());
NgaModule = NgaModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS),
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_uploader__["a" /* NgUploaderModule */]
        ],
        exports: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS)
    })
], NgaModule);

var NgaModule_1;
//# sourceMappingURL=nga.module.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAppPicturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaAppPicturePipe = (function () {
    function BaAppPicturePipe() {
    }
    BaAppPicturePipe.prototype.transform = function (input) {
        return __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* layoutPaths */].images.root + input;
    };
    return BaAppPicturePipe;
}());
BaAppPicturePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'baAppPicture' })
], BaAppPicturePipe);

//# sourceMappingURL=baAppPicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baAppPicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaKameleonPicturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaKameleonPicturePipe = (function () {
    function BaKameleonPicturePipe() {
    }
    BaKameleonPicturePipe.prototype.transform = function (input) {
        return __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* layoutPaths */].images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
    return BaKameleonPicturePipe;
}());
BaKameleonPicturePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'baKameleonPicture' })
], BaKameleonPicturePipe);

//# sourceMappingURL=baKameleonPicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baKameleonPicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaProfilePicturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaProfilePicturePipe = (function () {
    function BaProfilePicturePipe() {
    }
    BaProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'png'; }
        return __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* layoutPaths */].images.profile + input + '.' + ext;
    };
    return BaProfilePicturePipe;
}());
BaProfilePicturePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'baProfilePicture' })
], BaProfilePicturePipe);

//# sourceMappingURL=baProfilePicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baProfilePicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baProfilePicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baAppPicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baAppPicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__baAppPicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baKameleonPicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baImageLoader/baImageLoader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaImageLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaImageLoaderService = (function () {
    function BaImageLoaderService() {
    }
    BaImageLoaderService.prototype.load = function (src) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                resolve('Image with src ' + src + ' loaded successfully.');
            };
        });
    };
    return BaImageLoaderService;
}());
BaImageLoaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BaImageLoaderService);

//# sourceMappingURL=baImageLoader.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baImageLoader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__ = __webpack_require__("../../../../../src/app/theme/services/baImageLoader/baImageLoader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baMenu/baMenu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaMenuService = (function () {
    function BaMenuService(_router) {
        this._router = _router;
        this.menuItems = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._currentMenuItem = {};
    }
    /**
     * Updates the routes in the menu
     *
     * @param {Routes} routes Type compatible with app.menu.ts
     */
    BaMenuService.prototype.updateMenuByRoutes = function (routes) {
        var convertedRoutes = this.convertRoutesToMenus(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](routes));
        this.menuItems.next(convertedRoutes);
    };
    BaMenuService.prototype.convertRoutesToMenus = function (routes) {
        var items = this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    };
    BaMenuService.prototype.getCurrentItem = function () {
        return this._currentMenuItem;
    };
    BaMenuService.prototype.selectMenuItem = function (menuItems) {
        var _this = this;
        var items = [];
        menuItems.forEach(function (item) {
            _this._selectItem(item);
            if (item.selected) {
                _this._currentMenuItem = item;
            }
            if (item.children && item.children.length > 0) {
                item.children = _this.selectMenuItem(item.children);
            }
            items.push(item);
        });
        return items;
    };
    BaMenuService.prototype._skipEmpty = function (items) {
        var menu = [];
        items.forEach(function (item) {
            var menuItem;
            if (item.skip) {
                if (item.children && item.children.length > 0) {
                    menuItem = item.children;
                }
            }
            else {
                menuItem = item;
            }
            if (menuItem) {
                menu.push(menuItem);
            }
        });
        return [].concat.apply([], menu);
    };
    BaMenuService.prototype._convertArrayToItems = function (routes, parent) {
        var _this = this;
        var items = [];
        routes.forEach(function (route) {
            items.push(_this._convertObjectToItem(route, parent));
        });
        return items;
    };
    BaMenuService.prototype._convertObjectToItem = function (object, parent) {
        var item = {};
        if (object.data && object.data.menu) {
            // this is a menu object
            item = object.data.menu;
            item.route = object;
            delete item.route.data.menu;
        }
        else {
            item.route = object;
            item.skip = true;
        }
        // we have to collect all paths to correctly build the url then
        if (Array.isArray(item.route.path)) {
            item.route.paths = item.route.path;
        }
        else {
            item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
            if (!!item.route.path)
                item.route.paths.push(item.route.path);
        }
        if (object.children && object.children.length > 0) {
            item.children = this._convertArrayToItems(object.children, item);
        }
        var prepared = this._prepareItem(item);
        // if current item is selected or expanded - then parent is expanded too
        if ((prepared.selected || prepared.expanded) && parent) {
            parent.expanded = true;
        }
        return prepared;
    };
    BaMenuService.prototype._prepareItem = function (object) {
        if (!object.skip) {
            object.target = object.target || '';
            object.pathMatch = object.pathMatch || 'full';
            return this._selectItem(object);
        }
        return object;
    };
    BaMenuService.prototype._selectItem = function (object) {
        object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
        return object;
    };
    return BaMenuService;
}());
BaMenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], BaMenuService);

var _a;
//# sourceMappingURL=baMenu.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baMenu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_service__ = __webpack_require__("../../../../../src/app/theme/services/baMenu/baMenu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemePreloader/baThemePreloader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemePreloader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaThemePreloader = BaThemePreloader_1 = (function () {
    function BaThemePreloader() {
    }
    BaThemePreloader.registerLoader = function (method) {
        BaThemePreloader_1._loaders.push(method);
    };
    BaThemePreloader.clear = function () {
        BaThemePreloader_1._loaders = [];
    };
    BaThemePreloader.load = function () {
        return new Promise(function (resolve, reject) {
            BaThemePreloader_1._executeAll(resolve);
        });
    };
    BaThemePreloader._executeAll = function (done) {
        setTimeout(function () {
            Promise.all(BaThemePreloader_1._loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    return BaThemePreloader;
}());
BaThemePreloader._loaders = [];
BaThemePreloader = BaThemePreloader_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BaThemePreloader);

var BaThemePreloader_1;
//# sourceMappingURL=baThemePreloader.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemePreloader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemePreloader/baThemePreloader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeSpinner; });
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

var BaThemeSpinner = (function () {
    function BaThemeSpinner() {
        this._selector = 'preloader';
        this._element = document.getElementById(this._selector);
    }
    BaThemeSpinner.prototype.show = function () {
        this._element.style['display'] = 'block';
    };
    BaThemeSpinner.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._element.style['display'] = 'none';
        }, delay);
    };
    return BaThemeSpinner;
}());
BaThemeSpinner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BaThemeSpinner);

//# sourceMappingURL=baThemeSpinner.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemeSpinner/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader__ = __webpack_require__("../../../../../src/app/theme/services/baImageLoader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMenu__ = __webpack_require__("../../../../../src/app/theme/services/baMenu/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__ = __webpack_require__("../../../../../src/app/theme/services/baThemePreloader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaThemeConfig = (function () {
    function BaThemeConfig(_baConfig) {
        this._baConfig = _baConfig;
    }
    BaThemeConfig.prototype.config = function () {
        // this._baConfig.changeTheme({ name: 'my-theme' });
        //
        // let colorScheme = {
        //   primary: '#209e91',
        //   info: '#2dacd1',
        //   success: '#90b900',
        //   warning: '#dfb81c',
        //   danger: '#e85656',
        // };
        //
        // this._baConfig.changeColors({
        //   default: '#4e4e55',
        //   defaultText: '#aaaaaa',
        //   border: '#dddddd',
        //   borderDark: '#aaaaaa',
        //
        //   primary: colorScheme.primary,
        //   info: colorScheme.info,
        //   success: colorScheme.success,
        //   warning: colorScheme.warning,
        //   danger: colorScheme.danger,
        //
        //   primaryLight: colorHelper.tint(colorScheme.primary, 30),
        //   infoLight: colorHelper.tint(colorScheme.info, 30),
        //   successLight: colorHelper.tint(colorScheme.success, 30),
        //   warningLight: colorHelper.tint(colorScheme.warning, 30),
        //   dangerLight: colorHelper.tint(colorScheme.danger, 30),
        //
        //   primaryDark: colorHelper.shade(colorScheme.primary, 15),
        //   infoDark: colorHelper.shade(colorScheme.info, 15),
        //   successDark: colorHelper.shade(colorScheme.success, 15),
        //   warningDark: colorHelper.shade(colorScheme.warning, 15),
        //   dangerDark: colorHelper.shade(colorScheme.danger, 15),
        //
        //   dashboard: {
        //     blueStone: '#005562',
        //     surfieGreen: '#0e8174',
        //     silverTree: '#6eba8c',
        //     gossip: '#b9f2a1',
        //     white: '#10c4b5',
        //   },
        //
        //   custom: {
        //     dashboardPieChart: colorHelper.hexToRgbA('#aaaaaa', 0.8),
        //     dashboardLineChart: '#6eba8c',
        //   },
        // });
    };
    return BaThemeConfig;
}());
BaThemeConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], BaThemeConfig);

var _a;
//# sourceMappingURL=theme.config.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.configProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_constants__ = __webpack_require__("../../../../../src/app/theme/theme.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaThemeConfigProvider = (function () {
    function BaThemeConfigProvider() {
        this.basic = {
            default: '#ffffff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        // main functional color scheme
        this.colorScheme = {
            primary: '#00abff',
            info: '#40daf1',
            success: '#8bd22f',
            warning: '#e7ba08',
            danger: '#f95372',
        };
        // dashboard colors for charts
        this.dashboardColors = {
            blueStone: '#40daf1',
            surfieGreen: '#00abff',
            silverTree: '#1b70ef',
            gossip: '#3c4eb9',
            white: '#ffffff',
        };
        this.conf = {
            theme: {
                name: 'ng2',
            },
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger,
                primaryLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.primary, 30),
                infoLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.info, 30),
                successLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.success, 30),
                warningLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.warning, 30),
                dangerLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.danger, 30),
                primaryDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.primary, 15),
                infoDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.info, 15),
                successDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.success, 15),
                warningDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.warning, 15),
                dangerDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.danger, 15),
                dashboard: {
                    blueStone: this.dashboardColors.blueStone,
                    surfieGreen: this.dashboardColors.surfieGreen,
                    silverTree: this.dashboardColors.silverTree,
                    gossip: this.dashboardColors.gossip,
                    white: this.dashboardColors.white,
                },
                custom: {
                    dashboardPieChart: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].hexToRgbA(this.basic.defaultText, 0.8),
                    dashboardLineChart: this.basic.defaultText,
                }
            }
        };
    }
    BaThemeConfigProvider.prototype.get = function () {
        return this.conf;
    };
    BaThemeConfigProvider.prototype.changeTheme = function (theme) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().theme, theme);
    };
    BaThemeConfigProvider.prototype.changeColors = function (colors) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().colors, colors);
    };
    return BaThemeConfigProvider;
}());
BaThemeConfigProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BaThemeConfigProvider);

//# sourceMappingURL=theme.configProvider.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IMAGES_ROOT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return layoutSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return layoutPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMobile; });
var IMAGES_ROOT = 'assets/img/';
var layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500
};
var layoutPaths = {
    images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
    }
};
var colorHelper = (function () {
    function colorHelper() {
    }
    return colorHelper;
}());

colorHelper.shade = function (color, weight) {
    return colorHelper.mix('#000000', color, weight);
};
colorHelper.tint = function (color, weight) {
    return colorHelper.mix('#ffffff', color, weight);
};
colorHelper.hexToRgbA = function (hex, alpha) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
};
colorHelper.mix = function (color1, color2, weight) {
    var d2h = function (d) { return d.toString(16); };
    var h2d = function (h) { return parseInt(h, 16); };
    var result = "#";
    for (var i = 1; i < 7; i += 2) {
        var color1Part = h2d(color1.substr(i, 2));
        var color2Part = h2d(color2.substr(i, 2));
        var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
        result += ('0' + resultPart).slice(-2);
    }
    return result;
};
var isMobile = function () { return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase()); };
//# sourceMappingURL=theme.constants.js.map

/***/ }),

/***/ "../../../../../src/app/theme/validators/email.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.validator.js.map

/***/ }),

/***/ "../../../../../src/app/theme/validators/equalPasswords.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualPasswordsValidator; });
var EqualPasswordsValidator = (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());

//# sourceMappingURL=equalPasswords.validator.js.map

/***/ }),

/***/ "../../../../../src/app/theme/validators/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_validator__ = __webpack_require__("../../../../../src/app/theme/validators/email.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__email_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__ = __webpack_require__("../../../../../src/app/theme/validators/equalPasswords.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map