(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/ng/app/app.module.ts":
/*!**********************************!*\
  !*** ./src/ng/app/app.module.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./ui/app.component */ "./src/ng/app/ui/app.component.ts");
var tabular_view_component_1 = __webpack_require__(/*! ./ui/tabular-view.component */ "./src/ng/app/ui/tabular-view.component.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var DataService_1 = __webpack_require__(/*! ./service/DataService */ "./src/ng/app/service/DataService.ts");
var graph_view_component_1 = __webpack_require__(/*! ./ui/graph-view.component */ "./src/ng/app/ui/graph-view.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                tabular_view_component_1.TabularViewComponent,
                graph_view_component_1.GraphViewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule
            ],
            providers: [
                DataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/ng/app/service/DataService.ts":
/*!*******************************************!*\
  !*** ./src/ng/app/service/DataService.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return this.http.get('/data/sample.json');
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/ng/app/ui/app.component.css":
/*!*****************************************!*\
  !*** ./src/ng/app/ui/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/ng/app/ui/app.component.html":
/*!******************************************!*\
  !*** ./src/ng/app/ui/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container\">\r\n    <h1 class=\"py-2 border-bottom\">\r\n      Angular graph\r\n    </h1>\r\n    <ng-container *ngIf=\"data$ | async as data\">\r\n      <div class=\"row pt-4\">\r\n        <div class=\"col-12 col-lg-6\">\r\n          <tabular-view [data]=\"data\"></tabular-view>\r\n        </div>\r\n        <div class=\"col-12 col-lg-6\">\r\n          <graph-view [data]=\"data\"></graph-view>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/ng/app/ui/app.component.ts":
/*!****************************************!*\
  !*** ./src/ng/app/ui/app.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var DataService_1 = __webpack_require__(/*! ../service/DataService */ "./src/ng/app/service/DataService.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data$ = this.dataService.getData();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/ng/app/ui/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/ng/app/ui/app.component.css")]
        }),
        __metadata("design:paramtypes", [DataService_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/ng/app/ui/graph-view.component.html":
/*!*************************************************!*\
  !*** ./src/ng/app/ui/graph-view.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" [attr.viewBox]=\"[originX, originY, width, height].join(' ')\">\r\n  <g id=\"axis\">\r\n    <line x1=\"0\" x2=\"0\" [attr.y1]=\"yMin * yUnit\" [attr.y2]=\"yMax * yUnit\"/>\r\n    <line [attr.x1]=\"xMin * xUnit\" [attr.x2]=\"xMax * xUnit\" [attr.y1]=\"originY * 2 + height\" [attr.y2]=\"originY * 2 + height\"/>\r\n  </g>\r\n  <g id=\"series\">\r\n    <g *ngFor=\"let line of series; let i=index\" [id]=\"'series-' + i\">\r\n      <ng-container *ngFor=\"let point of line; let j = index\">\r\n        <line *ngIf=\"j > 0\"\r\n              [attr.x1]=\"line[j - 1].x * xUnit\"\r\n              [attr.x2]=\"line[j].x * xUnit\"\r\n              [attr.y1]=\"originY * 2 + height - line[j - 1].y * yUnit\"\r\n              [attr.y2]=\"originY * 2 + height - line[j].y * yUnit\"/>\r\n      </ng-container>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/ng/app/ui/graph-view.component.scss":
/*!*************************************************!*\
  !*** ./src/ng/app/ui/graph-view.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  stroke: black;\n  stroke-width: 4;\n  stroke-linejoin: miter;\n  stroke-linecap: round; }\n  svg #series-0 {\n    stroke: red; }\n  svg #series-1 {\n    stroke: blue; }\n"

/***/ }),

