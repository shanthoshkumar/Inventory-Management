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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar ie-nav\" [containerInside]=\"false\">\r\n        <logo>\r\n            <a class=\"logo navbar-brand\" href=\"#\"><strong>Inventory Management</strong></a>\r\n        </logo>\r\n        <links>\r\n            <ul class=\"navbar-nav mr-auto color bg-faded\">\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"  mdbWavesEffect>\r\n                  <a class=\"nav-link\" routerLink=\"product\" >Add Product</a>\r\n              </li>\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\r\n                  <a class=\"nav-link\"routerLink=\"updateproduct\">Update Product</a>\r\n              </li>\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\r\n                  <a class=\"nav-link\"routerLink=\"viewcustomerorder\">Purchase History</a>\r\n              </li>\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\r\n                  <a class=\"nav-link\"routerLink=\"stockproduct\">Products in Stock</a>\r\n              </li>\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\r\n                  <a class=\"nav-link\"routerLink=\"transferowner\" >Transfer Ownership</a>\r\n              </li>\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"mdbWavesEffect>\r\n                    <a class=\"nav-link\"routerLink=\"report\" >Sales Report</a>\r\n                </li>\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"mdbWavesEffect>\r\n                       <a class=\"nav-link\"routerLink=\"sort\" >Sort Report</a>\r\n                 </li>\r\n              <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"mdbWavesEffect>\r\n                  <a class=\"nav-link\"routerLink=\"withdraw\" >Withdraw</a>\r\n              </li>\r\n              \r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                    <!-- <li><b style=\"color:white\">Account</b><input type=\"text\" class=\"form-control\" value={{address}} readonly/></li>&nbsp; -->\r\n                    <li><b style=\"color:white\">Balance</b><input type=\"text\" class=\"form-control\" value={{balance}} readonly/></li>\r\n              </ul>\r\n           \r\n        </links>\r\n      </mdb-navbar>  \r\n      <router-outlet></router-outlet>   "

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(wcs, router) {
        var _this = this;
        this.wcs = wcs;
        this.router = router;
        this.wcs.Fetch_Account().then(function (acc) { return _this.address = acc; });
        this.wcs.Fetch_Balance().then(function (bal) { return _this.ether = bal; });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.wcs.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.wcs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            alert('Address Change Detected Please Refresh Page');
                            window.location.reload();
                            // meta.router.navigate(['admin']);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.wcs.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.wcs.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../updateproduct/updateproduct.component */ "./src/app/updateproduct/updateproduct.component.ts");
/* harmony import */ var _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stockproduct/stockproduct.component */ "./src/app/stockproduct/stockproduct.component.ts");
/* harmony import */ var _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewcus-order/viewcus-order.component */ "./src/app/viewcus-order/viewcus-order.component.ts");
/* harmony import */ var _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transferownership/transferownership.component */ "./src/app/transferownership/transferownership.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customerpurchase/customerpurchase.component */ "./src/app/customerpurchase/customerpurchase.component.ts");
/* harmony import */ var _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancelorder/cancelorder.component */ "./src/app/cancelorder/cancelorder.component.ts");
/* harmony import */ var _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../metamask/metamask.component */ "./src/app/metamask/metamask.component.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cutomer-guard/customer.guard */ "./src/app/cutomer-guard/customer.guard.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sort/sort.component */ "./src/app/sort/sort.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]],
        children: [
            {
                path: 'product',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
            },
            {
                path: 'updateproduct',
                component: _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_5__["UpdateproductComponent"]
            },
            {
                path: 'viewcustomerorder',
                component: _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_7__["ViewcusOrderComponent"]
            },
            {
                path: 'stockproduct',
                component: _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_6__["StockproductComponent"]
            },
            {
                path: 'report',
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_15__["ViewComponent"]
            },
            {
                path: 'sort',
                component: _sort_sort_component__WEBPACK_IMPORTED_MODULE_16__["SortComponent"]
            },
            {
                path: 'transferowner',
                component: _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_8__["TransferownershipComponent"]
            },
            {
                path: 'withdraw',
                component: _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__["WithdrawComponent"]
            },
        ]
    },
    {
        path: 'customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
        canActivate: [_cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_14__["CustomerGuard"]],
        children: [
            {
                path: 'customerpurchase',
                component: _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_10__["CustomerpurchaseComponent"]
            },
            {
                path: 'cancelorder',
                component: _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_11__["CancelorderComponent"]
            },
        ]
    },
    {
        path: "metamask",
        component: _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_12__["MetamaskComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row-sm-3\">    \r\n        <app-admin></app-admin>\r\n        <app-customer></app-customer>        \r\n    </div>\r\n       \r\n    <div class=\"row-sm-9\">\r\n            <router-outlet></router-outlet>    \r\n        </div>\r\n    "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./updateproduct/updateproduct.component */ "./src/app/updateproduct/updateproduct.component.ts");
/* harmony import */ var _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stockproduct/stockproduct.component */ "./src/app/stockproduct/stockproduct.component.ts");
/* harmony import */ var _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewcus-order/viewcus-order.component */ "./src/app/viewcus-order/viewcus-order.component.ts");
/* harmony import */ var _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transferownership/transferownership.component */ "./src/app/transferownership/transferownership.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customerpurchase/customerpurchase.component */ "./src/app/customerpurchase/customerpurchase.component.ts");
/* harmony import */ var _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cancelorder/cancelorder.component */ "./src/app/cancelorder/cancelorder.component.ts");
/* harmony import */ var _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./metamask/metamask.component */ "./src/app/metamask/metamask.component.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cutomer-guard/customer.guard */ "./src/app/cutomer-guard/customer.guard.ts");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/sort/sort.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_10__["UpdateproductComponent"],
                _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_11__["StockproductComponent"],
                _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_12__["ViewcusOrderComponent"],
                _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_13__["TransferownershipComponent"],
                _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawComponent"],
                _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_15__["CustomerpurchaseComponent"],
                _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_16__["CancelorderComponent"],
                _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_17__["MetamaskComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_21__["ViewComponent"],
                _sort_sort_component__WEBPACK_IMPORTED_MODULE_22__["SortComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot()
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_authguard_guard__WEBPACK_IMPORTED_MODULE_18__["AuthguardGuard"], _cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_19__["CustomerGuard"], _services_web3services_service__WEBPACK_IMPORTED_MODULE_20__["Web3servicesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authguard.guard.ts":
/*!************************************!*\
  !*** ./src/app/authguard.guard.ts ***!
  \************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/web3services.service */ "./src/app/services/web3services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.wcs.check_admin().then(function (admin) {
            console.log(admin);
            if (admin != true) {
                // console.log("if part");
                _this.router.navigate(['customer']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthguardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_2__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/cancelorder/cancelorder.component.html":
/*!********************************************************!*\
  !*** ./src/app/cancelorder/cancelorder.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 100px; \">\r\n\r\n      <div class=\"row col text-center\">\r\n\r\n\r\n          <div class=\"col-sm-12\" >\r\n              <div>\r\n                  <h5>ORDER DETAILS</h5>\r\n                  <h5 style=\"color:blue;\">(Cancel Within One Hour)</h5>\r\n                  <br>\r\n              </div>\r\n\r\n\r\n\r\n<div class=\"ScrollStyle\">\r\n    <!--Table-->\r\n<table class=\"table\">\r\n\r\n    <!--Table head-->\r\n    <thead class=\"mdb-color darken-3\">\r\n        <tr class=\"text-white\">\r\n            \r\n          <tr class=\"text-white\">\r\n              <th>Order Id</th>\r\n              <th>Product Id</th>\r\n              <th>Customer Id</th>\r\n              <th>ProductName</th>\r\n              <th> Quantity</th>\r\n              <th>Price</th>\r\n              <th>Date</th>\r\n              <th>Action</th>\r\n          </tr>\r\n      </thead>\r\n      <!--Table head-->\r\n  \r\n      <!--Table body-->\r\n      <tbody>\r\n          <tr *ngFor=\"let order of list;\" >\r\n              <td >{{order.oid}}</td>\r\n              <td >{{order.pid}}</td>\r\n              <td >{{order.cusid}} </td>\r\n              <td >{{order.pname}} </td>\r\n              <td>{{order.quantity}}</td>\r\n              <td>{{order.price}}</td>\r\n              <td>{{order.dateVal | date:'d/M/y'}}</td>\r\n             <td><button type=\"submit\" id=\"cancel\" (click)=\"cancel(order.oid,order.pid);\" class=\"btn btn-default\">cancel</button></td>\r\n          </tr>   \r\n      </tbody>\r\n    <!--Table body-->\r\n  </table>\r\n  </div>\r\n\r\n<!--Table-->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n</main>\r\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Loading...\"\r\n  type=\"ball-scale-multiple\"></ngx-spinner>\r\n "

/***/ }),

/***/ "./src/app/cancelorder/cancelorder.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cancelorder/cancelorder.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cancelorder/cancelorder.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cancelorder/cancelorder.component.ts ***!
  \******************************************************/
/*! exports provided: CancelorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelorderComponent", function() { return CancelorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CancelorderComponent = /** @class */ (function () {
    function CancelorderComponent(pro, router, spinner) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.list = [];
    }
    CancelorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pro.getCustomerCount().then(function (order) {
            order.forEach(function (element) {
                _this.pro.ViewCustomer(element).then(function (obj) {
                    var t = (parseInt((Date.now() / 1000).toString()));
                    var x = obj[9] + (3600);
                    if (obj[3] != "" && obj[8] == 1 && obj[2] == _this.pro.account && (t - obj[9].toNumber() <= 3600)) {
                        _this.list.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "quantity": obj[5], "price": obj[6], "dateVal": obj[7] });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_5__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            /// alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    CancelorderComponent.prototype.cancel = function (a, b) {
        var _this = this;
        var meta = this;
        this.spinner.show();
        this.pro.cancel(a, b).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("operation rejected");
                window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(result);
                    window.location.reload();
                });
            }
        });
    };
    CancelorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancelorder',
            template: __webpack_require__(/*! ./cancelorder.component.html */ "./src/app/cancelorder/cancelorder.component.html"),
            styles: [__webpack_require__(/*! ./cancelorder.component.scss */ "./src/app/cancelorder/cancelorder.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], CancelorderComponent);
    return CancelorderComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar ie-nav\" [containerInside]=\"false\">\r\n  <logo>\r\n      <a class=\"logo navbar-brand\" href=\"#\"><strong>Inventory Management</strong></a>\r\n  </logo>\r\n  <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n          \r\n          <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"  mdbWavesEffect>\r\n              <a class=\"nav-link\" routerLink=\"customerpurchase\">Customer Purchase</a>\r\n          </li>\r\n          <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"  mdbWavesEffect>\r\n              <a class=\"nav-link\"routerLink=\"cancelorder\">Cancel Order</a>\r\n          </li>\r\n         \r\n      </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><b style=\"color:white\">Account</b><input type=\"text\" class=\"form-control\" value={{address}} readonly/></li>&nbsp;\r\n                <li><b style=\"color:white\">Balance</b><input type=\"text\" class=\"form-control\" value={{ether}} readonly/></li>\r\n          </ul>\r\n      </links>\r\n</mdb-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/customer/customer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(pro, router) {
        var _this = this;
        this.pro = pro;
        this.router = router;
        this.pro.Fetch_Account().then(function (acc) { return _this.address = acc; });
        this.pro.Fetch_Balance().then(function (bal) { return _this.ether = bal; });
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customerpurchase/customerpurchase.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customerpurchase/customerpurchase.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 100px; \">\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-3\" >\r\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\r\n                <div>\r\n                 <h5>Customer Purchase Form</h5>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-2\" for=\"productid\">ProductID<font color=\"red\">*</font></label>\r\n                  <div class=\"col-sm-4\">\r\n                    <input type=\"number\" class=\"form-control\" name=\"productid\" [(ngModel)]=\"productid\" formControlName=\"productid\"  (mouseout)=\"check()\" >\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-2\" for=\"quantity\">Quantity<font color=\"red\">*</font></label>\r\n                    <div class=\"col-sm-4\">\r\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"quantity\" [(ngModel)]=\"quantity\" formControlName=\"quantity\" (mouseout)=\"quantitycheckOut()\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-2\" for=\"price\">Price<font color=\"red\">*</font></label>\r\n                    <div class=\"col-sm-4\">\r\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"price\" [(ngModel)]=\"price\"  [value]=\"price\"formControlName=\"price\" (mouseenter)=\"onKey($event);\" readonly >\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-sm-offset-2 col-sm-10\">\r\n                      <div *ngIf=\"angForm.controls['productid'].valid \">\r\n                        <div *ngIf=\"angForm.controls['quantity'].valid \">\r\n                          <div *ngIf=\"angForm.controls['price'].valid \">\r\n                              <button type=\"submit\" (click)=\"order();\" class=\"btn btn-default\">ORDER</button>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n          <div class=\"col-sm-8\" >\r\n              <div>\r\n                  <h5> Product Details</h5>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"ScrollStyle\">\r\n<!--Table-->\r\n<table class=\"table\" style=\"height:550px;width:600px;overflow-y:auto;display:block;\">\r\n\r\n  <!--Table head-->\r\n  <thead class=\"mdb-color darken-3\">\r\n      <tr class=\"text-white\">\r\n         \r\n        <th>Product Id</th>\r\n        <th>Product Name</th>\r\n        <th>Brand Name</th>\r\n        <th>Quantity</th>\r\n        <th>Price Per Quantity</th>\r\n        <th>Date</th>\r\n\r\n      </tr>\r\n  </thead>\r\n  <!--Table head-->\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n    <tr *ngFor=\"let product of details;\">\r\n        <td >{{product.pid}}</td>\r\n        <td >{{product.pname}} </td>\r\n        <td>{{product.brand}}</td>\r\n        <td>{{product.quantity}}</td>\r\n        <td>{{product.price}}</td>\r\n        <td>{{product.dateVal | date:'d/M/y'}}</td>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n</table>\r\n<!--Table-->\r\n</div><br><br><br><br>\r\n\r\n\r\n    <div>\r\n        <h5>Purchase Details</h5>\r\n    </div>\r\n    <div class=\"ScrollStyle\">\r\n<table class=\"table\" style=\"height:550px;width:1000px;overflow-y:auto;display:block;\">\r\n\r\n  <!--Table head-->\r\n  <thead class=\"mdb-color darken-3\">\r\n      <tr class=\"text-white\">\r\n          \r\n        <tr class=\"text-white\">\r\n            <th>Order Id</th>\r\n            <th>Customer Address</th>\r\n            <th>Product Id</th>\r\n            <th>Product Name</th>\r\n            <th>Quantity</th>\r\n            <th>Price (in ether)</th>\r\n            <th>Date of Purchase</th>\r\n        </tr>\r\n    </thead>\r\n    <!--Table head-->\r\n\r\n    <!--Table body-->\r\n    <tbody>\r\n        <tr *ngFor=\"let order of list;\">\r\n            <td >{{order.oid}}</td>\r\n            <td >{{order.cusid}}</td>\r\n            <td >{{order.pid}} </td>\r\n            <td >{{order.pname}} </td>\r\n            <td>{{order.quantity}}</td>\r\n            <td>{{order.price}}</td>\r\n            <td>{{order.dateVal | date:'d/M/y'}}</td>\r\n        </tr>   \r\n    </tbody>\r\n  <!--Table body-->\r\n</table>\r\n</div>\r\n       </div>\r\n        </div>\r\n      </div>\r\n\r\n</main>\r\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  loadingText=\"Loading...\"\r\n  type=\"ball-scale-multiple\"></ngx-spinner>"

/***/ }),

/***/ "./src/app/customerpurchase/customerpurchase.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/customerpurchase/customerpurchase.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customerpurchase/customerpurchase.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customerpurchase/customerpurchase.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerpurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerpurchaseComponent", function() { return CustomerpurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerpurchaseComponent = /** @class */ (function () {
    function CustomerpurchaseComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.details = [];
        this.list = [];
        this.createForm();
    }
    CustomerpurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pro.getproductCount().then(function (product) {
            product.forEach(function (element) {
                console.log(element);
                _this.pro.ViewProduct(element).then(function (obj) {
                    console.log(obj);
                    if (obj[1] != "") {
                        obj[4] = obj[4] / 100;
                        _this.details.push({ "pid": obj[0], "pname": obj[1], "brand": obj[2], "quantity": obj[3], "price": obj[4], "dateVal": obj[5] });
                    }
                });
            });
        });
        this.pro.getCustomerCount().then(function (order) {
            order.forEach(function (element) {
                _this.pro.ViewCustomer(element).then(function (obj) {
                    if (obj[3] != "" && obj[2] == _this.pro.account && obj[8] == 1) {
                        // obj[6]=obj[6]/100;
                        _this.list.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "quantity": obj[5], "price": obj[6], "dateVal": obj[7] });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_6__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            // alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    CustomerpurchaseComponent.prototype.onKey = function (e) {
        var _this = this;
        this.pro.ViewProduct1(this.productid).then(function (res) {
            _this.price = (res[4] / 100) * _this.quantity;
            console.log(_this.price);
        });
    };
    CustomerpurchaseComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            productid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    CustomerpurchaseComponent.prototype.check = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Invalid Product id");
            }
        });
    };
    CustomerpurchaseComponent.prototype.check1 = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
            }
        });
    };
    //  checkOut(){
    //    this.pro.ViewProduct(this.productid).then(res=>{
    //          if(res[0]== this.productid && res[4]!=0){
    //            //swal("valid");
    //          }
    //          else{
    //             swal("Invalid Product Id");
    //          }
    //    })
    // }
    CustomerpurchaseComponent.prototype.quantitycheckOut = function () {
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[3] != 0) {
                //s swal("valid");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Out Of Stock");
            }
        });
    };
    CustomerpurchaseComponent.prototype.order = function () {
        var _this = this;
        var meta = this;
        meta.spinner.show();
        meta.pro.order(this.productid, this.quantity, this.price).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("operation rejected");
                _this.productid = "";
                _this.quantity = "";
                _this.price = "";
                window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()(result);
                    _this.productid = "";
                    _this.quantity = "";
                    _this.price = "";
                    window.location.reload();
                });
            }
        });
    };
    CustomerpurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerpurchase',
            template: __webpack_require__(/*! ./customerpurchase.component.html */ "./src/app/customerpurchase/customerpurchase.component.html"),
            styles: [__webpack_require__(/*! ./customerpurchase.component.scss */ "./src/app/customerpurchase/customerpurchase.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_2__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CustomerpurchaseComponent);
    return CustomerpurchaseComponent;
}());



