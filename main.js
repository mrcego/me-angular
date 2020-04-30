(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"].withServerTransition({ appId: 'app-root' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserTransferStateModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"],
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns-block\">\r\n  <app-left></app-left>\r\n  <app-right></app-right>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.setDefaultLang('es');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _left_left_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./left/left.component */ "./src/app/left/left.component.ts");
/* harmony import */ var _right_right_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./right/right.component */ "./src/app/right/right.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _left_left_component__WEBPACK_IMPORTED_MODULE_11__["LeftComponent"],
                _right_right_component__WEBPACK_IMPORTED_MODULE_12__["RightComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
            ],
            imports: [
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__["TransferHttpCacheModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__["NgtUniversalModule"],
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__["TransferHttpCacheModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-transparent\">\r\n  <a class=\"navbar-brand\"></a>\r\n  <form class=\"form-inline\">\r\n    <a [style.cursor]=\"pointerSpanish\" (click)=\"setLangVersion('es')\"\r\n      ><img [src]=\"iconSpanishURI\" width=\"36px\" height=\"24px\"\r\n    /></a>\r\n    <a [style.cursor]=\"pointerEnglish\" (click)=\"setLangVersion('en')\"\r\n      ><img\r\n        class=\"mx-2 mx-sm-1\"\r\n        [src]=\"iconEnglishURI\"\r\n        width=\"36px\"\r\n        height=\"24px\"\r\n    /></a>\r\n  </form>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate) {
        this.translate = translate;
        this.setLangOption('es');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.setLangVersion = function (lang) {
        this.translate.use(lang);
        this.setLangOption(lang);
    };
    HeaderComponent.prototype.setLangOption = function (lang) {
        switch (lang) {
            case 'es':
                this.iconSpanishURI = './assets/spain-icon-disabled.png';
                this.iconEnglishURI = './assets/usa-icon.png';
                this.pointerSpanish = 'default';
                this.pointerEnglish = 'pointer';
                break;
            case 'en':
                this.iconSpanishURI = './assets/spain-icon.png';
                this.iconEnglishURI = './assets/usa-icon-disabled.png';
                this.pointerEnglish = 'default';
                this.pointerSpanish = 'pointer';
                break;
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/left/left.component.html":
/*!******************************************!*\
  !*** ./src/app/left/left.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-col-block blocks\">\r\n  <header class=\"header\">\r\n    <div class=\"content text-center\">\r\n      <h1>{{ \"left.greeting\" | translate }}</h1>\r\n      <p class=\"lead\">{{ \"left.role\" | translate }}</p>\r\n      <ul class=\"social-icon\">\r\n        <li *ngFor=\"let item of 'left.social' | translate\">\r\n          <a target=\"_blank\" [href]=\"item.url\"\r\n            ><i class=\"fa fa-{{ item.icon }}\" aria-hidden=\"true\"></i\r\n          ></a>\r\n        </li>\r\n      </ul>\r\n      <img src=\"./assets/colombia-icon.png\" width=\"24px\" height=\"24px\" />\r\n    </div>\r\n    <div class=\"profile-img\"></div>\r\n    <app-header></app-header>\r\n  </header>\r\n  <!-- .header-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/left/left.component.scss":
/*!******************************************!*\
  !*** ./src/app/left/left.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlZnQvbGVmdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/left/left.component.ts":
/*!****************************************!*\
  !*** ./src/app/left/left.component.ts ***!
  \****************************************/
/*! exports provided: LeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftComponent", function() { return LeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftComponent = /** @class */ (function () {
    function LeftComponent() {
    }
    LeftComponent.prototype.ngOnInit = function () {
    };
    LeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left',
            template: __webpack_require__(/*! ./left.component.html */ "./src/app/left/left.component.html"),
            styles: [__webpack_require__(/*! ./left.component.scss */ "./src/app/left/left.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftComponent);
    return LeftComponent;
}());



/***/ }),

/***/ "./src/app/right/right.component.html":
/*!********************************************!*\
  !*** ./src/app/right/right.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-col-block blocks\">\r\n  <section class=\"intro section-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2>{{ 'right.about.title' | translate }}</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <p *ngFor=\"let item of ('right.about.paragraph' | translate)\" [innerHTML]=\"item\"></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"expertise-wrapper section-wrapper gray-bg\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2 [innerHTML]=\"'right.expertise.title' | translate\"></h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\" *ngFor=\"let item of ('right.expertise.paragraph' | translate)\">\r\n          <div class=\"expertise-item\">\r\n            <h3>{{item.header}}</h3>\r\n            <p [innerHTML]=\"item.description\"></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section-wrapper skills-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2 [innerHTML]=\"'right.skills.title' | translate\"></h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--.row-->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"progress-wrapper\">\r\n            <div class=\"mt-3\" *ngFor=\"let item of ('right.skills.paragraph' | translate)\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-lg-3 col-xl-2 text-center\">\r\n                  <img [src]=\"item.icon\" width=\"90px\" height=\"60px\">\r\n                </div>\r\n                <div class=\"col-md-8 col-lg-9 col-xl-10\">\r\n                  <span class=\"progress-title\">{{item.title}}</span>\r\n                  <ngb-progressbar showValue=\"true\" [value]=\"item.percent\" [striped]=\"true\" height=\"20px\" [animated]=\"true\"></ngb-progressbar>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- .skill-progress -->\r\n          </div>\r\n          <!-- /.progress-wrapper -->\r\n        </div>\r\n      </div>\r\n      <!--.row -->\r\n    </div>\r\n    <!-- .container-fluid -->\r\n  </section>\r\n  <!-- .skills-wrapper -->\r\n  <section class=\"section-wrapper section-experience gray-bg\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2>{{ 'right.experiences.title' | translate }}</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--.row-->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"content-item\" *ngFor=\"let item of ('right.experiences.paragraph' | translate)\">\r\n            <small>{{item.time}}</small>\r\n            <h3>{{item.role}}</h3>\r\n            <h4>{{item.company}}</h4>\r\n            <p>{{item.address}}</p>\r\n            <h6 [innerHTML]=\"item.description\"></h6>\r\n          </div>\r\n          <!-- .experience-item -->\r\n        </div>\r\n      </div>\r\n      <!--.row-->\r\n    </div>\r\n    <!-- .container-fluid -->\r\n  </section>\r\n  <!-- .section-experience -->\r\n  <section class=\"section-wrapper section-education\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2>{{ 'right.education.title' | translate }}</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--.row-->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"content-item\" *ngFor=\"let item of ('right.education.paragraph' | translate)\">\r\n            <small>{{item.time}}</small>\r\n            <h3>{{item.grade}}</h3>\r\n            <h4>{{item.institution}}</h4>\r\n            <p>{{item.city}}</p>\r\n          </div>\r\n          <!-- .experience-item -->\r\n        </div>\r\n      </div>\r\n      <!--.row-->\r\n    </div>\r\n    <!-- .container-fluid -->\r\n  </section>\r\n  <!-- .section-education -->\r\n  <section class=\"section-wrapper section-interest gray-bg\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2>{{'right.interests.title' | translate}}</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- .row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"content-item\" *ngFor=\"let item of ('right.interests.paragraph' | translate)\">\r\n            <h3>{{item.header}}</h3>\r\n            <p>{{item.description}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- .row -->\r\n    </div>\r\n  </section>\r\n  <!-- .section-publications -->\r\n  <!-- <section class=\"section-wrapper portfolio-section\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2>Portfolio</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <a class=\"portfolio-item\" href=\"#\">\r\n            <div class=\"portfolio-thumb\">\r\n              <img src=\"../../assets/img/portfolio-1.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"portfolio-info\">\r\n              <h3>Creative concepts</h3>\r\n              <small>domain.com</small>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <a class=\"portfolio-item\" href=\"#\">\r\n            <div class=\"portfolio-thumb\">\r\n              <img src=\"../../assets/img/portfolio-2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"portfolio-info\">\r\n              <h3>Customer focused</h3>\r\n              <small>domain.com</small>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <a class=\"portfolio-item\" href=\"#\">\r\n            <div class=\"portfolio-thumb\">\r\n              <img src=\"../../assets/img/portfolio-3.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"portfolio-info\">\r\n              <h3>Management methodology</h3>\r\n              <small>domain.com</small>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <a class=\"portfolio-item\" href=\"#\">\r\n            <div class=\"portfolio-thumb\">\r\n              <img src=\"../../assets/img/portfolio-4.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"portfolio-info\">\r\n              <h3>Market research</h3>\r\n              <small>domain.com</small>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- .portfolio -->\r\n  <section class=\"section-contact section-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"section-title\">\r\n            <h2>{{'right.contact.title' | translate}}</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--.row-->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <address *ngFor=\"let item of ('right.contact.paragraph' | translate)\" [innerHTML]=\"item\"></address>\r\n        </div>\r\n      </div>\r\n      <!--.row-->\r\n      <div class=\"row blue-bg\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"feedback-form\">\r\n            <h2 [style.color]=\"'#f9f9f9'\">{{'right.form.title' | translate}}</h2>\r\n            <form id=\"contactForm\" action=\"https://formspree.io/cesar_gomez_h@hotmail.com\" method=\"POST\">\r\n              <div class=\"form-group\">\r\n                <label [style.color]=\"'#f9f9f9'\" for=\"InputName\">{{'right.form.paragraph.0.label' | translate}}</label>\r\n                <input type=\"text\" name=\"name\" required=\"\" class=\"form-control\" id=\"InputName\" placeholder=\"{{'right.form.paragraph.0.placeholder' | translate}}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label [style.color]=\"'#f9f9f9'\" for=\"InputEmail\">{{'right.form.paragraph.1.label' | translate}}</label>\r\n                <input type=\"email\" name=\"email\" required=\"\" class=\"form-control\" id=\"InputEmail\" placeholder=\"{{'right.form.paragraph.1.placeholder' | translate}}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label [style.color]=\"'#f9f9f9'\" for=\"InputSubject\">{{'right.form.paragraph.2.label' | translate}}</label>\r\n                <input type=\"text\" name=\"subject\" class=\"form-control\" id=\"InputSubject\" placeholder=\"{{'right.form.paragraph.2.placeholder' | translate}}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label [style.color]=\"'#f9f9f9'\" for=\"message-text\" class=\"control-label\">{{'right.form.paragraph.3.label' | translate}}</label>\r\n                <textarea class=\"form-control\" rows=\"4\" required=\"\" name=\"message\" id=\"message-text\" placeholder=\"{{'right.form.paragraph.3.placeholder' | translate}}\"></textarea>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary\">{{'right.send' | translate}}</button>\r\n            </form>\r\n          </div>\r\n          <!-- .feedback-form -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--.container-fluid-->\r\n  </section>\r\n  <!--.section-contact-->\r\n  <footer class=\"footer\">\r\n    <div class=\"copyright-section\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"copytext\" [innerHTML]=\"'right.footer' | translate \"></div>\r\n          </div>\r\n        </div>\r\n        <!--.row-->\r\n      </div>\r\n      <!-- .container-fluid -->\r\n    </div>\r\n    <!-- .copyright-section -->\r\n  </footer>\r\n  <!-- .footer -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/right/right.component.scss":
/*!********************************************!*\
  !*** ./src/app/right/right.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0L3JpZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/right/right.component.ts":
/*!******************************************!*\
  !*** ./src/app/right/right.component.ts ***!
  \******************************************/
/*! exports provided: RightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightComponent", function() { return RightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RightComponent = /** @class */ (function () {
    function RightComponent() {
    }
    RightComponent.prototype.ngOnInit = function () {
    };
    RightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right',
            template: __webpack_require__(/*! ./right.component.html */ "./src/app/right/right.component.html"),
            styles: [__webpack_require__(/*! ./right.component.scss */ "./src/app/right/right.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RightComponent);
    return RightComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././src/app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
        .bootstrapModule(_src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Cesar\Dev\Projects\me\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map