/***/ "./src/ng/app/ui/graph-view.component.ts":
/*!***********************************************!*\
  !*** ./src/ng/app/ui/graph-view.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var GraphViewComponent = /** @class */ (function () {
    function GraphViewComponent() {
    }
    GraphViewComponent_1 = GraphViewComponent;
    GraphViewComponent.prototype.ngOnInit = function () {
        this.series = [this.data];
        var len = this.data.length;
        var xValues = this.data.map(function (p) { return p.x; });
        var yValues = this.data.map(function (p) { return p.y; });
        this.xMin = Math.min.apply(Math, xValues);
        this.xMax = Math.max.apply(Math, xValues);
        this.yMin = Math.min.apply(Math, yValues);
        this.yMax = Math.max.apply(Math, yValues);
        this.xMin = this.roundSpecial(Math.min(0, this.xMin * 1.1), 1, 'floor');
        this.xMax = this.roundSpecial(Math.max(0, this.xMax * 1.1), 1, 'ceil');
        this.yMin = this.roundSpecial(Math.min(0, this.yMin * 1.1), 1, 'floor');
        this.yMax = this.roundSpecial(Math.max(0, this.yMax * 1.1), 1, 'ceil');
        var xSpan = this.xMax - this.xMin;
        var ySpan = this.yMax - this.yMin;
        this.xUnit = this.roundSpecial(xSpan / len * 100, 2);
        this.width = this.roundSpecial(this.xUnit * xSpan, 3, 'ceil');
        var height = this.roundSpecial(this.width / GraphViewComponent_1.RATIO, 3);
        this.yUnit = this.roundSpecial(height / ySpan, 2);
        this.height = this.roundSpecial(this.yUnit * ySpan, 3, 'ceil');
        this.originX = this.xUnit * this.xMin;
        this.originY = this.yUnit * this.yMin;
    };
    GraphViewComponent.prototype.roundSpecial = function (value, significantDigits, direction) {
        if (direction === void 0) { direction = 'round'; }
        if (value === 0) {
            return 0;
        }
        var scale = Math.floor(Math.log10(Math.abs(value))) + (1 - significantDigits);
        var multiplier = Math.pow(10, scale);
        return Math[direction](value / multiplier) * multiplier;
    };
    GraphViewComponent.RATIO = 1.6;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], GraphViewComponent.prototype, "data", void 0);
    GraphViewComponent = GraphViewComponent_1 = __decorate([
        core_1.Component({
            selector: 'graph-view',
            template: __webpack_require__(/*! ./graph-view.component.html */ "./src/ng/app/ui/graph-view.component.html"),
            styles: [__webpack_require__(/*! ./graph-view.component.scss */ "./src/ng/app/ui/graph-view.component.scss")]
        })
    ], GraphViewComponent);
    return GraphViewComponent;
    var GraphViewComponent_1;
}());
exports.GraphViewComponent = GraphViewComponent;


/***/ }),

/***/ "./src/ng/app/ui/tabular-view.component.html":
/*!***************************************************!*\
  !*** ./src/ng/app/ui/tabular-view.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-bordered\">\r\n  <thead>\r\n  <tr>\r\n    <th>#</th>\r\n    <th>X</th>\r\n    <th>Y</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let record of data; let i = index\">\r\n    <td>{{i + 1}}</td>\r\n    <td>{{record.x | number : '1.1-2'}}</td>\r\n    <td>{{record.y | number : '1.1-2'}}</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/ng/app/ui/tabular-view.component.ts":
/*!*************************************************!*\
  !*** ./src/ng/app/ui/tabular-view.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var TabularViewComponent = /** @class */ (function () {
    function TabularViewComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TabularViewComponent.prototype, "data", void 0);
    TabularViewComponent = __decorate([
        core_1.Component({
            selector: 'tabular-view',
            template: __webpack_require__(/*! ./tabular-view.component.html */ "./src/ng/app/ui/tabular-view.component.html")
        })
    ], TabularViewComponent);
    return TabularViewComponent;
}());
exports.TabularViewComponent = TabularViewComponent;


/***/ }),

/***/ "./src/ng/environments/environment.ts":
/*!********************************************!*\
  !*** ./src/ng/environments/environment.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/ng/main.ts":
/*!************************!*\
  !*** ./src/ng/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/ng/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/ng/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/ng/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! f:\ecl\workspace\angular-graph\src\ng\main.ts */"./src/ng/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map