/***/ }),

/***/ "./src/app/cutomer-guard/customer.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/cutomer-guard/customer.guard.ts ***!
  \*************************************************/
/*! exports provided: CustomerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerGuard", function() { return CustomerGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerGuard = /** @class */ (function () {
    function CustomerGuard(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    CustomerGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.wcs.check_admin().then(function (admin) {
            console.log(admin);
            if (admin != false) {
                console.log("if part");
                _this.router.navigate(['admin']);
                return false;
            }
            else {
                console.log("else part");
                //this.router.navigate(['admin']);
                return true;
            }
        });
    };
    CustomerGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_2__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerGuard);
    return CustomerGuard;
}());



/***/ }),

/***/ "./src/app/inventory.json":
/*!********************************!*\
  !*** ./src/app/inventory.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ORDER","outputs":[{"name":"id2","type":"uint256"},{"name":"id1","type":"uint256"},{"name":"cid","type":"address"},{"name":"name","type":"string"},{"name":"brand","type":"string"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"time","type":"uint256"},{"name":"status","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"brand","type":"string"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"p_details","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"oid","type":"uint256"},{"name":"id","type":"uint256"}],"name":"ordercancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"PROD","outputs":[{"name":"pid","type":"uint256"},{"name":"pname","type":"string"},{"name":"pbrand","type":"string"},{"name":"pquantity","type":"uint256"},{"name":"pprice","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"pquantity","type":"uint256"}],"name":"order","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getbalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Transfer_ToOwner","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"ordercount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"_quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"update_product","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"viewproduct","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"UPDATE","outputs":[{"name":"ipid","type":"uint256"},{"name":"iquantity","type":"uint256"},{"name":"iprice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"view1","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"check_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"productCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newowner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}];

/***/ }),

