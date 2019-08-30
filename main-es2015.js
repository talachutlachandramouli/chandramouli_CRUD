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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n<h1>\n  Login Users\n</h1>\n<div id=\"parentDiv\">\n    <td (click) = \"logout()\"><button id=\"sample\" class=\"table table-dark\" class=\"col-md-12\"  class=\"sticky-top\">Logout</button></td>\n</div>\n\n\n\n<table width=\"400\" class=\"container\">\n    <thead class=\"table table-dark\">\n        <tr>\n  <th>ID</th>\n  <th>Name</th>\n  <th>Email</th>\n  <th>Class</th>\n  <th>Year</th>\n  <th>City</th>\n  <th>Country</th>\n  <th></th>\n  <th></th>\n</tr>\n  </thead>\n  <tr *ngFor = \"let product of products\">\n    <td>{{product.id}}</td>\n    <td>{{product.name}}</td>\n    <td>{{product.email}}</td>\n    <td>{{product.class}}</td>\n    <td>{{product.year}}</td>\n    <td>{{product.city}}</td>\n    <td>{{product.counrty}}</td>\n\n    <td (click) = \"deleteProduct(product.id)\"><button class=\"table table-dark\">DELETE</button></td>\n    <td [routerLink] = \"['/updateProduct', product.id]\"><button class=\"table table-dark\">EDIT</button></td>\n  </tr>\n</table>\n</div>\n\n<br><br><br><br><br>\n<br>\n<div class=\"container\">\n    <h2 style=\"text-align: center\">\n    Add New User\n  </h2>\n  \n  <fieldset>\n  <form id = \"formNewProduct\" name = \"formNewProduct\" #productData = \"ngForm\" (ngSubmit) = \"addNewProduct(productData.value)\">\n    <label>Name: </label><input type = \"text\" name=\"name\" id=\"name\" placeholder=\"name\" ngModel><br>\n    <label>Email: </label><input type = \"text\" name=\"email\" id=\"email\" placeholder=\"email\" ngModel><br>\n    <label>Class: </label><input type = \"text\" name=\"class\" id=\"class\" placeholder=\"class\" ngModel><br>\n    <label>Year: </label><input type = \"text\" name=\"year\" id=\"year\" placeholder=\"year\" ngModel><br>\n    <label>City: </label><input type = \"text\" name=\"city\" id=\"city\" placeholder=\"city\" ngModel><br>\n    <label>Country: </label><input type = \"text\" name=\"counrty\" id=\"counrty\" placeholder=\"counrty\" ngModel><br>\n    <label>Id: </label><input type = \"text\" name=\"id\" id=\"id\" placeholder=\"id\" ngModel><br>\n    <label><input type=\"submit\" value = \"Add Product\" ></label>\n    \n    <button><input type=\"button\"  value=\"Reset form\" type=\"reset\" ></button>\n  </form>\n  </fieldset>\n  <h3 *ngIf = \"isAdded\" >{{confirmationString}}</h3>\n  </div>\n  \n  \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n                <h2 style=\"text-align: center\">\n                                Login\n                              </h2>\n <fieldset>\n<form id = \"formNewProduct\" name = \"formNewProduct\" #productData = \"ngForm\" (ngSubmit) = \"login(productData.value)\">\n        <label>User Email: </label><input type = \"text\" name=\"email\" id=\"email\" placeholder=\"Email\" ngModel><br>\n        <label>Password: </label><input type = \"password\" name=\"password\" id=\"password\" placeholder=\"Password\" ngModel><br>\n        \n        \n<label><a [routerLink] = \"['/register']\"><button >REGISTER</button></a></label>\n        \n        <label><input type=\"submit\" value = \"LOGIN\"></label>\n       \n</form>\n</fieldset>\n</div>\n<br>\n<h3 *ngIf = \"isAdded\" >{{confirmationString}}</h3>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n        <h2 style=\"text-align: center\">\n        Add New User\n      </h2>\n      \n      <fieldset>\n      <form id = \"formNewProduct\" name = \"formNewProduct\" #productData = \"ngForm\" (ngSubmit) = \"register(productData.value)\">\n        <label>Id: </label><input type = \"text\" name=\"id\" id=\"id\" placeholder=\"id\" ngModel><br>\n        <label>First Name: </label><input type = \"text\" name=\"firstname\" id=\"firstname\" placeholder=\"Fullname\" ngModel><br>\n        <label>Middle Name: </label><input type = \"text\" name=\"middlename\" id=\"middlename\" placeholder=\"middlename\" ngModel><br>\n        <label>Last Name: </label><input type = \"text\" name=\"lastname\" id=\"lastname\" placeholder=\"lastname\" ngModel><br>\n        <label>Email: </label><input type = \"text\" name=\"email\" id=\"email\" placeholder=\"email\" ngModel><br>\n        <label>Mobile Number: </label><input type = \"text\" name=\"mobile\" id=\"mobile\" placeholder=\"mobile\" ngModel><br>\n        <label>Password: </label><input type = \"text\" name=\"password\" id=\"password\" placeholder=\"password\" ngModel><br>\n        <label>Confirm Password: </label><input type = \"text\" name=\"confirmpassword\" id=\"confirmpassword\" placeholder=\"confirmpassword\" ngModel><br>\n        <label><input type=\"submit\" value = \"Register\" ></label>\n        \n        <button><input type=\"button\"  value=\"Reset form\" type=\"reset\" ></button> \n        \n        \n      </form>\n      \n      </fieldset>\n      <br>\n\n      </div>\n      <h3 *ngIf = \"isAdded\" >{{confirmationString}}</h3>\n    \n    <h4 *ngIf = \"issample\" >{{confirmationmationString}}</h4>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-users/update-product.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-users/update-product.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<h2>\n    Update user\n  </h2>\n  \n  <p *ngIf = \"!exist\">\n    User doesn't exist\n  </p>\n  \n  <fieldset>\n  <form id = \"formNewProduct\" name = \"formNewProduct\" #productData = \"ngForm\" (ngSubmit) = \"updateProduct(productData.value)\">\n    <label>Name: </label><input type = \"text\" name=\"name\" id=\"name\" placeholder=\"name\" [(ngModel)] = \"data.name\" ngModel><br>\n    <label>Email: </label><input type = \"text\" name=\"email\" id=\"email\" [(ngModel)] = \"data.email\" placeholder=\"email\" ngModel><br>\n    <label>Class: </label><input type = \"text\" name=\"class\" id=\"class\" [(ngModel)] = \"data.class\" placeholder=\"class\" ngModel><br>\n    <label>Year: </label><input type = \"text\" name=\"year\" id=\"year\" [(ngModel)] = \"data.year\" placeholder=\"year\" ngModel><br>\n    <label>City: </label><input type = \"text\" name=\"city\" id=\"city\" [(ngModel)] = \"data.city\" placeholder=\"city\" ngModel><br>\n    <label>Country: </label><input type = \"text\" name=\"country\" id=\"country\" [(ngModel)] = \"data.counrty\" placeholder=\"country\" ngModel><br>\n       \n    <input type=\"submit\" value = \"Update user\">\n    \n  </form>\n</fieldset>\n</div>\n<br>\n<h3 *ngIf = \"isAdded\" >{{confirmationString}}</h3>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/product.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/product.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink = \"/\"> < back </a>\n<div class=\"container\">\n  <h2>\n  Add New Product\n</h2>\n<fieldset>\n<form id = \"formNewProduct\" name = \"formNewProduct\" #productData = \"ngForm\" (ngSubmit) = \"addNewProduct(productData.value)\">\n    <label>Id: </label><input type = \"text\" name=\"id\" id=\"id\" placeholder=\"id\" ngModel><br>\n  <label>Name: </label><input type = \"text\" name=\"name\" id=\"name\" placeholder=\"name\" ngModel><br>\n  <label>Email: </label><input type = \"text\" name=\"email\" id=\"email\" placeholder=\"email\" ngModel><br>\n  <label>Class: </label><input type = \"text\" name=\"class\" id=\"class\" placeholder=\"class\" ngModel><br>\n  <label>Year: </label><input type = \"text\" name=\"year\" id=\"year\" placeholder=\"year\" ngModel><br>\n  <label>City: </label><input type = \"text\" name=\"city\" id=\"city\" placeholder=\"city\" ngModel><br>\n  <label>Country: </label><input type = \"text\" name=\"counrty\" id=\"counrty\" placeholder=\"counrty\" ngModel><br>\n  \n  <input type=\"submit\" value = \"Add Product\">\n</form>\n</fieldset>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/product.component */ "./src/app/users/product.component.ts");
/* harmony import */ var _update_users_update_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-users/update-product.component */ "./src/app/update-users/update-product.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _users_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
            _update_users_update_product_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProductComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
                { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                { path: "product", component: _users_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
                { path: "updateProduct/:id", component: _update_users_update_product_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProductComponent"] },
                { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  th, td {\r\n    padding: 25px;\r\n  }\r\n\r\n  label{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:30px;\r\n    text-align:right;\r\n    }\r\n\r\n  h3{\r\n      color:green;\r\n  }\r\n\r\n  fieldset{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    color: #000;\r\n    }\r\n\r\n  #parentDiv button[disabled=\"disabled\"] \r\n{\r\n  position: fixed; right: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCOztFQUVBO01BQ0UsV0FBVztFQUNmOztFQUdFO0lBQ0EsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYOztFQUlBOztFQUVGLGVBQWUsRUFBRSxVQUFVO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcblxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoM3tcclxuICAgICAgY29sb3I6Z3JlZW47XHJcbiAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGZpZWxkc2V0e1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgI3BhcmVudERpdiBidXR0b25bZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXSBcclxue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.products = [];
        this.fetchData = function () {
            this.http.get("http://localhost:5555/users").subscribe((res) => {
                this.products = res.json();
            });
        };
        this.deleteProduct = function (id) {
            if (confirm("Are you sure?")) {
                const url = `${"http://localhost:5555/users"}/${id}`;
                return this.http.delete(url, { headers: this.headers }).toPromise()
                    .then(() => {
                    this.fetchData();
                });
            }
        };
        this.confirmationString = "New product has been added please refresh!";
        this.isAdded = false;
        this.productObj = {};
        this.addNewProduct = function (product) {
            this.productObj = {
                "name": product.name,
                "color": product.color,
                "email": product.email,
                "class": product.class,
                "year": product.year,
                "city": product.city,
                "counrty": product.counrty,
                "id": product.id
            };
            console.log(this.productObj);
            this.http.post("http://localhost:5555/users", this.productObj).subscribe((res) => {
                this.isAdded = true;
            });
        };
    }
    logout() {
        this.router.navigate(["/"]);
    }
    ngOnInit() {
        this.fetchData();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  th, td {\r\n    padding: 25px;\r\n  }\r\n\r\n  label{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:30px;\r\n    text-align:right;\r\n    }\r\n\r\n  h3{\r\n        color: red;\r\n    }\r\n\r\n  fieldset{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    color: #000;\r\n    }\r\n\r\n  td{\r\n        text-align: center\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7O0VBRUQ7UUFDSyxVQUFVO0lBQ2Q7O0VBR0E7SUFDQSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1g7O0VBRUE7UUFDSTtJQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIH1cclxuXHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBsYWJlbHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgaDN7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIFxyXG4gICAgZmllbGRzZXR7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.productObj = {};
        this.isAdded = false;
        this.confirmationString = "wrong! with Email or password";
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.login = function (product) {
            this.productObj = {
                "email": product.email,
                "password": product.password
            };
            this.http.get("http://localhost:555/login").subscribe((res) => {
                this.products = res.json();
                var i;
                for (i = 0; i < this.products.length; i++) {
                    console.log(this.products[i].email);
                    console.log(this.products[i].password);
                    //var id=this.products[i].id;
                    if (this.productObj.email == this.products[i].email && this.productObj.password == this.products[i].password) {
                        console.log("hello");
                        this.router.navigate(['home']);
                    }
                    else {
                        this.isAdded = true;
                    }
                }
            });
        };
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  th, td {\r\n    padding: 25px;\r\n  }\r\n\r\n  label{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:30px;\r\n    text-align:right;\r\n    }\r\n\r\n  h3{\r\n        color: red;\r\n    }\r\n\r\n  h4{\r\n      color: green;\r\n  }\r\n\r\n  fieldset{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    color: #000;\r\n    }\r\n\r\n  td{\r\n        text-align: center\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7O0VBRUE7UUFDSSxVQUFVO0lBQ2Q7O0VBRUE7TUFDRSxZQUFZO0VBQ2hCOztFQUdFO0lBQ0EsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYOztFQUVBO1FBQ0k7SUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcblxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoM3tcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGg0e1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGZpZWxkc2V0e1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegisterComponent = class RegisterComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.isAdded = false;
        this.issample = false;
        this.confirmationString = "please register with unique ID! Refresh the page and try again";
        this.confirmationmationString = "succesfully registered";
        this.productObj = {};
        this.register = function (product) {
            this.productObj = {
                "firstname": product.firstname,
                "middlename": product.middlename,
                "lastname": product.lastname,
                "email": product.email,
                "mobilenumber": product.mobile,
                "password": product.password,
                "confirmpassword": product.confirmpassword,
                "id": product.id
            };
            this.http.get("http://localhost:555/login").subscribe((res) => {
                this.products = res.json();
                var i;
                for (i = 0; i < this.products.length; i++) {
                    console.log(this.productObj);
                    if (this.productObj.password == this.productObj.confirmpassword && this.productObj.id != this.products[i].password) {
                        console.log("success");
                        this.http.post("http://localhost:555/login", this.productObj).subscribe((res) => {
                            this.issample = true;
                        });
                    }
                    else {
                        this.isAdded = true;
                    }
                }
            });
        };
    }
    ngOnInit() {
    }
    back() {
        console.log("home");
        this.router.navigate(['/home']);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/update-users/update-product.component.css":
/*!***********************************************************!*\
  !*** ./src/app/update-users/update-product.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:30px;\r\n    text-align:right;\r\n    }\r\n    \r\n    \r\n    \r\n    fieldset{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    color: #000;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXVzZXJzL3VwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7Ozs7SUFJQTtJQUNBLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS11c2Vycy91cGRhdGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgZmllbGRzZXR7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/update-users/update-product.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/update-users/update-product.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductComponent", function() { return UpdateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);






let UpdateProductComponent = class UpdateProductComponent {
    constructor(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.data = {};
        this.products = [];
        this.exist = false;
        this.productObj = {};
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.confirmationString = "wrong! with Email or password";
        this.isAdded = false;
    }
    updateProduct(product) {
        this.productObj = {
            "name": product.name,
            "color": product.color,
            "email": product.email,
            "class": product.class,
            "year": product.year,
            "city": product.city,
            "counrty": product.country
        };
        const url = `${"http://localhost:5555/users"}/${this.id}`;
        this.http.put(url, JSON.stringify(this.productObj), { headers: this.headers })
            .toPromise()
            .then(() => {
            this.router.navigate(['home']);
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.http.get("http://localhost:5555/users").subscribe((res) => {
            this.products = res.json();
            for (var i = 0; i < this.products.length; i++) {
                if (parseInt(this.products[i].id) === this.id) {
                    this.exist = true;
                    this.data = this.products[i];
                    console.log(this.products[i].counrty);
                    break;
                }
                else {
                    this.exist = false;
                }
            }
        });
    }
};
UpdateProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UpdateProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-users/update-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-product.component.css */ "./src/app/update-users/update-product.component.css")).default]
    })
], UpdateProductComponent);



/***/ }),

/***/ "./src/app/users/product.component.css":
/*!*********************************************!*\
  !*** ./src/app/users/product.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:30px;\r\n    text-align:right;\r\n    }\r\n    \r\n    \r\n    \r\n    fieldset{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    color: #000;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCOzs7O0lBSUE7SUFDQSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1giLCJmaWxlIjoic3JjL2FwcC91c2Vycy9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBmaWVsZHNldHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/users/product.component.ts":
/*!********************************************!*\
  !*** ./src/app/users/product.component.ts ***!
  \********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let ProductComponent = class ProductComponent {
    constructor(http) {
        this.http = http;
        this.confirmationString = "New user has been added. please refresh!";
        this.isAdded = false;
        this.productObj = {};
        this.addNewProduct = function (product) {
            this.productObj = {
                "name": product.name,
                "color": product.color,
                "email": product.email,
                "class": product.class,
                "year": product.year,
                "city": product.city,
                "counrty": product.counrty,
                "id": product.id
            };
            this.http.post("http://localhost:5555/users", this.productObj).subscribe((res) => {
                this.isAdded = true;
            });
        };
    }
    ngOnInit() {
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/users/product.component.css")).default]
    })
], ProductComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Talachutla`s\angualr\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map