/***/ "./src/app/metamask/metamask.component.html":
/*!**************************************************!*\
  !*** ./src/app/metamask/metamask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\t<head>\r\n\t\t<title>Ethereum Account Connectivity Error Page</title>\r\n\t</head>\r\n\t<body>\r\n\t\t <img src=\"./assets/metamask_logo.png\"/> \r\n\t\t<!-- <center> -->\r\n\t\t\t<p>\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>There was an error while fetching your account.\r\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\r\n\r\n\t\t\t\t<br>Tips:\r\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\r\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \r\n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\r\n\t\t\t</p>\r\n\t\t<!-- </center> -->\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./src/app/metamask/metamask.component.scss":
/*!**************************************************!*\
  !*** ./src/app/metamask/metamask.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/metamask/metamask.component.ts":
/*!************************************************!*\
  !*** ./src/app/metamask/metamask.component.ts ***!
  \************************************************/
/*! exports provided: MetamaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskComponent", function() { return MetamaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetamaskComponent = /** @class */ (function () {
    function MetamaskComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    MetamaskComponent.prototype.ngOnInit = function () {
        var meta = this;
        this.id1 = setInterval(function () {
            if (typeof window.web3 !== 'undefined') {
                meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                if (meta._web3.eth.accounts[0] !== undefined) {
                    meta.router.navigate(['metamask']);
                }
                if (meta._web3.eth.accounts != meta._web3.eth.accounts[0]) {
                    meta.router.navigate(['']);
                }
            }
        }, 200);
    };
    MetamaskComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    MetamaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metamask',
            template: __webpack_require__(/*! ./metamask.component.html */ "./src/app/metamask/metamask.component.html"),
            styles: [__webpack_require__(/*! ./metamask.component.scss */ "./src/app/metamask/metamask.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MetamaskComponent);
    return MetamaskComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container\" style=\"margin-top: 100px; \">\r\n    <div class=\"row\" style=\"margin-top: 300px; \">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-8\">\r\n      \r\n                <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate >\r\n                  <div>\r\n                   <h3>Enter the Product Details </h3>\r\n                   <br>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-2\" for=\"productname\">Name<font color=\"red\">*</font></label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input  class=\"form-control\" onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))' name=\"productname\" [(ngModel)]=\"productname\" formControlName=\"productname\" placeholder=\"Enter Product Name\" >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-2\" for=\"brand\">Brand<font color=\"red\">*</font></label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input class=\"form-control\" name=\"brand\" [(ngModel)]=\"brand\"  formControlName=\"brand\" placeholder=\"Enter Brand Name\" >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-2\" for=\"quantity\">Quantity<font color=\"red\">*</font></label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"number\" class=\"form-control\" min=\"0\" name=\"quantity\" [(ngModel)]=\"quantity\" [value]=\"quantity\" formControlName=\"quantity\" placeholder=\"Enter no of quantity\" required>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label class=\"control-label col-sm-4\" for=\"amount\">Price Per Quantity<font color=\"red\">*</font></label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"number\" class=\"form-control\" min=\"1\" name=\"amount\"  [(ngModel)]=\"amount\" [value]=\"amount\" formControlName=\"amount\" placeholder=\"Enter amount in Ether\" required>\r\n                      </div>\r\n                    </div>\r\n    \r\n                  \r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-sm-offset-2 col-sm-10\">\r\n                        <div *ngIf=\"angForm.controls['productname'].valid \">\r\n                          <div *ngIf=\"angForm.controls['brand'].valid\"> \r\n                            <div *ngIf=\"angForm.controls['quantity'].valid\"> \r\n                              <div *ngIf=\"angForm.controls['amount'].valid\">\r\n                                <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-default\">ADD</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n            </div>\r\n    </div>\r\n    </div>\r\n\r\n         \r\n\r\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading ...\"\r\ntype=\"ball-scale-multiple\"></ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: #e91e63; }\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = /** @class */ (function () {
    function ProductComponent(web3Service, router, spinner, fb) {
        this.web3Service = web3Service;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.createForm();
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.web3Service.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.web3Service.getAccount().then(function (acc) {
            _this.account = acc;
            console.log(_this.account);
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_5__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.web3Service.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.web3Service.getAccount().then(function (account) { return _this.balance = account; });
        }, 20000);
    };
    ProductComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            productname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProductComponent.prototype.submit = function () {
        var _this = this;
        var meta = this;
        meta.spinner.show();
        this.amount = this.amount * 100;
        console.log("before product");
        meta.web3Service.Product(this.productname, this.brand, this.quantity, this.amount).then(function (res) {
            console.log("After Product");
            meta.spinner.hide();
            if (res == 0) {
                console.log("res==0");
                swal("operation rejected");
                _this.productname = "";
                _this.quantity = "";
                _this.brand = "";
                _this.amount = "";
            }
            else {
                console.log("In else");
                meta.web3Service.hash(res).then(function (result) {
                    console.log("After Hash");
                    swal(result);
                    _this.productname = "";
                    _this.quantity = "";
                    _this.brand = "";
                    _this.amount = "";
                });
            }
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/services/web3services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/web3services.service.ts ***!
  \**************************************************/
/*! exports provided: Web3servicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3servicesService", function() { return Web3servicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};


var inventoryabi = __webpack_require__(/*! ../inventory.json */ "./src/app/inventory.json");
var Web3servicesService = /** @class */ (function () {
    function Web3servicesService() {
        this._account = null;
        this._tokenContractAddress = "0x931e5417ee2587b96fabBA25B666302222b426f2"; //"0x3f2089cd5b7518768e84cc198bcdc8aa162b8cab";
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(window.web3.currentProvider);
        }
        else {
            console.warn("Please use a dapp browser like mist or MetaMask plugin for chrome");
        }
        this._web3.version.getNetwork(function (err, netId) {
            switch (netId) {
                case "1":
                    console.log('This is mainnet');
                    break;
                case "2":
                    console.log('This is deprecated Morden test network');
                    break;
                case "3":
                    console.log('This is ropsten test network');
                    break;
                case "4":
                    console.log('This is the Rinkeby test network');
                case "42":
                    console.log('This is the kovan test network');
                    break;
                default:
                    console.log('This is an unknown network.');
            }
        });
        this._tokenContract = this._web3.eth.contract(inventoryabi).at(this._tokenContractAddress);
        this.Fetch_Account();
        this.Fetch_Balance();
    }
    //getAccount details
    Web3servicesService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        alert('There was an error fetching your accounts.');
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                                        return;
                                    }
                                    resolve(accs[0]);
                                    _this.account = accs[0];
                                });
                            })];
                    case 1:
                        _a._account = (_b.sent());
                        this._web3.eth.defaultAccount = this._account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    //getBalance
    Web3servicesService.prototype.getUserBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.getbalance.call(function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                        resolve(0);
                                    }
                                    resolve(_web3.fromWei(result));
                                });
                            })];
                }
            });
        });
    };
    //Add Product
    Web3servicesService.prototype.Product = function (a, b, c, d) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                console.log("new Promise");
                                console.log(a, b, c, d);
                                _this._tokenContract.p_details(a, b, c, d, { from: account, gas: 600000 }, function (err, result) {
                                    console.log("hi");
                                    console.log(err);
                                    console.log(result);
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else {
                                        console.log(result);
                                        resolve(result);
                                    }
                                });
                            })];
                }
            });
        });
    };
    //Metamask Account 
    Web3servicesService.prototype.Fetch_Account = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        // this.router.navigate(['metamask']);
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        // this.router.navigate(['metamask']);
                                        return;
                                    }
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a.account = (_b.sent());
                        this._web3.eth.defaultAccount = this.account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this.account)];
                }
            });
        });
    };
    //metamask Account Balance
    Web3servicesService.prototype.Fetch_Balance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Fetch_Account()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._web3.eth.getBalance(account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(_web3.fromWei(result));
                                });
                            })];
                }
            });
        });
    };
    //getProductCount
    Web3servicesService.prototype.getproductCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.productCount({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    var arr = [];
                                    for (var i = 1; i <= result.toNumber(); i++) {
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    //Viewproduct
    Web3servicesService.prototype.ViewProduct = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.viewproduct.call(pid, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    //  result[0] = result[0].toNumber();
                                    var t = new Date(result[5] * 1000);
                                    result[5] = t;
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    Web3servicesService.prototype.ViewProduct1 = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.viewproduct.call(pid, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    result[4] = result[4].toNumber();
                                    var t = new Date(result[5] * 1000);
                                    result[5] = t;
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //updateproduct
    Web3servicesService.prototype.update_product = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.update_product(a, b, c, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //getCustomerCount
    Web3servicesService.prototype.getCustomerCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ordercount({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    var arr = [];
                                    for (var i = 1; i <= result.toNumber(); i++) {
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    //viewcustomer
    Web3servicesService.prototype.ViewCustomer = function (oid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ORDER(oid, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    result[9] = result[7];
                                    result[6] = _web3.fromWei(result[6], "ether");
                                    var t = new Date(result[7] * 1000);
                                    result[7] = t;
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //transferOwnership
    Web3servicesService.prototype.TransferownerShip = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.transferOwnership(address, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //Withdraw
    Web3servicesService.prototype.WithDraw = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.Transfer_ToOwner(amount, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //order
    Web3servicesService.prototype.order = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.order(a, b, { from: account, value: _web3.toWei(c, "ether"), gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //cancelorder
    Web3servicesService.prototype.cancel = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ordercancel(a, b, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //getbalance
    Web3servicesService.prototype.getbalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.getbalance({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //checkBalance
    Web3servicesService.prototype.check_balance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.check_balance({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //checking admin
    Web3servicesService.prototype.check_admin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, accounts, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = '';
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        accounts = _a.sent();
                        meta = this;
                        //let key_admin:boolean =false;
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 2:
                        //let key_admin:boolean =false;
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.owner({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log("error");
                                        reject(err);
                                    }
                                    else {
                                        if (result === accounts) {
                                            //key_admin = true;
                                            console.log("if works");
                                        }
                                    }
                                    //console.log(key_admin);
                                    //console.log(this.address);
                                    console.log("testing", result == accounts);
                                    console.log(accounts);
                                    //console.log(this.account);
                                    resolve(result == accounts);
                                });
                            })];
                }
            });
        });
    };
    //hash function
    Web3servicesService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        resolve("Success");
                                    }
                                    else {
                                        resolve("Transaction Failed");
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    Web3servicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Web3servicesService);
    return Web3servicesService;
}());



/***/ }),

/***/ "./src/app/sort/sort.component.html":
/*!******************************************!*\
  !*** ./src/app/sort/sort.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 100px; \">\n<div class=\"row\">\n        <div class=\"col-sm-4\">\n            <label><b>ID:&nbsp;&nbsp;</b></label>\n                <input #sortlist type=\"text\" placeholder=\"Enter ID\"><br><br>\n                <label><b>Select option:&nbsp;&nbsp;</b></label>\n                <select #options>\n                    <option value=\"0\">OrderID</option>\n                    <!-- <option value=\"1\">CustomerID</option>     -->\n                    <option value=\"2\">ProductID</option>\n                \n                </select><br><br>\n                <input type=\"submit\" class=\"btn btn-default\" (click)=\"sortlisting(sortlist.value,options.value);\"> \n            </div>\n            <div class=\"col-sm-8\">\n <!-- sortlist table -->\n    \n <table class=\"table\" style=\"height:550px;width:950px;overflow-y:auto;display:block;\">\n    \n        <!--Table head-->\n        <thead class=\"mdb-color darken-3\">\n            <tr class=\"text-white\">\n                <th>Order Id</th>\n                <th>Customer Id</th>\n                <th>Productid</th>\n                <th>product name</th>\n                <th>Quantity</th>\n                <th> Price</th>\n                <th>Date</th>\n                <th>Status</th>\n             \n            </tr>\n        </thead>\n        <!--Table head-->\n      \n        <!--Table body-->\n        <tbody>\n            <tr *ngFor=\"let sorting of sort;\">\n                <td >{{sorting.oid}}</td>\n                <td >{{sorting.cusid}}</td>\n                <td >{{sorting.pid}} </td>\n                <td >{{sorting.pname}} </td>\n                <td>{{sorting.totalquantity}}</td>\n                <td>{{sorting.totalprice}}</td>\n                <td>{{sorting.dateVal | date:'d/M/y'}} </td>\n                <td>{{sorting.Status}}</td>\n            </tr>   \n        </tbody>\n        <!--Table body-->\n      </table>\n                </div>\n</div> \n</div>"

/***/ }),

/***/ "./src/app/sort/sort.component.scss":
/*!******************************************!*\
  !*** ./src/app/sort/sort.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sort/sort.component.ts":
/*!****************************************!*\
  !*** ./src/app/sort/sort.component.ts ***!
  \****************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SortComponent = /** @class */ (function () {
    function SortComponent(web3Service, router) {
        this.web3Service = web3Service;
        this.router = router;
        this.details = [];
        this.sort = [];
        this.totalproductsale = 0;
        this.totalamount = 0;
    }
    SortComponent.prototype.ngOnInit = function () {
    };
    //sortlist table
    SortComponent.prototype.sortlisting = function (sortlist, options) {
        var _this = this;
        this.sort = [0];
        if (options == 0) {
            this.web3Service.getCustomerCount().then(function (order) {
                order.forEach(function (element) {
                    _this.web3Service.ViewCustomer(element).then(function (obj) {
                        if (sortlist == obj[0]) {
                            if (obj[8] == 1) {
                                var f = "ORDERED";
                                var tot;
                                //  alert(obj[5]);
                                //  this.totalproductsale=this.totalproductsale+obj[5];
                                //  alert(this.totalproductsale)
                                //  this.totalamount=+parseInt(obj[6]);
                            }
                            else {
                                var f = "CANCELLED";
                            }
                            if (obj[3] != "") {
                            }
                            _this.sort.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "totalprice": obj[6], "totalquantity": obj[5], "dateVal": obj[7], "Status": f });
                        } //if
                        //  else {
                        //    alert("can't find records for this duration");
                        //  }
                    });
                });
            });
        } //if
        else if (options == 1) {
            this.sort = [0];
            this.web3Service.getCustomerCount().then(function (order) {
                order.forEach(function (element) {
                    _this.web3Service.ViewCustomer(element).then(function (obj) {
                        if (sortlist == obj[2]) {
                            if (obj[8] == 1) {
                                var f = "ORDERED";
                                var tot;
                                //  alert(obj[5]);
                                //  this.totalproductsale=this.totalproductsale+obj[5];
                                //  alert(this.totalproductsale)
                                //  this.totalamount=+parseInt(obj[6]);
                            }
                            else {
                                var f = "CANCELLED";
                            }
                            if (obj[3] != "") {
                            }
                            _this.sort.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "totalprice": obj[6], "totalquantity": obj[5], "dateVal": obj[7], "Status": f });
                        } //if
                        //  else {
                        //    alert("can't find records for this duration");
                        //  }
                    });
                });
            });
        } //elseif 1
        else if (options == 2) {
            this.sort = [0];
            this.web3Service.getCustomerCount().then(function (order) {
                order.forEach(function (element) {
                    _this.web3Service.ViewCustomer(element).then(function (obj) {
                        if (sortlist == obj[1]) {
                            if (obj[8] == 1) {
                                var f = "ORDERED";
                                var tot;
                                //  alert(obj[5]);
                                //  this.totalproductsale=this.totalproductsale+obj[5];
                                //  alert(this.totalproductsale)
                                //  this.totalamount=+parseInt(obj[6]);
                            }
                            else {
                                var f = "CANCELLED";
                            }
                            if (obj[3] != "") {
                            }
                            _this.sort.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "totalprice": obj[6], "totalquantity": obj[5], "dateVal": obj[7], "Status": f });
                        } //if
                        //  else {
                        //    alert("can't find records for this duration");
                        //  }
                    });
                });
            });
        } //elseif2
    };
    SortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sort',
            template: __webpack_require__(/*! ./sort.component.html */ "./src/app/sort/sort.component.html"),
            styles: [__webpack_require__(/*! ./sort.component.scss */ "./src/app/sort/sort.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/app/stockproduct/stockproduct.component.html":
/*!**********************************************************!*\
  !*** ./src/app/stockproduct/stockproduct.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n        <!-- <div class=\"container-fluid\" style=\"margin-top: 100px; \">\r\n      \r\n            <div class=\"row col text-center\">\r\n      \r\n      \r\n                <div class=\"col-sm-12\" >\r\n                    <div>\r\n                        <h5><b>List of Products in Stock</b></h5>\r\n                        <br>\r\n                    </div> -->\r\n      \r\n      \r\n    <div class=\"container\" style=\"margin-top: 100px; \">\r\n           \r\n      <!-- <div class=\"ScrollStyle\"> -->\r\n      <!--Table-->\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-sm-9\">\r\n            <h5><b>List of Products in Stock</b></h5><br>\r\n            <table class=\"table\" style=\"height:550px;width:600px;overflow-y:auto;display:block;\">\r\n\r\n                    <!--Table head-->\r\n        \r\n                    \r\n        \r\n                    <thead class=\"mdb-color darken-3\" >\r\n                            <tr class=\"text-white\">\r\n                  \r\n                                    <th>Product Id</th>\r\n                                    <th>Product Name</th>\r\n                                    <th>Brand Name</th>\r\n                                    <th>Quantity</th>\r\n                                    <th>Price per Quantity </th>\r\n                                    <th>Stocked Date</th>\r\n                        \r\n                              </tr>\r\n                    </thead>\r\n                    <!--Table head-->  \r\n                    <!--Table body-->\r\n                    <tbody>\r\n                            <tr *ngFor=\"let product of details;\">\r\n                                    <td >{{product.pid}}</td>\r\n                                    <td >{{product.pname}} </td>\r\n                                    <td>{{product.brand}}</td>\r\n                                    <td>{{product.quantity}}</td>\r\n                                    <td>{{product.price}}</td>\r\n                                    <td>{{product.dateVal | date: 'd/M/y' }}</td>\r\n                                </tr>\r\n                    </tbody>\r\n                    <!--Table body-->\r\n                  </table> \r\n      </div>\r\n    \r\n    </div>\r\n    \r\n        <!-- </div> -->\r\n      <!--Table-->\r\n\r\n     \r\n\r\n      </div>\r\n                <!-- </div>\r\n              </div>\r\n            </div> -->\r\n      \r\n      </main>\r\n      "

/***/ }),

/***/ "./src/app/stockproduct/stockproduct.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/stockproduct/stockproduct.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stockproduct/stockproduct.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stockproduct/stockproduct.component.ts ***!
  \********************************************************/
/*! exports provided: StockproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockproductComponent", function() { return StockproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockproductComponent = /** @class */ (function () {
    function StockproductComponent(pro, router) {
        this.pro = pro;
        this.router = router;
        this.details = [];
    }
    StockproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        //product in stock
        this.pro.getproductCount().then(function (product) {
            product.forEach(function (element) {
                console.log(element);
                _this.pro.ViewProduct(element).then(function (obj) {
                    console.log(obj);
                    if (obj[1] != "") {
                        if (obj[3] != 0) {
                            obj[4] = obj[4] / 100;
                            _this.details.push({ "pid": obj[0], "pname": obj[1], "brand": obj[2], "quantity": obj[3], "price": obj[4], "dateVal": obj[5] });
                        }
                    }
                });
            });
        });
        //product out of stock
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //  alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    StockproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stockproduct',
            template: __webpack_require__(/*! ./stockproduct.component.html */ "./src/app/stockproduct/stockproduct.component.html"),
            styles: [__webpack_require__(/*! ./stockproduct.component.scss */ "./src/app/stockproduct/stockproduct.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StockproductComponent);
    return StockproductComponent;
}());



/***/ }),

/***/ "./src/app/transferownership/transferownership.component.html":
/*!********************************************************************!*\
  !*** ./src/app/transferownership/transferownership.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4\"></div>\r\n\r\n  <div class=\"container\" style=\"margin-top: 100px; \">\r\n\r\n          <div class=\"col-sm-4\">\r\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate >\r\n                <div>\r\n                 <h4><b>Transfer Ownership</b></h4>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"address\">Address<font color=\"red\">*</font></label>\r\n                  <div >\r\n                    <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"address\" formControlName=\"address\" placeholder=\"Enter recipient Address\">\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-sm-offset-2 col-sm-10\">\r\n                    <div *ngIf=\"angForm.controls['address'].valid \">\r\n                      <button type=\"submit\" (click)=\"transfer();\" class=\"btn btn-default\">Transfer</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n        </div>\r\n<div  class=\"col-sm-4\">\r\n     <ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\"></ngx-spinner>\r\n    \r\n\r\n\r\n</div>\r\n       \r\n     \r\n"

/***/ }),

/***/ "./src/app/transferownership/transferownership.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/transferownership/transferownership.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transferownership/transferownership.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/transferownership/transferownership.component.ts ***!
  \******************************************************************/
/*! exports provided: TransferownershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferownershipComponent", function() { return TransferownershipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransferownershipComponent = /** @class */ (function () {
    function TransferownershipComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.createForm();
    }
    TransferownershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_6__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            // alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    TransferownershipComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    TransferownershipComponent.prototype.transfer = function () {
        var _this = this;
        var meta = this;
        console.log(this.address);
        meta.spinner.show();
        meta.pro.TransferownerShip(this.address).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("operation rejected");
                _this.address = "";
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(result);
                    _this.address = "";
                    window.location.reload();
                });
            }
        });
    };
    TransferownershipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transferownership',
            template: __webpack_require__(/*! ./transferownership.component.html */ "./src/app/transferownership/transferownership.component.html"),
            styles: [__webpack_require__(/*! ./transferownership.component.scss */ "./src/app/transferownership/transferownership.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], TransferownershipComponent);
    return TransferownershipComponent;
}());



/***/ }),

/***/ "./src/app/updateproduct/updateproduct.component.html":
/*!************************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n  <div class=\"container-fluid\" style=\"margin-top: 100px; \">\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-2\" >\r\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate >\r\n                <div>\r\n                 <h5><b>Update Product Details</b></h5>\r\n                </div>\r\n                <div >\r\n                        <div class=\"col-sm-6\">\r\n                          <input type=\"text\" placeholder=\"Enter Product Id\" #proid>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"col-sm-6\">\r\n                                <input type=\"button\" class=\"btn btn-default\" value=\"View Detail\" (click)=\"show(proid.value)\">\r\n                              </div>\r\n\r\n                      </div>\r\n                      <br>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-4\" for=\"productid\">Product Id<font color=\"red\">*</font></label>\r\n                  <div class=\"col-sm-6\">\r\n                    <input type=\"number\" class=\"form-control\" min=\"0\" name=\"productid\" [(ngModel)]=\"productid\"  formControlName=\"productid\" [value]=\"productid\"  (focus)=\"check()\" (focusout)=\"checkOut()\" placeholder=\"Enter Product Id\">\r\n                  </div>\r\n                </div>\r\n               \r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-4\" for=\"quantity\">No.of.Quantity<font color=\"red\">*</font></label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"quantity\" [(ngModel)]=\"quantity\" formControlName=\"quantity\" [value]=\"quantity\"  placeholder=\"Enter Quantity\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-5\" for=\"price\">Price Per Quantity<font color=\"red\">*</font></label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"price\" [(ngModel)]=\"price\" formControlName=\"price\" [value]=\"price\" placeholder=\"Enter  Price\">\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-sm-offset-2 col-sm-10\">\r\n                     <div *ngIf=\"angForm.controls['productid'].valid\" >\r\n                          <div *ngIf=\"angForm.controls['quantity'].valid || angForm.controls['price'].valid\"> \r\n                              <!-- <div *ngIf=\"angForm.controls['price'].valid\"> -->\r\n                                  <button type=\"submit\" (click)=\"Product();\" class=\"btn btn-success\">Update</button>\r\n                              <!-- </div> -->\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n          <div class=\"col-sm-5\">\r\n                <div>\r\n                        <h5><b>Details of the Product</b></h5>\r\n                    </div>\r\n      \r\n      \r\n    <div class=\"ScrollStyle\">      <!--Table-->\r\n      <table class=\"table\">\r\n      \r\n        <!--Table head-->\r\n        <thead style=\"background-color:green\">\r\n            <tr class=\"text-white\">\r\n               \r\n                <th>Product Id</th>\r\n                <th>Product Name</th>\r\n                <th>Brand Name</th>\r\n                <th>Quantity</th>\r\n                <th>Price per Quantity </th>\r\n            </tr>\r\n        </thead>\r\n        <!--Table head-->\r\n      \r\n        <!--Table body-->\r\n        <tbody>\r\n            <tr *ngFor=\"let i of view;\">\r\n                <td >{{i.pid}}</td>\r\n                <td >{{i.pname}}</td>\r\n                <td >{{i.brand}}</td>\r\n                <td>{{i.quantity}}</td>\r\n                <td>{{i.price}}</td>\r\n            </tr>\r\n        </tbody>\r\n        <!--Table body-->\r\n      </table>\r\n      <!--Table-->\r\n      </div>\r\n          </div>\r\n          <div class=\"col-sm-5\" >\r\n              <div>\r\n                  <h5><b>Out Of Stock Product Details</b></h5>\r\n              </div>\r\n\r\n\r\n<div class=\"ScrollStyle\">\r\n<!--Table-->\r\n<table class=\"table\">\r\n\r\n  <!--Table head-->\r\n  <thead style=\"background-color:red\">\r\n      <tr class=\"text-white\">\r\n         \r\n            <th>Product Id</th>\r\n            <th>Product Name</th>\r\n            <th>Brand Name</th>\r\n            <th>Quantity</th>\r\n            <th>Price per Quantity </th>\r\n      </tr>\r\n  </thead>\r\n  <!--Table head-->\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n      <tr *ngFor=\"let update of details;\">\r\n          <td >{{update.pid}}</td>\r\n          <td >{{update.pname}}</td>\r\n          <td >{{update.brand}}</td>\r\n          <td>{{update.quantity}}</td>\r\n          <td>{{update.price}}</td>\r\n      </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n</table>\r\n<!--Table-->\r\n</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n</main>\r\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\"></ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/updateproduct/updateproduct.component.scss":
/*!************************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ScrollStyle {\n  max-height: 250px;\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/updateproduct/updateproduct.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdateproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateproductComponent", function() { return UpdateproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateproductComponent = /** @class */ (function () {
    function UpdateproductComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.details = [];
        this.view = [];
        this.id = [];
        this.createForm();
    }
    UpdateproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pro.getproductCount().then(function (product) {
            product.forEach(function (element) {
                // console.log(element);
                _this.pro.ViewProduct(element).then(function (obj) {
                    // console.log(obj);
                    if (obj[3] == 0 && obj[1] != "") {
                        obj[4] = obj[4] / 100;
                        _this.details.push({ "pid": obj[0], "pname": obj[1], "brand": obj[2], "quantity": obj[3], "price": obj[4] });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_5__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //  alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    UpdateproductComponent.prototype.show = function (proid) {
        var _this = this;
        this.view.length = 0;
        this.pro.ViewProduct(proid).then(function (obj) {
            _this.view.push({ "pid": obj[0], "pname": obj[1], "brand": obj[2], "quantity": obj[3], "price": Number(obj[4]) / 100 });
        });
    };
    UpdateproductComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            productid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    UpdateproductComponent.prototype.check = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
            }
        });
    };
    UpdateproductComponent.prototype.checkOut = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
                //swal("valid");
            }
            else {
                swal("Invalid Product Id ");
            }
        });
    };
    UpdateproductComponent.prototype.Product = function () {
        var _this = this;
        var meta = this;
        this.price = this.price * 100;
        meta.spinner.show();
        meta.pro.update_product(this.productid, this.quantity, this.price).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                swal("operation rejected");
                _this.productid = "";
                _this.quantity = "";
                _this.price = "";
                // window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    swal(result);
                    _this.productid = "";
                    _this.quantity = "";
                    _this.price = "";
                    // window.location.reload();           
                });
            }
        });
    };
    UpdateproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updateproduct',
            template: __webpack_require__(/*! ./updateproduct.component.html */ "./src/app/updateproduct/updateproduct.component.html"),
            styles: [__webpack_require__(/*! ./updateproduct.component.scss */ "./src/app/updateproduct/updateproduct.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UpdateproductComponent);
    return UpdateproductComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 100px; \">\n    <!-- <div>\n        <h5>View Customer  Order Details</h5>\n        <br>\n    </div> -->\n    <div class=\"row\">\n<div class=\"col-sm-4\">\n        <label >Start date:</label>\n        <input #datest type=\"datetime-local\"><br><br>\n        <label >End date:</label>\n        <input #dateend type=\"datetime-local\"><br><br>\n        <input type=\"submit\" class=\"btn btn-default\" (click)=\"date_view_details(datest.value,dateend.value);\">\n        <br><br><p>Total saled product ({{ totalproductsale }})</p>\n        <p>Total price ({{ totalamount }})</p><br><br>\n</div>\n<div class=\"col-sm-8\">\n<!--Table-->\n\n<table class=\"table\" style=\"height:550px;width:1000px;overflow-y:auto;display:block;\">\n\n        <!--Table head-->\n        <thead class=\"mdb-color darken-3\">\n        <tr class=\"text-white\">\n        <th>Order Id</th>\n        <th>Customer Id</th>\n        <th>Productid</th>\n        <th>product name</th>\n        <th>Quantity</th>\n        <th> Price</th>\n        <th>Date</th>\n        <th>Status</th>\n        \n        </tr>\n        </thead>\n        <!--Table head-->\n        \n        <!--Table body-->\n        <tbody>\n        <tr *ngFor=\"let order of details;\">\n        <td >{{order.oid}}</td>\n        <td >{{order.cusid}}</td>\n        <td >{{order.pid}} </td>\n        <td >{{order.pname}} </td>\n        <td>{{order.totalquantity}}</td>\n        <td>{{order.totalprice}}</td>\n        <td>{{order.dateVal | date:'d/M/y'}} </td>\n        <td>{{order.Status}}</td>\n        </tr>   \n        </tbody>\n        <!--Table body-->\n        </table>\n</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(web3Service, router) {
        this.web3Service = web3Service;
        this.router = router;
        this.details = [];
        this.sort = [];
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.web3Service.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.web3Service.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            // alert('Address Change Detected Please Refresh Page');
                            // window.location.reload();
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.web3Service.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.web3Service.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    //report table
    ViewComponent.prototype.date_view_details = function (datest, dateend) {
        var _this = this;
        var a = datest;
        var b = new Date(a);
        var c = Math.round(b);
        var d = c / 1000.0;
        var date1 = parseInt(d);
        var a = dateend;
        var b = new Date(a);
        var c = Math.round(b);
        var d = c / 1000.0;
        var date2 = parseInt(d);
        // alert( date1);
        // alert( date2);
        this.web3Service.getCustomerCount().then(function (order) {
            _this.details = [0];
            _this.totalproductsale = 0;
            _this.totalamount = 0;
            var tofprice;
            var tofquantity;
            order.forEach(function (element) {
                _this.web3Service.ViewCustomer(element).then(function (obj) {
                    var a = obj[7];
                    var b = new Date(a);
                    var c = Math.round(b);
                    var d = c / 1000.0;
                    var dt = parseInt(d);
                    // alert(dt);
                    if (date1 <= dt && date2 >= dt) {
                        if (obj[8] == 1) {
                            var f = "ORDERED";
                            var t = parseInt(_this.totalproductsale);
                            _this.totalproductsale = t + parseInt(obj[5]);
                            var g = _this.totalamount;
                            _this.totalamount = parseFloat(g) + parseFloat(obj[6]);
                            //  alert(g+obj[6]);
                        }
                        else {
                            var f = "CANCELLED";
                        }
                        if (obj[3] != "") {
                        }
                        _this.details.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "totalprice": obj[6], "totalquantity": obj[5], "dateVal": obj[7], "Status": f });
                    } //if
                    //  else {
                    //    alert("can't find records for this duration");
                    //  }
                });
            });
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/viewcus-order/viewcus-order.component.html":
/*!************************************************************!*\
  !*** ./src/app/viewcus-order/viewcus-order.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n        <!-- <div class=\"container\" style=\"margin-top: 100px; \">\r\n      \r\n            <div class=\"row col text-center\">\r\n      \r\n      \r\n                <div class=\"col-sm-12\" >\r\n                    <div>\r\n                        <h5><b>View Total Purchase History</b></h5>\r\n                        <br>\r\n                    </div> -->\r\n      \r\n      \r\n      <div class=\"container\" style=\"margin-top: 100px; \">\r\n            <div>\r\n                    <h5><b>View Total Purchase History</b></h5>\r\n                    <br>\r\n                </div>\r\n      <!-- <div class=\"ScrollStyle\"> -->\r\n      <!--Table-->\r\n      <table class=\"table\" style=\"background:white;height:550px;width:1230px;overflow-y:auto;display:block;\">\r\n\r\n            <!--Table head-->\r\n            <thead class=\"mdb-color pink\">\r\n                  \r\n      \r\n                            <tr class=\"text-white\">\r\n                                    <th>Order Id</th>\r\n                                    <th>Customer Id</th>\r\n                                    <th>Product Id</th>\r\n                                    <th>Product Name</th>\r\n                                    <th> Quantity</th>\r\n                                    <th>Total Price (in ether)</th>\r\n                                    <th>Date</th>\r\n                                    <th>Status</th>\r\n                                </tr>\r\n    \r\n            </thead>\r\n            <!--Table head-->  \r\n            <!--Table body-->\r\n            <tbody>\r\n                    <tr *ngFor=\"let order of details;\"  [ngSwitch]=\"order.status\">\r\n                            <td >{{order.oid}}</td>\r\n                            <td >{{order.cusid}}</td>\r\n                            <td >{{order.pid}} </td>\r\n                            <td >{{order.pname}} </td>\r\n                            <td>{{order.quantity}}</td>\r\n                            <td>{{order.price}}</td>\r\n                            <td>{{order.dateVal | date:'d/M/y'}}</td>\r\n                            <td *ngSwitchCase=\"true\" style=\"color:green\"><b>ORDERED</b></td>\r\n                            <td *ngSwitchCase=\"false\" style=\"color:red\"><b>CANCELLED</b></td>\r\n                        </tr>   \r\n            </tbody>\r\n            <!--Table body-->\r\n          </table>\r\n        <!-- </div> -->\r\n      <!--Table-->\r\n      \r\n                <!-- </div>\r\n              </div>\r\n            </div> -->\r\n        </div>\r\n      </main>\r\n      \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/viewcus-order/viewcus-order.component.scss":
/*!************************************************************!*\
  !*** ./src/app/viewcus-order/viewcus-order.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-color pink {\n  background-color: #e91e63; }\n"

/***/ }),

/***/ "./src/app/viewcus-order/viewcus-order.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/viewcus-order/viewcus-order.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewcusOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcusOrderComponent", function() { return ViewcusOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewcusOrderComponent = /** @class */ (function () {
    function ViewcusOrderComponent(web3Service, router) {
        this.web3Service = web3Service;
        this.router = router;
        this.details = [];
    }
    ViewcusOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.web3Service.getCustomerCount().then(function (order) {
            order.forEach(function (element) {
                _this.web3Service.ViewCustomer(element).then(function (obj) {
                    if (obj[8] == 1) {
                        var a = true;
                    }
                    else {
                        var a = false;
                    }
                    if (obj[3] != "") {
                        _this.details.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "quantity": obj[5], "price": obj[6], "dateVal": obj[7], "status": a });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.web3Service.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.web3Service.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            // alert('Address Change Detected Please Refresh Page');
                            // window.location.reload();
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.web3Service.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.web3Service.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    ViewcusOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewcus-order',
            template: __webpack_require__(/*! ./viewcus-order.component.html */ "./src/app/viewcus-order/viewcus-order.component.html"),
            styles: [__webpack_require__(/*! ./viewcus-order.component.scss */ "./src/app/viewcus-order/viewcus-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewcusOrderComponent);
    return ViewcusOrderComponent;
}());



/***/ }),

/***/ "./src/app/withdraw/withdraw.component.html":
/*!**************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4\"></div>\r\n\r\n  <div class=\"container\" style=\"margin-top: 100px; \">\r\n\r\n          <div class=\"col-sm-6\">\r\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\r\n                  <div>\r\n                   <!-- <h5><b>You are Allowed to Withdraw a Maximum of {{total-stake}} ether</b></h5> -->\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-2\" for=\"amount\">Amount<font color=\"red\">*</font></label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input type=\"number\" class=\"form-control\"  min=\"0\" name=\"amount\"  [(ngModel)]=\"amount\" formControlName=\"amount\"  placeholder=\"Enter Amount in ether\">\r\n                    </div>\r\n                  </div>\r\n        \r\n        \r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-sm-offset-2 col-sm-10\">\r\n                      <div *ngIf=\"angForm.controls['amount'].valid \">\r\n                        <button type=\"submit\" (click)=\"Withdraw()\" class=\"btn btn-default\">WithDraw</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n          </div>\r\n        </div>\r\n<div  class=\"col-sm-4\">\r\n     <ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\nloadingText=\"Loading...\"\r\ntype=\"ball-scale-multiple\"></ngx-spinner>\r\n    \r\n\r\n\r\n</div>\r\n       \r\n     \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      "

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.scss":
/*!**************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.ts":
/*!************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.ts ***!
  \************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.createForm();
        //   this.show_balance();
    }
    WithdrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //  alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    WithdrawComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    // show_balance(){
    //     let meta=this;
    //     meta.pro.getbalance().then(total_amt =>this.total = total_amt);
    //     meta.pro.check_balance().then(balance =>this.stake = balance );
    // }
    WithdrawComponent.prototype.Withdraw = function () {
        var _this = this;
        var meta = this;
        meta.spinner.show();
        console.log(this.balance);
        meta.pro.WithDraw(this.amount).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("operation rejected");
                _this.amount = "";
                window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()(result);
                    _this.amount = "";
                    // window.location.reload();           
                });
            }
        });
    };
    WithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.scss */ "./src/app/withdraw/withdraw.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], WithdrawComponent);
    return WithdrawComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Inventoryv2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map